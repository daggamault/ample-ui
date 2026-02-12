export type Color =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'

export const COLORS: readonly Color[] = [
  'primary',
  'secondary',
  'success',
  'warning',
  'error',
  'info',
] as const

export type Size = (typeof SIZES)[number]

export const SIZES = ['sm', 'md', 'lg'] as const
