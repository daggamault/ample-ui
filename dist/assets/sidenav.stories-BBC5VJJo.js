const d=(a,...t)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${a}</p>
    ${t.join("")}
  </div>`,r=a=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,e=a=>`<svg class="w-[18px] h-[18px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${a}</svg>`,s={grid:e('<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>'),button:e('<rect x="3" y="8" width="18" height="8" rx="2"/>'),form:e('<rect x="3" y="5" width="18" height="14" rx="2"/><line x1="7" y1="12" x2="13" y2="12"/>'),chevron:e('<polyline points="6 9 12 15 18 9"/>'),sidebar:e('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/>'),header:e('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/>'),badge:e('<circle cx="12" cy="12" r="9"/><path d="M12 8v4m0 4h.01"/>'),moon:e('<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'),search:e('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>')},l=`
<div class="flex h-[36rem] rounded-card border border-border overflow-hidden">
  <nav class="sidenav">
    <div class="sidenav-brand">
      <div class="w-6 h-6 rounded-[5px] bg-primary flex items-center justify-center">
        <div class="w-2.5 h-2.5 rounded-full bg-white/90"></div>
      </div>
      Ample UI
    </div>
    <div class="sidenav-nav">
      <details class="sidenav-group" open>
        <summary class="sidenav-group-label">Components</summary>
        <div class="sidenav-group-items">
          <a class="sidenav-item sidenav-item-active" href="#">${s.button} Buttons</a>
          <a class="sidenav-item" href="#">${s.form} Form Inputs</a>
          <a class="sidenav-item" href="#">${s.chevron} Selects</a>
          <a class="sidenav-item" href="#">${s.badge} Badges <span class="sidenav-badge">New</span></a>
        </div>
      </details>
      <details class="sidenav-group" open>
        <summary class="sidenav-group-label">Layout</summary>
        <div class="sidenav-group-items">
          <a class="sidenav-item" href="#">${s.sidebar} Sidenav</a>
          <a class="sidenav-item" href="#">${s.header} Toolbar</a>
        </div>
      </details>
      <details class="sidenav-group">
        <summary class="sidenav-group-label">Account</summary>
        <div class="sidenav-group-items">
          <a class="sidenav-item" href="#">Profile</a>
          <a class="sidenav-item" href="#">Team</a>
          <a class="sidenav-item" href="#">Billing</a>
        </div>
      </details>
    </div>
    <div class="sidenav-footer">
      <a class="sidenav-item" href="#">${s.moon} Dark Mode</a>
    </div>
  </nav>
  <main class="flex-1 bg-base overflow-y-auto flex flex-col">
    <div class="border-b border-border bg-surface px-6 h-14 flex items-center gap-3 shrink-0">
      <span class="text-sm font-semibold text-text">Buttons</span>
      <div class="flex-1"></div>
      <div class="flex items-center gap-2 px-3 py-1.5 rounded-btn bg-base-muted text-text-subtle text-xs">
        ${s.search}
        <span>Search...</span>
      </div>
      <div class="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-[0.625rem] font-bold text-primary-content">JD</div>
    </div>
    <div class="flex-1 p-5 md:p-7 lg:p-10 flex flex-col gap-6">
      <div>
        <h3 class="text-lg font-bold text-text mb-1">Welcome back</h3>
        <p class="text-sm text-text-muted leading-relaxed max-w-lg">Here's an overview of your workspace. Toggle dark mode in the Storybook toolbar to see everything adapt.</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="bg-surface rounded-card border border-border p-5">
          <p class="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-3">Quick Actions</p>
          <div class="flex gap-2 flex-wrap">
            <button class="btn">New Project</button>
            <button class="btn-outline">Import</button>
            <button class="btn-ghost">View Docs</button>
          </div>
        </div>
        <div class="bg-surface rounded-card border border-border p-5">
          <p class="text-xs font-semibold uppercase tracking-wider text-text-subtle mb-3">Activity</p>
          <div class="flex flex-col gap-2.5 text-sm text-text-muted">
            <div class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-success shrink-0"></span>Deployment successful</div>
            <div class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-warning shrink-0"></span>3 pending reviews</div>
            <div class="flex items-center gap-2.5"><span class="w-1.5 h-1.5 rounded-full bg-info shrink-0"></span>New member joined</div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>`,n=`
<nav class="sidenav h-auto">
  <div class="sidenav-nav">
    <details class="sidenav-group" open>
      <summary class="sidenav-group-label">Workspace</summary>
      <div class="sidenav-group-items">
        <a class="sidenav-item sidenav-item-active" href="#">${s.grid} Dashboard</a>
        <a class="sidenav-item" href="#">Projects</a>
        <a class="sidenav-item" href="#">Tasks</a>
        <a class="sidenav-item" href="#">Calendar</a>
      </div>
    </details>
    <details class="sidenav-group" open>
      <summary class="sidenav-group-label">Analytics</summary>
      <div class="sidenav-group-items">
        <a class="sidenav-item" href="#">Overview</a>
        <a class="sidenav-item" href="#">Reports</a>
        <a class="sidenav-item" href="#">Exports</a>
      </div>
    </details>
    <details class="sidenav-group">
      <summary class="sidenav-group-label">Settings</summary>
      <div class="sidenav-group-items">
        <a class="sidenav-item" href="#">Profile</a>
        <a class="sidenav-item" href="#">Team</a>
      </div>
    </details>
  </div>
</nav>`,o=`<nav class="sidenav">
  <div class="sidenav-brand">...</div>
  <div class="sidenav-nav">
    <details class="sidenav-group" open>
      <summary class="sidenav-group-label">Section</summary>
      <div class="sidenav-group-items">
        <a class="sidenav-item sidenav-item-active" href="#">Active</a>
        <a class="sidenav-item" href="#">Link</a>
      </div>
    </details>
  </div>
  <div class="sidenav-footer">...</div>
</nav>`,c=`<div class="flex h-screen">
  <nav class="sidenav">...</nav>
  <main class="flex-1 bg-base overflow-y-auto">
    <div class="p-5 md:p-7 lg:p-10">...</div>
  </main>
</div>`,v={title:"Components/Sidenav",tags:["autodocs"]},i={render:()=>`
    <div class="flex flex-col gap-10">
      ${d("App Layout",l,r(c))}
      ${d("Collapsible Groups",n,r(o))}
    </div>`};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10">
      \${section('App Layout', layoutDemo, code(layoutSnippet))}
      \${section('Collapsible Groups', standaloneDemo, code(sidenavSnippet))}
    </div>\`
}`,...i.parameters?.docs?.source}}};const p=["Sidenav"];export{i as Sidenav,p as __namedExportsOrder,v as default};
