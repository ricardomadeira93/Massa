import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Chunk2({ className, fillColor = "var(--brown)", strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  // Rectangle-ish chunk
  return (
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M4 6L16 2L36 8L34 20L12 22L2 14Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  );
}
