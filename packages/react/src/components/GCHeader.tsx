import React from 'react';
import { useI18n } from '../hooks/useI18n';
import { CanadaFlagSVG } from '@eva-suite/sovereign-core/assets';
import '@eva-suite/sovereign-core/dist/styles/tokens.css';
import '@eva-suite/sovereign-core/dist/styles/typography.css';

interface GCHeaderProps {
  title: string;
  subtitle?: string;
  showSignIn?: boolean;
  onSignIn?: () => void;
}

export function GCHeader({
  title,
  subtitle,
  showSignIn = false,
  onSignIn,
}: GCHeaderProps) {
  const { locale, setLocale, t } = useI18n();

  const toggleLanguage = () => {
    setLocale(locale === 'en-CA' ? 'fr-CA' : 'en-CA');
  };

  return (
    <header role="banner" className="gc-header">
      <div className="gc-header-top">
        <div className="gc-header-container">
          {/* Skip link */}
          <a href="#main-content" className="gc-skip-link">
            {t('common.skipToContent')}
          </a>

          {/* Canada Flag */}
          <div
            className="gc-header-flag"
            dangerouslySetInnerHTML={{ __html: CanadaFlagSVG }}
          />

          {/* Government of Canada wordmark */}
          <div className="gc-header-wordmark">
            <span className="gc-header-gov-title">
              {t('header.governmentOfCanada')}
            </span>
          </div>

          {/* Language toggle */}
          <div className="gc-header-language">
            <button
              onClick={toggleLanguage}
              className="gc-language-toggle"
              lang={locale === 'en-CA' ? 'fr-CA' : 'en-CA'}
              aria-label={t('header.languageSelection')}
            >
              {locale === 'en-CA' ? t('header.switchToFrench') : t('header.switchToEnglish')}
            </button>
          </div>

          {/* Sign in button */}
          {showSignIn && onSignIn && (
            <button
              onClick={onSignIn}
              className="gc-button gc-button-signin"
              aria-label={t('header.signIn')}
            >
              {t('header.signIn')}
            </button>
          )}
        </div>
      </div>

      {/* Site title section */}
      <div className="gc-header-main">
        <div className="gc-header-container">
          <h1 className="gc-h1-main">{title}</h1>
          {subtitle && <p className="gc-header-subtitle">{subtitle}</p>}
        </div>
      </div>

      <style jsx>{`
        .gc-header {
          background: white;
          border-bottom: 1px solid #e8e8e8;
        }

        .gc-header-top {
          background: var(--gc-color-bg-secondary);
          border-bottom: 4px solid var(--gc-color-h1-bar);
        }

        .gc-header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--gc-spacing-2) var(--gc-spacing-3);
          display: flex;
          align-items: center;
          gap: var(--gc-spacing-3);
        }

        .gc-skip-link {
          position: absolute;
          left: -10000px;
          top: auto;
          width: 1px;
          height: 1px;
          overflow: hidden;
        }

        .gc-skip-link:focus {
          position: static;
          width: auto;
          height: auto;
          background: var(--gc-color-link);
          color: white;
          padding: var(--gc-spacing-1) var(--gc-spacing-2);
          text-decoration: none;
          z-index: var(--gc-z-skip-link);
        }

        .gc-header-flag {
          flex-shrink: 0;
        }

        .gc-header-wordmark {
          flex: 1;
        }

        .gc-header-gov-title {
          font-family: var(--gc-font-heading);
          font-weight: var(--gc-font-weight-bold);
          font-size: 18px;
          color: var(--gc-color-text-primary);
        }

        .gc-language-toggle {
          background: transparent;
          border: none;
          color: var(--gc-color-link);
          text-decoration: underline;
          cursor: pointer;
          font-size: 16px;
          padding: var(--gc-spacing-1);
        }

        .gc-language-toggle:hover {
          color: var(--gc-color-link-hover);
        }

        .gc-language-toggle:focus-visible {
          outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
          outline-offset: var(--gc-a11y-focus-outline-offset);
        }

        .gc-header-main {
          padding: var(--gc-spacing-4) 0;
        }

        .gc-h1-main {
          margin: 0;
        }

        .gc-header-subtitle {
          margin: var(--gc-spacing-2) 0 0;
          font-size: 1.125rem;
          color: var(--gc-color-text-secondary);
        }
      `}</style>
    </header>
  );
}
