# @eva-suite/sovereign-core

Core design tokens, styles, and utilities for the EVA Sovereign UI library.

## Installation

```bash
npm install @eva-suite/sovereign-core
```

## Usage

### Import CSS Styles

```typescript
import '@eva-suite/sovereign-core/dist/styles/tokens.css';
import '@eva-suite/sovereign-core/dist/styles/typography.css';
import '@eva-suite/sovereign-core/dist/styles/buttons.css';
```

### Use Design Tokens

```typescript
import { GCDesignTokens } from '@eva-suite/sovereign-core/tokens';

const primaryColor = GCDesignTokens.colors.link.default; // #284162
```

### Utility Functions

```typescript
import { 
  getContrastRatio, 
  meetsWCAG, 
  announce 
} from '@eva-suite/sovereign-core';

// Check contrast
const ratio = getContrastRatio('#FFFFFF', '#333333'); // 12.63
const passes = meetsWCAG('#FFFFFF', '#333333', 'AAA', 'normal'); // true

// Announce to screen readers
announce('Form submitted successfully', 'polite');
```

## CSS Custom Properties

All design tokens are available as CSS variables:

```css
.my-component {
  font-family: var(--gc-font-heading);
  color: var(--gc-color-text-primary);
  padding: var(--gc-spacing-3);
}
```

## License

MIT
