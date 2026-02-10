import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';

type PaginationArgs = Record<string, never>;

const meta: Meta<PaginationArgs> = {
  title: 'Navigation/Pagination',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<PaginationArgs>;

export const Pagination: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Basic',
        `<nav class="pagination" aria-label="Pagination">
          <button class="pagination-item" aria-label="Previous">&laquo;</button>
          <button class="pagination-item">1</button>
          <button class="pagination-item">2</button>
          <button class="pagination-item pagination-item-active" aria-current="page">3</button>
          <button class="pagination-item">4</button>
          <button class="pagination-item">5</button>
          <button class="pagination-item" aria-label="Next">&raquo;</button>
        </nav>`,
        code(
          '<nav class="pagination">\n  <button class="pagination-item">&laquo;</button>\n  <button class="pagination-item pagination-item-active">3</button>\n  <button class="pagination-item">&raquo;</button>\n</nav>'
        )
      )}
      ${section(
        'With Ellipsis',
        `<nav class="pagination" aria-label="Pagination">
          <button class="pagination-item" aria-label="Previous">&laquo;</button>
          <button class="pagination-item">1</button>
          <span class="pagination-ellipsis">...</span>
          <button class="pagination-item">5</button>
          <button class="pagination-item pagination-item-active" aria-current="page">6</button>
          <button class="pagination-item">7</button>
          <span class="pagination-ellipsis">...</span>
          <button class="pagination-item">20</button>
          <button class="pagination-item" aria-label="Next">&raquo;</button>
        </nav>`,
        code(
          '<nav class="pagination">\n  ...\n  <span class="pagination-ellipsis">...</span>\n  ...\n</nav>'
        )
      )}
      ${section(
        'Disabled State',
        `<nav class="pagination" aria-label="Pagination">
          <button class="pagination-item" disabled aria-label="Previous">&laquo;</button>
          <button class="pagination-item pagination-item-active" aria-current="page">1</button>
          <button class="pagination-item">2</button>
          <button class="pagination-item">3</button>
          <button class="pagination-item" aria-label="Next">&raquo;</button>
        </nav>`,
        code('<button class="pagination-item" disabled>&laquo;</button>')
      )}
      ${section(
        'Sizes',
        `<div class="flex flex-col gap-4">
          <nav class="pagination pagination-sm" aria-label="Small pagination">
            <button class="pagination-item">&laquo;</button>
            <button class="pagination-item pagination-item-active">1</button>
            <button class="pagination-item">2</button>
            <button class="pagination-item">3</button>
            <button class="pagination-item">&raquo;</button>
          </nav>
          <nav class="pagination" aria-label="Default pagination">
            <button class="pagination-item">&laquo;</button>
            <button class="pagination-item pagination-item-active">1</button>
            <button class="pagination-item">2</button>
            <button class="pagination-item">3</button>
            <button class="pagination-item">&raquo;</button>
          </nav>
          <nav class="pagination pagination-lg" aria-label="Large pagination">
            <button class="pagination-item">&laquo;</button>
            <button class="pagination-item pagination-item-active">1</button>
            <button class="pagination-item">2</button>
            <button class="pagination-item">3</button>
            <button class="pagination-item">&raquo;</button>
          </nav>
        </div>`,
        code('<nav class="pagination pagination-sm">...</nav>')
      )}
    </div>`
};
