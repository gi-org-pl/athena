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