import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '../gc-design/eva-gc-footer';

const meta: Meta = {
  title: 'GC Design/Footer',
  component: 'eva-gc-footer',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Government of Canada footer component with bilingual support and WCAG 2.2 AA compliance.',
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'landmark-contentinfo-is-top-level', enabled: true },
        ],
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  args: {},
  render: () => html`<eva-gc-footer></eva-gc-footer>`,
  parameters: {
    docs: {
      description: {
        story: 'Default footer with Canada GC profile links: Privacy, Terms and conditions, Accessibility, Canada.ca',
      },
    },
  },
};

export const WithLinks: Story = {
  args: {},
  render: () => html`<eva-gc-footer profile="canada_gc"></eva-gc-footer>`,
  parameters: {
    docs: {
      description: {
        story: 'Footer explicitly using canada_gc profile. Links are automatically rendered from the profile configuration.',
      },
    },
  },
};

export const Bilingual: Story = {
  render: () => html`<eva-gc-footer profile="canada_gc"></eva-gc-footer>`,
  parameters: {
    docs: {
      description: {
        story: 'Canada GC profile supports bilingual content (EN/FR). The footer displays standard GC footer links.',
      },
    },
  },
};

export const CompleteExample: Story = {
  render: () => html`
    <div style="min-height: 100vh; display: flex; flex-direction: column;">
      <eva-gc-header>
        <span slot="title">Government of Canada</span>
      </eva-gc-header>

      <main style="flex: 1; padding: 2rem; max-width: 1200px; margin: 0 auto; width: 100%;">
        <h1>Page Content</h1>
        <p>Main content goes here...</p>
        <p>This example demonstrates a complete page layout with header, content area, and footer.</p>
      </main>

      <eva-gc-footer></eva-gc-footer>
    </div>
  `,
  parameters: {
    docs: {
      description: {
        story: 'Complete page layout demonstrating header, main content, and footer working together.',
      },
    },
    layout: 'fullscreen',
  },
};
