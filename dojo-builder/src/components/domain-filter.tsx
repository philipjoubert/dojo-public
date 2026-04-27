"use client";

import { BUCKETS, DOMAIN_META, type Domain } from "@/lib/personas.generated";
import { filteredPersonas, useDojo } from "./dojo-state";

const DOMAINS: Array<Domain | null> = [null, ...BUCKETS];

export function DomainFilter() {
  const { state, dispatch, personas } = useDojo();
  const shown = filteredPersonas(state, personas).length;

  return (
    <div className="mb-[14px]">
      <div className="flex items-center">
        <div className="scroll-strip flex min-w-0 flex-1 items-center gap-[6px] overflow-x-auto">
          {DOMAINS.map((d) => {
            const label = d === null ? "All" : DOMAIN_META[d].label;
            const active =
              d === null
                ? state.activeDomain === null
                : state.activeDomain === d;
            return (
              <button
                key={label}
                type="button"
                onClick={() => dispatch({ type: "setDomain", domain: d })}
                className={[
                  "shrink-0 rounded-[6px] px-3 py-[6px] text-[12px] font-medium transition-colors",
                  active ? "bg-ink text-main" : "text-body hover:bg-chip",
                ].join(" ")}
              >
                {label}
              </button>
            );
          })}
        </div>
        <div className="ml-3 hidden shrink-0 text-[12px] text-muted sm:block">
          {shown} experts available
        </div>
      </div>
    </div>
  );
}
