import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{$ as t,D as n,L as r,O as i,Q as a,T as o,Y as s,_ as c,f as l,g as ee,h as te,m as ne,mt as u,p as d,tt as re,u as ie,v as f,y as p}from"./interactive-BcgBPI7h.js";import{m as ae}from"./mcq-CQwsu6AJ.js";var m=e(u(),1),h=i(),oe=`
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
  .typed-answer-wrap {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px;
    margin-top: 10px;
  }
  .typed-answer-input {
    flex: 1;
    min-width: 160px;
    padding: 14px 16px;
    border-radius: 12px;
    border: 1.5px solid var(--border, #cbd5e1);
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--dark-blue, #0f172a);
    outline: none;
  }
  .typed-answer-input:focus {
    border-color: var(--primary-blue, #3b82f6);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
  }
  .typed-answer-correct {
    width: 100%;
    font-size: 0.85rem;
    font-weight: 700;
    color: #ef4444;
  }
`,se=[`Warm Up`,`Brain Builder`,`Speed Round`,`Focus Finish`,`Missing Link`,`Compare Clash`];function ce(){return new Date().toLocaleDateString(`en-CA`)}function le(e){if(!(`speechSynthesis`in window))return!1;window.speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e.map((e,t)=>t===0?String(e):e<0?`minus ${Math.abs(e)}`:`plus ${e}`).join(`. `));return t.rate=.8,window.speechSynthesis.speak(t),!0}function ue(e){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let n=new t,r=n.createGain();r.connect(n.destination),r.gain.setValueAtTime(1e-4,n.currentTime),r.gain.exponentialRampToValueAtTime(.14,n.currentTime+.02),r.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.35),(e===`correct`?[523.25,659.25,783.99]:[196,164.81]).forEach((t,i)=>{let a=n.createOscillator();a.type=e===`correct`?`sine`:`triangle`,a.frequency.value=t,a.connect(r);let o=n.currentTime+i*.09;a.start(o),a.stop(o+.12)}),setTimeout(()=>n.close(),500)}function de(){`vibrate`in navigator&&navigator.vibrate([80,40,80])}function fe({value:e}){return(0,h.jsx)(`div`,{className:`session-abacus`,children:String(e).padStart(2,`0`).split(``).map(Number).map((e,t)=>{let n=e>=5,r=e%5;return(0,h.jsxs)(`div`,{className:`session-col`,children:[(0,h.jsx)(`div`,{className:`session-bead-zone heaven`,children:(0,h.jsx)(`span`,{className:`session-bead ${n?`active`:``}`})}),(0,h.jsx)(`div`,{className:`session-bead-zone`,children:[1,2,3,4].map(e=>(0,h.jsx)(`span`,{className:`session-bead ${r>=e?`active`:``}`},e))})]},`${e}-${t}`)})})}var pe=new Set([`full`,`longSum`,`addSub`,`decimalAddSub`,`negative`]),me=`practice_question_layout`;function he({numbers:e}){return(0,h.jsxs)(`div`,{className:`session-vertical`,children:[e.map((e,t)=>(0,h.jsxs)(`span`,{style:{display:`contents`},children:[(0,h.jsx)(`span`,{className:`vrow-sign`,children:t===0?``:e<0?`-`:`+`}),(0,h.jsx)(`span`,{className:`vrow-value`,children:p(t===0?e:Math.abs(e))})]},`${e}-${t}`)),(0,h.jsx)(`span`,{className:`vrule`}),(0,h.jsx)(`span`,{className:`vtotal`,children:`?`})]})}var g=new Set([`full`,`longSum`,`flash`,`voice`,`addSub`,`missing`,`compare`,`abacus`]);function _(e){return e?{min:e<=1?1:10**(e-1),max:10**e-1}:null}function ge(e){let t=e.trim().startsWith(`-`),[n,...r]=e.replace(/[^0-9.]/g,``).split(`.`),i=r.length?`.${r.join(``)}`:``;return`${t?`-`:``}${n}${i}`}function v(e){let t=String(e??``).trim().toLowerCase();return t&&/^-?\d*\.?\d+$/.test(t)?String(Number(t)):t}function _e(e,t){if(!e||!(e.rows!=null||e.digits!=null||e.digits2!=null||e.decimals!=null||e.rule!=null))return{};let n=d(t),r=_(e.digits),i=_(e.digits2),a={};if(e.rule&&(a.rules={...n.rules||{},rule:e.rule}),g.has(e.mode)){let t=n.additionConfigs&&n.additionConfigs[0]||n.number||{min:1,max:9,count:3},i={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count};a.additionConfigs=[i],a.number={...i}}else if(e.mode===`multiply`){let e=n.multiply||{};a.multiply={aMin:r?r.min:e.aMin,aMax:r?r.max:e.aMax,bMin:i?i.min:e.bMin,bMax:i?i.max:e.bMax}}else if(e.mode===`division`){let e=n.division||{};a.division={quotientMin:r?r.min:e.quotientMin,quotientMax:r?r.max:e.quotientMax,divisorMin:i?i.min:e.divisorMin,divisorMax:i?i.max:e.divisorMax}}else if(e.mode===`decimalAddSub`){let t=n.number||{min:10,max:99,count:3};a.number={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count},e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals,addDivisor:10**e.decimals})}else if(e.mode===`negative`){let t=n.negative||{};a.negative={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count}}else if(e.mode===`percentage`){let e=n.percentage||{};a.percentage={...e,baseMin:r?r.min:e.baseMin,baseMax:r?r.max:e.baseMax}}else (e.mode===`decimalMultiply`||e.mode===`decimalDivision`)&&e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals});return Object.keys(a).length===0?{}:{[t]:a}}var y=[20,20,20,20,10,10];function ve(e,t){let n=d(e).modes,r=n.slice(-3).reverse(),i=n.slice(0,-3),a=i.length?c(`${t}-${e}-fallback`)%i.length:0,o=i.map((e,t)=>i[(a+t)%i.length]),s=[...r];for(let e of o){if(s.length>=y.length)break;s.includes(e)||s.push(e)}return s.map((e,t)=>({mode:e,questions:y[t]??4}))}function ye(){let{profile:e,user:i,institute:c,membership:u}=n(),g=ee(e?.current_level),_=ce(),[y,ye]=(0,m.useState)(null),[be,xe]=(0,m.useState)(!0),[b,Se]=(0,m.useState)(`mcq`),[x,Ce]=(0,m.useState)(``),S=(0,m.useRef)(null),C=(0,m.useMemo)(()=>{let e=(y??ve(g,_)).filter(e=>ne(e.mode,g));return e.length?e:d(g).modes.slice(0,4).map(e=>({mode:e,questions:4}))},[y,g,_]),w=(0,m.useMemo)(()=>C.map(e=>e.mode),[C]),T=e=>Number(C[e]?.questions)||4,E=`practice_session_${i?.id||`guest`}_${_}_level_${g}`,we=`practice_report_${i?.id||`guest`}_${_}_level_${g}`,[D,Te]=(0,m.useState)(()=>localStorage.getItem(E)===`done`),[Ee,De]=(0,m.useState)(()=>{try{let e=localStorage.getItem(we);return e?JSON.parse(e):null}catch{return null}}),[O,Oe]=(0,m.useState)(`daily`),[k,ke]=(0,m.useState)(0),[A,Ae]=(0,m.useState)(0),[j,je]=(0,m.useState)(null),[M,N]=(0,m.useState)(null),[P,Me]=(0,m.useState)(0),[F,I]=(0,m.useState)(!1),[L,R]=(0,m.useState)(0),[z,Ne]=(0,m.useState)([]),[Pe,Fe]=(0,m.useState)([]),[B,Ie]=(0,m.useState)([]),[Le,Re]=(0,m.useState)(0),[V,ze]=(0,m.useState)(0),[H,Be]=(0,m.useState)([]),[U,Ve]=(0,m.useState)(!1),[W,He]=(0,m.useState)(!1),[G,K]=(0,m.useState)(null),[q,J]=(0,m.useState)(null),[Y,Ue]=(0,m.useState)(()=>localStorage.getItem(me)||`horizontal`);function We(e){Ue(e),localStorage.setItem(me,e)}let X=w[k],Z=(0,m.useMemo)(()=>C.reduce((e,t)=>e+(Number(t.questions)||4),0),[C]),Ge=(0,m.useMemo)(()=>{let e=0;return C.forEach((t,n)=>{let r=Number(t.questions)||4;n<k?e+=r:n===k&&(e+=A)}),e},[C,k,A]);(0,m.useEffect)(()=>{let e=!1;async function t(){if(!c?.id)return;let{data:t}=await r(c.id);if(e||!t)return;xe(t.enabled??!0),Se(t.answer_mode||`mcq`);let n=t.journey?.[g]||t.journey?.[String(g)];Array.isArray(n)&&n.length&&ye(n.map(e=>({mode:e.mode,questions:Number(e.questions)||4,rows:e.rows,digits:e.digits,digits2:e.digits2,decimals:e.decimals})))}return t(),()=>{e=!0}},[c?.id,g]);let Ke=e?.full_name?.split(` `)?.[0]||e?.name?.split(` `)?.[0]||i?.email?.split(`@`)?.[0]||`champ`,qe=O===`daily`&&(F||W)&&!D;(0,m.useEffect)(()=>(document.body.classList.toggle(`practice-session-focus`,qe),()=>document.body.classList.remove(`practice-session-focus`)),[qe]),(0,m.useEffect)(()=>{if(q===null)return;let e=setTimeout(()=>{if(q>1){J(e=>e-1);return}J(null),Q(C[k])},900);return()=>clearTimeout(e)},[C,k,q]),(0,m.useEffect)(()=>{function e(e){if(!(document.activeElement.tagName===`INPUT`||document.activeElement.tagName===`TEXTAREA`)){if(!D&&F&&j&&M===null&&b!==`input`&&[`1`,`2`,`3`,`4`].includes(e.key)){let t=Number(e.key)-1;j.options&&j.options[t]!==void 0&&$(j.options[t])}e.key===`Enter`&&(!F&&!W&&!D?Ye():F&&M!==null&&!U?$e():W&&!U&&et())}}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[D,F,j,M,U,W,A,k,X,b]);function Q(e){let t=typeof e==`string`?e:e?.mode,n=typeof e==`string`?{}:_e(e,g),r=te(t,g,n);if(je(r),N(null),Ce(``),K(null),R(0),I(!0),t===`voice`&&le(r.numbers),t===`flash`){let e=d(g,n).flashSpeed;r.numbers.forEach((t,n)=>setTimeout(()=>R(n),n*e)),setTimeout(()=>R(r.numbers.length),r.numbers.length*e)}}function Je(){Q(C[k])}async function Ye(){S.current=Date.now(),I(!0),je(null),N(null),K(null),J(3),Qe(`session_start`,X).catch(e=>{console.warn(`Practice start saved locally but not submitted:`,e)})}function $(e){if(M!==null)return;let t=v(e)===v(j.answer),n={mode:j.mode,modeLabel:l[j.mode]?.label||j.mode,question:tt(j),numbers:j.numbers,selectedAnswer:e,correctAnswer:j.answer,isCorrect:t,answeredAt:new Date().toISOString()};N(e),Fe(e=>[...e,n]),t?(ue(`correct`),K({type:`correct`,text:`Great job`}),Me(e=>e+1),Re(e=>{let t=e+1;return ze(e=>Math.max(e,t)),t})):(ue(`wrong`),de(),K({type:`wrong`,text:`Good try. The answer was ${j.answer}.`}),Ne(t=>[...t,{...j,selectedAnswer:e,modeLabel:l[j.mode]?.label||j.mode}]),Re(0))}function Xe({nextAnswers:e=Pe,nextMistakes:t=z,nextCompletedModes:n=B,status:r=`in_progress`,achievements:i=H}={}){let a=e.filter(e=>e.isCorrect).length,o=e.reduce((e,t)=>(e[t.mode]=e[t.mode]||{label:t.modeLabel,correct:0,wrong:0},e[t.mode][t.isCorrect?`correct`:`wrong`]+=1,e),{}),s=S.current?Math.round((Date.now()-S.current)/1e3):0;return{institute_id:c?.id,student_membership_id:u?.id,level:g,session_date:_,mode_rotation:w,completed_modes:n,total_questions:Z,total_time_seconds:s,answered_count:e.length,correct_count:a,wrong_count:e.length-a,max_correct_streak:V,question_type_summary:o,answers:e,mistakes:t,earned_achievements:i.map(e=>({code:e.code,name:e.name,type:e.type})),status:r,completed_at:r===`completed`?new Date().toISOString():null,updated_at:new Date().toISOString()}}function Ze(e,t,n){let r=`practice_report_${i?.id||`guest`}_${_}_level_${g}`;localStorage.setItem(r,JSON.stringify(e));let a=`${r}_events`,o=JSON.parse(localStorage.getItem(a)||`[]`);o.push({eventType:t,mode:n,payload:e,createdAt:new Date().toISOString()}),localStorage.setItem(a,JSON.stringify(o))}async function Qe(e,t,n={}){let r=Xe(n);if(Ze(r,e,t),!r.institute_id||!r.student_membership_id)return;Ve(!0);let{data:i,error:o}=await a(r);o?console.warn(`Practice report saved locally but not submitted:`,o):await s({institute_id:r.institute_id,student_membership_id:r.student_membership_id,attempt_id:i?.id,level:g,session_date:_,event_type:e,mode:t,payload:r}),Ve(!1)}async function $e(){let e=T(k);if(A+1<e){Ae(e=>e+1),setTimeout(()=>Q(C[k]),0);return}let t=[...new Set([...B,X])];if(Ie(t),await Qe(`mode_complete`,X,{nextCompletedModes:t}),k+1<w.length){let e=C[k+1];ke(e=>e+1),Ae(0),setTimeout(()=>Q(e),0);return}He(!0),I(!1)}async function et(){let e=[...new Set([...B,X])],n=re({score:P,totalQuestions:Z,maxCorrectStreak:V,mistakes:z,completedModes:e});Be(n),localStorage.setItem(E,`done`),localStorage.setItem(`${E}_achievements`,JSON.stringify(n));let r={nextCompletedModes:e,status:`completed`,achievements:n};De(Xe(r)),await Qe(`session_complete`,`review`,r),c?.id&&u?.id&&await Promise.all(n.map(e=>t({institute_id:c.id,student_membership_id:u.id,achievement_code:e.code,achievement_name:e.name,achievement_type:e.type,description:e.description,metadata:{level:g,session_date:_,score:P,total_questions:Z,max_correct_streak:V}}))),Te(!0),He(!1)}function tt(e){return e.mode===`abacus`?`Abacus number: ${e.answer}`:e.mode===`missing`?`${e.numbers[0]} + ? + ${e.numbers[2]} = ${e.numbers[3]}`:e.mode===`compare`?`1: ${e.numbers.slice(0,3).join(` + `)} | 2: ${e.numbers.slice(4,7).join(` + `)}`:[`table`,`multiply`,`decimalMultiply`].includes(e.mode)?`${p(e.numbers[0])} x ${p(e.numbers[1])}`:[`division`,`decimalDivision`].includes(e.mode)?`${p(e.numbers[0])} / ${p(e.numbers[1])}`:e.mode===`percentage`?`${e.numbers[0]}% of ${e.numbers[1]}`:e.mode===`square`?`${e.numbers[0]} squared`:e.mode===`squareRoot`?`square root of ${e.numbers[0]}`:e.mode===`cube`?`${e.numbers[0]} cubed`:e.mode===`cubeRoot`?`cube root of ${e.numbers[0]}`:f(e.numbers)}function nt(){if(q!==null)return(0,h.jsxs)(`div`,{className:`session-countdown`,children:[(0,h.jsx)(`div`,{className:`countdown-ring`,children:(0,h.jsx)(`strong`,{children:q})}),(0,h.jsx)(`div`,{className:`countdown-title`,children:`Get ready`}),(0,h.jsx)(`div`,{className:`countdown-copy`,children:`Look at the first challenge calmly, then choose your answer.`})]});if(!j)return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`div`,{className:`session-expression`,children:(0,h.jsx)(`i`,{className:`fa-solid ${l[X].icon}`})}),(0,h.jsx)(`div`,{className:`session-sub`,children:`Start today's session.`})]});if(X===`abacus`)return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(fe,{value:j.answer}),(0,h.jsx)(`div`,{className:`session-sub`,children:j.prompt})]});if(X===`voice`)return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`div`,{className:`session-expression`,children:(0,h.jsx)(`i`,{className:`fa-solid fa-volume-high`})}),(0,h.jsx)(`div`,{className:`session-sub`,children:`Listen and choose the total.`})]});if(X===`flash`){let e=L>=j.numbers.length;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`div`,{className:`session-expression animate-flash-num`,children:e?`?`:j.numbers[L]},L),(0,h.jsx)(`div`,{className:`session-sub`,children:e?`Select the correct sum`:`Add each flashed number.`})]})}return pe.has(X)?(0,h.jsxs)(h.Fragment,{children:[Y===`vertical`?(0,h.jsx)(he,{numbers:j.numbers}):(0,h.jsx)(`div`,{className:`session-expression`,children:f(j.numbers)}),(0,h.jsx)(`div`,{className:`session-sub`,children:j.prompt})]}):X===`missing`?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{className:`session-expression`,children:[j.numbers[0],` + ? + `,j.numbers[2],` = `,j.numbers[3]]}),(0,h.jsx)(`div`,{className:`session-sub`,children:j.prompt})]}):X===`compare`?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{className:`session-expression`,children:[`1: `,j.numbers.slice(0,3).join(` + `),(0,h.jsx)(`br`,{}),`2: `,j.numbers.slice(4,7).join(` + `)]}),(0,h.jsx)(`div`,{className:`session-sub`,children:j.prompt})]}):X===`table`||X===`multiply`||X===`decimalMultiply`?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{className:`session-expression`,children:[p(j.numbers[0]),` x `,p(j.numbers[1])]}),(0,h.jsx)(`div`,{className:`session-sub`,children:j.prompt})]}):X===`division`||X===`decimalDivision`?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{className:`session-expression`,children:[p(j.numbers[0]),` / `,p(j.numbers[1])]}),(0,h.jsx)(`div`,{className:`session-sub`,children:j.prompt})]}):X===`percentage`?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{className:`session-expression`,children:[p(j.numbers[0]),`% of `,p(j.numbers[1])]}),(0,h.jsx)(`div`,{className:`session-sub`,children:j.prompt})]}):X===`square`?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{className:`session-expression`,children:[j.numbers[0],`^2`]}),(0,h.jsx)(`div`,{className:`session-sub`,children:j.prompt})]}):X===`squareRoot`?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{className:`session-expression`,children:[`sqrt(`,j.numbers[0],`)`]}),(0,h.jsx)(`div`,{className:`session-sub`,children:j.prompt})]}):X===`cube`?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{className:`session-expression`,children:[j.numbers[0],`^3`]}),(0,h.jsx)(`div`,{className:`session-sub`,children:j.prompt})]}):X===`cubeRoot`?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{className:`session-expression`,children:[`cuberoot(`,j.numbers[0],`)`]}),(0,h.jsx)(`div`,{className:`session-sub`,children:j.prompt})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`div`,{className:`session-expression`,children:f(j.numbers)}),(0,h.jsx)(`div`,{className:`session-sub`,children:j.prompt})]})}return(0,h.jsxs)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:[(0,h.jsx)(`style`,{children:oe}),(0,h.jsx)(o,{}),(0,h.jsxs)(`div`,{className:`session-shell ${(F||W)&&!D?`playing-active`:``}`,children:[(0,h.jsxs)(`div`,{className:`session-hero`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h1`,{children:O===`flash`?`Mental Flash Training`:`Daily Session`}),(0,h.jsx)(`p`,{children:O===`flash`?`Customize and play infinite rounds of listening, abacus visualization, and speed flashes.`:`Four quick challenge cards, then one mistake review card to help you level up.`})]}),(0,h.jsx)(ie,{variant:`practice-banner`,size:260}),(0,h.jsx)(`div`,{className:`session-pill`,children:O===`flash`?`Free Training`:`Level ${g} | ${_}`})]}),!F&&!W&&(0,h.jsx)(`div`,{className:`session-tabs`,children:(0,h.jsxs)(`button`,{className:`session-tab-btn ${O===`daily`?`active`:``}`,onClick:()=>Oe(`daily`),children:[(0,h.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),` Daily Session`,!D&&(0,h.jsx)(`span`,{style:{display:`inline-block`,width:`8px`,height:`8px`,borderRadius:`50%`,background:`#f59e0b`,boxShadow:`0 0 8px #f59e0b`,marginLeft:`6px`,verticalAlign:`middle`},title:`Pending for today`})]})}),O===`flash`&&!F?(0,h.jsx)(ae,{isNested:!0}):O===`daily`&&!F&&!W&&!D?be?(0,h.jsxs)(`div`,{className:`session-ready`,children:[(0,h.jsxs)(`section`,{className:`ready-panel`,children:[(0,h.jsxs)(`div`,{className:`ready-kicker`,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),`Daily Session`]}),(0,h.jsxs)(`h2`,{className:`ready-title`,children:[`Ready, `,Ke,`?`]}),(0,h.jsx)(`p`,{className:`ready-copy`,children:`Today has a short practice journey. Start when you are ready, then the page will become quiet so you can focus.`}),(0,h.jsxs)(`div`,{className:`ready-stats`,children:[(0,h.jsxs)(`div`,{className:`ready-stat`,children:[(0,h.jsx)(`strong`,{children:w.length}),(0,h.jsx)(`span`,{children:`practice stops`})]}),(0,h.jsxs)(`div`,{className:`ready-stat`,children:[(0,h.jsx)(`strong`,{children:Z}),(0,h.jsx)(`span`,{children:`questions today`})]}),(0,h.jsxs)(`div`,{className:`ready-stat`,children:[(0,h.jsxs)(`strong`,{children:[`Level `,g]}),(0,h.jsx)(`span`,{children:`current level`})]})]}),(0,h.jsx)(`div`,{className:`mental-actions`,style:{justifyContent:`flex-start`,marginTop:0},children:(0,h.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:Ye,disabled:U,children:U?`Getting Ready...`:`Start Today's Practice`})})]}),(0,h.jsxs)(`aside`,{className:`journey-panel`,children:[(0,h.jsx)(`h2`,{children:`Today's journey`}),(0,h.jsxs)(`div`,{className:`journey-list`,children:[w.map((e,t)=>(0,h.jsxs)(`div`,{className:`journey-card`,children:[(0,h.jsx)(`i`,{className:`fa-solid ${l[e].icon}`}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`strong`,{children:se[t]||`Step ${t+1}`}),(0,h.jsxs)(`span`,{children:[l[e].label,` | `,T(t),` questions`]})]})]},`${e}-${t}`)),(0,h.jsxs)(`div`,{className:`journey-card`,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`strong`,{children:`Review`}),(0,h.jsx)(`span`,{children:`Check anything that needs one more look`})]})]})]})]})]}):(0,h.jsx)(`div`,{className:`session-ready`,children:(0,h.jsxs)(`section`,{className:`ready-panel`,children:[(0,h.jsxs)(`div`,{className:`ready-kicker`,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-circle-info`}),`Daily Session`]}),(0,h.jsx)(`h2`,{className:`ready-title`,children:`Paused for now`}),(0,h.jsx)(`p`,{className:`ready-copy`,children:`Your institute has turned off daily practice. Please check back later or ask your teacher.`})]})}):(0,h.jsxs)(`div`,{className:`session-grid`,children:[(0,h.jsxs)(`div`,{className:`mode-list`,children:[w.map((e,t)=>(0,h.jsxs)(`div`,{className:`mode-row ${t===k?`active`:``} ${t<k||D?`done`:``}`,children:[(0,h.jsx)(`i`,{className:`fa-solid ${l[e].icon}`}),(0,h.jsxs)(`span`,{children:[(0,h.jsx)(`span`,{className:`journey-step`,children:se[t]||`Step ${t+1}`}),(0,h.jsxs)(`span`,{className:`journey-mode`,children:[l[e].label,` | `,T(t),` questions`]})]})]},`${e}-${t}`)),(0,h.jsxs)(`div`,{className:`mode-row review ${W?`active`:``} ${D?`done`:``}`,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,h.jsxs)(`span`,{children:[(0,h.jsx)(`span`,{className:`journey-step`,children:`Review`}),(0,h.jsxs)(`span`,{className:`journey-mode`,children:[z.length,` to check`]})]})]})]}),(0,h.jsx)(`div`,{className:`session-card`,children:D?(0,h.jsxs)(`div`,{className:`session-stage`,children:[(0,h.jsx)(`div`,{className:`session-expression`,children:(0,h.jsx)(`i`,{className:`fa-solid fa-circle-check`})}),(0,h.jsxs)(`div`,{className:`session-result`,children:[`Today's Level `,g,` session is complete`]}),(0,h.jsxs)(`div`,{className:`session-result`,style:{fontSize:`1.6rem`},children:[`Score: `,Ee?.correct_count??P,`/`,Ee?.total_questions??Z]}),(0,h.jsx)(`div`,{className:`session-sub`,children:`Report saved for admin and teachers. Come back tomorrow for a new rotation.`}),H.length?(0,h.jsx)(`div`,{className:`achievement-strip`,children:H.map(e=>(0,h.jsxs)(`div`,{className:`achievement-chip`,children:[(0,h.jsx)(`i`,{className:`fa-solid ${e.icon}`,style:{background:e.color}}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`strong`,{children:e.name}),(0,h.jsx)(`span`,{children:e.description})]})]},e.code))}):null]}):W?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{className:`game-bar`,children:[(0,h.jsx)(`div`,{className:`timer-pill`,style:{background:`color-mix(in srgb, var(--gold) 15%, transparent)`,color:`var(--dark-blue)`},children:`Mistake Review`}),(0,h.jsxs)(`div`,{className:`chip chip-ok`,children:[`Score `,P,`/`,Z]})]}),(0,h.jsxs)(`div`,{className:`session-stage`,style:{alignItems:`stretch`},children:[(0,h.jsx)(`div`,{className:`session-result`,style:{margin:0},children:z.length?`Review your misses`:`No mistakes today`}),(0,h.jsx)(`div`,{className:`session-sub`,children:z.length?`Check the correct answers before you finish.`:`Clean round. Finish and come back tomorrow.`}),z.length?(0,h.jsx)(`div`,{className:`mistake-list`,children:z.map((e,t)=>(0,h.jsxs)(`div`,{className:`mistake-card`,children:[(0,h.jsxs)(`strong`,{children:[e.modeLabel,`: `,tt(e)]}),(0,h.jsxs)(`span`,{children:[`Your answer: `,e.selectedAnswer]}),(0,h.jsxs)(`span`,{children:[`Correct: `,e.answer]})]},`${e.mode}-${t}`))}):null]}),(0,h.jsx)(`div`,{className:`mental-actions`,children:(0,h.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:et,disabled:U,children:U?`Saving Report...`:`Finish Today`})})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(`div`,{className:`game-bar`,children:[(0,h.jsxs)(`div`,{className:`timer-pill`,style:{background:`var(--light-blue)`,color:`var(--primary-blue)`},children:[l[X].label,` | Q `,A+1,`/`,T(k)]}),pe.has(X)?(0,h.jsxs)(`div`,{className:`layout-toggle`,role:`group`,"aria-label":`Question format`,children:[(0,h.jsxs)(`button`,{className:Y===`horizontal`?`active`:``,onClick:()=>We(`horizontal`),children:[(0,h.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` Horizontal`]}),(0,h.jsxs)(`button`,{className:Y===`vertical`?`active`:``,onClick:()=>We(`vertical`),children:[(0,h.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` Vertical`]})]}):null,(0,h.jsxs)(`div`,{className:`chip chip-ok`,children:[`Score `,P,`/`,Ge+(M===null?0:1)]})]}),(0,h.jsx)(`div`,{className:`prog-wrap`,children:(0,h.jsx)(`div`,{className:`prog-bar`,style:{width:`${Ge/Z*100}%`}})}),(0,h.jsx)(`div`,{className:`session-stage`,children:nt()}),(0,h.jsx)(`div`,{className:`feedback-pop`,children:G?(0,h.jsxs)(`div`,{className:`feedback-bubble ${G.type}`,children:[(0,h.jsx)(`span`,{className:`feedback-character`,children:(0,h.jsx)(`i`,{className:`fa-solid ${G.type===`correct`?`fa-star`:`fa-rotate-right`}`})}),G.text]}):null}),j&&b===`input`?(0,h.jsxs)(`div`,{className:`typed-answer-wrap`,children:[(0,h.jsx)(`input`,{className:`typed-answer-input`,type:`text`,inputMode:`decimal`,pattern:`-?[0-9]*\\.?[0-9]*`,value:x,disabled:M!==null,autoFocus:!0,onChange:e=>Ce(ge(e.target.value)),onKeyDown:e=>{e.key===`Enter`&&x.trim()!==``&&(e.preventDefault(),$(x))},placeholder:`Type your answer`}),(0,h.jsx)(`button`,{className:`g-btn g-btn-p`,disabled:M!==null||x.trim()===``,onClick:()=>$(x),children:`Submit`}),M!==null&&v(M)!==v(j.answer)?(0,h.jsxs)(`span`,{className:`typed-answer-correct`,children:[`Correct answer: `,j.answer]}):null]}):j?(0,h.jsx)(`div`,{className:`mcq-grid`,children:j.options.map((e,t)=>{let n=``;return M!==null&&(e===j.answer?n=`correct`:e===M&&(n=`wrong`)),(0,h.jsxs)(`button`,{className:`mcq-btn ${n}`,disabled:M!==null,onClick:()=>$(e),children:[(0,h.jsx)(`span`,{className:`mcq-key-hint`,children:t+1}),e]},e)})}):null,(0,h.jsxs)(`div`,{className:`mental-actions`,children:[!F&&!j?(0,h.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:Je,children:`Start Session`}):null,M===null?null:(0,h.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:$e,disabled:U,children:U?`Saving...`:Ge+1>=Z?`Review Mistakes`:`Next Question`}),X===`voice`&&j?(0,h.jsx)(`button`,{className:`g-btn g-btn-ghost`,onClick:()=>le(j.numbers),children:`Repeat Voice`}):null]})]})})]})]})]})}export{ye as default};