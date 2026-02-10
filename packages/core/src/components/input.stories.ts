import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';

type InputArgs = Record<string, never>;

const meta: Meta<InputArgs> = {
  title: 'Forms/Input',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<InputArgs>;

export const Input: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      <div class="grid grid-cols-[1fr_1fr] gap-x-10 gap-y-8 max-w-2xl">
        ${section(
          'Basic Input',
          `<div class="field">
            <label class="label">Email</label>
            <input class="input" type="email" placeholder="you@example.com">
          </div>`
        )}
        ${section(
          'With Help Text',
          `<div class="field">
            <label class="label">Password</label>
            <input class="input" type="password" placeholder="Enter password">
            <span class="help">Must be at least 8 characters</span>
          </div>`
        )}
        ${section(
          'Validation — Error',
          `<div class="field">
            <label class="label">Username</label>
            <input class="input input-error" value="ab">
            <span class="help-error">Username must be at least 3 characters</span>
          </div>`
        )}
        ${section(
          'Validation — Success',
          `<div class="field">
            <label class="label">Username</label>
            <input class="input input-success" value="johndoe">
            <span class="help-success">Username is available</span>
          </div>`
        )}
        ${section(
          'Validation — Warning',
          `<div class="field">
            <label class="label">Display Name</label>
            <input class="input input-warning" value="John">
            <span class="help-warning">Display name is quite short</span>
          </div>`
        )}
        ${section(
          'Disabled',
          `<div class="field">
            <label class="label">Read Only</label>
            <input class="input" placeholder="Disabled input" disabled>
          </div>`
        )}
      </div>

      ${section(
        'Sizes',
        `<div class="flex gap-4 flex-wrap items-end max-w-2xl">
          <div class="field flex-1">
            <label class="label">Small</label>
            <input class="input input-sm" placeholder="Small input">
          </div>
          <div class="field flex-1">
            <label class="label">Medium</label>
            <input class="input" placeholder="Medium input">
          </div>
          <div class="field flex-1">
            <label class="label">Large</label>
            <input class="input input-lg" placeholder="Large input">
          </div>
        </div>`,
        code(
          '<input class="input input-sm">\n<input class="input">\n<input class="input input-lg">'
        )
      )}

      ${section(
        'Input Wrapper — Prefix / Suffix',
        `<div class="flex flex-col gap-4 max-w-md">
          <div class="input-wrapper">
            <span class="input-prefix"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></span>
            <input class="input" placeholder="Search...">
          </div>
          <div class="input-wrapper">
            <input class="input" placeholder="Amount">
            <span class="input-suffix">USD</span>
          </div>
        </div>`,
        code(
          '<div class="input-wrapper">\n  <span class="input-prefix"><svg>...</svg></span>\n  <input class="input" placeholder="Search...">\n</div>'
        )
      )}

      ${section(
        'Textarea',
        `<div class="field max-w-md">
          <label class="label">Message</label>
          <textarea class="textarea" placeholder="Write something..."></textarea>
        </div>`,
        code(
          '<textarea class="textarea" placeholder="Write something..."></textarea>'
        )
      )}

      <div class="flex flex-col gap-8 max-w-lg">
        ${section(
          'Input Group — Prepend Addon',
          `<div class="input-group">
            <span class="input-addon">https://</span>
            <input class="input" placeholder="example.com">
          </div>`,
          code(
            '<div class="input-group">\n  <span class="input-addon">https://</span>\n  <input class="input" placeholder="example.com">\n</div>'
          )
        )}
        ${section(
          'Input Group — Append Button',
          `<div class="input-group">
            <input class="input" placeholder="Search...">
            <button class="btn">Search</button>
          </div>`
        )}
        ${section(
          'Input Group — Addon + Button',
          `<div class="input-group">
            <span class="input-addon">$</span>
            <input class="input" type="number" placeholder="0.00">
            <button class="btn btn-outline">Send</button>
          </div>`
        )}
      </div>
    </div>`
};
