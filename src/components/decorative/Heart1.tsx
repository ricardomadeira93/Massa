import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Heart1({ className, fillColor = "var(--orange)", strokeColor = "var(--ink)", strokeWidth = 3, ...props }: AssetProps) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className={cn("overflow-visible", className)} {...props}>
      <path d="M20 34.5C20 34.5 6 25 6 15C6 10.5 9.5 7 14 7C16.5 7 18.5 8.5 20 10.5C21.5 8.5 23.5 7 26 7C30.5 7 34 10.5 34 15C34 25 20 34.5 20 34.5Z" fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className="translate-x-1" />
      <path d="M11 15C11 12 12.5 10 14.5 10" stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
