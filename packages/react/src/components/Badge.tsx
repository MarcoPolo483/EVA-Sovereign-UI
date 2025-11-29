import React from 'react';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
}

const variantColors = {
  default: { bg: '#e8e8e8', text: '#333' },
  success: { bg: '#d4edda', text: '#155724' },
  warning: { bg: '#fff3cd', text: '#856404' },
  error: { bg: '#f8d7da', text: '#721c24' },
  info: { bg: '#d1ecf1', text: '#0c5460' },
};

export function Badge({ variant = 'default', children }: BadgeProps) {
  const colors = variantColors[variant];

  return (
    <span className="gc-badge">
      {children}
      <style jsx>{`
        .gc-badge {
          display: inline-block;
          padding: 4px 8px;
          font-size: 12px;
          font-weight: var(--gc-font-weight-bold);
          border-radius: var(--gc-radius-sm);
          background: ${colors.bg};
          color: ${colors.text};
        }
      `}</style>
    </span>
  );
}
