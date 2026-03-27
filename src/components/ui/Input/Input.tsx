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
  defaultValue?: string;
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
      placeholder,
      defaultValue,
      ...props
    },
    ref,
  ) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(
      value ?? defaultValue ?? "",
    );

    const innerRef = React.useRef<HTMLInputElement>(null);
    React.useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    React.useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value ?? "");
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isDisabled) return;
      const newValue = e.target.value;
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    const handleWrapperClick = () => {
      if (!isDisabled) {
        innerRef.current?.focus();
      }
    };

    const displayValue = value !== undefined ? (value ?? "") : internalValue;
    const safeValue = String(displayValue);
    const hasValue = safeValue.length > 0;
    const secondaryText = isError ? (errorText ?? null) : (helper ?? null);
    const shouldShowOverlay = !isFocused && (hasValue || isDisabled);

    const getOverlayContent = () => {
      if (isDisabled && !hasValue) return "some text";
      return safeValue;
    };

    return (
      <div className="w-full space-y-1.5 text-left" data-testid={dataTestId}>
        {label ? (
          <label
            className={cn(
              "text-sm font-medium block transition-all duration-300 ease",
              isError ? "text-gi-red" : "text-gi-primary",
              isDisabled && "opacity-50",
            )}
          >
            {label}
            {isRequired ? <span className="text-gi-red ml-1">*</span> : null}
          </label>
        ) : null}

        <div
          className={cn(
            "flex items-center w-full min-h-[40px] px-4 bg-white border rounded-[24px] transition-all duration-300 ease",
            !isError &&
              !isDisabled &&
              "border-gi-primary/10 hover:border-gi-primary/33 focus-within:border-2 focus-within:border-gi-primary/33",
            isError && "border-gi-red",
            isDisabled && "border-gi-primary/10 cursor-not-allowed bg-white",
            className,
          )}
        >
          {LeftIcon ? (
            <div
              className={cn(
                "flex-shrink-0 mr-2 flex items-center",
                isDisabled ? "opacity-30" : "text-gi-primary",
              )}
            >
              {LeftIcon}
            </div>
          ) : null}

          <div
            className="relative flex-1 flex items-center overflow-hidden h-full cursor-text"
            onClick={handleWrapperClick}
            data-testid="input-click-wrapper"
          >
            {shouldShowOverlay ? (
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none w-full">
                {prefix && hasValue ? (
                  <span className="text-sm mr-0.2 text-gi-primary/50 select-none">
                    {prefix}
                  </span>
                ) : null}
                <span
                  className={cn(
                    "text-sm truncate",
                    !hasValue && isDisabled
                      ? "text-gi-primary/30"
                      : "text-gi-primary",
                  )}
                >
                  {getOverlayContent()}
                </span>
                {suffix && hasValue ? (
                  <span className="text-sm ml-0.2 text-gi-primary/50 select-none">
                    {suffix}
                  </span>
                ) : null}
              </div>
            ) : null}

            <input
              {...props}
              ref={innerRef}
              type={type}
              value={displayValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={isDisabled}
              placeholder={placeholder}
              data-test-id={dataTestId}
              className={cn(
                "flex-1 bg-transparent text-sm text-gi-primary outline-none placeholder:text-gi-primary/30 py-3 w-full",
                shouldShowOverlay &&
                  "text-transparent placeholder:text-transparent",
                isDisabled && "cursor-not-allowed",
              )}
            />
          </div>

          {RightIcon ? (
            <div
              data-testid="right-icon-container"
              className={cn(
                "flex-shrink-0 ml-2 flex items-center",
                isDisabled ? "opacity-30" : "text-gi-primary",
              )}
            >
              {RightIcon}
            </div>
          ) : null}
        </div>

        {secondaryText && !isDisabled ? (
          <p
            className={cn(
              "text-[14px] leading-tight transition-all duration-300 ease",
              isError ? "text-gi-red" : "text-gi-primary/50",
            )}
          >
            {secondaryText}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
export { Input };
