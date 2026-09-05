import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{O as t,at as n,ht as r,k as i}from"./interactive-D3kYofL4.js";var a=e(r(),1),o=`abacus`,s=`rubiks_cube`;function c(e){return`live-tool:${e}`}async function l({instituteId:e,tool:t}){let{data:r,error:i}=await n.from(`live_tool_sessions`).select(`id, channel_key, tool, host_user_id, started_at`).eq(`institute_id`,e).eq(`tool`,t).eq(`status`,`live`).maybeSingle();return{data:r||null,error:i}}function u(e,t={}){let r=n.channel(c(e),{config:{broadcast:{self:!1},presence:{key:t.userId||``}}}),i=(e,t)=>{t&&r.on(`broadcast`,{event:e},({payload:e})=>t(e))};return i(`s`,t.onState),i(`h`,t.onHello),i(`d`,t.onDriver),i(`e`,t.onEnd),t.onPresence&&r.on(`presence`,{event:`sync`},()=>{let e=r.presenceState(),n=Object.values(e).map(e=>e[0]).filter(Boolean);t.onPresence(n)}),r.subscribe(e=>{e===`SUBSCRIBED`&&t.onSubscribed?.(r)}),{send(e,t){return r.send({type:`broadcast`,event:e,payload:t})},track(e){return r.track(e)},close(){n.removeChannel(r)}}}var d=100;function f({session:e,userId:t,displayName:n,isHost:r=!1,serialize:i,apply:o,changeEvent:s}){let[c,l]=(0,a.useState)(!1),[f,p]=(0,a.useState)(null),[m,h]=(0,a.useState)([]),g=e?.channel_key||null,_=(0,a.useRef)(null),v=(0,a.useRef)(null),y=(0,a.useRef)(0),b=(0,a.useRef)(!1),x=(0,a.useRef)(null),S=(0,a.useRef)(i),C=(0,a.useRef)(o),w=(0,a.useRef)(!1),T=(0,a.useRef)(null),E=f!=null&&f===t,D=(0,a.useCallback)(()=>{let e=_.current;e&&(y.current=Date.now(),e.send(`s`,{s:S.current(),d:T.current}))},[]),O=(0,a.useCallback)(()=>{if(!w.current||!_.current)return;let e=Date.now()-y.current;if(e>=d){D();return}v.current||=setTimeout(()=>{v.current=null,w.current&&D()},d-e)},[D]),k=(0,a.useCallback)(e=>{if(e){b.current=!0;try{C.current(e)}finally{setTimeout(()=>{b.current=!1},0)}}},[]),A=(0,a.useRef)(null),j=(0,a.useCallback)(()=>{!g||_.current||(x.current=S.current(),_.current=u(g,{userId:t,onState:e=>{e?.d!=null&&p(e.d),w.current||k(e?.s)},onDriver:e=>{p(e?.d??null)},onHello:()=>{w.current&&D()},onEnd:()=>{A.current?.({restore:!0})},onPresence:e=>h(e),onSubscribed:()=>{l(!0),_.current?.track({u:t,n,host:r}),r?(p(t),_.current?.send(`d`,{d:t,n}),D()):_.current?.send(`h`,{u:t,n})}}))},[g,r,t,n,k,D]),M=(0,a.useCallback)(({restore:e=!0}={})=>{v.current&&=(clearTimeout(v.current),null),_.current?.close(),_.current=null,l(!1),p(null),h([]),e&&x.current&&(k(x.current),x.current=null)},[k]);(0,a.useEffect)(()=>{S.current=i,C.current=o,w.current=E,T.current=f,A.current=M});let N=(0,a.useCallback)((e,t)=>{!r||!_.current||(p(e),_.current.send(`d`,{d:e,n:t||``}),y.current=Date.now(),_.current.send(`s`,{s:S.current(),d:e}))},[r]),P=(0,a.useCallback)(()=>{N(t,n)},[N,t,n]),F=(0,a.useCallback)(()=>{_.current?.send(`e`,{})},[]);return(0,a.useEffect)(()=>{if(!s)return;let e=()=>{b.current||O()};return window.addEventListener(s,e),()=>window.removeEventListener(s,e)},[s,O]),(0,a.useEffect)(()=>()=>{v.current&&clearTimeout(v.current),_.current?.close(),_.current=null},[]),(0,a.useMemo)(()=>({connected:c,driverId:f,isDriver:E,readOnly:c&&!E,viewers:m,setViewers:h,connect:j,disconnect:M,giveControlTo:N,takeControlBack:P,announceEnd:F}),[c,f,E,m,j,M,N,P,F])}var p=i();function m({tool:e,serialize:n,apply:r,changeEvent:i,onReadOnlyChange:o}){let{user:s,institute:c,profile:u}=t(),[d,m]=(0,a.useState)(null),g=c?.id||null,_=u?.full_name||u?.name||`Student`;(0,a.useEffect)(()=>{if(!g)return;let t=!0,n=async()=>{let{data:n}=await l({instituteId:g,tool:e});t&&m(n)};return n(),window.addEventListener(`focus`,n),()=>{t=!1,window.removeEventListener(`focus`,n)}},[g,e]);let v=f({session:d,userId:s?.id||null,displayName:_,isHost:!1,serialize:n,apply:r,changeEvent:i}),{connected:y,isDriver:b,readOnly:x,disconnect:S}=v;return(0,a.useEffect)(()=>{o?.(x)},[x,o]),(0,a.useEffect)(()=>{!d&&y&&S({restore:!0})},[d,y,S]),d?(0,p.jsxs)(`div`,{className:`live-tool-bar ${y?`is-connected`:``}`,children:[(0,p.jsx)(`style`,{children:h}),(0,p.jsxs)(`span`,{className:`live-tool-badge ${y?`is-connected`:``}`,children:[(0,p.jsx)(`i`,{className:`live-tool-dot`}),y?`Live`:`Class`]}),(0,p.jsx)(`span`,{className:`live-tool-title`,title:b?`The whole class can see your board`:`Your own board is saved and comes back when you leave`,children:y?b?`You have control — the class sees your board`:`Following your teacher`:`Your teacher is live on the ${e===`abacus`?`abacus`:`cube`}`}),y?(0,p.jsx)(`button`,{type:`button`,className:`live-tool-btn is-ghost`,onClick:()=>S({restore:!0}),children:`Leave`}):(0,p.jsx)(`button`,{type:`button`,className:`live-tool-btn`,onClick:v.connect,children:`Join`})]}):null}var h=`
.live-tool-bar {
  --lt-primary: var(--sabacus-primary, var(--primary-blue, #0056b3));
  --lt-ink: var(--sabacus-dark, var(--dark-blue, #0f172a));
  --lt-live: #16a34a;

  width: min(96%, 980px);
  margin: 0 auto 8px;
  padding: 7px 10px 7px 12px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  min-width: 0;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px rgba(0, 40, 90, 0.05);
  color: var(--lt-ink);
  z-index: 100;
}

.live-tool-badge {
  flex: none;
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 12px 5px 10px;
  border-radius: 999px;
  background: color-mix(in srgb, var(--lt-primary) 10%, #ffffff);
  color: var(--lt-primary);
  border: 1px solid color-mix(in srgb, var(--lt-primary) 22%, transparent);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.09em;
  text-transform: uppercase;
}
.live-tool-badge.is-connected {
  background: color-mix(in srgb, var(--lt-live) 12%, #ffffff);
  color: #15803d;
  border-color: color-mix(in srgb, var(--lt-live) 30%, transparent);
}
.live-tool-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: currentColor;
  flex: none;
}
.live-tool-badge.is-connected .live-tool-dot {
  background: #ef4444;
  animation: live-tool-pulse 1.8s ease-out infinite;
}

.live-tool-title {
  flex: 1 1 auto;
  min-width: 0;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.live-tool-btn {
  flex: none;
  padding: 7px 20px;
  border: none;
  border-radius: 999px;
  background: var(--lt-primary);
  color: #fff;
  font-weight: 700;
  font-size: 0.85rem;
  cursor: pointer;
  box-shadow: 0 4px 14px color-mix(in srgb, var(--lt-primary) 30%, transparent);
  transition: transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease;
}
.live-tool-btn:hover {
  transform: translateY(-1px);
  filter: brightness(1.06);
  box-shadow: 0 7px 20px color-mix(in srgb, var(--lt-primary) 38%, transparent);
}
.live-tool-btn.is-ghost {
  background: transparent;
  color: color-mix(in srgb, var(--lt-ink) 70%, #ffffff);
  border: 1.5px solid color-mix(in srgb, var(--lt-ink) 20%, transparent);
  box-shadow: none;
}
.live-tool-btn.is-ghost:hover {
  background: color-mix(in srgb, var(--lt-ink) 5%, transparent);
  filter: none;
}

@keyframes live-tool-pulse {
  0%   { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.55); }
  70%  { box-shadow: 0 0 0 7px rgba(239, 68, 68, 0); }
  100% { box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); }
}

@media (max-width: 640px) {
  .live-tool-bar { border-radius: 18px; padding: 12px; }
  .live-tool-btn { width: 100%; }
}

@media (prefers-reduced-motion: reduce) {
  .live-tool-badge.is-connected .live-tool-dot { animation: none; }
  .live-tool-btn { transition: none; }
}
`;export{o as n,s as r,m as t};