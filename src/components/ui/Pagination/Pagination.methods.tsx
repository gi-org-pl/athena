export const DOTS = "...";

const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const getBoundaryFlags = (
  currentPage: number,
  totalPageCount: number,
  siblingCount: number,
) => {
  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  const leftSiblingIndex = Math.max(currentPage - siblingCount, firstPageIndex);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, lastPageIndex);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < lastPageIndex - 1;

  return {
    shouldShowLeftDots,
    shouldShowRightDots,
    leftSiblingIndex,
    rightSiblingIndex,
  };
};

export function generatePaginationRange(
  currentPage: number,
  totalPageCount: number,
  siblingCount: number = 1,
) {
  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= totalPageCount) {
    return range(1, totalPageCount);
  }

  const {
    shouldShowLeftDots,
    shouldShowRightDots,
    leftSiblingIndex,
    rightSiblingIndex,
  } = getBoundaryFlags(currentPage, totalPageCount, siblingCount);

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = range(1, leftItemCount);
    return [...leftRange, DOTS, totalPageCount];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = range(
      totalPageCount - rightItemCount + 1,
      totalPageCount,
    );
    return [1, DOTS, ...rightRange];
  }

  const middleRange = range(leftSiblingIndex, rightSiblingIndex);
  return [1, DOTS, ...middleRange, DOTS, totalPageCount];
}
