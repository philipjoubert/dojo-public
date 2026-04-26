"use client";

import { InstallCommandPanel } from "./install-command-panel";
import { SelectedList } from "./selected-list";

export function Sidebar() {
  return (
    <aside className="sticky top-0 flex h-screen flex-col overflow-y-auto bg-sidebar px-7 pt-9 pb-7">
      <div className="text-[10px] uppercase tracking-[1.4px] text-muted">
        Install selected skills
      </div>
      <div className="flex-1">
        <SelectedList />
      </div>
      <InstallCommandPanel />
    </aside>
  );
}
