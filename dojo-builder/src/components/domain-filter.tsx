"use client";

import { DOMAIN_META, type Domain } from "@/lib/personas.generated";
import { filteredPersonas, useDojo } from "./dojo-state";

const DOMAINS: Array<Domain | null> = [
  null,
  "operators",
  "investors",
  "marketing",
  "thinking",
];

export function DomainFilter() {
  const { state, dispatch, personas } = useDojo();
  const shown = filteredPersonas(state, personas).length;

  return (
    <div className="mb-[14px] flex items-center gap-[6px]">
      {DOMAINS.map((d) => {
        const label = d === null ? "All" : DOMAIN_META[d].label;
        const active =
          d === null ? state.activeDomain === null : state.activeDomain === d;
        return (
          <button
            key={label}
            type="button"
            onClick={() => dispatch({ type: "setDomain", domain: d })}
            className={[
              "rounded-[6px] px-3 py-[6px] text-[12px] font-medium transition-colors",
              active
                ? "bg-ink text-main"
                : "text-body hover:bg-chip",
            ].join(" ")}
          >
            {label}
          </button>
        );
      })}
      <div className="ml-auto text-[12px] text-muted">
        {shown} experts available
      </div>
    </div>
  );
}
