import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Arrow2({ className, strokeColor = "var(--terracotta)", strokeWidth = 4, ...props }: AssetProps) {
  // Direct, punchy handmade vector
  return (
    <svg width="40" height="30" viewBox="0 0 40 30" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M4 15Q15 12 36 15" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M28 6L36 15L24 24" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
