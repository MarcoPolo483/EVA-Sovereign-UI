# EVA-Sovereign-UI: Foundation Library for ALL EVA UI Products

**Feature Name**: EVA-Sovereign-UI Web Components  
**POD**: POD-X (Experience & UI)  
**Phase**: Phase 2 (Build/Code/Test) - FRESH START  
**Status**: 🚧 Ready to Build (December 7, 2025)  
**Owner**: Marco Presta + GitHub Copilot (SM)  
**Last Updated**: December 7, 2025

---

## 🎯 Vision

Build a **TOP NOTCH, 100% production-ready, enterprise & government-grade Web Components library** that serves as THE foundation for ALL EVA UI products. This is NOT a prototype or demo - this is a complete, deployable product that showcases EVA Suite quality to attract ALL Government of Canada departments and agencies.

**CORRECTED SCOPE** (December 7, 2025):
- ❌ **NOT Five Eyes** (removed from scope)
- ❌ **NOT ESDC-specific** (it's a federal agency, not the target)
- ✅ **Foundation library for ALL EVA UI products** (THE core library)

**Core Requirements**:
- **Standards-based**: Lit 3.x + TypeScript 5.7.2 + Custom Elements v1 + Shadow DOM
- **Framework-agnostic**: Core Web Components work in React, Vue, Angular, Svelte, plain HTML
- **GC Design System**: Complete implementation of https://design.canada.ca/ (mandatory elements, tokens, components)
- **Accessible**: WCAG 2.2 AAA compliance (exceeds Canada.ca 2.1 AA minimum)
- **Bilingual**: EN-CA/FR-CA by default (Official Languages Act), runtime switching, zero hardcoded literals
- **Production-ready**: 100% test coverage, 100/100 Lighthouse score, CI/CD pipelines, complete documentation

---

## 🎨 Design Assets & Visual Standards

**CRITICAL**: EVA-Sovereign-UI is a **professional-grade, enterprise & government product** with public visibility. ALL visual assets MUST meet these standards:

### Official GC Design System Assets
**Source**: https://design.canada.ca/  
**Download high-quality assets**:
- **Canada Wordmark SVG** (official Government of Canada signature)
- **Canadian Flag SVG** (official FIP symbol, no raster images)
- **GC Icons** (official government iconography, SVG format only)
- **Typography files**: Lato (700 weight for headings), Noto Sans (regular/bold for body)
- **Color specifications**: Official FIP red (#af3c43), link blue (#284162), all WCAG 2.2 AAA tested

**FORBIDDEN**:
- ❌ NO video game icons or consumer-grade graphics
- ❌ NO colorful/playful icons (this is government, not consumer software)
- ❌ NO raster images (PNG/JPG) where SVG exists
- ❌ NO unofficial fonts or color variants
- ❌ NO placeholder "lorem ipsum" or demo content in final product

### Professional Grade Standards
- **Icons**: Government-standard iconography only (official GC Design System icons)
- **Colors**: Exact GC Design System tokens (no approximations, no "close enough")
- **Typography**: Self-hosted official fonts (Lato, Noto Sans) - NO Google Fonts CDN
- **Graphics**: High-resolution SVG for all vector assets (wordmark, flag, icons)
- **Imagery**: If photos needed for demos, use official Government of Canada media library or high-quality Canadian landscape photos (professional grade only)

---

## 🔓 Licensing & Public Visibility

**EVA-Sovereign-UI Public Package**:
- **Visibility**: PUBLIC (npm registry, GitHub public repo)
- **License**: MIT or Apache 2.0 (allows GC departments/agencies to adopt freely)
- **Target Audience**: ALL Government of Canada departments and agencies
- **Usage**: Can be instantiated across entire EVA Suite wherever UI/UX support required
- **Dependencies**: Must be standalone, low-touch, minimal external dependencies
- **Authorization Model**: Self-service adoption (departments can use without Marco's approval)

**Design for Autonomous Operation**:
- Complete documentation (no gaps, no "contact us for details")
- Working examples for ALL 5 frameworks (React, Vue, Angular, Svelte, HTML)
- Troubleshooting guide covers ALL common issues
- CI/CD pipelines automated (no manual intervention)
- npm packages published and versioned (semantic versioning)
- CDN links available (jsDelivr, unpkg) for instant adoption

---

## 📦 Deliverables (11 Production-Ready Packages + Demos)

### npm Packages (6)
1. **@eva-sovereign/web-components** - Lit 3.x core library (11+ Web Components)
2. **@eva-sovereign/react** - React 18+ wrapper package
3. **@eva-sovereign/vue** - Vue 3+ wrapper package
4. **@eva-sovereign/angular** - Angular 17+ wrapper package
5. **@eva-sovereign/svelte** - Svelte 5+ wrapper package
6. **@eva-sovereign/cli** - CLI tool (`eva-sovereign init [framework]`)

### Production Demos (3)
7. **Canada.ca Chatbot Demo** - <eva-chat-panel> with 10-15 mock FAQs (passports, taxes, SIN, EI, immigration)
8. **GC Design Lab Demo** - Interactive playground for ALL components with theme editor, live prop editing, code export, a11y testing
9. **DevKit Demo** - 5-minute adoption guide with working framework templates and troubleshooting

### Documentation (2)
10. **Storybook** - Complete API documentation for all components
11. **Docs Site** - Separate documentation website with guides, tutorials, examples

---

## 📦 Repository Structure

**Location**: `C:\Users\marco\Documents\_AI Dev\EVA Suite\EVA-Sovereign-UI\` (CLEARED for fresh start)  
**GitHub**: https://github.com/MarcoPolo483/EVA-Sovereign-UI  
**Status**: Empty directory, ready for fresh implementation

**Planned Structure**:
```
EVA-Sovereign-UI/
├── packages/
│   ├── web-components/        # Lit 3.x core (11+ components)
│   ├── react/                 # React 18+ wrapper
│   ├── vue/                   # Vue 3+ wrapper
│   ├── angular/               # Angular 17+ wrapper
│   ├── svelte/                # Svelte 5+ wrapper
│   ├── cli/                   # CLI tool
│   └── design-tokens/         # GC Design System tokens
├── demos/
│   ├── chatbot/               # Canada.ca Chatbot Demo
│   ├── design-lab/            # GC Design Lab (theme editor)
│   └── devkit/                # DevKit (5-min adoption)
├── docs/                      # Separate docs site
├── storybook/                 # Storybook configuration
├── .eva-memory.json           # EVA Memory System
├── .eva-housekeeping.json     # Housekeeping config
└── .eva-cache/
    └── repo-tree.txt          # Directory mapping
```
├── FIVE-EYES-RESEARCH.md          ✅ Complete
└── (status/migration/testing docs)
```

---

## ✨ Core Capabilities

### 1. **GC Design System (Complete Implementation)**
**Reference**: https://design.canada.ca/

**Mandatory Elements** (every page must have):
- Global header with GC signature (wordmark + Canadian flag)
- Language toggle (English/Français)
- Breadcrumb trail
- Global footer (3 bands: contextual, main, sub-footer)
- Canada wordmark in footer (lower right)
- Date modified (YYYY-MM-DD format)

**Design Tokens**:
- **Typography**: Lato (headings), Noto Sans (body text)
- **Colors**: Link blue #284162, FIP red #af3c43, Error #d3080c, Accent #26374A, Text #333, White backgrounds
- **Spacing**: 8px grid system
- **Layout**: 65 character max line length

**Components**: Buttons (6 variants), Alerts (4 types), Forms (input/textarea/select/checkbox/radio/fieldset), Navigation (breadcrumbs, tabs, menus), Cards, Badges, Tables, 100+ CSS utility classes

### 2. **Web Components (11+ Components)**
Built with Lit 3.x, Custom Elements v1 API, Shadow DOM encapsulation:

1. **EVA Button** - 6 variants (supertask, primary, secondary, danger, link, contextual-signin)
2. **EVA Card** - Content containers with GC styling
3. **EVA Alert** - 4 types (success, info, warning, danger) + dismissible
4. **EVA Badge** - Status indicators
5. **EVA Input** - Text input with validation
6. **EVA Select** - Dropdown with search
7. **EVA Checkbox** - Single/multi-select
8. **EVA Radio** - Radio button groups
9. **EVA Modal** - Dialog with focus trap
10. **EVA Tabs** - Tabbed navigation
11. **EVA Chat Panel** - Signature component for chatbot UIs
6. EVA Select
7. EVA Checkbox
8. EVA Radio
9. EVA Modal
10. EVA Tabs
11. **EVA Chat Panel** (signature component)

### 3. **Framework Support (4 Wrapper Packages + Plain HTML)**
- **Core**: Web Components (Lit 3.x) - framework-agnostic, works everywhere
- **@eva-sovereign/react**: React 18+ wrapper with TypeScript types
- **@eva-sovereign/vue**: Vue 3+ wrapper with Composition API support
- **@eva-sovereign/angular**: Angular 17+ wrapper with standalone components
- **@eva-sovereign/svelte**: Svelte 5+ wrapper with runes support
- **Plain HTML**: Direct `<eva-button>` usage via CDN (jsDelivr, unpkg)

### 4. **Accessibility (WCAG 2.2 AAA)**
- **WCAG 2.2 AAA** compliance (exceeds Canada.ca 2.1 AA minimum)
- **7:1 contrast ratios** (AAA standard)
- **Keyboard navigation** (Tab, Enter, Esc, Arrow keys, no mouse required)
- **Screen reader support** (NVDA, JAWS, VoiceOver tested)
- **ARIA attributes** (roles, labels, live regions, descriptions)
- **Focus management** (visible 3px outline, focus trap in modals)
- **44px touch targets** (mobile-friendly)
- **High contrast mode** (Windows High Contrast tested)
- **Zero axe-core violations** (automated testing)

### 5. **Internationalization (i18n)**
- **Bilingual EN-CA/FR-CA** (Official Languages Act compliance)
- **Runtime language switching** (instant, no page reload)
- **Zero hardcoded literals** (all text externalized)
- **Intl API** for dates, numbers, currencies (locale-aware formatting)
- **Message catalogs** (JSON/YAML format)
- **Pluralization rules** (1 item vs 2+ items)
- **RTL support** (future-ready for Arabic, Hebrew)

### 6. **Testing (100% Coverage)**
- **Unit tests**: Vitest + Testing Library
- **Accessibility tests**: axe-core (zero violations)
- **Visual regression**: Storybook + Chromatic
- **E2E tests**: Playwright (optional)
- **Target**: 100% test coverage (no exceptions)

### 7. **Three Production Demos**

#### Demo 1: Canada.ca Chatbot
**Purpose**: Mock chatbot answering real canada.ca questions  
**Features**:
- `<eva-chat-panel>` component with GC Design System styling
- 10-15 hardcoded FAQs from canada.ca:
  - "How do I apply for a passport?"
  - "What are the tax filing deadlines?"
  - "How to get a SIN number?"
  - "EI benefits eligibility"
  - "Immigration visa types"
  - Plus 10 more real canada.ca questions
- Bilingual EN-CA/FR-CA chat interface
- WCAG 2.2 AAA (keyboard navigation, screen reader announces new messages)
- Message history, typing indicators
- Works in React, Vue, Angular, Svelte, plain HTML

#### Demo 2: GC Design Lab (Interactive Playground)
**Purpose**: Experiment with ALL GC components and settings  
**Features**:
- **Live component editor**: ALL 11+ components (not 10, not 20, ALL)
- **Real-time preview**: Change props, see results instantly
- **Theme editor**:
  - Edit GC Design System tokens (colors, fonts, spacing)
  - Create custom themes (save, export, share)
  - Preview theme across all components
  - Export theme as CSS/JSON
- **Code export**: Copy React/Vue/Angular/Svelte/HTML snippets
- **Accessibility panel**: axe-core testing with live results
- **Responsive preview**: Mobile (375px), Tablet (768px), Desktop (1440px)
- **Language toggle**: Test EN-CA ↔ FR-CA switching
- **Dark mode toggle**: Test contrast ratios
- **Keyboard navigation tester**: Visualize Tab order

#### Demo 3: DevKit (5-Minute Adoption)
**Purpose**: Developers adopt EVA-Sovereign-UI in 5 minutes  
**Features**:
- **CLI tool**: `npm install -g @eva-sovereign/cli`
- **Commands**:
  - `eva-sovereign init [react|vue|angular|svelte|html]` - Create new project
  - `eva-sovereign add <component>` - Add component to existing project
  - `eva-sovereign theme <name>` - Apply theme
- **Quick start guide**: Step-by-step, 5 minutes max
- **Framework templates**: Working projects (not empty shells)
- **Copy-paste examples**: Tested, actually work
- **npm/yarn/pnpm commands**: Install and use
- **CDN links**: jsDelivr, unpkg
- **TypeScript types**: Full IntelliSense
- **Troubleshooting guide**: Common issues solved

### 8. **Documentation (2 Sites)**
- **Storybook**: Complete API documentation for all components
- **Docs Site**: Separate website with guides, tutorials, examples, migration guides
- API documentation per component
- Usage examples (React, Svelte, plain HTML)
- Live Storybook demo
- Migration guide from React components
- Sovereign profile switcher demo

---

## 📊 Quality Gates (All Must Pass)

**CRITICAL**: These are non-negotiable standards. If ANY quality gate fails, the project is NOT production-ready. **Marco will NOT be available to approve incremental progress**. The implementation MUST follow requirements to the letter and apply all EVA principles to reach the expected outcome without friction.

### Autonomous Implementation Requirements
1. **Low-Touch, Standalone Design**: Minimal external dependencies, self-contained packages
2. **Complete Documentation**: NO gaps, NO "contact us for details", NO missing examples
3. **Self-Service Adoption**: GC departments can use without authorization from Marco
4. **Automated CI/CD**: NO manual intervention required
5. **Professional Visual Standards**: Official GC assets only (SVG, high-quality, government-grade)

### Technical Quality Gates
1. **Test Coverage**: 100% (no exceptions) - Vitest + Testing Library
2. **Lighthouse Score**: 100/100 across all 4 categories:
   - Performance (load speed, interactivity)
   - Accessibility (a11y compliance)
   - Best Practices (security, modern standards)
   - SEO (search engine optimization)
3. **WCAG 2.2 AAA**: 7:1 contrast ratios, keyboard nav, screen readers tested
4. **Zero axe-core violations**: Automated accessibility testing passes
5. **Zero broken links**: All demos, docs, and examples work
6. **Zero hardcoded literals**: All text externalized to i18n catalogs
7. **All demos work**: Tested in React, Vue, Angular, Svelte, plain HTML (5 environments)
8. **CI/CD pipelines green**: GitHub Actions workflows passing
9. **npm packages ready**: Publishable to registry with semantic versioning
10. **Complete documentation**: Storybook + docs site both complete
11. **Official GC assets only**: SVG graphics from design.canada.ca, self-hosted fonts, NO video game icons
12. **Professional visual standards**: Government-grade graphics only, NO colorful/playful consumer icons

### Expected Outcome Without Friction
**IF** all requirements followed to the letter AND all EVA principles applied (Three Concepts Pattern, Complete SDLC, Execution Evidence Rule), **THEN** the implementation will reach production-ready state without needing Marco's incremental approvals. The final product review will be straightforward: either all quality gates pass (ship it) or specific gates fail (fix and resubmit).

---

## 🎭 User Stories (Updated December 7, 2025)

### Story 1: GC Design System Compliance
**As a** federal developer building a GC application  
**I want to** use components that fully comply with https://design.canada.ca/  
**So that** my app meets mandatory GC Web Standards

**Acceptance Criteria**:
- [ ] All mandatory elements present (header, footer, wordmark, language toggle, breadcrumbs, date modified)
- [ ] GC Design System tokens applied (Lato/Noto Sans, #284162 link blue, #af3c43 FIP red, 8px grid)
- [ ] WCAG 2.2 AAA contrast ratios enforced (7:1)
- [ ] Bilingual EN-CA/FR-CA with runtime switching
- [ ] Zero axe-core violations

---

### Story 2: Framework-Agnostic Component Usage
**As a** developer using React/Vue/Angular/Svelte  
**I want to** use EVA components in my preferred framework  
**So that** I'm not locked into a single technology

**Acceptance Criteria**:
- [ ] Components work in React 18+ (`import { EvaButton } from '@eva-sovereign/react'`)
- [ ] Components work in Vue 3+ (`import { EvaButton } from '@eva-sovereign/vue'`)
- [ ] Components work in Angular 17+ (`import { EvaButton } from '@eva-sovereign/angular'`)
- [ ] Components work in Svelte 5+ (`import { EvaButton } from '@eva-sovereign/svelte'`)
- [ ] Components work in plain HTML (`<script src="cdn"><eva-button></eva-button>`)
- [ ] Events, props, and slots work consistently across all frameworks
- [ ] Props/attributes work consistently across frameworks

---

### Story 3: Canada.ca Chatbot Demo
**As a** public servant  
**I want to** see a working chatbot that answers canada.ca questions  
**So that** I can evaluate EVA-Sovereign-UI for my department

**Acceptance Criteria**:
- [ ] `<eva-chat-panel>` component renders correctly
- [ ] Answers 10-15 real canada.ca FAQs (passports, taxes, SIN, EI, immigration)
- [ ] Bilingual EN-CA/FR-CA chat interface
- [ ] Keyboard accessible (Tab to input, Enter to send, Esc to close)
- [ ] Screen reader announces new messages
- [ ] Works in React, Vue, Angular, Svelte, plain HTML demos

---

### Story 4: GC Design Lab (Theme Editor)
**As a** designer  
**I want to** experiment with GC Design System components and create custom themes  
**So that** I can prototype government UIs quickly

**Acceptance Criteria**:
- [ ] Live editor for ALL 11+ components
- [ ] Real-time prop editing (change props, see results instantly)
- [ ] Theme editor (edit colors, fonts, spacing; save, export, share)
- [ ] Code export (React/Vue/Angular/Svelte/HTML snippets)
- [ ] Accessibility panel (axe-core testing)
- [ ] Responsive preview (mobile/tablet/desktop)
- [ ] Language toggle, dark mode toggle, keyboard nav tester

---

### Story 5: 5-Minute Adoption (DevKit + CLI)
**As a** developer new to EVA-Sovereign-UI  
**I want to** adopt the library in 5 minutes  
**So that** I can start building quickly

**Acceptance Criteria**:
- [ ] CLI tool installs globally (`npm install -g @eva-sovereign/cli`)
- [ ] `eva-sovereign init react` creates working React project (not empty shell)
- [ ] Project runs with `npm start` (no errors, demo app loads)
- [ ] Copy-paste examples work (tested, not broken)
- [ ] TypeScript types provide IntelliSense
- [ ] Troubleshooting guide solves common issues
- [ ] Keyboard navigation without mouse
- [ ] Screen reader testing passes (NVDA, JAWS)
- [ ] No axe-core violations
- [ ] Supports Windows High Contrast Mode

---

### Story 5: Multi-Language Support
**As a** Canadian developer  
**I want to** switch between EN/FR at runtime  
**So that** users can choose their preferred language

**Acceptance Criteria**:
- [ ] `<eva-provider locale="en-CA">` sets language
- [ ] All component text updates on locale change
- [ ] Date/time formats respect locale (Intl.DateTimeFormat)
- [ ] Number formats respect locale (Intl.NumberFormat)
- [ ] No hardcoded English strings in components

---

## 📋 Functional Requirements

### FR-1: Lit-Based Web Components
- [ ] All components built with Lit 3.x
- [ ] TypeScript 5.x with strict mode
- [ ] Shadow DOM for style encapsulation
- [ ] Custom Element v1 API
- [ ] ES2020+ target for modern browsers

### FR-2: Sovereign Token System
- [ ] Token files for all 5 Five Eyes countries ✅ COMPLETE
- [ ] Registry system with helper functions ✅ COMPLETE
  - `getSovereignProfile(id)`
  - `getFiveEyesMember(id)`
  - `getAllSovereignProfileIds()`
  - `isValidSovereignProfile(id)`
  - `getSovereignProfileByLocale(locale)`
- [ ] Runtime profile switching
- [ ] CSS custom properties for theming
- [ ] Token-based design (no hardcoded colors/fonts)

### FR-3: Component API Mirrors React API
- [ ] Same prop names as React components
- [ ] Same event names (converted to custom events)
- [ ] Same slot patterns
- [ ] Same CSS classes for styling hooks
- [ ] Migration path documented

### FR-4: Accessibility Built-In
- [ ] All components keyboard navigable
- [ ] ARIA attributes automatically applied
- [ ] Focus trap for modals
- [ ] Live regions for dynamic content
- [ ] Skip links where appropriate
- [ ] High contrast mode support

### FR-5: i18n Infrastructure
- [ ] Message registry per component
- [ ] Runtime locale switching
- [ ] Intl API for formatting
- [ ] Bilingual EN/FR by default
- [ ] Extensible to other Five Eyes languages

### FR-6: Comprehensive Testing
- [ ] Vitest unit tests per component
- [ ] Testing Library integration tests
- [ ] axe-core accessibility tests
- [ ] ≥80% code coverage
- [ ] CI/CD pipeline runs tests on PR

### FR-7: Documentation
- [ ] API docs per component (JSDoc → typedoc)
- [ ] Usage examples (React, Svelte, HTML)
- [ ] Storybook stories per component
- [ ] Migration guide from React
- [ ] Sovereign profile comparison table

### FR-8: Package Distribution
- [ ] npm package `@eva-suite/web-components`
- [ ] ES modules + UMD bundle
- [ ] TypeScript declarations (.d.ts)
- [ ] Source maps for debugging
- [ ] CDN distribution (unpkg, jsDelivr)

---

## 🚀 Non-Functional Requirements

### NFR-1: Performance
- [ ] Bundle size <50KB gzipped (core components)
- [ ] First paint <100ms
- [ ] Component hydration <50ms
- [ ] Lighthouse performance score ≥90

### NFR-2: Browser Support
- [ ] Chrome/Edge ≥90 (Chromium)
- [ ] Firefox ≥88
- [ ] Safari ≥14
- [ ] No IE11 support (modern browsers only)

### NFR-3: Security
- [ ] No XSS vulnerabilities (Lit auto-escapes)
- [ ] CSP-compliant (no inline scripts)
- [ ] Dependency audit (npm audit clean)
- [ ] No secrets in code

### NFR-4: Accessibility (WCAG 2.1)
- [ ] AA compliance for all countries (baseline)
- [ ] AAA compliance for Canada GC (target)
- [ ] axe-core violations = 0
- [ ] Keyboard navigation 100% functional
- [ ] Screen reader testing passed

### NFR-5: Maintainability
- [ ] ESLint + Prettier configured
- [ ] Consistent code style
- [ ] TypeScript strict mode
- [ ] 80%+ test coverage
- [ ] CI/CD pipeline automated

### NFR-6: Observability
- [ ] Component usage metrics (optional)
- [ ] Error tracking (optional)
- [ ] Performance monitoring (optional)

---

## 🏗️ Technical Architecture

### Tech Stack
- **Framework**: Lit 3.x (Web Components)
- **Language**: TypeScript 5.x
- **Bundler**: Vite 5.x
- **Testing**: Vitest + Testing Library + axe-core
- **Docs**: Storybook 7.x
- **Linting**: ESLint + Prettier
- **CI/CD**: GitHub Actions

### Monorepo Structure
- **packages/core**: Design tokens, themes, utilities (shared)
- **packages/react**: React 18+ components (existing, 19 components)
- **packages/web-components**: Lit-based Web Components (new, 11+ components)

### Token Architecture
```typescript
// Token registry (IMPLEMENTED)
import { getSovereignProfile } from '@eva-suite/core/tokens/sovereign';

const tokens = getSovereignProfile('canada-gc');
// → { colors, typography, spacing, shadows, breakpoints, a11y }
```

### Component Base Class
```typescript
// EVAElement base class (TO BE IMPLEMENTED - Copilot A Task A3)
import { LitElement } from 'lit';

export class EVAElement extends LitElement {
  // Sovereign context consumer
  // i18n consumer
  // A11y utilities
}
```

---

## 📅 Implementation Phases

### ✅ Phase 0: Research & Planning (COMPLETE)
- [x] Five Eyes design system research (FIVE-EYES-RESEARCH.md)
- [x] Sovereign token files created (5 files + registry)
- [x] Architecture decisions documented (PROJECT-ANALYSIS.md)
- [x] Dual-copilot execution plan (DUAL-COPILOT-PLAN.md)
- [x] Coordination protocol (COORDINATION-PROTOCOL.md)
- [x] Traceability directory (docs/TRACEABILITY-DIRECTORY.md)

### 🚧 Phase 1: Foundation (IN PROGRESS - Copilot A)
**Tasks A1-A6** (3 hours estimated)

- [x] **A1: Five Eyes Sovereign Research** (40 min actual) ✅ COMPLETE
- [ ] **A2: Package Setup** (20 min)
  - [ ] Create `packages/web-components` structure
  - [ ] Configure Vite, TypeScript, Vitest
  - [ ] Setup ESLint + Prettier
- [ ] **A3: Core Components** (45 min)
  - [ ] EVAElement base class
  - [ ] eva-button component
  - [ ] eva-card component
  - [ ] eva-alert component
- [ ] **A4: i18n System** (30 min)
  - [ ] Message registry
  - [ ] Locale context provider
  - [ ] Intl API integration
- [ ] **A5: Sovereign Profile System** (30 min)
  - [ ] Sovereign context provider
  - [ ] Runtime profile switching
  - [ ] CSS custom properties integration
- [ ] **A6: A11y Utilities** (30 min)
  - [ ] Focus trap
  - [ ] Live region manager
  - [ ] Keyboard navigation helpers

**Milestone M1**: Foundation complete → Signal Copilot B

---

### 🔜 Phase 2: Advanced Components (PENDING - Copilot B)
**Tasks B1-B4** (5 hours estimated)

- [ ] **B1: Advanced Components** (2h)
  - [ ] eva-input, eva-select
  - [ ] eva-checkbox, eva-radio
  - [ ] eva-modal, eva-tabs
- [ ] **B2: EVA Chat Panel** (2h)
  - [ ] Chat message rendering
  - [ ] Input field with sovereign styling
  - [ ] RAG backend integration
  - [ ] Bilingual message support
- [ ] **B3: Demo & Storybook** (45 min)
  - [ ] Storybook setup
  - [ ] Stories per component
  - [ ] Sovereign profile switcher
  - [ ] Live demo deployment
- [ ] **B4: Documentation** (15 min)
  - [ ] API docs (typedoc)
  - [ ] Usage examples
  - [ ] Migration guide

**Milestone M2**: Advanced components complete  
**Milestone M3**: Demo ready

---

### 📦 Phase 3: Release & Integration (FUTURE)
- [ ] npm package publication
- [ ] CDN distribution
- [ ] Integration with POD-S solutions (Jurisprudence, AssistMe)
- [ ] Portal navigation integration (eva-portal-navigation-ux)
- [ ] EVA Chat integration

---

## ✅ Success Criteria

### Technical Success
- [ ] ≥80% test coverage (Vitest)
- [ ] 0 axe-core violations
- [ ] <50KB gzipped bundle
- [ ] TypeScript strict mode passes
- [ ] CI/CD pipeline green

### Business Success
- [ ] 11+ components implemented
- [ ] 5 sovereign profiles working
- [ ] Bilingual EN/FR operational
- [ ] Live demo deployed
- [ ] Documentation complete

### Adoption Success
- [ ] Used in ≥1 POD-S solution (Jurisprudence or AssistMe)
- [ ] Used in EVA Portal navigation
- [ ] Used in EVA Chat interface
- [ ] Migration path validated by ≥1 React app

---

## 🔗 Dependencies

### EVA Repos
- **eva-ui**: React components (API reference)
- **eva-i11y**: Accessibility patterns
- **eva-i18n**: i18n infrastructure (if separate)
- **eva-da-2**: EVA Chat interface (consumer)
- **eva-orchestrator**: Backlog lanes, agent coordination

### EVA CDDs
- **eva-ui-cdd.md** (95% complete, standardized)
- **eva-i11y-cdd.md** (95% complete, standardized)
- **eva-portal-navigation-ux.md** (active backlog)
- **eva-chat-widget.md** (active backlog)

### External Dependencies
- Lit 3.x
- TypeScript 5.x
- Vite 5.x
- Vitest + Testing Library
- axe-core
- Storybook 7.x

### EVA Agents
- **P02 (REQ)**: Requirements gathering (this document created by P02 pattern)
- **P05 (SCA)**: Scaffolder for package setup
- **P06 (REV)**: PR reviews
- **P07 (TST)**: Test generation
- **P08 (CICD)**: Pipeline setup
- **P12 (UXA)**: Accessibility review
- **P15 (DVM)**: Orchestration between Copilot A and B

---

## ❓ Open Questions

### Q1: CDN Hosting Strategy?
**Context**: Should we use unpkg, jsDelivr, or custom Azure CDN?  
**Decision Required**: Marco/PO  
**Impact**: Distribution strategy

### Q2: Storybook Hosting?
**Context**: GitHub Pages, Netlify, or Azure Static Web Apps?  
**Decision Required**: Marco/PO  
**Impact**: Demo accessibility

### Q3: npm Organization Scope?
**Context**: `@eva-suite/web-components` or `@gc-pubsec/eva-sovereign-ui`?  
**Decision Required**: Marco/PO  
**Impact**: Package naming

### Q4: React Component Migration Timeline?
**Context**: When should existing React apps migrate to Web Components?  
**Decision Required**: Marco/PO  
**Impact**: Adoption strategy

### Q5: EVA Chat Backend Integration?
**Context**: How does EVA Chat Panel connect to RAG backend?  
**Decision Required**: EVA Chat team  
**Impact**: B2 implementation

---

## 📚 Reference Documents

### In This Repo (EVA-Sovereign-UI/)
- [PROJECT-ANALYSIS.md](../PROJECT-ANALYSIS.md) - Architecture decisions
- [DUAL-COPILOT-PLAN.md](../DUAL-COPILOT-PLAN.md) - Execution strategy
- [COORDINATION-PROTOCOL.md](../COORDINATION-PROTOCOL.md) - Agent coordination
- [FIVE-EYES-RESEARCH.md](../FIVE-EYES-RESEARCH.md) - Design system research
- [docs/TRACEABILITY-DIRECTORY.md](../docs/TRACEABILITY-DIRECTORY.md) - Source document inventory

### In EVA Orchestrator
- [docs/backlog/CDD-INVENTORY-UPDATED.md](../../../../eva-orchestrator/docs/backlog/CDD-INVENTORY-UPDATED.md) - 61 CDDs
- [docs/backlog/eva-ui-cdd.md](../../../../eva-orchestrator/docs/backlog/eva-ui-cdd.md) - UI CDD (95% complete)
- [docs/backlog/eva-i11y-cdd.md](../../../../eva-orchestrator/docs/backlog/eva-i11y-cdd.md) - Accessibility CDD (95% complete)
- [to upload/eva-devtools/EVA Crew/EVA Agile Agentic Lifecycle Map.md](../../../../eva-orchestrator/to upload/eva-devtools/EVA Crew/EVA Agile Agentic Lifecycle Map.md) - 6-phase lifecycle

---

**Created by**: P02 (Requirements Agent) pattern  
**Date**: November 28, 2025  
**Status**: ✅ Complete P02 package ready for sprint planning
