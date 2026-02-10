const t=(s,...v)=>`<div class="flex flex-col gap-3">
    <p class="text-[0.7rem] font-bold uppercase tracking-widest text-text-subtle">${s}</p>
    ${v.join("")}
  </div>`,r=s=>`<pre class="p-3 rounded-card bg-base-muted text-text-muted text-xs leading-relaxed overflow-x-auto"><code>${s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}</code></pre>`,a=s=>`https://i.pravatar.cc/80?img=${s}`,d={title:"Components/Avatar",tags:["autodocs"]},i={render:()=>`
    <div class="flex flex-col gap-10">
      ${t("Sizes",`<div class="flex gap-4 items-center">
          <div class="avatar avatar-sm"><img src="${a(1)}" alt="User" /></div>
          <div class="avatar"><img src="${a(2)}" alt="User" /></div>
          <div class="avatar avatar-lg"><img src="${a(3)}" alt="User" /></div>
          <div class="avatar avatar-xl"><img src="${a(4)}" alt="User" /></div>
        </div>`,r(`<div class="avatar avatar-sm"><img src="..." alt="User" /></div>
<div class="avatar"><img src="..." alt="User" /></div>
<div class="avatar avatar-lg"><img src="..." alt="User" /></div>
<div class="avatar avatar-xl"><img src="..." alt="User" /></div>`))}
      ${t("Initials",`<div class="flex gap-4 items-center">
          <div class="avatar avatar-initials avatar-sm">JD</div>
          <div class="avatar avatar-initials">AB</div>
          <div class="avatar avatar-initials avatar-lg">MK</div>
          <div class="avatar avatar-initials avatar-xl">RS</div>
        </div>`,r('<div class="avatar avatar-initials">AB</div>'))}
      ${t("Rounded",`<div class="flex gap-4 items-center">
          <div class="avatar avatar-rounded"><img src="${a(5)}" alt="User" /></div>
          <div class="avatar avatar-rounded avatar-initials">RS</div>
        </div>`,r('<div class="avatar avatar-rounded"><img src="..." alt="User" /></div>'))}
      ${t("Status Indicator",`<div class="flex gap-4 items-center">
          <div class="avatar avatar-status"><img src="${a(6)}" alt="User" /></div>
          <div class="avatar avatar-status avatar-status-warning"><img src="${a(7)}" alt="User" /></div>
          <div class="avatar avatar-status avatar-status-error"><img src="${a(8)}" alt="User" /></div>
          <div class="avatar avatar-status avatar-status-muted"><img src="${a(9)}" alt="User" /></div>
        </div>`,r(`<div class="avatar avatar-status"><img src="..." alt="User" /></div>
<div class="avatar avatar-status avatar-status-error"><img src="..." alt="User" /></div>
<div class="avatar avatar-status avatar-status-muted"><img src="..." alt="User" /></div>`))}
      ${t("Group",`<div class="avatar-group">
          <div class="avatar"><img src="${a(10)}" alt="User" /></div>
          <div class="avatar"><img src="${a(11)}" alt="User" /></div>
          <div class="avatar"><img src="${a(12)}" alt="User" /></div>
          <div class="avatar avatar-initials">+3</div>
        </div>`,r(`<div class="avatar-group">
  <div class="avatar"><img src="..." alt="User" /></div>
  <div class="avatar avatar-initials">+3</div>
</div>`))}
    </div>`};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => \`
    <div class="flex flex-col gap-10">
      \${section('Sizes', \`<div class="flex gap-4 items-center">
          <div class="avatar avatar-sm"><img src="\${img(1)}" alt="User" /></div>
          <div class="avatar"><img src="\${img(2)}" alt="User" /></div>
          <div class="avatar avatar-lg"><img src="\${img(3)}" alt="User" /></div>
          <div class="avatar avatar-xl"><img src="\${img(4)}" alt="User" /></div>
        </div>\`, code(\`<div class="avatar avatar-sm"><img src="..." alt="User" /></div>\\n<div class="avatar"><img src="..." alt="User" /></div>\\n<div class="avatar avatar-lg"><img src="..." alt="User" /></div>\\n<div class="avatar avatar-xl"><img src="..." alt="User" /></div>\`))}
      \${section('Initials', \`<div class="flex gap-4 items-center">
          <div class="avatar avatar-initials avatar-sm">JD</div>
          <div class="avatar avatar-initials">AB</div>
          <div class="avatar avatar-initials avatar-lg">MK</div>
          <div class="avatar avatar-initials avatar-xl">RS</div>
        </div>\`, code(\`<div class="avatar avatar-initials">AB</div>\`))}
      \${section('Rounded', \`<div class="flex gap-4 items-center">
          <div class="avatar avatar-rounded"><img src="\${img(5)}" alt="User" /></div>
          <div class="avatar avatar-rounded avatar-initials">RS</div>
        </div>\`, code(\`<div class="avatar avatar-rounded"><img src="..." alt="User" /></div>\`))}
      \${section('Status Indicator', \`<div class="flex gap-4 items-center">
          <div class="avatar avatar-status"><img src="\${img(6)}" alt="User" /></div>
          <div class="avatar avatar-status avatar-status-warning"><img src="\${img(7)}" alt="User" /></div>
          <div class="avatar avatar-status avatar-status-error"><img src="\${img(8)}" alt="User" /></div>
          <div class="avatar avatar-status avatar-status-muted"><img src="\${img(9)}" alt="User" /></div>
        </div>\`, code(\`<div class="avatar avatar-status"><img src="..." alt="User" /></div>\\n<div class="avatar avatar-status avatar-status-error"><img src="..." alt="User" /></div>\\n<div class="avatar avatar-status avatar-status-muted"><img src="..." alt="User" /></div>\`))}
      \${section('Group', \`<div class="avatar-group">
          <div class="avatar"><img src="\${img(10)}" alt="User" /></div>
          <div class="avatar"><img src="\${img(11)}" alt="User" /></div>
          <div class="avatar"><img src="\${img(12)}" alt="User" /></div>
          <div class="avatar avatar-initials">+3</div>
        </div>\`, code(\`<div class="avatar-group">\\n  <div class="avatar"><img src="..." alt="User" /></div>\\n  <div class="avatar avatar-initials">+3</div>\\n</div>\`))}
    </div>\`
}`,...i.parameters?.docs?.source}}};const l=["Avatar"];export{i as Avatar,l as __namedExportsOrder,d as default};
