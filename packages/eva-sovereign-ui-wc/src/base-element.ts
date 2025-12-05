/**
 * Base Element
 * Base class for vanilla web components
 */

export class BaseElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback(): void {
    // Override in subclasses
  }

  disconnectedCallback(): void {
    // Override in subclasses
  }

  attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    // Override in subclasses
  }
}
