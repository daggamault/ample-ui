import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';
import { initAll } from './dialog';

type DialogArgs = Record<string, never>;

const meta: Meta<DialogArgs> = {
  title: 'Feedback/Dialog',
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
type Story = StoryObj<DialogArgs>;

export const Dialog: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Sizes',
        `<div class="flex gap-3 flex-wrap">
          <button class="btn" data-dialog-trigger="demo-default">Default</button>
          <button class="btn btn-outline" data-dialog-trigger="demo-sm">Small</button>
          <button class="btn btn-outline" data-dialog-trigger="demo-lg">Large</button>
          <button class="btn btn-outline" data-dialog-trigger="demo-xl">Extra Large</button>
        </div>`,
        code(
          `<button data-dialog-trigger="my-dialog">Open</button>\n\n<dialog class="dialog" data-dialog="my-dialog">\n  <div class="dialog-header">\n    <span class="dialog-title">Title</span>\n    <button class="dialog-close" data-dialog-close>&times;</button>\n  </div>\n  <div class="dialog-body">Content</div>\n  <div class="dialog-footer">\n    <button class="btn" data-dialog-close>Close</button>\n  </div>\n</dialog>`
        )
      )}
      ${section(
        'Scrollable Body',
        `<div class="flex gap-3 flex-wrap">
          <button class="btn btn-outline" data-dialog-trigger="demo-scroll">Scrollable Content</button>
        </div>`
      )}
      ${section(
        'Sheet Variants',
        `<div class="flex gap-3 flex-wrap">
          <button class="btn btn-outline" data-dialog-trigger="demo-sheet-right">Sheet Right</button>
          <button class="btn btn-outline" data-dialog-trigger="demo-sheet-bottom">Sheet Bottom</button>
        </div>`,
        code(
          '<dialog class="dialog dialog-sheet-right" data-dialog="my-sheet">\n  ...\n</dialog>'
        )
      )}

      <dialog class="dialog" data-dialog="demo-default" aria-labelledby="dialog-title-default">
        <div class="dialog-header">
          <span class="dialog-title" id="dialog-title-default">Confirm Action</span>
          <button class="dialog-close" data-dialog-close aria-label="Close">&times;</button>
        </div>
        <div class="dialog-body">
          <p class="text-sm text-text-muted">Are you sure you want to proceed? This action cannot be undone.</p>
        </div>
        <div class="dialog-footer">
          <button class="btn btn-ghost" data-dialog-close>Cancel</button>
          <button class="btn" data-dialog-close>Confirm</button>
        </div>
      </dialog>

      <dialog class="dialog dialog-sm" data-dialog="demo-sm" aria-labelledby="dialog-title-sm">
        <div class="dialog-header">
          <span class="dialog-title" id="dialog-title-sm">Small Dialog</span>
          <button class="dialog-close" data-dialog-close aria-label="Close">&times;</button>
        </div>
        <div class="dialog-body">
          <p class="text-sm text-text-muted">A compact dialog with max-width of 24rem.</p>
        </div>
        <div class="dialog-footer">
          <button class="btn btn-sm" data-dialog-close>Got it</button>
        </div>
      </dialog>

      <dialog class="dialog dialog-lg" data-dialog="demo-lg" aria-labelledby="dialog-title-lg">
        <div class="dialog-header">
          <span class="dialog-title" id="dialog-title-lg">Large Dialog</span>
          <button class="dialog-close" data-dialog-close aria-label="Close">&times;</button>
        </div>
        <div class="dialog-body">
          <p class="text-sm text-text-muted">A large dialog with max-width of 42rem. Focus is trapped natively by the browser.</p>
          <div class="field mt-4">
            <label class="label">Example Input</label>
            <input type="text" class="input" placeholder="Focus is trapped inside the dialog" />
          </div>
        </div>
        <div class="dialog-footer">
          <button class="btn btn-ghost" data-dialog-close>Cancel</button>
          <button class="btn" data-dialog-close>Save</button>
        </div>
      </dialog>

      <dialog class="dialog dialog-xl" data-dialog="demo-xl" aria-labelledby="dialog-title-xl">
        <div class="dialog-header">
          <span class="dialog-title" id="dialog-title-xl">Extra Large Dialog</span>
          <button class="dialog-close" data-dialog-close aria-label="Close">&times;</button>
        </div>
        <div class="dialog-body">
          <p class="text-sm text-text-muted">An extra large dialog with max-width of 56rem. Ideal for complex forms or data-heavy content.</p>
        </div>
        <div class="dialog-footer">
          <button class="btn btn-ghost" data-dialog-close>Cancel</button>
          <button class="btn" data-dialog-close>Continue</button>
        </div>
      </dialog>

      <dialog class="dialog" data-dialog="demo-scroll" aria-labelledby="dialog-title-scroll">
        <div class="dialog-header">
          <span class="dialog-title" id="dialog-title-scroll">Scrollable Dialog</span>
          <button class="dialog-close" data-dialog-close aria-label="Close">&times;</button>
        </div>
        <div class="dialog-body">
          <p class="text-sm text-text-muted">When dialog content exceeds the max height, the body scrolls independently while the header and footer stay fixed.</p>
          ${Array.from({ length: 12 }, (_, i) => `<p class="text-sm text-text-muted mt-3">Paragraph ${i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`).join('')}
        </div>
        <div class="dialog-footer">
          <button class="btn btn-ghost" data-dialog-close>Cancel</button>
          <button class="btn" data-dialog-close>Save</button>
        </div>
      </dialog>

      <dialog class="dialog dialog-sheet-right" data-dialog="demo-sheet-right" aria-labelledby="dialog-title-sheet-r">
        <div class="dialog-header">
          <span class="dialog-title" id="dialog-title-sheet-r">Right Sheet</span>
          <button class="dialog-close" data-dialog-close aria-label="Close">&times;</button>
        </div>
        <div class="dialog-body">
          <p class="text-sm text-text-muted">A sheet that slides in from the right. Full height, ideal for detail panels and settings.</p>
        </div>
        <div class="dialog-footer">
          <button class="btn" data-dialog-close>Close</button>
        </div>
      </dialog>

      <dialog class="dialog dialog-sheet-bottom" data-dialog="demo-sheet-bottom" aria-labelledby="dialog-title-sheet-b">
        <div class="dialog-header">
          <span class="dialog-title" id="dialog-title-sheet-b">Bottom Sheet</span>
          <button class="dialog-close" data-dialog-close aria-label="Close">&times;</button>
        </div>
        <div class="dialog-body">
          <p class="text-sm text-text-muted">A sheet that slides up from the bottom. Great for mobile-friendly action menus.</p>
        </div>
        <div class="dialog-footer">
          <button class="btn" data-dialog-close>Close</button>
        </div>
      </dialog>
    </div>`
};
