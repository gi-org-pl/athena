import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import * as React from "react";
import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, orientation = "vertical", ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      orientation={orientation}
      className={cn(
        "grid gap-2",
        // Logic to handle visual orientation
        orientation === "horizontal" ? "grid-flow-col auto-cols-max" : "grid-cols-1",
        className
      )}
      {...ref}
      {...props}
    />
  );
});

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

export { RadioGroup };