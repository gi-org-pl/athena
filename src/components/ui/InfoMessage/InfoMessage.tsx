import { forwardRef, useMemo } from "react";
import { cn } from "@/lib/utils";
import {
  type InfoMessageProps,
  infoMessageIconVariants,
  infoMessageVariants,
  variantIconMap,
} from "./InfoMessage.types";

export const InfoMessage = forwardRef<HTMLDivElement, InfoMessageProps>(
  ({ className, variant = "default", LeftIcon, children, ...props }, ref) => {
    const iconContent = useMemo(() => {
      const Icon =
        (LeftIcon as React.ElementType) ||
        (variantIconMap[variant as keyof typeof variantIconMap] ??
          variantIconMap.default);
      return (
        <Icon
          aria-hidden="true"
          focusable="false"
          className="h-3 w-3 shrink-0 block"
        />
      );
    }, [LeftIcon, variant]);

    return (
      <div
        ref={ref}
        {...props}
        data-slot="info-message"
        className={cn(infoMessageVariants({ variant, className }))}
      >
        <div
          aria-hidden="true"
          className={infoMessageIconVariants({ variant })}
        >
          {iconContent}
        </div>
        <div>{children}</div>
      </div>
    );
  },
);

InfoMessage.displayName = "InfoMessage";
