"use client";

import { useState } from "react";
import { useDojo } from "./dojo-state";
import { DownloadIcon } from "./icons";
import { ModeSwitchLink } from "./install-options";

type Status =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "error"; message: string };

export function DownloadButton() {
  const { state } = useDojo();
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const disabled = state.selected.size === 0 || status.kind === "loading";

  async function onClick() {
    setStatus({ kind: "loading" });
    try {
      const res = await fetch("/api/build", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          selected: Array.from(state.selected),
          skillName: state.skillName,
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `HTTP ${res.status}`);
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = state.skillName
        ? `dojo-${state.skillName}.zip`
        : "dojo.zip";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      setStatus({ kind: "idle" });
    } catch (err) {
      console.error("build failed", err);
      setStatus({
        kind: "error",
        message: err instanceof Error ? err.message : "Build failed",
      });
    }
  }

  const label =
    status.kind === "loading" ? "Building…" : "Download skill";

  return (
    <div className="sticky bottom-0 mt-4 -mx-4 -mb-7 border-t border-divider bg-sidebar px-4 pt-4 pb-4 sm:-mx-6 sm:px-6 lg:-mx-7 lg:px-7">
      <button
        type="button"
        onClick={onClick}
        disabled={disabled}
        className={[
          "flex w-full items-center justify-center gap-2 rounded-[8px] px-4 py-3 text-[14px] font-medium transition-colors",
          disabled
            ? "cursor-not-allowed bg-dashed text-subtle"
            : "bg-hanko text-main hover:brightness-110",
        ].join(" ")}
      >
        <DownloadIcon />
        {label}
      </button>
      {status.kind === "error" && (
        <p className="mt-2 text-center text-[10px] text-danger">
          {status.message}
        </p>
      )}
      <ModeSwitchLink to="cli" label="Or install via CLI" />
    </div>
  );
}
