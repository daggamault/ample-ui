import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';

type NavbarArgs = Record<string, never>;

const logoSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`;

const meta: Meta<NavbarArgs> = {
  title: 'Navigation/Navbar',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<NavbarArgs>;

export const Navbar: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Basic',
        `<nav class="navbar">
          <a class="navbar-brand" href="#">${logoSvg} Ample UI</a>
          <div class="navbar-nav">
            <a class="navbar-link navbar-link-active" href="#">Dashboard</a>
            <a class="navbar-link" href="#">Projects</a>
            <a class="navbar-link" href="#">Team</a>
            <a class="navbar-link" href="#">Settings</a>
          </div>
          <div class="navbar-actions">
            <button class="btn btn-sm btn-ghost">Log In</button>
            <button class="btn btn-sm">Sign Up</button>
          </div>
        </nav>`,
        code(
          '<nav class="navbar">\n  <a class="navbar-brand">Logo</a>\n  <div class="navbar-nav">\n    <a class="navbar-link navbar-link-active">Dashboard</a>\n    <a class="navbar-link">Projects</a>\n  </div>\n  <div class="navbar-actions">\n    <button class="btn btn-sm">Sign Up</button>\n  </div>\n</nav>'
        )
      )}
      ${section(
        'Raised',
        `<nav class="navbar navbar-raised">
          <a class="navbar-brand" href="#">${logoSvg} App Name</a>
          <div class="navbar-nav">
            <a class="navbar-link navbar-link-active" href="#">Home</a>
            <a class="navbar-link" href="#">Docs</a>
            <a class="navbar-link" href="#">Pricing</a>
          </div>
          <div class="navbar-actions">
            <div class="avatar avatar-sm avatar-initials">JD</div>
          </div>
        </nav>`,
        code('<nav class="navbar navbar-raised">...</nav>')
      )}
      ${section(
        'With Divider & Actions',
        `<nav class="navbar">
          <a class="navbar-brand" href="#">${logoSvg} Workspace</a>
          <div class="navbar-nav">
            <a class="navbar-link navbar-link-active" href="#">Overview</a>
            <a class="navbar-link" href="#">Analytics</a>
            <a class="navbar-link" href="#">Reports</a>
          </div>
          <div class="navbar-actions">
            <button class="btn btn-sm btn-ghost btn-icon" data-tooltip="Notifications" data-tooltip-pos="bottom">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
            </button>
            <div class="navbar-divider"></div>
            <div class="avatar avatar-sm avatar-initials avatar-secondary">AB</div>
          </div>
        </nav>`,
        code('<nav class="navbar">\n  ...\n  <div class="navbar-actions">\n    <button class="btn btn-sm btn-ghost btn-icon">...</button>\n    <div class="navbar-divider"></div>\n    <div class="avatar avatar-sm avatar-initials">AB</div>\n  </div>\n</nav>')
      )}
    </div>`
};
