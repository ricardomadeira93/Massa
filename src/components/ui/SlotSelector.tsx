import { DeliverySlot } from '@/types';

interface SlotSelectorProps {
  slots: DeliverySlot[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  error?: boolean;
}

export function SlotSelector({ slots, selectedId, onSelect, error }: SlotSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {slots.map((slot) => {
        const isSoldOut = slot.remaining === 0;
        const isSelected = selectedId === slot.id;
        
        return (
          <button
            key={slot.id}
            type="button"
            disabled={isSoldOut}
            onClick={() => onSelect(slot.id)}
            className={`
              relative flex flex-col items-start p-3 border rounded-sm min-h-[44px] transition-colors outline-none text-left
              ${isSelected ? 'bg-orange/5 border-orange ring-1 ring-orange' : 'bg-cream border-sand hover:border-orange focus-visible:ring-2 focus-visible:ring-orange/50'}
              ${isSoldOut ? 'opacity-40 cursor-not-allowed bg-sand/30 hover:border-sand' : ''}
              ${error && !isSelected ? 'border-red-400' : ''}
            `}
          >
            <div className="flex items-center justify-between w-full mb-1">
              <span className={`font-semibold text-sm ${isSoldOut ? 'line-through text-ink-muted' : 'text-ink'}`}>
                {slot.label}
              </span>
              {!isSoldOut && (
                <span className="text-xs font-medium text-orange px-2 py-0.5 bg-orange/10 rounded-pill">
                  {slot.remaining} rest.
                </span>
              )}
            </div>
            <span className={`text-xs ${isSoldOut ? 'line-through text-ink-faint' : 'text-ink-muted'}`}>
              {slot.dateLabel}
            </span>
            {isSoldOut && (
              <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-ink-muted text-xl rotate-[-5deg]">
                Esgotado
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
