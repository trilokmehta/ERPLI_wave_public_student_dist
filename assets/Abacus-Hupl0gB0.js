import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{D as t,pt as n,w as r}from"./interactive-ibclPyx0.js";import{n as i,t as a}from"./LiveToolBanner-eEuGObf-.js";var o=e(n(),1),s=t(),c={rods:13,lowerBeads:4,centerRod:11},l=(e,t,n)=>Math.min(Math.max(Number(e),t),n),u=`abacus:change`;function d(){return{rods:l(localStorage.getItem(`abacusRods`)||c.rods,1,25),lowerBeads:l(localStorage.getItem(`abacusLowerBeads`)||c.lowerBeads,1,9),centerRod:l(localStorage.getItem(`abacusCenterRod`)||c.centerRod,1,25)}}var f=`
  .sabacus-page {
    --sabacus-primary: var(--primary-blue, #0056b3);
    --sabacus-dark: var(--dark-blue, #0a192f);
    --sabacus-accent: var(--gold, #ef4444);
    --sabacus-frame: var(--sabacus-dark);
    --sabacus-beam: color-mix(in srgb, var(--sabacus-dark) 58%, #ffffff);
    --sabacus-rod: color-mix(in srgb, var(--sabacus-primary) 18%, #cbd5e1);
    --sabacus-earth: color-mix(in srgb, var(--sabacus-primary) 5%, #ffffff);
    min-height: 100vh;
    padding-top: 78px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    background: transparent;
  }

  .sabacus-page .score-board {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    padding: 14px 16px;
    border-radius: 22px;
    box-shadow: 0 8px 32px rgba(0, 40, 90, 0.05);
    width: min(96%, 980px);
    margin-bottom: 12px;
    z-index: 100;
    display: grid;
    grid-template-columns: minmax(250px, 1fr) auto minmax(250px, 1fr);
    grid-template-areas: "settings value buttons";
    align-items: center;
    gap: 14px;
  }
  .sabacus-page .score-center {
    grid-area: value;
    min-width: 160px;
    text-align: center;
  }
  .sabacus-page .score-label {
    font-size: 0.72rem;
    color: #64748b;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .sabacus-page .score-value {
    font-size: clamp(2.1rem, 4vw, 3.2rem);
    font-weight: 800;
    color: var(--sabacus-primary);
    line-height: 1;
    margin: 2px 0 0;
  }
  .sabacus-page .controls {
    grid-area: buttons;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 6px;
  }
  .sabacus-page .control-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 6px;
  }
  .sabacus-page .structure-controls {
    grid-area: settings;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    margin: 0;
  }
  .sabacus-page .field {
    text-align: left;
  }
  .sabacus-page .field label {
    display: block;
    margin-bottom: 4px;
    color: #64748b;
    font-size: 0.64rem;
    font-weight: 800;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }
  .sabacus-page .field input {
    width: 100%;
    min-height: 34px;
    border: 2px solid color-mix(in srgb, var(--sabacus-primary) 22%, transparent);
    border-radius: 10px;
    padding: 6px 10px;
    color: var(--sabacus-primary);
    font-weight: 800;
    outline: none;
  }
  .sabacus-page .field input:focus {
    border-color: var(--sabacus-primary);
  }
  .sabacus-page .btn {
    min-width: 40px;
    min-height: 38px;
    padding: 7px 11px;
    border-radius: 12px;
    border: 2px solid var(--sabacus-primary);
    background: transparent;
    color: var(--sabacus-primary);
    font-size: 0.82rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .sabacus-page .btn:hover {
    background: color-mix(in srgb, var(--sabacus-primary) 10%, transparent);
    transform: translateY(-2px);
  }
  .sabacus-page .btn-icon {
    width: 40px;
    padding: 0;
    font-size: 1rem;
  }
  .sabacus-page .btn-wide {
    min-width: 86px;
  }
  .sabacus-page .btn-clear {
    background: var(--sabacus-primary);
    color: white;
    box-shadow: 0 4px 15px color-mix(in srgb, var(--sabacus-primary) 24%, transparent);
  }
  .sabacus-page .btn-clear:hover {
    background: var(--sabacus-dark);
    color: white;
    border-color: var(--sabacus-dark);
  }

  .sabacus-page .scroll-container {
    flex: 1;
    min-height: 0;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    max-height: none;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding: 12px 0 18px;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .sabacus-page .scroll-container::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
  .sabacus-page .zoom-slot {
    position: relative;
    flex: 0 0 auto;
  }
  .sabacus-page .zoom-layer {
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    transition: transform 0.2s ease-out;
    padding: 18px 40px 34px;
    transform-origin: center center;
  }

  .sabacus-page .abacus-frame {
    background-color: var(--sabacus-frame);
    padding: 15px;
    border-radius: 16px;
    display: flex;
    gap: 10px;
    position: relative;
    box-shadow: 0 15px 40px rgba(0, 20, 50, 0.3);
    border: 2px solid rgba(255,255,255,0.1);
  }
  .sabacus-page .abacus-frame::after {
    content: none !important;
  }
  .sabacus-page .abacus-frame .beam {
    position: absolute;
    left: 0;
    right: 0;
    top: 85px;
    height: 12px;
    background: var(--sabacus-beam);
    z-index: 5;
    box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  }

  .sabacus-page .rod {
    width: 42px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }
  .sabacus-page .rod::before {
    content: "";
    position: absolute;
    top: -10px;
    bottom: -10px;
    width: 6px;
    background: var(--sabacus-rod);
    border-radius: 3px;
    box-shadow: inset -2px 0 3px rgba(0,0,0,0.2);
  }

  .sabacus-page .bead {
    width: 40px;
    height: 26px;
    border-radius: 14px;
    z-index: 10;
    cursor: pointer;
    transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);
    box-shadow:
      inset 0 4px 6px rgba(255, 255, 255, 0.4),
      inset 0 -4px 6px rgba(0, 0, 0, 0.2),
      0 4px 8px rgba(0, 0, 0, 0.4);
  }

  .sabacus-page .bead.heaven {
    background: var(--sabacus-primary);
    margin-bottom: 70px;
  }
  .sabacus-page .bead.earth {
    background: var(--sabacus-earth);
    margin-top: 8px;
  }
  .sabacus-page .rod .bead.earth:first-of-type {
    margin-top: 68px;
  }

  .sabacus-page .bead.heaven.active {
    transform: translateY(35px);
  }
  .sabacus-page .bead.earth.active {
    transform: translateY(-20px);
  }

  .sabacus-page .rod-mark {
    position: absolute;
    top: 72px;
    width: 12px;
    height: 12px;
    background: var(--sabacus-accent);
    border-radius: 50%;
    z-index: 20;
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }
  .sabacus-page .rod-mark-center {
    width: 16px;
    height: 16px;
    top: 70px;
    background: var(--sabacus-accent);
    border: 2px solid #ffffff;
  }
  @media (max-width: 840px) {
    .sabacus-page {
      padding-top: 72px;
      overflow: visible;
      min-height: 100vh;
      height: auto;
    }
    .sabacus-page .score-board {
      grid-template-columns: 1fr auto;
      grid-template-areas:
        "value value"
        "settings buttons";
      gap: 10px;
      padding: 12px;
    }
    .sabacus-page .structure-controls {
      grid-area: settings;
    }
    .sabacus-page .score-center {
      grid-area: value;
    }
    .sabacus-page .controls {
      grid-area: buttons;
    }
  }
  @media (max-width: 560px) {
    .sabacus-page {
      padding-top: 66px;
    }
    .sabacus-page .score-board {
      width: calc(100% - 16px);
      grid-template-columns: 1fr;
      grid-template-areas:
        "value"
        "settings"
        "buttons";
      border-radius: 18px;
    }
    .sabacus-page .score-label {
      font-size: 0.64rem;
    }
    .sabacus-page .score-value {
      font-size: 2rem;
    }
    .sabacus-page .structure-controls {
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 6px;
    }
    .sabacus-page .field label {
      font-size: 0.58rem;
      white-space: nowrap;
    }
    .sabacus-page .field input {
      min-height: 32px;
      padding: 5px 8px;
    }
    .sabacus-page .controls,
    .sabacus-page .control-group {
      justify-content: center;
    }
    .sabacus-page .btn {
      min-height: 34px;
      min-width: 36px;
      padding: 6px 9px;
      font-size: 0.72rem;
    }
    .sabacus-page .btn-icon {
      width: 36px;
    }
    .sabacus-page .scroll-container {
      max-height: calc(100vh - 250px);
      overflow: auto;
      display: block;
      text-align: center;
      padding-top: 8px;
    }
    .sabacus-page .zoom-slot {
      display: inline-block;
    }
    .sabacus-page .zoom-layer {
      padding: 22px 26px;
    }
  }
`;function p(){let e=(0,o.useRef)(null),t=(0,o.useRef)(null),n=(0,o.useRef)(null),c=(0,o.useRef)(null),p=(0,o.useRef)(null),m=(0,o.useRef)({scale:null,rotated:!1,x:0,y:0}),h=(0,o.useRef)(!1),g=(0,o.useRef)(null),[,_]=(0,o.useState)(0),[v,y]=(0,o.useState)(d),b=(0,o.useMemo)(()=>({rods:l(v.rods,1,25),lowerBeads:l(v.lowerBeads,1,9),centerRod:l(v.centerRod,1,l(v.rods,1,25))}),[v]),x=()=>_(e=>e+1),S=(0,o.useCallback)(()=>window.__abacus?.readState()??null,[]),C=(0,o.useCallback)(e=>window.__abacus?.applyState(e),[]),w=(0,o.useCallback)(e=>{h.current=e},[]),T=(e,t)=>{y(n=>{let r={...n,[e]:Number(t)},i=l(r.rods,1,25);return{rods:i,lowerBeads:l(r.lowerBeads,1,9),centerRod:l(r.centerRod,1,i)}})};return(0,o.useEffect)(()=>{m.current.scale=parseFloat(localStorage.getItem(`abacusScale`))||null,m.current.rotated=localStorage.getItem(`abacusRotated`)===`true`,m.current.x=parseFloat(localStorage.getItem(`abacusX`))||0,m.current.y=parseFloat(localStorage.getItem(`abacusY`))||0,localStorage.setItem(`abacusRods`,b.rods),localStorage.setItem(`abacusLowerBeads`,b.lowerBeads),localStorage.setItem(`abacusCenterRod`,b.centerRod);let r=e.current;if(!r)return;r.querySelectorAll(`.rod`).forEach(e=>e.remove());for(let e=0;e<b.rods;e++){let t=document.createElement(`div`);if(t.className=`rod`,(e-(b.centerRod-1))%3==0){let n=document.createElement(`div`);n.className=`rod-mark`,e+1===b.centerRod&&n.classList.add(`rod-mark-center`),t.appendChild(n)}let n=document.createElement(`div`);n.className=`bead heaven`,n.onclick=()=>{h.current||(n.classList.toggle(`active`),s())},t.appendChild(n);for(let e=0;e<b.lowerBeads;e++){let n=document.createElement(`div`);n.className=`bead earth`,n.onclick=()=>i(t,e),t.appendChild(n)}r.appendChild(t)}function i(e,t){if(h.current)return;let n=e.querySelectorAll(`.bead.earth`),r=n[t].classList.contains(`active`);n.forEach((e,n)=>{r?n>=t&&e.classList.remove(`active`):n<=t&&e.classList.add(`active`)}),s()}function a(){return Array.from(r.querySelectorAll(`.rod`)).map(e=>{let t=e.querySelector(`.heaven`).classList.contains(`active`)?b.lowerBeads+1:0;return t+=e.querySelectorAll(`.earth.active`).length,t})}function o(e){r.querySelectorAll(`.rod`).forEach((t,n)=>{let r=Number(e?.[n])||0,i=r>=b.lowerBeads+1,a=i?r-(b.lowerBeads+1):r;t.querySelector(`.heaven`).classList.toggle(`active`,i),t.querySelectorAll(`.earth`).forEach((e,t)=>{e.classList.toggle(`active`,t<a)})}),s(!0)}function s(e){let n=r.querySelectorAll(`.rod`),i=Array.from(n).map(e=>{let t=e.querySelector(`.heaven`).classList.contains(`active`)?b.lowerBeads+1:0;return t+=e.querySelectorAll(`.earth.active`).length,t}),a=-1;for(let e=i.length-1;e>=0;e--)if(i[e]>0){a=e;break}let o=-1;for(let e=0;e<i.length;e++)if(i[e]>0){o=e;break}let s=b.centerRod-1,c=`0`;if(a!==-1){let e=Math.min(o,s),t=i.slice(e,s+1).join(``).replace(/^0+(?=\d)/,``),n=i.slice(s+1,a+1).join(``).replace(/0+$/,``);c=t||`0`,n&&(c+=`.${n}`)}t.current&&(t.current.innerText=c),e||window.dispatchEvent(new CustomEvent(u))}function l(){let t=e.current,n=p.current;if(!t||!n)return;let r=m.current.rotated?t.offsetHeight:t.offsetWidth,i=n.clientWidth-40;m.current.scale=i/r,m.current.scale>1.5&&(m.current.scale=1.5),m.current.x=0,m.current.y=0,f(),setTimeout(d,100)}function d(){let e=p.current;e&&(e.scrollLeft=(e.scrollWidth-e.clientWidth)/2)}function f(){let e=c.current,t=n.current;if(!e)return;Number.isFinite(m.current.scale)||(m.current.scale=1);let r=m.current.rotated?`rotate(90deg)`:`rotate(0deg)`;if(e.style.transform=`translate(-50%, -50%) translate(${m.current.x}px, ${m.current.y}px) ${r} scale(${m.current.scale})`,t){let n=e.offsetWidth,r=e.offsetHeight,i=(m.current.rotated?r:n)*m.current.scale,a=(m.current.rotated?n:r)*m.current.scale;t.style.width=`${i}px`,t.style.height=`${a}px`}localStorage.setItem(`abacusScale`,m.current.scale),localStorage.setItem(`abacusRotated`,m.current.rotated),localStorage.setItem(`abacusX`,m.current.x),localStorage.setItem(`abacusY`,m.current.y);let i=p.current;(i&&m.current.rotated||i)&&(i.style.minHeight=`auto`)}m.current.scale===null?l():f(),setTimeout(d,150),g.current&&=(o(g.current),null),window.__abacus={readState(){return{v:a(),r:b.rods,lb:b.lowerBeads,c:b.centerRod}},applyState(e){if(e){if(Number(e.r)===b.rods&&Number(e.lb)===b.lowerBeads&&Number(e.c)===b.centerRod){o(e.v);return}g.current=e.v,y({rods:Number(e.r),lowerBeads:Number(e.lb),centerRod:Number(e.c)})}},rotateAbacus(){m.current.rotated=!m.current.rotated,f(),x()},changeScale(e){m.current.scale=Math.min(Math.max(.2,m.current.scale+e),3),f(),x()},moveAbacus(e,t){m.current.x+=e,m.current.y+=t,f(),x()},fitToScreen:()=>{l(),x()},resetBeads(){r.querySelectorAll(`.bead`).forEach(e=>e.classList.remove(`active`)),s(),x()}}},[b]),(0,s.jsxs)(`div`,{className:`sabacus-page`,children:[(0,s.jsx)(`style`,{children:f}),(0,s.jsx)(r,{}),(0,s.jsx)(a,{tool:i,changeEvent:u,serialize:S,apply:C,onReadOnlyChange:w}),(0,s.jsxs)(`div`,{className:`score-board`,children:[(0,s.jsxs)(`div`,{className:`score-center`,children:[(0,s.jsx)(`div`,{className:`score-label`,children:`Total Value`}),(0,s.jsx)(`div`,{className:`score-value`,ref:t,children:`0`})]}),(0,s.jsxs)(`div`,{className:`structure-controls`,children:[(0,s.jsxs)(`div`,{className:`field`,children:[(0,s.jsx)(`label`,{htmlFor:`abacus-rods`,children:`Rods`}),(0,s.jsx)(`input`,{id:`abacus-rods`,type:`number`,min:`1`,max:`25`,value:b.rods,onChange:e=>T(`rods`,e.target.value)})]}),(0,s.jsxs)(`div`,{className:`field`,children:[(0,s.jsx)(`label`,{htmlFor:`abacus-beads`,children:`Lower beads`}),(0,s.jsx)(`input`,{id:`abacus-beads`,type:`number`,min:`1`,max:`9`,value:b.lowerBeads,onChange:e=>T(`lowerBeads`,e.target.value)})]}),(0,s.jsxs)(`div`,{className:`field`,children:[(0,s.jsx)(`label`,{htmlFor:`abacus-center`,children:`Center rod`}),(0,s.jsx)(`input`,{id:`abacus-center`,type:`number`,min:`1`,max:b.rods,value:b.centerRod,onChange:e=>T(`centerRod`,e.target.value)})]})]}),(0,s.jsxs)(`div`,{className:`controls`,children:[(0,s.jsxs)(`div`,{className:`control-group`,children:[(0,s.jsx)(`button`,{className:`btn btn-icon`,title:`Rotate 90 degrees`,"aria-label":`Rotate 90 degrees`,onClick:()=>window.__abacus?.rotateAbacus(),children:`↻`}),(0,s.jsx)(`button`,{className:`btn btn-icon`,title:`Increase size`,"aria-label":`Increase size`,onClick:()=>window.__abacus?.changeScale(.1),children:`+`}),(0,s.jsx)(`button`,{className:`btn btn-icon`,title:`Decrease size`,"aria-label":`Decrease size`,onClick:()=>window.__abacus?.changeScale(-.1),children:`-`})]}),(0,s.jsxs)(`div`,{className:`control-group`,children:[(0,s.jsx)(`button`,{className:`btn btn-icon`,title:`Move up`,"aria-label":`Move up`,onClick:()=>window.__abacus?.moveAbacus(0,-30),children:`↑`}),(0,s.jsx)(`button`,{className:`btn btn-icon`,title:`Move down`,"aria-label":`Move down`,onClick:()=>window.__abacus?.moveAbacus(0,30),children:`↓`}),(0,s.jsx)(`button`,{className:`btn btn-clear btn-wide`,title:`Fit screen`,onClick:()=>window.__abacus?.fitToScreen(),children:`Fit`})]}),(0,s.jsx)(`button`,{className:`btn btn-wide`,style:{background:`#fee2e2`,color:`#e11d48`,borderColor:`#fecdd3`},title:`Reset beads`,onClick:()=>window.__abacus?.resetBeads(),children:`Reset`})]})]}),(0,s.jsx)(`div`,{className:`scroll-container`,ref:p,children:(0,s.jsx)(`div`,{className:`zoom-slot`,ref:n,children:(0,s.jsx)(`div`,{className:`zoom-layer`,ref:c,children:(0,s.jsx)(`div`,{className:`abacus-frame`,ref:e,children:(0,s.jsx)(`div`,{className:`beam`})})})})})]})}export{u as ABACUS_CHANGE_EVENT,p as default};