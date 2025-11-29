/**
 * New Zealand Government Design System Tokens
 * Based on: https://design-system-alpha.digital.govt.nz/
 * 
 * New Zealand Government Design System (Alpha)
 * WCAG 2.1 AA compliant
 * Te Reo Māori bilingual support
 */

export const newZealandGov = {
  id: 'nz-gov',
  label: 'New Zealand Government / Te Kāwanatanga o Aotearoa',
  defaultLocale: 'en-NZ',
  supportedLocales: ['en-NZ', 'mi-NZ'],  // English + Te Reo Māori
  themeClassName: 'eva-theme-nz-gov',
  
  colors: {
    // NZ Government primary colors
    primary: '#0c5a8e',        // NZ Blue
    primaryHover: '#084470',   // Darker blue
    primaryActive: '#062f4e',
    primaryLight: '#e6f2f7',
    
    secondary: '#2d2d2d',      // Charcoal
    secondaryHover: '#1a1a1a',
    
    // Accent colors
    accent: '#00b4d8',         // Bright blue
    link: '#0c5a8e',           // Blue
    linkHover: '#084470',
    linkVisited: '#5e3a7b',    // Purple
    
    // Semantic colors
    success: '#008542',        // Green
    successLight: '#e5f5ed',
    warning: '#ff9800',        // Orange
    warningLight: '#fff3e0',
    error: '#d32f2f',          // Red
    errorLight: '#ffebee',
    info: '#0c5a8e',           // Blue
    infoLight: '#e6f2f7',
    
    // Text colors
    textPrimary: '#2d2d2d',    // Charcoal
    textSecondary: '#595959',  // Grey
    textDisabled: '#9e9e9e',   // Light grey
    textInverse: '#ffffff',
    
    // Background colors
    background: '#ffffff',
    backgroundSecondary: '#f5f5f5', // Light grey
    backgroundDark: '#2d2d2d',
    backgroundAccent: '#f0f8fc',    // Pale blue
    
    // Border colors
    border: '#e0e0e0',         // Light grey
    borderDark: '#9e9e9e',
    borderFocus: '#0078bf',    // Focus blue (brighter)
    
    // Component-specific
    headerBackground: '#2d2d2d', // Charcoal
    headerText: '#ffffff',
    footerBackground: '#f5f5f5',
    footerText: '#2d2d2d',
    
    // Focus and interaction
    focus: '#0078bf',          // Bright blue
    focusOutline: '3px solid #0078bf',
  },
  
  typography: {
    // Fira Sans (NZ Gov recommended)
    fontFamily: '"Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontFamilyHeadings: '"Fira Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontFamilyMono: '"Fira Mono", "Courier New", Courier, monospace',
    
    // Font sizes
    fontSizeBase: '16px',
    fontSizeXs: '0.75rem',    // 12px
    fontSizeSm: '0.875rem',   // 14px
    fontSizeMd: '1rem',       // 16px
    fontSizeLg: '1.125rem',   // 18px
    fontSizeXl: '1.25rem',    // 20px
    fontSize2xl: '1.5rem',    // 24px
    fontSize3xl: '2rem',      // 32px
    fontSize4xl: '2.5rem',    // 40px
    fontSize5xl: '3rem',      // 48px
    
    // Font weights
    fontWeightLight: 300,
    fontWeightNormal: 400,
    fontWeightMedium: 500,
    fontWeightSemibold: 600,
    fontWeightBold: 700,
    
    // Line heights
    lineHeightTight: 1.2,
    lineHeightNormal: 1.5,
    lineHeightRelaxed: 1.7,
    
    letterSpacingNormal: '0',
  },
  
  spacing: {
    // NZ Gov spacing scale (8px base)
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
    xs: '0 1px 2px rgba(0, 0, 0, 0.08)',
    sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
    base: '0 4px 8px rgba(0, 0, 0, 0.1)',
    md: '0 8px 16px rgba(0, 0, 0, 0.1)',
    lg: '0 12px 24px rgba(0, 0, 0, 0.12)',
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
  
  // NZ Gov-specific components
  components: {
    header: {
      backgroundColor: '#2d2d2d',
      textColor: '#ffffff',
      height: '80px',
    },
    footer: {
      backgroundColor: '#f5f5f5',
      borderTop: '1px solid #e0e0e0',
    },
    banner: {
      backgroundColor: '#0c5a8e',
      textColor: '#ffffff',
      height: '48px',
    },
  },
  
  // Accessibility (including Māori language support)
  a11y: {
    focusOutlineWidth: '3px',
    focusOutlineStyle: 'solid',
    focusOutlineColor: '#0078bf',
    focusOutlineOffset: '2px',
    minTouchTarget: '44px',
    minContrastRatio: 4.5,     // WCAG AA
    macronSupport: true,       // Te Reo Māori diacritics (ā, ē, ī, ō, ū)
  },
  
  notes: {
    wcagLevel: 'AA',
    contrastTested: true,
    bilingualDefault: 'English + Te Reo Māori',
    macronSupport: 'Essential for Te Reo Māori (ā, ē, ī, ō, ū)',
    officialSource: 'https://design-system-alpha.digital.govt.nz/',
    fontFamily: 'Fira Sans (free and open source)',
    status: 'Alpha (actively developed)',
    lastUpdated: '2025-11-28',
  },
} as const;

export type NewZealandGovTokens = typeof newZealandGov;
