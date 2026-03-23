'use client';

import Link from 'next/link';
import { CookieMark } from '@/components/icons/DoodleIcons';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { siteConfig } from '@/lib/data';
import { useI18n } from '@/lib/i18n';

export default function ObrigadoPage() {
  const { copy } = useI18n();

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <nav className="min-h-20 flex items-center justify-between border-b border-sand px-6">
        <Link href="/" className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-orange/50 rounded-sm">
          <CookieMark size={32} color="var(--ink)" />
          <span className="font-display font-bold text-2xl text-ink mt-1">Massa</span>
        </Link>
        <LanguageSwitcher />
      </nav>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-md w-full mx-auto text-center">
          <div className="flex justify-center mb-6">
            <CookieMark size={80} color="var(--orange)" />
          </div>

          <h1 className="font-display font-bold text-4xl text-ink mb-3">{copy.thankYou.title}</h1>
          <p className="font-body text-ink-muted mb-8 text-lg">{copy.thankYou.description}</p>

          <div className="bg-butter border border-honey rounded-lg p-6 text-left mb-8 shadow-sm">
            <h2 className="font-display font-bold text-xl text-ink mb-4">{copy.thankYou.nextSteps}</h2>
            <ol className="space-y-4 text-sm text-ink-muted">
              <li className="flex gap-3">
                <span className="font-bold text-orange mt-0.5">1.</span>
                <span>{copy.thankYou.steps[0]}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-orange mt-0.5">2.</span>
                <div>
                  <span className="block mb-2">{copy.thankYou.steps[1]}</span>
                  <div className="bg-white border border-sand rounded px-3 py-2 text-xs font-mono text-ink text-center select-all">
                    {siteConfig.pixKey}
                  </div>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-orange mt-0.5">3.</span>
                <span>{copy.thankYou.steps[2]}</span>
              </li>
            </ol>
          </div>

          <a
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full min-h-[44px] px-6 py-4 bg-[#25D366] text-white font-display font-bold text-lg rounded-pill hover:-translate-y-1 hover:shadow-[4px_4px_0_#2A1408] transition-all mb-6"
          >
            {copy.thankYou.openWhatsApp}
          </a>

          <Link href="/" className="inline-flex min-h-[44px] items-center justify-center text-sm text-orange underline hover:text-ink transition-colors font-medium">
            {copy.thankYou.backHome}
          </Link>
        </div>
      </main>
    </div>
  );
}
