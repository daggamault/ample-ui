import type { Meta, StoryObj } from '@storybook/html-vite';
import { variants, section, code, stack } from '../_story-helpers';

type RangeArgs = Record<string, never>;

const meta: Meta<RangeArgs> = {
  title: 'Forms/Range',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<RangeArgs>;

export const Range: Story = {
  render: () => `
    <div class="flex flex-col gap-10 max-w-lg">
      ${section(
        'Basic',
        `<div class="field">
          <label class="label">Volume</label>
          <input type="range" class="range" min="0" max="100" value="60" />
        </div>`,
        code(
          '<input type="range" class="range" min="0" max="100" value="60" />'
        )
      )}
      ${section(
        'Color Variants',
        stack(
          ...variants.map(
            (v) =>
              `<input type="range" class="range${v !== 'primary' ? ` range-${v}` : ''}" min="0" max="100" value="${Math.floor(Math.random() * 60 + 30)}" />`
          )
        ),
        code('<input type="range" class="range range-success" />')
      )}
      ${section(
        'Sizes',
        stack(
          '<input type="range" class="range range-sm" value="30" />',
          '<input type="range" class="range" value="50" />',
          '<input type="range" class="range range-lg" value="70" />'
        ),
        code(
          '<input type="range" class="range range-sm" />\n<input type="range" class="range" />\n<input type="range" class="range range-lg" />'
        )
      )}
      ${section(
        'With Steps',
        `<div class="field">
          <label class="label">Rating (1-5)</label>
          <input type="range" class="range" min="1" max="5" step="1" value="3" />
        </div>`
      )}
      ${section(
        'Disabled',
        '<input type="range" class="range" value="40" disabled />'
      )}
    </div>`
};
