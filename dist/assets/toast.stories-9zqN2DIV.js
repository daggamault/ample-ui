const b=new Map,v=a=>{const o=b.get(a);if(o&&document.body.contains(o))return o;const t=document.createElement("div");t.className="toast-container",t.setAttribute("aria-live","polite"),t.setAttribute("aria-atomic","false");const n={tl:"toast-container-tl",bl:"toast-container-bl",br:"toast-container-br"};return n[a]&&t.classList.add(n[a]),document.body.appendChild(t),b.set(a,t),t},f=a=>{const{message:o,variant:t="toast",duration:n=5e3,position:i="tr",dismissible:d=!0}=a,c=v(i),s=document.createElement("div");s.className=t,s.setAttribute("role","status");const l=document.createElement("span");l.className="toast-content",l.textContent=o,s.appendChild(l);let g=!1,u;const m=()=>{if(g)return;g=!0,u&&clearTimeout(u),s.classList.remove("toast-enter"),s.classList.add("toast-exit");const e=()=>{s.removeEventListener("transitionend",e),s.remove(),c.children.length===0&&(c.remove(),b.delete(i))};s.addEventListener("transitionend",e),setTimeout(e,500)};if(d){const e=document.createElement("button");e.className="toast-close",e.innerHTML="&times;",e.setAttribute("aria-label","Dismiss"),e.addEventListener("click",m),s.appendChild(e)}return c.appendChild(s),requestAnimationFrame(()=>{requestAnimationFrame(()=>{s.classList.add("toast-enter")})}),n>0&&(u=setTimeout(m,n)),{dismiss:m}},p=(a,...o)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${a}</p>
    ${o.join("")}
  </div>`,x=a=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,h={title:"Components/Toast",tags:["autodocs"],decorators:[a=>{const o=a();return requestAnimationFrame(()=>{document.querySelectorAll("[data-toast-demo]").forEach(t=>{t.addEventListener("click",()=>{const n=t.getAttribute("data-toast-variant")??"toast",i=t.getAttribute("data-toast-message")??"Toast notification",d=t.getAttribute("data-toast-position")??"tr";f({message:i,variant:n,position:d})})})}),o}]},r={render:()=>`
    <div class="flex flex-col gap-10">
      ${p("Variants",`<div class="flex gap-3 flex-wrap">
          <button class="btn" data-toast-demo data-toast-variant="toast" data-toast-message="Default notification">Default</button>
          <button class="btn" data-toast-demo data-toast-variant="toast-primary" data-toast-message="Primary notification">Primary</button>
          <button class="btn-secondary" data-toast-demo data-toast-variant="toast-secondary" data-toast-message="Secondary notification">Secondary</button>
          <button class="btn-success" data-toast-demo data-toast-variant="toast-success" data-toast-message="Changes saved successfully!">Success</button>
          <button class="btn-error" data-toast-demo data-toast-variant="toast-error" data-toast-message="Something went wrong!">Error</button>
          <button class="btn-warning" data-toast-demo data-toast-variant="toast-warning" data-toast-message="Please check your input.">Warning</button>
          <button class="btn-info" data-toast-demo data-toast-variant="toast-info" data-toast-message="New update available.">Info</button>
        </div>`,x(`import { toast } from 'ample-ui/toast';

toast({ message: 'Saved!', variant: 'toast-success' });
toast({ message: 'Error!', variant: 'toast-error', duration: 8000 });`))}
      ${p("Positions",`<div class="flex gap-3 flex-wrap">
          <button class="btn-outline" data-toast-demo data-toast-variant="toast" data-toast-message="Top right (default)" data-toast-position="tr">Top Right</button>
          <button class="btn-outline" data-toast-demo data-toast-variant="toast" data-toast-message="Top left" data-toast-position="tl">Top Left</button>
          <button class="btn-outline" data-toast-demo data-toast-variant="toast" data-toast-message="Bottom left" data-toast-position="bl">Bottom Left</button>
          <button class="btn-outline" data-toast-demo data-toast-variant="toast" data-toast-message="Bottom right" data-toast-position="br">Bottom Right</button>
        </div>`)}
    </div>`};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10">
      \${section('Variants', \`<div class="flex gap-3 flex-wrap">
          <button class="btn" data-toast-demo data-toast-variant="toast" data-toast-message="Default notification">Default</button>
          <button class="btn" data-toast-demo data-toast-variant="toast-primary" data-toast-message="Primary notification">Primary</button>
          <button class="btn-secondary" data-toast-demo data-toast-variant="toast-secondary" data-toast-message="Secondary notification">Secondary</button>
          <button class="btn-success" data-toast-demo data-toast-variant="toast-success" data-toast-message="Changes saved successfully!">Success</button>
          <button class="btn-error" data-toast-demo data-toast-variant="toast-error" data-toast-message="Something went wrong!">Error</button>
          <button class="btn-warning" data-toast-demo data-toast-variant="toast-warning" data-toast-message="Please check your input.">Warning</button>
          <button class="btn-info" data-toast-demo data-toast-variant="toast-info" data-toast-message="New update available.">Info</button>
        </div>\`, code(\`import { toast } from 'ample-ui/toast';\\n\\ntoast({ message: 'Saved!', variant: 'toast-success' });\\ntoast({ message: 'Error!', variant: 'toast-error', duration: 8000 });\`))}
      \${section('Positions', \`<div class="flex gap-3 flex-wrap">
          <button class="btn-outline" data-toast-demo data-toast-variant="toast" data-toast-message="Top right (default)" data-toast-position="tr">Top Right</button>
          <button class="btn-outline" data-toast-demo data-toast-variant="toast" data-toast-message="Top left" data-toast-position="tl">Top Left</button>
          <button class="btn-outline" data-toast-demo data-toast-variant="toast" data-toast-message="Bottom left" data-toast-position="bl">Bottom Left</button>
          <button class="btn-outline" data-toast-demo data-toast-variant="toast" data-toast-message="Bottom right" data-toast-position="br">Bottom Right</button>
        </div>\`)}
    </div>\`
}`,...r.parameters?.docs?.source}}};const y=["Toast"];export{r as Toast,y as __namedExportsOrder,h as default};
