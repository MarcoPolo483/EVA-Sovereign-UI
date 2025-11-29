import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  ariaLabel?: string;
}

const sizes = {
  sm: '16px',
  md: '32px',
  lg: '48px',
};

export function LoadingSpinner({ size = 'md', ariaLabel = 'Loading' }: LoadingSpinnerProps) {
  const spinnerSize = sizes[size];

  return (
    <div 
      className="gc-loading-spinner" 
      role="status" 
      aria-label={ariaLabel}
    >
      <span className="gc-spinner-visually-hidden">{ariaLabel}</span>
      <style jsx>{`
        .gc-loading-spinner {
          display: inline-block;
          width: ${spinnerSize};
          height: ${spinnerSize};
          border: 3px solid rgba(0, 0, 0, 0.1);
          border-top-color: var(--gc-color-link);
          border-radius: 50%;
          animation: gc-spin 0.6s linear infinite;
        }

        .gc-spinner-visually-hidden {
          position: absolute;
          left: -10000px;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        @keyframes gc-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
