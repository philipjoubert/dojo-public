"use client";

import { useDojo } from "./dojo-state";

export function SkillNameInput() {
  const { state, dispatch } = useDojo();
  return (
    <div className="mt-4">
      <label
        htmlFor="skill-name"
        className="mb-[6px] block text-[11px] text-muted"
      >
        Skill name
      </label>
      <div className="flex h-9 items-center rounded-[6px] border border-border bg-input px-[10px]">
        <span className="font-mono text-[13px] text-subtle select-none">
          {state.skillName ? "dojo-" : "dojo"}
        </span>
        <input
          id="skill-name"
          type="text"
          value={state.skillName}
          onChange={(e) =>
            dispatch({ type: "setSkillName", value: e.target.value })
          }
          className="w-full bg-transparent font-mono text-[13px] text-ink outline-none"
          spellCheck={false}
        />
      </div>
    </div>
  );
}
