/**
 * Global State Management
 * Lightweight reactive state using Lit's reactive properties
 */

import { LitElement, PropertyValues } from 'lit';
import { state } from 'lit/decorators.js';

export class AppState extends LitElement {
  @state() locale: string = 'en-CA';
  @state() theme: string = 'canada-gc-light';
  @state() inspectorOpen: boolean = true;
  @state() a11yMode: 'default' | 'high-contrast' | 'screen-reader' = 'default';
  @state() reducedMotion: boolean = false;
  @state() currentRoute: string = '/';

  constructor() {
    super();
    this.loadState();
  }

  private loadState() {
    this.locale = localStorage.getItem('lab-locale') || 'en-CA';
    this.theme = localStorage.getItem('lab-theme') || 'canada-gc-light';
    this.reducedMotion = localStorage.getItem('lab-reduced-motion') === 'true';
    this.inspectorOpen = localStorage.getItem('lab-inspector-open') !== 'false';
  }

  private saveState() {
    localStorage.setItem('lab-locale', this.locale);
    localStorage.setItem('lab-theme', this.theme);
    localStorage.setItem('lab-reduced-motion', String(this.reducedMotion));
    localStorage.setItem('lab-inspector-open', String(this.inspectorOpen));
  }

  protected updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);
    
    if (changedProperties.has('locale') || 
        changedProperties.has('theme') || 
        changedProperties.has('reducedMotion') ||
        changedProperties.has('inspectorOpen')) {
      this.saveState();
    }
  }

  setLocale(locale: string) {
    this.locale = locale;
    this.dispatchEvent(new CustomEvent('locale-change', { detail: locale, bubbles: true, composed: true }));
  }

  setTheme(theme: string) {
    this.theme = theme;
    this.dispatchEvent(new CustomEvent('theme-change', { detail: theme, bubbles: true, composed: true }));
  }

  toggleInspector() {
    this.inspectorOpen = !this.inspectorOpen;
  }

  toggleReducedMotion() {
    this.reducedMotion = !this.reducedMotion;
    this.dispatchEvent(new CustomEvent('reduced-motion-change', { 
      detail: this.reducedMotion, 
      bubbles: true, 
      composed: true 
    }));
  }

  setA11yMode(mode: typeof this.a11yMode) {
    this.a11yMode = mode;
    this.dispatchEvent(new CustomEvent('a11y-mode-change', { detail: mode, bubbles: true, composed: true }));
  }
}

// Singleton instance
export const appState = new AppState();
