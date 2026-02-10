import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';

type StatArgs = Record<string, never>;

const trendUp = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/></svg>`;
const trendDown = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m22 17-8.5-8.5-5 5L2 7"/><path d="M16 17h6v-6"/></svg>`;

const meta: Meta<StatArgs> = {
  title: 'Data Display/Stat',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<StatArgs>;

export const Stat: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Stat Group',
        `<div class="stat-group">
          <div class="stat">
            <span class="stat-label">Total Revenue</span>
            <span class="stat-value">$45,231</span>
            <span class="stat-trend stat-trend-up">${trendUp} +20.1% from last month</span>
          </div>
          <div class="stat">
            <span class="stat-label">Subscriptions</span>
            <span class="stat-value">+2,350</span>
            <span class="stat-trend stat-trend-up">${trendUp} +180.1% from last month</span>
          </div>
          <div class="stat">
            <span class="stat-label">Active Now</span>
            <span class="stat-value">573</span>
            <span class="stat-trend stat-trend-down">${trendDown} -4.5% from last hour</span>
          </div>
        </div>`,
        code(
          '<div class="stat-group">\n  <div class="stat">\n    <span class="stat-label">Revenue</span>\n    <span class="stat-value">$45,231</span>\n    <span class="stat-trend stat-trend-up">+20.1%</span>\n  </div>\n</div>'
        )
      )}
      ${section(
        'In Cards',
        `<div class="grid grid-cols-3 gap-4">
          <div class="card">
            <div class="stat">
              <span class="stat-label">Page Views</span>
              <span class="stat-value">1.2M</span>
              <span class="stat-description">Last 30 days</span>
            </div>
          </div>
          <div class="card">
            <div class="stat">
              <span class="stat-label">Bounce Rate</span>
              <span class="stat-value">24.3%</span>
              <span class="stat-trend stat-trend-down">${trendDown} -2.1%</span>
            </div>
          </div>
          <div class="card">
            <div class="stat">
              <span class="stat-label">Avg. Session</span>
              <span class="stat-value">4m 32s</span>
              <span class="stat-trend stat-trend-neutral">No change</span>
            </div>
          </div>
        </div>`
      )}
      ${section(
        'With Icon',
        `<div class="card" style="max-width: 16rem;">
          <div class="stat">
            <div class="stat-row">
              <div>
                <span class="stat-label">Total Users</span>
                <span class="stat-value">8,249</span>
              </div>
              <div class="stat-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
            </div>
            <span class="stat-trend stat-trend-up">${trendUp} +12% from last week</span>
          </div>
        </div>`,
        code(
          '<div class="stat">\n  <div class="stat-row">\n    <div>\n      <span class="stat-label">Users</span>\n      <span class="stat-value">8,249</span>\n    </div>\n    <div class="stat-icon"><svg>...</svg></div>\n  </div>\n</div>'
        )
      )}
    </div>`
};
