import type { Meta, StoryObj } from '@storybook/react';
import { COLORS } from '../lib/types';
import { Button } from './button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Showcase: Story = {
  render: () => (
    <div className="max-w-5xl space-y-12 p-8">
      <div>
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold text-text">Button</h2>
          <p className="text-text-muted">
            Buttons with solid, outline, and ghost variants. Includes springy
            hover animations and color-matched glow effects.
          </p>
        </div>

        <div className="mb-6 rounded-lg bg-base-muted p-4">
          <pre className="text-sm text-text-muted">
            <code>{`import { Button } from '@ample-ui/core'

<Button variant="solid" color="primary">
  Click me
</Button>

<Button variant="outline" color="secondary">
  Outline
</Button>

<Button variant="ghost" color="success" size="sm">
  Ghost
</Button>`}</code>
          </pre>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-text">Solid</h3>
        <div className="flex flex-wrap gap-3">
          {COLORS.map((color) => (
            <Button key={color} variant="solid" color={color}>
              {color}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-text">Outline</h3>
        <div className="flex flex-wrap gap-3">
          {COLORS.map((color) => (
            <Button key={color} variant="outline" color={color}>
              {color}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-text">Ghost</h3>
        <div className="flex flex-wrap gap-3">
          {COLORS.map((color) => (
            <Button key={color} variant="ghost" color={color}>
              {color}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-text">Sizes</h3>
        <div className="flex items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>
    </div>
  )
};
