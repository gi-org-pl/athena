import type { ComponentProps, ReactNode } from "react";

export type TextAreaData = {
  value: string;
};

export interface TextAreaProps
  extends Omit<
    ComponentProps<"textarea">,
    "onChange" | "disabled" | "required"
  > {
  dataTestId?: string;
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
  helper?: ReactNode;
  errorText?: string;
  characterLimit?: number;
  isError?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isResizable?: boolean;
}
