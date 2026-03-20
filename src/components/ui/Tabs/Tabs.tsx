

export interface TabsProps
  extends  {
  value: string;
  onValueChange: (value: string) => void;
  items: [Tab];
  isLoading?: boolean;
}