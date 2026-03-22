import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Crumb2({ className, fillColor = "var(--caramel)", strokeColor = "var(--ink)", strokeWidth = 2, ...props }: AssetProps) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M6 1C9 1.5 11 4 10 8C9 11 4 12 2 8C0 5 2 2 6 1Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  );
}
