import type { StorybookConfig } from '@storybook/html-vite';
import tailwindcss from '@tailwindcss/vite';

const config: StorybookConfig = {
  stories: ['../packages/**/*.stories.@(ts|tsx)'],
  framework: '@storybook/html-vite',
  viteFinal: (config) => {
    config.plugins ??= [];
    config.plugins.push(tailwindcss());
    return config;
  }
};

export default config;
