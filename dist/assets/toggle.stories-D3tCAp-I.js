const a=(e,...s)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${e}</p>
    ${s.join("")}
  </div>`,c=e=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,t={title:"Components/Toggle",tags:["autodocs"]},l={render:()=>`
    <div class="flex flex-col gap-10">
      ${a("Basic",`<div class="flex flex-col gap-4">
          <label class="toggle">
            <input type="checkbox" class="toggle-input" />
            <span class="toggle-track"></span>
            <span class="toggle-label">Notifications</span>
          </label>
          <label class="toggle">
            <input type="checkbox" class="toggle-input" checked />
            <span class="toggle-track"></span>
            <span class="toggle-label">Dark mode</span>
          </label>
        </div>`,c(`<label class="toggle">
  <input type="checkbox" class="toggle-input" />
  <span class="toggle-track"></span>
  <span class="toggle-label">Label</span>
</label>`))}
      ${a("Sizes",`<div class="flex flex-col gap-4">
          <label class="toggle toggle-sm">
            <input type="checkbox" class="toggle-input" checked />
            <span class="toggle-track"></span>
            <span class="toggle-label">Small</span>
          </label>
          <label class="toggle">
            <input type="checkbox" class="toggle-input" checked />
            <span class="toggle-track"></span>
            <span class="toggle-label">Medium</span>
          </label>
          <label class="toggle toggle-lg">
            <input type="checkbox" class="toggle-input" checked />
            <span class="toggle-track"></span>
            <span class="toggle-label">Large</span>
          </label>
        </div>`,c(`<label class="toggle toggle-sm">...</label>
<label class="toggle">...</label>
<label class="toggle toggle-lg">...</label>`))}
      ${a("Disabled",`<div class="flex flex-col gap-4">
          <label class="toggle">
            <input type="checkbox" class="toggle-input" disabled />
            <span class="toggle-track"></span>
            <span class="toggle-label">Disabled off</span>
          </label>
          <label class="toggle">
            <input type="checkbox" class="toggle-input" checked disabled />
            <span class="toggle-track"></span>
            <span class="toggle-label">Disabled on</span>
          </label>
        </div>`)}
    </div>`};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10">
      \${section('Basic', \`<div class="flex flex-col gap-4">
          <label class="toggle">
            <input type="checkbox" class="toggle-input" />
            <span class="toggle-track"></span>
            <span class="toggle-label">Notifications</span>
          </label>
          <label class="toggle">
            <input type="checkbox" class="toggle-input" checked />
            <span class="toggle-track"></span>
            <span class="toggle-label">Dark mode</span>
          </label>
        </div>\`, code(\`<label class="toggle">\\n  <input type="checkbox" class="toggle-input" />\\n  <span class="toggle-track"></span>\\n  <span class="toggle-label">Label</span>\\n</label>\`))}
      \${section('Sizes', \`<div class="flex flex-col gap-4">
          <label class="toggle toggle-sm">
            <input type="checkbox" class="toggle-input" checked />
            <span class="toggle-track"></span>
            <span class="toggle-label">Small</span>
          </label>
          <label class="toggle">
            <input type="checkbox" class="toggle-input" checked />
            <span class="toggle-track"></span>
            <span class="toggle-label">Medium</span>
          </label>
          <label class="toggle toggle-lg">
            <input type="checkbox" class="toggle-input" checked />
            <span class="toggle-track"></span>
            <span class="toggle-label">Large</span>
          </label>
        </div>\`, code(\`<label class="toggle toggle-sm">...</label>\\n<label class="toggle">...</label>\\n<label class="toggle toggle-lg">...</label>\`))}
      \${section('Disabled', \`<div class="flex flex-col gap-4">
          <label class="toggle">
            <input type="checkbox" class="toggle-input" disabled />
            <span class="toggle-track"></span>
            <span class="toggle-label">Disabled off</span>
          </label>
          <label class="toggle">
            <input type="checkbox" class="toggle-input" checked disabled />
            <span class="toggle-track"></span>
            <span class="toggle-label">Disabled on</span>
          </label>
        </div>\`)}
    </div>\`
}`,...l.parameters?.docs?.source}}};const g=["Toggle"];export{l as Toggle,g as __namedExportsOrder,t as default};
