import type { Meta, StoryObj } from '@storybook/html-vite';
import { cap, code, row, section, variants } from '../_story-helpers';

type ButtonArgs = Record<string, never>;

const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>`;
const heartSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`;
const trashSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`;

const btn = (variant: string, style = '', extra = '') => {
  const cls = ['btn'];
  if (variant !== 'primary') cls.push(`btn-${variant}`);
  if (style) cls.push(`btn-${style}`);
  return `<button class="${cls.join(' ')}"${extra}>${cap(variant)}</button>`;
};

const meta: Meta<ButtonArgs> = {
  title: 'Forms/Button',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ButtonArgs>;

export const Button: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Solid',
        row(...variants.map((v) => btn(v))),
        code(
          variants
            .map(
              (v) =>
                `<button class="btn${v !== 'primary' ? ` btn-${v}` : ''}">${cap(v)}</button>`
            )
            .join('\n')
        )
      )}
      ${section(
        'Solid — Disabled',
        row(...variants.map((v) => btn(v, '', ' disabled')))
      )}
      ${section(
        'Outline',
        row(...variants.map((v) => btn(v, 'outline'))),
        code(
          `<button class="btn btn-outline">Primary</button>\n<button class="btn btn-outline btn-secondary">Secondary</button>`
        )
      )}
      ${section(
        'Ghost',
        row(...variants.map((v) => btn(v, 'ghost'))),
        code(
          `<button class="btn btn-ghost">Primary</button>\n<button class="btn btn-ghost btn-error">Error</button>`
        )
      )}
      ${section(
        'Sizes',
        row(
          '<button class="btn btn-sm">Small</button>',
          '<button class="btn">Medium</button>',
          '<button class="btn btn-lg">Large</button>'
        ),
        code(
          '<button class="btn btn-sm">Small</button>\n<button class="btn">Medium</button>\n<button class="btn btn-lg">Large</button>'
        )
      )}
      ${section(
        'Block',
        '<button class="btn btn-block">Full Width Button</button>',
        code('<button class="btn btn-block">Full Width</button>')
      )}
      ${section(
        'Loading',
        row(
          '<button class="btn btn-loading">Saving</button>',
          '<button class="btn btn-outline btn-loading">Loading</button>',
          '<button class="btn btn-ghost btn-loading">Wait</button>'
        ),
        code('<button class="btn btn-loading">Saving</button>')
      )}
      ${section(
        'Pill',
        row(
          '<button class="btn btn-pill">Primary</button>',
          '<button class="btn btn-outline btn-pill">Outline</button>',
          '<button class="btn btn-ghost btn-pill">Ghost</button>',
          `<button class="btn btn-icon btn-pill">${iconSvg}</button>`
        )
      )}
      ${section(
        'Icon Buttons',
        row(
          `<button class="btn btn-icon">${iconSvg}</button>`,
          `<button class="btn btn-secondary btn-icon">${heartSvg}</button>`,
          `<button class="btn btn-error btn-icon">${trashSvg}</button>`,
          `<button class="btn btn-outline btn-icon">${iconSvg}</button>`,
          `<button class="btn btn-ghost btn-icon">${iconSvg}</button>`
        ),
        code('<button class="btn btn-icon">\\n  <svg>...</svg>\\n</button>')
      )}
      ${section(
        'Button Group',
        row(
          '<div class="btn-group"><button class="btn btn-outline">Left</button><button class="btn btn-outline">Center</button><button class="btn btn-outline">Right</button></div>',
          '<div class="btn-group"><button class="btn">One</button><button class="btn">Two</button><button class="btn">Three</button></div>'
        ),
        code(
          '<div class="btn-group">\\n  <button class="btn btn-outline">Left</button>\\n  <button class="btn btn-outline">Center</button>\\n  <button class="btn btn-outline">Right</button>\\n</div>'
        )
      )}
    </div>`
};
