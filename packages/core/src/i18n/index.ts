/**
 * i18n Core - Framework-agnostic internationalization
 */

import { enCA } from './en-CA';
import { frCA } from './fr-CA';
import type { Locale } from '../types';

export type TranslationCatalog = typeof enCA | typeof frCA;

export const catalogs: Record<Locale, any> = {
  'en-CA': enCA,
  'fr-CA': frCA,
};

/**
 * Get nested translation value by dot-notation path
 * Example: get(enCA, 'header.signIn') => 'Sign in'
 */
function get(obj: any, path: string): string {
  const keys = path.split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result && typeof result === 'object' && key in result) {
      result = result[key];
    } else {
      return path; // Return key if not found
    }
  }
  
  return typeof result === 'string' ? result : path;
}

/**
 * Simple variable interpolation
 * Example: interpolate('Hello {name}', { name: 'Alice' }) => 'Hello Alice'
 */
function interpolate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    return vars[key]?.toString() ?? match;
  });
}

/**
 * Translate function
 */
export function translate(
  locale: Locale,
  key: string,
  vars?: Record<string, string | number>
): string {
  const catalog = catalogs[locale];
  const translation = get(catalog, key);
  
  if (vars) {
    return interpolate(translation, vars);
  }
  
  return translation;
}

/**
 * Create translator function for specific locale
 */
export function createTranslator(locale: Locale) {
  return (key: string, vars?: Record<string, string | number>) => {
    return translate(locale, key, vars);
  };
}

export { enCA, frCA };
export type { Locale };
