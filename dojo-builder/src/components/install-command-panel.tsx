"use client";

import { useState } from "react";
import { selectedPersonas, useDojo } from "./dojo-state";
import { CheckIcon, CopyIcon } from "./icons";
import { ModeSwitchLink } from "./install-options";

type Status = "idle" | "copied" | "error";

const PACKAGE_SOURCE = "philipjoubert/dojo-public";

function buildInstallCommand(skillNames: string[]): string {
  const args = [
    `npx --yes skills add ${PACKAGE_SOURCE}`,
    "--global",
    "--copy",
    ...skillNames.map((name) => `--skill ${name}`),
  ];

  return args
    .map((arg, index) => {
      const prefix = index === 0 ? "" : "  ";
      const suffix = index === args.length - 1 ? "" : " \\";
      return `${prefix}${arg}${suffix}`;
    })
    .join("\n");
}

export function InstallCommandPanel() {
  const { state, personas } = useDojo();
  const selected = selectedPersonas(state, personas);
  const [status, setStatus] = useState<Status>("idle");
  const disabled = selected.length === 0;
  const command = buildInstallCommand(selected.map((p) => p.installName));

  async function onCopy() {
    if (disabled) return;
    try {
      await navigator.clipboard.writeText(command);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 1600);
    } catch (err) {
      console.error("copy failed", err);
      setStatus("error");
    }
  }

  const label =
    status === "copied"
      ? "Copied, now paste into Terminal"
      : status === "error"
        ? "Copy failed"
        : "Copy install command";

  return (
    <div className="sticky bottom-0 mt-4 -mx-4 -mb-7 border-t border-divider bg-sidebar px-4 pt-4 pb-4 sm:-mx-6 sm:px-6 lg:-mx-7 lg:px-7">
      <div className="mb-3 text-[11px] text-muted">
        {disabled
          ? "Select one or more experts."
          : `${selected.length} skill${selected.length === 1 ? "" : "s"} ready to install.`}
      </div>
      <pre
        className={[
          "max-h-[220px] overflow-auto rounded-[6px] border border-border bg-input p-3 font-mono text-[11px] leading-[1.55] text-body",
          disabled ? "text-subtle" : "",
        ].join(" ")}
      >
        {disabled ? "npx --yes skills add philipjoubert/dojo-public ..." : command}
      </pre>
      <button
        type="button"
        onClick={onCopy}
        disabled={disabled}
        className={[
          "mt-3 flex w-full items-center justify-center gap-2 rounded-[8px] px-4 py-3 text-[14px] font-medium transition-colors",
          disabled
            ? "cursor-not-allowed bg-dashed text-subtle"
            : status === "copied"
              ? "bg-ink text-main"
              : "bg-hanko text-main hover:brightness-110",
        ].join(" ")}
      >
        {status === "copied" ? <CheckIcon /> : <CopyIcon />}
        {label}
      </button>
      <ModeSwitchLink to="zip" label="Or download as zip" />
    </div>
  );
}
