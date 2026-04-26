"use client";

import { createContext, useContext } from "react";
import type { Domain, Persona } from "@/lib/personas.generated";

export interface DojoState {
  selected: Set<string>;
  activeDomain: Domain | null;
}

export type DojoAction =
  | { type: "toggleSelect"; slug: string }
  | { type: "removeSelect"; slug: string }
  | { type: "setDomain"; domain: Domain | null };

export function initialState(): DojoState {
    return {
      selected: new Set<string>(),
      activeDomain: null,
    };
}

export function reducer(state: DojoState, action: DojoAction): DojoState {
  switch (action.type) {
    case "toggleSelect": {
      const next = new Set(state.selected);
      if (next.has(action.slug)) {
        next.delete(action.slug);
      } else {
        next.add(action.slug);
      }
      return { ...state, selected: next };
    }
    case "removeSelect": {
      const next = new Set(state.selected);
      next.delete(action.slug);
      return { ...state, selected: next };
    }
    case "setDomain":
      return {
        ...state,
        activeDomain:
          state.activeDomain === action.domain ? null : action.domain,
      };
  }
}

export interface DojoContextValue {
  state: DojoState;
  dispatch: React.Dispatch<DojoAction>;
  personas: Persona[];
}

export const DojoContext = createContext<DojoContextValue | null>(null);

export function useDojo(): DojoContextValue {
  const ctx = useContext(DojoContext);
  if (!ctx) throw new Error("useDojo must be used inside <Dojo>");
  return ctx;
}

export function filteredPersonas(state: DojoState, personas: Persona[]): Persona[] {
  return personas.filter((p) => {
    if (state.activeDomain && p.domain !== state.activeDomain) return false;
    return true;
  });
}

export function selectedPersonas(state: DojoState, personas: Persona[]): Persona[] {
  return personas.filter((p) => state.selected.has(p.slug));
}
