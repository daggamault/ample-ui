import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';

type SkeletonArgs = Record<string, never>;

const meta: Meta<SkeletonArgs> = {
  title: 'Feedback/Skeleton',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<SkeletonArgs>;

export const Skeleton: Story = {
  render: () => `
    <div class="flex flex-col gap-10 max-w-lg">
      ${section(
        'Text',
        `<div>
          <div class="skeleton skeleton-heading"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
          <div class="skeleton skeleton-text"></div>
        </div>`,
        code(
          '<div class="skeleton skeleton-heading"></div>\n<div class="skeleton skeleton-text"></div>\n<div class="skeleton skeleton-text"></div>\n<div class="skeleton skeleton-text"></div>'
        )
      )}
      ${section(
        'Shapes',
        `<div class="flex gap-4 items-center">
          <div class="skeleton skeleton-circle" style="width: 3rem; height: 3rem;"></div>
          <div class="skeleton" style="width: 8rem; height: 2.5rem;"></div>
          <div class="skeleton skeleton-card" style="width: 6rem; height: 4rem;"></div>
        </div>`,
        code(
          '<div class="skeleton skeleton-circle" style="width: 3rem; height: 3rem;"></div>\n<div class="skeleton" style="width: 8rem; height: 2.5rem;"></div>\n<div class="skeleton skeleton-card" style="width: 6rem; height: 4rem;"></div>'
        )
      )}
      ${section(
        'Card Loading State',
        `<div class="card">
          <div class="skeleton skeleton-card" style="height: 10rem; border-radius: var(--radius-card) var(--radius-card) 0 0;"></div>
          <div class="card-body">
            <div class="skeleton skeleton-heading"></div>
            <div class="skeleton skeleton-text"></div>
            <div class="skeleton skeleton-text"></div>
          </div>
        </div>`
      )}
      ${section(
        'List Loading State',
        `<div class="flex flex-col gap-4">
          ${[1, 2, 3]
            .map(
              () => `<div class="flex items-center gap-3">
            <div class="skeleton skeleton-circle" style="width: 2.5rem; height: 2.5rem;"></div>
            <div class="flex-1">
              <div class="skeleton skeleton-text" style="width: 40%;"></div>
              <div class="skeleton skeleton-text"></div>
            </div>
          </div>`
            )
            .join('')}
        </div>`
      )}
    </div>`
};
