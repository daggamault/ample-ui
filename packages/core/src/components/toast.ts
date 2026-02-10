type ToastVariant =
  | 'toast'
  | 'toast-success'
  | 'toast-error'
  | 'toast-warning'
  | 'toast-primary'
  | 'toast-secondary'
  | 'toast-info';
type ToastPosition = 'tr' | 'tl' | 'bl' | 'br';

type ToastOptions = {
  message: string;
  variant?: ToastVariant;
  duration?: number;
  position?: ToastPosition;
  dismissible?: boolean;
};

type ToastHandle = {
  dismiss: () => void;
};

const containers = new Map<string, HTMLElement>();

const getContainer = (position: ToastPosition): HTMLElement => {
  const existing = containers.get(position);
  if (existing && document.body.contains(existing)) return existing;

  const el = document.createElement('div');
  el.className = 'toast-container';
  el.setAttribute('aria-live', 'polite');
  el.setAttribute('aria-atomic', 'false');

  const posClasses: Record<string, string> = {
    tl: 'toast-container-tl',
    bl: 'toast-container-bl',
    br: 'toast-container-br'
  };

  if (posClasses[position]) el.classList.add(posClasses[position]);

  document.body.appendChild(el);
  containers.set(position, el);
  return el;
};

const toast = (options: ToastOptions): ToastHandle => {
  const {
    message,
    variant = 'toast',
    duration = 5000,
    position = 'tr',
    dismissible = true
  } = options;

  const container = getContainer(position);

  const el = document.createElement('div');
  el.className = variant === 'toast' ? 'toast' : `toast ${variant}`;
  el.setAttribute('role', 'status');

  const content = document.createElement('span');
  content.className = 'toast-content';
  content.textContent = message;
  el.appendChild(content);

  let dismissed = false;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    if (timer) clearTimeout(timer);
    el.classList.remove('toast-enter');
    el.classList.add('toast-exit');
    const handleEnd = () => {
      el.removeEventListener('transitionend', handleEnd);
      el.remove();
      if (container.children.length === 0) {
        container.remove();
        containers.delete(position);
      }
    };
    el.addEventListener('transitionend', handleEnd);
    setTimeout(handleEnd, 500);
  };

  if (dismissible) {
    const closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Dismiss');
    closeBtn.addEventListener('click', dismiss);
    el.appendChild(closeBtn);
  }

  container.appendChild(el);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      el.classList.add('toast-enter');
    });
  });

  if (duration > 0) {
    timer = setTimeout(dismiss, duration);
  }

  return { dismiss };
};

export { toast };
export type { ToastOptions, ToastHandle, ToastVariant, ToastPosition };
