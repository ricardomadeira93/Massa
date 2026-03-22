import { siteConfig } from '@/lib/data';

interface AllergenBannerProps {
  className?: string;
}

export function AllergenBanner({ className = '' }: AllergenBannerProps) {
  return (
    <div className={`bg-cream border-[3px] border-ink text-ink rounded-drawn text-xs p-4 leading-relaxed shadow-[4px_4px_0_var(--butter)] transform rotate-1 ${className}`}>
      <strong>Aviso de Alergênicos:</strong> {siteConfig.allergenStatement}
    </div>
  );
}
