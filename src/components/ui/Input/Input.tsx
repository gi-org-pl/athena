import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import type { ChangeEvent, FocusEvent } from "react";
import { cn } from "@/lib/utils";
import { getOverlayContent } from "./Input.methods";
import type { InputProps } from "./Input.types";

const Input = forwardRef<HTMLInputElement, InputProps>(
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
      id,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const descriptionId = `${inputId}-description`;

    const [isFocused, setIsFocused] = useState(false);
    const [internalValue, setInternalValue] = useState(
      value ?? defaultValue ?? "",
    );

    const innerRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => innerRef.current as HTMLInputElement);

    useEffect(() => {
      if (value !== undefined) {
        setInternalValue(value ?? "");
      }
    }, [value]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (isDisabled) return;
      const newValue = e.target.value;
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
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

    return (
      <div className="w-full space-y-1.5 text-left" data-testid={dataTestId}>
        {label ? (
          <label
            htmlFor={inputId}
            className={cn(
              "text-sm font-medium block transition-all duration-300 ease cursor-pointer",
              isError ? "text-gi-red" : "text-gi-primary",
              isDisabled && "opacity-50 cursor-not-allowed",
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
              "border-gi-primary/10 hover:border-gi-primary/33 focus-within:border-gi-primary/33 cursor-text",
            isError && "border-gi-red",
            isDisabled && "border-gi-primary/10 cursor-not-allowed bg-white",
            className,
          )}
          onClick={handleWrapperClick}
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
            className="relative flex-1 flex items-center overflow-hidden h-full"
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
                  {getOverlayContent(isDisabled, hasValue, safeValue)}
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
              id={inputId}
              ref={innerRef}
              type={type}
              value={displayValue}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={isDisabled}
              placeholder={placeholder}
              data-test-id={dataTestId}
              aria-invalid={!!isError}
              aria-describedby={
                secondaryText && !isDisabled ? descriptionId : undefined
              }
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

        <div className="min-h-[20px]">
          {secondaryText && !isDisabled ? (
            <p
              id={descriptionId}
              className={cn(
                "text-[14px] leading-tight transition-all duration-300 ease",
                isError ? "text-gi-red" : "text-gi-primary/50",
              )}
            >
              {secondaryText}
            </p>
          ) : null}
        </div>
      </div>
    );
  },
);

Input.displayName = "Input";
export { Input };