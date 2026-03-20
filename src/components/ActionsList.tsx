import React from 'react';

// Definicja pojedynczego elementu listy zgodnie z wymaganiami zadania
export interface ActionItem {
  label: React.ReactNode;
  icon?: React.ReactElement;
  onClick?: () => void;
  variant?: 'default' | 'danger';
}

interface ActionsListProps {
  items: ActionItem[];
}

export const ActionsList = ({ items }: ActionsListProps) => {
  return (
    <div className="flex flex-col p-1 min-w-[160px] bg-white border rounded-lg shadow-md">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={item.onClick}
          className={`
            flex items-center justify-between px-3 py-2 text-sm rounded-md 
            transition-colors duration-300 ease-in-out hover:bg-slate-100
            ${item.variant === 'danger' ? 'text-red-500 hover:bg-red-50' : 'text-slate-700'}
          `}
        >
          {/* Label po lewej stronie */}
          <span className="flex-1 text-left">{item.label}</span>
          
          {/* Opcjonalna ikona po prawej stronie */}
          {item.icon && (
            <span className="ml-2 flex items-center justify-center w-4 h-4 opacity-70">
              {item.icon}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};