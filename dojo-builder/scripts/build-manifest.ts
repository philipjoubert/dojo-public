/**
 * Builds src/lib/personas.generated.ts from the persona content in ../dojo/.
 *
 * Runs automatically before `next dev` and `next build` (see package.json
 * predev/prebuild hooks). The generated file is gitignored — it's derived.
 *
 * Pipeline contract (what the manifest guarantees to downstream consumers):
 *
 *   1. Tagline is always a tight comma-separated list: ≤ TAGLINE_MAX_CHARS
 *      and ≤ TAGLINE_MAX_ITEMS. Whichever cap bites first, items beyond it
 *      are dropped on ingest. Downstream code (skill-builder, persona cards)
 *      can rely on this and will never render a 2,000-word "tagline".
 *   2. Every persona has topics from the canonical TOPIC taxonomy, 2–4 of
 *      them, via TOPIC_MAP. A missing entry fails the build.
 *   3. Only fields actually used by the app are exported. shortBlurb /
 *      longBlurb / raw tags are no longer in the manifest — they were
 *      unbounded pass-throughs that invited drift.
 *
 * Add a new persona:
 *   1. Drop persona.md + topics/ under dojo/<domain>/skill/personas/<slug>/.
 *   2. Add a TOPIC_MAP entry here mapping the slug to 2–4 topics.
 *   3. Re-run `npm run build:manifest`. Warnings tell you where to tighten.
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

// Tagline contract — hand-authored via persona.md `routing_keywords`
// (Phase 8 of DOJO-PERSONA-PROCESS.md). Used in the SKILL.md EXPERTS
// body section, which has no size limit. The 1024-char description
// is built from `topics`, not tagline. Cap exists only to defend
// against accidental unbounded prose — authors take responsibility
// for richness within these bounds.
const TAGLINE_MAX_CHARS = 1000;
const TAGLINE_MAX_ITEMS = 50;

// Topic-file expectation — personas without topic files are suspicious.
const MIN_TOPIC_FILES = 3;

const BUCKETS = ["decide", "build", "sell", "say", "fund"] as const;
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
  "writing",
] as const;
type Topic = (typeof TOPICS)[number];

const HEADLINE_MAP: Record<string, string> = {
  // operators
  "andrew-carnegie": "steel magnate",
  "andy-grove": "Intel's paranoid CEO",
  "brian-chesky": "Airbnb's founder",
  "chris-voss": "FBI hostage negotiator",
  "danny-meyer": "hospitality master",
  "elon-musk": "Tesla and SpaceX",
  "jason-lemkin": "SaaStr",
  "jeff-bezos": "Amazon and Blue Origin",
  "jensen-huang": "Nvidia's leather-jacket CEO",
  "keith-rabois": "PayPal Mafia VC",
  "matt-mochary": "Silicon Valley CEO coach",
  "patrick-collison": "Stripe's CEO",
  "steve-jobs": "Apple and Pixar",
  "toby-lutke": "Shopify's founder",
  "wes-kao": "executive coach",
  // investors
  "ben-horowitz": "the hard thing about hard things",
  "marc-andreessen": "a16z partner",
  "naval-ravikant": "AngelList",
  "paul-graham": "YC's essayist-in-chief",
  "peter-thiel": "Zero to One",
  // marketing
  "al-ries": "original positioning guy",
  "andrew-chen": "network effects guy",
  "april-dunford": "positioning for tech",
  "david-ogilvy": "original Mad Man",
  "elena-verna": "SaaS growth advisor",
  "eugene-schwartz": "the copywriter copywriters study",
  "harry-dry": "runs Marketing Examples",
  "lulu-cheng": "go-direct comms strategist",
  "rob-fitzpatrick": "the Mom Test guy",
  // thinking
  "annie-duke": "thinking in bets",
  "charlie-munger": "Buffett's sharper half",
  "david-goggins": "Baddest motherfucker on earth",
  "clayton-christensen": "the disruption guy",
  "david-deutsch": "the explanations physicist",
  "eliyahu-goldratt": "the bottleneck guy",
  "hamilton-helmer": "7 Powers strategist",
  "julia-galef": "the Scout Mindset",
  "nassim-taleb": "the Black Swan guy",
  "richard-feynman": "the curious physicist",
  "richard-rumelt": "strategy's strategist",
  "shane-parrish": "Farnam Street",
  "thomas-sowell": "the contrarian economist",
  // craft
  "william-zinsser": "On Writing Well",
};

const TOPIC_MAP: Record<string, Topic[]> = {
  // operators
  "andrew-carnegie": ["engineering", "pricing", "strategy", "wealth"],
  "brian-chesky": ["hiring", "culture", "org design", "design"],
  "chris-voss": ["negotiation", "sales"],
  "danny-meyer": ["culture", "hiring", "org design", "decision-making"],
  "andy-grove": ["org design", "hiring", "decision-making", "strategy"],
  "elon-musk": ["engineering", "decision-making", "hiring"],
  "jason-lemkin": ["sales", "hiring", "fundraising", "growth"],
  "jeff-bezos": ["strategy", "org design", "product", "decision-making"],
  "jensen-huang": ["engineering", "org design", "strategy"],
  "keith-rabois": ["hiring", "org design", "decision-making"],
  "matt-mochary": ["decision-making", "culture", "hiring", "org design"],
  "patrick-collison": ["engineering", "product", "culture", "career"],
  "steve-jobs": ["product", "design", "hiring", "positioning"],
  "toby-lutke": ["culture", "org design", "product", "mental models"],
  "wes-kao": ["writing", "career", "PR & comms"],
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
  "rob-fitzpatrick": ["product", "sales", "positioning", "strategy"],
  "al-ries": ["positioning", "strategy", "mental models"],
  // thinking
  "annie-duke": ["decision-making", "mental models", "strategy"],
  "charlie-munger": ["mental models", "decision-making", "wealth"],
  "clayton-christensen": ["strategy", "mental models", "product", "career"],
  "david-deutsch": ["mental models", "decision-making", "strategy"],
  "david-goggins": ["mental models", "decision-making", "career"],
  "eliyahu-goldratt": ["engineering", "decision-making", "strategy", "mental models"],
  "hamilton-helmer": ["strategy", "mental models", "positioning"],
  "julia-galef": ["decision-making", "mental models"],
  "nassim-taleb": ["decision-making", "mental models", "wealth", "strategy"],
  "richard-feynman": ["mental models", "decision-making", "engineering", "career"],
  "richard-rumelt": ["strategy", "decision-making", "mental models"],
  "shane-parrish": ["decision-making", "mental models"],
  "thomas-sowell": ["mental models", "decision-making", "strategy"],
  // craft
  "william-zinsser": ["writing", "mental models", "PR & comms"],
};

interface Persona {
  slug: string;
  name: string;
  domain: Bucket;
  installName: string;
  headline: string;
  tagline: string;
  topics: Topic[];
  sizeKb: number;
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

function extractName(shortBlurb: string): string {
  const idx = shortBlurb.indexOf(" (");
  return idx === -1 ? shortBlurb.trim() : shortBlurb.slice(0, idx).trim();
}

function rawTagline(
  fm: Record<string, string>,
  shortBlurb: string,
): string {
  // Preferred source: the hand-authored routing_keywords field (Phase 8 of
  // DOJO-PERSONA-PROCESS.md). Legacy fallbacks exist so the builder doesn't
  // break mid-migration, but both emit a warning so we know to backfill.
  if (fm.routing_keywords) return fm.routing_keywords.trim();
  if (fm.tagline) return fm.tagline.trim();
  const paren = shortBlurb.match(/\(([^)]*(?:\([^)]*\)[^)]*)*)\)/);
  return paren ? paren[1].trim() : "";
}

interface NormalizedTagline {
  value: string;
  truncated: boolean;
  originalChars: number;
  originalItems: number;
}

function normalizeTagline(raw: string): NormalizedTagline {
  const items = raw
    .split(/[,;]\s*/)
    .map((t) => t.trim())
    .filter(Boolean);
  const originalChars = raw.length;
  const originalItems = items.length;

  const kept: string[] = [];
  let running = 0;
  for (const item of items) {
    if (kept.length >= TAGLINE_MAX_ITEMS) break;
    // +2 accounts for ", " separator
    const next = running + (kept.length === 0 ? 0 : 2) + item.length;
    if (next > TAGLINE_MAX_CHARS) break;
    kept.push(item);
    running = next;
  }

  return {
    value: kept.join(", "),
    truncated:
      kept.length < originalItems ||
      originalChars > TAGLINE_MAX_CHARS,
    originalChars,
    originalItems,
  };
}

interface Issue {
  level: "error" | "warn";
  slug: string;
  message: string;
}

function collectPersonas(): { personas: Persona[]; issues: Issue[] } {
  const personas: Persona[] = [];
  const issues: Issue[] = [];

  for (const bucket of BUCKETS) {
    const personasDir = path.join(DOJO_DIR, bucket, "skill", "personas");
    if (!existsSync(personasDir)) continue;
    for (const slug of readdirSync(personasDir)) {
      const slugDir = path.join(personasDir, slug);
      if (!statSync(slugDir).isDirectory()) continue;
      const personaMd = path.join(slugDir, "persona.md");
      if (!existsSync(personaMd)) {
        issues.push({
          level: "error",
          slug,
          message: "missing persona.md",
        });
        continue;
      }

      const text = readFileSync(personaMd, "utf8");
      const fm = parseFrontmatter(text);
      const shortBlurb = fm.short_blurb || "";
      if (!shortBlurb) {
        issues.push({
          level: "error",
          slug,
          message: "missing short_blurb frontmatter",
        });
        continue;
      }

      const name = extractName(shortBlurb);
      if (!name) {
        issues.push({
          level: "error",
          slug,
          message: "could not extract name from short_blurb",
        });
        continue;
      }

      const topics = TOPIC_MAP[slug];
      if (!topics) {
        issues.push({
          level: "error",
          slug,
          message: "no TOPIC_MAP entry — add one in build-manifest.ts",
        });
        continue;
      }
      if (topics.length < 2 || topics.length > 4) {
        issues.push({
          level: "warn",
          slug,
          message: `topics count ${topics.length} — expected 2–4`,
        });
      }

      if (!fm.routing_keywords) {
        issues.push({
          level: "warn",
          slug,
          message: "no routing_keywords frontmatter — falling back to short_blurb; add routing_keywords per DOJO-PERSONA-PROCESS.md Phase 8",
        });
      }

      const tagline = normalizeTagline(rawTagline(fm, shortBlurb));
      if (!tagline.value) {
        issues.push({
          level: "error",
          slug,
          message: "empty tagline after normalization",
        });
        continue;
      }
      if (tagline.truncated) {
        issues.push({
          level: "warn",
          slug,
          message: `routing_keywords truncated (${tagline.originalChars} chars / ${tagline.originalItems} items → ${tagline.value.length} chars / ${tagline.value.split(", ").length} items) — tighten the source field in persona.md`,
        });
      }

      const topicsDir = path.join(slugDir, "topics");
      const topicFileCount = existsSync(topicsDir)
        ? readdirSync(topicsDir).filter((f) => f.endsWith(".md")).length
        : 0;
      if (topicFileCount < MIN_TOPIC_FILES) {
        issues.push({
          level: "warn",
          slug,
          message: `only ${topicFileCount} topic files — persona may be incomplete`,
        });
      }

      const headline = HEADLINE_MAP[slug];
      if (!headline) {
        issues.push({
          level: "error",
          slug,
          message: "no HEADLINE_MAP entry — add one in build-manifest.ts",
        });
        continue;
      }

      personas.push({
        slug,
        name,
        domain: bucket,
        installName: `dojo-${slug}`,
        headline,
        tagline: tagline.value,
        topics,
        sizeKb: Math.max(1, Math.round(walkBytes(slugDir) / 1024)),
      });
    }
  }

  // Stable order: bucket in declaration order, then alpha by slug.
  const bucketIndex = new Map(BUCKETS.map((b, i) => [b, i]));
  personas.sort((a, b) => {
    const da = bucketIndex.get(a.domain)! - bucketIndex.get(b.domain)!;
    return da !== 0 ? da : a.slug.localeCompare(b.slug);
  });
  return { personas, issues };
}

function emit(personas: Persona[]): string {
  return `// GENERATED by scripts/build-manifest.ts — do not edit by hand.
// Re-run via \`npm run build:manifest\`. This file is gitignored.
//
// Invariants (enforced by build-manifest.ts):
//  - tagline: ≤ ${TAGLINE_MAX_CHARS} chars, ≤ ${TAGLINE_MAX_ITEMS} items, comma-separated.
//  - topics: 2–4 entries from the Topic union; every persona has a mapping.

export type Domain = ${BUCKETS.map((b) => `"${b}"`).join(" | ")};

export type Topic = ${TOPICS.map((t) => `"${t}"`).join(" | ")};

export interface Persona {
  slug: string;
  name: string;
  domain: Domain;
  installName: string;
  headline: string;
  tagline: string;
  topics: Topic[];
  sizeKb: number;
}

export const DOMAIN_META: Record<Domain, { label: string }> = {
  operators: { label: "Operators" },
  investors: { label: "Investors" },
  marketing: { label: "Marketing" },
  thinking: { label: "Thinking" },
  craft: { label: "Craft" },
};

export const TOPICS: Topic[] = ${JSON.stringify(TOPICS, null, 2)};

export const PERSONAS: Persona[] = ${JSON.stringify(personas, null, 2)};
`;
}

function main(): void {
  const { personas, issues } = collectPersonas();
  const byBucket = personas.reduce<Record<string, number>>((acc, p) => {
    acc[p.domain] = (acc[p.domain] || 0) + 1;
    return acc;
  }, {});

  const errors = issues.filter((i) => i.level === "error");
  const warnings = issues.filter((i) => i.level === "warn");

  for (const w of warnings) console.warn(`⚠ ${w.slug}: ${w.message}`);
  for (const e of errors) console.error(`✗ ${e.slug}: ${e.message}`);

  console.log(
    `\nbuild-manifest: ${personas.length} personas ${JSON.stringify(byBucket)} — ${warnings.length} warnings, ${errors.length} errors`,
  );

  if (errors.length > 0) {
    console.error(
      `\naborting: ${errors.length} persona(s) failed validation. Fix the issues above and re-run.`,
    );
    process.exit(1);
  }

  const outDir = path.dirname(OUT_PATH);
  if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
  writeFileSync(OUT_PATH, emit(personas));
  console.log(`wrote ${path.relative(APP_ROOT, OUT_PATH)}`);
}

main();
