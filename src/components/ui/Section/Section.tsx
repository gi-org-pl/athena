import * as React from "react";

import { cn } from "@/lib/utils";

export type SectionActionsPosition = "right" | "bottom";

export interface SectionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title: React.ReactNode;
  actions?: React.ReactNode;
  actionsPosition?: SectionActionsPosition;
  children: React.ReactNode;
  dataTestId?: string;
}

export function Section({
  title,
  actions,
  actionsPosition = "right",
  children,
  className,
  dataTestId,
  ...rest
}: SectionProps) {
  const showInlineActions = actions && actionsPosition === "right";
  const showBottomActions = actions && actionsPosition === "bottom";

  return (
    <section
    data-testid={dataTestId}
    className={cn("w-full flex flex-col border border-gi-ash rounded-[48px] ", className)}
    {...rest}>
      <header className="flex flex-col w-full p-6 gap-4">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="text-gi-light-primary font-extrabold text-[24px]/[120%]">{title}</div>
          {showInlineActions && (<div className="flex flex-row items-center gap-3">{actions}</div>)}
        </div>
        {showBottomActions && (<div className="flex flex-row items-center gap-3">{actions}</div>)}
      </header>
      <section className="flex flex-col w-full border-gi-ash rounded-[48px] bg-gi-ash p-6 gap-4">
        <section className="text-gi-light-primary bg-background rounded-[32px] border py-4.5 px-6  border-gi-dark-ash">
          {children}
        </section>
      </section>
    </section>
  );
}