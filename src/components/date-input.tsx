import { clsx } from 'clsx';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  forwardRef,
  type InputHTMLAttributes,
  useEffect,
  useRef,
  useState
} from 'react';
import {
  type FormFieldProps,
  HELPER_TEXT_CLASSES,
  INPUT_BASE_CLASSES,
  type InputVariant,
  LABEL_CLASSES,
  type Size
} from '../lib/types';

export type { InputVariant as DateInputVariant };

export type DateInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type'
> &
  FormFieldProps & {
    variant?: InputVariant;
    size?: Size;
    onDateChange?: (date: Date | null) => void;
  };

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 pl-3 pr-10 text-sm',
  md: 'h-11 pl-4 pr-12 text-base',
  lg: 'h-14 pl-5 pr-14 text-lg'
};

const iconSizeClasses: Record<Size, string> = {
  sm: 'right-2',
  md: 'right-3',
  lg: 'right-4'
};

const iconSize: Record<Size, number> = {
  sm: 16,
  md: 20,
  lg: 24
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

const formatDate = (date: Date | null): string => {
  if (!date) return '';
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const parseDate = (value: string): Date | null => {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  (
    {
      variant = 'outline',
      size = 'md',
      label,
      helperText,
      error = false,
      className,
      id,
      value,
      onChange,
      onDateChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId =
      id || `date-input-${Math.random().toString(36).substring(2, 11)}`;
    const [isOpen, setIsOpen] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(
      value ? parseDate(value as string) : null
    );
    const [viewMonth, setViewMonth] = useState(selectedDate || new Date());
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener('mousedown', handleClickOutside);
      return () =>
        document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getDaysInMonth = (date: Date) => {
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1);
      const lastDay = new Date(year, month + 1, 0);
      const daysInMonth = lastDay.getDate();
      const startingDayOfWeek = firstDay.getDay();

      const days: (number | null)[] = [];
      for (let i = 0; i < startingDayOfWeek; i++) {
        days.push(null);
      }
      for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
      }
      return days;
    };

    const handleDateSelect = (day: number) => {
      const newDate = new Date(
        viewMonth.getFullYear(),
        viewMonth.getMonth(),
        day
      );
      setSelectedDate(newDate);
      const formatted = formatDate(newDate);
      onChange?.({
        target: { value: formatted }
      } as React.ChangeEvent<HTMLInputElement>);
      onDateChange?.(newDate);
      setIsOpen(false);
    };

    const handlePrevMonth = () => {
      setViewMonth(
        new Date(viewMonth.getFullYear(), viewMonth.getMonth() - 1, 1)
      );
    };

    const handleNextMonth = () => {
      setViewMonth(
        new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 1)
      );
    };

    const isToday = (day: number) => {
      const today = new Date();
      return (
        day === today.getDate() &&
        viewMonth.getMonth() === today.getMonth() &&
        viewMonth.getFullYear() === today.getFullYear()
      );
    };

    const isSelected = (day: number) => {
      if (!selectedDate) return false;
      return (
        day === selectedDate.getDate() &&
        viewMonth.getMonth() === selectedDate.getMonth() &&
        viewMonth.getFullYear() === selectedDate.getFullYear()
      );
    };

    const inputElement = (
      <div className="relative" ref={containerRef}>
        <div className="relative flex items-center">
          <input
            ref={ref}
            id={inputId}
            type="text"
            value={selectedDate ? formatDate(selectedDate) : ''}
            readOnly
            disabled={disabled}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className={clsx(
              INPUT_BASE_CLASSES,
              'cursor-pointer',
              sizeClasses[size],
              error ? errorClasses : variantClasses[variant],
              className
            )}
            {...props}
          />
          <div
            className={clsx(
              'pointer-events-none absolute flex items-center text-text-muted',
              iconSizeClasses[size]
            )}
          >
            <Calendar size={iconSize[size]} />
          </div>
        </div>

        {isOpen && (
          <div className="absolute z-50 mt-2 w-80 rounded-lg border-2 border-border bg-surface p-4 shadow-lg">
            <div className="mb-4 flex items-center justify-between">
              <button
                type="button"
                onClick={handlePrevMonth}
                className="flex h-8 w-8 items-center justify-center rounded text-text-muted transition-[transform,color] duration-[280ms] [transition-timing-function:var(--ease-spring)] hover:scale-[1.03] hover:bg-base-muted hover:text-text active:scale-[0.985]"
                aria-label="Previous month"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="text-base font-medium text-text">
                {MONTHS[viewMonth.getMonth()]} {viewMonth.getFullYear()}
              </div>
              <button
                type="button"
                onClick={handleNextMonth}
                className="flex h-8 w-8 items-center justify-center rounded text-text-muted transition-[transform,color] duration-[280ms] [transition-timing-function:var(--ease-spring)] hover:scale-[1.03] hover:bg-base-muted hover:text-text active:scale-[0.985]"
                aria-label="Next month"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="mb-2 grid grid-cols-7 gap-1">
              {DAYS.map((day) => (
                <div
                  key={day}
                  className="flex h-8 items-center justify-center text-xs font-medium text-text-subtle"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {getDaysInMonth(viewMonth).map((day, index) => (
                <button
                  key={day ?? `empty-${index}`}
                  type="button"
                  disabled={day === null}
                  onClick={() => day && handleDateSelect(day)}
                  className={clsx(
                    'flex h-8 items-center justify-center rounded text-sm font-medium transition-[transform,background-color,color] duration-[280ms] [transition-timing-function:var(--ease-spring)]',
                    day === null && 'invisible',
                    day !== null &&
                      !isSelected(day) &&
                      'text-text hover:scale-[1.03] hover:bg-base-muted active:scale-[0.985]',
                    day !== null &&
                      isToday(day) &&
                      !isSelected(day) &&
                      'border-2 border-primary text-primary',
                    day !== null &&
                      isSelected(day) &&
                      'bg-primary text-primary-content hover:brightness-110'
                  )}
                >
                  {day}
                </button>
              ))}
            </div>
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

DateInput.displayName = 'DateInput';
