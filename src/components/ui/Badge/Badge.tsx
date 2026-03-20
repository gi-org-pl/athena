import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import CheckIcon from "@/assets/icons/check-icon.svg";
import InfoIcon from "@/assets/icons/info-icon.svg";
import WarningIcon from "@/assets/icons/warning-icon.svg";
import XIcon from "@/assets/icons/x-icon.svg";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full font-medium shrink-0",
  {
    variants: {
      type: {
        default: "bg-gi-dark-gray/10 text-gi-dark-gray",
        info: "bg-gi-blue/10 text-gi-blue",
        success: "bg-gi-green/10 text-gi-green",
        warning: "bg-gi-orange/10 text-gi-orange",
        error: "bg-gi-red/10 text-gi-red",
      },
      variant: {
        primary: "",
        secondary: "",
        outlined: "bg-transparent border",
        ghost: "bg-transparent border-transparent",
      },
      size: {
        small: "h-5 px-1.5 text-[10px] gap-1 [&_svg]:size-2",
        regular: "h-7 px-2.5 text-xs gap-1.5 [&_svg]:size-3",
        big: "h-8 px-3 text-sm gap-2 [&_svg]:size-3.5",
      },
    },
    defaultVariants: {
      type: "default",
      variant: "secondary",
      size: "regular",
    },
  },
);

const typeIconMap = {
  info: InfoIcon,
  success: CheckIcon,
  warning: WarningIcon,
  error: XIcon,
} as const;

export type BadgeType = "default" | "info" | "success" | "warning" | "error";

export interface BadgeProps
  extends Omit<React.ComponentProps<"span">, "children">,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode;
  LeftIcon?: React.ReactNode;
  isDismissible?: boolean;
  onDismiss?: () => void;
  dataTestId?: string;
}

/**
 * Custom Dismiss Icon Component
 * Using fill="currentColor" allows the button to control the color via text classes
 */
const CustomDismissIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.7692 8C14.7692 6.20469 14.0563 4.48262 12.7869 3.21314C11.5174 1.94366 9.79531 1.23077 8 1.23077C6.20469 1.23077 4.48262 1.94366 3.21314 3.21314C1.94366 4.48262 1.23077 6.20469 1.23077 8C1.23077 8.88895 1.40581 9.76926 1.74599 10.5905C2.08618 11.4118 2.58457 12.1583 3.21314 12.7869C3.84171 13.4154 4.58819 13.9138 5.40946 14.254C6.23074 14.5942 7.11105 14.7692 8 14.7692C8.88895 14.7692 9.76926 14.5942 10.5905 14.254C11.4118 13.9138 12.1583 13.4154 12.7869 12.7869C13.4154 12.1583 13.9138 11.4118 14.254 10.5905C14.5942 9.76926 14.7692 8.88895 14.7692 8ZM9.41106 5.71875C9.65138 5.47843 10.0409 5.47843 10.2812 5.71875C10.5216 5.95907 10.5216 6.34862 10.2812 6.58894L8.87019 8L10.2812 9.41106C10.5216 9.65138 10.5216 10.0409 10.2812 10.2812C10.0409 10.5216 9.65138 10.5216 9.41106 10.2812L8 8.87019L6.58894 10.2812C6.34862 10.5216 5.95907 10.5216 5.71875 10.2812C5.47843 10.0409 5.47843 9.65138 5.71875 9.41106L7.12981 8L5.71875 6.58894C5.47843 6.34862 5.47843 5.95907 5.71875 5.71875C5.95907 5.47843 6.34862 5.47843 6.58894 5.71875L8 7.12981L9.41106 5.71875ZM16 8C16 9.05058 15.7931 10.0911 15.391 11.0617C14.989 12.0322 14.3999 12.9142 13.6571 13.6571C12.9142 14.3999 12.0322 14.989 11.0617 15.391C10.0911 15.7931 9.05058 16 8 16C6.94943 16 5.90891 15.7931 4.9383 15.391C3.96778 14.989 3.08577 14.3999 2.34295 13.6571C1.60013 12.9142 1.01101 12.0322 0.608974 11.0617C0.206937 10.0911 0 9.05058 0 8C4.89064e-08 5.87827 0.842658 3.84324 2.34295 2.34295C3.84324 0.842658 5.87827 0 8 0C10.1217 0 12.1568 0.842658 13.6571 2.34295C15.1573 3.84324 16 5.87827 16 8Z"
      fill="currentColor"
    />
  </svg>
);

function Badge({
  className,
  type = "default",
  variant,
  size,
  children,
  LeftIcon,
  isDismissible = false,
  onDismiss,
  dataTestId,
  ...props
}: BadgeProps) {
  const iconClassName =
    "[color:inherit] shrink-0 flex items-center justify-center";

const renderedIcon = React.useMemo(() => {
    if (LeftIcon) {
      return React.isValidElement(LeftIcon) ? (
        React.cloneElement(
          LeftIcon as React.ReactElement<{ className?: string }>,
          {
            className: cn((LeftIcon as any).props?.className, iconClassName),
          },
        )
      ) : (
        <span className={iconClassName}>{LeftIcon}</span>
      );
    }
    
    if (type === "default") return null;

    const Icon = typeIconMap[type as keyof typeof typeIconMap];

    return (
      <span className={iconClassName}>
        <Icon />
      </span>
    );
  }, [LeftIcon, type]);

  return (
    <div className="inline-flex items-center gap-1.5" data-slot="badge-wrapper">
      <span
        data-test-id={dataTestId}
        className={cn(badgeVariants({ type, variant, size, className }))}
        {...props}
      >
        {renderedIcon}
        <span className="leading-none">{children}</span>
      </span>

      {isDismissible && (
        <button
          type="button"
          aria-label="Dismiss"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDismiss?.();
          }}
          className={cn(
            "flex items-center justify-center transition-all outline-none",
            "text-[#D3D9DA] hover:brightness-90", 
              size === "small" ? "size-4" : size === "big" ? "size-6" : "size-5",
            )}
          >
            <CustomDismissIcon
              className={cn(
                size === "small"
                  ? "size-3.5"
                  : size === "big"
                  ? "size-5"
                  : "size-4.5",
              "cursor-pointer",
            )}
          />
        </button>
      )}
    </div>
  );
}

export { Badge, badgeVariants };
