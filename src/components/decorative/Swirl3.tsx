import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Swirl3({ className, strokeColor = "var(--honey)", strokeWidth = 4, ...props }: AssetProps) {
  // Tight little messy coil
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M12 4C18 5 20 10 18 15C15 20 8 21 5 16C2 10 8 5 12 8C15 11 15 15 12 18" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
