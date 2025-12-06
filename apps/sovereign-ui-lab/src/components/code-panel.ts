/**
 * Code Panel Component
 * Displays framework-specific code with syntax highlighting and copy button
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { Framework } from './framework-switcher';

@customElement('lab-code-panel')
export class LabCodePanel extends LitElement {
  @property() framework: Framework = 'vanilla';
  @property() code: string = '';
  @property() language: string = 'javascript';

  static styles = css`
    :host {
      display: block;
    }

    .code-panel {
      background: #1e1e1e;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid #333;
    }

    .code-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1rem;
      background: #2d2d2d;
      border-bottom: 1px solid #333;
    }

    .language-badge {
      font-family: 'Courier New', monospace;
      font-size: 0.85rem;
      color: #61dafb;
      font-weight: 600;
    }

    .copy-btn {
      padding: 0.5rem 1rem;
      background: #26374a;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 0.85rem;
      cursor: pointer;
      transition: background 0.2s;
      font-weight: 600;
    }

    .copy-btn:hover {
      background: #2b5a8c;
    }

    .copy-btn.copied {
      background: #2e7d32;
    }

    .copy-btn:focus-visible {
      outline: 2px solid #61dafb;
      outline-offset: 2px;
    }

    .code-content {
      padding: 1.5rem;
      overflow-x: auto;
    }

    pre {
      margin: 0;
      font-family: 'Courier New', Consolas, Monaco, monospace;
      font-size: 0.9rem;
      line-height: 1.6;
      color: #d4d4d4;
    }

    code {
      color: #d4d4d4;
    }

    /* Simple syntax highlighting */
    .keyword { color: #569cd6; }
    .string { color: #ce9178; }
    .comment { color: #6a9955; }
    .function { color: #dcdcaa; }
    .tag { color: #4ec9b0; }
    .attr { color: #9cdcfe; }
  `;

  private async handleCopy() {
    try {
      await navigator.clipboard.writeText(this.code);
      const btn = this.shadowRoot?.querySelector('.copy-btn');
      if (btn) {
        btn.textContent = '✓ Copied!';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.textContent = 'Copy';
          btn.classList.remove('copied');
        }, 2000);
      }
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  }

  private highlightCode(code: string): string {
    // Simple syntax highlighting
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/(import|from|const|let|var|function|return|export|default)/g, '<span class="keyword">$1</span>')
      .replace(/(['"`])(.*?)\1/g, '<span class="string">$1$2$1</span>')
      .replace(/(\/\/.*)/g, '<span class="comment">$1</span>');
  }

  render() {
    const highlighted = this.highlightCode(this.code);

    return html`
      <div class="code-panel">
        <div class="code-header">
          <span class="language-badge">${this.language.toUpperCase()}</span>
          <button class="copy-btn" @click="${this.handleCopy}">Copy</button>
        </div>
        <div class="code-content">
          <pre><code .innerHTML="${highlighted}"></code></pre>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lab-code-panel': LabCodePanel;
  }
}
