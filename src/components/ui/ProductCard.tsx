'use client';

import { motion } from 'framer-motion';
import { Product } from '@/types';
import { Button } from '@/components/ui/Button';
import { FlavourPill } from '@/components/ui/FlavourPill';
import { CaixaClassica, CaixaFesta, CaixaMini, CaixaPresente } from '@/components/icons/ProductDoodles';
import { Arrow3, Crumb3, Sparkle2 } from '@/components/decorative';
import { revealUp, storyViewport } from '@/lib/storytelling';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const isSoldOut = !product.available;
  const isFeatured = !!product.badge;

  let Icon = CaixaClassica;

  const pid = product.id.toLowerCase();
  const pname = product.name.toLowerCase();

  if (pid === 'presente' || pname.includes('presente')) {
    Icon = CaixaPresente;
  } else if (pid === 'festa' || pname.includes('festa')) {
    Icon = CaixaFesta;
  } else if (pid === 'mini' || pname.includes('mini') || pid === 'caixinha') {
    Icon = CaixaMini;
  }

  const handleOrderClick = () => {
    window.location.hash = `#pedido?produto=${product.id}`;
    const el = document.getElementById('pedido');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={storyViewport}
      variants={revealUp(index * 0.08, 18)}
      className={`group relative flex flex-col overflow-hidden rounded-drawn border-[3px] bg-white transition-all duration-300 ${
        isFeatured
          ? 'border-terracotta shadow-[4px_4px_0_var(--terracotta)]'
          : 'border-ink shadow-[4px_4px_0_var(--ink)]'
      } ${
        isSoldOut
          ? 'pointer-events-none opacity-55 grayscale-[0.2]'
          : 'hover:-translate-y-1 hover:-rotate-1 hover:shadow-[6px_6px_0_var(--orange)] focus-within:-translate-y-1 focus-within:-rotate-1 focus-within:shadow-[6px_6px_0_var(--orange)]'
      }`}
    >
      {isFeatured && (
        <div className="absolute right-4 top-4 z-20 rotate-3 rounded-drawn border-[3px] border-ink bg-terracotta px-4 py-1.5 font-display text-xs font-bold text-cream shadow-[3px_3px_0_var(--ink)]">
          {product.badge}
        </div>
      )}

      <div className="relative flex h-44 items-center justify-center overflow-hidden border-b-[3px] border-ink bg-butter/20">
        <div className="h-full w-full p-2 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-2 group-focus-within:scale-110 group-focus-within:-rotate-2">
          <Icon className="relative z-10 h-full w-full text-ink" />
        </div>

        <div className="pointer-events-none absolute left-6 top-4 opacity-75 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-12 group-focus-within:-translate-y-1 group-focus-within:translate-x-1 group-focus-within:rotate-12">
          <Sparkle2 strokeColor="var(--caramel)" className="h-8 w-8 rotate-12" />
        </div>

        <div className="pointer-events-none absolute bottom-4 right-8 opacity-90 transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-1 group-hover:-rotate-12 group-focus-within:-translate-x-2 group-focus-within:-translate-y-1 group-focus-within:-rotate-12">
          <Crumb3 className="h-5 w-5" fillColor="var(--butter)" />
        </div>
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <div className="mb-4">
          <h3 className="mb-1 font-display text-2xl font-bold leading-none text-ink">{product.name}</h3>
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted">{product.subtitle}</p>
        </div>

        <p className="mb-6 flex-1 line-clamp-3 text-sm text-ink-muted">{product.description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {product.flavours.slice(0, 3).map((f) => (
            <FlavourPill key={f} label={f} />
          ))}
          {product.flavours.length > 3 && <FlavourPill label={`+${product.flavours.length - 3} mais`} />}
        </div>

        <div className="flex items-center justify-between border-t-[3px] border-dashed border-ink/40 pt-4">
          <div className="font-display text-3xl font-bold text-orange">R$ {product.price}</div>

          {isSoldOut ? (
            <span className="rounded-pill bg-sand px-5 py-2 font-display text-lg font-bold text-ink-muted">Esgotado</span>
          ) : (
            <div className="group/order-cta relative">
              <Button onClick={handleOrderClick} variant="solid-dark" className="w-auto flex-none px-6 text-lg">
                Pedir &rarr;
              </Button>
              <div className="pointer-events-none absolute -right-8 -top-4 hidden opacity-0 transition-all duration-300 group-hover/order-cta:translate-x-2 group-hover/order-cta:-translate-y-1 group-hover/order-cta:opacity-100 group-focus-within/order-cta:translate-x-2 group-focus-within/order-cta:-translate-y-1 group-focus-within/order-cta:opacity-100 md:block">
                <Arrow3 className="h-12 w-12" strokeColor="var(--terracotta)" strokeWidth={2.5} />
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
