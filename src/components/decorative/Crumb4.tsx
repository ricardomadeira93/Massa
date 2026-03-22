import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Crumb4({ className, fillColor = "transparent", strokeColor = "var(--terracotta)", strokeWidth = 2, ...props }: AssetProps) {
  return (
    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className={cn("overflow-visible", className)} {...props}>
      <circle cx="4" cy="4" r="3" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} />
    </svg>
  );
}
