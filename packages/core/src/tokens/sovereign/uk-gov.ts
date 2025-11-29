/**
 * UK Government Design System Tokens
 * Based on: https://design-system.service.gov.uk/
 * 
 * GOV.UK Design System (GDS)
 * WCAG 2.1 AA compliant
 * Accessibility-first approach
 */

export const ukGov = {
  id: 'uk-gov',
  label: 'United Kingdom Government',
  defaultLocale: 'en-GB',
  supportedLocales: ['en-GB', 'cy-GB'],  // English + Welsh
  themeClassName: 'eva-theme-uk-gov',
  
  colors: {
    // GOV.UK Brand colors
    primary: '#1d70b8',        // GOV.UK Blue
    primaryHover: '#003078',   // GOV.UK Dark Blue
    primaryActive: '#002d5c',
    primaryLight: '#d2e2f1',   // Light blue
    
    secondary: '#505a5f',      // GOV.UK Grey
    secondaryHover: '#383f43',
    
    // Accent and links
    accent: '#1d70b8',         // Blue
    link: '#1d70b8',           // GOV.UK Link blue
    linkHover: '#003078',      // Dark blue hover
    linkVisited: '#4c2c92',    // Purple
    linkActive: '#0b0c0c',     // Black
    
    // Semantic colors
    success: '#00703c',        // GOV.UK Green
    successLight: '#cce2d8',
    warning: '#f47738',        // GOV.UK Orange
    warningLight: '#fef7f7',
    error: '#d4351c',          // GOV.UK Red
    errorLight: '#f6d7d2',
    info: '#1d70b8',           // Blue
    
    // Text colors
    textPrimary: '#0b0c0c',    // GOV.UK Text (almost black)
    textSecondary: '#505a5f',  // Grey
    textDisabled: '#b1b4b6',   // Light grey
    textInverse: '#ffffff',
    
    // Background colors
    background: '#ffffff',
    backgroundSecondary: '#f3f2f1', // GOV.UK Light grey
    backgroundDark: '#0b0c0c',
    
    // Border colors
    border: '#b1b4b6',         // GOV.UK Mid grey
    borderDark: '#505a5f',
    borderFocus: '#ffdd00',    // GOV.UK Focus yellow
    
    // Component-specific
    headerBackground: '#0b0c0c', // Black
    headerText: '#ffffff',
    footerBackground: '#f3f2f1',
    footerText: '#0b0c0c',
    
    // Focus and interaction
    focus: '#ffdd00',          // GOV.UK Focus yellow (distinctive!)
    focusOutline: '3px solid #ffdd00', // High contrast
    focusText: '#0b0c0c',      // Text remains black on yellow
  },
  
  typography: {
    // GOV.UK Transport (proprietary) with fallbacks
    fontFamily: '"GDS Transport", "Noto Sans", Arial, sans-serif',
    fontFamilyHeadings: '"GDS Transport", "Noto Sans", Arial, sans-serif',
    fontFamilyMono: '"Courier New", Courier, monospace',
    fontFamilyTabular: '"GDS Transport", "Noto Sans", monospace', // For numbers
    
    // GOV.UK Font sizes (px-based for consistency)
    fontSizeBase: '16px',     // Body (mobile)
    fontSizeBaseDesktop: '19px', // Body (desktop)
    fontSizeXs: '14px',
    fontSizeSm: '16px',
    fontSizeMd: '19px',       // Default body
    fontSizeLg: '24px',
    fontSizeXl: '27px',
    fontSize2xl: '32px',
    fontSize3xl: '36px',
    fontSize4xl: '48px',
    fontSize5xl: '64px',
    
    // Font weights
    fontWeightNormal: 400,
    fontWeightBold: 700,       // GOV.UK uses only 400 and 700
    
    // Line heights
    lineHeightTight: 1.2,
    lineHeightNormal: 1.5,
    lineHeightRelaxed: 1.6,
    
    letterSpacingNormal: '0',
  },
  
  spacing: {
    // GOV.UK spacing scale (based on 4px)
    xs: '5px',        // GOV.UK 1
    sm: '10px',       // GOV.UK 2
    md: '15px',       // GOV.UK 3
    lg: '20px',       // GOV.UK 4
    xl: '25px',       // GOV.UK 5
    '2xl': '30px',    // GOV.UK 6
    '3xl': '40px',    // GOV.UK 7
    '4xl': '50px',    // GOV.UK 8
    '5xl': '60px',    // GOV.UK 9
  },
  
  borderRadius: {
    none: '0',
    base: '0',        // GOV.UK uses minimal rounding
    sm: '0',
    md: '0',
    lg: '0',
    full: '0',        // No pill shapes in GOV.UK
  },
  
  shadows: {
    // GOV.UK uses minimal shadows
    none: 'none',
    sm: '0 2px 0 #0b0c0c',    // GOV.UK button shadow
    base: '0 2px 0 #0b0c0c',
    md: '0 4px 0 #0b0c0c',
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
    fast: '0.1s ease',
    base: '0.3s ease',
    slow: '0.5s ease',
  },
  
  breakpoints: {
    xs: '0px',
    sm: '320px',      // GOV.UK mobile
    md: '641px',      // GOV.UK tablet
    lg: '769px',      // GOV.UK desktop
    xl: '1020px',     // Wide
    '2xl': '1280px',
  },
  
  // GOV.UK-specific components
  components: {
    phase_banner: {
      backgroundColor: '#1d70b8',
      textColor: '#ffffff',
      tagBackgroundColor: '#1d70b8',
      tagTextColor: '#ffffff',
    },
    header: {
      backgroundColor: '#0b0c0c',
      textColor: '#ffffff',
      borderBottom: '10px solid #1d70b8', // Blue stripe
      height: '60px',
    },
    footer: {
      backgroundColor: '#f3f2f1',
      borderTop: '1px solid #b1b4b6',
    },
    cookie_banner: {
      backgroundColor: '#f3f2f1',
      borderBottom: '1px solid #b1b4b6',
    },
  },
  
  // Accessibility (GOV.UK is accessibility-first)
  a11y: {
    focusOutlineWidth: '3px',
    focusOutlineStyle: 'solid',
    focusOutlineColor: '#ffdd00',    // Yellow focus
    focusOutlineOffset: '0px',
    focusBackgroundColor: '#ffdd00',  // Yellow background on focus
    focusTextColor: '#0b0c0c',        // Black text on yellow
    minTouchTarget: '44px',
    minContrastRatio: 4.5,            // WCAG AA minimum
  },
  
  notes: {
    wcagLevel: 'AA',
    contrastTested: true,
    accessibilityFirst: true,
    distinctiveFocus: 'Yellow focus rings are a GOV.UK trademark',
    officialSource: 'https://design-system.service.gov.uk/',
    fontLicense: 'GDS Transport requires license for use',
    fallbackFont: 'Use Noto Sans as free alternative',
    lastUpdated: '2025-11-28',
  },
} as const;

export type UKGovTokens = typeof ukGov;
