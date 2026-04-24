/**
 * Builds src/lib/personas.generated.ts from the persona content in ../dojo/.
 *
 * Runs automatically before `next dev` and `next build` (see package.json
 * predev/prebuild hooks). The generated file is gitignored — it's derived.
 */
import {
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
  existsSync,
  mkdirSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(APP_ROOT, "..");
const DOJO_DIR = path.join(REPO_ROOT, "dojo");
const OUT_PATH = path.join(APP_ROOT, "src", "lib", "personas.generated.ts");

const BUCKETS = ["operators", "investors", "marketing", "thinking"] as const;
type Bucket = (typeof BUCKETS)[number];

const TOPICS = [
  "hiring",
  "culture",
  "org design",
  "negotiation",
  "sales",
  "pricing",
  "positioning",
  "copywriting",
  "PR & comms",
  "fundraising",
  "product",
  "design",
  "growth",
  "marketplaces",
  "engineering",
  "strategy",
  "career",
  "wealth",
  "decision-making",
  "mental models",
] as const;
type Topic = (typeof TOPICS)[number];

const TOPIC_MAP: Record<string, Topic[]> = {
  // operators
  "andrew-carnegie": ["engineering", "pricing", "strategy", "wealth"],
  "brian-chesky": ["hiring", "culture", "org design", "design"],
  "chris-voss": ["negotiation", "sales"],
  "elon-musk": ["engineering", "decision-making", "hiring"],
  "jason-lemkin": ["sales", "hiring", "fundraising", "growth"],
  "jeff-bezos": ["strategy", "org design", "product", "decision-making"],
  "jensen-huang": ["engineering", "org design", "strategy"],
  "keith-rabois": ["hiring", "org design", "decision-making"],
  "patrick-collison": ["engineering", "product", "culture", "career"],
  "steve-jobs": ["product", "design", "hiring", "positioning"],
  "toby-lutke": ["culture", "org design", "product", "mental models"],
  // investors
  "ben-horowitz": ["culture", "hiring", "org design", "decision-making"],
  "marc-andreessen": ["strategy", "fundraising", "hiring", "sales"],
  "naval-ravikant": ["wealth", "career", "decision-making", "mental models"],
  "paul-graham": ["strategy", "fundraising", "growth", "product"],
  "peter-thiel": ["strategy", "decision-making", "sales", "mental models"],
  // marketing
  "andrew-chen": ["growth", "marketplaces", "product", "strategy"],
  "april-dunford": ["positioning", "sales", "strategy"],
  "david-ogilvy": ["copywriting", "positioning", "PR & comms", "design"],
  "elena-verna": ["growth", "product", "pricing", "sales"],
  "eugene-schwartz": ["copywriting", "positioning"],
  "harry-dry": ["copywriting", "positioning", "design"],
  "lulu-cheng": ["PR & comms", "positioning", "career"],
  // thinking
  "charlie-munger": ["mental models", "decision-making", "wealth"],
  "eliyahu-goldratt": ["engineering", "decision-making", "strategy", "mental models"],
  "hamilton-helmer": ["strategy", "mental models", "positioning"],
  "julia-galef": ["decision-making", "mental models"],
  "shane-parrish": ["decision-making", "mental models"],
  "thomas-sowell": ["mental models", "decision-making", "strategy"],
};

interface Persona {
  slug: string;
  name: string;
  domain: Bucket;
  tagline: string;
  tags: string[];
  topics: Topic[];
  sizeKb: number;
  shortBlurb: string;
  longBlurb: string;
}

function parseFrontmatter(text: string): Record<string, string> {
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) return {};
  const body = m[1];
  const out: Record<string, string> = {};
  const lines = body.split("\n");
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    const scalar = line.match(/^([a-z_][a-z0-9_]*):\s*(.*)$/i);
    if (!scalar) {
      i++;
      continue;
    }
    const key = scalar[1];
    let value = scalar[2];
    // Block literal: `|-` or `|`
    if (value === "|-" || value === "|") {
      const collected: string[] = [];
      i++;
      while (i < lines.length && /^(  |\t)/.test(lines[i])) {
        collected.push(lines[i].replace(/^(  |\t)/, ""));
        i++;
      }
      out[key] = collected.join("\n");
      continue;
    }
    // Quoted scalar — strip surrounding quotes + unescape \" and \\
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      const q = value[0];
      value = value.slice(1, -1);
      if (q === '"') {
        value = value.replace(/\\"/g, '"').replace(/\\\\/g, "\\");
      }
    }
    out[key] = value;
    i++;
  }
  return out;
}

function walkBytes(dir: string): number {
  let total = 0;
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      total += walkBytes(full);
    } else if (entry.isFile()) {
      total += statSync(full).size;
    }
  }
  return total;
}

function extractTags(shortBlurb: string): string[] {
  const paren = shortBlurb.match(/\(([^)]*(?:\([^)]*\)[^)]*)*)\)/);
  if (!paren) return [];
  return paren[1]
    .split(/[,;]\s*/)
    .map((t) => t.trim().toLowerCase())
    .filter(Boolean);
}

function extractName(shortBlurb: string): string {
  const idx = shortBlurb.indexOf(" (");
  return idx === -1 ? shortBlurb.trim() : shortBlurb.slice(0, idx).trim();
}

function extractTagline(
  frontmatter: Record<string, string>,
  shortBlurb: string,
): string {
  if (frontmatter.tagline) return frontmatter.tagline;
  const paren = shortBlurb.match(/\(([^)]*(?:\([^)]*\)[^)]*)*)\)/);
  return paren ? paren[1] : "";
}

function collectPersonas(): Persona[] {
  const personas: Persona[] = [];
  for (const bucket of BUCKETS) {
    const personasDir = path.join(DOJO_DIR, bucket, "skill", "personas");
    if (!existsSync(personasDir)) continue;
    for (const slug of readdirSync(personasDir)) {
      const slugDir = path.join(personasDir, slug);
      if (!statSync(slugDir).isDirectory()) continue;
      const personaMd = path.join(slugDir, "persona.md");
      if (!existsSync(personaMd)) continue;

      const text = readFileSync(personaMd, "utf8");
      const fm = parseFrontmatter(text);
      const shortBlurb = fm.short_blurb || "";
      const longBlurb = fm.long_blurb || "";
      if (!shortBlurb || !longBlurb) {
        console.warn(`warn: ${slug}: missing short_blurb or long_blurb`);
        continue;
      }

      const topics = TOPIC_MAP[slug];
      if (!topics) {
        console.warn(`warn: ${slug}: no entry in TOPIC_MAP — add one in build-manifest.ts`);
      }

      personas.push({
        slug,
        name: extractName(shortBlurb),
        domain: bucket,
        tagline: extractTagline(fm, shortBlurb),
        tags: extractTags(shortBlurb),
        topics: topics ?? [],
        sizeKb: Math.max(1, Math.round(walkBytes(slugDir) / 1024)),
        shortBlurb,
        longBlurb,
      });
    }
  }
  // Stable order: by bucket (in BUCKETS declaration order), then alpha by slug.
  const bucketIndex = new Map(BUCKETS.map((b, i) => [b, i]));
  personas.sort((a, b) => {
    const da = bucketIndex.get(a.domain)! - bucketIndex.get(b.domain)!;
    return da !== 0 ? da : a.slug.localeCompare(b.slug);
  });
  return personas;
}

function emit(personas: Persona[]): string {
  const header = `// GENERATED by scripts/build-manifest.ts — do not edit by hand.
// Re-run via \`npm run build:manifest\`. This file is gitignored.

export type Domain = ${BUCKETS.map((b) => `"${b}"`).join(" | ")};

export type Topic = ${TOPICS.map((t) => `"${t}"`).join(" | ")};

export interface Persona {
  slug: string;
  name: string;
  domain: Domain;
  tagline: string;
  tags: string[];
  topics: Topic[];
  sizeKb: number;
  shortBlurb: string;
  longBlurb: string;
}

export const DOMAIN_META: Record<Domain, { label: string }> = {
  operators: { label: "Operators" },
  investors: { label: "Investors" },
  marketing: { label: "Marketing" },
  thinking: { label: "Thinking" },
};

export const TOPICS: Topic[] = ${JSON.stringify(TOPICS, null, 2)};

export const PERSONAS: Persona[] = ${JSON.stringify(personas, null, 2)};
`;
  return header;
}

function main(): void {
  const personas = collectPersonas();
  const byBucket = personas.reduce<Record<string, number>>((acc, p) => {
    acc[p.domain] = (acc[p.domain] || 0) + 1;
    return acc;
  }, {});
  console.log(`build-manifest: ${personas.length} personas`, byBucket);

  const outDir = path.dirname(OUT_PATH);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  writeFileSync(OUT_PATH, emit(personas));
  console.log(`wrote ${path.relative(APP_ROOT, OUT_PATH)}`);
}

main();
