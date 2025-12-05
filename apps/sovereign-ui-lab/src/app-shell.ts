/**
 * Lab App Shell
 * Main application container with navigation and inspector panel
 */

import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { i18n } from '@/i18n/i18n-service';
import { themeEngine } from '@/themes';
import { savePreferences } from './providers/theme-provider';

// Import core components
import '@/components/gc-design/eva-gc-header';
import '@/components/gc-design/eva-gc-footer';
import '@/components/gc-design/eva-gc-language-switcher';

@customElement('lab-app-shell')
export class LabAppShell extends LitElement {
  @state() private inspectorOpen = true;
  @state() private currentLocale = 'en-CA';
  @state() private currentTheme = 'canada-gc-light';

  static styles = css`
    :host {
      display: block;
      min-height: 100vh;
    }

    .app-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: auto 1fr auto;
      min-height: 100vh;
    }

    .app-container.inspector-open {
      grid-template-columns: 1fr 400px;
    }

    header {
      grid-column: 1 / -1;
      background: var(--eva-color-background-elevated, #fff);
      border-bottom: 1px solid var(--eva-color-border, #ddd);
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2rem;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 2rem;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--eva-color-primary, #26374a);
      text-decoration: none;
    }

    nav {
      display: flex;
      gap: 1.5rem;
    }

    nav a {
      color: var(--eva-color-text, #333);
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background 0.2s;
    }

    nav a:hover {
      background: var(--eva-color-background-hover, #f0f0f0);
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
    
    // Subscribe to locale changes
    i18n.subscribe((locale) => {
      this.currentLocale = locale;
      document.documentElement.lang = locale;
    });
    
    // Load saved state
    this.currentLocale = localStorage.getItem('lab-locale') || 'en-CA';
    this.currentTheme = localStorage.getItem('lab-theme') || 'canada-gc-light';
    this.inspectorOpen = localStorage.getItem('lab-inspector-open') !== 'false';
  }

  private async handleLocaleChange(e: CustomEvent) {
    const locale = e.detail;
    await i18n.setLocale(locale);
    this.currentLocale = locale;
    savePreferences(locale, this.currentTheme);
    
    // Announce change to screen readers
    this.announceToScreenReader(`Language changed to ${locale}`);
  }

  private handleThemeChange(e: Event) {
    const select = e.target as HTMLSelectElement;
    const theme = select.value;
    themeEngine.applyTheme(theme);
    this.currentTheme = theme;
    savePreferences(this.currentLocale, theme);
    
    // Announce change to screen readers
    this.announceToScreenReader(`Theme changed to ${theme}`);
  }

  private toggleInspector() {
    this.inspectorOpen = !this.inspectorOpen;
    localStorage.setItem('lab-inspector-open', String(this.inspectorOpen));
  }

  private announceToScreenReader(message: string) {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';
    liveRegion.textContent = message;
    document.body.appendChild(liveRegion);
    setTimeout(() => liveRegion.remove(), 1000);
  }

  render() {
    return html`
      <div class="app-container ${this.inspectorOpen ? 'inspector-open' : ''}">
        <header role="banner">
          <div class="header-left">
            <a href="/" class="logo">🔬 EVA Sovereign UI Lab</a>
            
            <nav role="navigation" aria-label="Main navigation">
              <a href="/">Home</a>
              <a href="/scenario-1">Chat Assistant</a>
              <a href="/scenario-2">Complex Form</a>
              <a href="/scenario-3">Theme Showcase</a>
              <a href="/devkit/quickstart">DevKit</a>
            </nav>
          </div>

          <div class="header-right">
            <!-- Theme Selector -->
            <label>
              Theme:
              <select @change=${this.handleThemeChange} .value=${this.currentTheme}>
                <option value="canada-gc-light">GC Light</option>
                <option value="canada-gc-dark">GC Dark</option>
                <option value="gc-high-contrast">High Contrast</option>
              </select>
            </label>

            <!-- Language Switcher -->
            <eva-gc-language-switcher
              @locale-change=${this.handleLocaleChange}
            ></eva-gc-language-switcher>

            <!-- Inspector Toggle -->
            <button 
              class="inspector-toggle"
              @click=${this.toggleInspector}
              aria-pressed=${this.inspectorOpen}
              aria-label="Toggle inspector panel"
            >
              ${this.inspectorOpen ? '❌ Hide' : '🔍 Show'} Inspector
            </button>
          </div>
        </header>

        <main class="main-content" role="main" id="main-content">
          <div id="router-outlet"></div>
        </main>

        ${this.inspectorOpen ? html`
          <aside class="inspector-panel" role="complementary" aria-label="Inspector panel">
            <h2>Inspector Panel</h2>
            <p>Real-time analysis coming soon...</p>
            <p>Locale: <strong>${this.currentLocale}</strong></p>
            <p>Theme: <strong>${this.currentTheme}</strong></p>
          </aside>
        ` : ''}

        <footer role="contentinfo">
          <p>EVA Sovereign UI Lab &copy; 2025 | Built with EVA-Sovereign-UI Components</p>
          <p>WCAG 2.2 AA Compliant | Open Source MIT License</p>
        </footer>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lab-app-shell': LabAppShell;
  }
}
