import type { Meta, StoryObj } from '@storybook/html-vite'
import type { Color } from '../lib/types'
import { COLORS, SIZES } from '../lib/types'
import {
  BUTTON_VARIANTS,
  Button,
  type ButtonProps,
  type ButtonVariant,
} from './button'

const meta = {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: BUTTON_VARIANTS,
    },
    color: {
      control: 'select',
      options: COLORS,
    },
    size: {
      control: 'select',
      options: SIZES,
    },
  },
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<ButtonProps>

export const Interactive: Story = {
  args: {
    label: 'Button',
    variant: 'solid',
    color: 'primary',
    size: 'md',
  },
}

const createVariantStory = (variant: ButtonVariant, title: string): Story => ({
  name: title,
  render: () => `
    <div style="display: flex; flex-wrap: wrap; gap: 1rem; align-items: center; justify-content: center;">
      ${COLORS.map(
        (color) =>
          Button({
            label: color,
            variant,
            color: color as Color,
            size: 'md',
          }),
      ).join('')}
    </div>
  `,
})

export const SolidButtons = createVariantStory('solid', 'Solid Buttons')
export const OutlineButtons = createVariantStory('outline', 'Outline Buttons')
export const GhostButtons = createVariantStory('ghost', 'Ghost Buttons')

export const AllSizes: Story = {
  name: 'Sizes',
  render: () => `
    <div style="display: flex; gap: 1rem; align-items: center; justify-content: center;">
      ${Button({ label: 'Small', variant: 'solid', color: 'primary', size: 'sm' })}
      ${Button({ label: 'Medium', variant: 'solid', color: 'primary', size: 'md' })}
      ${Button({ label: 'Large', variant: 'solid', color: 'primary', size: 'lg' })}
    </div>
  `,
}

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => `
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <div>
        <h3 style="margin-bottom: 1rem; font-weight: 600; color: var(--color-text-muted);">Solid</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
          ${COLORS.map((color) => Button({ label: color, variant: 'solid', color: color as Color })).join('')}
        </div>
      </div>
      <div>
        <h3 style="margin-bottom: 1rem; font-weight: 600; color: var(--color-text-muted);">Outline</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
          ${COLORS.map((color) => Button({ label: color, variant: 'outline', color: color as Color })).join('')}
        </div>
      </div>
      <div>
        <h3 style="margin-bottom: 1rem; font-weight: 600; color: var(--color-text-muted);">Ghost</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
          ${COLORS.map((color) => Button({ label: color, variant: 'ghost', color: color as Color })).join('')}
        </div>
      </div>
    </div>
  `,
}
