import React from "react";

export interface AssetProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number | string;
}
