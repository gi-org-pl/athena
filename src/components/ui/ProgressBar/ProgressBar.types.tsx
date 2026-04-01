import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes } from "react";

export interface ProgressBarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof progressBarVariants>,
    VariantProps<typeof progressBarFillVariants> {
  value: number;
  dataTestId?: string;
}

export const progressBarVariants = cva(
  "w-full overflow-hidden rounded-full bg-gi-ash",
  {
    variants: {
      size: {
        small: "h-2",
        regular: "h-4",
      },
    },
    defaultVariants: {
      size: "regular",
    },
  },
);

export const progressBarFillVariants = cva(
  "h-full transition-[width] duration-300 ease rounded-full",
  {
    variants: {
      variant: {
        default: "bg-gi-primary",
        info: "bg-gi-blue",
        success: "bg-gi-green",
        warning: "bg-gi-orange",
        error: "bg-gi-red",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);
