/**
 * Scenario 3: GC Theme Showcase
 * Theme demonstrations with framework examples
 */
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { appState } from '../providers/app-state';
import '../components/framework-switcher';
import '../components/code-panel';
import type { Framework } from '../components/framework-switcher';

@customElement('lab-scenario-3')
export class LabScenario3 extends LitElement {
  @state() private currentTheme = 'canada-gc-light';
  @state() private framework: Framework = 'vanilla';
  
  static styles = css`
    :host {
      display: block;
      max-width: 1400px;
      margin: 0 auto;
      padding: 2rem;
    }

    .page-header {
      margin-bottom: 2rem;
    }

    h1 {
      font-family: 'Lato', sans-serif;
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      color: #26374a;
      font-weight: 700;
    }

    .subtitle {
      font-size: 1.1rem;
      color: #555;
      margin: 0 0 2rem 0;
    }

    .main-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-top: 2rem;
    }

    @media (max-width: 968px) {
      .main-layout {
        grid-template-columns: 1fr;
      }
    }

    .demo-section {
      background: var(--eva-color-background-elevated, #fff);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 12px;
      padding: 2rem;
    }

    .demo-section h2 {
      font-family: 'Lato', sans-serif;
      font-size: 1.5rem;
      color: #26374a;
      margin: 0 0 1.5rem 0;
      font-weight: 600;
    }

    .code-section {
      background: var(--eva-color-background-elevated, #fff);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 12px;
      padding: 2rem;
    }

    .code-section h2 {
      font-family: 'Lato', sans-serif;
      font-size: 1.5rem;
      color: #26374a;
      margin: 0 0 1.5rem 0;
      font-weight: 600;
    }

    .theme-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    @media (max-width: 768px) {
      .theme-grid {
        grid-template-columns: 1fr;
      }
    }

    .theme-card {
      background: var(--eva-color-background-elevated, #fff);
      border: 2px solid var(--eva-color-border, #ddd);
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .theme-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(38, 55, 74, 0.15);
    }

    .theme-card.active {
      border-color: #26374a;
      box-shadow: 0 0 0 4px rgba(38, 55, 74, 0.1);
    }

    .theme-preview {
      height: 150px;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .theme-preview.light {
      background: #f9f9f9;
      color: #333;
    }

    .theme-preview.dark {
      background: #1a1a1a;
      color: #fff;
    }

    .theme-preview.high-contrast {
      background: #000;
      color: #fff;
    }

    .preview-element {
      padding: 0.5rem 1rem;
      border-radius: 6px;
      font-weight: 600;
      text-align: center;
      font-size: 0.9rem;
    }

    .preview-primary {
      background: #26374a;
      color: #fff;
    }

    .preview-secondary {
      background: #2b5a8c;
      color: #fff;
    }

    .preview-accent {
      background: #e63946;
      color: #fff;
    }

    .theme-info {
      padding: 1rem;
      border-top: 1px solid var(--eva-color-border, #ddd);
    }

    .theme-name {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 0.25rem;
      color: #26374a;
    }

    .theme-description {
      font-size: 0.9rem;
      color: #555;
      margin-bottom: 0.5rem;
    }

    .theme-badge {
      display: inline-block;
      padding: 0.25rem 0.75rem;
      background: #26374a;
      color: white;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
    }

    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.currentTheme = appState.theme || 'canada-gc-light';
  }

  private handleThemeSelect(theme: string) {
    this.currentTheme = theme;
    appState.setTheme(theme);
  }

  private handleFrameworkChange = (e: CustomEvent<{ framework: Framework }>) => {
    this.framework = e.detail.framework;
  };

  private getThemeCode(): string {
    const codes = {
      vanilla: `<!-- Theme Switching -->
<eva-theme-provider theme="canada-gc-light">
  <eva-gc-button variant="primary">
    Light Theme
  </eva-gc-button>
</eva-theme-provider>

<script type="module">
  const provider = document.querySelector('eva-theme-provider');
  
  // Switch to dark theme
  provider.setAttribute('theme', 'canada-gc-dark');
  
  // Switch to high contrast
  provider.setAttribute('theme', 'gc-high-contrast');
</script>`,
      react: `import { ThemeProvider, GCButton } from '@eva-suite/react';
import { useState } from 'react';

export function ThemedApp() {
  const [theme, setTheme] = useState('canada-gc-light');

  return (
    <ThemeProvider theme={theme}>
      <GCButton 
        variant="primary"
        onClick={() => setTheme('canada-gc-dark')}
      >
        Switch to Dark Theme
      </GCButton>
      
      <GCButton 
        variant="primary"
        onClick={() => setTheme('gc-high-contrast')}
      >
        Switch to High Contrast
      </GCButton>
    </ThemeProvider>
  );
}`,
      vue: `<script setup>
import { EVAThemeProvider, EVAGCButton } from '@eva-suite/vue';
import { ref } from 'vue';

const theme = ref('canada-gc-light');

const switchTheme = (newTheme) => {
  theme.value = newTheme;
};
</script>

<template>
  <EVAThemeProvider :theme="theme">
    <EVAGCButton 
      variant="primary"
      @click="switchTheme('canada-gc-dark')"
    >
      Switch to Dark Theme
    </EVAGCButton>
    
    <EVAGCButton 
      variant="primary"
      @click="switchTheme('gc-high-contrast')"
    >
      Switch to High Contrast
    </EVAGCButton>
  </EVAThemeProvider>
</template>`,
      angular: `import { Component } from '@angular/core';

@Component({
  selector: 'app-themed',
  template: \`
    <eva-theme-provider [theme]="theme">
      <eva-gc-button 
        variant="primary"
        (click)="switchTheme('canada-gc-dark')"
      >
        Switch to Dark Theme
      </eva-gc-button>
      
      <eva-gc-button 
        variant="primary"
        (click)="switchTheme('gc-high-contrast')"
      >
        Switch to High Contrast
      </eva-gc-button>
    </eva-theme-provider>
  \`
})
export class ThemedComponent {
  theme = 'canada-gc-light';

  switchTheme(newTheme: string) {
    this.theme = newTheme;
  }
}`,
      svelte: `<script>
  import { ThemeProvider, GCButton } from '@eva-suite/svelte';
  
  let theme = 'canada-gc-light';
  
  function switchTheme(newTheme) {
    theme = newTheme;
  }
</script>

<ThemeProvider {theme}>
  <GCButton 
    variant="primary"
    on:click={() => switchTheme('canada-gc-dark')}
  >
    Switch to Dark Theme
  </GCButton>
  
  <GCButton 
    variant="primary"
    on:click={() => switchTheme('gc-high-contrast')}
  >
    Switch to High Contrast
  </GCButton>
</ThemeProvider>`
    };
    return codes[this.framework];
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
        <p class="subtitle">Government of Canada design system themes with framework implementation</p>
      </div>

      <div class="demo-section">
        <h2>Available Themes</h2>
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
      </div>

      <div class="main-layout">
        <!-- Live Demo Section -->
        <div class="demo-section">
          <h2>Current Theme: ${this.currentTheme}</h2>
          <p style="margin: 0 0 1rem 0; color: #555;">Click a theme card above to see it in action</p>
        </div>

        <!-- Code Section -->
        <div class="code-section">
          <h2>Implementation Code</h2>
          <lab-framework-switcher 
            .framework="${this.framework}"
            @framework-change="${this.handleFrameworkChange}"
          ></lab-framework-switcher>
          <lab-code-panel
            .framework="${this.framework}"
            .code="${this.getThemeCode()}"
            language="typescript"
          ></lab-code-panel>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lab-scenario-3': LabScenario3;
  }
}
