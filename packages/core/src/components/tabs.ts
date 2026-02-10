type TabsConfig = {
  onChange?: (panelId: string) => void;
};

type TabsInstance = {
  activate: (panelId: string) => void;
  destroy: () => void;
};

let uid = 0;
const nextId = () => `ample-tabs-${++uid}`;

const createTabs = (
  el: HTMLElement,
  config: TabsConfig = {}
): TabsInstance | undefined => {
  if (el.hasAttribute('data-tabs-init')) return undefined;
  el.setAttribute('data-tabs-init', '');

  const tabsId = nextId();
  const tabList = el.querySelector<HTMLElement>('.tab-list');
  const tabs = Array.from(el.querySelectorAll<HTMLElement>('[data-tab]'));
  const panels = Array.from(
    el.querySelectorAll<HTMLElement>('[data-tab-panel]')
  );

  if (!tabList || tabs.length === 0) return undefined;

  tabList.setAttribute('role', 'tablist');

  const panelMap = new Map<string, HTMLElement>();
  for (const panel of panels) {
    const id = panel.getAttribute('data-tab-panel')!;
    panel.id = panel.id || `${tabsId}-panel-${id}`;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('tabindex', '0');
    panelMap.set(id, panel);
  }

  tabs.forEach((tab, i) => {
    const panelId = tab.getAttribute('data-tab')!;
    const panel = panelMap.get(panelId);
    tab.id = tab.id || `${tabsId}-tab-${i}`;
    tab.setAttribute('role', 'tab');
    if (panel) {
      tab.setAttribute('aria-controls', panel.id);
      panel.setAttribute('aria-labelledby', tab.id);
    }
  });

  const activate = (panelId: string) => {
    for (const tab of tabs) {
      const isActive = tab.getAttribute('data-tab') === panelId;
      tab.classList.toggle('tab-active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
      tab.setAttribute('tabindex', isActive ? '0' : '-1');
    }
    for (const [id, panel] of panelMap) {
      panel.hidden = id !== panelId;
    }
    config.onChange?.(panelId);
  };

  const initialTab =
    tabs.find((t) => t.classList.contains('tab-active')) ?? tabs[0];
  activate(initialTab.getAttribute('data-tab')!);

  const handleClick = (e: Event) => {
    const tab = (e.target as HTMLElement).closest<HTMLElement>('[data-tab]');
    if (tab && tabs.includes(tab)) {
      activate(tab.getAttribute('data-tab')!);
    }
  };

  const handleKeydown = (e: KeyboardEvent) => {
    const tab = (e.target as HTMLElement).closest<HTMLElement>('[data-tab]');
    if (!tab || !tabs.includes(tab)) return;

    const currentIndex = tabs.indexOf(tab);
    let nextIndex = -1;

    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        nextIndex = (currentIndex + 1) % tabs.length;
        break;
      case 'ArrowLeft':
        e.preventDefault();
        nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
        break;
      case 'Home':
        e.preventDefault();
        nextIndex = 0;
        break;
      case 'End':
        e.preventDefault();
        nextIndex = tabs.length - 1;
        break;
    }

    if (nextIndex >= 0) {
      tabs[nextIndex].focus();
      activate(tabs[nextIndex].getAttribute('data-tab')!);
    }
  };

  el.addEventListener('click', handleClick);
  el.addEventListener('keydown', handleKeydown);

  return {
    activate,
    destroy: () => {
      el.removeEventListener('click', handleClick);
      el.removeEventListener('keydown', handleKeydown);
      el.removeAttribute('data-tabs-init');
    }
  };
};

const initAll = (root: ParentNode = document): TabsInstance[] =>
  Array.from(
    root.querySelectorAll<HTMLElement>('[data-tabs]:not([data-tabs-init])')
  )
    .map((el) => createTabs(el))
    .filter((t): t is TabsInstance => t != null);

export { createTabs, initAll };
export type { TabsConfig, TabsInstance };
