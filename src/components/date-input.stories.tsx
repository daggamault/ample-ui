import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DateInput } from './date-input';

const meta = {
  title: 'Components/DateInput',
  component: DateInput,
  tags: ['autodocs']
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof DateInput>;

export const Showcase: Story = {
  render: () => {
    const [_date1, setDate1] = useState<Date | null>(null);
    const [date2, setDate2] = useState<Date | null>(new Date());
    const [_date3, setDate3] = useState<Date | null>(null);

    return (
      <div className="max-w-5xl space-y-12 p-8">
        <div>
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold text-text">DateInput</h2>
            <p className="text-text-muted">
              Date input with custom calendar picker. Beautiful, springy, and no
              ugly browser defaults.
            </p>
          </div>

          <div className="mb-6 rounded-lg bg-base-muted p-4">
            <pre className="text-sm text-text-muted">
              <code>{`import { DateInput } from 'ample-ui'

const [date, setDate] = useState<Date | null>(null)

<DateInput
  label="Select Date"
  onDateChange={(date) => setDate(date)}
  helperText="Pick any date from the calendar"
/>

<DateInput
  variant="filled"
  label="Birthday"
  onDateChange={(date) => console.log(date)}
/>`}</code>
            </pre>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">Variants</h3>
          <div className="grid gap-4">
            <DateInput
              variant="outline"
              label="Outline (Default)"
              helperText="Default variant with border"
              onDateChange={() => {}}
            />
            <DateInput
              variant="filled"
              label="Filled"
              helperText="Filled background variant"
              onDateChange={() => {}}
            />
            <DateInput
              variant="ghost"
              label="Ghost"
              helperText="Minimal ghost variant"
              onDateChange={() => {}}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">Sizes</h3>
          <div className="grid gap-4">
            <DateInput
              size="sm"
              label="Small"
              onDateChange={(date) => setDate1(date)}
            />
            <DateInput
              size="md"
              label="Medium"
              onDateChange={(date) => setDate2(date)}
            />
            <DateInput
              size="lg"
              label="Large"
              onDateChange={(date) => setDate3(date)}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">
            Interactive Examples
          </h3>
          <div className="grid gap-4">
            <DateInput
              label="Event Date"
              helperText="Select a date for your event"
              onDateChange={(date) => {
                setDate1(date);
                console.log('Selected:', date);
              }}
            />
            <DateInput
              variant="filled"
              label="Birthday"
              helperText={
                date2
                  ? `Selected: ${date2.toLocaleDateString()}`
                  : 'When were you born?'
              }
              onDateChange={(date) => setDate2(date)}
            />
            <DateInput
              variant="ghost"
              label="Appointment"
              onDateChange={(date) => setDate3(date)}
            />
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-text">States</h3>
          <div className="grid gap-4">
            <DateInput
              label="Normal"
              helperText="Click to open calendar"
              onDateChange={() => {}}
            />
            <DateInput
              error
              label="Error"
              helperText="Date is required"
              onDateChange={() => {}}
            />
            <DateInput
              disabled
              label="Disabled"
              helperText="Cannot select date"
              onDateChange={() => {}}
            />
          </div>
        </div>
      </div>
    );
  }
};
