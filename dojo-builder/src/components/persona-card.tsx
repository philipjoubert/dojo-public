"use client";

import { DOMAIN_META, type Persona } from "@/lib/personas.generated";
import { Portrait } from "./portrait";
import { CheckIcon } from "./icons";

export interface PersonaCardProps {
  persona: Persona;
  isSelected: boolean;
  isAtCapacity: boolean;
  onToggle: () => void;
}

export function PersonaCard({
  persona,
  isSelected,
  isAtCapacity,
  onToggle,
}: PersonaCardProps) {
  const disabled = !isSelected && isAtCapacity;

  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={disabled}
      aria-pressed={isSelected}
      aria-label={`${persona.name} — ${isSelected ? "selected" : "select"}`}
      className={[
        "relative flex flex-col rounded-[10px] border px-3 py-4 text-left shadow-card",
        "transition-[border-color,transform,box-shadow] duration-200",
        isSelected
          ? "border-ink bg-card-selected shadow-card-selected"
          : "border-border bg-card hover:border-hairline-dark",
        disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer",
      ].join(" ")}
    >
      {/* Selection dot */}
      <span
        className={[
          "absolute top-[10px] right-[10px] flex h-5 w-5 items-center justify-center rounded-full border transition-colors",
          isSelected
            ? "border-ink bg-ink text-main"
            : "border-dashed-soft bg-transparent",
        ].join(" ")}
        aria-hidden
      >
        {isSelected && <CheckIcon />}
      </span>

      <Portrait slug={persona.slug} size={96} className="rounded-[6px]" />

      <h3 className="mt-[12px] font-serif text-[17px] font-medium leading-[1.15] tracking-[-0.2px] text-ink">
        {persona.name}
      </h3>

      <div className="mt-1 text-[10px] uppercase tracking-[1.2px] text-muted">
        {DOMAIN_META[persona.domain].label}
      </div>

      <div className="mt-[10px] flex flex-wrap gap-[4px]">
        {persona.topics.map((t) => (
          <span
            key={t}
            className="rounded-[4px] bg-chip px-[6px] py-[2px] text-[9px] tracking-[0.2px] text-secondary"
          >
            {t}
          </span>
        ))}
      </div>
    </button>
  );
}
