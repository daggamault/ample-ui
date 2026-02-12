import { clsx } from 'clsx';
import { ChevronDown, ChevronUp } from 'lucide-react';
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

export type { InputVariant as NumberInputVariant };

export type NumberInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type'
> &
  FormFieldProps &
  Pick<AdornmentProps, 'leftAdornment'> & {
    variant?: InputVariant;
    size?: Size;
    step?: number;
  };

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 pl-3 pr-10 text-sm',
  md: 'h-11 pl-4 pr-12 text-base',
  lg: 'h-14 pl-5 pr-14 text-lg'
};

const buttonSizeClasses: Record<Size, string> = {
  sm: 'w-8',
  md: 'w-10',
  lg: 'w-12'
};

const iconSizeClasses: Record<Size, number> = {
  sm: 14,
  md: 16,
  lg: 18
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

export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      variant = 'outline',
      size = 'md',
      label,
      helperText,
      error = false,
      leftAdornment,
      step = 1,
      className,
      id,
      value,
      onChange,
      min,
      max,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId =
      id || `number-input-${Math.random().toString(36).substring(2, 11)}`;

    const getNumericValue = () => (value ? Number(value) : 0);

    const handleIncrement = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        const currentValue = value ? Number(value) : 0;
        const newValue = currentValue + step;
        if (max !== undefined && newValue > Number(max)) return;

        onChange?.({
          ...e,
          target: { ...e.target, value: newValue.toString() },
          currentTarget: { ...e.currentTarget, value: newValue.toString() }
        } as unknown as React.ChangeEvent<HTMLInputElement>);
      },
      [value, step, max, disabled, onChange]
    );

    const handleDecrement = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled) return;
        const currentValue = value ? Number(value) : 0;
        const newValue = currentValue - step;
        if (min !== undefined && newValue < Number(min)) return;

        onChange?.({
          ...e,
          target: { ...e.target, value: newValue.toString() },
          currentTarget: { ...e.currentTarget, value: newValue.toString() }
        } as unknown as React.ChangeEvent<HTMLInputElement>);
      },
      [value, step, min, disabled, onChange]
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
          type="number"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          className={clsx(
            INPUT_BASE_CLASSES,
            '[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none',
            sizeClasses[size],
            error ? errorClasses : variantClasses[variant],
            leftAdornment && 'pl-12',
            className
          )}
          {...props}
        />
        <div
          className={clsx(
            'absolute right-0 top-0 flex h-full flex-col border-l-2 border-border',
            buttonSizeClasses[size]
          )}
        >
          <button
            type="button"
            onClick={handleIncrement}
            disabled={
              disabled ||
              (max !== undefined && getNumericValue() >= Number(max))
            }
            className="flex flex-1 items-center justify-center border-b border-border text-text-muted transition-[transform,color] duration-[280ms] [transition-timing-function:var(--ease-spring)] hover:scale-[1.03] hover:text-text active:scale-[0.985] active:duration-[100ms] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            aria-label="Increment"
          >
            <ChevronUp size={iconSizeClasses[size]} />
          </button>
          <button
            type="button"
            onClick={handleDecrement}
            disabled={
              disabled ||
              (min !== undefined && getNumericValue() <= Number(min))
            }
            className="flex flex-1 items-center justify-center text-text-muted transition-[transform,color] duration-[280ms] [transition-timing-function:var(--ease-spring)] hover:scale-[1.03] hover:text-text active:scale-[0.985] active:duration-[100ms] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
            aria-label="Decrement"
          >
            <ChevronDown size={iconSizeClasses[size]} />
          </button>
        </div>
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

NumberInput.displayName = 'NumberInput';
