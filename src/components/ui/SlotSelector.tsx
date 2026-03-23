'use client';

import { DeliverySlot } from '@/types';
import { useI18n } from '@/lib/i18n';

interface SlotSelectorProps {
  slots: DeliverySlot[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  error?: boolean;
}

export function SlotSelector({ slots, selectedId, onSelect, error }: SlotSelectorProps) {
  const { copy, t } = useI18n();

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      {slots.map((slot) => {
        const isSoldOut = slot.remaining === 0;
        const isSelected = selectedId === slot.id;
        const isLowAvailability = !isSoldOut && slot.remaining <= 1;

        return (
          <button
            key={slot.id}
            type="button"
            disabled={isSoldOut}
            aria-pressed={isSelected}
            aria-disabled={isSoldOut}
            onClick={() => onSelect(slot.id)}
            className={`relative flex min-h-[148px] touch-manipulation flex-col items-start rounded-drawn border-[3px] p-4 text-left outline-none transition-all ${
              isSelected
                ? 'border-caramel bg-butter/35 shadow-[4px_4px_0_var(--caramel)]'
                : 'border-ink bg-white shadow-[3px_3px_0_var(--butter)] hover:-translate-y-0.5 hover:border-caramel hover:shadow-[4px_4px_0_var(--caramel)] focus-visible:-translate-y-0.5 focus-visible:border-caramel focus-visible:ring-2 focus-visible:ring-orange/30 focus-visible:ring-offset-2 focus-visible:ring-offset-cream'
            } ${isSoldOut ? 'cursor-not-allowed border-sand bg-sand/20 text-ink-muted shadow-none hover:translate-y-0 hover:border-sand hover:shadow-none' : ''} ${
              error && !isSelected ? 'border-terracotta' : ''
            }`}
          >
            <div className="flex w-full items-start justify-between gap-3">
              <div>
                <span className={`block text-base font-semibold ${isSoldOut ? 'text-ink-muted line-through' : 'text-ink'}`}>
                  {t(slot.label)}
                </span>
                <span className={`mt-1 block text-sm ${isSoldOut ? 'text-ink-muted line-through' : 'text-ink'}`}>
                  {t(slot.dateLabel)}
                </span>
              </div>

              {isSoldOut ? (
                <span className="rounded-pill border-[2px] border-sand bg-cream/80 px-2.5 py-1 text-xs font-semibold uppercase tracking-widest text-ink-muted">
                  {copy.slot.soldOut}
                </span>
              ) : isSelected ? (
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-[2px] border-caramel bg-cream text-caramel shadow-[2px_2px_0_var(--ink)]">
                  <span className="text-sm font-bold">✓</span>
                </span>
              ) : (
                <span
                  className={`rounded-pill border-[2px] px-2.5 py-1 text-xs font-semibold uppercase tracking-widest ${
                    isLowAvailability
                      ? 'border-caramel bg-butter/60 text-caramel'
                      : 'border-sand bg-butter/60 text-ink'
                  }`}
                >
                  {isLowAvailability ? copy.slot.lowAvailability : copy.slot.remaining(slot.remaining)}
                </span>
              )}
            </div>

            <div className="mt-auto flex w-full items-end justify-between gap-3 pt-4">
              <div>
                <span className={`text-xs font-semibold uppercase tracking-widest ${isSelected ? 'text-caramel' : isSoldOut ? 'text-ink-muted' : 'text-ink'}`}>
                  {isSelected ? copy.slot.selected : !isSoldOut ? copy.slot.available : copy.slot.unavailable}
                </span>
                <p className={`mt-1 text-sm leading-snug ${isSelected ? 'font-medium text-caramel' : isSoldOut ? 'text-ink-muted' : 'text-ink'}`}>
                  {isSelected ? copy.slot.selectedHint : isSoldOut ? copy.slot.soldOut : copy.slot.tapToReserve}
                </p>
              </div>

              {!isSoldOut && (
                <div className={`rounded-full border-[2px] px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
                  isSelected ? 'border-caramel bg-white text-caramel' : 'border-sand bg-white text-ink-muted'
                }`}>
                  {copy.slot.remaining(slot.remaining)}
                </div>
              )}
            </div>

            {isSoldOut && <div className="absolute inset-0 rounded-drawn border-[3px] border-transparent bg-white/35" aria-hidden="true" />}
          </button>
        );
      })}
    </div>
  );
}
