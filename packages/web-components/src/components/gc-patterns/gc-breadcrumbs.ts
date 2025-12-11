import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { EVAElement } from '../EVAElement.js';
import { registerMessages } from '../../i18n/locale-manager.js';

interface BreadcrumbItem {
  text: string;
  href?: string;
}

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

  @property({ type: Array })
  items: BreadcrumbItem[] = [];

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
