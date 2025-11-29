/**
 * Official Canada.ca i18n Catalogs
 * English (Canada) - en-CA
 */

export const enCA = {
  common: {
    skipToContent: 'Skip to main content',
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    warning: 'Warning',
    info: 'Information',
    close: 'Close',
    dismiss: 'Dismiss',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    delete: 'Delete',
    edit: 'Edit',
    submit: 'Submit',
    next: 'Next',
    previous: 'Previous',
    search: 'Search',
    filter: 'Filter',
    clear: 'Clear',
    reset: 'Reset',
  },

  header: {
    governmentOfCanada: 'Government of Canada',
    languageSelection: 'Language selection',
    switchToFrench: 'Français',
    signIn: 'Sign in',
    menu: 'Menu',
    search: 'Search Canada.ca',
  },

  footer: {
    about: 'About',
    contact: 'Contact',
    terms: 'Terms and conditions',
    privacy: 'Privacy',
    copyright: '© His Majesty the King in Right of Canada',
    socialMedia: 'Social media',
    mobileApps: 'Mobile applications',
    aboutCanadaCa: 'About Canada.ca',
    aboutGovernment: 'About government',
  },

  navigation: {
    breadcrumbs: 'You are here:',
    mainNavigation: 'Main navigation',
    footerNavigation: 'Footer navigation',
    pageNavigation: 'Page navigation',
  },

  forms: {
    required: 'Required',
    optional: 'Optional',
    errorSummary: 'Error summary',
    errorsFound: '{count} error(s) found',
    fieldRequired: 'This field is required',
    invalidEmail: 'Please enter a valid email address',
    invalidPhone: 'Please enter a valid phone number',
    invalidPostalCode: 'Please enter a valid postal code',
    selectOption: 'Please select an option',
    characterLimit: '{current} of {max} characters',
  },

  errors: {
    pageNotFound: 'Page not found',
    serverError: 'Server error',
    accessDenied: 'Access denied',
    sessionExpired: 'Your session has expired',
    tryAgain: 'Please try again',
    contactSupport: 'If the problem persists, contact support',
  },

  accessibility: {
    newWindow: 'Opens in a new window',
    externalLink: 'External link',
    downloadFile: 'Download file',
    sortAscending: 'Sort ascending',
    sortDescending: 'Sort descending',
    expandSection: 'Expand section',
    collapseSection: 'Collapse section',
    showMore: 'Show more',
    showLess: 'Show less',
  },

  dates: {
    today: 'Today',
    yesterday: 'Yesterday',
    tomorrow: 'Tomorrow',
    dateFormat: 'YYYY-MM-DD',
    lastUpdated: 'Last updated:',
    modified: 'Date modified:',
  },

  eva: {
    title: 'EVA Suite',
    subtitle: 'Enterprise Virtual Assistant for the Government of Canada',
    welcome: 'Welcome to EVA Suite',
    description: 'A comprehensive enterprise system for Government of Canada operations',
  },
} as const;

export type TranslationKeys = typeof enCA;
