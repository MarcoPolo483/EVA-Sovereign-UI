import React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cn } from '../utils/cn';

interface SwitchProps extends Omit<SwitchPrimitive.SwitchProps, 'asChild'> {
  label?: string;
}

export function Switch({ label, className, ...props }: SwitchProps) {
  return (
    <div className="gc-switch-wrapper">
      {label && <label className="gc-switch-label">{label}</label>}
      <SwitchPrimitive.Root 
        className={cn('gc-switch', className)}
        {...props}
      >
        <SwitchPrimitive.Thumb className="gc-switch-thumb" />
      </SwitchPrimitive.Root>
      <style jsx>{`
        .gc-switch-wrapper {
          display: flex;
          align-items: center;
          gap: var(--gc-spacing-2);
        }

        .gc-switch {
          width: 44px;
          height: 24px;
          background: #ccc;
          border-radius: 9999px;
          position: relative;
          cursor: pointer;
          transition: background 150ms ease;
        }

        .gc-switch:hover {
          background: #b0b0b0;
        }

        .gc-switch:focus-visible {
          outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
          outline-offset: var(--gc-a11y-focus-outline-offset);
        }

        .gc-switch[data-state="checked"] {
          background: var(--gc-color-link);
        }

        .gc-switch[data-state="checked"]:hover {
          background: var(--gc-color-link-hover);
        }

        .gc-switch:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .gc-switch-thumb {
          display: block;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          transition: transform 150ms ease;
          transform: translateX(2px);
        }

        .gc-switch[data-state="checked"] .gc-switch-thumb {
          transform: translateX(22px);
        }

        .gc-switch-label {
          font-size: 16px;
          color: var(--gc-color-text-primary);
          font-weight: var(--gc-font-weight-semibold);
        }
      `}</style>
    </div>
  );
}
