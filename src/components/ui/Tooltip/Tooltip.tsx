import * as React from "react"
import * as TooltipPrimitive from "@radix-ui/react-tooltip"
import {
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip-base"

export interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
  delay?: number;
  dataTestId?: string;
}

const Tooltip = ({
  children,
  content,
  side = "top",
  align = "center",
  delay = 200,
  dataTestId,
}: TooltipProps) => {
  return (
    <TooltipProvider delayDuration={delay}>
      <ShadcnTooltip>
        <TooltipTrigger asChild>
          <span className="cursor-default inline-block">{children}</span>
        </TooltipTrigger>
        <TooltipContent
          side={side}
          align={align}
          data-test-id={dataTestId}
          className="bg-[#003c47] text-white border-none shadow-md"
        >
          {content}
          <TooltipPrimitive.Arrow className="fill-[#003c47]" />
        </TooltipContent>
      </ShadcnTooltip>
    </TooltipProvider>
  )
}

export { Tooltip }