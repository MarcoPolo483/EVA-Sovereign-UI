import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../utils/cn';

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return (
    <TooltipPrimitive.Provider delayDuration={200}>
      {children}
    </TooltipPrimitive.Provider>
  );
}

export function Tooltip({ children }: { children: React.ReactNode }) {
  return <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>;
}

export function TooltipTrigger({ children, ...props }: TooltipPrimitive.TooltipTriggerProps) {
  return <TooltipPrimitive.Trigger {...props}>{children}</TooltipPrimitive.Trigger>;
}

export function TooltipContent({ 
  children, 
  className,
  side = 'top',
  ...props 
}: TooltipPrimitive.TooltipContentProps) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content 
        className={cn('gc-tooltip-content', className)}
        side={side}
        sideOffset={5}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="gc-tooltip-arrow" />
        <style jsx>{`
          .gc-tooltip-content {
            background: var(--gc-color-text-primary);
            color: white;
            padding: var(--gc-spacing-1) var(--gc-spacing-2);
            border-radius: var(--gc-radius-sm);
            font-size: 14px;
            line-height: 1.5;
            max-width: 300px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            animation: gc-tooltip-show 150ms cubic-bezier(0.16, 1, 0.3, 1);
            z-index: var(--gc-z-tooltip);
          }

          .gc-tooltip-arrow {
            fill: var(--gc-color-text-primary);
          }

          @keyframes gc-tooltip-show {
            from {
              opacity: 0;
              transform: scale(0.96);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
