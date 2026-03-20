import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Select } from './Select';
import { ActionsList } from './ActionsList';
import { Plus, Trash2, Settings } from 'lucide-react';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

// Przykładowe dane do listy
const demoActions = [
  { label: 'Dodaj nowy', icon: <Plus size={16} />, onClick: () => alert('Dodano!') },
  { label: 'Ustawienia', icon: <Settings size={16} />, onClick: () => alert('Ustawienia') },
  { label: 'Usuń', icon: <Trash2 size={16} />, variant: 'danger' as const, onClick: () => alert('Usunięto') },
];

export const Default: Story = {
  args: {
    placeholder: 'Wybierz akcję...',
    children: <ActionsList items={demoActions} />,
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    placeholder: 'Mały rozmiar',
    children: <ActionsList items={demoActions} />,
  },
};

export const Hover: Story = {
  args: {
    openOn: 'hover',
    placeholder: 'Otwórz po najechaniu',
    children: <ActionsList items={demoActions} />,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
    placeholder: 'Nieaktywny',
    children: <ActionsList items={demoActions} />,
  },
};