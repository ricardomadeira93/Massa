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
  it: 'rotate-1',
  ar: '-rotate-1',
} as const;

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { language, setLanguage, copy } = useI18n();

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-pill border-2 border-ink bg-white/90 px-1.5 py-1 shadow-sm sm:gap-1 sm:px-3 sm:py-2 ${className}`}
      title={copy.language.helper}
    >
      <span className="hidden pl-1 text-xs font-semibold uppercase tracking-widest text-ink-faint xl:block">{copy.language.label}</span>
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
              className={`relative h-9 min-w-9 rounded-pill border-2 px-1.5 text-xs font-bold uppercase tracking-widest transition-all focus-visible:ring-2 focus-visible:ring-orange/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream sm:h-10 sm:min-w-11 sm:px-3 ${tiltByLanguage[option]} ${
                isActive
                  ? 'border-ink bg-terracotta text-cream shadow-sm'
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
