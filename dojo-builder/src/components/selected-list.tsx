"use client";

import { DOMAIN_META } from "@/lib/personas.generated";
import { selectedPersonas, useDojo } from "./dojo-state";
import { Portrait } from "./portrait";
import { CloseIcon } from "./icons";

export function SelectedList() {
  const { state, dispatch, personas } = useDojo();
  const selected = selectedPersonas(state, personas);

  if (selected.length === 0) {
    return (
      <div className="mt-[26px] rounded-[8px] border border-dashed border-dashed px-5 py-7 text-center">
        <p className="font-serif text-[13px] italic text-subtle">
          Pick your first expert to begin.
        </p>
      </div>
    );
  }

  return (
    <ul className="mt-[26px] flex flex-col gap-2">
      {selected.map((p) => (
        <li
          key={p.slug}
          className="flex items-center gap-3 rounded-[8px] border border-divider bg-input px-[10px] py-2"
        >
          <Portrait slug={p.slug} size={36} className="shrink-0 rounded-[4px]" />
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="truncate font-serif text-[14px] font-medium tracking-[-0.1px] text-ink">
              {p.name}
            </span>
            <span className="text-[10px] uppercase tracking-[1px] text-subtle">
              {DOMAIN_META[p.domain].label}
            </span>
          </div>
          <button
            type="button"
            aria-label={`Remove ${p.name}`}
            onClick={() => dispatch({ type: "removeSelect", slug: p.slug })}
            className="shrink-0 p-1 text-subtle hover:text-ink"
          >
            <CloseIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}
