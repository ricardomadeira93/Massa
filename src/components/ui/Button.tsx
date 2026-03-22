import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

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
      variantStyles = 'bg-ink text-cream hover:-rotate-1 shadow-[4px_4px_0_var(--orange)] hover:shadow-[5px_5px_0_var(--orange)] transition-all font-display border-[3px] border-ink rounded-drawn hover:-translate-y-0.5';
      break;
    case 'solid-orange':
      variantStyles = 'bg-terracotta text-cream font-display hover:-rotate-1 shadow-[4px_4px_0_var(--ink)] hover:shadow-[5px_5px_0_var(--ink)] transition-all border-[3px] border-ink rounded-drawn hover:-translate-y-0.5';
      break;
    case 'ghost':
      variantStyles = 'bg-transparent text-ink underline decoration-sand decoration-[3px] hover:text-terracotta transition-colors rounded-drawn hover:bg-butter/50 px-2 py-1';
      break;
    case 'wa-green':
      variantStyles = 'bg-[#25D366] text-white hover:bg-[#20bd5a] hover:-rotate-1 shadow-[4px_4px_0_var(--ink)] hover:shadow-[5px_5px_0_var(--ink)] transition-all font-display border-[3px] border-ink rounded-drawn hover:-translate-y-0.5';
      break;
  }

  // Touch targets minimum 44px
  const baseStyles = 'inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 py-2 outline-none focus-visible:ring-2 focus-visible:ring-orange/50 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none';

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
