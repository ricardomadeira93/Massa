import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'solid-dark' | 'solid-orange' | 'ghost' | 'wa-green';

interface BaseProps {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string; target?: string; rel?: string };

export type ButtonComponentProps = ButtonProps | AnchorProps;

export function Button(props: ButtonComponentProps) {
  const { variant = 'solid-dark', className = '', children, ...rest } = props;

  let variantStyles = '';
  switch (variant) {
    case 'solid-dark':
      variantStyles =
        'rounded-drawn border-[3px] border-ink bg-ink font-display text-cream shadow-[4px_4px_0_var(--orange)] transition-all hover:-translate-y-0.5 hover:-rotate-1 hover:shadow-[5px_5px_0_var(--orange)] active:translate-y-[1px] active:rotate-0 active:shadow-[2px_2px_0_var(--orange)]';
      break;
    case 'solid-orange':
      variantStyles =
        'rounded-drawn border-[3px] border-ink bg-terracotta font-display text-cream shadow-[4px_4px_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:-rotate-1 hover:shadow-[5px_5px_0_var(--ink)] active:translate-y-[1px] active:rotate-0 active:shadow-[2px_2px_0_var(--ink)]';
      break;
    case 'ghost':
      variantStyles =
        'rounded-pill border-[2px] border-ink/15 bg-white/75 font-semibold text-ink shadow-[2px_2px_0_rgba(79,43,27,0.08)] transition-all hover:-translate-y-0.5 hover:border-orange/50 hover:bg-butter/80 hover:text-ink active:translate-y-0 active:shadow-[1px_1px_0_rgba(79,43,27,0.08)]';
      break;
    case 'wa-green':
      variantStyles =
        'rounded-drawn border-[3px] border-ink bg-[#25D366] font-display text-white shadow-[4px_4px_0_var(--ink)] transition-all hover:-translate-y-0.5 hover:-rotate-1 hover:bg-[#20bd5a] hover:shadow-[5px_5px_0_var(--ink)] active:translate-y-[1px] active:rotate-0 active:shadow-[2px_2px_0_var(--ink)]';
      break;
  }

  const baseStyles =
    'inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 px-6 py-2 outline-none focus-visible:ring-2 focus-visible:ring-orange/50 focus-visible:ring-offset-2 focus-visible:ring-offset-cream disabled:pointer-events-none disabled:opacity-45 disabled:grayscale-[0.15] disabled:shadow-none';

  const combinedClassName = `${baseStyles} ${variantStyles} ${className}`.trim();

  if ('href' in rest && rest.href) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={combinedClassName} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={combinedClassName} {...buttonProps}>
      {children}
    </button>
  );
}
