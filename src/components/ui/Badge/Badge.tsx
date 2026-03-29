import { forwardRef, useMemo } from "react";
import CheckIcon from "@/assets/icons/check-icon.svg";
import DismissCircle from "@/assets/icons/dismiss-circle-icon.svg";
import InfoIcon from "@/assets/icons/info-icon.svg";
import WarningIcon from "@/assets/icons/warning-icon.svg";
import XIcon from "@/assets/icons/x-icon.svg";
import { cn } from "@/lib/utils";
import { type BadgeProps, badgeVariants } from "./Badge.types";

const typeIconMap = {
  info: InfoIcon,
  success: CheckIcon,
  warning: WarningIcon,
  error: XIcon,
} as const;

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      type = "default",
      variant = "secondary",
      size = "regular",
      children,
      LeftIcon,
      isDismissible = false,
      onDismiss,
      dataTestId,
      ...props
    },
    ref,
  ) => {
    const iconContent = useMemo(() => {
      if (LeftIcon) return LeftIcon;
      if (type === "default") return null;
      const Icon = typeIconMap[type as keyof typeof typeIconMap];
      return Icon ? <Icon /> : null;
    }, [LeftIcon, type]);

    const dismissSizeClasses = {
      small: "size-3",
      regular: "size-3.5",
      big: "size-5",
    };

    const dismissClass =
      dismissSizeClasses[size as keyof typeof dismissSizeClasses] ??
      dismissSizeClasses.regular;

    return (
      <span
        ref={ref}
        data-test-id={dataTestId}
        className={cn(
          "group relative inline-flex items-center gap-1.25",
          isDismissible && "pr-1",
        )}
      >
        <span
          className={cn(badgeVariants({ type, variant, size, className }))}
          {...props}
        >
          {iconContent && (
            <span
              aria-hidden="true"
              className={cn(
                "flex items-center justify-center shrink-0",
                "h-[0.8em] w-[0.9em] leading-none self-center",
                "[&_svg]:size-full [&_svg]:block",
              )}
            >
              {iconContent}
            </span>
          )}
          <span className="leading-none">{children}</span>
        </span>

        {isDismissible && (
          <button
            type="button"
            aria-label={`Dismiss ${children}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onDismiss?.();
            }}
            className={cn(
              "flex items-center justify-center shrink-0 rounded-full text-gi-gray/80",
              "transition-all duration-300 ease hover:brightness-80",
              "will-change-transform transform-gpu cursor-pointer block size-full overflow-visible",
              dismissClass,
            )}
          >
            <DismissCircle aria-hidden="true" />
          </button>
        )}
      </span>
    );
  },
);

Badge.displayName = "Badge";

export { Badge };
