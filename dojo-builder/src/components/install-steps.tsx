export function InstallSteps() {
  return (
    <section className="mb-10 grid grid-cols-1 gap-3 md:grid-cols-3">
      <Step
        n={1}
        title="Browse experts"
        body="Each persona is built from their books, interviews, and talks — structured into core beliefs, reasoning moves, frameworks, and voice samples. Not transcript search; they think and speak like the source."
      />
      <Step
        n={2}
        title="Assemble your panel"
        body="Pick up to eight experts. Bundle them into a single skill zip, or install them as separate granular skills via the CLI."
      />
      <Step
        n={3}
        title="Install"
        body={
          <>
            Two options:
            <ul className="mt-2 flex flex-col gap-[3px]">
              <li>
                <span className="text-muted">Zip:</span>{" "}
                drop into{" "}
                <a
                  href="https://claude.ai/customize/skills"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-dotted underline-offset-2 hover:text-ink"
                >
                  claude.ai/customize/skills
                </a>
                ,{" "}
                <a
                  href="https://chatgpt.com/skills"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-dotted underline-offset-2 hover:text-ink"
                >
                  chatgpt.com/skills
                </a>
                , or{" "}
                <code className="rounded bg-chip px-[4px] py-[1px] text-[11px]">
                  ~/.claude/skills/
                </code>
              </li>
              <li>
                <span className="text-muted">CLI:</span>{" "}
                copy the generated{" "}
                <code className="rounded bg-chip px-[4px] py-[1px] text-[11px]">
                  npx skills add
                </code>
                {" "}command into your terminal
              </li>
            </ul>
          </>
        }
      />
    </section>
  );
}

interface StepProps {
  n: number;
  title: string;
  body: React.ReactNode;
}

function Step({ n, title, body }: StepProps) {
  return (
    <div className="flex flex-col rounded-[10px] border border-border bg-card px-4 py-4">
      <div className="flex items-center gap-2">
        <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-ink font-serif text-[12px] leading-none text-main">
          {n}
        </span>
        <h3 className="font-serif text-[15px] font-medium tracking-[-0.1px] text-ink">
          {title}
        </h3>
      </div>
      <div className="mt-[10px] text-[12px] leading-[1.55] text-secondary">
        {body}
      </div>
    </div>
  );
}
