const a=(e,...n)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${e}</p>
    ${n.join("")}
  </div>`,s=e=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,t={title:"Components/Input",tags:["autodocs"]},l={render:()=>`
    <div class="flex flex-col gap-10">
      <div class="grid grid-cols-[1fr_1fr] gap-x-10 gap-y-8 max-w-2xl">
        ${a("Basic Input",`<div class="field">
            <label class="label">Email</label>
            <input class="input" type="email" placeholder="you@example.com">
          </div>`)}
        ${a("With Help Text",`<div class="field">
            <label class="label">Password</label>
            <input class="input" type="password" placeholder="Enter password">
            <span class="help">Must be at least 8 characters</span>
          </div>`)}
        ${a("Validation — Error",`<div class="field">
            <label class="label">Username</label>
            <input class="input input-error" value="ab">
            <span class="help-error">Username must be at least 3 characters</span>
          </div>`)}
        ${a("Validation — Success",`<div class="field">
            <label class="label">Username</label>
            <input class="input input-success" value="johndoe">
            <span class="help-success">Username is available</span>
          </div>`)}
        ${a("Disabled",`<div class="field">
            <label class="label">Read Only</label>
            <input class="input" placeholder="Disabled input" disabled>
          </div>`)}
      </div>

      ${a("Sizes",`<div class="flex gap-4 flex-wrap items-end max-w-2xl">
          <div class="field flex-1">
            <label class="label">Small</label>
            <input class="input input-sm" placeholder="Small input">
          </div>
          <div class="field flex-1">
            <label class="label">Medium</label>
            <input class="input" placeholder="Medium input">
          </div>
          <div class="field flex-1">
            <label class="label">Large</label>
            <input class="input input-lg" placeholder="Large input">
          </div>
        </div>`,s(`<input class="input input-sm">
<input class="input">
<input class="input input-lg">`))}

      ${a("Textarea",`<div class="field max-w-md">
          <label class="label">Message</label>
          <textarea class="textarea" placeholder="Write something..."></textarea>
        </div>`,s('<textarea class="textarea" placeholder="Write something..."></textarea>'))}

      <div class="flex flex-col gap-8 max-w-lg">
        ${a("Input Group — Prepend Addon",`<div class="input-group">
            <span class="input-addon">https://</span>
            <input class="input" placeholder="example.com">
          </div>`,s(`<div class="input-group">
  <span class="input-addon">https://</span>
  <input class="input" placeholder="example.com">
</div>`))}
        ${a("Input Group — Append Button",`<div class="input-group">
            <input class="input" placeholder="Search...">
            <button class="btn">Search</button>
          </div>`)}
        ${a("Input Group — Addon + Button",`<div class="input-group">
            <span class="input-addon">$</span>
            <input class="input" type="number" placeholder="0.00">
            <button class="btn-outline">Send</button>
          </div>`)}
        ${a("Input Group — Multiple Addons",`<div class="input-group">
            <span class="input-addon">@</span>
            <input class="input" placeholder="username">
            <span class="input-addon">.example.com</span>
          </div>`)}
      </div>
    </div>`};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10">
      <div class="grid grid-cols-[1fr_1fr] gap-x-10 gap-y-8 max-w-2xl">
        \${section('Basic Input', \`<div class="field">
            <label class="label">Email</label>
            <input class="input" type="email" placeholder="you@example.com">
          </div>\`)}
        \${section('With Help Text', \`<div class="field">
            <label class="label">Password</label>
            <input class="input" type="password" placeholder="Enter password">
            <span class="help">Must be at least 8 characters</span>
          </div>\`)}
        \${section('Validation — Error', \`<div class="field">
            <label class="label">Username</label>
            <input class="input input-error" value="ab">
            <span class="help-error">Username must be at least 3 characters</span>
          </div>\`)}
        \${section('Validation — Success', \`<div class="field">
            <label class="label">Username</label>
            <input class="input input-success" value="johndoe">
            <span class="help-success">Username is available</span>
          </div>\`)}
        \${section('Disabled', \`<div class="field">
            <label class="label">Read Only</label>
            <input class="input" placeholder="Disabled input" disabled>
          </div>\`)}
      </div>

      \${section('Sizes', \`<div class="flex gap-4 flex-wrap items-end max-w-2xl">
          <div class="field flex-1">
            <label class="label">Small</label>
            <input class="input input-sm" placeholder="Small input">
          </div>
          <div class="field flex-1">
            <label class="label">Medium</label>
            <input class="input" placeholder="Medium input">
          </div>
          <div class="field flex-1">
            <label class="label">Large</label>
            <input class="input input-lg" placeholder="Large input">
          </div>
        </div>\`, code(\`<input class="input input-sm">\\n<input class="input">\\n<input class="input input-lg">\`))}

      \${section('Textarea', \`<div class="field max-w-md">
          <label class="label">Message</label>
          <textarea class="textarea" placeholder="Write something..."></textarea>
        </div>\`, code(\`<textarea class="textarea" placeholder="Write something..."></textarea>\`))}

      <div class="flex flex-col gap-8 max-w-lg">
        \${section('Input Group — Prepend Addon', \`<div class="input-group">
            <span class="input-addon">https://</span>
            <input class="input" placeholder="example.com">
          </div>\`, code(\`<div class="input-group">\\n  <span class="input-addon">https://</span>\\n  <input class="input" placeholder="example.com">\\n</div>\`))}
        \${section('Input Group — Append Button', \`<div class="input-group">
            <input class="input" placeholder="Search...">
            <button class="btn">Search</button>
          </div>\`)}
        \${section('Input Group — Addon + Button', \`<div class="input-group">
            <span class="input-addon">$</span>
            <input class="input" type="number" placeholder="0.00">
            <button class="btn-outline">Send</button>
          </div>\`)}
        \${section('Input Group — Multiple Addons', \`<div class="input-group">
            <span class="input-addon">@</span>
            <input class="input" placeholder="username">
            <span class="input-addon">.example.com</span>
          </div>\`)}
      </div>
    </div>\`
}`,...l.parameters?.docs?.source}}};const i=["Input"];export{l as Input,i as __namedExportsOrder,t as default};
