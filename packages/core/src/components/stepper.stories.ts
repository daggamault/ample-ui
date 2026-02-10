import type { Meta, StoryObj } from '@storybook/html-vite';
import { code, section } from '../_story-helpers';

type StepperArgs = Record<string, never>;

const checkSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;

const meta: Meta<StepperArgs> = {
  title: 'Navigation/Stepper',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<StepperArgs>;

export const Stepper: Story = {
  render: () => `
    <div class="flex flex-col gap-10">
      ${section(
        'Horizontal',
        `<div class="stepper">
          <div class="step step-completed">
            <div class="step-indicator">${checkSvg}</div>
            <span class="step-connector"></span>
            <div class="step-content">
              <div class="step-title">Account</div>
              <div class="step-description">Create your account</div>
            </div>
          </div>
          <div class="step step-active">
            <div class="step-indicator">2</div>
            <span class="step-connector"></span>
            <div class="step-content">
              <div class="step-title">Profile</div>
              <div class="step-description">Set up your profile</div>
            </div>
          </div>
          <div class="step">
            <div class="step-indicator">3</div>
            <span class="step-connector"></span>
            <div class="step-content">
              <div class="step-title">Review</div>
              <div class="step-description">Confirm details</div>
            </div>
          </div>
        </div>`,
        code(
          '<div class="stepper">\n  <div class="step step-completed">\n    <div class="step-indicator">&#10003;</div>\n    <span class="step-connector"></span>\n    <div class="step-content">\n      <div class="step-title">Account</div>\n    </div>\n  </div>\n  <div class="step step-active">\n    <div class="step-indicator">2</div>\n    <span class="step-connector"></span>\n    <div class="step-content">\n      <div class="step-title">Profile</div>\n    </div>\n  </div>\n</div>'
        )
      )}
      ${section(
        'All Completed',
        `<div class="stepper">
          <div class="step step-completed">
            <div class="step-indicator">${checkSvg}</div>
            <span class="step-connector"></span>
            <div class="step-content"><div class="step-title">Sign Up</div></div>
          </div>
          <div class="step step-completed">
            <div class="step-indicator">${checkSvg}</div>
            <span class="step-connector"></span>
            <div class="step-content"><div class="step-title">Verify Email</div></div>
          </div>
          <div class="step step-completed">
            <div class="step-indicator">${checkSvg}</div>
            <span class="step-connector"></span>
            <div class="step-content"><div class="step-title">Complete</div></div>
          </div>
        </div>`,
        code(
          '<div class="step step-completed">\n  <div class="step-indicator">&#10003;</div>\n  <span class="step-connector"></span>\n  <div class="step-content">...</div>\n</div>'
        )
      )}
      ${section(
        'Vertical',
        `<div class="stepper stepper-vertical" style="max-width: 24rem;">
          <div class="step step-completed">
            <div class="step-indicator">${checkSvg}</div>
            <span class="step-connector"></span>
            <div class="step-content">
              <div class="step-title">Order Placed</div>
              <div class="step-description">Your order has been confirmed and is being processed.</div>
            </div>
          </div>
          <div class="step step-completed">
            <div class="step-indicator">${checkSvg}</div>
            <span class="step-connector"></span>
            <div class="step-content">
              <div class="step-title">Shipped</div>
              <div class="step-description">Your package has been handed to the carrier.</div>
            </div>
          </div>
          <div class="step step-active">
            <div class="step-indicator">3</div>
            <span class="step-connector"></span>
            <div class="step-content">
              <div class="step-title">In Transit</div>
              <div class="step-description">Expected delivery in 2-3 business days.</div>
            </div>
          </div>
          <div class="step">
            <div class="step-indicator">4</div>
            <span class="step-connector"></span>
            <div class="step-content">
              <div class="step-title">Delivered</div>
              <div class="step-description">Package will arrive at your doorstep.</div>
            </div>
          </div>
        </div>`,
        code('<div class="stepper stepper-vertical">...</div>')
      )}
    </div>`
};
