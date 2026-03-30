import { cva } from "class-variance-authority";
import type { HTMLAttributes, ReactNode } from "react";

export interface ModalProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  title: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  actions?: ReactNode;
  isOpen: boolean;
  isClosable?: boolean;
  isCloseOnOverlayClick?: boolean;
  onClose: () => void;
  dataTestId?: string;
}

export const overlayVariants = cva(
  "fixed inset-0 z-50 flex items-center justify-center bg-black/10 transition-opacity duration-300 ease",
  {
    variants: {
      state: {
        open: "opacity-100",
        closed: "opacity-0",
      },
    },
  },
);

export const modalVariants = cva(
  "relative w-[512px] max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-xl border border-gi-dark-ash transition-all duration-300 ease",
  {
    variants: {
      state: {
        open: "opacity-100 scale-100",
        closed: "opacity-0 scale-95",
      },
    },
  },
);

export const headerVariants = cva(
  "flex items-start justify-between text-gi-primary",
);

export const footerVariants = cva("flex justify-end gap-3 mt-6");
