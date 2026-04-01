import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";
import type { SectionProps } from "./Section.types";

export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      title,
      actions,
      actionsPosition = "right",
      children,
      className,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const titleId = `section_title_${generatedId}`;

    const isRight = actions && actionsPosition === "right";
    const isBottom = actions && actionsPosition === "bottom";

    return (
      <section
        ref={ref}
        data-test-id={dataTestId}
        aria-labelledby={titleId}
        className={cn(
          "w-full flex flex-col border border-gi-ash rounded-[48px]",
          className,
        )}
        {...rest}
      >
        <header className="flex flex-col w-full p-6 gap-4">
          <div className="flex flex-row items-center justify-between w-full">
            <h2
              id={titleId}
              className="text-gi-light-primary font-extrabold text-[24px]/[120%]"
            >
              {title}
            </h2>
            {isRight && (
              <div
                role="group"
                aria-label={`Actions for ${title}`}
                className="flex flex-row items-center gap-3"
              >
                {actions}
              </div>
            )}
          </div>
          {isBottom && (
            <div
              role="group"
              aria-label={`Actions for ${title}`}
              className="flex flex-row items-center gap-3"
            >
              {actions}
            </div>
          )}
        </header>
        <div className="flex flex-col w-full border-gi-ash rounded-[48px] bg-gi-ash p-6 gap-4">
          <div className="text-gi-light-primary bg-background rounded-[32px] border py-4.5 px-6 border-gi-dark-ash">
            {children}
          </div>
        </div>
      </section>
    );
  },
);

Section.displayName = "Section";
