import {
  Arrow,
  Content,
  Portal,
  Provider,
  Root,
  Trigger,
} from "@radix-ui/react-tooltip";
import { type ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const TooltipProvider = ({
  delayDuration = 0,
  ...props
}: ComponentProps<typeof Provider>) => (
  <Provider delayDuration={delayDuration} {...props} />
);

export const TooltipRoot = Root;

export const TooltipTrigger = ({
  ...props
}: ComponentProps<typeof Trigger>) => <Trigger {...props} />;

export const TooltipContent = ({
  className,
  sideOffset = 4,
  children,
  ...props
}: ComponentProps<typeof Content>) => (
  <Portal>
    <Content
      sideOffset={sideOffset}
      className={cn(
        "bg-gi-primary text-white z-50 w-fit rounded-sm px-3 py-1.5 text-xs animate-in fade-in-0 zoom-in-95 duration-300 ease-in-out",
        className,
      )}
      {...props}
    >
      {children}
      <Arrow className="fill-gi-primary" />
    </Content>
  </Portal>
);
