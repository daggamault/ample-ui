import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';

type FileInputArgs = Record<string, never>;

const uploadSvg = `<svg class="file-input-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>`;

const meta: Meta<FileInputArgs> = {
  title: 'Forms/File Input',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<FileInputArgs>;

export const FileInput: Story = {
  render: () => `
    <div class="flex flex-col gap-10 max-w-lg">
      ${section(
        'Basic',
        `<label class="file-input">
          ${uploadSvg}
          <span class="file-input-text"><strong>Click to upload</strong> or drag and drop</span>
          <span class="file-input-hint">SVG, PNG, JPG or GIF (max. 5MB)</span>
          <input type="file" />
        </label>`,
        code(
          '<label class="file-input">\n  <svg class="file-input-icon">...</svg>\n  <span class="file-input-text"><strong>Click to upload</strong> or drag and drop</span>\n  <span class="file-input-hint">Max 5MB</span>\n  <input type="file" />\n</label>'
        )
      )}
      ${section(
        'Small',
        `<label class="file-input file-input-sm">
          ${uploadSvg}
          <span class="file-input-text"><strong>Choose file</strong></span>
          <span class="file-input-hint">PDF up to 10MB</span>
          <input type="file" accept=".pdf" />
        </label>`,
        code('<label class="file-input file-input-sm">...</label>')
      )}
      ${section(
        'Disabled',
        `<label class="file-input">
          ${uploadSvg}
          <span class="file-input-text"><strong>Upload disabled</strong></span>
          <span class="file-input-hint">File uploads are currently disabled</span>
          <input type="file" disabled />
        </label>`
      )}
    </div>`
};
