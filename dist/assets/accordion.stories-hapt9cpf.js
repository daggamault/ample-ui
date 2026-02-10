const o=(a,...s)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${a}</p>
    ${s.join("")}
  </div>`,i=a=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,t={title:"Components/Accordion",tags:["autodocs"]},e={render:()=>`
    <div class="flex flex-col gap-10 max-w-lg">
      ${o("Animated",`<div class="accordion">
          <details class="accordion-item" open>
            <summary class="accordion-header">What is Ample UI?</summary>
            <div class="accordion-body">Ample UI is a lightweight CSS component library built with modern CSS features, Tailwind CSS v4, and minimal JavaScript. It provides a clean, consistent design system for building web applications.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">How do I install it?</summary>
            <div class="accordion-body">Install via your package manager of choice. Import the CSS file and optionally the JavaScript modules for interactive components like selects, tabs, and dialogs.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">Does it support dark mode?</summary>
            <div class="accordion-body">Yes. Ample UI uses CSS custom properties with OKLCH colors. Dark mode is supported via the prefers-color-scheme media query and a data-theme attribute for manual toggling.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">Is it accessible?</summary>
            <div class="accordion-body">Absolutely. Built on native HTML details/summary elements with proper ARIA support, keyboard navigation, focus indicators, and reduced motion support. WCAG 2.1 AA compliant with AAA touch targets.</div>
          </details>
        </div>`,i(`<div class="accordion">
  <details class="accordion-item" open>
    <summary class="accordion-header">Title</summary>
    <div class="accordion-body">Content</div>
  </details>
</div>`))}
      ${o("All Collapsed",`<div class="accordion">
          <details class="accordion-item">
            <summary class="accordion-header">Section One</summary>
            <div class="accordion-body">Content for section one. Click the header to expand or collapse this section. Height animates smoothly using CSS interpolate-size and ::details-content.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">Section Two</summary>
            <div class="accordion-body">Content for section two. Each section operates independently. Multiple sections can be open simultaneously.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">Section Three</summary>
            <div class="accordion-body">Content for section three. The chevron indicator rotates to show the open/closed state.</div>
          </details>
        </div>`)}
    </div>`};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10 max-w-lg">
      \${section('Animated', \`<div class="accordion">
          <details class="accordion-item" open>
            <summary class="accordion-header">What is Ample UI?</summary>
            <div class="accordion-body">Ample UI is a lightweight CSS component library built with modern CSS features, Tailwind CSS v4, and minimal JavaScript. It provides a clean, consistent design system for building web applications.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">How do I install it?</summary>
            <div class="accordion-body">Install via your package manager of choice. Import the CSS file and optionally the JavaScript modules for interactive components like selects, tabs, and dialogs.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">Does it support dark mode?</summary>
            <div class="accordion-body">Yes. Ample UI uses CSS custom properties with OKLCH colors. Dark mode is supported via the prefers-color-scheme media query and a data-theme attribute for manual toggling.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">Is it accessible?</summary>
            <div class="accordion-body">Absolutely. Built on native HTML details/summary elements with proper ARIA support, keyboard navigation, focus indicators, and reduced motion support. WCAG 2.1 AA compliant with AAA touch targets.</div>
          </details>
        </div>\`, code(\`<div class="accordion">\\n  <details class="accordion-item" open>\\n    <summary class="accordion-header">Title</summary>\\n    <div class="accordion-body">Content</div>\\n  </details>\\n</div>\`))}
      \${section('All Collapsed', \`<div class="accordion">
          <details class="accordion-item">
            <summary class="accordion-header">Section One</summary>
            <div class="accordion-body">Content for section one. Click the header to expand or collapse this section. Height animates smoothly using CSS interpolate-size and ::details-content.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">Section Two</summary>
            <div class="accordion-body">Content for section two. Each section operates independently. Multiple sections can be open simultaneously.</div>
          </details>
          <details class="accordion-item">
            <summary class="accordion-header">Section Three</summary>
            <div class="accordion-body">Content for section three. The chevron indicator rotates to show the open/closed state.</div>
          </details>
        </div>\`)}
    </div>\`
}`,...e.parameters?.docs?.source}}};const c=["Accordion"];export{e as Accordion,c as __namedExportsOrder,t as default};
