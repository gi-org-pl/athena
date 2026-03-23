import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  placeholder?: string;
  size?: 'regular' | 'small';
  openOn?: 'click' | 'hover';
  children: React.ReactNode;
  isDisabled?: boolean;
}

export const Select = ({
  value,
  placeholder = 'Select action...',
  size = 'regular',
  openOn = 'click',
  children,
  isDisabled = false,
  className,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Obsługa hovera tylko jeśli jest włączony i komponent nie jest wyłączony
  const handleMouseEnter = () => {
    if (openOn === 'hover' && !isDisabled) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (openOn === 'hover') setIsOpen(false);
  };

  const sizeClasses = size === 'small' ? 'h-gi-small px-2 text-xs' : 'h-gi-regular px-3 text-sm';

  return (
    <div 
      className={`inline-block ${className || ''}`} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <DropdownMenu.Root 
        open={openOn === 'hover' ? isOpen : undefined} 
        onOpenChange={setIsOpen}
      >
        <DropdownMenu.Trigger asChild>
          <button
            type="button"
            disabled={isDisabled}
            className={`
              flex items-center justify-between gap-2 rounded-gi-pill border border-gi-border bg-gi-ash
              transition-all duration-300 hover:border-gi-primary
              disabled:opacity-40 disabled:bg-gi-disabled disabled:cursor-not-allowed
              ${sizeClasses}
              ${isOpen ? 'ring-2 ring-gi-focus border-gi-primary' : ''}
            `}
          >
            <span className="truncate">{value || placeholder}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={4}
            align="start"
            className="z-50 min-w-[180px] overflow-hidden rounded-gi-md border border-gi-border bg-white shadow-gi-lg animate-in fade-in zoom-in-95 duration-300"
          >
            {children}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};