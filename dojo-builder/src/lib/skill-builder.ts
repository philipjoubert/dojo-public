import { BUCKETS, DOMAIN_META, type Domain, type Persona } from "./personas.generated";

export interface RenderInput {
  personas: Persona[];
  skillName: string;
  template: string;
  /**
   * When true (single-persona inline install), flatten path references
   * like `personas/<slug>/persona.md` to `./persona.md` in the rendered
   * SKILL.md so the install bundle has SKILL.md sitting next to the
   * persona content with no namespacing layer.
   *
   * Multi-persona installs leave this false: each persona must keep its
   * `personas/<slug>/` namespace to avoid collisions inside one zip.
   */
  flat?: boolean;
}

const DOMAIN_ORDER: Domain[] = BUCKETS;

const DOMAIN_HEADING: Record<Domain, string> = Object.fromEntries(
  BUCKETS.map((b) => [b, DOMAIN_META[b].label]),
) as Record<Domain, string>;

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
  flat = false,
}: RenderInput): string {
  if (personas.length === 0) {
    throw new Error("renderSkillMd: at least one persona required");
  }
  if (flat && personas.length !== 1) {
    throw new Error("renderSkillMd: flat=true requires exactly one persona");
  }

  const sorted = sortPersonas(personas);
  const primary = shortName(sorted[0].name);
  const fullName = skillName ? `dojo-${skillName}` : "dojo";

  const description = yamlEscape(
    clampDescription(`${descriptionLead(sorted)} ${loadedLine(sorted)}`),
  );

  let rendered = template
    .replaceAll("{{skill_name}}", fullName)
    .replaceAll("{{description}}", description)
    .replaceAll("{{named_examples}}", namedExamples(sorted))
    .replaceAll("{{primary_expert_header}}", primary)
    .replaceAll("{{available_experts}}", availableExperts(sorted));

  if (flat) {
    // Single-persona inline install — flatten all persona paths so the
    // SKILL.md sits next to persona.md / topics/ in one flat dir.
    const slug = sorted[0].slug;
    rendered = rendered
      // resolved (slug-substituted) paths
      .replaceAll(`personas/${slug}/persona.md`, "./persona.md")
      .replaceAll(`personas/${slug}/topics/`, "./topics/")
      .replaceAll(`personas/${slug}/`, "./")
      // generic placeholder paths (template uses `<slug>` literally as doc)
      .replaceAll("personas/<slug>/persona.md", "./persona.md")
      .replaceAll("personas/<slug>/topics/", "./topics/")
      .replaceAll("personas/<slug>/", "./")
      // prose mentions of the personas/ directory
      .replaceAll("the `personas/` directory", "this skill's root")
      .replaceAll("Each directory under `personas/`", "This skill")
      .replaceAll("under `personas/`", "in this skill");
  }

  return rendered;
}
