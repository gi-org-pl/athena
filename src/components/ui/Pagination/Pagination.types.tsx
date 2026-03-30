import type { HTMLAttributes } from "react";

export interface PaginationProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  isOnlyActions?: boolean;
  isFullWidth?: boolean;
  siblingCount?: number;
  dataTestId?: string;
}
