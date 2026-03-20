import React, { useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown } from 'lucide-react'; // Standardowa ikona strzałki

interface SelectProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: React.ReactNode;
  placeholder?: string;
  size?: 'regular' | 'small';
  openOn?: 'click' | 'hover';
  children: React.ReactNode;
  isDisabled?: boolean;
  dataTestId?: string;
}

export const Select = ({
  value,
  placeholder,
  size = 'regular',
  openOn = 'click',
  children,
  isDisabled = false,
  dataTestId,
  className,
  ...props
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  // Obsługa hover, jeśli została wybrana w propsach
  const handleMouseEnter = () => {
    if (openOn === 'hover' && !isDisabled) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (openOn === 'hover') setIsOpen(false);
  };

  // Klasy dla rozmiarów
  const sizeClasses = size === 'small' ? 'h-8 px-2 text-xs' : 'h-10 px-3 text-sm';

  return (
    <div 
      className={`inline-block ${className}`} 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-test-id={dataTestId}
      {...props}
    >
      <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenu.Trigger asChild>
          <button
            disabled={isDisabled}
            className={`
              flex items-center justify-between gap-2 rounded-md border border-slate-300 bg-white
              transition-all duration-300 ease-in-out hover:border-slate-400
              disabled:cursor-not-allowed disabled:opacity-50
              ${sizeClasses}
              ${isOpen ? 'ring-2 ring-slate-200' : ''}
            `}
          >
            <span className="truncate">
              {value || <span className="text-slate-400">{placeholder}</span>}
            </span>
            <ChevronDown 
              className={`w-4 h-4 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`} 
            />
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            sideOffset={5}
            className="
              z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-1 shadow-lg
              animate-in fade-in zoom-in duration-300 ease-in-out
            "
          >
            {children}
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};