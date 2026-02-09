import type { StorybookConfig } from '@storybook/html-vite';

const config: StorybookConfig = {
  stories: ['../packages/**/*.stories.@(ts|tsx)'],
  framework: '@storybook/html-vite'
};

export default config;
