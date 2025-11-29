# Copilot A & B Coordination Protocol

## 🤝 COORDINATION STRATEGY

### File Ownership (Zero Conflicts)

**Copilot A OWNS:**
```
packages/core/src/tokens/sovereign/     ← A writes, B reads
packages/core/src/themes/               ← A writes, B reads
packages/web-components/package.json    ← A creates, B reads
packages/web-components/tsconfig.json   ← A creates, B reads
packages/web-components/vite.config.ts  ← A creates, B reads
packages/web-components/src/base/       ← A writes, B reads
packages/web-components/src/i18n/       ← A writes, B reads
packages/web-components/src/sovereign/  ← A writes, B reads
packages/web-components/src/a11y/       ← A writes, B reads
packages/web-components/src/components/
  ├── eva-button.ts                     ← A writes
  ├── eva-card.ts                       ← A writes
  └── eva-alert.ts                      ← A writes
```

**Copilot B OWNS:**
```
packages/web-components/src/components/
  ├── eva-gc-header.ts                  ← B writes
  ├── eva-page-shell.ts                 ← B writes
  ├── eva-hero-banner.ts                ← B writes
  ├── eva-language-switcher.ts          ← B writes
  ├── eva-quick-actions.ts              ← B writes
  ├── eva-modal.ts                      ← B writes
  ├── eva-tabs.ts                       ← B writes
  ├── eva-chat-panel.ts                 ← B writes
  ├── eva-chat-message.ts               ← B writes
  └── eva-chat-input.ts                 ← B writes

apps/demo-wc/                           ← B writes entirely
docs/web-components/                    ← B writes entirely
```

**SHARED (Both Update):**
```
packages/web-components/src/index.ts    ← Both export their components
packages/web-components/src/components/index.ts  ← Both export components
```

### Solution for Shared Files

#### `packages/web-components/src/index.ts`
**Copilot A creates base:**
```typescript
// Core utilities
export * from './base/EVAElement';
export * from './i18n';
export * from './sovereign';
export * from './a11y';

// Simple components (Copilot A)
export * from './components/eva-button';
export * from './components/eva-card';
export * from './components/eva-alert';

// COPILOT B: Add your exports below this line
// (Advanced components will be added here)
```

**Copilot B appends:**
```typescript
// Advanced components (Copilot B)
export * from './components/eva-gc-header';
export * from './components/eva-page-shell';
export * from './components/eva-hero-banner';
export * from './components/eva-language-switcher';
export * from './components/eva-quick-actions';
export * from './components/eva-modal';
export * from './components/eva-tabs';
export * from './components/eva-chat-panel';
```

---

## 📡 COMMUNICATION PROTOCOL

### Milestone Signals

**Copilot A announces:**
```
HANDOFF M1: Foundation ready
- ✅ Sovereign tokens created (5 countries)
- ✅ Package structure created
- ✅ Base EVAElement class ready
- ✅ i18n system ready
- ✅ Profile system ready
- ✅ a11y utilities ready
- ✅ Simple components ready (button, card, alert)

Copilot B: You can start B1 (advanced components)

API Reference:
- Base class: EVAElement extends LitElement
- i18n: this.t('key') or i18n.translate('key', locale)
- Profile: this.profile or context.profile
- a11y: import from '@eva-suite/web-components/a11y'
```

**Copilot B responds:**
```
RECEIVED M1: Starting B1 (advanced components)
- Building on EVAElement base
- Using i18n system
- Using profile context
- ETA: 60 minutes
```

### Questions & Answers

**If Copilot B needs clarification:**
```
QUESTION from B: How do I access current sovereign profile in component?
```

**Copilot A responds:**
```
ANSWER: 
Option 1: Property
  @property({ type: String }) profile?: string;

Option 2: Context (recommended)
  import { sovereignContext } from '../sovereign/context';
  this.profile = sovereignContext.getProfile();

Option 3: Event listener
  window.addEventListener('eva-profile-changed', (e) => {
    this.profile = e.detail.profile;
  });
```

---

## 🔧 API CONTRACTS (For Coordination)

### Base Class API (Copilot A provides)

```typescript
// packages/web-components/src/base/EVAElement.ts
export class EVAElement extends LitElement {
  @property({ type: String }) profile?: string;
  @property({ type: String }) locale?: string;
  
  // i18n helper
  protected t(key: string, vars?: Record<string, any>): string;
  
  // Theme CSS injection
  protected injectTheme(): void;
  
  // Lifecycle
  connectedCallback(): void;
  disconnectedCallback(): void;
}
```

### i18n API (Copilot A provides)

```typescript
// packages/web-components/src/i18n/registry.ts
export interface I18nRegistry {
  translate(key: string, locale: string, vars?: Record<string, any>): string;
  register(locale: string, messages: Record<string, string>): void;
  setLocale(locale: string): void;
  getLocale(): string;
}

export const i18n: I18nRegistry;
```

### Sovereign Profile API (Copilot A provides)

```typescript
// packages/web-components/src/sovereign/types.ts
export interface SovereignProfile {
  id: string;
  label: string;
  defaultLocale: string;
  supportedLocales: string[];
  themeClassName: string;
  colors: {
    primary: string;
    secondary: string;
    text: string;
    background: string;
    // ... more
  };
  typography: {
    fontFamily: string;
    // ... more
  };
}

// packages/web-components/src/sovereign/context.ts
export const sovereignContext: {
  getProfile(): SovereignProfile | null;
  setProfile(profileId: string): void;
  onProfileChange(callback: (profile: SovereignProfile) => void): () => void;
};
```

### a11y API (Copilot A provides)

```typescript
// packages/web-components/src/a11y/focus-trap.ts
export class FocusTrap {
  constructor(element: HTMLElement);
  activate(): void;
  deactivate(): void;
}

// packages/web-components/src/a11y/live-region.ts
export function announce(message: string, politeness?: 'polite' | 'assertive'): void;

// packages/web-components/src/a11y/keyboard-nav.ts
export function handleKeyboardNav(event: KeyboardEvent, options: NavOptions): void;
```

---

## ⏱️ TIMELINE COORDINATION

### Hour 0-3: Copilot A Works, B Waits
- **A:** Building foundation (A1-A6)
- **B:** Can prepare component templates, read React components for API reference
- **Communication:** A posts progress updates every 30 min

### Hour 3: HANDOFF M1
- **A:** Announces "HANDOFF M1: Foundation ready"
- **B:** Confirms receipt, starts B1
- **A:** Available for questions, starts testing simple components

### Hour 3-4: Parallel Work
- **A:** Testing, fixing bugs, adding examples
- **B:** Building advanced components (B1)
- **Communication:** Quick questions as needed

### Hour 4: HANDOFF M2
- **B:** Announces "M2: Advanced components ready"
- **A:** Reviews APIs, suggests fixes if needed
- **B:** Starts B2 (chat panel)

### Hour 4-5.5: Parallel Work
- **A:** Documentation for foundation, React integration example
- **B:** Building chat panel (B2)

### Hour 5.5: HANDOFF M3
- **B:** Announces "M3: Chat panel ready"
- **A:** Tests chat panel, provides feedback
- **B:** Starts B3 (demo app)

### Hour 5.5-7: Parallel Work
- **A:** Svelte integration example, final polish
- **B:** Building demo app (B3)

### Hour 7-8: Both Polish
- **A & B:** Testing, documentation, deployment prep

---

## 🚨 CONFLICT RESOLUTION

### If Both Edit Same File

**Prevention:** Clear file ownership above

**If it happens:**
1. **B yields to A** on foundation files (base, i18n, sovereign, a11y)
2. **A yields to B** on demo and docs
3. **Coordinate** on index.ts exports (append, don't overwrite)

### Git Strategy

**Copilot A:**
```bash
# Create foundation branch
git checkout -b wc-foundation
# Work on A1-A6
git add packages/core/src/tokens/sovereign/
git add packages/web-components/
git commit -m "feat(wc): foundation - tokens, base, i18n, profiles, a11y"
```

**Copilot B:**
```bash
# Create components branch AFTER M1
git checkout -b wc-components
# Work on B1-B4
git add packages/web-components/src/components/eva-gc-header.ts
# ... etc
git commit -m "feat(wc): advanced components and demo"
```

**Merge:**
```bash
# After both done
git checkout main
git merge wc-foundation
git merge wc-components
# Resolve index.ts if needed (just combine exports)
```

---

## 📞 QUICK REFERENCE FOR COPILOT B

### I need to...

**...use i18n in my component:**
```typescript
import { i18n } from '../i18n';

// In component
render() {
  return html`<h1>${i18n.translate('hero.title', this.locale)}</h1>`;
}
```

**...apply sovereign profile theme:**
```typescript
import { sovereignContext } from '../sovereign/context';

connectedCallback() {
  super.connectedCallback();
  this.profile = sovereignContext.getProfile();
  this.classList.add(`eva-theme-${this.profile.id}`);
}
```

**...use focus trap:**
```typescript
import { FocusTrap } from '../a11y/focus-trap';

private focusTrap?: FocusTrap;

showModal() {
  this.focusTrap = new FocusTrap(this.shadowRoot!.querySelector('.modal')!);
  this.focusTrap.activate();
}

hideModal() {
  this.focusTrap?.deactivate();
}
```

**...announce to screen reader:**
```typescript
import { announce } from '../a11y/live-region';

handleSubmit() {
  announce('Message sent successfully', 'polite');
}
```

**...check if A's file is ready:**
```typescript
// Check if file exists
import { EVAElement } from '../base/EVAElement';
// ✅ If no error, it's ready

// Or ask Marco to check
```

---

## ✅ CURRENT STATUS

**Copilot A:** Starting A1 (sovereign research) NOW  
**Copilot B:** Wait for "HANDOFF M1" signal (approximately 3 hours)

**Next Update:** Copilot A will post progress in 30 minutes

---

**Marco: Show this file to Copilot B for coordination reference!**
