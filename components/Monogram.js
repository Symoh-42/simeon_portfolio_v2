export default function Monogram({ className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center border border-ink bg-ink font-mono text-[12px] font-medium text-paper">
        SM
      </span>
      <span className="font-display text-[16px] font-semibold tracking-tight text-ink">
        Simeon<span className="text-accent">.</span>
      </span>
    </span>
  );
}
