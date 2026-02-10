const i=["primary","secondary","warning","error","success","info"],l=s=>s[0].toUpperCase()+s.slice(1),r=s=>s==="primary"?"spinner":`spinner-${s}`,a=(s,...n)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${s}</p>
    ${n.join("")}
  </div>`,t=s=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,d={title:"Components/Spinner",tags:["autodocs"]},e={render:()=>`
    <div class="flex flex-col gap-10">
      ${a("Variants",`<div class="flex gap-4 flex-wrap items-center">${i.map(s=>`<div class="${r(s)}" role="status" aria-label="${l(s)} loading"></div>`).join("")}</div>`,t(i.map(s=>`<div class="${r(s)}" role="status" aria-label="Loading"></div>`).join(`
`)))}
      ${a("Sizes",`<div class="flex gap-4 flex-wrap items-center">
          <div class="spinner spinner-sm" role="status" aria-label="Loading"></div>
          <div class="spinner" role="status" aria-label="Loading"></div>
          <div class="spinner spinner-lg" role="status" aria-label="Loading"></div>
        </div>`,t(`<div class="spinner spinner-sm"></div>
<div class="spinner"></div>
<div class="spinner spinner-lg"></div>`))}
      ${a("With Text",`<div class="flex gap-6 flex-wrap items-center">
          <div class="flex items-center gap-2">
            <div class="spinner spinner-sm" role="status" aria-label="Loading"></div>
            <span class="text-sm text-text-muted">Loading...</span>
          </div>
          <button class="btn" disabled>
            <div class="spinner spinner-sm" style="border-color: currentColor; border-top-color: transparent; opacity: 0.6;" role="status" aria-label="Loading"></div>
            Processing
          </button>
        </div>`)}
    </div>`};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10">
      \${section('Variants', \`<div class="flex gap-4 flex-wrap items-center">\${variants.map(v => \`<div class="\${cls(v)}" role="status" aria-label="\${cap(v)} loading"></div>\`).join('')}</div>\`, code(variants.map(v => \`<div class="\${cls(v)}" role="status" aria-label="Loading"></div>\`).join('\\n')))}
      \${section('Sizes', \`<div class="flex gap-4 flex-wrap items-center">
          <div class="spinner spinner-sm" role="status" aria-label="Loading"></div>
          <div class="spinner" role="status" aria-label="Loading"></div>
          <div class="spinner spinner-lg" role="status" aria-label="Loading"></div>
        </div>\`, code(\`<div class="spinner spinner-sm"></div>\\n<div class="spinner"></div>\\n<div class="spinner spinner-lg"></div>\`))}
      \${section('With Text', \`<div class="flex gap-6 flex-wrap items-center">
          <div class="flex items-center gap-2">
            <div class="spinner spinner-sm" role="status" aria-label="Loading"></div>
            <span class="text-sm text-text-muted">Loading...</span>
          </div>
          <button class="btn" disabled>
            <div class="spinner spinner-sm" style="border-color: currentColor; border-top-color: transparent; opacity: 0.6;" role="status" aria-label="Loading"></div>
            Processing
          </button>
        </div>\`)}
    </div>\`
}`,...e.parameters?.docs?.source}}};const o=["Spinner"];export{e as Spinner,o as __namedExportsOrder,d as default};
