import { type ProgressBarProps, progressBarVariants ,progressBarFillVariants } from "./ProgressBar.types";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      className,
      value,
      size,
      variant,
      dataTestId,
      ...props
    },
    ref,
  ) => {
    const clampedValue = Math.min(100, Math.max(0, value));

    return (
      <div
        ref={ref}
        data-slot="progress-bar"
        data-test-id={dataTestId}
        className={cn(progressBarVariants({ size, className }))}
        role="progressbar"
        aria-valuenow={clampedValue}
        aria-valuemin={0}
        aria-valuemax={100}
        {...props}
      >
        <div
          className={progressBarFillVariants({ variant })}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    );
  },
);

ProgressBar.displayName = "ProgressBar";
