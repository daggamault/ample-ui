import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';

type TableArgs = Record<string, never>;

const meta: Meta<TableArgs> = {
  title: 'Data Display/Table',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<TableArgs>;

const sampleRows = `
  <tr><td>Alice Johnson</td><td>alice@example.com</td><td>Admin</td><td><span class="badge badge-success badge-soft badge-sm">Active</span></td></tr>
  <tr><td>Bob Smith</td><td>bob@example.com</td><td>Editor</td><td><span class="badge badge-success badge-soft badge-sm">Active</span></td></tr>
  <tr><td>Carol White</td><td>carol@example.com</td><td>Viewer</td><td><span class="badge badge-warning badge-soft badge-sm">Pending</span></td></tr>
  <tr><td>Dave Brown</td><td>dave@example.com</td><td>Editor</td><td><span class="badge badge-error badge-soft badge-sm">Inactive</span></td></tr>
  <tr><td>Eve Davis</td><td>eve@example.com</td><td>Admin</td><td><span class="badge badge-success badge-soft badge-sm">Active</span></td></tr>`;

const cardRows = `
  <tr><td data-label="Name">Alice Johnson</td><td data-label="Email">alice@example.com</td><td data-label="Role">Admin</td><td data-label="Status"><span class="badge badge-success badge-soft badge-sm">Active</span></td></tr>
  <tr><td data-label="Name">Bob Smith</td><td data-label="Email">bob@example.com</td><td data-label="Role">Editor</td><td data-label="Status"><span class="badge badge-success badge-soft badge-sm">Active</span></td></tr>
  <tr><td data-label="Name">Carol White</td><td data-label="Email">carol@example.com</td><td data-label="Role">Viewer</td><td data-label="Status"><span class="badge badge-warning badge-soft badge-sm">Pending</span></td></tr>`;

const thead = `<thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Status</th></tr></thead>`;

export const Table: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Basic',
        `<table class="table">${thead}<tbody>${sampleRows}</tbody></table>`,
        code(
          '<table class="table">\n  <thead><tr><th>Name</th><th>Email</th></tr></thead>\n  <tbody><tr><td>Alice</td><td>alice@example.com</td></tr></tbody>\n</table>'
        )
      )}
      ${section(
        'Hover',
        `<table class="table table-hover">${thead}<tbody>${sampleRows}</tbody></table>`,
        code('<table class="table table-hover">...</table>')
      )}
      ${section(
        'Zebra Striping',
        `<table class="table table-zebra">${thead}<tbody>${sampleRows}</tbody></table>`,
        code('<table class="table table-zebra">...</table>')
      )}
      ${section(
        'Striped (even rows)',
        `<table class="table table-striped">${thead}<tbody>${sampleRows}</tbody></table>`,
        code('<table class="table table-striped">...</table>')
      )}
      ${section(
        'Compact',
        `<table class="table table-compact table-hover">${thead}<tbody>${sampleRows}</tbody></table>`,
        code('<table class="table table-compact">...</table>')
      )}
      ${section(
        'Bordered',
        `<table class="table table-bordered table-hover">${thead}<tbody>${sampleRows}</tbody></table>`,
        code('<table class="table table-bordered">...</table>')
      )}
      ${section(
        'Sortable Headers',
        `<table class="table table-sortable table-hover">
          <thead><tr>
            <th class="table-sort-asc">Name</th>
            <th>Email</th>
            <th>Role</th>
            <th class="table-sort-desc">Status</th>
          </tr></thead>
          <tbody>${sampleRows}</tbody>
        </table>`,
        code(
          '<table class="table table-sortable">\n  <th class="table-sort-asc">Name</th>\n</table>'
        )
      )}
      ${section(
        'Sticky Header',
        `<div style="max-height: 12rem; overflow-y: auto; border: 1px solid var(--color-border); border-radius: var(--radius-card);">
          <table class="table table-sticky table-hover">
            ${thead}
            <tbody>${sampleRows}${sampleRows}${sampleRows}</tbody>
          </table>
        </div>`,
        code(
          '<div style="max-height: 12rem; overflow-y: auto;">\n  <table class="table table-sticky">...</table>\n</div>'
        )
      )}
      ${section(
        'Responsive Cards (resize to ≤640px)',
        `<table class="table table-cards">
          ${thead}
          <tbody>${cardRows}</tbody>
        </table>`,
        code(
          '<table class="table table-cards">\n  <thead>...</thead>\n  <tbody>\n    <tr>\n      <td data-label="Name">Alice</td>\n      <td data-label="Email">alice@example.com</td>\n    </tr>\n  </tbody>\n</table>'
        )
      )}
    </div>`
};
