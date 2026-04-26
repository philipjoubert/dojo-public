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
        title="Select skills"
        body="Pick the experts you want. Each one installs as its own granular skill, so you can keep your agent's toolbelt precise or install a full panel."
      />
      <Step
        n={3}
        title="Run the command"
        body={
          <>
            Copy the generated command into your terminal. It uses the open
            agent skills CLI and lets it detect where to install:
            <ul className="mt-2 flex flex-col gap-[3px]">
              <li>
                <code className="rounded bg-chip px-[4px] py-[1px] text-[11px]">
                  npx skills add
                </code>
              </li>
              <li>
                <span className="text-muted">Specific agent:</span>{" "}
                add <code className="rounded bg-chip px-[4px] py-[1px] text-[11px]">--agent claude-code</code>
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
