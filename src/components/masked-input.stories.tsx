import type { Meta, StoryObj } from '@storybook/react';
import { CreditCard, Phone } from 'lucide-react';
import { useState } from 'react';
import { MaskedInput } from './masked-input';

const meta = {
  title: 'Components/MaskedInput',
  component: MaskedInput,
  tags: ['autodocs']
} satisfies Meta<typeof MaskedInput>;

export default meta;
type Story = StoryObj<typeof MaskedInput>;

export const Showcase: Story = {
  render: () => {
    const [phone, setPhone] = useState('');
    const [card, setCard] = useState('');
    const [ssn, setSsn] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [zip, setZip] = useState('');

    return (
      <div className="max-w-5xl space-y-12 p-8">
        <div>
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold text-text">MaskedInput</h2>
            <p className="text-text-muted">
              Auto-formatting inputs for phone numbers, credit cards, SSN,
              dates, and more. Clean, automatic formatting as you type.
            </p>
          </div>

          <div className="mb-6 rounded-lg bg-base-muted p-4">
            <pre className="text-sm text-text-muted">
              <code>{`import { MaskedInput } from 'ample-ui'

const [phone, setPhone] = useState('')

<MaskedInput
  maskType="phone"
  label="Phone Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  placeholder="(555) 555-5555"
/>

<MaskedInput
  maskType="creditCard"
  label="Card Number"
  leftAdornment={<CreditCard size={20} />}
/>

<MaskedInput
  customMask="999-AAA-999"
  label="Custom Format"
/>`}</code>
            </pre>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">Mask Types</h3>
          <div className="grid gap-4">
            <MaskedInput
              maskType="phone"
              label="Phone Number"
              placeholder="(555) 555-5555"
              leftAdornment={<Phone size={20} />}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              helperText="Format: (999) 999-9999"
            />
            <MaskedInput
              maskType="creditCard"
              label="Credit Card"
              placeholder="1234 5678 9012 3456"
              leftAdornment={<CreditCard size={20} />}
              value={card}
              onChange={(e) => setCard(e.target.value)}
              helperText="Format: 9999 9999 9999 9999"
            />
            <MaskedInput
              maskType="ssn"
              label="Social Security Number"
              placeholder="123-45-6789"
              value={ssn}
              onChange={(e) => setSsn(e.target.value)}
              helperText="Format: 999-99-9999"
            />
            <MaskedInput
              maskType="date"
              label="Date"
              placeholder="MM/DD/YYYY"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              helperText="Format: 99/99/9999"
            />
            <MaskedInput
              maskType="time"
              label="Time"
              placeholder="HH:MM"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              helperText="Format: 99:99"
            />
            <MaskedInput
              maskType="zip"
              label="ZIP Code"
              placeholder="12345"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              helperText="Format: 99999"
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">Variants</h3>
          <div className="grid gap-4">
            <MaskedInput
              variant="outline"
              maskType="phone"
              label="Outline (Default)"
              placeholder="(555) 555-5555"
              helperText="Default variant with border"
            />
            <MaskedInput
              variant="filled"
              maskType="phone"
              label="Filled"
              placeholder="(555) 555-5555"
              helperText="Filled background variant"
            />
            <MaskedInput
              variant="ghost"
              maskType="phone"
              label="Ghost"
              placeholder="(555) 555-5555"
              helperText="Minimal ghost variant"
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">States</h3>
          <div className="grid gap-4">
            <MaskedInput
              maskType="phone"
              label="Normal"
              placeholder="(555) 555-5555"
            />
            <MaskedInput
              error
              maskType="phone"
              label="Error"
              placeholder="(555) 555-5555"
              helperText="Invalid phone number"
            />
            <MaskedInput
              disabled
              maskType="phone"
              label="Disabled"
              value="(555) 555-5555"
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    );
  }
};
