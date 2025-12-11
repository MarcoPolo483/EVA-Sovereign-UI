import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { EVAElement } from '../EVAElement.js';
import { registerMessages } from '../../i18n/locale-manager.js';

/**
 * Breadcrumb navigation item
 */
interface BreadcrumbItem {
  /** Display text for the breadcrumb */
  text: string;
  /** Optional link URL (omit for current page) */
  href?: string;
}

/**
 * GC Breadcrumbs Component
 * MANDATORY Government of Canada breadcrumb navigation pattern
 * 
 * Provides hierarchical navigation trail showing user's current location
 * in the site structure. Implements WCAG 2.2 AAA accessibility standards
 * with proper ARIA landmarks and semantic HTML.
 * 
 * Implements: https://design.canada.ca/common-design-patterns/breadcrumb-trail.html
 * 
 * @element gc-breadcrumbs
 * 
 * @fires gc-breadcrumb-click - Fires when a breadcrumb link is clicked. Detail: { item: BreadcrumbItem, index: number }
 * 
 * @example
 * ```html
 * <!-- Basic breadcrumb trail -->
 * <gc-breadcrumbs
 *   .items="${[
 *     { text: 'Home', href: '/' },
 *     { text: 'Services', href: '/services' },
 *     { text: 'Current Page' }
 *   ]}"
 * ></gc-breadcrumbs>
 * ```
 * 
 * @example
 * ```html
 * <!-- With custom ARIA label -->
 * <gc-breadcrumbs
 *   aria-label="Site navigation"
 *   .items="${[
 *     { text: 'Canada.ca', href: 'https://canada.ca' },
 *     { text: 'Benefits', href: '/benefits' },
 *     { text: 'Employment Insurance' }
 *   ]}"
 * ></gc-breadcrumbs>
 * ```
 * 
 * @example
 * ```html
 * <!-- French locale -->
 * <gc-breadcrumbs
 *   locale="fr-CA"
 *   .items="${[
 *     { text: 'Accueil', href: '/' },
 *     { text: 'Services', href: '/services' },
 *     { text: 'Page actuelle' }
 *   ]}"
 * ></gc-breadcrumbs>
 * ```
 */
@customElement('gc-breadcrumbs')
export class GCBreadcrumbs extends EVAElement {
  static override styles = css`
    :host {
      display: block;
      font-family: var(--eva-fonts-body);
    }

    nav {
      padding: var(--eva-spacing-md, 1rem) 0;
    }

    .breadcrumbs {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: var(--eva-spacing-sm, 0.75rem);
    }

    .breadcrumb-item {
      display: flex;
      align-items: center;
    }

    .breadcrumb-link {
      color: var(--eva-colors-link, #295376);
      text-decoration: underline;
      transition: color 0.2s;
    }

    .breadcrumb-link:hover {
      color: var(--eva-colors-link-hover, #0535d2);
    }

    .breadcrumb-link:focus {
      outline: 3px solid var(--eva-colors-focus, #269abc);
      outline-offset: 2px;
    }

    .breadcrumb-link:visited {
      color: var(--eva-colors-link-visited, #7834bc);
    }

    .breadcrumb-current {
      color: var(--eva-colors-text, #333);
      font-weight: 600;
    }

    .breadcrumb-separator {
      margin: 0 var(--eva-spacing-xs, 0.5rem);
      color: var(--eva-colors-text-muted, #666);
      user-select: none;
    }

    @media (max-width: 768px) {
      .breadcrumbs {
        font-size: var(--eva-font-size-sm, 0.875rem);
      }

      .breadcrumb-separator {
        margin: 0 var(--eva-spacing-2xs, 0.25rem);
      }
    }

    @media print {
      :host {
        display: none;
      }
    }
  `;

  /**
   * Array of breadcrumb items to display in navigation trail.
   * Last item (without href) is treated as current page.
   */
  @property({ type: Array })
  items: BreadcrumbItem[] = [];

  /**
   * Character or string used to separate breadcrumb items
   * @default '›'
   */
  @property({ type: String })
  separator = '›';

  protected override render() {
    const hasItems = this.items.length > 0;
    const breadcrumbItems = hasItems ? this.items : [
      { text: this.getMessage('home'), href: '/' }
    ];

    return html`
      <nav aria-label="${this.getMessage('breadcrumbLabel')}">
        <ol class="breadcrumbs">
          ${breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            
            return html`
              <li class="breadcrumb-item">
                ${!isLast && item.href
                  ? html`
                      <a href="${item.href}" class="breadcrumb-link">
                        ${item.text}
                      </a>
                    `
                  : html`
                      <span 
                        class="breadcrumb-current" 
                        aria-current="${isLast ? 'page' : 'false'}"
                      >
                        ${item.text}
                      </span>
                    `
                }
                ${!isLast
                  ? html`
                      <span class="breadcrumb-separator" aria-hidden="true">
                        ${this.separator}
                      </span>
                    `
                  : null
                }
              </li>
            `;
          })}
        </ol>
      </nav>
    `;
  }
}

registerMessages('gc-breadcrumbs', {
  'en-CA': {
    breadcrumbLabel: 'Breadcrumb navigation',
    home: 'Home'
  },
  'fr-CA': {
    breadcrumbLabel: 'Navigation par fil d\'Ariane',
    home: 'Accueil'
  }
});
