import type { Meta, StoryObj } from '@storybook/html-vite';
import { cap, code, row, section, variants } from '../_story-helpers';

type BadgeArgs = Record<string, never>;

const badge = (variant: string, style = '') => {
  const cls = ['badge'];
  if (variant !== 'primary') cls.push(`badge-${variant}`);
  if (style) cls.push(`badge-${style}`);
  return `<span class="${cls.join(' ')}">${cap(variant)}</span>`;
};

const meta: Meta<BadgeArgs> = {
  title: 'Data Display/Badge',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<BadgeArgs>;

export const Badge: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Solid',
        row(...variants.map((v) => badge(v))),
        code(
          variants
            .map(
              (v) =>
                `<span class="badge${v !== 'primary' ? ` badge-${v}` : ''}">${cap(v)}</span>`
            )
            .join('\n')
        )
      )}
      ${section(
        'Outline',
        row(...variants.map((v) => badge(v, 'outline'))),
        code('<span class="badge badge-outline">Primary</span>')
      )}
      ${section(
        'Soft',
        row(...variants.map((v) => badge(v, 'soft'))),
        code('<span class="badge badge-soft">Primary</span>')
      )}
      ${section(
        'Sizes',
        row(
          '<span class="badge badge-sm">Small</span>',
          '<span class="badge">Default</span>',
          '<span class="badge badge-lg">Large</span>'
        )
      )}
      ${section(
        'Dot Indicator',
        row(
          '<span class="badge badge-dot"></span>',
          '<span class="badge badge-dot badge-success"></span>',
          '<span class="badge badge-dot badge-error"></span>',
          '<span class="badge badge-dot badge-warning"></span>'
        ),
        code('<span class="badge badge-dot badge-success"></span>')
      )}
      ${section(
        'Inline with Text',
        '<div class="flex gap-6 items-center"><span class="text-sm">Messages <span class="badge">12</span></span><span class="text-sm">Errors <span class="badge badge-error">3</span></span><span class="text-sm">Status <span class="badge badge-soft badge-success">Active</span></span></div>'
      )}
    </div>`
};
