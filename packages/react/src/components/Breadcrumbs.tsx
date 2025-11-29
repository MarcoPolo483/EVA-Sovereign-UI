import React from 'react';
import type { BreadcrumbsProps } from '@eva-suite/sovereign-core/types';

export function Breadcrumbs({ items, ariaLabel }: BreadcrumbsProps) {
  return (
    <nav aria-label={ariaLabel || 'Breadcrumb'} className="gc-breadcrumbs">
      <ol className="gc-breadcrumbs-list">
        {items.map((item, index) => (
          <li key={index} className="gc-breadcrumbs-item">
            {item.current ? (
              <span aria-current="page">{item.label}</span>
            ) : item.href ? (
              <a href={item.href}>{item.label}</a>
            ) : (
              <span>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
      <style jsx>{`
        .gc-breadcrumbs {
          margin: var(--gc-spacing-3) 0;
        }

        .gc-breadcrumbs-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          gap: var(--gc-spacing-1);
        }

        .gc-breadcrumbs-item {
          display: flex;
          align-items: center;
        }

        .gc-breadcrumbs-item:not(:last-child)::after {
          content: '/';
          margin-left: var(--gc-spacing-1);
          color: var(--gc-color-text-secondary);
        }

        .gc-breadcrumbs-item a {
          color: var(--gc-color-link);
          text-decoration: underline;
        }

        .gc-breadcrumbs-item a:hover {
          color: var(--gc-color-link-hover);
        }

        .gc-breadcrumbs-item [aria-current="page"] {
          font-weight: var(--gc-font-weight-bold);
        }
      `}</style>
    </nav>
  );
}
