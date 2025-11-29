import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  helpText?: string;
  children: React.ReactNode;
}

export function FormField({ 
  id, 
  label, 
  required = false, 
  error, 
  helpText, 
  children 
}: FormFieldProps) {
  const errorId = error ? `${id}-error` : undefined;
  const helpId = helpText ? `${id}-help` : undefined;

  return (
    <div className="gc-form-field">
      <label htmlFor={id} className="gc-form-label">
        {label}
        {required && <span className="gc-form-required" aria-label="required">*</span>}
      </label>
      
      {helpText && (
        <div id={helpId} className="gc-form-help">
          {helpText}
        </div>
      )}
      
      <div className="gc-form-control">
        {React.cloneElement(children as React.ReactElement, {
          id,
          'aria-invalid': error ? 'true' : undefined,
          'aria-describedby': [errorId, helpId].filter(Boolean).join(' ') || undefined,
        })}
      </div>
      
      {error && (
        <div id={errorId} className="gc-form-error" role="alert">
          {error}
        </div>
      )}

      <style jsx>{`
        .gc-form-field {
          margin-bottom: var(--gc-spacing-4);
        }

        .gc-form-label {
          display: block;
          font-weight: var(--gc-font-weight-bold);
          margin-bottom: var(--gc-spacing-1);
          color: var(--gc-color-text-primary);
        }

        .gc-form-required {
          color: var(--gc-color-error);
          margin-left: 4px;
        }

        .gc-form-help {
          font-size: 14px;
          color: var(--gc-color-text-secondary);
          margin-bottom: var(--gc-spacing-1);
        }

        .gc-form-control :global(input),
        .gc-form-control :global(textarea),
        .gc-form-control :global(select) {
          width: 100%;
          padding: var(--gc-spacing-2);
          border: 2px solid #ccc;
          border-radius: var(--gc-radius-base);
          font-family: var(--gc-font-body);
          font-size: 16px;
        }

        .gc-form-control :global(input[aria-invalid="true"]),
        .gc-form-control :global(textarea[aria-invalid="true"]),
        .gc-form-control :global(select[aria-invalid="true"]) {
          border-color: var(--gc-color-error);
        }

        .gc-form-control :global(input:focus),
        .gc-form-control :global(textarea:focus),
        .gc-form-control :global(select:focus) {
          outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
          outline-offset: var(--gc-a11y-focus-outline-offset);
        }

        .gc-form-error {
          color: var(--gc-color-error);
          font-size: 14px;
          margin-top: var(--gc-spacing-1);
          font-weight: var(--gc-font-weight-bold);
        }
      `}</style>
    </div>
  );
}
