import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Scribble2({ className, strokeColor = "var(--caramel)", strokeWidth = 4, ...props }: AssetProps) {
  // Three accent slashes
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M4 4C8 6 10 12 8 20" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M12 2C16 8 16 14 12 22" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
      <path d="M20 6C22 10 20 16 16 20" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}
