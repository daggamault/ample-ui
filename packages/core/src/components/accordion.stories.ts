import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';

type AccordionArgs = Record<string, never>;

const meta: Meta<AccordionArgs> = {
  title: 'Layout/Accordion',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<AccordionArgs>;

export const Accordion: Story = {
  render: () => `
    <div class="flex flex-col gap-10 max-w-lg">
      ${section(
        'Default',
        `<div class="accordion">
          <details class="accordion-item" open>
            <summary class="accordion-header">What is Ample UI?</summary>
            <div class="accordion-body">Ample UI is a lightweight CSS component library built with modern CSS features, Tailwind CSS v4, and minimal JavaScript.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">How do I install it?</summary>
            <div class="accordion-body">Install via your package manager. Import the CSS file and optionally the JavaScript modules for interactive components.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">Does it support dark mode?</summary>
            <div class="accordion-body">Yes. Ample UI uses CSS custom properties with OKLCH colors. Dark mode is supported via prefers-color-scheme and a data-theme attribute.</div>
          </details>
        </div>`,
        code(
          '<div class="accordion">\n  <details class="accordion-item" open>\n    <summary class="accordion-header">Title</summary>\n    <div class="accordion-body">Content</div>\n  </details>\n</div>'
        )
      )}
      ${section(
        'Flush',
        `<div class="accordion accordion-flush">
          <details class="accordion-item" open>
            <summary class="accordion-header">Section One</summary>
            <div class="accordion-body">Flush accordion removes the outer border for a cleaner embedded look.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">Section Two</summary>
            <div class="accordion-body">Each item still has its own bottom border for separation.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">Section Three</summary>
            <div class="accordion-body">Great for embedding in cards or sidebars.</div>
          </details>
        </div>`,
        code('<div class="accordion accordion-flush">...</div>')
      )}
      ${section(
        'Exclusive (one at a time)',
        `<div class="accordion">
          <details class="accordion-item" name="faq" open>
            <summary class="accordion-header">What is Ample UI?</summary>
            <div class="accordion-body">Opening another item will automatically close this one. Uses the native HTML <code>name</code> attribute on <code>&lt;details&gt;</code> elements.</div>
          </details>
          <details class="accordion-item" name="faq">
            <summary class="accordion-header">How does it work?</summary>
            <div class="accordion-body">All details elements sharing the same <code>name</code> attribute form an exclusive group — only one can be open at a time. No JavaScript required.</div>
          </details>
          <details class="accordion-item" name="faq">
            <summary class="accordion-header">Is JavaScript needed?</summary>
            <div class="accordion-body">No. This is a native HTML feature supported in modern browsers. Just add the same <code>name</code> to each details element.</div>
          </details>
        </div>`,
        code(
          '<details class="accordion-item" name="my-group">\n  <summary class="accordion-header">Title</summary>\n  <div class="accordion-body">Content</div>\n</details>'
        )
      )}
      ${section(
        'Separated',
        `<div class="accordion accordion-separated">
          <details class="accordion-item">
            <summary class="accordion-header">Item One</summary>
            <div class="accordion-body">Separated accordion adds gap between items, each with its own border and radius.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">Item Two</summary>
            <div class="accordion-body">Each item is visually independent, creating a card-like feel.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">Item Three</summary>
            <div class="accordion-body">The chevron rotates to show open/closed state.</div>
          </details>
        </div>`,
        code('<div class="accordion accordion-separated">...</div>')
      )}
    </div>`
};
