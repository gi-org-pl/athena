import {Root, Indicator} from "@radix-ui/react-checkbox";
import { useId } from "react";
import type { CheckboxProps } from "./Checkbox.types";
import { cn } from "@/lib/utils";

export const Checkbox = ({
  className,
  label,
  secondaryLabel,
  id,
  ...props
}: CheckboxProps) => {
  const generatedId = useId();
  const checkboxId = id ?? generatedId;
  const descriptionId = `${checkboxId}-description`;

  return (
    <div className="flex items-start group">
      <Root
        id={checkboxId}
        data-slot="checkbox"
        aria-describedby={secondaryLabel ? descriptionId : undefined}
        className={cn(
          "peer shrink-0 rounded-xs border shadow-xs transition-all outline-none",
          "size-3.5 border-input dark:bg-gi-primary/30",
          "focus-visible:ring-2 focus-visible:ring-gi-primary focus-visible:ring-offset-2 ring-offset-background",
          "data-[state=checked]:bg-gi-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-gi-dark-ash",
          "aria-invalid:border-gi-red aria-invalid:ring-gi-red/20 dark:aria-invalid:ring-gi-red/40",
          "disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer",
          className
        )}
        {...props}
      >
        <Indicator
          data-slot="checkbox-indicator"
          className="grid place-content-center text-current transition-none"
        >
        </Indicator>
      </Root>

      <div className="flex flex-col ml-2 select-none">
        <label
          htmlFor={checkboxId}
          className="font-medium text-sm leading-3.5 text-gi-primary mb-1.5 cursor-pointer peer-disabled:cursor-not-allowed"
        >
          {label}
        </label>
        {secondaryLabel && (
          <span 
            id={descriptionId} 
            className="text-gi-gray text-sm leading-5"
          >
            {secondaryLabel}
          </span>
        )}
      </div>
    </div>
  );
};

Checkbox.displayName = "Checkbox";