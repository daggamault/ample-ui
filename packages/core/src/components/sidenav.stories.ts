import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';

type SidenavArgs = Record<string, never>;

const navIcon = (paths: string) =>
  `<svg class="w-4.5 h-4.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`;

const icons = {
  grid: navIcon(
    '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'
  ),
  button: navIcon('<rect x="3" y="8" width="18" height="8" rx="2"/>'),
  form: navIcon(
    '<rect x="3" y="5" width="18" height="14" rx="2"/><line x1="7" y1="12" x2="13" y2="12"/>'
  ),
  chevron: navIcon('<polyline points="6 9 12 15 18 9"/>'),
  sidebar: navIcon(
    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>'
  ),
  header: navIcon(
    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>'
  ),
  badge: navIcon('<circle cx="12" cy="12" r="9"/><path d="M12 8v4m0 4h.01"/>'),
  moon: navIcon('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'),
  search: navIcon(
    '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'
  )
};

const layoutDemo = `
<div class="flex h-144 rounded-card border border-border overflow-hidden">
  <nav class="sidenav">
    <div class="sidenav-brand">
      <div class="w-6 h-6 rounded-btn bg-primary flex items-center justify-center">
        <div class="w-2.5 h-2.5 rounded-full bg-white/90"></div>
      </div>
      Ample UI
    </div>
    <div class="sidenav-nav">
      <details class="sidenav-group" open>
        <summary class="sidenav-group-label">Components</summary>
        <div class="sidenav-group-items">
          <a class="sidenav-item sidenav-item-active" href="#">${icons.button} Buttons</a>
          <a class="sidenav-item" href="#">${icons.form} Form Inputs</a>
          <a class="sidenav-item" href="#">${icons.chevron} Selects</a>
          <a class="sidenav-item" href="#">${icons.badge} Badges <span class="sidenav-badge">New</span></a>
        </div>
      </details>
      <details class="sidenav-group" open>
        <summary class="sidenav-group-label">Layout</summary>
        <div class="sidenav-group-items">
          <a class="sidenav-item" href="#">${icons.sidebar} Sidenav</a>
          <a class="sidenav-item" href="#">${icons.header} Toolbar</a>
        </div>
      </details>
    </div>
    <div class="sidenav-footer">
      <a class="sidenav-item" href="#">${icons.moon} Dark Mode</a>
    </div>
  </nav>
  <main class="flex-1 bg-base overflow-y-auto flex flex-col">
    <div class="border-b border-border bg-surface px-6 h-14 flex items-center gap-3 shrink-0">
      <span class="text-sm font-semibold text-text">Buttons</span>
      <div class="flex-1"></div>
      <div class="flex items-center gap-2 px-3 py-1.5 rounded-btn bg-base-muted text-text-subtle text-xs">
        ${icons.search}
        <span>Search...</span>
      </div>
      <div class="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-[0.625rem] font-bold text-primary-content">JD</div>
    </div>
    <div class="flex-1 p-5 md:p-7 lg:p-10 flex flex-col gap-6">
      <div>
        <h3 class="text-lg font-bold text-text mb-1">Welcome back</h3>
        <p class="text-sm text-text-muted leading-relaxed max-w-lg">Here's an overview of your workspace. Toggle dark mode in the Storybook toolbar to see everything adapt.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="bg-surface rounded-card border border-border p-5">
          <p class="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-3">Quick Actions</p>
          <div class="flex gap-2 flex-wrap">
            <button class="btn">New Project</button>
            <button class="btn btn-outline">Import</button>
            <button class="btn btn-ghost">View Docs</button>
          </div>
        </div>
        <div class="bg-surface rounded-card border border-border p-5">
          <p class="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-3">Activity</p>
          <div class="flex flex-col gap-2.5 text-sm text-text-muted">
            <div class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-success shrink-0"></span>Deployment successful</div>
            <div class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-warning shrink-0"></span>3 pending reviews</div>
            <div class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-info shrink-0"></span>New member joined</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>`;

const sidenavSnippet = `<nav class="sidenav">
  <div class="sidenav-brand">...</div>
  <div class="sidenav-nav">
    <details class="sidenav-group" open>
      <summary class="sidenav-group-label">Section</summary>
      <div class="sidenav-group-items">
        <a class="sidenav-item sidenav-item-active" href="#">Active</a>
        <a class="sidenav-item" href="#">Link</a>
      </div>
    </details>
  </div>
  <div class="sidenav-footer">...</div>
</nav>`;

const meta: Meta<SidenavArgs> = {
  title: 'Navigation/Sidenav',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<SidenavArgs>;

export const Sidenav: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section('App Layout', layoutDemo, code(sidenavSnippet))}
    </div>`
};
