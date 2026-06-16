import { Button } from "../Button/Button.tsx";
import type { ButtonSelectProps } from "./ButtonSelect.types.tsx";

export const ButtonSelect = ({
  options,
  selectedOptionId,
  isFullWidth = false,
  onSelectedOptionIdChange,
  className,
  ...props
}: ButtonSelectProps) => {
  if (options.length === 0) return null;

  return (
    <div
      role="radiogroup"
      aria-label={props["aria-label"]}
      className={`
        flex flex-row gap-2
        justify-center 
        ${isFullWidth ? "w-full" : "w-auto"} 
        ${className || ""}
      `}
      {...props}
    >
      {options.map((option) => {
        const isSelected = selectedOptionId === option.id;

        return (
          <Button
            key={option.id}
            role="radio"
            aria-checked={isSelected}
            tabIndex={isSelected ? 0 : -1}
            className={isFullWidth ? "flex-1" : "w-max"}
            type={isSelected ? "primary" : "outlined"}
            variant="primary"
            onClick={() => {
              if (!isSelected) {
                onSelectedOptionIdChange(option.id);
              }
            }}
          >
            {option.text}
          </Button>
        );
      })}
    </div>
  );
};
ButtonSelect.displayName = "Button Select";
