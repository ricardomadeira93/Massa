'use client';

import { useEffect, useState } from 'react';
import { CookieMark, IconInstagram } from '@/components/icons/DoodleIcons';
import { Button } from '@/components/ui/Button';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { siteConfig } from '@/lib/data';
import { showSeasonalDrop } from '@/lib/feature-flags';
import { useI18n } from '@/lib/i18n';

const navLinkClass =
  'rounded-pill px-4 py-2 text-sm font-semibold text-ink-muted transition-all hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50';

const mobileNavLinkClass =
  'inline-flex min-h-12 items-center justify-center rounded-pill border-2 border-sand bg-white/85 px-4 py-3 text-sm font-semibold text-ink shadow-sm transition-all active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { copy } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mobileNavLinks = [
    { href: '#produtos', label: copy.nav.menu },
    { href: '#como-funciona', label: copy.nav.howItWorks },
    { href: '#pedido', label: copy.nav.order },
    { href: '#faq', label: copy.footer.faq },
  ];

  const navTopClass = showSeasonalDrop ? 'top-12' : 'top-0';

  return (
    <nav
      className={`fixed left-0 right-0 ${navTopClass} z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/60 backdrop-blur-md' : 'bg-cream/25 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-3 py-2 sm:px-6 sm:py-3">
        <div
          className={`rounded-3xl border-2 px-3 py-2 transition-all sm:px-5 sm:py-3 ${
            scrolled
              ? 'border-sand bg-cream/95 shadow-md'
              : 'border-sand/80 bg-cream/90 shadow-sm'
          }`}
        >
          <div className="lg:flex lg:min-h-14 lg:items-center lg:justify-between lg:gap-4">
            <div className="flex items-center justify-between gap-3">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center gap-2 rounded-pill px-1 py-1 outline-none transition-all focus-visible:ring-2 focus-visible:ring-orange/50 sm:px-2"
              >
                <CookieMark size={28} color="var(--ink)" className="transition-transform group-hover:rotate-12" />
                <div>
                  <span className="mt-1 block font-display text-lg font-bold text-ink sm:text-2xl">Massa</span>
                  <span className="hidden text-xs font-semibold uppercase tracking-widest text-ink-faint/80 sm:block">
                    {copy.hero.badge}
                  </span>
                </div>
              </a>

              <div className="hidden items-center gap-3 lg:flex">
                <div className="flex items-center gap-1.5 rounded-pill bg-white px-2 py-1">
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

                <div className="flex items-center gap-2.5 rounded-pill bg-white/55 px-2 py-1.5">
                  <LanguageSwitcher />
                  <a
                    href={siteConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-pill text-ink transition-all hover:-translate-y-0.5 hover:bg-butter/70 hover:text-orange focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50"
                    aria-label="Instagram"
                    title="Instagram"
                  >
                    <IconInstagram size={28} className="transition-transform hover:-rotate-6" />
                  </a>
                  <Button href="#pedido" variant="solid-dark" className="h-11 px-4 py-0 text-sm">
                    {copy.nav.orderShort}
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-3 lg:hidden">
                <LanguageSwitcher className="shrink-0" />
                <button
                  type="button"
                  aria-expanded={mobileMenuOpen}
                  aria-label={copy.nav.menu}
                  aria-controls="mobile-nav-panel"
                  onClick={() => setMobileMenuOpen((open) => !open)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-pill border-2 border-sand bg-white/90 text-sm font-semibold text-ink shadow-sm transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50 sm:h-12 sm:w-12"
                >
                  <span className="sr-only">{copy.nav.menu}</span>
                  <span className="flex h-4 w-5 flex-col justify-between" aria-hidden="true">
                    <span
                      className={`h-0.5 w-5 rounded-full bg-ink transition-all duration-200 ${
                        mobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''
                      }`}
                    />
                    <span
                      className={`h-0.5 w-5 rounded-full bg-ink transition-all duration-200 ${
                        mobileMenuOpen ? 'opacity-0' : ''
                      }`}
                    />
                    <span
                      className={`h-0.5 w-5 rounded-full bg-ink transition-all duration-200 ${
                        mobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
                      }`}
                    />
                  </span>
                </button>
              </div>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 lg:hidden ${
                mobileMenuOpen ? 'mt-2 max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div
                  id="mobile-nav-panel"
                  className="rounded-3xl border-2 border-sand/80 bg-white/92 p-3 shadow-md"
                >
                  <div className="grid grid-cols-1 gap-2">
                    {mobileNavLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`${mobileNavLinkClass} w-full justify-between`}
                      >
                        <span>{link.label}</span>
                        <span aria-hidden="true">&rarr;</span>
                      </a>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center gap-2">
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-pill border-2 border-sand bg-butter/60 text-ink shadow-sm transition-all hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50"
                      aria-label="Instagram"
                      title="Instagram"
                    >
                      <IconInstagram size={28} className="transition-transform hover:-rotate-6" />
                    </a>
                    <Button
                      href="#pedido"
                      onClick={() => setMobileMenuOpen(false)}
                      variant="solid-dark"
                      className="min-h-11 flex-1 px-4 py-0 text-sm"
                    >
                      {copy.nav.orderShort}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
