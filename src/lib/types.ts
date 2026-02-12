import type { ReactNode } from 'react';

export type Size = 'sm' | 'md' | 'lg';
export const SIZES = ['sm', 'md', 'lg'] as const;

export type ButtonColor = 'primary' | 'secondary' | 'danger';
export type ButtonVariant = 'solid' | 'outline' | 'ghost';
export type InputVariant = 'outline' | 'filled' | 'ghost';

export type BaseComponentProps = {
  size?: Size;
  className?: string;
};

export type FormFieldProps = {
  label?: string;
  helperText?: string;
  error?: boolean;
  id?: string;
};

export type AdornmentProps = {
  leftAdornment?: ReactNode;
  rightAdornment?: ReactNode;
};

export const BASE_CLASSES =
  'relative rounded font-medium outline-none transition-[transform,border-color,box-shadow,background-color,border-color,color] duration-[280ms] [transition-timing-function:var(--ease-spring)] antialiased';

export const BUTTON_BASE_CLASSES = `${BASE_CLASSES} inline-flex items-center justify-center select-none cursor-pointer hover:scale-[1.03] focus-visible:scale-[1.03] active:scale-[0.985] active:duration-[100ms] active:[transition-timing-function:cubic-bezier(0.4,0,1,1)] focus-visible:outline-none will-change-transform`;

export const INPUT_BASE_CLASSES = `${BASE_CLASSES} w-full focus:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-50`;

export const LABEL_CLASSES = 'text-sm font-medium text-text';
export const HELPER_TEXT_CLASSES = 'text-sm';
