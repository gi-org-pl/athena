import { Root } from "@radix-ui/react-checkbox";
import type { ComponentProps } from "react";

export type CheckboxProps = ComponentProps<typeof Root> & {
  label: string;
  secondaryLabel?: string;
};
