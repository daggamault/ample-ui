import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';

type BreadcrumbArgs = Record<string, never>;

const meta: Meta<BreadcrumbArgs> = {
  title: 'Navigation/Breadcrumb',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<BreadcrumbArgs>;

export const Breadcrumb: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Basic',
        `<nav class="breadcrumb" aria-label="Breadcrumb">
          <span class="breadcrumb-item"><a class="breadcrumb-link" href="#">Home</a></span>
          <span class="breadcrumb-item"><a class="breadcrumb-link" href="#">Products</a></span>
          <span class="breadcrumb-item"><span class="breadcrumb-current">Headphones</span></span>
        </nav>`,
        code(
          '<nav class="breadcrumb" aria-label="Breadcrumb">\n  <span class="breadcrumb-item"><a class="breadcrumb-link" href="#">Home</a></span>\n  <span class="breadcrumb-item"><a class="breadcrumb-link" href="#">Products</a></span>\n  <span class="breadcrumb-item"><span class="breadcrumb-current">Current</span></span>\n</nav>'
        )
      )}
      ${section(
        'Deep Nesting',
        `<nav class="breadcrumb" aria-label="Breadcrumb">
          <span class="breadcrumb-item"><a class="breadcrumb-link" href="#">Dashboard</a></span>
          <span class="breadcrumb-item"><a class="breadcrumb-link" href="#">Settings</a></span>
          <span class="breadcrumb-item"><a class="breadcrumb-link" href="#">Security</a></span>
          <span class="breadcrumb-item"><a class="breadcrumb-link" href="#">Two-Factor</a></span>
          <span class="breadcrumb-item"><span class="breadcrumb-current">Setup</span></span>
        </nav>`
      )}
      ${section(
        'Single Level',
        `<nav class="breadcrumb" aria-label="Breadcrumb">
          <span class="breadcrumb-item"><span class="breadcrumb-current">Home</span></span>
        </nav>`
      )}
    </div>`
};
