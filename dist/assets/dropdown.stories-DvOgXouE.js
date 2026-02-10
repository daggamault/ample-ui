let D=0;const E=()=>`ample-dd-${++D}`,y=(e,n={})=>{if(e.hasAttribute("data-dropdown-init"))return;e.setAttribute("data-dropdown-init","");const p=E(),d=e.querySelector(".dropdown-trigger"),r=e.querySelector(".dropdown-menu");if(!d||!r)return;const c=()=>Array.from(r.querySelectorAll(".dropdown-item"));let a=-1,s=!1;d.id=d.id||`${p}-trigger`,r.id=r.id||`${p}-menu`,d.setAttribute("aria-haspopup","menu"),d.setAttribute("aria-expanded","false"),d.setAttribute("aria-controls",r.id),r.setAttribute("role","menu");for(const t of c())t.setAttribute("role","menuitem"),t.setAttribute("tabindex","-1");const b=()=>{for(const t of c())t.classList.remove("dropdown-item-active");a=-1,d.removeAttribute("aria-activedescendant")},l=t=>{const o=c();b(),!(t<0||t>=o.length)&&(a=t,o[t].classList.add("dropdown-item-active"),o[t].id=o[t].id||`${p}-item-${t}`,d.setAttribute("aria-activedescendant",o[t].id),o[t].scrollIntoView({block:"nearest"}))},v=()=>{s=!0,e.classList.add("dropdown-open"),d.setAttribute("aria-expanded","true"),a=-1},i=()=>{s=!1,e.classList.remove("dropdown-open"),d.setAttribute("aria-expanded","false"),b()},m=()=>{s?i():v()},g=t=>{const o=t.target.closest(".dropdown-item");if(!o||!r.contains(o))return;const k=o.getAttribute("data-value")??o.textContent?.trim()??"";n.onSelect?.(k),i(),d.focus()},f=t=>{if(!s){["ArrowDown","ArrowUp","Enter"," "].includes(t.key)&&(t.preventDefault(),v(),l(0));return}const o=c();switch(t.key){case"ArrowDown":t.preventDefault(),l(Math.min(a+1,o.length-1));break;case"ArrowUp":t.preventDefault(),l(Math.max(a-1,0));break;case"Home":t.preventDefault(),l(0);break;case"End":t.preventDefault(),l(o.length-1);break;case"Enter":case" ":t.preventDefault(),a>=0&&a<o.length&&o[a].click();break;case"Escape":t.preventDefault(),i(),d.focus();break;case"Tab":i();break}};d.addEventListener("click",m),r.addEventListener("click",g),e.addEventListener("keydown",f);const h=t=>{s&&!e.contains(t.target)&&i()};return document.addEventListener("click",h),{open:v,close:i,isOpen:()=>s,destroy:()=>{d.removeEventListener("click",m),r.removeEventListener("click",g),e.removeEventListener("keydown",f),document.removeEventListener("click",h),e.removeAttribute("data-dropdown-init"),e.classList.remove("dropdown-open")}}},$=(e=document)=>Array.from(e.querySelectorAll("[data-dropdown]:not([data-dropdown-init])")).map(n=>y(n)).filter(n=>n!=null),A=(e,...n)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${e}</p>
    ${n.join("")}
  </div>`,x=e=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,w='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',L={title:"Components/Dropdown",tags:["autodocs"],decorators:[e=>{const n=e();return requestAnimationFrame(()=>$()),n}]},u={render:()=>`
    <div class="flex flex-col gap-10" style="min-height: 20rem;">
      ${A("Basic",`<div class="flex gap-4 flex-wrap">
          <div class="dropdown" data-dropdown>
            <button class="btn dropdown-trigger">Options ${w}</button>
            <div class="dropdown-menu">
              <button class="dropdown-item" data-value="edit">Edit</button>
              <button class="dropdown-item" data-value="duplicate">Duplicate</button>
              <button class="dropdown-item" data-value="archive">Archive</button>
              <div class="dropdown-divider"></div>
              <button class="dropdown-item" data-value="delete" style="color: var(--color-error);">Delete</button>
            </div>
          </div>
          <div class="dropdown" data-dropdown>
            <button class="btn-outline dropdown-trigger">Actions ${w}</button>
            <div class="dropdown-menu">
              <div class="dropdown-header">Account</div>
              <button class="dropdown-item" data-value="profile">Profile</button>
              <button class="dropdown-item" data-value="settings">Settings</button>
              <div class="dropdown-divider"></div>
              <div class="dropdown-header">Other</div>
              <button class="dropdown-item" data-value="help">Help</button>
              <button class="dropdown-item" data-value="logout">Log Out</button>
            </div>
          </div>
        </div>`,x(`<div class="dropdown" data-dropdown>
  <button class="btn dropdown-trigger">Menu</button>
  <div class="dropdown-menu">
    <button class="dropdown-item" data-value="edit">Edit</button>
    <div class="dropdown-divider"></div>
    <button class="dropdown-item">Delete</button>
  </div>
</div>`))}
      ${A("Right Aligned",`<div class="flex justify-end">
          <div class="dropdown dropdown-end" data-dropdown>
            <button class="btn-ghost dropdown-trigger">More ${w}</button>
            <div class="dropdown-menu">
              <button class="dropdown-item" data-value="share">Share</button>
              <button class="dropdown-item" data-value="export">Export</button>
              <button class="dropdown-item" data-value="print">Print</button>
            </div>
          </div>
        </div>`,x(`<div class="dropdown dropdown-end" data-dropdown>
  <button class="btn-ghost dropdown-trigger">More</button>
  <div class="dropdown-menu">...</div>
</div>`))}
    </div>`};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10" style="min-height: 20rem;">
      \${section('Basic', \`<div class="flex gap-4 flex-wrap">
          <div class="dropdown" data-dropdown>
            <button class="btn dropdown-trigger">Options \${chevronSvg}</button>
            <div class="dropdown-menu">
              <button class="dropdown-item" data-value="edit">Edit</button>
              <button class="dropdown-item" data-value="duplicate">Duplicate</button>
              <button class="dropdown-item" data-value="archive">Archive</button>
              <div class="dropdown-divider"></div>
              <button class="dropdown-item" data-value="delete" style="color: var(--color-error);">Delete</button>
            </div>
          </div>
          <div class="dropdown" data-dropdown>
            <button class="btn-outline dropdown-trigger">Actions \${chevronSvg}</button>
            <div class="dropdown-menu">
              <div class="dropdown-header">Account</div>
              <button class="dropdown-item" data-value="profile">Profile</button>
              <button class="dropdown-item" data-value="settings">Settings</button>
              <div class="dropdown-divider"></div>
              <div class="dropdown-header">Other</div>
              <button class="dropdown-item" data-value="help">Help</button>
              <button class="dropdown-item" data-value="logout">Log Out</button>
            </div>
          </div>
        </div>\`, code(\`<div class="dropdown" data-dropdown>\\n  <button class="btn dropdown-trigger">Menu</button>\\n  <div class="dropdown-menu">\\n    <button class="dropdown-item" data-value="edit">Edit</button>\\n    <div class="dropdown-divider"></div>\\n    <button class="dropdown-item">Delete</button>\\n  </div>\\n</div>\`))}
      \${section('Right Aligned', \`<div class="flex justify-end">
          <div class="dropdown dropdown-end" data-dropdown>
            <button class="btn-ghost dropdown-trigger">More \${chevronSvg}</button>
            <div class="dropdown-menu">
              <button class="dropdown-item" data-value="share">Share</button>
              <button class="dropdown-item" data-value="export">Export</button>
              <button class="dropdown-item" data-value="print">Print</button>
            </div>
          </div>
        </div>\`, code(\`<div class="dropdown dropdown-end" data-dropdown>\\n  <button class="btn-ghost dropdown-trigger">More</button>\\n  <div class="dropdown-menu">...</div>\\n</div>\`))}
    </div>\`
}`,...u.parameters?.docs?.source}}};const S=["Dropdown"];export{u as Dropdown,S as __namedExportsOrder,L as default};
