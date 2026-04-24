export function Header() {
  return (
    <header className="mb-8 flex items-center gap-3">
      <div className="relative flex h-[34px] w-[34px] items-center justify-center rounded-[6px] bg-ink">
        <span className="font-serif text-[18px] font-medium leading-none text-main">
          道
        </span>
        <span className="absolute -top-[3px] -right-[3px] h-[10px] w-[10px] rounded-[2px] bg-hanko" />
      </div>
      <div className="leading-tight">
        <div className="font-serif text-[20px] font-medium tracking-[-0.2px] text-ink">
          Dojo
        </div>
        <div className="text-[11px] uppercase tracking-[0.3px] text-muted">
          Build your expert panel
        </div>
      </div>
    </header>
  );
}
