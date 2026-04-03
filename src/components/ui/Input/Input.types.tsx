import type { InputHTMLAttributes, ReactNode } from "react";

export type InputValue = string | number | readonly string[] | undefined;

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    "onChange" | "value" | "prefix"
  > {
  dataTestId?: string;
  label?: string;
  helper?: ReactNode;
  errorText?: string;
  isError?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  LeftIcon?: ReactNode;
  RightIcon?: ReactNode;
  prefix?: string;
  suffix?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}