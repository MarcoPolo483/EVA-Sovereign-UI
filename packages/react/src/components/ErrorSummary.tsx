import React from 'react';

interface ErrorSummaryItem {
  id: string;
  message: string;
}

interface ErrorSummaryProps {
  errors: ErrorSummaryItem[];
  title?: string;
}

export function ErrorSummary({ errors, title = 'Error summary' }: ErrorSummaryProps) {
  if (errors.length === 0) return null;

  return (
    <div className="gc-error-summary" role="alert" aria-labelledby="error-summary-title">
      <h2 id="error-summary-title" className="gc-error-summary-title">
        {title}
      </h2>
      <p className="gc-error-summary-count">
        {errors.length} error{errors.length !== 1 ? 's' : ''} found
      </p>
      <ul className="gc-error-summary-list">
        {errors.map((error) => (
          <li key={error.id}>
            <a href={`#${error.id}`}>{error.message}</a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .gc-error-summary {
          background: #f8d7da;
          border: 4px solid var(--gc-color-error);
          padding: var(--gc-spacing-4);
          margin-bottom: var(--gc-spacing-4);
        }

        .gc-error-summary-title {
          margin: 0 0 var(--gc-spacing-2);
          font-size: 1.5rem;
          color: #721c24;
        }

        .gc-error-summary-count {
          margin: 0 0 var(--gc-spacing-3);
          color: #721c24;
          font-weight: var(--gc-font-weight-bold);
        }

        .gc-error-summary-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .gc-error-summary-list li {
          margin-bottom: var(--gc-spacing-1);
        }

        .gc-error-summary-list a {
          color: #721c24;
          text-decoration: underline;
          font-weight: var(--gc-font-weight-bold);
        }

        .gc-error-summary-list a:hover {
          color: #491217;
        }

        .gc-error-summary-list a:focus-visible {
          outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
          outline-offset: var(--gc-a11y-focus-outline-offset);
        }
      `}</style>
    </div>
  );
}
