export interface ActionItem {
  label: React.ReactNode;
  icon?: React.ReactElement;
  onClick?: () => void;
  variant?: "default" | "danger";
}

export interface ActionListProps {
  items: ActionItem[];
  className?: string;
}