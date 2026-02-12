import type { Meta, StoryObj } from '@storybook/react';
import { Mail, Search, User } from 'lucide-react';
import { Input } from './input';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs']
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Showcase: Story = {
  render: () => (
    <div className="max-w-5xl space-y-12 p-8">
      <div>
        <div className="mb-6">
          <h2 className="mb-2 text-2xl font-bold text-text">Input</h2>
          <p className="text-text-muted">
            Text inputs with outline, filled, and ghost variants. Supports
            labels, helper text, error states, and left/right adornments.
          </p>
        </div>

        <div className="mb-6 rounded-lg bg-base-muted p-4">
          <pre className="text-sm text-text-muted">
            <code>{`import { Input } from 'ample-ui'

<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
/>

<Input
  variant="filled"
  placeholder="Search..."
  leftAdornment={<Search size={20} />}
/>

<Input
  error
  helperText="This field is required"
  placeholder="Username"
/>`}</code>
          </pre>
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-text">Variants</h3>
        <div className="grid gap-4">
          <Input
            variant="outline"
            placeholder="Outline input"
            label="Outline (Default)"
            helperText="Default input variant with border"
          />
          <Input
            variant="filled"
            placeholder="Filled input"
            label="Filled"
            helperText="Filled background variant"
          />
          <Input
            variant="ghost"
            placeholder="Ghost input"
            label="Ghost"
            helperText="Minimal ghost variant"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-text">Sizes</h3>
        <div className="grid gap-4">
          <Input size="sm" placeholder="Small input" label="Small" />
          <Input size="md" placeholder="Medium input" label="Medium" />
          <Input size="lg" placeholder="Large input" label="Large" />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-text">
          With Adornments
        </h3>
        <div className="grid gap-4">
          <Input
            placeholder="Search..."
            leftAdornment={<Search size={20} />}
            label="Search"
          />
          <Input
            type="email"
            placeholder="Email address"
            leftAdornment={<Mail size={20} />}
            label="Email"
          />
          <Input
            placeholder="Username"
            leftAdornment={<User size={20} />}
            rightAdornment={<span className="text-success">✓</span>}
            label="Username"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-4 text-lg font-semibold text-text">States</h3>
        <div className="grid gap-4">
          <Input
            placeholder="Normal input"
            label="Normal"
            helperText="This is a helper text"
          />
          <Input
            error
            placeholder="Error input"
            label="Error"
            helperText="This field is required"
          />
          <Input
            disabled
            placeholder="Disabled input"
            label="Disabled"
            helperText="This field is disabled"
          />
        </div>
      </div>
    </div>
  )
};
