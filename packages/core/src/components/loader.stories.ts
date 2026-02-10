import type { Meta, StoryObj } from '@storybook/html-vite';
import { cap, code, row, section, variants } from '../_story-helpers';

type LoaderArgs = Record<string, never>;

const loader = (variant: string) => {
  const cls = ['loader'];
  if (variant !== 'primary') cls.push(`loader-${variant}`);
  return `<div class="${cls.join(' ')}" role="status" aria-label="${cap(variant)} loading"></div>`;
};

const meta: Meta<LoaderArgs> = {
  title: 'Data Display/Loader',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<LoaderArgs>;

export const Loader: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Spin — Variants',
        row(...variants.map((v) => loader(v))),
        code(
          variants
            .map(
              (v) =>
                `<div class="loader${v !== 'primary' ? ` loader-${v}` : ''}" role="status" aria-label="Loading"></div>`
            )
            .join('\n')
        )
      )}
      ${section(
        'Spin — Sizes',
        row(
          '<div class="loader loader-sm" role="status" aria-label="Loading"></div>',
          '<div class="loader" role="status" aria-label="Loading"></div>',
          '<div class="loader loader-lg" role="status" aria-label="Loading"></div>'
        ),
        code('<div class="loader loader-sm"></div>\n<div class="loader"></div>\n<div class="loader loader-lg"></div>')
      )}
      ${section(
        'Bounce',
        row(
          '<div class="loader loader-bounce loader-sm" role="status" aria-label="Loading"><span></span></div>',
          '<div class="loader loader-bounce" role="status" aria-label="Loading"><span></span></div>',
          '<div class="loader loader-bounce loader-lg" role="status" aria-label="Loading"><span></span></div>'
        ),
        code('<div class="loader loader-bounce"><span></span></div>')
      )}
      ${section(
        'Bounce — Color Variants',
        row(
          ...variants.map((v) => {
            const cls = ['loader', 'loader-bounce'];
            if (v !== 'primary') cls.push(`loader-${v}`);
            return `<div class="${cls.join(' ')}" role="status" aria-label="Loading"><span></span></div>`;
          })
        ),
        code('<div class="loader loader-bounce loader-secondary"><span></span></div>')
      )}
      ${section(
        'Pulse',
        row(
          '<div class="loader loader-pulse loader-sm" role="status" aria-label="Loading"></div>',
          '<div class="loader loader-pulse" role="status" aria-label="Loading"></div>',
          '<div class="loader loader-pulse loader-lg" role="status" aria-label="Loading"></div>'
        ),
        code('<div class="loader loader-pulse"></div>')
      )}
      ${section(
        'Pulse — Color Variants',
        row(
          ...variants.map((v) => {
            const cls = ['loader', 'loader-pulse'];
            if (v !== 'primary') cls.push(`loader-${v}`);
            return `<div class="${cls.join(' ')}" role="status" aria-label="Loading"></div>`;
          })
        ),
        code('<div class="loader loader-pulse loader-success"></div>')
      )}
      ${section(
        'Bars',
        row(
          '<div class="loader loader-bars loader-sm" role="status" aria-label="Loading"><span></span></div>',
          '<div class="loader loader-bars" role="status" aria-label="Loading"><span></span></div>',
          '<div class="loader loader-bars loader-lg" role="status" aria-label="Loading"><span></span></div>'
        ),
        code('<div class="loader loader-bars"><span></span></div>')
      )}
      ${section(
        'Bars — Color Variants',
        row(
          ...variants.map((v) => {
            const cls = ['loader', 'loader-bars'];
            if (v !== 'primary') cls.push(`loader-${v}`);
            return `<div class="${cls.join(' ')}" role="status" aria-label="Loading"><span></span></div>`;
          })
        ),
        code('<div class="loader loader-bars loader-error"><span></span></div>')
      )}
      ${section(
        'With Text',
        row(
          '<div class="loader-text"><div class="loader loader-sm" role="status" aria-label="Loading"></div>Loading...</div>',
          '<div class="loader-text"><div class="loader loader-bounce loader-sm" role="status" aria-label="Loading"><span></span></div>Processing...</div>',
          '<div class="loader-text"><div class="loader loader-bars loader-sm" role="status" aria-label="Loading"><span></span></div>Saving...</div>'
        ),
        code('<div class="loader-text">\\n  <div class="loader loader-sm"></div>\\n  Loading...\\n</div>')
      )}
      ${section(
        'In Button',
        row(
          '<button class="btn btn-loading">Submit</button>',
          '<button class="btn btn-sm btn-loading">Save</button>',
          '<button class="btn btn-lg btn-loading">Process</button>'
        ),
        code('<button class="btn btn-loading">Submit</button>')
      )}
    </div>`
};
