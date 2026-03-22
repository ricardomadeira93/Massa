import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Trail2({ className, strokeColor = "var(--orange)", strokeWidth = 2, ...props }: AssetProps) {
  // Loop-de-loop dotted
  return (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M4 50C20 45 40 10 60 30C80 50 100 15 116 10" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="2 6" />
    </svg>
  );
}
