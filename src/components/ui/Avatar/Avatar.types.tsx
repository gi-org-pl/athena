import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

export interface AvatarProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  fallback?: "initials" | "icon";
  name?: string;
  gender?: "male" | "female";
  color?: string;
  dataTestId?: string;
}

export const avatarVariants = cva(
  "relative flex shrink-0 overflow-hidden rounded-full items-center justify-center bg-gi-ash",
  {
    variants: {
      size: {
        small: "h-8 w-8 text-xs",
        medium: "h-10 w-10 text-sm",
        large: "h-14 w-14 text-base",
      },
    },
    defaultVariants: {
      size: "medium",
    },
  },
);
