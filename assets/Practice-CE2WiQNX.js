import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{$ as t,J as n,Qt as r,W as i,Xt as a,en as o,et as s,k as c,y as l}from"./interactive-DeCXXHcg.js";import{g as u}from"./index-kl6p1afV.js";import{VedicTrickTiles as d}from"./VedicMaster-44wZ3IQY.js";var f=e(o(),1),p=s(),m=`
  .arena-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 36px;
    animation: fadeIn 0.4s ease-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Top Dashboard Section */
  .arena-header-grid {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 24px;
  }
  @media (max-width: 900px) {
    .arena-header-grid { grid-template-columns: 1fr; }
  }
  @media (max-width: 640px), (orientation: landscape) and (max-height: 500px) {
    .arena-header-grid { gap: 14px; }
    .progress-box { padding: 14px 16px !important; border-radius: 16px !important; }
    .progress-box .level-badge { padding: 3px 10px; font-size: 0.66rem; margin-bottom: 8px; }
    .progress-box .progress-title { font-size: 1.2rem !important; margin-bottom: 2px; }
    .progress-box p { font-size: 0.8rem; line-height: 1.35; margin: 0; }
    .progress-box .progress-bar-wrap { height: 6px; margin: 10px 0 6px; }
    .arena-header-grid .quest-box { padding: 14px 16px; border-radius: 16px; }
    .arena-header-grid .quest-box::after { font-size: 70px; right: -10px; bottom: -16px; }
    .arena-header-grid .quest-title { font-size: 1.05rem; margin-bottom: 10px; }
    .arena-header-grid .quest-item { padding: 8px 12px; gap: 10px; border-radius: 10px; margin-bottom: 6px; }
    .arena-header-grid .quest-item:last-child { margin-bottom: 0; }
    .arena-header-grid .quest-item i { font-size: 0.95rem !important; }
    .arena-header-grid .quest-item div { font-size: 0.8rem !important; }
  }

  .progress-box {
    background:
      radial-gradient(circle at top right, color-mix(in srgb, var(--gold) 24%, transparent), transparent 34%),
      linear-gradient(135deg, rgba(255,255,255,0.94), color-mix(in srgb, var(--primary-blue) 8%, white));
    backdrop-filter: blur(12px);
    padding: 30px;
    border-radius: 24px;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .level-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--light-blue);
    color: var(--primary-blue);
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 16px;
    align-self: flex-start;
  }
  .progress-title {
    font-family: "Sora", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: var(--dark-blue);
    margin-bottom: 8px;
    line-height: 1.2;
  }
  .progress-bar-wrap {
    height: 10px;
    background: color-mix(in srgb, var(--primary-blue) 10%, transparent);
    border-radius: 10px;
    margin: 20px 0 10px;
    overflow: hidden;
  }
  .progress-bar-fill {
    height: 100%;
    width: 68%;
    background: linear-gradient(90deg, var(--primary-blue), var(--dark-blue));
    border-radius: 10px;
  }

  /* Daily Quests Section */
  .quest-box {
    background:
      radial-gradient(circle at 92% 16%, rgba(255,255,255,0.24), transparent 18%),
      linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-blue) 100%);
    color: white;
    padding: 30px;
    border-radius: 24px;
    box-shadow: 0 10px 30px color-mix(in srgb, var(--primary-blue) 25%, transparent);
    position: relative;
    overflow: hidden;
  }
  .quest-box::after {
    content: "🎯";
    position: absolute;
    right: -20px;
    bottom: -30px;
    font-size: 120px;
    opacity: 0.1;
  }
  .quest-title {
    font-family: "Sora", sans-serif;
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 20px;
  }
  .quest-item {
    display: flex;
    align-items: center;
    gap: 12px;
    background: rgba(255, 255, 255, 0.15);
    padding: 12px 16px;
    border-radius: 12px;
    margin-bottom: 10px;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  .quest-item.completed {
    background: rgba(34, 197, 94, 0.2);
    border-color: rgba(34, 197, 94, 0.4);
  }

  /* Module Grids */
  .module-section-title {
    font-family: "Sora", sans-serif;
    color: var(--dark-blue);
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  /* The grid, the cards, their icons, titles, tags and lock pills all come
     from the shared tool-card rules in index.css, so this page, Interactive
     Abacus and Vedic Math stay identical. Only page-specific bits live here. */

  /* Empty state for a student whose level has unlocked no tools yet. */
  .level-note {
    display: flex;
    align-items: center;
    gap: 18px;
    flex-wrap: wrap;
    background: var(--card-bg);
    border: 1px dashed var(--border);
    border-radius: 18px;
    padding: 20px 24px;
    margin-bottom: 10px;
  }
  .level-note-icon {
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    border-radius: 14px;
    background: var(--light-blue, #e0f2fe);
    color: var(--primary-blue, #3b82f6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.05rem;
  }
  .level-note-body {
    flex: 1;
    min-width: 220px;
  }
  .level-note-body strong {
    display: block;
    font-family: 'Sora', sans-serif;
    font-size: 1rem;
    color: var(--dark-blue, #0f172a);
    margin-bottom: 4px;
  }
  .level-note-body p {
    margin: 0;
    color: var(--text-light);
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.5;
  }
  .practice-cta-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 16px;
  }
  .daily-card {
    border: 1px solid var(--border);
    background: linear-gradient(135deg, color-mix(in srgb, var(--primary-blue) 12%, white), rgba(255,255,255,0.9));
    border-radius: 18px;
    padding: 22px;
    box-shadow: var(--shadow);
    cursor: pointer;
    transition: transform 0.18s ease, border-color 0.18s ease;
  }
  .daily-card:hover {
    transform: translateY(-3px);
    border-color: var(--primary-blue);
  }
  .daily-card strong {
    display: block;
    font-family: "Sora", sans-serif;
    font-size: 1.2rem;
    color: var(--dark-blue);
    margin-bottom: 6px;
  }
  .daily-card span {
    color: var(--text-light);
    font-weight: 700;
  }
`;function h(){let e=a(),{profile:o,user:s}=t(),h=c(o?.current_level),{ready:_,unlockLevelByPath:v,activeSubjects:y,enabledFeatures:b}=n(),x=u(`/vedic-math`,y,b),[S,C]=r(),w=x&&S.get(`tab`)===`vedic`?`vedic`:`abacus`,T=e=>C(e===`vedic`?{tab:`vedic`}:{},{replace:!0}),E=new Date().toLocaleDateString(`en-CA`),D=`practice_mission_${s?.id||`guest`}_${E}_level_${h}`,O=`practice_session_${s?.id||`guest`}_${E}_level_${h}`,[k,A]=(0,f.useState)(()=>g(D,O));(0,f.useEffect)(()=>{function e(){A(g(D,O))}return e(),window.addEventListener(`focus`,e),window.addEventListener(`storage`,e),window.addEventListener(`practice-mission-updated`,e),()=>{window.removeEventListener(`focus`,e),window.removeEventListener(`storage`,e),window.removeEventListener(`practice-mission-updated`,e)}},[D,O]);let j=(0,f.useMemo)(()=>{let e=Object.keys(k.toolsOpened||{}).length;return[{label:`Finish today's practice`,done:k.sessionComplete,icon:`fa-calendar-check`,path:`/practice-session`},{label:`Answer 5 flash questions (${Math.min(k.flashAnswers||0,5)}/5)`,done:(k.flashAnswers||0)>=5,icon:`fa-bolt`,path:`/mental-flash-games`},{label:`Open 2 practice tools (${Math.min(e,2)}/2)`,done:e>=2,icon:`fa-compass`,path:null}]},[k]);function M(t){let n=g(D,O);n.toolsOpened={...n.toolsOpened||{},[t]:!0},localStorage.setItem(D,JSON.stringify(n)),window.dispatchEvent(new Event(`practice-mission-updated`)),e(t)}let N=[{title:`Without Formula`,desc:`Direct bead moves, no formula needed.`,icon:`fa-hand-pointer`,color:`#0891b2`,bg:`#cffafe`,tag:`Formula`,path:`/formula-direct`},{title:`Small Friend`,desc:`Drill the 5s pair on every sum.`,icon:`fa-user-group`,color:`#7c3aed`,bg:`#ede9fe`,tag:`Formula`,path:`/formula-small-friend`},{title:`Big Friend`,desc:`Drill the 10s pair on every sum.`,icon:`fa-users`,color:`#c026d3`,bg:`#fae8ff`,tag:`Formula`,path:`/formula-big-friend`},{title:`Combination`,desc:`Both friends together in one sum.`,icon:`fa-layer-group`,color:`#e11d48`,bg:`#ffe4e6`,tag:`Formula`,path:`/formula-combination`},{title:`Addition`,desc:`Direct keyboard entry addition.`,icon:`fa-plus`,color:`#3b82f6`,bg:`#dbeafe`,tag:`Arithmetic`,path:`/addition`},{title:`Add & Sub`,desc:`Mixed addition & subtraction.`,icon:`fa-plus-minus`,color:`#0ea5e9`,bg:`#e0f2fe`,tag:`Arithmetic`,path:`/addsub`},{title:`Multiplication`,desc:`Visual multiplication practice.`,icon:`fa-xmark`,color:`#10b981`,bg:`#d1fae5`,tag:`Multiplication`,path:`/multiply`},{title:`Long Multiplication`,desc:`Multi-digit multiplication.`,icon:`fa-xmark`,color:`#475569`,bg:`#f1f5f9`,tag:`Multiplication`,path:`/long-multiply`},{title:`Times Table`,desc:`Grid practice for tables.`,icon:`fa-table`,color:`#334155`,bg:`#f1f5f9`,tag:`Tables`,path:`/table`},{title:`Division`,desc:`Division exercises.`,icon:`fa-divide`,color:`#f43f5e`,bg:`#ffe4e6`,tag:`Division`,path:`/division`},{title:`Decimal Add & Sub`,desc:`Addition & subtraction with decimals.`,icon:`fa-droplet`,color:`#8b5cf6`,bg:`#ede9fe`,tag:`Decimals`,path:`/decimal-addsub`},{title:`Negative Numbers`,desc:`Practice negative arithmetic.`,icon:`fa-minus`,color:`#64748b`,bg:`#f1f5f9`,tag:`Integers`,path:`/negative`},{title:`Percentages`,desc:`Calculate percentages.`,icon:`fa-percent`,color:`#db2777`,bg:`#fce7f3`,tag:`Fractions`,path:`/percentage`},{title:`Decimal Multiply`,desc:`Multiplication with decimals.`,icon:`fa-water`,color:`#d946ef`,bg:`#fae8ff`,tag:`Decimals`,path:`/decimal-multiply`},{title:`Decimal Division`,desc:`Division with decimals.`,icon:`fa-calculator`,color:`#06b6d4`,bg:`#ecfeff`,tag:`Decimals`,path:`/decimal-division`},{title:`Squares`,desc:`Calculate the perfect square.`,icon:`fa-square`,color:`#f59e0b`,bg:`#fef3c7`,tag:`Exponents`,path:`/square`},{title:`Square Roots`,desc:`Find the square root.`,icon:`fa-square-root-variable`,color:`#d97706`,bg:`#fef3c7`,tag:`Roots`,path:`/sq-root`},{title:`Cubes`,desc:`Calculate the perfect cube.`,icon:`fa-cube`,color:`#ea580c`,bg:`#ffedd5`,tag:`Exponents`,path:`/cube`},{title:`Cube Roots`,desc:`Find the cube root.`,icon:`fa-cubes`,color:`#c2410c`,bg:`#ffedd5`,tag:`Roots`,path:`/cube-root`},{title:`LCM`,desc:`Lowest Common Multiple.`,icon:`fa-layer-group`,color:`#059669`,bg:`#ecfdf5`,tag:`Factors`,path:`/lcm`},{title:`HCF`,desc:`Highest Common Factor.`,icon:`fa-puzzle-piece`,color:`#0d9488`,bg:`#ccfbf1`,tag:`Factors`,path:`/hcf`}],P=[],F=N.map(e=>({...e,...l(e.path,h,v)})).filter(e=>e.taught),I=P.filter(e=>l(e.path,h,v).taught),L=j.filter(e=>e.done).length;return Math.round(L/j.length*100),(0,p.jsxs)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:[(0,p.jsx)(`style`,{children:m}),(0,p.jsx)(`style`,{children:`
        .pp-head { display: flex; align-items: center; gap: 12px; margin: 4px 0 18px; }
        .pp-head h1 { margin: 0; font-family: "Baloo 2", "Fredoka", sans-serif; font-size: clamp(1.5rem, 3vw, 2rem); font-weight: 800; color: var(--text-dark, #0f172a); }
        .pp-level { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 999px;
          background: #fef3c7; color: #92400e; font-weight: 800; font-size: .85rem; }
        .pp-level i { color: #f59e0b; }
        .pp-switch { margin-left: auto; display: inline-flex; gap: 2px; padding: 3px; border-radius: 999px; background: rgba(15,23,42,0.06); }
        .pp-switch button { display: inline-flex; align-items: center; gap: 6px; border: none; background: transparent; padding: 5px 14px;
          border-radius: 999px; font: inherit; font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: .85rem; color: #64748b; cursor: pointer; }
        .pp-switch button.on { background: #fff; color: #6d28d9; box-shadow: 0 1px 3px rgba(15,23,42,0.12); }
        .pp-grid[hidden] { display: none !important; }
        .pp-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)) !important; gap: 12px !important; }
        .pp-grid .module-card { padding: 14px !important; min-height: 0 !important; }
        .pp-grid .module-card-top { flex-direction: column; align-items: flex-start; gap: 10px; }
        .pp-grid .module-info p, .pp-grid .module-tag { display: none !important; }
        .pp-grid .module-info h3 { margin: 0; font-size: 1rem; }
        .pp-grid .module-icon { width: 40px !important; height: 40px !important; font-size: 1rem !important; }
        .pp-grid .lock-pill { font-size: .7rem; padding: 2px 8px; margin-top: 8px; }
      `}),(0,p.jsx)(i,{}),(0,p.jsxs)(`div`,{className:`arena-container`,children:[(0,p.jsxs)(`div`,{className:`pp-head`,children:[(0,p.jsx)(`h1`,{children:`Practice`}),(0,p.jsxs)(`span`,{className:`pp-level`,children:[(0,p.jsx)(`i`,{className:`fa-solid fa-star`}),` `,o?.current_level===999?`All levels`:`Level ${h}`]}),x?(0,p.jsxs)(`nav`,{className:`pp-switch`,"aria-label":`Which practice`,children:[(0,p.jsxs)(`button`,{type:`button`,className:w===`abacus`?`on`:``,onClick:()=>T(`abacus`),children:[(0,p.jsx)(`i`,{className:`fa-solid fa-calculator`}),` Abacus`]}),(0,p.jsxs)(`button`,{type:`button`,className:w===`vedic`?`on`:``,onClick:()=>T(`vedic`),children:[(0,p.jsx)(`i`,{className:`fa-solid fa-wand-magic-sparkles`}),` Vedic`]})]}):null]}),w===`vedic`?(0,p.jsx)(d,{}):null,(0,p.jsx)(`div`,{className:`module-grid pp-grid`,hidden:w===`vedic`,children:_?F.map(e=>(0,p.jsxs)(`div`,{className:`module-card ${e.locked?`locked`:``}`,onClick:()=>e.locked?null:M(e.path),style:{"--card-accent":e.color},title:e.locked?`Unlocks at Level ${e.required}`:void 0,children:[(0,p.jsxs)(`div`,{className:`module-card-top`,children:[(0,p.jsx)(`div`,{className:`module-icon`,style:{backgroundColor:e.bg,color:e.color},children:(0,p.jsx)(`i`,{className:`fa-solid ${e.locked?`fa-lock`:e.icon}`})}),(0,p.jsxs)(`div`,{className:`module-info`,children:[(0,p.jsx)(`h3`,{children:e.title}),(0,p.jsx)(`p`,{children:e.desc})]})]}),e.locked?(0,p.jsxs)(`span`,{className:`lock-pill`,children:[(0,p.jsx)(`i`,{className:`fa-solid fa-lock`}),` Unlocks at Level `,e.required]}):(0,p.jsx)(`div`,{className:`module-tag`,style:{border:`1px solid ${e.color}`,color:e.color,backgroundColor:e.bg},children:e.tag})]},e.path)):null}),_&&I.length>0&&(0,p.jsxs)(`h2`,{className:`module-section-title`,children:[(0,p.jsx)(`div`,{style:{width:`36px`,height:`36px`,background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:`10px`,fontSize:`16px`},children:(0,p.jsx)(`i`,{className:`fa-solid fa-gamepad`})}),`Listening & Flash Games`]}),_&&I.length>0&&(0,p.jsx)(`div`,{className:`module-grid`,children:I.map(e=>(0,p.jsxs)(`div`,{className:`module-card`,style:{"--card-accent":e.color},onClick:()=>M(e.path),children:[(0,p.jsxs)(`div`,{className:`module-card-top`,children:[(0,p.jsx)(`div`,{className:`module-icon`,style:{backgroundColor:e.bg,color:e.color},children:(0,p.jsx)(`i`,{className:`fa-solid ${e.icon}`})}),(0,p.jsxs)(`div`,{className:`module-info`,children:[(0,p.jsx)(`h3`,{children:e.title}),(0,p.jsx)(`p`,{children:e.desc})]})]}),(0,p.jsx)(`div`,{className:`module-tag`,style:{border:`1px solid ${e.color}`,color:e.color,backgroundColor:e.bg},children:e.tag})]},e.path))})]})]})}function g(e,t){let n={};try{n=JSON.parse(localStorage.getItem(e)||`{}`)}catch{n={}}return{flashAnswers:Number(n.flashAnswers||0),toolsOpened:n.toolsOpened||{},sessionComplete:localStorage.getItem(t)===`done`}}export{h as default};