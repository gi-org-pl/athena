import * as React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { cva } from "class-variance-authority";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const selectTriggerVariants = cva(
  "inline-flex items-center justify-between whitespace-nowrap border border-[#E2E8F0] bg-[#ECF0F2] transition-colors duration-200 ease-out shrink-0 outline-none focus-visible:ring-gi-secondary/50 focus-visible:ring-[3px] disabled:pointer-events-none cursor-pointer",
  {
    variants: {
      size: {
        regular: "h-10 w-[134px] px-4 py-3 rounded-[32px]",
        small: "h-8 px-3 rounded-[28px]",
      },
    },
    defaultVariants: {
      size: "regular",
    },
  },
);

export interface SelectProps extends Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "children"
> {
  value?: React.ReactNode;
  placeholder?: string;
  size?: "regular" | "small";
  openOn?: "click" | "hover";
  children: React.ReactNode;
  isDisabled?: boolean;
  dataTestId?: string;
}

export const Select = React.forwardRef<HTMLDivElement, SelectProps>(
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
      ...props
    },
    ref,
  ) => {
    const [open, setOpen] = React.useState(false);
    const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleOpenChange = (nextOpen: boolean) => {
      if (isDisabled) return;
      if (!nextOpen && timerRef.current) clearTimeout(timerRef.current);
      setOpen(nextOpen);
    };

    const handleMouseEnter = () => {
      if (openOn !== "hover" || isDisabled) return;
      if (timerRef.current) clearTimeout(timerRef.current);
      setOpen(true);
    };

    const handleMouseLeave = () => {
      if (openOn !== "hover" || isDisabled) return;
      timerRef.current = setTimeout(() => setOpen(false), 200);
    };

    React.useEffect(() => {
      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
      };
    }, []);

    return (
      <div
        ref={ref}
        className={cn("inline-block", className)}
        data-testid={dataTestId || "select-container"}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
        {...props}
      >
        <DropdownMenu.Root open={open} onOpenChange={handleOpenChange}>
          <DropdownMenu.Trigger asChild>
            <div
              role="button"
              tabIndex={isDisabled ? -1 : 0}
              className={cn(selectTriggerVariants({ size }))}
              data-state={open ? "open" : "closed"}
              style={{ fontFamily: "'Roboto', sans-serif" }}
              onClick={(e) => {
                if (isDisabled) {
                  e.preventDefault();
                  return;
                }
                if (openOn === "hover") e.preventDefault();
              }}
            >
              <span className="truncate text-[16px] leading-[120%] font-bold text-[#004554]">
                {value ?? placeholder}
              </span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 text-[#004554] transition-transform duration-200",
                  open && "rotate-180",
                )}
              />
            </div>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content
              className="z-50 min-w-[180px] overflow-hidden rounded-[16px] border border-[#D7DEE3] bg-white p-1 shadow-md"
              style={{ fontFamily: "'Roboto', sans-serif" }}
              sideOffset={6}
              align="end"
            >
              {children}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    );
  },
);

Select.displayName = "Select";
