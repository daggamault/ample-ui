type PopoverInstance = {
  open: () => void;
  close: () => void;
  toggle: () => void;
  destroy: () => void;
};

const createPopover = (el: HTMLElement): PopoverInstance | undefined => {
  if (el.hasAttribute('data-popover-init')) return undefined;
  el.setAttribute('data-popover-init', '');

  const trigger = el.querySelector<HTMLElement>('.popover-trigger');
  const content = el.querySelector<HTMLElement>('.popover-content');
  if (!trigger || !content) return undefined;

  let _isOpen = false;

  const open = () => {
    _isOpen = true;
    el.classList.add('popover-open');
  };

  const close = () => {
    _isOpen = false;
    el.classList.remove('popover-open');
  };

  const toggle = () => {
    if (_isOpen) close();
    else open();
  };

  const handleTriggerClick = (e: Event) => {
    e.stopPropagation();
    toggle();
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (_isOpen && !el.contains(e.target as Node)) close();
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && _isOpen) {
      close();
      trigger.focus();
    }
  };

  trigger.addEventListener('click', handleTriggerClick);
  document.addEventListener('click', handleClickOutside);
  el.addEventListener('keydown', handleKeydown);

  const closeBtn = content.querySelector<HTMLElement>('.popover-close');
  const handleCloseClick = () => close();
  closeBtn?.addEventListener('click', handleCloseClick);

  return {
    open,
    close,
    toggle,
    destroy: () => {
      trigger.removeEventListener('click', handleTriggerClick);
      document.removeEventListener('click', handleClickOutside);
      el.removeEventListener('keydown', handleKeydown);
      closeBtn?.removeEventListener('click', handleCloseClick);
      el.removeAttribute('data-popover-init');
      el.classList.remove('popover-open');
    }
  };
};

const initAll = (root: ParentNode = document): PopoverInstance[] =>
  Array.from(
    root.querySelectorAll<HTMLElement>(
      '[data-popover]:not([data-popover-init])'
    )
  )
    .map((el) => createPopover(el))
    .filter((p): p is PopoverInstance => p != null);

export { createPopover, initAll };
export type { PopoverInstance };
