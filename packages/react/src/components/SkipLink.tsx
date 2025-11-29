import React from 'react';
import type { SkipLinkProps } from '@eva-suite/sovereign-core/types';

export function SkipLink({ href, children }: SkipLinkProps) {
  return (
    <a href={href} className="gc-skip-link">
      {children}
      <style jsx>{`
        .gc-skip-link {
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
          background: var(--gc-color-link);
          color: white;
          padding: var(--gc-spacing-1) var(--gc-spacing-2);
          text-decoration: none;
          z-index: var(--gc-z-skip-link);
        }

        .gc-skip-link:focus {
          position: static;
          width: auto;
          height: auto;
        }
      `}</style>
    </a>
  );
}
