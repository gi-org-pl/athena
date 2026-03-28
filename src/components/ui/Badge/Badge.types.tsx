import { cva, type VariantProps } from "class-variance-authority";
import {
  type ComponentProps,
  type ReactNode,
} from "react";

export interface BadgeProps
  extends ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  LeftIcon?: ReactNode;
  isDismissible?: boolean;
  onDismiss?: () => void;
  dataTestId?: string;
}

export const badgeVariants = cva(
  "inline-flex items-center rounded-full font-medium shrink-0 transition-colors [&_svg]:shrink-0 [&_svg_*]:fill-current [&_svg_*]:stroke-none",
  {
    variants: {
      type: {
        default: "",
        info: "",
        success: "",
        warning: "",
        error: "",
      },
      variant: {
        primary: "",
        secondary: "",
        outlined: "border",
        ghost: "bg-transparent",
      },
      size: {
        small: "py-1.5 px-1.5 text-[0.65em] gap-0.75",
        regular: "py-1.5 px-2.5 text-[0.8em] gap-1",
        big: "py-2 px-3 text-[0.9em] gap-1.25",
      },
    },
    compoundVariants: [
      {
        type: "default",
        variant: "primary",
        className: "bg-gi-primary text-white",
      },
      {
        type: "default",
        variant: "secondary",
        className: "bg-gi-ash text-gi-primary",
      },
      {
        type: "default",
        variant: "outlined",
        className: "border-gi-ash text-gi-primary bg-transparent",
      },
      {
        type: "default",
        variant: "ghost",
        className: "text-gi-primary bg-transparent",
      },

      { type: "info", variant: "primary", className: "bg-gi-blue text-white" },
      {
        type: "info",
        variant: "secondary",
        className: "bg-gi-blue/10 text-gi-blue",
      },
      {
        type: "info",
        variant: "outlined",
        className: "border-gi-blue text-gi-blue bg-transparent",
      },
      {
        type: "info",
        variant: "ghost",
        className: "text-gi-blue bg-transparent",
      },

      {
        type: "success",
        variant: "primary",
        className: "bg-gi-green text-white",
      },
      {
        type: "success",
        variant: "secondary",
        className: "bg-gi-green/10 text-gi-green",
      },
      {
        type: "success",
        variant: "outlined",
        className: "border-gi-green text-gi-green bg-transparent",
      },
      {
        type: "success",
        variant: "ghost",
        className: "text-gi-green bg-transparent",
      },

      {
        type: "warning",
        variant: "primary",
        className: "bg-gi-orange text-white",
      },
      {
        type: "warning",
        variant: "secondary",
        className: "bg-gi-orange/10 text-gi-orange",
      },
      {
        type: "warning",
        variant: "outlined",
        className: "border-gi-orange text-gi-orange bg-transparent",
      },
      {
        type: "warning",
        variant: "ghost",
        className: "text-gi-orange bg-transparent",
      },

      { type: "error", variant: "primary", className: "bg-gi-red text-white" },
      {
        type: "error",
        variant: "secondary",
        className: "bg-gi-red/10 text-gi-red",
      },
      {
        type: "error",
        variant: "outlined",
        className: "border-gi-red text-gi-red bg-transparent",
      },
      {
        type: "error",
        variant: "ghost",
        className: "text-gi-red bg-transparent",
      },
    ],
    defaultVariants: {
      type: "default",
      variant: "secondary",
      size: "regular",
    },
  },
);