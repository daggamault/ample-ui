import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, row, section } from '../_story-helpers';

type RatingArgs = Record<string, never>;

const starSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`;

const stars = (rating: number, total = 5) =>
  Array.from({ length: total }, (_, i) => {
    if (i < Math.floor(rating))
      return `<span class="rating-star rating-star-filled">${starSvg}</span>`;
    if (i < rating)
      return `<span class="rating-star rating-star-half">${starSvg}<span class="rating-star-fill">${starSvg}</span></span>`;
    return `<span class="rating-star">${starSvg}</span>`;
  }).join('');

const meta: Meta<RatingArgs> = {
  title: 'Data Display/Rating',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<RatingArgs>;

export const Rating: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Basic',
        row(
          `<div class="rating">${stars(4)}</div>`,
          `<div class="rating">${stars(3)}</div>`,
          `<div class="rating">${stars(5)}</div>`
        ),
        code(
          '<div class="rating">\n  <span class="rating-star rating-star-filled"><svg>...</svg></span>\n  <span class="rating-star"><svg>...</svg></span>\n</div>'
        )
      )}
      ${section(
        'Half Stars',
        row(
          `<div class="rating">${stars(3.5)}</div>`,
          `<div class="rating">${stars(4.5)}</div>`,
          `<div class="rating">${stars(2.5)}</div>`
        ),
        code(
          '<span class="rating-star rating-star-half">\n  <svg>...</svg>\n  <span class="rating-star-fill"><svg>...</svg></span>\n</span>'
        )
      )}
      ${section(
        'With Value & Count',
        `<div class="rating">
          ${stars(4.5)}
          <span class="rating-value">4.5</span>
          <span class="rating-count">(128 reviews)</span>
        </div>`,
        code(
          '<div class="rating">\n  ...\n  <span class="rating-value">4.5</span>\n  <span class="rating-count">(128)</span>\n</div>'
        )
      )}
      ${section(
        'Sizes',
        `<div class="flex flex-col gap-3">
          <div class="rating rating-sm">${stars(3.5)}</div>
          <div class="rating">${stars(4)}</div>
          <div class="rating rating-lg">${stars(4.5)}</div>
        </div>`,
        code('<div class="rating rating-lg">...</div>')
      )}
      ${section(
        'Different Ratings',
        `<div class="flex flex-col gap-2">
          ${[5, 4.5, 4, 3.5, 3, 2.5, 2, 1]
            .map(
              (n) =>
                `<div class="flex items-center gap-3"><div class="rating rating-sm">${stars(n)}</div><span class="text-sm text-text-muted">${n}</span></div>`
            )
            .join('')}
        </div>`,
        code(
          '<div class="rating rating-sm">\n  <span class="rating-star rating-star-filled"><svg>...</svg></span>\n  ...\n</div>'
        )
      )}
    </div>`
};
