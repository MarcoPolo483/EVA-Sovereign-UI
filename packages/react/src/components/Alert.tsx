import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const alertVariants = cva(
  'gc-alert',
  {
    variants: {
      variant: {
        success: 'gc-alert-success',
        warning: 'gc-alert-warning',
        error: 'gc-alert-error',
        info: 'gc-alert-info',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  }
);

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  dismissible?: boolean;
  onDismiss?: () => void;
}

export function Alert({ 
  variant, 
  dismissible = false, 
  onDismiss,
  className,
  children,
  ...props
}: AlertProps) {
  return (
    <div 
      className={cn(alertVariants({ variant }), className)}
      role={variant === 'error' ? 'alert' : 'status'}
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
      {...props}
    >
      {children}
      {dismissible && onDismiss && (
        <button 
          onClick={onDismiss} 
          className="gc-alert-dismiss"
          aria-label="Dismiss alert"
        >
          ✕
        </button>
      )}
      <style jsx>{`
        .gc-alert {
          position: relative;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: var(--gc-spacing-2);
          align-items: start;
          padding: var(--gc-spacing-3);
          border-left: 4px solid;
          margin-bottom: var(--gc-spacing-3);
          border-radius: var(--gc-radius-sm);
        }

        .gc-alert-success {
          background: #d4edda;
          border-color: #2e7d32;
          color: #155724;
        }

        .gc-alert-warning {
          background: #fff3cd;
          border-color: #f57c00;
          color: #856404;
        }

        .gc-alert-error {
          background: #f8d7da;
          border-color: #d3080c;
          color: #721c24;
        }

        .gc-alert-info {
          background: #d1ecf1;
          border-color: #0288d1;
          color: #0c5460;
        }

        .gc-alert-dismiss {
          background: transparent;
          border: none;
          font-size: 20px;
          cursor: pointer;
          padding: var(--gc-spacing-1);
          line-height: 1;
          color: inherit;
        }

        .gc-alert-dismiss:hover {
          opacity: 0.7;
        }

        .gc-alert-dismiss:focus-visible {
          outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
          outline-offset: var(--gc-a11y-focus-outline-offset);
        }
      `}</style>
    </div>
  );
}

export function AlertIcon({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('gc-alert-icon', className)}>
      {children}
      <style jsx>{`
        .gc-alert-icon {
          display: flex;
          align-items: center;
          font-size: 20px;
        }
      `}</style>
    </div>
  );
}

export function AlertTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('gc-alert-title', className)}>
      {children}
      <style jsx>{`
        .gc-alert-title {
          font-weight: var(--gc-font-weight-bold);
          font-size: 16px;
          line-height: 1.5;
          grid-column: 2 / 3;
        }
      `}</style>
    </div>
  );
}

export function AlertDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('gc-alert-description', className)}>
      {children}
      <style jsx>{`
        .gc-alert-description {
          font-size: 14px;
          line-height: 1.5;
          grid-column: 2 / 3;
          color: inherit;
          opacity: 0.9;
        }
      `}</style>
    </div>
  );
}
