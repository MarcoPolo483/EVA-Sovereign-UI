/**
 * Australian Government Design System Tokens
 * Based on: https://designsystem.gov.au/
 * 
 * Australian Government Design System (Gold)
 * WCAG 2.1 AA compliant
 * Inclusive design principles
 */

export const australiaGov = {
  id: 'australia-gov',
  label: 'Australian Government',
  defaultLocale: 'en-AU',
  supportedLocales: ['en-AU'],
  themeClassName: 'eva-theme-australia-gov',
  
  colors: {
    // Australian Government primary colors
    primary: '#00698f',        // AU Gov Blue
    primaryHover: '#115361',   // Darker blue
    primaryActive: '#0d3f4f',
    primaryLight: '#e6f4f9',
    
    secondary: '#313131',      // Dark grey
    secondaryHover: '#1f1f1f',
    
    // Accent colors
    accent: '#00a9e0',         // Light blue
    link: '#00698f',           // Blue
    linkHover: '#115361',
    linkVisited: '#551a8b',    // Purple
    
    // Semantic colors
    success: '#007a3d',        // Green
    successLight: '#e5f5ed',
    warning: '#f9b000',        // Gold/amber
    warningLight: '#fef9e6',
    error: '#d42b00',          // Red/orange
    errorLight: '#fdf0ed',
    info: '#00698f',           // Blue
    infoLight: '#e6f4f9',
    
    // Text colors
    textPrimary: '#000000',    // Pure black for AA compliance
    textSecondary: '#313131',  // Dark grey
    textDisabled: '#717171',   // Mid grey
    textInverse: '#ffffff',
    
    // Background colors
    background: '#ffffff',
    backgroundSecondary: '#f2f2f2', // Light grey
    backgroundDark: '#313131',
    backgroundShade: '#f8f8f8',     // Subtle grey
    
    // Border colors
    border: '#d7d7d7',         // Light grey
    borderDark: '#717171',
    borderFocus: '#0076b0',    // Focus blue (brighter than primary)
    
    // Component-specific
    headerBackground: '#313131', // Dark grey
    headerText: '#ffffff',
    footerBackground: '#f2f2f2',
    footerText: '#000000',
    
    // Focus and interaction
    focus: '#0076b0',          // Bright blue for focus
    focusOutline: '3px solid #0076b0',
  },
  
  typography: {
    // Open Sans (official AU Gov font)
    fontFamily: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontFamilyHeadings: '"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontFamilyMono: '"Courier New", Courier, monospace',
    
    // Font sizes (rem-based)
    fontSizeBase: '16px',
    fontSizeXs: '0.75rem',    // 12px
    fontSizeSm: '0.875rem',   // 14px
    fontSizeMd: '1rem',       // 16px (base)
    fontSizeLg: '1.125rem',   // 18px
    fontSizeXl: '1.25rem',    // 20px
    fontSize2xl: '1.5rem',    // 24px
    fontSize3xl: '2rem',      // 32px
    fontSize4xl: '2.5rem',    // 40px
    fontSize5xl: '3rem',      // 48px
    
    // Font weights
    fontWeightLight: 300,
    fontWeightNormal: 400,
    fontWeightSemibold: 600,
    fontWeightBold: 700,
    
    // Line heights
    lineHeightTight: 1.2,
    lineHeightNormal: 1.5,
    lineHeightRelaxed: 1.6,
    
    letterSpacingNormal: '0',
  },
  
  spacing: {
    // Australian Government spacing scale
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '5rem',    // 80px
    '5xl': '6rem',    // 96px
  },
  
  borderRadius: {
    none: '0',
    sm: '2px',
    base: '4px',
    md: '6px',
    lg: '8px',
    xl: '12px',
    full: '9999px',
  },
  
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
    base: '0 2px 4px rgba(0, 0, 0, 0.12)',
    md: '0 4px 8px rgba(0, 0, 0, 0.12)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.12)',
    xl: '0 16px 32px rgba(0, 0, 0, 0.15)',
  },
  
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modalBackdrop: 1040,
    modal: 1050,
    popover: 1060,
    tooltip: 1070,
  },
  
  transitions: {
    fast: '0.15s ease',
    base: '0.3s ease',
    slow: '0.5s ease',
  },
  
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    '2xl': '1400px',
  },
  
  // AU Gov-specific components
  components: {
    header: {
      backgroundColor: '#313131',
      textColor: '#ffffff',
      height: '80px',
    },
    footer: {
      backgroundColor: '#f2f2f2',
      borderTop: '1px solid #d7d7d7',
    },
    coat_of_arms: {
      height: '48px',
      margin: '16px',
    },
  },
  
  // Accessibility
  a11y: {
    focusOutlineWidth: '3px',
    focusOutlineStyle: 'solid',
    focusOutlineColor: '#0076b0',
    focusOutlineOffset: '2px',
    minTouchTarget: '44px',
    minContrastRatio: 4.5,     // WCAG AA
  },
  
  notes: {
    wcagLevel: 'AA',
    contrastTested: true,
    officialSource: 'https://designsystem.gov.au/',
    fontFamily: 'Open Sans (free and open source)',
    lastUpdated: '2025-11-28',
  },
} as const;

export type AustraliaGovTokens = typeof australiaGov;
