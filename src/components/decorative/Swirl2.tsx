import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Swirl2({ className, strokeColor = "var(--caramel)", strokeWidth = 2.5, ...props }: AssetProps) {
  // Long loopy text accent
  return (
    <svg width="120" height="40" viewBox="0 0 120 40" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M4 20C20 30 40 10 50 20C60 30 50 35 45 25C40 15 60 5 80 15C100 25 110 10 116 5" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
