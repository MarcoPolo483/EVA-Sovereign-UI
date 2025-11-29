import React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cn } from '../utils/cn';

export function Tabs({ children, ...props }: TabsPrimitive.TabsProps) {
  return (
    <TabsPrimitive.Root className="gc-tabs" {...props}>
      {children}
      <style jsx>{`
        .gc-tabs {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </TabsPrimitive.Root>
  );
}

export function TabsList({ children, className, ...props }: TabsPrimitive.TabsListProps) {
  return (
    <TabsPrimitive.List 
      className={cn('gc-tabs-list', className)}
      {...props}
    >
      {children}
      <style jsx>{`
        .gc-tabs-list {
          display: flex;
          border-bottom: 2px solid #e8e8e8;
          gap: var(--gc-spacing-1);
        }
      `}</style>
    </TabsPrimitive.List>
  );
}

export function TabsTrigger({ children, className, ...props }: TabsPrimitive.TabsTriggerProps) {
  return (
    <TabsPrimitive.Trigger 
      className={cn('gc-tabs-trigger', className)}
      {...props}
    >
      {children}
      <style jsx>{`
        .gc-tabs-trigger {
          padding: var(--gc-spacing-2) var(--gc-spacing-3);
          background: transparent;
          border: none;
          border-bottom: 3px solid transparent;
          font-family: var(--gc-font-body);
          font-size: 16px;
          font-weight: var(--gc-font-weight-semibold);
          color: var(--gc-color-text-secondary);
          cursor: pointer;
          transition: all 150ms ease;
        }

        .gc-tabs-trigger:hover {
          color: var(--gc-color-link);
        }

        .gc-tabs-trigger:focus-visible {
          outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
          outline-offset: var(--gc-a11y-focus-outline-offset);
        }

        .gc-tabs-trigger[data-state="active"] {
          color: var(--gc-color-link);
          border-bottom-color: var(--gc-color-link);
        }

        .gc-tabs-trigger:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </TabsPrimitive.Trigger>
  );
}

export function TabsContent({ children, className, ...props }: TabsPrimitive.TabsContentProps) {
  return (
    <TabsPrimitive.Content 
      className={cn('gc-tabs-content', className)}
      {...props}
    >
      {children}
      <style jsx>{`
        .gc-tabs-content {
          padding: var(--gc-spacing-4) 0;
          outline: none;
        }

        .gc-tabs-content:focus-visible {
          outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
          outline-offset: var(--gc-a11y-focus-outline-offset);
          border-radius: var(--gc-radius-base);
        }
      `}</style>
    </TabsPrimitive.Content>
  );
}
