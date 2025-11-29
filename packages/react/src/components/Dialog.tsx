import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '../utils/cn';
import { useI18n } from '../hooks/useI18n';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </DialogPrimitive.Root>
  );
}

export function DialogTrigger({ children, ...props }: DialogPrimitive.DialogTriggerProps) {
  return <DialogPrimitive.Trigger {...props}>{children}</DialogPrimitive.Trigger>;
}

export function DialogContent({ 
  children, 
  className,
  ...props 
}: DialogPrimitive.DialogContentProps) {
  const { t } = useI18n();

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="gc-dialog-overlay">
        <style jsx>{`
          .gc-dialog-overlay {
            position: fixed;
            inset: 0;
            background: rgba(0, 0, 0, 0.5);
            animation: gc-overlay-show 150ms cubic-bezier(0.16, 1, 0.3, 1);
            z-index: var(--gc-z-modal);
          }

          @keyframes gc-overlay-show {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </DialogPrimitive.Overlay>
      <DialogPrimitive.Content 
        className={cn('gc-dialog-content', className)}
        {...props}
      >
        {children}
        <DialogPrimitive.Close 
          className="gc-dialog-close"
          aria-label={t('common.close')}
        >
          ✕
        </DialogPrimitive.Close>
        <style jsx>{`
          .gc-dialog-content {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            max-width: 500px;
            width: 90vw;
            max-height: 85vh;
            background: white;
            border-radius: var(--gc-radius-base);
            padding: var(--gc-spacing-4);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            animation: gc-content-show 150ms cubic-bezier(0.16, 1, 0.3, 1);
            z-index: calc(var(--gc-z-modal) + 1);
          }

          .gc-dialog-content:focus {
            outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
            outline-offset: var(--gc-a11y-focus-outline-offset);
          }

          .gc-dialog-close {
            position: absolute;
            top: var(--gc-spacing-2);
            right: var(--gc-spacing-2);
            background: transparent;
            border: none;
            font-size: 24px;
            cursor: pointer;
            color: var(--gc-color-text-secondary);
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--gc-radius-sm);
          }

          .gc-dialog-close:hover {
            background: var(--gc-color-bg-secondary);
          }

          .gc-dialog-close:focus-visible {
            outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
            outline-offset: var(--gc-a11y-focus-outline-offset);
          }

          @keyframes gc-content-show {
            from {
              opacity: 0;
              transform: translate(-50%, -48%) scale(0.96);
            }
            to {
              opacity: 1;
              transform: translate(-50%, -50%) scale(1);
            }
          }
        `}</style>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}

export function DialogTitle({ children, className, ...props }: DialogPrimitive.DialogTitleProps) {
  return (
    <DialogPrimitive.Title 
      className={cn('gc-dialog-title', className)}
      {...props}
    >
      {children}
      <style jsx>{`
        .gc-dialog-title {
          margin: 0 0 var(--gc-spacing-2);
          font-size: 1.25rem;
          font-weight: var(--gc-font-weight-bold);
          color: var(--gc-color-text-primary);
        }
      `}</style>
    </DialogPrimitive.Title>
  );
}

export function DialogDescription({ 
  children, 
  className,
  ...props 
}: DialogPrimitive.DialogDescriptionProps) {
  return (
    <DialogPrimitive.Description 
      className={cn('gc-dialog-description', className)}
      {...props}
    >
      {children}
      <style jsx>{`
        .gc-dialog-description {
          margin: 0 0 var(--gc-spacing-3);
          font-size: 1rem;
          color: var(--gc-color-text-secondary);
          line-height: 1.5;
        }
      `}</style>
    </DialogPrimitive.Description>
  );
}
