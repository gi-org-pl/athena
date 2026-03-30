import type { HTMLAttributes, ReactNode } from "react";

export type SectionActionsPosition = "right" | "bottom";

export interface SectionProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  actions?: ReactNode;
  actionsPosition?: SectionActionsPosition;
  children: ReactNode;
  dataTestId?: string;
}