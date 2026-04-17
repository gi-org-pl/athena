import type { ComponentProps, ReactNode } from "react";

export interface TableColumn<T> {
  key: string;
  header: ReactNode;
  render?: (row: T) => ReactNode;
  width?: string | number;
  align?: "left" | "center" | "right";
}

export interface TablePagination {
  page: number;
  onChange: (page: number) => void;
}

export interface TableProps<T> extends ComponentProps<"div"> {
  columns: TableColumn<T>[];
  data: T[];
  getRowKey: (row: T) => string;
  isSelectable?: boolean;
  onSelectedRowKeysChange?: (keys: string[]) => void;
  actions?: (row: T) => ReactNode;
  pagination?: TablePagination;
  emptyState?: ReactNode;
  dataTestId?: string;
  isMobileScrollable?: boolean;
  isLoading?: boolean;
  loadingRowsCount?: number;
  rowsPerPage?: number;
}

type TableAlign = "left" | "center" | "right";
type TableCellVariant = "header" | "body";

export const tableContainerVariants = ({
  isMobileScrollable = true,
}: {
  isMobileScrollable?: boolean;
}) =>
  [
    "w-full bg-transparent overflow-x-auto scroll-smooth @container",
    isMobileScrollable ? "snap-x snap-mandatory scroll-p-0" : "overflow-hidden",
  ].join(" ");

export const tableCellVariants = ({
  align = "left",
  variant = "body",
  mobileFullWidth = false,
}: {
  align?: TableAlign;
  variant?: TableCellVariant;
  mobileFullWidth?: boolean;
}) =>
  [
    "px-4 py-5 transition-colors duration-300 ease font-bold whitespace-nowrap",
    align === "center"
      ? "text-center"
      : align === "right"
        ? "text-right"
        : "text-left",
    variant === "header"
      ? "text-gi-primary first:rounded-l-[16px] last:rounded-r-[16px]"
      : "text-gi-primary",
    mobileFullWidth
      ? "min-w-[100cqw] w-[100cqw] sm:min-w-0 sm:w-auto snap-start snap-always"
      : "min-w-fit",
  ].join(" ");
