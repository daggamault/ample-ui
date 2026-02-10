import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';

type DividerArgs = Record<string, never>;

const meta: Meta<DividerArgs> = {
  title: 'Layout/Divider',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<DividerArgs>;

export const Divider: Story = {
  render: () => `
    <div class="flex flex-col gap-10 max-w-lg">
      ${section(
        'Basic',
        `<div class="flex flex-col gap-4">
          <p class="text-sm text-text-muted">Content above the divider.</p>
          <div class="divider"></div>
          <p class="text-sm text-text-muted">Content below the divider.</p>
        </div>`,
        code('<div class="divider"></div>')
      )}
      ${section(
        'With Label',
        `<div class="flex flex-col gap-4">
          <div class="divider">or</div>
          <div class="divider">Section</div>
        </div>`,
        code('<div class="divider">or</div>')
      )}
      ${section(
        'Vertical',
        `<div class="flex items-center gap-4 h-16">
          <span class="text-sm text-text-muted">Left</span>
          <div class="divider divider-vertical"></div>
          <span class="text-sm text-text-muted">Center</span>
          <div class="divider divider-vertical"></div>
          <span class="text-sm text-text-muted">Right</span>
        </div>`,
        code('<div class="divider divider-vertical"></div>')
      )}
      ${section(
        'In Context',
        `<div class="card">
          <div class="card-body">
            <span class="card-title">Sign Up</span>
            <div class="field mt-3">
              <input class="input" placeholder="Email" type="email">
            </div>
            <button class="btn btn-block mt-2">Continue with Email</button>
            <div class="divider">or continue with</div>
            <div class="flex gap-2">
              <button class="btn btn-outline flex-1">Google</button>
              <button class="btn btn-outline flex-1">GitHub</button>
            </div>
          </div>
        </div>`
      )}
    </div>`
};
