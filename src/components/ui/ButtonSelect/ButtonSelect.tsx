import { Button } from "../Button/Button.tsx";

export interface ButtonOption {
  id: string;
  text: string;
}

export interface ButtonSelectProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  options: ButtonOption[];
  isFullWidth?: boolean;
  selectedOptionId: string;
  onSelectedOptionIdChange: (id: string) => void;
}

export function ButtonSelect({
  options,
  selectedOptionId,
  isFullWidth = false,
  onSelectedOptionIdChange,
  className,
  ...props
}: ButtonSelectProps) {
  return (
    <div
      className={`
        flex flex-row gap-2
        justify-center 
        ${isFullWidth ? "w-full" : "w-auto"} 
        ${className || ""}
      `}
      {...props}
    >
      {options.map((option) => (
        <Button
          key={option.id}
          className={isFullWidth ? "flex-1" : "w-max"}
          type={selectedOptionId === option.id ? "primary" : "outlined"}
          variant={"primary"}
          onClick={() => {
            if (selectedOptionId !== option.id) {
              onSelectedOptionIdChange(option.id);
            }
          }}
        >
          {option.text}
        </Button>
      ))}
    </div>
  );
}
