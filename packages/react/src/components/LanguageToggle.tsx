import React from 'react';
import type { Locale } from '@eva-suite/sovereign-core/types';

interface LanguageToggleProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
  className?: string;
}

export function LanguageToggle({ locale, onChange, className = '' }: LanguageToggleProps) {
  const toggleLanguage = () => {
    onChange(locale === 'en-CA' ? 'fr-CA' : 'en-CA');
  };

  const label = locale === 'en-CA' ? 'Français' : 'English';
  const targetLang = locale === 'en-CA' ? 'fr-CA' : 'en-CA';

  return (
    <button
      onClick={toggleLanguage}
      className={`gc-language-toggle ${className}`}
      lang={targetLang}
      aria-label={`Switch to ${locale === 'en-CA' ? 'French' : 'English'}`}
    >
      {label}
      <style jsx>{`
        .gc-language-toggle {
          background: transparent;
          border: none;
          color: var(--gc-color-link);
          text-decoration: underline;
          cursor: pointer;
          font-size: 16px;
          padding: var(--gc-spacing-1);
          font-family: var(--gc-font-body);
        }

        .gc-language-toggle:hover {
          color: var(--gc-color-link-hover);
        }

        .gc-language-toggle:focus-visible {
          outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
          outline-offset: var(--gc-a11y-focus-outline-offset);
        }
      `}</style>
    </button>
  );
}
