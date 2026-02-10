import type { Meta, StoryObj } from '@storybook/html-vite';
import { cap, code, section, variants } from '../_story-helpers';

type RadioArgs = Record<string, never>;

const meta: Meta<RadioArgs> = {
  title: 'Forms/Radio',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<RadioArgs>;

export const Radio: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Basic',
        `<div class="radio-group">
          <label class="radio">
            <input type="radio" class="radio-input" name="plan" value="free" checked />
            <span class="radio-circle"></span>
            <span class="radio-label">Free</span>
          </label>
          <label class="radio">
            <input type="radio" class="radio-input" name="plan" value="pro" />
            <span class="radio-circle"></span>
            <span class="radio-label">Pro</span>
          </label>
          <label class="radio">
            <input type="radio" class="radio-input" name="plan" value="enterprise" />
            <span class="radio-circle"></span>
            <span class="radio-label">Enterprise</span>
          </label>
        </div>`,
        code(
          '<div class="radio-group">\n  <label class="radio">\n    <input type="radio" class="radio-input" name="group" value="a" />\n    <span class="radio-circle"></span>\n    <span class="radio-label">Option A</span>\n  </label>\n</div>'
        )
      )}
      ${section(
        'Horizontal',
        `<div class="radio-group radio-group-horizontal">
          <label class="radio">
            <input type="radio" class="radio-input" name="size" value="sm" />
            <span class="radio-circle"></span>
            <span class="radio-label">Small</span>
          </label>
          <label class="radio">
            <input type="radio" class="radio-input" name="size" value="md" checked />
            <span class="radio-circle"></span>
            <span class="radio-label">Medium</span>
          </label>
          <label class="radio">
            <input type="radio" class="radio-input" name="size" value="lg" />
            <span class="radio-circle"></span>
            <span class="radio-label">Large</span>
          </label>
        </div>`,
        code('<div class="radio-group radio-group-horizontal">...</div>')
      )}
      ${section(
        'Color Variants',
        `<div class="radio-group radio-group-horizontal">
          ${variants
            .map((v) => {
              const cls = ['radio'];
              if (v !== 'primary') cls.push(`radio-${v}`);
              return `<label class="${cls.join(' ')}">
              <input type="radio" class="radio-input" name="color-demo" value="${v}" ${v === 'primary' ? 'checked' : ''} />
              <span class="radio-circle"></span>
              <span class="radio-label">${cap(v)}</span>
            </label>`;
            })
            .join('')}
        </div>`,
        code(
          '<label class="radio radio-success">\n  <input type="radio" class="radio-input" name="group" />\n  <span class="radio-circle"></span>\n  <span class="radio-label">Success</span>\n</label>'
        )
      )}
      ${section(
        'Disabled',
        `<div class="radio-group">
          <label class="radio">
            <input type="radio" class="radio-input" name="disabled-demo" disabled />
            <span class="radio-circle"></span>
            <span class="radio-label">Disabled</span>
          </label>
          <label class="radio">
            <input type="radio" class="radio-input" name="disabled-demo" checked disabled />
            <span class="radio-circle"></span>
            <span class="radio-label">Disabled selected</span>
          </label>
        </div>`,
        code('<input type="radio" class="radio-input" disabled />')
      )}
    </div>`
};
