import type { Meta, StoryObj } from '@storybook/react';
import { TooltipAccessible } from '../../components/accessibility/TooltipAccessible';

const meta: Meta<typeof TooltipAccessible> = {
  title: 'accessibility/TooltipAccessible',
  component: TooltipAccessible,
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
        component: 'TooltipAccessible component with WCAG 2.1 AA compliance and bilingual support.'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof TooltipAccessible>;

export const Default: Story = {
  args: {
    children: 'Default TooltipAccessible content',
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
