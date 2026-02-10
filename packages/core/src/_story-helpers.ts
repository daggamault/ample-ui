export const variants = [
  'primary',
  'secondary',
  'warning',
  'error',
  'success',
  'info'
] as const;

export const cap = (s: string) => s?.slice(0, 1)?.toUpperCase() + s?.slice(1);

export const section = (title: string, ...content: string[]) =>
  `<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${title}</p>
    ${content.join('')}
  </div>`;

export const code = (content: string) => {
  const escaped = content
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
  return `<details class="group rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-hidden">
    <summary class="flex items-center gap-1.5 px-3 py-2 cursor-pointer select-none list-none [&::-webkit-details-marker]:hidden text-text-subtle hover:text-text-muted transition-colors">
      <svg class="w-3.5 h-3.5 transition-transform group-open:rotate-90 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
      Show code
    </summary>
    <pre class="px-3 pb-3 pt-0 overflow-x-auto"><code>${escaped}</code></pre>
  </details>`;
};

export const row = (...items: string[]) =>
  `<div class="flex gap-3 flex-wrap items-center">${items.join('')}</div>`;

export const stack = (...items: string[]) =>
  `<div class="flex flex-col gap-3">${items.join('')}</div>`;
