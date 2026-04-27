"use client";

import { DOMAIN_META, type Persona } from "@/lib/personas.generated";
import { Portrait } from "./portrait";
import { CheckIcon } from "./icons";

export interface PersonaCardProps {
  persona: Persona;
  isSelected: boolean;
  onToggle: () => void;
}

export function PersonaCard({
  persona,
  isSelected,
  onToggle,
}: PersonaCardProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isSelected}
      aria-label={`${persona.name} — ${isSelected ? "selected" : "select"}`}
      className={[
        "relative flex gap-3 rounded-[10px] border p-3 text-left shadow-card",
        "sm:flex-col sm:gap-0 sm:px-3 sm:py-4",
        "transition-[border-color,transform,box-shadow] duration-200",
        isSelected
          ? "border-ink bg-card-selected shadow-card-selected"
          : "border-border bg-card hover:border-hairline-dark",
        "cursor-pointer",
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

      <Portrait
        slug={persona.slug}
        size={96}
        className="h-20 w-20 shrink-0 rounded-[6px] sm:h-24 sm:w-24"
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <h3 className="pr-7 font-serif text-[16px] font-medium leading-[1.15] tracking-[-0.2px] text-ink sm:mt-[12px] sm:pr-0 sm:text-[17px]">
          {persona.name}
        </h3>

        <div className="mt-[2px] text-[10px] uppercase tracking-[1.2px] text-muted sm:mt-1">
          {DOMAIN_META[persona.domain].label}
        </div>

        <div className="mt-[6px] text-[12px] italic leading-[1.35] text-secondary sm:mt-[8px] sm:text-[13px]">
          {persona.headline}
        </div>

        <div className="mt-[8px] flex flex-wrap gap-[4px] sm:mt-[10px]">
          {persona.topics.map((t) => (
            <span
              key={t}
              className="rounded-[4px] bg-chip px-[6px] py-[2px] text-[9px] tracking-[0.2px] text-secondary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
