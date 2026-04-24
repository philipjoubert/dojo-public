import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import JSZip from "jszip";
import { z } from "zod";
import { PERSONAS, type Persona } from "@/lib/personas.generated";
import { renderSkillMd } from "@/lib/skill-builder";

// Node runtime — filesystem + JSZip need it.
export const runtime = "nodejs";

// Paths are resolved from the deployed function's cwd at request time.
// Turbopack can't statically trace these — file inclusion is handled by
// outputFileTracingIncludes in next.config.ts.
const APP_ROOT = path.resolve(/*turbopackIgnore: true*/ process.cwd());
const REPO_ROOT = path.resolve(APP_ROOT, "..");
const DOJO_DIR = path.join(REPO_ROOT, "dojo");
const TEMPLATE_PATH = path.join(APP_ROOT, "templates", "skill-template.md.tmpl");

const BuildRequest = z.object({
  selected: z.array(z.string()).min(1).max(8),
  skillName: z
    .string()
    .max(40)
    .regex(/^[a-z0-9-]*$/, "skillName must be lowercase alphanumeric + hyphens"),
});

function fullSkillName(skillName: string): string {
  return skillName ? `dojo-${skillName}` : "dojo";
}

function findPersona(slug: string): Persona | undefined {
  return PERSONAS.find((p) => p.slug === slug);
}

function personaSourceDir(p: Persona): string {
  return path.join(DOJO_DIR, p.domain, "skill", "personas", p.slug);
}

async function addPersonaFiles(
  zip: JSZip,
  persona: Persona,
): Promise<void> {
  const src = personaSourceDir(persona);
  const target = `personas/${persona.slug}`;
  const folder = zip.folder(target);
  if (!folder) throw new Error(`zip.folder failed for ${target}`);

  // persona.md at the root
  const personaMd = await readFile(path.join(src, "persona.md"));
  folder.file("persona.md", personaMd);

  // topics/*.md — shallow, no nesting expected
  const topicsDir = path.join(src, "topics");
  try {
    const entries = await readdir(topicsDir, { withFileTypes: true });
    const topics = folder.folder("topics");
    if (!topics) throw new Error(`zip.folder failed for ${target}/topics`);
    for (const entry of entries) {
      if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
      const content = await readFile(path.join(topicsDir, entry.name));
      topics.file(entry.name, content);
    }
  } catch (err) {
    // Personas without a topics/ dir are allowed — skip silently.
    if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
  }
}

export async function POST(req: Request): Promise<Response> {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "invalid JSON body" }, { status: 400 });
  }

  const parsed = BuildRequest.safeParse(body);
  if (!parsed.success) {
    return Response.json(
      { error: "validation failed", issues: parsed.error.issues },
      { status: 400 },
    );
  }
  const { selected, skillName } = parsed.data;

  // Resolve each slug — reject on first unknown.
  const personas: Persona[] = [];
  for (const slug of selected) {
    const p = findPersona(slug);
    if (!p) {
      return Response.json(
        { error: `unknown persona slug: ${slug}` },
        { status: 400 },
      );
    }
    personas.push(p);
  }

  // Make sure dojo/ is actually reachable — fail loud at the boundary.
  try {
    await stat(DOJO_DIR);
  } catch {
    return Response.json(
      { error: `dojo content not found at ${DOJO_DIR}` },
      { status: 500 },
    );
  }

  const template = await readFile(TEMPLATE_PATH, "utf8");
  const skillMd = renderSkillMd({ personas, skillName, template });

  const zip = new JSZip();
  zip.file("SKILL.md", skillMd);
  for (const p of personas) {
    await addPersonaFiles(zip, p);
  }

  const buf = await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: { level: 6 },
  });

  return new Response(buf as BodyInit, {
    status: 200,
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${fullSkillName(skillName)}.zip"`,
      "Content-Length": String(buf.length),
      "Cache-Control": "no-store",
    },
  });
}
