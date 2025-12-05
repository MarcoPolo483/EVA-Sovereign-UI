/**
 * Theme and i18n Provider
 * Initializes theme engine and i18n service with saved preferences
 */

import { themeEngine } from '@/themes';
import { i18n } from '@/i18n/i18n-service';

export async function initializeProviders(): Promise<void> {
  // Load Canadian locales only
  await i18n.loadLocale('en-CA');
  await i18n.loadLocale('fr-CA');
  
  // Check for saved preferences
  const savedLocale = localStorage.getItem('lab-locale') || 'en-CA';
  const savedTheme = localStorage.getItem('lab-theme') || 'canada-gc-light';
  const reducedMotion = localStorage.getItem('lab-reduced-motion') === 'true';
  const highContrast = localStorage.getItem('lab-high-contrast') === 'true';
  
  // Apply locale
  await i18n.setLocale(savedLocale);
  
  // Apply theme
  themeEngine.applyTheme(savedTheme);
  
  // Apply accessibility preferences
  if (reducedMotion) {
    document.documentElement.style.setProperty('--eva-transition-duration', '0.01ms');
  }
  
  if (highContrast) {
    themeEngine.applyTheme('gc-high-contrast');
  }
  
  // Set lang attribute on HTML
  document.documentElement.lang = savedLocale;
  
  console.log(`✅ Providers initialized: locale=${savedLocale}, theme=${savedTheme}`);
}

/**
 * Save user preferences to localStorage
 */
export function savePreferences(locale: string, theme: string, options?: {
  reducedMotion?: boolean;
  highContrast?: boolean;
}) {
  localStorage.setItem('lab-locale', locale);
  localStorage.setItem('lab-theme', theme);
  
  if (options?.reducedMotion !== undefined) {
    localStorage.setItem('lab-reduced-motion', String(options.reducedMotion));
  }
  
  if (options?.highContrast !== undefined) {
    localStorage.setItem('lab-high-contrast', String(options.highContrast));
  }
}
