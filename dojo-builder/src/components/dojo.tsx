"use client";

import { useReducer } from "react";
import type { Persona } from "@/lib/personas.generated";
import { DojoContext, initialState, reducer } from "./dojo-state";
import { DomainFilter } from "./domain-filter";
import { Footnote } from "./footnote";
import { Header } from "./header";
import { Hero } from "./hero";
import { InstallSteps } from "./install-steps";
import { PersonaGrid } from "./persona-grid";
import { Sidebar } from "./sidebar";

export interface DojoProps {
  personas: Persona[];
}

export function Dojo({ personas }: DojoProps) {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);

  return (
    <DojoContext.Provider value={{ state, dispatch, personas }}>
      <div className="mx-auto flex min-h-screen max-w-[1440px] bg-main">
        <main className="flex-1 border-r border-border px-10 pt-9 pb-[60px]">
          <Header />
          <Hero />
          <InstallSteps />
          <DomainFilter />
          <PersonaGrid />
          <Footnote />
        </main>
        <div className="hidden w-[340px] lg:block">
          <Sidebar />
        </div>
      </div>
    </DojoContext.Provider>
  );
}
