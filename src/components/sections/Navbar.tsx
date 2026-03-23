'use client';

import { useEffect, useState } from 'react';
import { CookieMark, IconInstagram } from '@/components/icons/DoodleIcons';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { siteConfig } from '@/lib/data';
import { useI18n } from '@/lib/i18n';

const navLinkClass =
  'rounded-pill border border-transparent px-4 py-2 text-sm font-semibold text-ink-muted transition-all hover:-translate-y-0.5 hover:border-sand hover:bg-white/70 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50';

const mobileNavLinkClass =
  'inline-flex min-h-[44px] items-center justify-center rounded-pill border-[2px] border-sand bg-white/85 px-4 py-2 text-sm font-semibold text-ink shadow-[2px_2px_0_var(--butter)] transition-all active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { copy } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-12 z-[100] transition-all duration-300 ${
        scrolled ? 'border-b border-sand bg-cream/92 backdrop-blur-md shadow-[0_8px_24px_rgba(79,43,27,0.06)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 md:flex md:h-20 md:items-center md:justify-between md:gap-4 md:py-0">
        <div className="flex items-center justify-between gap-3">
          <a href="#" className="group flex items-center gap-2 rounded-pill px-2 py-1 outline-none transition-all focus-visible:ring-2 focus-visible:ring-orange/50">
            <CookieMark size={32} color="var(--ink)" className="transition-transform group-hover:rotate-12" />
            <span className="mt-1 font-display text-xl font-bold text-ink sm:text-2xl">Massa</span>
          </a>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageSwitcher />
            <Button href="#pedido" variant="solid-dark" className="min-h-[46px] px-4 py-0 text-sm sm:px-6">
              {copy.nav.orderShort}
            </Button>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 md:hidden">
          <a href="#produtos" className={mobileNavLinkClass}>
            {copy.nav.menu}
          </a>
          <a href="#como-funciona" className={mobileNavLinkClass}>
            {copy.nav.howItWorks}
          </a>
          <a href="#faq" className={mobileNavLinkClass}>
            {copy.footer.faq}
          </a>
        </div>

        <div className="hidden items-center gap-2 rounded-pill border border-sand/70 bg-white/65 p-1 md:flex">
          <a href="#produtos" className={navLinkClass}>
            {copy.nav.menu}
          </a>
          <a href="#como-funciona" className={navLinkClass}>
            {copy.nav.howItWorks}
          </a>
          <a href="#pedido" className={navLinkClass}>
            {copy.nav.order}
          </a>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <div className="hidden items-center gap-2 rounded-pill border border-sand/70 bg-white/65 p-1 lg:flex">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-pill text-ink transition-all hover:-translate-y-0.5 hover:bg-butter/70 hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50"
              aria-label="Instagram"
              title="Instagram"
            >
              <IconInstagram size={28} className="transition-transform hover:-rotate-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
