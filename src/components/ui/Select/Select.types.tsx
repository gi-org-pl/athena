import { type HTMLAttributes } from "react";

export interface SelectProps extends HTMLAttributes<HTMLDivElement> {
  value?: React.ReactNode;
  placeholder?: string;
  size?: "regular" | "small";
  openOn?: "click" | "hover";
  children: React.ReactNode;
  isDisabled?: boolean;
  dataTestId?: string;
  trigger?: React.ReactNode;
};