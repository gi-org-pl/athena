import { cva, type VariantProps } from "class-variance-authority";
import { type ButtonHTMLAttributes, type ReactElement } from "react";

export interface BaseButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  LeftIcon?: ReactElement;
  RightIcon?: ReactElement;
  isLoading?: boolean;
  htmlType?: "button" | "submit" | "reset";
}

export type ButtonProps = BaseButtonProps & {
  "aria-label"?: string;
  isIconButton?: boolean;
};

export const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-300 ease-[ease] shrink-0 outline-none focus-visible:ring-gi-secondary/50 focus-visible:ring-[3px] data-[disabled=true]:pointer-events-none [&_svg]:size-4 [&_svg]:overflow-visible [&_svg_*]:fill-current [&_svg_*]:stroke-none",
  {
    variants: {
      type: {
        primary: "data-[disabled=true]:border-transparent",
        outlined: "border data-[disabled=true]:bg-transparent",
        ghost: "data-[disabled=true]:border-transparent",
      },
      variant: {
        primary: "",
        secondary: "",
        danger: "",
        ngoSecondary: "",
        ngoPrimary: "",
        ngoOption: "",
      },
      size: {
        small: "h-8 px-3 text-xs gap-1.5 has-[>svg]:px-2.5",
        regular: "h-10 px-4 py-2 has-[>svg]:px-3",
        "ngo-small": "h-8 px-3 text-xs gap-2 has-[>svg]:px-3",
        "ngo-regular": "h-10 px-4 py-2 has-[>svg]:px-4"
      },
      isIconButton: {
        true: "p-0",
      },
    },
    compoundVariants: [
      {
        type: "primary",
        variant: "primary",
        className:
          "bg-gi-primary text-white hover:bg-gi-primary-hover data-[disabled=true]:bg-gi-gray data-[disabled=true]:text-white",
      },
            {
        type: "primary",
        variant: "ngoPrimary",
        className:
          "bg-gi-navy text-white hover:bg-gi-navy-hover data-[disabled=true]:bg-gi-gray data-[disabled=true]:text-white",
      },
      {
        type: "primary",
        variant: "ngoSecondary",
        className:
          "bg-gi-blue text-white hover:bg-gi-blue-hover data-[disabled=true]:bg-gi-gray data-[disabled=true]:text-white",
      },
      {
        type: "primary",
        variant: "ngoOption",
        className:
          "bg-gi-light-gray-dark text-gi-navy hover:bg-gi-dark-ash data-[disabled=true]:bg-gi-gray data-[disabled=true]:text-gi-navy",
      },
      {
        type: "primary",
        variant: "secondary",
        className:
          "bg-gi-secondary text-white hover:bg-gi-secondary-hover data-[disabled=true]:bg-gi-gray-hover data-[disabled=true]:text-white",
      },
      {
        type: "primary",
        variant: "danger",
        className:
          "bg-gi-red text-white hover:bg-gi-red-hover data-[disabled=true]:bg-gi-gray-hover data-[disabled=true]:text-white",
      },
      {
        type: "outlined",
        variant: "primary",
        className:
          "border-gi-primary text-gi-primary bg-transparent hover:bg-gi-ash data-[disabled=true]:border-gi-gray data-[disabled=true]:text-gi-gray",
      },
      {
        type: "outlined",
        variant: "secondary",
        className:
          "border-gi-secondary text-gi-secondary bg-transparent hover:bg-gi-secondary/10 data-[disabled=true]:border-gi-gray-hover data-[disabled=true]:text-gi-gray",
      },
      {
        type: "outlined",
        variant: "danger",
        className:
          "border-gi-red text-gi-red bg-transparent hover:bg-gi-red/10 data-[disabled=true]:border-gi-gray-hover data-[disabled=true]:text-gi-gray",
      },
      {
        type: "outlined",
        variant: "ngoSecondary",
        className:
          "border-gi-blue text-gi-blue bg-transparent hover:bg-gi-blue/10 data-[disabled=true]:border-gi-gray-hover data-[disabled=true]:text-gi-gray",
      },
      {
        type: "outlined",
        variant: "ngoPrimary",
        className:
          "border-gi-navy text-gi-navy bg-transparent hover:bg-gi-navy/10 data-[disabled=true]:border-gi-gray-hover data-[disabled=true]:text-gi-gray",
      },
      {
        type: "outlined",
        variant: "ngoOption",
        className:
          "border-gi-light-gray-dark text-gi-navy bg-transparent hover:bg-gi-dark-ash/10 data-[disabled=true]:border-gi-gray-hover data-[disabled=true]:text-gi-gray",
      },
      {
        type: "ghost",
        variant: "primary",
        className:
          "bg-gi-ash text-gi-primary hover:bg-gi-dark-ash data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-dark-gray",
      },
      {
        type: "ghost",
        variant: "secondary",
        className:
          "bg-gi-secondary/10 text-gi-secondary hover:bg-gi-secondary/33 data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-gray",
      },
      {
        type: "ghost",
        variant: "danger",
        className:
          "bg-gi-red/10 text-gi-red hover:bg-gi-red/33 data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-gray",
      },
      {
        type: "ghost",
        variant: "ngoSecondary",
        className:
          "bg-gi-blue/10 text-gi-blue hover:bg-gi-blue/33 data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-gray",
      },
      {
        type: "ghost",
        variant: "ngoPrimary",
        className:
          "bg-gi-navy/10 text-gi-navy hover:bg-gi-navy/33 data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-gray",
      },
      {
        type: "ghost",
        variant: "ngoOption",
        className:
          "bg-gi-light-gray-dark/10 text-gi-navy hover:bg-gi-dark-ash data-[disabled=true]:bg-gi-gray/10 data-[disabled=true]:text-gi-gray",
      },
      {
        isIconButton: true,
        size: "regular",
        className: "w-10 h-10",
      },
      {
        isIconButton: true,
        size: "small",
        className: "w-8 h-8",
      },
    ],
    defaultVariants: {
      type: "primary",
      variant: "primary",
      size: "regular",
    },
  },
);
