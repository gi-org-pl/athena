import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "../Badge/Badge";
import { Checkbox } from "../Checkbox/Checkbox";
import { Pagination } from "../Pagination/Pagination";

// ==========================================
// 1. KONFIGURACJA CVA (STYLE BAZOWE)
// ==========================================

const tableContainerVariants = cva(
  "w-full bg-transparent", 
  {
    variants: {
      isMobileScrollable: {
        true: "overflow-x-auto",
        false: "overflow-hidden",
      },
    },
    defaultVariants: {
      isMobileScrollable: true,
    },
  }
);

// --- SEKCJA: STYLE NAGŁÓWKA (PIGUŁKI) ---
const tableHeaderRowVariants = cva("bg-gi-ash");

const tableCellVariants = cva("px-4 py-5 transition-colors duration-300 ease font-bold", {
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    variant: {
      header: "font-bold text-gi-primary first:rounded-l-[16px] last:rounded-r-[16px]", 
      body: "text-gi-primary",
    },
  },
  defaultVariants: {
    align: "left",
    variant: "body",
  },
});

// --- SEKCJA: STYLE WIERSZY (BODY) ---
const tableRowVariants = cva(
  "transition-colors duration-300 ease"
);

// ==========================================
// 2. INTERFEJSY
// ==========================================

export interface TableColumn<T> {
  key: string;
  header: React.ReactNode;
  render?: (row: T) => React.ReactNode;
  width?: string | number;
  ratio?: number;
  align?: VariantProps<typeof tableCellVariants>["align"];
}

export interface TablePagination {
  page: number;
  totalPages: number;
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

// ==========================================
// 3. KOMPONENT GŁÓWNY
// ==========================================

function Table<T>({
  columns,
  data,
  getRowKey, // Wykorzystujemy ten prop
  isSelectable = false,
  selectedRowKeys = [],
  onSelectedRowKeysChange,
  actions,
  pagination,
  emptyState,
  isMobileScrollable,
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

  return (
    <div
      data-slot="table-root"
      className={cn("flex flex-col w-full gap-4", className)}
      data-test-id={dataTestId}
      {...props}
    >
      <div className={tableContainerVariants({ isMobileScrollable })}>
        <table className="w-full border-separate border-spacing-y-0 text-sm">
          
          {/* --- SEKCJA: RENDEROWANIE NAGŁÓWKA --- */}
          <thead>
            <tr className={tableHeaderRowVariants()}>
              {isSelectable && (
                <th className={tableCellVariants({ variant: "header" })} />
              )}
              {columns.map((column) => (
                <th
                  key={column.key}
                  style={{ width: column.width, flexGrow: column.ratio }}
                  className={tableCellVariants({ align: column.align, variant: "header" })}
                >
                  {column.header}
                </th>
              ))}
              {actions && (
                <th className={tableCellVariants({ align: "right", variant: "header" })} />
              )}
            </tr>
            <tr className="h-4" aria-hidden="true"><td colSpan={100} /></tr>
          </thead>

          {/* --- SEKCJA: RENDEROWANIE BODY --- */}
          <tbody className="bg-white">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={columns.length + (isSelectable ? 1 : 0) + (actions ? 1 : 0)}
                  className="p-12 text-center text-gi-gray italic border-y border-gi-dark-ash"
                >
                  {emptyState || "No data available"}
                </td>
              </tr>
            ) : (
              data.map((row, index) => {
                // NAPRAWA: Używamy getRowKey(row) zamiast wadliwego getKey(row)
                const rowKey = getRowKey(row);
                const isSelected = selectedRowKeys.includes(rowKey);
                return (
                  <tr 
                    key={rowKey} 
                    className={tableRowVariants()}
                  >
                    {isSelectable && (
                      <td className={cn(
                        "px-4 py-5 w-12 border-b border-gi-dark-ash",
                        index === 0 && "border-t border-gi-dark-ash"
                      )}>
                        <Checkbox
                          label=""
                          checked={isSelected}
                          onCheckedChange={(checked) => handleSelectRow(rowKey, checked === true)}
                        />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td
                        key={`${rowKey}-${column.key}`}
                        className={cn(
                          tableCellVariants({ align: column.align, variant: "body" }),
                          "border-b border-gi-dark-ash",
                          index === 0 && "border-t border-gi-dark-ash"
                        )}
                      >
                        {column.render ? column.render(row) : (row as any)[column.key]}
                      </td>
                    ))}
                    {actions && (
                      <td className={cn(
                        tableCellVariants({ align: "right", variant: "body" }),
                        "border-b border-gi-dark-ash",
                        index === 0 && "border-t border-gi-dark-ash"
                      )}>
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

      {/* --- SEKCJA: STOPKA (BADGE I PAGINACJA) --- */}
      <div className="flex items-center justify-between w-full mt-2 px-1">
        <div className="flex items-center gap-2">
          {isSelectable && data.length > 0 && (
            <Badge 
              type="success" 
              variant="primary" 
              className="flex items-center gap-1.5 py-1 px-3 bg-gi-ash/40 border-none text-gi-primary font-bold rounded-lg"
            >
              {selectedRowKeys.length}/{data.length}
            </Badge>
          )}
        </div>
        {pagination && (
          <Pagination
            page={pagination.page}
            totalPages={pagination.totalPages}
            onChange={pagination.onChange}
          />
        )}
      </div>
    </div>
  );
}

export { Table };