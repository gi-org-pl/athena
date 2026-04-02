import { type ComponentPropsWithoutRef, type ReactNode } from "react";
import { Tooltip as ShadcnTooltip } from "./tooltip-base";

export type TooltipSide = "top" | "right" | "bottom" | "left";
export type TooltipAlign = "start" | "center" | "end";

export interface TooltipProps extends ComponentPropsWithoutRef<typeof ShadcnTooltip> {
  children: ReactNode;
  content: ReactNode;
  side?: TooltipSide;
  align?: TooltipAlign;
  delay?: number;
  dataTestId?: string;
}