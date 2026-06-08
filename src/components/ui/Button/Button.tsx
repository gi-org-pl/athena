import { Slot } from "@radix-ui/react-slot";
import {
  cloneElement,
  forwardRef,
  isValidElement,
  type MouseEvent,
  type ReactElement,
  type ReactNode,
} from "react";
import LoadingSpinner from "@/assets/icons/loading-spinner.svg";
import { cn } from "@/lib/utils";
import { type ButtonProps, buttonVariants } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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
      onClick,
      ...props
    },
    ref,
  ) => {
    const isActuallyDisabled = disabled || isLoading;

    const handleInteraction = (e: MouseEvent<HTMLButtonElement>) => {
      if (isActuallyDisabled) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onClick?.(e);
    };

    const decorateIcon = (icon: ReactElement) =>
      cloneElement(
        icon as ReactElement<{ "aria-hidden"?: boolean; focusable?: string }>,
        {
          "aria-hidden": true,
          focusable: "false",
        },
      );

    const renderContent = (content: ReactNode) => {
      if (isIconButton && isLoading) return <LoadingSpinner />;
      return (
        <>
          {isLoading ? <LoadingSpinner /> : LeftIcon && decorateIcon(LeftIcon)}
          {content}
          {!isLoading && RightIcon && decorateIcon(RightIcon)}
        </>
      );
    };

    const finalProps = {
      className: cn(
        buttonVariants({ type, variant, size, isIconButton, className }),
        isLoading && "cursor-wait",
      ),
      disabled: isActuallyDisabled,
      "aria-disabled": isActuallyDisabled,
      "aria-busy": isLoading,
      "aria-live": "polite" as const,
      "data-disabled": isActuallyDisabled,
      onClick: handleInteraction,
      ...props,
    };

    if (asChild && isValidElement(children)) {
      const child = children as ReactElement<{ children?: ReactNode }>;
      return (
        <Slot ref={ref} {...finalProps}>
          {cloneElement(child, {
            children: renderContent(child.props.children),
          })}
        </Slot>
      );
    }

    return (
      <button ref={ref} type={htmlType} {...finalProps}>
        {renderContent(children)}
      </button>
    );
  },
);

Button.displayName = "Button";
