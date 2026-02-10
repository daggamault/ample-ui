import type { Meta, StoryObj } from '@storybook/html-vite';
import { cap, code, row, section, variants } from '../_story-helpers';

type AvatarArgs = Record<string, never>;

const img = (seed: number) => `https://i.pravatar.cc/80?img=${seed}`;

const meta: Meta<AvatarArgs> = {
  title: 'Data Display/Avatar',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<AvatarArgs>;

export const Avatar: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Sizes',
        row(
          `<div class="avatar avatar-sm"><img src="${img(1)}" alt="User" /></div>`,
          `<div class="avatar"><img src="${img(2)}" alt="User" /></div>`,
          `<div class="avatar avatar-lg"><img src="${img(3)}" alt="User" /></div>`,
          `<div class="avatar avatar-xl"><img src="${img(4)}" alt="User" /></div>`
        ),
        code(
          '<div class="avatar avatar-sm"><img src="..." alt="User" /></div>\n<div class="avatar"><img src="..." alt="User" /></div>\n<div class="avatar avatar-lg"><img src="..." alt="User" /></div>\n<div class="avatar avatar-xl"><img src="..." alt="User" /></div>'
        )
      )}
      ${section(
        'Initials',
        row(
          '<div class="avatar avatar-initials avatar-sm">JD</div>',
          '<div class="avatar avatar-initials">AB</div>',
          '<div class="avatar avatar-initials avatar-lg">MK</div>',
          '<div class="avatar avatar-initials avatar-xl">RS</div>'
        ),
        code('<div class="avatar avatar-initials">AB</div>')
      )}
      ${section(
        'Initials — Color Variants',
        row(
          ...variants.map((v) => {
            const cls = ['avatar', 'avatar-initials'];
            if (v !== 'primary') cls.push(`avatar-${v}`);
            return `<div class="${cls.join(' ')}">${cap(v).slice(0, 2).toUpperCase()}</div>`;
          })
        ),
        code('<div class="avatar avatar-initials avatar-success">SU</div>')
      )}
      ${section(
        'Rounded',
        row(
          `<div class="avatar avatar-rounded"><img src="${img(5)}" alt="User" /></div>`,
          '<div class="avatar avatar-rounded avatar-initials">RS</div>'
        ),
        code(
          '<div class="avatar avatar-rounded"><img src="..." alt="User" /></div>'
        )
      )}
      ${section(
        'Status Indicator',
        row(
          `<div class="avatar avatar-status"><img src="${img(6)}" alt="User" /></div>`,
          `<div class="avatar avatar-status avatar-status-warning"><img src="${img(7)}" alt="User" /></div>`,
          `<div class="avatar avatar-status avatar-status-error"><img src="${img(8)}" alt="User" /></div>`,
          `<div class="avatar avatar-status avatar-status-muted"><img src="${img(9)}" alt="User" /></div>`
        ),
        code(
          '<div class="avatar avatar-status"><img src="..." alt="User" /></div>\n<div class="avatar avatar-status avatar-status-error"><img src="..." alt="User" /></div>'
        )
      )}
      ${section(
        'Group',
        `<div class="avatar-group">
          <div class="avatar"><img src="${img(10)}" alt="User" /></div>
          <div class="avatar"><img src="${img(11)}" alt="User" /></div>
          <div class="avatar"><img src="${img(12)}" alt="User" /></div>
          <div class="avatar avatar-initials">+3</div>
        </div>`,
        code(
          '<div class="avatar-group">\n  <div class="avatar"><img src="..." alt="User" /></div>\n  <div class="avatar avatar-initials">+3</div>\n</div>'
        )
      )}
    </div>`
};
