import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(APP_ROOT, "..");
const DOJO_PERSONAS_DIR = path.join(REPO_ROOT, "dojo", "personas");
const SOURCES_DIR = path.join(REPO_ROOT, "sources");

type Level = "error" | "warn";

interface Finding {
  level: Level;
  slug: string;
  message: string;
}

interface PersonaSpec {
  schema_version?: number;
  slug?: string;
  expert_name?: string;
  persona_type?: string;
  status?: string;
  coverage_policy?: Record<string, unknown>;
  source_targets?: Array<Record<string, unknown>>;
  latest_work?: Record<string, unknown>;
  source_evidence?: Array<Record<string, unknown>>;
  framework_registry?: Record<string, unknown>;
  frameworks?: Array<Record<string, unknown>>;
  voice_plan?: Record<string, unknown>;
  voice_samples?: Array<Record<string, unknown>>;
  proof_policy?: Record<string, unknown>;
  strong_rule_policy?: Record<string, unknown>;
  validation?: Record<string, unknown>;
}

interface LlmReviewResult {
  status?: unknown;
  findings?: unknown;
  checks?: unknown;
}

const REQUIRED_PERSONA_HEADINGS = [
  "DOMAIN",
  "CORE BELIEFS",
  "REASONING MOVES",
  "RULES",
  "VOICE SAMPLES",
  "TOPIC ROUTING",
];

const REQUIRED_TOPIC_FRONTMATTER_KEYS = [
  "triggers",
  "use_when",
  "fails_when",
  "related",
];

const ALLOWED_PERSONA_TYPES = new Set([
  "active_operator",
  "historical_author",
  "framework_author",
  "portfolio_creator",
  "public_investor_writer",
]);

const ALLOWED_FRAMEWORK_OWNERS = new Set([
  "expert",
  "borrowed",
  "borrowed-adapted",
  "shared",
  "context",
]);

function usage(): never {
  console.error("usage: npm run validate:persona -- <slug> | npm run validate:personas");
  process.exit(2);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function asBoolean(value: unknown): boolean {
  return value === true;
}

function asNumber(value: unknown): number | null {
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

function normalize(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function manifestContains(manifest: string, ref: string): boolean {
  if (!ref) return false;
  return normalize(manifest).includes(normalize(ref));
}

function parseSpec(filePath: string): PersonaSpec | null {
  try {
    const parsed = YAML.parse(readFileSync(filePath, "utf8"));
    return isRecord(parsed) ? (parsed as PersonaSpec) : null;
  } catch {
    return null;
  }
}

function parseJson(filePath: string): LlmReviewResult | null {
  try {
    const parsed = JSON.parse(readFileSync(filePath, "utf8"));
    return isRecord(parsed) ? (parsed as LlmReviewResult) : null;
  } catch {
    return null;
  }
}

function extractSection(text: string, heading: string): string {
  const lines = text.split("\n");
  const headingPattern = new RegExp(`^##\\s+${heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:\\s|$)`);
  const startIndex = lines.findIndex((line) => headingPattern.test(line));
  if (startIndex === -1) return "";

  const endIndex = lines.findIndex((line, index) => index > startIndex && /^##\s+/.test(line));
  return lines.slice(startIndex + 1, endIndex === -1 ? undefined : endIndex).join("\n");
}

function resolvePersonaRelativePath(slugDir: string, filePath: string): string {
  if (path.isAbsolute(filePath)) return filePath;
  if (filePath.includes("/") || filePath.includes("\\")) return path.join(REPO_ROOT, filePath);
  return path.join(slugDir, filePath);
}

function parseTopicFrontmatter(text: string): Set<string> {
  const match = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) return new Set();
  const keys = new Set<string>();
  for (const line of match[1].split("\n")) {
    const key = line.match(/^([a-z_][a-z0-9_]*):/i)?.[1];
    if (key) keys.add(key);
  }
  return keys;
}

function listPersonaSlugs(): string[] {
  return readdirSync(DOJO_PERSONAS_DIR)
    .filter((slug) => !slug.startsWith("_"))
    .filter((slug) => {
      const full = path.join(DOJO_PERSONAS_DIR, slug);
      return statSync(full).isDirectory();
    })
    .sort();
}

function topicFiles(slugDir: string): string[] {
  const topicsDir = path.join(slugDir, "topics");
  if (!existsSync(topicsDir)) return [];
  return readdirSync(topicsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => path.join("topics", file))
    .sort();
}

function add(findings: Finding[], level: Level, slug: string, message: string): void {
  findings.push({ level, slug, message });
}

function validateManifestRefs(
  findings: Finding[],
  slug: string,
  manifest: string,
  refs: unknown[],
  label: string,
): void {
  for (const ref of refs) {
    const value = asString(ref);
    if (!value) {
      add(findings, "error", slug, `${label} has an empty source_ref`);
    } else if (!manifestContains(manifest, value)) {
      add(findings, "error", slug, `${label} source_ref not found in MANIFEST: ${value}`);
    }
  }
}

function validateRules(findings: Finding[], slug: string, text: string, spec: PersonaSpec): void {
  const policy = isRecord(spec.strong_rule_policy) ? spec.strong_rule_policy : {};
  const requireWhy = asBoolean(policy.require_why);
  const requireException = asBoolean(policy.require_exception_or_risk_handling);
  if (!requireWhy && !requireException) return;

  const rules = extractSection(text, "RULES");
  if (!rules.trim()) {
    add(findings, "error", slug, "missing RULES section body");
    return;
  }

  const chunks = rules
    .split(/\n(?=- \*\*)/g)
    .map((chunk) => chunk.trim())
    .filter((chunk) => chunk.startsWith("- **"));

  if (chunks.length === 0) {
    add(findings, "error", slug, "RULES section has no bullet rules");
  }

  chunks.forEach((chunk, index) => {
    if (requireWhy && !/\*Why:\*/.test(chunk)) {
      add(findings, "error", slug, `rule ${index + 1} is missing *Why:*`);
    }
    if (requireException && !/(\*Exception:\*|\*Risk handling:\*|risk|when this backfires)/i.test(chunk)) {
      add(findings, "error", slug, `rule ${index + 1} is missing exception/risk handling`);
    }
  });
}

function validateProofHeuristics(
  findings: Finding[],
  slug: string,
  text: string,
  spec: PersonaSpec,
  label = "persona.md",
): void {
  const policy = isRecord(spec.proof_policy) ? spec.proof_policy : {};
  if (policy.invented_numbers_allowed !== false) return;

  if (/\*\*Result:\*\*/.test(text)) {
    add(findings, "warn", slug, `${label} uses **Result:**; use **Illustrative result:** or source-backed proof labeling`);
  }

  const suspicious = [
    /most of our clients (generate|save|achieve)/i,
    /helped \d+ (clients|customers|companies)/i,
    /we found an average of \$?\d/i,
    /(clients|customers|companies|users|teams).{0,80}\d+(?:\.\d+)?% (higher|increase|decrease|improvement)/i,
  ];

  for (const pattern of suspicious) {
    if (pattern.test(text) && !/\[real number\]|\$X|verified|if you have proof|if your .* data supports|if true/i.test(text)) {
      add(findings, "warn", slug, `${label} has possible proof-shaped claim without visible placeholder/proof guard: ${pattern}`);
    }
  }
}

function validateLlmReview(findings: Finding[], slug: string, slugDir: string, spec: PersonaSpec): void {
  const validation = isRecord(spec.validation) ? spec.validation : {};
  const llmReview = isRecord(validation.llm_review) ? validation.llm_review : {};
  if (llmReview.required !== true) return;

  const prompt = asString(llmReview.prompt);
  if (!prompt) {
    add(findings, "error", slug, "llm_review.prompt is required when llm_review.required is true");
  } else if (!existsSync(path.join(REPO_ROOT, prompt))) {
    add(findings, "error", slug, `llm_review prompt file not found: ${prompt}`);
  }

  const recordedStatus = asString(llmReview.status);
  if (recordedStatus !== "pass" && recordedStatus !== "passed") {
    add(findings, "error", slug, "llm_review.status must be passed before shipping a strict persona");
  }

  const resultFile = asString(llmReview.result_file);
  if (!resultFile) {
    add(findings, "error", slug, "llm_review.result_file is required when llm_review.required is true");
    return;
  }

  const resultPath = resolvePersonaRelativePath(slugDir, resultFile);
  if (!existsSync(resultPath)) {
    add(findings, "error", slug, `llm_review result file not found: ${resultFile}`);
    return;
  }

  const review = parseJson(resultPath);
  if (!review) {
    add(findings, "error", slug, `llm_review result file could not be parsed as JSON: ${resultFile}`);
    return;
  }

  if (asString(review.status) !== "pass") {
    add(findings, "error", slug, `llm_review result status must be pass: ${resultFile}`);
  }

  const checks = isRecord(review.checks) ? review.checks : {};
  if (Object.keys(checks).length === 0) {
    add(findings, "error", slug, `llm_review result has no checks: ${resultFile}`);
  }
  for (const [check, value] of Object.entries(checks)) {
    if (value !== true) {
      add(findings, "error", slug, `llm_review check failed: ${check}`);
    }
  }

  if (!Array.isArray(review.findings)) {
    add(findings, "error", slug, `llm_review result findings must be an array: ${resultFile}`);
    return;
  }
  review.findings.forEach((finding, index) => {
    const item = isRecord(finding) ? finding : {};
    const severity = asString(item.severity);
    if (severity === "high" || severity === "medium") {
      add(findings, "error", slug, `llm_review ${severity} finding ${index + 1}: ${asString(item.issue) || "missing issue text"}`);
    } else if (severity === "low") {
      add(findings, "warn", slug, `llm_review low finding ${index + 1}: ${asString(item.issue) || "missing issue text"}`);
    }
  });
}

function validatePersona(slug: string): Finding[] {
  const findings: Finding[] = [];
  const slugDir = path.join(DOJO_PERSONAS_DIR, slug);
  const personaPath = path.join(slugDir, "persona.md");
  const specPath = path.join(slugDir, "PERSONA_SPEC.yaml");
  const manifestPath = path.join(SOURCES_DIR, slug, "MANIFEST.md");

  if (!existsSync(slugDir)) {
    add(findings, "error", slug, "persona directory not found");
    return findings;
  }

  if (!existsSync(personaPath)) {
    add(findings, "error", slug, "missing persona.md");
    return findings;
  }

  if (!existsSync(specPath)) {
    add(findings, "warn", slug, "missing PERSONA_SPEC.yaml; treated as legacy persona");
    return findings;
  }

  const spec = parseSpec(specPath);
  if (!spec) {
    add(findings, "error", slug, "PERSONA_SPEC.yaml could not be parsed");
    return findings;
  }

  const strict = spec.status === "strict";
  if (!strict) {
    add(findings, "warn", slug, "PERSONA_SPEC.yaml present but status is not strict");
  }

  if (spec.schema_version !== 1) {
    add(findings, "error", slug, "PERSONA_SPEC.yaml schema_version must be 1");
  }
  if (spec.slug !== slug) {
    add(findings, "error", slug, `PERSONA_SPEC.yaml slug must match directory (${slug})`);
  }
  if (!asString(spec.expert_name)) {
    add(findings, "error", slug, "PERSONA_SPEC.yaml missing expert_name");
  }
  if (!ALLOWED_PERSONA_TYPES.has(asString(spec.persona_type))) {
    add(findings, "error", slug, `persona_type must be one of: ${Array.from(ALLOWED_PERSONA_TYPES).join(", ")}`);
  }

  const personaText = readFileSync(personaPath, "utf8");
  for (const heading of REQUIRED_PERSONA_HEADINGS) {
    if (!new RegExp(`^##\\s+${heading}`, "m").test(personaText)) {
      add(findings, "error", slug, `persona.md missing ## ${heading}`);
    }
  }

  const manifest = existsSync(manifestPath) ? readFileSync(manifestPath, "utf8") : "";
  if (!manifest) {
    add(findings, "error", slug, "missing sources/<slug>/MANIFEST.md");
  }

  const targets = Array.isArray(spec.source_targets) ? spec.source_targets : [];
  const evidence = Array.isArray(spec.source_evidence) ? spec.source_evidence : [];
  if (targets.length === 0) {
    add(findings, "error", slug, "source_targets must list the required corpus coverage");
  }
  if (evidence.length === 0) {
    add(findings, "error", slug, "source_evidence must list the sources used to satisfy the targets");
  }

  for (const target of targets) {
    const type = asString(target.type);
    const minimum = asNumber(target.minimum) ?? 0;
    const count = evidence.filter((item) => asString(item.type) === type).length;
    if (type && count < minimum) {
      add(findings, "error", slug, `source target "${type}" requires ${minimum}, found ${count}`);
    }
  }

  validateManifestRefs(
    findings,
    slug,
    manifest,
    evidence.map((item) => item.source_ref),
    "source_evidence",
  );

  const policy = isRecord(spec.coverage_policy) ? spec.coverage_policy : {};
  const latest = isRecord(spec.latest_work) ? spec.latest_work : {};
  if (asBoolean(policy.latest_work_required)) {
    if (!asString(latest.checked_at)) add(findings, "error", slug, "latest_work.checked_at is required");
    if (!asString(latest.title)) add(findings, "error", slug, "latest_work.title is required");
    if (!asBoolean(latest.included)) add(findings, "error", slug, "latest_work.included must be true");
    validateManifestRefs(findings, slug, manifest, [latest.source_ref], "latest_work");
  }

  const frameworks = Array.isArray(spec.frameworks) ? spec.frameworks : [];
  if (frameworks.length === 0) {
    add(findings, "error", slug, "frameworks must register every shipped topic/framework");
  }

  const allTopicFiles = topicFiles(slugDir);
  const registeredTopicFiles = new Set<string>();
  for (const framework of frameworks) {
    const name = asString(framework.name);
    const topicFile = asString(framework.topic_file);
    const owner = asString(framework.owner);
    if (!name) add(findings, "error", slug, "framework entry missing name");
    if (!topicFile) {
      add(findings, "error", slug, `framework "${name || "(unnamed)"}" missing topic_file`);
    } else {
      registeredTopicFiles.add(topicFile);
      if (!existsSync(path.join(slugDir, topicFile))) {
        add(findings, "error", slug, `framework "${name}" points to missing ${topicFile}`);
      }
    }
    if (!ALLOWED_FRAMEWORK_OWNERS.has(owner)) {
      add(findings, "error", slug, `framework "${name}" has invalid owner "${owner}"`);
    }
    if ((owner === "borrowed" || owner === "borrowed-adapted" || owner === "shared") && !asString(framework.originator)) {
      add(findings, "error", slug, `framework "${name}" must name originator`);
    }
    if (framework.attribution_required === true && framework.attribution_present !== true) {
      add(findings, "error", slug, `framework "${name}" requires attribution but attribution_present is not true`);
    }
    const refs = Array.isArray(framework.source_refs) ? framework.source_refs : [];
    if (refs.length === 0) {
      add(findings, "error", slug, `framework "${name}" missing source_refs`);
    } else {
      validateManifestRefs(findings, slug, manifest, refs, `framework "${name}"`);
    }
  }

  for (const topicFile of allTopicFiles) {
    const full = path.join(slugDir, topicFile);
    const keys = parseTopicFrontmatter(readFileSync(full, "utf8"));
    if (keys.size === 0) {
      add(findings, "error", slug, `${topicFile} missing frontmatter`);
    }
    for (const key of REQUIRED_TOPIC_FRONTMATTER_KEYS) {
      if (!keys.has(key)) add(findings, "error", slug, `${topicFile} missing frontmatter key: ${key}`);
    }
    if (!registeredTopicFiles.has(topicFile)) {
      add(findings, "error", slug, `${topicFile} is not registered in PERSONA_SPEC.yaml frameworks`);
    }
    validateProofHeuristics(findings, slug, readFileSync(full, "utf8"), spec, topicFile);
  }

  const voicePlan = isRecord(spec.voice_plan) ? spec.voice_plan : {};
  const voiceSamples = Array.isArray(spec.voice_samples) ? spec.voice_samples : [];
  const minimumSamples = asNumber(voicePlan.minimum_samples) ?? 0;
  if (voiceSamples.length < minimumSamples) {
    add(findings, "error", slug, `voice_samples requires ${minimumSamples}, found ${voiceSamples.length}`);
  }
  if (asBoolean(voicePlan.require_source_diversity)) {
    const sourceTypes = new Set(voiceSamples.map((sample) => asString(sample.source_type)).filter(Boolean));
    if (sourceTypes.size < 2) {
      add(findings, "error", slug, "voice_samples must include at least two source_type values");
    }
  }
  validateManifestRefs(
    findings,
    slug,
    manifest,
    voiceSamples.map((sample) => sample.source_ref),
    "voice_samples",
  );
  voiceSamples.forEach((sample, index) => {
    if (sample.quote_safe !== true) {
      add(findings, "warn", slug, `voice sample ${index + 1} is not marked quote_safe: true`);
    }
  });

  const personaVoiceCount = (personaText.match(/^### Sample\s+/gm) ?? []).length;
  if (minimumSamples > 0 && personaVoiceCount < minimumSamples) {
    add(findings, "error", slug, `persona.md has ${personaVoiceCount} voice samples, expected at least ${minimumSamples}`);
  }

  validateRules(findings, slug, personaText, spec);
  validateProofHeuristics(findings, slug, personaText, spec);

  validateLlmReview(findings, slug, slugDir, spec);

  return findings;
}

function main(): void {
  const args = process.argv.slice(2);
  const all = args.includes("--all");
  const slug = args.find((arg) => !arg.startsWith("-"));
  if (!all && !slug) usage();

  const slugs = all ? listPersonaSlugs() : [slug!];
  const findings = slugs.flatMap(validatePersona);

  for (const finding of findings) {
    console.log(`${finding.level.toUpperCase()} ${finding.slug}: ${finding.message}`);
  }

  const errors = findings.filter((finding) => finding.level === "error").length;
  const warnings = findings.filter((finding) => finding.level === "warn").length;
  console.log(`validate-persona: ${slugs.length} persona(s), ${errors} error(s), ${warnings} warning(s)`);

  if (errors > 0) process.exit(1);
}

main();
