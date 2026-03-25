import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'prefix'> {
  dataTestId?: string;
  label?: string;
  helper?: React.ReactNode;
  errorText?: string;
  isError?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  LeftIcon?: React.ReactNode;
  RightIcon?: React.ReactNode;
  prefix?: string;
  suffix?: string;
  value?: string;
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
      isDisabled,
      LeftIcon,
      RightIcon,
      prefix,
      suffix,
      dataTestId,
      value,
      onChange,
      ...props
    },
    ref,
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    };

    const secondaryText = isError ? errorText : helper;

    return (
      <div className="w-full space-y-1.5 text-left" data-testid={dataTestId}>
        {label && (
          <label
            className={cn(
              "text-sm font-medium block transition-all duration-300 ease-in-out",
              isError ? "text-red-500" : "text-[#004554]",
              isDisabled && "opacity-50"
            )}
          >
            {label}
            {isRequired && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}

        <div
          className={cn(
            "flex items-center w-full min-h-[40px] px-4 bg-white border rounded-full",
            
            !isError && !isDisabled && "border-[#004554]/10",
            
            !isError && !isDisabled && "hover:border-[#004554]/33",
            
            !isError && !isDisabled && "focus-within:border-2 focus-within:border-[#004554]/33",
            
            isError && "border-2 border-red-500",
            
            isDisabled && "bg-gray-50 border-[#004554]/5 cursor-not-allowed opacity-50",
            
            className,
          )}
        >
          {LeftIcon && (
            <div className="flex-shrink-0 flex items-center text-[#004554] mr-2">
              {LeftIcon}
            </div>
          )}

          <div className="relative flex items-center w-full overflow-hidden">
            {prefix && (
              <span className="text-sm text-[#004554]/50 mr-1 select-none whitespace-nowrap">
                {prefix}
              </span>
            )}

            <input
              {...props}
              ref={ref}
              type={type}
              value={value}
              onChange={handleChange}
              disabled={isDisabled}
              required={isRequired}
              className={cn(
                "flex-1 bg-transparent text-sm text-[#004554] outline-none placeholder:text-[#004554]/30 py-3 transition-all duration-300 ease-in-out min-w-[20px]",
                isDisabled && "cursor-not-allowed",
              )}
            />

            {suffix && (
              <span className="text-sm text-[#004554]/50 ml-1 select-none whitespace-nowrap">
                {suffix}
              </span>
            )}
          </div>

          {RightIcon && (
            <div className="flex-shrink-0 flex items-center text-[#004554] ml-2">
              {RightIcon}
            </div>
          )}
        </div>

        {secondaryText && (
          <p className={cn("text-[11px] leading-tight transition-all duration-300 ease-in-out", isError ? "text-red-500" : "text-[#004554]/50")}>
            {secondaryText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
export { Input };