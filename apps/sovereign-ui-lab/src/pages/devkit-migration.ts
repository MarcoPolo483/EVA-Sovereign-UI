/**
 * DevKit: Migration Guides
 */

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lab-devkit-migration')
export class LabDevKitMigration extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: var(--eva-color-primary, #26374a);
    }

    .coming-soon {
      background: var(--eva-color-background-elevated, #fff);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 12px;
      padding: 3rem;
      text-align: center;
    }

    .coming-soon p {
      font-size: 1.25rem;
      color: var(--eva-color-text-secondary, #666);
    }
  `;

  render() {
    return html`
      <h1>🔄 Migration Guides</h1>
      <div class="coming-soon">
        <p>🚧 Under construction</p>
        <p>Guides for migrating from WET-BOEW, GCWeb, and custom solutions</p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lab-devkit-migration': LabDevKitMigration;
  }
}
