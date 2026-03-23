'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { SeasonalDropPreview } from '@/lib/seasonal';
import { Arrow2, Crumb1, Sparkle1, Swirl1, Trail2 } from '@/components/decorative';
import { useI18n } from '@/lib/i18n';
import { revealScale, revealUp, storyViewport } from '@/lib/storytelling';

interface DropFlavorPreviewProps {
  preview: SeasonalDropPreview;
}

export function DropFlavorPreview({ preview }: DropFlavorPreviewProps) {
  const [selectedFlavorId, setSelectedFlavorId] = useState<string | null>(null);
  const { t } = useI18n();
  const prefersReducedMotion = useReducedMotion();

  const selectedFlavor = useMemo(
    () => preview.flavors.find((flavor) => flavor.id === selectedFlavorId) ?? null,
    [preview.flavors, selectedFlavorId],
  );

  const activeAssetPath = selectedFlavor?.assetPath ?? preview.mainIllustrationPath;
  const activeAssetAlt = selectedFlavor ? t(selectedFlavor.assetAlt) : t(preview.mainIllustrationAlt);
  const activeTitle = selectedFlavor ? t(selectedFlavor.label) : t(preview.defaultTitle);
  const activeDescription = selectedFlavor ? t(selectedFlavor.description) : t(preview.defaultDescription);
  const stageMotifs = preview.stageMotifs;
  const stateLabel = selectedFlavor ? t(preview.selectedStateLabel) : t(preview.defaultStateLabel);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={storyViewport}
      variants={revealUp(0.2, 18)}
      className="seasonal-grain relative mb-10 overflow-hidden rounded-drawn border-[3px] border-[var(--season-line)] bg-white/70 p-4 shadow-[5px_5px_0_var(--season-shadow)] sm:p-5 md:mb-12 md:p-6"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-4 top-4 opacity-60">
          <Sparkle1 className="h-8 w-8" fillColor="var(--season-accent-soft)" strokeColor="var(--season-accent-deep)" />
        </div>
        <div className="absolute bottom-5 right-5 hidden opacity-55 lg:block">
          <Swirl1 className="h-10 w-10 rotate-[10deg]" strokeColor="var(--season-accent)" strokeWidth={3} />
        </div>
        <div className="absolute right-24 top-6 hidden opacity-55 xl:block">
          <Trail2 className="h-8 w-24 rotate-[8deg]" strokeColor="var(--season-accent-deep)" strokeWidth={2.25} />
        </div>
        <div className="absolute bottom-8 left-[44%] hidden opacity-50 xl:block">
          <Crumb1 className="h-3 w-3" fillColor="var(--season-accent-soft)" strokeColor="var(--season-accent-deep)" />
        </div>
      </div>

      <div className="relative z-10 grid gap-5 xl:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] xl:items-center xl:gap-6">
        <div className="rounded-drawn border-[3px] border-[var(--season-line)] bg-[var(--season-paper)] p-3 shadow-[4px_4px_0_var(--season-shadow)] sm:p-5">
          <div className="relative aspect-[6/5] overflow-hidden rounded-drawn border-[2px] border-white/70 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),rgba(255,248,241,0.72)_52%,rgba(232,176,123,0.12)_100%)] px-4 py-5 sm:aspect-[5/4] sm:px-7 sm:py-8">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_70%)]" />
            <div className="pointer-events-none absolute inset-x-[10%] bottom-5 h-10 rounded-full bg-[radial-gradient(circle,rgba(107,51,24,0.16),transparent_68%)] blur-md sm:bottom-6" />

            {stageMotifs?.sprig && (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute left-[7%] top-[12%] hidden w-14 opacity-75 sm:block md:w-16"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        y: [0, -6, 0],
                        rotate: [-6, -2, -6],
                      }
                }
                transition={{ duration: 6.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image src={stageMotifs.sprig} alt="" width={64} height={64} className="h-auto w-full object-contain" />
              </motion.div>
            )}

            {stageMotifs?.seed && (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[18%] left-[12%] hidden w-10 opacity-70 lg:block"
                animate={
                  prefersReducedMotion
                    ? undefined
                    : {
                        x: [0, 4, 0],
                        y: [0, -4, 0],
                        rotate: [-8, 4, -8],
                      }
                }
                transition={{ duration: 7.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image src={stageMotifs.seed} alt="" width={40} height={40} className="h-auto w-full object-contain" />
              </motion.div>
            )}

            {stageMotifs?.spark && (
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute right-[10%] top-[11%] hidden w-12 opacity-65 md:block"
                animate={prefersReducedMotion ? undefined : { opacity: [0.42, 0.72, 0.42], scale: [1, 1.04, 1] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image src={stageMotifs.spark} alt="" width={48} height={48} className="h-auto w-full object-contain" />
              </motion.div>
            )}

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[20%] right-[11%] hidden opacity-55 xl:block"
              animate={prefersReducedMotion ? undefined : { x: [0, -5, 0], y: [0, -3, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Crumb1 className="h-3.5 w-3.5" fillColor="var(--season-accent-soft)" strokeColor="var(--season-accent-deep)" />
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute left-[19%] top-[24%] hidden opacity-45 lg:block"
              animate={prefersReducedMotion ? undefined : { x: [0, 3, 0], y: [0, -5, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Crumb1 className="h-3 w-3" fillColor="var(--season-accent-soft)" strokeColor="var(--season-accent-deep)" />
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute right-[16%] top-[16%] opacity-70"
              animate={prefersReducedMotion ? undefined : { opacity: [0.45, 0.8, 0.45], scale: [1, 1.05, 1] }}
              transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Sparkle1 className="h-6 w-6 md:h-7 md:w-7" fillColor="var(--season-accent-soft)" strokeColor="var(--season-accent-deep)" />
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeAssetPath}
                initial={{ opacity: 0, scale: 0.98, y: 6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -6 }}
                transition={{ duration: 0.24, ease: 'easeOut' }}
                className="relative z-10 flex h-full items-center justify-center"
              >
                <motion.div
                  animate={prefersReducedMotion ? undefined : { y: [0, -5, 0], scale: [1, 1.01, 1] }}
                  transition={{ duration: 6.4, repeat: Infinity, ease: 'easeInOut' }}
                  className="flex h-full w-full items-center justify-center"
                >
                  <Image
                    src={activeAssetPath}
                    alt={activeAssetAlt}
                    width={360}
                    height={320}
                    className="h-auto max-h-[74%] w-auto max-w-[74%] object-contain object-center sm:max-h-[80%] sm:max-w-[80%]"
                    priority={selectedFlavor === null}
                  />
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:gap-5">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--season-accent-deep)]">
              {t(preview.previewEyebrow)}
            </p>
            <h3 className="font-display text-3xl font-bold tracking-tight text-ink md:text-4xl">{t(preview.title)}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">{t(preview.subtitle)}</p>
          </div>

          <motion.div
            variants={revealScale(0.04, 0.96)}
            className="rounded-drawn border-[3px] border-[var(--season-line)] bg-white/80 p-4 shadow-[4px_4px_0_var(--season-shadow)] sm:p-5"
          >
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--season-accent-deep)]">
              {stateLabel}
            </p>
            <h4 className="font-display text-2xl font-bold text-ink">{activeTitle}</h4>
            <p className="mt-2 text-sm leading-relaxed text-ink-muted">{activeDescription}</p>
          </motion.div>

          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-pill border-[2px] border-[var(--season-line)] bg-white/75 px-3 py-2 text-sm font-medium text-[var(--season-accent-deep)]">
              <motion.span
                aria-hidden="true"
                animate={prefersReducedMotion ? undefined : { x: [0, 4, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex shrink-0"
              >
                <Arrow2 className="h-5 w-5" strokeColor="var(--season-accent-deep)" strokeWidth={3.5} />
              </motion.span>
              <span>{t(preview.interactionCue)}</span>
            </div>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-faint">{t(preview.selectorTitle)}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {preview.flavors.map((flavor, index) => {
                const isActive = flavor.id === selectedFlavorId;
                const actionLabel = isActive ? t(preview.activeActionLabel) : t(preview.inactiveActionLabel);

                return (
                  <motion.button
                    key={flavor.id}
                    type="button"
                    onClick={() => setSelectedFlavorId((currentId) => (currentId === flavor.id ? null : flavor.id))}
                    initial="hidden"
                    whileInView="visible"
                    viewport={storyViewport}
                    variants={revealUp(index * 0.04, 12)}
                    aria-pressed={isActive}
                    className={`group cursor-pointer rounded-drawn border-[3px] p-4 text-left transition-all active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream ${
                      isActive
                        ? 'border-orange bg-orange/10 shadow-[4px_4px_0_var(--orange)]'
                        : 'border-[var(--season-line)] bg-white/80 shadow-[3px_3px_0_var(--season-shadow)] hover:-translate-y-0.5 hover:border-[var(--season-accent)] hover:bg-[var(--season-paper)] hover:shadow-[4px_4px_0_var(--season-shadow)]'
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span
                        className={`rounded-pill border-[2px] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${
                          isActive
                            ? 'border-orange bg-white/90 text-orange'
                            : 'border-sand bg-butter/40 text-ink-muted group-hover:border-[var(--season-accent)] group-hover:text-[var(--season-accent-deep)]'
                        }`}
                      >
                        {actionLabel}
                      </span>
                      <span
                        className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[2px] text-sm font-bold transition-all ${
                          isActive
                            ? 'border-orange bg-orange text-cream shadow-[2px_2px_0_var(--ink)]'
                            : 'border-sand bg-white text-ink-faint group-hover:border-[var(--season-accent)] group-hover:text-[var(--season-accent-deep)]'
                        }`}
                        aria-hidden="true"
                      >
                        {isActive ? '✓' : index + 1}
                      </span>
                    </div>

                    <div className="flex min-h-[72px] flex-col justify-between gap-3">
                      <div>
                        <p className={`font-display text-xl font-bold ${isActive ? 'text-orange' : 'text-ink group-hover:text-[var(--season-accent-deep)]'}`}>
                          {t(flavor.label)}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-ink-muted">{t(flavor.description)}</p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
