# EVA Sovereign UI

**Government of Canada Design System - Enterprise UI Library**

A comprehensive, multi-framework UI component library implementing the official Canada.ca Design System with WCAG AAA accessibility and full bilingual support (English/French).

## 🎯 Features

- ✅ **Official GC Design System** - Complete implementation of Canada.ca design patterns
- 🌐 **Bilingual** - English/French support with Official Languages Act compliance
- ♿ **WCAG AAA** - Enterprise-grade accessibility with 7:1 contrast ratios
- 🎨 **Multi-Framework** - Native bindings for React, Svelte 5, Vue 3, Angular 18+
- 📦 **Tree-shakeable** - Import only what you need
- 🔧 **TypeScript** - Full type safety across all frameworks
- 🎭 **Themeable** - GC-compliant color tokens with light/dark/high-contrast modes
- 📱 **Responsive** - Mobile-first design with official GC breakpoints

## 📚 Packages

| Package | Description | Framework |
|---------|-------------|-----------|
| `@eva-suite/sovereign-core` | Core design tokens, utilities, and styles | Framework-agnostic |
| `@eva-suite/sovereign-react` | React components and hooks | React 18+ |
| `@eva-suite/sovereign-svelte` | Svelte components with runes | Svelte 5+ |
| `@eva-suite/sovereign-vue` | Vue components and composables | Vue 3+ |
| `@eva-suite/sovereign-angular` | Angular components and directives | Angular 18+ |
| `@eva-suite/sovereign-assets` | Official GC visual assets (wordmark, flag) | Static files |

## 🚀 Quick Start

### React

```bash
npm install @eva-suite/sovereign-react @eva-suite/sovereign-core
```

```tsx
import { GCHeader, GCFooter, Button } from '@eva-suite/sovereign-react';
import '@eva-suite/sovereign-core/styles/gc-design-system.css';

function App() {
  return (
    <>
      <GCHeader 
        title="EVA Suite"
        subtitle="Enterprise Virtual Assistant for the Government of Canada"
      />
      <main id="main-content">
        <Button variant="primary">Get Started</Button>
      </main>
      <GCFooter />
    </>
  );
}
```

### Svelte 5

```bash
npm install @eva-suite/sovereign-svelte @eva-suite/sovereign-core
```

```svelte
<script>
  import { GCHeader, GCFooter, Button } from '@eva-suite/sovereign-svelte';
  import '@eva-suite/sovereign-core/styles/gc-design-system.css';
</script>

<GCHeader 
  title="EVA Suite"
  subtitle="Enterprise Virtual Assistant for the Government of Canada"
/>
<main id="main-content">
  <Button variant="primary">Get Started</Button>
</main>
<GCFooter />
```

## 🎨 Components

### Layout
- `GCHeader` - Official header with wordmark, flag, and language toggle
- `GCFooter` - Standard GC footer with required links
- `SkipLink` - Accessibility skip-to-content link
- `Container` - Max-width content container (65 characters line length)

### Buttons (6 Official Variants)
- `Button variant="supertask"` - Primary CTA for main task
- `Button variant="primary"` - Next/Submit actions
- `Button variant="secondary"` - Alternative actions
- `Button variant="danger"` - Destructive actions
- `Button variant="link"` - Low-priority actions
- `Button variant="contextual-signin"` - Top-right authentication

### Navigation
- `Breadcrumbs` - Hierarchical navigation trail
- `LanguageToggle` - EN ↔ FR language switcher
- `NavMenu` - Accessible navigation menu

### Forms
- `FormField` - Input with label, error, and help text
- `ErrorSummary` - Form-level error collection
- `Select` - Dropdown selection
- `Checkbox` / `Radio` - Choice inputs
- `DatePicker` - Accessible date selection

### Feedback
- `Alert` - Contextual alerts (success, warning, error, info)
- `Toast` - Non-blocking notifications
- `LoadingSpinner` - Loading indicator

### Data Display
- `Table` - Accessible data tables with sorting
- `Card` - Content container
- `Badge` - Status indicators

## 🌐 Internationalization

Built-in bilingual support with official GC terminology:

```tsx
import { I18nProvider, useTranslation } from '@eva-suite/sovereign-react';

function App() {
  return (
    <I18nProvider defaultLocale="en-CA">
      <MyComponent />
    </I18nProvider>
  );
}

function MyComponent() {
  const { t, locale, setLocale } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.welcome')}</h1>
      <p>{t('footer.copyright')}</p>
      {/* © His Majesty the King in Right of Canada */}
    </div>
  );
}
```

## ♿ Accessibility

All components meet WCAG 2.1 AAA standards:

- ✅ 7:1 contrast ratio for normal text
- ✅ 4.5:1 for large text (18pt+)
- ✅ Keyboard navigation (Tab, Enter, Escape, Arrows)
- ✅ Screen reader support (ARIA labels, landmarks, live regions)
- ✅ Focus indicators (3px outline with 3:1 contrast)
- ✅ Skip links for main content
- ✅ Responsive touch targets (44px minimum)

## 🎨 Design Tokens

```css
/* Typography */
--gc-font-heading: 'Lato', sans-serif;
--gc-font-body: 'Noto Sans', sans-serif;
--gc-font-size-h1: 41px;
--gc-font-size-body: 20px;

/* Colors */
--gc-color-text: #333;
--gc-color-link: #284162;
--gc-color-link-hover: #0535d2;
--gc-color-link-visited: #7834bc;
--gc-color-accent: #26374A;
--gc-color-error: #d3080c;
--gc-color-h1-bar: #A62A1E;

/* Spacing (8px grid) */
--gc-spacing-1: 8px;
--gc-spacing-2: 16px;
--gc-spacing-3: 24px;
--gc-spacing-4: 32px;
```

## 📖 Documentation

- [Component Catalog](./docs/components.md)
- [Design Tokens](./docs/design-tokens.md)
- [Accessibility Guide](./docs/accessibility.md)
- [i18n Guide](./docs/i18n.md)
- [Migration from eva-i11y/eva-i18n](./docs/migration.md)

## 🛠️ Development

```bash
# Install dependencies
pnpm install

# Run Storybook
pnpm storybook

# Build all packages
pnpm build

# Run tests
pnpm test

# Lint
pnpm lint
```

## 📦 Monorepo Structure

```
EVA-Sovereign-UI/
├── packages/
│   ├── core/           # Design tokens, styles, utilities
│   ├── react/          # React components
│   ├── svelte/         # Svelte 5 components
│   ├── vue/            # Vue 3 components
│   ├── angular/        # Angular 18+ components
│   └── assets/         # Official GC visual assets
├── docs/               # Documentation
├── .storybook/         # Storybook configuration
└── package.json        # Workspace root
```

## 📜 License

MIT

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md)

## 🔗 Related Links

- [Canada.ca Design System](https://design.canada.ca/)
- [GC Web Experience Toolkit (WET)](https://wet-boew.github.io/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Official Languages Act](https://laws-lois.justice.gc.ca/eng/acts/o-3.01/)

---

**Built for the Government of Canada by the EVA Suite Team**
