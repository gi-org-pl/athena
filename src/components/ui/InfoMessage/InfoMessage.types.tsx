import { cva, type VariantProps } from "class-variance-authority";
import CheckIcon from "../../../assets/icons/check-icon.svg";
import InfoIcon from "../../../assets/icons/info-icon.svg";
import WarningIcon from "../../../assets/icons/warning-icon.svg";
import XIcon from "../../../assets/icons/x-icon.svg";
import type { ReactNode } from "react";

export interface InfoMessageProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof infoMessageVariants> {
  children: ReactNode,
  LeftIcon?: ReactNode;
}

export const infoMessageVariants = cva(
  "flex items-center align-middle w-full text-xs font-bold leading-[1.2]",
  {
    variants: {
      variant: {
        default: "text-gi-dark-gray",
        info: "text-gi-blue",
        error: "text-gi-red",
        warning: "text-gi-orange",
        success: "text-gi-green",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const infoMessageIconVariants = cva(
  "flex items-center justify-center border rounded-full h-8 w-8 mr-2 [&_svg]:size-3 [&_svg_*]:fill-current [&_svg_*]:stroke-none  ",
  {
    variants: {
      variant: {
        default: "border-gi-dark-gray/10",
        info: "border-gi-blue/10",
        error: "border-gi-red/10",
        warning: "border-gi-orange/10",
        success: "border-gi-green/10",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export const variantIconMap = {
  default: InfoIcon,
  info: InfoIcon,
  success: CheckIcon,
  warning: WarningIcon,
  error: XIcon,
} as const;
