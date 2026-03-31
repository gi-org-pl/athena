import { type ComponentPropsWithoutRef, type ReactNode } from "react";

export interface TabItem {
  label: ReactNode;
  value: string;
}

export interface TabsProps extends ComponentPropsWithoutRef<"div"> {
  value: string;
  onValueChange: (value: string) => void;
  items: Array<TabItem>;
  size?: "regular" | "large";
  isFullWidth?: boolean;
  dataTestId?: string;
}
