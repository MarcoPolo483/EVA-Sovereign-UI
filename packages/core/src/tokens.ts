/**
 * Official Canada.ca Design System - Design Tokens
 * Source: https://design.canada.ca/
 * 
 * Typography specification from Canada.ca:
 * - Headings: Lato font family (bold)
 * - Body: Noto Sans font family
 * - Mandatory 65 character line length for text
 * 
 * Color specification:
 * - WCAG AAA compliant (7:1 contrast for normal text, 4.5:1 for large)
 * - Official link colors with hover/visited states
 */

export const GCDesignTokens = {
  // Typography - Desktop/Tablet
  typography: {
    fonts: {
      heading: "'Lato', sans-serif",
      body: "'Noto Sans', sans-serif",
    },
    desktop: {
      h1: { size: '41px', weight: 'bold', lineHeight: '1.2' },
      h2: { size: '39px', weight: 'bold', lineHeight: '1.2' },
      h3: { size: '29px', weight: 'bold', lineHeight: '1.3' },
      h4: { size: '27px', weight: 'bold', lineHeight: '1.3' },
      h5: { size: '24px', weight: 'bold', lineHeight: '1.4' },
      h6: { size: '22px', weight: 'bold', lineHeight: '1.4' },
      body: { size: '20px', weight: 'normal', lineHeight: '1.6' },
    },
    mobile: {
      h1: { size: '37px', weight: 'bold', lineHeight: '1.2' },
      h2: { size: '35px', weight: 'bold', lineHeight: '1.2' },
      h3: { size: '26px', weight: 'bold', lineHeight: '1.3' },
      h4: { size: '22px', weight: 'bold', lineHeight: '1.3' },
      h5: { size: '20px', weight: 'bold', lineHeight: '1.4' },
      h6: { size: '18px', weight: 'bold', lineHeight: '1.4' },
      body: { size: '18px', weight: 'normal', lineHeight: '1.6' },
    },
    // H1 red bar (gc-thickline)
    h1Bar: {
      color: '#A62A1E',
      width: '72px',
      height: '6px',
      position: '0.2em', // 7.6px underneath H1
      alignment: 'left',
    },
    lineLength: {
      maxCharacters: 65,
      description: 'Constrain text line length to 65 characters for readability',
    },
  },

  // Colors - Official Canada.ca palette (WCAG AAA compliant)
  colors: {
    // Backgrounds
    background: {
      default: '#FFFFFF',
      secondary: '#F5F5F5',
    },
    
    // Text
    text: {
      primary: '#333333',
      secondary: '#666666',
      inverse: '#FFFFFF',
    },
    
    // Links (mandatory colors)
    link: {
      default: '#284162',
      hover: '#0535d2',
      visited: '#7834bc',
      focus: '#0535d2',
    },
    
    // Accents and actions
    accent: {
      primary: '#26374A',
      error: '#d3080c',
      success: '#2e7d32',
      warning: '#f57c00',
      info: '#0288d1',
    },
    
    // Form states
    form: {
      error: '#d3080c',
      required: '#d3080c',
      selected: '#333333',
    },
    
    // GC Brand
    brand: {
      h1Bar: '#A62A1E',
      canadaRed: '#C8102E', // Official Canada wordmark red
      flagRed: '#C8102E',
    },
  },

  // Spacing - 8px grid system
  spacing: {
    base: '8px',
    scale: {
      0: '0',
      1: '8px',   // 1 unit
      2: '16px',  // 2 units
      3: '24px',  // 3 units
      4: '32px',  // 4 units
      5: '40px',  // 5 units
      6: '48px',  // 6 units
      8: '64px',  // 8 units
      10: '80px', // 10 units
      12: '96px', // 12 units
      16: '128px', // 16 units
    },
  },

  // Breakpoints - Responsive design
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1200px',
    wide: '1600px',
  },

  // Accessibility - Touch targets and focus
  a11y: {
    minTouchTarget: '44px',
    focusOutlineWidth: '3px',
    focusOutlineColor: '#0535d2',
    focusOutlineOffset: '2px',
    minContrastRatioNormal: '7:1',   // WCAG AAA
    minContrastRatioLarge: '4.5:1',  // WCAG AAA for large text (18pt+)
  },

  // Button sizes
  buttons: {
    height: {
      default: '44px',
      large: '52px',
      small: '36px',
      extraSmall: '28px',
    },
    padding: {
      horizontal: '16px',
      vertical: '8px',
    },
  },

  // Z-index layers
  zIndex: {
    skipLink: 9999,
    modal: 1000,
    dropdown: 100,
    header: 50,
    footer: 10,
    default: 1,
  },

  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    base: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
    base: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 6px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },

  // Border radius
  radii: {
    none: '0',
    sm: '2px',
    base: '4px',
    md: '6px',
    lg: '8px',
    full: '9999px',
  },
} as const;

export type GCDesignTokens = typeof GCDesignTokens;
