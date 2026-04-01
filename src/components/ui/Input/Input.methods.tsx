export const getOverlayContent = (
  isDisabled: boolean | undefined,
  hasValue: boolean,
  safeValue: string,
): string => {
  if (isDisabled && !hasValue) return "some text";
  return safeValue;
};
