/**
 * Lab App Shell
 * Professional GC Design System layout
 */

import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { i18n } from '@/i18n/i18n-service';
import { themeEngine } from '@/themes';

// Import core components
import '@/components/gc-design/eva-gc-header';
import '@/components/gc-design/eva-gc-footer';
import '@/components/gc-design/eva-gc-language-switcher';

@customElement('lab-app-shell')
export class LabAppShell extends LitElement {
  @state() private mobileMenuOpen = false;
  @state() private currentLocale = 'en-CA';
  @state() private currentTheme = 'canada-gc-light';

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
    }

    .app-container {
      display: grid;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
      background: var(--eva-color-background, #fff);
    }

    main {
      padding: 2rem 0;
      min-height: 400px;
    }

    footer {
      margin-top: auto;
    }

    .mobile-menu {
      display: none;
    }

    @media (max-width: 768px) {
      .mobile-menu {
        display: block;
      }
    }
    nav a.active {
      background: var(--eva-color-primary, #26374a);
      color: var(--eva-color-on-primary, #fff);
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .inspector-toggle {
      padding: 0.5rem 1rem;
      background: var(--eva-color-primary, #26374a);
      color: var(--eva-color-on-primary, #fff);
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
      transition: opacity 0.2s;
    }

    .inspector-toggle:hover {
      opacity: 0.9;
    }

    .main-content {
      grid-column: 1;
      overflow-y: auto;
      padding: 2rem;
      background: var(--eva-color-background, #f5f5f5);
    }

    .inspector-panel {
      grid-column: 2;
      grid-row: 1 / -1;
      background: var(--eva-color-background-elevated, #fff);
      border-left: 1px solid var(--eva-color-border, #ddd);
      overflow-y: auto;
      padding: 1.5rem;
    }

    footer {
      grid-column: 1 / -1;
      background: var(--eva-color-background-elevated, #fff);
      border-top: 1px solid var(--eva-color-border, #ddd);
      padding: 1.5rem 2rem;
      text-align: center;
      font-size: 0.9rem;
      color: var(--eva-color-text-secondary, #666);
    }

    @media (max-width: 1024px) {
      .app-container.inspector-open {
        grid-template-columns: 1fr;
      }

      .inspector-panel {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        width: 90%;
        max-width: 400px;
        z-index: 1000;
        box-shadow: -2px 0 8px rgba(0,0,0,0.1);
      }

      nav {
        display: none;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    // Initialize theme and locale
    const savedTheme = localStorage.getItem('lab-theme') || 'canada-gc-light';
    themeEngine.applyTheme(savedTheme, false);
    this.currentTheme = savedTheme;
    this.currentLocale = i18n.getLocale() || 'en-CA';
  }

  private handleLocaleChange(e: CustomEvent) {
    this.currentLocale = e.detail.locale;
    i18n.setLocale(this.currentLocale);
  }

  private handleThemeChange(theme: string) {
    this.currentTheme = theme;
    themeEngine.applyTheme(theme);
  }

  render() {
    return html`
      <div class="app-container">
        <eva-gc-header 
          app-name="EVA Sovereign UI Lab"
          @locale-change=${this.handleLocaleChange}
        ></eva-gc-header>

        <main role="main" id="main-content">
          <div id="router-outlet"></div>
        </main>

        <footer>
          <eva-gc-footer></eva-gc-footer>
        </footer>
      </div>
    `;
  }
}
