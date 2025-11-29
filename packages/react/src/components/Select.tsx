import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { cn } from '../utils/cn';

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  placeholder?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

export function Select({ children, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      {children}
    </SelectPrimitive.Root>
  );
}

export function SelectTrigger({ 
  children, 
  className,
  ...props 
}: SelectPrimitive.SelectTriggerProps) {
  return (
    <SelectPrimitive.Trigger 
      className={cn('gc-select-trigger', className)}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon className="gc-select-icon">
        ▼
      </SelectPrimitive.Icon>
      <style jsx>{`
        .gc-select-trigger {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: var(--gc-spacing-2);
          background: white;
          border: 2px solid #ccc;
          border-radius: var(--gc-radius-base);
          font-family: var(--gc-font-body);
          font-size: 16px;
          color: var(--gc-color-text-primary);
          cursor: pointer;
          gap: var(--gc-spacing-2);
        }

        .gc-select-trigger:hover {
          border-color: var(--gc-color-link);
        }

        .gc-select-trigger:focus {
          outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
          outline-offset: var(--gc-a11y-focus-outline-offset);
          border-color: var(--gc-color-link);
        }

        .gc-select-trigger:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .gc-select-trigger[data-placeholder] {
          color: var(--gc-color-text-secondary);
        }

        .gc-select-icon {
          font-size: 12px;
          color: var(--gc-color-text-secondary);
        }
      `}</style>
    </SelectPrimitive.Trigger>
  );
}

export function SelectValue(props: SelectPrimitive.SelectValueProps) {
  return <SelectPrimitive.Value {...props} />;
}

export function SelectContent({ 
  children, 
  className,
  ...props 
}: SelectPrimitive.SelectContentProps) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content 
        className={cn('gc-select-content', className)}
        position="popper"
        {...props}
      >
        <SelectPrimitive.Viewport className="gc-select-viewport">
          {children}
        </SelectPrimitive.Viewport>
        <style jsx>{`
          .gc-select-content {
            background: white;
            border: 2px solid #ccc;
            border-radius: var(--gc-radius-base);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            z-index: var(--gc-z-dropdown);
            max-height: 300px;
            animation: gc-select-show 150ms cubic-bezier(0.16, 1, 0.3, 1);
          }

          .gc-select-viewport {
            padding: var(--gc-spacing-1);
          }

          @keyframes gc-select-show {
            from {
              opacity: 0;
              transform: translateY(-4px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

export function SelectItem({ 
  children, 
  className,
  value,
  ...props 
}: SelectPrimitive.SelectItemProps) {
  return (
    <SelectPrimitive.Item 
      className={cn('gc-select-item', className)}
      value={value}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="gc-select-indicator">
        ✓
      </SelectPrimitive.ItemIndicator>
      <style jsx>{`
        .gc-select-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: var(--gc-spacing-2);
          border-radius: var(--gc-radius-sm);
          cursor: pointer;
          user-select: none;
          font-size: 16px;
          color: var(--gc-color-text-primary);
          outline: none;
        }

        .gc-select-item:hover {
          background: var(--gc-color-bg-secondary);
        }

        .gc-select-item:focus {
          background: var(--gc-color-bg-secondary);
        }

        .gc-select-item[data-state="checked"] {
          background: var(--gc-color-link);
          color: white;
        }

        .gc-select-indicator {
          font-size: 16px;
          font-weight: bold;
        }
      `}</style>
    </SelectPrimitive.Item>
  );
}
