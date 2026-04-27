/**
 * Generates per-persona SKILL.md inline at dojo/personas/<slug>/SKILL.md
 * and writes the marketplace.json entries that point at them.
 *
 * This is the single-persona install path. The CLI install
 * (`npx skills add ... --skill dojo-<slug>`) resolves through
 * marketplace.json to ./dojo/personas/<slug>/, copies the dir contents,
 * and the user gets SKILL.md + persona.md + topics/ — flat layout, no
 * namespace prefix.
 *
 * The multi-persona zip download path lives in api/build/route.ts and
 * uses a different (namespaced) layout.
 */
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PERSONAS, type Persona } from "../src/lib/personas.generated";
import { renderSkillMd } from "../src/lib/skill-builder";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(APP_ROOT, "..");
const DOJO_DIR = path.join(REPO_ROOT, "dojo");
const TEMPLATE_PATH = path.join(APP_ROOT, "templates", "skill-template.md.tmpl");
const MARKETPLACE_PATH = path.join(REPO_ROOT, ".claude-plugin", "marketplace.json");

function personaDir(p: Persona): string {
  return path.join(DOJO_DIR, "personas", p.slug);
}

function writeMarketplace(personas: Persona[]): void {
  const skills = personas.map((p) => `./dojo/personas/${p.slug}`);
  const manifest = {
    metadata: { pluginRoot: "./" },
    plugins: [
      {
        name: "dojo",
        source: "./",
        description: "Founder-mode expert panels packaged as agent skills.",
        skills,
      },
    ],
  };
  mkdirSync(path.dirname(MARKETPLACE_PATH), { recursive: true });
  writeFileSync(MARKETPLACE_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
}

function main(): void {
  const template = readFileSync(TEMPLATE_PATH, "utf8");

  for (const persona of PERSONAS) {
    const dir = personaDir(persona);
    if (!existsSync(dir)) {
      console.error(`error: ${dir} not found — skipping ${persona.slug}`);
      continue;
    }
    const skillMd = renderSkillMd({
      personas: [persona],
      skillName: persona.slug,
      template,
      flat: true,
    });
    writeFileSync(path.join(dir, "SKILL.md"), skillMd);
  }

  writeMarketplace(PERSONAS);
  console.log(`build-granular-skills: wrote ${PERSONAS.length} inline SKILL.md files`);
  console.log(`updated ${path.relative(REPO_ROOT, MARKETPLACE_PATH)}`);
}

main();
