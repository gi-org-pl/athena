export const measureTabElement = (element: HTMLElement | null) => {
  if (!element) {
    return { left: 0, width: 0 };
  }
  return {
    left: element.offsetLeft,
    width: element.offsetWidth,
  };
};
