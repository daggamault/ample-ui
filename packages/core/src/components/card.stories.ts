import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';

type CardArgs = Record<string, never>;

const meta: Meta<CardArgs> = {
  title: 'Layout/Card',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<CardArgs>;

export const Card: Story = {
  render: () => `
    <div class="flex flex-col gap-10 max-w-lg">
      ${section(
        'Basic',
        `<div class="card">
          <div class="card-header"><span class="card-title">Card Title</span></div>
          <div class="card-body">
            <p class="text-sm text-text-muted">This is a basic card with a header, body, and footer.</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm">Action</button>
          </div>
        </div>`,
        code(
          '<div class="card">\n  <div class="card-header"><span class="card-title">Title</span></div>\n  <div class="card-body">Content</div>\n  <div class="card-footer">Footer</div>\n</div>'
        )
      )}
      ${section(
        'Raised',
        `<div class="card card-raised">
          <div class="card-header"><span class="card-title">Raised Card</span></div>
          <div class="card-body">
            <p class="text-sm text-text-muted">Raised cards use a shadow instead of a border, giving them a floating appearance.</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm">Action</button>
          </div>
        </div>`,
        code(
          '<div class="card card-raised">\n  <div class="card-body">Content</div>\n</div>'
        )
      )}
      ${section(
        'Interactive',
        `<div class="flex gap-4">
          <div class="card card-interactive" style="flex: 1" tabindex="0">
            <div class="card-body">
              <span class="card-title">Clickable Card</span>
              <p class="text-sm text-text-muted mt-1">Cards with the interactive modifier lift on hover and support keyboard focus.</p>
            </div>
          </div>
          <div class="card card-interactive" style="flex: 1" tabindex="0">
            <div class="card-body">
              <span class="card-title">Another Card</span>
              <p class="text-sm text-text-muted mt-1">Great for grid layouts where each card is a navigable item.</p>
            </div>
          </div>
        </div>`,
        code(
          '<div class="card card-interactive" tabindex="0">\n  <div class="card-body">Clickable</div>\n</div>'
        )
      )}
      ${section(
        'Density',
        `<div class="flex flex-col gap-4">
          <div class="card card-sm">
            <div class="card-body"><p class="text-sm text-text-muted">Small density — compact padding.</p></div>
          </div>
          <div class="card">
            <div class="card-body"><p class="text-sm text-text-muted">Default density.</p></div>
          </div>
          <div class="card card-lg">
            <div class="card-body"><p class="text-sm text-text-muted">Large density — spacious padding.</p></div>
          </div>
        </div>`,
        code(
          '<div class="card card-sm">...</div>\n<div class="card">...</div>\n<div class="card card-lg">...</div>'
        )
      )}
      ${section(
        'With Image',
        `<div class="card" style="max-width: 20rem;">
          <img class="card-image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=200&fit=crop" alt="Landscape" style="height: 10rem;" />
          <div class="card-body">
            <span class="card-title">Mountain Landscape</span>
            <p class="text-sm text-text-muted mt-1">Beautiful view of a mountain landscape at sunrise.</p>
          </div>
        </div>`
      )}
    </div>`
};
