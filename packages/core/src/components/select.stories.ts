import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';
import { initAll } from './select';

type SelectArgs = Record<string, never>;

const meta: Meta<SelectArgs> = {
  title: 'Forms/Select',
  tags: ['autodocs'],
  decorators: [
    (storyFn) => {
      const html = storyFn();
      requestAnimationFrame(() => initAll());
      return html;
    }
  ]
};

export default meta;
type Story = StoryObj<SelectArgs>;

export const Select: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      <div class="grid grid-cols-[1fr_1fr] gap-x-10 gap-y-10 max-w-2xl">
        ${section(
          'Basic',
          `<div class="field">
            <label class="label">Framework</label>
            <div data-select data-placeholder="Choose a framework...">
              <div data-value="react">React</div>
              <div data-value="vue">Vue</div>
              <div data-value="angular">Angular</div>
              <div data-value="svelte">Svelte</div>
              <div data-value="solid">SolidJS</div>
            </div>
          </div>`,
          code(
            '<div data-select data-placeholder="Choose...">\n  <div data-value="react">React</div>\n  <div data-value="vue">Vue</div>\n</div>'
          )
        )}
        ${section(
          'Pre-selected',
          `<div class="field">
            <label class="label">Language</label>
            <div data-select data-value="ts" data-placeholder="Choose a language...">
              <div data-value="js">JavaScript</div>
              <div data-value="ts">TypeScript</div>
              <div data-value="py">Python</div>
              <div data-value="rs">Rust</div>
              <div data-value="go">Go</div>
            </div>
          </div>`,
          code('<div data-select data-value="ts">\n  <div data-value="js">JavaScript</div>\n  <div data-value="ts">TypeScript</div>\n</div>')
        )}
        ${section(
          'Searchable',
          `<div class="field">
            <label class="label">Country</label>
            <div data-select data-search data-placeholder="Search countries...">
              <div data-value="us">United States</div>
              <div data-value="uk">United Kingdom</div>
              <div data-value="ca">Canada</div>
              <div data-value="au">Australia</div>
              <div data-value="de">Germany</div>
              <div data-value="fr">France</div>
              <div data-value="jp">Japan</div>
              <div data-value="kr">South Korea</div>
              <div data-value="br">Brazil</div>
              <div data-value="mx">Mexico</div>
              <div data-value="in">India</div>
              <div data-value="cn">China</div>
            </div>
          </div>`,
          code(
            '<div data-select data-search>\n  <div data-value="us">United States</div>\n  ...\n</div>'
          )
        )}
        ${section(
          'Grouped',
          `<div class="field">
            <label class="label">Technology</label>
            <div data-select data-search data-placeholder="Choose a technology...">
              <div data-group="Frontend"></div>
              <div data-value="react">React</div>
              <div data-value="vue">Vue</div>
              <div data-value="angular">Angular</div>
              <div data-value="svelte">Svelte</div>
              <div data-group="Backend"></div>
              <div data-value="node">Node.js</div>
              <div data-value="django">Django</div>
              <div data-value="rails">Rails</div>
              <div data-value="go-be">Go</div>
              <div data-group="Database"></div>
              <div data-value="postgres">PostgreSQL</div>
              <div data-value="mysql">MySQL</div>
              <div data-value="mongo">MongoDB</div>
              <div data-value="redis">Redis</div>
            </div>
          </div>`,
          code(
            '<div data-select data-search>\n  <div data-group="Frontend"></div>\n  <div data-value="react">React</div>\n  <div data-group="Backend"></div>\n  <div data-value="node">Node.js</div>\n</div>'
          )
        )}
      </div>

      <div class="grid grid-cols-[1fr_1fr] gap-x-10 gap-y-10 max-w-2xl">
        ${section(
          'Multi-select',
          `<div class="field">
            <label class="label">Technologies</label>
            <div data-select data-multiple data-search data-placeholder="Select technologies...">
              <div data-value="react">React</div>
              <div data-value="vue">Vue</div>
              <div data-value="angular">Angular</div>
              <div data-value="svelte">Svelte</div>
              <div data-value="next">Next.js</div>
              <div data-value="nuxt">Nuxt</div>
              <div data-value="astro">Astro</div>
            </div>
          </div>`,
          code(
            '<div data-select data-multiple data-search>\n  <div data-value="react">React</div>\n  ...\n</div>'
          )
        )}
        ${section(
          'Multi-select — Pre-selected',
          `<div class="field">
            <label class="label">Favorite Colors</label>
            <div data-select data-multiple data-value="blue,green" data-placeholder="Pick colors...">
              <div data-value="red">Red</div>
              <div data-value="blue">Blue</div>
              <div data-value="green">Green</div>
              <div data-value="yellow">Yellow</div>
              <div data-value="purple">Purple</div>
            </div>
          </div>`,
          code('<div data-select data-multiple data-value="blue,green">\n  <div data-value="red">Red</div>\n  ...\n</div>')
        )}
      </div>
    </div>`
};
