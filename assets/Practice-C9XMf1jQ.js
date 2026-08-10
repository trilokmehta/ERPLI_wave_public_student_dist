import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{_ as t,b as n,d as r,u as i}from"./interactive-Cdjdmhdv.js";import{C as a}from"./mcq-CTdn8LzU.js";var o=e(n(),1),s=r(),c=`
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
  .module-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  .module-card {
    background: var(--card-bg);
    backdrop-filter: blur(10px);
    border: 1px solid var(--border);
    border-radius: 18px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(0, 86, 179, 0.05);
  }
  .module-card:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 15px 35px rgba(0, 86, 179, 0.15);
    border-color: var(--primary-blue);
  }
  .module-icon {
    width: 56px;
    height: 56px;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    flex-shrink: 0;
  }
  .module-info h3 {
    font-family: "Sora", sans-serif;
    font-size: 1.15rem;
    font-weight: 800;
    color: var(--dark-blue);
    margin-bottom: 6px;
  }
  .module-info p {
    font-size: 0.9rem;
    color: var(--text-light);
    line-height: 1.5;
  }
  .module-tag {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 50px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: auto;
    align-self: flex-start;
  }
  .practice-cta-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }
  @media (max-width: 1000px) {
    .practice-cta-row {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
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
`;function l(){let e=t(),{profile:n,user:r}=a(),l=n?.current_level===999?9:Math.max(0,Math.min(9,Number(n?.current_level??0))),d=new Date().toLocaleDateString(`en-CA`),f=`practice_mission_${r?.id||`guest`}_${d}_level_${l}`,p=`practice_session_${r?.id||`guest`}_${d}_level_${l}`,[m,h]=(0,o.useState)(()=>u(f,p));(0,o.useEffect)(()=>{function e(){h(u(f,p))}return e(),window.addEventListener(`focus`,e),window.addEventListener(`storage`,e),window.addEventListener(`practice-mission-updated`,e),()=>{window.removeEventListener(`focus`,e),window.removeEventListener(`storage`,e),window.removeEventListener(`practice-mission-updated`,e)}},[f,p]);let g=(0,o.useMemo)(()=>{let e=Object.keys(m.toolsOpened||{}).length;return[{label:`Finish today's level session`,done:m.sessionComplete,icon:`fa-calendar-check`,path:`/practice-session`},{label:`Answer 5 flash questions (${Math.min(m.flashAnswers||0,5)}/5)`,done:(m.flashAnswers||0)>=5,icon:`fa-bolt`,path:`/mental-flash-games`},{label:`Open 2 practice tools (${Math.min(e,2)}/2)`,done:e>=2,icon:`fa-compass`,path:null}]},[m]);function _(t){let n=u(f,p);n.toolsOpened={...n.toolsOpened||{},[t]:!0},localStorage.setItem(f,JSON.stringify(n)),window.dispatchEvent(new Event(`practice-mission-updated`)),e(t)}return(0,s.jsxs)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:[(0,s.jsx)(`style`,{children:c}),(0,s.jsx)(i,{}),(0,s.jsxs)(`div`,{className:`arena-container`,children:[(0,s.jsxs)(`div`,{className:`arena-header-grid`,children:[(0,s.jsxs)(`div`,{className:`progress-box`,children:[(0,s.jsxs)(`div`,{className:`level-badge`,children:[(0,s.jsx)(`i`,{className:`fa-solid fa-star`}),` Level 1 Apprentice`]}),(0,s.jsx)(`h1`,{className:`progress-title`,children:`Practice Playground`}),(0,s.jsx)(`p`,{style:{color:`var(--text-light)`,fontWeight:`500`},children:`Pick a short challenge, win points, and come back tomorrow for a fresh round.`}),(0,s.jsx)(`div`,{className:`progress-bar-wrap`,children:(0,s.jsx)(`div`,{className:`progress-bar-fill`})}),(0,s.jsxs)(`div`,{style:{display:`flex`,justifyContent:`space-between`,fontSize:`0.8rem`,color:`var(--text-light)`,fontWeight:`700`},children:[(0,s.jsx)(`span`,{children:`Daily focus`}),(0,s.jsx)(`span`,{children:`Keep streak`})]})]}),(0,s.jsxs)(`div`,{className:`quest-box`,children:[(0,s.jsx)(`h2`,{className:`quest-title`,children:`Today's Mission`}),g.map(e=>(0,s.jsxs)(`div`,{className:`quest-item ${e.done?`completed`:``}`,onClick:()=>e.path?_(e.path):null,style:{cursor:e.path?`pointer`:`default`},children:[(0,s.jsx)(`i`,{className:`fa-solid ${e.done?`fa-circle-check`:e.icon}`,style:{color:e.done?`#4ade80`:`white`,fontSize:`1.2rem`,opacity:e.done?1:.82}}),(0,s.jsx)(`div`,{style:{fontSize:`0.9rem`,fontWeight:`600`},children:e.label})]},e.label))]})]}),(0,s.jsxs)(`div`,{className:`practice-cta-row`,children:[(0,s.jsxs)(`div`,{className:`daily-card ${m.sessionComplete?``:`pending-card-highlight`}`,onClick:()=>_(`/practice-session`),style:m.sessionComplete?{}:{border:`2px solid #f59e0b`,background:`linear-gradient(135deg, color-mix(in srgb, var(--gold) 15%, white), white)`,boxShadow:`0 8px 24px -4px rgba(245, 158, 11, 0.35)`,position:`relative`},children:[!m.sessionComplete&&(0,s.jsxs)(`span`,{style:{position:`absolute`,top:`-10px`,right:`14px`,background:`#f59e0b`,color:`#ffffff`,fontSize:`0.68rem`,fontWeight:`900`,padding:`3px 10px`,borderRadius:`50px`,textTransform:`uppercase`,letterSpacing:`0.8px`,boxShadow:`0 2px 8px rgba(245, 158, 11, 0.4)`,zIndex:2},children:[(0,s.jsx)(`i`,{className:`fa-solid fa-bell`,style:{marginRight:4}}),` PENDING TODAY`]}),(0,s.jsxs)(`strong`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-calendar-check`,style:{color:m.sessionComplete?void 0:`#d97706`}}),` Daily Session`]}),(0,s.jsx)(`span`,{children:`Level-wise questions that refresh every day.`})]}),(0,s.jsxs)(`div`,{className:`daily-card`,onClick:()=>_(`/mental-flash-games`),children:[(0,s.jsxs)(`strong`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-bolt`}),` Quick Flash Games`]}),(0,s.jsx)(`span`,{children:`Fast MCQ rounds for listening, beads, and sums.`})]}),(0,s.jsxs)(`div`,{className:`daily-card`,onClick:()=>_(`/interactive-abacus`),children:[(0,s.jsxs)(`strong`,{children:[(0,s.jsx)(`i`,{className:`fa-solid fa-calculator`}),` Interactive Abacus`]}),(0,s.jsx)(`span`,{children:`Hands-on bead practice for visualizing every move.`})]})]}),[{section:`Level 1`,icon:`fa-star`,items:[{title:`Addition`,desc:`Direct keyboard entry addition.`,icon:`fa-plus`,color:`#3b82f6`,bg:`#dbeafe`,tag:`Arithmetic`,path:`/addition`},{title:`Negative Numbers`,desc:`Practice negative arithmetic.`,icon:`fa-minus`,color:`#64748b`,bg:`#f1f5f9`,tag:`Integers`,path:`/negative`},{title:`Squares`,desc:`Calculate the perfect square.`,icon:`fa-square`,color:`#f59e0b`,bg:`#fef3c7`,tag:`Exponents`,path:`/square`},{title:`LCM`,desc:`Lowest Common Multiple.`,icon:`fa-layer-group`,color:`#059669`,bg:`#ecfdf5`,tag:`Factors`,path:`/lcm`}]},{section:`Level 2`,icon:`fa-star-half-stroke`,items:[{title:`Add & Sub`,desc:`Mixed addition & subtraction.`,icon:`fa-plus-minus`,color:`#0ea5e9`,bg:`#e0f2fe`,tag:`Arithmetic`,path:`/addsub`},{title:`Decimal Add & Sub`,desc:`Addition & subtraction with decimals.`,icon:`fa-droplet`,color:`#8b5cf6`,bg:`#ede9fe`,tag:`Decimals`,path:`/decimal-addsub`},{title:`Square Roots`,desc:`Find the square root.`,icon:`fa-square-root-variable`,color:`#d97706`,bg:`#fef3c7`,tag:`Roots`,path:`/sq-root`},{title:`HCF`,desc:`Highest Common Factor.`,icon:`fa-puzzle-piece`,color:`#0d9488`,bg:`#ccfbf1`,tag:`Factors`,path:`/hcf`},{title:`Long Multiplication`,desc:`Multi-digit multiplication.`,icon:`fa-xmark`,color:`#475569`,bg:`#f1f5f9`,tag:`Multiplication`,path:`/long-multiply`}]},{section:`Level 3`,icon:`fa-ranking-star`,items:[{title:`Multiplication`,desc:`Visual multiplication practice.`,icon:`fa-xmark`,color:`#10b981`,bg:`#d1fae5`,tag:`Multiplication`,path:`/multiply`},{title:`Decimal Multiply`,desc:`Multiplication with decimals.`,icon:`fa-water`,color:`#d946ef`,bg:`#fae8ff`,tag:`Decimals`,path:`/decimal-multiply`},{title:`Cubes`,desc:`Calculate the perfect cube.`,icon:`fa-cube`,color:`#ea580c`,bg:`#ffedd5`,tag:`Exponents`,path:`/cube`},{title:`Percentages`,desc:`Calculate percentages.`,icon:`fa-percent`,color:`#db2777`,bg:`#fce7f3`,tag:`Fractions`,path:`/percentage`},{title:`Times Table`,desc:`Grid practice for tables.`,icon:`fa-table`,color:`#334155`,bg:`#f1f5f9`,tag:`Tables`,path:`/table`}]},{section:`Level 4`,icon:`fa-trophy`,items:[{title:`Division`,desc:`Division exercises.`,icon:`fa-divide`,color:`#f43f5e`,bg:`#ffe4e6`,tag:`Division`,path:`/division`},{title:`Decimal Division`,desc:`Division with decimals.`,icon:`fa-calculator`,color:`#06b6d4`,bg:`#ecfeff`,tag:`Decimals`,path:`/decimal-division`},{title:`Cube Roots`,desc:`Find the cube root.`,icon:`fa-cubes`,color:`#c2410c`,bg:`#ffedd5`,tag:`Roots`,path:`/cube-root`}]},{section:`Listening & Flash Games`,icon:`fa-gamepad`,items:[{title:`Voice & Flash MCQ`,desc:`Listen, read beads, and add flashed numbers.`,icon:`fa-volume-high`,color:`#ec4899`,bg:`#fce7f3`,tag:`Game`,path:`/mental-flash-games`}]}].map((e,t)=>(0,s.jsxs)(`div`,{children:[(0,s.jsxs)(`h2`,{className:`module-section-title`,children:[(0,s.jsx)(`div`,{style:{width:`36px`,height:`36px`,background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:`10px`,fontSize:`16px`},children:(0,s.jsx)(`i`,{className:`fa-solid ${e.icon}`})}),e.section]}),(0,s.jsx)(`div`,{className:`module-grid`,children:e.items.map((e,t)=>(0,s.jsxs)(`div`,{className:`module-card`,onClick:()=>_(e.path),children:[(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`16px`},children:[(0,s.jsx)(`div`,{className:`module-icon`,style:{backgroundColor:e.bg,color:e.color},children:(0,s.jsx)(`i`,{className:`fa-solid ${e.icon}`})}),(0,s.jsxs)(`div`,{className:`module-info`,children:[(0,s.jsx)(`h3`,{children:e.title}),(0,s.jsx)(`p`,{children:e.desc})]})]}),(0,s.jsx)(`div`,{className:`module-tag`,style:{border:`1px solid ${e.color}`,color:e.color,backgroundColor:e.bg},children:e.tag})]},t))})]},t))]})]})}function u(e,t){let n={};try{n=JSON.parse(localStorage.getItem(e)||`{}`)}catch{n={}}return{flashAnswers:Number(n.flashAnswers||0),toolsOpened:n.toolsOpened||{},sessionComplete:localStorage.getItem(t)===`done`}}export{l as default};