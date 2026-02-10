type DialogConfig = {
  onOpen?: () => void;
  onClose?: () => void;
};

type DialogInstance = {
  open: () => void;
  close: () => void;
  isOpen: () => boolean;
  destroy: () => void;
};

const createDialog = (
  el: HTMLDialogElement,
  config: DialogConfig = {}
): DialogInstance | undefined => {
  if (el.hasAttribute('data-dialog-init')) return undefined;
  el.setAttribute('data-dialog-init', '');

  const dialogId = el.getAttribute('data-dialog');

  const open = () => {
    if (el.open) return;
    el.showModal();
    config.onOpen?.();
  };

  const close = () => {
    if (!el.open) return;
    el.close();
    config.onClose?.();
  };

  const handleBackdropClick = (e: MouseEvent) => {
    if (e.target === el) close();
  };

  const handleClose = () => {
    config.onClose?.();
  };

  el.addEventListener('click', handleBackdropClick);
  el.addEventListener('close', handleClose);

  const closeButtons = el.querySelectorAll<HTMLElement>('[data-dialog-close]');
  const handleCloseClick = () => close();
  for (const btn of closeButtons) {
    btn.addEventListener('click', handleCloseClick);
  }

  if (dialogId) {
    const triggers = document.querySelectorAll<HTMLElement>(
      `[data-dialog-trigger="${dialogId}"]`
    );
    for (const trigger of triggers) {
      trigger.addEventListener('click', () => open());
    }
  }

  return {
    open,
    close,
    isOpen: () => el.open,
    destroy: () => {
      if (el.open) el.close();
      el.removeEventListener('click', handleBackdropClick);
      el.removeEventListener('close', handleClose);
      for (const btn of closeButtons) {
        btn.removeEventListener('click', handleCloseClick);
      }
      el.removeAttribute('data-dialog-init');
    }
  };
};

const initAll = (root: ParentNode = document): DialogInstance[] =>
  Array.from(
    root.querySelectorAll<HTMLDialogElement>(
      'dialog[data-dialog]:not([data-dialog-init])'
    )
  )
    .map((el) => createDialog(el))
    .filter((d): d is DialogInstance => d != null);

export { createDialog, initAll };
export type { DialogConfig, DialogInstance };
