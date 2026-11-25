import { XIcon } from "lucide-react";
import {
  forwardRef,
  type TransitionEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { cn } from "../../../lib/utils";
import {
  footerVariants,
  headerVariants,
  type ModalProps,
  modalVariants,
  overlayVariants,
} from "./Modal.types";

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
      closeLabel = "Close modal",
      initialFocusRef,
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

    const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
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

      // The tab stops are read again at every key press: content the dialog
      // draws after it opens takes part in the trap as well.
      const getTabStops = () =>
        Array.from(
          modal.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
          ),
        );

      (initialFocusRef?.current ?? getTabStops()[0])?.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape" && isClosable) {
          onClose();
          return;
        }

        if (e.key !== "Tab") return;

        const focusableElements = getTabStops();
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (focusableElements.length === 0) {
          e.preventDefault();
          modal.focus();
          return;
        }

        // The focus can stand on an element that is not a tab stop - an
        // initial focus target with tabIndex -1, or the dialog itself. Tab
        // then goes to the first tab stop and Shift+Tab to the last, so that
        // it never leaves the dialog.
        const isOnTabStop = focusableElements.includes(
          document.activeElement as HTMLElement,
        );

        if (!isOnTabStop) {
          e.preventDefault();
          (e.shiftKey ? lastElement : firstElement)?.focus();
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
    }, [isOpen, isRendered, isClosable, onClose, initialFocusRef]);

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
          data-testid={dataTestId}
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
                aria-label={closeLabel}
                className="flex items-center cursor-pointer justify-center size-8 rounded-full shrink-0 transition hover:bg-gi-secondary/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gi-secondary/40 focus-visible:ring-offset-2"
              >
                <XIcon className="size-5 fill-gi-primary" />
              </button>
            )}
          </div>

          {children && (
            <div className="mt-2 break-words text-gi-primary">{children}</div>
          )}

          {actions && <div className={footerVariants()}>{actions}</div>}
        </div>
      </div>
    );
  },
);

Modal.displayName = "Modal";
