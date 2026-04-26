"use client";

import { useDojo } from "./dojo-state";
import { InstallTabs } from "./install-options";
import { SkillNameInput } from "./skill-name-input";
import { CapacityMeter } from "./capacity-meter";
import { DownloadButton } from "./download-button";
import { InstallCommandPanel } from "./install-command-panel";
import { SelectedList } from "./selected-list";

export function Sidebar() {
  const { state } = useDojo();
  const isZip = state.installMode === "zip";

  return (
    <aside className="sticky top-0 flex h-screen flex-col overflow-y-auto bg-sidebar px-7 pt-9 pb-7">
      <div className="text-[10px] uppercase tracking-[1.4px] text-muted">
        Build your dojo skill
      </div>
      <InstallTabs />
      {isZip && (
        <>
          <SkillNameInput />
          <CapacityMeter />
        </>
      )}
      <div className="flex-1">
        <SelectedList />
      </div>
      {isZip ? <DownloadButton /> : <InstallCommandPanel />}
    </aside>
  );
}
