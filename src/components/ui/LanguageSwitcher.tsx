'use client';

import { languageMeta, supportedLanguages } from '@/lib/i18n-config';
import { useI18n } from '@/lib/i18n';

interface LanguageSwitcherProps {
  className?: string;
}

const tiltByLanguage = {
  pt: '-rotate-1',
  en: 'rotate-1',
  es: '-rotate-2',
} as const;

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { language, setLanguage, copy } = useI18n();

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-pill border-[2px] border-ink bg-white/90 p-1.5 shadow-[3px_3px_0_var(--butter)] ${className}`}
      title={copy.language.helper}
    >
      <span className="hidden pl-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint lg:block">{copy.language.label}</span>
      <div role="group" aria-label={copy.language.helper} className="inline-flex items-center gap-1">
        {supportedLanguages.map((option) => {
          const isActive = option === language;

          return (
            <button
              key={option}
              type="button"
              onClick={() => setLanguage(option)}
              aria-pressed={isActive}
              aria-label={languageMeta[option].label}
              title={languageMeta[option].label}
              className={`relative min-h-[40px] min-w-[42px] rounded-pill border-[2px] px-3 text-xs font-bold tracking-[0.16em] uppercase transition-all focus-visible:ring-2 focus-visible:ring-orange/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${tiltByLanguage[option]} ${
                isActive
                  ? 'border-ink bg-terracotta text-cream shadow-[2px_2px_0_var(--ink)]'
                  : 'border-sand bg-cream/90 text-ink-muted hover:-translate-y-0.5 hover:border-orange/40 hover:bg-butter/70 hover:text-ink'
              }`}
            >
              {isActive && <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-cream" aria-hidden="true" />}
              {languageMeta[option].shortLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
}
