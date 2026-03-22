import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function DividerDoodle({ className, strokeColor = "var(--ink)", strokeWidth = 2, ...props }: AssetProps) {
  return (
    <svg width="100%" height="12" viewBox="0 0 200 12" preserveAspectRatio="none" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M0 6C20 2 40 10 60 6C80 2 100 10 120 6C140 2 160 10 180 6C190 4 195 2 200 6" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
