import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "../Badge/Badge";
import { Checkbox } from "../Checkbox/Checkbox";
import { Pagination } from "../Pagination/Pagination";

const tableContainerVariants = cva(
  "w-full bg-transparent overflow-x-auto scroll-smooth @container",
  {
    variants: {
      isMobileScrollable: {
        true: "snap-x snap-mandatory scroll-p-0",
        false: "overflow-hidden",
      },
    },
    defaultVariants: {
      isMobileScrollable: true,
    },
  },
);

const tableCellVariants = cva(
  "px-4 py-5 transition-colors duration-300 ease font-bold whitespace-nowrap snap-start snap-always",
  {
    variants: {
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      variant: {
        header: "text-gi-primary first:rounded-l-[16px] last:rounded-r-[16px]",
        body: "text-gi-primary font-normal",
      },
      mobileFullWidth: {
        // Corrected the sm breakpoint logic here
        true: "min-w-[100cqw] w-[100cqw] sm:min-w-0 sm:w-auto",
        false: "min-w-fit",
      },
    },
    defaultVariants: {
      align: "left",
      variant: "body",
      mobileFullWidth: false,
    },
  },
);

export interface TableColumn<T> {
  key: string;
  header: React.ReactNode;
  render?: (row: T) => React.ReactNode;
  width?: string | number;
  align?: VariantProps<typeof tableCellVariants>["align"];
}

export interface TablePagination {
  page: number;
  totalPages: number;
  totalElements: number;
  onChange: (page: number) => void;
}

export interface TableProps<T>
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tableContainerVariants> {
  columns: TableColumn<T>[];
  data: T[];
  getRowKey: (row: T) => string;
  isSelectable?: boolean;
  selectedRowKeys?: string[];
  onSelectedRowKeysChange?: (keys: string[]) => void;
  actions?: (row: T) => React.ReactNode;
  pagination?: TablePagination;
  emptyState?: React.ReactNode;
  dataTestId?: string;
}

function Table<T>({
  columns,
  data,
  getRowKey,
  isSelectable = false,
  selectedRowKeys = [],
  onSelectedRowKeysChange,
  actions,
  pagination,
  emptyState,
  isMobileScrollable = true,
  dataTestId,
  className,
  ...props
}: TableProps<T>) {
  const handleSelectRow = (rowKey: string, checked: boolean) => {
    if (!onSelectedRowKeysChange) return;
    if (checked) {
      onSelectedRowKeysChange([...selectedRowKeys, rowKey]);
    } else {
      onSelectedRowKeysChange(selectedRowKeys.filter((key) => key !== rowKey));
    }
  };

  const totalCount = pagination?.totalElements ?? data.length;

  return (
    <div
      data-slot="table-root"
      data-testid={dataTestId || "table-root"}
      className={cn("flex flex-col w-full gap-4", className)}
      {...props}
    >
      <div className={tableContainerVariants({ isMobileScrollable })}>
        <table className="w-max min-w-full border-separate border-spacing-y-0 text-sm">
          <thead>
            <tr className="bg-gi-ash">
              {isSelectable && (
                <th
                  // Hardcoded mobileFullWidth to false to keep it narrow
                  className={tableCellVariants({ 
                    variant: "header",
                    mobileFullWidth: false 
                  })}
                />
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  style={{ width: column.width }}
                  className={tableCellVariants({
                    align: column.align,
                    variant: "header",
                    mobileFullWidth: isMobileScrollable,
                  })}
                >
                  {column.header}
                </th>
              ))}
              {actions && (
                <th
                  className={tableCellVariants({
                    align: "right",
                    variant: "header",
                    mobileFullWidth: isMobileScrollable,
                  })}
                />
              )}
            </tr>
            <tr className="h-4" aria-hidden="true">
              <td colSpan={100} />
            </tr>
          </thead>

          <tbody className="bg-white">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={100}
                  className="p-12 text-center text-gi-gray italic border-y border-gi-dark-ash"
                >
                  {emptyState || "No data available"}
                </td>
              </tr>
            ) : (
              data.map((row, index) => {
                const rowKey = getRowKey(row);
                const isSelected = selectedRowKeys.includes(rowKey);
                return (
                  <tr
                    key={rowKey}
                    className="transition-colors duration-300 ease group hover:bg-gi-ash/10"
                  >
                    {isSelectable && (
                      <td
                        className={cn(
                          // Hardcoded mobileFullWidth to false here as well
                          tableCellVariants({
                            mobileFullWidth: false,
                          }),
                          "px-4 py-5 border-b border-gi-dark-ash",
                          index === 0 && "border-t border-gi-dark-ash",
                        )}
                      >
                        <Checkbox
                          label=""
                          checked={isSelected}
                          onCheckedChange={(checked) =>
                            handleSelectRow(rowKey, checked === true)
                          }
                        />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td
                        key={`${rowKey}-${column.key}`}
                        className={cn(
                          tableCellVariants({
                            align: column.align,
                            variant: "body",
                            mobileFullWidth: isMobileScrollable,
                          }),
                          "border-b border-gi-dark-ash",
                          index === 0 && "border-t border-gi-dark-ash",
                        )}
                      >
                        {column.render
                          ? column.render(row)
                          : (row as any)[column.key]}
                      </td>
                    ))}
                    {actions && (
                      <td
                        className={cn(
                          tableCellVariants({
                            align: "right",
                            variant: "body",
                            mobileFullWidth: isMobileScrollable,
                          }),
                          "px-4 py-5 border-b border-gi-dark-ash font-medium text-gi-primary",
                          index === 0 && "border-t border-gi-dark-ash",
                        )}
                      >
                        {actions(row)}
                      </td>
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-row items-start justify-between w-full mt-2 px-1">
        <div className="flex items-start">
          {isSelectable && (
            <Badge
              type="success"
              variant="primary"
              className="flex items-center justify-center py-1 px-3 bg-gi-ash/40 border-none text-gi-primary font-bold rounded-lg leading-none"
            >
              {selectedRowKeys.length}/{totalCount}
            </Badge>
          )}
        </div>
        <div className="flex items-start">
          {pagination && (
            <Pagination
              page={pagination.page}
              totalPages={pagination.totalPages}
              onChange={pagination.onChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export { Table };