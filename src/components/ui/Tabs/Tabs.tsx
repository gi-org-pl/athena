import * as React from "react";
import { useEffect, useRef, useState } from "react";

export interface TabItem {
  label: React.ReactNode;
  value: string;
}

export interface TabsProps extends React.ComponentPropsWithoutRef<"div"> {
  value: string;
  onValueChange: (value: string) => void;
  items: Array<TabItem>;
  size?: "regular" | "large";
  isFullWidth?: boolean;
  dataTestId?: string;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      value,
      onValueChange,
      items,
      size = "regular",
      isFullWidth = false,
      dataTestId,
      className = "",
      ...props
    },
    ref,
  ) => {
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

    useEffect(() => {
      const activeIndex = items.findIndex((item) => item.value === value);
      const activeElement = tabsRef.current[activeIndex];

      setIndicatorStyle(measureTabElement(activeElement));
    }, [value, items, size, isFullWidth]);

    const sizeClasses =
      size === "large" ? "text-lg pt-4 pb-3 px-3" : "text-base pt-3 pb-2 px-3";
    const containerWidthClass = isFullWidth
      ? "w-full flex"
      : "w-max inline-flex";

    return (
      <div
        ref={ref}
        role="tablist"
        data-test-id={dataTestId}
        className={`relative border-b-4 border-slate-200 ${containerWidthClass} ${className}`}
        {...props}
      >
        {items.map((item, index) => {
          const isActive = item.value === value;
          return (
            <button
              key={item.value}
              ref={(el) => {
                tabsRef.current[index] = el;
              }}
              role="tab"
              aria-selected={isActive}
              onClick={() => onValueChange(item.value)}
              className={`
                ${sizeClasses}
                ${isFullWidth ? "flex-1" : ""}
                flex items-center justify-center
                text-slate-800 font-bold
                relative z-10 transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600
              `}
            >
              {item.label}
            </button>
          );
        })}
        <div
          className="absolute bottom-[-4px] h-[4px] bg-slate-800 transition-all duration-300 ease"
          style={{
            left: `${indicatorStyle.left}px`,
            width: `${indicatorStyle.width}px`,
          }}
          aria-hidden="true"
        />
      </div>
    );
  },
);

Tabs.displayName = "Tabs";

const measureTabElement = (element: HTMLElement | null) => {
  if (!element) {
    return { left: 0, width: 0 };
  }
  return {
    left: element.offsetLeft,
    width: element.offsetWidth,
  };
};
