import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Sparkle1({ className, fillColor = "var(--orange)", strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M16 2C16 10 20 16 28 16C20 16 16 22 16 30C16 22 12 16 4 16C12 16 16 10 16 2Z" fill={fillColor} />
      <path d="M15 4C17 12 21 15 29 16C20 18 16 22 15 31C13 22 8 18 2 16C10 14 13 11 15 4Z" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
