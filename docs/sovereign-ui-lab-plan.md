# EVA Sovereign UI Lab - Implementation Plan

## Executive Summary
Build comprehensive reference implementation in **~8 hours** with 3 scenarios, inspector panel, and DevKit.

**Approach**: Incremental development, one feature at a time, test as we go.

---

## Phase 1: Foundation Setup (2 hours)

### 1.1 Create App Structure (30 min)
```
apps/sovereign-ui-lab/
├── index.html                 # Entry HTML
├── vite.config.ts             # Vite build config
├── tsconfig.json              # TypeScript config
├── package.json               # Dependencies (if needed)
└── src/
    ├── main.ts                # App entry point
    ├── router.ts              # Route configuration
    ├── app-shell.ts           # Main app component
    ├── providers/
    │   ├── app-state.ts       # Global state management
    │   └── theme-provider.ts  # Theme initialization
    ├── components/
    │   ├── nav-bar.ts         # Top navigation
    │   ├── inspector-panel.ts # Side panel with tabs
    │   ├── code-viewer.ts     # Syntax highlighted code
    │   └── status-widget.ts   # A11y/i18n status display
    ├── pages/
    │   ├── home.ts            # Landing page
    │   ├── scenario-1.ts      # GC AI Assistant
    │   ├── scenario-2.ts      # Complex Form
    │   ├── scenario-3.ts      # 5-Eyes Themes
    │   ├── devkit-quickstart.ts
    │   ├── devkit-playground.ts
    │   └── devkit-migration.ts
    ├── data/
    │   ├── scenarios.ts       # Scenario metadata
    │   ├── framework-examples.ts # Code snippets
    │   └── translations.ts    # Lab-specific translations
    └── styles/
        └── global.css         # Global styles
```

**Files to Create**:
1. `apps/sovereign-ui-lab/index.html`
2. `apps/sovereign-ui-lab/vite.config.ts`
3. `apps/sovereign-ui-lab/tsconfig.json`
4. `apps/sovereign-ui-lab/src/main.ts`
5. `apps/sovereign-ui-lab/src/router.ts`
6. `apps/sovereign-ui-lab/src/app-shell.ts`
7. `apps/sovereign-ui-lab/src/providers/app-state.ts`
8. `apps/sovereign-ui-lab/src/styles/global.css`

### 1.2 Install Router Dependency (5 min)
```bash
npm install @vaadin/router --save
npm install @types/vaadin__router --save-dev
```

### 1.3 Set Up Routing (30 min)
```typescript
// src/router.ts
import { Router } from '@vaadin/router';

export const routes = [
  { path: '/', component: 'lab-home-page' },
  { path: '/scenario-1', component: 'lab-scenario-1' },
  { path: '/scenario-2', component: 'lab-scenario-2' },
  { path: '/scenario-3', component: 'lab-scenario-3' },
  { path: '/devkit/quickstart', component: 'lab-devkit-quickstart' },
  { path: '/devkit/playground', component: 'lab-devkit-playground' },
  { path: '/devkit/migration', component: 'lab-devkit-migration' },
];

export function initRouter(outlet: HTMLElement) {
  const router = new Router(outlet);
  router.setRoutes(routes);
  return router;
}
```

### 1.4 Build App Shell (30 min)
```typescript
// src/app-shell.ts
@customElement('lab-app-shell')
export class LabAppShell extends LitElement {
  @state() inspectorOpen = true;
  @state() currentLocale = 'en-CA';
  @state() currentTheme = 'canada-gc-light';

  render() {
    return html`
      <div class="app-shell">
        <lab-nav-bar 
          @locale-change=${this.handleLocaleChange}
          @theme-change=${this.handleThemeChange}
        ></lab-nav-bar>
        
        <div class="main-content">
          <div id="router-outlet"></div>
        </div>
        
        ${this.inspectorOpen ? html`
          <lab-inspector-panel
            .locale=${this.currentLocale}
            .theme=${this.currentTheme}
            @close=${() => this.inspectorOpen = false}
          ></lab-inspector-panel>
        ` : null}
      </div>
    `;
  }
}
```

### 1.5 Wire Theme & i18n (30 min)
```typescript
// src/providers/theme-provider.ts
import { themeEngine } from '@/themes';
import { i18n } from '@/i18n/i18n-service';

export async function initializeProviders() {
  // Load default locales
  await i18n.loadLocale('en-CA');
  await i18n.loadLocale('fr-CA');
  await i18n.setLocale('en-CA');
  
  // Apply default theme
  themeEngine.applyTheme('canada-gc-light');
  
  // Check for saved preferences
  const savedLocale = localStorage.getItem('lab-locale');
  const savedTheme = localStorage.getItem('lab-theme');
  
  if (savedLocale) await i18n.setLocale(savedLocale);
  if (savedTheme) themeEngine.applyTheme(savedTheme);
}
```

---

## Phase 2: Home Page (1 hour)

### 2.1 Landing Hero (20 min)
```typescript
// src/pages/home.ts
@customElement('lab-home-page')
export class LabHomePage extends LitElement {
  render() {
    return html`
      <eva-page-shell>
        <eva-hero-banner>
          <h1>EVA Sovereign UI Lab</h1>
          <p>Comprehensive reference implementation for Canadian Government applications</p>
        </eva-hero-banner>
        
        <eva-container>
          <h2>Features</h2>
          <div class="feature-grid">
            ${this.renderFeatureCard('Scenarios', '3 real-world examples')}
            ${this.renderFeatureCard('Inspector', 'Real-time A11y & i18n analysis')}
            ${this.renderFeatureCard('DevKit', 'Framework integration guides')}
          </div>
        </eva-container>
      </eva-page-shell>
    `;
  }
}
```

### 2.2 Control Panel (20 min)
```typescript
// Language Switcher
<eva-gc-language-switcher 
  @locale-change=${this.handleLocaleChange}
></eva-gc-language-switcher>

// Theme Selector
<eva-select 
  @change=${this.handleThemeChange}
  aria-label="Select theme"
>
  <option value="canada-gc-light">Canada Light</option>
  <option value="canada-gc-dark">Canada Dark</option>
  <option value="usa-light">USA Light</option>
  ...
</eva-select>
```

### 2.3 Accessibility Controls (20 min)
```typescript
// Reduced Motion Toggle
<eva-switch 
  @change=${this.handleReducedMotion}
  aria-label="Reduce motion"
>
  Reduce Motion
</eva-switch>

// High Contrast Toggle
<eva-switch 
  @change=${this.handleHighContrast}
  aria-label="High contrast mode"
>
  High Contrast
</eva-switch>
```

---

## Phase 3: Scenarios (2 hours)

### 3.1 Scenario 1: GC AI Assistant (45 min)

**Layout**:
```html
<eva-page-shell>
  <eva-container>
    <h1>Service Canada AI Assistant</h1>
    
    <!-- Chat Interface -->
    <eva-chat-panel>
      <eva-chat-message sender="user">
        What are my EI benefits?
      </eva-chat-message>
      
      <eva-chat-message sender="assistant">
        Based on your account, you're eligible for...
        [Citation: Employment Insurance Act, Section 7]
      </eva-chat-message>
    </eva-chat-panel>
    
    <!-- Filters Sidebar -->
    <aside>
      <h2>Filters</h2>
      <eva-checkbox-group>
        <eva-checkbox>Employment Insurance</eva-checkbox>
        <eva-checkbox>Canada Pension Plan</eva-checkbox>
        <eva-checkbox>Old Age Security</eva-checkbox>
      </eva-checkbox-group>
    </aside>
  </eva-container>
</eva-page-shell>
```

**Features**:
- ✅ Real-time message rendering
- ✅ ARIA live regions for new messages
- ✅ Citation links with proper attribution
- ✅ Filter panel with checkboxes
- ✅ Keyboard navigation (Tab, Enter)
- ✅ Screen reader announcements

**Translation Keys**:
```json
{
  "scenario1": {
    "title": "Service Canada AI Assistant",
    "placeholder": "Ask about your benefits...",
    "filters": "Filter by program",
    "citation": "Source"
  }
}
```

### 3.2 Scenario 2: Complex Form (45 min)

**Layout**:
```html
<eva-page-shell>
  <eva-container>
    <h1>Employment Insurance Application</h1>
    
    <!-- Multi-step Progress -->
    <eva-stepper .currentStep=${this.currentStep}>
      <eva-stepper-item>Personal Information</eva-stepper-item>
      <eva-stepper-item>Employment History</eva-stepper-item>
      <eva-stepper-item>Banking Details</eva-stepper-item>
      <eva-stepper-item>Review</eva-stepper-item>
    </eva-stepper>
    
    <!-- Form Step 1 -->
    ${this.currentStep === 0 ? html`
      <form @submit=${this.handleStepSubmit}>
        <eva-input
          label="Social Insurance Number"
          type="text"
          required
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
          .error=${this.errors.sin}
        ></eva-input>
        
        <eva-input
          label="First Name"
          type="text"
          required
          .error=${this.errors.firstName}
        ></eva-input>
        
        <!-- Date Picker -->
        <eva-gc-date-picker
          label="Date of Birth"
          required
          .error=${this.errors.dob}
        ></eva-gc-date-picker>
        
        <eva-button type="submit">Next</eva-button>
      </form>
    ` : null}
    
    <!-- Error Summary -->
    ${this.errors.length > 0 ? html`
      <eva-alert variant="error" role="alert">
        <h2>Please fix the following errors:</h2>
        <ul>
          ${this.errors.map(err => html`<li>${err}</li>`)}
        </ul>
      </eva-alert>
    ` : null}
  </eva-container>
</eva-page-shell>
```

**Features**:
- ✅ Multi-step progress indicator
- ✅ Client-side validation
- ✅ Error summary at top (WCAG 3.3.1)
- ✅ Inline error messages
- ✅ Conditional fields (e.g., "Are you currently employed?" → shows employment details)
- ✅ Keyboard navigation through form
- ✅ Focus management (error → first invalid field)

**Validation Logic**:
```typescript
validateStep1() {
  const errors = [];
  if (!this.sin.match(/[0-9]{3}-[0-9]{3}-[0-9]{3}/)) {
    errors.push({ field: 'sin', message: 'Invalid SIN format' });
  }
  if (!this.firstName) {
    errors.push({ field: 'firstName', message: 'First name is required' });
  }
  return errors;
}
```

### 3.3 Scenario 3: Five Eyes Themes (30 min)

**Layout**:
```html
<eva-page-shell>
  <eva-container>
    <h1>Data Residency and Sovereign Compliance</h1>
    
    <!-- Theme Selector Cards -->
    <div class="theme-grid">
      ${this.renderThemeCard('Canada', 'canada-gc-light', 'Data stored in Canadian data centers')}
      ${this.renderThemeCard('USA', 'usa-light', 'Compliant with FedRAMP standards')}
      ${this.renderThemeCard('UK', 'uk-light', 'Adheres to UK GDPR requirements')}
      ${this.renderThemeCard('Australia', 'australia-light', 'Protected under Privacy Act 1988')}
      ${this.renderThemeCard('New Zealand', 'newzealand-light', 'Privacy Act 2020 compliant')}
    </div>
    
    <!-- Demo Content -->
    <section>
      <h2>${i18n.t('scenario3.sampleContent')}</h2>
      <p>Current theme: <eva-badge>${this.currentTheme}</eva-badge></p>
      <p>Date format: ${this.formatDate(new Date())}</p>
      <p>Number format: ${this.formatNumber(1234.56)}</p>
    </section>
  </eva-container>
</eva-page-shell>
```

**Features**:
- ✅ Live theme switching (click card → apply theme)
- ✅ Localized date/number formatting per country
- ✅ Sample content that responds to theme
- ✅ Dark/light mode toggle per country
- ✅ Data residency information for each jurisdiction

---

## Phase 4: Inspector Panel (1.5 hours)

### 4.1 Panel Layout (20 min)
```typescript
// src/components/inspector-panel.ts
@customElement('lab-inspector-panel')
export class LabInspectorPanel extends LitElement {
  @property() locale = 'en-CA';
  @property() theme = 'canada-gc-light';
  @state() activeTab = 'a11y';

  render() {
    return html`
      <aside class="inspector-panel" aria-label="Inspector Panel">
        <header>
          <h2>Inspector</h2>
          <eva-button @click=${this.close} aria-label="Close inspector">
            ×
          </eva-button>
        </header>
        
        <eva-tabs @tab-change=${this.handleTabChange}>
          <eva-tab id="a11y">Accessibility</eva-tab>
          <eva-tab id="i18n">i18n</eva-tab>
          <eva-tab id="design">Design System</eva-tab>
          <eva-tab id="code">Code</eva-tab>
        </eva-tabs>
        
        <div class="tab-content">
          ${this.renderTabContent()}
        </div>
      </aside>
    `;
  }
}
```

### 4.2 Accessibility Tab (30 min)
```typescript
renderA11yTab() {
  const violations = this.runA11yAudit();
  
  return html`
    <div class="a11y-tab">
      <h3>WCAG 2.2 AA Compliance</h3>
      
      <!-- Color Contrast Checker -->
      <section>
        <h4>Color Contrast</h4>
        <div class="contrast-check">
          <div class="sample" style="background: var(--eva-color-primary); color: var(--eva-color-on-primary)">
            Sample Text
          </div>
          <p>
            Contrast: <eva-badge variant=${this.getContrastBadge()}>
              ${this.calculateContrast()}:1
            </eva-badge>
          </p>
        </div>
      </section>
      
      <!-- Keyboard Navigation -->
      <section>
        <h4>Keyboard Navigation</h4>
        <ul>
          <li>✅ All interactive elements are focusable</li>
          <li>✅ Focus indicators visible</li>
          <li>✅ Tab order logical</li>
        </ul>
      </section>
      
      <!-- ARIA Attributes -->
      <section>
        <h4>ARIA Attributes</h4>
        ${violations.length === 0 ? html`
          <p>✅ No issues detected</p>
        ` : html`
          <eva-alert variant="warning">
            <ul>
              ${violations.map(v => html`<li>${v.message}</li>`)}
            </ul>
          </eva-alert>
        `}
      </section>
      
      <!-- Screen Reader Test -->
      <section>
        <h4>Screen Reader Support</h4>
        <eva-button @click=${this.testScreenReader}>
          Run Screen Reader Test
        </eva-button>
      </section>
    </div>
  `;
}
```

**A11y Audit Logic**:
```typescript
runA11yAudit() {
  const violations = [];
  
  // Check for missing aria-labels
  document.querySelectorAll('button, a').forEach(el => {
    if (!el.textContent?.trim() && !el.getAttribute('aria-label')) {
      violations.push({
        element: el,
        message: 'Button/link missing accessible label'
      });
    }
  });
  
  // Check for proper heading hierarchy
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  // ... check sequence
  
  return violations;
}
```

### 4.3 i18n Tab (20 min)
```typescript
renderI18nTab() {
  const availableLocales = i18n.getAvailableLocales();
  
  return html`
    <div class="i18n-tab">
      <h3>Internationalization</h3>
      
      <!-- Current Locale -->
      <section>
        <h4>Current Locale</h4>
        <p><eva-badge>${this.locale}</eva-badge></p>
      </section>
      
      <!-- Available Locales -->
      <section>
        <h4>Available Locales</h4>
        <ul>
          ${availableLocales.map(loc => html`
            <li>
              <eva-checkbox ?checked=${loc === this.locale}>
                ${loc} ${this.getLocaleName(loc)}
              </eva-checkbox>
            </li>
          `)}
        </ul>
      </section>
      
      <!-- Translation Coverage -->
      <section>
        <h4>Translation Coverage</h4>
        <eva-progress value="95" max="100"></eva-progress>
        <p>95% of keys translated</p>
        
        ${this.getMissingTranslations().length > 0 ? html`
          <eva-accordion>
            <eva-accordion-item title="Missing Translations">
              <ul>
                ${this.getMissingTranslations().map(key => html`
                  <li><code>${key}</code></li>
                `)}
              </ul>
            </eva-accordion-item>
          </eva-accordion>
        ` : null}
      </section>
      
      <!-- Formatting Examples -->
      <section>
        <h4>Locale Formatting</h4>
        <dl>
          <dt>Date:</dt>
          <dd>${new Intl.DateTimeFormat(this.locale).format(new Date())}</dd>
          
          <dt>Number:</dt>
          <dd>${new Intl.NumberFormat(this.locale).format(1234.56)}</dd>
          
          <dt>Currency:</dt>
          <dd>${new Intl.NumberFormat(this.locale, { style: 'currency', currency: 'CAD' }).format(1234.56)}</dd>
        </dl>
      </section>
    </div>
  `;
}
```

### 4.4 GC Design System Tab (20 min)
```typescript
renderDesignSystemTab() {
  return html`
    <div class="design-tab">
      <h3>GC Design System</h3>
      
      <!-- Active Theme -->
      <section>
        <h4>Active Theme</h4>
        <p><eva-badge>${this.theme}</eva-badge></p>
      </section>
      
      <!-- Color Palette -->
      <section>
        <h4>Color Palette</h4>
        <div class="color-swatches">
          ${this.renderColorSwatch('Primary', '--eva-color-primary')}
          ${this.renderColorSwatch('Secondary', '--eva-color-secondary')}
          ${this.renderColorSwatch('Success', '--eva-feedback-success')}
          ${this.renderColorSwatch('Warning', '--eva-feedback-warning')}
          ${this.renderColorSwatch('Error', '--eva-feedback-error')}
        </div>
      </section>
      
      <!-- Typography Scale -->
      <section>
        <h4>Typography</h4>
        <dl>
          <dt>Heading Font:</dt>
          <dd style="font-family: var(--eva-font-family-heading)">
            ${getComputedStyle(document.documentElement).getPropertyValue('--eva-font-family-heading')}
          </dd>
          
          <dt>Body Font:</dt>
          <dd style="font-family: var(--eva-font-family-body)">
            ${getComputedStyle(document.documentElement).getPropertyValue('--eva-font-family-body')}
          </dd>
        </dl>
      </section>
      
      <!-- Spacing Scale -->
      <section>
        <h4>Spacing Scale</h4>
        <div class="spacing-demo">
          ${[1, 2, 3, 4, 5].map(n => html`
            <div style="margin-bottom: var(--eva-space-${n})">
              Space ${n}: ${getComputedStyle(document.documentElement).getPropertyValue(`--eva-space-${n}`)}
            </div>
          `)}
        </div>
      </section>
    </div>
  `;
}
```

### 4.5 Code Snippet Tab (20 min)
```typescript
renderCodeTab() {
  const currentPage = this.getCurrentPageCode();
  
  return html`
    <div class="code-tab">
      <h3>Code Snippet</h3>
      
      <!-- Framework Selector -->
      <eva-tabs @tab-change=${this.handleFrameworkChange}>
        <eva-tab id="html">HTML</eva-tab>
        <eva-tab id="react">React</eva-tab>
        <eva-tab id="vue">Vue</eva-tab>
        <eva-tab id="angular">Angular</eva-tab>
        <eva-tab id="svelte">Svelte</eva-tab>
      </eva-tabs>
      
      <!-- Code Display -->
      <lab-code-viewer 
        .code=${currentPage}
        .language=${this.selectedFramework}
      ></lab-code-viewer>
      
      <!-- Copy Button -->
      <eva-button @click=${this.copyCode} variant="secondary">
        📋 Copy Code
      </eva-button>
    </div>
  `;
}
```

**Syntax Highlighting Component**:
```typescript
// src/components/code-viewer.ts
import Prism from 'prismjs';

@customElement('lab-code-viewer')
export class LabCodeViewer extends LitElement {
  @property() code = '';
  @property() language = 'html';

  render() {
    const highlighted = Prism.highlight(
      this.code,
      Prism.languages[this.language],
      this.language
    );
    
    return html`
      <pre><code class="language-${this.language}" .innerHTML=${highlighted}></code></pre>
    `;
  }
}
```

---

## Phase 5: DevKit (1 hour)

### 5.1 Quickstart Pages (30 min)

**React Quickstart**:
```typescript
// src/pages/devkit-quickstart.ts
renderReactQuickstart() {
  return html`
    <eva-container>
      <h1>React Quickstart</h1>
      
      <section>
        <h2>Installation</h2>
        <lab-code-viewer language="bash" .code=${`
npm install @eva-sovereign/ui-react
        `}></lab-code-viewer>
      </section>
      
      <section>
        <h2>Basic Usage</h2>
        <lab-code-viewer language="tsx" .code=${`
import { EvaGCHeader, EvaButton } from '@eva-sovereign/ui-react';

function App() {
  return (
    <>
      <EvaGCHeader />
      <main>
        <EvaButton variant="primary">Click Me</EvaButton>
      </main>
    </>
  );
}
        `}></lab-code-viewer>
      </section>
      
      <section>
        <h2>Theming</h2>
        <lab-code-viewer language="tsx" .code=${`
import { themeEngine } from '@eva-sovereign/ui-react';

useEffect(() => {
  themeEngine.applyTheme('canada-gc-light');
}, []);
        `}></lab-code-viewer>
      </section>
    </eva-container>
  `;
}
```

**Vue Quickstart** (similar structure):
```typescript
renderVueQuickstart() {
  return html`...Vue-specific examples...`;
}
```

**Angular Quickstart**:
```typescript
renderAngularQuickstart() {
  return html`...Angular-specific examples...`;
}
```

**Svelte Quickstart**:
```typescript
renderSvelteQuickstart() {
  return html`...Svelte-specific examples...`;
}
```

### 5.2 Playground Page (20 min)
```typescript
// Interactive playground with live preview
renderPlayground() {
  return html`
    <div class="playground">
      <div class="editor">
        <h2>Code Editor</h2>
        <textarea 
          .value=${this.playgroundCode}
          @input=${this.handleCodeChange}
          aria-label="Code editor"
        ></textarea>
      </div>
      
      <div class="preview">
        <h2>Live Preview</h2>
        <iframe 
          .srcdoc=${this.generatePreviewHTML()}
          sandbox="allow-scripts"
          title="Preview"
        ></iframe>
      </div>
    </div>
  `;
}
```

### 5.3 Migration Guides (10 min)
```typescript
renderMigrationGuides() {
  return html`
    <eva-container>
      <h1>Migration Guides</h1>
      
      <eva-accordion>
        <eva-accordion-item title="From WET-BOEW">
          <p>Migrating from Web Experience Toolkit...</p>
          ${this.renderWETMigration()}
        </eva-accordion-item>
        
        <eva-accordion-item title="From GCWeb">
          <p>Migrating from GCWeb theme...</p>
          ${this.renderGCWebMigration()}
        </eva-accordion-item>
        
        <eva-accordion-item title="From Custom Solution">
          <p>Integrating EVA components into existing app...</p>
          ${this.renderCustomMigration()}
        </eva-accordion-item>
      </eva-accordion>
    </eva-container>
  `;
}
```

---

## Phase 6: Deployment (30 min)

### 6.1 Update Package.json (5 min)
```json
{
  "scripts": {
    "dev:lab": "vite apps/sovereign-ui-lab",
    "build:lab": "vite build apps/sovereign-ui-lab --outDir ../../dist/lab --base /EVA-Sovereign-UI/lab/",
    "build:all": "npm run build:showcase && npm run build:storybook && npm run build:lab"
  }
}
```

### 6.2 Create Vite Config (5 min)
```typescript
// apps/sovereign-ui-lab/vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/EVA-Sovereign-UI/lab/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../../packages/eva-sovereign-ui-wc/src'),
    },
  },
  build: {
    outDir: '../../dist/lab',
    emptyOutDir: true,
  },
});
```

### 6.3 Update GitHub Workflow (10 min)
```yaml
# .github/workflows/deploy-pages.yml
- name: Build Lab
  run: npm run build:lab

- name: Copy Lab to dist
  run: |
    mkdir -p dist/lab
    cp -r apps/sovereign-ui-lab/dist/* dist/lab/
```

### 6.4 Update Landing Page (5 min)
```html
<!-- public-index.html -->
<eva-card href="/lab/">
  <h2>🔬 Sovereign UI Lab</h2>
  <p>Interactive reference implementation with scenarios, inspector, and DevKit</p>
</eva-card>
```

### 6.5 Final Testing (5 min)
- ✅ All routes load
- ✅ Inspector panel works
- ✅ Theme switching works
- ✅ Language switching works
- ✅ Keyboard navigation works
- ✅ No console errors

---

## Data Files

### Scenario Metadata
```typescript
// src/data/scenarios.ts
export const scenarios = [
  {
    id: 'scenario-1',
    title: {
      'en-CA': 'GC AI Assistant',
      'fr-CA': 'Assistant IA du GC',
    },
    description: {
      'en-CA': 'Conversational AI for government services',
      'fr-CA': 'IA conversationnelle pour les services gouvernementaux',
    },
    route: '/scenario-1',
    components: ['eva-chat-panel', 'eva-chat-message', 'eva-checkbox'],
    a11yFeatures: ['ARIA live regions', 'Keyboard navigation', 'Screen reader support'],
  },
  // ... scenario-2, scenario-3
];
```

### Framework Examples
```typescript
// src/data/framework-examples.ts
export const frameworkExamples = {
  react: {
    button: `
import { EvaButton } from '@eva-sovereign/ui-react';

<EvaButton variant="primary" onClick={handleClick}>
  Click Me
</EvaButton>
    `,
  },
  vue: {
    button: `
<template>
  <eva-button variant="primary" @click="handleClick">
    Click Me
  </eva-button>
</template>

<script setup>
import { defineCustomElements } from '@eva-sovereign/ui-wc/loader';
defineCustomElements();
</script>
    `,
  },
  // ... angular, svelte
};
```

### Lab Translations
```json
// src/data/translations/en-CA.json
{
  "lab": {
    "title": "EVA Sovereign UI Lab",
    "tagline": "Comprehensive reference implementation",
    "inspector": {
      "a11y": "Accessibility",
      "i18n": "Internationalization",
      "design": "Design System",
      "code": "Code Snippets"
    },
    "scenarios": {
      "scenario1": "GC AI Assistant",
      "scenario2": "Complex Form",
      "scenario3": "Five Eyes Themes"
    }
  }
}
```

---

## Success Checklist

### Functional
- [ ] All routes load without errors
- [ ] Theme switching works across all Five Eyes themes
- [ ] Language switching works (EN/FR minimum)
- [ ] Inspector panel displays real-time info
- [ ] All 3 scenarios are fully functional
- [ ] DevKit has working examples for React, Vue, Angular, Svelte
- [ ] Playground allows live code editing

### Accessibility
- [ ] WCAG 2.2 AA compliant
- [ ] Keyboard navigation works (Tab, Enter, Escape, Arrows)
- [ ] Focus indicators visible
- [ ] Screen reader announcements work
- [ ] Color contrast passes (4.5:1 for text, 3:1 for UI)
- [ ] Reduced motion respected
- [ ] High contrast mode works

### Quality
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] Passes axe DevTools audit
- [ ] Responsive on mobile/tablet/desktop
- [ ] Loading time < 3 seconds
- [ ] Works in Chrome, Firefox, Safari, Edge

### Documentation
- [ ] README with setup instructions
- [ ] Code comments explaining complex logic
- [ ] Inspector panel has helpful tooltips
- [ ] DevKit has copy-paste ready examples

---

## Rollout Strategy

### Day 1 (Phase 1-2): Foundation + Home
1. Create app structure
2. Set up routing
3. Wire theme + i18n
4. Build home page with controls

**Milestone**: Can navigate to home, switch theme/language

### Day 2 (Phase 3): Scenarios
1. Build Scenario 1 (GC AI Assistant)
2. Build Scenario 2 (Complex Form)
3. Build Scenario 3 (Five Eyes Themes)

**Milestone**: All scenarios functional

### Day 3 (Phase 4-5): Inspector + DevKit
1. Build inspector panel layout
2. Implement all 4 tabs
3. Create DevKit quickstart pages
4. Add playground and migration guides

**Milestone**: Full lab complete

### Day 4 (Phase 6): Deploy
1. Update workflows
2. Test deployment
3. Update documentation

**Milestone**: Live at `/lab/`

---

## Risk Mitigation

### Technical Risks
1. **Router Issues**: Use well-tested Vaadin Router, fallback to hash-based
2. **Bundle Size**: Code splitting, lazy loading, tree shaking
3. **Browser Compatibility**: Polyfills for older browsers
4. **Performance**: Lighthouse audits, optimize images, minimize JS

### Scope Risks
1. **Feature Creep**: Stick to 3 scenarios, 4 inspector tabs, core DevKit
2. **Time Overruns**: Timebox each phase, cut non-essential features
3. **Perfect vs Done**: Aim for 80% polish, iterate after launch

---

**Document Status**: ✅ Complete
**Ready to Build**: Yes
**Next Action**: Create app structure (Phase 1.1)
