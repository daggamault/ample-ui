import type { Meta, StoryObj } from '@storybook/react';
import { DollarSign } from 'lucide-react';
import { useState } from 'react';
import { NumberInput } from './number-input';

const meta = {
  title: 'Components/NumberInput',
  component: NumberInput,
  tags: ['autodocs']
} satisfies Meta<typeof NumberInput>;

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Showcase: Story = {
  render: () => {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(100);

    return (
      <div className="max-w-5xl space-y-12 p-8">
        <div>
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold text-text">NumberInput</h2>
            <p className="text-text-muted">
              Number inputs with custom styled stepper buttons. Big, beautiful,
              and springy controls instead of tiny browser defaults.
            </p>
          </div>

          <div className="mb-6 rounded-lg bg-base-muted p-4">
            <pre className="text-sm text-text-muted">
              <code>{`import { NumberInput } from 'ample-ui'

const [quantity, setQuantity] = useState(1)

<NumberInput
  label="Quantity"
  value={quantity}
  onChange={(e) => setQuantity(Number(e.target.value))}
  min={0}
  max={100}
  step={1}
/>

<NumberInput
  variant="filled"
  leftAdornment={<DollarSign size={20} />}
  value={price}
  onChange={(e) => setPrice(Number(e.target.value))}
  step={0.01}
/>`}</code>
            </pre>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">Variants</h3>
          <div className="grid gap-4">
            <NumberInput
              variant="outline"
              label="Outline (Default)"
              helperText="Default variant with border"
              value={0}
              onChange={() => {}}
            />
            <NumberInput
              variant="filled"
              label="Filled"
              helperText="Filled background variant"
              value={0}
              onChange={() => {}}
            />
            <NumberInput
              variant="ghost"
              label="Ghost"
              helperText="Minimal ghost variant"
              value={0}
              onChange={() => {}}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">Sizes</h3>
          <div className="grid gap-4">
            <NumberInput
              size="sm"
              label="Small"
              value={value1}
              onChange={(e) => setValue1(Number(e.target.value))}
            />
            <NumberInput
              size="md"
              label="Medium"
              value={value2}
              onChange={(e) => setValue2(Number(e.target.value))}
            />
            <NumberInput
              size="lg"
              label="Large"
              value={value3}
              onChange={(e) => setValue3(Number(e.target.value))}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">
            Interactive Examples
          </h3>
          <div className="grid gap-4">
            <NumberInput
              label="Quantity"
              helperText="Between 0 and 100"
              value={value1}
              onChange={(e) => setValue1(Number(e.target.value))}
              min={0}
              max={100}
              step={1}
            />
            <NumberInput
              variant="filled"
              label="Price"
              helperText="Enter amount in dollars"
              leftAdornment={<DollarSign size={20} />}
              value={value2}
              onChange={(e) => setValue2(Number(e.target.value))}
              min={0}
              step={0.01}
            />
            <NumberInput
              variant="ghost"
              label="Age"
              value={value3}
              onChange={(e) => setValue3(Number(e.target.value))}
              min={0}
              max={120}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">States</h3>
          <div className="grid gap-4">
            <NumberInput label="Normal" value={42} onChange={() => {}} />
            <NumberInput
              error
              label="Error"
              helperText="Value must be positive"
              value={-5}
              onChange={() => {}}
            />
            <NumberInput
              disabled
              label="Disabled"
              value={10}
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    );
  }
};
