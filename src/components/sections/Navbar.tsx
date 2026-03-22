'use client';

import { useState, useEffect } from 'react';
import { CookieMark, IconInstagram } from '@/components/icons/DoodleIcons';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
        scrolled ? 'bg-cream/90 backdrop-blur-md border-b border-sand' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-2 group outline-none focus-visible:ring-2 focus-visible:ring-orange/50 rounded-sm">
          <CookieMark size={32} color="var(--ink)" className="group-hover:rotate-12 transition-transform" />
          <span className="font-display font-bold text-2xl text-ink mt-1">Massa</span>
        </a>

        {/* Center: Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#produtos" className="text-sm font-medium text-ink-muted hover:text-orange transition-colors">Cardápio</a>
          <a href="#como-funciona" className="text-sm font-medium text-ink-muted hover:text-orange transition-colors">Como funciona</a>
          <a href="#pedido" className="text-sm font-medium text-ink-muted hover:text-orange transition-colors">Fazer pedido</a>
        </div>

        {/* Right: CTA & Socials */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 pr-4 border-r border-sand">
            {/* Simple SVG Instagram / WhatsApp icons */}
            <a href="https://instagram.com/massacookies" target="_blank" rel="noopener noreferrer" className="text-ink hover:text-orange transition-colors" aria-label="Instagram">
              <IconInstagram size={28} className="transform hover:-rotate-6 transition-transform" />
            </a>
          </div>
          <Button href="#pedido" variant="solid-dark" className="h-[44px] px-6 py-0 min-h-[44px] text-sm">
            Pedir
          </Button>
        </div>
      </div>
    </nav>
  );
}
