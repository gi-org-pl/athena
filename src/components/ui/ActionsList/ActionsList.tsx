import React from 'react';

export interface ActionItem {
  label: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  variant?: 'default' | 'danger';
}

interface ActionsListProps {
  items: ActionItem[];
}

export const ActionsList = ({ items }: ActionsListProps) => {
  return (
    <div className="flex flex-col p-1 min-w-[160px] bg-white">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className={`
            flex items-center justify-between px-3 py-2 text-sm rounded-gi-sm 
            transition-all duration-300 ease-in-out
            ${item.variant === 'danger' 
              ? 'text-gi-danger hover:bg-gi-danger-light' 
              : 'text-gi-text hover:bg-gi-ash'}
          `}
        >
          <span className="flex-1 text-left">{item.label}</span>
          {item.icon && (
            <span className="ml-2 flex items-center justify-center w-4 h-4 opacity-80">
              {item.icon}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};