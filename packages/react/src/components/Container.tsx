import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

const widths = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1200px',
  full: '100%',
};

export function Container({ 
  children, 
  maxWidth = 'xl', 
  className = '' 
}: ContainerProps) {
  return (
    <div className={`gc-container ${className}`}>
      {children}
      <style jsx>{`
        .gc-container {
          max-width: ${widths[maxWidth]};
          margin: 0 auto;
          padding: 0 var(--gc-spacing-3);
        }
      `}</style>
    </div>
  );
}
