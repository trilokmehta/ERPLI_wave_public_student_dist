import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{b as t,d as n,u as r}from"./interactive-Cdjdmhdv.js";import{C as i,J as a,M as o,W as s,X as ee,m as te,q as ne,v as c,y as l}from"./mcq-CTdn8LzU.js";var u=e(t(),1);function d(e,t){return Math.floor(Math.random()*(t-e+1))+e}function f(e,t){let n=Number(e),r=new Set([n]);if(Number.isInteger(n)){let e=[];if(e.push(n+1,n-1),e.push(n+2,n-2),e.push(n+5,n-5),e.push(n+10,n-10),n>=10&&n<100){let t=Math.floor(n/10),r=n%10;t!==r&&r>0&&e.push(r*10+t)}else if(n>=100&&n<1e3){let t=Math.floor(n/100),r=n%100,i=Math.floor(r/10),a=r%10;i!==a&&e.push(t*100+a*10+i)}let t=e.filter(e=>e>0&&e!==n).sort(()=>Math.random()-.5);for(let e of t){if(r.size>=4)break;r.add(e)}}let i=Math.max(3,Math.round(n*.1)),a=0;for(;r.size<4&&a<100;){a++;let e=n+d(-i,i),t=Number.isInteger(n)?e:Number(e.toFixed(2));t>0&&t!==n&&r.add(t)}let o=1;for(;r.size<4;)o!==n&&r.add(o),o++;return Array.from(r).sort(()=>Math.random()-.5)}function p(e){return String(Number.isInteger(e)?e:Number(e.toFixed(2)))}function m(e){let t=[],n=0;for(let r=0;r<e;r++){let e=d(1,Math.max(1,9-n));t.push(e),n+=e}return t}function re(e,t,n){let r=[],i=d(Math.max(1,t),n);r.push(i);for(let t=1;t<e;t++){let e=0,t=0;for(;t<10;){t++;let n=Math.random()>.5?1:-1,r=String(i).split(``).map(Number),a=[];for(let e of r)n>0?a.push(d(0,9-e)):a.push(d(0,e));let o=Number(a.join(``));if(o!==0){let t=!0,i=String(o).padStart(r.length,`0`).split(``).map(Number);for(let e=0;e<r.length;e++)n>0?r[e]+i[e]>9&&(t=!1):r[e]-i[e]<0&&(t=!1);if(t){e=n*o;break}}}i+=e,r.push(e)}return r}function h(e,t=`any`,{min:n=1,max:r=9,allowSubtract:i=!0}={}){return c({count:e,min:n,max:r,rule:t,allowSubtract:i})}function g(e){return h(e,`combination`)}function _(e){let{number:t,rules:n}=e;if(l(n?.rule))return h(t.count,n.rule,{min:t.min,max:t.max});if(n?.noCarry)return n?.addSub?re(t.count,t.min,t.max):m(t.count);let r=t.max,i=[d(Math.min(5,r),r)],a=i[0];for(let e=1;e<t.count;e++){let e=Math.random()>.45?1:-1,t=d(1,Math.min(r,Math.max(9,Math.floor(a*.7))));e<0&&a-t>0?(i.push(-t),a-=t):(i.push(t),a+=t)}return i}function v(e){return e.map((e,t)=>t===0?p(e):e<0?`- ${p(Math.abs(e))}`:`+ ${p(e)}`).join(` `)}function y(e){return e.additionConfigs&&e.additionConfigs.length>0?e.additionConfigs[Math.floor(Math.random()*e.additionConfigs.length)]:e.number}function b(e,t){let n=y(e),r=d(e.level===0?1:n.min,e.level===0?99:Math.min(99,n.max));return{mode:`abacus`,numbers:[r],answer:r,options:f(r,t),prompt:`What number is shown?`}}function x(e,t){let n=y(e),[r,i,a]=l(e.rules?.rule)?h(3,e.rules.rule,{min:n.min,max:Math.min(n.max,30),allowSubtract:!1}):e.rules?.noCarry?m(3):Array.from({length:3},()=>d(n.min,Math.min(n.max,30)));return{mode:`missing`,numbers:[r,i,a,r+i+a],answer:i,options:f(i,t),prompt:`Find the missing number.`}}function ie(e){let t=y(e),n=Array.from({length:3},()=>d(t.min,Math.min(t.max,40))),r=Array.from({length:3},()=>d(t.min,Math.min(t.max,40))),i=n.reduce((e,t)=>e+t,0),a=r.reduce((e,t)=>e+t,0);for(;i===a;)r=Array.from({length:3},()=>d(t.min,Math.min(t.max,40))),a=r.reduce((e,t)=>e+t,0);return{mode:`compare`,numbers:[...n,i,...r,a],answer:i>a?1:2,options:[1,2],prompt:`Which line is bigger?`}}function S(e,t,n){let r=y(e),i=n===`voice`?Math.max(3,r.count-1):n===`longSum`?Math.max(10,r.count+5):r.count,a={...e,number:{min:r.min,max:r.max,count:i}},o=l(e.rules?.rule)?h(i,e.rules.rule,{min:r.min,max:r.max}):e.rules?.friends?g(i):n===`addSub`||e.rules?.addSub?_(a):e.rules?.noCarry?m(i):Array.from({length:i},()=>d(r.min,r.max)),s=o.reduce((e,t)=>e+t,0);return{mode:n,numbers:o,answer:s,options:f(s,t*i),prompt:`Add the numbers.`}}function C(e){let t={min:2,max:20,timesMin:2,timesMax:12,...e.table||{}},n=d(t.min,t.max),r=d(t.timesMin,t.timesMax),i=n*r;return{mode:`table`,numbers:[n,r],answer:i,options:f(i,Math.max(10,n)),prompt:`Solve the table question.`}}function w(e){let t={aMin:2,aMax:99,bMin:2,bMax:12,...e.multiply||{}},n=d(t.aMin,t.aMax),r=d(t.bMin,t.bMax),i=n*r;return{mode:`multiply`,numbers:[n,r],answer:i,options:f(i,Math.max(20,n+r)),prompt:`Multiply.`}}function ae(e){let t={divisorMin:2,divisorMax:12,quotientMin:2,quotientMax:99,...e.division||{}},n=d(t.divisorMin,t.divisorMax),r=d(t.quotientMin,t.quotientMax);return{mode:`division`,numbers:[n*r,n],answer:r,options:f(r,Math.max(8,n)),prompt:`Divide.`}}function T(e){let t={addDivisor:10,...e.decimal||{}},n=_(e).map(e=>Number((e/t.addDivisor).toFixed(t.places||1))),r=Number(n.reduce((e,t)=>e+t,0).toFixed(t.places||1));return{mode:`decimalAddSub`,numbers:n,answer:r,options:f(r,6),prompt:`Add and subtract decimals.`}}function E(e){let t={places:1,multiplyMin:12,multiplyMax:999,...e.decimal||{}},n=10**(t.places||1),r=Number((d(t.multiplyMin,t.multiplyMax)/n).toFixed(t.places||1)),i=Number((d(2,99)/n).toFixed(t.places||1)),a=Number((r*i).toFixed(2));return{mode:`decimalMultiply`,numbers:[r,i],answer:a,options:f(a,12),prompt:`Multiply decimals.`}}function D(e){let t={places:1,...e.decimal||{}},n=10**(t.places||1),r=Number((d(2,99)/n).toFixed(t.places||1)),i=Number((d(2,999)/n).toFixed(t.places||1));return{mode:`decimalDivision`,numbers:[Number((r*i).toFixed(2)),r],answer:i,options:f(i,10),prompt:`Divide decimals.`}}function O(e){let t=e.square||{min:2,max:99},n=d(t.min,t.max);return{mode:`square`,numbers:[n],answer:n*n,options:f(n*n,Math.max(20,n)),prompt:`Find the square.`}}function k(e){let t=e.square||{min:2,max:99},n=d(t.min,t.max);return{mode:`squareRoot`,numbers:[n*n],answer:n,options:f(n,Math.max(8,Math.round(n*.1))),prompt:`Find the square root.`}}function A(e){let t=e.cube||{min:2,max:20},n=d(t.min,t.max);return{mode:`cube`,numbers:[n],answer:n**3,options:f(n**3,Math.max(20,n*n)),prompt:`Find the cube.`}}function j(e){let t=e.cube||{min:2,max:20},n=d(t.min,t.max);return{mode:`cubeRoot`,numbers:[n**3],answer:n,options:f(n,Math.max(6,Math.round(n*.2))),prompt:`Find the cube root.`}}var M={voice:{label:`Voice Numbers`,icon:`fa-volume-high`},abacus:{label:`Abacus Flash`,icon:`fa-calculator`},flash:{label:`Number Flash`,icon:`fa-bolt`},full:{label:`Full Sum`,icon:`fa-plus`},longSum:{label:`Long Sum`,icon:`fa-list-ol`},addSub:{label:`Add & Subtract`,icon:`fa-plus-minus`},missing:{label:`Missing Number`,icon:`fa-question`},compare:{label:`Bigger Sum`,icon:`fa-greater-than`},table:{label:`Tables`,icon:`fa-table-cells`},multiply:{label:`Multiplication`,icon:`fa-xmark`},division:{label:`Division`,icon:`fa-divide`},decimalAddSub:{label:`Decimal Add/Sub`,icon:`fa-droplet`},decimalMultiply:{label:`Decimal Multiply`,icon:`fa-star-half-stroke`},decimalDivision:{label:`Decimal Division`,icon:`fa-circle-half-stroke`},square:{label:`Squares`,icon:`fa-square`},squareRoot:{label:`Square Roots`,icon:`fa-square-root-variable`},cube:{label:`Cubes`,icon:`fa-cube`},cubeRoot:{label:`Cube Roots`,icon:`fa-cubes`}},N={0:{modes:[`abacus`,`full`,`flash`,`voice`,`missing`],number:{min:1,max:9,count:3},additionConfigs:[{min:1,max:9,count:3},{min:10,max:99,count:2}],rules:{noCarry:!0,addSub:!0,rule:`direct`}},1:{modes:[`addSub`,`full`,`flash`,`voice`,`missing`,`compare`],number:{min:1,max:9,count:5},additionConfigs:[{min:1,max:9,count:5}],rules:{noCarry:!1,addSub:!0,friends:!0,rule:`combination`}},2:{modes:[`full`,`flash`,`voice`,`table`,`compare`],number:{min:10,max:99,count:3},additionConfigs:[{min:10,max:99,count:3},{min:100,max:999,count:2}]},3:{modes:[`multiply`,`table`,`full`,`flash`,`compare`],number:{min:10,max:99,count:5},additionConfigs:[{min:10,max:99,count:5},{min:100,max:999,count:3},{min:1e3,max:9999,count:2}],multiply:{aMin:10,aMax:99,bMin:2,bMax:9},table:{min:2,max:300,timesMin:2,timesMax:12}},4:{modes:[`division`,`multiply`,`table`,`addSub`,`full`,`compare`],number:{min:10,max:99,count:7},additionConfigs:[{min:10,max:99,count:7},{min:100,max:999,count:4},{min:1e3,max:9999,count:3}],multiply:{aMin:100,aMax:999,bMin:2,bMax:9},table:{min:2,max:500,timesMin:2,timesMax:12}},5:{modes:[`division`,`multiply`,`table`,`addSub`,`full`,`compare`],number:{min:10,max:99,count:10},additionConfigs:[{min:10,max:99,count:10},{min:100,max:999,count:5},{min:1e3,max:9999,count:4},{min:1e4,max:99999,count:2}],multiply:{aMin:10,aMax:99,bMin:10,bMax:99},division:{divisorMin:2,divisorMax:9,quotientMin:10,quotientMax:99},table:{min:2,max:1e3,timesMin:2,timesMax:12}},6:{modes:[`division`,`multiply`,`table`,`addSub`,`full`,`decimalAddSub`,`compare`],number:{min:10,max:99,count:15},additionConfigs:[{min:10,max:99,count:15},{min:100,max:999,count:6},{min:1e3,max:9999,count:5},{min:1e4,max:99999,count:3}],multiply:{aMin:100,aMax:999,bMin:10,bMax:99},division:{divisorMin:2,divisorMax:9,quotientMin:11,quotientMax:99},table:{min:2,max:2e3,timesMin:2,timesMax:12},decimal:{places:1,addDivisor:10,multiplyMin:12,multiplyMax:999}},7:{modes:[`division`,`multiply`,`table`,`addSub`,`full`,`square`,`cube`,`compare`],number:{min:10,max:99,count:20},additionConfigs:[{min:10,max:99,count:20},{min:100,max:999,count:7},{min:1e3,max:9999,count:6},{min:1e4,max:99999,count:4}],multiply:{aMin:100,aMax:999,bMin:100,bMax:999},division:{divisorMin:2,divisorMax:9,quotientMin:111,quotientMax:999},table:{min:2,max:3e3,timesMin:2,timesMax:12},decimal:{places:1,addDivisor:10,multiplyMin:12,multiplyMax:999},square:{min:2,max:100},cube:{min:2,max:30}},8:{modes:[`division`,`multiply`,`table`,`addSub`,`full`,`squareRoot`,`cubeRoot`,`compare`],number:{min:10,max:99,count:25},additionConfigs:[{min:10,max:99,count:25},{min:100,max:999,count:8},{min:1e3,max:9999,count:7},{min:1e4,max:99999,count:5}],multiply:{aMin:1e3,aMax:9999,bMin:100,bMax:999},division:{divisorMin:10,divisorMax:99,quotientMin:10,quotientMax:99},table:{min:2,max:5e3,timesMin:2,timesMax:12},decimal:{places:1,addDivisor:10,multiplyMin:12,multiplyMax:999},square:{min:2,max:100},cube:{min:2,max:30}},9:{modes:Object.keys(M),number:{min:2,max:9999,count:5},additionConfigs:[{min:2,max:9999,count:5}],multiply:{aMin:2,aMax:999,bMin:2,bMax:99},division:{divisorMin:2,divisorMax:99,quotientMin:2,quotientMax:999},decimal:{places:1,addDivisor:10,multiplyMin:12,multiplyMax:999},square:{min:2,max:999},cube:{min:2,max:99}}};function P(e,t={}){let n=N[e]||N[0],r=t[e]||{};return{...n,...r,level:e,additionConfigs:r.additionConfigs||n.additionConfigs||[],number:{...n.number||{},...r.number||{}},rules:{...n.rules||{},...r.rules||{}},table:{...n.table||{},...r.table||{}},multiply:{...n.multiply||{},...r.multiply||{}},division:{...n.division||{},...r.division||{}},decimal:{...n.decimal||{},...r.decimal||{}},square:{...n.square||{},...r.square||{}},cube:{...n.cube||{},...r.cube||{}}}}function oe(e,t,n={}){let r=P(t,n),{number:i}=r,a=Math.max(8,Math.round(i.max*.18));return(F[e]||F.full)(r,a,e)}var F={abacus:b,missing:x,compare:ie,table:C,multiply:w,division:ae,decimalAddSub:T,decimalMultiply:E,decimalDivision:D,square:O,squareRoot:k,cube:A,cubeRoot:j,full:S,longSum:S,flash:S,voice:S,addSub:S},I=n(),se=`
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
  }
  .session-bead.active {
    background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue));
    border-color: transparent;
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
`,ce=[`Warm Up`,`Brain Builder`,`Speed Round`,`Focus Finish`,`Missing Link`,`Compare Clash`];function le(){return new Date().toLocaleDateString(`en-CA`)}function ue(e){if(!(`speechSynthesis`in window))return!1;window.speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e.map((e,t)=>t===0?String(e):e<0?`minus ${Math.abs(e)}`:`plus ${e}`).join(`. `));return t.rate=.8,window.speechSynthesis.speak(t),!0}function de(e){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let n=new t,r=n.createGain();r.connect(n.destination),r.gain.setValueAtTime(1e-4,n.currentTime),r.gain.exponentialRampToValueAtTime(.14,n.currentTime+.02),r.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.35),(e===`correct`?[523.25,659.25,783.99]:[196,164.81]).forEach((t,i)=>{let a=n.createOscillator();a.type=e===`correct`?`sine`:`triangle`,a.frequency.value=t,a.connect(r);let o=n.currentTime+i*.09;a.start(o),a.stop(o+.12)}),setTimeout(()=>n.close(),500)}function fe(){`vibrate`in navigator&&navigator.vibrate([80,40,80])}function pe({value:e}){return(0,I.jsx)(`div`,{className:`session-abacus`,children:String(e).padStart(2,`0`).split(``).map(Number).map((e,t)=>{let n=e>=5,r=e%5;return(0,I.jsxs)(`div`,{className:`session-col`,children:[(0,I.jsx)(`div`,{className:`session-bead-zone`,children:(0,I.jsx)(`span`,{className:`session-bead ${n?`active`:``}`})}),(0,I.jsx)(`div`,{className:`session-bead-zone`,children:[1,2,3,4].map(e=>(0,I.jsx)(`span`,{className:`session-bead ${r>=e?`active`:``}`},e))})]},`${e}-${t}`)})})}var L=new Set([`full`,`longSum`,`flash`,`voice`,`addSub`,`missing`,`compare`,`abacus`]);function R(e){return e?{min:e<=1?1:10**(e-1),max:10**e-1}:null}function me(e,t){if(!e||!(e.rows!=null||e.digits!=null||e.digits2!=null||e.decimals!=null||e.rule!=null))return{};let n=P(t),r=R(e.digits),i=R(e.digits2),a={};if(e.rule&&(a.rules={...n.rules||{},rule:e.rule}),L.has(e.mode)){let t=n.additionConfigs&&n.additionConfigs[0]||n.number||{min:1,max:9,count:3},i={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count};a.additionConfigs=[i],a.number={...i}}else if(e.mode===`multiply`){let e=n.multiply||{};a.multiply={aMin:r?r.min:e.aMin,aMax:r?r.max:e.aMax,bMin:i?i.min:e.bMin,bMax:i?i.max:e.bMax}}else if(e.mode===`division`){let e=n.division||{};a.division={quotientMin:r?r.min:e.quotientMin,quotientMax:r?r.max:e.quotientMax,divisorMin:i?i.min:e.divisorMin,divisorMax:i?i.max:e.divisorMax}}else if(e.mode===`decimalAddSub`){let t=n.number||{min:10,max:99,count:3};a.number={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count},e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals,addDivisor:10**e.decimals})}else (e.mode===`decimalMultiply`||e.mode===`decimalDivision`)&&e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals});return Object.keys(a).length===0?{}:{[t]:a}}var he=[{mode:`full`,questions:20},{mode:`longSum`,questions:20},{mode:`flash`,questions:20},{mode:`voice`,questions:20},{mode:`missing`,questions:10},{mode:`compare`,questions:10}];function z(){let{profile:e,user:t,institute:n,membership:c}=i(),l=e?.current_level===999?9:Math.max(0,Math.min(9,Number(e?.current_level??0))),d=le(),[f,m]=(0,u.useState)(he),[re,h]=(0,u.useState)(!0),g=(0,u.useRef)(null),_=(0,u.useMemo)(()=>f.map(e=>e.mode),[f]),y=e=>Number(f[e]?.questions)||4,b=`practice_session_${t?.id||`guest`}_${d}_level_${l}`,[x,ie]=(0,u.useState)(()=>localStorage.getItem(b)===`done`),[S,C]=(0,u.useState)(`daily`),[w,ae]=(0,u.useState)(0),[T,E]=(0,u.useState)(0),[D,O]=(0,u.useState)(null),[k,A]=(0,u.useState)(null),[j,N]=(0,u.useState)(0),[P,F]=(0,u.useState)(!1),[L,R]=(0,u.useState)(0),[z,ge]=(0,u.useState)([]),[_e,ve]=(0,u.useState)([]),[B,ye]=(0,u.useState)([]),[be,xe]=(0,u.useState)(0),[V,Se]=(0,u.useState)(0),[H,Ce]=(0,u.useState)([]),[U,we]=(0,u.useState)(!1),[W,Te]=(0,u.useState)(!1),[G,K]=(0,u.useState)(null),[q,J]=(0,u.useState)(null),Y=_[w],X=(0,u.useMemo)(()=>f.reduce((e,t)=>e+(Number(t.questions)||4),0),[f]),Z=(0,u.useMemo)(()=>{let e=0;return f.forEach((t,n)=>{let r=Number(t.questions)||4;n<w?e+=r:n===w&&(e+=T)}),e},[f,w,T]);(0,u.useEffect)(()=>{let e=!1;async function t(){if(!n?.id)return;let{data:t}=await o(n.id);if(e||!t)return;h(t.enabled??!0);let r=t.journey?.[l]||t.journey?.[String(l)];Array.isArray(r)&&r.length&&m(r.map(e=>({mode:e.mode,questions:Number(e.questions)||4,rows:e.rows,digits:e.digits,digits2:e.digits2,decimals:e.decimals})))}return t(),()=>{e=!0}},[n?.id,l]);let Ee=e?.full_name?.split(` `)?.[0]||e?.name?.split(` `)?.[0]||t?.email?.split(`@`)?.[0]||`champ`,De=S===`daily`&&(P||W)&&!x;(0,u.useEffect)(()=>(document.body.classList.toggle(`practice-session-focus`,De),()=>document.body.classList.remove(`practice-session-focus`)),[De]),(0,u.useEffect)(()=>{if(q===null)return;let e=setTimeout(()=>{if(q>1){J(e=>e-1);return}J(null),Q(f[w])},900);return()=>clearTimeout(e)},[f,w,q]),(0,u.useEffect)(()=>{function e(e){if(!(document.activeElement.tagName===`INPUT`||document.activeElement.tagName===`TEXTAREA`)){if(!x&&P&&D&&k===null&&[`1`,`2`,`3`,`4`].includes(e.key)){let t=Number(e.key)-1;D.options&&D.options[t]!==void 0&&Ae(D.options[t])}e.key===`Enter`&&(!P&&!W&&!x?ke():P&&k!==null&&!U?Ne():W&&!U&&Pe())}}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[x,P,D,k,U,W,T,w,Y]);function Q(e){let t=typeof e==`string`?e:e?.mode,n=oe(t,l,typeof e==`string`?{}:me(e,l));O(n),A(null),K(null),R(0),F(!0),t===`voice`&&ue(n.numbers),t===`flash`&&(n.numbers.forEach((e,t)=>setTimeout(()=>R(t),t*1500)),setTimeout(()=>R(n.numbers.length),n.numbers.length*1500))}function Oe(){Q(f[w])}async function ke(){g.current=Date.now(),F(!0),O(null),A(null),K(null),J(3),$(`session_start`,Y).catch(e=>{console.warn(`Practice start saved locally but not submitted:`,e)})}function Ae(e){if(k!==null)return;let t=e===D.answer,n={mode:D.mode,modeLabel:M[D.mode]?.label||D.mode,question:Fe(D),numbers:D.numbers,selectedAnswer:e,correctAnswer:D.answer,isCorrect:t,answeredAt:new Date().toISOString()};A(e),ve(e=>[...e,n]),t?(de(`correct`),K({type:`correct`,text:`Great job`}),N(e=>e+1),xe(e=>{let t=e+1;return Se(e=>Math.max(e,t)),t})):(de(`wrong`),fe(),K({type:`wrong`,text:`Good try. The answer was ${D.answer}.`}),ge(t=>[...t,{...D,selectedAnswer:e,modeLabel:M[D.mode]?.label||D.mode}]),xe(0))}function je({nextAnswers:e=_e,nextMistakes:t=z,nextCompletedModes:r=B,status:i=`in_progress`,achievements:a=H}={}){let o=e.filter(e=>e.isCorrect).length,s=e.reduce((e,t)=>(e[t.mode]=e[t.mode]||{label:t.modeLabel,correct:0,wrong:0},e[t.mode][t.isCorrect?`correct`:`wrong`]+=1,e),{}),ee=g.current?Math.round((Date.now()-g.current)/1e3):0;return{institute_id:n?.id,student_membership_id:c?.id,level:l,session_date:d,mode_rotation:_,completed_modes:r,total_questions:X,total_time_seconds:ee,answered_count:e.length,correct_count:o,wrong_count:e.length-o,max_correct_streak:V,question_type_summary:s,answers:e,mistakes:t,earned_achievements:a.map(e=>({code:e.code,name:e.name,type:e.type})),status:i,completed_at:i===`completed`?new Date().toISOString():null,updated_at:new Date().toISOString()}}function Me(e,n,r){let i=`practice_report_${t?.id||`guest`}_${d}_level_${l}`;localStorage.setItem(i,JSON.stringify(e));let a=`${i}_events`,o=JSON.parse(localStorage.getItem(a)||`[]`);o.push({eventType:n,mode:r,payload:e,createdAt:new Date().toISOString()}),localStorage.setItem(a,JSON.stringify(o))}async function $(e,t,n={}){let r=je(n);if(Me(r,e,t),!r.institute_id||!r.student_membership_id)return;we(!0);let{data:i,error:a}=await ne(r);a?console.warn(`Practice report saved locally but not submitted:`,a):await s({institute_id:r.institute_id,student_membership_id:r.student_membership_id,attempt_id:i?.id,level:l,session_date:d,event_type:e,mode:t,payload:r}),we(!1)}async function Ne(){let e=y(w);if(T+1<e){E(e=>e+1),setTimeout(()=>Q(f[w]),0);return}let t=[...new Set([...B,Y])];if(ye(t),await $(`mode_complete`,Y,{nextCompletedModes:t}),w+1<_.length){let e=f[w+1];ae(e=>e+1),E(0),setTimeout(()=>Q(e),0);return}Te(!0),F(!1)}async function Pe(){let e=[...new Set([...B,Y])],t=ee({score:j,totalQuestions:X,maxCorrectStreak:V,mistakes:z,completedModes:e});Ce(t),localStorage.setItem(b,`done`),localStorage.setItem(`${b}_achievements`,JSON.stringify(t)),await $(`session_complete`,`review`,{nextCompletedModes:e,status:`completed`,achievements:t}),n?.id&&c?.id&&await Promise.all(t.map(e=>a({institute_id:n.id,student_membership_id:c.id,achievement_code:e.code,achievement_name:e.name,achievement_type:e.type,description:e.description,metadata:{level:l,session_date:d,score:j,total_questions:X,max_correct_streak:V}}))),ie(!0),Te(!1)}function Fe(e){return e.mode===`abacus`?`Abacus number: ${e.answer}`:e.mode===`missing`?`${e.numbers[0]} + ? + ${e.numbers[2]} = ${e.numbers[3]}`:e.mode===`compare`?`1: ${e.numbers.slice(0,3).join(` + `)} | 2: ${e.numbers.slice(4,7).join(` + `)}`:[`table`,`multiply`,`decimalMultiply`].includes(e.mode)?`${p(e.numbers[0])} x ${p(e.numbers[1])}`:[`division`,`decimalDivision`].includes(e.mode)?`${p(e.numbers[0])} / ${p(e.numbers[1])}`:e.mode===`square`?`${e.numbers[0]} squared`:e.mode===`squareRoot`?`square root of ${e.numbers[0]}`:e.mode===`cube`?`${e.numbers[0]} cubed`:e.mode===`cubeRoot`?`cube root of ${e.numbers[0]}`:v(e.numbers)}function Ie(){if(q!==null)return(0,I.jsxs)(`div`,{className:`session-countdown`,children:[(0,I.jsx)(`div`,{className:`countdown-ring`,children:(0,I.jsx)(`strong`,{children:q})}),(0,I.jsx)(`div`,{className:`countdown-title`,children:`Get ready`}),(0,I.jsx)(`div`,{className:`countdown-copy`,children:`Look at the first challenge calmly, then choose your answer.`})]});if(!D)return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{className:`session-expression`,children:(0,I.jsx)(`i`,{className:`fa-solid ${M[Y].icon}`})}),(0,I.jsx)(`div`,{className:`session-sub`,children:`Start today's session.`})]});if(Y===`abacus`)return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(pe,{value:D.answer}),(0,I.jsx)(`div`,{className:`session-sub`,children:D.prompt})]});if(Y===`voice`)return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{className:`session-expression`,children:(0,I.jsx)(`i`,{className:`fa-solid fa-volume-high`})}),(0,I.jsx)(`div`,{className:`session-sub`,children:`Listen and choose the total.`})]});if(Y===`flash`){let e=L>=D.numbers.length;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{className:`session-expression animate-flash-num`,children:e?`?`:D.numbers[L]},L),(0,I.jsx)(`div`,{className:`session-sub`,children:e?`Select the correct sum`:`Add each flashed number.`})]})}return Y===`full`||Y===`addSub`||Y===`decimalAddSub`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{className:`session-expression`,children:v(D.numbers)}),(0,I.jsx)(`div`,{className:`session-sub`,children:D.prompt})]}):Y===`missing`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`session-expression`,children:[D.numbers[0],` + ? + `,D.numbers[2],` = `,D.numbers[3]]}),(0,I.jsx)(`div`,{className:`session-sub`,children:D.prompt})]}):Y===`compare`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`session-expression`,children:[`1: `,D.numbers.slice(0,3).join(` + `),(0,I.jsx)(`br`,{}),`2: `,D.numbers.slice(4,7).join(` + `)]}),(0,I.jsx)(`div`,{className:`session-sub`,children:D.prompt})]}):Y===`table`||Y===`multiply`||Y===`decimalMultiply`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`session-expression`,children:[p(D.numbers[0]),` x `,p(D.numbers[1])]}),(0,I.jsx)(`div`,{className:`session-sub`,children:D.prompt})]}):Y===`division`||Y===`decimalDivision`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`session-expression`,children:[p(D.numbers[0]),` / `,p(D.numbers[1])]}),(0,I.jsx)(`div`,{className:`session-sub`,children:D.prompt})]}):Y===`square`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`session-expression`,children:[D.numbers[0],`^2`]}),(0,I.jsx)(`div`,{className:`session-sub`,children:D.prompt})]}):Y===`squareRoot`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`session-expression`,children:[`sqrt(`,D.numbers[0],`)`]}),(0,I.jsx)(`div`,{className:`session-sub`,children:D.prompt})]}):Y===`cube`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`session-expression`,children:[D.numbers[0],`^3`]}),(0,I.jsx)(`div`,{className:`session-sub`,children:D.prompt})]}):Y===`cubeRoot`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`session-expression`,children:[`cuberoot(`,D.numbers[0],`)`]}),(0,I.jsx)(`div`,{className:`session-sub`,children:D.prompt})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`div`,{className:`session-expression`,children:v(D.numbers)}),(0,I.jsx)(`div`,{className:`session-sub`,children:D.prompt})]})}return(0,I.jsxs)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:[(0,I.jsx)(`style`,{children:se}),(0,I.jsx)(r,{}),(0,I.jsxs)(`div`,{className:`session-shell ${(P||W)&&!x?`playing-active`:``}`,children:[(0,I.jsxs)(`div`,{className:`session-hero`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h1`,{children:S===`flash`?`Mental Flash Training`:`Daily Session`}),(0,I.jsx)(`p`,{children:S===`flash`?`Customize and play infinite rounds of listening, abacus visualization, and speed flashes.`:`Four quick challenge cards, then one mistake review card to help you level up.`})]}),(0,I.jsx)(`div`,{className:`session-pill`,children:S===`flash`?`Free Training`:`Level ${l} | ${d}`})]}),!P&&!W&&(0,I.jsxs)(`div`,{className:`session-tabs`,children:[(0,I.jsxs)(`button`,{className:`session-tab-btn ${S===`daily`?`active`:``}`,onClick:()=>C(`daily`),children:[(0,I.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),` Daily Session`,!x&&(0,I.jsx)(`span`,{style:{display:`inline-block`,width:`8px`,height:`8px`,borderRadius:`50%`,background:`#f59e0b`,boxShadow:`0 0 8px #f59e0b`,marginLeft:`6px`,verticalAlign:`middle`},title:`Pending for today`})]}),(0,I.jsxs)(`button`,{className:`session-tab-btn ${S===`flash`?`active`:``}`,onClick:()=>C(`flash`),children:[(0,I.jsx)(`i`,{className:`fa-solid fa-bolt`}),` Mental Flash Training`]})]}),S===`flash`&&!P?(0,I.jsx)(te,{isNested:!0}):S===`daily`&&!P&&!W&&!x?re?(0,I.jsxs)(`div`,{className:`session-ready`,children:[(0,I.jsxs)(`section`,{className:`ready-panel`,children:[(0,I.jsxs)(`div`,{className:`ready-kicker`,children:[(0,I.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),`Daily Session`]}),(0,I.jsxs)(`h2`,{className:`ready-title`,children:[`Ready, `,Ee,`?`]}),(0,I.jsx)(`p`,{className:`ready-copy`,children:`Today has a short practice journey. Start when you are ready, then the page will become quiet so you can focus.`}),(0,I.jsxs)(`div`,{className:`ready-stats`,children:[(0,I.jsxs)(`div`,{className:`ready-stat`,children:[(0,I.jsx)(`strong`,{children:_.length}),(0,I.jsx)(`span`,{children:`practice stops`})]}),(0,I.jsxs)(`div`,{className:`ready-stat`,children:[(0,I.jsx)(`strong`,{children:X}),(0,I.jsx)(`span`,{children:`questions today`})]}),(0,I.jsxs)(`div`,{className:`ready-stat`,children:[(0,I.jsxs)(`strong`,{children:[`Level `,l]}),(0,I.jsx)(`span`,{children:`current level`})]})]}),(0,I.jsx)(`div`,{className:`mental-actions`,style:{justifyContent:`flex-start`,marginTop:0},children:(0,I.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:ke,disabled:U,children:U?`Getting Ready...`:`Start Today's Practice`})})]}),(0,I.jsxs)(`aside`,{className:`journey-panel`,children:[(0,I.jsx)(`h2`,{children:`Today's journey`}),(0,I.jsxs)(`div`,{className:`journey-list`,children:[_.map((e,t)=>(0,I.jsxs)(`div`,{className:`journey-card`,children:[(0,I.jsx)(`i`,{className:`fa-solid ${M[e].icon}`}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`strong`,{children:ce[t]||`Step ${t+1}`}),(0,I.jsxs)(`span`,{children:[M[e].label,` | `,y(t),` questions`]})]})]},`${e}-${t}`)),(0,I.jsxs)(`div`,{className:`journey-card`,children:[(0,I.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`strong`,{children:`Review`}),(0,I.jsx)(`span`,{children:`Check anything that needs one more look`})]})]})]})]})]}):(0,I.jsx)(`div`,{className:`session-ready`,children:(0,I.jsxs)(`section`,{className:`ready-panel`,children:[(0,I.jsxs)(`div`,{className:`ready-kicker`,children:[(0,I.jsx)(`i`,{className:`fa-solid fa-circle-info`}),`Daily Session`]}),(0,I.jsx)(`h2`,{className:`ready-title`,children:`Paused for now`}),(0,I.jsx)(`p`,{className:`ready-copy`,children:`Your institute has turned off daily practice. Please check back later or ask your teacher.`})]})}):(0,I.jsxs)(`div`,{className:`session-grid`,children:[(0,I.jsxs)(`div`,{className:`mode-list`,children:[_.map((e,t)=>(0,I.jsxs)(`div`,{className:`mode-row ${t===w?`active`:``} ${t<w||x?`done`:``}`,children:[(0,I.jsx)(`i`,{className:`fa-solid ${M[e].icon}`}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`span`,{className:`journey-step`,children:ce[t]||`Step ${t+1}`}),(0,I.jsxs)(`span`,{className:`journey-mode`,children:[M[e].label,` | `,y(t),` questions`]})]})]},`${e}-${t}`)),(0,I.jsxs)(`div`,{className:`mode-row review ${W?`active`:``} ${x?`done`:``}`,children:[(0,I.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`span`,{className:`journey-step`,children:`Review`}),(0,I.jsxs)(`span`,{className:`journey-mode`,children:[z.length,` to check`]})]})]})]}),(0,I.jsx)(`div`,{className:`session-card`,children:x?(0,I.jsxs)(`div`,{className:`session-stage`,children:[(0,I.jsx)(`div`,{className:`session-expression`,children:(0,I.jsx)(`i`,{className:`fa-solid fa-circle-check`})}),(0,I.jsxs)(`div`,{className:`session-result`,children:[`Today's Level `,l,` session is complete`]}),(0,I.jsx)(`div`,{className:`session-sub`,children:`Report saved for admin and teachers. Come back tomorrow for a new rotation.`}),H.length?(0,I.jsx)(`div`,{className:`achievement-strip`,children:H.map(e=>(0,I.jsxs)(`div`,{className:`achievement-chip`,children:[(0,I.jsx)(`i`,{className:`fa-solid ${e.icon}`,style:{background:e.color}}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`strong`,{children:e.name}),(0,I.jsx)(`span`,{children:e.description})]})]},e.code))}):null]}):W?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`game-bar`,children:[(0,I.jsx)(`div`,{className:`timer-pill`,style:{background:`color-mix(in srgb, var(--gold) 15%, transparent)`,color:`var(--dark-blue)`},children:`Mistake Review`}),(0,I.jsxs)(`div`,{className:`chip chip-ok`,children:[`Score `,j,`/`,X]})]}),(0,I.jsxs)(`div`,{className:`session-stage`,style:{alignItems:`stretch`},children:[(0,I.jsx)(`div`,{className:`session-result`,style:{margin:0},children:z.length?`Review your misses`:`No mistakes today`}),(0,I.jsx)(`div`,{className:`session-sub`,children:z.length?`Check the correct answers before you finish.`:`Clean round. Finish and come back tomorrow.`}),z.length?(0,I.jsx)(`div`,{className:`mistake-list`,children:z.map((e,t)=>(0,I.jsxs)(`div`,{className:`mistake-card`,children:[(0,I.jsxs)(`strong`,{children:[e.modeLabel,`: `,Fe(e)]}),(0,I.jsxs)(`span`,{children:[`Your answer: `,e.selectedAnswer]}),(0,I.jsxs)(`span`,{children:[`Correct: `,e.answer]})]},`${e.mode}-${t}`))}):null]}),(0,I.jsx)(`div`,{className:`mental-actions`,children:(0,I.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:Pe,disabled:U,children:U?`Saving Report...`:`Finish Today`})})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`game-bar`,children:[(0,I.jsxs)(`div`,{className:`timer-pill`,style:{background:`var(--light-blue)`,color:`var(--primary-blue)`},children:[M[Y].label,` | Q `,T+1,`/`,y(w)]}),(0,I.jsxs)(`div`,{className:`chip chip-ok`,children:[`Score `,j,`/`,Z+(k===null?0:1)]})]}),(0,I.jsx)(`div`,{className:`prog-wrap`,children:(0,I.jsx)(`div`,{className:`prog-bar`,style:{width:`${Z/X*100}%`}})}),(0,I.jsx)(`div`,{className:`session-stage`,children:Ie()}),(0,I.jsx)(`div`,{className:`feedback-pop`,children:G?(0,I.jsxs)(`div`,{className:`feedback-bubble ${G.type}`,children:[(0,I.jsx)(`span`,{className:`feedback-character`,children:(0,I.jsx)(`i`,{className:`fa-solid ${G.type===`correct`?`fa-star`:`fa-rotate-right`}`})}),G.text]}):null}),D?(0,I.jsx)(`div`,{className:`mcq-grid`,children:D.options.map((e,t)=>{let n=``;return k!==null&&(e===D.answer?n=`correct`:e===k&&(n=`wrong`)),(0,I.jsxs)(`button`,{className:`mcq-btn ${n}`,disabled:k!==null,onClick:()=>Ae(e),children:[(0,I.jsx)(`span`,{className:`mcq-key-hint`,children:t+1}),e]},e)})}):null,(0,I.jsxs)(`div`,{className:`mental-actions`,children:[!P&&!D?(0,I.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:Oe,children:`Start Session`}):null,k===null?null:(0,I.jsx)(`button`,{className:`g-btn g-btn-p`,onClick:Ne,disabled:U,children:U?`Saving...`:Z+1>=X?`Review Mistakes`:`Next Question`}),Y===`voice`&&D?(0,I.jsx)(`button`,{className:`g-btn g-btn-ghost`,onClick:()=>ue(D.numbers),children:`Repeat Voice`}):null]})]})})]})]})]})}export{z as default};