import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Trail3({ className, strokeColor = "var(--terracotta)", strokeWidth = 3, ...props }: AssetProps) {
  // Straight wave dotted
  return (
    <svg width="200" height="20" viewBox="0 0 200 20" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M0 10C30 0 70 20 100 10C130 0 170 20 200 10" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" strokeDasharray="6 12" />
    </svg>
  );
}
