import{$ as e,Gt as t,H as n,J as r,U as i,V as a,Xt as o,et as s,k as c}from"./interactive-DeCXXHcg.js";import{n as l,t as u}from"./vedicSyllabus-CGdjH4CV.js";var d=s(),f=`var(--primary-blue)`,p=`
  .vm-head { display: flex; align-items: center; gap: 12px; margin: 4px 0 2px; }
  .vm-head h1 { margin: 0; font-family: "Baloo 2", "Fredoka", sans-serif; font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 800; color: var(--text-dark, #0f172a); }
  .vm-level { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 999px;
    background: #fef3c7; color: #92400e; font-weight: 800; font-size: .85rem; }
  .vm-level i { color: #f59e0b; }
  .vm-cat { display: flex; align-items: center; gap: 8px; margin: 6px 0 0; font-family: "Baloo 2", "Fredoka", sans-serif;
    font-size: 1.05rem; font-weight: 800; color: #475569; }
  .vm-cat i { color: ${f}; font-size: .9rem; }
  .vm-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(170px, 1fr)); gap: 12px; }
  .vm-tile { display: flex; flex-direction: column; align-items: flex-start; gap: 10px; padding: 14px; border-radius: 18px;
    background: #fff; border: 1px solid #e2e8f0; border-top: 4px solid ${f}; cursor: pointer; text-align: left;
    font: inherit; box-shadow: 0 2px 8px rgba(15,23,42,0.05); transition: transform .12s, box-shadow .12s; }
  .vm-tile:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 18px rgba(15,23,42,0.09); }
  .vm-tile:disabled { cursor: default; opacity: .55; border-top-color: #cbd5e1; }
  .vm-icon { width: 40px; height: 40px; border-radius: 12px; display: flex; align-items: center; justify-content: center;
    background: ${(e=>`color-mix(in srgb, ${f} ${e}%, transparent)`)(10)}; color: ${f}; font-size: 1rem; }
  .vm-tile:disabled .vm-icon { background: #f1f5f9; color: #94a3b8; }
  .vm-name { margin: 0; font-size: .98rem; font-weight: 800; color: #0f172a; line-height: 1.25; }
  .vm-note { font-size: .72rem; font-weight: 800; color: #94a3b8; }
`,m=i.flatMap(e=>e.tricks.map(e=>e.name));function h(){let t=o(),{ready:s,vedicTopics:f}=r(),{profile:h}=e(),g=c(h?.current_level),_=l(m,f),v=s?i.map(e=>({...e,tricks:e.tricks.map(e=>({...e,...u(e.name,g,_)})).filter(e=>e.taught)})).filter(e=>e.tricks.length):[];return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(`style`,{children:p}),v.map(e=>(0,d.jsxs)(`section`,{style:{display:`flex`,flexDirection:`column`,gap:`10px`},children:[(0,d.jsxs)(`h2`,{className:`vm-cat`,children:[(0,d.jsx)(`i`,{className:`fa-solid ${e.icon}`}),` `,e.title]}),(0,d.jsx)(`div`,{className:`module-grid pp-grid`,children:e.tricks.map(r=>{let i=!r.locked&&a(r.name),o=e.color||`#6366f1`;return(0,d.jsxs)(`div`,{role:`button`,tabIndex:i?0:-1,"aria-disabled":!i,className:`module-card ${i?``:`locked`}`,style:{"--card-accent":o},title:r.locked?`Unlocks at Level ${r.required}`:r.summary,onClick:()=>i?t(`/vedic-math/practice/${n(r.name)}`):null,onKeyDown:e=>{i&&(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),t(`/vedic-math/practice/${n(r.name)}`))},children:[(0,d.jsxs)(`div`,{className:`module-card-top`,children:[(0,d.jsx)(`div`,{className:`module-icon`,style:{backgroundColor:`color-mix(in srgb, ${o} 12%, white)`,color:o},children:(0,d.jsx)(`i`,{className:`fa-solid ${r.locked?`fa-lock`:e.icon}`})}),(0,d.jsx)(`div`,{className:`module-info`,children:(0,d.jsx)(`h3`,{children:r.name})})]}),r.locked?(0,d.jsxs)(`span`,{className:`lock-pill`,children:[(0,d.jsx)(`i`,{className:`fa-solid fa-lock`}),` Unlocks at Level `,r.required]}):i?null:(0,d.jsx)(`span`,{className:`lock-pill`,children:`Reference only`})]},r.name)})})]},e.title))]})}function g(){return(0,d.jsx)(t,{to:`/practice?tab=vedic`,replace:!0})}export{h as VedicTrickTiles,g as default};