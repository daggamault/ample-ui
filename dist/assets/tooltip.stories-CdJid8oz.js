const e=(o,...a)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${o}</p>
    ${a.join("")}
  </div>`,l=o=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,n={title:"Components/Tooltip",tags:["autodocs"]},t={render:()=>`
    <div class="flex flex-col gap-10" style="padding: 3rem;">
      ${e("Positions",`<div class="flex gap-6 flex-wrap items-center">
          <button class="btn" data-tooltip="Tooltip on top">Top (default)</button>
          <button class="btn-outline" data-tooltip="Tooltip on bottom" data-tooltip-pos="bottom">Bottom</button>
          <button class="btn-outline" data-tooltip="Tooltip on left" data-tooltip-pos="left">Left</button>
          <button class="btn-outline" data-tooltip="Tooltip on right" data-tooltip-pos="right">Right</button>
        </div>`,l(`<button data-tooltip="Tooltip text">Hover me</button>
<button data-tooltip="Bottom" data-tooltip-pos="bottom">Bottom</button>`))}
      ${e("On Various Elements",`<div class="flex gap-6 flex-wrap items-center">
          <span class="badge" data-tooltip="Primary badge">Badge</span>
          <span class="text-sm underline decoration-dotted cursor-help" data-tooltip="This explains the term">Hover for info</span>
          <button class="btn btn-icon btn-ghost" data-tooltip="Settings">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>`)}
    </div>`};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10" style="padding: 3rem;">
      \${section('Positions', \`<div class="flex gap-6 flex-wrap items-center">
          <button class="btn" data-tooltip="Tooltip on top">Top (default)</button>
          <button class="btn-outline" data-tooltip="Tooltip on bottom" data-tooltip-pos="bottom">Bottom</button>
          <button class="btn-outline" data-tooltip="Tooltip on left" data-tooltip-pos="left">Left</button>
          <button class="btn-outline" data-tooltip="Tooltip on right" data-tooltip-pos="right">Right</button>
        </div>\`, code(\`<button data-tooltip="Tooltip text">Hover me</button>\\n<button data-tooltip="Bottom" data-tooltip-pos="bottom">Bottom</button>\`))}
      \${section('On Various Elements', \`<div class="flex gap-6 flex-wrap items-center">
          <span class="badge" data-tooltip="Primary badge">Badge</span>
          <span class="text-sm underline decoration-dotted cursor-help" data-tooltip="This explains the term">Hover for info</span>
          <button class="btn btn-icon btn-ghost" data-tooltip="Settings">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          </button>
        </div>\`)}
    </div>\`
}`,...t.parameters?.docs?.source}}};const s=["Tooltip"];export{t as Tooltip,s as __namedExportsOrder,n as default};
