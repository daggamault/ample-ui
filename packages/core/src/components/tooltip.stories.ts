import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';

type TooltipArgs = Record<string, never>;

const meta: Meta<TooltipArgs> = {
  title: 'Overlay/Tooltip',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<TooltipArgs>;

export const Tooltip: Story = {
  render: () => `
    <div class="flex flex-col gap-10" style="padding: 3rem;">
      ${section(
        'Positions',
        `<div class="flex gap-6 flex-wrap items-center">
          <button class="btn" data-tooltip="Tooltip on top">Top (default)</button>
          <button class="btn btn-outline" data-tooltip="Tooltip on bottom" data-tooltip-pos="bottom">Bottom</button>
          <button class="btn btn-outline" data-tooltip="Tooltip on left" data-tooltip-pos="left">Left</button>
          <button class="btn btn-outline" data-tooltip="Tooltip on right" data-tooltip-pos="right">Right</button>
        </div>`,
        code(
          '<button data-tooltip="Tooltip text">Hover me</button>\n<button data-tooltip="Bottom" data-tooltip-pos="bottom">Bottom</button>'
        )
      )}
      ${section(
        'Multiline',
        `<div class="flex gap-6 flex-wrap items-center">
          <button class="btn btn-outline" data-tooltip="This is a longer tooltip message that will wrap to multiple lines for readability." data-tooltip-wrap>Multiline Tooltip</button>
        </div>`,
        code(
          '<button data-tooltip="Long text..." data-tooltip-wrap>Hover</button>'
        )
      )}
      ${section(
        'On Various Elements',
        `<div class="flex gap-6 flex-wrap items-center">
          <span class="badge" data-tooltip="Primary badge">Badge</span>
          <span class="text-sm underline decoration-dotted cursor-help" data-tooltip="This explains the term">Hover for info</span>
          <button class="btn btn-icon btn-ghost" data-tooltip="Settings">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>`,
        code('<span class="badge" data-tooltip="Info">Badge</span>\n<button class="btn btn-icon btn-ghost" data-tooltip="Settings"><svg>...</svg></button>')
      )}
    </div>`
};
