const a=(i,...t)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${i}</p>
    ${t.join("")}
  </div>`,c=i=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${i.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,s='<svg class="alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>',l='<svg class="alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/></svg>',r='<svg class="alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg>',n='<svg class="alert-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>',d={title:"Components/Alert",tags:["autodocs"]},e={render:()=>`
    <div class="flex flex-col gap-10 max-w-lg">
      ${a("Variants",`<div class="flex flex-col gap-3">
          <div class="alert">${s}<div class="alert-content">This is a default info alert.</div></div>
          <div class="alert-primary">${s}<div class="alert-content">This is a primary alert.</div></div>
          <div class="alert-secondary">${s}<div class="alert-content">This is a secondary alert.</div></div>
          <div class="alert-warning">${l}<div class="alert-content">This is a warning alert.</div></div>
          <div class="alert-error">${r}<div class="alert-content">This is an error alert.</div></div>
          <div class="alert-success">${n}<div class="alert-content">This is a success alert.</div></div>
          <div class="alert-info">${s}<div class="alert-content">This is an info alert.</div></div>
        </div>`,c(`<div class="alert">
  <svg class="alert-icon">...</svg>
  <div class="alert-content">Message</div>
</div>`))}
      ${a("With Title",`<div class="flex flex-col gap-3">
          <div class="alert-success">
            ${n}
            <div class="alert-content">
              <div class="alert-title">Success!</div>
              Your changes have been saved successfully.
            </div>
          </div>
          <div class="alert-error">
            ${r}
            <div class="alert-content">
              <div class="alert-title">Error</div>
              Something went wrong. Please try again later.
            </div>
          </div>
        </div>`)}
      ${a("Dismissible",`<div class="alert-warning">
          ${l}
          <div class="alert-content">
            <div class="alert-title">Warning</div>
            Your session will expire in 5 minutes.
          </div>
          <button class="alert-dismiss" aria-label="Dismiss">&times;</button>
        </div>`)}
    </div>`};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10 max-w-lg">
      \${section('Variants', \`<div class="flex flex-col gap-3">
          <div class="alert">\${infoSvg}<div class="alert-content">This is a default info alert.</div></div>
          <div class="alert-primary">\${infoSvg}<div class="alert-content">This is a primary alert.</div></div>
          <div class="alert-secondary">\${infoSvg}<div class="alert-content">This is a secondary alert.</div></div>
          <div class="alert-warning">\${warnSvg}<div class="alert-content">This is a warning alert.</div></div>
          <div class="alert-error">\${errorSvg}<div class="alert-content">This is an error alert.</div></div>
          <div class="alert-success">\${successSvg}<div class="alert-content">This is a success alert.</div></div>
          <div class="alert-info">\${infoSvg}<div class="alert-content">This is an info alert.</div></div>
        </div>\`, code(\`<div class="alert">\\n  <svg class="alert-icon">...</svg>\\n  <div class="alert-content">Message</div>\\n</div>\`))}
      \${section('With Title', \`<div class="flex flex-col gap-3">
          <div class="alert-success">
            \${successSvg}
            <div class="alert-content">
              <div class="alert-title">Success!</div>
              Your changes have been saved successfully.
            </div>
          </div>
          <div class="alert-error">
            \${errorSvg}
            <div class="alert-content">
              <div class="alert-title">Error</div>
              Something went wrong. Please try again later.
            </div>
          </div>
        </div>\`)}
      \${section('Dismissible', \`<div class="alert-warning">
          \${warnSvg}
          <div class="alert-content">
            <div class="alert-title">Warning</div>
            Your session will expire in 5 minutes.
          </div>
          <button class="alert-dismiss" aria-label="Dismiss">&times;</button>
        </div>\`)}
    </div>\`
}`,...e.parameters?.docs?.source}}};const o=["Alert"];export{e as Alert,o as __namedExportsOrder,d as default};
