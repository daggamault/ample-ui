import { clsx } from 'clsx'
import type { Color, Size } from '../lib/types'

export const BUTTON_VARIANTS = ['solid', 'outline', 'ghost'] as const
export type ButtonVariant = (typeof BUTTON_VARIANTS)[number]

export type ButtonProps = {
  label: string
  variant?: ButtonVariant
  color?: Color
  size?: Size
}

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm gap-2',
  md: 'h-11 px-5 text-base gap-2.5',
  lg: 'h-14 px-7 text-lg gap-3',
}

const solidClasses: Record<Color, string> = {
  primary: 'bg-primary text-primary-content shadow-[0_0_0_0_var(--color-primary)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-primary)_l_c_h_/_0.15)]',
  secondary: 'bg-secondary text-secondary-content shadow-[0_0_0_0_var(--color-secondary)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-secondary)_l_c_h_/_0.15)]',
  success: 'bg-success text-success-content shadow-[0_0_0_0_var(--color-success)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-success)_l_c_h_/_0.15)]',
  warning: 'bg-warning text-warning-content shadow-[0_0_0_0_var(--color-warning)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-warning)_l_c_h_/_0.15)]',
  error: 'bg-error text-error-content shadow-[0_0_0_0_var(--color-error)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-error)_l_c_h_/_0.15)]',
  info: 'bg-info text-info-content shadow-[0_0_0_0_var(--color-info)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-info)_l_c_h_/_0.15)]',
}

const outlineClasses: Record<Color, string> = {
  primary: 'border-2 border-primary text-primary hover:bg-primary hover:text-primary-content shadow-[0_0_0_0_var(--color-primary)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-primary)_l_c_h_/_0.15)]',
  secondary: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-content shadow-[0_0_0_0_var(--color-secondary)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-secondary)_l_c_h_/_0.15)]',
  success: 'border-2 border-success text-success hover:bg-success hover:text-success-content shadow-[0_0_0_0_var(--color-success)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-success)_l_c_h_/_0.15)]',
  warning: 'border-2 border-warning text-warning hover:bg-warning hover:text-warning-content shadow-[0_0_0_0_var(--color-warning)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-warning)_l_c_h_/_0.15)]',
  error: 'border-2 border-error text-error hover:bg-error hover:text-error-content shadow-[0_0_0_0_var(--color-error)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-error)_l_c_h_/_0.15)]',
  info: 'border-2 border-info text-info hover:bg-info hover:text-info-content shadow-[0_0_0_0_var(--color-info)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-info)_l_c_h_/_0.15)]',
}

const ghostClasses: Record<Color, string> = {
  primary: 'text-primary hover:bg-primary/10 shadow-[0_0_0_0_var(--color-primary)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-primary)_l_c_h_/_0.08)]',
  secondary: 'text-secondary hover:bg-secondary/10 shadow-[0_0_0_0_var(--color-secondary)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-secondary)_l_c_h_/_0.08)]',
  success: 'text-success hover:bg-success/10 shadow-[0_0_0_0_var(--color-success)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-success)_l_c_h_/_0.08)]',
  warning: 'text-warning hover:bg-warning/10 shadow-[0_0_0_0_var(--color-warning)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-warning)_l_c_h_/_0.08)]',
  error: 'text-error hover:bg-error/10 shadow-[0_0_0_0_var(--color-error)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-error)_l_c_h_/_0.08)]',
  info: 'text-info hover:bg-info/10 shadow-[0_0_0_0_var(--color-info)] hover:shadow-[0_0_0_3px_oklch(from_var(--color-info)_l_c_h_/_0.08)]',
}

const variantClasses: Record<ButtonVariant, Record<Color, string>> = {
  solid: solidClasses,
  outline: outlineClasses,
  ghost: ghostClasses,
}

export const Button = ({
  label,
  variant = 'solid',
  color = 'primary',
  size = 'md',
}: ButtonProps) => {
  const baseClasses =
    'relative inline-flex items-center justify-center font-semibold ' +
    'rounded-[--radius-btn] select-none cursor-pointer ' +
    'transition-all duration-200 ease-out ' +
    'hover:scale-105 focus-visible:scale-105 ' +
    'active:scale-95 active:transition-none ' +
    'focus-visible:outline-none'

  return `
    <button class="${clsx(baseClasses, sizeClasses[size], variantClasses[variant][color])}">
      ${label}
    </button>
  `
}
