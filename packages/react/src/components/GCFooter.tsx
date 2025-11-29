import React from 'react';
import { useI18n } from '../hooks/useI18n';
import { GCSymbolBlack } from '@eva-suite/sovereign-core/assets';
import '@eva-suite/sovereign-core/dist/styles/tokens.css';

export function GCFooter() {
  const { t } = useI18n();

  return (
    <footer role="contentinfo" className="gc-footer">
      <div className="gc-footer-container">
        {/* Main footer links */}
        <nav aria-label={t('navigation.footerNavigation')} className="gc-footer-nav">
          <ul className="gc-footer-links">
            <li>
              <a href="https://www.canada.ca/en/social.html">
                {t('footer.socialMedia')}
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/mobile.html">
                {t('footer.mobileApps')}
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/government/about.html">
                {t('footer.aboutGovernment')}
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/transparency/terms.html">
                {t('footer.terms')}
              </a>
            </li>
            <li>
              <a href="https://www.canada.ca/en/transparency/privacy.html">
                {t('footer.privacy')}
              </a>
            </li>
          </ul>
        </nav>

        {/* Canada wordmark */}
        <div className="gc-footer-brand">
          <div
            className="gc-footer-symbol"
            dangerouslySetInnerHTML={{ __html: GCSymbolBlack }}
            aria-label={t('header.governmentOfCanada')}
          />
        </div>

        {/* Copyright */}
        <div className="gc-footer-copyright">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>

      <style jsx>{`
        .gc-footer {
          background: var(--gc-color-bg-secondary);
          border-top: 4px solid var(--gc-color-h1-bar);
          padding: var(--gc-spacing-6) 0;
          margin-top: var(--gc-spacing-8);
        }

        .gc-footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--gc-spacing-3);
        }

        .gc-footer-nav {
          margin-bottom: var(--gc-spacing-4);
        }

        .gc-footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          gap: var(--gc-spacing-3);
        }

        .gc-footer-links li {
          margin: 0;
        }

        .gc-footer-links a {
          color: var(--gc-color-link);
          text-decoration: underline;
          font-size: 14px;
        }

        .gc-footer-links a:hover {
          color: var(--gc-color-link-hover);
        }

        .gc-footer-links a:focus-visible {
          outline: var(--gc-a11y-focus-outline-width) solid var(--gc-a11y-focus-outline-color);
          outline-offset: var(--gc-a11y-focus-outline-offset);
        }

        .gc-footer-brand {
          margin: var(--gc-spacing-4) 0;
        }

        .gc-footer-symbol {
          display: inline-block;
        }

        .gc-footer-copyright {
          margin-top: var(--gc-spacing-3);
        }

        .gc-footer-copyright p {
          margin: 0;
          font-size: 14px;
          color: var(--gc-color-text-secondary);
        }

        @media (max-width: 768px) {
          .gc-footer-links {
            flex-direction: column;
            gap: var(--gc-spacing-2);
          }
        }
      `}</style>
    </footer>
  );
}
