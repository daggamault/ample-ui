const b=(a,t={})=>{if(a.hasAttribute("data-dialog-init"))return;a.setAttribute("data-dialog-init","");const i=a.getAttribute("data-dialog"),d=()=>{a.open||(a.showModal(),t.onOpen?.())},e=()=>{a.open&&(a.close(),t.onClose?.())},s=l=>{l.target===a&&e()},n=()=>{t.onClose?.()};a.addEventListener("click",s),a.addEventListener("close",n);const c=a.querySelectorAll("[data-dialog-close]"),g=()=>e();for(const l of c)l.addEventListener("click",g);if(i){const l=document.querySelectorAll(`[data-dialog-trigger="${i}"]`);for(const r of l)r.addEventListener("click",()=>d())}return{open:d,close:e,isOpen:()=>a.open,destroy:()=>{a.open&&a.close(),a.removeEventListener("click",s),a.removeEventListener("close",n);for(const l of c)l.removeEventListener("click",g);a.removeAttribute("data-dialog-init")}}},u=(a=document)=>Array.from(a.querySelectorAll("dialog[data-dialog]:not([data-dialog-init])")).map(t=>b(t)).filter(t=>t!=null),p=(a,...t)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${a}</p>
    ${t.join("")}
  </div>`,m=a=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,v={title:"Components/Dialog",tags:["autodocs"],decorators:[a=>{const t=a();return requestAnimationFrame(()=>u()),t}]},o={render:()=>`
    <div class="flex flex-col gap-10">
      ${p("Native Dialog",`<div class="flex gap-3 flex-wrap">
          <button class="btn" data-dialog-trigger="demo-default">Open Dialog</button>
          <button class="btn-outline" data-dialog-trigger="demo-sm">Small Dialog</button>
          <button class="btn-outline" data-dialog-trigger="demo-lg">Large Dialog</button>
        </div>`,m(`<button data-dialog-trigger="my-dialog">Open</button>

<dialog class="dialog" data-dialog="my-dialog">
  <div class="dialog-header">
    <span class="dialog-title">Title</span>
    <button class="dialog-close" data-dialog-close>&times;</button>
  </div>
  <div class="dialog-body">Content</div>
  <div class="dialog-footer">
    <button class="btn" data-dialog-close>Close</button>
  </div>
</dialog>`))}

      <dialog class="dialog" data-dialog="demo-default" aria-labelledby="dialog-title-default">
        <div class="dialog-header">
          <span class="dialog-title" id="dialog-title-default">Confirm Action</span>
          <button class="dialog-close" data-dialog-close aria-label="Close">&times;</button>
        </div>
        <div class="dialog-body">
          <p class="text-sm text-text-muted">Are you sure you want to proceed? This action cannot be undone. Press Escape or use the buttons below to close.</p>
        </div>
        <div class="dialog-footer">
          <button class="btn-ghost" data-dialog-close>Cancel</button>
          <button class="btn" data-dialog-close>Confirm</button>
        </div>
      </dialog>

      <dialog class="dialog dialog-sm" data-dialog="demo-sm" aria-labelledby="dialog-title-sm">
        <div class="dialog-header">
          <span class="dialog-title" id="dialog-title-sm">Small Dialog</span>
          <button class="dialog-close" data-dialog-close aria-label="Close">&times;</button>
        </div>
        <div class="dialog-body">
          <p class="text-sm text-text-muted">A compact dialog with max-width of 24rem. Uses the native HTML dialog element with showModal() for built-in focus trapping and accessibility.</p>
        </div>
        <div class="dialog-footer">
          <button class="btn btn-sm" data-dialog-close>Got it</button>
        </div>
      </dialog>

      <dialog class="dialog dialog-lg" data-dialog="demo-lg" aria-labelledby="dialog-title-lg">
        <div class="dialog-header">
          <span class="dialog-title" id="dialog-title-lg">Large Dialog</span>
          <button class="dialog-close" data-dialog-close aria-label="Close">&times;</button>
        </div>
        <div class="dialog-body">
          <p class="text-sm text-text-muted">A large dialog with max-width of 42rem. The native dialog element provides built-in focus trapping, Escape to close, and top-layer rendering — no z-index management needed.</p>
          <div class="field mt-4">
            <label class="label">Example Input</label>
            <input type="text" class="input" placeholder="Focus is trapped natively by the browser" />
          </div>
        </div>
        <div class="dialog-footer">
          <button class="btn-ghost" data-dialog-close>Cancel</button>
          <button class="btn" data-dialog-close>Save</button>
        </div>
      </dialog>
    </div>`};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10">
      \${section('Native Dialog', \`<div class="flex gap-3 flex-wrap">
          <button class="btn" data-dialog-trigger="demo-default">Open Dialog</button>
          <button class="btn-outline" data-dialog-trigger="demo-sm">Small Dialog</button>
          <button class="btn-outline" data-dialog-trigger="demo-lg">Large Dialog</button>
        </div>\`, code(\`<button data-dialog-trigger="my-dialog">Open</button>\\n\\n<dialog class="dialog" data-dialog="my-dialog">\\n  <div class="dialog-header">\\n    <span class="dialog-title">Title</span>\\n    <button class="dialog-close" data-dialog-close>&times;</button>\\n  </div>\\n  <div class="dialog-body">Content</div>\\n  <div class="dialog-footer">\\n    <button class="btn" data-dialog-close>Close</button>\\n  </div>\\n</dialog>\`))}

      <dialog class="dialog" data-dialog="demo-default" aria-labelledby="dialog-title-default">
        <div class="dialog-header">
          <span class="dialog-title" id="dialog-title-default">Confirm Action</span>
          <button class="dialog-close" data-dialog-close aria-label="Close">&times;</button>
        </div>
        <div class="dialog-body">
          <p class="text-sm text-text-muted">Are you sure you want to proceed? This action cannot be undone. Press Escape or use the buttons below to close.</p>
        </div>
        <div class="dialog-footer">
          <button class="btn-ghost" data-dialog-close>Cancel</button>
          <button class="btn" data-dialog-close>Confirm</button>
        </div>
      </dialog>

      <dialog class="dialog dialog-sm" data-dialog="demo-sm" aria-labelledby="dialog-title-sm">
        <div class="dialog-header">
          <span class="dialog-title" id="dialog-title-sm">Small Dialog</span>
          <button class="dialog-close" data-dialog-close aria-label="Close">&times;</button>
        </div>
        <div class="dialog-body">
          <p class="text-sm text-text-muted">A compact dialog with max-width of 24rem. Uses the native HTML dialog element with showModal() for built-in focus trapping and accessibility.</p>
        </div>
        <div class="dialog-footer">
          <button class="btn btn-sm" data-dialog-close>Got it</button>
        </div>
      </dialog>

      <dialog class="dialog dialog-lg" data-dialog="demo-lg" aria-labelledby="dialog-title-lg">
        <div class="dialog-header">
          <span class="dialog-title" id="dialog-title-lg">Large Dialog</span>
          <button class="dialog-close" data-dialog-close aria-label="Close">&times;</button>
        </div>
        <div class="dialog-body">
          <p class="text-sm text-text-muted">A large dialog with max-width of 42rem. The native dialog element provides built-in focus trapping, Escape to close, and top-layer rendering — no z-index management needed.</p>
          <div class="field mt-4">
            <label class="label">Example Input</label>
            <input type="text" class="input" placeholder="Focus is trapped natively by the browser" />
          </div>
        </div>
        <div class="dialog-footer">
          <button class="btn-ghost" data-dialog-close>Cancel</button>
          <button class="btn" data-dialog-close>Save</button>
        </div>
      </dialog>
    </div>\`
}`,...o.parameters?.docs?.source}}};const f=["Dialog"];export{o as Dialog,f as __namedExportsOrder,v as default};
