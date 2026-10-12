import {
  Content,
  Item,
  ItemIndicator,
  Portal,
  RadioGroup,
  RadioItem,
  Root,
  Trigger,
} from "@radix-ui/react-dropdown-menu";
import { type ComponentProps } from "react";

import { cn } from "../../../../lib/utils";

type DropdownMenuItemVariant = "default" | "danger";

const getItemClassName = (
  variant: DropdownMenuItemVariant,
  className?: string,
) =>
  cn(
    "relative flex cursor-pointer items-center gap-1 rounded-lg px-3 py-1.5 text-sm outline-none select-none transition-colors text-gi-primary",
    "data-[highlighted]:bg-gi-ash data-[highlighted]:text-gi-primary",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8",
    variant === "danger" &&
      "text-gi-red data-[highlighted]:bg-red-50 data-[highlighted]:text-gi-red",
    className,
  );

export function DropdownMenu({ ...props }: ComponentProps<typeof Root>) {
  return <Root data-slot="dropdown-menu" {...props} />;
}

export function DropdownMenuTrigger({
  ...props
}: ComponentProps<typeof Trigger>) {
  return <Trigger data-slot="dropdown-menu-trigger" {...props} />;
}

export function DropdownMenuContent({
  className,
  sideOffset = 4,
  align = "end",
  ...props
}: ComponentProps<typeof Content>) {
  return (
    <Portal>
      <Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        align={align}
        className={cn(
          "z-50 max-h-(--radix-dropdown-menu-content-available-height) origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-2xl border border-gi-dark-ash bg-white p-1.5 text-popover-foreground data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "w-40",
          className,
        )}
        {...props}
      />
    </Portal>
  );
}

export function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: ComponentProps<typeof Item> & {
  inset?: boolean;
  variant?: DropdownMenuItemVariant;
}) {
  return (
    <Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={getItemClassName(variant, className)}
      {...props}
    />
  );
}

export function DropdownMenuRadioGroup({
  ...props
}: ComponentProps<typeof RadioGroup>) {
  return <RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
}

export function DropdownMenuRadioItem({
  className,
  variant = "default",
  ...props
}: ComponentProps<typeof RadioItem> & {
  variant?: DropdownMenuItemVariant;
}) {
  return (
    <RadioItem
      data-slot="dropdown-menu-radio-item"
      data-variant={variant}
      className={getItemClassName(variant, className)}
      {...props}
    />
  );
}

export function DropdownMenuItemIndicator({
  ...props
}: ComponentProps<typeof ItemIndicator>) {
  return <ItemIndicator data-slot="dropdown-menu-item-indicator" {...props} />;
}
