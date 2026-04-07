import { type HTMLAttributes, type ReactNode } from "react";

export type TooltipSide = "top" | "right" | "bottom" | "left";
export type TooltipAlign = "start" | "center" | "end";

export interface TooltipProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, "content"> {
  children: ReactNode;
  content: ReactNode;
  side?: TooltipSide;
  align?: TooltipAlign;
  delay?: number;
  dataTestId?: string;
  open?: boolean;
}

export const TOOLTIP_SIDES: TooltipSide[] = ["top", "right", "bottom", "left"];
export const TOOLTIP_ALIGNS: TooltipAlign[] = ["start", "center", "end"];
