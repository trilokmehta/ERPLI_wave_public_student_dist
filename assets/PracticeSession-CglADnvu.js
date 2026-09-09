import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Dt as t,L as n,M as r,R as i,_ as a,b as o,dt as s,ft as ee,g as te,h as ne,m as c,mt as re,p as l,q as ie,st as ae,u as oe,v as se,x as u,y as d}from"./interactive-2Wp_hJ_T.js";import{m as ce}from"./mcq-QKy7trk0.js";var f=e(t(),1),p=i(),le=`
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
`,ue=[`Warm Up`,`Brain Builder`,`Speed Round`,`Focus Finish`,`Missing Link`,`Compare Clash`];function de(){return new Date().toLocaleDateString(`en-CA`)}function fe(e,t=.8){if(!(`speechSynthesis`in window))return!1;window.speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(e.map((e,t)=>t===0?String(e):e<0?`minus ${Math.abs(e)}`:`plus ${e}`).join(`. `));return n.rate=t,window.speechSynthesis.speak(n),!0}function pe(e){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let n=new t,r=n.createGain();r.connect(n.destination),r.gain.setValueAtTime(1e-4,n.currentTime),r.gain.exponentialRampToValueAtTime(.14,n.currentTime+.02),r.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.35),(e===`correct`?[523.25,659.25,783.99]:[196,164.81]).forEach((t,i)=>{let a=n.createOscillator();a.type=e===`correct`?`sine`:`triangle`,a.frequency.value=t,a.connect(r);let o=n.currentTime+i*.09;a.start(o),a.stop(o+.12)}),setTimeout(()=>n.close(),500)}function me(){`vibrate`in navigator&&navigator.vibrate([80,40,80])}function he({value:e}){return(0,p.jsx)(`div`,{className:`session-abacus`,children:String(e).padStart(2,`0`).split(``).map(Number).map((e,t)=>{let n=e>=5,r=e%5;return(0,p.jsxs)(`div`,{className:`session-col`,children:[(0,p.jsx)(`div`,{className:`session-bead-zone heaven`,children:(0,p.jsx)(`span`,{className:`session-bead ${n?`active`:``}`})}),(0,p.jsx)(`div`,{className:`session-bead-zone`,children:[1,2,3,4].map(e=>(0,p.jsx)(`span`,{className:`session-bead ${r>=e?`active`:``}`},e))})]},`${e}-${t}`)})})}var ge=new Set([`full`,`longSum`,`addSub`,`decimalAddSub`,`negative`]),_e=`practice_question_layout`;function ve({numbers:e}){return(0,p.jsxs)(`div`,{className:`session-vertical`,children:[e.map((e,t)=>(0,p.jsxs)(`span`,{style:{display:`contents`},children:[(0,p.jsx)(`span`,{className:`vrow-sign`,children:t===0?``:e<0?`-`:`+`}),(0,p.jsx)(`span`,{className:`vrow-value`,children:u(t===0?e:Math.abs(e))})]},`${e}-${t}`)),(0,p.jsx)(`span`,{className:`vrule`}),(0,p.jsx)(`span`,{className:`vtotal`,children:`?`})]})}var m=new Set([`full`,`longSum`,`flash`,`voice`,`addSub`,`missing`,`compare`,`abacus`]);function h(e){return e?{min:e<=1?1:10**(e-1),max:10**e-1}:null}function ye(e){let t=e.trim().startsWith(`-`),[n,...r]=e.replace(/[^0-9.]/g,``).split(`.`),i=r.length?`.${r.join(``)}`:``;return`${t?`-`:``}${n}${i}`}function g(e){let t=String(e??``).trim().toLowerCase();return t&&/^-?\d*\.?\d+$/.test(t)?String(Number(t)):t}function be(e,t){if(!e||!(e.rows!=null||e.digits!=null||e.digits2!=null||e.decimals!=null||e.rule!=null||e.flashSpeed!=null||e.voiceRate!=null))return{};let n=c(t),r=h(e.digits),i=h(e.digits2),a={};if(e.rule&&(a.rules={...n.rules||{},rule:e.rule}),e.flashSpeed!=null&&(a.flashSpeed=e.flashSpeed),m.has(e.mode)){let t=n.additionConfigs&&n.additionConfigs[0]||n.number||{min:1,max:9,count:3},i={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count};a.additionConfigs=[i],a.number={...i}}else if(e.mode===`multiply`){let e=n.multiply||{};a.multiply={aMin:r?r.min:e.aMin,aMax:r?r.max:e.aMax,bMin:i?i.min:e.bMin,bMax:i?i.max:e.bMax}}else if(e.mode===`division`){let e=n.division||{};a.division={quotientMin:r?r.min:e.quotientMin,quotientMax:r?r.max:e.quotientMax,divisorMin:i?i.min:e.divisorMin,divisorMax:i?i.max:e.divisorMax}}else if(e.mode===`decimalAddSub`){let t=n.number||{min:10,max:99,count:3};a.number={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count},e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals,addDivisor:10**e.decimals})}else if(e.mode===`negative`){let t=n.negative||{};a.negative={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count}}else if(e.mode===`percentage`){let e=n.percentage||{};a.percentage={...e,baseMin:r?r.min:e.baseMin,baseMax:r?r.max:e.baseMax}}else (e.mode===`decimalMultiply`||e.mode===`decimalDivision`)&&e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals});return Object.keys(a).length===0?{}:{[t]:a}}var _=[20,20,20,20,10,10];function xe(e,t){let n=c(e).modes,r=n.slice(-3).reverse(),i=n.slice(0,-3),a=i.length?d(`${t}-${e}-fallback`)%i.length:0,o=i.map((e,t)=>i[(a+t)%i.length]),s=[...r];for(let e of o){if(s.length>=_.length)break;s.includes(e)||s.push(e)}return s.map((e,t)=>({mode:e,questions:_[t]??4}))}function Se(){let{profile:e,user:t,institute:i,membership:d}=n(),m=se(e?.current_level),h=de(),[_,Se]=(0,f.useState)(null),[Ce,we]=(0,f.useState)(!0),[v,Te]=(0,f.useState)(`mcq`),[y,Ee]=(0,f.useState)(``),b=(0,f.useRef)(null),x=(0,f.useMemo)(()=>{let e=(_??xe(m,h)).filter(e=>ne(e.mode,m));return e.length?e:c(m).modes.slice(0,4).map(e=>({mode:e,questions:4}))},[_,m,h]),S=(0,f.useMemo)(()=>x.map(e=>e.mode),[x]),C=e=>Number(x[e]?.questions)||4,w=`practice_session_${t?.id||`guest`}_${h}_level_${m}`,De=`practice_report_${t?.id||`guest`}_${h}_level_${m}`,[T,Oe]=(0,f.useState)(()=>localStorage.getItem(w)===`done`),[ke,Ae]=(0,f.useState)(()=>{try{let e=localStorage.getItem(De);return e?JSON.parse(e):null}catch{return null}}),[E,je]=(0,f.useState)(`daily`),[D,Me]=(0,f.useState)(0),[O,Ne]=(0,f.useState)(0),[k,Pe]=(0,f.useState)(null),[A,j]=(0,f.useState)(null),[M,Fe]=(0,f.useState)(0),[N,P]=(0,f.useState)(!1),[F,I]=(0,f.useState)(0),[Ie,Le]=(0,f.useState)(.8),[L,Re]=(0,f.useState)([]),[ze,Be]=(0,f.useState)([]),[R,Ve]=(0,f.useState)([]),[He,Ue]=(0,f.useState)(0),[z,We]=(0,f.useState)(0),[B,Ge]=(0,f.useState)([]),[V,Ke]=(0,f.useState)(!1),[H,qe]=(0,f.useState)(!1),[U,W]=(0,f.useState)(null),[G,K]=(0,f.useState)(null),[q,Je]=(0,f.useState)(()=>localStorage.getItem(_e)||`horizontal`);function Ye(e){Je(e),localStorage.setItem(_e,e)}let J=S[D],Y=(0,f.useMemo)(()=>x.reduce((e,t)=>e+(Number(t.questions)||4),0),[x]),X=(0,f.useMemo)(()=>{let e=0;return x.forEach((t,n)=>{let r=Number(t.questions)||4;n<D?e+=r:n===D&&(e+=O)}),e},[x,D,O]);(0,f.useEffect)(()=>{let e=!1;async function t(){if(!i?.id)return;let{data:t}=await ie(i.id);if(e||!t)return;we(t.enabled??!0),Te(t.answer_mode||`mcq`);let n=t.journey?.[m]||t.journey?.[String(m)];Array.isArray(n)&&n.length&&Se(n.map(e=>({mode:e.mode,questions:Number(e.questions)||4,rows:e.rows,digits:e.digits,digits2:e.digits2,decimals:e.decimals})))}return t(),()=>{e=!0}},[i?.id,m]);let Xe=e?.full_name?.split(` `)?.[0]||e?.name?.split(` `)?.[0]||t?.email?.split(`@`)?.[0]||`champ`,Ze=E===`daily`&&(N||H)&&!T;(0,f.useEffect)(()=>(document.body.classList.toggle(`practice-session-focus`,Ze),()=>document.body.classList.remove(`practice-session-focus`)),[Ze]),(0,f.useEffect)(()=>{if(G===null)return;let e=setTimeout(()=>{if(G>1){K(e=>e-1);return}K(null),Z(x[D])},900);return()=>clearTimeout(e)},[x,D,G]),(0,f.useEffect)(()=>{function e(e){if(!(document.activeElement.tagName===`INPUT`||document.activeElement.tagName===`TEXTAREA`)){if(!T&&N&&k&&A===null&&v!==`input`&&[`1`,`2`,`3`,`4`].includes(e.key)){let t=Number(e.key)-1;k.options&&k.options[t]!==void 0&&Q(k.options[t])}e.key===`Enter`&&(!N&&!H&&!T?$e():N&&A!==null&&!V?nt():H&&!V&&rt())}}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[T,N,k,A,V,H,O,D,J,v]);function Z(e){let t=typeof e==`string`?e:e?.mode,n=typeof e==`string`?{}:be(e,m),r=a(t,m,n);if(Pe(r),j(null),Ee(``),W(null),I(0),P(!0),t===`voice`){let t=typeof e!=`string`&&e?.voiceRate||.8;Le(t),fe(r.numbers,t)}if(t===`flash`){let e=c(m,n).flashSpeed;r.numbers.forEach((t,n)=>setTimeout(()=>I(n),n*e)),setTimeout(()=>I(r.numbers.length),r.numbers.length*e)}}function Qe(){Z(x[D])}async function $e(){b.current=Date.now(),P(!0),Pe(null),j(null),W(null),K(3),$(`session_start`,J).catch(e=>{console.warn(`Practice start saved locally but not submitted:`,e)})}function Q(e){if(A!==null)return;let t=g(e)===g(k.answer),n={mode:k.mode,modeLabel:l[k.mode]?.label||k.mode,question:it(k),numbers:k.numbers,selectedAnswer:e,correctAnswer:k.answer,isCorrect:t,answeredAt:new Date().toISOString()};j(e),Be(e=>[...e,n]),t?(pe(`correct`),W({type:`correct`,text:`Great job`}),Fe(e=>e+1),Ue(e=>{let t=e+1;return We(e=>Math.max(e,t)),t})):(pe(`wrong`),me(),W({type:`wrong`,text:`Good try. The answer was ${k.answer}.`}),Re(t=>[...t,{...k,selectedAnswer:e,modeLabel:l[k.mode]?.label||k.mode}]),Ue(0))}function et({nextAnswers:e=ze,nextMistakes:t=L,nextCompletedModes:n=R,status:r=`in_progress`,achievements:a=B}={}){let o=e.filter(e=>e.isCorrect).length,s=e.reduce((e,t)=>(e[t.mode]=e[t.mode]||{label:t.modeLabel,correct:0,wrong:0},e[t.mode][t.isCorrect?`correct`:`wrong`]+=1,e),{}),ee=b.current?Math.round((Date.now()-b.current)/1e3):0;return{institute_id:i?.id,student_membership_id:d?.id,level:m,session_date:h,mode_rotation:S,completed_modes:n,total_questions:Y,total_time_seconds:ee,answered_count:e.length,correct_count:o,wrong_count:e.length-o,max_correct_streak:z,question_type_summary:s,answers:e,mistakes:t,earned_achievements:a.map(e=>({code:e.code,name:e.name,type:e.type})),status:r,completed_at:r===`completed`?new Date().toISOString():null,updated_at:new Date().toISOString()}}function tt(e,n,r){let i=`practice_report_${t?.id||`guest`}_${h}_level_${m}`;localStorage.setItem(i,JSON.stringify(e));let a=`${i}_events`,o=JSON.parse(localStorage.getItem(a)||`[]`);o.push({eventType:n,mode:r,payload:e,createdAt:new Date().toISOString()}),localStorage.setItem(a,JSON.stringify(o))}async function $(e,t,n={}){let r=et(n);if(tt(r,e,t),!r.institute_id||!r.student_membership_id)return;Ke(!0);let{data:i,error:a}=await s(r);a?console.warn(`Practice report saved locally but not submitted:`,a):await ae({institute_id:r.institute_id,student_membership_id:r.student_membership_id,attempt_id:i?.id,level:m,session_date:h,event_type:e,mode:t,payload:r}),Ke(!1)}async function nt(){let e=C(D);if(O+1<e){Ne(e=>e+1),setTimeout(()=>Z(x[D]),0);return}let t=[...new Set([...R,J])];if(Ve(t),await $(`mode_complete`,J,{nextCompletedModes:t}),D+1<S.length){let e=x[D+1];Me(e=>e+1),Ne(0),setTimeout(()=>Z(e),0);return}qe(!0),P(!1)}async function rt(){let e=[...new Set([...R,J])],t=re({score:M,totalQuestions:Y,maxCorrectStreak:z,mistakes:L,completedModes:e});Ge(t),localStorage.setItem(w,`done`),localStorage.setItem(`${w}_achievements`,JSON.stringify(t));let n={nextCompletedModes:e,status:`completed`,achievements:t};Ae(et(n)),await $(`session_complete`,`review`,n),i?.id&&d?.id&&await Promise.all(t.map(e=>ee({institute_id:i.id,student_membership_id:d.id,achievement_code:e.code,achievement_name:e.name,achievement_type:e.type,description:e.description,metadata:{level:m,session_date:h,score:M,total_questions:Y,max_correct_streak:z}}))),Oe(!0),qe(!1)}function it(e){return te(e.mode)?e.prompt:e.mode===`abacus`?`Abacus number: ${e.answer}`:e.mode===`missing`?`${e.numbers[0]} + ? + ${e.numbers[2]} = ${e.numbers[3]}`:e.mode===`compare`?`1: ${e.numbers.slice(0,3).join(` + `)} | 2: ${e.numbers.slice(4,7).join(` + `)}`:[`table`,`multiply`,`decimalMultiply`].includes(e.mode)?`${u(e.numbers[0])} x ${u(e.numbers[1])}`:[`division`,`decimalDivision`].includes(e.mode)?`${u(e.numbers[0])} / ${u(e.numbers[1])}`:e.mode===`percentage`?`${e.numbers[0]}% of ${e.numbers[1]}`:e.mode===`square`?`${e.numbers[0]} squared`:e.mode===`squareRoot`?`square root of ${e.numbers[0]}`:e.mode===`cube`?`${e.numbers[0]} cubed`:e.mode===`cubeRoot`?`cube root of ${e.numbers[0]}`:o(e.numbers)}function at(){if(G!==null)return(0,p.jsxs)(`div`,{className:`session-countdown`,children:[(0,p.jsx)(`div`,{className:`countdown-ring`,children:(0,p.jsx)(`strong`,{children:G})}),(0,p.jsx)(`div`,{className:`countdown-title`,children:`Get ready`}),(0,p.jsx)(`div`,{className:`countdown-copy`,children:`Look at the first challenge calmly, then choose your answer.`})]});if(!k)return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`session-expression`,children:(0,p.jsx)(`i`,{className:`fa-solid ${l[J].icon}`})}),(0,p.jsx)(`div`,{className:`session-sub`,children:`Start today's session.`})]});if(te(J))return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`session-expression`,children:k.prompt}),(0,p.jsx)(`div`,{className:`session-sub`,children:l[J]?.label})]});if(J===`abacus`)return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(he,{value:k.answer}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]});if(J===`voice`)return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`session-expression`,children:(0,p.jsx)(`i`,{className:`fa-solid fa-volume-high`})}),(0,p.jsx)(`div`,{className:`session-sub`,children:`Listen and choose the total.`})]});if(J===`flash`){let e=F>=k.numbers.length;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`session-expression animate-flash-num`,children:e?`?`:k.numbers[F]},F),(0,p.jsx)(`div`,{className:`session-sub`,children:e?`Select the correct sum`:`Add each flashed number.`})]})}return ge.has(J)?(0,p.jsxs)(p.Fragment,{children:[q===`vertical`?(0,p.jsx)(ve,{numbers:k.numbers}):(0,p.jsx)(`div`,{className:`session-expression`,children:o(k.numbers)}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`missing`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[k.numbers[0],` + ? + `,k.numbers[2],` = `,k.numbers[3]]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`compare`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[`1: `,k.numbers.slice(0,3).join(` + `),(0,p.jsx)(`br`,{}),`2: `,k.numbers.slice(4,7).join(` + `)]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`table`||J===`multiply`||J===`decimalMultiply`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[u(k.numbers[0]),` x `,u(k.numbers[1])]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`division`||J===`decimalDivision`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[u(k.numbers[0]),` / `,u(k.numbers[1])]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`percentage`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[u(k.numbers[0]),`% of `,u(k.numbers[1])]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`square`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[k.numbers[0],`^2`]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`squareRoot`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[`sqrt(`,k.numbers[0],`)`]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`cube`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[k.numbers[0],`^3`]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):J===`cubeRoot`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[`cuberoot(`,k.numbers[0],`)`]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`session-expression`,children:o(k.numbers)}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]})}return(0,p.jsxs)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:[(0,p.jsx)(`style`,{children:le}),(0,p.jsx)(r,{}),(0,p.jsxs)(`div`,{className:`session-shell ${(N||H)&&!T?`playing-active`:``}`,children:[(0,p.jsxs)(`div`,{className:`session-hero`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h1`,{children:E===`flash`?`Mental Flash Training`:`Daily Session`}),(0,p.jsx)(`p`,{children:E===`flash`?`Customize and play infinite rounds of listening, abacus visualization, and speed flashes.`:`Four quick challenge cards, then one mistake review card to help you level up.`})]}),(0,p.jsx)(oe,{variant:`practice-banner`,size:260}),(0,p.jsx)(`div`,{className:`session-pill`,children:E===`flash`?`Free Training`:`Level ${m} | ${h}`})]}),!N&&!H&&(0,p.jsx)(`div`,{className:`session-tabs`,children:(0,p.jsxs)(`button`,{className:`session-tab-btn ${E===`daily`?`active`:``}`,onClick:()=>je(`daily`),children:[(0,p.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),` Daily Session`,!T&&(0,p.jsx)(`span`,{style:{display:`inline-block`,width:`8px`,height:`8px`,borderRadius:`50%`,background:`#f59e0b`,boxShadow:`0 0 8px #f59e0b`,marginLeft:`6px`,verticalAlign:`middle`},title:`Pending for today`})]})}),E===`flash`&&!N?(0,p.jsx)(ce,{isNested:!0}):E===`daily`&&!N&&!H&&!T?Ce?(0,p.jsxs)(`div`,{className:`session-ready`,children:[(0,p.jsxs)(`section`,{className:`ready-panel`,children:[(0,p.jsxs)(`div`,{className:`ready-kicker`,children:[(0,p.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),`Daily Session`]}),(0,p.jsxs)(`h2`,{className:`ready-title`,children:[`Ready, `,Xe,`?`]}),(0,p.jsx)(`p`,{className:`ready-copy`,children:`Today has a short practice journey. Start when you are ready, then the page will become quiet so you can focus.`}),(0,p.jsxs)(`div`,{className:`ready-stats`,children:[(0,p.jsxs)(`div`,{className:`ready-stat`,children:[(0,p.jsx)(`strong`,{children:S.length}),(0,p.jsx)(`span`,{children:`practice stops`})]}),(0,p.jsxs)(`div`,{className:`ready-stat`,children:[(0,p.jsx)(`strong`,{children:Y}),(0,p.jsx)(`span`,{children:`questions today`})]}),(0,p.jsxs)(`div`,{className:`ready-stat`,children:[(0,p.jsxs)(`strong`,{children:[`Level `,m]}),(0,p.jsx)(`span`,{children:`current level`})]})]}),(0,p.jsx)(`div`,{className:`mental-actions`,style:{justifyContent:`flex-start`,marginTop:0},children:(0,p.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:$e,disabled:V,children:V?`Getting Ready...`:`Start Today's Practice`})})]}),(0,p.jsxs)(`aside`,{className:`journey-panel`,children:[(0,p.jsx)(`h2`,{children:`Today's journey`}),(0,p.jsxs)(`div`,{className:`journey-list`,children:[S.map((e,t)=>(0,p.jsxs)(`div`,{className:`journey-card`,children:[(0,p.jsx)(`i`,{className:`fa-solid ${l[e].icon}`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`strong`,{children:ue[t]||`Step ${t+1}`}),(0,p.jsxs)(`span`,{children:[l[e].label,` | `,C(t),` questions`]})]})]},`${e}-${t}`)),(0,p.jsxs)(`div`,{className:`journey-card`,children:[(0,p.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`strong`,{children:`Review`}),(0,p.jsx)(`span`,{children:`Check anything that needs one more look`})]})]})]})]})]}):(0,p.jsx)(`div`,{className:`session-ready`,children:(0,p.jsxs)(`section`,{className:`ready-panel`,children:[(0,p.jsxs)(`div`,{className:`ready-kicker`,children:[(0,p.jsx)(`i`,{className:`fa-solid fa-circle-info`}),`Daily Session`]}),(0,p.jsx)(`h2`,{className:`ready-title`,children:`Paused for now`}),(0,p.jsx)(`p`,{className:`ready-copy`,children:`Your institute has turned off daily practice. Please check back later or ask your teacher.`})]})}):(0,p.jsxs)(`div`,{className:`session-grid`,children:[(0,p.jsxs)(`div`,{className:`mode-list`,children:[S.map((e,t)=>(0,p.jsxs)(`div`,{className:`mode-row ${t===D?`active`:``} ${t<D||T?`done`:``}`,children:[(0,p.jsx)(`i`,{className:`fa-solid ${l[e].icon}`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`span`,{className:`journey-step`,children:ue[t]||`Step ${t+1}`}),(0,p.jsxs)(`span`,{className:`journey-mode`,children:[l[e].label,` | `,C(t),` questions`]})]})]},`${e}-${t}`)),(0,p.jsxs)(`div`,{className:`mode-row review ${H?`active`:``} ${T?`done`:``}`,children:[(0,p.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`span`,{className:`journey-step`,children:`Review`}),(0,p.jsxs)(`span`,{className:`journey-mode`,children:[L.length,` to check`]})]})]})]}),(0,p.jsx)(`div`,{className:`session-card`,children:T?(0,p.jsxs)(`div`,{className:`session-stage`,children:[(0,p.jsx)(`div`,{className:`session-expression`,children:(0,p.jsx)(`i`,{className:`fa-solid fa-circle-check`})}),(0,p.jsxs)(`div`,{className:`session-result`,children:[`Today's Level `,m,` session is complete`]}),(0,p.jsxs)(`div`,{className:`session-result`,style:{fontSize:`1.6rem`},children:[`Score: `,ke?.correct_count??M,`/`,ke?.total_questions??Y]}),(0,p.jsx)(`div`,{className:`session-sub`,children:`Report saved for admin and teachers. Come back tomorrow for a new rotation.`}),B.length?(0,p.jsx)(`div`,{className:`achievement-strip`,children:B.map(e=>(0,p.jsxs)(`div`,{className:`achievement-chip`,children:[(0,p.jsx)(`i`,{className:`fa-solid ${e.icon}`,style:{background:e.color}}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`strong`,{children:e.name}),(0,p.jsx)(`span`,{children:e.description})]})]},e.code))}):null]}):H?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`game-bar`,children:[(0,p.jsx)(`div`,{className:`timer-pill`,style:{background:`color-mix(in srgb, var(--gold) 15%, transparent)`,color:`var(--dark-blue)`},children:`Mistake Review`}),(0,p.jsxs)(`div`,{className:`chip chip-ok`,children:[`Score `,M,`/`,Y]})]}),(0,p.jsxs)(`div`,{className:`session-stage`,style:{alignItems:`stretch`},children:[(0,p.jsx)(`div`,{className:`session-result`,style:{margin:0},children:L.length?`Review your misses`:`No mistakes today`}),(0,p.jsx)(`div`,{className:`session-sub`,children:L.length?`Check the correct answers before you finish.`:`Clean round. Finish and come back tomorrow.`}),L.length?(0,p.jsx)(`div`,{className:`mistake-list`,children:L.map((e,t)=>(0,p.jsxs)(`div`,{className:`mistake-card`,children:[(0,p.jsxs)(`strong`,{children:[e.modeLabel,`: `,it(e)]}),(0,p.jsxs)(`span`,{children:[`Your answer: `,e.selectedAnswer]}),(0,p.jsxs)(`span`,{children:[`Correct: `,e.answer]})]},`${e.mode}-${t}`))}):null]}),(0,p.jsx)(`div`,{className:`mental-actions`,children:(0,p.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:rt,disabled:V,children:V?`Saving Report...`:`Finish Today`})})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`game-bar`,children:[(0,p.jsxs)(`div`,{className:`timer-pill`,style:{background:`var(--light-blue)`,color:`var(--primary-blue)`},children:[l[J].label,` | Q `,O+1,`/`,C(D)]}),ge.has(J)?(0,p.jsxs)(`div`,{className:`layout-toggle`,role:`group`,"aria-label":`Question format`,children:[(0,p.jsxs)(`button`,{className:q===`horizontal`?`active`:``,onClick:()=>Ye(`horizontal`),children:[(0,p.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` Horizontal`]}),(0,p.jsxs)(`button`,{className:q===`vertical`?`active`:``,onClick:()=>Ye(`vertical`),children:[(0,p.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` Vertical`]})]}):null,(0,p.jsxs)(`div`,{className:`chip chip-ok`,children:[`Score `,M,`/`,X+(A===null?0:1)]})]}),(0,p.jsx)(`div`,{className:`prog-wrap`,children:(0,p.jsx)(`div`,{className:`prog-bar`,style:{width:`${X/Y*100}%`}})}),(0,p.jsx)(`div`,{className:`session-stage`,children:at()}),(0,p.jsx)(`div`,{className:`feedback-pop`,children:U?(0,p.jsxs)(`div`,{className:`feedback-bubble ${U.type}`,children:[(0,p.jsx)(`span`,{className:`feedback-character`,children:(0,p.jsx)(`i`,{className:`fa-solid ${U.type===`correct`?`fa-star`:`fa-rotate-right`}`})}),U.text]}):null}),k&&v===`input`?(0,p.jsxs)(`div`,{className:`typed-answer-wrap`,children:[(0,p.jsx)(`input`,{className:`typed-answer-input`,type:`text`,inputMode:`decimal`,pattern:`-?[0-9]*\\.?[0-9]*`,value:y,disabled:A!==null,autoFocus:!0,onChange:e=>Ee(ye(e.target.value)),onKeyDown:e=>{e.key===`Enter`&&y.trim()!==``&&(e.preventDefault(),Q(y))},placeholder:`Type your answer`}),(0,p.jsx)(`button`,{className:`g-btn g-btn-p`,disabled:A!==null||y.trim()===``,onClick:()=>Q(y),children:`Submit`}),A!==null&&g(A)!==g(k.answer)?(0,p.jsxs)(`span`,{className:`typed-answer-correct`,children:[`Correct answer: `,k.answer]}):null]}):k?(0,p.jsx)(`div`,{className:`mcq-grid`,children:k.options.map((e,t)=>{let n=``;return A!==null&&(e===k.answer?n=`correct`:e===A&&(n=`wrong`)),(0,p.jsxs)(`button`,{className:`mcq-btn ${n}`,disabled:A!==null,onClick:()=>Q(e),children:[(0,p.jsx)(`span`,{className:`mcq-key-hint`,children:t+1}),e]},e)})}):null,(0,p.jsxs)(`div`,{className:`mental-actions`,children:[!N&&!k?(0,p.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:Qe,children:`Start Session`}):null,A===null?null:(0,p.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:nt,disabled:V,children:V?`Saving...`:X+1>=Y?`Review Mistakes`:`Next Question`}),J===`voice`&&k?(0,p.jsx)(`button`,{className:`g-btn g-btn-ghost`,onClick:()=>fe(k.numbers,Ie),children:`Repeat Voice`}):null]})]})})]})]})]})}export{Se as default};