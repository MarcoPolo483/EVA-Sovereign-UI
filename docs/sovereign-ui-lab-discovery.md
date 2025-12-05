# EVA Sovereign UI Lab - Discovery Document

## Project Overview
Building a comprehensive **reference implementation** showcasing the EVA-Sovereign-UI component library with:
- Real-world scenarios (GC AI Assistant, Complex Forms, 5-Eyes themes)
- Interactive inspector panel (A11y, i18n, GC Design System, Code Snippets)
- Developer kit with quickstart guides for all frameworks
- Full bilingual EN/FR support with live language switching
- Theme switching (Canada, USA, UK, Australia, NZ - light/dark/high-contrast)
- Accessibility controls and WCAG 2.2 AA compliance inspection

## Repository Structure Analysis

### Component Library
**Location**: `packages/eva-sovereign-ui-wc/src/components/`

**Categories** (88 total components):
- **ACCESSIBILITY** (1): eva-skip-link
- **AGENCY** (1): eva-program-card
- **CHAT** (2): eva-chat-message, eva-chat-panel
- **GC-COMPONENTS** (16): accordion, alert, background-banner, breadcrumbs, date-picker, field-flow, filter, gallery, menu, multimedia-player, provisional-alert, report-problem, share-widget, step-indicator, well
- **GC-DESIGN** (4): eva-gc-button, eva-gc-footer, eva-gc-header, eva-gc-language-switcher
- **GC-PATTERNS** (6): carousel, chart, data-table, file-upload, rich-text-editor, timeline
- **GC-TEMPLATES** (14): about-institution, basic-page, campaign-page, contact-page, gc-page, generic-page, institutional-profile, landing-page, laws-regulations, news-page, organization-profile, service-initiation, theme-topic
- **I18N** (1): eva-language-switcher
- **LAYOUT** (3): eva-container, eva-hero-banner, eva-page-shell
- **UI** (40): eva-accordion, eva-alert, eva-avatar, eva-badge, eva-breadcrumb, eva-button, eva-card, eva-carousel, eva-checkbox, eva-chip, eva-data-table, eva-dialog, eva-divider, eva-dropdown, eva-file-upload, eva-icon, eva-input, eva-link, eva-list, eva-loader, eva-modal, eva-notification, eva-pagination, eva-progress, eva-radio, eva-search, eva-select, eva-sidebar, eva-skeleton, eva-slider, eva-spinner, eva-stepper, eva-switch, eva-tabs, eva-tag, eva-textarea, eva-toast, eva-toggle, eva-tooltip, eva-tree

### Design System Tokens
**Location**: `packages/eva-sovereign-ui-wc/src/tokens/`

**Available**:
- `base-tokens.ts` - Primitive values (colors, spacing, typography scales)
- `semantic-tokens.ts` - Purpose-driven tokens (text, background, border)
- `component-tokens.ts` - Component-specific tokens (button, input, card)
- `colors.ts` - GC Design System color palette
- `typography.ts` - Font families, sizes, weights (Lato, Noto Sans)
- `spacing.ts` - Spacing scale (4px base with multiples)
- `shadows.ts` - Elevation and focus outlines
- `animations.ts` - Transitions and timing
- `breakpoints.ts` - Responsive breakpoints
- `sovereign-profiles.ts` - Five Eyes country profiles

**CSS Variables Pattern**:
```css
--eva-color-primary: oklch(45% 0.15 265);
--eva-space-1: 4px;
--eva-font-heading: "Lato", sans-serif;
```

### Theme System
**Location**: `packages/eva-sovereign-ui-wc/src/themes/`

**Files**:
- `theme-engine.ts` - Runtime theme management with CSS variable generation
- `five-eyes-themes.ts` - Sovereign themes (Canada, USA, UK, Australia, NZ)
- `theme-builder.ts` - Interactive theme customization component

**Available Themes**:
```typescript
canadaLightTheme, canadaDarkTheme
usaLightTheme, usaDarkTheme
ukLightTheme, ukDarkTheme
australiaLightTheme, australiaDarkTheme
newZealandLightTheme, newZealandDarkTheme
gcHighContrastTheme
```

**Usage**:
```typescript
import { themeEngine } from '@/themes';
themeEngine.applyTheme('canada-gc-light');
```

### i18n Infrastructure
**Location**: `packages/eva-sovereign-ui-wc/src/i18n/`

**Files**:
- `i18n-service.ts` - Translation engine with nested key support
- `locales/` - Translation JSON files

**Implementation**:
```typescript
import { i18n } from '@/i18n/i18n-service';

// Load locale
await i18n.loadLocale('en-CA');
await i18n.setLocale('en-CA');

// Translate with nested keys
const text = i18n.t('hero.title');
const paramText = i18n.t('hello', { name: 'Marco' }); // "Hello, {name}"

// Subscribe to changes
i18n.subscribe((locale) => {
  console.log('Locale changed:', locale);
});
```

**Supported Locales**:
- **Canada**: en-CA, fr-CA
- **USA**: en-US, es-US
- **UK**: en-GB, cy-GB (Welsh)
- **Australia**: en-AU
- **New Zealand**: en-NZ, mi-NZ (Te Reo Māori)

### Accessibility Features
**Location**: `packages/eva-sovereign-ui-wc/src/components/accessibility/`

**Available Components**:
- `eva-skip-link.ts` - Keyboard navigation bypass

**Patterns in Use**:
- Semantic HTML5 landmarks (`<header>`, `<main>`, `<footer>`)
- ARIA attributes: `role`, `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-live`
- Keyboard navigation support (Tab, Enter, Escape, Arrow keys)
- Focus management and visible focus indicators
- Screen reader support with descriptive labels
- WCAG 2.2 AA compliance (4.5:1 contrast for text, 3:1 for large text/UI components)

**CSS Utilities**:
```css
.sr-only { /* Screen reader only */ }
@media (prefers-reduced-motion: reduce) { /* Respect user preferences */ }
@media (prefers-contrast: high) { /* High contrast mode */ }
```

### Existing Demo Apps
**Location**: `apps/`

**Current**:
- `showcase-demo/` - Professional My Service Canada Account demo
  - Full bilingual EN/FR
  - Stats dashboard, service cards, contact form
  - Uses 8 core components
  - Deployed to root URL

- `storybook/` - Component documentation (88 components)
  - Deployed to `/storybook/`

**Removed** (broken/fake):
- `dev-kit-demo/` - Removed (broken imports)
- `agency-demo/` - Removed (Five Eyes content, not Canada-only)
- `performance-dashboard/` - Removed (fake data)

## Technical Stack Assessment

### Build System
- **Vite 5.x** - Fast build tool with HMR
- **TypeScript 5.x** - Type safety
- **Lit 3.x** - Web Components framework
- **Storybook 8.x** - Component documentation

### Component Architecture
- **Web Components** (Custom Elements v1)
- **Shadow DOM** for style encapsulation
- **Reactive properties** with Lit decorators
- **CSS custom properties** for theming
- **Event-driven** communication

### Routing Needs
No router currently in place. Options:
1. **Vanilla JS routing** - Hash-based (`#/scenario-1`)
2. **Vaadin Router** - Lightweight, WC-friendly
3. **Page.js** - Simple client-side router
4. **Custom router** - Minimal implementation

**Recommendation**: Use **Vaadin Router** for clean URLs and WC integration.

## Core Components for Lab

### For Scenarios (High Priority)
1. **GC Design**:
   - `eva-gc-header` - Header with logo, nav
   - `eva-gc-footer` - Footer with links
   - `eva-gc-button` - Primary/secondary buttons
   - `eva-gc-language-switcher` - Bilingual toggle

2. **Chat** (Scenario 1):
   - `eva-chat-panel` - Chat interface
   - `eva-chat-message` - Message bubbles

3. **Forms** (Scenario 2):
   - `eva-input` - Text inputs
   - `eva-select` - Dropdowns
   - `eva-checkbox` - Checkboxes
   - `eva-radio` - Radio buttons
   - `eva-textarea` - Multi-line text
   - `eva-stepper` - Multi-step progress
   - `eva-alert` - Error messages

4. **Layout**:
   - `eva-container` - Content wrapper
   - `eva-page-shell` - Page structure
   - `eva-card` - Card containers

5. **UI**:
   - `eva-badge` - Status indicators
   - `eva-tabs` - Tab navigation
   - `eva-accordion` - Collapsible sections
   - `eva-loader` - Loading states
   - `eva-tooltip` - Contextual help

### For Inspector Panel
- Need custom panel implementation
- Use `eva-tabs` for switching between views
- Use `eva-badge` for issue counts
- Use `eva-accordion` for grouped info

### For DevKit
- Static pages with code examples
- Use `eva-tabs` for framework switching
- Syntax highlighting with Prism.js or highlight.js

## Architecture Decisions

### App Structure
```
apps/sovereign-ui-lab/
├── index.html              # Entry point
├── src/
│   ├── main.ts            # App initialization
│   ├── router.ts          # Route configuration
│   ├── providers/
│   │   ├── theme-provider.ts    # Theme context
│   │   └── i18n-provider.ts     # i18n context
│   ├── components/
│   │   ├── app-shell.ts         # Main app shell
│   │   ├── inspector-panel.ts   # Side inspector
│   │   └── code-snippet.ts      # Syntax highlighted code
│   ├── pages/
│   │   ├── home.ts             # Landing with controls
│   │   ├── scenario-1.ts       # GC AI Assistant
│   │   ├── scenario-2.ts       # Complex Form
│   │   ├── scenario-3.ts       # 5-Eyes UI
│   │   ├── devkit-quickstart.ts
│   │   ├── devkit-playground.ts
│   │   └── devkit-migration.ts
│   ├── data/
│   │   ├── scenarios.ts        # Scenario metadata
│   │   └── framework-examples.ts # Code examples
│   └── styles/
│       └── global.css          # Global styles
├── vite.config.ts         # Build configuration
└── package.json           # Dependencies
```

### State Management
**Approach**: Lightweight reactive state with Lit signals or simple pub/sub

**State to track**:
- Current locale (en-CA, fr-CA, etc.)
- Current theme (canada-light, usa-dark, etc.)
- Accessibility settings (reduced motion, high contrast, screen reader mode)
- Inspector panel visibility
- Current route/scenario

**Implementation**:
```typescript
// providers/app-state.ts
export class AppState {
  locale: string = 'en-CA';
  theme: string = 'canada-gc-light';
  inspectorOpen: boolean = true;
  a11yMode: 'default' | 'high-contrast' | 'screen-reader' = 'default';
  reducedMotion: boolean = false;
}
```

### Inspector Panel Architecture
4 tabs with real-time analysis:

1. **Accessibility Tab**:
   - WCAG compliance checks
   - Color contrast analysis
   - Keyboard navigation audit
   - ARIA attribute validation
   - Focus order visualization

2. **i18n Tab**:
   - Current locale display
   - All available locales
   - Missing translation detection
   - Character encoding info
   - RTL support status

3. **GC Design System Tab**:
   - Active theme info
   - Color palette viewer
   - Typography scale
   - Spacing scale
   - Component token inspector

4. **Code Snippet Tab**:
   - View HTML structure
   - See component usage
   - Copy code examples
   - Framework-specific wrappers

### Deployment Strategy
**GitHub Pages** with subdirectory:
- Root: `/` - Showcase demo (current)
- Storybook: `/storybook/` - Component docs (current)
- Lab: `/lab/` - Sovereign UI Lab (new)

**Build Script**:
```json
{
  "build:lab": "vite build apps/sovereign-ui-lab --outDir ../../dist/lab --base /EVA-Sovereign-UI/lab/",
  "build:all": "npm run build:showcase && npm run build:storybook && npm run build:lab"
}
```

## Performance Considerations

### Code Splitting
- Lazy load scenarios (load on route navigation)
- Lazy load inspector tabs (load on first view)
- Lazy load syntax highlighter (only for code tab)

### Bundle Size
- Import only needed components
- Use dynamic imports for routes
- Minify and compress assets

### Loading Strategy
```typescript
// Preload critical
await i18n.loadLocale('en-CA');
themeEngine.applyTheme('canada-gc-light');

// Lazy load scenarios
router.on('/scenario-1', async () => {
  const { Scenario1Page } = await import('./pages/scenario-1');
  // render
});
```

## Accessibility Requirements

### WCAG 2.2 AA Compliance
- ✅ **Keyboard Navigation**: All interactive elements accessible via Tab, Enter, Escape
- ✅ **Screen Reader Support**: Descriptive labels, live regions for dynamic content
- ✅ **Color Contrast**: 4.5:1 for text, 3:1 for large text/UI components
- ✅ **Focus Indicators**: Visible focus outlines on all interactive elements
- ✅ **Semantic HTML**: Proper landmarks and heading hierarchy
- ✅ **Alternative Text**: All images and icons with alt text or aria-label
- ✅ **Error Identification**: Clear error messages and inline validation
- ✅ **Resize Text**: Text readable at 200% zoom
- ✅ **Reduced Motion**: Respect prefers-reduced-motion
- ✅ **High Contrast**: Support prefers-contrast

### Inspector A11y Features
- Live WCAG violation detection
- Color contrast checker with pass/fail
- Keyboard trap detection
- Missing ARIA label alerts
- Focus order visualization

## Timeline Estimate

### Phase 1: Foundation (2 hours)
- ✅ Discovery document
- Create app structure
- Set up routing
- Wire theme + i18n providers

### Phase 2: Home Page (1 hour)
- Landing hero
- Language switcher
- Theme selector
- Accessibility controls
- Status widget

### Phase 3: Scenarios (2 hours)
- Scenario 1: GC AI Assistant (45 min)
- Scenario 2: Complex Form (45 min)
- Scenario 3: 5-Eyes Themes (30 min)

### Phase 4: Inspector Panel (1.5 hours)
- Panel layout with tabs
- A11y tab (30 min)
- i18n tab (20 min)
- GC Design System tab (20 min)
- Code Snippet tab (20 min)

### Phase 5: DevKit (1 hour)
- Quickstart pages (30 min)
- Playground page (20 min)
- Migration guides (10 min)

### Phase 6: Polish & Deploy (30 min)
- GitHub Pages workflow
- README updates
- Final testing

**Total Estimated Time**: ~8 hours (accounting for buffer)

## Success Criteria

✅ **Functional Requirements**:
- All 3 scenarios work with full bilingual support
- Theme switching works across all Five Eyes themes
- Inspector panel provides real-time analysis
- DevKit has working examples for React, Vue, Angular, Svelte
- Fully keyboard accessible

✅ **Quality Requirements**:
- WCAG 2.2 AA compliant
- No console errors
- Passes axe DevTools audit
- Responsive on mobile/tablet/desktop
- Loading time < 3 seconds

✅ **Documentation**:
- README with setup instructions
- Code comments explaining complex logic
- Inspector panel has helpful tooltips
- DevKit has copy-paste ready examples

## Next Steps

1. ✅ **Complete Discovery** (this document)
2. Create implementation plan document
3. Scaffold app structure
4. Build pages incrementally
5. Deploy and test

---

**Document Status**: ✅ Complete
**Last Updated**: 2025-12-04
**Author**: GitHub Copilot (with guidance from Marco)
