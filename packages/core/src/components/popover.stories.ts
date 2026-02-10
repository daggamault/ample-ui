import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';
import { initAll } from './popover';

type PopoverArgs = Record<string, never>;

const meta: Meta<PopoverArgs> = {
  title: 'Overlay/Popover',
  tags: ['autodocs'],
  decorators: [
    (storyFn) => {
      const html = storyFn();
      requestAnimationFrame(() => initAll());
      return html;
    }
  ]
};

export default meta;
type Story = StoryObj<PopoverArgs>;

export const Popover: Story = {
  render: () => `
    <div class="flex flex-col gap-10" style="padding: 6rem 2rem;">
      ${section(
        'Basic',
        `<div class="flex gap-4 flex-wrap items-center">
          <div class="popover popover-bottom" data-popover>
            <button class="btn popover-trigger">Click me</button>
            <div class="popover-content">
              <div class="popover-title">Popover Title</div>
              <p class="text-sm text-text-muted">This is a rich content popover. It supports any HTML content inside.</p>
            </div>
          </div>
          <div class="popover popover-bottom" data-popover>
            <button class="btn btn-outline popover-trigger">With Close</button>
            <div class="popover-content">
              <button class="popover-close" aria-label="Close">&times;</button>
              <div class="popover-title">Dismissible</div>
              <p class="text-sm text-text-muted">Click the X or click outside to close this popover.</p>
            </div>
          </div>
        </div>`,
        code(
          '<div class="popover popover-bottom" data-popover>\n  <button class="btn popover-trigger">Open</button>\n  <div class="popover-content">\n    <div class="popover-title">Title</div>\n    <p>Content here</p>\n  </div>\n</div>'
        )
      )}
      ${section(
        'Positions',
        `<div class="flex gap-6 flex-wrap items-center justify-center">
          <div class="popover" data-popover>
            <button class="btn btn-outline btn-sm popover-trigger">Top</button>
            <div class="popover-content">
              <p class="text-sm text-text-muted">Popover on top (default).</p>
            </div>
          </div>
          <div class="popover popover-bottom" data-popover>
            <button class="btn btn-outline btn-sm popover-trigger">Bottom</button>
            <div class="popover-content">
              <p class="text-sm text-text-muted">Popover on bottom.</p>
            </div>
          </div>
          <div class="popover popover-left" data-popover>
            <button class="btn btn-outline btn-sm popover-trigger">Left</button>
            <div class="popover-content">
              <p class="text-sm text-text-muted">Popover on left.</p>
            </div>
          </div>
          <div class="popover popover-right" data-popover>
            <button class="btn btn-outline btn-sm popover-trigger">Right</button>
            <div class="popover-content">
              <p class="text-sm text-text-muted">Popover on right.</p>
            </div>
          </div>
        </div>`
      )}
    </div>`
};
