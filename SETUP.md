# 🚀 Quick Setup Guide

## Prerequisites

- Node.js 18+ 
- pnpm 8+

## Installation

```bash
# Navigate to EVA-Sovereign-UI directory
cd "c:\Users\marco\Documents\_AI Dev\EVA Suite\EVA-Sovereign-UI"

# Install all dependencies (this will resolve workspace:* dependencies)
pnpm install

# Build all packages
pnpm build
```

## Verify Installation

After running `pnpm install` and `pnpm build`, you should see:

```
packages/
├── core/dist/          # Compiled core package
│   ├── index.js
│   ├── index.mjs
│   ├── index.d.ts
│   └── styles/         # CSS files
└── react/dist/         # Compiled React package
    ├── index.js
    ├── index.mjs
    └── index.d.ts
```

## Development Workflow

```bash
# Start development mode (watch for changes)
pnpm dev

# In another terminal, start Storybook (once configured)
pnpm storybook

# Run tests
pnpm test

# Type check all packages
pnpm typecheck

# Lint code
pnpm lint
```

## Testing React Components

Create a test app in the workspace root:

```bash
# Create test app
mkdir test-app && cd test-app
npm init -y
npm install react react-dom vite @vitejs/plugin-react

# Create vite.config.js
cat > vite.config.js << 'EOF'
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@eva-suite/sovereign-react': '../packages/react/src/index.ts',
      '@eva-suite/sovereign-core': '../packages/core/src/index.ts',
    },
  },
});
EOF

# Create src/main.jsx
mkdir src
cat > src/main.jsx << 'EOF'
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '@eva-suite/sovereign-core/styles/tokens.css';
import '@eva-suite/sovereign-core/styles/typography.css';
import '@eva-suite/sovereign-core/styles/buttons.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
EOF

# Create src/App.jsx
cat > src/App.jsx << 'EOF'
import { I18nProvider, GCHeader, GCFooter, Button, Alert } from '@eva-suite/sovereign-react';

function App() {
  return (
    <I18nProvider defaultLocale="en-CA">
      <GCHeader 
        title="EVA Suite Demo"
        subtitle="Government of Canada Design System"
        showSignIn
      />
      <main id="main-content" style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className="gc-h1-main">Welcome to EVA-Sovereign-UI</h1>
        
        <Alert variant="success" title="Success!">
          All components loaded successfully.
        </Alert>
        
        <div style={{ marginTop: '24px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <Button variant="supertask">Supertask Button</Button>
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="danger">Danger Button</Button>
          <Button variant="link">Link Button</Button>
          <Button variant="signin">Sign In</Button>
        </div>
      </main>
      <GCFooter />
    </I18nProvider>
  );
}

export default App;
EOF

# Create index.html
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en-CA">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EVA-Sovereign-UI Test</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
EOF

# Start dev server
npm run dev
```

## Known Issues (Expected)

### TypeScript Errors Before Install
You'll see TypeScript errors in VSCode until you run `pnpm install`:
- "Cannot find module 'react'" 
- "Cannot find module '@eva-suite/sovereign-core'"

**Solution**: Run `pnpm install` from the workspace root.

### styled-jsx Support
React components use styled-jsx for scoped CSS. To enable in a production app:

```bash
npm install styled-jsx
```

Then configure your bundler (Vite/Next.js/Webpack) to support styled-jsx.

**Alternative**: Extract styles to separate CSS modules.

## Next Steps

1. ✅ Run `pnpm install`
2. ✅ Run `pnpm build` 
3. ✅ Create test app (see above)
4. ✅ Verify all 6 button variants render correctly
5. ✅ Test language toggle (EN ↔ FR)
6. ✅ Test accessibility (keyboard navigation, screen reader)
7. 🔄 Start Svelte 5 package implementation
8. 🔄 Setup Storybook for component documentation

## Useful Commands

```bash
# Clean all build artifacts
pnpm clean

# Rebuild everything from scratch
pnpm clean && pnpm install && pnpm build

# Watch for changes in specific package
cd packages/react && pnpm dev

# Run tests with UI
pnpm test:ui

# Generate test coverage
pnpm test -- --coverage
```

## Troubleshooting

### pnpm install fails
```bash
# Clear pnpm cache
pnpm store prune

# Delete node_modules and lock file
rm -rf node_modules pnpm-lock.yaml

# Reinstall
pnpm install
```

### Build errors
```bash
# Ensure TypeScript is installed
pnpm add -Dw typescript

# Check tsconfig.json in each package
# Verify all imports resolve correctly
```

### React components don't render
```bash
# Verify React peer dependencies
cd packages/react
pnpm list react react-dom

# Ensure @eva-suite/sovereign-core is built
cd ../core
pnpm build
```

## Demo Checklist

For December 24, 2025 demo at https://marcopolo483.github.io/eva-suite/:

- [ ] All React components functional
- [ ] Bilingual support working (EN/FR toggle)
- [ ] All 6 button variants display correctly
- [ ] GC Header with Canada flag and wordmark
- [ ] GC Footer with mandatory links
- [ ] H1 red bar renders correctly
- [ ] WCAG AAA contrast ratios validated
- [ ] Keyboard navigation functional
- [ ] Screen reader compatible
- [ ] Responsive design (mobile/tablet/desktop)
- [ ] Storybook deployed with component demos

---

**Need help? Check STATUS.md for current implementation status.**
