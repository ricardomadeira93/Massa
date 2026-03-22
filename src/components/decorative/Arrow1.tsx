import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Arrow1({ className, strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  // Thick scribble arrow (curved down)
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M8 8C20 12 35 15 50 25C40 28 32 30 25 36" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 12C45 18 50 25 50 25C48 30 42 35 42 35" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
