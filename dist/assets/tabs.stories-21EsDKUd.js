let h=0;const w=()=>`ample-tabs-${++h}`,f=(e,i={})=>{if(e.hasAttribute("data-tabs-init"))return;e.setAttribute("data-tabs-init","");const v=w(),p=e.querySelector(".tab-list"),s=Array.from(e.querySelectorAll("[data-tab]")),m=Array.from(e.querySelectorAll("[data-tab-panel]"));if(!p||s.length===0)return;p.setAttribute("role","tablist");const c=new Map;for(const t of m){const a=t.getAttribute("data-tab-panel");t.id=t.id||`${v}-panel-${a}`,t.setAttribute("role","tabpanel"),t.setAttribute("tabindex","0"),c.set(a,t)}s.forEach((t,a)=>{const d=t.getAttribute("data-tab"),n=c.get(d);t.id=t.id||`${v}-tab-${a}`,t.setAttribute("role","tab"),n&&(t.setAttribute("aria-controls",n.id),n.setAttribute("aria-labelledby",t.id))});const l=t=>{for(const a of s){const d=a.getAttribute("data-tab")===t;a.classList.toggle("tab-active",d),a.setAttribute("aria-selected",String(d)),a.setAttribute("tabindex",d?"0":"-1")}for(const[a,d]of c)d.hidden=a!==t;i.onChange?.(t)},g=s.find(t=>t.classList.contains("tab-active"))??s[0];l(g.getAttribute("data-tab"));const u=t=>{const a=t.target.closest("[data-tab]");a&&s.includes(a)&&l(a.getAttribute("data-tab"))},x=t=>{const a=t.target.closest("[data-tab]");if(!a||!s.includes(a))return;const d=s.indexOf(a);let n=-1;switch(t.key){case"ArrowRight":t.preventDefault(),n=(d+1)%s.length;break;case"ArrowLeft":t.preventDefault(),n=(d-1+s.length)%s.length;break;case"Home":t.preventDefault(),n=0;break;case"End":t.preventDefault(),n=s.length-1;break}n>=0&&(s[n].focus(),l(s[n].getAttribute("data-tab")))};return e.addEventListener("click",u),e.addEventListener("keydown",x),{activate:l,destroy:()=>{e.removeEventListener("click",u),e.removeEventListener("keydown",x),e.removeAttribute("data-tabs-init")}}},y=(e=document)=>Array.from(e.querySelectorAll("[data-tabs]:not([data-tabs-init])")).map(i=>f(i)).filter(i=>i!=null),o=(e,...i)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${e}</p>
    ${i.join("")}
  </div>`,r=e=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,A={title:"Components/Tabs",tags:["autodocs"],decorators:[e=>{const i=e();return requestAnimationFrame(()=>y()),i}]},b={render:()=>`
    <div class="flex flex-col gap-10 max-w-lg">
      ${o("Basic",`<div class="tabs" data-tabs>
          <div class="tab-list">
            <button class="tab tab-active" data-tab="overview">Overview</button>
            <button class="tab" data-tab="features">Features</button>
            <button class="tab" data-tab="pricing">Pricing</button>
          </div>
          <div class="tab-panel" data-tab-panel="overview">
            <p class="text-sm text-text-muted">This is the overview panel. Click the tabs or use arrow keys to navigate between panels.</p>
          </div>
          <div class="tab-panel" data-tab-panel="features">
            <p class="text-sm text-text-muted">Feature highlights go here. Tabs support full keyboard navigation with arrow keys, Home, and End.</p>
          </div>
          <div class="tab-panel" data-tab-panel="pricing">
            <p class="text-sm text-text-muted">Pricing details would be displayed in this panel.</p>
          </div>
        </div>`,r(`<div class="tabs" data-tabs>
  <div class="tab-list">
    <button class="tab tab-active" data-tab="panel-id">Tab</button>
  </div>
  <div class="tab-panel" data-tab-panel="panel-id">Content</div>
</div>`))}
      ${o("Boxed Variant",`<div class="tabs tabs-boxed" data-tabs>
          <div class="tab-list">
            <button class="tab tab-active" data-tab="day">Day</button>
            <button class="tab" data-tab="week">Week</button>
            <button class="tab" data-tab="month">Month</button>
          </div>
          <div class="tab-panel" data-tab-panel="day">
            <p class="text-sm text-text-muted">Viewing daily breakdown. The boxed variant uses a subtle background and rounded active indicator.</p>
          </div>
          <div class="tab-panel" data-tab-panel="week">
            <p class="text-sm text-text-muted">Viewing weekly summary.</p>
          </div>
          <div class="tab-panel" data-tab-panel="month">
            <p class="text-sm text-text-muted">Viewing monthly overview.</p>
          </div>
        </div>`,r(`<div class="tabs tabs-boxed" data-tabs>
  <div class="tab-list">
    <button class="tab" data-tab="id">Tab</button>
  </div>
  <div class="tab-panel" data-tab-panel="id">Content</div>
</div>`))}
      ${o("Pill Variant",`<div class="tabs tabs-pill" data-tabs>
          <div class="tab-list">
            <button class="tab tab-active" data-tab="all">All</button>
            <button class="tab" data-tab="active">Active</button>
            <button class="tab" data-tab="archived">Archived</button>
          </div>
          <div class="tab-panel" data-tab-panel="all">
            <p class="text-sm text-text-muted">Showing all items. The pill variant uses fully rounded tabs with a solid primary active state.</p>
          </div>
          <div class="tab-panel" data-tab-panel="active">
            <p class="text-sm text-text-muted">Showing active items only.</p>
          </div>
          <div class="tab-panel" data-tab-panel="archived">
            <p class="text-sm text-text-muted">Showing archived items.</p>
          </div>
        </div>`,r(`<div class="tabs tabs-pill" data-tabs>
  <div class="tab-list">
    <button class="tab" data-tab="id">Tab</button>
  </div>
  <div class="tab-panel" data-tab-panel="id">Content</div>
</div>`))}
    </div>`};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10 max-w-lg">
      \${section('Basic', \`<div class="tabs" data-tabs>
          <div class="tab-list">
            <button class="tab tab-active" data-tab="overview">Overview</button>
            <button class="tab" data-tab="features">Features</button>
            <button class="tab" data-tab="pricing">Pricing</button>
          </div>
          <div class="tab-panel" data-tab-panel="overview">
            <p class="text-sm text-text-muted">This is the overview panel. Click the tabs or use arrow keys to navigate between panels.</p>
          </div>
          <div class="tab-panel" data-tab-panel="features">
            <p class="text-sm text-text-muted">Feature highlights go here. Tabs support full keyboard navigation with arrow keys, Home, and End.</p>
          </div>
          <div class="tab-panel" data-tab-panel="pricing">
            <p class="text-sm text-text-muted">Pricing details would be displayed in this panel.</p>
          </div>
        </div>\`, code(\`<div class="tabs" data-tabs>\\n  <div class="tab-list">\\n    <button class="tab tab-active" data-tab="panel-id">Tab</button>\\n  </div>\\n  <div class="tab-panel" data-tab-panel="panel-id">Content</div>\\n</div>\`))}
      \${section('Boxed Variant', \`<div class="tabs tabs-boxed" data-tabs>
          <div class="tab-list">
            <button class="tab tab-active" data-tab="day">Day</button>
            <button class="tab" data-tab="week">Week</button>
            <button class="tab" data-tab="month">Month</button>
          </div>
          <div class="tab-panel" data-tab-panel="day">
            <p class="text-sm text-text-muted">Viewing daily breakdown. The boxed variant uses a subtle background and rounded active indicator.</p>
          </div>
          <div class="tab-panel" data-tab-panel="week">
            <p class="text-sm text-text-muted">Viewing weekly summary.</p>
          </div>
          <div class="tab-panel" data-tab-panel="month">
            <p class="text-sm text-text-muted">Viewing monthly overview.</p>
          </div>
        </div>\`, code(\`<div class="tabs tabs-boxed" data-tabs>\\n  <div class="tab-list">\\n    <button class="tab" data-tab="id">Tab</button>\\n  </div>\\n  <div class="tab-panel" data-tab-panel="id">Content</div>\\n</div>\`))}
      \${section('Pill Variant', \`<div class="tabs tabs-pill" data-tabs>
          <div class="tab-list">
            <button class="tab tab-active" data-tab="all">All</button>
            <button class="tab" data-tab="active">Active</button>
            <button class="tab" data-tab="archived">Archived</button>
          </div>
          <div class="tab-panel" data-tab-panel="all">
            <p class="text-sm text-text-muted">Showing all items. The pill variant uses fully rounded tabs with a solid primary active state.</p>
          </div>
          <div class="tab-panel" data-tab-panel="active">
            <p class="text-sm text-text-muted">Showing active items only.</p>
          </div>
          <div class="tab-panel" data-tab-panel="archived">
            <p class="text-sm text-text-muted">Showing archived items.</p>
          </div>
        </div>\`, code(\`<div class="tabs tabs-pill" data-tabs>\\n  <div class="tab-list">\\n    <button class="tab" data-tab="id">Tab</button>\\n  </div>\\n  <div class="tab-panel" data-tab-panel="id">Content</div>\\n</div>\`))}
    </div>\`
}`,...b.parameters?.docs?.source}}};const k=["Tabs"];export{b as Tabs,k as __namedExportsOrder,A as default};
