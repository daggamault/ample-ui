import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';
import { initAll } from './dropdown';

type DropdownArgs = Record<string, never>;

const chevronSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>`;

const meta: Meta<DropdownArgs> = {
  title: 'Overlay/Dropdown',
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
type Story = StoryObj<DropdownArgs>;

export const Dropdown: Story = {
  render: () => `
    <div class="flex flex-col gap-10" style="min-height: 20rem;">
      ${section(
        'Basic',
        `<div class="flex gap-4 flex-wrap">
          <div class="dropdown" data-dropdown>
            <button class="btn dropdown-trigger">Options ${chevronSvg}</button>
            <div class="dropdown-menu">
              <button class="dropdown-item" data-value="edit">Edit</button>
              <button class="dropdown-item" data-value="duplicate">Duplicate</button>
              <button class="dropdown-item" data-value="archive">Archive</button>
              <div class="dropdown-divider"></div>
              <button class="dropdown-item dropdown-item-danger" data-value="delete">Delete</button>
            </div>
          </div>
          <div class="dropdown" data-dropdown>
            <button class="btn btn-outline dropdown-trigger">Actions ${chevronSvg}</button>
            <div class="dropdown-menu">
              <div class="dropdown-header">Account</div>
              <button class="dropdown-item" data-value="profile">Profile</button>
              <button class="dropdown-item" data-value="settings">Settings</button>
              <div class="dropdown-divider"></div>
              <div class="dropdown-header">Other</div>
              <button class="dropdown-item" data-value="help">Help</button>
              <button class="dropdown-item dropdown-item-disabled" data-value="logout">Log Out</button>
            </div>
          </div>
        </div>`,
        code(
          '<div class="dropdown" data-dropdown>\n  <button class="btn dropdown-trigger">Menu</button>\n  <div class="dropdown-menu">\n    <button class="dropdown-item" data-value="edit">Edit</button>\n    <div class="dropdown-divider"></div>\n    <button class="dropdown-item dropdown-item-danger">Delete</button>\n  </div>\n</div>'
        )
      )}
      ${section(
        'Right Aligned',
        `<div class="flex justify-end">
          <div class="dropdown dropdown-end" data-dropdown>
            <button class="btn btn-ghost dropdown-trigger">More ${chevronSvg}</button>
            <div class="dropdown-menu">
              <button class="dropdown-item" data-value="share">Share</button>
              <button class="dropdown-item" data-value="export">Export</button>
              <button class="dropdown-item" data-value="print">Print</button>
            </div>
          </div>
        </div>`,
        code(
          '<div class="dropdown dropdown-end" data-dropdown>\n  <button class="btn btn-ghost dropdown-trigger">More</button>\n  <div class="dropdown-menu">...</div>\n</div>'
        )
      )}
    </div>`
};
