import React, { useMemo } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../Button/Button";
import { generatePaginationRange } from "./Pagination.methods";

export interface PaginationProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "onChange"> {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  isOnlyActions?: boolean;
  isFullWidth?: boolean;
  siblingCount?: number;
  dataTestId?: string;
}

export const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.7651 8.56493C12.0776 8.25243 12.0776 7.74493 11.7651 7.43243L6.96514 2.63243C6.65264 2.31993 6.14514 2.31993 5.83264 2.63243C5.52014 2.94493 5.52014 3.45243 5.83264 3.76493L10.0676 7.99993L5.83514 12.2349C5.52264 12.5474 5.52264 13.0549 5.83514 13.3674C6.14764 13.6799 6.65514 13.6799 6.96764 13.3674L11.7676 8.56743L11.7651 8.56493Z"
      fill="currentColor"
    />
  </svg>
);

export const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.23486 7.43507C3.92236 7.74757 3.92236 8.25507 4.23486 8.56757L9.03486 13.3676C9.34736 13.6801 9.85486 13.6801 10.1674 13.3676C10.4799 13.0551 10.4799 12.5476 10.1674 12.2351L5.93236 8.00007L10.1649 3.76507C10.4774 3.45257 10.4774 2.94507 10.1649 2.63257C9.85236 2.32007 9.34486 2.32007 9.03236 2.63257L4.23236 7.43257L4.23486 7.43507Z"
      fill="currentColor"
    />
  </svg>
);

export function Pagination({
  page,
  totalPages,
  onChange,
  isOnlyActions = false,
  isFullWidth = false,
  siblingCount = 1,
  dataTestId,
  className,
  ...rest
}: PaginationProps) {
  const paginationRange = useMemo(() => {
    return generatePaginationRange(page, totalPages, siblingCount);
  }, [page, totalPages, siblingCount]);

  const handleNext = () => {
    onChange(page + 1);
  };

  const handlePrevious = () => {
    onChange(page - 1);
  };

  return (
    <nav
      aria-label="Pagination"
      data-test-id={dataTestId}
      className={cn(
        "flex items-center",
        isFullWidth ? "w-full justify-between" : "w-auto gap-2",
        className,
      )}
      {...rest}
    >
      <Button
        type="outlined"
        variant="primary"
        disabled={page === 1}
        isIconButton={isOnlyActions}
        onClick={handlePrevious}
      >
        <div />
        <ChevronLeftIcon className="scale-110 w-8 h-8" />
        <div />
      </Button>

      {!isOnlyActions && (
        <ul className="flex items-center gap-2 m-0 p-0 list-none">
          {paginationRange.map((pageNumber, index) => {
            if (typeof pageNumber === "string") {
              return (
                <li key={`dots-${index}`}>
                  <Button
                    type="ghost"
                    variant="primary"
                    className="pointer-events-none"
                    aria-hidden="true"
                    isIconButton
                  >
                    &#8230;
                  </Button>
                </li>
              );
            }

            return (
              <li key={`page-${pageNumber}`}>
                <Button
                  type={pageNumber === page ? "primary" : "ghost"}
                  variant="primary"
                  onClick={() => onChange(pageNumber)}
                  isIconButton
                  aria-current={pageNumber === page ? "page" : undefined}
                >
                  {pageNumber}
                </Button>
              </li>
            );
          })}
        </ul>
      )}
      <Button
        type="outlined"
        variant="primary"
        disabled={page === totalPages}
        isIconButton={isOnlyActions}
        onClick={handleNext}
      >
        <div />
        <ChevronRightIcon className="scale-110 w-8 h-8" />
        <div />
      </Button>
    </nav>
  );
}
