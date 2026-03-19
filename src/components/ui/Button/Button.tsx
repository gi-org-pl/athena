import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-300 ease-[ease] shrink-0 outline-none focus-visible:ring-gi-secondary/50 focus-visible:ring-[3px] disabled:pointer-events-none",
  {
    variants: {
      type: {
        primary: "disabled:border-transparent",
        outlined: "border disabled:bg-transparent",
        ghost: "disabled:border-transparent",
      },
      variant: {
        primary: "",
        secondary: "",
        danger: "",
      },
      size: {
        regular: "h-10 px-4 py-2 has-[>svg]:px-3",
        small: "h-8 px-3 text-xs gap-1.5 has-[>svg]:px-2.5",
      },
      isIconButton: {
        true: "p-0",
      },
    },
    compoundVariants: [
      {
        type: "primary",
        variant: "primary",
        className: "bg-gi-primary text-white hover:bg-gi-primary-hover disabled:bg-gi-gray disabled:text-white",
      },
      {
        type: "primary",
        variant: "secondary",
        className: "bg-gi-secondary text-white hover:bg-gi-secondary-hover disabled:bg-gi-gray-hover disabled:text-white",
      },
      {
        type: "primary",
        variant: "danger",
        className: "bg-gi-red text-white hover:bg-gi-red-hover disabled:bg-gi-gray-hover disabled:text-white",
      },
      {
        type: "outlined",
        variant: "primary",
        className: "border-gi-primary text-gi-primary bg-transparent hover:bg-gi-ash disabled:border-gi-gray disabled:text-gi-gray",
      },
      {
        type: "outlined",
        variant: "secondary",
        className: "border-gi-secondary text-gi-secondary bg-transparent hover:bg-gi-secondary/10 disabled:border-gi-gray-hover disabled:text-gi-gray",
      },
      {
        type: "outlined",
        variant: "danger",
        className: "border-gi-red text-gi-red bg-transparent hover:bg-gi-red/10 disabled:border-gi-gray-hover disabled:text-gi-gray",
      },
      {
        type: "ghost",
        variant: "primary",
        className: "bg-gi-ash text-gi-primary hover:bg-gi-dark-ash disabled:bg-gi-gray/10 disabled:text-gi-dark-gray",
      },
      {
        type: "ghost",
        variant: "secondary",
        className: "bg-gi-secondary/10 text-gi-secondary hover:bg-gi-secondary/33 disabled:bg-gi-gray/10 disabled:text-gi-gray",
      },
      {
        type: "ghost",
        variant: "danger",
        className: "bg-gi-red/10 text-gi-red hover:bg-gi-red/33 disabled:bg-gi-gray/10 disabled:text-gi-gray",
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

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  LeftIcon?: React.ReactElement;
  RightIcon?: React.ReactElement;
  isLoading?: boolean;
  htmlType?: "button" | "submit" | "reset";
}

const LoadingSpinner = () => (
  <svg
    className="animate-spin shrink-0 w-4 h-4"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
  >
    <path
      d="M7.14667 13.2666C6.42022 13.1495 5.72586 12.8834 5.10726 12.4849C4.48866 12.0864 3.95921 11.5643 3.5522 10.9513C3.1452 10.3382 2.86944 9.64764 2.74229 8.92289C2.61513 8.19813 2.63932 7.4549 2.81334 6.73995C3.03483 5.74733 3.54363 4.84187 4.27629 4.13648C5.00894 3.4311 5.93303 2.95699 6.93334 2.77328C7.63529 2.63005 8.3589 2.62972 9.06099 2.77229C9.76307 2.91486 10.4292 3.19742 11.0197 3.60311C11.6102 4.00879 12.1129 4.52928 12.4978 5.13351C12.8827 5.73775 13.1419 6.41333 13.26 7.11995C13.2947 7.36046 13.4135 7.58088 13.5954 7.74201C13.7773 7.90315 14.0104 7.99454 14.2533 7.99995H14.34C14.4707 8.00192 14.6002 7.97582 14.7199 7.92343C14.8397 7.87103 14.9467 7.79356 15.0339 7.69624C15.1211 7.59892 15.1865 7.48402 15.2255 7.3593C15.2645 7.23458 15.2762 7.10295 15.26 6.97328C15.0703 5.63152 14.5126 4.36854 13.6487 3.32453C12.7848 2.28052 11.6485 1.4963 10.3659 1.0589C9.08332 0.621502 7.70463 0.548037 6.38284 0.846658C5.06104 1.14528 3.84784 1.8043 2.87787 2.7506C1.9079 3.69689 1.2191 4.89344 0.887914 6.20745C0.556727 7.52146 0.596105 8.90155 1.00168 10.1945C1.40725 11.4875 2.16316 12.6429 3.18551 13.5323C4.20786 14.4217 5.45667 15.0105 6.79334 15.2333C6.94074 15.2595 7.0921 15.2532 7.23681 15.2148C7.38151 15.1764 7.51606 15.1068 7.63103 15.0109C7.746 14.915 7.83859 14.7951 7.90233 14.6596C7.96607 14.5241 7.99941 14.3763 8.00001 14.2266C7.99717 13.9907 7.9093 13.7637 7.75254 13.5873C7.59578 13.411 7.38065 13.2971 7.14667 13.2666Z"
      fill="currentColor"
    />
  </svg>
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      type,
      variant,
      size,
      isIconButton,
      asChild = false,
      LeftIcon,
      RightIcon,
      isLoading,
      htmlType = "button",
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || isLoading;

    const renderContent = (content: React.ReactNode) => {
      if (isIconButton && isLoading) {
        return <LoadingSpinner />;
      }

      return (
        <>
          {isLoading ? <LoadingSpinner /> : LeftIcon}
          {content}
          {!isLoading && RightIcon}
        </>
      );
    };

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{
        children?: React.ReactNode;
        disabled?: boolean;
      }>;

      return (
        <Slot
          className={cn(
            buttonVariants({ type, variant, size, isIconButton, className }),
            isLoading && "cursor-wait"
          )}
          ref={ref}
          data-slot="button"
          {...props}
        >
          {React.cloneElement(child, {
            disabled: isDisabled,
            children: renderContent(child.props.children),
          })}
        </Slot>
      );
    }

    return (
      <button
        type={htmlType}
        className={cn(
          buttonVariants({ type, variant, size, isIconButton, className }),
          isLoading && "cursor-wait"
        )}
        ref={ref}
        disabled={isDisabled}
        data-slot="button"
        {...props}
      >
        {renderContent(children)}
      </button>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };