import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Crumb1({ className, fillColor = "var(--caramel)", strokeColor = "var(--ink)", strokeWidth = 2, ...props }: AssetProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={cn("overflow-visible drop-shadow-[2px_2px_0_var(--ink)]", className)} {...props}>
      <path d="M8 2C12 3 14 6 13 10C12 14 6 15 3 11C1 8 3 4 5 3C6 2.5 7 2 8 2Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
      <circle cx="6" cy="7" r="1.5" fill={strokeColor} />
    </svg>
  );
}
