/**
 * Builds one installable Vercel `npx skills` package per persona.
 *
 * Source of truth stays under ../dojo/<domain>/skill/personas/<slug>/.
 * Generated output is committed under ../skills/dojo-<slug>/ so consumers can
 * install granular skills directly from GitHub without running this script.
 */
import {
  cpSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
  statSync,
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
const SKILLS_DIR = path.join(REPO_ROOT, "skills");
const TEMPLATE_PATH = path.join(APP_ROOT, "templates", "skill-template.md.tmpl");
const MARKETPLACE_PATH = path.join(REPO_ROOT, ".claude-plugin", "marketplace.json");

const DOMAIN_SKILL_PATHS = [
  "./dojo/decide/skill",
  "./dojo/build/skill",
  "./dojo/sell/skill",
  "./dojo/say/skill",
  "./dojo/fund/skill",
];

function personaSourceDir(p: Persona): string {
  return path.join(DOJO_DIR, p.domain, "skill", "personas", p.slug);
}

function stripFrontmatter(markdown: string): string {
  if (!markdown.startsWith("---\n")) return markdown;
  const end = markdown.indexOf("\n---\n", 4);
  if (end === -1) return markdown;
  return markdown.slice(end + 5).replace(/^\s*\n+/, "");
}

function cleanGeneratedSkills(): void {
  if (!existsSync(SKILLS_DIR)) return;
  for (const entry of readdirSync(SKILLS_DIR)) {
    if (!entry.startsWith("dojo-")) continue;
    const full = path.join(SKILLS_DIR, entry);
    if (statSync(full).isDirectory()) rmSync(full, { recursive: true, force: true });
  }
}

function copyPersonaFiles(persona: Persona, outDir: string): void {
  const src = personaSourceDir(persona);
  const target = path.join(outDir, "personas", persona.slug);
  mkdirSync(target, { recursive: true });

  const personaMdRaw = readFileSync(path.join(src, "persona.md"), "utf8");
  writeFileSync(path.join(target, "persona.md"), stripFrontmatter(personaMdRaw));

  const topicsSrc = path.join(src, "topics");
  if (!existsSync(topicsSrc)) return;

  const topicsTarget = path.join(target, "topics");
  mkdirSync(topicsTarget, { recursive: true });
  for (const entry of readdirSync(topicsSrc, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".md")) continue;
    cpSync(path.join(topicsSrc, entry.name), path.join(topicsTarget, entry.name));
  }
}

function writeMarketplace(personas: Persona[]): void {
  const granularPaths = personas.map((p) => `./skills/${p.installName}`);
  const manifest = {
    metadata: {
      pluginRoot: "./",
    },
    plugins: [
      {
        name: "dojo",
        source: "./",
        description: "Founder-mode expert panels packaged as agent skills.",
        skills: [...DOMAIN_SKILL_PATHS, ...granularPaths],
      },
    ],
  };

  mkdirSync(path.dirname(MARKETPLACE_PATH), { recursive: true });
  writeFileSync(MARKETPLACE_PATH, `${JSON.stringify(manifest, null, 2)}\n`);
}

function main(): void {
  const template = readFileSync(TEMPLATE_PATH, "utf8");
  cleanGeneratedSkills();
  mkdirSync(SKILLS_DIR, { recursive: true });

  for (const persona of PERSONAS) {
    const outDir = path.join(SKILLS_DIR, persona.installName);
    mkdirSync(outDir, { recursive: true });
    const skillMd = renderSkillMd({
      personas: [persona],
      skillName: persona.slug,
      template,
    });
    writeFileSync(path.join(outDir, "SKILL.md"), skillMd);
    copyPersonaFiles(persona, outDir);
  }

  writeMarketplace(PERSONAS);
  console.log(`build-granular-skills: wrote ${PERSONAS.length} skills to ${path.relative(REPO_ROOT, SKILLS_DIR)}`);
  console.log(`updated ${path.relative(REPO_ROOT, MARKETPLACE_PATH)}`);
}

main();
