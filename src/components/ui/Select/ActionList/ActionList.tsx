import { DropdownMenuItem } from "./ActionList.methods";
import { cn } from "@/lib/utils";
import type { ActionListProps } from "./ActionList.types";
import { forwardRef } from "react";

export const ActionList = forwardRef<HTMLDivElement, ActionListProps>(
  ({ items, className, ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        className={cn("flex flex-col gap-0.5", className)} 
        {...props}
      >
        {items.map((item, index) => (
          <DropdownMenuItem
            key={index}
            onClick={item.onClick}
            variant={item.variant}
            className="flex items-center justify-between gap-2"
          >
            <span className="flex-1 text-left font-normal">{item.label}</span>
            {item.icon && (
              <span className="flex size-4 items-center justify-center shrink-0">
                {item.icon}
              </span>
            )}
            {!item.icon && <div className="size-4 shrink-0" />}
          </DropdownMenuItem>
        ))}
      </div>
    );
  },
);

ActionList.displayName = "ActionList";