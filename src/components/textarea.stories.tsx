import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Textarea } from './textarea';

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs']
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Showcase: Story = {
  render: () => {
    const [value, setValue] = useState('');
    const [autoResizeValue, setAutoResizeValue] = useState('');

    return (
      <div className="max-w-5xl space-y-12 p-8">
        <div>
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold text-text">Textarea</h2>
            <p className="text-text-muted">
              Multiline text inputs with optional auto-resize. Same springy feel
              as other inputs.
            </p>
          </div>

          <div className="mb-6 rounded-lg bg-base-muted p-4">
            <pre className="text-sm text-text-muted">
              <code>{`import { Textarea } from 'ample-ui'

const [value, setValue] = useState('')

<Textarea
  label="Description"
  placeholder="Enter description..."
  value={value}
  onChange={(e) => setValue(e.target.value)}
  helperText="Maximum 500 characters"
/>

<Textarea
  variant="filled"
  autoResize
  placeholder="Auto-resizes as you type"
/>`}</code>
            </pre>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">Variants</h3>
          <div className="grid gap-4">
            <Textarea
              variant="outline"
              placeholder="Outline textarea"
              label="Outline (Default)"
              helperText="Default variant with border"
            />
            <Textarea
              variant="filled"
              placeholder="Filled textarea"
              label="Filled"
              helperText="Filled background variant"
            />
            <Textarea
              variant="ghost"
              placeholder="Ghost textarea"
              label="Ghost"
              helperText="Minimal ghost variant"
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">Sizes</h3>
          <div className="grid gap-4">
            <Textarea size="sm" placeholder="Small textarea" label="Small" />
            <Textarea size="md" placeholder="Medium textarea" label="Medium" />
            <Textarea size="lg" placeholder="Large textarea" label="Large" />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">Auto Resize</h3>
          <div className="grid gap-4">
            <Textarea
              autoResize
              label="Auto-resizing"
              placeholder="Type something... it will grow automatically"
              helperText="This textarea automatically grows as you type"
              value={autoResizeValue}
              onChange={(e) => setAutoResizeValue(e.target.value)}
            />
            <Textarea
              variant="filled"
              autoResize
              label="Filled with auto-resize"
              placeholder="Also works with filled variant"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">States</h3>
          <div className="grid gap-4">
            <Textarea
              label="Normal"
              placeholder="Write something..."
              helperText="This is a helper text"
            />
            <Textarea
              error
              label="Error"
              placeholder="Invalid content"
              helperText="This field contains errors"
            />
            <Textarea
              disabled
              label="Disabled"
              placeholder="Cannot edit"
              helperText="This field is disabled"
            />
          </div>
        </div>
      </div>
    );
  }
};
