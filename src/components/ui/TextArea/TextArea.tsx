import { type ChangeEvent, forwardRef } from "react";
import {
  getCharacterCountClasses,
  getHelperClasses,
  getLabelClasses,
  getTextAreaWrapperClasses,
} from "./TextArea.methods";
import type { TextAreaProps } from "./TextArea.types";

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
      <div className="flex flex-col w-[346px]">
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
          className={getTextAreaWrapperClasses(isError, isDisabled)}
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
