"use client";

import { MAX_SLOTS, useDojo } from "./dojo-state";

export function CapacityMeter() {
  const { state } = useDojo();
  const n = state.selected.size;
  const pct = Math.min(100, (n / MAX_SLOTS) * 100);
  const near = n >= MAX_SLOTS - 1;
  const full = n >= MAX_SLOTS;

  return (
    <div className="mt-[22px]">
      <div className="mb-2 text-[11px] text-muted">
        {n} of {MAX_SLOTS} slots
      </div>
      <div className="h-1 overflow-hidden rounded-[2px] bg-divider">
        <div
          className="h-full transition-[width,background-color] duration-250"
          style={{
            width: `${pct}%`,
            backgroundColor: full
              ? "var(--color-hanko)"
              : near
                ? "var(--color-warn)"
                : "var(--color-ink)",
          }}
        />
      </div>
      {full && (
        <div className="mt-[6px] text-[10px] text-hanko">Dojo full.</div>
      )}
      {near && !full && (
        <div className="mt-[6px] text-[10px] text-warn">
          One slot remaining.
        </div>
      )}
    </div>
  );
}
