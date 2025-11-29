import React from 'react';
import { cn } from '../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div className={cn('gc-card', className)}>
      {children}
      <style jsx>{`
        .gc-card {
          background: white;
          border: 1px solid #e8e8e8;
          border-radius: var(--gc-radius-base);
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('gc-card-header', className)}>
      {children}
      <style jsx>{`
        .gc-card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--gc-spacing-2);
          padding: var(--gc-spacing-3);
          border-bottom: 1px solid #e8e8e8;
        }
      `}</style>
    </div>
  );
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('gc-card-title', className)}>
      {children}
      <style jsx>{`
        .gc-card-title {
          font-weight: var(--gc-font-weight-bold);
          font-size: 1.125rem;
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
}

export function CardAction({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('gc-card-action', className)}>
      {children}
      <style jsx>{`
        .gc-card-action {
          display: flex;
          gap: var(--gc-spacing-2);
        }
      `}</style>
    </div>
  );
}

export function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('gc-card-body', className)}>
      {children}
      <style jsx>{`
        .gc-card-body {
          padding: var(--gc-spacing-3);
        }
      `}</style>
    </div>
  );
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('gc-card-footer', className)}>
      {children}
      <style jsx>{`
        .gc-card-footer {
          padding: var(--gc-spacing-3);
          border-top: 1px solid #e8e8e8;
          background: var(--gc-color-bg-secondary);
        }
      `}</style>
    </div>
  );
}
