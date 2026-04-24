"use client";

import { CapacityMeter } from "./capacity-meter";
import { DownloadButton } from "./download-button";
import { SelectedList } from "./selected-list";
import { SkillNameInput } from "./skill-name-input";

export function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen flex-col overflow-y-auto bg-sidebar px-7 pt-9 pb-7">
      <div className="text-[10px] uppercase tracking-[1.4px] text-muted">
        Build your dojo skill
      </div>
      <SkillNameInput />
      <CapacityMeter />
      <div className="flex-1">
        <SelectedList />
      </div>
      <DownloadButton />
    </aside>
  );
}
