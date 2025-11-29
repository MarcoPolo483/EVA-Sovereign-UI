import React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { cn } from '../utils/cn';

interface CheckboxProps extends Omit<CheckboxPrimitive.CheckboxProps, 'asChild'> {
  label?: string;
}

export function Checkbox({ label, className, ...props }: CheckboxProps) {
  return (
    <div className="gc-checkbox-wrapper">
      <CheckboxPrimitive.Root 
        className={cn('gc-checkbox', className)}
        {...props}
      >
        <CheckboxPrimitive.Indicator className="gc-checkbox-indicator">
          ✓
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      {label && <label className="gc-checkbox-label">{label}</label>}
      <style jsx>{`
        .gc-checkbox-wrapper {
          display: flex;
          align-items: center;
          gap: var(--gc-spacing-2);
        }

        .gc-checkbox {
          width: 24px;
          height: 24px;
          background: white;
          border: 2px solid #ccc;
          border-radius: var(--gc-radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .gc-checkbox:hover {
          border-color: var(--gc-color-link);
        }

        .gc-checkbox:focus-visible {
          outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
          outline-offset: var(--gc-a11y-focus-outline-offset);
        }

        .gc-checkbox[data-state="checked"] {
          background: var(--gc-color-link);
          border-color: var(--gc-color-link);
        }

        .gc-checkbox:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .gc-checkbox-indicator {
          color: white;
          font-size: 16px;
          font-weight: bold;
        }

        .gc-checkbox-label {
          font-size: 16px;
          color: var(--gc-color-text-primary);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
