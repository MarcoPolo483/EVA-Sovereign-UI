import { clsx, type ClassValue } from 'clsx';

/**
 * Utility for merging class names with clsx
 * Used throughout components for conditional className application
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
