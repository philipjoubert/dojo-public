export function Footnote() {
  return (
    <p className="mt-12 max-w-[560px] text-[11px] leading-[1.5] text-subtle">
      Full source material for each expert lives under <code>sources/</code>
      {" "}in the{" "}
      <a
        href="https://github.com/philipjoubert/personas-public"
        className="underline underline-offset-2 hover:text-muted"
        target="_blank"
        rel="noreferrer"
      >
        public repo
      </a>
      .
    </p>
  );
}
