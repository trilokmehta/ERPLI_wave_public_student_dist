import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{D as t,E as n,I as r,J as i,Q as a,Z as o,_ as s,d as c,et as ee,f as l,g as u,h as te,m as ne,p as re,pt as d,v as f,w as ie}from"./interactive-ibclPyx0.js";import{m as ae}from"./mcq-BQ5LqkkC.js";var p=e(d(),1),m=t(),oe=`
  @media (max-width: 1024px) {
    body.practice-session-focus .sidebar,
    body.practice-session-focus .sidebar-overlay,
    body.practice-session-focus .hamburger {
      display: none;
    }
    body.practice-session-focus .main-content {
      margin-left: 0;
      width: 100%;
    }
  }
  body.practice-session-focus .page-wrap {
    justify-content: flex-start;
    min-height: 100vh;
    padding-top: calc(var(--nav-h) + 24px) !important;
  }
  .session-shell {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px 60px;
    width: 100%;
  }
  .session-hero {
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
    margin-bottom: 24px;
  }
  .session-hero h1 {
    font-family: "Sora", sans-serif;
    font-size: clamp(1.8rem, 4vw, 3rem);
    line-height: 1.1;
    margin: 0 0 8px;
    color: var(--dark-blue);
  }
  .session-hero p {
    color: var(--text-light);
    font-weight: 700;
    margin: 0;
  }
  .session-pill {
    border: 0;
    background: var(--dark-blue);
    color: white;
    border-radius: 8px;
    padding: 8px 16px;
    font-weight: 950;
    white-space: nowrap;
    text-transform: uppercase;
    font-size: 0.8rem;
    position: relative;
    z-index: 2;
  }
  .session-grid {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 18px;
    align-items: start;
  }
  .mode-list,
  .session-card {
    border: 1px solid var(--border);
    background: var(--card-bg);
    border-radius: 18px;
    box-shadow: var(--shadow);
  }
  .mode-list {
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .mode-row {
    border: 1px solid var(--border);
    background: white;
    border-radius: 14px;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 900;
  }
  .mode-row i {
    width: 34px;
    height: 34px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    background: var(--light-blue);
    color: var(--primary-blue);
  }
  .mode-row span {
    font-family: "Sora", sans-serif;
    font-size: 0.9rem;
    line-height: 1.25;
  }
  .mode-row small {
    color: var(--text-light);
    font-family: "DM Sans", sans-serif;
    font-size: 0.78rem;
  }
  .mode-row.active {
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--primary-blue) 18%, transparent);
  }
  .mode-row.done {
    color: var(--ok);
  }
  .mode-row.done i {
    background: var(--ok-lt);
    color: var(--ok);
  }
  .mode-row.review {
    color: var(--primary-blue);
  }
  .mode-row .journey-step {
    display: block;
    color: var(--dark-blue);
    font-family: "Sora", sans-serif;
    font-size: 0.92rem;
    line-height: 1.2;
  }
  .mode-row .journey-mode {
    display: block;
    color: var(--text-light);
    font-family: "DM Sans", sans-serif;
    font-size: 0.76rem;
    font-weight: 850;
    margin-top: 2px;
  }
  .session-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 18px;
    box-shadow: var(--shadow);
    padding: 22px;
    min-height: 520px;
  }
  .session-ready {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
    gap: 18px;
    align-items: stretch;
  }
  .ready-panel,
  .journey-panel {
    border: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.84);
    border-radius: 18px;
    box-shadow: var(--shadow);
    padding: 22px;
  }
  .ready-panel {
    min-height: 380px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 18px;
    background:
      radial-gradient(circle at 16% 18%, color-mix(in srgb, var(--gold) 24%, transparent), transparent 30%),
      linear-gradient(135deg, rgba(255,255,255,0.94), color-mix(in srgb, var(--primary-blue) 8%, white));
  }
  .ready-kicker {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    border-radius: 999px;
    padding: 8px 12px;
    background: var(--light-blue);
    color: var(--primary-blue);
    font-family: "Sora", sans-serif;
    font-size: 0.78rem;
    font-weight: 950;
    text-transform: uppercase;
  }
  .ready-title {
    font-family: "Sora", sans-serif;
    font-size: clamp(2rem, 4.5vw, 3.8rem);
    line-height: 1.05;
    color: var(--dark-blue);
    margin: 0;
  }
  .ready-copy {
    color: var(--text-light);
    font-size: 1.04rem;
    font-weight: 780;
    max-width: 620px;
    margin: 0;
  }
  .ready-stats {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .ready-stat {
    border: 1px solid var(--border);
    background: white;
    border-radius: 12px;
    padding: 10px 12px;
    min-width: 112px;
  }
  .ready-stat strong {
    display: block;
    color: var(--dark-blue);
    font-family: "Sora", sans-serif;
    font-size: 1.08rem;
  }
  .ready-stat span {
    color: var(--text-light);
    font-size: 0.76rem;
    font-weight: 850;
  }
  .journey-panel h2 {
    font-family: "Sora", sans-serif;
    color: var(--dark-blue);
    font-size: 1.2rem;
    margin: 0 0 14px;
  }
  .journey-list {
    display: grid;
    gap: 10px;
  }
  .journey-card {
    border: 1px solid var(--border);
    background: white;
    border-radius: 14px;
    padding: 12px;
    display: flex;
    gap: 12px;
    align-items: center;
  }
  .journey-card i {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    background: var(--light-blue);
    color: var(--primary-blue);
    flex-shrink: 0;
  }
  .journey-card strong {
    display: block;
    color: var(--dark-blue);
    font-family: "Sora", sans-serif;
    font-size: 0.9rem;
  }
  .journey-card span {
    display: block;
    color: var(--text-light);
    font-size: 0.78rem;
    font-weight: 800;
  }
  .session-stage {
    min-height: 250px;
    border: 1px solid var(--border);
    border-radius: 16px;
    background: rgba(255,255,255,0.72);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 12px;
    text-align: center;
    padding: 22px;
    margin: 16px 0;
  }
  .session-countdown {
    width: min(100%, 460px);
    display: grid;
    justify-items: center;
    gap: 12px;
  }
  .countdown-ring {
    width: 118px;
    height: 118px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    background:
      radial-gradient(circle, white 55%, transparent 56%),
      conic-gradient(var(--primary-blue), var(--gold), var(--primary-blue));
    box-shadow: 0 14px 30px color-mix(in srgb, var(--primary-blue) 18%, transparent);
    animation: countdownPulse 1s ease-in-out infinite;
  }
  .countdown-ring strong {
    font-family: "Sora", sans-serif;
    font-size: 3.2rem;
    color: var(--primary-blue);
    line-height: 1;
  }
  .countdown-title {
    font-family: "Sora", sans-serif;
    color: var(--dark-blue);
    font-size: clamp(1.5rem, 4vw, 2.3rem);
    font-weight: 950;
  }
  .countdown-copy {
    color: var(--text-light);
    font-weight: 850;
  }
  @keyframes countdownPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.04); }
  }
  .session-expression {
    font-family: "Sora", sans-serif;
    font-size: clamp(2rem, 5vw, 4.4rem);
    font-weight: 900;
    color: var(--primary-blue);
    line-height: 1.15;
    overflow-wrap: anywhere;
  }
  .session-vertical {
    font-family: "Sora", sans-serif;
    font-size: clamp(1.6rem, 4vw, 3.2rem);
    font-weight: 900;
    color: var(--primary-blue);
    line-height: 1.25;
    display: inline-grid;
    grid-template-columns: 1.2em auto;
    justify-items: end;
    column-gap: 0.35em;
  }
  .session-vertical .vrow-sign {
    justify-self: center;
  }
  .session-vertical .vrow-value {
    font-variant-numeric: tabular-nums;
  }
  .session-vertical .vrule {
    grid-column: 1 / -1;
    width: 100%;
    height: 3px;
    background: var(--dark-blue);
    border-radius: 2px;
    margin: 6px 0;
  }
  .session-vertical .vtotal {
    grid-column: 1 / -1;
    color: var(--dark-blue);
  }
  .layout-toggle {
    display: inline-flex;
    gap: 4px;
    padding: 4px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: white;
  }
  .layout-toggle button {
    border: 0;
    background: transparent;
    color: var(--text-light);
    font-weight: 900;
    font-size: 0.75rem;
    text-transform: uppercase;
    padding: 6px 12px;
    border-radius: 999px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .layout-toggle button.active {
    background: var(--light-blue);
    color: var(--primary-blue);
  }
  @keyframes flashNumPop {
    0% { transform: scale(0.6); opacity: 0; }
    15% { transform: scale(1.15); opacity: 1; }
    100% { transform: scale(1); opacity: 1; }
  }
  .animate-flash-num {
    display: inline-block;
    animation: flashNumPop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }
  .session-sub {
    color: var(--text-light);
    font-weight: 800;
  }
  .session-abacus {
    display: flex;
    gap: 12px;
    padding: 16px;
    border-radius: 16px;
    background: #f8fafc;
    border: 1px solid var(--border);
  }
  .session-col {
    width: 46px;
    min-height: 170px;
    border-radius: 14px;
    background: white;
    border: 2px solid color-mix(in srgb, var(--primary-blue) 14%, transparent);
    display: grid;
    grid-template-rows: 52px 1fr;
    position: relative;
    overflow: hidden;
  }
  .session-col::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 55px;
    height: 3px;
    background: var(--dark-blue);
  }
  .session-bead-zone {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 8px 0;
  }
  .session-bead {
    width: 28px;
    height: 17px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--primary-blue) 15%, transparent);
    border: 2px solid color-mix(in srgb, var(--primary-blue) 25%, transparent);
    transition: transform .18s ease, background .18s ease;
  }
  .session-bead.active {
    background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue));
    border-color: transparent;
  }
  /* Heaven bead rests at the top and drops down to the bar when counted (5). */
  .session-bead-zone.heaven .session-bead.active {
    transform: translateY(25px);
  }
  .session-result {
    text-align: center;
    font-family: "Sora", sans-serif;
    font-size: 2.4rem;
    color: var(--primary-blue);
    font-weight: 900;
    margin: 18px 0;
  }
  .feedback-pop {
    min-height: 68px;
    margin: 12px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .feedback-bubble {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 12px 18px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: white;
    box-shadow: var(--shadow);
    font-family: "Sora", sans-serif;
    font-weight: 900;
    animation: feedbackPop 0.28s ease-out;
  }
  .feedback-bubble.correct {
    color: var(--ok);
    background: var(--ok-lt);
    border-color: color-mix(in srgb, var(--ok) 22%, transparent);
  }
  .feedback-bubble.wrong {
    color: #9a3412;
    background: #fff7ed;
    border-color: #fed7aa;
  }
  .feedback-character {
    width: 38px;
    height: 38px;
    border-radius: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: white;
  }
  @keyframes feedbackPop {
    from { transform: scale(0.84) translateY(8px); opacity: 0; }
    to { transform: scale(1) translateY(0); opacity: 1; }
  }
  .mistake-list {
    display: grid;
    gap: 12px;
    margin-top: 16px;
  }
  .mistake-card {
    border: 1px solid var(--border);
    border-radius: 14px;
    background: rgba(255,255,255,0.82);
    padding: 14px;
  }
  .mistake-card strong {
    display: block;
    color: var(--dark-blue);
    margin-bottom: 6px;
  }
  .mistake-card span {
    display: inline-flex;
    margin-right: 12px;
    color: var(--text-light);
    font-weight: 800;
  }
  .achievement-strip {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 10px;
    margin-top: 16px;
  }
  .achievement-chip {
    border: 1px solid var(--border);
    border-radius: 12px;
    background: rgba(255,255,255,0.84);
    padding: 12px;
    display: flex;
    gap: 10px;
    align-items: center;
    text-align: left;
  }
  .achievement-chip i {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    color: white;
    flex-shrink: 0;
  }
  .achievement-chip strong {
    display: block;
    color: var(--dark-blue);
    font-size: 0.88rem;
  }
  .achievement-chip span {
    color: var(--text-light);
    font-size: 0.74rem;
    font-weight: 800;
  }
  .session-tabs {
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
    border-bottom: 2px solid var(--border);
    padding-bottom: 12px;
  }
  .session-tab-btn {
    background: none;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-light);
    cursor: pointer;
    border-radius: 12px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .session-tab-btn:hover {
    background: var(--light-blue);
    color: var(--primary-blue);
  }
  .session-tab-btn.active {
    background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue));
    color: white;
    box-shadow: 0 4px 12px color-mix(in srgb, var(--primary-blue) 20%, transparent);
  }
  @media (max-width: 820px) {
    .session-hero,
    .session-grid,
    .session-ready {
      grid-template-columns: 1fr;
    }
    .session-hero {
      align-items: flex-start;
      flex-direction: column;
    }
    .playing-active .mode-list {
      display: none;
    }
  }
  .mcq-btn {
    position: relative;
    padding-left: 54px !important;
    text-align: left;
  }
  .mcq-key-hint {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    background: #f1f5f9;
    color: #475569;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 750;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .mcq-btn.correct .mcq-key-hint,
  .mcq-btn.wrong .mcq-key-hint {
    background: rgba(255, 255, 255, 0.25);
    color: white;
    border-color: rgba(255, 255, 255, 0.4);
  }
`,h=[`Warm Up`,`Brain Builder`,`Speed Round`,`Focus Finish`,`Missing Link`,`Compare Clash`];function se(){return new Date().toLocaleDateString(`en-CA`)}function g(e){if(!(`speechSynthesis`in window))return!1;window.speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e.map((e,t)=>t===0?String(e):e<0?`minus ${Math.abs(e)}`:`plus ${e}`).join(`. `));return t.rate=.8,window.speechSynthesis.speak(t),!0}function ce(e){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let n=new t,r=n.createGain();r.connect(n.destination),r.gain.setValueAtTime(1e-4,n.currentTime),r.gain.exponentialRampToValueAtTime(.14,n.currentTime+.02),r.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.35),(e===`correct`?[523.25,659.25,783.99]:[196,164.81]).forEach((t,i)=>{let a=n.createOscillator();a.type=e===`correct`?`sine`:`triangle`,a.frequency.value=t,a.connect(r);let o=n.currentTime+i*.09;a.start(o),a.stop(o+.12)}),setTimeout(()=>n.close(),500)}function le(){`vibrate`in navigator&&navigator.vibrate([80,40,80])}function ue({value:e}){return(0,m.jsx)(`div`,{className:`session-abacus`,children:String(e).padStart(2,`0`).split(``).map(Number).map((e,t)=>{let n=e>=5,r=e%5;return(0,m.jsxs)(`div`,{className:`session-col`,children:[(0,m.jsx)(`div`,{className:`session-bead-zone heaven`,children:(0,m.jsx)(`span`,{className:`session-bead ${n?`active`:``}`})}),(0,m.jsx)(`div`,{className:`session-bead-zone`,children:[1,2,3,4].map(e=>(0,m.jsx)(`span`,{className:`session-bead ${r>=e?`active`:``}`},e))})]},`${e}-${t}`)})})}var de=new Set([`full`,`longSum`,`addSub`,`decimalAddSub`,`negative`]),fe=`practice_question_layout`;function pe({numbers:e}){return(0,m.jsxs)(`div`,{className:`session-vertical`,children:[e.map((e,t)=>(0,m.jsxs)(`span`,{style:{display:`contents`},children:[(0,m.jsx)(`span`,{className:`vrow-sign`,children:t===0?``:e<0?`-`:`+`}),(0,m.jsx)(`span`,{className:`vrow-value`,children:f(t===0?e:Math.abs(e))})]},`${e}-${t}`)),(0,m.jsx)(`span`,{className:`vrule`}),(0,m.jsx)(`span`,{className:`vtotal`,children:`?`})]})}var _=new Set([`full`,`longSum`,`flash`,`voice`,`addSub`,`missing`,`compare`,`abacus`]);function v(e){return e?{min:e<=1?1:10**(e-1),max:10**e-1}:null}function me(e,t){if(!e||!(e.rows!=null||e.digits!=null||e.digits2!=null||e.decimals!=null||e.rule!=null))return{};let n=l(t),r=v(e.digits),i=v(e.digits2),a={};if(e.rule&&(a.rules={...n.rules||{},rule:e.rule}),_.has(e.mode)){let t=n.additionConfigs&&n.additionConfigs[0]||n.number||{min:1,max:9,count:3},i={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count};a.additionConfigs=[i],a.number={...i}}else if(e.mode===`multiply`){let e=n.multiply||{};a.multiply={aMin:r?r.min:e.aMin,aMax:r?r.max:e.aMax,bMin:i?i.min:e.bMin,bMax:i?i.max:e.bMax}}else if(e.mode===`division`){let e=n.division||{};a.division={quotientMin:r?r.min:e.quotientMin,quotientMax:r?r.max:e.quotientMax,divisorMin:i?i.min:e.divisorMin,divisorMax:i?i.max:e.divisorMax}}else if(e.mode===`decimalAddSub`){let t=n.number||{min:10,max:99,count:3};a.number={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count},e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals,addDivisor:10**e.decimals})}else if(e.mode===`negative`){let t=n.negative||{};a.negative={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count}}else if(e.mode===`percentage`){let e=n.percentage||{};a.percentage={...e,baseMin:r?r.min:e.baseMin,baseMax:r?r.max:e.baseMax}}else (e.mode===`decimalMultiply`||e.mode===`decimalDivision`)&&e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals});return Object.keys(a).length===0?{}:{[t]:a}}var y=[20,20,20,20,10,10];function he(e,t){let n=l(e).modes,r=n.slice(-3).reverse(),i=n.slice(0,-3),a=i.length?u(`${t}-${e}-fallback`)%i.length:0,o=i.map((e,t)=>i[(a+t)%i.length]),s=[...r];for(let e of o){if(s.length>=y.length)break;s.includes(e)||s.push(e)}return s.map((e,t)=>({mode:e,questions:y[t]??4}))}function ge(){let{profile:e,user:t,institute:u,membership:d}=n(),_=te(e?.current_level),v=se(),[y,ge]=(0,p.useState)(null),[_e,ve]=(0,p.useState)(!0),b=(0,p.useRef)(null),x=(0,p.useMemo)(()=>{let e=(y??he(_,v)).filter(e=>re(e.mode,_));return e.length?e:l(_).modes.slice(0,4).map(e=>({mode:e,questions:4}))},[y,_,v]),S=(0,p.useMemo)(()=>x.map(e=>e.mode),[x]),C=e=>Number(x[e]?.questions)||4,w=`practice_session_${t?.id||`guest`}_${v}_level_${_}`,[T,ye]=(0,p.useState)(()=>localStorage.getItem(w)===`done`),[E,be]=(0,p.useState)(`daily`),[D,xe]=(0,p.useState)(0),[O,Se]=(0,p.useState)(0),[k,Ce]=(0,p.useState)(null),[A,j]=(0,p.useState)(null),[M,we]=(0,p.useState)(0),[N,P]=(0,p.useState)(!1),[F,I]=(0,p.useState)(0),[L,Te]=(0,p.useState)([]),[Ee,De]=(0,p.useState)([]),[R,Oe]=(0,p.useState)([]),[ke,Ae]=(0,p.useState)(0),[z,je]=(0,p.useState)(0),[B,Me]=(0,p.useState)([]),[V,Ne]=(0,p.useState)(!1),[H,Pe]=(0,p.useState)(!1),[U,W]=(0,p.useState)(null),[G,K]=(0,p.useState)(null),[q,Fe]=(0,p.useState)(()=>localStorage.getItem(fe)||`horizontal`);function Ie(e){Fe(e),localStorage.setItem(fe,e)}let J=S[D],Y=(0,p.useMemo)(()=>x.reduce((e,t)=>e+(Number(t.questions)||4),0),[x]),X=(0,p.useMemo)(()=>{let e=0;return x.forEach((t,n)=>{let r=Number(t.questions)||4;n<D?e+=r:n===D&&(e+=O)}),e},[x,D,O]);(0,p.useEffect)(()=>{let e=!1;async function t(){if(!u?.id)return;let{data:t}=await r(u.id);if(e||!t)return;ve(t.enabled??!0);let n=t.journey?.[_]||t.journey?.[String(_)];Array.isArray(n)&&n.length&&ge(n.map(e=>({mode:e.mode,questions:Number(e.questions)||4,rows:e.rows,digits:e.digits,digits2:e.digits2,decimals:e.decimals})))}return t(),()=>{e=!0}},[u?.id,_]);let Le=e?.full_name?.split(` `)?.[0]||e?.name?.split(` `)?.[0]||t?.email?.split(`@`)?.[0]||`champ`,Re=E===`daily`&&(N||H)&&!T;(0,p.useEffect)(()=>(document.body.classList.toggle(`practice-session-focus`,Re),()=>document.body.classList.remove(`practice-session-focus`)),[Re]),(0,p.useEffect)(()=>{if(G===null)return;let e=setTimeout(()=>{if(G>1){K(e=>e-1);return}K(null),Z(x[D])},900);return()=>clearTimeout(e)},[x,D,G]),(0,p.useEffect)(()=>{function e(e){if(!(document.activeElement.tagName===`INPUT`||document.activeElement.tagName===`TEXTAREA`)){if(!T&&N&&k&&A===null&&[`1`,`2`,`3`,`4`].includes(e.key)){let t=Number(e.key)-1;k.options&&k.options[t]!==void 0&&Ve(k.options[t])}e.key===`Enter`&&(!N&&!H&&!T?Be():N&&A!==null&&!V?We():H&&!V&&Ge())}}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[T,N,k,A,V,H,O,D,J]);function Z(e){let t=typeof e==`string`?e:e?.mode,n=typeof e==`string`?{}:me(e,_),r=ne(t,_,n);if(Ce(r),j(null),W(null),I(0),P(!0),t===`voice`&&g(r.numbers),t===`flash`){let e=l(_,n).flashSpeed;r.numbers.forEach((t,n)=>setTimeout(()=>I(n),n*e)),setTimeout(()=>I(r.numbers.length),r.numbers.length*e)}}function ze(){Z(x[D])}async function Be(){b.current=Date.now(),P(!0),Ce(null),j(null),W(null),K(3),Q(`session_start`,J).catch(e=>{console.warn(`Practice start saved locally but not submitted:`,e)})}function Ve(e){if(A!==null)return;let t=e===k.answer,n={mode:k.mode,modeLabel:c[k.mode]?.label||k.mode,question:$(k),numbers:k.numbers,selectedAnswer:e,correctAnswer:k.answer,isCorrect:t,answeredAt:new Date().toISOString()};j(e),De(e=>[...e,n]),t?(ce(`correct`),W({type:`correct`,text:`Great job`}),we(e=>e+1),Ae(e=>{let t=e+1;return je(e=>Math.max(e,t)),t})):(ce(`wrong`),le(),W({type:`wrong`,text:`Good try. The answer was ${k.answer}.`}),Te(t=>[...t,{...k,selectedAnswer:e,modeLabel:c[k.mode]?.label||k.mode}]),Ae(0))}function He({nextAnswers:e=Ee,nextMistakes:t=L,nextCompletedModes:n=R,status:r=`in_progress`,achievements:i=B}={}){let a=e.filter(e=>e.isCorrect).length,o=e.reduce((e,t)=>(e[t.mode]=e[t.mode]||{label:t.modeLabel,correct:0,wrong:0},e[t.mode][t.isCorrect?`correct`:`wrong`]+=1,e),{}),s=b.current?Math.round((Date.now()-b.current)/1e3):0;return{institute_id:u?.id,student_membership_id:d?.id,level:_,session_date:v,mode_rotation:S,completed_modes:n,total_questions:Y,total_time_seconds:s,answered_count:e.length,correct_count:a,wrong_count:e.length-a,max_correct_streak:z,question_type_summary:o,answers:e,mistakes:t,earned_achievements:i.map(e=>({code:e.code,name:e.name,type:e.type})),status:r,completed_at:r===`completed`?new Date().toISOString():null,updated_at:new Date().toISOString()}}function Ue(e,n,r){let i=`practice_report_${t?.id||`guest`}_${v}_level_${_}`;localStorage.setItem(i,JSON.stringify(e));let a=`${i}_events`,o=JSON.parse(localStorage.getItem(a)||`[]`);o.push({eventType:n,mode:r,payload:e,createdAt:new Date().toISOString()}),localStorage.setItem(a,JSON.stringify(o))}async function Q(e,t,n={}){let r=He(n);if(Ue(r,e,t),!r.institute_id||!r.student_membership_id)return;Ne(!0);let{data:a,error:s}=await o(r);s?console.warn(`Practice report saved locally but not submitted:`,s):await i({institute_id:r.institute_id,student_membership_id:r.student_membership_id,attempt_id:a?.id,level:_,session_date:v,event_type:e,mode:t,payload:r}),Ne(!1)}async function We(){let e=C(D);if(O+1<e){Se(e=>e+1),setTimeout(()=>Z(x[D]),0);return}let t=[...new Set([...R,J])];if(Oe(t),await Q(`mode_complete`,J,{nextCompletedModes:t}),D+1<S.length){let e=x[D+1];xe(e=>e+1),Se(0),setTimeout(()=>Z(e),0);return}Pe(!0),P(!1)}async function Ge(){let e=[...new Set([...R,J])],t=ee({score:M,totalQuestions:Y,maxCorrectStreak:z,mistakes:L,completedModes:e});Me(t),localStorage.setItem(w,`done`),localStorage.setItem(`${w}_achievements`,JSON.stringify(t)),await Q(`session_complete`,`review`,{nextCompletedModes:e,status:`completed`,achievements:t}),u?.id&&d?.id&&await Promise.all(t.map(e=>a({institute_id:u.id,student_membership_id:d.id,achievement_code:e.code,achievement_name:e.name,achievement_type:e.type,description:e.description,metadata:{level:_,session_date:v,score:M,total_questions:Y,max_correct_streak:z}}))),ye(!0),Pe(!1)}function $(e){return e.mode===`abacus`?`Abacus number: ${e.answer}`:e.mode===`missing`?`${e.numbers[0]} + ? + ${e.numbers[2]} = ${e.numbers[3]}`:e.mode===`compare`?`1: ${e.numbers.slice(0,3).join(` + `)} | 2: ${e.numbers.slice(4,7).join(` + `)}`:[`table`,`multiply`,`decimalMultiply`].includes(e.mode)?`${f(e.numbers[0])} x ${f(e.numbers[1])}`:[`division`,`decimalDivision`].includes(e.mode)?`${f(e.numbers[0])} / ${f(e.numbers[1])}`:e.mode===`percentage`?`${e.numbers[0]}% of ${e.numbers[1]}`:e.mode===`square`?`${e.numbers[0]} squared`:e.mode===`squareRoot`?`square root of ${e.numbers[0]}`:e.mode===`cube`?`${e.numbers[0]} cubed`:e.mode===`cubeRoot`?`cube root of ${e.numbers[0]}`:s(e.numbers)}function Ke(){if(G!==null)return(0,m.jsxs)(`div`,{className:`session-countdown`,children:[(0,m.jsx)(`div`,{className:`countdown-ring`,children:(0,m.jsx)(`strong`,{children:G})}),(0,m.jsx)(`div`,{className:`countdown-title`,children:`Get ready`}),(0,m.jsx)(`div`,{className:`countdown-copy`,children:`Look at the first challenge calmly, then choose your answer.`})]});if(!k)return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`session-expression`,children:(0,m.jsx)(`i`,{className:`fa-solid ${c[J].icon}`})}),(0,m.jsx)(`div`,{className:`session-sub`,children:`Start today's session.`})]});if(J===`abacus`)return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(ue,{value:k.answer}),(0,m.jsx)(`div`,{className:`session-sub`,children:k.prompt})]});if(J===`voice`)return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`session-expression`,children:(0,m.jsx)(`i`,{className:`fa-solid fa-volume-high`})}),(0,m.jsx)(`div`,{className:`session-sub`,children:`Listen and choose the total.`})]});if(J===`flash`){let e=F>=k.numbers.length;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`session-expression animate-flash-num`,children:e?`?`:k.numbers[F]},F),(0,m.jsx)(`div`,{className:`session-sub`,children:e?`Select the correct sum`:`Add each flashed number.`})]})}return de.has(J)?(0,m.jsxs)(m.Fragment,{children:[q===`vertical`?(0,m.jsx)(pe,{numbers:k.numbers}):(0,m.jsx)(`div`,{className:`session-expression`,children:s(k.numbers)}),(0,m.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`missing`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[k.numbers[0],` + ? + `,k.numbers[2],` = `,k.numbers[3]]}),(0,m.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`compare`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[`1: `,k.numbers.slice(0,3).join(` + `),(0,m.jsx)(`br`,{}),`2: `,k.numbers.slice(4,7).join(` + `)]}),(0,m.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`table`||J===`multiply`||J===`decimalMultiply`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[f(k.numbers[0]),` x `,f(k.numbers[1])]}),(0,m.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`division`||J===`decimalDivision`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[f(k.numbers[0]),` / `,f(k.numbers[1])]}),(0,m.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`percentage`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[f(k.numbers[0]),`% of `,f(k.numbers[1])]}),(0,m.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`square`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[k.numbers[0],`^2`]}),(0,m.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`squareRoot`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[`sqrt(`,k.numbers[0],`)`]}),(0,m.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`cube`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[k.numbers[0],`^3`]}),(0,m.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`cubeRoot`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[`cuberoot(`,k.numbers[0],`)`]}),(0,m.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`session-expression`,children:s(k.numbers)}),(0,m.jsx)(`div`,{className:`session-sub`,children:k.prompt})]})}return(0,m.jsxs)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:[(0,m.jsx)(`style`,{children:oe}),(0,m.jsx)(ie,{}),(0,m.jsxs)(`div`,{className:`session-shell ${(N||H)&&!T?`playing-active`:``}`,children:[(0,m.jsxs)(`div`,{className:`session-hero`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h1`,{children:E===`flash`?`Mental Flash Training`:`Daily Session`}),(0,m.jsx)(`p`,{children:E===`flash`?`Customize and play infinite rounds of listening, abacus visualization, and speed flashes.`:`Four quick challenge cards, then one mistake review card to help you level up.`})]}),(0,m.jsx)(`div`,{className:`session-pill`,children:E===`flash`?`Free Training`:`Level ${_} | ${v}`})]}),!N&&!H&&(0,m.jsx)(`div`,{className:`session-tabs`,children:(0,m.jsxs)(`button`,{className:`session-tab-btn ${E===`daily`?`active`:``}`,onClick:()=>be(`daily`),children:[(0,m.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),` Daily Session`,!T&&(0,m.jsx)(`span`,{style:{display:`inline-block`,width:`8px`,height:`8px`,borderRadius:`50%`,background:`#f59e0b`,boxShadow:`0 0 8px #f59e0b`,marginLeft:`6px`,verticalAlign:`middle`},title:`Pending for today`})]})}),E===`flash`&&!N?(0,m.jsx)(ae,{isNested:!0}):E===`daily`&&!N&&!H&&!T?_e?(0,m.jsxs)(`div`,{className:`session-ready`,children:[(0,m.jsxs)(`section`,{className:`ready-panel`,children:[(0,m.jsxs)(`div`,{className:`ready-kicker`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),`Daily Session`]}),(0,m.jsxs)(`h2`,{className:`ready-title`,children:[`Ready, `,Le,`?`]}),(0,m.jsx)(`p`,{className:`ready-copy`,children:`Today has a short practice journey. Start when you are ready, then the page will become quiet so you can focus.`}),(0,m.jsxs)(`div`,{className:`ready-stats`,children:[(0,m.jsxs)(`div`,{className:`ready-stat`,children:[(0,m.jsx)(`strong`,{children:S.length}),(0,m.jsx)(`span`,{children:`practice stops`})]}),(0,m.jsxs)(`div`,{className:`ready-stat`,children:[(0,m.jsx)(`strong`,{children:Y}),(0,m.jsx)(`span`,{children:`questions today`})]}),(0,m.jsxs)(`div`,{className:`ready-stat`,children:[(0,m.jsxs)(`strong`,{children:[`Level `,_]}),(0,m.jsx)(`span`,{children:`current level`})]})]}),(0,m.jsx)(`div`,{className:`mental-actions`,style:{justifyContent:`flex-start`,marginTop:0},children:(0,m.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:Be,disabled:V,children:V?`Getting Ready...`:`Start Today's Practice`})})]}),(0,m.jsxs)(`aside`,{className:`journey-panel`,children:[(0,m.jsx)(`h2`,{children:`Today's journey`}),(0,m.jsxs)(`div`,{className:`journey-list`,children:[S.map((e,t)=>(0,m.jsxs)(`div`,{className:`journey-card`,children:[(0,m.jsx)(`i`,{className:`fa-solid ${c[e].icon}`}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`strong`,{children:h[t]||`Step ${t+1}`}),(0,m.jsxs)(`span`,{children:[c[e].label,` | `,C(t),` questions`]})]})]},`${e}-${t}`)),(0,m.jsxs)(`div`,{className:`journey-card`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`strong`,{children:`Review`}),(0,m.jsx)(`span`,{children:`Check anything that needs one more look`})]})]})]})]})]}):(0,m.jsx)(`div`,{className:`session-ready`,children:(0,m.jsxs)(`section`,{className:`ready-panel`,children:[(0,m.jsxs)(`div`,{className:`ready-kicker`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-circle-info`}),`Daily Session`]}),(0,m.jsx)(`h2`,{className:`ready-title`,children:`Paused for now`}),(0,m.jsx)(`p`,{className:`ready-copy`,children:`Your institute has turned off daily practice. Please check back later or ask your teacher.`})]})}):(0,m.jsxs)(`div`,{className:`session-grid`,children:[(0,m.jsxs)(`div`,{className:`mode-list`,children:[S.map((e,t)=>(0,m.jsxs)(`div`,{className:`mode-row ${t===D?`active`:``} ${t<D||T?`done`:``}`,children:[(0,m.jsx)(`i`,{className:`fa-solid ${c[e].icon}`}),(0,m.jsxs)(`span`,{children:[(0,m.jsx)(`span`,{className:`journey-step`,children:h[t]||`Step ${t+1}`}),(0,m.jsxs)(`span`,{className:`journey-mode`,children:[c[e].label,` | `,C(t),` questions`]})]})]},`${e}-${t}`)),(0,m.jsxs)(`div`,{className:`mode-row review ${H?`active`:``} ${T?`done`:``}`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,m.jsxs)(`span`,{children:[(0,m.jsx)(`span`,{className:`journey-step`,children:`Review`}),(0,m.jsxs)(`span`,{className:`journey-mode`,children:[L.length,` to check`]})]})]})]}),(0,m.jsx)(`div`,{className:`session-card`,children:T?(0,m.jsxs)(`div`,{className:`session-stage`,children:[(0,m.jsx)(`div`,{className:`session-expression`,children:(0,m.jsx)(`i`,{className:`fa-solid fa-circle-check`})}),(0,m.jsxs)(`div`,{className:`session-result`,children:[`Today's Level `,_,` session is complete`]}),(0,m.jsx)(`div`,{className:`session-sub`,children:`Report saved for admin and teachers. Come back tomorrow for a new rotation.`}),B.length?(0,m.jsx)(`div`,{className:`achievement-strip`,children:B.map(e=>(0,m.jsxs)(`div`,{className:`achievement-chip`,children:[(0,m.jsx)(`i`,{className:`fa-solid ${e.icon}`,style:{background:e.color}}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`strong`,{children:e.name}),(0,m.jsx)(`span`,{children:e.description})]})]},e.code))}):null]}):H?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`game-bar`,children:[(0,m.jsx)(`div`,{className:`timer-pill`,style:{background:`color-mix(in srgb, var(--gold) 15%, transparent)`,color:`var(--dark-blue)`},children:`Mistake Review`}),(0,m.jsxs)(`div`,{className:`chip chip-ok`,children:[`Score `,M,`/`,Y]})]}),(0,m.jsxs)(`div`,{className:`session-stage`,style:{alignItems:`stretch`},children:[(0,m.jsx)(`div`,{className:`session-result`,style:{margin:0},children:L.length?`Review your misses`:`No mistakes today`}),(0,m.jsx)(`div`,{className:`session-sub`,children:L.length?`Check the correct answers before you finish.`:`Clean round. Finish and come back tomorrow.`}),L.length?(0,m.jsx)(`div`,{className:`mistake-list`,children:L.map((e,t)=>(0,m.jsxs)(`div`,{className:`mistake-card`,children:[(0,m.jsxs)(`strong`,{children:[e.modeLabel,`: `,$(e)]}),(0,m.jsxs)(`span`,{children:[`Your answer: `,e.selectedAnswer]}),(0,m.jsxs)(`span`,{children:[`Correct: `,e.answer]})]},`${e.mode}-${t}`))}):null]}),(0,m.jsx)(`div`,{className:`mental-actions`,children:(0,m.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:Ge,disabled:V,children:V?`Saving Report...`:`Finish Today`})})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`game-bar`,children:[(0,m.jsxs)(`div`,{className:`timer-pill`,style:{background:`var(--light-blue)`,color:`var(--primary-blue)`},children:[c[J].label,` | Q `,O+1,`/`,C(D)]}),de.has(J)?(0,m.jsxs)(`div`,{className:`layout-toggle`,role:`group`,"aria-label":`Question format`,children:[(0,m.jsxs)(`button`,{className:q===`horizontal`?`active`:``,onClick:()=>Ie(`horizontal`),children:[(0,m.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` Horizontal`]}),(0,m.jsxs)(`button`,{className:q===`vertical`?`active`:``,onClick:()=>Ie(`vertical`),children:[(0,m.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` Vertical`]})]}):null,(0,m.jsxs)(`div`,{className:`chip chip-ok`,children:[`Score `,M,`/`,X+(A===null?0:1)]})]}),(0,m.jsx)(`div`,{className:`prog-wrap`,children:(0,m.jsx)(`div`,{className:`prog-bar`,style:{width:`${X/Y*100}%`}})}),(0,m.jsx)(`div`,{className:`session-stage`,children:Ke()}),(0,m.jsx)(`div`,{className:`feedback-pop`,children:U?(0,m.jsxs)(`div`,{className:`feedback-bubble ${U.type}`,children:[(0,m.jsx)(`span`,{className:`feedback-character`,children:(0,m.jsx)(`i`,{className:`fa-solid ${U.type===`correct`?`fa-star`:`fa-rotate-right`}`})}),U.text]}):null}),k?(0,m.jsx)(`div`,{className:`mcq-grid`,children:k.options.map((e,t)=>{let n=``;return A!==null&&(e===k.answer?n=`correct`:e===A&&(n=`wrong`)),(0,m.jsxs)(`button`,{className:`mcq-btn ${n}`,disabled:A!==null,onClick:()=>Ve(e),children:[(0,m.jsx)(`span`,{className:`mcq-key-hint`,children:t+1}),e]},e)})}):null,(0,m.jsxs)(`div`,{className:`mental-actions`,children:[!N&&!k?(0,m.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:ze,children:`Start Session`}):null,A===null?null:(0,m.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:We,disabled:V,children:V?`Saving...`:X+1>=Y?`Review Mistakes`:`Next Question`}),J===`voice`&&k?(0,m.jsx)(`button`,{className:`g-btn g-btn-ghost`,onClick:()=>g(k.numbers),children:`Repeat Voice`}):null]})]})})]})]})]})}export{ge as default};