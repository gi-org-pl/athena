import { XIcon } from "lucide-react";
import { useEffect, forwardRef, useId, useRef, useState, type TransitionEvent } from "react";
import { type ModalProps, overlayVariants, modalVariants, headerVariants, footerVariants } from "./Modal.types";
import { cn } from "@/lib/utils";

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
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
      ...props
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const previouslyFocusedElement = useRef<HTMLElement | null>(null);

    const titleId = useId();
    const [isRendered, setIsRendered] = useState(isOpen);

    useEffect(() => {
      if (isOpen) setIsRendered(true);
    }, [isOpen]);

    const handleTransitionEnd = (
      event: TransitionEvent<HTMLDivElement>,
    ) => {
      if (event.target !== event.currentTarget) return;
      if (!isOpen) setIsRendered(false);
    };

    useEffect(() => {
      if (!isOpen) return;

      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }, [isOpen]);

    useEffect(() => {
      if (!isOpen || !isRendered) return;

      const modal = containerRef.current!;

      previouslyFocusedElement.current = document.activeElement as HTMLElement;

      const focusableElements = modal.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      firstElement?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isClosable) {
          onClose();
          return;
        }

        if (e.key !== "Tab") return;

        if (focusableElements.length === 0) {
          e.preventDefault();
          modal.focus();
          return;
        }

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        previouslyFocusedElement.current?.focus();
      };
    }, [isOpen, isRendered, isClosable, onClose]);

    if (!isRendered) return null;

    return (
      <div
        className={overlayVariants({ state: isOpen ? "open" : "closed" })}
        onTransitionEnd={handleTransitionEnd}
        ref={ref}
        onClick={() => {
          if (isCloseOnOverlayClick && isClosable) onClose();
        }}
      >
        <div
          ref={containerRef}
          {...props}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
          data-test-id={dataTestId}
          className={cn(
            modalVariants({ state: isOpen ? "open" : "closed" }),
            className,
          )}
          onClick={(e) => {
            e.stopPropagation();
            props.onClick?.(e);
          }}
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
                  aria-label="Close modal"
                  className="flex items-center cursor-pointer justify-center size-8 rounded-full shrink-0 transition hover:bg-gi-secondary/10 focus:outline-none focus:ring-2 focus:ring-gi-secondary/40 focus:ring-offset-2"
                >
                  <XIcon className="size-5 fill-gi-primary" />
                </button>
              )}
          </div>

          {children && <div className="mt-2 break-words text-gi-primary">{children}</div>}

          {actions && <div className={footerVariants()}>{actions}</div>}
        </div>
      </div>
    );
  }
)

Modal.displayName = "Modal"