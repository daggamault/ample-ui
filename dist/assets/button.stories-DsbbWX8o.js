const s=["primary","secondary","warning","error","success","info"],a=t=>t[0].toUpperCase()+t.slice(1),c=(t,o)=>t&&o!=="primary"?`btn-${t}-${o}`:t?`btn-${t}`:o!=="primary"?`btn-${o}`:"btn",l=(t,o,d="")=>`<button class="${c(t,o)}"${d}>${a(o)}</button>`,n=(t,...o)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${t}</p>
    ${o.join("")}
  </div>`,b=t=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,e='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>',u='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',r='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',p=s.map(t=>`<button class="${c("",t)}">${a(t)}</button>`).join(`
`),g=s.map(t=>`<button class="${c("outline",t)}">${a(t)}</button>`).join(`
`),v=s.map(t=>`<button class="${c("ghost",t)}">${a(t)}</button>`).join(`
`),$={title:"Components/Button",tags:["autodocs"]},i={render:()=>`
    <div class="flex flex-col gap-10">
      ${n("Solid",`<div class="flex gap-3 flex-wrap items-center">${s.map(t=>l("",t)).join("")}</div>`,b(p))}
      ${n("Solid — Disabled",`<div class="flex gap-3 flex-wrap items-center">${s.map(t=>l("",t," disabled")).join("")}</div>`)}
      ${n("Outline",`<div class="flex gap-3 flex-wrap items-center">${s.map(t=>l("outline",t)).join("")}</div>`,b(g))}
      ${n("Outline — Disabled",`<div class="flex gap-3 flex-wrap items-center">${s.map(t=>l("outline",t," disabled")).join("")}</div>`)}
      ${n("Ghost",`<div class="flex gap-3 flex-wrap items-center">${s.map(t=>l("ghost",t)).join("")}</div>`,b(v))}
      ${n("Ghost — Disabled",`<div class="flex gap-3 flex-wrap items-center">${s.map(t=>l("ghost",t," disabled")).join("")}</div>`)}
      ${n("Sizes",`<div class="flex gap-3 flex-wrap items-center">
          <button class="btn btn-sm">Small</button>
          <button class="btn">Medium</button>
          <button class="btn btn-lg">Large</button>
        </div>`,b(`<button class="btn btn-sm">Small</button>
<button class="btn">Medium</button>
<button class="btn btn-lg">Large</button>`))}
      ${n("Pill",`<div class="flex gap-3 flex-wrap items-center">
          <button class="btn btn-pill">Primary</button>
          <button class="btn-outline btn-pill">Outline</button>
          <button class="btn-ghost btn-pill">Ghost</button>
          <button class="btn btn-icon btn-pill">${e}</button>
        </div>`,b(`<button class="btn btn-pill">Primary</button>
<button class="btn btn-icon btn-pill">...</button>`))}
      ${n("Icon Buttons",`<div class="flex gap-3 flex-wrap items-center">
          <button class="btn btn-icon">${e}</button>
          <button class="btn-secondary btn-icon">${u}</button>
          <button class="btn-error btn-icon">${r}</button>
          <button class="btn-outline btn-icon">${e}</button>
          <button class="btn-outline-secondary btn-icon">${u}</button>
          <button class="btn-ghost btn-icon">${e}</button>
          <button class="btn-ghost-error btn-icon">${r}</button>
        </div>`,b(`<button class="btn btn-icon">
  <svg>...</svg>
</button>`))}
      ${n("Icon Button Sizes",`<div class="flex gap-3 flex-wrap items-center">
          <button class="btn btn-icon btn-sm">${e}</button>
          <button class="btn btn-icon">${e}</button>
          <button class="btn btn-icon btn-lg">${e}</button>
        </div>`)}
      ${n("Button Group",`<div class="flex gap-6 flex-wrap items-center">
          <div class="btn-group">
            <button class="btn-outline">Left</button>
            <button class="btn-outline">Center</button>
            <button class="btn-outline">Right</button>
          </div>
          <div class="btn-group">
            <button class="btn">One</button>
            <button class="btn">Two</button>
            <button class="btn">Three</button>
          </div>
          <div class="btn-group">
            <button class="btn-ghost">Day</button>
            <button class="btn-ghost">Week</button>
            <button class="btn-ghost">Month</button>
          </div>
          <div class="btn-group">
            <button class="btn-outline btn-icon">${e}</button>
            <button class="btn-outline btn-icon">${u}</button>
            <button class="btn-outline btn-icon">${r}</button>
          </div>
        </div>`,b(`<div class="btn-group">
  <button class="btn-outline">Left</button>
  <button class="btn-outline">Center</button>
  <button class="btn-outline">Right</button>
</div>`))}
    </div>`};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10">
      \${section('Solid', \`<div class="flex gap-3 flex-wrap items-center">\${variants.map(v => tag('', v)).join('')}</div>\`, code(solidSnippet))}
      \${section('Solid — Disabled', \`<div class="flex gap-3 flex-wrap items-center">\${variants.map(v => tag('', v, ' disabled')).join('')}</div>\`)}
      \${section('Outline', \`<div class="flex gap-3 flex-wrap items-center">\${variants.map(v => tag('outline', v)).join('')}</div>\`, code(outlineSnippet))}
      \${section('Outline — Disabled', \`<div class="flex gap-3 flex-wrap items-center">\${variants.map(v => tag('outline', v, ' disabled')).join('')}</div>\`)}
      \${section('Ghost', \`<div class="flex gap-3 flex-wrap items-center">\${variants.map(v => tag('ghost', v)).join('')}</div>\`, code(ghostSnippet))}
      \${section('Ghost — Disabled', \`<div class="flex gap-3 flex-wrap items-center">\${variants.map(v => tag('ghost', v, ' disabled')).join('')}</div>\`)}
      \${section('Sizes', \`<div class="flex gap-3 flex-wrap items-center">
          <button class="btn btn-sm">Small</button>
          <button class="btn">Medium</button>
          <button class="btn btn-lg">Large</button>
        </div>\`, code(\`<button class="btn btn-sm">Small</button>\\n<button class="btn">Medium</button>\\n<button class="btn btn-lg">Large</button>\`))}
      \${section('Pill', \`<div class="flex gap-3 flex-wrap items-center">
          <button class="btn btn-pill">Primary</button>
          <button class="btn-outline btn-pill">Outline</button>
          <button class="btn-ghost btn-pill">Ghost</button>
          <button class="btn btn-icon btn-pill">\${iconSvg}</button>
        </div>\`, code(\`<button class="btn btn-pill">Primary</button>\\n<button class="btn btn-icon btn-pill">...</button>\`))}
      \${section('Icon Buttons', \`<div class="flex gap-3 flex-wrap items-center">
          <button class="btn btn-icon">\${iconSvg}</button>
          <button class="btn-secondary btn-icon">\${heartSvg}</button>
          <button class="btn-error btn-icon">\${trashSvg}</button>
          <button class="btn-outline btn-icon">\${iconSvg}</button>
          <button class="btn-outline-secondary btn-icon">\${heartSvg}</button>
          <button class="btn-ghost btn-icon">\${iconSvg}</button>
          <button class="btn-ghost-error btn-icon">\${trashSvg}</button>
        </div>\`, code(\`<button class="btn btn-icon">\\n  <svg>...</svg>\\n</button>\`))}
      \${section('Icon Button Sizes', \`<div class="flex gap-3 flex-wrap items-center">
          <button class="btn btn-icon btn-sm">\${iconSvg}</button>
          <button class="btn btn-icon">\${iconSvg}</button>
          <button class="btn btn-icon btn-lg">\${iconSvg}</button>
        </div>\`)}
      \${section('Button Group', \`<div class="flex gap-6 flex-wrap items-center">
          <div class="btn-group">
            <button class="btn-outline">Left</button>
            <button class="btn-outline">Center</button>
            <button class="btn-outline">Right</button>
          </div>
          <div class="btn-group">
            <button class="btn">One</button>
            <button class="btn">Two</button>
            <button class="btn">Three</button>
          </div>
          <div class="btn-group">
            <button class="btn-ghost">Day</button>
            <button class="btn-ghost">Week</button>
            <button class="btn-ghost">Month</button>
          </div>
          <div class="btn-group">
            <button class="btn-outline btn-icon">\${iconSvg}</button>
            <button class="btn-outline btn-icon">\${heartSvg}</button>
            <button class="btn-outline btn-icon">\${trashSvg}</button>
          </div>
        </div>\`, code(\`<div class="btn-group">\\n  <button class="btn-outline">Left</button>\\n  <button class="btn-outline">Center</button>\\n  <button class="btn-outline">Right</button>\\n</div>\`))}
    </div>\`
}`,...i.parameters?.docs?.source}}};const m=["Button"];export{i as Button,m as __namedExportsOrder,$ as default};
