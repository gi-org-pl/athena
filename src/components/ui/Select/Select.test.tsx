import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Select } from './Select';
import { ActionsList } from '../ActionsList/ActionsList';

describe('Select Component', () => {
  const mockActions = [{ label: 'Action 1', onClick: vi.fn() }];

  it('renders placeholder correctly', () => {
    render(<Select placeholder="Choose action">{null}</Select>);
    expect(screen.getByText('Choose action')).toBeDefined();
  });

  it('is functionally disabled when isDisabled is true', () => {
    render(<Select isDisabled placeholder="Disabled">{null}</Select>);
    const trigger = screen.getByRole('button');
    expect(trigger).toBeDisabled();
  });

  it('opens dropdown and displays items', async () => {
    render(
      <Select placeholder="Trigger">
        <ActionsList items={mockActions} />
      </Select>
    );
    
    const trigger = screen.getByRole('button');
    
    // KLUCZOWA ZMIANA: Radix potrzebuje pointerDown zamiast click
    fireEvent.pointerDown(trigger, {
      button: 0,
      ctrlKey: false,
      metaKey: false,
    });
    
    // findByText czeka, aż portal Radixa wyrenderuje się w DOM
    const item = await screen.findByText('Action 1');
    expect(item).toBeDefined();
  });
});