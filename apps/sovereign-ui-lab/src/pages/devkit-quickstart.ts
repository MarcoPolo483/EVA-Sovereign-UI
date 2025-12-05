/**
 * DevKit: Quickstart
 */
import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('lab-devkit-quickstart')
export class LabDevKitQuickstart extends LitElement {
  @state() private selectedFramework = 'vanilla';
  @state() private selectedCategory = 'all';

  static styles = css`:host { display: block; }
.page-header { margin-bottom: 2rem; }
h1 { font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--eva-color-primary, #26374a); }
.subtitle { font-size: 1.1rem; color: var(--eva-color-text-secondary, #666); margin-bottom: 2rem; }
.controls { display: flex; gap: 1rem; margin-bottom: 2rem; flex-wrap: wrap; }
.controls select { padding: 0.75rem; border: 1px solid var(--eva-color-border, #ddd); border-radius: 6px; font-size: 1rem; min-width: 200px; }
.component-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; }
.component-card { background: var(--eva-color-background-elevated, #fff); border: 1px solid var(--eva-color-border, #ddd); border-radius: 8px; padding: 1.5rem; transition: box-shadow 0.2s; }
.component-card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
.component-name { font-size: 1.25rem; font-weight: 700; color: var(--eva-color-primary, #26374a); margin-bottom: 0.5rem; }
.component-tag { font-family: monospace; background: #f5f5f5; padding: 0.25rem 0.5rem; border-radius: 4px; font-size: 0.9rem; color: #666; }
.component-desc { margin: 1rem 0; color: var(--eva-color-text-secondary, #666); }
.code-block { background: #1e1e1e; color: #d4d4d4; padding: 1rem; border-radius: 6px; font-family: monospace; font-size: 0.9rem; overflow-x: auto; margin: 1rem 0; }
.category-badge { display: inline-block; padding: 0.25rem 0.75rem; background: var(--eva-color-primary, #26374a); color: #fff; border-radius: 12px; font-size: 0.85rem; font-weight: 600; margin-right: 0.5rem; }`;

  private getComponents() {
    return [
      { name: 'Button', tag: 'eva-button', category: 'Form', desc: 'Interactive button with variants and states' },
      { name: 'Input', tag: 'eva-input', category: 'Form', desc: 'Text input with validation and accessibility' },
      { name: 'Select', tag: 'eva-select', category: 'Form', desc: 'Dropdown selection component' },
      { name: 'Checkbox', tag: 'eva-checkbox', category: 'Form', desc: 'Checkbox input with label support' },
      { name: 'Radio', tag: 'eva-radio', category: 'Form', desc: 'Radio button group' },
      { name: 'Card', tag: 'eva-card', category: 'Layout', desc: 'Container for grouping content' },
      { name: 'Alert', tag: 'eva-alert', category: 'Feedback', desc: 'Alert messages with severity levels' },
      { name: 'Badge', tag: 'eva-badge', category: 'Display', desc: 'Small status indicator' },
      { name: 'Table', tag: 'eva-table', category: 'Data', desc: 'Data table with sorting' },
      { name: 'Modal', tag: 'eva-modal', category: 'Overlay', desc: 'Dialog overlay component' }
    ].filter(c => this.selectedCategory === 'all' || c.category === this.selectedCategory);
  }

  private getCodeExample(tag: string) {
    const examples: Record<string, Record<string, string>> = {
      vanilla: {
        'eva-button': '<eva-button variant="primary">Click Me</eva-button>',
        'eva-input': '<eva-input label="Email" type="email" required></eva-input>',
        'eva-select': '<eva-select label="Province"><option value="ON">Ontario</option></eva-select>',
        'eva-card': '<eva-card><h3>Title</h3><p>Content</p></eva-card>',
        'eva-alert': '<eva-alert severity="info">Information message</eva-alert>'
      },
      react: {
        'eva-button': 'import { Button } from "@eva-suite/react";\n\n<Button variant="primary">Click Me</Button>',
        'eva-input': 'import { Input } from "@eva-suite/react";\n\n<Input label="Email" type="email" required />',
        'eva-select': 'import { Select } from "@eva-suite/react";\n\n<Select label="Province">\n  <option value="ON">Ontario</option>\n</Select>',
        'eva-card': 'import { Card } from "@eva-suite/react";\n\n<Card><h3>Title</h3><p>Content</p></Card>',
        'eva-alert': 'import { Alert } from "@eva-suite/react";\n\n<Alert severity="info">Information</Alert>'
      },
      vue: {
        'eva-button': '<script setup>\nimport { Button } from "@eva-suite/vue";\n</script>\n\n<Button variant="primary">Click Me</Button>',
        'eva-input': '<script setup>\nimport { Input } from "@eva-suite/vue";\n</script>\n\n<Input label="Email" type="email" required />',
        'eva-select': '<script setup>\nimport { Select } from "@eva-suite/vue";\n</script>\n\n<Select label="Province">\n  <option value="ON">Ontario</option>\n</Select>',
        'eva-card': '<script setup>\nimport { Card } from "@eva-suite/vue";\n</script>\n\n<Card><h3>Title</h3><p>Content</p></Card>',
        'eva-alert': '<script setup>\nimport { Alert } from "@eva-suite/vue";\n</script>\n\n<Alert severity="info">Information</Alert>'
      },
      angular: {
        'eva-button': 'import { ButtonModule } from "@eva-suite/angular";\n\n<eva-button variant="primary">Click Me</eva-button>',
        'eva-input': 'import { InputModule } from "@eva-suite/angular";\n\n<eva-input label="Email" type="email" required></eva-input>',
        'eva-select': 'import { SelectModule } from "@eva-suite/angular";\n\n<eva-select label="Province">\n  <option value="ON">Ontario</option>\n</eva-select>',
        'eva-card': 'import { CardModule } from "@eva-suite/angular";\n\n<eva-card><h3>Title</h3><p>Content</p></eva-card>',
        'eva-alert': 'import { AlertModule } from "@eva-suite/angular";\n\n<eva-alert severity="info">Information</eva-alert>'
      }
    };
    
    return examples[this.selectedFramework]?.[tag] || examples.vanilla[tag] || `<${tag}></${tag}>`;
  }

  render() {
    const components = this.getComponents();
    
    return html`
      <div class="page-header">
        <h1>📚 Component Quickstart</h1>
        <p class="subtitle">Get started with 49 Government of Canada components</p>
      </div>

      <div class="controls">
        <select @change=${(e: Event) => this.selectedFramework = (e.target as HTMLSelectElement).value}>
          <option value="vanilla">Vanilla JS</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
          <option value="angular">Angular</option>
          <option value="svelte">Svelte</option>
        </select>

        <select @change=${(e: Event) => this.selectedCategory = (e.target as HTMLSelectElement).value}>
          <option value="all">All Categories</option>
          <option value="Form">Form</option>
          <option value="Layout">Layout</option>
          <option value="Feedback">Feedback</option>
          <option value="Display">Display</option>
          <option value="Data">Data</option>
          <option value="Overlay">Overlay</option>
        </select>
      </div>

      <div class="component-grid">
        ${components.map(c => html`
          <div class="component-card">
            <div class="component-name">${c.name}</div>
            <div class="component-tag">&lt;${c.tag}&gt;</div>
            <span class="category-badge">${c.category}</span>
            <div class="component-desc">${c.desc}</div>
            <div class="code-block">${this.getCodeExample(c.tag)}</div>
          </div>
        `)}
      </div>

      <div style="margin-top: 3rem; padding: 2rem; background: #f9f9f9; border-radius: 8px;">
        <h2>📦 Installation</h2>
        <div class="code-block">npm install @eva-suite/components</div>
        
        <h2 style="margin-top: 2rem;">🚀 Framework Wrappers</h2>
        <div class="code-block">npm install @eva-suite/react
npm install @eva-suite/vue
npm install @eva-suite/angular
npm install @eva-suite/svelte</div>
      </div>
    `;
  }
}
declare global { interface HTMLElementTagNameMap { 'lab-devkit-quickstart': LabDevKitQuickstart; } }
