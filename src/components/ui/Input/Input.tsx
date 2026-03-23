import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
  isError?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  prefix?: string;
  suffix?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, helperText, errorText, isError, leftIcon, rightIcon, prefix, suffix, ...props }, ref) => {
    const showSecondaryText = isError ? errorText : helperText;

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label className="text-sm font-medium text-gi-grey-700">
            {label}
          </label>
        )}
        
        <div className="relative flex items-center">
          {(leftIcon || prefix) && (
            <div className="absolute left-3 flex items-center text-gi-grey-500 pointer-events-none text-sm">
              {leftIcon || prefix}
            </div>
          )}

          <input
            type={type}
            className={cn(
              "flex h-10 w-full rounded-md border border-gi-grey-300 bg-white py-2 text-sm transition-all ease",
              "placeholder:text-gi-grey-400",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gi-primary focus-visible:border-gi-primary",
              "disabled:cursor-not-allowed disabled:opacity-50",
              (leftIcon || prefix) ? "pl-10" : "pl-3",
              (rightIcon || suffix) ? "pr-10" : "pr-3",
              isError && "border-gi-error focus-visible:ring-gi-error focus-visible:border-gi-error",
              className
            )}
            ref={ref}
            {...props}
          />

          {(rightIcon || suffix) && (
            <div className="absolute right-3 flex items-center text-gi-grey-500 pointer-events-none text-sm">
              {rightIcon || suffix}
            </div>
          )}
        </div>

        {showSecondaryText && (
          <p className={cn("text-xs", isError ? "text-gi-error" : "text-gi-grey-500")}>
            {showSecondaryText}
          </p>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };