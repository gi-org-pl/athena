import { Root } from "@radix-ui/react-radio-group";
import { type ComponentPropsWithoutRef, forwardRef, type ComponentRef } from "react";
import { cn } from "@/lib/utils";

export const RadioGroup = forwardRef<
  ComponentRef<typeof Root>,
  ComponentPropsWithoutRef<typeof Root>
>(({ className, orientation = "vertical", ...props }, ref) => {
  return (
    <Root
      data-slot="radio-group"
      orientation={orientation}
      ref={ref}
      className={cn(
        "grid gap-2 text-gi-primary",
        orientation === "horizontal"
          ? "grid-flow-col auto-cols-max"
          : "grid-cols-1",
        className,
      )}
      {...props}
    />
  );
});

RadioGroup.displayName = "RadioGroup";

