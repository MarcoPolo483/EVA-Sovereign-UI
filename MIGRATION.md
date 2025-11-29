# Migration Guide: eva-i11y & eva-i18n → EVA-Sovereign-UI

This guide helps you migrate from the separate `eva-i11y` and `eva-i18n` packages to the unified `EVA-Sovereign-UI` library.

---

## Overview

**EVA-Sovereign-UI** consolidates:
- ✅ All accessibility features from `eva-i11y`
- ✅ All internationalization from `eva-i18n`
- ✅ Complete Canada.ca Design System implementation
- ✅ Official GC components (Header, Footer, Buttons)

---

## Installation Changes

### Before (old packages)
```bash
pnpm add @eva-suite/i11y @eva-suite/i18n
```

### After (new unified package)
```bash
pnpm add @eva-suite/sovereign-react @eva-suite/sovereign-core
```

---

## Import Path Changes

### Accessibility Utilities

**Before:**
```ts
import { trapFocus, announce } from '@eva-suite/i11y';
```

**After:**
```ts
import { trapFocus, announce } from '@eva-suite/sovereign-core/utils';
```

### I18n

**Before:**
```tsx
import { I18nProvider, useI18n } from '@eva-suite/i18n';
```

**After:**
```tsx
import { I18nProvider, useI18n } from '@eva-suite/sovereign-react';
```

---

## Component Migration

### Theme System → Design Tokens

**Before (eva-i11y theme system):**
```tsx
import { ThemeProvider } from '@eva-suite/i11y';

<ThemeProvider theme="gc-default">
  <App />
</ThemeProvider>
```

**After (GC Design System CSS variables):**
```tsx
import '@eva-suite/sovereign-core/styles';

// Tokens are automatically available as CSS variables
// No provider needed
```

### Custom Buttons → GC Button Variants

**Before:**
```tsx
import { Button } from '@eva-suite/i11y';

<Button theme="primary" size="large">Submit</Button>
```

**After:**
```tsx
import { Button } from '@eva-suite/sovereign-react';

<Button variant="primary" size="lg">Submit</Button>
```

**Available variants:**
- `supertask` - Large primary (replaces theme="primary" size="xl")
- `primary` - Standard primary
- `secondary` - Secondary (white background)
- `danger` - Destructive action
- `link` - Text-style link
- `signin` - Contextual sign-in

---

## Accessibility Features

### Focus Management

**Before:**
```ts
import { FocusTrap } from '@eva-suite/i11y';

const trap = new FocusTrap(element);
trap.activate();
```

**After:**
```ts
import { trapFocus } from '@eva-suite/sovereign-core/utils';

const cleanup = trapFocus(element);
// Call cleanup() to deactivate
```

**Or use the React hook:**
```tsx
import { useFocusTrap } from '@eva-suite/sovereign-react';

function Modal() {
  const modalRef = useFocusTrap<HTMLDivElement>(isOpen);
  return <div ref={modalRef}>...</div>;
}
```

### Screen Reader Announcements

**Before:**
```ts
import { announce } from '@eva-suite/i11y';

announce('Success', { politeness: 'polite' });
```

**After:**
```ts
import { announce } from '@eva-suite/sovereign-core/utils';

announce('Success', 'polite');
```

### WCAG Contrast Validation

**Before:**
```ts
import { checkContrast } from '@eva-suite/i11y';

const passes = checkContrast('#284162', '#ffffff', 'AAA');
```

**After:**
```ts
import { meetsWCAG, getContrastRatio } from '@eva-suite/sovereign-core/utils';

const ratio = getContrastRatio('#284162', '#ffffff');
const passes = meetsWCAG('#284162', '#ffffff', 'AAA', 'normal');
```

---

## Internationalization

### Provider Setup

**Before:**
```tsx
import { I18nProvider } from '@eva-suite/i18n';

<I18nProvider locale="en" messages={messages}>
  <App />
</I18nProvider>
```

**After:**
```tsx
import { I18nProvider } from '@eva-suite/sovereign-react';

<I18nProvider defaultLocale="en-CA">
  <App />
</I18nProvider>
// Messages built-in for GC terminology
```

### Translation Hook

**Before:**
```tsx
import { useTranslation } from '@eva-suite/i18n';

const { t, locale, setLocale } = useTranslation();
```

**After:**
```tsx
import { useI18n } from '@eva-suite/sovereign-react';

const { t, locale, setLocale } = useI18n();
```

**Built-in translation keys:**
```tsx
t('common.welcome')            // "Welcome" / "Bienvenue"
t('header.governmentOfCanada') // "Government of Canada" / "Gouvernement du Canada"
t('footer.copyright')          // "© His Majesty the King..." / "© Sa Majesté le Roi..."
t('forms.required')            // "required" / "requis"
t('errors.required')           // "This field is required"
```

---

## New Components

EVA-Sovereign-UI includes official GC components not in i11y/i18n:

### GC Header
```tsx
import { GCHeader } from '@eva-suite/sovereign-react';

<GCHeader 
  title="My Application"
  subtitle="Powered by EVA Suite"
  showSignIn
/>
```

### GC Footer
```tsx
import { GCFooter } from '@eva-suite/sovereign-react';

<GCFooter />
// Includes all mandatory GC links and copyright
```

### Alert Component
```tsx
import { Alert } from '@eva-suite/sovereign-react';

<Alert variant="success" title="Success" dismissible onDismiss={() => {}}>
  Your changes have been saved.
</Alert>
```

### Form Components
```tsx
import { FormField, ErrorSummary } from '@eva-suite/sovereign-react';

<FormField 
  id="email" 
  label="Email address" 
  required 
  error={errors.email}
  helpText="We'll never share your email"
>
  <input type="email" />
</FormField>

<ErrorSummary 
  errors={[
    { id: 'email', message: 'Email is required' },
    { id: 'password', message: 'Password is required' }
  ]} 
/>
```

---

## CSS/Styling Changes

### Before (i11y custom classes)
```css
.eva-button-primary { }
.eva-text-accessible { }
```

### After (GC Design System classes)
```css
.gc-button-primary { }
.gc-button-supertask { }
.gc-h1-main { /* Includes mandatory red bar */ }
```

**Import core styles:**
```tsx
import '@eva-suite/sovereign-core/styles';
```

**Or import selectively:**
```tsx
import '@eva-suite/sovereign-core/styles/tokens.css';
import '@eva-suite/sovereign-core/styles/typography.css';
import '@eva-suite/sovereign-core/styles/buttons.css';
```

---

## TypeScript Types

### Before
```ts
import type { A11yConfig, I18nConfig } from '@eva-suite/i11y';
import type { Locale, Messages } from '@eva-suite/i18n';
```

### After
```ts
import type { 
  Locale,
  TranslationCatalog,
  I18nContextValue,
  ButtonProps,
  GCHeaderProps
} from '@eva-suite/sovereign-core/types';
```

---

## Removed Features

The following features were **not** migrated (use alternatives):

| Old Feature | Alternative |
|-------------|-------------|
| `ThemeProvider` | Use CSS variables from `@eva-suite/sovereign-core/styles` |
| `ContrastChecker` component | Use `meetsWCAG()` utility function |
| `LanguageDetector` | Use browser `navigator.language` or user preference |
| Custom theme CSS | Use GC Design System tokens |

---

## Testing Migration

### Before
```tsx
import { render } from '@testing-library/react';
import { I18nProvider } from '@eva-suite/i18n';

const { getByText } = render(
  <I18nProvider locale="en" messages={customMessages}>
    <Component />
  </I18nProvider>
);
```

### After
```tsx
import { render } from '@testing-library/react';
import { I18nProvider } from '@eva-suite/sovereign-react';

const { getByText } = render(
  <I18nProvider defaultLocale="en-CA">
    <Component />
  </I18nProvider>
);
// Built-in GC messages automatically available
```

---

## Breaking Changes Summary

| Change | Impact | Solution |
|--------|--------|----------|
| Package names | High | Update imports to `@eva-suite/sovereign-*` |
| Locale format | Medium | Use `en-CA` / `fr-CA` instead of `en` / `fr` |
| CSS class prefixes | Medium | Replace `eva-` with `gc-` |
| Button variants | Low | Map old themes to new variants |
| Theme system | Medium | Use CSS variables instead of ThemeProvider |

---

## Gradual Migration Strategy

You can migrate incrementally:

1. **Install both packages** temporarily:
   ```bash
   pnpm add @eva-suite/sovereign-react
   # Keep old packages during migration
   ```

2. **Migrate by feature area:**
   - Week 1: Core utilities (focus, contrast, keyboard)
   - Week 2: I18n system
   - Week 3: Components (buttons, forms)
   - Week 4: Header/Footer, final cleanup

3. **Run in parallel:**
   ```tsx
   // Old code still works
   import { Button as OldButton } from '@eva-suite/i11y';
   
   // New code alongside
   import { Button as NewButton } from '@eva-suite/sovereign-react';
   ```

4. **Remove old packages** when migration complete:
   ```bash
   pnpm remove @eva-suite/i11y @eva-suite/i18n
   ```

---

## Support

- **Issues**: https://github.com/marcopolo483/eva-suite/issues
- **Docs**: https://marcopolo483.github.io/eva-suite/
- **Migration Help**: Tag issues with `migration` label

---

**Migration completed? Remove old packages and enjoy the unified EVA-Sovereign-UI! 🎉**
