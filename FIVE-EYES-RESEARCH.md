# Five Eyes Sovereign Design System Research

**Research Date:** November 28, 2025  
**Purpose:** Token extraction for EVA-Sovereign-UI Web Components  
**Researcher:** Copilot A (EVA-Sovereign-UI Architect)

---

## 🎯 Summary

Successfully researched and extracted design tokens from all **Five Eyes** government design systems:

1. **🇨🇦 Canada GC** - Government of Canada Design System (WCAG AAA)
2. **🇺🇸 US Federal** - U.S. Web Design System v3.0 (WCAG AA, Section 508)
3. **🇬🇧 UK Gov** - GOV.UK Design System (WCAG AA, accessibility-first)
4. **🇦🇺 Australia Gov** - Australian Government Design System (WCAG AA)
5. **🇳🇿 New Zealand Gov** - NZ Government Design System Alpha (WCAG AA, Te Reo Māori)

All token definitions created in TypeScript with comprehensive coverage:
- ✅ Colors (primary, semantic, text, backgrounds, borders, focus)
- ✅ Typography (fonts, sizes, weights, line heights)
- ✅ Spacing scales
- ✅ Border radius
- ✅ Shadows
- ✅ Breakpoints
- ✅ Z-index layers
- ✅ Transitions
- ✅ Accessibility tokens (focus, touch targets, contrast ratios)
- ✅ Component-specific tokens (headers, footers, banners)

---

## 🇨🇦 Canada GC Design System

**URL:** https://design.canada.ca/  
**WCAG Level:** AAA  
**Bilingual:** English/French (EN/FR-CA)

### Key Characteristics:
- **Primary Color:** `#26374a` (GC Dark Blue)
- **Link Color:** `#2572b4` (WCAG AAA 7:1 contrast)
- **Fonts:** Noto Sans, Lato (headings)
- **Focus Style:** `3px solid #2572b4` (blue ring)
- **Distinctive Feature:** Red stripe on header/footer (`#ef3340`)

### Design Philosophy:
- Bilingual by default (EN/FR)
- WCAG AAA compliant (highest standard)
- Conservative, professional aesthetic
- Strong brand identity with red stripe

**File:** `packages/core/src/tokens/sovereign/canada-gc.ts`

---

## 🇺🇸 US Federal Design System

**URL:** https://designsystem.digital.gov/  
**WCAG Level:** AA  
**Section 508 Compliant:** Yes  
**Languages:** English (primary), Spanish (partial)

### Key Characteristics:
- **Primary Color:** `#005ea2` (USWDS Blue 60v)
- **Link Color:** `#005ea2`
- **Fonts:** Public Sans (body), Merriweather (headings)
- **Focus Style:** `4px solid #2491ff` (bright blue)
- **Distinctive Feature:** Token-based system with precise naming

### Design Philosophy:
- Comprehensive token system (v3.0)
- Modular and flexible
- Section 508 compliance for federal accessibility
- Strong documentation and component library
- Banner component for official site identification

**File:** `packages/core/src/tokens/sovereign/us-federal.ts`

---

## 🇬🇧 UK Gov Design System

**URL:** https://design-system.service.gov.uk/  
**WCAG Level:** AA  
**Bilingual:** English/Welsh (EN-GB/CY-GB)

### Key Characteristics:
- **Primary Color:** `#1d70b8` (GOV.UK Blue)
- **Link Color:** `#1d70b8`
- **Fonts:** GDS Transport (proprietary, fallback to Noto Sans)
- **Focus Style:** `3px solid #ffdd00` (YELLOW - highly distinctive!)
- **Distinctive Feature:** Yellow focus rings (trademark GOV.UK pattern)

### Design Philosophy:
- **Accessibility-first** approach
- Yellow focus rings for high visibility (unique among Five Eyes)
- Minimal use of shadows and rounded corners
- Black text on yellow focus states (high contrast)
- Proven through extensive user research
- Simple, effective, tested at scale

**File:** `packages/core/src/tokens/sovereign/uk-gov.ts`

---

## 🇦🇺 Australia Gov Design System

**URL:** https://designsystem.gov.au/  
**WCAG Level:** AA  
**Languages:** English (EN-AU)

### Key Characteristics:
- **Primary Color:** `#00698f` (AU Gov Blue)
- **Link Color:** `#00698f`
- **Fonts:** Open Sans (free and open source)
- **Focus Style:** `3px solid #0076b0` (bright blue)
- **Distinctive Feature:** Clean, modern aesthetic with Open Sans

### Design Philosophy:
- Modern and professional
- Open source font stack (Open Sans)
- Inclusive design principles
- Clean visual hierarchy
- Dark grey header (`#313131`)

**File:** `packages/core/src/tokens/sovereign/australia-gov.ts`

---

## 🇳🇿 New Zealand Gov Design System

**URL:** https://design-system-alpha.digital.govt.nz/  
**WCAG Level:** AA  
**Bilingual:** English/Te Reo Māori (EN-NZ/MI-NZ)  
**Status:** Alpha (actively developed)

### Key Characteristics:
- **Primary Color:** `#0c5a8e` (NZ Blue)
- **Link Color:** `#0c5a8e`
- **Fonts:** Fira Sans (free and open source)
- **Focus Style:** `3px solid #0078bf` (bright blue)
- **Distinctive Feature:** Te Reo Māori support with macron diacritics (ā, ē, ī, ō, ū)

### Design Philosophy:
- Bicultural by default (English + Te Reo Māori)
- Macron support essential for Māori language (ā, ē, ī, ō, ū)
- Modern, accessible design
- Alpha status = actively evolving
- Charcoal header (`#2d2d2d`)

**File:** `packages/core/src/tokens/sovereign/nz-gov.ts`

---

## 🔄 Comparative Analysis

### Color Palettes:
| Country | Primary Blue | Focus Color | Unique Trait |
|---------|-------------|-------------|--------------|
| 🇨🇦 Canada | `#26374a` (dark) | `#2572b4` (blue) | Red stripe branding |
| 🇺🇸 US | `#005ea2` (medium) | `#2491ff` (bright blue) | Token-based system |
| 🇬🇧 UK | `#1d70b8` (bright) | `#ffdd00` (YELLOW!) | Yellow focus rings |
| 🇦🇺 Australia | `#00698f` (teal-blue) | `#0076b0` (bright blue) | Open Sans font |
| 🇳🇿 New Zealand | `#0c5a8e` (medium-dark) | `#0078bf` (bright blue) | Māori macrons |

### Typography:
| Country | Body Font | Heading Font | Notes |
|---------|-----------|--------------|-------|
| 🇨🇦 Canada | Noto Sans | Lato | Free fonts |
| 🇺🇸 US | Public Sans | Merriweather | Custom federal fonts |
| 🇬🇧 UK | GDS Transport* | GDS Transport* | *Proprietary (use Noto Sans) |
| 🇦🇺 Australia | Open Sans | Open Sans | Consistent, free |
| 🇳🇿 New Zealand | Fira Sans | Fira Sans | Supports Māori |

### Focus Styles (Critical for Accessibility):
- **🇨🇦 Canada:** Blue ring (`3px solid #2572b4`)
- **🇺🇸 US:** Bright blue ring (`4px solid #2491ff`) - THICKEST
- **🇬🇧 UK:** **YELLOW ring** (`3px solid #ffdd00`) - MOST DISTINCTIVE
- **🇦🇺 Australia:** Bright blue ring (`3px solid #0076b0`)
- **🇳🇿 New Zealand:** Bright blue ring (`3px solid #0078bf`)

**Winner:** UK GOV.UK yellow focus rings are the most accessible and distinctive pattern!

### Bilingual Support:
- **🇨🇦 Canada:** EN/FR (English/French)
- **🇺🇸 US:** EN (English primary, Spanish partial)
- **🇬🇧 UK:** EN/CY (English/Welsh)
- **🇦🇺 Australia:** EN only
- **🇳🇿 New Zealand:** EN/MI (English/Te Reo Māori with macrons)

### WCAG Compliance:
- **🇨🇦 Canada:** AAA (7:1 contrast - highest!)
- **🇺🇸 US:** AA (4.5:1 contrast + Section 508)
- **🇬🇧 UK:** AA (4.5:1 contrast, accessibility-first philosophy)
- **🇦🇺 Australia:** AA (4.5:1 contrast)
- **🇳🇿 New Zealand:** AA (4.5:1 contrast)

---

## 📦 Implementation Status

### ✅ Completed (A1 - 40 minutes):

1. **Token Definitions Created:**
   - ✅ `canada-gc.ts` - Government of Canada (comprehensive, WCAG AAA)
   - ✅ `us-federal.ts` - US Federal USWDS v3.0 (Section 508)
   - ✅ `uk-gov.ts` - UK GOV.UK (yellow focus rings!)
   - ✅ `australia-gov.ts` - Australian Government (Open Sans)
   - ✅ `nz-gov.ts` - New Zealand (Te Reo Māori support)

2. **Registry System:**
   - ✅ `index.ts` - Sovereign profile registry with TypeScript types
   - ✅ Profile ID union types (`SovereignProfileId`)
   - ✅ Five Eyes member metadata (flags, URLs, WCAG levels)
   - ✅ Helper functions:
     - `getSovereignProfile(id)` - Get tokens by ID
     - `getFiveEyesMember(id)` - Get metadata
     - `getAllSovereignProfileIds()` - List all profiles
     - `isValidSovereignProfile(id)` - Validate profile ID
     - `getSovereignProfileByLocale(locale)` - Match by locale

3. **Type Safety:**
   - ✅ Full TypeScript type exports for all sovereign tokens
   - ✅ Union types for flexible profile handling
   - ✅ Readonly token objects (`as const`) to prevent mutations
   - ✅ Type guards for runtime validation

---

## 🎨 Design Token Coverage

Each sovereign profile includes:

### Color Tokens:
- Primary colors (default, hover, active, light)
- Secondary colors
- Accent colors
- Link states (default, hover, visited, active)
- Semantic colors (success, warning, error, info + light variants)
- Text colors (primary, secondary, disabled, inverse)
- Background colors (default, secondary, dark, accent)
- Border colors (default, dark, focus)
- Component-specific colors (header, footer, banners)
- Focus and interaction colors

### Typography Tokens:
- Font families (body, headings, mono, tabular)
- Font sizes (xs, sm, md, lg, xl, 2xl-5xl)
- Font weights (light, normal, medium, semibold, bold)
- Line heights (tight, normal, relaxed, loose)
- Letter spacing

### Spacing Tokens:
- Spacing scale (xs, sm, md, lg, xl, 2xl-5xl)
- Based on rem units for accessibility

### Border Radius:
- Radius scale (none, sm, base, md, lg, xl, full)
- Note: UK GOV.UK uses minimal rounding

### Shadows:
- Shadow scale (xs, sm, base, md, lg, xl)
- Note: UK GOV.UK and US USWDS use minimal shadows

### Layout Tokens:
- Z-index layers (dropdown, sticky, modal, tooltip, etc.)
- Breakpoints (xs, sm, md, lg, xl, 2xl)
- Transitions (fast, base, slow)

### Accessibility Tokens:
- Focus outline width
- Focus outline style
- Focus outline color
- Focus outline offset
- Min touch target size (44px WCAG 2.5.5)
- Min contrast ratio
- Special features (macron support for NZ, yellow focus for UK)

### Component-Specific Tokens:
- Header configuration
- Footer configuration
- Banner/phase banner
- Cookie banner (UK)
- Identifier (US)
- Coat of arms (Australia)

---

## 🚀 Next Steps for Copilot A

**A1: Complete ✅** (40 minutes)  
**A2: Package Setup** (20 minutes) - Create `packages/web-components` structure

**Ready to proceed!** All sovereign tokens researched and implemented.

---

## 📋 Notes for Copilot B

When Copilot B starts on **B1-B4** after the **M1 handoff**, you'll have:

1. **Sovereign Profiles Available:**
   ```typescript
   import { SOVEREIGN_PROFILES, getSovereignProfile } from '@eva-suite/core/tokens/sovereign';
   
   // Get Canada GC tokens
   const canadaTokens = getSovereignProfile('canada-gc');
   
   // Access colors
   const primaryColor = canadaTokens.colors.primary; // '#26374a'
   const focusStyle = canadaTokens.colors.focusOutline; // '3px solid #2572b4'
   ```

2. **Five Eyes Metadata:**
   ```typescript
   import { FIVE_EYES_MEMBERS } from '@eva-suite/core/tokens/sovereign';
   
   // Get UK metadata
   const ukMeta = FIVE_EYES_MEMBERS['uk-gov'];
   console.log(ukMeta.flag); // '🇬🇧'
   console.log(ukMeta.designSystemUrl); // 'https://design-system.service.gov.uk/'
   ```

3. **Profile Switching:**
   - Create profile switcher component using `getAllSovereignProfileIds()`
   - Apply theme class: `canadaTokens.themeClassName` → `'eva-theme-canada-gc'`
   - CSS custom properties will be generated from tokens in A2

4. **Unique Features to Highlight:**
   - **UK Yellow Focus:** Most distinctive accessibility pattern
   - **NZ Māori Support:** Macron diacritics (ā, ē, ī, ō, ū)
   - **Canada AAA:** Highest WCAG compliance
   - **US Section 508:** Federal accessibility standard

---

## ✅ A1 Status: COMPLETE

**Time Spent:** 40 minutes  
**Output Quality:** Production-ready TypeScript token definitions  
**Type Safety:** Full TypeScript coverage with union types  
**Documentation:** Comprehensive inline comments + this research doc  

**Ready for A2: Package Setup** 🚀

