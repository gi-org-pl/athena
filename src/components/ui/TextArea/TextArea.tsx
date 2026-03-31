import { type ChangeEvent, forwardRef } from "react";
import type { TextAreaProps } from "./TextArea.types";

const getTextAreaWrapperClasses = (
  isError: boolean,
  isDisabled: boolean,
  isResizable: boolean,
): string => {
  const resizeClass = isResizable ? "resize-y" : "resize-none";

  const base = `w-full min-h-[122px] rounded-3xl border bg-transparent p-4 text-sm transition-colors duration-300 ${resizeClass} focus:outline-none`;

  if (isDisabled) {
    return `${base} border-gi-ash text-gi-gray placeholder:text-gi-ash cursor-not-allowed`;
  }

  if (isError) {
    return `${base} border-gi-red text-gi-dark-primary placeholder:text-gi-gray hover:border-gi-red-hover focus:border-2 focus:border-gi-red-hover`;
  }

  return `${base} border-gi-primary/10 text-gi-dark-primary placeholder:text-gi-gray hover:border-gi-primary/20 focus:border-2 focus:border-gi-primary/20`;
};

const getLabelClasses = (isDisabled: boolean): string => {
  if (isDisabled) return "block text-sm font-medium text-gi-gray mb-2";
  return "block text-sm font-medium text-gi-primary mb-2";
};

const getHelperClasses = (isError: boolean): string => {
  if (isError) return "text-xs text-gi-red mt-2";
  return "text-xs text-gi-gray mt-2";
};

const getCharacterCountClasses = (
  isError: boolean,
  isDisabled: boolean,
): string => {
  if (isDisabled) return "text-xs text-gi-ash";
  if (isError) return "text-xs text-gi-red";
  return "text-xs text-gi-gray";
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      dataTestId,
      value,
      onChange,
      label,
      placeholder,
      helper,
      errorText,
      characterLimit,
      isError = false,
      isRequired = false,
      isDisabled = false,
      isResizable = false,
      ...props
    },
    ref,
  ) => {
    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      if (!isDisabled) {
        onChange(event.target.value);
      }
    };

    const showErrorText = isError && errorText;
    const bottomText = showErrorText ? errorText : helper;
    const charCount = Array.from(value).length;

    return (
      <div className="flex flex-col w-full max-w-[346px]">
        {label && (
          <label className={getLabelClasses(isDisabled)}>
            {label}
            {isRequired && (
              <span className="text-gi-red ml-0.5" aria-hidden="true">
                *
              </span>
            )}
          </label>
        )}

        <textarea
          ref={ref}
          data-test-id={dataTestId}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          disabled={isDisabled}
          required={isRequired}
          aria-invalid={isError}
          aria-required={isRequired}
          aria-describedby={
            bottomText || characterLimit !== undefined
              ? `${dataTestId ?? "textarea"}-description`
              : undefined
          }
          className={getTextAreaWrapperClasses(
            isError,
            isDisabled,
            isResizable,
          )}
          rows={4}
          {...props}
        />

        {(bottomText !== undefined || characterLimit !== undefined) && (
          <div
            id={`${dataTestId ?? "textarea"}-description`}
            className="flex justify-between items-baseline mt-2 w-full"
          >
            <span className={getHelperClasses(isError)}>
              {showErrorText ? errorText : helper}
            </span>
            {characterLimit !== undefined && (
              <span
                className={getCharacterCountClasses(isError, isDisabled)}
                aria-live="polite"
              >
                {charCount}/{characterLimit}
              </span>
            )}
          </div>
        )}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";
