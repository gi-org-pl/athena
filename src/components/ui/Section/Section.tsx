import { forwardRef } from "react";
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
    const isRight = actions && actionsPosition === "right";
    const isBottom = actions && actionsPosition === "bottom";

    return (
      <section
        ref={ref}
        data-testid={dataTestId}
        className={cn(
          "w-full flex flex-col border border-gi-ash rounded-[48px]",
          className,
        )}
        {...rest}
      >
        <header className="flex flex-col w-full p-6 gap-4">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="text-gi-light-primary font-extrabold text-[24px]/[120%]">
              {title}
            </div>
            {isRight && (
              <div className="flex flex-row items-center gap-3">{actions}</div>
            )}
          </div>
          {isBottom && (
            <div className="flex flex-row items-center gap-3">{actions}</div>
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
