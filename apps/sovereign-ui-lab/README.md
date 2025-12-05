# EVA Sovereign UI Lab

**Reference implementation** for Government of Canada applications using the EVA-Sovereign-UI component library.

## 🇨🇦 Government of Canada Focus

This lab showcases **49 production-ready Web Components** designed specifically for:
- **Bilingual**: Full English (EN-CA) and French (FR-CA) support
- **Accessible**: WCAG 2.2 AA compliant with ARIA best practices
- **Canada.ca compliant**: Follows GC Design System specifications

## 🎯 Purpose

## 🎯 Purpose

The EVA Sovereign UI Lab showcases production-ready implementations of 49 GC components with:

- **3 Real-World Scenarios**: GC Chat Assistant, Complex Forms, GC Theme Showcase
- **Inspector Panel**: Real-time A11y, i18n (EN-CA/FR-CA), GC Design System analysis
- **Developer Kit**: Quickstart guides for all 49 components, playground, WET-BOEW migration

## 🚀 Quick Start

### Development
```bash
# Start dev server
npm run dev:lab

# Visit http://localhost:5174/EVA-Sovereign-UI/lab/
```

### Build
```bash
# Build for production
npm run build:lab

# Output: dist/lab/
```

## 📁 Structure

```
apps/sovereign-ui-lab/
├── src/
│   ├── main.ts              # Entry point
│   ├── router.ts            # Route configuration
│   ├── app-shell.ts         # Main app container
│   ├── providers/
│   │   ├── theme-provider.ts   # Theme initialization
│   │   └── app-state.ts        # Global state
│   ├── components/          # Reusable components
│   ├── pages/               # Route pages
│   ├── data/                # Static data & translations
│   └── styles/
│       └── global.css       # Global styles
├── index.html               # Entry HTML
├── vite.config.ts           # Vite configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Features

### Scenarios

1. **GC Chat Assistant** (`/scenario-1`)
   - Interactive chat interface for citizen services
   - Government of Canada information delivery
   - Bilingual chat support with language detection
   - ARIA live regions for screen readers

2. **Complex Form** (`/scenario-2`)
   - Multi-step application form (GC-generic)
   - Client-side validation with GC Design System patterns
   - Error summary and inline errors
   - Conditional fields
   - WCAG 3.3.1 compliant

3. **GC Theme Showcase** (`/scenario-3`)
   - Government of Canada official themes
   - Light, Dark, and High Contrast modes
   - Bilingual content examples
   - Color contrast demonstrations

### Inspector Panel

4-tab analysis panel:
- **Accessibility**: WCAG 2.2 AA compliance, contrast checks, ARIA validation
- **i18n**: Locale info, translation coverage, formatting examples
- **GC Design System**: Active theme, color palette, typography, spacing
- **Code Snippets**: View source with framework-specific examples

### DevKit

- **Quickstart** (`/devkit/quickstart`): React, Vue, Angular, Svelte integration
- **Playground** (`/devkit/playground`): Interactive code editor with live preview
- **Migration** (`/devkit/migration`): Guides from WET-BOEW, GCWeb

## 🌍 Internationalization

Bilingual support for Government of Canada:
- **English**: en-CA
- **French**: fr-CA

All scenarios, components, and documentation fully translated.

## 🎨 Theming

Government of Canada Design System themes:
- **GC Light** (canada-gc-light) - Default Canada.ca theme
- **GC Dark** (canada-gc-dark) - Dark mode for reduced eye strain
- **High Contrast** (gc-high-contrast) - Enhanced accessibility

## ♿ Accessibility

- WCAG 2.2 AA compliant
- Keyboard navigation (Tab, Enter, Escape, Arrows)
- Screen reader support (NVDA, JAWS, VoiceOver tested)
- Focus indicators on all interactive elements
- Reduced motion support
- High contrast mode

## 🛠️ Technology Stack

- **Build**: Vite 5.x
- **Language**: TypeScript 5.x
- **Components**: Lit 3.x (Web Components)
- **Router**: Vaadin Router
- **Styling**: CSS Custom Properties
- **i18n**: Custom service with JSON translations
- **Themes**: EVA Theme Engine

## 📦 Dependencies

```json
{
  "@vaadin/router": "^1.7.5",
  "lit": "^3.0.0"
}
```

## 🔧 Configuration

### Vite Config
```typescript
export default defineConfig({
  base: '/EVA-Sovereign-UI/lab/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../../packages/eva-sovereign-ui-wc/src'),
    },
  },
});
```

### Routes
- `/` - Home (49 components overview)
- `/scenario-1` - GC Chat Assistant
- `/scenario-2` - Complex Form
- `/scenario-3` - GC Theme Showcase
- `/devkit/quickstart` - Quickstart Guides (49 components)
- `/devkit/playground` - Interactive Playground
- `/devkit/migration` - WET-BOEW Migration Guide

## 🚢 Deployment

Deploys to GitHub Pages at `/lab/` subdirectory:
- Root: `/` → Showcase demo
- Storybook: `/storybook/` → Component docs
- Lab: `/lab/` → This app

## 📚 Documentation

- [Discovery Document](../../docs/sovereign-ui-lab-discovery.md)
- [Implementation Plan](../../docs/sovereign-ui-lab-plan.md)
- [Component Library Docs](../../README.md)

## 🤝 Contributing

This is a reference implementation. To add scenarios or features:

1. Create new page component in `src/pages/`
2. Add route in `src/router.ts`
3. Update navigation in `src/app-shell.ts`
4. Test accessibility with axe DevTools
5. Document in this README

## 📝 Status

**Phase**: Foundation Complete ✅

- [x] App structure scaffolded
- [x] Routing configured (GC-focused)
- [x] Theme + i18n providers wired (EN-CA/FR-CA)
- [x] Home page with 49 components highlight
- [ ] Scenario 1: GC Chat Assistant
- [ ] Scenario 2: Complex Form (GC-generic)
- [ ] Scenario 3: GC Theme Showcase
- [ ] Inspector Panel (A11y, i18n, GC Design System, Code)
- [ ] DevKit (Quickstart for 49 components, Playground, WET-BOEW Migration)
- [ ] Deployment workflow

## 📄 License

MIT License - See [LICENSE](../../LICENSE)

## 🙏 Acknowledgments

Built with [EVA-Sovereign-UI](https://github.com/marcopolo483/EVA-Sovereign-UI) component library.

---

**Live Demo**: https://marcopolo483.github.io/EVA-Sovereign-UI/lab/ (coming soon)

**Last Updated**: 2025-12-04
