import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import {
  TooltipContent,
  TooltipProvider,
  TooltipRoot,
  TooltipTrigger,
} from "./Tooltip.methods";
import { type TooltipProps } from "./Tooltip.types";

export const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(
  (
    {
      children,
      content,
      side = "top",
      align = "center",
      delay = 200,
      dataTestId,
      className,
      open,
      ...props
    },
    ref,
  ) => {
    const calculatedAlignOffset =
      align === "center" ? 0 : side === "top" || side === "bottom" ? 14 : 4;

    const flippedAlign =
      align === "start" ? "end" : align === "end" ? "start" : "center";

    return (
      <TooltipProvider delayDuration={delay}>
        <TooltipRoot open={open}>
          <TooltipTrigger asChild>
            <span
              ref={ref}
              className={cn("cursor-pointer inline-block", className)}
              {...props}
            >
              {children}
            </span>
          </TooltipTrigger>
          <TooltipContent
            side={side}
            align={flippedAlign}
            alignOffset={calculatedAlignOffset}
            data-test-id={dataTestId}
          >
            {content}
          </TooltipContent>
        </TooltipRoot>
      </TooltipProvider>
    );
  },
);

Tooltip.displayName = "Tooltip";
