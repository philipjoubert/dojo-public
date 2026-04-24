import type { Persona } from "./personas.generated";

export interface RenderInput {
  personas: Persona[];
  skillName: string;
  template: string;
}

/**
 * Extract the primary identifier used for the "Named:" example line and the
 * Multiple-experts "Structure:" header. This is the last word of the display
 * name — "Jeff Bezos" → "Bezos", "Jensen Huang" → "Huang". Works for all
 * current personas; single-word names fall back to themselves.
 */
function shortName(fullName: string): string {
  const parts = fullName.trim().split(/\s+/);
  return parts[parts.length - 1];
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
  return (
    `Custom panel of ${count} ${noun} — a hand-picked roster. ` +
    `Use when user says 'ask dojo', names any loaded expert, ` +
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

function clampDescription(text: string): string {
  if (text.length <= DESCRIPTION_MAX) return text;
  const cutAt = text.lastIndexOf(";", DESCRIPTION_MAX - 2);
  const end = cutAt > 0 ? cutAt : DESCRIPTION_MAX - 1;
  return `${text.slice(0, end).trimEnd()}…`;
}

function availableExperts(personas: Persona[]): string {
  return personas.map((p) => `- ${p.longBlurb}`).join("\n\n");
}

export function renderSkillMd({
  personas,
  skillName,
  template,
}: RenderInput): string {
  if (personas.length === 0) {
    throw new Error("renderSkillMd: at least one persona required");
  }
  const primary = shortName(personas[0].name);

  const fullName = skillName ? `dojo-${skillName}` : "dojo";

  const description = clampDescription(
    `${descriptionLead(personas)} ${loadedLine(personas)}`,
  );

  return template
    .replaceAll("{{skill_name}}", fullName)
    .replaceAll("{{panel_title}}", "Custom")
    .replaceAll("{{description}}", description)
    .replaceAll("{{named_examples}}", namedExamples(personas))
    .replaceAll("{{primary_expert_header}}", primary)
    .replaceAll("{{available_experts}}", availableExperts(personas));
}
