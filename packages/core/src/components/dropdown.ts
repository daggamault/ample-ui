type DropdownConfig = {
  onSelect?: (value: string) => void;
};

type DropdownInstance = {
  open: () => void;
  close: () => void;
  isOpen: () => boolean;
  destroy: () => void;
};

let uid = 0;
const nextId = () => `ample-dd-${++uid}`;

const createDropdown = (
  el: HTMLElement,
  config: DropdownConfig = {}
): DropdownInstance | undefined => {
  if (el.hasAttribute('data-dropdown-init')) return undefined;
  el.setAttribute('data-dropdown-init', '');

  const ddId = nextId();
  const trigger = el.querySelector<HTMLElement>('.dropdown-trigger');
  const menu = el.querySelector<HTMLElement>('.dropdown-menu');

  if (!trigger || !menu) return undefined;

  const items = () =>
    Array.from(menu.querySelectorAll<HTMLElement>('.dropdown-item'));
  let focusedIndex = -1;
  let _isOpen = false;

  trigger.id = trigger.id || `${ddId}-trigger`;
  menu.id = menu.id || `${ddId}-menu`;
  trigger.setAttribute('aria-haspopup', 'menu');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', menu.id);
  menu.setAttribute('role', 'menu');

  for (const item of items()) {
    item.setAttribute('role', 'menuitem');
    item.setAttribute('tabindex', '-1');
  }

  const clearFocus = () => {
    for (const item of items()) item.classList.remove('dropdown-item-active');
    focusedIndex = -1;
    trigger.removeAttribute('aria-activedescendant');
  };

  const setFocus = (index: number) => {
    const list = items();
    clearFocus();
    if (index < 0 || index >= list.length) return;
    focusedIndex = index;
    list[index].classList.add('dropdown-item-active');
    list[index].id = list[index].id || `${ddId}-item-${index}`;
    trigger.setAttribute('aria-activedescendant', list[index].id);
    list[index].scrollIntoView({ block: 'nearest' });
  };

  const open = () => {
    _isOpen = true;
    el.classList.add('dropdown-open');
    trigger.setAttribute('aria-expanded', 'true');

    const rect = trigger.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const menuHeight = menu.scrollHeight || 200;
    el.classList.toggle(
      'dropdown-open-up',
      spaceBelow < menuHeight && rect.top > spaceBelow
    );

    focusedIndex = -1;
  };

  const close = () => {
    _isOpen = false;
    el.classList.remove('dropdown-open', 'dropdown-open-up');
    trigger.setAttribute('aria-expanded', 'false');
    clearFocus();
  };

  const handleTriggerClick = () => {
    if (_isOpen) close();
    else open();
  };

  const handleItemClick = (e: Event) => {
    const item = (e.target as HTMLElement).closest<HTMLElement>(
      '.dropdown-item'
    );
    if (!item || !menu.contains(item)) return;
    const value =
      item.getAttribute('data-value') ?? item.textContent?.trim() ?? '';
    config.onSelect?.(value);
    close();
    trigger.focus();
  };

  const handleKeydown = (e: KeyboardEvent) => {
    if (!_isOpen) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
        e.preventDefault();
        open();
        setFocus(0);
      }
      return;
    }

    const list = items();

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocus(Math.min(focusedIndex + 1, list.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocus(Math.max(focusedIndex - 1, 0));
        break;
      case 'Home':
        e.preventDefault();
        setFocus(0);
        break;
      case 'End':
        e.preventDefault();
        setFocus(list.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < list.length) {
          list[focusedIndex].click();
        }
        break;
      case 'Escape':
        e.preventDefault();
        close();
        trigger.focus();
        break;
      case 'Tab':
        close();
        break;
    }
  };

  trigger.addEventListener('click', handleTriggerClick);
  menu.addEventListener('click', handleItemClick);
  el.addEventListener('keydown', handleKeydown);

  const handleClickOutside = (e: MouseEvent) => {
    if (_isOpen && !el.contains(e.target as Node)) close();
  };

  document.addEventListener('click', handleClickOutside);

  return {
    open,
    close,
    isOpen: () => _isOpen,
    destroy: () => {
      trigger.removeEventListener('click', handleTriggerClick);
      menu.removeEventListener('click', handleItemClick);
      el.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('click', handleClickOutside);
      el.removeAttribute('data-dropdown-init');
      el.classList.remove('dropdown-open', 'dropdown-open-up');
    }
  };
};

const initAll = (root: ParentNode = document): DropdownInstance[] =>
  Array.from(
    root.querySelectorAll<HTMLElement>(
      '[data-dropdown]:not([data-dropdown-init])'
    )
  )
    .map((el) => createDropdown(el))
    .filter((d): d is DropdownInstance => d != null);

export { createDropdown, initAll };
export type { DropdownConfig, DropdownInstance };
