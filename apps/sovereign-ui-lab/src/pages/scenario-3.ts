/**
 * Scenario 3: GC Theme Showcase
 */
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../providers/app-state';

@customElement('lab-scenario-3')
export class LabScenario3 extends LitElement {
  @state() private currentTheme = 'canada-gc-light';
  
  static styles = css`:host { display: block; }
.page-header { margin-bottom: 2rem; }
h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--eva-color-primary, #26374a); }
.subtitle { font-size: 1.1rem; color: var(--eva-color-text-secondary, #666); margin-bottom: 2rem; }
.theme-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; margin-bottom: 3rem; }
.theme-card { background: var(--eva-color-background-elevated, #fff); border: 2px solid var(--eva-color-border, #ddd); border-radius: 12px; overflow: hidden; transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; }
.theme-card:hover { transform: translateY(-4px); box-shadow: 0 8px 16px rgba(0,0,0,0.1); }
.theme-card.active { border-color: var(--eva-color-primary, #26374a); box-shadow: 0 0 0 4px rgba(38, 55, 74, 0.1); }
.theme-preview { height: 200px; padding: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
.theme-preview.light { background: #f9f9f9; color: #333; }
.theme-preview.dark { background: #1a1a1a; color: #fff; }
.theme-preview.high-contrast { background: #000; color: #fff; }
.preview-element { padding: 0.75rem 1.5rem; border-radius: 6px; font-weight: 600; text-align: center; }
.preview-primary { background: #26374a; color: #fff; }
.preview-secondary { background: #2b5a8c; color: #fff; }
.preview-accent { background: #e63946; color: #fff; }
.theme-info { padding: 1.5rem; border-top: 1px solid var(--eva-color-border, #ddd); }
.theme-name { font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--eva-color-primary, #26374a); }
.theme-description { font-size: 0.95rem; color: var(--eva-color-text-secondary, #666); margin-bottom: 1rem; }
.theme-badge { display: inline-block; padding: 0.25rem 0.75rem; background: var(--eva-color-primary, #26374a); color: var(--eva-color-on-primary, #fff); border-radius: 12px; font-size: 0.85rem; font-weight: 600; }
.demo-section { background: var(--eva-color-background-elevated, #fff); border: 1px solid var(--eva-color-border, #ddd); border-radius: 12px; padding: 2rem; margin-bottom: 2rem; }
.demo-section h2 { font-size: 1.75rem; margin-bottom: 1.5rem; color: var(--eva-color-primary, #26374a); }
.color-palette { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 1rem; margin-top: 1rem; }
.color-box { height: 80px; border-radius: 8px; margin-bottom: 0.5rem; border: 1px solid var(--eva-color-border, #ddd); display: flex; align-items: center; justify-content: center; font-weight: 600; font-size: 0.85rem; }
.color-label { font-size: 0.9rem; color: var(--eva-color-text-secondary, #666); text-align: center; }
.demo-button { padding: 0.75rem 1.5rem; border: none; border-radius: 6px; font-size: 1rem; font-weight: 600; cursor: pointer; }
.demo-button.primary { background: var(--eva-color-primary, #26374a); color: #fff; }
.demo-button.secondary { background: #f5f5f5; color: #333; border: 1px solid #ddd; }
.demo-row { display: flex; flex-wrap: wrap; gap: 1rem; margin: 1rem 0; }`;

  connectedCallback() {
    super.connectedCallback();
    this.currentTheme = appState.theme || 'canada-gc-light';
  }

  private handleThemeSelect(theme: string) {
    this.currentTheme = theme;
    appState.setTheme(theme);
  }

  render() {
    const themes = [
      { id: 'canada-gc-light', name: 'Canada GC Light', description: 'Default Canada.ca theme', previewClass: 'light', badge: 'Default' },
      { id: 'canada-gc-dark', name: 'Canada GC Dark', description: 'Dark mode variant', previewClass: 'dark', badge: 'Dark Mode' },
      { id: 'gc-high-contrast', name: 'GC High Contrast', description: 'Enhanced contrast (WCAG AAA)', previewClass: 'high-contrast', badge: 'WCAG AAA' }
    ];

    return html`
      <div class="page-header">
        <h1>🎨 GC Theme Showcase</h1>
        <p class="subtitle">Explore Government of Canada design system themes</p>
      </div>
      <div class="theme-grid">
        ${themes.map(t => html`
          <div class="theme-card ${this.currentTheme === t.id ? 'active' : ''}" @click=${() => this.handleThemeSelect(t.id)}>
            <div class="theme-preview ${t.previewClass}">
              <div class="preview-element preview-primary">Primary</div>
              <div class="preview-element preview-secondary">Secondary</div>
              <div class="preview-element preview-accent">Accent</div>
            </div>
            <div class="theme-info">
              <div class="theme-name">${t.name}</div>
              <div class="theme-description">${t.description}</div>
              <span class="theme-badge">${t.badge}</span>
            </div>
          </div>
        `)}
      </div>
      <div class="demo-section">
        <h2>🎨 Color Palette</h2>
        <div class="color-palette">
          ${[{c: '#26374a', l: 'Primary'}, {c: '#2b5a8c', l: 'Secondary'}, {c: '#e63946', l: 'Accent'}, {c: '#2e7d32', l: 'Success'}, {c: '#e65100', l: 'Warning'}, {c: '#c33', l: 'Error'}].map(item => html`
            <div><div class="color-box" style="background: ${item.c}; color: #fff;">${item.l}</div><div class="color-label">${item.c}</div></div>
          `)}
        </div>
      </div>
      <div class="demo-section">
        <h2>🧩 Components</h2>
        <div class="demo-row">
          <button class="demo-button primary">Primary Button</button>
          <button class="demo-button secondary">Secondary Button</button>
        </div>
      </div>
      <div class="demo-section">
        <h2>♿ Accessibility</h2>
        <ul>
          <li>WCAG 2.2 AA Compliance</li>
          <li>Keyboard Navigation</li>
          <li>Screen Reader Support</li>
        </ul>
      </div>
    `;
  }
}
declare global { interface HTMLElementTagNameMap { 'lab-scenario-3': LabScenario3; } }
