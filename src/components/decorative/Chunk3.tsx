import React from "react";
import { cn } from "@/lib/utils";
import { AssetProps } from "./AssetProps";

export function Chunk3({ className, fillColor = "var(--caramel)", ...props }: AssetProps) {
  // Triangle-ish smooth chunk without stroke
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className={cn("overflow-visible drop-shadow-[2px_2px_0_var(--ink)]", className)} {...props}>
      <path d="M14 2C22 5 28 14 24 22C18 28 6 26 2 18C0 10 6 3 14 2Z" fill={fillColor} />
    </svg>
  );
}
