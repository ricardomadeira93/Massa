import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Sparkle3({ className, fillColor = "var(--butter)", strokeColor = "var(--terracotta)", strokeWidth = 3, ...props }: AssetProps) {
  // A funky 3-point pop
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M14 2C15 12 20 16 26 18C18 20 10 24 8 26C10 18 8 10 14 2Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
