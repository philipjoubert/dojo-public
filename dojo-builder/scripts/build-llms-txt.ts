/**
 * Generates dojo-builder/public/llms.txt from the persona manifest.
 *
 * Output is the llms.txt format proposed by Answer.AI: a Markdown file at
 * the site root that LLMs can fetch instead of parsing the React-rendered
 * HTML. It tells an LLM (1) what dojo is, (2) the exact install commands
 * for both flows, (3) the available skills with their slugs and topics —
 * enough for the LLM to recommend a specific `npx skills add` invocation
 * without scraping the page.
 *
 * Runs after build-manifest.ts in npm run build:manifest. The generated
 * file is gitignored — derived from PERSONAS.
 */
import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PERSONAS, DOMAIN_META, type Domain } from "../src/lib/personas.generated";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(APP_ROOT, "public");
const OUT_PATH = path.join(PUBLIC_DIR, "llms.txt");

const PACKAGE_SOURCE = "philipjoubert/dojo-public";
const SITE_URL = "https://superdojo.xyz";

function lines(...xs: string[]): string {
  return xs.join("\n");
}

function buildLlmsTxt(): string {
  const byDomain = new Map<Domain, typeof PERSONAS>();
  for (const p of PERSONAS) {
    const list = byDomain.get(p.domain) ?? [];
    list.push(p);
    byDomain.set(p.domain, list);
  }

  const sections: string[] = [];

  sections.push(
    lines(
      "# Dojo — panel of expert advisors as skills for Claude / ChatGPT / Cursor",
      "",
      "> Pick experts (Jeff Bezos, Elon Musk, April Dunford, ...) and install them as",
      "> skills for your AI coding agent. Each persona is built from their books, talks,",
      "> and interviews — structured into core beliefs, reasoning moves, frameworks,",
      "> and voice samples. Not transcript search; they think and speak like the source.",
    ),
  );

  sections.push(
    lines(
      "## Install via CLI (recommended for Claude Code, Cursor, Codex)",
      "",
      "To install one or more dojo skills, run:",
      "",
      "```",
      `npx --yes skills add ${PACKAGE_SOURCE} \\`,
      "  --global \\",
      "  --copy \\",
      "  --skill dojo-<persona-slug>",
      "```",
      "",
      "Add multiple `--skill` flags to install several at once. Add",
      "`--agent claude-code` to target a specific runtime.",
    ),
  );

  sections.push(
    lines(
      "## Install via zip (Claude.ai web, ChatGPT)",
      "",
      `Visit ${SITE_URL}, select up to 8 personas, click "Download skill",`,
      "and drop the resulting zip into:",
      "",
      "- claude.ai/customize/skills",
      "- chatgpt.com/skills",
      "- ~/.claude/skills/  (for Claude Code)",
    ),
  );

  sections.push("## Available skills");

  const domainOrder: Domain[] = ["operators", "investors", "marketing", "thinking"];
  for (const domain of domainOrder) {
    const list = byDomain.get(domain);
    if (!list?.length) continue;
    const out: string[] = [`### ${DOMAIN_META[domain].label}`, ""];
    for (const p of list) {
      out.push(`- \`${p.installName}\` — ${p.name}: ${p.tagline}`);
    }
    sections.push(lines(...out));
  }

  sections.push(
    lines(
      "## Notes for LLMs",
      "",
      `- Source repo: https://github.com/${PACKAGE_SOURCE}`,
      "- Each skill ships as `personas/<slug>/persona.md` plus `topics/*.md`.",
      "- The CLI install uses the open agent-skills protocol; both",
      "  Claude Code and Cursor read from `~/.claude/skills/` after install.",
    ),
  );

  return sections.join("\n\n") + "\n";
}

function main(): void {
  if (!existsSync(PUBLIC_DIR)) mkdirSync(PUBLIC_DIR, { recursive: true });
  const body = buildLlmsTxt();
  writeFileSync(OUT_PATH, body);
  const lineCount = body.split("\n").length;
  console.log(
    `build-llms-txt: wrote ${OUT_PATH} — ${PERSONAS.length} personas, ${lineCount} lines`,
  );
}

main();
