/**
 * US Federal Design System Tokens
 * Based on: https://designsystem.digital.gov/
 * 
 * U.S. Web Design System (USWDS) v3.0
 * WCAG 2.1 AA compliant
 * Section 508 compliant
 */

export const usFederal = {
  id: 'us-federal',
  label: 'United States Federal Government',
  defaultLocale: 'en-US',
  supportedLocales: ['en-US', 'es-US'],
  themeClassName: 'eva-theme-us-federal',
  
  colors: {
    // USWDS Primary colors
    primary: '#005ea2',        // USWDS Blue 60v
    primaryHover: '#0050d8',   // USWDS Blue 70v
    primaryActive: '#1a4480',  // USWDS Blue 80v
    primaryLight: '#eff6fb',   // USWDS Blue 5
    
    secondary: '#d83933',      // USWDS Red 60v (accent)
    secondaryHover: '#b50909',
    
    // Base colors
    accent: '#00bde3',         // USWDS Cyan 30v
    link: '#005ea2',           // USWDS Blue 60v
    linkHover: '#1a4480',      // USWDS Blue 80v
    linkVisited: '#54278f',    // USWDS Violet 70v
    
    // Semantic colors
    success: '#00a91c',        // USWDS Green 50v
    successLight: '#e7f4e4',   // USWDS Green 5
    warning: '#ffbe2e',        // USWDS Gold 20v
    warningLight: '#faf3d1',   // USWDS Yellow 10v
    error: '#d54309',          // USWDS Red warm 50v
    errorLight: '#f4e3db',     // USWDS Red warm 10v
    info: '#00bde3',           // USWDS Cyan 30v
    infoLight: '#e7f6f8',      // USWDS Cyan 5
    
    // Text colors
    textPrimary: '#1b1b1b',    // USWDS Gray 90
    textSecondary: '#565c65',  // USWDS Gray 70
    textDisabled: '#a9aeb1',   // USWDS Gray 50
    textInverse: '#ffffff',
    
    // Background colors
    background: '#ffffff',
    backgroundSecondary: '#f0f0f0', // USWDS Gray 5
    backgroundDark: '#1b1b1b',      // USWDS Gray 90
    
    // Border colors
    border: '#dfe1e2',         // USWDS Gray 10
    borderDark: '#71767a',     // USWDS Gray 60
    borderFocus: '#2491ff',    // USWDS Blue bright 40v
    
    // Component-specific
    headerBackground: '#162e51', // USWDS Blue warm 90v (darker)
    headerText: '#ffffff',
    footerBackground: '#f0f0f0',
    footerText: '#1b1b1b',
    
    // Focus and interaction
    focus: '#2491ff',          // USWDS Blue bright 40v
    focusOutline: '4px solid #2491ff', // USWDS focus style
  },
  
  typography: {
    // USWDS Font stacks
    fontFamily: '"Public Sans Web", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontFamilyHeadings: '"Merriweather Web", Georgia, Cambria, "Times New Roman", Times, serif',
    fontFamilyMono: '"Roboto Mono Web", "Bitstream Vera Sans Mono", "Consolas", "Courier", monospace',
    
    // USWDS Font sizes (using system scale)
    fontSizeBase: '16px',
    fontSizeXs: '0.81rem',    // 13px (3xs)
    fontSizeSm: '0.88rem',    // 14px (2xs)
    fontSizeMd: '1rem',       // 16px (base)
    fontSizeLg: '1.06rem',    // 17px (sm)
    fontSizeXl: '1.31rem',    // 21px (lg)
    fontSize2xl: '1.56rem',   // 25px (xl)
    fontSize3xl: '1.94rem',   // 31px (2xl)
    fontSize4xl: '2.44rem',   // 39px (3xl)
    fontSize5xl: '3.06rem',   // 49px (4xl)
    
    // Font weights
    fontWeightLight: 300,
    fontWeightNormal: 400,
    fontWeightSemibold: 600,
    fontWeightBold: 700,
    
    // Line heights
    lineHeightTight: 1.1,
    lineHeightNormal: 1.5,
    lineHeightRelaxed: 1.7,
    lineHeightLoose: 2,
    
    letterSpacingNormal: '0',
  },
  
  spacing: {
    // USWDS spacing units (based on 8px grid)
    xs: '0.25rem',    // 4px (0.5 units)
    sm: '0.5rem',     // 8px (1 unit)
    md: '1rem',       // 16px (2 units)
    lg: '1.5rem',     // 24px (3 units)
    xl: '2rem',       // 32px (4 units)
    '2xl': '3rem',    // 48px (6 units)
    '3xl': '4rem',    // 64px (8 units)
    '4xl': '5rem',    // 80px (10 units)
    '5xl': '6rem',    // 96px (12 units)
  },
  
  borderRadius: {
    none: '0',
    sm: '2px',        // USWDS sm
    base: '0.25rem',  // USWDS md
    md: '0.375rem',
    lg: '0.5rem',     // USWDS lg
    xl: '0.75rem',
    full: '9999px',   // USWDS pill
  },
  
  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.1)',
    sm: '0 1px 4px rgba(0, 0, 0, 0.1)',
    base: '0 2px 8px rgba(0, 0, 0, 0.1)',
    md: '0 4px 16px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
    xl: '0 12px 48px rgba(0, 0, 0, 0.15)',
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
    sm: '640px',      // USWDS mobile-lg
    md: '768px',      // USWDS tablet
    lg: '1024px',     // USWDS desktop
    xl: '1280px',     // USWDS widescreen
    '2xl': '1440px',
  },
  
  // USWDS-specific components
  components: {
    banner: {
      backgroundColor: '#f0f0f0',
      textColor: '#1b1b1b',
      height: '40px',
      borderBottom: '1px solid #dfe1e2',
    },
    header: {
      backgroundColor: '#162e51',
      textColor: '#ffffff',
      height: '96px',
    },
    footer: {
      backgroundColor: '#f0f0f0',
      borderTop: '1px solid #dfe1e2',
    },
    identifier: {
      backgroundColor: '#1b1b1b',
      textColor: '#ffffff',
    },
  },
  
  // Accessibility
  a11y: {
    focusOutlineWidth: '4px',    // USWDS standard
    focusOutlineStyle: 'solid',
    focusOutlineColor: '#2491ff',
    focusOutlineOffset: '0px',   // USWDS uses 0 offset
    minTouchTarget: '44px',
    minContrastRatio: 4.5,       // WCAG AA (USWDS standard)
  },
  
  notes: {
    wcagLevel: 'AA',
    contrastTested: true,
    section508Compliant: true,
    officialSource: 'https://designsystem.digital.gov/',
    version: '3.0',
    lastUpdated: '2025-11-28',
  },
} as const;

export type USFederalTokens = typeof usFederal;
