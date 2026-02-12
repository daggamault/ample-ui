import { clsx } from 'clsx';
import {
  forwardRef,
  type TextareaHTMLAttributes,
  useEffect,
  useRef
} from 'react';
import {
  type FormFieldProps,
  HELPER_TEXT_CLASSES,
  INPUT_BASE_CLASSES,
  type InputVariant,
  LABEL_CLASSES,
  type Size
} from '../lib/types';

export type { InputVariant as TextareaVariant };

export type TextareaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'size'
> &
  FormFieldProps & {
    variant?: InputVariant;
    size?: Size;
    autoResize?: boolean;
  };

const sizeClasses: Record<Size, string> = {
  sm: 'min-h-20 px-3 py-2 text-sm',
  md: 'min-h-28 px-4 py-3 text-base',
  lg: 'min-h-36 px-5 py-4 text-lg'
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

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = 'outline',
      size = 'md',
      label,
      helperText,
      error = false,
      autoResize = false,
      className,
      id,
      onChange,
      value,
      ...props
    },
    ref
  ) => {
    const inputId =
      id || `textarea-${Math.random().toString(36).substring(2, 11)}`;
    const internalRef = useRef<HTMLTextAreaElement>(null);
    const textareaRef =
      (ref as React.RefObject<HTMLTextAreaElement>) || internalRef;

    useEffect(() => {
      if (autoResize && textareaRef.current) {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [autoResize, textareaRef]);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e);
      if (autoResize && textareaRef.current) {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    };

    const textareaElement = (
      <textarea
        ref={textareaRef}
        id={inputId}
        value={value}
        onChange={handleChange}
        className={clsx(
          INPUT_BASE_CLASSES,
          'resize-y',
          sizeClasses[size],
          error ? errorClasses : variantClasses[variant],
          autoResize && 'resize-none overflow-hidden',
          className
        )}
        {...props}
      />
    );

    if (!label && !helperText) return textareaElement;

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
        {textareaElement}
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

Textarea.displayName = 'Textarea';
