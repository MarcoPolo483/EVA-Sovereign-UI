/**
 * Home Page - EVA Sovereign UI Lab Landing
 */

import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('lab-home-page')
export class LabHomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    .hero {
      background: linear-gradient(135deg, #26374a 0%, #2b5a8c 100%);
      color: white;
      padding: 4rem 2rem;
      border-radius: 12px;
      margin-bottom: 3rem;
      text-align: center;
    }

    .hero h1 {
      font-family: 'Lato', sans-serif;
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }

    .hero p {
      font-size: 1.5rem;
      opacity: 0.95;
      max-width: 800px;
      margin: 0 auto;
    }

    .features {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .feature-card {
      background: var(--eva-color-background-elevated, #fff);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 12px;
      padding: 2rem;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    }

    .feature-card h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: var(--eva-color-primary, #26374a);
    }

    .feature-card p {
      color: var(--eva-color-text-secondary, #666);
      line-height: 1.6;
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
      display: block;
    }

    .scenarios {
      margin-bottom: 3rem;
    }

    .scenarios h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: var(--eva-color-primary, #26374a);
    }

    .scenario-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }

    .scenario-link {
      display: block;
      background: var(--eva-color-background-elevated, #fff);
      border: 2px solid var(--eva-color-primary, #26374a);
      border-radius: 8px;
      padding: 1.5rem;
      text-decoration: none;
      color: inherit;
      transition: all 0.2s;
    }

    .scenario-link:hover {
      background: var(--eva-color-primary, #26374a);
      color: var(--eva-color-on-primary, #fff);
    }

    .scenario-link h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }

    .scenario-link p {
      font-size: 0.95rem;
      opacity: 0.9;
    }

    .quick-links {
      background: var(--eva-color-background-elevated, #fff);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 12px;
      padding: 2rem;
    }

    .quick-links h2 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
      color: var(--eva-color-primary, #26374a);
    }

    .quick-links ul {
      list-style: none;
      padding: 0;
    }

    .quick-links li {
      margin-bottom: 0.75rem;
    }

    .quick-links a {
      color: var(--eva-color-link, #284162);
      text-decoration: none;
      font-size: 1.1rem;
    }

    .quick-links a:hover {
      text-decoration: underline;
    }

    .demo-section {
      margin-bottom: 3rem;
      background: var(--eva-color-background-elevated, #fff);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 12px;
      padding: 2rem;
    }

    .demo-section h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: var(--eva-color-primary, #26374a);
    }

    .demo-notice {
      background: #d9eaf7;
      border-left: 4px solid #2b5a8c;
      padding: 1rem 1.5rem;
      margin-bottom: 2rem;
      border-radius: 4px;
    }

    .demo-notice strong {
      color: #1a3a52;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: var(--eva-color-background, #f9f9f9);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 8px;
      padding: 1.5rem;
      text-align: center;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--eva-color-primary, #26374a);
      margin-bottom: 0.5rem;
      display: block;
    }

    .stat-label {
      font-size: 0.95rem;
      color: var(--eva-color-text-secondary, #666);
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .service-card {
      background: var(--eva-color-background, #fff);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 8px;
      padding: 1.5rem;
      border-left: 4px solid var(--eva-color-primary, #26374a);
    }

    .service-card h3 {
      font-size: 1.25rem;
      margin-bottom: 0.75rem;
      color: var(--eva-color-primary, #26374a);
    }

    .service-card p {
      color: var(--eva-color-text-secondary, #666);
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2rem;
      }

      .hero p {
        font-size: 1.25rem;
      }

      .features {
        grid-template-columns: 1fr;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .services-grid {
        grid-template-columns: 1fr;
      }
    }
  `;

  render() {
    return html`
      <div class="hero">
        <h1>🔬 EVA Sovereign UI Lab</h1>
        <p>Reference implementation for Government of Canada applications</p>
        <p style="font-size: 1rem; margin-top: 0.5rem;">49 production-ready Web Components | Bilingual EN/FR | WCAG 2.2 AA</p>
      </div>

      <section class="demo-section">
        <h2>Welcome to My Service Canada Account</h2>
        <div class="demo-notice">
          <strong>Important Notice:</strong> Your application has been received and is being processed. Check back in 3-5 business days for updates.
        </div>

        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-number">3</span>
            <div class="stat-label">Active Applications</div>
          </div>
          <div class="stat-card">
            <span class="stat-number">2</span>
            <div class="stat-label">New Messages</div>
          </div>
          <div class="stat-card">
            <span class="stat-number">12</span>
            <div class="stat-label">Documents</div>
          </div>
          <div class="stat-card">
            <span class="stat-number">$1,240</span>
            <div class="stat-label">Last Payment</div>
          </div>
        </div>

        <div class="services-grid">
          <div class="service-card">
            <h3>Employment Insurance</h3>
            <p>Apply for EI benefits, submit bi-weekly reports, and check your claim status.</p>
          </div>
          <div class="service-card">
            <h3>Canada Pension Plan</h3>
            <p>Manage your CPP contributions, view your statement, and plan for retirement.</p>
          </div>
          <div class="service-card">
            <h3>Old Age Security</h3>
            <p>Check your OAS eligibility, apply for benefits, and manage your payments.</p>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="feature-card">
          <span class="feature-icon" aria-hidden="true">🎭</span>
          <h2>Real-World Scenarios</h2>
          <p>
            Three production-ready examples: GC Chat Assistant for citizen services,
            Complex multi-step form with validation, and GC Design System theme showcase.
          </p>
        </div>

        <div class="feature-card">
          <span class="feature-icon" aria-hidden="true">🔍</span>
          <h2>Inspector Panel</h2>
          <p>
            Real-time analysis of accessibility, internationalization, design system
            compliance, and code snippets for every scenario.
          </p>
        </div>

        <div class="feature-card">
          <span class="feature-icon" aria-hidden="true">📚</span>
          <h2>Developer Kit</h2>
          <p>
            Quickstart guides for all 49 components with React, Vue, Angular, and Svelte wrappers.
            Interactive playground and migration guides from WET-BOEW.
          </p>
        </div>
      </section>

      <section class="scenarios">
        <h2>Explore Scenarios</h2>
        <div class="scenario-grid">
          <a href="/scenario-1" class="scenario-link">
            <h3>💬 GC Chat Assistant</h3>
            <p>Interactive chat interface for Government of Canada citizen services</p>
          </a>

          <a href="/scenario-2" class="scenario-link">
            <h3>📝 Complex Form</h3>
            <p>Multi-step application form with GC Design System validation</p>
          </a>

          <a href="/scenario-3" class="scenario-link">
            <h3>🎨 GC Theme Showcase</h3>
            <p>Light, dark, and high-contrast themes with bilingual content</p>
          </a>
        </div>
      </section>

      <section class="quick-links">
        <h2>Quick Links</h2>
        <ul>
          <li><a href="/devkit/quickstart">📘 Quickstart Guides (49 Components)</a></li>
          <li><a href="/devkit/playground">🎮 Interactive Playground</a></li>
          <li><a href="/devkit/migration">🔄 Migration from WET-BOEW</a></li>
          <li><a href="https://github.com/marcopolo483/EVA-Sovereign-UI" target="_blank" rel="noopener">🐙 GitHub Repository</a></li>
          <li><a href="/storybook/" target="_blank" rel="noopener">📖 Storybook Documentation</a></li>
        </ul>
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lab-home-page': LabHomePage;
  }
}
