const _='<svg class="select-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6l4 4 4-4"/></svg>';let z=0;const Q=()=>`ample-sel-${++z}`,Y=(t,c={})=>{if(t.hasAttribute("data-select-init"))return;t.setAttribute("data-select-init","");const p=t.hasAttribute("data-multiple"),I=t.hasAttribute("data-search"),U=t.getAttribute("data-placeholder")??"Select...",C=Q(),L=[],h=new Map,f=new Map;let m;for(const e of Array.from(t.children)){if(e.hasAttribute("data-group")){m=e.getAttribute("data-group")??void 0;continue}const a=e.getAttribute("data-value");if(!a)continue;const d=e.textContent?.trim()??a,i={value:a,label:d,group:m};L.push(i),h.set(a,i),m&&(f.has(m)||f.set(m,[]),f.get(m).push(i))}const H=t.getAttribute("data-value")?.split(",").map(e=>e.trim()).filter(Boolean)??[];let v=new Set(H.filter(e=>h.has(e))),o=-1,y=!1;t.innerHTML="",t.classList.add("select");const s=document.createElement("button");s.type="button",s.className="select-trigger",s.id=`${C}-trigger`,s.setAttribute("role","combobox"),s.setAttribute("aria-haspopup","listbox"),s.setAttribute("aria-expanded","false"),s.setAttribute("aria-controls",`${C}-listbox`);const g=document.createElement("div");g.className="select-dropdown",g.id=`${C}-listbox`,g.setAttribute("role","listbox"),p&&g.setAttribute("aria-multiselectable","true");let n=null;I&&(n=document.createElement("input"),n.type="text",n.className="select-search",n.placeholder="Search...",n.setAttribute("autocomplete","off"),n.setAttribute("aria-label","Filter options"),g.appendChild(n));const u=document.createElement("div");u.className="select-options",g.appendChild(u);const x=document.createElement("div");x.className="select-empty",x.textContent="No results",x.style.display="none",u.appendChild(x);const A=[],G=[],K=f.size>0,T=L.filter(e=>!e.group),q=()=>{if(K){for(const a of T)u.appendChild(N(a));let e=T.length===0;for(const[a,d]of f){let i=null;e||(i=document.createElement("div"),i.className="select-divider",u.appendChild(i));const l=document.createElement("div");l.className="select-group-label",l.textContent=a,u.appendChild(l),G.push({label:l,divider:i,name:a});for(const r of d)u.appendChild(N(r));e=!1}}else for(const e of L)u.appendChild(N(e))},N=e=>{const a=document.createElement("div");if(a.className="select-option",a.id=`${C}-opt-${e.value}`,a.setAttribute("role","option"),a.setAttribute("data-value",e.value),a.setAttribute("aria-selected",String(v.has(e.value))),p){const i=document.createElement("span");i.className="select-check",a.appendChild(i)}const d=document.createElement("span");return d.textContent=e.label,a.appendChild(d),v.has(e.value)&&a.classList.add("select-option-selected"),a.addEventListener("click",i=>{i.stopPropagation(),$(e.value)}),A.push(a),a};q(),t.appendChild(s),t.appendChild(g);const M=()=>{if(s.innerHTML="",p&&v.size>0){const e=document.createElement("div");e.className="select-tags";for(const a of v){const d=h.get(a);if(!d)continue;const i=document.createElement("span");i.className="select-tag",i.textContent=d.label;const l=document.createElement("button");l.type="button",l.className="select-tag-remove",l.innerHTML="&times;",l.setAttribute("aria-label",`Remove ${d.label}`),l.addEventListener("click",r=>{r.stopPropagation(),$(a)}),i.appendChild(l),e.appendChild(i)}s.appendChild(e)}else if(!p&&v.size===1){const e=[...v][0],a=h.get(e),d=document.createElement("span");d.className="select-value",d.textContent=a?.label??e,s.appendChild(d)}else{const e=document.createElement("span");e.className="select-placeholder",e.textContent=U,s.appendChild(e)}s.insertAdjacentHTML("beforeend",_)},$=e=>{p?v.has(e)?v.delete(e):v.add(e):(v=new Set([e]),S()),j(),M(),c.onChange?.(p?[...v]:[...v][0]??"")},j=()=>{for(const e of A){const a=e.getAttribute("data-value"),d=v.has(a);e.classList.toggle("select-option-selected",d),e.setAttribute("aria-selected",String(d))}},F=()=>{y=!0,t.classList.add("select-open"),s.setAttribute("aria-expanded","true"),o=-1,k(),n&&(n.value="",D(""),requestAnimationFrame(()=>n.focus()))},S=()=>{y=!1,t.classList.remove("select-open"),s.setAttribute("aria-expanded","false"),o=-1,B(),k()},R=()=>A.filter(e=>!e.classList.contains("select-option-hidden")),k=()=>{const e=R(),a=o>=0&&o<e.length?e[o].id:"";s.setAttribute("aria-activedescendant",a)},P=e=>{B();const a=R();e<0||e>=a.length||(o=e,a[e].classList.add("select-option-focused"),a[e].scrollIntoView({block:"nearest"}),k())},B=()=>{for(const e of A)e.classList.remove("select-option-focused")},D=e=>{const a=e.toLowerCase();let d=0;const i=new Set;for(const l of A){const r=h.get(l.getAttribute("data-value")),O=!a||r.label.toLowerCase().includes(a);l.classList.toggle("select-option-hidden",!O),O&&(d++,r.group&&i.add(r.group))}for(const l of G){const r=i.has(l.name);l.label.style.display=r?"":"none",l.divider&&(l.divider.style.display=r?"":"none")}x.style.display=d===0?"":"none",o=-1,B(),k()};s.addEventListener("click",()=>{y?S():F()}),n?.addEventListener("input",()=>{D(n.value)});const J=e=>{if(!y){["ArrowDown","ArrowUp","Enter"," "].includes(e.key)&&(e.preventDefault(),F());return}const a=R();switch(e.key){case"ArrowDown":e.preventDefault(),P(Math.min(o+1,a.length-1));break;case"ArrowUp":e.preventDefault(),P(Math.max(o-1,0));break;case"Enter":case" ":if(n&&e.key===" "&&document.activeElement===n)break;e.preventDefault(),o>=0&&o<a.length&&$(a[o].getAttribute("data-value"));break;case"Escape":e.preventDefault(),S(),s.focus();break;case"Tab":S();break}};t.addEventListener("keydown",J);const V=e=>{y&&!t.contains(e.target)&&S()};return document.addEventListener("click",V),M(),{getValue:()=>p?[...v]:[...v][0]??"",setValue:e=>{const a=Array.isArray(e)?e:[e];v=new Set(a.filter(d=>h.has(d))),j(),M()},destroy:()=>{document.removeEventListener("click",V),t.removeAttribute("data-select-init"),t.classList.remove("select","select-open"),t.innerHTML=""}}},W=(t=document)=>Array.from(t.querySelectorAll("[data-select]:not([data-select-init])")).map(c=>Y(c)).filter(c=>c!=null),b=(t,...c)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${t}</p>
    ${c.join("")}
  </div>`,w=t=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,X={title:"Components/Select",tags:["autodocs"],decorators:[t=>{const c=t();return requestAnimationFrame(()=>W()),c}]},E={render:()=>`
    <div class="flex flex-col gap-10">
      <div class="grid grid-cols-[1fr_1fr] gap-x-10 gap-y-10 max-w-2xl">
        ${b("Basic",`<div class="field">
            <label class="label">Framework</label>
            <div data-select data-placeholder="Choose a framework...">
              <div data-value="react">React</div>
              <div data-value="vue">Vue</div>
              <div data-value="angular">Angular</div>
              <div data-value="svelte">Svelte</div>
              <div data-value="solid">SolidJS</div>
            </div>
          </div>`,w(`<div data-select data-placeholder="Choose...">
  <div data-value="react">React</div>
  <div data-value="vue">Vue</div>
</div>`))}
        ${b("Pre-selected",`<div class="field">
            <label class="label">Language</label>
            <div data-select data-value="ts" data-placeholder="Choose a language...">
              <div data-value="js">JavaScript</div>
              <div data-value="ts">TypeScript</div>
              <div data-value="py">Python</div>
              <div data-value="rs">Rust</div>
              <div data-value="go">Go</div>
            </div>
          </div>`)}
        ${b("Searchable",`<div class="field">
            <label class="label">Country</label>
            <div data-select data-search data-placeholder="Search countries...">
              <div data-value="us">United States</div>
              <div data-value="uk">United Kingdom</div>
              <div data-value="ca">Canada</div>
              <div data-value="au">Australia</div>
              <div data-value="de">Germany</div>
              <div data-value="fr">France</div>
              <div data-value="jp">Japan</div>
              <div data-value="kr">South Korea</div>
              <div data-value="br">Brazil</div>
              <div data-value="mx">Mexico</div>
              <div data-value="in">India</div>
              <div data-value="cn">China</div>
            </div>
          </div>`,w(`<div data-select data-search>
  <div data-value="us">United States</div>
  ...
</div>`))}
        ${b("Grouped",`<div class="field">
            <label class="label">Technology</label>
            <div data-select data-search data-placeholder="Choose a technology...">
              <div data-group="Frontend"></div>
              <div data-value="react">React</div>
              <div data-value="vue">Vue</div>
              <div data-value="angular">Angular</div>
              <div data-value="svelte">Svelte</div>
              <div data-group="Backend"></div>
              <div data-value="node">Node.js</div>
              <div data-value="django">Django</div>
              <div data-value="rails">Rails</div>
              <div data-value="go-be">Go</div>
              <div data-group="Database"></div>
              <div data-value="postgres">PostgreSQL</div>
              <div data-value="mysql">MySQL</div>
              <div data-value="mongo">MongoDB</div>
              <div data-value="redis">Redis</div>
            </div>
          </div>`,w(`<div data-select data-search>
  <div data-group="Frontend"></div>
  <div data-value="react">React</div>
  <div data-group="Backend"></div>
  <div data-value="node">Node.js</div>
</div>`))}
      </div>

      <div class="grid grid-cols-[1fr_1fr] gap-x-10 gap-y-10 max-w-2xl">
        ${b("Multi-select",`<div class="field">
            <label class="label">Technologies</label>
            <div data-select data-multiple data-search data-placeholder="Select technologies...">
              <div data-value="react">React</div>
              <div data-value="vue">Vue</div>
              <div data-value="angular">Angular</div>
              <div data-value="svelte">Svelte</div>
              <div data-value="next">Next.js</div>
              <div data-value="nuxt">Nuxt</div>
              <div data-value="astro">Astro</div>
            </div>
          </div>`,w(`<div data-select data-multiple data-search>
  <div data-value="react">React</div>
  ...
</div>`))}
        ${b("Multi-select — Pre-selected",`<div class="field">
            <label class="label">Favorite Colors</label>
            <div data-select data-multiple data-value="blue,green" data-placeholder="Pick colors...">
              <div data-value="red">Red</div>
              <div data-value="blue">Blue</div>
              <div data-value="green">Green</div>
              <div data-value="yellow">Yellow</div>
              <div data-value="purple">Purple</div>
            </div>
          </div>`)}
        ${b("Grouped Multi-select",`<div class="field">
            <label class="label">Build Your Stack</label>
            <div data-select data-multiple data-search data-placeholder="Build your stack...">
              <div data-group="Languages"></div>
              <div data-value="ts">TypeScript</div>
              <div data-value="py">Python</div>
              <div data-value="rs">Rust</div>
              <div data-value="go-lang">Go</div>
              <div data-group="Tools"></div>
              <div data-value="docker">Docker</div>
              <div data-value="k8s">Kubernetes</div>
              <div data-value="terraform">Terraform</div>
              <div data-value="gh-actions">GitHub Actions</div>
            </div>
          </div>`)}
      </div>
    </div>`};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10">
      <div class="grid grid-cols-[1fr_1fr] gap-x-10 gap-y-10 max-w-2xl">
        \${section('Basic', \`<div class="field">
            <label class="label">Framework</label>
            <div data-select data-placeholder="Choose a framework...">
              <div data-value="react">React</div>
              <div data-value="vue">Vue</div>
              <div data-value="angular">Angular</div>
              <div data-value="svelte">Svelte</div>
              <div data-value="solid">SolidJS</div>
            </div>
          </div>\`, code(\`<div data-select data-placeholder="Choose...">\\n  <div data-value="react">React</div>\\n  <div data-value="vue">Vue</div>\\n</div>\`))}
        \${section('Pre-selected', \`<div class="field">
            <label class="label">Language</label>
            <div data-select data-value="ts" data-placeholder="Choose a language...">
              <div data-value="js">JavaScript</div>
              <div data-value="ts">TypeScript</div>
              <div data-value="py">Python</div>
              <div data-value="rs">Rust</div>
              <div data-value="go">Go</div>
            </div>
          </div>\`)}
        \${section('Searchable', \`<div class="field">
            <label class="label">Country</label>
            <div data-select data-search data-placeholder="Search countries...">
              <div data-value="us">United States</div>
              <div data-value="uk">United Kingdom</div>
              <div data-value="ca">Canada</div>
              <div data-value="au">Australia</div>
              <div data-value="de">Germany</div>
              <div data-value="fr">France</div>
              <div data-value="jp">Japan</div>
              <div data-value="kr">South Korea</div>
              <div data-value="br">Brazil</div>
              <div data-value="mx">Mexico</div>
              <div data-value="in">India</div>
              <div data-value="cn">China</div>
            </div>
          </div>\`, code(\`<div data-select data-search>\\n  <div data-value="us">United States</div>\\n  ...\\n</div>\`))}
        \${section('Grouped', \`<div class="field">
            <label class="label">Technology</label>
            <div data-select data-search data-placeholder="Choose a technology...">
              <div data-group="Frontend"></div>
              <div data-value="react">React</div>
              <div data-value="vue">Vue</div>
              <div data-value="angular">Angular</div>
              <div data-value="svelte">Svelte</div>
              <div data-group="Backend"></div>
              <div data-value="node">Node.js</div>
              <div data-value="django">Django</div>
              <div data-value="rails">Rails</div>
              <div data-value="go-be">Go</div>
              <div data-group="Database"></div>
              <div data-value="postgres">PostgreSQL</div>
              <div data-value="mysql">MySQL</div>
              <div data-value="mongo">MongoDB</div>
              <div data-value="redis">Redis</div>
            </div>
          </div>\`, code(\`<div data-select data-search>\\n  <div data-group="Frontend"></div>\\n  <div data-value="react">React</div>\\n  <div data-group="Backend"></div>\\n  <div data-value="node">Node.js</div>\\n</div>\`))}
      </div>

      <div class="grid grid-cols-[1fr_1fr] gap-x-10 gap-y-10 max-w-2xl">
        \${section('Multi-select', \`<div class="field">
            <label class="label">Technologies</label>
            <div data-select data-multiple data-search data-placeholder="Select technologies...">
              <div data-value="react">React</div>
              <div data-value="vue">Vue</div>
              <div data-value="angular">Angular</div>
              <div data-value="svelte">Svelte</div>
              <div data-value="next">Next.js</div>
              <div data-value="nuxt">Nuxt</div>
              <div data-value="astro">Astro</div>
            </div>
          </div>\`, code(\`<div data-select data-multiple data-search>\\n  <div data-value="react">React</div>\\n  ...\\n</div>\`))}
        \${section('Multi-select — Pre-selected', \`<div class="field">
            <label class="label">Favorite Colors</label>
            <div data-select data-multiple data-value="blue,green" data-placeholder="Pick colors...">
              <div data-value="red">Red</div>
              <div data-value="blue">Blue</div>
              <div data-value="green">Green</div>
              <div data-value="yellow">Yellow</div>
              <div data-value="purple">Purple</div>
            </div>
          </div>\`)}
        \${section('Grouped Multi-select', \`<div class="field">
            <label class="label">Build Your Stack</label>
            <div data-select data-multiple data-search data-placeholder="Build your stack...">
              <div data-group="Languages"></div>
              <div data-value="ts">TypeScript</div>
              <div data-value="py">Python</div>
              <div data-value="rs">Rust</div>
              <div data-value="go-lang">Go</div>
              <div data-group="Tools"></div>
              <div data-value="docker">Docker</div>
              <div data-value="k8s">Kubernetes</div>
              <div data-value="terraform">Terraform</div>
              <div data-value="gh-actions">GitHub Actions</div>
            </div>
          </div>\`)}
      </div>
    </div>\`
}`,...E.parameters?.docs?.source}}};const Z=["Select"];export{E as Select,Z as __namedExportsOrder,X as default};
