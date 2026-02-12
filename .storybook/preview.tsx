import type { Decorator, Preview } from '@storybook/react';
import '../src/index.css';

const withTheme: Decorator = (Story, context) => {
  const theme = context.globals.theme as string;
  const root = document.documentElement;
  root.setAttribute('data-theme', theme);
  return <Story />;
};

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
  decorators: [withTheme]
};

export default preview;
