import type { Meta, StoryObj } from '@storybook/html-vite';
import { cap, code, section, stack, variants } from '../_story-helpers';

type CheckboxArgs = Record<string, never>;

const meta: Meta<CheckboxArgs> = {
  title: 'Forms/Checkbox',
  tags: ['autodocs'],
  decorators: [
    (storyFn) => {
      const html = storyFn();
      requestAnimationFrame(() => {
        document
          .querySelectorAll<HTMLInputElement>('[data-indeterminate]')
          .forEach((el) => {
            el.indeterminate = true;
          });
      });
      return html;
    }
  ]
};

export default meta;
type Story = StoryObj<CheckboxArgs>;

export const Checkbox: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Basic',
        stack(
          `<label class="checkbox">
            <input type="checkbox" class="checkbox-input" />
            <span class="checkbox-box"></span>
            <span class="checkbox-label">Accept terms and conditions</span>
          </label>`,
          `<label class="checkbox">
            <input type="checkbox" class="checkbox-input" checked />
            <span class="checkbox-box"></span>
            <span class="checkbox-label">Remember me</span>
          </label>`
        ),
        code(
          '<label class="checkbox">\n  <input type="checkbox" class="checkbox-input" />\n  <span class="checkbox-box"></span>\n  <span class="checkbox-label">Label</span>\n</label>'
        )
      )}
      ${section(
        'Color Variants',
        stack(
          ...variants.map((v) => {
            const cls = ['checkbox'];
            if (v !== 'primary') cls.push(`checkbox-${v}`);
            return `<label class="${cls.join(' ')}">
            <input type="checkbox" class="checkbox-input" checked />
            <span class="checkbox-box"></span>
            <span class="checkbox-label">${cap(v)}</span>
          </label>`;
          })
        ),
        code(
          '<label class="checkbox checkbox-success">\n  <input type="checkbox" class="checkbox-input" checked />\n  <span class="checkbox-box"></span>\n  <span class="checkbox-label">Success</span>\n</label>'
        )
      )}
      ${section(
        'Indeterminate',
        stack(
          `<label class="checkbox">
            <input type="checkbox" class="checkbox-input" data-indeterminate />
            <span class="checkbox-box"></span>
            <span class="checkbox-label">Select all</span>
          </label>`,
          ...['secondary', 'success', 'error'].map(
            (v) => `<label class="checkbox checkbox-${v}">
            <input type="checkbox" class="checkbox-input" data-indeterminate />
            <span class="checkbox-box"></span>
            <span class="checkbox-label">${cap(v)} indeterminate</span>
          </label>`
          )
        ),
        code('checkbox.indeterminate = true;')
      )}
      ${section(
        'Disabled',
        stack(
          `<label class="checkbox">
            <input type="checkbox" class="checkbox-input" disabled />
            <span class="checkbox-box"></span>
            <span class="checkbox-label">Disabled unchecked</span>
          </label>`,
          `<label class="checkbox">
            <input type="checkbox" class="checkbox-input" checked disabled />
            <span class="checkbox-box"></span>
            <span class="checkbox-label">Disabled checked</span>
          </label>`
        )
      )}
    </div>`
};
