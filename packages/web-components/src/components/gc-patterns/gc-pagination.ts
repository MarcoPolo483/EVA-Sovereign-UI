import { html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { EVAElement } from '../EVAElement.js';
import { registerMessages } from '../../utils/i18n.js';

// Register translations for gc-pagination
registerMessages('gc-pagination', {
  'pagination.previous': {
    'en-CA': 'Previous',
    'fr-CA': 'Précédent',
  },
  'pagination.next': {
    'en-CA': 'Next',
    'fr-CA': 'Suivant',
  },
  'pagination.page': {
    'en-CA': 'Page',
    'fr-CA': 'Page',
  },
  'pagination.currentPage': {
    'en-CA': 'Current page',
    'fr-CA': 'Page actuelle',
  },
  'pagination.goToPage': {
    'en-CA': 'Go to page',
    'fr-CA': 'Aller à la page',
  },
  'pagination.pageOf': {
    'en-CA': 'Page {current} of {total}',
    'fr-CA': 'Page {current} de {total}',
  },
});

/**
 * GC Pagination Component
 * MANDATORY Government of Canada pagination pattern
 *
 * Implements: https://design.canada.ca/common-design-patterns/pagination.html
 *
 * Features:
 * - Previous/Next navigation buttons
 * - Numbered page links (with ellipsis for long lists)
 * - First/Last page quick jumps
 * - Current page indicator
 * - Keyboard accessible
 * - Screen reader optimized
 * - Bilingual support
 *
 * @element gc-pagination
 *
 * @fires gc-page-change - Fires when page changes
 *
 * @example
 * ```html
 * <gc-pagination
 *   current-page="5"
 *   total-pages="20"
 * ></gc-pagination>
 * ```
 */
@customElement('gc-pagination')
export class GCPagination extends EVAElement {
  protected override componentName = 'gc-pagination';

  /**
   * Current page number (1-indexed)
   */
  @property({ type: Number, attribute: 'current-page' })
  currentPage = 1;

  /**
   * Total number of pages
   */
  @property({ type: Number, attribute: 'total-pages' })
  totalPages = 1;

  /**
   * Maximum number of visible page buttons before using ellipsis
   * @default 7
   */
  @property({ type: Number, attribute: 'max-visible' })
  maxVisible = 7;

  /**
   * Show first/last page buttons
   */
  @property({ type: Boolean, attribute: 'show-first-last' })
  showFirstLast = true;

  /**
   * Show previous/next buttons
   */
  @property({ type: Boolean, attribute: 'show-prev-next' })
  showPrevNext = true;

  /**
   * Compact mode (fewer page numbers shown)
   */
  @property({ type: Boolean })
  compact = false;

  /**
   * Navigate to a specific page
   */
  private _goToPage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) {
      return;
    }

    this.currentPage = page;
    this.dispatchEvent(
      new CustomEvent('gc-page-change', {
        detail: { page },
        bubbles: true,
        composed: true,
      })
    );
  }

  /**
   * Handle page button click
   */
  private _handlePageClick(page: number, event: MouseEvent): void {
    event.preventDefault();
    this._goToPage(page);
  }

  /**
   * Handle keyboard navigation
   */
  private _handleKeyDown(page: number, event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this._goToPage(page);
    }
  }

  /**
   * Generate array of page numbers to display
   * Implements ellipsis logic for long page lists
   */
  private _getPageNumbers(): Array<number | 'ellipsis'> {
    const pages: Array<number | 'ellipsis'> = [];
    const { currentPage, totalPages, maxVisible, compact } = this;

    // If total pages fits in maxVisible, show all
    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // Calculate range around current page
    const effectiveMax = compact ? Math.floor(maxVisible / 2) : maxVisible;
    const sidePages = Math.floor(effectiveMax / 2);

    // Always show first page
    pages.push(1);

    // Calculate start and end of middle range
    let start = Math.max(2, currentPage - sidePages);
    let end = Math.min(totalPages - 1, currentPage + sidePages);

    // Adjust if we're near the beginning
    if (currentPage <= sidePages + 2) {
      end = Math.min(totalPages - 1, effectiveMax - 1);
      start = 2;
    }

    // Adjust if we're near the end
    if (currentPage >= totalPages - sidePages - 1) {
      start = Math.max(2, totalPages - effectiveMax + 2);
      end = totalPages - 1;
    }

    // Add starting ellipsis if needed
    if (start > 2) {
      pages.push('ellipsis');
    }

    // Add middle page numbers
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // Add ending ellipsis if needed
    if (end < totalPages - 1) {
      pages.push('ellipsis');
    }

    // Always show last page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  }

  /**
   * Render a page button
   */
  private _renderPageButton(page: number | 'ellipsis', index: number): unknown {
    if (page === 'ellipsis') {
      return html`
        <li class="page-item ellipsis" aria-hidden="true">
          <span class="ellipsis-text">...</span>
        </li>
      `;
    }

    const isCurrent = page === this.currentPage;
    const classes = {
      'page-link': true,
      'current': isCurrent,
    };

    return html`
      <li class="page-item" role="none">
        <a
          href="#"
          class="${classMap(classes)}"
          role="button"
          aria-label="${isCurrent
            ? `${this.t('pagination.currentPage')} ${page}`
            : `${this.t('pagination.goToPage')} ${page}`}"
          aria-current="${isCurrent ? 'page' : 'false'}"
          @click="${(e: MouseEvent) => this._handlePageClick(page, e)}"
          @keydown="${(e: KeyboardEvent) => this._handleKeyDown(page, e)}"
          part="page-link"
        >
          ${page}
        </a>
      </li>
    `;
  }

  /**
   * Render previous button
   */
  private _renderPrevButton(): unknown {
    if (!this.showPrevNext) return '';

    const disabled = this.currentPage <= 1;
    const classes = {
      'nav-link': true,
      'prev': true,
      'disabled': disabled,
    };

    return html`
      <li class="nav-item prev" role="none">
        <a
          href="#"
          class="${classMap(classes)}"
          role="button"
          aria-label="${this.t('pagination.previous')}"
          aria-disabled="${disabled ? 'true' : 'false'}"
          @click="${(e: MouseEvent) => {
            if (!disabled) this._handlePageClick(this.currentPage - 1, e);
            else e.preventDefault();
          }}"
          part="nav-link prev-link"
        >
          <span class="nav-icon" aria-hidden="true">‹</span>
          <span class="nav-text">${this.t('pagination.previous')}</span>
        </a>
      </li>
    `;
  }

  /**
   * Render next button
   */
  private _renderNextButton(): unknown {
    if (!this.showPrevNext) return '';

    const disabled = this.currentPage >= this.totalPages;
    const classes = {
      'nav-link': true,
      'next': true,
      'disabled': disabled,
    };

    return html`
      <li class="nav-item next" role="none">
        <a
          href="#"
          class="${classMap(classes)}"
          role="button"
          aria-label="${this.t('pagination.next')}"
          aria-disabled="${disabled ? 'true' : 'false'}"
          @click="${(e: MouseEvent) => {
            if (!disabled) this._handlePageClick(this.currentPage + 1, e);
            else e.preventDefault();
          }}"
          part="nav-link next-link"
        >
          <span class="nav-text">${this.t('pagination.next')}</span>
          <span class="nav-icon" aria-hidden="true">›</span>
        </a>
      </li>
    `;
  }

  protected override render(): unknown {
    const pages = this._getPageNumbers();

    return html`
      <nav
        class="pagination"
        role="navigation"
        aria-label="${this.t('pagination.page')} navigation"
        part="container"
      >
        <ul class="pagination-list" role="list">
          ${this._renderPrevButton()}
          ${pages.map((page, index) => this._renderPageButton(page, index))}
          ${this._renderNextButton()}
        </ul>
        <div class="sr-only" aria-live="polite" aria-atomic="true">
          ${this.t('pagination.pageOf')
            .replace('{current}', String(this.currentPage))
            .replace('{total}', String(this.totalPages))}
        </div>
      </nav>
    `;
  }

  static override styles = css`
    :host {
      display: block;
      font-family: Lato, sans-serif;
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
