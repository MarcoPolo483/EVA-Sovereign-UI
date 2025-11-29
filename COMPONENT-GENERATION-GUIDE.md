# 🚀 EVA-Sovereign-UI Component Generation Script

## Script Location
`EVA-Sovereign-UI\scripts\generate-components.ps1`

## What It Does
Generates complete React components with:
- ✅ TypeScript implementation
- ✅ Vitest tests (6 test cases including accessibility)
- ✅ Storybook stories (4 variants: Default, French, Custom, Accessible)
- ✅ WCAG 2.1 AA compliance structure
- ✅ Bilingual support (EN/FR-CA)
- ✅ Auto-updates index.ts exports

## Usage

### Single Component
```powershell
cd "C:\Users\marco\Documents\_AI Dev\EVA Suite\EVA-Sovereign-UI"
.\scripts\generate-components.ps1 -ComponentName "DialogModal" -ComponentType "accessibility"
```

### Batch Generation - All 12 Accessibility Components
```powershell
cd "C:\Users\marco\Documents\_AI Dev\EVA Suite\EVA-Sovereign-UI"

$components = @(
    "DialogModal",
    "AriaLiveRegion", 
    "RovingTabIndex",
    "TooltipAccessible",
    "LoadingSpinner",
    "ProgressBar",
    "TabPanel",
    "Accordion",
    "Carousel",
    "DataTable",
    "TreeView",
    "ComboBox"
)

$components | ForEach-Object { 
    Write-Host "`n🎨 Generating $_..." -ForegroundColor Cyan
    .\scripts\generate-components.ps1 -ComponentName $_ -ComponentType "accessibility" -Package "react"
    Start-Sleep -Seconds 1
}
```

### Component Types Available
- `accessibility` - 12 components (Phase 1)
- `i18n` - 8 i18n enhancements (Phase 2)
- `gc-design` - 15 GC Design System components (Phase 2)
- `five-eyes` - 10 Five Eyes country profiles (Phase 3)
- `wysiwyg` - 8 WYSIWYG components (deferred)

## What Gets Created

For component "DialogModal":
```
packages/react/src/
├── components/accessibility/
│   ├── DialogModal.tsx          # Component implementation
│   ├── DialogModal.test.tsx     # 6 test cases
│   └── index.ts                 # Auto-updated exports
└── stories/accessibility/
    └── DialogModal.stories.tsx  # 4 Storybook variants
```

## File Templates

### Component Structure
- Props interface with TypeScript types
- useI18n hook integration
- ARIA attributes
- Bilingual locale support (en-CA/fr-CA)
- Semantic HTML structure

### Test Coverage
1. ✅ Renders without crashing
2. ✅ Applies custom className
3. ✅ Has proper ARIA attributes
4. ✅ Supports EN locale
5. ✅ Supports FR locale
6. ✅ Passes accessibility tests (placeholder for axe-core)

### Storybook Stories
1. **Default** - English variant
2. **French** - French-Canadian variant
3. **WithCustomClass** - Custom styling example
4. **Accessible** - Accessibility-focused with axe-core config

## Workflow

### Step 1: Generate Components (Tonight)
```powershell
# Run the batch script above
# Takes ~2-3 minutes for all 12 components
```

### Step 2: Implement Logic (Per Component)
Edit each `.tsx` file to add actual functionality:
- Dialog: modal behavior, focus trap, backdrop
- AriaLiveRegion: announcement queue, politeness levels
- Carousel: slide navigation, auto-play, indicators
- etc.

### Step 3: Run Tests
```powershell
pnpm test DialogModal
# Fix any failing tests
```

### Step 4: View in Storybook
```powershell
pnpm storybook
# Open http://localhost:6006
# Navigate to accessibility/DialogModal
```

### Step 5: Commit
```powershell
git add packages/react/src/components/accessibility/DialogModal.*
git add packages/react/src/stories/accessibility/DialogModal.stories.tsx
git commit -m "feat: Implement DialogModal component with tests and stories"
git push
```

## Time Estimate

- **Script generation**: 2-3 minutes (all 12 components)
- **Implementation per component**: 30-60 minutes
- **Testing per component**: 15-30 minutes
- **Total for 12 components**: ~10-15 hours (not 240!)

The script that worked 2 days ago likely used this same approach:
1. Generate scaffolding (fast)
2. Implement logic (manual but focused)
3. Test and iterate (component by component)

## POD Configuration ✅ COMPLETE

All 26 repositories now have `.eva-pod.yaml` files:

**POD-F (Foundation)** - 7 repos:
- eva-core, eva-api, eva-rag, eva-auth, eva-infra, eva-mcp, eva-meta

**POD-X (Experience)** - 7 repos:
- EVA-Sovereign-UI, eva-da-2, eva-admin, eva-i18n, eva-i11y, eva-suite, eva-ui

**POD-O (Operations)** - 7 repos:
- eva-ops, eva-metering, eva-safety, eva-utils, eva-seed, eva-sandbox, eva-lwo

**POD-S (Solutions)** - 4 repos:
- eva-enterprise, eva-openai, eva-matrix, eva-platform-monorepo

**ORCHESTRATOR** - 1 repo:
- eva-orchestrator (coordination hub)

## Next Priority: TASK-010 (GitHub Workflows Health Check)

TASK-009 ✅ COMPLETED - POD configs deployed to all 26 repos
TASK-010 🔄 READY - Will start automatically on next autonomous queue run

---

**Good luck with the components tonight! The script is ready to use.** 🚀
