# EVA-Sovereign-UI - Definition of Done

**Package:** `@eva-suite/sovereign` (free, open-source)  
**Repository:** `EVA-Sovereign-UI`  
**Goal:** 100% reusable by EVA Suite - no duplicate work

---

## ✅ **1. Accessibility (100% WCAG 2.2 AAA)**
- 12 components: DialogModal, AriaLiveRegion, RovingTabIndex, Tooltip, LoadingSpinner, ProgressBar, TabPanel, Accordion, Carousel, DataTable, TreeView, ComboBox
- 7:1 contrast ratio (AAA)
- Keyboard navigation (Tab, Enter, Escape, Arrows)
- Screen reader support (ARIA labels, live regions)
- Focus indicators (3px outline, 3:1 contrast)
- **80% test coverage** with axe-core audits

---

## ✅ **2. Internationalization (100% i18n)**
- 8 components: LanguageToggle, TranslationProvider, LocaleSelector, DateFormatter, NumberFormatter, CurrencyFormatter, MessageFormatter, RTL support
- EN-CA / FR-CA official terminology
- Official Languages Act compliance
- Dynamic language switching
- **80% test coverage** for language switching

---

## ✅ **3. GC Design System (100%)**
- 15 components: GCHeader (wordmark + flag), GCFooter, Button (6 variants: supertask/primary/secondary/danger/link/contextual-signin), Breadcrumbs, FormField, ErrorSummary, Alert, Card, Table, Badge, Container, SkipLink, NavMenu, Select, Checkbox/Radio
- Official Canada.ca design tokens
- Lato + Noto Sans fonts
- Official color palette (#284162, #26374A, #A62A1E)
- 65 character line length
- 8px spacing grid

---

## ✅ **4. Five Eyes Support (100%)**
- 10 components: Canada Header/Footer, USA Header/Footer, UK Header/Footer, Australia Header/Footer, New Zealand Header/Footer
- Country-specific branding (flags, wordmarks, legal footers)
- Profile switcher in demo (🇨🇦🇺🇸🇬🇧🇦🇺🇳🇿)

---

## ✅ **5. Working Demo**
- **Pure HTML/JS** (no React/Vue/Angular knowledge needed)
- Usage: `<script src="https://unpkg.com/@eva-suite/sovereign-wc"></script>`
- Features shown:
  - Accessibility: keyboard nav, screen reader, focus indicators
  - i18n: EN ↔ FR language toggle
  - GC Design: official header/footer, buttons, forms
  - 5 Eyes: country switcher (🇨🇦→🇺🇸→🇬🇧→🇦🇺→🇳🇿)
- **Reference:** Use Spark prototype (`eva-sovereign-ui-des`) as starting point

---

## ✅ **6. Multi-Platform Support**
- **Web Components** (works everywhere): `<eva-button>Click</eva-button>`
- **React**: `import { Button } from '@eva-suite/sovereign-react'`
- **Vue**: `import { Button } from '@eva-suite/sovereign-vue'`
- **Angular**: `import { ButtonComponent } from '@eva-suite/sovereign-angular'`
- **Svelte**: `import { Button } from '@eva-suite/sovereign-svelte'`

All frameworks just wrap the same Web Component - no duplicate logic.

---

## ✅ **7. Free & Open Source**
- Published to npm (free)
- GitHub Pages documentation (free)
- MIT License
- CDN available: `<script src="https://unpkg.com/@eva-suite/sovereign-wc"></script>`

---

## ✅ **8. EVA Suite Integration (100% Reuse)**
**Replace existing code:**
- `eva-i11y` → `@eva-suite/sovereign` (accessibility components)
- `eva-i18n` → `@eva-suite/sovereign` (i18n components)
- `eva-ui` → `@eva-suite/sovereign` (UI components)

**Update projects:**
- `eva-da-2`: Import from `@eva-suite/sovereign-react`
- `eva-admin`: Import from `@eva-suite/sovereign-react`
- `eva-chat`: Import from `@eva-suite/sovereign-react`

**Result:** Zero duplicate work. Demo = EVA Suite UI.

---

## Total Scope

**53 Components:**
- 12 Accessibility components
- 8 Internationalization components
- 15 GC Design System components
- 10 Five Eyes profile components
- 8 WYSIWYG components

**Deliverables:**
- packages/web-components/ (Layer 1 - primary)
- packages/react/ (Layer 2 wrapper)
- packages/vue/ (Layer 2 wrapper)
- packages/angular/ (Layer 2 wrapper)
- packages/svelte/ (Layer 2 wrapper)
- packages/core/ (design tokens, utilities)
- apps/demo/ (pure HTML/JS demo)
- Documentation (Storybook + GitHub Pages)
- Tests (80%+ coverage, axe-core audits)
- npm packages (published, free)
