import type { Preview } from '@storybook/react-vite';
import '../lib/styles/styles.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      options: {
        // 👇 Default options
        dark: { name: 'Dark', value: '#111' },
        light: { name: 'Light', value: '#fff' },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
