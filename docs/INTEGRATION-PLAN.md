# EVA-Sovereign-UI Integration Plan

## Source: eva-sovereign-ui-des Repository

The `eva-sovereign-ui-des` repository contains a **Spark/Radix UI + Tailwind CSS** React component library with excellent design patterns that can enhance our EVA-Sovereign-UI implementation.

---

## 📦 What We Found

### Design System Architecture
- **Component Library**: 45+ Radix UI-based React components with Tailwind styling
- **Theming**: Radix Colors with CSS custom properties, supports light/dark modes
- **Spacing**: Tailwind-based spacing scale with `--size-scale` multiplier
- **Typography**: System font stack with sans-serif, serif, and monospace variants
- **Accessibility**: Built on Radix UI primitives (already WCAG compliant)

### Key Components Available
1. **Layout**: Card (with Header/Footer/Content), Sidebar, Sheet, Drawer
2. **Forms**: Input, Textarea, Select, Checkbox, Radio Group, Switch, Form
3. **Navigation**: Breadcrumb, Navigation Menu, Menubar, Tabs, Pagination
4. **Feedback**: Alert, Alert Dialog, Dialog, Popover, Tooltip, Sonner (toasts)
5. **Data Display**: Table, Badge, Avatar, Skeleton, Progress
6. **Interactive**: Button, Dropdown Menu, Context Menu, Command, Accordion, Collapsible
7. **Advanced**: Calendar, Carousel, Chart, Resizable, Scroll Area

### Theming System
```css
--color-accent-1 through --color-accent-12 (Radix UI color scales)
--color-neutral-1 through --color-neutral-12
--size-0-5 through --size-96 (Tailwind-compatible spacing)
--radius-sm through --radius-full
--font-sans-serif, --font-serif, --font-monospace
```

---

## 🎯 Integration Strategy

### Phase 1: Documentation Integration ✅ DONE
- [x] Copy `EVA-README.md` → `docs/WEB-COMPONENTS-DESIGN.md`
- [x] Copy `PRD.md` → `docs/DESIGN-SPECIFICATIONS.md`

### Phase 2: Design Token Harmonization
**Goal**: Merge Radix Colors approach with GC Design System requirements

**Action Items**:
1. Keep our GC-specific colors (#284162 link blue, #A62A1E H1 bar)
2. Adopt Radix color scale structure (1-12 levels) for better semantic naming
3. Add dark mode support using Radix dark color imports
4. Map GC Design System to Radix semantic colors:
   - `--gc-color-text-primary` → `--color-neutral-12`
   - `--gc-color-link` → `--color-accent-9`
   - `--gc-color-error` → `--color-red-9`

**File Changes**:
- `packages/core/src/tokens.ts` - Add Radix-compatible color scales
- `packages/core/src/styles/tokens.css` - Add color scale variables
- New: `packages/core/src/styles/dark-mode.css` - Dark theme support

### Phase 3: Enhanced React Components
**Goal**: Add missing advanced components using Radix UI patterns

**Priority Components to Add**:
1. **Form Components** (HIGH - needed for government forms)
   - `<FormField>` enhancement with Radix Form primitives
   - `<Select>` - Better than native select
   - `<Checkbox>` and `<RadioGroup>`
   - `<Switch>` for toggle settings

2. **Navigation** (MEDIUM - enhance user flows)
   - `<Tabs>` - Proper ARIA tabs pattern
   - `<NavigationMenu>` - Accessible mega-menu
   - `<Pagination>`

3. **Feedback** (MEDIUM - improve UX)
   - `<Dialog>` - Modal dialogs
   - `<AlertDialog>` - Confirmation prompts
   - `<Toast>` (using Sonner) - Better than our current Alert
   - `<Tooltip>`

4. **Data Display** (LOW - nice-to-have)
   - `<Table>` with sorting/filtering
   - `<Skeleton>` for loading states
   - `<Progress>` bars
   - `<Avatar>` for user profiles

**Implementation Approach**:
- Copy component patterns from eva-sovereign-ui-des
- Strip Tailwind, use our GC Design System CSS
- Keep Radix UI primitives (@radix-ui/react-*)
- Add bilingual support (useI18n hook)
- Maintain WCAG AAA standards

### Phase 4: Build System Enhancement
**Goal**: Add modern tooling from eva-sovereign-ui-des

**Adopt**:
- Class Variance Authority (cva) for variant management
- Better TypeScript component types with `ComponentProps<T>`
- Slot pattern from Radix (@radix-ui/react-slot)

**File Changes**:
- `packages/react/package.json` - Add cva, @radix-ui/react-slot
- New: `packages/react/src/utils/cn.ts` - Class name utility
- New: `packages/react/src/utils/variants.ts` - CVA helpers

### Phase 5: Storybook Integration
**Goal**: Document all components interactively

**From eva-sovereign-ui-des**:
- Radix Colors preview patterns
- Component variant showcase structure
- Accessibility testing integration

---

## 🚫 What NOT to Integrate

### Skip These (Redundant or Framework-Specific)
- ❌ Tailwind CSS (we use vanilla CSS with GC Design System)
- ❌ Spark-specific files (.spark-initial-sha, spark.meta.json)
- ❌ Vite config (we already have tsup)
- ❌ Full Radix Colors CSS imports (cherry-pick needed colors only)

### Keep Separate
- Web Components approach (their docs, not implementation)
- Sovereign profiles concept (document, don't implement yet)
- Demo app structure (different from our needs)

---

## 📋 Action Plan

### Immediate (This Session)
1. ✅ Clone eva-sovereign-ui-des repo
2. ✅ Copy documentation
3. ✅ Create integration plan (this file)
4. Next: Add missing React components using Radix patterns

### Short-Term (Next Session)
1. Add Radix UI dependencies to React package
2. Implement `<Dialog>`, `<Select>`, `<Tabs>` components
3. Add dark mode CSS using Radix Colors
4. Enhance `<FormField>` with Radix Form primitives

### Medium-Term (Before Dec 24 Demo)
1. Add all priority components (Form, Navigation, Feedback)
2. Setup Storybook with component documentation
3. Create dark mode toggle component
4. Test all components for WCAG AAA compliance

### Long-Term (After Demo)
1. Add data display components (Table, Skeleton, Progress)
2. Implement Svelte 5, Vue 3, Angular 18+ versions
3. Publish to npm
4. Create comprehensive documentation site

---

## 🎨 Component Mapping

### Current EVA-Sovereign-UI → Radix-Enhanced Version

| Current Component | Enhancement Needed | Radix Primitive |
|-------------------|-------------------|-----------------|
| `<Button>` | Add more variants (ghost, link) | - |
| `<Alert>` | Add icon support, better styling | - |
| `<Badge>` | Add outline variant | - |
| `<Card>` | Add CardAction slot | - |
| `<FormField>` | Add Radix Form integration | `@radix-ui/react-form` |
| - | **NEW: Dialog** | `@radix-ui/react-dialog` |
| - | **NEW: Select** | `@radix-ui/react-select` |
| - | **NEW: Tabs** | `@radix-ui/react-tabs` |
| - | **NEW: Checkbox** | `@radix-ui/react-checkbox` |
| - | **NEW: RadioGroup** | `@radix-ui/react-radio-group` |
| - | **NEW: Switch** | `@radix-ui/react-switch` |
| - | **NEW: Tooltip** | `@radix-ui/react-tooltip` |
| - | **NEW: Popover** | `@radix-ui/react-popover` |
| - | **NEW: Toast** | `sonner` |

---

## 📐 Design Token Comparison

### Current GC Design System
```css
--gc-color-text-primary: #333
--gc-color-link: #284162
--gc-spacing-1: 8px
--gc-radius-base: 4px
```

### Radix Approach (More Semantic)
```css
--color-neutral-12: #333  /* darkest neutral */
--color-accent-9: #284162  /* primary brand color */
--size-2: 8px  /* 0.5rem */
--radius-md: 6px
```

### Proposed Hybrid
```css
/* Keep GC-specific */
--gc-color-link: #284162
--gc-color-h1-bar: #A62A1E

/* Add Radix scales */
--color-neutral-1: #fafafa
--color-neutral-9: #333
--color-neutral-12: #1a1a1a

--color-accent-1: #f0f5ff
--color-accent-9: #284162
--color-accent-11: #1a2d47

/* Unified spacing */
--spacing-1: 8px (alias to --size-2)
--spacing-2: 16px (alias to --size-4)
```

---

## ✅ Success Criteria

### Component Library
- [ ] 25+ React components (currently 13)
- [ ] All components use Radix UI primitives where applicable
- [ ] Dark mode support for all components
- [ ] Consistent variant system using CVA

### Design System
- [ ] GC Design System colors preserved
- [ ] Radix color scales added for semantic theming
- [ ] Dark mode CSS integrated
- [ ] Spacing system compatible with both GC and Radix

### Documentation
- [ ] Storybook with all components
- [ ] Migration guide from Radix UI projects
- [ ] Dark mode usage guide
- [ ] Component API documentation

### Accessibility
- [ ] WCAG 2.1 AAA maintained
- [ ] Keyboard navigation tested
- [ ] Screen reader compatibility verified
- [ ] High contrast mode supported

---

## 🔗 References

- **Source Repo**: https://github.com/MarcoPolo483/eva-sovereign-ui-des
- **Radix UI**: https://www.radix-ui.com/
- **Radix Colors**: https://www.radix-ui.com/colors
- **Class Variance Authority**: https://cva.style/
- **Canada.ca Design System**: https://design.canada.ca/

---

**Status**: Integration plan created, ready to implement Phase 2-5  
**Next Step**: Add Radix UI dependencies and implement Dialog component
