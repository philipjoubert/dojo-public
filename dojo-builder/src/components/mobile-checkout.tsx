"use client";

import { useEffect } from "react";
import { InstallCommandPanel } from "./install-command-panel";
import { SelectedList } from "./selected-list";

export interface MobileCheckoutProps {
  open: boolean;
  onClose: () => void;
}

export function MobileCheckout({ open, onClose }: MobileCheckoutProps) {
  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={[
        "fixed inset-0 z-40 transition-transform duration-300 ease-out lg:hidden",
        open ? "translate-x-0" : "pointer-events-none translate-x-full",
      ].join(" ")}
    >
      <div className="flex h-full flex-col bg-sidebar px-4 pt-6 pb-7 sm:px-6">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onClose}
            className="-ml-2 flex items-center gap-1 rounded-[6px] px-2 py-[6px] text-[13px] text-body hover:bg-chip"
            aria-label="Back to browse"
          >
            <BackIcon />
            <span>Browse</span>
          </button>
          <div className="text-[10px] uppercase tracking-[1.4px] text-muted">
            Install skills
          </div>
        </div>

        <div className="mt-4 flex-1 overflow-y-auto">
          <SelectedList />
        </div>

        <InstallCommandPanel />
      </div>
    </div>
  );
}

function BackIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
    >
      <path
        d="M10 3 L5 8 L10 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
