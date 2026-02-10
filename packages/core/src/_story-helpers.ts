export const variants = [
  'primary',
  'secondary',
  'warning',
  'error',
  'success',
  'info'
] as const;

export const cap = (s: string) => s[0].toUpperCase() + s.slice(1);

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
  return `<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${escaped}</code></pre>`;
};

export const row = (...items: string[]) =>
  `<div class="flex gap-3 flex-wrap items-center">${items.join('')}</div>`;

export const stack = (...items: string[]) =>
  `<div class="flex flex-col gap-3">${items.join('')}</div>`;
