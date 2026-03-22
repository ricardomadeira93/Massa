import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Crumb3({ className, fillColor = "var(--butter)", strokeColor = "var(--ink)", strokeWidth = 2, ...props }: AssetProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M10 2C15 4 18 9 15 15C12 19 6 18 3 12C1 8 5 3 10 2Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <circle cx="8" cy="10" r="1" fill={strokeColor} />
      <circle cx="12" cy="14" r="1.5" fill={strokeColor} />
    </svg>
  );
}
