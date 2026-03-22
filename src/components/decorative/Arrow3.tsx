import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Arrow3({ className, strokeColor = "var(--orange)", strokeWidth = 2, ...props }: AssetProps) {
  // Looped expressive pointer
  return (
    <svg width="80" height="50" viewBox="0 0 80 50" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M10 40C20 0 40 0 35 20C30 40 50 35 70 25" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 15L70 25L65 35" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
