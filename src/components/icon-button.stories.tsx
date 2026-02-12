import type { Meta, StoryObj } from '@storybook/react';
import {
  Download,
  Heart,
  Plus,
  Search,
  Settings,
  Share2,
  Trash2,
  X
} from 'lucide-react';
import { COLORS } from '../lib/types';
import { IconButton } from './icon-button';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs']
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Showcase: Story = {
  render: () => (
    <div className="max-w-5xl space-y-12 p-8">
      <div>
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold text-text">IconButton</h2>
          <p className="text-text-muted">
            Square icon-only buttons with the same springy animations as regular
            buttons. Perfect for toolbars and action menus.
          </p>
        </div>

        <div className="mb-6 rounded-lg bg-base-muted p-4">
          <pre className="text-sm text-text-muted">
            <code>{`import { IconButton } from '@ample-ui/core'
import { Heart } from 'lucide-react'

<IconButton
  icon={<Heart size={20} />}
  aria-label="Like"
  variant="solid"
  color="primary"
/>

<IconButton
  icon={<X size={20} />}
  aria-label="Close"
  variant="ghost"
  color="error"
/>`}</code>
          </pre>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-text">Solid</h3>
        <div className="flex flex-wrap gap-3">
          {COLORS.map((color) => (
            <IconButton
              key={color}
              variant="solid"
              color={color}
              icon={<Heart size={20} />}
              aria-label={`Like - ${color}`}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-text">Outline</h3>
        <div className="flex flex-wrap gap-3">
          {COLORS.map((color) => (
            <IconButton
              key={color}
              variant="outline"
              color={color}
              icon={<Search size={20} />}
              aria-label={`Search - ${color}`}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-text">Ghost</h3>
        <div className="flex flex-wrap gap-3">
          {COLORS.map((color) => (
            <IconButton
              key={color}
              variant="ghost"
              color={color}
              icon={<Settings size={20} />}
              aria-label={`Settings - ${color}`}
            />
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-text">Sizes</h3>
        <div className="flex items-center gap-4">
          <IconButton
            size="sm"
            icon={<Plus size={16} />}
            aria-label="Add small"
          />
          <IconButton
            size="md"
            icon={<Plus size={20} />}
            aria-label="Add medium"
          />
          <IconButton
            size="lg"
            icon={<Plus size={24} />}
            aria-label="Add large"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-text">
          Common Use Cases
        </h3>
        <div className="flex flex-wrap gap-4">
          <IconButton icon={<X size={20} />} aria-label="Close" color="error" />
          <IconButton
            icon={<Trash2 size={20} />}
            aria-label="Delete"
            variant="outline"
            color="error"
          />
          <IconButton
            icon={<Download size={20} />}
            aria-label="Download"
            variant="ghost"
          />
          <IconButton
            icon={<Share2 size={20} />}
            aria-label="Share"
            variant="ghost"
            color="secondary"
          />
        </div>
      </div>
    </div>
  )
};
