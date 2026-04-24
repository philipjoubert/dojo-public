import type { Domain, Persona } from "./personas.generated";

export interface RenderInput {
  personas: Persona[];
  skillName: string;
  template: string;
}

const DOMAIN_ORDER: Domain[] = [
  "operators",
  "investors",
  "marketing",
  "thinking",
];

const DOMAIN_HEADING: Record<Domain, string> = {
  operators: "Operators",
  investors: "Investors",
  marketing: "Marketing",
  thinking: "Thinking",
};

function shortName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  return parts[parts.length - 1];
}

function sortPersonas(personas: Persona[]): Persona[] {
  const domainIndex = new Map(DOMAIN_ORDER.map((d, i) => [d, i]));
  return [...personas].sort((a, b) => {
    const da = domainIndex.get(a.domain)! - domainIndex.get(b.domain)!;
    return da !== 0 ? da : a.slug.localeCompare(b.slug);
  });
}

function namedExamples(personas: Persona[]): string {
  const firstTwo = personas.slice(0, 2).map((p) => shortName(p.name));
  if (firstTwo.length === 0) return '"ask dojo"';
  if (firstTwo.length === 1) {
    return `"ask ${firstTwo[0]}", "what would ${firstTwo[0]} say"`;
  }
  const [a, b] = firstTwo;
  return `"ask ${a}", "what would ${b} say", "ask dojo with ${a} and ${b}"`;
}

function descriptionLead(personas: Persona[]): string {
  const count = personas.length;
  const noun = count === 1 ? "expert" : "experts";
  const names = personas.map((p) => shortName(p.name)).join(" / ");
  return (
    `Custom panel of ${count} ${noun} — a hand-picked roster. ` +
    `Use when user says 'ask dojo', names ${names}, ` +
    `or asks about a domain they cover.`
  );
}

function loadedLine(personas: Persona[]): string {
  const joined = personas
    .map((p) => `${p.name} (${p.topics.join(", ")})`)
    .join("; ");
  return `Loaded: ${joined}.`;
}

const DESCRIPTION_MAX = 1024;

// Escape for a YAML double-quoted scalar. Backslash first so we don't
// double-escape, then the quote character.
function yamlEscape(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function clampDescription(text: string): string {
  if (text.length <= DESCRIPTION_MAX) return text;
  const cutAt = text.lastIndexOf(";", DESCRIPTION_MAX - 2);
  const end = cutAt > 0 ? cutAt : DESCRIPTION_MAX - 1;
  return `${text.slice(0, end).trimEnd()}…`;
}

function availableExperts(personas: Persona[]): string {
  const byDomain = new Map<Domain, Persona[]>();
  for (const p of personas) {
    const bucket = byDomain.get(p.domain) ?? [];
    bucket.push(p);
    byDomain.set(p.domain, bucket);
  }

  const sections: string[] = [];
  for (const domain of DOMAIN_ORDER) {
    const group = byDomain.get(domain);
    if (!group?.length) continue;
    const lines = group.map(
      (p) =>
        `- **${p.name}** (\`personas/${p.slug}/\`) — ${p.tagline}`,
    );
    sections.push(`**${DOMAIN_HEADING[domain]}**\n${lines.join("\n")}`);
  }
  return sections.join("\n\n");
}

export function renderSkillMd({
  personas,
  skillName,
  template,
}: RenderInput): string {
  if (personas.length === 0) {
    throw new Error("renderSkillMd: at least one persona required");
  }

  const sorted = sortPersonas(personas);
  const primary = shortName(sorted[0].name);
  const fullName = skillName ? `dojo-${skillName}` : "dojo";

  const description = yamlEscape(
    clampDescription(`${descriptionLead(sorted)} ${loadedLine(sorted)}`),
  );

  return template
    .replaceAll("{{skill_name}}", fullName)
    .replaceAll("{{panel_title}}", "Custom")
    .replaceAll("{{description}}", description)
    .replaceAll("{{named_examples}}", namedExamples(sorted))
    .replaceAll("{{primary_expert_header}}", primary)
    .replaceAll("{{available_experts}}", availableExperts(sorted));
}
