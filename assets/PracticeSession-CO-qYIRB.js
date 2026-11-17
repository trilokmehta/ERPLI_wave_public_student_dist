import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{$ as t,A as n,C as r,D as i,Dt as a,E as o,Ft as s,J as c,M as l,O as u,Ot as ee,Pt as d,R as f,Rt as te,S as ne,T as re,W as ie,Xt as ae,_ as oe,at as se,dt as ce,en as p,et as m,j as le,jt as ue,k as de,kt as fe,m as pe,ut as me,w as h,x as g}from"./interactive-DeCXXHcg.js";import{m as he}from"./mcq-CGU3X_-K.js";import{n as ge,t as _e}from"./PracticeSwitch-rhWvN_v0.js";import{n as ve,t as ye}from"./KidResultCard-Hw5hkH33.js";import{n as be,t as xe}from"./vedicSyllabus-CGdjH4CV.js";var _=e(p(),1),v=m(),Se=`
.dabacus { --rod-w: clamp(30px, 8vw, 44px); --bead-h: clamp(18px, 4.6vw, 23px);
  display: flex; flex-direction: column; align-items: center; user-select: none; }
.dabacus-frame { display: flex; padding: 8px 10px; border-radius: 16px; background: #7c4a1e;
  box-shadow: inset 0 0 0 3px #5b3410, 0 6px 16px rgba(15,23,42,0.18); max-width: 100%; overflow-x: auto; }
.dabacus.paper .dabacus-frame { background: #fffdf7; box-shadow: inset 0 0 0 3px #334155; }
.dabacus-rod { position: relative; width: var(--rod-w); display: flex; flex-direction: column; align-items: center; touch-action: manipulation; }
.dabacus-rod::before { content: ""; position: absolute; top: 0; bottom: 0; left: 50%; width: 3px; margin-left: -1.5px; background: #d6d3d1; border-radius: 2px; }
.dabacus.paper .dabacus-rod::before { background: #475569; width: 2px; margin-left: -1px; }
.dabacus-heaven { position: relative; height: calc(var(--bead-h) * 2 + 4px); width: 100%; }
.dabacus-earth { position: relative; height: calc(var(--bead-h) * 5 + 4px); width: 100%; }
.dabacus-bar { position: relative; z-index: 1; height: 8px; width: calc(100% + 2px); background: #3f2a14; }
.dabacus.paper .dabacus-bar { background: #334155; height: 4px; }
.dabacus-bar.dot::after { content: ""; position: absolute; left: 50%; top: 50%; width: 5px; height: 5px; margin: -2.5px; border-radius: 50%; background: #fde68a; }
.dabacus.paper .dabacus-bar.dot::after { background: #fff; box-shadow: 0 0 0 1.5px #334155; }
.dabacus-bead { position: absolute; left: 50%; width: 88%; height: var(--bead-h); margin-left: -44%; border: none; padding: 0;
  cursor: pointer; clip-path: polygon(0 50%, 26% 0, 74% 0, 100% 50%, 74% 100%, 26% 100%);
  background: linear-gradient(180deg, #e7c08a, #b7823f); transition: transform .09s ease-out; }
.dabacus-bead.on { background: linear-gradient(180deg, #fb923c, #c2410c); }
.dabacus-bead:focus-visible { outline: 3px solid #7c3aed; }

.abd { position: fixed; z-index: 900; font-family: "Baloo 2", "Fredoka", sans-serif; color: #0f172a; }
.abd-panel { background: #fff; box-shadow: 0 18px 50px rgba(15,23,42,0.22); display: flex; flex-direction: column; gap: 12px; padding: 14px 16px 16px; }
.abd-head { display: flex; align-items: center; gap: 8px; }
.abd-title { font-weight: 800; font-size: 1.1rem; flex: 1; display: flex; align-items: center; gap: 8px; }
.abd-title i { color: #7c3aed; }
.abd-x { width: 34px; height: 34px; border-radius: 50%; border: none; background: #f1f5f9; color: #475569; cursor: pointer; }
.abd-seg { display: flex; background: #f1f5f9; padding: 4px; border-radius: 14px; gap: 4px; }
.abd-seg button { flex: 1; border: none; background: transparent; border-radius: 10px; padding: 7px 6px; cursor: pointer;
  font: inherit; font-weight: 800; font-size: .9rem; color: #64748b; display: inline-flex; align-items: center; justify-content: center; gap: 6px; }
.abd-seg button.active { background: #fff; color: #6d28d9; box-shadow: 0 1px 4px rgba(15,23,42,0.12); }
.abd-tools { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.abd-tool { border: 2px solid #e2e8f0; background: #fff; border-radius: 999px; padding: 4px 12px; font: inherit; font-weight: 800; font-size: .85rem; color: #475569; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; }
.abd-tool:disabled { opacity: .4; cursor: default; }
.abd-rods { display: inline-flex; align-items: center; gap: 4px; font-weight: 800; font-size: .85rem; color: #475569; }
.abd-rods button { width: 28px; height: 28px; border-radius: 50%; border: 2px solid #e2e8f0; background: #fff; cursor: pointer; font-weight: 900; color: #475569; }
.abd-value { font-weight: 900; color: #7c3aed; font-size: 1.15rem; min-width: 40px; text-align: right; }
.abd-tab { position: absolute; border: none; cursor: pointer; background: #7c3aed; color: #fff; font: inherit; font-weight: 800;
  display: flex; align-items: center; justify-content: center; gap: 6px; box-shadow: 0 6px 18px rgba(124,58,237,0.35); }

/* PC: panel slides in from the right edge; the tab sticks out to its left. */
@media (min-width: 901px) {
  .abd { top: 50%; right: 0; transform: translate(100%, -50%); transition: transform .25s cubic-bezier(.4,0,.2,1); }
  .abd.open { transform: translate(0, -50%); }
  .abd-panel { width: 380px; border-radius: 24px 0 0 24px; }
  .abd-tab { right: 100%; top: 50%; transform: translateY(-50%); width: 44px; padding: 16px 0; border-radius: 16px 0 0 16px;
    writing-mode: vertical-rl; letter-spacing: .04em; }
  .abd-tab i { transform: rotate(90deg); }
}
/* Phones: a bottom sheet with the tab on its top edge. */
@media (max-width: 900px) {
  .abd { left: 0; right: 0; bottom: 0; transform: translateY(100%); transition: transform .25s cubic-bezier(.4,0,.2,1); }
  .abd.open { transform: translateY(0); }
  .abd-panel { border-radius: 24px 24px 0 0; padding-bottom: calc(16px + env(safe-area-inset-bottom)); max-height: 70vh; overflow-y: auto; }
  .abd-tab { bottom: 100%; right: 16px; padding: 8px 16px; border-radius: 14px 14px 0 0; }
  .abd-tab i { transform: rotate(90deg); }
}
`,y=e=>Array.from({length:e},()=>({up:!1,low:0}));function b({rods:e=7,paper:t=!1,state:n,setState:r}){let i=n.length===e?n:y(e),a=(t,n)=>r(r=>(r.length===e?r:y(e)).map((e,r)=>r===t?n(e):e)),o=e=>({onPointerDown:t=>{t.preventDefault(),e()},onKeyDown:t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e())}});return(0,v.jsx)(`div`,{className:`dabacus${t?` paper`:``}`,children:(0,v.jsx)(`div`,{className:`dabacus-frame`,role:`group`,"aria-label":t?`Paper abacus`:`Digital abacus`,children:i.map((n,r)=>(0,v.jsxs)(`div`,{className:`dabacus-rod`,children:[(0,v.jsx)(`div`,{className:`dabacus-heaven`,children:t?null:(0,v.jsx)(`button`,{type:`button`,"aria-label":`Five bead, rod ${r+1}`,"aria-pressed":n.up,className:`dabacus-bead${n.up?` on`:``}`,style:{top:2,transform:`translateY(${n.up?`var(--bead-h)`:`0px`})`},...o(()=>a(r,e=>({...e,up:!e.up})))})}),(0,v.jsx)(`div`,{className:`dabacus-bar${(e-1-r)%3==0?` dot`:``}`}),(0,v.jsx)(`div`,{className:`dabacus-earth`,children:t?null:[0,1,2,3].map(e=>{let t=e<n.low;return(0,v.jsx)(`button`,{type:`button`,"aria-label":`One bead ${e+1}, rod ${r+1}`,"aria-pressed":t,className:`dabacus-bead${t?` on`:``}`,style:{top:`calc(var(--bead-h) * ${e} + 2px)`,transform:`translateY(${t?`0px`:`var(--bead-h)`})`},...o(()=>a(r,t=>({...t,low:e<t.low?e:e+1})))},e)})})]},r))})})}function Ce({open:e,onToggle:t,type:n=`digital`,onType:r,suggestedRods:i=7}){let[a,o]=(0,_.useState)(null),s=a??i,[c,l]=(0,_.useState)(()=>y(s)),[u,ee]=(0,_.useState)(!1),d=n===`paper`,f=c.length===s?c:y(s),te=f.reduce((e,t)=>e*10+(t.up?5:0)+t.low,0),ne=e=>{o(e),l(y(e))};return(0,_.useEffect)(()=>(document.body.classList.toggle(`abd-open`,!!e),()=>document.body.classList.remove(`abd-open`)),[e]),(0,v.jsxs)(`aside`,{className:`abd${e?` open`:``}`,"aria-label":`Abacus`,children:[(0,v.jsx)(`style`,{children:Se}),(0,v.jsxs)(`button`,{type:`button`,className:`abd-tab`,onClick:t,"aria-expanded":e,children:[(0,v.jsx)(`i`,{className:`fa-solid ${e?`fa-chevron-right`:`fa-chevron-left`}`}),` Abacus`]}),(0,v.jsxs)(`div`,{className:`abd-panel`,inert:e?void 0:``,children:[(0,v.jsxs)(`div`,{className:`abd-head`,children:[(0,v.jsxs)(`div`,{className:`abd-title`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-calculator`}),` Abacus`]}),(0,v.jsx)(`button`,{type:`button`,className:`abd-x`,onClick:t,"aria-label":`Close abacus`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-xmark`})})]}),(0,v.jsxs)(`div`,{className:`abd-seg`,role:`group`,"aria-label":`Abacus type`,children:[(0,v.jsxs)(`button`,{type:`button`,className:d?``:`active`,onClick:()=>r(`digital`),children:[(0,v.jsx)(`i`,{className:`fa-solid fa-circle-dot`}),` Digital`]}),(0,v.jsxs)(`button`,{type:`button`,className:d?`active`:``,onClick:()=>r(`paper`),children:[(0,v.jsx)(`i`,{className:`fa-solid fa-file-lines`}),` Paper`]})]}),(0,v.jsx)(b,{rods:s,paper:d,state:f,setState:l}),(0,v.jsxs)(`div`,{className:`abd-tools`,children:[(0,v.jsxs)(`span`,{className:`abd-rods`,children:[(0,v.jsx)(`button`,{type:`button`,onClick:()=>ne(Math.max(3,s-1)),"aria-label":`Fewer rods`,children:`−`}),s,` rods`,(0,v.jsx)(`button`,{type:`button`,onClick:()=>ne(Math.min(13,s+1)),"aria-label":`More rods`,children:`+`})]}),d?null:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`button`,{type:`button`,className:`abd-tool`,onClick:()=>ee(e=>!e),children:[(0,v.jsx)(`i`,{className:`fa-solid ${u?`fa-eye-slash`:`fa-eye`}`}),` `,u?(0,v.jsx)(`span`,{className:`abd-value`,children:te}):`Number`]}),(0,v.jsxs)(`button`,{type:`button`,className:`abd-tool`,onClick:()=>l(y(s)),children:[(0,v.jsx)(`i`,{className:`fa-solid fa-eraser`}),` Clear`]})]})]})]})]})}var we=`
  /* ── Focus mode: hide sidebar & hamburger on tablet/mobile ── */
  @media (max-width: 1024px) {
    body.practice-session-focus .sidebar,
    body.practice-session-focus .sidebar-overlay,
    body.practice-session-focus .hamburger { display: none; }
    body.practice-session-focus .main-content { margin-left: 0; width: 100%; }
  }
  body.practice-session-focus .page-wrap {
    justify-content: flex-start;
    min-height: 100vh;
    padding-top: calc(var(--nav-h) + 20px) !important;
  }

  /* Themes (emerald_forest, sunset_glow, …) pad .main-content for the navbar;
     page-wrap already does, so drop the duplicate here. */
  body .app-layout .main-content:has(.session-page-wrap) { padding-top: 0 !important; }

  /* ── Shell ── */
  .session-shell {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 60px;
    width: 100%;
  }

  /* ── Hero banner ── */
  .session-hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    padding: 28px 28px;
    background:
      radial-gradient(circle at 8% 25%, color-mix(in srgb, var(--gold) 35%, transparent), transparent 26%),
      radial-gradient(circle at 90% 15%, color-mix(in srgb, var(--primary-blue) 25%, transparent), transparent 28%),
      linear-gradient(135deg, color-mix(in srgb, var(--primary-blue) 5%, transparent), color-mix(in srgb, var(--dark-blue) 3%, transparent));
    border: 1px solid rgba(255,255,255,0.85);
    box-shadow: 0 2px 16px rgba(0,0,0,0.06);
    margin-bottom: 20px;
    transition: all 0.35s ease;
  }
  .playing-active .session-hero {
    padding: 14px 20px;
    border-radius: 14px;
    margin-bottom: 14px;
  }
  .session-hero h1 {
    font-family: "Sora", sans-serif;
    font-size: clamp(1.4rem, 3vw, 2.2rem);
    line-height: 1.1;
    margin: 0 0 4px;
    color: var(--dark-blue);
    transition: font-size 0.3s;
  }
  .playing-active .session-hero h1 { font-size: clamp(1rem, 2vw, 1.4rem); margin: 0; }
  .session-hero p {
    color: var(--text-light);
    font-weight: 700;
    margin: 0;
    font-size: 0.9rem;
    transition: opacity 0.3s;
  }
  .playing-active .session-hero p { display: none; }
  .session-pill {
    border: 0;
    background: var(--dark-blue);
    color: white;
    border-radius: 8px;
    padding: 7px 14px;
    font-weight: 900;
    white-space: nowrap;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }

  /* ── Tabs (before session starts) ── */
  .session-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
    border-bottom: 1.5px solid var(--border);
    padding-bottom: 12px;
  }
  .session-tab-btn {
    background: none;
    border: none;
    padding: 9px 18px;
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--text-light);
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.18s ease;
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .session-tab-btn:hover { background: var(--light-blue); color: var(--primary-blue); }
  .session-tab-btn.active {
    background: var(--dark-blue);
    color: white;
    box-shadow: 0 3px 10px rgba(0,0,0,0.14);
  }

  /* ── Layout grid (active session) ── */
  .session-grid {
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 16px;
    align-items: start;
    transition: grid-template-columns 0.35s cubic-bezier(0.4,0,0.2,1);
  }
  .playing-active .session-grid { grid-template-columns: 1fr; }

  /* ── Mode list (left panel) ── */
  .mode-list {
    border: 1px solid var(--border);
    background: var(--card-bg);
    border-radius: 16px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    transition: padding 0.35s cubic-bezier(0.4,0,0.2,1);
    position: sticky;
    top: calc(var(--nav-h) + 20px);
  }
  .playing-active .mode-list {
    flex-direction: row;
    overflow-x: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    padding: 8px;
    gap: 6px;
    position: static;
    border-radius: 14px;
  }
  .playing-active .mode-list::-webkit-scrollbar { display: none; }

  .mode-row {
    border: 1px solid transparent;
    background: transparent;
    border-radius: 12px;
    padding: 10px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 800;
    cursor: pointer;
    transition: padding 0.35s cubic-bezier(0.4,0,0.2,1), background 0.2s, border-color 0.2s;
  }
  .mode-row:hover:not(.active) {
    background: color-mix(in srgb, var(--primary-blue) 5%, transparent);
  }
  .playing-active .mode-row:hover i {
    background: color-mix(in srgb, var(--primary-blue) 18%, white);
    color: var(--primary-blue);
  }
  .playing-active .mode-row.active:hover i {
    background: var(--primary-blue);
    color: white;
  }
  .playing-active .mode-row {
    flex-shrink: 0;
    padding: 7px 10px;
    justify-content: flex-start;
    border-radius: 10px;
  }
  .playing-active .mode-row span { display: none; }
  .playing-active .mode-row.active span { display: block; }
  .playing-active .mode-row.active .journey-mode { display: none; }
  .playing-active .mode-row.active .journey-step { font-size: 0.8rem; white-space: nowrap; }
  .mode-row i {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: var(--light-blue);
    color: var(--primary-blue);
    font-size: 0.85rem;
    flex-shrink: 0;
    transition: background 0.2s, color 0.2s;
  }
  .mode-row .journey-step {
    display: block;
    color: var(--dark-blue);
    font-family: "Sora", sans-serif;
    font-size: 0.88rem;
    line-height: 1.2;
  }
  .mode-row .journey-mode {
    display: block;
    color: var(--text-light);
    font-family: "DM Sans", sans-serif;
    font-size: 0.74rem;
    font-weight: 800;
    margin-top: 1px;
  }
  .mode-row.active {
    background: color-mix(in srgb, var(--primary-blue) 8%, transparent);
    border-color: color-mix(in srgb, var(--primary-blue) 28%, transparent);
  }
  .mode-row.active i { background: var(--primary-blue); color: white; }
  .mode-row.done i { background: var(--ok-lt); color: var(--ok); }
  .mode-row.done .journey-step { color: var(--ok); }
  .mode-row.review i { background: color-mix(in srgb, var(--gold) 18%, white); color: var(--gold, #f59e0b); }

  /* ── Session card ── */
  .session-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 18px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.06);
    padding: 24px;
    min-height: 480px;
    display: flex;
    flex-direction: column;
  }

  /* ── Game top bar ── */
  .session-game-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
    flex-wrap: wrap;
  }
  .session-mode-pill {
    background: var(--light-blue);
    color: var(--primary-blue);
    border: 1px solid color-mix(in srgb, var(--primary-blue) 20%, transparent);
    border-radius: 8px;
    padding: 6px 14px;
    font-family: "Sora", sans-serif;
    font-size: 0.82rem;
    font-weight: 900;
    letter-spacing: 0.2px;
  }
  .session-q-counter {
    font-family: "DM Sans", sans-serif;
    font-size: 0.82rem;
    font-weight: 800;
    color: var(--text-light);
  }
  .session-spacer { flex: 1; }
  .session-score-chip {
    background: var(--ok-lt);
    color: var(--ok);
    border: 1px solid color-mix(in srgb, var(--ok) 22%, transparent);
    border-radius: 8px;
    padding: 6px 14px;
    font-family: "Sora", sans-serif;
    font-size: 0.82rem;
    font-weight: 900;
  }
  @keyframes resumePillFade {
    0%   { opacity: 1; transform: translateY(0); }
    80%  { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-6px); }
  }
  .resumed-pill {
    display: flex;
    align-items: center;
    gap: 5px;
    background: color-mix(in srgb, var(--accent) 12%, transparent);
    color: var(--accent);
    border: 1px solid color-mix(in srgb, var(--accent) 28%, transparent);
    border-radius: 8px;
    padding: 5px 10px;
    font-size: 0.75rem;
    font-weight: 700;
    animation: resumePillFade 4s ease forwards;
    pointer-events: none;
  }

  /* Hidden on desktop, shown only via mobile media query */
  .mobile-sub-bar { display: none; }
  .mobile-layout-toggle { display: none; }

  /* ── Progress bar ── */
  .session-prog-track {
    height: 5px;
    background: color-mix(in srgb, var(--border) 60%, transparent);
    border-radius: 99px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .session-prog-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-blue), var(--gold));
    border-radius: 99px;
    transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
  }

  /* ── Question stage ── */
  .session-stage {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 32px 20px;
    min-height: 180px;
  }
  .session-expression {
    font-family: "Sora", sans-serif;
    font-size: clamp(2.2rem, 5vw, 4.8rem);
    font-weight: 900;
    color: var(--dark-blue);
    line-height: 1.1;
    overflow-wrap: anywhere;
    letter-spacing: -0.5px;
  }
  .session-sub {
    color: var(--text-light);
    font-weight: 700;
    font-size: 0.95rem;
    margin-top: 2px;
  }
  .session-vertical {
    font-family: "Sora", sans-serif;
    font-size: clamp(1.8rem, 4vw, 3.6rem);
    font-weight: 900;
    color: var(--dark-blue);
    line-height: 1.3;
    display: inline-grid;
    grid-template-columns: 1.2em auto;
    justify-items: end;
    column-gap: 0.3em;
  }
  .session-vertical .vrow-sign { justify-self: center; color: var(--primary-blue); }
  .session-vertical .vrow-value { font-variant-numeric: tabular-nums; }
  .session-vertical .vrule {
    grid-column: 1 / -1;
    width: 100%;
    height: 2.5px;
    background: var(--dark-blue);
    border-radius: 2px;
    margin: 4px 0 6px;
    opacity: 0.5;
  }
  .session-vertical .vtotal { grid-column: 1 / -1; color: var(--primary-blue); }

  /* ── Countdown ── */
  .session-countdown {
    width: min(100%, 400px);
    display: grid;
    justify-items: center;
    gap: 14px;
  }
  .countdown-ring {
    width: 110px;
    height: 110px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    background:
      radial-gradient(circle, white 54%, transparent 55%),
      conic-gradient(var(--primary-blue), var(--gold), var(--primary-blue));
    box-shadow: 0 12px 28px color-mix(in srgb, var(--primary-blue) 20%, transparent);
    animation: countdownPulse 0.9s ease-in-out infinite;
  }
  .countdown-ring strong {
    font-family: "Sora", sans-serif;
    font-size: 3rem;
    color: var(--primary-blue);
    line-height: 1;
  }
  .countdown-title {
    font-family: "Sora", sans-serif;
    color: var(--dark-blue);
    font-size: clamp(1.4rem, 4vw, 2rem);
    font-weight: 900;
  }
  .countdown-copy { color: var(--text-light); font-weight: 750; font-size: 0.9rem; }
  @keyframes countdownPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  @keyframes flashNumSlide {
    0%   { transform: translateX(70px) scale(0.65); opacity: 0; }
    100% { transform: translateX(0)    scale(1);    opacity: 1; }
  }
  @keyframes flashNumAccent {
    0%   { color: var(--accent); }
    60%  { color: var(--accent); }
    100% { color: inherit; }
  }
  @keyframes flashNumReveal {
    0%   { transform: scale(0.5); opacity: 0; }
    60%  { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1);   opacity: 1; }
  }
  /* Entry snaps in 0.28s, then HOLDS at full opacity for the rest of the teacher-set interval */
  .animate-flash-num {
    display: inline-block;
    animation:
      flashNumSlide 0.28s cubic-bezier(0.34,1.56,0.64,1) forwards,
      flashNumAccent 0.9s ease forwards;
  }
  .animate-flash-reveal {
    display: inline-block;
    animation: flashNumReveal 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards;
  }

  /* ── Voice dots ── */
  @keyframes voicePulse {
    0%, 100% { transform: scale(1.4); box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 60%, transparent); }
    50% { transform: scale(1.7); box-shadow: 0 0 0 6px color-mix(in srgb, var(--accent) 0%, transparent); }
  }
  .voice-dots {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin: 16px 0 8px;
  }
  .voice-dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--accent) 25%, transparent);
    border: 2px solid color-mix(in srgb, var(--accent) 40%, transparent);
    transition: background 0.2s, border-color 0.2s;
  }
  .voice-dot.done {
    background: color-mix(in srgb, var(--accent) 55%, transparent);
    border-color: color-mix(in srgb, var(--accent) 55%, transparent);
  }
  .voice-dot.active {
    background: var(--accent);
    border-color: var(--accent);
    animation: voicePulse 0.7s ease-in-out infinite;
  }
  .voice-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--accent);
    letter-spacing: 0.03em;
    min-height: 1.2em;
  }

  /* ── Feedback ── */
  .feedback-pop {
    min-height: 48px;
    margin: 4px 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .feedback-bubble {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 18px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    font-family: "Sora", sans-serif;
    font-weight: 800;
    font-size: 0.92rem;
    animation: feedbackPop 0.22s ease-out;
  }
  .feedback-bubble.correct {
    color: var(--ok);
    background: var(--ok-lt);
    border-color: color-mix(in srgb, var(--ok) 28%, transparent);
  }
  .feedback-bubble.wrong {
    color: #9a3412;
    background: #fff7ed;
    border-color: #fcd9a8;
  }
  .feedback-character {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.65);
    font-size: 0.9rem;
  }
  @keyframes feedbackPop {
    from { transform: scale(0.88) translateY(6px); opacity: 0; }
    to { transform: scale(1) translateY(0); opacity: 1; }
  }

  /* ── MCQ answer grid ── */
  .session-answer-area { margin-top: 4px; }

  /* ── Typed-answer input mode ── */
  .typed-answer-wrap { display: flex; flex-direction: column; gap: 8px; }
  .typed-answer-row { display: flex; align-items: stretch; gap: 10px; }
  .typed-answer-input {
    flex: 1;
    min-width: 0;
    padding: 14px 18px;
    border-radius: 12px;
    border: 1.5px solid var(--border);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--dark-blue);
    outline: none;
    background: white;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .typed-answer-input:focus {
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-blue) 12%, transparent);
  }
  .typed-answer-input:disabled { background: #f8fafc; color: var(--text-light); }
  .typed-answer-submit {
    flex-shrink: 0;
    border: none;
    border-radius: 12px;
    padding: 0 22px;
    background: var(--dark-blue);
    color: white;
    font-size: 0.85rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
    white-space: nowrap;
  }
  .typed-answer-submit:hover:not(:disabled) { background: var(--primary-blue); }
  .typed-answer-submit:active:not(:disabled) { transform: scale(0.97); }
  .typed-answer-submit:disabled { opacity: 0.45; cursor: not-allowed; }
  .typed-answer-correct {
    font-size: 0.82rem;
    font-weight: 700;
    color: #dc2626;
    padding: 2px 4px;
  }

  /* ── Action bar (next/finish buttons) ── */
  .session-action-bar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid var(--border);
    flex-wrap: wrap;
  }
  .session-btn-next {
    border: none;
    border-radius: 12px;
    padding: 13px 28px;
    background: var(--dark-blue);
    color: white;
    font-family: "Sora", sans-serif;
    font-size: 0.88rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
    box-shadow: 0 3px 12px rgba(0,0,0,0.15);
  }
  .session-btn-next:hover:not(:disabled) {
    background: var(--primary-blue);
    box-shadow: 0 4px 16px color-mix(in srgb, var(--primary-blue) 28%, transparent);
    transform: translateY(-1px);
  }
  .session-btn-next:active:not(:disabled) { transform: translateY(0) scale(0.98); }
  .session-btn-next:disabled { opacity: 0.5; cursor: not-allowed; }
  .session-btn-ghost {
    border: 1.5px solid var(--border);
    border-radius: 12px;
    padding: 12px 20px;
    background: transparent;
    color: var(--text-light);
    font-family: "Sora", sans-serif;
    font-size: 0.85rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.15s;
  }
  .session-btn-ghost:hover { background: var(--light-blue); color: var(--primary-blue); border-color: color-mix(in srgb, var(--primary-blue) 30%, transparent); }

  /* ── Layout toggle ── */
  .layout-toggle {
    display: inline-flex;
    gap: 3px;
    padding: 3px;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: #f8fafc;
  }
  .layout-toggle button {
    border: 0;
    background: transparent;
    color: var(--text-light);
    font-weight: 800;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    padding: 5px 11px;
    border-radius: 7px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: all 0.15s;
  }
  .layout-toggle button.active {
    background: white;
    color: var(--primary-blue);
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  }

  /* ── Abacus ── */
  .session-abacus { display: flex; gap: 10px; padding: 14px; border-radius: 14px; background: #f8fafc; border: 1px solid var(--border); }
  .session-col {
    width: 44px;
    min-height: 160px;
    border-radius: 12px;
    background: white;
    border: 1.5px solid color-mix(in srgb, var(--primary-blue) 14%, transparent);
    display: grid;
    grid-template-rows: 50px 1fr;
    position: relative;
    overflow: hidden;
  }
  .session-col::before {
    content: "";
    position: absolute;
    left: 0; right: 0; top: 53px;
    height: 2.5px;
    background: var(--dark-blue);
    opacity: 0.5;
  }
  .session-bead-zone { display: flex; flex-direction: column; align-items: center; gap: 7px; padding: 7px 0; }
  .session-bead {
    width: 26px;
    height: 15px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--primary-blue) 12%, transparent);
    border: 1.5px solid color-mix(in srgb, var(--primary-blue) 22%, transparent);
    transition: transform .16s ease, background .16s ease;
  }
  .session-bead.active { background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue)); border-color: transparent; }
  .session-bead-zone.heaven .session-bead.active { transform: translateY(22px); }

  /* ── Result (completion) ── */
  .session-result {
    text-align: center;
    font-family: "Sora", sans-serif;
    font-size: 2.2rem;
    color: var(--primary-blue);
    font-weight: 900;
    margin: 14px 0;
  }

  /* ── Review / mistake cards ── */
  .mistake-list { display: grid; gap: 10px; margin-top: 14px; }
  .mistake-card {
    border: 1px solid var(--border);
    border-radius: 12px;
    background: rgba(255,255,255,0.82);
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .mistake-card strong { color: var(--dark-blue); font-size: 0.92rem; }
  .mistake-card span { color: var(--text-light); font-weight: 800; font-size: 0.84rem; }

  /* ── Achievements ── */
  .achievement-strip { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; margin-top: 14px; }
  .achievement-chip {
    border: 1px solid var(--border);
    border-radius: 12px;
    background: rgba(255,255,255,0.84);
    padding: 12px;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .achievement-chip i { width: 34px; height: 34px; border-radius: 10px; display: grid; place-items: center; color: white; flex-shrink: 0; }
  .achievement-chip strong { display: block; color: var(--dark-blue); font-size: 0.86rem; }
  .achievement-chip span { color: var(--text-light); font-size: 0.72rem; font-weight: 800; }

  /* ── Ready screen ── */
  .session-ready {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
    gap: 16px;
    align-items: stretch;
  }
  .ready-panel, .journey-panel {
    border: 1px solid var(--border);
    background: rgba(255,255,255,0.88);
    border-radius: 18px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    padding: 28px;
  }
  .ready-panel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    background:
      radial-gradient(circle at 14% 16%, color-mix(in srgb, var(--gold) 20%, transparent), transparent 28%),
      linear-gradient(135deg, rgba(255,255,255,0.96), color-mix(in srgb, var(--primary-blue) 6%, white));
  }
  .ready-kicker {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    width: fit-content;
    border-radius: 999px;
    padding: 7px 14px;
    background: var(--light-blue);
    color: var(--primary-blue);
    font-family: "Sora", sans-serif;
    font-size: 0.75rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .ready-title {
    font-family: "Sora", sans-serif;
    font-size: clamp(2rem, 4vw, 3.4rem);
    line-height: 1.05;
    color: var(--dark-blue);
    margin: 0;
  }
  .ready-copy { color: var(--text-light); font-size: 1rem; font-weight: 750; margin: 0; }
  .ready-stats { display: flex; gap: 10px; flex-wrap: wrap; }
  .ready-stat {
    border: 1px solid var(--border);
    background: white;
    border-radius: 12px;
    padding: 11px 14px;
    min-width: 108px;
  }
  .ready-stat strong { display: block; color: var(--dark-blue); font-family: "Sora", sans-serif; font-size: 1.1rem; }
  .ready-stat span { color: var(--text-light); font-size: 0.74rem; font-weight: 850; }
  .journey-panel h2 { font-family: "Sora", sans-serif; color: var(--dark-blue); font-size: 1.1rem; margin: 0 0 14px; }
  .journey-list { display: grid; gap: 8px; }
  .journey-card {
    border: 1px solid var(--border);
    background: white;
    border-radius: 12px;
    padding: 11px 12px;
    display: flex;
    gap: 11px;
    align-items: center;
  }
  .journey-card i { width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center; background: var(--light-blue); color: var(--primary-blue); flex-shrink: 0; font-size: 0.85rem; }
  .journey-card strong { display: block; color: var(--dark-blue); font-family: "Sora", sans-serif; font-size: 0.86rem; }
  .journey-card span { display: block; color: var(--text-light); font-size: 0.75rem; font-weight: 800; }

  /* ── MCQ buttons ── */
  .mcq-btn {
    position: relative;
    padding-left: 50px !important;
    text-align: left;
    border-radius: 12px !important;
  }
  .mcq-key-hint {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    background: #f1f5f9;
    color: #64748b;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 0.72rem;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .mcq-btn.correct .mcq-key-hint,
  .mcq-btn.wrong .mcq-key-hint {
    background: rgba(255,255,255,0.25);
    color: white;
    border-color: rgba(255,255,255,0.4);
  }

  /* ── Kid-friendly game look (same language as the exam result card) ── */
  .session-card { border-radius: 24px; box-shadow: inset 0 -4px 0 rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.06); }
  .session-mode-pill { border-radius: 999px; font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 0.95rem; }
  .session-score-chip {
    display: inline-flex; align-items: center; gap: 6px; border-radius: 999px;
    background: #fef3c7; color: #92400e; border-color: #fcd34d;
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1rem;
  }
  .session-score-chip i { color: #f59e0b; }
  .ps-settings-btn {
    flex-shrink: 0; width: 38px; height: 38px; border-radius: 50%; border: 1px solid #e2e8f0;
    background: #fff; color: #475569; cursor: pointer; font-size: 1rem; margin-left: 6px;
    box-shadow: inset 0 -3px 0 rgba(15,23,42,0.06); transition: transform .15s;
  }
  .ps-settings-btn:hover { transform: rotate(30deg); color: #7c3aed; }
  .ps-abacus-btn {
    flex-shrink: 0; display: inline-flex; align-items: center; gap: 6px; height: 38px; padding: 0 14px; margin-left: 6px;
    border-radius: 999px; border: 2px solid #ddd6fe; background: #f5f3ff; color: #6d28d9; cursor: pointer;
    font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: .9rem;
  }
  .ps-abacus-btn.on { background: #7c3aed; border-color: #7c3aed; color: #fff; }
  @media (max-width: 640px) {
    .ps-abacus-btn { width: 34px; height: 34px; padding: 0; justify-content: center; margin-left: 0; }
    .ps-abacus-btn span { display: none; }
    .ps-settings-btn { width: 34px; height: 34px; margin-left: 0; }
    /* Keep the whole header on one line: the mode name gives way first. */
    .session-game-header { flex-wrap: nowrap !important; gap: 4px !important; }
    .session-game-header .session-mode-pill { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .session-game-header .session-q-counter { white-space: nowrap; flex-shrink: 0; }
  }
  /* Room to scroll the answer box above the open abacus sheet on phones. */
  @media (max-width: 900px) {
    body.abd-open .session-shell { padding-bottom: 360px; }
  }
  .mode-row.review.locked, .mobile-mode-dot.locked { opacity: .45; }
  .ps-settings-backdrop {
    position: fixed; inset: 0; z-index: 1000; background: rgba(15,23,42,0.4);
    display: flex; align-items: center; justify-content: center; padding: 16px;
  }
  .ps-settings-card {
    width: 100%; max-width: 380px; background: #fff; border-radius: 24px; padding: 18px;
    box-shadow: inset 0 -5px 0 rgba(15,23,42,0.06), 0 20px 50px rgba(15,23,42,0.25);
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; color: #0f172a;
  }
  .ps-settings-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px; font-size: 1.2rem; }
  .ps-settings-head i { color: #7c3aed; margin-right: 4px; }
  .ps-settings-close { border: none; background: #f1f5f9; width: 32px; height: 32px; border-radius: 50%; cursor: pointer; color: #475569; }
  .ps-settings-row { margin: 12px 0; }
  .ps-settings-label { font-weight: 700; font-size: 0.95rem; margin-bottom: 6px; color: #334155; }
  .ps-settings-label i { width: 18px; color: #7c3aed; }
  .ps-settings-choices { display: flex; flex-wrap: wrap; gap: 6px; background: #f1f5f9; padding: 4px; border-radius: 14px; }
  .ps-settings-choices button {
    flex: 1 1 0; min-width: 0; white-space: nowrap; border: none; background: transparent; padding: 8px 4px; border-radius: 10px; cursor: pointer;
    font: inherit; font-weight: 700; font-size: 0.9rem; color: #64748b;
  }
  .ps-settings-choices button.active { background: #7c3aed; color: #fff; box-shadow: inset 0 -3px 0 rgba(0,0,0,0.15); }
  .ps-speed-value { float: right; color: #7c3aed; font-size: 0.85rem; }
  .ps-speed-slider { width: 100%; accent-color: #7c3aed; height: 28px; cursor: pointer; }
  .ps-speed-ends { display: flex; justify-content: space-between; font-size: 0.78rem; color: #94a3b8; font-weight: 700; }
  .ps-settings-foot { display: flex; align-items: center; justify-content: space-between; margin-top: 14px; font-size: 0.8rem; color: #94a3b8; }
  .ps-settings-reset { border: 1px solid #e2e8f0; background: #fff; border-radius: 999px; padding: 6px 14px; cursor: pointer; font: inherit; font-weight: 700; color: #475569; }
  .session-streak-chip {
    display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; padding: 6px 12px;
    background: #ffedd5; color: #c2410c; border: 1px solid #fdba74;
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-weight: 800; font-size: 0.95rem;
    animation: kidPop 0.35s ease-out;
  }
  .session-prog-track { height: 14px; background: #eef2f7; overflow: visible; box-shadow: inset 0 2px 3px rgba(15,23,42,0.08); }
  .session-prog-fill {
    position: relative; min-width: 14px;
    background: linear-gradient(90deg, #22c55e, #84cc16 60%, #f59e0b);
  }
  .session-prog-star {
    position: absolute; right: -10px; top: 50%; transform: translateY(-50%);
    color: #f59e0b; font-size: 1.35rem; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
  }
  .session-card .mcq-grid { gap: 12px; }
  .session-card .mcq-btn {
    border-radius: 18px !important; border-width: 2px; min-height: 64px;
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1.5rem;
    box-shadow: inset 0 -4px 0 color-mix(in srgb, var(--primary-blue) 18%, transparent);
  }
  .session-card .mcq-btn:hover:not(:disabled) { transform: translateY(-2px); }
  .session-card .mcq-btn.correct { animation: kidPop 0.35s ease-out; box-shadow: inset 0 -4px 0 rgba(0,0,0,0.15), 0 6px 16px rgba(46,125,50,0.3); }
  .session-card .mcq-btn.wrong { animation: kidShake 0.35s ease-in-out; }
  .session-card .typed-answer-input { border-radius: 16px; font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1.5rem; }
  .feedback-bubble { border-radius: 999px; font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1.15rem; padding: 10px 20px; }
  .session-stage-done { padding-top: 8px; }

  .journey-list { position: relative; gap: 10px; }
  .journey-card {
    position: relative; border-radius: 18px;
    border: 2px solid color-mix(in srgb, var(--stop-color, var(--primary-blue)) 30%, transparent);
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 8%, white);
    box-shadow: inset 0 -3px 0 color-mix(in srgb, var(--stop-color, var(--primary-blue)) 18%, transparent);
  }
  .journey-card i { background: white; color: var(--stop-color, var(--primary-blue)); border-radius: 50%; }
  .journey-card .journey-num {
    display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
    background: var(--stop-color, var(--primary-blue)); color: white;
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-weight: 800; font-size: 1rem;
  }
  .journey-card .journey-num i { background: none; color: white; width: auto; height: auto; font-size: 0.8rem; }
  /* Dotted path joining the stops. */
  .journey-card:not(:last-child)::after {
    content: ""; position: absolute; left: 26px; bottom: -12px; height: 12px;
    border-left: 3px dotted color-mix(in srgb, var(--stop-color, var(--primary-blue)) 55%, transparent);
  }
  .ready-stat { border-radius: 16px; box-shadow: inset 0 -3px 0 rgba(15,23,42,0.05); }
  .ready-stat strong { font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1.4rem; color: var(--primary-blue); }
  .session-btn-next { border-radius: 999px; font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1.1rem; }

  @keyframes kidPop { 0% { transform: scale(0.85); } 60% { transform: scale(1.08); } 100% { transform: scale(1); } }
  @keyframes kidShake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
  @media (prefers-reduced-motion: reduce) {
    .session-streak-chip, .session-card .mcq-btn.correct, .session-card .mcq-btn.wrong { animation: none; }
  }

  /* ── Start card ── */
  .ready-game { gap: 18px; justify-content: center; }
  .ready-top { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
  .ready-badge {
    width: 64px; height: 64px; border-radius: 50%; flex-shrink: 0;
    display: grid; place-items: center; font-size: 1.7rem;
    background: #fff4e8; color: #f97316;
    box-shadow: inset 0 -4px 0 rgba(249,115,22,0.18);
  }
  .ready-heading { display: flex; flex-direction: column; min-width: 0; }
  .ready-hello { font-family: "Fredoka", "Baloo 2", sans-serif; font-weight: 600; font-size: 1.1rem; color: #475569; }
  .ready-game .ready-title { font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: clamp(1.9rem, 3.4vw, 2.6rem); font-weight: 800; }
  .ready-date {
    margin-left: auto; display: inline-flex; align-items: center; gap: 6px;
    padding: 6px 12px; border-radius: 999px; background: var(--light-blue); color: var(--primary-blue);
    font-weight: 800; font-size: 0.85rem;
  }
  .ready-game .ready-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
  .ready-game .ready-stat {
    display: flex; align-items: center; gap: 10px; min-width: 0; padding: 12px;
    border: 2px solid color-mix(in srgb, var(--tile) 25%, transparent);
    background: color-mix(in srgb, var(--tile) 8%, white);
    box-shadow: inset 0 -3px 0 color-mix(in srgb, var(--tile) 18%, transparent);
  }
  .ready-stat-icon {
    width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0; display: grid; place-items: center;
    background: white; color: var(--tile); font-size: 1rem; box-shadow: 0 2px 6px rgba(15,23,42,0.08);
  }
  .ready-game .ready-stat strong { color: var(--tile); line-height: 1.1; }
  .ready-game .ready-stat span span { display: block; color: #334155; font-size: 0.85rem; font-weight: 700; }
  .ready-reward {
    display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 16px;
    background: #fef9e7; color: #92400e; font-family: "Fredoka", "Baloo 2", sans-serif; font-weight: 600; font-size: 1rem;
  }
  .ready-reward-stars { display: inline-flex; gap: 3px; color: #f59e0b; font-size: 1.05rem; }
  .ready-game .session-btn-next { padding: 14px 28px; font-size: 1.2rem; }
  @media (max-width: 640px) {
    .ready-date { margin-left: 0; }
    .ready-game .ready-stats { gap: 8px; }
    .ready-game .ready-stat { flex-direction: column; text-align: center; padding: 10px 6px; }
  }

  /* ── Responsive: tablet ── */
  @media (max-width: 900px) {
    .session-grid { grid-template-columns: 220px 1fr; }
    .playing-active .session-grid { grid-template-columns: 1fr; }
    .session-ready { grid-template-columns: 1fr; }
    .session-hero { padding: 22px 20px; }
  }
  /* ── Responsive: mobile ── */
  @media (max-width: 640px) {
    body .app-layout .main-content .page-wrap.session-page-wrap { padding-top: calc(var(--nav-h) + 6px) !important; }
    .session-shell { padding: 0 12px 24px; }
    .session-hero { margin-top: 0 !important; }
    .session-hero { flex-direction: column; align-items: flex-start; gap: 8px; padding: 16px 14px; border-radius: 14px; }
    .playing-active .session-hero { flex-direction: row; align-items: center; padding: 10px 14px; }
    .playing-active .session-hero p { display: none; }
    .session-grid { grid-template-columns: 1fr; }
    .playing-active .session-grid { grid-template-columns: 1fr; }
    .playing-active .mode-list { display: none; }
    .session-card { padding: 14px; border-radius: 14px; min-height: unset; }
    .session-stage { padding: 20px 10px; min-height: 150px; }
    .session-expression { font-size: clamp(1.8rem, 9vw, 3rem); }
    .session-vertical { font-size: clamp(1.6rem, 8vw, 2.6rem); }
    .session-game-header { gap: 6px; flex-wrap: nowrap; overflow: hidden; }
    .session-mode-pill { font-size: 0.75rem; padding: 5px 10px; white-space: nowrap; }
    .session-q-counter { font-size: 0.75rem; white-space: nowrap; }
    .session-score-chip { font-size: 0.75rem; padding: 5px 10px; white-space: nowrap; flex-shrink: 0; }
    /* Hide inline layout-toggle in header; we show it in the sub-bar instead */
    .layout-toggle-inline { display: none; }
    .typed-answer-row { gap: 8px; }
    .typed-answer-input { font-size: 1rem; padding: 12px 14px; }
    .typed-answer-submit { padding: 0 16px; font-size: 0.8rem; min-height: 46px; }
    .session-action-bar { padding-top: 10px; margin-top: 10px; }
    .session-btn-next { width: 100%; justify-content: center; padding: 14px 20px; }
    .session-btn-ghost { width: 100%; justify-content: center; }
    .ready-panel { padding: 20px 16px; }
    .journey-panel { display: none; }
    .session-ready { grid-template-columns: 1fr; }

    /* ── Mobile mode strip ── */
    .mobile-sub-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 8px 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .mobile-mode-strip {
      display: flex;
      overflow-x: auto;
      gap: 4px;
      flex: 1;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
    }
    .mobile-mode-strip::-webkit-scrollbar { display: none; }
    .mobile-mode-dot {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      cursor: pointer;
      padding: 5px 8px;
      border-radius: 8px;
      border: 1px solid transparent;
      transition: all 0.18s;
    }
    .mobile-mode-dot i { font-size: 1rem; color: var(--text-light); }
    .mobile-mode-dot span { font-size: 0.58rem; font-weight: 700; color: var(--text-light); }
    .mobile-mode-dot.active {
      background: color-mix(in srgb, var(--accent) 12%, transparent);
      border-color: color-mix(in srgb, var(--accent) 35%, transparent);
    }
    .mobile-mode-dot.active i,
    .mobile-mode-dot.active span { color: var(--accent); }
    .mobile-mode-dot.done i,
    .mobile-mode-dot.done span { color: var(--ok); opacity: 0.75; }
    /* H/V toggle — clear segmented button pair */
    .mobile-layout-toggle {
      display: flex;
      flex-shrink: 0;
      margin-left: 6px;
      border: 1.5px solid var(--border);
      border-radius: 10px;
      overflow: hidden;
      background: #f1f5f9;
    }
    .mobile-layout-toggle button {
      border: 0;
      background: transparent;
      color: var(--text-light);
      font-size: 0.72rem;
      font-weight: 800;
      padding: 7px 11px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      line-height: 1;
      transition: all 0.15s;
      white-space: nowrap;
    }
    .mobile-layout-toggle button:first-child {
      border-right: 1.5px solid var(--border);
    }
    .mobile-layout-toggle button.active {
      background: var(--primary-blue);
      color: #fff;
    }
    .mobile-layout-toggle button:not(.active):hover {
      background: #e2e8f0;
      color: var(--dark-blue);
    }
  }

  /* ── Inside the practice: same colours and shapes as the journey map ── */
  .mode-list { border-radius: 22px; padding: 14px; gap: 10px; }
  .mode-row {
    border: 2px solid color-mix(in srgb, var(--stop-color, var(--primary-blue)) 22%, transparent);
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 6%, white);
    border-radius: 16px;
  }
  .mode-row:hover:not(.active) { background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 12%, white); }
  .mode-row i {
    border-radius: 50%; background: white; color: var(--stop-color, var(--primary-blue));
    box-shadow: 0 2px 6px rgba(15,23,42,0.08);
  }
  .mode-row .journey-step { font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1rem; }
  .mode-row.active {
    border-color: var(--stop-color, var(--primary-blue));
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 14%, white);
    box-shadow: inset 0 -3px 0 color-mix(in srgb, var(--stop-color, var(--primary-blue)) 30%, transparent);
  }
  .mode-row.active i,
  .playing-active .mode-row.active:hover i { background: var(--stop-color, var(--primary-blue)); color: white; }
  .playing-active .mode-row:hover i { background: white; color: var(--stop-color, var(--primary-blue)); }
  .mode-row.done { border-color: color-mix(in srgb, #22c55e 35%, transparent); background: #f0fdf4; }
  .mode-row.done i { background: #22c55e; color: white; }
  .mode-row.done .journey-step { color: #15803d; }
  .playing-active .mode-list { border-radius: 18px; padding: 10px; gap: 8px; }
  .playing-active .mode-row { border-radius: 999px; padding: 6px 12px 6px 6px; }

  .session-card { border-top: 6px solid var(--stop-color, var(--primary-blue)); }
  .session-card .session-mode-pill {
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 14%, white);
    color: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 70%, #0f172a);
    border-color: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 35%, transparent);
  }
  .session-q-counter {
    border-radius: 999px; padding: 5px 12px; background: #f1f5f9; color: #334155;
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 0.95rem;
  }
  .session-expression,
  .session-vertical {
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif;
    color: #0f172a;
  }
  .session-vertical .vrow-sign,
  .session-vertical .vtotal { color: var(--stop-color, var(--primary-blue)); }
  .session-sub { font-family: "Fredoka", "Baloo 2", sans-serif; font-weight: 600; font-size: 1.05rem; color: #475569; }
  .session-card .mcq-btn:not(.correct):not(.wrong) {
    border-color: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 45%, transparent);
    color: #0f172a;
    box-shadow: inset 0 -4px 0 color-mix(in srgb, var(--stop-color, var(--primary-blue)) 22%, transparent);
  }
  .session-card .mcq-btn:hover:not(:disabled) { background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 10%, white); }
  .session-card .mcq-key-hint {
    border-radius: 50%; border: none;
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 15%, white);
    color: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 70%, #0f172a);
  }

  .countdown-ring {
    background:
      radial-gradient(circle, white 56%, transparent 57%),
      conic-gradient(#22c55e, #f59e0b, #ec4899, #3b82f6, #22c55e);
  }
  .countdown-ring strong,
  .countdown-title { font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; }
  .countdown-copy { font-family: "Fredoka", "Baloo 2", sans-serif; font-weight: 600; color: #475569; }

  .review-head { display: flex; align-items: center; gap: 12px; }
  .review-badge {
    width: 52px; height: 52px; border-radius: 50%; flex-shrink: 0; display: grid; place-items: center;
    background: #fef3c7; color: #d97706; font-size: 1.3rem; box-shadow: inset 0 -3px 0 rgba(217,119,6,0.18);
  }
  .review-title { margin: 0 !important; font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; text-align: left; }
  .mistake-card {
    flex-direction: row; align-items: center; gap: 12px; border-radius: 18px; border: 2px solid #fde2e2;
    background: #fff7f7; box-shadow: inset 0 -3px 0 rgba(185,28,28,0.06);
  }
  .mistake-num {
    width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0; display: grid; place-items: center;
    background: #f97316; color: white !important; font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 0.95rem !important;
  }
  .mistake-body { display: flex; flex-direction: column; min-width: 0; flex: 1; text-align: left; }
  .mistake-body strong { font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1.15rem; color: #0f172a; }
  .mistake-body small { color: #64748b; font-weight: 700; }
  .mistake-answers { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
  .mistake-chip {
    display: inline-flex; align-items: center; gap: 5px; border-radius: 999px; padding: 4px 10px;
    font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 1rem !important;
  }
  .mistake-chip.wrong { background: #fee2e2; color: #b91c1c !important; text-decoration: line-through; }
  .mistake-chip.right { background: #dcfce7; color: #15803d !important; }

  @media (max-width: 640px) {
    .session-card { border-top-width: 5px; }
    .mobile-mode-dot { border-radius: 12px; }
    .mobile-mode-dot i { color: var(--stop-color, var(--text-light)); }
    .mobile-mode-dot.active {
      background: color-mix(in srgb, var(--stop-color, var(--accent)) 14%, white);
      border-color: var(--stop-color, var(--accent));
    }
    .mobile-mode-dot.active i,
    .mobile-mode-dot.active span { color: var(--stop-color, var(--accent)); }
    .mobile-mode-dot.done i,
    .mobile-mode-dot.done span { color: #16a34a; opacity: 1; }
    .mistake-card { flex-wrap: wrap; }
    .mistake-answers { width: 100%; justify-content: flex-start; padding-left: 42px; }
  }


  /* Long sums: size each row from the screen height so the whole sum and
     the answers fit without scrolling; short sums keep their big size. */
  .session-vertical {
    font-size: clamp(1.2rem, calc((100vh - 430px) / (var(--rows, 4) * 1.3)), 3rem);
    line-height: 1.2;
  }
  .session-vertical .vrule { margin: 2px 0 4px; }
  .session-expression { font-size: clamp(1.8rem, 4vw, 3.4rem); }
  .session-stage:has(.session-vertical) { padding: 12px 20px; min-height: 0; gap: 6px; }
  @media (max-width: 640px) {
    .session-vertical { font-size: clamp(1.1rem, calc((100vh - 400px) / (var(--rows, 4) * 1.3)), 2.4rem); }
  }


  /* Grid items default to their content's width; let the card shrink to the
     screen so nothing is pushed off the right edge on phones. */
  .session-grid > *, .session-card, .session-answer-area, .typed-answer-wrap { min-width: 0; max-width: 100%; }
  @media (max-width: 640px) {
    .session-game-header { flex-wrap: wrap; overflow: visible; row-gap: 8px; }
    .session-game-header .session-spacer { display: none; }
    .session-score-chip { margin-left: auto; }
    .session-card .typed-answer-input { font-size: 1.25rem; padding: 12px 14px; }
    .typed-answer-submit { padding: 0 14px; }
  }


  /* ── Game feedback: Wow! / Oh no! / fire streak ── */
  .feedback-pop { min-height: 60px; }
  .feedback-bubble {
    gap: 10px; padding: 10px 22px; border-radius: 999px; border-width: 2px;
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-weight: 800; font-size: 1.6rem; line-height: 1;
    animation: fbBurst 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .feedback-character { width: 38px; height: 38px; border-radius: 50%; font-size: 1.15rem; background: white; }
  .feedback-bubble.correct { color: #15803d; background: #dcfce7; border-color: #86efac; }
  .feedback-bubble.correct .feedback-character { color: #f59e0b; }
  .feedback-bubble.wrong { color: #b91c1c; background: #fee2e2; border-color: #fca5a5; animation: fbShake 0.4s ease-in-out; }
  .feedback-bubble.wrong .feedback-character { color: #dc2626; }
  .feedback-bubble.streak {
    color: white; border-color: #fdba74;
    background: linear-gradient(135deg, #f97316, #ef4444 55%, #dc2626);
    box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4), inset 0 -3px 0 rgba(0,0,0,0.15);
    text-shadow: 0 1px 2px rgba(0,0,0,0.25);
    font-size: 1.8rem;
  }
  .feedback-bubble.streak .feedback-character { color: #f97316; animation: fbFlicker 0.6s ease-in-out infinite alternate; }
  .feedback-flames { display: inline-flex; gap: 2px; font-size: 1.1rem; color: #fde047; }
  .feedback-flames i { animation: fbFlame 0.5s ease-out both; }
  /* Scale only, never opacity, so a paused or skipped animation still shows the bubble. */
  @keyframes fbBurst { 0% { transform: scale(0.4); } 100% { transform: scale(1); } }
  @keyframes fbShake { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-8px); } 40% { transform: translateX(8px); } 60% { transform: translateX(-5px); } 80% { transform: translateX(5px); } }
  @keyframes fbFlicker { from { transform: scale(1) rotate(-6deg); } to { transform: scale(1.15) rotate(6deg); } }
  @keyframes fbFlame { 0% { transform: translateY(8px) scale(0.3); opacity: 0; } 100% { transform: none; opacity: 1; } }
  @media (prefers-reduced-motion: reduce) {
    .feedback-bubble, .feedback-bubble .feedback-character, .feedback-flames i { animation: none !important; }
  }
  @media (max-width: 640px) {
    .feedback-bubble { font-size: 1.35rem; padding: 8px 18px; }
    .feedback-bubble.streak { font-size: 1.5rem; }
  }


  /* ── Screen shake on a miss (two names so back-to-back misses replay) ── */
  .fx-shake-0 { animation: screenShakeA 0.45s cubic-bezier(.36,.07,.19,.97) both; }
  .fx-shake-1 { animation: screenShakeB 0.45s cubic-bezier(.36,.07,.19,.97) both; }
  .fx-bigShake-0 { animation: screenBigShakeA 0.7s cubic-bezier(.36,.07,.19,.97) both; }
  .fx-bigShake-1 { animation: screenBigShakeB 0.7s cubic-bezier(.36,.07,.19,.97) both; }
  @keyframes screenShakeA {
    10%, 90% { transform: translateX(-3px); } 20%, 80% { transform: translateX(6px); }
    30%, 50%, 70% { transform: translateX(-10px); } 40%, 60% { transform: translateX(10px); }
  }
  @keyframes screenShakeB {
    10%, 90% { transform: translateX(-3px); } 20%, 80% { transform: translateX(6px); }
    30%, 50%, 70% { transform: translateX(-10px); } 40%, 60% { transform: translateX(10px); }
  }
  @keyframes screenBigShakeA {
    10%, 90% { transform: translate(-4px, 2px) rotate(-0.5deg); } 20%, 80% { transform: translate(10px, -3px) rotate(0.8deg); }
    30%, 50%, 70% { transform: translate(-18px, 4px) rotate(-1.2deg); } 40%, 60% { transform: translate(18px, -4px) rotate(1.2deg); }
  }
  @keyframes screenBigShakeB {
    10%, 90% { transform: translate(-4px, 2px) rotate(-0.5deg); } 20%, 80% { transform: translate(10px, -3px) rotate(0.8deg); }
    30%, 50%, 70% { transform: translate(-18px, 4px) rotate(-1.2deg); } 40%, 60% { transform: translate(18px, -4px) rotate(1.2deg); }
  }

  /* ── Party poppers on a streak ── */
  .party-poppers { position: fixed; inset: 0; pointer-events: none; z-index: 1200; overflow: hidden; }
  .popper-cone {
    position: absolute; bottom: 18px; font-size: 2.6rem; color: #f59e0b;
    filter: drop-shadow(0 3px 4px rgba(0,0,0,0.2));
    animation: popperCone 1.4s ease-out both;
  }
  .popper-cone-left { left: 18px; --tilt: 25deg; }
  .popper-cone-right { right: 18px; --tilt: -25deg; }
  .popper-piece {
    position: absolute; bottom: 40px; width: 9px; height: 12px; border-radius: 2px;
    animation: popperBurst 1.5s cubic-bezier(.15,.7,.3,1) both;
  }
  .popper-strip { width: 4px; height: 18px; }
  .popper-left { left: 40px; }
  .popper-right { right: 40px; }
  @keyframes popperBurst {
    0% { transform: translate(0, 0) rotate(0); opacity: 1; }
    70% { opacity: 1; }
    100% { transform: translate(var(--dx), calc(var(--dy) + 140px)) rotate(var(--spin)); opacity: 0; }
  }
  @keyframes popperCone {
    0% { transform: rotate(var(--tilt)) scale(0.4); opacity: 0; }
    15% { transform: rotate(var(--tilt)) scale(1.25); opacity: 1; }
    30% { transform: rotate(var(--tilt)) scale(1); }
    85% { opacity: 1; }
    100% { transform: rotate(var(--tilt)) scale(1); opacity: 0; }
  }
  @media (prefers-reduced-motion: reduce) {
    .fx-shake-0, .fx-shake-1, .fx-bigShake-0, .fx-bigShake-1 { animation: none; }
    .party-poppers { display: none; }
  }


  /* ── Math symbols ── */
  .session-power { font-size: 0.55em; vertical-align: super; margin-left: 2px; line-height: 0; }
  .session-root { display: inline-flex; align-items: flex-end; line-height: 1; }
  .session-root-sign { font-size: 1.3em; line-height: 1; margin-right: -0.06em; transform: translateY(0.06em); }
  .session-radicand { border-top: 0.08em solid currentColor; padding: 0.06em 0.1em 0; line-height: 1.05; }
  .session-root-index { font-size: 0.42em; line-height: 1; align-self: flex-start; margin-right: -0.55em; margin-top: 0.25em; }

  /* ── Soroban ── */
  .soroban { width: 100%; height: auto; filter: drop-shadow(0 8px 16px rgba(120, 53, 15, 0.25)); }
  .soroban-bead path { transition: transform 0.25s ease; }
  @media (max-width: 640px) { .soroban { max-height: 42vh; } }


  /* ── Picture games ── */
  .fun-blank {
    display: inline-grid; place-items: center; min-width: 1.4em; padding: 0 0.15em; border-radius: 0.3em;
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 14%, white);
    color: var(--stop-color, var(--primary-blue)); border: 0.06em dashed currentColor;
  }
  .fun-frame {
    display: grid; grid-template-columns: repeat(var(--cols), 1fr); gap: 6px; padding: 10px;
    border-radius: 16px; background: #fffbeb; border: 3px solid #b45309; max-width: 420px; width: 100%;
  }
  .fun-frame:empty { display: none; }
  .fun-frame:has(.fun-dot:nth-child(6)) { grid-template-columns: repeat(5, 1fr); }
  .fun-dot { aspect-ratio: 1; border-radius: 50%; border: 2px dashed #d6b98a; background: white; }
  .fun-dot.filled { border: none; background: radial-gradient(circle at 35% 30%, #fb923c, #dc2626); box-shadow: inset 0 -3px 0 rgba(0,0,0,0.15); }

  .fun-pattern { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
  .fun-step {
    position: relative; min-width: 64px; padding: 12px 14px; border-radius: 18px; text-align: center;
    font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 1.8rem; color: #0f172a;
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 10%, white);
    border: 2px solid color-mix(in srgb, var(--stop-color, var(--primary-blue)) 35%, transparent);
    box-shadow: inset 0 -3px 0 color-mix(in srgb, var(--stop-color, var(--primary-blue)) 20%, transparent);
  }
  .fun-step-next { border-style: dashed; color: var(--stop-color, var(--primary-blue)); animation: funBob 1.2s ease-in-out infinite; }

  .fun-double { display: flex; align-items: center; gap: 12px; }
  .fun-card {
    display: grid; place-items: center; min-width: 84px; height: 96px; padding: 0 12px; border-radius: 18px;
    font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 2.6rem; color: white;
    background: linear-gradient(160deg, #8b5cf6, #6d28d9); box-shadow: inset 0 -5px 0 rgba(0,0,0,0.18);
  }
  .fun-card-twin { animation: funTwin 0.5s ease-out both; }
  .fun-plus { font-family: "Baloo 2", sans-serif; font-weight: 800; font-size: 2rem; color: #6d28d9; }
  .fun-double-label { font-size: clamp(1.4rem, 3vw, 2.2rem) !important; }

  .fun-coins { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; max-width: 520px; }
  .fun-coin {
    display: grid; place-items: center; width: 74px; height: 74px; border-radius: 50%;
    font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 1.35rem; color: #713f12;
    background: radial-gradient(circle at 35% 30%, #fef3c7, #f59e0b 70%, #b45309);
    border: 3px solid #d97706; box-shadow: inset 0 -4px 0 rgba(0,0,0,0.15), 0 3px 8px rgba(0,0,0,0.12);
    animation: funDrop 0.4s cubic-bezier(.34,1.56,.64,1) both;
  }
  .fun-coin[data-value="1"], .fun-coin[data-value="2"] {
    color: #334155; border-color: #94a3b8; background: radial-gradient(circle at 35% 30%, #f8fafc, #cbd5e1 70%, #94a3b8);
  }
  .fun-coin.note {
    width: 104px; height: 60px; border-radius: 10px; color: #14532d; border-color: #16a34a;
    background: linear-gradient(135deg, #dcfce7, #86efac);
  }
  .fun-coin.note[data-value="50"], .fun-coin.note[data-value="100"] { color: #581c87; border-color: #9333ea; background: linear-gradient(135deg, #f3e8ff, #d8b4fe); }

  @keyframes funBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
  /* Movement only, never opacity: if an animation is paused or skipped the
     card or coin is still visible. */
  @keyframes funTwin { from { transform: translateX(-60px) scale(0.8); } to { transform: none; } }
  @keyframes funDrop { from { transform: translateY(-24px) scale(0.6); } to { transform: none; } }

  .fun-count { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; max-width: 460px; font-size: 2.6rem; line-height: 1; }
  .fun-count span { animation: funDrop 0.4s cubic-bezier(.34,1.56,.64,1) both; }
  .fun-drum {
    display: grid; place-items: center; width: 132px; height: 132px; border-radius: 50%; font-size: 3.6rem;
    background: radial-gradient(circle at 40% 35%, #fde68a, #f59e0b 65%, #b45309); border: 6px solid #92400e;
    box-shadow: inset 0 -6px 0 rgba(0,0,0,0.18); cursor: pointer;
  }
  .fun-drum.hit { animation: funHit 0.18s ease-out; }
  .fun-clock { width: min(220px, 60vw); height: auto; }
  .fun-shop { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; justify-content: center; }
  .fun-tag {
    font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 1.6rem; color: #9a3412;
    padding: 6px 14px; border-radius: 12px; background: #ffedd5; border: 2px dashed #ea580c;
  }
  .fun-toy { font-size: 3.4rem; }
  @keyframes funHit { 50% { transform: scale(0.88); } }
  @media (prefers-reduced-motion: reduce) { .fun-step-next, .fun-card-twin, .fun-coin { animation: none; } }
  @media (max-width: 640px) {
    .fun-step { min-width: 52px; font-size: 1.4rem; padding: 8px 10px; }
    .fun-card { min-width: 64px; height: 76px; font-size: 2rem; }
    .fun-coin { width: 60px; height: 60px; font-size: 1.1rem; }
    .fun-coin.note { width: 86px; height: 50px; }
  }


  /* Long journeys: the start card keeps its own height (it stretched to the
     list's and floated to the bottom), stays in view while scrolling, and on
     PC the list scrolls inside its panel instead of making the page huge. */
  .session-ready { align-items: start; }
  .ready-game { justify-content: flex-start; }
  @media (min-width: 901px) {
    .ready-game { position: sticky; top: calc(var(--nav-h) + 16px); }
    .journey-panel { display: flex; flex-direction: column; max-height: calc(100vh - var(--nav-h) - 40px); }
    .journey-panel .journey-list {
      overflow-y: auto; min-height: 0; padding: 4px 6px 6px 2px; margin-right: -6px;
      scrollbar-width: thin; scrollbar-color: #cbd5e1 transparent;
    }
  }


  /* Exit pill shown in full-screen practice. */
  .focus-exit {
    display: inline-flex; align-items: center; gap: 8px; margin: 0 0 12px; min-height: 44px; padding: 8px 18px;
    border-radius: 999px; border: 2px solid var(--border); background: white; color: #334155; cursor: pointer;
    font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 1rem;
    box-shadow: inset 0 -3px 0 rgba(15,23,42,0.06);
  }
  .focus-exit:hover { border-color: #fca5a5; color: #b91c1c; }
  /* On PC the Exit pill sits inside the stops row instead of on its own line,
     so the question fits on screen without scrolling. The stops scroll
     sideways beside it when there are many. */
  .row-exit { display: none; }
  @media (min-width: 901px) {
    .session-shell.playing-active > .focus-exit { display: none; }
    .playing-active .mode-list .row-exit {
      display: inline-flex; align-items: center; gap: 6px; flex-shrink: 0; align-self: center;
      height: 40px; padding: 0 16px; margin-right: 6px; border-radius: 999px;
      border: 2px solid #fecaca; background: #fff5f5; color: #dc2626; cursor: pointer;
      font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 0.9rem;
      box-shadow: inset 0 -3px 0 rgba(220,38,38,0.1);
    }
    .playing-active .mode-list .row-exit:hover { background: #fee2e2; border-color: #f87171; }
  }


  /* Full-screen practice reads as one centred game card, not an edge-to-edge
     page: on a wide screen the question and answer box stayed tiny in a sea
     of space. Phones keep their full width. */
  body.practice-session-focus .session-shell { max-width: 880px; margin-left: auto; margin-right: auto; }
  body.practice-session-focus .session-grid { grid-template-columns: 1fr; }
  .focus-exit { width: fit-content; align-self: flex-start; }
  body.practice-session-focus .typed-answer-wrap { max-width: 560px; width: 100%; margin: 0 auto; }
  body.practice-session-focus .mcq-grid { max-width: 640px; margin-left: auto; margin-right: auto; }

`,Te=3,x=[`#3b82f6`,`#22c55e`,`#f59e0b`,`#ec4899`,`#8b5cf6`,`#06b6d4`],Ee=[`Warm Up`,`Brain Builder`,`Speed Round`,`Focus Finish`,`Missing Link`,`Compare Clash`];function De(e){let t=new Date(`${e}T00:00:00`);return Number.isNaN(t.getTime())?e:t.toLocaleDateString(`en-IN`,{weekday:`short`,day:`numeric`,month:`short`})}function Oe(){return new Date().toLocaleDateString(`en-CA`)}var S=0,ke=[],Ae=[/natural/i,/google uk english female/i,/google us english/i,/samantha/i,/online/i,/google/i],C=null;function je(){if(!(`speechSynthesis`in window))return null;if(C)return C;let e=window.speechSynthesis.getVoices().filter(e=>/^en(-|_|$)/i.test(e.lang));if(!e.length)return null;for(let t of Ae){let n=e.find(e=>t.test(e.name));if(n)return C=n}return C=e.find(e=>/en-IN/i.test(e.lang))||e[0]}typeof window<`u`&&`speechSynthesis`in window&&window.speechSynthesis.addEventListener?.(`voiceschanged`,()=>{C=null,je()});function Me(){`speechSynthesis`in window&&(S++,window.speechSynthesis.cancel())}function Ne(){if(!(`speechSynthesis`in window))return;let e=new SpeechSynthesisUtterance(` `);e.volume=0,window.speechSynthesis.speak(e)}function Pe(e,t=.8,n=null){if(!(`speechSynthesis`in window))return!1;let r=++S;window.speechSynthesis.cancel();let i=je(),a=e.map((e,t)=>t===0?String(e):e<0?`minus ${Math.abs(e)}`:`plus ${e}`),o=0;function s(){if(r!==S)return;if(o>=a.length){n?.(-1),ke.length=0;return}n?.(o);let e=new SpeechSynthesisUtterance(a[o]);e.rate=t,e.lang=i?.lang||`en-IN`,i&&(e.voice=i),ke.push(e);let c=!1,l=()=>{c||(c=!0,clearTimeout(u),o++,setTimeout(s,500))},u=setTimeout(l,Math.max(3e3,a[o].length*250/t));e.onend=l,e.onerror=l,window.speechSynthesis.resume(),window.speechSynthesis.speak(e)}return setTimeout(s,80),!0}function Fe(e,t){let n=e?.[t];return(typeof n==`string`?n:n?.mode)===`voice`}function Ie(e=!1){`vibrate`in navigator&&navigator.vibrate(e?[120,50,120,50,200]:[80,40,80])}var Le=[`#f43f5e`,`#f59e0b`,`#22c55e`,`#3b82f6`,`#a855f7`,`#ec4899`,`#facc15`];function Re(){let e=[];return[`left`,`right`].forEach(t=>{for(let n=0;n<26;n+=1){let r=n/25*50+15,i=260+n*53%220,a=r*Math.PI/180,o=Math.sin(a)*i*(t===`left`?1:-1),s=-Math.cos(a)*i;e.push((0,v.jsx)(`span`,{className:`popper-piece popper-${t}${n%3==0?` popper-strip`:``}`,style:{"--dx":`${o}px`,"--dy":`${s}px`,"--spin":`${(n%2?1:-1)*(360+n*25)}deg`,background:Le[n%Le.length],animationDelay:`${n%5*.02}s`}},`${t}-${n}`))}}),(0,v.jsxs)(`div`,{className:`party-poppers`,"aria-hidden":`true`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-champagne-glasses popper-cone popper-cone-left`}),(0,v.jsx)(`i`,{className:`fa-solid fa-champagne-glasses popper-cone popper-cone-right`}),e]})}var ze={colW:64,side:18,frame:16,heaven:70,bar:12,earth:132,beadW:50,beadH:25};function w({cx:e,cy:t,active:n}){let r=ze.beadW/2,i=ze.beadH/2,a=r*.36;return(0,v.jsxs)(`g`,{className:`soroban-bead${n?` active`:``}`,children:[(0,v.jsx)(`path`,{d:`M ${e-r} ${t} L ${e-a} ${t-i} L ${e+a} ${t-i} L ${e+r} ${t} L ${e+a} ${t+i} L ${e-a} ${t+i} Z`,fill:n?`url(#beadActive)`:`url(#beadWood)`,stroke:n?`#9a3412`:`#a16207`,strokeWidth:`1.2`,strokeLinejoin:`round`}),(0,v.jsx)(`ellipse`,{cx:e-r*.3,cy:t-i*.45,rx:r*.3,ry:i*.22,fill:`white`,opacity:n?.45:.35})]})}function Be({count:e}){let[t,n]=(0,_.useState)(0),[r,i]=(0,_.useState)(0),a=(0,_.useRef)([]),o=(0,_.useCallback)(()=>{a.current.forEach(clearTimeout),a.current.length=0,n(0);let t=null;try{t=new(window.AudioContext||window.webkitAudioContext)}catch{t=null}for(let r=0;r<e;r+=1)a.current.push(setTimeout(()=>{if(n(r+1),i(e=>e+1),!t)return;let e=t.createOscillator(),a=t.createGain();e.frequency.setValueAtTime(150,t.currentTime),e.frequency.exponentialRampToValueAtTime(50,t.currentTime+.25),a.gain.setValueAtTime(.9,t.currentTime),a.gain.exponentialRampToValueAtTime(.001,t.currentTime+.3),e.connect(a).connect(t.destination),e.start(),e.stop(t.currentTime+.3)},600+r*650));a.current.push(setTimeout(()=>{n(-1),t?.close?.()},600+e*650+300))},[e]);return(0,_.useEffect)(()=>{let e=setTimeout(o,0),t=a.current;return()=>{clearTimeout(e),t.forEach(clearTimeout)}},[o]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`button`,{type:`button`,className:`fun-drum${r?` hit`:``}`,onClick:o,"aria-label":`Play the beats again`,children:`🥁`},r),(0,v.jsx)(`div`,{className:`session-sub`,children:t===-1?`Tap the drum to hear it again`:`Listen...`})]})}function Ve({hour:e,minute:t}){let n=e%12*30+t*.5,r=t*6;return(0,v.jsxs)(`svg`,{className:`fun-clock`,viewBox:`0 0 200 200`,"aria-hidden":`true`,children:[(0,v.jsx)(`circle`,{cx:`100`,cy:`100`,r:`94`,fill:`#fff`,stroke:`#2563eb`,strokeWidth:`8`}),Array.from({length:60},(e,t)=>(0,v.jsx)(`line`,{x1:`100`,y1:`12`,x2:`100`,y2:t%5?18:24,stroke:t%5?`#cbd5e1`:`#334155`,strokeWidth:t%5?1.5:3,transform:`rotate(${t*6} 100 100)`},t)),Array.from({length:12},(e,t)=>{let n=t+1,r=n*30*Math.PI/180;return(0,v.jsx)(`text`,{x:100+62*Math.sin(r),y:100-62*Math.cos(r)+7,textAnchor:`middle`,fontSize:`20`,fontWeight:`800`,fill:`#0f172a`,fontFamily:`Baloo 2, Fredoka, sans-serif`,children:n},n)}),(0,v.jsx)(`line`,{x1:`100`,y1:`100`,x2:`100`,y2:`54`,stroke:`#dc2626`,strokeWidth:`8`,strokeLinecap:`round`,transform:`rotate(${n} 100 100)`}),(0,v.jsx)(`line`,{x1:`100`,y1:`100`,x2:`100`,y2:`30`,stroke:`#0f172a`,strokeWidth:`5`,strokeLinecap:`round`,transform:`rotate(${r} 100 100)`}),(0,v.jsx)(`circle`,{cx:`100`,cy:`100`,r:`7`,fill:`#0f172a`})]})}function He({value:e}){let t=String(e).padStart(2,`0`).split(``).map(Number),{colW:n,side:r,frame:i,heaven:a,bar:o,earth:s,beadH:c}=ze,l=r*2+n*t.length,u=i+a,ee=u+o,d=ee+s,f=d+i;return(0,v.jsxs)(`svg`,{className:`soroban`,viewBox:`0 0 ${l} ${f}`,style:{maxWidth:l},role:`img`,"aria-label":`Read the number shown on the abacus`,children:[(0,v.jsxs)(`defs`,{children:[(0,v.jsxs)(`linearGradient`,{id:`frameWood`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,v.jsx)(`stop`,{offset:`0`,stopColor:`#b45309`}),(0,v.jsx)(`stop`,{offset:`1`,stopColor:`#78350f`})]}),(0,v.jsxs)(`linearGradient`,{id:`beadWood`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,v.jsx)(`stop`,{offset:`0`,stopColor:`#fde68a`}),(0,v.jsx)(`stop`,{offset:`0.5`,stopColor:`#e9b872`}),(0,v.jsx)(`stop`,{offset:`1`,stopColor:`#c08a3e`})]}),(0,v.jsxs)(`linearGradient`,{id:`beadActive`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,v.jsx)(`stop`,{offset:`0`,stopColor:`#fb923c`}),(0,v.jsx)(`stop`,{offset:`0.5`,stopColor:`#ef4444`}),(0,v.jsx)(`stop`,{offset:`1`,stopColor:`#b91c1c`})]}),(0,v.jsxs)(`linearGradient`,{id:`rodMetal`,x1:`0`,y1:`0`,x2:`1`,y2:`0`,children:[(0,v.jsx)(`stop`,{offset:`0`,stopColor:`#94a3b8`}),(0,v.jsx)(`stop`,{offset:`0.5`,stopColor:`#f1f5f9`}),(0,v.jsx)(`stop`,{offset:`1`,stopColor:`#64748b`})]})]}),(0,v.jsx)(`rect`,{x:`0`,y:`0`,width:l,height:f,rx:`14`,fill:`url(#frameWood)`}),(0,v.jsx)(`rect`,{x:r-4,y:i,width:l-(r-4)*2,height:f-i*2,rx:`4`,fill:`#fffbeb`}),t.map((e,t)=>{let a=r+n*t+n/2,o=e>=5,s=e%5,l=o?u-c/2-1:i+c/2+2;return(0,v.jsxs)(`g`,{children:[(0,v.jsx)(`rect`,{x:a-2.5,y:i,width:`5`,height:f-i*2,rx:`2`,fill:`url(#rodMetal)`}),(0,v.jsx)(w,{cx:a,cy:l,active:o}),[1,2,3,4].map(e=>{let t=e<=s;return(0,v.jsx)(w,{cx:a,cy:t?ee+1+c/2+(e-1)*c:d-2-c/2-(4-e)*c,active:t},e)})]},t)}),(0,v.jsx)(`rect`,{x:r-4,y:u,width:l-(r-4)*2,height:o,fill:`url(#frameWood)`}),(0,v.jsx)(`circle`,{cx:r+n*(t.length-1)+n/2,cy:u+o/2,r:`2.6`,fill:`#fef3c7`})]})}var Ue=new Set([`full`,`longSum`,`addSub`,`decimalAddSub`,`negative`]),We=`practice_question_layout`,Ge=`practice_prefs`,Ke={fontScale:1,speed:1,voiceSpeed:1},T=[{value:1,label:`Normal`},{value:1.35,label:`Big`},{value:1.7,label:`Bigger`},{value:2,label:`Huge`}],qe=e=>Math.round((e<=5?1.5-e*.1:1-(e-5)*.05)*100)/100,Je=e=>{let t=Math.min(1.5,Math.max(.75,Number(e)||1));return Math.round(t>=1?(1.5-t)/.1:5+(1-t)/.05)},Ye=e=>e===5?`Normal`:e<5?`Slower ${5-e}`:`Faster ${e-5}`,E=e=>Math.round((e<=5?.6+e*.08:1+(e-5)*.1)*100)/100,D=e=>{let t=Math.min(1.5,Math.max(.6,Number(e)||1));return Math.round(t<=1?(t-.6)/.08:5+(t-1)/.1)};function Xe(){try{let e=JSON.parse(localStorage.getItem(Ge)||`{}`);return{...Ke,...e&&typeof e==`object`?e:{}}}catch{return{...Ke}}}function Ze({prefs:e,onChange:t,layout:n,onLayout:r,showLayout:i,onClose:a}){return(0,v.jsx)(`div`,{className:`ps-settings-backdrop`,onClick:a,children:(0,v.jsxs)(`div`,{className:`ps-settings-card`,role:`dialog`,"aria-label":`Practice settings`,onClick:e=>e.stopPropagation(),children:[(0,v.jsxs)(`div`,{className:`ps-settings-head`,children:[(0,v.jsxs)(`strong`,{children:[(0,v.jsx)(`i`,{className:`fa-solid fa-gear`}),` Settings`]}),(0,v.jsx)(`button`,{type:`button`,className:`ps-settings-close`,onClick:a,"aria-label":`Close settings`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-xmark`})})]}),((n,r,i,a)=>(0,v.jsxs)(`div`,{className:`ps-settings-row`,children:[(0,v.jsxs)(`div`,{className:`ps-settings-label`,children:[(0,v.jsx)(`i`,{className:`fa-solid ${r}`}),` `,n]}),(0,v.jsx)(`div`,{className:`ps-settings-choices`,role:`group`,"aria-label":n,children:i.map(n=>(0,v.jsx)(`button`,{type:`button`,className:e[a]===n.value?`active`:``,onClick:()=>t({...e,[a]:n.value}),children:n.label},n.label))})]}))(`Number size`,`fa-text-height`,T,`fontScale`),(0,v.jsxs)(`div`,{className:`ps-settings-row`,children:[(0,v.jsxs)(`div`,{className:`ps-settings-label`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-bolt`}),` Flash speed`,(0,v.jsx)(`span`,{className:`ps-speed-value`,children:Ye(Je(e.speed))})]}),(0,v.jsx)(`input`,{type:`range`,className:`ps-speed-slider`,min:`0`,max:`10`,step:`1`,value:Je(e.speed),"aria-label":`Flash speed`,onChange:n=>t({...e,speed:qe(Number(n.target.value))})}),(0,v.jsxs)(`div`,{className:`ps-speed-ends`,children:[(0,v.jsx)(`span`,{children:`🐢 Slow`}),(0,v.jsx)(`span`,{children:`Fast 🐇`})]})]}),(0,v.jsxs)(`div`,{className:`ps-settings-row`,children:[(0,v.jsxs)(`div`,{className:`ps-settings-label`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-volume-high`}),` Voice speed`,(0,v.jsx)(`span`,{className:`ps-speed-value`,children:Ye(D(e.voiceSpeed))})]}),(0,v.jsx)(`input`,{type:`range`,className:`ps-speed-slider`,min:`0`,max:`10`,step:`1`,value:D(e.voiceSpeed),"aria-label":`Voice speed`,onChange:n=>t({...e,voiceSpeed:E(Number(n.target.value))})}),(0,v.jsxs)(`div`,{className:`ps-speed-ends`,children:[(0,v.jsx)(`span`,{children:`🐢 Slow`}),(0,v.jsx)(`span`,{children:`Fast 🐇`})]})]}),i?(0,v.jsxs)(`div`,{className:`ps-settings-row`,children:[(0,v.jsxs)(`div`,{className:`ps-settings-label`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-table-cells`}),` Sum layout`]}),(0,v.jsxs)(`div`,{className:`ps-settings-choices`,role:`group`,"aria-label":`Sum layout`,children:[(0,v.jsx)(`button`,{type:`button`,className:n===`horizontal`?`active`:``,onClick:()=>r(`horizontal`),children:`Across`}),(0,v.jsx)(`button`,{type:`button`,className:n===`vertical`?`active`:``,onClick:()=>r(`vertical`),children:`Down`})]})]}):null,(0,v.jsxs)(`div`,{className:`ps-settings-foot`,children:[(0,v.jsx)(`button`,{type:`button`,className:`ps-settings-reset`,onClick:()=>t({...Ke}),children:`Reset`}),(0,v.jsx)(`span`,{children:`Saved on this device`})]})]})})}function Qe({numbers:e}){return(0,v.jsxs)(`div`,{className:`session-vertical`,style:{"--rows":e.length+1},children:[e.map((e,t)=>(0,v.jsxs)(`span`,{style:{display:`contents`},children:[(0,v.jsx)(`span`,{className:`vrow-sign`,children:t===0?``:e<0?`-`:`+`}),(0,v.jsx)(`span`,{className:`vrow-value`,children:l(t===0?e:Math.abs(e))})]},`${e}-${t}`)),(0,v.jsx)(`span`,{className:`vrule`}),(0,v.jsx)(`span`,{className:`vtotal`,children:`?`})]})}var $e=new Set([`full`,`longSum`,`flash`,`voice`,`addSub`,`missing`,`compare`,`abacus`]);function O(e){return e?{min:e<=1?1:10**(e-1),max:10**e-1}:null}function et(e){let t=e.trim().startsWith(`-`),[n,...r]=e.replace(/[^0-9.]/g,``).split(`.`),i=r.length?`.${r.join(``)}`:``;return`${t?`-`:``}${n}${i}`}function tt(e){let t=String(e??``).trim().toLowerCase();return t&&/^-?\d*\.?\d+$/.test(t)?String(Number(t)):t}function nt(e,t){if(!e||!(e.rows!=null||e.digits!=null||e.digits2!=null||e.decimals!=null||e.rule!=null||e.flashSpeed!=null||e.voiceRate!=null))return{};let n=re(t),r=O(e.digits),i=O(e.digits2),a={};if(e.rule&&(a.rules={...n.rules||{},rule:e.rule}),e.flashSpeed!=null&&(a.flashSpeed=e.flashSpeed),$e.has(e.mode)){let t=n.additionConfigs&&n.additionConfigs[0]||n.number||{min:1,max:9,count:3},i={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count,exact:!!e.rows};a.additionConfigs=[i],a.number={...i}}else if(e.mode===`multiply`){let e=n.multiply||{};a.multiply={aMin:r?r.min:e.aMin,aMax:r?r.max:e.aMax,bMin:i?i.min:e.bMin,bMax:i?i.max:e.bMax}}else if(e.mode===`division`){let e=n.division||{};a.division={quotientMin:r?r.min:e.quotientMin,quotientMax:r?r.max:e.quotientMax,divisorMin:i?i.min:e.divisorMin,divisorMax:i?i.max:e.divisorMax}}else if(e.mode===`decimalAddSub`){let t=n.number||{min:10,max:99,count:3};a.number={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count},e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals,addDivisor:10**e.decimals})}else if(e.mode===`negative`){let t=n.negative||{};a.negative={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count}}else if(e.mode===`percentage`){let e=n.percentage||{};a.percentage={...e,baseMin:r?r.min:e.baseMin,baseMax:r?r.max:e.baseMax}}else (e.mode===`decimalMultiply`||e.mode===`decimalDivision`)&&e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals});return Object.keys(a).length===0?{}:{[t]:a}}var k=[20,20,20,20,10,10];function rt(e,t){let r=re(e).modes,i=r.slice(-3).reverse(),a=r.slice(0,-3),o=a.length?n(`${t}-${e}-fallback`)%a.length:0,s=a.map((e,t)=>a[(o+t)%a.length]),c=[...i];for(let e of s){if(c.length>=k.length)break;c.includes(e)||c.push(e)}return c.map((e,t)=>({mode:e,questions:k[t]??4}))}var it=10,at=3;function ot(e,t,{vedicTopics:r}){let i=be(f.map(e=>e.name),r),a=f.filter(t=>{let n=xe(t.name,e,i);return n.taught&&!n.locked});if(!a.length)return[];let o=n(`${t}-${e}-vedic`)%a.length,s=[];for(let e=0;e<Math.min(at,a.length);e+=1)s.push(`${h}${a[(o+e)%a.length].id}`);return s}function st({track:e=`abacus`}){let n=e===`vedic`,{profile:f,user:p,institute:m,membership:h}=t(),be=de(f?.current_level),[xe,Se]=(0,_.useState)(null),y=n&&xe!=null?de(xe):be,b=Oe(),[S,ke]=(0,_.useState)(null),{ready:Ae,vedicTopics:C,activeSubjects:je}=c(),[Le,ze]=(0,_.useState)(!0),[w,Ke]=(0,_.useState)(`mcq`),[T,qe]=(0,_.useState)(``),Je=(0,_.useRef)(null),Ye=(0,_.useRef)(null),E=(0,_.useMemo)(()=>{let e=S;if(n)return e||=Ae?ot(y,b,{vedicTopics:C}).map(e=>({mode:e,questions:it})):[],e.filter(e=>i(e.mode)&&o(e.mode,y));e&&=e.filter(e=>!i(e.mode)),(!e||!e.length)&&(e=rt(y,b));let t=S?e.filter(e=>o(e.mode,y)||!!g[e.mode]):e.filter(e=>o(e.mode,y));return t.length?t:re(y).modes.slice(0,4).map(e=>({mode:e,questions:4}))},[S,y,b,Ae,C,n]),D=(0,_.useMemo)(()=>E.map(e=>e.mode),[E]),$e=e=>Number(E[e]?.questions)||4,O=n?`vedic_`:``,k=`practice_session_${O}${p?.id||`guest`}_${b}_level_${y}`,at=`practice_report_${O}${p?.id||`guest`}_${b}_level_${y}`,st=`practice_draft_${O}${p?.id||`guest`}_level_${y}`,[A,ct]=(0,_.useState)(()=>localStorage.getItem(k)===`done`);(0,_.useEffect)(()=>{try{ct(localStorage.getItem(k)===`done`)}catch{}},[k]);let[j]=(0,_.useState)(()=>{try{if(localStorage.getItem(k)===`done`)return null;let e=localStorage.getItem(st);if(!e)return null;let t=JSON.parse(e);return t.date===b?t:null}catch{return null}}),[M,lt]=(0,_.useState)(()=>{try{let e=localStorage.getItem(at);return e?JSON.parse(e):null}catch{return null}}),[ut]=(0,_.useState)(`daily`),[N,dt]=(0,_.useState)(()=>{let e=j?.modeIndex??0;return E.length>0?Math.min(e,E.length-1):0}),[P,ft]=(0,_.useState)(j?.questionIndex??0),[F,pt]=(0,_.useState)(null),[I,mt]=(0,_.useState)(null),[L,ht]=(0,_.useState)(j?.score??0),[R,gt]=(0,_.useState)(!1);oe(`daily-practice`,R);let[_t,vt]=(0,_.useState)(0),yt=(0,_.useRef)([]);(0,_.useEffect)(()=>()=>yt.current.forEach(clearTimeout),[]);let[bt,xt]=(0,_.useState)(1500),[St,Ct]=(0,_.useState)(.8),[z,wt]=(0,_.useState)(-1),Tt=Fe(E,N)&&z>=0,[B,Et]=(0,_.useState)(j?.mistakes??[]),[Dt,Ot]=(0,_.useState)(j?.answers??[]),[V,kt]=(0,_.useState)(j?.completedModes??[]),[At,jt]=(0,_.useState)(0),[H,Mt]=(0,_.useState)(null),[U,Nt]=(0,_.useState)(j?.maxCorrectStreak??0),[Pt,Ft]=(0,_.useState)(!!j),[It,Lt]=(0,_.useState)([]),[W,Rt]=(0,_.useState)(!1),[G,zt]=(0,_.useState)(!1),[K,q]=(0,_.useState)(null),[Bt,Vt]=(0,_.useState)(null),[J,Ht]=(0,_.useState)(()=>localStorage.getItem(We)||`horizontal`);(0,_.useEffect)(()=>{w===`input`&&F&&I===null&&Ye.current?.focus()},[F,w,I]),(0,_.useEffect)(()=>{if(I===null||G||A)return;let e=setTimeout(()=>sn(),750);return()=>clearTimeout(e)},[I,G,A]),(0,_.useEffect)(()=>{if(!(!R||A||G||ut!==`daily`))try{localStorage.setItem(st,JSON.stringify({date:b,modeIndex:N,questionIndex:P,score:L,mistakes:B,answers:Dt,completedModes:V,maxCorrectStreak:U}))}catch{}},[N,P,L,B,Dt,V,U]);function Ut(e){Ht(e),localStorage.setItem(We,e)}let[Y,Wt]=(0,_.useState)(Xe),X=(0,_.useRef)(Y);X.current=Y;let[Gt,Kt]=(0,_.useState)(!1);function qt(e){Wt(e);try{localStorage.setItem(Ge,JSON.stringify(e))}catch{}}let Z=D[N],Q=(0,_.useMemo)(()=>E.reduce((e,t)=>e+(Number(t.questions)||4),0),[E]),Jt=(0,_.useMemo)(()=>{let e=0;return E.forEach((t,n)=>{let r=Number(t.questions)||4;n<N?e+=r:n===N&&(e+=P)}),e},[E,N,P]);(0,_.useEffect)(()=>{let e=!1;async function t(){if(!m?.id)return;let[{data:t},i,o,s]=await Promise.all([me(m.id),ce(h?.id),se(),n?a(h?.id):Promise.resolve(null)]);if(e)return;if(n&&s!=null&&de(s)!==y){Se(s);return}let c=!n&&Number(y)===0&&ne.has(o);if(c&&ke(r),!t||(ze(n?t.vedic_enabled??!0:t.enabled??!0),Ke(t.answer_mode||`mcq`),c))return;let l=ue(t.journey,t.vedic_journey),{stops:u}=fe(n?l.vedic:l.abacus,y,i);Array.isArray(u)&&u.length&&ke(u.map(e=>({mode:e.mode,questions:Number(e.questions)||4,rows:e.rows,digits:e.digits,digits2:e.digits2,decimals:e.decimals,rule:e.rule,flashSpeed:e.flashSpeed,voiceRate:e.voiceRate})))}return t(),()=>{e=!0}},[m?.id,h?.id,y,n]);let Yt=f?.full_name?.split(` `)?.[0]||f?.name?.split(` `)?.[0]||p?.email?.split(`@`)?.[0]||`champ`,Xt=ut===`daily`&&(R||G)&&!A,Zt=ae();(0,_.useEffect)(()=>(document.body.classList.toggle(`practice-session-focus`,Xt),()=>{document.body.classList.remove(`practice-session-focus`),Me()}),[Xt]),(0,_.useEffect)(()=>{if(Bt===null)return;let e=setTimeout(()=>{if(Bt>1){Vt(e=>e-1);return}Vt(null),$(E[N])},900);return()=>clearTimeout(e)},[E,N,Bt]),(0,_.useEffect)(()=>{function e(e){if(!(document.activeElement.tagName===`INPUT`||document.activeElement.tagName===`TEXTAREA`)){if(!A&&R&&F&&I===null&&w!==`input`&&[`1`,`2`,`3`,`4`].includes(e.key)){let t=Number(e.key)-1;F.options&&F.options[t]!==void 0&&nn(F.options[t])}e.key===`Enter`&&(!R&&!G&&!A?tn():R&&I!==null&&!W?sn():G&&!W&&cn())}}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[A,R,F,I,W,G,P,N,Z,w]);function $(e){let t=typeof e==`string`?e:e?.mode,n=typeof e==`string`?{}:nt(e,y);yt.current.forEach(clearTimeout),yt.current=[];let r=u(t,y,n,{teacherChosen:!!S});if(pt(r),mt(null),qe(``),q(null),vt(0),gt(!0),t!==`voice`&&Me(),t===`voice`){let t=typeof e!=`string`&&e?.voiceRate||.8,n=t*(X.current.voiceSpeed||1);Ct(t),wt(-1),Pe(r.numbers,n,e=>wt(e))}if(t===`flash`){let e=Math.round(re(y,n).flashSpeed*(X.current.speed||1));xt(e),r.numbers.forEach((t,n)=>yt.current.push(setTimeout(()=>vt(n),n*e))),yt.current.push(setTimeout(()=>vt(r.numbers.length),r.numbers.length*e))}}function Qt(){$(E[N])}let $t=D.length>0&&D.every(e=>V.includes(e));function en(e){if(!A){if(e===D.length){if(!$t){q({type:`wrong`,text:`Finish all stops first!`});return}zt(!0),gt(!1),pt(null),mt(null),q(null);return}zt(!1),dt(e),ft(0),mt(null),q(null),$(E[e])}}async function tn(){Ne(),Je.current=Date.now(),gt(!0),pt(null),mt(null),q(null),j?$(E[N]):Vt(3),on(`session_start`,Z).catch(e=>{console.warn(`Practice start saved locally but not submitted:`,e)})}function nn(e){if(I!==null||Tt)return;let t=tt(e)===tt(F.answer),n={mode:F.mode,modeLabel:g[F.mode]?.label||F.mode,question:ln(F),numbers:F.numbers,selectedAnswer:e,correctAnswer:F.answer,isCorrect:t,answeredAt:new Date().toISOString()};if(mt(e),Ot(e=>[...e,n]),t){let e=At+1;q(e>=Te?{type:`streak`,text:`${e} Streak!`,streak:e}:{type:`correct`,text:`Wow!`}),ge(e>=Te?`streak`:`wow`,{streak:e}),e>=Te&&Mt(e=>({kind:`poppers`,id:(e?.id??0)+1})),ht(e=>e+1),jt(e=>{let t=e+1;return Nt(e=>Math.max(e,t)),t})}else{let t=At>=Te;Ie(t),Mt(e=>({kind:t?`bigShake`:`shake`,id:(e?.id??0)+1})),q({type:`wrong`,text:`Oh no!`}),ge(`ohNo`),Et(t=>[...t,{...F,selectedAnswer:e,modeLabel:g[F.mode]?.label||F.mode}]),jt(0)}}function rn({nextAnswers:e=Dt,nextMistakes:t=B,nextCompletedModes:n=V,status:r=`in_progress`,achievements:i=It}={}){let a=e.filter(e=>e.isCorrect).length,o=e.reduce((e,t)=>(e[t.mode]=e[t.mode]||{label:t.modeLabel,correct:0,wrong:0},e[t.mode][t.isCorrect?`correct`:`wrong`]+=1,e),{}),s=Je.current?Math.round((Date.now()-Je.current)/1e3):0;return{institute_id:m?.id,student_membership_id:h?.id,level:y,session_date:b,mode_rotation:D,completed_modes:n,total_questions:Q,total_time_seconds:s,answered_count:e.length,correct_count:a,wrong_count:e.length-a,max_correct_streak:U,question_type_summary:o,answers:e,mistakes:t,earned_achievements:i.map(e=>({code:e.code,name:e.name,type:e.type})),status:r,completed_at:r===`completed`?new Date().toISOString():null,updated_at:new Date().toISOString()}}function an(e,t,n){let r=`practice_report_${O}${p?.id||`guest`}_${b}_level_${y}`;localStorage.setItem(r,JSON.stringify(e));let i=`${r}_events`,a=JSON.parse(localStorage.getItem(i)||`[]`);a.push({eventType:t,mode:n,payload:e,createdAt:new Date().toISOString()}),localStorage.setItem(i,JSON.stringify(a))}async function on(t,n,r={}){let i=rn(r);if(an(i,t,n),!i.institute_id||!i.student_membership_id)return;Rt(!0);let{data:a,error:o}=await d(i,e);o?console.warn(`Practice report saved locally but not submitted:`,o):await ee(e,{institute_id:i.institute_id,student_membership_id:i.student_membership_id,attempt_id:a?.id,level:y,session_date:b,event_type:t,mode:n,payload:i}),Rt(!1)}async function sn(){let e=$e(N);if(P+1<e){ft(e=>e+1),setTimeout(()=>$(E[N]),0);return}let t=[...new Set([...V,Z])];if(kt(t),await on(`mode_complete`,Z,{nextCompletedModes:t}),N+1<D.length){let e=E[N+1];dt(e=>e+1),ft(0),setTimeout(()=>$(e),0);return}zt(!0),gt(!1)}async function cn(){let e=[...new Set([...V,Z])],t=te({score:L,totalQuestions:Q,maxCorrectStreak:U,mistakes:B,completedModes:e});Lt(t),localStorage.setItem(k,`done`),localStorage.setItem(`${k}_achievements`,JSON.stringify(t)),localStorage.removeItem(st);let n={nextCompletedModes:e,status:`completed`,achievements:t};lt(rn(n)),pe(`daily-practice`,{score:L,total:Q}),await on(`session_complete`,`review`,n),m?.id&&h?.id&&await Promise.all(t.map(e=>s({institute_id:m.id,student_membership_id:h.id,achievement_code:e.code,achievement_name:e.name,achievement_type:e.type,description:e.description,metadata:{level:y,session_date:b,score:L,total_questions:Q,max_correct_streak:U}}))),ct(!0),zt(!1)}function ln(e){return i(e.mode)?e.prompt:e.mode===`abacus`?`Abacus number: ${e.answer}`:e.mode===`missing`?`${e.numbers[0]} + ? + ${e.numbers[2]} = ${e.numbers[3]}`:e.mode===`compare`?`1: ${e.numbers.slice(0,3).join(` + `)} | 2: ${e.numbers.slice(4,7).join(` + `)}`:[`table`,`multiply`,`decimalMultiply`].includes(e.mode)?`${l(e.numbers[0])} × ${l(e.numbers[1])}`:[`division`,`decimalDivision`].includes(e.mode)?`${l(e.numbers[0])} ÷ ${l(e.numbers[1])}`:e.mode===`percentage`?`${e.numbers[0]}% of ${e.numbers[1]}`:e.mode===`bonds`?`${e.numbers[0]} + ? = ${e.numbers[1]}`:e.mode===`pattern`?`${e.numbers.join(`, `)}, ?`:e.mode===`double`?`Double ${e.numbers[0]}`:e.mode===`coins`?e.numbers.map(e=>`₹${e}`).join(` + `):e.mode===`count`?`Count ${e.numbers[0]} ${e.thing??``}`.trim():e.mode===`beats`?`Count ${e.numbers[0]} drum beats`:e.mode===`clock`?`Clock at ${e.numbers[0]}:${String(e.numbers[1]).padStart(2,`0`)}`:e.mode===`change`?`Pay ₹${e.numbers[1]} for ₹${e.numbers[0]}`:e.mode===`square`?`${e.numbers[0]}²`:e.mode===`squareRoot`?`√${e.numbers[0]}`:e.mode===`cube`?`${e.numbers[0]}³`:e.mode===`cubeRoot`?`∛${e.numbers[0]}`:le(e.numbers)}function un(){if(Bt!==null)return(0,v.jsxs)(`div`,{className:`session-countdown`,children:[(0,v.jsx)(`div`,{className:`countdown-ring`,children:(0,v.jsx)(`strong`,{children:Bt})}),(0,v.jsx)(`div`,{className:`countdown-title`,children:`Get ready`}),(0,v.jsx)(`div`,{className:`countdown-copy`,children:`Look at the first challenge calmly, then choose your answer.`})]});if(!F)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`session-expression`,children:(0,v.jsx)(`i`,{className:`fa-solid ${g[Z]?.icon??`fa-star`}`})}),(0,v.jsx)(`div`,{className:`session-sub`,children:`Start today's practice.`})]});if(i(Z))return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`session-expression`,children:F.prompt}),(0,v.jsx)(`div`,{className:`session-sub`,children:g[Z]?.label})]});if(Z===`abacus`)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(He,{value:F.answer}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]});if(Z===`voice`){let e=F?.numbers?.length||0;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`session-expression`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-volume-high`})}),(0,v.jsx)(`div`,{className:`voice-dots`,children:F?.numbers?.map((e,t)=>(0,v.jsx)(`span`,{className:`voice-dot${z===t?` active`:z>t?` done`:``}`},t))}),(0,v.jsx)(`div`,{className:`voice-label`,children:z>=0&&z<e?`Listen... number ${z+1} of ${e}`:`Now add them up!`})]})}if(Z===`flash`){let e=_t>=F.numbers.length;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`session-expression ${e?`animate-flash-reveal`:`animate-flash-num`}`,children:e?`?`:F.numbers[_t]},_t),(0,v.jsx)(`div`,{className:`session-sub`,children:e?`Select the correct sum`:`Number ${_t+1} of ${F.numbers.length}`})]})}if(Ue.has(Z))return(0,v.jsxs)(v.Fragment,{children:[J===`vertical`?(0,v.jsx)(Qe,{numbers:F.numbers}):(0,v.jsx)(`div`,{className:`session-expression`,children:le(F.numbers)}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]});if(Z===`bonds`){let[e,t]=F.numbers;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`fun-frame`,style:{"--cols":t===5?5:10},"aria-hidden":`true`,children:t<=10&&Array.from({length:t},(t,n)=>(0,v.jsx)(`span`,{className:`fun-dot${n<e?` filled`:``}`},n))}),(0,v.jsxs)(`div`,{className:`session-expression`,children:[e,` + `,(0,v.jsx)(`span`,{className:`fun-blank`,children:`?`}),` = `,t]}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]})}if(Z===`pattern`)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`fun-pattern`,children:[F.numbers.map((e,t)=>(0,v.jsx)(`span`,{className:`fun-step`,children:l(e)},t)),(0,v.jsx)(`span`,{className:`fun-step fun-step-next`,children:`?`})]}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]});if(Z===`double`){let[e]=F.numbers;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`fun-double`,children:[(0,v.jsx)(`span`,{className:`fun-card`,children:e}),(0,v.jsx)(`span`,{className:`fun-plus`,children:`+`}),(0,v.jsx)(`span`,{className:`fun-card fun-card-twin`,children:e})]}),(0,v.jsxs)(`div`,{className:`session-expression fun-double-label`,children:[`Double `,e,` = `,(0,v.jsx)(`span`,{className:`fun-blank`,children:`?`})]}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]})}if(Z===`coins`)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`fun-coins`,children:F.numbers.map((e,t)=>(0,v.jsxs)(`span`,{className:`fun-coin${e>=10?` note`:``}`,"data-value":e,style:{animationDelay:`${t*.08}s`},children:[`₹`,e]},t))}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]});if(Z===`count`)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`fun-count`,"aria-hidden":`true`,children:Array.from({length:F.numbers[0]},(e,t)=>(0,v.jsx)(`span`,{style:{animationDelay:`${t*.05}s`},children:F.thing},t))}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]});if(Z===`beats`)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Be,{count:F.numbers[0]},`${N}-${P}`),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]});if(Z===`clock`)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Ve,{hour:F.numbers[0],minute:F.numbers[1]}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]});if(Z===`change`){let[e,t]=F.numbers;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`fun-shop`,children:[(0,v.jsx)(`span`,{className:`fun-toy`,children:F.thing}),(0,v.jsxs)(`span`,{className:`fun-tag`,children:[`₹`,e]}),(0,v.jsx)(`span`,{className:`fun-plus`,children:`←`}),(0,v.jsxs)(`span`,{className:`fun-coin note`,"data-value":t,children:[`₹`,t]})]}),(0,v.jsxs)(`div`,{className:`session-expression fun-double-label`,children:[`₹`,t,` − ₹`,e,` = `,(0,v.jsx)(`span`,{className:`fun-blank`,children:`?`})]}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]})}return Z===`missing`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-expression`,children:[F.numbers[0],` + ? + `,F.numbers[2],` = `,F.numbers[3]]}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]}):Z===`compare`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-expression`,children:[`1: `,F.numbers.slice(0,3).join(` + `),(0,v.jsx)(`br`,{}),`2: `,F.numbers.slice(4,7).join(` + `)]}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]}):Z===`table`||Z===`multiply`||Z===`decimalMultiply`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-expression`,children:[l(F.numbers[0]),` × `,l(F.numbers[1])]}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]}):Z===`division`||Z===`decimalDivision`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-expression`,children:[l(F.numbers[0]),` ÷ `,l(F.numbers[1])]}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]}):Z===`percentage`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-expression`,children:[l(F.numbers[0]),`% of `,l(F.numbers[1])]}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]}):Z===`square`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-expression`,children:[F.numbers[0],(0,v.jsx)(`sup`,{className:`session-power`,children:`2`})]}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]}):Z===`squareRoot`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`session-expression`,children:(0,v.jsxs)(`span`,{className:`session-root`,children:[(0,v.jsx)(`span`,{className:`session-root-sign`,children:`√`}),(0,v.jsx)(`span`,{className:`session-radicand`,children:F.numbers[0]})]})}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]}):Z===`cube`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-expression`,children:[F.numbers[0],(0,v.jsx)(`sup`,{className:`session-power`,children:`3`})]}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]}):Z===`cubeRoot`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`session-expression`,children:(0,v.jsxs)(`span`,{className:`session-root`,children:[(0,v.jsx)(`sup`,{className:`session-root-index`,children:`3`}),(0,v.jsx)(`span`,{className:`session-root-sign`,children:`√`}),(0,v.jsx)(`span`,{className:`session-radicand`,children:F.numbers[0]})]})}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`session-expression`,children:le(F.numbers)}),(0,v.jsx)(`div`,{className:`session-sub`,children:F.prompt})]})}return(0,v.jsxs)(`div`,{className:`page-wrap session-page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:[(0,v.jsx)(`style`,{children:we}),(0,v.jsx)(ie,{}),H?.kind===`poppers`?(0,v.jsx)(Re,{},H.id):null,(0,v.jsxs)(`div`,{className:`session-shell ${(R||G)&&!A?`playing-active`:``}${H&&H.kind!==`poppers`?` fx-${H.kind}-${H.id%2}`:``}`,children:[Xt?(0,v.jsxs)(`button`,{type:`button`,className:`focus-exit`,onClick:()=>{Me(),Zt(`/`)},children:[(0,v.jsx)(`i`,{className:`fa-solid fa-xmark`,"aria-hidden":`true`}),` Exit`]}):null,!Xt&&!G?(0,v.jsx)(_e,{}):null,ut===`flash`&&!R?(0,v.jsx)(he,{isNested:!0}):ut===`daily`&&!R&&!G&&!A?n&&Le&&!E.length?(0,v.jsx)(`div`,{className:`session-ready`,children:(0,v.jsxs)(`section`,{className:`ready-panel`,children:[(0,v.jsxs)(`div`,{className:`ready-kicker`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-wand-magic-sparkles`}),`Vedic Daily Practice`]}),(0,v.jsx)(`h2`,{className:`ready-title`,children:Ae?`Nothing to practise yet`:`Loading…`}),Ae?(0,v.jsx)(`p`,{className:`ready-copy`,children:`Your teacher has not set up Vedic practice for your level yet. Ask them to add sutras to your Vedic daily practice.`}):null]})}):Le?(0,v.jsxs)(`div`,{className:`session-ready`,children:[(0,v.jsxs)(`section`,{className:`ready-panel ready-game`,children:[(0,v.jsxs)(`div`,{className:`ready-top`,children:[(0,v.jsx)(`span`,{className:`ready-badge`,"aria-hidden":`true`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-rocket`})}),(0,v.jsxs)(`div`,{className:`ready-heading`,children:[(0,v.jsxs)(`span`,{className:`ready-hello`,children:[`Hi `,Yt,`!`]}),(0,v.jsx)(`h2`,{className:`ready-title`,children:n?`Today's Vedic Challenge`:`Today's Challenge`})]}),(0,v.jsxs)(`span`,{className:`ready-date`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-calendar-day`,"aria-hidden":`true`}),` `,De(b)]})]}),(0,v.jsxs)(`div`,{className:`ready-stats`,children:[(0,v.jsxs)(`div`,{className:`ready-stat`,style:{"--tile":`#3b82f6`},children:[(0,v.jsx)(`span`,{className:`ready-stat-icon`,"aria-hidden":`true`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-route`})}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`strong`,{children:D.length}),(0,v.jsx)(`span`,{children:`Stops`})]})]}),(0,v.jsxs)(`div`,{className:`ready-stat`,style:{"--tile":`#22c55e`},children:[(0,v.jsx)(`span`,{className:`ready-stat-icon`,"aria-hidden":`true`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-circle-question`})}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`strong`,{children:Q}),(0,v.jsx)(`span`,{children:`Questions`})]})]}),(0,v.jsxs)(`div`,{className:`ready-stat`,style:{"--tile":`#8b5cf6`},children:[(0,v.jsx)(`span`,{className:`ready-stat-icon`,"aria-hidden":`true`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-layer-group`})}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`strong`,{children:y}),(0,v.jsx)(`span`,{children:`Level`})]})]})]}),(0,v.jsxs)(`div`,{className:`ready-reward`,children:[(0,v.jsxs)(`span`,{className:`ready-reward-stars`,"aria-hidden":`true`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-star`}),(0,v.jsx)(`i`,{className:`fa-solid fa-star`}),(0,v.jsx)(`i`,{className:`fa-solid fa-star`})]}),`Finish the journey to win up to 3 stars!`]}),j?(0,v.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,background:`color-mix(in srgb, var(--accent) 10%, transparent)`,border:`1px solid color-mix(in srgb, var(--accent) 25%, transparent)`,borderRadius:10,padding:`8px 14px`,marginBottom:12,fontSize:`0.82rem`,fontWeight:700,color:`var(--accent)`},children:[(0,v.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),`Session in progress — `,j.score,` correct, on step `,j.modeIndex+1,` of `,D.length]}):null,(0,v.jsx)(`div`,{children:(0,v.jsx)(`button`,{className:`session-btn-next`,onClick:tn,disabled:W,children:W?`Getting Ready…`:j?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),` Resume Practice`]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`i`,{className:`fa-solid fa-play`}),` Start Today's Practice`]})})})]}),(0,v.jsxs)(`aside`,{className:`journey-panel`,children:[(0,v.jsx)(`h2`,{children:`Today's journey`}),(0,v.jsxs)(`div`,{className:`journey-list`,children:[D.map((e,t)=>(0,v.jsxs)(`div`,{className:`journey-card`,style:{"--stop-color":x[t%x.length]},children:[(0,v.jsx)(`span`,{className:`journey-num`,"aria-hidden":`true`,children:t+1}),(0,v.jsx)(`i`,{className:`fa-solid ${g[e]?.icon??`fa-star`}`}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:Ee[t]||`Step ${t+1}`}),(0,v.jsxs)(`span`,{children:[g[e]?.label??e,` | `,$e(t),` questions`]})]})]},`${e}-${t}`)),(0,v.jsxs)(`div`,{className:`journey-card`,style:{"--stop-color":`#f59e0b`},children:[(0,v.jsx)(`span`,{className:`journey-num`,"aria-hidden":`true`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-flag-checkered`})}),(0,v.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:`Review`}),(0,v.jsx)(`span`,{children:`Check anything that needs one more look`})]})]})]})]})]}):(0,v.jsx)(`div`,{className:`session-ready`,children:(0,v.jsxs)(`section`,{className:`ready-panel`,children:[(0,v.jsxs)(`div`,{className:`ready-kicker`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-circle-info`}),`Daily Practice`]}),(0,v.jsx)(`h2`,{className:`ready-title`,children:`Paused for now`}),(0,v.jsx)(`p`,{className:`ready-copy`,children:`Your institute has turned off daily practice. Please check back later or ask your teacher.`})]})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`mobile-sub-bar`,children:[(0,v.jsxs)(`div`,{className:`mobile-mode-strip`,children:[D.map((e,t)=>(0,v.jsxs)(`div`,{style:{"--stop-color":x[t%x.length]},className:`mobile-mode-dot${t===N&&!G?` active`:``}${t<N||V.includes(e)?` done`:``}`,onClick:()=>en(t),title:g[e]?.label??e,children:[(0,v.jsx)(`i`,{className:`fa-solid ${g[e]?.icon??`fa-star`}`}),(0,v.jsx)(`span`,{children:t+1})]},t)),(0,v.jsxs)(`div`,{style:{"--stop-color":`#f59e0b`},className:`mobile-mode-dot${G?` active`:``}${A?` done`:``}${$t||A?``:` locked`}`,onClick:()=>en(D.length),title:`Review`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,v.jsx)(`span`,{children:`Rev`})]})]}),Ue.has(Z)?(0,v.jsxs)(`div`,{className:`mobile-layout-toggle`,role:`group`,"aria-label":`Question format`,children:[(0,v.jsxs)(`button`,{className:J===`horizontal`?`active`:``,onClick:()=>Ut(`horizontal`),children:[(0,v.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` H`]}),(0,v.jsxs)(`button`,{className:J===`vertical`?`active`:``,onClick:()=>Ut(`vertical`),children:[(0,v.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` V`]})]}):null]}),(0,v.jsxs)(`div`,{className:`session-grid`,children:[(0,v.jsxs)(`div`,{className:`mode-list`,children:[Xt?(0,v.jsxs)(`button`,{type:`button`,className:`row-exit`,onClick:()=>{Me(),Zt(`/`)},children:[(0,v.jsx)(`i`,{className:`fa-solid fa-xmark`,"aria-hidden":`true`}),` Exit`]}):null,D.map((e,t)=>(0,v.jsxs)(`div`,{style:{"--stop-color":x[t%x.length]},className:`mode-row ${t===N&&!G?`active`:``} ${t<N||A?`done`:``}`,onClick:()=>en(t),title:`${Ee[t]||`Step ${t+1}`} — ${g[e]?.label??e}`,children:[(0,v.jsx)(`i`,{className:`fa-solid ${g[e]?.icon??`fa-star`}`}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`span`,{className:`journey-step`,children:Ee[t]||`Step ${t+1}`}),(0,v.jsxs)(`span`,{className:`journey-mode`,children:[g[e]?.label??e,` | `,$e(t),` questions`]})]})]},`${e}-${t}`)),(0,v.jsxs)(`div`,{style:{"--stop-color":`#f59e0b`},className:`mode-row review ${G?`active`:``} ${A?`done`:``}${$t||A?``:` locked`}`,onClick:()=>en(D.length),title:`Review mistakes`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`span`,{className:`journey-step`,children:`Review`}),(0,v.jsxs)(`span`,{className:`journey-mode`,children:[B.length,` to check`]})]})]})]}),(0,v.jsx)(`div`,{className:`session-card`,style:{"--stop-color":G||A?`#f59e0b`:x[N%x.length]},children:A?(0,v.jsxs)(`div`,{className:`session-stage session-stage-done`,children:[(0,v.jsx)(ye,{score:M?.correct_count??L,marks:M?.total_questions??Q,messages:{top:`Amazing! Today's journey is done. See you tomorrow!`,pass:`Today's journey is done! Come back tomorrow for more stars.`,low:`You finished today's journey! Practice again tomorrow to earn more stars.`},tiles:[{icon:`fa-check`,label:`Right`,value:M?.correct_count??L,tone:`right`},{icon:`fa-xmark`,label:`Wrong`,value:M?.wrong_count??B.length,tone:`wrong`},{icon:`fa-fire`,label:`Best streak`,value:M?.max_correct_streak??U,tone:`streak`},M?.total_time_seconds?{icon:`fa-stopwatch`,label:`Time`,value:ve(M.total_time_seconds*1e3),tone:`time`}:null].filter(Boolean),footnote:`Level ${y} · ${b} · Report saved for your teacher`}),It.length?(0,v.jsx)(`div`,{className:`achievement-strip`,children:It.map(e=>(0,v.jsxs)(`div`,{className:`achievement-chip`,children:[(0,v.jsx)(`i`,{className:`fa-solid ${e.icon}`,style:{background:e.color}}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:e.name}),(0,v.jsx)(`span`,{children:e.description})]})]},e.code))}):null]}):G?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-game-header`,children:[(0,v.jsx)(`span`,{className:`session-mode-pill`,children:`Mistake Review`}),(0,v.jsx)(`div`,{className:`session-spacer`}),(0,v.jsxs)(`span`,{className:`session-score-chip`,children:[`Score `,L,`/`,Q]})]}),(0,v.jsx)(`div`,{className:`session-prog-track`,children:(0,v.jsx)(`div`,{className:`session-prog-fill`,style:{width:`100%`}})}),(0,v.jsxs)(`div`,{className:`session-stage`,style:{alignItems:`stretch`,justifyContent:`flex-start`,paddingTop:0},children:[(0,v.jsxs)(`div`,{className:`review-head`,children:[(0,v.jsx)(`span`,{className:`review-badge`,"aria-hidden":`true`,children:(0,v.jsx)(`i`,{className:`fa-solid ${B.length?`fa-magnifying-glass`:`fa-crown`}`})}),(0,v.jsx)(`div`,{className:`session-result review-title`,children:B.length?`Let's fix these together`:`No mistakes today!`})]}),(0,v.jsx)(`div`,{className:`session-sub`,children:B.length?`Check the correct answers before you finish.`:`Clean round! Finish and come back tomorrow.`}),B.length?(0,v.jsx)(`div`,{className:`mistake-list`,children:B.map((e,t)=>(0,v.jsxs)(`div`,{className:`mistake-card`,children:[(0,v.jsx)(`span`,{className:`mistake-num`,"aria-hidden":`true`,children:t+1}),(0,v.jsxs)(`div`,{className:`mistake-body`,children:[(0,v.jsx)(`strong`,{children:ln(e)}),(0,v.jsx)(`small`,{children:e.modeLabel})]}),(0,v.jsxs)(`div`,{className:`mistake-answers`,children:[(0,v.jsxs)(`span`,{className:`mistake-chip wrong`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-xmark`,"aria-hidden":`true`}),` `,e.selectedAnswer]}),(0,v.jsxs)(`span`,{className:`mistake-chip right`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-check`,"aria-hidden":`true`}),` `,e.answer]})]})]},`${e.mode}-${t}`))}):null]}),(0,v.jsx)(`div`,{className:`session-action-bar`,children:(0,v.jsx)(`button`,{className:`session-btn-next`,onClick:cn,disabled:W,children:W?`Saving…`:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`i`,{className:`fa-solid fa-flag-checkered`}),` Finish Today`]})})})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-game-header`,children:[(0,v.jsx)(`span`,{className:`session-mode-pill`,children:g[Z]?.label??Z}),(0,v.jsxs)(`span`,{className:`session-q-counter`,children:[`Q `,P+1,` / `,$e(N)]}),Ue.has(Z)?(0,v.jsxs)(`div`,{className:`layout-toggle layout-toggle-inline`,role:`group`,"aria-label":`Question format`,children:[(0,v.jsxs)(`button`,{className:J===`horizontal`?`active`:``,onClick:()=>Ut(`horizontal`),children:[(0,v.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` H`]}),(0,v.jsxs)(`button`,{className:J===`vertical`?`active`:``,onClick:()=>Ut(`vertical`),children:[(0,v.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` V`]})]}):null,(0,v.jsx)(`div`,{className:`session-spacer`}),Pt?(0,v.jsxs)(`span`,{className:`resumed-pill`,onAnimationEnd:()=>Ft(!1),children:[(0,v.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),` Resumed`]}):null,At>=2?(0,v.jsxs)(`span`,{className:`session-streak-chip`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-fire`,"aria-hidden":`true`}),` `,At,` in a row`]},At):null,(0,v.jsxs)(`span`,{className:`session-score-chip`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-star`,"aria-hidden":`true`}),` `,L,`/`,Jt+(I===null?0:1)]}),n?null:(0,v.jsxs)(`button`,{type:`button`,className:`ps-abacus-btn${Y.abacus?` on`:``}`,onClick:()=>qt({...Y,abacus:!Y.abacus}),title:Y.abacus?`Hide the abacus`:`Show the abacus`,"aria-pressed":!!Y.abacus,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-calculator`}),(0,v.jsx)(`span`,{children:`Abacus`})]}),(0,v.jsx)(`button`,{type:`button`,className:`ps-settings-btn`,onClick:()=>Kt(!0),"aria-label":`Settings`,title:`Settings`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-gear`})})]}),Gt?(0,v.jsx)(Ze,{prefs:Y,onChange:qt,layout:J,onLayout:Ut,showLayout:Ue.has(Z),onClose:()=>Kt(!1)}):null,(0,v.jsx)(`div`,{className:`session-prog-track`,children:(0,v.jsx)(`div`,{className:`session-prog-fill`,style:{width:`${Jt/Q*100}%`},children:(0,v.jsx)(`i`,{className:`fa-solid fa-star session-prog-star`,"aria-hidden":`true`})})}),(0,v.jsx)(`div`,{className:`session-stage`,style:Y.fontScale===1?void 0:{zoom:Y.fontScale},children:un()}),n?null:(0,v.jsx)(Ce,{open:!!Y.abacus,onToggle:()=>qt({...X.current,abacus:!X.current.abacus}),type:Y.abacusType||`digital`,onType:e=>qt({...X.current,abacusType:e}),suggestedRods:Math.min(9,Math.max(5,String(Math.abs(Math.trunc(Number(F?.answer)||0))).length+1))}),(0,v.jsx)(`div`,{className:`feedback-pop`,children:K?(0,v.jsxs)(`div`,{className:`feedback-bubble ${K.type}`,role:`status`,children:[(0,v.jsx)(`span`,{className:`feedback-character`,"aria-hidden":`true`,children:(0,v.jsx)(`i`,{className:`fa-solid ${K.type===`streak`?`fa-fire`:K.type===`correct`?`fa-star`:`fa-face-frown-open`}`})}),K.text,K.type===`streak`?(0,v.jsx)(`span`,{className:`feedback-flames`,"aria-hidden":`true`,children:Array.from({length:Math.min(K.streak,5)},(e,t)=>(0,v.jsx)(`i`,{className:`fa-solid fa-fire`,style:{animationDelay:`${t*.08}s`}},t))}):null]},Dt.length):null}),(0,v.jsx)(`div`,{className:`session-answer-area`,children:F&&w===`input`?(0,v.jsx)(`div`,{className:`typed-answer-wrap`,children:(0,v.jsxs)(`div`,{className:`typed-answer-row`,children:[(0,v.jsx)(`input`,{ref:Ye,className:`typed-answer-input`,type:`text`,inputMode:`decimal`,pattern:`-?[0-9]*\\.?[0-9]*`,value:T,disabled:I!==null||Tt,onChange:e=>qe(et(e.target.value)),onKeyDown:e=>{e.key===`Enter`&&T.trim()!==``&&(e.preventDefault(),nn(T))},placeholder:`Type your answer…`}),(0,v.jsx)(`button`,{className:`typed-answer-submit`,disabled:I!==null||T.trim()===``,onClick:()=>nn(T),children:`Submit`})]})}):F?(0,v.jsx)(`div`,{className:`mcq-grid`,children:F.options.map((e,t)=>{let n=``;return I!==null&&e===I&&(n=e===F.answer?`correct`:`wrong`),(0,v.jsxs)(`button`,{className:`mcq-btn ${n}`,disabled:I!==null||Tt,onClick:()=>nn(e),children:[(0,v.jsx)(`span`,{className:`mcq-key-hint`,children:t+1}),e]},e)})}):null}),(0,v.jsxs)(`div`,{className:`session-action-bar`,children:[Z===`voice`&&F?(0,v.jsxs)(`button`,{className:`session-btn-ghost`,onClick:()=>{wt(-1),Pe(F.numbers,St*(Y.voiceSpeed||1),e=>wt(e))},children:[(0,v.jsx)(`i`,{className:`fa-solid fa-volume-high`}),` Repeat`]}):null,!R&&!F?(0,v.jsxs)(`button`,{className:`session-btn-next`,onClick:Qt,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-play`}),` Start`]}):null,I!==null&&W?(0,v.jsx)(`button`,{className:`session-btn-next`,disabled:!0,children:`Saving…`}):null]})]})})]})]})]})]})}export{st as default};