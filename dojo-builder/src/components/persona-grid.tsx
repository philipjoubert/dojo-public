"use client";

import { filteredPersonas, MAX_SLOTS, useDojo } from "./dojo-state";
import { PersonaCard } from "./persona-card";

export function PersonaGrid() {
  const { state, dispatch, personas } = useDojo();
  const list = filteredPersonas(state, personas);
  const atCapacity = state.selected.size >= MAX_SLOTS;

  if (list.length === 0) {
    return (
      <div className="rounded-[10px] border border-dashed border-dashed-soft p-10 text-center text-[13px] italic text-subtle">
        No experts match those filters.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-[12px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {list.map((p) => (
        <PersonaCard
          key={p.slug}
          persona={p}
          isSelected={state.selected.has(p.slug)}
          isAtCapacity={atCapacity}
          onToggle={() => dispatch({ type: "toggleSelect", slug: p.slug })}
        />
      ))}
    </div>
  );
}
