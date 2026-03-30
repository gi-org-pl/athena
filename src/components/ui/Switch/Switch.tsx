import { forwardRef, type ElementRef, type ComponentPropsWithoutRef  } from "react";
import { Root, Thumb} from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

export const Switch = forwardRef<
  ElementRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, ...props }, ref) => (
  <Root
    ref={ref}
    data-slot="switch"
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] focus-visible:border-ring focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-gi-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
  >
    <Thumb
      data-slot="switch-thumb"
      className={cn(
        "bg-background pointer-events-none block size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[21px] data-[state=unchecked]:translate-x-px"
      )}
    />
  </Root>
));

Switch.displayName = "Switch";