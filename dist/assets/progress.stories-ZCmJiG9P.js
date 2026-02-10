const s=(e,...a)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${e}</p>
    ${a.join("")}
  </div>`,i=e=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,d={title:"Components/Progress",tags:["autodocs"]},r={render:()=>`
    <div class="flex flex-col gap-10 max-w-lg">
      ${s("Basic",'<div class="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar" style="width: 60%"></div></div>',i(`<div class="progress">
  <div class="progress-bar" style="width: 60%"></div>
</div>`))}
      ${s("Sizes",`<div class="flex flex-col gap-3">
          <div class="progress progress-sm"><div class="progress-bar" style="width: 40%"></div></div>
          <div class="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar" style="width: 60%"></div></div>
          <div class="progress progress-lg"><div class="progress-bar" style="width: 80%"></div></div>
        </div>`,i(`<div class="progress progress-sm">...</div>
<div class="progress">...</div>
<div class="progress progress-lg">...</div>`))}
      ${s("Color Variants",`<div class="flex flex-col gap-3">
          <div class="progress"><div class="progress-bar" style="width: 90%"></div></div>
          <div class="progress"><div class="progress-bar progress-secondary" style="width: 75%"></div></div>
          <div class="progress"><div class="progress-bar progress-warning" style="width: 60%"></div></div>
          <div class="progress"><div class="progress-bar progress-error" style="width: 45%"></div></div>
          <div class="progress"><div class="progress-bar progress-success" style="width: 80%"></div></div>
          <div class="progress"><div class="progress-bar progress-info" style="width: 55%"></div></div>
        </div>`)}
      ${s("Indeterminate",'<div class="progress progress-indeterminate"><div class="progress-bar"></div></div>',i(`<div class="progress progress-indeterminate">
  <div class="progress-bar"></div>
</div>`))}
    </div>`};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10 max-w-lg">
      \${section('Basic', \`<div class="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar" style="width: 60%"></div></div>\`, code(\`<div class="progress">\\n  <div class="progress-bar" style="width: 60%"></div>\\n</div>\`))}
      \${section('Sizes', \`<div class="flex flex-col gap-3">
          <div class="progress progress-sm"><div class="progress-bar" style="width: 40%"></div></div>
          <div class="progress" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><div class="progress-bar" style="width: 60%"></div></div>
          <div class="progress progress-lg"><div class="progress-bar" style="width: 80%"></div></div>
        </div>\`, code(\`<div class="progress progress-sm">...</div>\\n<div class="progress">...</div>\\n<div class="progress progress-lg">...</div>\`))}
      \${section('Color Variants', \`<div class="flex flex-col gap-3">
          <div class="progress"><div class="progress-bar" style="width: 90%"></div></div>
          <div class="progress"><div class="progress-bar progress-secondary" style="width: 75%"></div></div>
          <div class="progress"><div class="progress-bar progress-warning" style="width: 60%"></div></div>
          <div class="progress"><div class="progress-bar progress-error" style="width: 45%"></div></div>
          <div class="progress"><div class="progress-bar progress-success" style="width: 80%"></div></div>
          <div class="progress"><div class="progress-bar progress-info" style="width: 55%"></div></div>
        </div>\`)}
      \${section('Indeterminate', \`<div class="progress progress-indeterminate"><div class="progress-bar"></div></div>\`, code(\`<div class="progress progress-indeterminate">\\n  <div class="progress-bar"></div>\\n</div>\`))}
    </div>\`
}`,...r.parameters?.docs?.source}}};const o=["Progress"];export{r as Progress,o as __namedExportsOrder,d as default};
