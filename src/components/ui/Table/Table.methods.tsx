import { cva } from "class-variance-authority";

export const tableContainerVariants = cva(
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

export const tableCellVariants = cva(
  "px-4 py-5 transition-colors duration-300 ease font-bold whitespace-nowrap",
  {
    variants: {
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      variant: {
        header: "text-gi-primary first:rounded-l-[16px] last:rounded-r-[16px]",
        body: "text-gi-primary font-bold",
      },
      mobileFullWidth: {
        true: "min-w-[100cqw] w-[100cqw] sm:min-w-0 sm:w-auto snap-start snap-always",
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
