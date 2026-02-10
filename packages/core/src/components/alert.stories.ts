import type { Meta, StoryObj } from '@storybook/html-vite';
import { cap, code, section, stack, variants } from '../_story-helpers';

type AlertArgs = Record<string, never>;

const infoSvg = `<svg class="alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>`;
const warnSvg = `<svg class="alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/></svg>`;
const errorSvg = `<svg class="alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg>`;
const successSvg = `<svg class="alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>`;

const alertIcons: Record<string, string> = {
  primary: infoSvg,
  secondary: infoSvg,
  warning: warnSvg,
  error: errorSvg,
  success: successSvg,
  info: infoSvg
};

const alert = (variant: string, text: string, extra = '') => {
  const cls = ['alert'];
  if (variant !== 'info') cls.push(`alert-${variant}`);
  return `<div class="${cls.join(' ')}${extra ? ` ${extra}` : ''}">${alertIcons[variant]}<div class="alert-content">${text}</div></div>`;
};

const meta: Meta<AlertArgs> = {
  title: 'Feedback/Alert',
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<AlertArgs>;

export const Alert: Story = {
  render: () => `
    <div class="flex flex-col gap-10 max-w-lg">
      ${section(
        'Variants',
        stack(...variants.map((v) => alert(v, `This is a ${v} alert.`))),
        code(
          variants
            .map(
              (v) =>
                `<div class="alert${v !== 'info' ? ` alert-${v}` : ''}">\n  <svg class="alert-icon">...</svg>\n  <div class="alert-content">Message</div>\n</div>`
            )
            .join('\n')
        )
      )}
      ${section(
        'Filled',
        stack(
          ...variants.map((v) => {
            const cls = ['alert', 'alert-filled'];
            if (v !== 'info') cls.push(`alert-${v}`);
            return `<div class="${cls.join(' ')}">${alertIcons[v]}<div class="alert-content">${cap(v)} filled alert.</div></div>`;
          })
        ),
        code(
          '<div class="alert alert-filled alert-success">\n  <svg class="alert-icon">...</svg>\n  <div class="alert-content">Message</div>\n</div>'
        )
      )}
      ${section(
        'Banner',
        stack(
          ...['success', 'warning', 'error'].map((v) => {
            const cls = ['alert', 'alert-banner'];
            if (v !== 'info') cls.push(`alert-${v}`);
            return `<div class="${cls.join(' ')}">${alertIcons[v]}<div class="alert-content">${cap(v)} banner alert — full width, no radius.</div></div>`;
          })
        ),
        code(
          '<div class="alert alert-banner alert-warning">\n  <svg class="alert-icon">...</svg>\n  <div class="alert-content">Message</div>\n</div>'
        )
      )}
      ${section(
        'With Title',
        stack(
          `<div class="alert alert-success">${successSvg}<div class="alert-content"><div class="alert-title">Success!</div>Your changes have been saved successfully.</div></div>`,
          `<div class="alert alert-error">${errorSvg}<div class="alert-content"><div class="alert-title">Error</div>Something went wrong. Please try again later.</div></div>`
        ),
        code(
          '<div class="alert alert-success">\n  <svg class="alert-icon">...</svg>\n  <div class="alert-content">\n    <div class="alert-title">Success!</div>\n    Your changes have been saved.\n  </div>\n</div>'
        )
      )}
      ${section(
        'Dismissible',
        `<div class="alert alert-warning">${warnSvg}<div class="alert-content"><div class="alert-title">Warning</div>Your session will expire in 5 minutes.</div><button class="alert-dismiss" aria-label="Dismiss">&times;</button></div>`,
        code(
          '<div class="alert alert-warning">\n  <svg class="alert-icon">...</svg>\n  <div class="alert-content">Message</div>\n  <button class="alert-dismiss" aria-label="Dismiss">&times;</button>\n</div>'
        )
      )}
    </div>`
};
