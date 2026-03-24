import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  label?: string;
  helperText?: React.ReactNode;
  errorText?: string;
  isError?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  dataTestId?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      label,
      helperText,
      errorText,
      isError,
      isRequired,
      isDisabled,
      LeftIcon,
      RightIcon,
      prefix,
      suffix,
      dataTestId,
      ...props
    },
    ref
  ) => {
    const secondaryText = isError ? errorText : helperText;

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label className={cn("text-sm font-medium block transition-colors", isError ? "text-red-500" : "text-gi-primary")}>
            {label}
            {isRequired && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div
          className={cn(
            "flex items-center w-full min-h-[40px] px-3 bg-white border rounded-full overflow-hidden transition-all duration-200",
            
            !isError && !isDisabled && "border-gi-grey-300 hover:border-gi-grey-400 focus-within:ring-2 focus-within:ring-gi-primary focus-within:border-gi-primary",
            isError && "border-red-500 focus-within:ring-2 focus-within:ring-red-500 focus-within:border-red-500",
            isDisabled && "opacity-50 bg-gi-grey-50 border-gi-grey-200 cursor-not-allowed",
            className
          )}
        >
          {(LeftIcon || prefix) && (
            <div className="flex-shrink-0 flex items-center text-gi-ash text-sm mr-2 select-none">
              {LeftIcon || prefix}
            </div>
          )}

          <input
            ref={ref}
            type={type}
            disabled={isDisabled}
            data-testid={dataTestId}
            className={cn(
              "w-full h-full bg-transparent text-sm text-gi-grey-900 outline-none placeholder:text-gi-grey-400 py-2 min-w-0 flex-grow",
              isDisabled && "cursor-not-allowed"
            )}
            {...props}
          />

          {(RightIcon || suffix) && (
            <div className="flex-shrink-0 flex items-center text-gi-ash text-sm ml-2 select-none">
              {RightIcon || suffix}
            </div>
          )}
        </div>

        {secondaryText && (
          <p className={cn("text-xs transition-colors duration-200", isError ? "text-red-500" : "text-gi-ash")}>
            {secondaryText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
export { Input };