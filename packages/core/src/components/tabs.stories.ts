import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';
import { initAll } from './tabs';

type TabsArgs = Record<string, never>;

const meta: Meta<TabsArgs> = {
  title: 'Navigation/Tabs',
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
type Story = StoryObj<TabsArgs>;

export const Tabs: Story = {
  render: () => `
    <div class="flex flex-col gap-10 max-w-lg">
      ${section(
        'Basic',
        `<div class="tabs" data-tabs>
          <div class="tab-list">
            <button class="tab tab-active" data-tab="overview">Overview</button>
            <button class="tab" data-tab="features">Features</button>
            <button class="tab" data-tab="pricing">Pricing</button>
          </div>
          <div class="tab-panel" data-tab-panel="overview">
            <p class="text-sm text-text-muted">This is the overview panel. Click the tabs or use arrow keys to navigate.</p>
          </div>
          <div class="tab-panel" data-tab-panel="features">
            <p class="text-sm text-text-muted">Feature highlights go here. Supports full keyboard navigation.</p>
          </div>
          <div class="tab-panel" data-tab-panel="pricing">
            <p class="text-sm text-text-muted">Pricing details would be displayed in this panel.</p>
          </div>
        </div>`,
        code(
          '<div class="tabs" data-tabs>\n  <div class="tab-list">\n    <button class="tab tab-active" data-tab="panel-id">Tab</button>\n  </div>\n  <div class="tab-panel" data-tab-panel="panel-id">Content</div>\n</div>'
        )
      )}
      ${section(
        'Boxed',
        `<div class="tabs tabs-boxed" data-tabs>
          <div class="tab-list">
            <button class="tab tab-active" data-tab="day">Day</button>
            <button class="tab" data-tab="week">Week</button>
            <button class="tab" data-tab="month">Month</button>
          </div>
          <div class="tab-panel" data-tab-panel="day">
            <p class="text-sm text-text-muted">Viewing daily breakdown. Boxed variant uses a subtle background.</p>
          </div>
          <div class="tab-panel" data-tab-panel="week">
            <p class="text-sm text-text-muted">Viewing weekly summary.</p>
          </div>
          <div class="tab-panel" data-tab-panel="month">
            <p class="text-sm text-text-muted">Viewing monthly overview.</p>
          </div>
        </div>`,
        code('<div class="tabs tabs-boxed" data-tabs>...</div>')
      )}
      ${section(
        'Pill',
        `<div class="tabs tabs-pill" data-tabs>
          <div class="tab-list">
            <button class="tab tab-active" data-tab="all">All</button>
            <button class="tab" data-tab="active">Active</button>
            <button class="tab" data-tab="archived">Archived</button>
          </div>
          <div class="tab-panel" data-tab-panel="all">
            <p class="text-sm text-text-muted">Showing all items. Pill variant uses fully rounded tabs with solid active.</p>
          </div>
          <div class="tab-panel" data-tab-panel="active">
            <p class="text-sm text-text-muted">Showing active items only.</p>
          </div>
          <div class="tab-panel" data-tab-panel="archived">
            <p class="text-sm text-text-muted">Showing archived items.</p>
          </div>
        </div>`,
        code('<div class="tabs tabs-pill" data-tabs>...</div>')
      )}
      ${section(
        'Vertical',
        `<div class="tabs tabs-vertical" data-tabs>
          <div class="tab-list">
            <button class="tab tab-active" data-tab="general">General</button>
            <button class="tab" data-tab="security">Security</button>
            <button class="tab" data-tab="notifications">Notifications</button>
          </div>
          <div class="tab-panel" data-tab-panel="general">
            <p class="text-sm text-text-muted">General settings panel. Vertical tabs use a side layout.</p>
          </div>
          <div class="tab-panel" data-tab-panel="security">
            <p class="text-sm text-text-muted">Security settings panel.</p>
          </div>
          <div class="tab-panel" data-tab-panel="notifications">
            <p class="text-sm text-text-muted">Notification preferences panel.</p>
          </div>
        </div>`,
        code('<div class="tabs tabs-vertical" data-tabs>...</div>')
      )}
    </div>`
};
