/**
 * Framework Switcher Component
 * Allows users to switch between framework examples (Vanilla/React/Vue/Angular/Svelte)
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export type Framework = 'vanilla' | 'react' | 'vue' | 'angular' | 'svelte';

@customElement('lab-framework-switcher')
export class LabFrameworkSwitcher extends LitElement {
  @property() framework: Framework = 'vanilla';

  static styles = css`
    :host {
      display: block;
    }

    .switcher {
      display: flex;
      gap: 0.5rem;
      flex-wrap: wrap;
      padding: 1rem;
      background: var(--eva-color-background-elevated, #f9f9f9);
      border-radius: 8px;
      border: 1px solid var(--eva-color-border, #ddd);
    }

    .framework-btn {
      padding: 0.75rem 1.5rem;
      background: var(--eva-color-background, #fff);
      border: 2px solid var(--eva-color-border, #ddd);
      border-radius: 6px;
      font-family: 'Lato', sans-serif;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--eva-color-text, #333);
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .framework-btn:hover {
      border-color: var(--eva-color-primary, #26374a);
      background: var(--eva-color-background-elevated, #f5f5f5);
    }

    .framework-btn.active {
      background: var(--eva-color-primary, #26374a);
      color: #fff;
      border-color: var(--eva-color-primary, #26374a);
    }

    .framework-btn:focus-visible {
      outline: 3px solid var(--eva-color-ring, #2b5a8c);
      outline-offset: 2px;
    }

    .framework-icon {
      width: 20px;
      height: 20px;
      fill: currentColor;
    }

    @media (max-width: 640px) {
      .switcher {
        padding: 0.75rem;
      }

      .framework-btn {
        flex: 1 1 calc(50% - 0.25rem);
        min-width: 120px;
        justify-content: center;
      }
    }
  `;

  private handleFrameworkChange(framework: Framework) {
    this.framework = framework;
    localStorage.setItem('lab-framework', framework);
    
    this.dispatchEvent(new CustomEvent('framework-change', {
      detail: { framework },
      bubbles: true,
      composed: true,
    }));
  }

  connectedCallback() {
    super.connectedCallback();
    const saved = localStorage.getItem('lab-framework') as Framework;
    if (saved && ['vanilla', 'react', 'vue', 'angular', 'svelte'].includes(saved)) {
      this.framework = saved;
    }
  }

  render() {
    const frameworks: { id: Framework; label: string; icon: string }[] = [
      { id: 'vanilla', label: 'Vanilla JS', icon: 'JS' },
      { id: 'react', label: 'React', icon: '⚛️' },
      { id: 'vue', label: 'Vue', icon: 'V' },
      { id: 'angular', label: 'Angular', icon: 'A' },
      { id: 'svelte', label: 'Svelte', icon: 'S' },
    ];

    return html`
      <div class="switcher" role="radiogroup" aria-label="Select framework">
        ${frameworks.map(fw => html`
          <button
            class="framework-btn ${this.framework === fw.id ? 'active' : ''}"
            role="radio"
            aria-checked="${this.framework === fw.id}"
            @click="${() => this.handleFrameworkChange(fw.id)}"
          >
            <span class="framework-icon">${fw.icon}</span>
            <span>${fw.label}</span>
          </button>
        `)}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lab-framework-switcher': LabFrameworkSwitcher;
  }
}
