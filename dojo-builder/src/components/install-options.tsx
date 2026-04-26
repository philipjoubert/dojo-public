"use client";

import { useDojo, type InstallMode } from "./dojo-state";

export function InstallTabs() {
  const { state, dispatch } = useDojo();
  const mode = state.installMode;

  return (
    <div
      role="tablist"
      aria-label="Install method"
      className="mt-4 flex rounded-[6px] border border-border bg-input p-[2px]"
    >
      <TabButton
        active={mode === "zip"}
        onClick={() => dispatch({ type: "setInstallMode", mode: "zip" })}
        label="Download zip"
      />
      <TabButton
        active={mode === "cli"}
        onClick={() => dispatch({ type: "setInstallMode", mode: "cli" })}
        label="Install via CLI"
      />
    </div>
  );
}

export function ModeSwitchLink({
  to,
  label,
}: {
  to: InstallMode;
  label: string;
}) {
  const { dispatch } = useDojo();
  return (
    <button
      type="button"
      onClick={() => dispatch({ type: "setInstallMode", mode: to })}
      className="mt-3 block w-full text-center text-[11px] text-muted underline decoration-dotted underline-offset-2 transition-colors hover:text-ink"
    >
      {label}
    </button>
  );
}

function TabButton({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={[
        "flex-1 rounded-[5px] px-3 py-[6px] text-[12px] font-medium transition-colors",
        active
          ? "bg-ink text-main"
          : "text-muted hover:text-ink",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
