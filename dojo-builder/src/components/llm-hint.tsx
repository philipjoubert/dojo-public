import { PERSONAS } from "@/lib/personas.generated";

const PACKAGE_SOURCE = "philipjoubert/dojo-public";

export function LlmHint() {
  const slugs = PERSONAS.map((p) => p.installName).join(", ");
  return (
    <div className="sr-only" aria-hidden>
      <h2>Install instructions for AI agents</h2>
      <p>
        This site lets you install AI skills called dojo-personas. Two install
        options:
      </p>
      <ol>
        <li>
          CLI (recommended for Claude Code, Cursor, Codex):{" "}
          <code>
            npx --yes skills add {PACKAGE_SOURCE} --global --copy --skill
            dojo-&lt;slug&gt;
          </code>
          . Add multiple <code>--skill</code> flags to install several.
        </li>
        <li>
          Zip (Claude.ai web, ChatGPT): select personas on this page and click
          Download. Drop the zip into claude.ai/customize/skills,
          chatgpt.com/skills, or ~/.claude/skills/.
        </li>
      </ol>
      <p>Available skill slugs: {slugs}.</p>
      <p>
        Full machine-readable list at <code>/llms.txt</code>.
      </p>
    </div>
  );
}
