import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Heart2({ className, fillColor = "var(--terracotta)", strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  // A tilted, slightly squashed thicker heart
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M16 28C16 28 3 19 4 10C5 6 9 3 13 4C14.5 4.5 16 6 16 8C17 6 20 3 23 3C27 2.5 30 7 28 12C26 20 16 28 16 28Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
