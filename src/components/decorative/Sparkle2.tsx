import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Sparkle2({ className, fillColor = "transparent", strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  // A tighter, taller 4-point sparkle
  return (
    <svg width="24" height="36" viewBox="0 0 24 36" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M12 2C12 12 16 16 22 18C16 20 12 24 12 34C12 24 8 20 2 18C8 16 12 12 12 2Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
