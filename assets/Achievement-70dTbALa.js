import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{H as t,J as n,O as r,T as i,ft as a,ht as o,k as s,rt as c,tt as l,u,z as d}from"./interactive-C6biHwyI.js";var f=e(o(),1),p=s(),m=`
  .achievement-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 60px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  .achievement-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    position: relative;
    overflow: hidden;
    border-radius: 26px;
    padding: 32px 24px;
    background: radial-gradient(circle at 12% 20%, color-mix(in srgb, var(--gold) 40%, transparent), transparent 28%), radial-gradient(circle at 88% 18%, color-mix(in srgb, var(--primary-blue) 30%, transparent), transparent 30%), linear-gradient(135deg, color-mix(in srgb, var(--primary-blue) 6%, transparent) 0%, color-mix(in srgb, var(--dark-blue) 4%, transparent) 100%);
    border: 1px solid rgba(255, 255, 255, 0.82);
    box-shadow: var(--shadow);
  }
  .achievement-header h1 {
    font-family: "Sora", sans-serif;
    color: var(--dark-blue);
    font-size: clamp(1.9rem, 4vw, 3rem);
    margin: 0 0 8px;
  }
  .achievement-header p {
    color: var(--text-light);
    font-weight: 800;
    margin: 0;
  }
  .achievement-actions {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    position: relative;
    z-index: 2;
  }
  .achievement-actions .g-btn {
    width: auto;
    padding: 10px 24px;
    font-size: 0.9rem;
  }
  .achievement-actions .g-btn-ghost {
    background: transparent;
    color: var(--dark-blue);
    border: 1.5px solid color-mix(in srgb, var(--dark-blue) 40%, transparent);
    font-weight: 800;
  }
  .achievement-actions .g-btn-ghost:hover {
    background: color-mix(in srgb, var(--primary-blue) 8%, transparent);
    color: var(--dark-blue);
    border-color: var(--dark-blue);
  }
  @media (max-width: 600px) {
    .achievement-actions {
      width: 100%;
      justify-content: stretch;
    }
    .achievement-actions .g-btn {
      flex: 1;
      text-align: center;
    }
  }
  .achievement-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
    gap: 14px;
  }
  .achievement-stat,
  .achievement-filter,
  .achievement-card {
    border: 1px solid var(--border);
    background: var(--card-bg);
    box-shadow: var(--shadow);
  }
  .achievement-stat {
    border-radius: 16px;
    padding: 18px;
  }
  .achievement-stat strong {
    display: block;
    font-family: "Sora", sans-serif;
    color: var(--dark-blue);
    font-size: 1.8rem;
    line-height: 1;
    margin-bottom: 8px;
  }
  .achievement-stat span {
    color: var(--text-light);
    font-weight: 900;
    text-transform: uppercase;
    font-size: 0.78rem;
    letter-spacing: 0.5px;
  }
  .achievement-filter {
    border-radius: 16px;
    padding: 14px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .filter-btn {
    border: 1px solid var(--border);
    background: white;
    color: var(--dark-blue);
    border-radius: 999px;
    padding: 8px 12px;
    font-weight: 900;
    cursor: pointer;
  }
  .filter-btn.active {
    background: var(--primary-blue);
    color: white;
    border-color: var(--primary-blue);
  }
  .achievement-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap: 18px;
  }
  
  @keyframes cardEntrance {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .achievement-card {
    border-radius: 18px;
    padding: 22px;
    min-height: 210px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    background: white;
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    opacity: 0;
    animation: cardEntrance 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.15), 
                box-shadow 0.4s ease, 
                border-color 0.4s ease;
    position: relative;
    overflow: hidden;
  }

  /* Shimmer effect for earned cards */
  .achievement-card:not(.locked)::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -60%;
    width: 20%;
    height: 200%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 30%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(30deg);
    transition: all 0.6s ease;
  }

  .achievement-card:not(.locked):hover::after {
    left: 140%;
    transition: all 0.8s ease;
  }

  .achievement-card:hover {
    transform: translateY(-6px);
    border-color: var(--glow-color, var(--primary-blue));
    box-shadow: 0 14px 28px var(--shadow-color, rgba(0, 86, 179, 0.15)), 
                0 0 12px var(--glow-color, rgba(0, 86, 179, 0.1));
  }

  .achievement-card.locked {
    opacity: 0.82;
    background: color-mix(in srgb, var(--card-bg) 95%, transparent);
  }

  .achievement-card.locked:hover {
    border-color: #cbd5e1;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
    transform: translateY(-3px);
  }

  .achievement-card.locked .achievement-icon {
    filter: grayscale(0.85);
    opacity: 0.65;
  }

  .achievement-icon {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: grid;
    place-items: center;
    color: white;
    font-size: 1.45rem;
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.25);
  }

  .achievement-card:hover .achievement-icon {
    transform: scale(1.15) rotate(8deg);
  }
  
  /* Make earned icons float slightly */
  .achievement-card:not(.locked) .achievement-icon {
    animation: floatIcon 3s ease-in-out infinite alternate;
  }

  @keyframes floatIcon {
    from { transform: translateY(0px); }
    to { transform: translateY(-3px); }
  }

  .achievement-card h3 {
    font-family: "Sora", sans-serif;
    color: var(--dark-blue);
    margin: 0;
    font-size: 1.05rem;
    font-weight: 800;
    transition: color 0.3s ease;
  }
  
  .achievement-card:hover h3 {
    color: var(--glow-color, var(--dark-blue));
  }

  .achievement-card p {
    margin: 0;
    color: var(--text-light);
    font-weight: 650;
    line-height: 1.45;
    font-size: 0.82rem;
  }

  .achievement-state {
    font-weight: 950;
    color: var(--ok);
    font-size: 0.78rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    gap: 6px;
    animation: pulseCheck 2s infinite alternate;
  }

  @keyframes pulseCheck {
    from { transform: scale(1); }
    to { transform: scale(1.03); }
  }

  .achievement-progress-container {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .achievement-progress-bar-bg {
    height: 7px;
    background: #e2e8f0;
    border-radius: 999px;
    overflow: hidden;
  }

  .achievement-progress-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-blue), var(--gold));
    border-radius: 999px;
    transition: width 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .achievement-progress-text {
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--text-light);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media (max-width: 700px) {
    .achievement-header {
      align-items: flex-start;
      flex-direction: column;
    }
  }
  @media (max-width: 768px) {
    .achievement-page {
      padding: 0 10px 40px;
      gap: 16px;
    }
    .achievement-header {
      padding: 24px 16px;
      border-radius: 18px;
    }
  }
`,h=[{key:`all`,label:`All`},{key:`earned`,label:`Earned`},{key:`daily_complete`,label:`Daily`},{key:`login_streak`,label:`Login`},{key:`skill_milestone`,label:`Skills`},{key:`time_spent`,label:`Time`}];function g(e){if(!e)return 0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);return Number(t.streakCount||0)}catch{return 0}}function _(e,t,n,r,i){if(t.has(e.code))return{current:1,target:1,text:`Earned`};if(e.type===`login_streak`){let t=Number(e.target||1);return{current:Math.min(i,t),target:t,text:`${i} / ${t} days`}}if(e.type===`time_spent`){let t=Number(e.target||1),n=r.reduce((e,t)=>e+(t.total_seconds||0),0),i=Math.round(n/60);return{current:Math.min(i,t),target:t,text:`${i} / ${t} mins`}}if(e.type===`skill_milestone`){let t=Number(e.target||1),r=e.category,i=0;return n.forEach(e=>{e.question_type_summary&&Object.entries(e.question_type_summary).forEach(([e,t])=>{let n=Number(t.correct||0);r===`addition`&&[`full`,`addSub`,`longSum`].includes(e)&&(i+=n),r===`subtraction`&&[`addSub`].includes(e)&&(i+=n),r===`multiplication`&&[`multiply`,`decimalMultiply`].includes(e)&&(i+=n),r===`division`&&[`division`,`decimalDivision`].includes(e)&&(i+=n),r===`abacus`&&e===`abacus`&&(i+=n),r===`flash`&&e===`flash`&&(i+=n),r===`voice`&&e===`voice`&&(i+=n),r===`tables`&&e===`table`&&(i+=n),r===`decimal`&&[`decimalAddSub`,`decimalMultiply`,`decimalDivision`].includes(e)&&(i+=n),r===`roots`&&[`squareRoot`,`cubeRoot`].includes(e)&&(i+=n),r===`cubes`&&[`cube`,`cubeRoot`].includes(e)&&(i+=n)})}),{current:Math.min(i,t),target:t,text:`${i} / ${t} points`}}if(e.type===`correct_streak`){let t=Number(e.target||1),r=n.length?Math.max(0,...n.map(e=>e.max_correct_streak||0)):0;return{current:Math.min(r,t),target:t,text:`${r} / ${t} in a row`}}if(e.code===`daily_math_beast`){let e=n.filter(e=>e.status===`completed`).length;return{current:+!!e,target:1,text:e?`1 / 1 Completed`:`0 / 1 Completed`}}if(e.code===`daily_correct_beast`){let e=n.some(e=>e.correct_count===e.total_questions&&e.status===`completed`);return{current:+!!e,target:1,text:e?`1 / 1 Perfect`:`0 / 1 Perfect`}}if(e.code===`wow_math_spark`){let e=n.some(e=>e.correct_count/e.total_questions>=.8&&e.status===`completed`);return{current:+!!e,target:1,text:e?`1 / 1 Scored >= 80%`:`0 / 1 Scored >= 80%`}}return{current:0,target:1,text:`Locked`}}function v(){let e=a(),{institute:o,membership:s}=r(),[v,y]=(0,f.useState)([]),[b,x]=(0,f.useState)([]),[S,C]=(0,f.useState)([]),[w,T]=(0,f.useState)(`all`),[E,D]=(0,f.useState)(!0);(0,f.useEffect)(()=>{let e=!0;if(!(!o?.id||!s?.id))return D(!0),Promise.all([t(o.id,s.id),d(s.id),n(s.id)]).then(([t,n,r])=>{e&&(t.data&&y(t.data),n.data&&x(n.data),r.data&&C(r.data),D(!1))}).catch(t=>{console.warn(`Error fetching achievements stats:`,t),e&&D(!1)}),()=>{e=!1}},[o?.id,s?.id]);let O=(0,f.useMemo)(()=>g(s?.id),[s?.id]),k=(0,f.useMemo)(()=>new Map(v.map(e=>[e.achievement_code,e])),[v]),A=(0,f.useMemo)(()=>l.filter(e=>w===`all`?!0:w===`earned`?k.has(e.code):e.type===w),[w,k]);return(0,p.jsxs)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`,justifyContent:`flex-start`,minHeight:0},children:[(0,p.jsx)(`style`,{children:m}),(0,p.jsx)(i,{}),(0,p.jsxs)(`div`,{className:`achievement-page`,children:[(0,p.jsxs)(`div`,{className:`achievement-header`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h1`,{children:`Achievements`}),(0,p.jsx)(`p`,{children:`400+ badges for daily practice, login streaks, skill milestones, accuracy, and time spent.`})]}),(0,p.jsx)(u,{variant:`achievements-banner`,size:260}),(0,p.jsxs)(`div`,{className:`achievement-actions`,children:[(0,p.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:()=>e(`/profile`),children:`Profile`}),(0,p.jsx)(`button`,{className:`g-btn g-btn-ghost`,onClick:()=>e(`/`),children:`Home`})]})]}),(0,p.jsxs)(`div`,{className:`achievement-stats`,children:[(0,p.jsxs)(`div`,{className:`achievement-stat`,children:[(0,p.jsx)(`strong`,{children:v.length}),(0,p.jsx)(`span`,{children:`Earned`})]}),(0,p.jsxs)(`div`,{className:`achievement-stat`,children:[(0,p.jsx)(`strong`,{children:l.length}),(0,p.jsx)(`span`,{children:`Total Badges`})]}),(0,p.jsxs)(`div`,{className:`achievement-stat`,children:[(0,p.jsx)(`strong`,{children:Math.max(0,l.length-v.length)}),(0,p.jsx)(`span`,{children:`Locked`})]})]}),(0,p.jsx)(`div`,{className:`achievement-filter`,children:h.map(e=>(0,p.jsx)(`button`,{className:`filter-btn ${w===e.key?`active`:``}`,onClick:()=>T(e.key),children:e.label},e.key))}),E?(0,p.jsx)(`div`,{style:{textAlign:`center`,padding:`40px`,fontWeight:`bold`,color:`var(--text-light)`},children:`Loading your badges & progress...`}):(0,p.jsx)(`div`,{className:`achievement-grid`,children:A.map((e,t)=>{let n=k.get(e.code),r=c(e.code)||e,i=_(e,k,b,S,O),a=Math.round(i.current/i.target*100),o=n?{"--glow-color":`${r.color}50`,"--shadow-color":`${r.color}25`,"--glow-solid":r.color}:{};return(0,p.jsxs)(`div`,{className:`achievement-card ${n?``:`locked`}`,style:{...o,animationDelay:`${Math.min(20,t)*.03}s`},children:[(0,p.jsx)(`div`,{className:`achievement-icon`,style:{background:r.color},children:(0,p.jsx)(`i`,{className:`fa-solid ${r.icon}`})}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{children:r.name}),(0,p.jsx)(`p`,{children:r.description})]}),(0,p.jsx)(`div`,{className:`achievement-progress-container`,children:n?(0,p.jsxs)(`div`,{className:`achievement-state`,style:{color:r.color},children:[(0,p.jsx)(`i`,{className:`fa-solid fa-circle-check`}),` Earned`]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`achievement-progress-bar-bg`,children:(0,p.jsx)(`div`,{className:`achievement-progress-bar-fill`,style:{width:`${a}%`}})}),(0,p.jsxs)(`div`,{className:`achievement-progress-text`,children:[(0,p.jsx)(`span`,{children:i.text}),(0,p.jsxs)(`span`,{children:[a,`%`]})]})]})})]},e.code)})})]})]})}export{v as default};