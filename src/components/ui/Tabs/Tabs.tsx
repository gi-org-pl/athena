import {
  forwardRef,
  type KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { measureTabElement } from "./Tabs.methods";
import type { TabsProps } from "./Tabs.types";

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
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

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      const currentIndex = items.findIndex((item) => item.value === value);
      let nextIndex: number | null = null;

      switch (event.key) {
        case "ArrowRight":
          nextIndex = (currentIndex + 1) % items.length;
          break;
        case "ArrowLeft":
          nextIndex = (currentIndex - 1 + items.length) % items.length;
          break;
        case "Home":
          nextIndex = 0;
          break;
        case "End":
          nextIndex = items.length - 1;
          break;
        default:
          return;
      }

      event.preventDefault();
      const nextItem = items[nextIndex];
      onValueChange(nextItem.value);
      tabsRef.current[nextIndex]?.focus();
    };

    const sizeClasses =
      size === "large" ? "text-lg pt-4 pb-3 px-3" : "text-base pt-3 pb-2 px-3";
    const containerWidthClass = isFullWidth
      ? "w-full flex"
      : "w-max inline-flex";

    return (
      <div
        ref={ref}
        role="tablist"
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
        data-test-id={dataTestId}
        className={`relative border-b-4 border-slate-200 ${containerWidthClass} ${className}`}
        {...props}
      >
        {items.map((item, index) => {
          const isActive = item.value === value;
          return (
            <button
              key={item.value}
              id={`tab-${item.value}`}
              ref={(el) => {
                tabsRef.current[index] = el;
              }}
              role="tab"
              aria-selected={isActive}
              aria-controls={`panel-${item.value}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onValueChange(item.value)}
              className={`
                ${sizeClasses}
                ${isFullWidth ? "flex-1" : ""}
                flex items-center justify-center
                text-gi-primary font-bold
                relative z-10 transition-colors duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-gi-primary
              `}
            >
              {item.label}
            </button>
          );
        })}
        <div
          className="absolute bottom-[-4px] h-[4px] bg-gi-primary transition-all duration-300 ease"
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
