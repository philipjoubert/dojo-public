"use client";

import { createContext, useContext } from "react";
import type { Domain, Persona } from "@/lib/personas.generated";

export const MAX_SLOTS = 8;

export type InstallMode = "zip" | "cli";

export interface DojoState {
  selected: Set<string>;
  activeDomain: Domain | null;
  skillName: string;
  installMode: InstallMode;
}

export type DojoAction =
  | { type: "toggleSelect"; slug: string }
  | { type: "removeSelect"; slug: string }
  | { type: "setDomain"; domain: Domain | null }
  | { type: "setSkillName"; value: string }
  | { type: "setInstallMode"; mode: InstallMode };

export function initialState(): DojoState {
  return {
    selected: new Set<string>(),
    activeDomain: null,
    skillName: "",
    installMode: "zip",
  };
}

export function reducer(state: DojoState, action: DojoAction): DojoState {
  switch (action.type) {
    case "toggleSelect": {
      const next = new Set(state.selected);
      if (next.has(action.slug)) {
        next.delete(action.slug);
      } else if (next.size < MAX_SLOTS) {
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
    case "setSkillName":
      return {
        ...state,
        skillName: action.value
          .replace(/[^a-z0-9-]/gi, "-")
          .toLowerCase()
          .slice(0, 40),
      };
    case "setInstallMode":
      return { ...state, installMode: action.mode };
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

export function totalKb(selected: Persona[]): number {
  return selected.reduce((s, p) => s + p.sizeKb, 0);
}
