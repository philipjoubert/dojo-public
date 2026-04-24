"use client";

import { MAX_SLOTS, selectedPersonas, useDojo } from "./dojo-state";
import { Portrait } from "./portrait";

const AVATAR_PREVIEW = 4;

export interface MobileBasketBarProps {
  onReview: () => void;
}

export function MobileBasketBar({ onReview }: MobileBasketBarProps) {
  const { state, personas } = useDojo();
  const selected = selectedPersonas(state, personas);
  const n = selected.length;

  if (n === 0) return null;

  const preview = selected.slice(0, AVATAR_PREVIEW);
  const overflow = n - preview.length;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-ink px-4 pt-3 lg:hidden"
      style={{ paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 12px)" }}
    >
      <button
        type="button"
        onClick={onReview}
        className="flex w-full items-center gap-3 text-left"
        aria-label={`Review panel, ${n} of ${MAX_SLOTS} experts selected`}
      >
        <div className="flex -space-x-2">
          {preview.map((p) => (
            <Portrait
              key={p.slug}
              slug={p.slug}
              size={32}
              className="h-8 w-8 shrink-0 rounded-full ring-2 ring-ink"
            />
          ))}
          {overflow > 0 && (
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-chip text-[11px] font-medium text-ink ring-2 ring-ink">
              +{overflow}
            </span>
          )}
        </div>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="text-[13px] font-medium text-main">
            {n} of {MAX_SLOTS} experts
          </div>
        </div>
        <span className="shrink-0 rounded-[8px] bg-hanko px-4 py-[10px] text-[13px] font-medium text-main">
          Review →
        </span>
      </button>
    </div>
  );
}
