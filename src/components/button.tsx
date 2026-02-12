import { clsx } from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import type { Color, Size } from '../lib/types';

export type ButtonVariant = 'solid' | 'outline' | 'ghost';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  color?: Color;
  size?: Size;
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm gap-2',
  md: 'h-11 px-5 text-base gap-2.5',
  lg: 'h-14 px-7 text-lg gap-3'
};

const variantClasses: Record<ButtonVariant, Record<Color, string>> = {
  solid: {
    primary:
      'bg-primary text-primary-content shadow-[0_0_0_0_oklch(from_var(--color-primary)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.25)]',
    secondary:
      'bg-secondary text-secondary-content shadow-[0_0_0_0_oklch(from_var(--color-secondary)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-secondary)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-secondary)_l_c_h_/_0.25)]',
    success:
      'bg-success text-success-content shadow-[0_0_0_0_oklch(from_var(--color-success)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-success)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-success)_l_c_h_/_0.25)]',
    warning:
      'bg-warning text-warning-content shadow-[0_0_0_0_oklch(from_var(--color-warning)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-warning)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-warning)_l_c_h_/_0.25)]',
    error:
      'bg-error text-error-content shadow-[0_0_0_0_oklch(from_var(--color-error)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-error)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-error)_l_c_h_/_0.25)]',
    info: 'bg-info text-info-content shadow-[0_0_0_0_oklch(from_var(--color-info)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-info)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-info)_l_c_h_/_0.25)]'
  },
  outline: {
    primary:
      'border border-primary text-primary hover:bg-primary hover:text-primary-content shadow-[0_0_0_0_oklch(from_var(--color-primary)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.25)]',
    secondary:
      'border border-secondary text-secondary hover:bg-secondary hover:text-secondary-content shadow-[0_0_0_0_oklch(from_var(--color-secondary)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-secondary)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-secondary)_l_c_h_/_0.25)]',
    success:
      'border border-success text-success hover:bg-success hover:text-success-content shadow-[0_0_0_0_oklch(from_var(--color-success)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-success)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-success)_l_c_h_/_0.25)]',
    warning:
      'border border-warning text-warning hover:bg-warning hover:text-warning-content shadow-[0_0_0_0_oklch(from_var(--color-warning)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-warning)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-warning)_l_c_h_/_0.25)]',
    error:
      'border border-error text-error hover:bg-error hover:text-error-content shadow-[0_0_0_0_oklch(from_var(--color-error)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-error)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-error)_l_c_h_/_0.25)]',
    info: 'border border-info text-info hover:bg-info hover:text-info-content shadow-[0_0_0_0_oklch(from_var(--color-info)_l_c_h_/_0.25)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-info)_l_c_h_/_0.25)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-info)_l_c_h_/_0.25)]'
  },
  ghost: {
    primary:
      'text-primary hover:bg-primary/10 shadow-[0_0_0_0_oklch(from_var(--color-primary)_l_c_h_/_0.15)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.15)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.15)]',
    secondary:
      'text-secondary hover:bg-secondary/10 shadow-[0_0_0_0_oklch(from_var(--color-secondary)_l_c_h_/_0.15)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-secondary)_l_c_h_/_0.15)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-secondary)_l_c_h_/_0.15)]',
    success:
      'text-success hover:bg-success/10 shadow-[0_0_0_0_oklch(from_var(--color-success)_l_c_h_/_0.15)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-success)_l_c_h_/_0.15)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-success)_l_c_h_/_0.15)]',
    warning:
      'text-warning hover:bg-warning/10 shadow-[0_0_0_0_oklch(from_var(--color-warning)_l_c_h_/_0.15)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-warning)_l_c_h_/_0.15)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-warning)_l_c_h_/_0.15)]',
    error:
      'text-error hover:bg-error/10 shadow-[0_0_0_0_oklch(from_var(--color-error)_l_c_h_/_0.15)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-error)_l_c_h_/_0.15)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-error)_l_c_h_/_0.15)]',
    info: 'text-info hover:bg-info/10 shadow-[0_0_0_0_oklch(from_var(--color-info)_l_c_h_/_0.15)] hover:shadow-[0_0_0_4px_oklch(from_var(--color-info)_l_c_h_/_0.15)] focus-visible:shadow-[0_0_0_4px_oklch(from_var(--color-info)_l_c_h_/_0.15)]'
  }
};

export const Button = ({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses =
    'relative inline-flex items-center justify-center font-semibold rounded select-none cursor-pointer transition-all duration-150 ease-out hover:scale-105 focus-visible:scale-105 active:scale-95 active:transition-none focus-visible:outline-none antialiased';

  return (
    <button
      className={clsx(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant][color],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
