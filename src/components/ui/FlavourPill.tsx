interface FlavourPillProps {
  label: string;
  className?: string;
}

export function FlavourPill({ label, className = '' }: FlavourPillProps) {
  return (
    <span className={`inline-flex items-center justify-center min-h-[24px] px-3 bg-butter text-ink text-xs font-bold border-[2.5px] border-ink shadow-[2px_2px_0_var(--orange)] rounded-drawn whitespace-nowrap transform -rotate-1 hover:rotate-1 transition-transform ${className}`}>
      {label}
    </span>
  );
}
