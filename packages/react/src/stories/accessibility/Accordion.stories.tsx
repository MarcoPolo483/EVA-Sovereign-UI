import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../../components/accessibility/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'accessibility/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    locale: {
      control: 'select',
      options: ['en-CA', 'fr-CA'],
      description: 'Language locale'
    },
    className: {
      control: 'text',
      description: 'Custom CSS class'
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'Accordion component with WCAG 2.1 AA compliance and bilingual support.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    children: 'Default Accordion content',
    locale: 'en-CA'
  }
};

export const French: Story = {
  args: {
    children: 'Contenu par défaut',
    locale: 'fr-CA'
  }
};

export const WithCustomClass: Story = {
  args: {
    children: 'Styled content',
    className: 'custom-styling',
    locale: 'en-CA'
  }
};

export const Accessible: Story = {
  args: {
    children: 'Accessible component example',
    ariaLabel: 'Descriptive label for screen readers',
    locale: 'en-CA'
  },
  parameters: {
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'label', enabled: true }
        ]
      }
    }
  }
};
