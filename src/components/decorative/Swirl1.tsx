import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Swirl1({ className, strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M24 8C33 8 40 15 40 24C40 33 33 40 24 40C15 40 8 33 8 24C8 18 12 14 18 14C23 14 28 18 28 24C28 28 25 32 20 32C18 32 16 30 16 28" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
