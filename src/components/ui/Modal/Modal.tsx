import { cva } from "class-variance-authority";
import { XIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";

const overlayVariants = cva(
  "fixed inset-0 z-50 flex items-center justify-center bg-black/10 transition-opacity duration-300 ease",
  {
    variants: {
      state: {
        open: "opacity-100",
        closed: "opacity-0",
      },
    },
  }
);

const modalVariants = cva(
  "relative w-[512px] max-w-lg max-h-[85vh] overflow-y-auto rounded-3xl bg-white p-6 shadow-xl border border-gi-dark-ash transition-all duration-300 ease",
  {
    variants: {
      state: {
        open: "opacity-100 scale-100",
        closed: "opacity-0 scale-95",
      },
    },
  }
);

const headerVariants = cva(
  "flex items-start justify-between text-gi-primary"
);

const footerVariants = cva("flex justify-end mt-6");

export interface ModalProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  isOpen: boolean;
  isClosable?: boolean;
  isCloseOnOverlayClick?: boolean;
  onClose: () => void;
  dataTestId?: string;
}

export function Modal({
  title,
  description,
  children,
  actions,
  isOpen,
  isClosable = true,
  isCloseOnOverlayClick = true,
  onClose,
  className,
  dataTestId,
  ...rest
}: ModalProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const titleId = React.useId();
  const [isRendered, setIsRendered] = React.useState(isOpen);

  React.useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    }
  }, [isOpen]);

  const handleTransitionEnd = (
    event: React.TransitionEvent<HTMLDivElement>
  ) => {
    if (event.target !== event.currentTarget) return;
    if (!isOpen) {
      setIsRendered(false);
    }
  };

  React.useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isRendered) return null;

  return (
    <div
      className={overlayVariants({ state: isOpen ? "open" : "closed" })}
      onTransitionEnd={handleTransitionEnd}
      onClick={() => {
        if (isCloseOnOverlayClick) onClose();
      }}
    >
      <div
        ref={containerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        data-testid={dataTestId}
        className={cn(
          modalVariants({ state: isOpen ? "open" : "closed" }),
          className
        )}
        onClick={(e) => e.stopPropagation()}
        {...rest}
      >
        <div className={headerVariants()}>
          <div className="flex-1 min-w-0">
            <h2 id={titleId} className="font-semibold break-words">
              {title}
            </h2>

            {description && (
              <p className="text-[14px] mt-2 break-words text-gi-gray">
                {description}
              </p>
            )}
          </div>

          {isClosable && (
            <button
              type="button"
              onClick={onClose}
              className="opacity-70 hover:opacity-100 transition shrink-0"
            >
              <XIcon className="size-5" />
            </button>
          )}
        </div>

        {children && <div className="mt-4 break-words">{children}</div>}

        {actions && <div className={footerVariants()}>{actions}</div>}
      </div>
    </div>
  );
}