import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils/cn';

const buttonVariants = cva(
  'gc-button',
  {
    variants: {
      variant: {
        primary: 'gc-button-primary',
        secondary: 'gc-button-secondary',
        danger: 'gc-button-danger',
        ghost: 'gc-button-ghost',
        link: 'gc-button-link',
      },
      size: {
        default: '',
        small: 'gc-button-small',
        large: 'gc-button-large',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

export function Button({
  variant,
  size,
  className,
  disabled,
  loading = false,
  fullWidth = false,
  asChild = false,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  
  const classes = cn(
    buttonVariants({ variant, size }),
    fullWidth && 'gc-button-block',
    loading && 'gc-button-loading',
    className
  );

  return (
    <Comp
      className={classes}
      disabled={disabled || loading}
      {...props}
    >
      {children}
      <style jsx>{`
        .gc-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: var(--gc-spacing-2);
          padding: var(--gc-spacing-2) var(--gc-spacing-4);
          border: 2px solid transparent;
          border-radius: var(--gc-radius-base);
          font-family: var(--gc-font-body);
          font-size: 16px;
          font-weight: var(--gc-font-weight-semibold);
          line-height: 1.5;
          cursor: pointer;
          transition: all 150ms ease;
          text-decoration: none;
        }

        .gc-button:focus-visible {
          outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
          outline-offset: var(--gc-a11y-focus-outline-offset);
        }

        .gc-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* Primary variant */
        .gc-button-primary {
          background: var(--gc-color-link);
          color: white;
          border-color: var(--gc-color-link);
        }

        .gc-button-primary:hover:not(:disabled) {
          background: var(--gc-color-link-hover);
          border-color: var(--gc-color-link-hover);
        }

        /* Secondary variant */
        .gc-button-secondary {
          background: transparent;
          color: var(--gc-color-link);
          border-color: var(--gc-color-link);
        }

        .gc-button-secondary:hover:not(:disabled) {
          background: rgba(0, 0, 0, 0.05);
        }

        /* Danger variant */
        .gc-button-danger {
          background: var(--gc-color-error);
          color: white;
          border-color: var(--gc-color-error);
        }

        .gc-button-danger:hover:not(:disabled) {
          background: #b30015;
          border-color: #b30015;
        }

        /* Ghost variant */
        .gc-button-ghost {
          background: transparent;
          color: var(--gc-color-text-primary);
          border-color: transparent;
        }

        .gc-button-ghost:hover:not(:disabled) {
          background: rgba(0, 0, 0, 0.05);
        }

        /* Link variant */
        .gc-button-link {
          background: transparent;
          color: var(--gc-color-link);
          border-color: transparent;
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .gc-button-link:hover:not(:disabled) {
          color: var(--gc-color-link-hover);
        }

        /* Size variants */
        .gc-button-small {
          padding: var(--gc-spacing-1) var(--gc-spacing-3);
          font-size: 14px;
        }

        .gc-button-large {
          padding: var(--gc-spacing-3) var(--gc-spacing-6);
          font-size: 18px;
        }

        /* Full width */
        .gc-button-block {
          display: flex;
          width: 100%;
        }

        /* Loading state */
        .gc-button-loading {
          position: relative;
          color: transparent;
        }

        .gc-button-loading::after {
          content: '';
          position: absolute;
          width: 16px;
          height: 16px;
          top: 50%;
          left: 50%;
          margin-left: -8px;
          margin-top: -8px;
          border: 2px solid currentColor;
          border-radius: 50%;
          border-top-color: transparent;
          animation: gc-button-spin 0.6s linear infinite;
        }

        @keyframes gc-button-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </Comp>
  );
}
