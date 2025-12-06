/**
 * Scenario 2: Complex Form
 * Coming soon
 */

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lab-scenario-2')
export class LabScenario2 extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 2rem;
    }
  `;

  render() {
    return html`
      <div>
        <h1>Complex Form Scenario</h1>
        <p>Coming soon...</p>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lab-scenario-2': LabScenario2;
  }
}
