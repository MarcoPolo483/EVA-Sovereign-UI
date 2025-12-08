import type { Preview } from '@storybook/web-components';
import '../src/index.js';

// Apply GC Design System tokens
import '../src/utils/sovereign-profile.js';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#26374A',
        },
        {
          name: 'gc-grey',
          value: '#f9f9f9',
        },
      ],
    },
    a11y: {
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
          {
            id: 'button-name',
            enabled: true,
          },
          {
            id: 'aria-allowed-attr',
            enabled: true,
          },
        ],
      },
    },
  },
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      defaultValue: 'en-CA',
      toolbar: {
        icon: 'globe',
        items: [
          { value: 'en-CA', right: '🇨🇦', title: 'English (Canada)' },
          { value: 'fr-CA', right: '🇨🇦', title: 'Français (Canada)' },
        ],
        showName: true,
      },
    },
  },
};

export default preview;
