import { clsx } from 'clsx';
import type { Size } from '../lib/types';

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'ghost'
  | 'ghost-light';

export type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
  size?: Size;
};

export const Button = ({
  label,
  variant = 'primary',
  size = 'md'
}: ButtonProps) => {
  // 1. The Physics (Spring & Smoothness)
  const baseStyles =
    'group relative inline-flex items-center justify-center rounded-lg ' +
    'font-medium tracking-wide cursor-pointer select-none ' +
    'transition-all duration-200 ease-in-out ' +
    'hover:-translate-y-px hover:brightness-105 active:translate-y-0 active:scale-[0.98] active:brightness-100 ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

  // 2. The Sizes (Padding & Text Size)
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg'
  };

  // 3. The Variants (Colors & Fills)
  const variants = {
    // Vibrant background
    primary:
      'bg-primary-600 text-white ' +
      'hover:bg-primary-500 ' +
      'focus-visible:ring-primary-500',

    // Light primary background with primary text
    secondary:
      'bg-primary-100 text-primary-700 ' +
      'hover:bg-primary-200 hover:text-primary-800 ' +
      'focus-visible:ring-primary-300',

    // Green for positive actions
    success:
      'bg-success-600 text-white ' +
      'hover:bg-success-500 ' +
      'focus-visible:ring-success-500',

    // Rosey pink for danger actions
    danger:
      'bg-danger-600 text-white ' +
      'hover:bg-danger-500 ' +
      'focus-visible:ring-danger-500',

    // No background, for a minimalist look
    ghost:
      'bg-transparent text-surface-900 ' +
      'hover:bg-surface-100 hover:text-primary-600 ' +
      'focus-visible:ring-surface-400',
    
    // Light background, for a minimalist look
    'ghost-light':
      'bg-surface-100 text-surface-900 ' +
      'hover:bg-surface-200 hover:text-primary-600 ' +
      'focus-visible:ring-surface-400'
  };

  return `
    <button class="${clsx(baseStyles, sizes[size], variants[variant])}">
      ${label}
    </button>
  `;
};
