import { forwardRef } from "react";
import {
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip-base";
import type { TooltipProps } from "./Tooltip.types";

const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(
  (
    {
      children,
      content,
      side = "top",
      align = "center",
      delay = 200,
      dataTestId,
      ...props
    },
    ref,
  ) => {
    return (
      <TooltipProvider delayDuration={delay}>
        <ShadcnTooltip {...props}>
          <TooltipTrigger asChild>
            <span ref={ref} className="cursor-default inline-block">
              {children}
            </span>
          </TooltipTrigger>
          <TooltipContent side={side} align={align} data-test-id={dataTestId}>
            {content}
          </TooltipContent>
        </ShadcnTooltip>
      </TooltipProvider>
    );
  },
);

Tooltip.displayName = "Tooltip";

export { Tooltip };