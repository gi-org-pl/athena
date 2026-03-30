import { useMemo, forwardRef } from "react";
import type { PaginationProps } from "./Pagination.types";
import ChevronLeftIcon from "@/assets/icons/chevron-left.svg";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg";
import { cn } from "@/lib/utils";
import { Button } from "../Button/Button";
import { generatePaginationRange } from "./Pagination.methods";

export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      page,
      totalPages,
      onChange,
      isOnlyActions = false,
      isFullWidth = false,
      siblingCount = 1,
      dataTestId,
      className,
      ...rest
    },
    ref,
  ) => {
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
        ref={ref}
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
          aria-label="Previous"
        >
          <div />
          <ChevronLeftIcon />
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
                      aria-label="More Pages"
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
          aria-label="Next"
          onClick={handleNext}
        >
          <div />
          <ChevronRightIcon />
          <div />
        </Button>
      </nav>
    );
  }
)

Pagination.displayName = "Pagination";