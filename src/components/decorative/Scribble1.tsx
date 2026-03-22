import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Scribble1({ className, strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  // Crossmark / spark
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M4 6C8 10 12 12 16 18" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 4C12 8 8 14 4 16" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
