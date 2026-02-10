type SelectOption = {
  value: string;
  label: string;
  group?: string;
};

type SelectConfig = {
  onChange?: (value: string | string[]) => void;
};

type SelectInstance = {
  getValue: () => string | string[];
  setValue: (value: string | string[]) => void;
  destroy: () => void;
};

const chevronSvg = `<svg class="select-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l4 4 4-4"/></svg>`;

let uid = 0;
const nextId = () => `ample-sel-${++uid}`;

const createSelect = (
  el: HTMLElement,
  config: SelectConfig = {}
): SelectInstance | undefined => {
  if (el.hasAttribute('data-select-init')) return undefined;
  el.setAttribute('data-select-init', '');

  const isMultiple = el.hasAttribute('data-multiple');
  const isSearchable = el.hasAttribute('data-search');
  const placeholder = el.getAttribute('data-placeholder') ?? 'Select...';
  const selectId = nextId();

  const options: SelectOption[] = [];
  const optionsByValue = new Map<string, SelectOption>();
  const groups = new Map<string, SelectOption[]>();
  let currentGroup: string | undefined;

  for (const child of Array.from(el.children) as HTMLElement[]) {
    if (child.hasAttribute('data-group')) {
      currentGroup = child.getAttribute('data-group') ?? undefined;
      continue;
    }
    const value = child.getAttribute('data-value');
    if (!value) continue;
    const label = child.textContent?.trim() ?? value;
    const option: SelectOption = { value, label, group: currentGroup };
    options.push(option);
    optionsByValue.set(value, option);
    if (currentGroup) {
      if (!groups.has(currentGroup)) groups.set(currentGroup, []);
      groups.get(currentGroup)!.push(option);
    }
  }

  const preselected =
    el
      .getAttribute('data-value')
      ?.split(',')
      .map((v) => v.trim())
      .filter(Boolean) ?? [];
  let selected = new Set(preselected.filter((v) => optionsByValue.has(v)));
  let focusedIndex = -1;
  let isOpen = false;

  el.innerHTML = '';
  el.classList.add('select');

  const trigger = document.createElement('button');
  trigger.type = 'button';
  trigger.className = 'select-trigger';
  trigger.id = `${selectId}-trigger`;
  trigger.setAttribute('role', 'combobox');
  trigger.setAttribute('aria-haspopup', 'listbox');
  trigger.setAttribute('aria-expanded', 'false');
  trigger.setAttribute('aria-controls', `${selectId}-listbox`);

  const dropdown = document.createElement('div');
  dropdown.className = 'select-dropdown';
  dropdown.id = `${selectId}-listbox`;
  dropdown.setAttribute('role', 'listbox');
  if (isMultiple) dropdown.setAttribute('aria-multiselectable', 'true');

  let searchInput: HTMLInputElement | null = null;
  if (isSearchable) {
    searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.className = 'select-search';
    searchInput.placeholder = 'Search...';
    searchInput.setAttribute('autocomplete', 'off');
    searchInput.setAttribute('aria-label', 'Filter options');
    dropdown.appendChild(searchInput);
  }

  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'select-options';
  dropdown.appendChild(optionsContainer);

  const emptyEl = document.createElement('div');
  emptyEl.className = 'select-empty';
  emptyEl.textContent = 'No results';
  emptyEl.style.display = 'none';
  optionsContainer.appendChild(emptyEl);

  const optionElements: HTMLElement[] = [];
  const groupMeta: {
    label: HTMLElement;
    divider: HTMLElement | null;
    name: string;
  }[] = [];

  const hasGroups = groups.size > 0;
  const ungrouped = options.filter((o) => !o.group);

  const buildOptions = () => {
    if (hasGroups) {
      for (const opt of ungrouped) {
        optionsContainer.appendChild(buildOptionEl(opt));
      }
      let isFirst = ungrouped.length === 0;
      for (const [groupName, groupOpts] of groups) {
        let divider: HTMLElement | null = null;
        if (!isFirst) {
          divider = document.createElement('div');
          divider.className = 'select-divider';
          optionsContainer.appendChild(divider);
        }
        const label = document.createElement('div');
        label.className = 'select-group-label';
        label.textContent = groupName;
        optionsContainer.appendChild(label);
        groupMeta.push({ label, divider, name: groupName });

        for (const opt of groupOpts) {
          optionsContainer.appendChild(buildOptionEl(opt));
        }
        isFirst = false;
      }
    } else {
      for (const opt of options) {
        optionsContainer.appendChild(buildOptionEl(opt));
      }
    }
  };

  const buildOptionEl = (opt: SelectOption) => {
    const optEl = document.createElement('div');
    optEl.className = 'select-option';
    optEl.id = `${selectId}-opt-${opt.value}`;
    optEl.setAttribute('role', 'option');
    optEl.setAttribute('data-value', opt.value);
    optEl.setAttribute('aria-selected', String(selected.has(opt.value)));

    if (isMultiple) {
      const check = document.createElement('span');
      check.className = 'select-check';
      optEl.appendChild(check);
    }

    const span = document.createElement('span');
    span.textContent = opt.label;
    optEl.appendChild(span);

    if (selected.has(opt.value)) {
      optEl.classList.add('select-option-selected');
    }

    optEl.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleOption(opt.value);
    });

    optionElements.push(optEl);
    return optEl;
  };

  buildOptions();
  el.appendChild(trigger);
  el.appendChild(dropdown);

  const updateTrigger = () => {
    trigger.innerHTML = '';

    if (isMultiple && selected.size > 0) {
      const tagsContainer = document.createElement('div');
      tagsContainer.className = 'select-tags';
      for (const val of selected) {
        const opt = optionsByValue.get(val);
        if (!opt) continue;
        const tag = document.createElement('span');
        tag.className = 'select-tag';
        tag.textContent = opt.label;
        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.className = 'select-tag-remove';
        removeBtn.innerHTML = '&times;';
        removeBtn.setAttribute('aria-label', `Remove ${opt.label}`);
        removeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          toggleOption(val);
        });
        tag.appendChild(removeBtn);
        tagsContainer.appendChild(tag);
      }
      trigger.appendChild(tagsContainer);
    } else if (!isMultiple && selected.size === 1) {
      const val = [...selected][0];
      const opt = optionsByValue.get(val);
      const valueSpan = document.createElement('span');
      valueSpan.className = 'select-value';
      valueSpan.textContent = opt?.label ?? val;
      trigger.appendChild(valueSpan);
    } else {
      const ph = document.createElement('span');
      ph.className = 'select-placeholder';
      ph.textContent = placeholder;
      trigger.appendChild(ph);
    }

    trigger.insertAdjacentHTML('beforeend', chevronSvg);
  };

  const toggleOption = (value: string) => {
    if (isMultiple) {
      if (selected.has(value)) selected.delete(value);
      else selected.add(value);
    } else {
      selected = new Set([value]);
      close();
    }
    syncOptionStates();
    updateTrigger();
    config.onChange?.(isMultiple ? [...selected] : ([...selected][0] ?? ''));
  };

  const syncOptionStates = () => {
    for (const optEl of optionElements) {
      const val = optEl.getAttribute('data-value')!;
      const isSelected = selected.has(val);
      optEl.classList.toggle('select-option-selected', isSelected);
      optEl.setAttribute('aria-selected', String(isSelected));
    }
  };

  const open = () => {
    isOpen = true;
    el.classList.add('select-open');
    trigger.setAttribute('aria-expanded', 'true');

    const rect = trigger.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const dropdownHeight = dropdown.scrollHeight || 250;
    el.classList.toggle(
      'select-open-up',
      spaceBelow < dropdownHeight && rect.top > spaceBelow
    );

    focusedIndex = -1;
    updateActivedescendant();
    if (searchInput) {
      searchInput.value = '';
      filterOptions('');
      requestAnimationFrame(() => searchInput!.focus());
    }
  };

  const close = () => {
    isOpen = false;
    el.classList.remove('select-open', 'select-open-up');
    trigger.setAttribute('aria-expanded', 'false');
    focusedIndex = -1;
    clearFocus();
    updateActivedescendant();
  };

  const getVisibleOptions = () =>
    optionElements.filter((o) => !o.classList.contains('select-option-hidden'));

  const updateActivedescendant = () => {
    const visible = getVisibleOptions();
    const activeId =
      focusedIndex >= 0 && focusedIndex < visible.length
        ? visible[focusedIndex].id
        : '';
    trigger.setAttribute('aria-activedescendant', activeId);
  };

  const setFocus = (index: number) => {
    clearFocus();
    const visible = getVisibleOptions();
    if (index < 0 || index >= visible.length) return;
    focusedIndex = index;
    visible[index].classList.add('select-option-focused');
    visible[index].scrollIntoView({ block: 'nearest' });
    updateActivedescendant();
  };

  const clearFocus = () => {
    for (const o of optionElements) o.classList.remove('select-option-focused');
  };

  const filterOptions = (query: string) => {
    const q = query.toLowerCase();
    let visibleCount = 0;
    const visibleGroupNames = new Set<string>();

    for (const optEl of optionElements) {
      const opt = optionsByValue.get(optEl.getAttribute('data-value')!)!;
      const matches = !q || opt.label.toLowerCase().includes(q);
      optEl.classList.toggle('select-option-hidden', !matches);
      if (matches) {
        visibleCount++;
        if (opt.group) visibleGroupNames.add(opt.group);
      }
    }

    for (const gm of groupMeta) {
      const visible = visibleGroupNames.has(gm.name);
      gm.label.style.display = visible ? '' : 'none';
      if (gm.divider) gm.divider.style.display = visible ? '' : 'none';
    }

    emptyEl.style.display = visibleCount === 0 ? '' : 'none';
    focusedIndex = -1;
    clearFocus();
    updateActivedescendant();
  };

  trigger.addEventListener('click', () => {
    if (isOpen) close();
    else open();
  });

  searchInput?.addEventListener('input', () => {
    filterOptions(searchInput!.value);
  });

  const handleKeydown = (e: KeyboardEvent) => {
    if (!isOpen) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
        e.preventDefault();
        open();
      }
      return;
    }

    const visible = getVisibleOptions();

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocus(Math.min(focusedIndex + 1, visible.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocus(Math.max(focusedIndex - 1, 0));
        break;
      case 'Enter':
      case ' ':
        if (
          searchInput &&
          e.key === ' ' &&
          document.activeElement === searchInput
        )
          break;
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < visible.length) {
          toggleOption(visible[focusedIndex].getAttribute('data-value')!);
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

  el.addEventListener('keydown', handleKeydown);

  const handleClickOutside = (e: MouseEvent) => {
    if (isOpen && !el.contains(e.target as Node)) close();
  };

  document.addEventListener('click', handleClickOutside);

  updateTrigger();

  return {
    getValue: () => (isMultiple ? [...selected] : ([...selected][0] ?? '')),
    setValue: (value: string | string[]) => {
      const values = Array.isArray(value) ? value : [value];
      selected = new Set(values.filter((v) => optionsByValue.has(v)));
      syncOptionStates();
      updateTrigger();
    },
    destroy: () => {
      document.removeEventListener('click', handleClickOutside);
      el.removeAttribute('data-select-init');
      el.classList.remove('select', 'select-open', 'select-open-up');
      el.innerHTML = '';
    }
  };
};

const initAll = (root: ParentNode = document): SelectInstance[] =>
  Array.from(
    root.querySelectorAll<HTMLElement>('[data-select]:not([data-select-init])')
  )
    .map((el) => createSelect(el))
    .filter((s): s is SelectInstance => s != null);

export { createSelect, initAll };
export type { SelectOption, SelectInstance };
