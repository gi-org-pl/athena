import { forwardRef, useEffect, useRef } from "react";
import CheckIcon from "../../../../assets/icons/check-icon.svg";
import { cn } from "../../../../lib/utils";
import {
  DropdownMenuItem,
  DropdownMenuItemIndicator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "./ActionList.methods";
import type { ActionItem, ActionListProps } from "./ActionList.types";

const ITEM_CLASS_NAME = "flex items-center justify-between gap-2";
const SLOT_CLASS_NAME = "flex size-4 items-center justify-center shrink-0";

const renderLabel = (item: ActionItem) => (
  <span className="flex-1 text-left font-normal">{item.label}</span>
);

const renderIconSlot = (item: ActionItem) =>
  item.icon ? (
    <span className={SLOT_CLASS_NAME}>{item.icon}</span>
  ) : (
    <div className="size-4 shrink-0" />
  );

export const ActionList = forwardRef<HTMLDivElement, ActionListProps>(
  ({ items, className, ...props }, ref) => {
    const selectedItemRef = useRef<HTMLDivElement>(null);
    // The list is a choice of one value as soon as any item says whether it
    // is selected. Of several selected items the first one counts.
    const isChoice = items.some((item) => item.isSelected !== undefined);
    const selectedIndex = items.findIndex((item) => item.isSelected);

    useEffect(() => {
      // The menu takes focus when it opens, so the selected item gets it one
      // frame later.
      const frame = requestAnimationFrame(() =>
        selectedItemRef.current?.focus(),
      );
      return () => cancelAnimationFrame(frame);
    }, []);

    if (!isChoice) {
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
              className={ITEM_CLASS_NAME}
            >
              {renderLabel(item)}
              {renderIconSlot(item)}
            </DropdownMenuItem>
          ))}
        </div>
      );
    }

    return (
      <DropdownMenuRadioGroup
        ref={ref}
        value={String(selectedIndex)}
        className={cn("flex flex-col gap-0.5", className)}
        {...props}
      >
        {items.map((item, index) => {
          const isSelected = index === selectedIndex;

          return (
            <DropdownMenuRadioItem
              key={index}
              ref={isSelected ? selectedItemRef : undefined}
              value={String(index)}
              onClick={item.onClick}
              variant={item.variant}
              className={ITEM_CLASS_NAME}
            >
              {renderLabel(item)}
              {isSelected ? (
                <DropdownMenuItemIndicator className={SLOT_CLASS_NAME}>
                  <CheckIcon />
                </DropdownMenuItemIndicator>
              ) : (
                renderIconSlot(item)
              )}
            </DropdownMenuRadioItem>
          );
        })}
      </DropdownMenuRadioGroup>
    );
  },
);

ActionList.displayName = "ActionList";
