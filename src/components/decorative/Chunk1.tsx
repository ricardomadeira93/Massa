import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Chunk1({ className, fillColor = "var(--ink-muted)", strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  // Large chocolate chunk
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M6 10L14 4L26 8L28 20L18 28L4 22Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinejoin="round" />
    </svg>
  );
}
