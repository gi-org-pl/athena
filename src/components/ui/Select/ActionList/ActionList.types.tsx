export interface ActionItem {
  label: React.ReactNode;
  icon?: React.ReactElement;
  onClick?: () => void;
  variant?: "default" | "danger";
  isSelected?: boolean;
}

export interface ActionListProps {
  items: ActionItem[];
  className?: string;
}
