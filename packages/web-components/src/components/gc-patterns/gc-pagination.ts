import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { EVAElement } from '../EVAElement.js';
import { registerMessages } from '../../i18n/locale-manager.js';

@customElement('gc-pagination')
export class GCPagination extends EVAElement {
  static override styles = css`
    :host {
      display: block;
    }

    .pagination {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--eva-spacing-sm, 0.5rem);
      margin: var(--eva-spacing-lg, 1.5rem) 0;
      font-family: var(--eva-fonts-body);
    }

    .pagination-button {
      min-width: 40px;
      height: 40px;
      padding: var(--eva-spacing-xs, 0.25rem) var(--eva-spacing-sm, 0.5rem);
      background: var(--eva-colors-white, #fff);
      border: 1px solid var(--eva-colors-border, #ccc);
      border-radius: 4px;
      color: var(--eva-colors-text, #333);
      font-family: var(--eva-fonts-body);
      font-size: var(--eva-font-size-md, 1rem);
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .pagination-button:hover:not(:disabled) {
      background: var(--eva-colors-background-light, #f5f5f5);
      border-color: var(--eva-colors-primary, #26374a);
    }

    .pagination-button:focus {
      outline: 3px solid var(--eva-colors-focus, #269abc);
      outline-offset: 2px;
    }

    .pagination-button:disabled {
      background: var(--eva-colors-background-light, #f5f5f5);
      border-color: var(--eva-colors-border-light, #e8e8e8);
      color: var(--eva-colors-text-light, #999);
      cursor: not-allowed;
      opacity: 0.6;
    }

    .pagination-button.active {
      background: var(--eva-colors-primary, #26374a);
      border-color: var(--eva-colors-primary, #26374a);
      color: var(--eva-colors-white, #fff);
      cursor: default;
    }

    .pagination-button.active:hover {
      background: var(--eva-colors-primary, #26374a);
      border-color: var(--eva-colors-primary, #26374a);
    }

    .pagination-ellipsis {
      min-width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--eva-colors-text, #333);
      font-weight: 600;
    }

    .pagination-info {
      margin-left: var(--eva-spacing-md, 1rem);
      color: var(--eva-colors-text, #333);
      font-size: var(--eva-font-size-sm, 0.875rem);
    }

    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }

    @media (max-width: 768px) {
      .pagination {
        gap: var(--eva-spacing-xs, 0.25rem);
      }

      .pagination-button {
        min-width: 36px;
        height: 36px;
        font-size: var(--eva-font-size-sm, 0.875rem);
      }

      .pagination-ellipsis {
        min-width: 36px;
        height: 36px;
      }

      .pagination-info {
        display: none;
      }
    }

    @media print {
      .pagination {
        display: none;
      }
    }
  `;

  @property({ type: Number })
  currentPage = 1;

  @property({ type: Number })
  totalPages = 1;

  @property({ type: Number })
  maxVisible = 7;

  @property({ type: Boolean })
  showInfo = false;

  @property({ type: Number })
  totalItems = 0;

  @property({ type: Number })
  itemsPerPage = 10;

  private handlePageChange(page: number) {
    if (page < 1 || page > this.totalPages || page === this.currentPage) {
      return;
    }

    this.currentPage = page;

    this.emitEvent('gc-page-change', {
      page,
      totalPages: this.totalPages,
      timestamp: new Date().toISOString()
    });
  }

  private getPageNumbers(): Array<number | 'ellipsis'> {
    if (this.totalPages <= this.maxVisible) {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    }

    const pages: Array<number | 'ellipsis'> = [];
    const sidePages = Math.floor((this.maxVisible - 3) / 2);

    pages.push(1);

    if (this.currentPage <= sidePages + 2) {
      for (let i = 2; i <= Math.min(this.maxVisible - 1, this.totalPages - 1); i++) {
        pages.push(i);
      }
      if (this.totalPages > this.maxVisible) {
        pages.push('ellipsis');
      }
    } else if (this.currentPage >= this.totalPages - sidePages - 1) {
      pages.push('ellipsis');
      for (let i = this.totalPages - (this.maxVisible - 2); i < this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push('ellipsis');
      for (let i = this.currentPage - sidePages; i <= this.currentPage + sidePages; i++) {
        pages.push(i);
      }
      pages.push('ellipsis');
    }

    if (pages[pages.length - 1] !== this.totalPages) {
      pages.push(this.totalPages);
    }

    return pages;
  }

  private renderPrevButton() {
    const isDisabled = this.currentPage === 1;
    const prevLabel = this.getMessage('previous');

    return html`
      <button
        class="pagination-button"
        type="button"
        ?disabled="${isDisabled}"
        @click="${() => this.handlePageChange(this.currentPage - 1)}"
        aria-label="${prevLabel}"
      >
        ‹
      </button>
    `;
  }

  private renderNextButton() {
    const isDisabled = this.currentPage === this.totalPages;
    const nextLabel = this.getMessage('next');

    return html`
      <button
        class="pagination-button"
        type="button"
        ?disabled="${isDisabled}"
        @click="${() => this.handlePageChange(this.currentPage + 1)}"
        aria-label="${nextLabel}"
      >
        ›
      </button>
    `;
  }

  private renderPageButton(page: number) {
    const isActive = page === this.currentPage;
    const pageLabel = this.getMessage('page').replace('{page}', String(page));

    return html`
      <button
        class="pagination-button ${isActive ? 'active' : ''}"
        type="button"
        aria-label="${pageLabel}"
        aria-current="${isActive ? 'page' : 'false'}"
        @click="${() => this.handlePageChange(page)}"
      >
        ${page}
      </button>
    `;
  }

  private renderInfo() {
    if (!this.showInfo || this.totalItems === 0) {
      return null;
    }

    const start = (this.currentPage - 1) * this.itemsPerPage + 1;
    const end = Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
    const infoText = this.getMessage('info')
      .replace('{start}', String(start))
      .replace('{end}', String(end))
      .replace('{total}', String(this.totalItems));

    return html`
      <span class="pagination-info" aria-live="polite">
        ${infoText}
      </span>
    `;
  }

  protected override render() {
    const pages = this.getPageNumbers();
    const navLabel = this.getMessage('navigation');

    return html`
      <nav class="pagination" role="navigation" aria-label="${navLabel}">
        ${this.renderPrevButton()}
        
        ${pages.map(page => 
          page === 'ellipsis'
            ? html`<span class="pagination-ellipsis" aria-hidden="true">…</span>`
            : this.renderPageButton(page as number)
        )}
        
        ${this.renderNextButton()}
        ${this.renderInfo()}
      </nav>
    `;
  }
}

registerMessages('gc-pagination', {
  'en-CA': {
    previous: 'Previous page',
    next: 'Next page',
    page: 'Page {page}',
    navigation: 'Pagination',
    info: 'Showing {start} to {end} of {total} items'
  },
  'fr-CA': {
    previous: 'Page précédente',
    next: 'Page suivante',
    page: 'Page {page}',
    navigation: 'Pagination',
    info: 'Affichage de {start} à {end} sur {total} éléments'
  }
});
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

    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .pagination-list {
      display: flex;
      list-style: none;
      margin: 0;
      padding: 0;
      gap: 0.25rem;
      flex-wrap: wrap;
      align-items: center;
    }

    /* Page items */
    .page-item,
    .nav-item {
      display: flex;
    }

    .page-link,
    .nav-link {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 44px;
      min-height: 44px;
      padding: 0.5rem 0.75rem;
      color: #284162;
      text-decoration: none;
      background-color: #ffffff;
      border: 2px solid #284162;
      font-size: 1rem;
      font-weight: 400;
      transition: background-color 200ms ease-in-out, color 200ms ease-in-out, border-color 200ms ease-in-out;
      cursor: pointer;
      border-radius: 0.25rem;
    }

    .page-link:hover,
    .nav-link:hover {
      background-color: #f5f5f5;
      border-color: #0c2447;
      color: #0c2447;
    }

    .page-link:focus-visible,
    .nav-link:focus-visible {
      outline: 3px solid #284162;
      outline-offset: 2px;
      z-index: 1;
    }

    /* Current page */
    .page-link.current {
      background-color: #284162;
      color: #ffffff;
      font-weight: 700;
      border-color: #284162;
      cursor: default;
    }

    .page-link.current:hover {
      background-color: #0c2447;
      border-color: #0c2447;
    }

    /* Disabled state */
    .nav-link.disabled {
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    }

    /* Navigation icons */
    .nav-icon {
      font-size: 1.5rem;
      line-height: 1;
      font-weight: 700;
    }

    .nav-text {
      margin: 0 0.25rem;
    }

    .prev .nav-icon {
      margin-right: 0.25rem;
    }

    .next .nav-icon {
      margin-left: 0.25rem;
    }

    /* Ellipsis */
    .ellipsis {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 44px;
      min-height: 44px;
      padding: 0.5rem 0.75rem;
      color: #666666;
      font-size: 1rem;
      user-select: none;
    }

    .ellipsis-text {
      pointer-events: none;
    }

    /* Compact mode */
    :host([compact]) .nav-text {
      display: none;
    }

    :host([compact]) .page-link,
    :host([compact]) .nav-link {
      min-width: 40px;
      padding: 0.5rem;
    }

    /* Mobile responsive */
    @media (max-width: 600px) {
      .pagination-list {
        gap: 0.125rem;
      }

      .page-link,
      .nav-link {
        min-width: 40px;
        padding: 0.5rem;
        font-size: 0.9375rem;
      }

      .nav-text {
        display: none;
      }

      :host([compact]) .page-link,
      :host([compact]) .nav-link {
        min-width: 36px;
        padding: 0.375rem;
      }
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
      .page-link,
      .nav-link {
        border-width: 3px;
      }

      .page-link.current {
        border: 3px solid #ffffff;
      }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      .page-link,
      .nav-link {
        transition: none;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'gc-pagination': GCPagination;
  }
}
