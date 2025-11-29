# EVA-Sovereign-UI: Project Analysis & Implementation Plan

**Date:** November 28, 2025  
**Status:** Planning Phase  
**Context:** We just completed Radix UI integration into the existing React-based EVA-Sovereign-UI

## Critical Discovery: Existing Implementation vs. New Requirements

### What We Have Now
- ✅ **EVA-Sovereign-UI** monorepo with packages:
  - `packages/core` - GC Design System tokens, styles, utilities
  - `packages/react` - 19 React components (13 original + 6 new Radix UI)
  - Built with: React, TypeScript, Radix UI, styled-jsx
  - Focus: GC Design System compliance, bilingual (EN/FR-CA), WCAG AAA

### What's Being Requested
- 🆕 **Standards-based Web Components** (Custom Elements + Shadow DOM)
- 🆕 Framework-agnostic (works in React, Svelte, plain HTML)
- 🆕 Multi-sovereign support (Canada, US, UK, AU, NZ)
- 🆕 Lit or minimal base class (not React)
- 🆕 Different architecture and technology stack

## Key Questions for Clarification

### 1. **Architecture Decision**
**Question:** Do you want to:
- **A) Replace** the existing React-based implementation with Web Components?
- **B) Add** Web Components as a new parallel package (`packages/web-components`)?
- **C) Create** a separate standalone repo for EVA-Sovereign-UI-WC?

**Current Status:** The existing React implementation is production-ready with:
- Complete GC Design System compliance
- 19 components built and tested
- Radix UI integration just completed
- Bilingual support working

**Recommendation:** Option B - Add `packages/web-components` to leverage existing tokens/styles from `packages/core` while building Web Components alongside React.

### 2. **Scope Reconciliation**
The new request includes components we already have in React:

| Component | Current (React) | Requested (Web Components) |
|-----------|----------------|---------------------------|
| Header | ✅ GCHeader | 🆕 eva-gc-header |
| Button | ✅ Button (5 variants) | 🆕 eva-button |
| Card | ✅ Card (composable) | 🆕 eva-card |
| Alert | ✅ Alert (with icons) | 🆕 eva-alert |
| Modal | ✅ Dialog (Radix UI) | 🆕 eva-modal |
| Tabs | ✅ Tabs (Radix UI) | 🆕 eva-tabs |
| Language Switcher | ✅ LanguageToggle | 🆕 eva-language-switcher |

**Question:** Should Web Components:
- **A) Mirror** the React API exactly (consistency)?
- **B) Evolve** independently (web standards-first)?
- **C) Share** core tokens/styles but differ in API?

### 3. **Core Package Strategy**
**Current:** `packages/core` exports:
- Design tokens (CSS custom properties)
- GC Design System styles
- i18n utilities (EN/FR-CA)
- TypeScript types

**Question:** Should Web Components:
- **A) Reuse** existing core package (efficient)?
- **B) Create** new core for WC-specific needs?
- **C) Merge** both approaches into unified core?

**Recommendation:** Reuse and extend `packages/core` to avoid duplication.

### 4. **Demo App Conflict**
**Current:** No dedicated demo app yet (Storybook configured but not built out)  
**Requested:** Interactive demo showcasing WC with theme/language switching

**Question:** Should we:
- **A) Build** demo for Web Components first?
- **B) Build** demo for both (tabs for React vs WC)?
- **C) Separate** demos for each package?

### 5. **Five Eyes Sovereign Profiles**
**New Requirement:** Multi-jurisdictional theming (US, UK, AU, NZ)

**Current:** Only Canada GC Design System implemented

**Question:** 
- Do you have design specifications/tokens for US federal, UK gov, etc.?
- Should we create reasonable presets based on public design systems?
- Priority order for implementation?

**Research Needed:**
- US Federal: https://designsystem.digital.gov/
- UK Gov: https://design-system.service.gov.uk/
- AU Gov: https://designsystem.gov.au/
- NZ Gov: https://design-system-alpha.digital.govt.nz/

### 6. **Chat Panel Component**
**New Component:** `<eva-chat-panel>` for RAG/AI chat interfaces

**Question:** 
- Is this related to EVA Agent RAG capabilities?
- What's the expected API surface?
- Should it integrate with existing eva-agent backend?

## Proposed Implementation Strategy

### Phase 1: Foundation (Week 1)
1. **Create** `packages/web-components` package structure
2. **Set up** Lit + TypeScript + Vite build toolchain
3. **Extend** `packages/core` with sovereign profile tokens
4. **Implement** 2-3 simple components (button, card, alert)
5. **Document** Web Component API patterns

### Phase 2: Core Components (Week 2)
6. **Build** eva-gc-header, eva-page-shell
7. **Build** eva-hero-banner, eva-language-switcher
8. **Build** eva-quick-actions
9. **Add** i18n integration layer
10. **Test** accessibility with axe-core

### Phase 3: Advanced Components (Week 3)
11. **Build** eva-chat-panel (AI chat interface)
12. **Build** eva-modal, eva-tabs
13. **Implement** sovereign profile switching
14. **Create** theme CSS for 5 jurisdictions

### Phase 4: Integration & Demo (Week 4)
15. **Build** demo app (`apps/demo-wc`)
16. **Create** React integration guide
17. **Create** Svelte integration guide
18. **Write** comprehensive documentation
19. **Add** accessibility audit results
20. **Polish** for production readiness

## Technology Stack Proposal

### Web Components Package
- **Core:** Lit 3.x (minimal, standards-based)
- **Language:** TypeScript 5.x
- **Bundler:** Vite 5.x (fast, modern)
- **Testing:** Vitest + @web/test-runner + axe-core
- **Documentation:** Custom Markdown + live code examples

### Shared Core
- **Tokens:** CSS Custom Properties (reuse existing)
- **Styles:** Pure CSS (no preprocessing needed)
- **i18n:** Extend existing i18n utilities
- **Types:** Shared TypeScript definitions

### Demo App
- **Framework:** Vanilla TS + Vite (showcases framework-agnostic nature)
- **Features:** 
  - Theme switcher (6 sovereign profiles)
  - Language switcher (EN/FR + extensible)
  - Component gallery with live editing
  - Accessibility inspector panel

## File Structure Proposal

```
EVA-Sovereign-UI/
├── packages/
│   ├── core/                    # [EXISTING] Design tokens, styles, i18n
│   │   ├── src/
│   │   │   ├── tokens/
│   │   │   │   ├── canada-gc.ts
│   │   │   │   ├── us-federal.ts      # [NEW]
│   │   │   │   ├── uk-gov.ts          # [NEW]
│   │   │   │   ├── au-gov.ts          # [NEW]
│   │   │   │   ├── nz-gov.ts          # [NEW]
│   │   │   │   └── index.ts
│   │   │   ├── themes/                 # [NEW]
│   │   │   │   ├── canada-gc.css
│   │   │   │   ├── us-federal.css
│   │   │   │   └── ...
│   │   │   └── ...
│   │   └── ...
│   │
│   ├── react/                   # [EXISTING] React components (19 total)
│   │   └── ...
│   │
│   └── web-components/          # [NEW] Standards-based Web Components
│       ├── src/
│       │   ├── base/
│       │   │   ├── EVAElement.ts       # Base class for all components
│       │   │   └── types.ts
│       │   ├── components/
│       │   │   ├── eva-button.ts
│       │   │   ├── eva-card.ts
│       │   │   ├── eva-alert.ts
│       │   │   ├── eva-modal.ts
│       │   │   ├── eva-tabs.ts
│       │   │   ├── eva-gc-header.ts
│       │   │   ├── eva-page-shell.ts
│       │   │   ├── eva-hero-banner.ts
│       │   │   ├── eva-language-switcher.ts
│       │   │   ├── eva-quick-actions.ts
│       │   │   ├── eva-chat-panel.ts
│       │   │   └── index.ts
│       │   ├── i18n/
│       │   │   ├── registry.ts
│       │   │   ├── loader.ts
│       │   │   └── bundles/
│       │   │       ├── en-CA.ts
│       │   │       ├── fr-CA.ts
│       │   │       └── index.ts
│       │   ├── a11y/
│       │   │   ├── focus-trap.ts
│       │   │   ├── live-region.ts
│       │   │   └── keyboard-nav.ts
│       │   ├── sovereign/
│       │   │   ├── profiles.ts          # Sovereign profile definitions
│       │   │   ├── context.ts           # Profile context management
│       │   │   └── types.ts
│       │   └── index.ts
│       ├── dist/                        # Build output
│       ├── package.json
│       ├── tsconfig.json
│       ├── vite.config.ts
│       └── README.md
│
├── apps/
│   └── demo-wc/                 # [NEW] Web Components demo app
│       ├── src/
│       │   ├── index.html
│       │   ├── main.ts
│       │   ├── pages/
│       │   │   ├── home.ts
│       │   │   ├── gallery.ts
│       │   │   └── accessibility.ts
│       │   └── styles/
│       ├── public/
│       ├── package.json
│       └── vite.config.ts
│
├── docs/
│   ├── web-components/          # [NEW] WC-specific docs
│   │   ├── 01-intro.md
│   │   ├── 02-design-tokens.md
│   │   ├── 03-components.md
│   │   ├── 04-theming-and-sovereign-profiles.md
│   │   ├── 05-i18n-guide.md
│   │   ├── 06-a11y-guide.md
│   │   ├── 07-react-integration.md
│   │   ├── 08-svelte-integration.md
│   │   └── 09-governance-and-best-practices.md
│   └── ...
│
├── READY-FOR-TESTING.md         # [EXISTING] React components status
├── RADIX-INTEGRATION-COMPLETE.md # [EXISTING] Radix UI integration
├── TEST-EXAMPLES.md             # [EXISTING] React component examples
├── PROJECT-ANALYSIS.md          # [THIS FILE]
└── ...
```

## Risk Assessment

### Technical Risks
1. **Duplication:** Two component libraries (React + WC) = 2x maintenance
2. **Token Sync:** Keeping design tokens consistent across packages
3. **Sovereign Profiles:** No existing specs for US/UK/AU/NZ - need research
4. **Chat Panel:** Complex component with unclear requirements

### Mitigation Strategies
1. **Shared Core:** Maximize reuse of tokens, styles, i18n from `packages/core`
2. **Documentation:** Clear guidelines on when to use React vs WC
3. **Research Phase:** Gather official design system specs before implementation
4. **Iterative:** Build chat panel after simpler components validated

## Success Metrics

### MVP Success (4 weeks)
- ✅ 11+ Web Components implemented and working
- ✅ 6 sovereign profiles with theme switching
- ✅ EN/FR bilingual support (extensible)
- ✅ WCAG 2.1 AA compliance verified
- ✅ Interactive demo app deployed
- ✅ Comprehensive documentation (9 guides)
- ✅ React/Svelte integration examples

### Quality Gates
- ⚡ Components work in Chrome, Firefox, Safari, Edge
- ⚡ Zero accessibility violations (axe-core)
- ⚡ 100% TypeScript type coverage
- ⚡ All components keyboard-navigable
- ⚡ Live demo accessible at public URL

## Next Steps - Awaiting Your Direction

**Before I start implementation, please confirm:**

1. ✅ **Architecture:** Add Web Components as new package? (Recommended)
2. ✅ **Coexistence:** Keep React components alongside WC? (Recommended)
3. ✅ **Sovereign Specs:** Should I research and create reasonable presets for US/UK/AU/NZ?
4. ✅ **Chat Panel:** Is this for EVA Agent integration? What features?
5. ✅ **Priority:** Should I start with simple components or full stack?
6. ✅ **Timeline:** Is 4-week phased approach acceptable?

**My Recommendation:**
Start with **Phase 1 (Foundation)** - I'll create the `packages/web-components` structure, set up Lit + Vite, extend core with sovereign tokens, and build 3 simple components (button, card, alert) as proof of concept. This gives us a working foundation to validate the architecture before committing to the full implementation.

**Reply with:**
- Your architecture preference (A/B/C for each question)
- Any additional requirements or constraints
- Go/no-go for Phase 1 implementation

Then I'll begin creating the actual code! 🚀
