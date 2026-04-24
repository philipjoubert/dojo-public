"use client";

import { useEffect, useReducer, useState } from "react";
import type { Persona } from "@/lib/personas.generated";
import { DojoContext, initialState, reducer } from "./dojo-state";
import { DomainFilter } from "./domain-filter";
import { Footnote } from "./footnote";
import { Header } from "./header";
import { Hero } from "./hero";
import { InstallSteps } from "./install-steps";
import { MobileBasketBar } from "./mobile-basket-bar";
import { MobileCheckout } from "./mobile-checkout";
import { PersonaGrid } from "./persona-grid";
import { Sidebar } from "./sidebar";

export interface DojoProps {
  personas: Persona[];
}

export function Dojo({ personas }: DojoProps) {
  const [state, dispatch] = useReducer(reducer, undefined, initialState);
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // If the user removes all experts while on checkout, keep the screen open
  // but the Download button will disable itself.

  useEffect(() => {
    if (!checkoutOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [checkoutOpen]);

  return (
    <DojoContext.Provider value={{ state, dispatch, personas }}>
      <div className="mx-auto flex w-full min-h-screen max-w-[1440px] bg-main">
        <main className="min-w-0 flex-1 px-4 pt-6 pb-[120px] sm:px-6 lg:border-r lg:border-border lg:px-10 lg:pt-9 lg:pb-[60px]">
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
      <MobileBasketBar onReview={() => setCheckoutOpen(true)} />
      <MobileCheckout
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
    </DojoContext.Provider>
  );
}
