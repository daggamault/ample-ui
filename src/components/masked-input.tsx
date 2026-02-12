import { clsx } from 'clsx';
import { forwardRef, type InputHTMLAttributes, useCallback } from 'react';
import {
  type AdornmentProps,
  type FormFieldProps,
  HELPER_TEXT_CLASSES,
  INPUT_BASE_CLASSES,
  type InputVariant,
  LABEL_CLASSES,
  type Size
} from '../lib/types';

export type { InputVariant as MaskedInputVariant };

export type MaskType = 'phone' | 'creditCard' | 'ssn' | 'date' | 'time' | 'zip';

export type MaskedInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type'
> &
  FormFieldProps &
  AdornmentProps & {
    variant?: InputVariant;
    size?: Size;
    maskType?: MaskType;
    customMask?: string;
  };

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-4 text-base',
  lg: 'h-14 px-5 text-lg'
};

const adornmentSizeClasses: Record<Size, string> = {
  sm: 'text-sm px-3',
  md: 'text-base px-4',
  lg: 'text-lg px-5'
};

const variantClasses: Record<InputVariant, string> = {
  outline:
    'border-2 border-border bg-transparent text-text placeholder:text-text-subtle focus:border-primary shadow-[0_0_0_0_oklch(from_var(--color-primary)_l_c_h_/_0.15)] focus:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.15)]',
  filled:
    'border-2 border-transparent bg-base-muted text-text placeholder:text-text-subtle hover:bg-base-subtle focus:border-primary focus:bg-transparent shadow-[0_0_0_0_oklch(from_var(--color-primary)_l_c_h_/_0.15)] focus:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.15)]',
  ghost:
    'border-2 border-transparent bg-transparent text-text placeholder:text-text-subtle hover:bg-base-muted focus:border-primary focus:bg-transparent shadow-[0_0_0_0_oklch(from_var(--color-primary)_l_c_h_/_0.15)] focus:shadow-[0_0_0_4px_oklch(from_var(--color-primary)_l_c_h_/_0.15)]'
};

const errorClasses =
  'border-error bg-error/5 text-error placeholder:text-error/60 focus:border-error shadow-[0_0_0_0_oklch(from_var(--color-error)_l_c_h_/_0.15)] focus:shadow-[0_0_0_4px_oklch(from_var(--color-error)_l_c_h_/_0.15)]';

const masks: Record<MaskType, string> = {
  phone: '(999) 999-9999',
  creditCard: '9999 9999 9999 9999',
  ssn: '999-99-9999',
  date: '99/99/9999',
  time: '99:99',
  zip: '99999'
};

const applyMask = (value: string, mask: string): string => {
  const digits = value.replace(/\D/g, '');
  let result = '';
  let digitIndex = 0;

  for (let i = 0; i < mask.length && digitIndex < digits.length; i++) {
    if (mask[i] === '9') {
      result += digits[digitIndex];
      digitIndex++;
    } else {
      result += mask[i];
    }
  }

  return result;
};

export const MaskedInput = forwardRef<HTMLInputElement, MaskedInputProps>(
  (
    {
      variant = 'outline',
      size = 'md',
      label,
      helperText,
      error = false,
      leftAdornment,
      rightAdornment,
      maskType = 'phone',
      customMask,
      className,
      id,
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const inputId =
      id || `masked-input-${Math.random().toString(36).substring(2, 11)}`;
    const mask = customMask || masks[maskType];

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const maskedValue = applyMask(e.target.value, mask);
        const syntheticEvent = {
          ...e,
          target: { ...e.target, value: maskedValue }
        };
        onChange?.(syntheticEvent as React.ChangeEvent<HTMLInputElement>);
      },
      [mask, onChange]
    );

    const inputElement = (
      <div className="relative flex items-center">
        {leftAdornment && (
          <div
            className={clsx(
              'absolute left-0 flex items-center text-text-muted',
              adornmentSizeClasses[size]
            )}
          >
            {leftAdornment}
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          type="text"
          value={value}
          onChange={handleChange}
          className={clsx(
            INPUT_BASE_CLASSES,
            sizeClasses[size],
            error ? errorClasses : variantClasses[variant],
            leftAdornment && 'pl-12',
            rightAdornment && 'pr-12',
            className
          )}
          {...props}
        />
        {rightAdornment && (
          <div
            className={clsx(
              'absolute right-0 flex items-center text-text-muted',
              adornmentSizeClasses[size]
            )}
          >
            {rightAdornment}
          </div>
        )}
      </div>
    );

    if (!label && !helperText) {
      return inputElement;
    }

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className={clsx(LABEL_CLASSES, error && 'text-error')}
          >
            {label}
          </label>
        )}
        {inputElement}
        {helperText && (
          <p
            className={clsx(
              HELPER_TEXT_CLASSES,
              error ? 'text-error' : 'text-text-muted'
            )}
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

MaskedInput.displayName = 'MaskedInput';
