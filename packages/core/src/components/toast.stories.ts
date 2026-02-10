import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';
import { toast } from './toast';

type ToastArgs = Record<string, never>;

const meta: Meta<ToastArgs> = {
  title: 'Feedback/Toast',
  tags: ['autodocs'],
  decorators: [
    (storyFn) => {
      const html = storyFn();
      requestAnimationFrame(() => {
        document
          .querySelectorAll<HTMLButtonElement>('[data-toast-demo]')
          .forEach((btn) => {
            btn.addEventListener('click', () => {
              const variant =
                (btn.getAttribute('data-toast-variant') as Parameters<
                  typeof toast
                >[0]['variant']) ?? 'toast';
              const message =
                btn.getAttribute('data-toast-message') ?? 'Toast notification';
              const position =
                (btn.getAttribute('data-toast-position') as Parameters<
                  typeof toast
                >[0]['position']) ?? 'tr';
              toast({ message, variant, position });
            });
          });
      });
      return html;
    }
  ]
};

export default meta;
type Story = StoryObj<ToastArgs>;

export const Toast: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Variants',
        `<div class="flex gap-3 flex-wrap">
          <button class="btn" data-toast-demo data-toast-variant="toast" data-toast-message="Default notification">Default</button>
          <button class="btn" data-toast-demo data-toast-variant="toast-primary" data-toast-message="Primary notification">Primary</button>
          <button class="btn btn-secondary" data-toast-demo data-toast-variant="toast-secondary" data-toast-message="Secondary notification">Secondary</button>
          <button class="btn btn-success" data-toast-demo data-toast-variant="toast-success" data-toast-message="Changes saved successfully!">Success</button>
          <button class="btn btn-error" data-toast-demo data-toast-variant="toast-error" data-toast-message="Something went wrong!">Error</button>
          <button class="btn btn-warning" data-toast-demo data-toast-variant="toast-warning" data-toast-message="Please check your input.">Warning</button>
          <button class="btn btn-info" data-toast-demo data-toast-variant="toast-info" data-toast-message="New update available.">Info</button>
        </div>`,
        code(
          `import { toast } from 'ample-ui/toast';\n\ntoast({ message: 'Saved!', variant: 'toast-success' });\ntoast({ message: 'Error!', variant: 'toast-error', duration: 8000 });`
        )
      )}
      ${section(
        'Positions',
        `<div class="flex gap-3 flex-wrap">
          <button class="btn btn-outline" data-toast-demo data-toast-variant="toast" data-toast-message="Top right (default)" data-toast-position="tr">Top Right</button>
          <button class="btn btn-outline" data-toast-demo data-toast-variant="toast" data-toast-message="Top left" data-toast-position="tl">Top Left</button>
          <button class="btn btn-outline" data-toast-demo data-toast-variant="toast" data-toast-message="Bottom left" data-toast-position="bl">Bottom Left</button>
          <button class="btn btn-outline" data-toast-demo data-toast-variant="toast" data-toast-message="Bottom right" data-toast-position="br">Bottom Right</button>
        </div>`
      )}
    </div>`
};
