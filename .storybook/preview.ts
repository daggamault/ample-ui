import type { Preview } from '@storybook/html-vite';
import '../src/index.css';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Color mode',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' }
        ],
        dynamicTitle: true
      }
    }
  },
  initialGlobals: {
    theme: 'light'
  },
  decorators: [
    (storyFn, context) => {
      const theme = context.globals.theme;
      const root = document.documentElement;
      root.setAttribute('data-theme', theme);
      return storyFn();
    }
  ]
};

export default preview;
