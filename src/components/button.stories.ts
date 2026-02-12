import type { Meta, StoryObj } from '@storybook/html-vite';
import { Button, type ButtonProps } from './button';

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => {
    // The Button returns a string, so we return it directly.
    return Button(args);
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'success',
        'danger',
        'ghost',
        'ghost-light'
      ]
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    }
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  args: {
    label: 'Primary Action',
    variant: 'primary',
    size: 'md'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Cancel',
    variant: 'secondary',
    size: 'md'
  }
};

export const Success: Story = {
  args: {
    label: 'Success',
    variant: 'success',
    size: 'md'
  }
};

export const Danger: Story = {
  args: {
    label: 'Destructive',
    variant: 'danger',
    size: 'md'
  }
};

export const Ghost: Story = {
  args: {
    label: 'Ghost',
    variant: 'ghost',
    size: 'md'
  }
};

export const GhostLight: Story = {
  args: {
    label: 'Ghost Light',
    variant: 'ghost-light',
    size: 'md'
  }
};

/**
 * A "kitchen sink" story to see all variants and sizes.
 */
export const AllVariants: Story = {
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem; align-items: flex-start;">
      <div>
        <h3 style="margin-bottom: 1rem; font-weight: bold;">Small</h3>
        <div style="display: flex; gap: 1rem; align-items: center;">
          ${Button({ label: 'Primary', variant: 'primary', size: 'sm' })}
          ${Button({
            label: 'Secondary',
            variant: 'secondary',
            size: 'sm'
          })}
          ${Button({ label: 'Success', variant: 'success', size: 'sm' })}
          ${Button({
            label: 'Destructive',
            variant: 'danger',
            size: 'sm'
          })}
          ${Button({ label: 'Ghost', variant: 'ghost', size: 'sm' })}
          ${Button({
            label: 'Ghost Light',
            variant: 'ghost-light',
            size: 'sm'
          })}
        </div>
      </div>
      <div>
        <h3 style="margin-bottom: 1rem; font-weight: bold;">Medium (Default)</h3>
        <div style="display: flex; gap: 1rem; align-items: center;">
          ${Button({ label: 'Primary', variant: 'primary', size: 'md' })}
          ${Button({
            label: 'Secondary',
            variant: 'secondary',
            size: 'md'
          })}
          ${Button({ label: 'Success', variant: 'success', size: 'md' })}
          ${Button({
            label: 'Destructive',
            variant: 'danger',
            size: 'md'
          })}
          ${Button({ label: 'Ghost', variant: 'ghost', size: 'md' })}
          ${Button({
            label: 'Ghost Light',
            variant: 'ghost-light',
            size: 'md'
          })}
        </div>
      </div>
      <div>
        <h3 style="margin-bottom: 1rem; font-weight: bold;">Large</h3>
        <div style="display: flex; gap: 1rem; align-items: center;">
          ${Button({ label: 'Primary', variant: 'primary', size: 'lg' })}
          ${Button({
            label: 'Secondary',
            variant: 'secondary',
            size: 'lg'
          })}
          ${Button({ label: 'Success', variant: 'success', size: 'lg' })}
          ${Button({
            label: 'Destructive',
            variant: 'danger',
            size: 'lg'
          })}
          ${Button({ label: 'Ghost', variant: 'ghost', size: 'lg' })}
          ${Button({
            label: 'Ghost Light',
            variant: 'ghost-light',
            size: 'lg'
          })}
        </div>
      </div>
    </div>
  `
};
