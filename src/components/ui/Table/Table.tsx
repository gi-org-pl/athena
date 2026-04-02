import { type ForwardedRef, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "../Badge/Badge";
import { Checkbox } from "../Checkbox/Checkbox";
import { Pagination } from "../Pagination/Pagination";
import { tableCellVariants, tableContainerVariants } from "./Table.methods";
import type { TableProps } from "./Table.types";

const SkeletonRow = ({ colsCount }: { colsCount: number }) => (
  <tr className="animate-pulse">
    {Array.from({ length: colsCount }).map((_, idx) => (
      <td key={idx} className="px-4 py-5">
        <div className="h-5 bg-gi-ash/60 rounded w-full" />
      </td>
    ))}
  </tr>
);

const Table = forwardRef(
  <T,>(props: TableProps<T>, ref: ForwardedRef<HTMLDivElement>) => {
    const {
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
      isLoading = false,
      allRowKeys,
      ...rest
    } = props;

    const handleSelectRow = (rowKey: string, checked: boolean) => {
      if (!onSelectedRowKeysChange) return;
      if (checked) {
        onSelectedRowKeysChange([...selectedRowKeys, rowKey]);
      } else {
        onSelectedRowKeysChange(
          selectedRowKeys.filter((key) => key !== rowKey),
        );
      }
    };

    const handleSelectAll = (checked: boolean) => {
      if (!onSelectedRowKeysChange) return;
      const currentPageKeys = data.map((row) => getRowKey(row));
      const allKeys = allRowKeys ?? currentPageKeys;

      if (checked) {
        const newKeys = [
          ...selectedRowKeys,
          ...allKeys.filter((key) => !selectedRowKeys.includes(key)),
        ];
        onSelectedRowKeysChange(newKeys);
      } else {
        onSelectedRowKeysChange(
          selectedRowKeys.filter((key) => !allKeys.includes(key)),
        );
      }
    };

    const isAllSelected =
      data.length > 0 &&
      data.every((row) => selectedRowKeys.includes(getRowKey(row)));
    const isIndeterminate =
      !isAllSelected &&
      data.some((row) => selectedRowKeys.includes(getRowKey(row)));

    const totalCount = pagination?.totalElements ?? data.length;
    const totalColumns =
      columns.length + (isSelectable ? 1 : 0) + (actions ? 1 : 0);

    return (
      <div
        ref={ref}
        data-slot="table-root"
        data-testid={dataTestId || "table-root"}
        className={cn("flex flex-col w-full gap-4", className)}
        {...rest}
      >
        <div className={tableContainerVariants({ isMobileScrollable })}>
          <table className="w-max min-w-full border-separate border-spacing-y-0 text-sm">
            <thead>
              <tr className="bg-gi-ash">
                {isSelectable && (
                  <th
                    className={tableCellVariants({
                      variant: "header",
                      mobileFullWidth: false,
                    })}
                  >
                    <Checkbox
                      label=""
                      checked={isAllSelected}
                      indeterminate={isIndeterminate}
                      onCheckedChange={handleSelectAll}
                    />
                  </th>
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
              {isLoading ? (
                Array.from({ length: 3 }).map((_, i) => (
                  <SkeletonRow key={i} colsCount={totalColumns} />
                ))
              ) : data.length === 0 ? (
                <tr>
                  <td
                    colSpan={totalColumns}
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
  },
) as <T>(
  props: TableProps<T> & { ref?: ForwardedRef<HTMLDivElement> },
) => React.JSX.Element;

export { Table };
