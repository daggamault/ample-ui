import { clsx } from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import {
  BUTTON_BASE_CLASSES,
  type ButtonColor,
  type ButtonVariant,
  type Size
} from '../lib/types';

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  color?: ButtonColor;
  size?: Size;
  icon: React.ReactNode;
  'aria-label': string;
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 w-9 text-sm',
  md: 'h-11 w-11 text-base',
  lg: 'h-14 w-14 text-lg'
};

const variantClasses: Record<ButtonVariant, Record<ButtonColor, string>> = {
  solid: {
    primary:
      'bg-primary text-primary-content hover:brightness-110 shadow-[0_0_0_0_oklch(from_var(--color-primary)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.25)]',
    secondary:
      'bg-secondary text-secondary-content hover:brightness-110 shadow-[0_0_0_0_oklch(from_var(--color-secondary)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-secondary)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-secondary)_l_c_h_/_0.25)]',
    danger:
      'bg-error text-error-content hover:brightness-110 shadow-[0_0_0_0_oklch(from_var(--color-error)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-error)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-error)_l_c_h_/_0.25)]'
  },
  outline: {
    primary:
      'border-2 border-primary text-primary hover:bg-primary hover:text-primary-content shadow-[0_0_0_0_oklch(from_var(--color-primary)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.25)]',
    secondary:
      'border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-content shadow-[0_0_0_0_oklch(from_var(--color-secondary)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-secondary)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-secondary)_l_c_h_/_0.25)]',
    danger:
      'border-2 border-error text-error hover:bg-error hover:text-error-content shadow-[0_0_0_0_oklch(from_var(--color-error)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-error)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-error)_l_c_h_/_0.25)]'
  },
  ghost: {
    primary:
      'text-primary hover:bg-primary/10 shadow-[0_0_0_0_oklch(from_var(--color-primary)_l_c_h_/_0.15)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.15)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.15)]',
    secondary:
      'text-secondary hover:bg-secondary/10 shadow-[0_0_0_0_oklch(from_var(--color-secondary)_l_c_h_/_0.15)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-secondary)_l_c_h_/_0.15)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-secondary)_l_c_h_/_0.15)]',
    danger:
      'text-error hover:bg-error/10 shadow-[0_0_0_0_oklch(from_var(--color-error)_l_c_h_/_0.15)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-error)_l_c_h_/_0.15)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-error)_l_c_h_/_0.15)]'
  }
};

export const IconButton = ({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  icon,
  className,
  ...props
}: IconButtonProps) => (
  <button
    className={clsx(
      BUTTON_BASE_CLASSES,
      sizeClasses[size],
      variantClasses[variant][color],
      className
    )}
    {...props}
  >
    {icon}
  </button>
);
