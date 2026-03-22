import { SVGProps } from 'react';

interface DoodleIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
}

function BaseSVG({
  size = 24,
  color = 'currentColor',
  children,
  className = '',
  strokeWidth = 6,
  ...props
}: DoodleIconProps & { strokeWidth?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
}

export function CookieMark({ size = 48, color = 'currentColor', className }: DoodleIconProps) {
  return (
    <BaseSVG size={size} color={color} className={className}>
      <path d="M 25 45 C 10 20, 50 5, 80 25 C 100 45, 95 80, 75 95 C 45 110, 15 90, 25 45 Z" fill="var(--butter)" />
      <path d="M 35 40 C 45 25, 60 30, 70 40" strokeWidth="5" />
      <circle cx="45" cy="45" r="4" fill={color} stroke="none" />
      <circle cx="70" cy="55" r="5" fill={color} stroke="none" />
      <circle cx="55" cy="75" r="4" fill={color} stroke="none" />
      <circle cx="35" cy="70" r="3" fill={color} stroke="none" />
    </BaseSVG>
  );
}

export function IconInstagram({ size = 24, color = 'currentColor', className }: DoodleIconProps) {
  return (
    <BaseSVG size={size} color={color} className={className}>
      <path d="M 25 20 C 60 15, 80 25, 85 40 C 90 70, 80 85, 45 85 C 20 85, 10 70, 15 45 C 10 25, 20 20, 25 20 Z" />
      <path d="M 40 40 C 60 30, 70 50, 60 65 C 50 75, 30 65, 40 40 Z" />
      <path d="M 70 30 L 72 32" strokeWidth="8" />
    </BaseSVG>
  );
}

export function IconPhone({ size = 24, color = 'currentColor', className }: DoodleIconProps) {
  return (
    <BaseSVG size={size} color={color} className={className}>
      <path d="M 25 25 C 35 20, 45 35, 35 45 C 25 55, 40 80, 55 70 C 65 60, 80 65, 75 80 C 70 95, 45 90, 30 75 C 15 60, 10 35, 25 25 Z" />
    </BaseSVG>
  );
}

export function IconPlus({ size = 24, color = 'currentColor', className }: DoodleIconProps) {
  return (
    <BaseSVG size={size} color={color} className={className}>
      <path d="M 20 50 C 40 45, 60 55, 80 45" />
      <path d="M 55 20 C 50 40, 45 60, 48 80" />
    </BaseSVG>
  );
}

export function IconMinus({ size = 24, color = 'currentColor', className }: DoodleIconProps) {
  return (
    <BaseSVG size={size} color={color} className={className}>
      <path d="M 20 50 C 40 45, 60 55, 80 45" />
    </BaseSVG>
  );
}

export function IconWarning({ size = 24, color = 'currentColor', className }: DoodleIconProps) {
  return (
    <BaseSVG size={size} color={color} className={className}>
      <path d="M 50 15 C 30 50, 15 85, 15 90 C 15 100, 85 95, 85 90 C 85 85, 70 50, 50 15 Z" fill="var(--orange)" opacity="0.2" stroke="none" />
      <path d="M 50 15 C 30 50, 15 85, 15 90 C 15 100, 85 95, 85 90 C 85 85, 70 50, 50 15 Z" />
      <path d="M 50 40 C 48 50, 45 60, 48 70" strokeWidth="8" />
      <path d="M 45 85 C 48 88, 50 85, 52 82" strokeWidth="8" />
    </BaseSVG>
  );
}

export function IconArrowDown({ size = 24, color = 'currentColor', className }: DoodleIconProps) {
  return (
    <BaseSVG size={size} color={color} className={className}>
      <path d="M 50 15 C 48 40, 52 60, 50 85" strokeWidth="6" />
      <path d="M 30 65 C 40 75, 45 80, 50 85 C 55 80, 65 70, 75 60" />
    </BaseSVG>
  );
}

export function BakerHero({ size = 260, color = 'currentColor', className }: DoodleIconProps) {
  return (
    <BaseSVG size={size} color={color} className={className} strokeWidth={4}>
      <path d="M 20 40 C 5 20, 30 5, 40 20 C 50 0, 70 5, 75 25 C 95 20, 95 45, 80 55 C 90 70, 70 85, 55 75 C 45 90, 25 85, 20 70 C 5 70, 0 45, 20 40 Z" fill="var(--butter)" />
      <path d="M 30 75 C 50 85, 70 70, 80 55" strokeWidth="6" />
      <circle cx="35" cy="35" r="4" fill={color} stroke="none" />
      <circle cx="65" cy="40" r="5" fill={color} stroke="none" />
      <path d="M 45 60 C 50 65, 55 60, 60 55" strokeWidth="5" strokeLinecap="round" />
    </BaseSVG>
  );
}
