export const getTextAreaWrapperClasses = (
  isError: boolean,
  isDisabled: boolean,
  isResizable: boolean,
): string => {
  const resizeClass = isResizable ? "resize-y" : "resize-none";

  const base = `w-full min-h-[122px] rounded-3xl border bg-transparent p-4 text-sm transition-colors duration-300 ${resizeClass} focus:outline-none`;

  if (isDisabled) {
    return `${base} border-gi-ash text-gi-gray placeholder:text-gi-ash cursor-not-allowed`;
  }

  if (isError) {
    return `${base} border-gi-red text-gi-dark-primary placeholder:text-gi-gray hover:border-gi-red-hover focus:border-2 focus:border-gi-red-hover`;
  }

  return `${base} border-gi-primary/10 text-gi-dark-primary placeholder:text-gi-gray hover:border-gi-primary/20 focus:border-2 focus:border-gi-primary/20`;
};

export const getLabelClasses = (isDisabled: boolean): string => {
  if (isDisabled) return "block text-sm font-medium text-gi-gray mb-2";
  return "block text-sm font-medium text-gi-primary mb-2";
};

export const getHelperClasses = (isError: boolean): string => {
  if (isError) return "text-xs text-gi-red mt-2";
  return "text-xs text-gi-gray mt-2";
};

export const getCharacterCountClasses = (
  isError: boolean,
  isDisabled: boolean,
): string => {
  if (isDisabled) return "text-xs text-gi-ash";
  if (isError) return "text-xs text-gi-red";
  return "text-xs text-gi-gray";
};
