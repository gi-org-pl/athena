export const DOTS = "...";

// Creates an array of numbers from start to end inclusive.
const range = (start: number, end: number): number[] => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

// Determines whether the pagination should show dots on the left or right.
const getBoundaryFlags = (
  currentPage: number, 
  totalPageCount: number, 
  siblingCount: number
) => {
  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  // Pages to show before/after current page plus the boundary (1 or total)
  const leftSiblingIndex = Math.max(currentPage - siblingCount, firstPageIndex);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, lastPageIndex);

  // Dots appear if there is more than one page gap between boundary and siblings
  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < lastPageIndex - 1;

  return { shouldShowLeftDots, shouldShowRightDots, leftSiblingIndex, rightSiblingIndex };
};

export function generatePaginationRange(
  currentPage: number,
  totalPageCount: number,
  siblingCount: number = 1
) {
  // Constant represents: first + last + current + 2*siblings + 2*dots
  const totalPageNumbers = siblingCount + 5;

  // Case 1: Total pages less than the count we want to show
  if (totalPageNumbers >= totalPageCount) {
    return range(1, totalPageCount);
  }

  const { 
    shouldShowLeftDots, 
    shouldShowRightDots, 
    leftSiblingIndex, 
    rightSiblingIndex 
  } = getBoundaryFlags(currentPage, totalPageCount, siblingCount);

  // Case 2: No left dots, but right dots exist
  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = range(1, leftItemCount);
    return [...leftRange, DOTS, totalPageCount];
  }

  // Case 3: No right dots, but left dots exist
  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
    return [1, DOTS, ...rightRange];
  }

  // Case 4: Both left and right dots exist
  const middleRange = range(leftSiblingIndex, rightSiblingIndex);
  return [1, DOTS, ...middleRange, DOTS, totalPageCount];
}