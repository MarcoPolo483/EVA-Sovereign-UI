import { LitElement, PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';
import { getMessage, Locale } from '../utils/i18n.js';
import { getGlobalLocale, subscribeToLocale } from '../utils/locale-context.js';
import { getLiveRegionManager } from '../utils/accessibility.js';

/**
 * Base class for all EVA Sovereign UI components
 * Provides common functionality:
 * - i18n (locale management)
 * - Sovereign profile (GC Design System tokens)
 * - Accessibility utilities
 * - WCAG 2.2 AAA compliance helpers
 */
export class EVAElement extends LitElement {
  /**
   * Current locale (EN-CA or FR-CA)
   * @default 'en-CA'
   */
  @property({ type: String, reflect: true })
  locale: Locale = getGlobalLocale();

  private _localeUnsubscribe?: () => void;

  /**
   * ARIA label for the component
   */
  @property({ type: String, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * ARIA described by (ID reference)
   */
  @property({ type: String, attribute: 'aria-describedby' })
  ariaDescribedBy: string | null = null;

  /**
   * Disabled state
   */
  @property({ type: Boolean, reflect: true })
  disabled = false;

  /**
   * Component name for i18n lookup
   */
  protected componentName = 'eva-element';

  /**
   * Lifecycle: Connect to global locale
   */
  override connectedCallback(): void {
    super.connectedCallback();
    
    // Subscribe to global locale changes
    this._localeUnsubscribe = subscribeToLocale((locale) => {
      this.locale = locale;
    });
  }

  /**
   * Lifecycle: Disconnect from global locale
   */
  override disconnectedCallback(): void {
    super.disconnectedCallback();
    
    // Unsubscribe from locale changes
    if (this._localeUnsubscribe) {
      this._localeUnsubscribe();
    }
  }

  /**
   * Lifecycle: Called when properties change
   */
  protected override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    // Update lang attribute when locale changes
    if (changedProperties.has('locale')) {
      this.setAttribute('lang', this.locale);
    }

    // Update aria-disabled when disabled changes
    if (changedProperties.has('disabled')) {
      this.setAttribute('aria-disabled', String(this.disabled));
    }
  }

  /**
   * Get localized message from component's message registry
   * @param key Message key
   * @param fallback Fallback text if key not found
   * @returns Localized message
   */
  protected t(key: string, fallback?: string): string {
    return getMessage(this.componentName, key, this.locale, fallback);
  }

  /**
   * Alias for t() - Get localized message
   * @param key Message key
   * @param fallback Fallback text if key not found
   * @returns Localized message
   */
  protected getMessage(key: string, fallback?: string): string {
    return this.t(key, fallback);
  }

  /**
   * Announce message to screen readers using ARIA live region
   * @param message Message to announce
   * @param priority 'polite' or 'assertive'
   */
  protected announce(message: string, priority: 'polite' | 'assertive' = 'polite'): void {
    const liveRegion = getLiveRegionManager();
    liveRegion.announce(message, priority);
  }

  /**
   * Get GC Design System token value
   * @param tokenPath Path to token (e.g., 'colors.fipRed')
   * @returns Token value
   */
  protected getToken(tokenPath: string): string {
    // TODO: Implement sovereign profile system in A5
    // For now, return CSS custom property reference
    return `var(--gc-${tokenPath.replace(/\./g, '-')})`;
  }

  /**
   * Handle keyboard navigation (common patterns)
   * @param event Keyboard event
   */
  protected handleKeyboard(event: KeyboardEvent): void {
    // TODO: Implement keyboard navigation helpers in A6
    // For now, log to console
    console.log(`[Keyboard]: ${event.key}`);
  }

  /**
   * Check if component is in high contrast mode (Windows High Contrast)
   * @returns True if high contrast mode is active
   */
  protected isHighContrastMode(): boolean {
    // Check for Windows High Contrast Mode
    return window.matchMedia('(prefers-contrast: high)').matches;
  }

  /**
   * Check if user prefers reduced motion
   * @returns True if reduced motion is preferred
   */
  protected prefersReducedMotion(): boolean {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
