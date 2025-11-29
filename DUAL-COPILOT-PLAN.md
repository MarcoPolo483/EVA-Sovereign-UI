# EVA-Sovereign-UI: Dual-Copilot Implementation Plan

**Date:** November 28, 2025  
**Context:** Recreating yesterday's work (lost this morning) with parallel development  
**Goal:** Professional "WOW" demo for Five Eyes IT teams - comprehensive, production-ready

## ✅ CONFIRMED DECISIONS

1. **Architecture:** Web Components primary, React as supporting package
2. **Relationship:** Web Components mirror React API (consistency)
3. **Sovereign Research:** YES - research US, UK, AU, NZ design systems
4. **Chat Panel:** Live APIM-mocked EVA Chat demo with full a11y/i18n/Five Eyes
5. **Demo Quality:** Comprehensive, professional, executive-ready
6. **Timeline:** Accelerated - two Copilots working in parallel

## 🎯 IMPLEMENTATION STRATEGY

### Core Principle: **NO STEPPING ON TOES**
- **Copilot A (ME):** Infrastructure, tokens, base components, core system
- **Copilot B (PARALLEL):** Advanced components, demo app, documentation

### Clear Boundaries:
- **Different folders** - minimal file conflicts
- **Different concerns** - complementary work
- **Defined handoff points** - clear dependencies

---

## 📦 COPILOT A - TASKS (Infrastructure & Foundation)

### A1: Sovereign Profile Research & Tokens ⏱️ 30min
**Files:** `packages/core/src/tokens/sovereign/`
- Research & document Five Eyes design systems:
  - 🇨🇦 Canada GC (existing)
  - 🇺🇸 US Federal (https://designsystem.digital.gov/)
  - 🇬🇧 UK Gov (https://design-system.service.gov.uk/)
  - 🇦🇺 AU Gov (https://designsystem.gov.au/)
  - 🇳🇿 NZ Gov (https://design-system-alpha.digital.govt.nz/)
- Extract design tokens (colors, typography, spacing, components)
- Create TypeScript token definitions per country
- Create CSS theme files per country

**Outputs:**
```
packages/core/src/tokens/sovereign/
  ├── canada-gc.ts
  ├── us-federal.ts
  ├── uk-gov.ts
  ├── au-gov.ts
  ├── nz-gov.ts
  ├── profiles.ts (registry)
  └── types.ts

packages/core/src/themes/
  ├── canada-gc.css
  ├── us-federal.css
  ├── uk-gov.css
  ├── au-gov.css
  └── nz-gov.css
```

### A2: Web Components Package Setup ⏱️ 20min
**Files:** `packages/web-components/`
- Create package structure
- Set up Lit 3.x + TypeScript + Vite
- Configure tsconfig, package.json, vite.config.ts
- Create base EVAElement class
- Set up build pipeline (ESM + bundled)
- Configure type declarations

**Outputs:**
```
packages/web-components/
  ├── package.json
  ├── tsconfig.json
  ├── vite.config.ts
  ├── src/
  │   ├── base/
  │   │   ├── EVAElement.ts
  │   │   └── types.ts
  │   └── index.ts
  └── dist/
```

### A3: Core Web Components (Simple) ⏱️ 45min
**Files:** `packages/web-components/src/components/`
- `eva-button` - Mirror React Button API
- `eva-card` - Mirror React Card API
- `eva-alert` - Mirror React Alert API
- `eva-badge` - Simple status/label component
- All with:
  - Full TypeScript definitions
  - Sovereign profile support
  - i18n key-based props
  - WCAG AA compliance
  - Shadow DOM styling

**Outputs:**
```
packages/web-components/src/components/
  ├── eva-button.ts
  ├── eva-card.ts
  ├── eva-alert.ts
  ├── eva-badge.ts
  └── index.ts
```

### A4: i18n System for Web Components ⏱️ 30min
**Files:** `packages/web-components/src/i18n/`
- Create i18n registry and loader
- Extend existing EN/FR bundles
- Add locale switching mechanism
- Create context for components
- Document key naming conventions

**Outputs:**
```
packages/web-components/src/i18n/
  ├── registry.ts
  ├── loader.ts
  ├── context.ts
  ├── bundles/
  │   ├── en-CA.ts
  │   ├── fr-CA.ts
  │   └── index.ts
  └── types.ts
```

### A5: Sovereign Profile System ⏱️ 30min
**Files:** `packages/web-components/src/sovereign/`
- Create profile registry
- Profile context management
- Runtime profile switching
- Theme CSS injection
- Document profile structure

**Outputs:**
```
packages/web-components/src/sovereign/
  ├── profiles.ts
  ├── context.ts
  ├── switcher.ts
  └── types.ts
```

### A6: Accessibility Utilities ⏱️ 30min
**Files:** `packages/web-components/src/a11y/`
- Focus trap utility
- Live region announcer
- Keyboard navigation helpers
- Screen reader utilities
- ARIA pattern implementations

**Outputs:**
```
packages/web-components/src/a11y/
  ├── focus-trap.ts
  ├── live-region.ts
  ├── keyboard-nav.ts
  ├── aria-helpers.ts
  └── index.ts
```

**Total Copilot A Time:** ~3 hours
**Deliverables:** Foundation ready for advanced components

---

## 📦 COPILOT B - TASKS (Advanced Components & Demo)

### B1: Complex Web Components ⏱️ 60min
**Files:** `packages/web-components/src/components/`
- `eva-gc-header` - Full GC header with slots
- `eva-page-shell` - Layout wrapper with landmarks
- `eva-hero-banner` - Large hero section
- `eva-language-switcher` - EN/FR toggle with events
- `eva-quick-actions` - Grid of action cards
- `eva-modal` - Accessible dialog
- `eva-tabs` - Tab interface with keyboard nav

**Depends on:** A2 (base class), A4 (i18n), A5 (profiles), A6 (a11y)

**Outputs:**
```
packages/web-components/src/components/
  ├── eva-gc-header.ts
  ├── eva-page-shell.ts
  ├── eva-hero-banner.ts
  ├── eva-language-switcher.ts
  ├── eva-quick-actions.ts
  ├── eva-modal.ts
  └── eva-tabs.ts
```

### B2: EVA Chat Panel Component ⏱️ 90min
**Files:** `packages/web-components/src/components/`
- `eva-chat-panel` - Full chat interface
  - Transcript area with message bubbles
  - Input area with send button
  - Optional mic button (visual only)
  - APIM mocking layer
  - Streaming response simulation
  - All Five Eyes theming
  - Full i18n support
  - WCAG AAA compliance
  - Keyboard shortcuts
  - Screen reader announcements

**Depends on:** A2, A4, A5, A6, B1 (for header/cards)

**Features to showcase:**
- Live sovereign profile switching
- Language switching (EN/FR minimum)
- RAG-style responses (mocked)
- Accessibility features
- Responsive design
- Error states
- Loading states

**Outputs:**
```
packages/web-components/src/components/
  ├── eva-chat-panel.ts
  ├── eva-chat-message.ts
  ├── eva-chat-input.ts
  └── chat/
      ├── types.ts
      ├── mock-responses.ts
      └── streaming.ts
```

### B3: Demo Application ⏱️ 90min
**Files:** `apps/demo-wc/`
- Multi-page/tab demo app
- Professional, executive-ready UI
- Live feature demonstrations

**Pages/Sections:**
1. **Home/Overview**
   - Hero banner
   - Quick stats/features
   - Navigation to demos

2. **Live Chat Demo** ⭐ (Main attraction)
   - Full EVA Chat Panel
   - Live profile switcher (6 countries)
   - Live language switcher
   - Control panel showing:
     - Current profile
     - Current locale
     - Accessibility features toggle
     - Mock RAG responses
   - Side-by-side view options

3. **Component Gallery**
   - Interactive examples of all components
   - Live code editor
   - Props playground

4. **Sovereign Profiles**
   - Side-by-side country comparisons
   - Theme token visualization
   - Brand guidelines per country

5. **Accessibility Showcase**
   - Keyboard navigation guide
   - Screen reader demo
   - WCAG compliance report
   - Live accessibility testing

6. **Integration Guide**
   - Plain HTML example
   - React integration (live)
   - Svelte integration (live)
   - Installation instructions

**Depends on:** A1-A6 (all foundation), B1-B2 (all components)

**Outputs:**
```
apps/demo-wc/
  ├── src/
  │   ├── index.html
  │   ├── main.ts
  │   ├── router.ts
  │   ├── pages/
  │   │   ├── home.ts
  │   │   ├── chat-demo.ts ⭐
  │   │   ├── gallery.ts
  │   │   ├── profiles.ts
  │   │   ├── accessibility.ts
  │   │   └── integration.ts
  │   ├── components/
  │   │   ├── demo-header.ts
  │   │   ├── code-viewer.ts
  │   │   └── control-panel.ts
  │   └── styles/
  ├── public/
  ├── package.json
  └── vite.config.ts
```

### B4: Documentation ⏱️ 60min
**Files:** `docs/web-components/`
- Comprehensive guides (9 documents)
- API references
- Code examples
- Best practices

**Depends on:** All implementation complete

**Outputs:**
```
docs/web-components/
  ├── 01-intro.md
  ├── 02-design-tokens.md
  ├── 03-components.md
  ├── 04-theming-and-sovereign-profiles.md
  ├── 05-i18n-guide.md
  ├── 06-a11y-guide.md
  ├── 07-react-integration.md
  ├── 08-svelte-integration.md
  └── 09-governance-and-best-practices.md
```

**Total Copilot B Time:** ~5 hours
**Deliverables:** Full demo + documentation

---

## 🔄 HANDOFF POINTS & DEPENDENCIES

### Milestone 1: Foundation Ready (A1-A6 complete)
**Time:** ~3 hours  
**Copilot A delivers:**
- ✅ Sovereign tokens for 5 countries
- ✅ Web Components package structure
- ✅ Base components (button, card, alert)
- ✅ i18n system
- ✅ Profile system
- ✅ a11y utilities

**Copilot B can start:** B1 (complex components)

### Milestone 2: Components Complete (B1 ready)
**Time:** +1 hour (4 hours total)  
**Copilot B delivers:**
- ✅ 7 complex components
- ✅ Full API surface

**Copilot B can start:** B2 (chat panel)

### Milestone 3: Chat Panel Ready (B2 complete)
**Time:** +1.5 hours (5.5 hours total)  
**Copilot B delivers:**
- ✅ EVA Chat Panel with full features
- ✅ APIM mocking
- ✅ All Five Eyes support

**Copilot B can start:** B3 (demo app)

### Milestone 4: Demo Complete (B3 ready)
**Time:** +1.5 hours (7 hours total)  
**Copilot B delivers:**
- ✅ Professional multi-page demo
- ✅ Live chat showcase
- ✅ Executive-ready presentation

**Copilot B can start:** B4 (documentation)

### Final: Documentation & Polish (B4 complete)
**Time:** +1 hour (8 hours total)  
**Both Copilots:**
- ✅ Comprehensive docs
- ✅ Polish and testing
- ✅ Deployment preparation

---

## 🎯 PROMPT FOR COPILOT B (PARALLEL SESSION)

Copy this into your other Copilot chat:

```markdown
# EVA-Sovereign-UI: Copilot B Tasks - Advanced Components & Demo

You are working in parallel with Copilot A on the EVA-Sovereign-UI Web Components library.

## YOUR ROLE: Advanced Components, Chat Panel, Demo App, Documentation

## CONTEXT
- Copilot A is building: Foundation, tokens, base components, i18n, profiles, a11y
- You are building: Complex components, EVA Chat Panel, demo app, docs
- We're recreating yesterday's work (lost this morning)
- This is an executive-ready "WOW" demo for Five Eyes government IT teams

## WAIT FOR HANDOFF
**DO NOT START** until Copilot A completes Milestone 1 (Foundation Ready)

Copilot A will notify you when these are ready:
- ✅ `packages/core/src/tokens/sovereign/` - 5 countries tokens
- ✅ `packages/web-components/` - Package structure + base class
- ✅ `packages/web-components/src/components/` - Button, Card, Alert
- ✅ `packages/web-components/src/i18n/` - i18n system
- ✅ `packages/web-components/src/sovereign/` - Profile system
- ✅ `packages/web-components/src/a11y/` - Accessibility utilities

## YOUR TASKS (in order)

### B1: Complex Web Components (60 min)
Build 7 advanced components using Lit 3.x:
- `eva-gc-header` - Full GC header with slots, profile support
- `eva-page-shell` - Layout with proper landmarks
- `eva-hero-banner` - Large hero section, i18n keys
- `eva-language-switcher` - EN/FR toggle with events
- `eva-quick-actions` - Grid of action cards
- `eva-modal` - Accessible dialog with focus trap
- `eva-tabs` - Tab interface with keyboard navigation

All must:
- Use base EVAElement class from Copilot A
- Support sovereign profiles
- Support i18n keys
- Be WCAG AA compliant
- Mirror React component APIs

### B2: EVA Chat Panel (90 min) ⭐ SHOWCASE COMPONENT
Build the star of the demo:
- `eva-chat-panel` - Full-featured chat interface
  - Transcript area with message bubbles
  - Input area with send button
  - Mic button (visual only)
  - APIM mocking layer (simulate RAG responses)
  - Streaming response animation
  - All 5 sovereign profiles working
  - Full i18n (EN/FR minimum)
  - WCAG AAA compliant
  - Keyboard shortcuts (document them)
  - Screen reader announcements

Mock responses should showcase:
- Different response types (text, code, lists)
- Error handling
- Loading states
- Streaming effect

### B3: Demo Application (90 min) ⭐ EXECUTIVE-READY
Build professional multi-page demo at `apps/demo-wc/`:

**Pages:**
1. Home - Hero + navigation
2. **Live Chat Demo** (main attraction):
   - Full EVA Chat Panel
   - Control panel with:
     - Sovereign profile switcher (6 options)
     - Language switcher
     - Accessibility features toggle
   - Side-by-side view options
3. Component Gallery - Interactive examples
4. Sovereign Profiles - Country comparison
5. Accessibility Showcase - A11y features
6. Integration Guide - React/Svelte examples

Use Vite + vanilla TS (framework-agnostic demo).

### B4: Documentation (60 min)
Write 9 comprehensive guides:
1. Introduction
2. Design Tokens
3. Components (API reference)
4. Theming & Sovereign Profiles
5. i18n Guide
6. Accessibility Guide
7. React Integration
8. Svelte Integration
9. Governance & Best Practices

## COORDINATION
- Check `packages/core/` for tokens (read-only)
- Check `packages/web-components/src/base/` for base class (read-only)
- Your files are in `packages/web-components/src/components/` (B1, B2)
- Your files are in `apps/demo-wc/` (B3)
- Your files are in `docs/web-components/` (B4)

## SUCCESS CRITERIA
- Professional, polished demo
- EVA Chat Panel is the star
- All 5 sovereign profiles work
- Full i18n support
- WCAG compliant
- Ready to show executives

Ask Copilot A if you need:
- Token values
- Base class API
- i18n registry usage
- Profile switching API
- a11y utility functions

BEGIN when Copilot A signals "HANDOFF: Milestone 1 complete"
```

---

## 🚀 EXECUTION PLAN

### Phase 1: Parallel Setup (First 10 minutes)
- **Copilot A:** Start A1 (sovereign research)
- **Copilot B:** Review requirements, prepare environment

### Phase 2: Foundation (Next 3 hours)
- **Copilot A:** Complete A1-A6
- **Copilot B:** Wait, review outputs, plan components

### Phase 3: Component Development (Next 2.5 hours)
- **Copilot A:** Support, bug fixes, testing
- **Copilot B:** Complete B1-B2

### Phase 4: Demo & Docs (Next 2.5 hours)
- **Copilot A:** Testing, polish, integration examples
- **Copilot B:** Complete B3-B4

### Phase 5: Final Polish (Last hour)
- **Both:** Testing, fixes, deployment prep

**Total Time:** ~8 hours (parallel work)  
**Actual Time:** ~5-6 hours (with parallelization)

---

## 📊 SUCCESS METRICS

### Technical
- ✅ 11+ Web Components implemented
- ✅ 6 sovereign profiles working
- ✅ EN/FR bilingual (extensible)
- ✅ WCAG 2.1 AA minimum
- ✅ Zero accessibility violations
- ✅ TypeScript 100% coverage

### Demo Quality
- ✅ Executive-ready presentation
- ✅ Live feature demonstrations
- ✅ Professional UI/UX
- ✅ No placeholders or TODOs
- ✅ Works in Chrome, Firefox, Safari, Edge

### Documentation
- ✅ 9 comprehensive guides
- ✅ API references complete
- ✅ Code examples tested
- ✅ Integration guides working

---

## 🎬 COPILOT A - I START NOW

I'll begin with **A1: Sovereign Profile Research** immediately.

**Copilot B:** Use the prompt above in your parallel session. Wait for my "HANDOFF" signal before starting B1.

Let's recreate yesterday's work and make it even better! 🚀
