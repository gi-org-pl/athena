import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-3xl border border-gi-primary/10 bg-transparent px-3 py-2 text-sm transition-all duration-300 ease-in-out placeholder:text-gi-primary/30 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "hover:border-gi-primary/20 focus:border-gi-primary/20",
        error: "border-gi-red focus:border-gi-red hover:border-gi-red",
        disabled: "border-gi-primary/5 text-gi-gray",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface InputProps
  extends Omit<React.ComponentProps<"input">, "onChange"> {
  label?: string;
  helper?: React.ReactNode;
  errorText?: string;
  isError?: boolean;
  isRequired?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  prefix?: string;
  suffix?: string;
  dataTestId?: string;
  onChange?: (value: string) => void;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      helper,
      errorText,
      isError,
      isRequired,
      leftIcon,
      rightIcon,
      prefix,
      suffix,
      disabled,
      onChange,
      dataTestId,
      ...props
    },
    ref,
  ) => {
    const computedVariant = disabled
      ? "disabled"
      : isError
        ? "error"
        : "default";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e.target.value);
      }
    };

    return (
      <div className="flex w-full flex-col gap-1.5 text-left">
        {/* Sekcja Label */}
        {label && (
          <label
            className={cn(
              "text-sm font-bold text-gi-primary flex items-center",
              disabled && "opacity-50",
            )}
          >
            {label}
            {isRequired && (
              <span className="ml-1 text-gi-red font-bold">*</span>
            )}
          </label>
        )}

        {/* Kontener Inputa */}
        <div className="relative flex items-center w-full">
          {/* Lewa strona: Ikona LUB Prefix */}
          {leftIcon && !prefix && (
            <div className="absolute left-3 flex items-center justify-center text-gi-primary/50 pointer-events-none">
              {leftIcon}
            </div>
          )}
          {prefix && (
            <span className="absolute left-4 text-gi-primary/50 text-sm pointer-events-none">
              {prefix}
            </span>
          )}

          <input
            type={type}
            className={cn(
              inputVariants({ variant: computedVariant }),
              (leftIcon || prefix) && "pl-10",
              (rightIcon || suffix) && "pr-10",
              className,
            )}
            ref={ref}
            disabled={disabled}
            onChange={handleChange}
            data-test-id={dataTestId}
            {...props}
          />

          {/* Prawa strona: Suffix LUB Ikona */}
          {suffix && (
            <span className="absolute right-4 text-gi-primary/50 text-sm pointer-events-none">
              {suffix}
            </span>
          )}
          {rightIcon && !suffix && (
            <div className="absolute right-3 flex items-center justify-center text-gi-primary/50 pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Sekcja Footer: ErrorText ma pierwszeństwo nad helperem */}
        {(isError && errorText) || helper ? (
          <p
            className={cn(
              "text-[14px] mt-1 min-h-[20px]",
              isError ? "text-gi-red font-medium" : "text-gi-primary/50",
            )}
          >
            {isError && errorText ? errorText : helper}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";

export { Input };
