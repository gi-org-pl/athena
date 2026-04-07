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
  totalPages: number;
  totalElements: number;
  onChange: (page: number) => void;
}

export interface TableProps<T> extends ComponentProps<"div"> {
  columns: TableColumn<T>[];
  data: T[];
  getRowKey: (row: T) => string;
  isSelectable?: boolean;
  selectedRowKeys?: string[];
  onSelectedRowKeysChange?: (keys: string[]) => void;
  actions?: (row: T) => ReactNode;
  pagination?: TablePagination;
  emptyState?: ReactNode;
  dataTestId?: string;
  isMobileScrollable?: boolean;
  isLoading?: boolean;
  allRowKeys?: string[];
}
