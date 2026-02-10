const a=["primary","secondary","warning","error","success","info"],e=s=>s[0].toUpperCase()+s.slice(1),c=s=>s==="primary"?"badge":`badge-${s}`,i=s=>s==="primary"?"badge-outline":`badge-outline-${s}`,r=s=>s==="primary"?"badge-soft":`badge-soft-${s}`,n=(s,...l)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${s}</p>
    ${l.join("")}
  </div>`,p=s=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,o={title:"Components/Badge",tags:["autodocs"]},t={render:()=>`
    <div class="flex flex-col gap-10">
      ${n("Solid",`<div class="flex gap-2 flex-wrap items-center">${a.map(s=>`<span class="${c(s)}">${e(s)}</span>`).join("")}</div>`,p(a.map(s=>`<span class="${c(s)}">${e(s)}</span>`).join(`
`)))}
      ${n("Outline",`<div class="flex gap-2 flex-wrap items-center">${a.map(s=>`<span class="${i(s)}">${e(s)}</span>`).join("")}</div>`,p(a.map(s=>`<span class="${i(s)}">${e(s)}</span>`).join(`
`)))}
      ${n("Soft",`<div class="flex gap-2 flex-wrap items-center">${a.map(s=>`<span class="${r(s)}">${e(s)}</span>`).join("")}</div>`,p(a.map(s=>`<span class="${r(s)}">${e(s)}</span>`).join(`
`)))}
      ${n("Small",`<div class="flex gap-2 flex-wrap items-center">
          ${a.map(s=>`<span class="${c(s)} badge-sm">${e(s)}</span>`).join("")}
        </div>`,p('<span class="badge badge-sm">Primary</span>'))}
      ${n("Inline with Text",`<div class="flex gap-6 items-center">
          <span class="text-sm">Messages <span class="badge">12</span></span>
          <span class="text-sm">Errors <span class="badge-error">3</span></span>
          <span class="text-sm">Status <span class="badge-soft-success">Active</span></span>
        </div>`)}
    </div>`};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:'{\n  render: () => `\n    <div class="flex flex-col gap-10">\n      ${section(\'Solid\', `<div class="flex gap-2 flex-wrap items-center">${variants.map(v => `<span class="${solidCls(v)}">${cap(v)}</span>`).join(\'\')}</div>`, code(variants.map(v => `<span class="${solidCls(v)}">${cap(v)}</span>`).join(\'\\n\')))}\n      ${section(\'Outline\', `<div class="flex gap-2 flex-wrap items-center">${variants.map(v => `<span class="${outlineCls(v)}">${cap(v)}</span>`).join(\'\')}</div>`, code(variants.map(v => `<span class="${outlineCls(v)}">${cap(v)}</span>`).join(\'\\n\')))}\n      ${section(\'Soft\', `<div class="flex gap-2 flex-wrap items-center">${variants.map(v => `<span class="${softCls(v)}">${cap(v)}</span>`).join(\'\')}</div>`, code(variants.map(v => `<span class="${softCls(v)}">${cap(v)}</span>`).join(\'\\n\')))}\n      ${section(\'Small\', `<div class="flex gap-2 flex-wrap items-center">\n          ${variants.map(v => `<span class="${solidCls(v)} badge-sm">${cap(v)}</span>`).join(\'\')}\n        </div>`, code(`<span class="badge badge-sm">Primary</span>`))}\n      ${section(\'Inline with Text\', `<div class="flex gap-6 items-center">\n          <span class="text-sm">Messages <span class="badge">12</span></span>\n          <span class="text-sm">Errors <span class="badge-error">3</span></span>\n          <span class="text-sm">Status <span class="badge-soft-success">Active</span></span>\n        </div>`)}\n    </div>`\n}',...t.parameters?.docs?.source}}};const d=["Badge"];export{t as Badge,d as __namedExportsOrder,o as default};
