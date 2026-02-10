import type { Meta, StoryObj } from '@storybook/html-vite';
import { variants, cap, section, code, stack } from '../_story-helpers';

type ToggleArgs = Record<string, never>;

const meta: Meta<ToggleArgs> = {
  title: 'Forms/Toggle',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ToggleArgs>;

export const Toggle: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Basic',
        stack(
          `<label class="toggle">
            <input type="checkbox" class="toggle-input" />
            <span class="toggle-track"></span>
            <span class="toggle-label">Notifications</span>
          </label>`,
          `<label class="toggle">
            <input type="checkbox" class="toggle-input" checked />
            <span class="toggle-track"></span>
            <span class="toggle-label">Dark mode</span>
          </label>`
        ),
        code(
          '<label class="toggle">\n  <input type="checkbox" class="toggle-input" />\n  <span class="toggle-track"></span>\n  <span class="toggle-label">Label</span>\n</label>'
        )
      )}
      ${section(
        'Color Variants',
        stack(
          ...variants.map((v) => {
            const cls = ['toggle'];
            if (v !== 'primary') cls.push(`toggle-${v}`);
            return `<label class="${cls.join(' ')}">
            <input type="checkbox" class="toggle-input" checked />
            <span class="toggle-track"></span>
            <span class="toggle-label">${cap(v)}</span>
          </label>`;
          })
        ),
        code(
          '<label class="toggle toggle-success">\n  <input type="checkbox" class="toggle-input" checked />\n  <span class="toggle-track"></span>\n  <span class="toggle-label">Success</span>\n</label>'
        )
      )}
      ${section(
        'Sizes',
        stack(
          `<label class="toggle toggle-sm">
            <input type="checkbox" class="toggle-input" checked />
            <span class="toggle-track"></span>
            <span class="toggle-label">Small</span>
          </label>`,
          `<label class="toggle">
            <input type="checkbox" class="toggle-input" checked />
            <span class="toggle-track"></span>
            <span class="toggle-label">Medium</span>
          </label>`,
          `<label class="toggle toggle-lg">
            <input type="checkbox" class="toggle-input" checked />
            <span class="toggle-track"></span>
            <span class="toggle-label">Large</span>
          </label>`
        ),
        code(
          '<label class="toggle toggle-sm">...</label>\n<label class="toggle">...</label>\n<label class="toggle toggle-lg">...</label>'
        )
      )}
      ${section(
        'Disabled',
        stack(
          `<label class="toggle">
            <input type="checkbox" class="toggle-input" disabled />
            <span class="toggle-track"></span>
            <span class="toggle-label">Disabled off</span>
          </label>`,
          `<label class="toggle">
            <input type="checkbox" class="toggle-input" checked disabled />
            <span class="toggle-track"></span>
            <span class="toggle-label">Disabled on</span>
          </label>`
        )
      )}
    </div>`
};
