import React from "react";
import { cn } from "@/lib/utils";

interface AssetProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number | string;
}

// ==========================================
// 1. SPARKLES (3 variations)
// ==========================================
export function Sparkle1({ className, fillColor = "var(--orange)", strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M16 2C16 10 20 16 28 16C20 16 16 22 16 30C16 22 12 16 4 16C12 16 16 10 16 2Z" fill={fillColor} />
      <path d="M15 4C17 12 21 15 29 16C20 18 16 22 15 31C13 22 8 18 2 16C10 14 13 11 15 4Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Sparkle2({ className, fillColor = "transparent", strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  // A tighter, taller 4-point sparkle
  return (
    <svg width="24" height="36" viewBox="0 0 24 36" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M12 2C12 12 16 16 22 18C16 20 12 24 12 34C12 24 8 20 2 18C8 16 12 12 12 2Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Sparkle3({ className, fillColor = "var(--butter)", strokeColor = "var(--terracotta)", strokeWidth = 3, ...props }: AssetProps) {
  // A funky 3-point pop
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M14 2C15 12 20 16 26 18C18 20 10 24 8 26C10 18 8 10 14 2Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ==========================================
// 2. HEARTS (2 variations)
// ==========================================
export function Heart1({ className, fillColor = "var(--orange)", strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M20 34.5C20 34.5 6 25 6 15C6 10.5 9.5 7 14 7C16.5 7 18.5 8.5 20 10.5C21.5 8.5 23.5 7 26 7C30.5 7 34 10.5 34 15C34 25 20 34.5 20 34.5Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className="translate-x-1" />
      <path d="M11 15C11 12 12.5 10 14.5 10" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Heart2({ className, fillColor = "var(--terracotta)", strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  // A tilted, slightly squashed thicker heart
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M16 28C16 28 3 19 4 10C5 6 9 3 13 4C14.5 4.5 16 6 16 8C17 6 20 3 23 3C27 2.5 30 7 28 12C26 20 16 28 16 28Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ==========================================
// 3. CRUMBS (4 variations)
// ==========================================
export function Crumb1({ className, fillColor = "var(--caramel)", strokeColor = "var(--ink)", strokeWidth = 2, ...props }: AssetProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={cn("overflow-visible drop-shadow-[2px_2px_0_var(--ink)]", className)} {...props}>
      <path d="M8 2C12 3 14 6 13 10C12 14 6 15 3 11C1 8 3 4 5 3C6 2.5 7 2 8 2Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <circle cx="6" cy="7" r="1.5" fill={strokeColor} />
    </svg>
  );
}
export function Crumb2({ className, fillColor = "var(--caramel)", strokeColor = "var(--ink)", strokeWidth = 2, ...props }: AssetProps) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M6 1C9 1.5 11 4 10 8C9 11 4 12 2 8C0 5 2 2 6 1Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  );
}
export function Crumb3({ className, fillColor = "var(--butter)", strokeColor = "var(--ink)", strokeWidth = 2, ...props }: AssetProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M10 2C15 4 18 9 15 15C12 19 6 18 3 12C1 8 5 3 10 2Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <circle cx="8" cy="10" r="1" fill={strokeColor} />
      <circle cx="12" cy="14" r="1.5" fill={strokeColor} />
    </svg>
  );
}
export function Crumb4({ className, fillColor = "transparent", strokeColor = "var(--terracotta)", strokeWidth = 2, ...props }: AssetProps) {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className={cn("overflow-visible", className)} {...props}>
      <circle cx="4" cy="4" r="3" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} />
    </svg>
  );
}

// ==========================================
// 4. CHUNKS (3 variations)
// ==========================================
export function Chunk1({ className, fillColor = "var(--ink-muted)", strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  // Large chocolate chunk
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M6 10L14 4L26 8L28 20L18 28L4 22Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  );
}
export function Chunk2({ className, fillColor = "var(--brown)", strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  // Rectangle-ish chunk
  return (
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M4 6L16 2L36 8L34 20L12 22L2 14Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  );
}
export function Chunk3({ className, fillColor = "var(--caramel)", ...props }: AssetProps) {
  // Triangle-ish smooth chunk without stroke
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className={cn("overflow-visible drop-shadow-[2px_2px_0_var(--ink)]", className)} {...props}>
      <path d="M14 2C22 5 28 14 24 22C18 28 6 26 2 18C0 10 6 3 14 2Z" fill={fillColor} />
    </svg>
  );
}

// ==========================================
// 5. TRAILS (3 variations)
// ==========================================
export function Trail1({ className, strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  return (
    <svg width="100" height="40" viewBox="0 0 100 40" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M4 20C20 2 40 38 70 20C85 10 90 28 96 34" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 10" />
    </svg>
  );
}
export function Trail2({ className, strokeColor = "var(--orange)", strokeWidth = 2, ...props }: AssetProps) {
  // Loop-de-loop dotted
  return (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M4 50C20 45 40 10 60 30C80 50 100 15 116 10" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 6" />
    </svg>
  );
}
export function Trail3({ className, strokeColor = "var(--terracotta)", strokeWidth = 3, ...props }: AssetProps) {
  // Straight wave dotted
  return (
    <svg width="200" height="20" viewBox="0 0 200 20" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M0 10C30 0 70 20 100 10C130 0 170 20 200 10" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 12" />
    </svg>
  );
}

// ==========================================
// 6. SWIRLS (3 variations)
// ==========================================
export function Swirl1({ className, strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M24 8C33 8 40 15 40 24C40 33 33 40 24 40C15 40 8 33 8 24C8 18 12 14 18 14C23 14 28 18 28 24C28 28 25 32 20 32C18 32 16 30 16 28" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Swirl2({ className, strokeColor = "var(--caramel)", strokeWidth = 2.5, ...props }: AssetProps) {
  // Long loopy text accent
  return (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M4 20C20 30 40 10 50 20C60 30 50 35 45 25C40 15 60 5 80 15C100 25 110 10 116 5" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Swirl3({ className, strokeColor = "var(--honey)", strokeWidth = 4, ...props }: AssetProps) {
  // Tight little messy coil
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M12 4C18 5 20 10 18 15C15 20 8 21 5 16C2 10 8 5 12 8C15 11 15 15 12 18" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ==========================================
// 7. ARROWS (3 variations)
// ==========================================
export function Arrow1({ className, strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  // Thick scribble arrow (curved down)
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M8 8C20 12 35 15 50 25C40 28 32 30 25 36" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 12C45 18 50 25 50 25C48 30 42 35 42 35" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Arrow2({ className, strokeColor = "var(--terracotta)", strokeWidth = 4, ...props }: AssetProps) {
  // Direct, punchy handmade vector
  return (
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M4 15Q15 12 36 15" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 6L36 15L24 24" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Arrow3({ className, strokeColor = "var(--orange)", strokeWidth = 2, ...props }: AssetProps) {
  // Looped expressive pointer
  return (
    <svg width="80" height="50" viewBox="0 0 80 50" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M10 40C20 0 40 0 35 20C30 40 50 35 70 25" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 15L70 25L65 35" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ==========================================
// 8. SCRIBBLES / MARKS (2 variations)
// ==========================================
export function Scribble1({ className, strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  // Crossmark / spark
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M4 6C8 10 12 12 16 18" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 4C12 8 8 14 4 16" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
export function Scribble2({ className, strokeColor = "var(--caramel)", strokeWidth = 4, ...props }: AssetProps) {
  // Three accent slashes
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M4 4C8 6 10 12 8 20" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M12 2C16 8 16 14 12 22" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M20 6C22 10 20 16 16 20" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

// ==========================================
// 8. DIVIDER DOODLE (Reusable borders)
// ==========================================
export function DividerDoodle({ className, strokeColor = "var(--ink)", strokeWidth = 2, ...props }: AssetProps) {
  return (
    <svg width="100%" height="12" viewBox="0 0 200 12" preserveAspectRatio="none" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M0 6C20 2 40 10 60 6C80 2 100 10 120 6C140 2 160 10 180 6C190 4 195 2 200 6" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
