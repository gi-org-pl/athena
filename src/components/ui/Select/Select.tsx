import { forwardRef, useCallback, useRef, useState } from "react";
import ChevronDown from "@/assets/icons/chevron-down-icon.svg";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ActionList/ActionList.methods";
import { type SelectProps } from "./Select.types";

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      value,
      placeholder,
      size = "regular",
      openOn = "click",
      children,
      isDisabled = false,
      dataTestId,
      className,
      trigger,
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const isOpenRef = useRef(false);

    const handleOpen = useCallback(() => {
      if (isDisabled || openOn !== "hover") return;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      if (!isOpenRef.current) {
        isOpenRef.current = true;
        setOpen(true);
      }
    }, [isDisabled, openOn]);

    const handleClose = useCallback(() => {
      if (openOn !== "hover") return;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        isOpenRef.current = false;
        setOpen(false);
      }, 150);
    }, [openOn]);

    const onOpenChange = (nextOpen: boolean) => {
      isOpenRef.current = nextOpen;
      setOpen(nextOpen);
    };

    return (
      <div
        className="relative inline-block min-w-32"
        onPointerEnter={handleOpen}
        onPointerLeave={handleClose}
      >
        <DropdownMenu open={open} onOpenChange={onOpenChange} modal={false}>
          <DropdownMenuTrigger asChild disabled={isDisabled}>
            {trigger || (
              <div
                ref={ref}
                role="button"
                tabIndex={isDisabled ? -1 : 0}
                data-test-id={dataTestId}
                className={cn(
                  "flex w-full items-center justify-between gap-2 rounded-full bg-gi-ash px-3 py-2 text-gi-primary font-bold transition-all duration-300 ease",
                  size === "small" ? "h-8" : "h-10",
                  isDisabled
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer",
                  className,
                )}
                onPointerDown={(e) => {
                  if (isDisabled || openOn === "hover") e.preventDefault();
                }}
                onClick={(e) => {
                  if (isDisabled || openOn === "hover") e.preventDefault();
                }}
                {...props}
              >
                <div className="truncate text-left flex-1 pointer-events-none select-none">
                  {value || placeholder}
                </div>
                <ChevronDown />
              </div>
            )}
          </DropdownMenuTrigger>

          <DropdownMenuContent
            onPointerEnter={handleOpen}
            onPointerLeave={handleClose}
            sideOffset={4}
            className={cn(
              "min-w-[var(--radix-dropdown-menu-trigger-width)]",
              "before:absolute before:-top-[12px] before:left-0 before:h-[12px] before:w-full before:content-['']",
            )}
            onCloseAutoFocus={(e) => openOn === "hover" && e.preventDefault()}
          >
            {children}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  },
);

Select.displayName = "Select";
