import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section, stack, variants } from '../_story-helpers';

type ProgressArgs = Record<string, never>;

const meta: Meta<ProgressArgs> = {
  title: 'Data Display/Progress',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ProgressArgs>;

export const Progress: Story = {
  render: () => `
    <div class="flex flex-col gap-10 max-w-lg">
      ${section(
        'Basic',
        '<div class="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar" style="width: 60%"></div></div>',
        code(
          '<div class="progress">\n  <div class="progress-bar" style="width: 60%"></div>\n</div>'
        )
      )}
      ${section(
        'Sizes',
        stack(
          '<div class="progress progress-sm"><div class="progress-bar" style="width: 40%"></div></div>',
          '<div class="progress"><div class="progress-bar" style="width: 60%"></div></div>',
          '<div class="progress progress-lg"><div class="progress-bar" style="width: 80%"></div></div>'
        ),
        code(
          '<div class="progress progress-sm">...</div>\n<div class="progress">...</div>\n<div class="progress progress-lg">...</div>'
        )
      )}
      ${section(
        'Color Variants',
        stack(
          ...variants.map((v, i) => {
            const pct = [90, 75, 60, 45, 80, 55][i];
            return `<div class="progress${v !== 'primary' ? ` progress-${v}` : ''}"><div class="progress-bar" style="width: ${pct}%"></div></div>`;
          })
        ),
        code(
          '<div class="progress progress-success">\n  <div class="progress-bar" style="width: 80%"></div>\n</div>'
        )
      )}
      ${section(
        'Striped',
        stack(
          '<div class="progress progress-striped"><div class="progress-bar" style="width: 65%"></div></div>',
          '<div class="progress progress-striped progress-success"><div class="progress-bar" style="width: 80%"></div></div>'
        ),
        code(
          '<div class="progress progress-striped">\n  <div class="progress-bar" style="width: 65%"></div>\n</div>'
        )
      )}
      ${section(
        'Indeterminate',
        '<div class="progress progress-indeterminate"><div class="progress-bar"></div></div>',
        code(
          '<div class="progress progress-indeterminate">\n  <div class="progress-bar"></div>\n</div>'
        )
      )}
    </div>`
};
