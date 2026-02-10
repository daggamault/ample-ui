const a=(d,...e)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${d}</p>
    ${e.join("")}
  </div>`,t=d=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,i={title:"Components/Card",tags:["autodocs"]},s={render:()=>`
    <div class="flex flex-col gap-10 max-w-lg">
      ${a("Basic",`<div class="card">
          <div class="card-header"><span class="card-title">Card Title</span></div>
          <div class="card-body">
            <p class="text-sm text-text-muted">This is a basic card with a header, body, and footer. Cards are versatile containers for grouping related content.</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm">Action</button>
          </div>
        </div>`,t(`<div class="card">
  <div class="card-header"><span class="card-title">Title</span></div>
  <div class="card-body">Content</div>
  <div class="card-footer">Footer</div>
</div>`))}
      ${a("Raised",`<div class="card-raised">
          <div class="card-header"><span class="card-title">Raised Card</span></div>
          <div class="card-body">
            <p class="text-sm text-text-muted">Raised cards use a shadow instead of a border, giving them a floating appearance.</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm">Action</button>
          </div>
        </div>`,t(`<div class="card-raised">
  <div class="card-body">Content</div>
</div>`))}
      ${a("Interactive",`<div class="flex gap-4">
          <div class="card card-interactive" style="flex: 1" tabindex="0">
            <div class="card-body">
              <span class="card-title">Clickable Card</span>
              <p class="text-sm text-text-muted mt-1">Cards with the interactive modifier lift on hover and support keyboard focus.</p>
            </div>
          </div>
          <div class="card card-interactive" style="flex: 1" tabindex="0">
            <div class="card-body">
              <span class="card-title">Another Card</span>
              <p class="text-sm text-text-muted mt-1">Great for grid layouts where each card is a navigable item.</p>
            </div>
          </div>
        </div>`,t(`<div class="card card-interactive" tabindex="0">
  <div class="card-body">Clickable</div>
</div>`))}
      ${a("Body Only",`<div class="card">
          <div class="card-body">
            <p class="text-sm text-text-muted">A simple card with just a body. No header or footer needed.</p>
          </div>
        </div>`)}
      ${a("With Image",`<div class="card" style="max-width: 20rem;">
          <img class="card-image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=200&fit=crop" alt="Landscape" style="height: 10rem;" />
          <div class="card-body">
            <span class="card-title">Mountain Landscape</span>
            <p class="text-sm text-text-muted mt-1">Beautiful view of a mountain landscape at sunrise with misty valleys.</p>
          </div>
        </div>`)}
    </div>`};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10 max-w-lg">
      \${section('Basic', \`<div class="card">
          <div class="card-header"><span class="card-title">Card Title</span></div>
          <div class="card-body">
            <p class="text-sm text-text-muted">This is a basic card with a header, body, and footer. Cards are versatile containers for grouping related content.</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm">Action</button>
          </div>
        </div>\`, code(\`<div class="card">\\n  <div class="card-header"><span class="card-title">Title</span></div>\\n  <div class="card-body">Content</div>\\n  <div class="card-footer">Footer</div>\\n</div>\`))}
      \${section('Raised', \`<div class="card-raised">
          <div class="card-header"><span class="card-title">Raised Card</span></div>
          <div class="card-body">
            <p class="text-sm text-text-muted">Raised cards use a shadow instead of a border, giving them a floating appearance.</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-sm">Action</button>
          </div>
        </div>\`, code(\`<div class="card-raised">\\n  <div class="card-body">Content</div>\\n</div>\`))}
      \${section('Interactive', \`<div class="flex gap-4">
          <div class="card card-interactive" style="flex: 1" tabindex="0">
            <div class="card-body">
              <span class="card-title">Clickable Card</span>
              <p class="text-sm text-text-muted mt-1">Cards with the interactive modifier lift on hover and support keyboard focus.</p>
            </div>
          </div>
          <div class="card card-interactive" style="flex: 1" tabindex="0">
            <div class="card-body">
              <span class="card-title">Another Card</span>
              <p class="text-sm text-text-muted mt-1">Great for grid layouts where each card is a navigable item.</p>
            </div>
          </div>
        </div>\`, code(\`<div class="card card-interactive" tabindex="0">\\n  <div class="card-body">Clickable</div>\\n</div>\`))}
      \${section('Body Only', \`<div class="card">
          <div class="card-body">
            <p class="text-sm text-text-muted">A simple card with just a body. No header or footer needed.</p>
          </div>
        </div>\`)}
      \${section('With Image', \`<div class="card" style="max-width: 20rem;">
          <img class="card-image" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=200&fit=crop" alt="Landscape" style="height: 10rem;" />
          <div class="card-body">
            <span class="card-title">Mountain Landscape</span>
            <p class="text-sm text-text-muted mt-1">Beautiful view of a mountain landscape at sunrise with misty valleys.</p>
          </div>
        </div>\`)}
    </div>\`
}`,...s.parameters?.docs?.source}}};const c=["Card"];export{s as Card,c as __namedExportsOrder,i as default};
