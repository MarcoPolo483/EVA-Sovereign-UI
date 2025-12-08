import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { EVAElement } from '../EVAElement.js';

/**
 * Breadcrumb item interface
 */
export interface BreadcrumbItem {
  /**
   * Display text for the breadcrumb
   */
  text: string;

  /**
   * URL for the breadcrumb link
   */
  href: string;

  /**
   * Unique identifier for the breadcrumb item
   */
  id?: string;
}

/**
 * GC Breadcrumbs Component
 * 
 * Navigation breadcrumb trail showing the user's path through the site hierarchy.
 * Provides structured data support for SEO and responsive collapsing for mobile.
 * 
 * @element gc-breadcrumbs
 * 
 * @fires {CustomEvent<{item: BreadcrumbItem, index: number}>} gc-breadcrumb-click - Fired when a breadcrumb is clicked
 * 
 * @cssprop --gc-breadcrumb-text-color - Text color for breadcrumb links
 * @cssprop --gc-breadcrumb-hover-color - Hover state color
 * @cssprop --gc-breadcrumb-separator-color - Color of separator between items
 * @cssprop --gc-breadcrumb-current-color - Color of current (last) item
 * @cssprop --gc-breadcrumb-focus-outline-color - Focus outline color
 * 
 * @example
 * ```html
 * <gc-breadcrumbs
 *   .items="${[
 *     { text: 'Home', href: '/' },
 *     { text: 'Services', href: '/services' },
 *     { text: 'Passports', href: '/services/passports' }
 *   ]}"
 * ></gc-breadcrumbs>
 * ```
 */
@customElement('gc-breadcrumbs')
export class GCBreadcrumbs extends EVAElement {
  static override styles = css`
    :host {
      display: block;
      font-family: 'Lato', 'Noto Sans', sans-serif;
    }

    nav {
      padding: 1rem 0;
    }

    .breadcrumbs {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .breadcrumb-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.875rem;
    }

    .breadcrumb-item a {
      color: var(--gc-breadcrumb-text-color, #284162);
      text-decoration: underline;
      transition: color 0.2s ease;
    }

    .breadcrumb-item a:hover {
      color: var(--gc-breadcrumb-hover-color, #0535d2);
      text-decoration: none;
    }

    .breadcrumb-item a:focus {
      outline: 3px solid var(--gc-breadcrumb-focus-outline-color, #303fc1);
      outline-offset: 2px;
    }

    /* Current page (last item) */
    .breadcrumb-item.current {
      color: var(--gc-breadcrumb-current-color, #333);
      font-weight: 700;
    }

    /* Separator */
    .breadcrumb-separator {
      color: var(--gc-breadcrumb-separator-color, #666);
      font-weight: 400;
      user-select: none;
    }

    /* Hidden when collapsed */
    .breadcrumb-item.collapsed {
      display: none;
    }

    /* Collapse indicator (ellipsis) */
    .breadcrumb-ellipsis {
      color: var(--gc-breadcrumb-separator-color, #666);
      font-weight: 700;
      cursor: pointer;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
      transition: background-color 0.2s ease;
    }

    .breadcrumb-ellipsis:hover {
      background-color: #f0f0f0;
    }

    .breadcrumb-ellipsis:focus {
      outline: 3px solid var(--gc-breadcrumb-focus-outline-color, #303fc1);
      outline-offset: 2px;
    }

    /* Compact mode */
    :host([compact]) nav {
      padding: 0.5rem 0;
    }

    :host([compact]) .breadcrumb-item {
      font-size: 0.75rem;
    }

    /* Inverted for dark backgrounds */
    :host([inverted]) .breadcrumb-item a {
      color: var(--gc-breadcrumb-text-color, #ffffff);
    }

    :host([inverted]) .breadcrumb-item a:hover {
      color: var(--gc-breadcrumb-hover-color, #d0d0d0);
    }

    :host([inverted]) .breadcrumb-item.current {
      color: var(--gc-breadcrumb-current-color, #ffffff);
    }

    :host([inverted]) .breadcrumb-separator {
      color: var(--gc-breadcrumb-separator-color, #d0d0d0);
    }

    :host([inverted]) .breadcrumb-ellipsis {
      color: var(--gc-breadcrumb-separator-color, #d0d0d0);
    }

    :host([inverted]) .breadcrumb-ellipsis:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    /* Screen reader only text */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    /* Structured data (hidden) */
    .structured-data {
      display: none;
    }
  `;

  /**
   * Array of breadcrumb items
   */
  @property({ type: Array })
  items: BreadcrumbItem[] = [];

  /**
   * Separator character between breadcrumb items
   */
  @property({ type: String })
  separator: string = '›';

  /**
   * Enable responsive collapse on mobile
   */
  @property({ type: Boolean, attribute: 'auto-collapse' })
  autoCollapse: boolean = true;

  /**
   * Maximum items to show before collapsing (when autoCollapse is true)
   */
  @property({ type: Number, attribute: 'max-items' })
  maxItems: number = 3;

  /**
   * Use compact mode with reduced padding and font size
   */
  @property({ type: Boolean, reflect: true })
  compact: boolean = false;

  /**
   * Use inverted colors for dark backgrounds
   */
  @property({ type: Boolean, reflect: true })
  inverted: boolean = false;

  /**
   * Show structured data for SEO (Schema.org BreadcrumbList)
   */
  @property({ type: Boolean, attribute: 'show-structured-data' })
  showStructuredData: boolean = true;

  /**
   * Current locale for localized text
   */
  @property({ type: String })
  locale: string = 'en-CA';

  /**
   * Get localized "You are here" text
   */
  private get _youAreHereText(): string {
    return this.locale.startsWith('fr') ? 'Vous êtes ici :' : 'You are here:';
  }

  /**
   * Get localized "Show all breadcrumbs" text
   */
  private get _showAllText(): string {
    return this.locale.startsWith('fr') ? 'Afficher tous les niveaux' : 'Show all breadcrumb levels';
  }

  /**
   * Handle breadcrumb click
   */
  private _handleBreadcrumbClick(e: Event, item: BreadcrumbItem, index: number): void {
    // Allow default link behavior but emit event for tracking
    this.dispatchEvent(
      new CustomEvent('gc-breadcrumb-click', {
        detail: {
          item,
          index,
        },
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * Handle ellipsis click to expand collapsed breadcrumbs
   */
  private _handleEllipsisClick(e: Event): void {
    e.preventDefault();
    
    // Temporarily disable auto-collapse to show all items
    this.autoCollapse = false;
    
    // Announce to screen readers
    const announcement = this.locale.startsWith('fr')
      ? 'Tous les niveaux de fil d\'Ariane sont maintenant affichés'
      : 'All breadcrumb levels are now visible';
    
    this._announceToScreenReader(announcement);
  }

  /**
   * Announce message to screen readers
   */
  private _announceToScreenReader(message: string): void {
    const liveRegion = document.createElement('div');
    liveRegion.setAttribute('role', 'status');
    liveRegion.setAttribute('aria-live', 'polite');
    liveRegion.className = 'sr-only';
    liveRegion.textContent = message;
    
    this.shadowRoot?.appendChild(liveRegion);
    
    setTimeout(() => {
      liveRegion.remove();
    }, 1000);
  }

  /**
   * Get items to display (with optional collapsing)
   */
  private _getDisplayItems(): Array<BreadcrumbItem | 'ellipsis'> {
    if (!this.autoCollapse || this.items.length <= this.maxItems) {
      return this.items;
    }

    // Show first item, ellipsis, and last (maxItems - 1) items
    const lastItems = this.items.slice(-(this.maxItems - 1));
    return [this.items[0], 'ellipsis', ...lastItems];
  }

  /**
   * Generate structured data JSON-LD for SEO
   */
  private _generateStructuredData(): string {
    if (!this.showStructuredData || this.items.length === 0) {
      return '';
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: this.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.text,
        item: item.href,
      })),
    };

    return JSON.stringify(structuredData, null, 2);
  }

  override render() {
    if (this.items.length === 0) {
      return html``;
    }

    const displayItems = this._getDisplayItems();
    const lastIndex = this.items.length - 1;

    return html`
      <nav aria-label="${this._youAreHereText}" part="container">
        <span class="sr-only">${this._youAreHereText}</span>
        
        <ol class="breadcrumbs" part="list">
          ${displayItems.map((item, displayIndex) => {
            if (item === 'ellipsis') {
              return html`
                <li class="breadcrumb-item" part="item">
                  <span class="breadcrumb-separator" aria-hidden="true">${this.separator}</span>
                  <button
                    class="breadcrumb-ellipsis"
                    part="ellipsis"
                    @click="${this._handleEllipsisClick}"
                    aria-label="${this._showAllText}"
                  >
                    ...
                  </button>
                </li>
              `;
            }

            const actualIndex = this.items.indexOf(item);
            const isLast = actualIndex === lastIndex;

            return html`
              <li
                class="breadcrumb-item ${isLast ? 'current' : ''}"
                part="item ${isLast ? 'current-item' : ''}"
              >
                ${displayIndex > 0 ? html`
                  <span class="breadcrumb-separator" part="separator" aria-hidden="true">
                    ${this.separator}
                  </span>
                ` : ''}

                ${isLast ? html`
                  <span aria-current="page">${item.text}</span>
                ` : html`
                  <a
                    href="${item.href}"
                    part="link"
                    @click="${(e: Event) => this._handleBreadcrumbClick(e, item, actualIndex)}"
                  >
                    ${item.text}
                  </a>
                `}
              </li>
            `;
          })}
        </ol>
      </nav>

      ${this.showStructuredData ? html`
        <script type="application/ld+json" class="structured-data">
          ${this._generateStructuredData()}
        </script>
      ` : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'gc-breadcrumbs': GCBreadcrumbs;
  }

  interface HTMLElementEventMap {
    'gc-breadcrumb-click': CustomEvent<{ item: BreadcrumbItem; index: number }>;
  }
}
