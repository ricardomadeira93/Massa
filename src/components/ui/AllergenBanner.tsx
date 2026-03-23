'use client';

import { siteConfig } from '@/lib/data';
import { useI18n } from '@/lib/i18n';

interface AllergenBannerProps {
  className?: string;
}

export function AllergenBanner({ className = '' }: AllergenBannerProps) {
  const { copy, t } = useI18n();

  return (
    <div className={`bg-cream border-[3px] border-ink text-ink rounded-drawn text-xs p-4 leading-relaxed shadow-[4px_4px_0_var(--butter)] transform rotate-1 ${className}`}>
      <strong>{copy.common.allergenWarning}</strong> {t(siteConfig.allergenStatement)}
    </div>
  );
}
