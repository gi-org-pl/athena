import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value" | "prefix"
  > {
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
      onFocus,
      onBlur,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(value || props.defaultValue || "");

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value);
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isDisabled) return;
      
      if (value === undefined) {
        setInternalValue(e.target.value);
      }
      onChange?.(e.target.value);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const secondaryText = isError ? errorText : helper;
    const hasPrefixOrSuffix = !!prefix || !!suffix;

    const getDisplayValue = () => {
      if (isDisabled && !internalValue) return "some text";
      return internalValue;
    };

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
            "flex items-center w-full min-h-[40px] px-4 bg-white border rounded-[24px] transition-all duration-300 ease-in-out",
            !isError && !isDisabled && "border-[#004554]/10 hover:border-[#004554]/33 focus-within:border-2 focus-within:border-[#004554]/33",
            isError && "border border-red-500", 
            isDisabled && "border-[#004554]/10 cursor-not-allowed bg-white",
            className
          )}
        >
          {LeftIcon && (
            <div className={cn(
              "flex-shrink-0 flex items-center mr-2 transition-opacity duration-300 ease-in-out",
              isDisabled ? "opacity-30" : "text-[#004554]"
            )}>
              {LeftIcon}
            </div>
          )}

          <div className="relative flex-1 flex items-center overflow-hidden h-full">
            {!isFocused && (hasPrefixOrSuffix || isDisabled) && (
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none w-full">
                {prefix && <span className="text-sm mr-0.2 text-[#004554]/50">{prefix}</span>}
                <span className={cn("text-sm truncate", !getDisplayValue() && !isDisabled ? "text-[#004554]/30" : "text-[#004554]")}>
                  {getDisplayValue() || props.placeholder}
                </span>
                {suffix && <span className="text-sm ml-0.2 text-[#004554]/50">{suffix}</span>}
              </div>
            )}

            <input
              {...props}
              ref={ref}
              type={type}
              value={value !== undefined ? value : internalValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={isDisabled}
              required={isRequired}
              data-test-id={dataTestId}
              className={cn(
                "flex-1 bg-transparent text-sm text-[#004554] outline-none placeholder:text-[#004554]/30 py-3 min-w-[20px] w-full transition-all duration-300 ease-in-out",
                (!isFocused && (hasPrefixOrSuffix || isDisabled)) && "text-transparent placeholder:text-transparent",
                isDisabled && "cursor-not-allowed"
              )}
            />
          </div>

          {RightIcon && (
            <div className={cn(
              "flex-shrink-0 flex items-center ml-2 transition-opacity duration-300 ease-in-out",
              isDisabled ? "opacity-30" : "text-[#004554]"
            )}>
              {RightIcon}
            </div>
          )}
        </div>

        {secondaryText && !isDisabled && (
          <p className={cn("text-[14px] leading-tight transition-all duration-300 ease-in-out", isError ? "text-red-500" : "text-[#004554]/50")}>
            {secondaryText}
          </p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";
export { Input };