import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Trail1({ className, strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  return (
    <svg width="100" height="40" viewBox="0 0 100 40" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M4 20C20 2 40 38 70 20C85 10 90 28 96 34" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 10" />
    </svg>
  );
}
