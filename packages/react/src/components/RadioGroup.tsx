import React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { cn } from '../utils/cn';

export function RadioGroup({ children, className, ...props }: RadioGroupPrimitive.RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root 
      className={cn('gc-radio-group', className)}
      {...props}
    >
      {children}
      <style jsx>{`
        .gc-radio-group {
          display: flex;
          flex-direction: column;
          gap: var(--gc-spacing-2);
        }
      `}</style>
    </RadioGroupPrimitive.Root>
  );
}

interface RadioGroupItemProps extends RadioGroupPrimitive.RadioGroupItemProps {
  label?: string;
}

export function RadioGroupItem({ label, className, value, ...props }: RadioGroupItemProps) {
  return (
    <div className="gc-radio-wrapper">
      <RadioGroupPrimitive.Item 
        className={cn('gc-radio', className)}
        value={value}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="gc-radio-indicator" />
      </RadioGroupPrimitive.Item>
      {label && <label className="gc-radio-label">{label}</label>}
      <style jsx>{`
        .gc-radio-wrapper {
          display: flex;
          align-items: center;
          gap: var(--gc-spacing-2);
        }

        .gc-radio {
          width: 24px;
          height: 24px;
          background: white;
          border: 2px solid #ccc;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 150ms ease;
        }

        .gc-radio:hover {
          border-color: var(--gc-color-link);
        }

        .gc-radio:focus-visible {
          outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
          outline-offset: var(--gc-a11y-focus-outline-offset);
        }

        .gc-radio[data-state="checked"] {
          border-color: var(--gc-color-link);
        }

        .gc-radio:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .gc-radio-indicator {
          width: 12px;
          height: 12px;
          background: var(--gc-color-link);
          border-radius: 50%;
        }

        .gc-radio-label {
          font-size: 16px;
          color: var(--gc-color-text-primary);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
