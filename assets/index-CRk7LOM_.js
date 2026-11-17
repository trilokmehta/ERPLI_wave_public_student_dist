const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/App-DsdYSWlL.js","assets/rolldown-runtime-S-ySWqyJ.js","assets/interactive-DBksK-Cu.js","assets/vendor-CB0pmNM0.js","assets/react-dom-lTgyI7Ey.js","assets/ChessPathway-Bn4C52xu.js","assets/KidResultCard-BSi-m54c.js","assets/PracticeSwitch-C_euZOpR.js","assets/mcq-DP6g8Mik.js","assets/App-85Ih68K8.css","assets/Practice-C-5mNqfg.js","assets/VedicMaster-DwfsbsJv.js","assets/vedicSyllabus-Coq9324w.js","assets/PracticeSession-CxM8ksd6.js","assets/Exam-BCrhd5xc.js","assets/contentLevels-CeqNFqH5.js","assets/LiveClasses-iVfkgNRy.js","assets/RecordedLecture-MyMAVOnh.js","assets/Classroom-DrgSj6U4.js","assets/Syllabus-MBNdQIUL.js","assets/EBook-Dr0TO-ff.js","assets/Profile-Csvuvpnr.js","assets/Achievement-DhaZHOXg.js","assets/Basic-B1yrcMc_.js","assets/levels-0qtTUwOg.js","assets/Abacus-DNj-oeEh.js","assets/LiveToolBanner-Ceu4hzxP.js","assets/VedicTrickPractice-n2xbsQvI.js","assets/RubiksCube-D7g8Xy_V.js","assets/three-BKBIvYOE.js","assets/GameZone-BMKaKMUB.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{$ as t,G as n,Ht as r,J as i,Jt as a,K as o,Kt as s,Q as c,Rt as l,St as u,Tt as d,Ut as f,Vt as p,W as m,Wt as h,X as g,Xt as _,Yt as v,Z as y,Zt as b,_t as x,b as S,bt as C,en as w,et as T,f as E,g as D,gt as O,it as ee,k as te,nt as k,ot as A,p as j,rt as M,st as N,tn as P,tt as F,u as ne,v as re,vt as ie,x as I,xt as L,y as R}from"./interactive-DBksK-Cu.js";import{n as ae,t as oe}from"./react-dom-lTgyI7Ey.js";import{Ct as z,Et as B,R as se,S as ce,_t as le}from"./vendor-CB0pmNM0.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var V=e(P(),1),H=oe();function ue(e){return`${e}-${Math.random().toString(36).slice(2,10)}`}function U(e,t){try{let n=r.channel(ue(`batch-announcements-${e}`)).on(`postgres_changes`,{event:`INSERT`,schema:`public`,table:`batch_announcements`,filter:`batch_id=eq.${e}`},e=>t(e.new)).subscribe();return()=>r.removeChannel(n)}catch(e){return console.warn(`batch_announcements:subscribe:failed`,e.message),()=>{}}}var de=`announcements_seen_at_`;function fe(e){try{return Number(localStorage.getItem(`${de}${e}`))||0}catch{return 0}}function pe(e,t){try{localStorage.setItem(`${de}${e}`,String(t))}catch{}}function me(){let{institute:e,membership:n}=t(),i=e?.id??null,a=n?.id??null,[o,s]=(0,V.useState)([]),[c,l]=(0,V.useState)(!0),[u,d]=(0,V.useState)(0),f=(0,V.useCallback)(e=>{if(!a)return;let t=fe(a);d(e.filter(e=>new Date(e.created_at).getTime()>t).length)},[a]);return(0,V.useEffect)(()=>{if(!i||!a){s([]),d(0),l(!1);return}let e=!0,t=[];async function n(){l(!0);let{data:n}=await ie(i,a);if(!e)return;let o=[...new Set(n.map(e=>e.batch_id).filter(Boolean))],c=new Map(n.map(e=>[e.batch_id,e.batches?.name||`Batch`]));if(!o.length){s([]),d(0),l(!1);return}let{data:u,error:p}=await r.from(`batch_announcements`).select(`*`).in(`batch_id`,o).order(`created_at`,{ascending:!1}).limit(30);if(!e)return;if(p){console.warn(`announcements_feed:list:failed`,p.message),s([]),d(0),l(!1);return}let m=(u??[]).map(e=>({...e,batch_name:c.get(e.batch_id)}));s(m),f(m),l(!1),o.forEach(n=>{t.push(U(n,t=>{if(!e)return;let r={...t,batch_name:c.get(n)};s(e=>{if(e.some(e=>e.id===r.id))return e;let t=[r,...e].slice(0,30);return f(t),t})}))})}return n(),()=>{e=!1,t.forEach(e=>e())}},[i,a,f]),{announcements:o,loading:c,unreadCount:u,markSeen:(0,V.useCallback)(()=>{if(!a)return;let e=o.reduce((e,t)=>Math.max(e,new Date(t.created_at).getTime()||0),0);pe(a,Math.max(Date.now(),e,fe(a))),d(0)},[a,o])}}var he=[{prefix:`/vedic-math`,subject:`vedic`},{prefix:`/RubiksCube`,subject:`rubiks`},{prefix:`/chess`,subject:`chess`},{prefix:`/interactive-abacus`,subject:`abacus`},{prefix:`/abacus`,subject:`abacus`}];function W(e){return he.find(t=>e===t.prefix||e.startsWith(`${t.prefix}/`)||e.startsWith(`${t.prefix}-`))?.subject??null}function G(e,t){return!e||!t?!0:t.has(e)}var ge=[{prefix:`/vedic-math`,feature:`vedic_math`},{prefix:`/interactive-abacus`,feature:`interactive_abacus`},{prefix:`/iabacus`,feature:`interactive_abacus`},{prefix:`/practice`,feature:`practice_playground`,exact:!0}];function _e(e){return ge.find(t=>e===t.prefix||!t.exact&&(e.startsWith(`${t.prefix}/`)||e.startsWith(`${t.prefix}-`)))?.feature??null}function ve(e,t){return e?!!t?.has(e):!0}function ye(e,t,n){return G(W(e),t)&&ve(_e(e),n)}function be(e,t,n){return e.filter(e=>ye(e.path,t,n))}var xe=[{label:`Interactive Abacus`,path:`/interactive-abacus`,icon:`fa-calculator`},{label:`Digital Abacus`,path:`/abacus`,icon:`fa-desktop`},{label:`Rubik's Cube`,path:`/RubiksCube`,icon:`fa-cube`},{label:`Game Zone`,path:`/mental-flash-games`,icon:`fa-gamepad`,also:[`/chess/fun`]}],Se=[{label:`Home`,path:`/`,icon:`fa-house`,subject:`abacus`,exact:!0},{label:`Home`,path:`/chess`,icon:`fa-house`,subject:`chess`,exact:!0},{label:`Daily Practice`,path:`/practice-session`,icon:`fa-calendar-check`,subject:`abacus`,pair:`Daily Practice`},{label:`Daily Practice`,path:`/chess/practice`,icon:`fa-calendar-check`,subject:`chess`,pair:`Daily Practice`},{label:`Vedic Daily Practice`,path:`/vedic-math/daily`,icon:`fa-wand-magic-sparkles`},{label:`Live Classes`,path:`/live-classes`,icon:`fa-video`},{label:`Chat & Notices`,path:`/classroom`,icon:`fa-comments`},{label:`Recordings`,path:`/recorded-lectures`,icon:`fa-circle-play`},{label:`E-Books`,path:`/e-book`,icon:`fa-book-open`},{label:`Exams`,path:`/exam`,icon:`fa-file-lines`}],Ce=[{label:`Learn Chess`,path:`/chess/learn`,icon:`fa-chess-knight`,subject:`chess`,also:[`/chess/openings`,`/chess/games`]},{label:`Puzzles`,path:`/chess/puzzles`,icon:`fa-puzzle-piece`,subject:`chess`},{label:`Play Chess`,path:`/chess/play`,icon:`fa-chess`,subject:`chess`}],K={abacus:`Abacus`,chess:`Chess`},we=[{id:`abacus`,label:`Abacus`,path:`/practice-session`,icon:`fa-calculator`},{id:`vedic`,label:`Vedic`,path:`/vedic-math/daily`,icon:`fa-wand-magic-sparkles`},{id:`chess`,label:`Chess`,path:`/chess/practice`,icon:`fa-chess-knight`}],Te=we.map(e=>e.path);function Ee(e,t){let{primary:n}=ke(e,t),r=new Set(n.map(e=>e.path));return we.filter(e=>r.has(e.path))}function De(e){return{abacus:G(`abacus`,e),chess:G(`chess`,e)}}function Oe(e,t){return e.subject===`chess`?t.chess:e.subject===`abacus`?t.abacus||!t.chess:!0}function ke(e,t){let n=De(e),r=n.abacus||!n.chess,i=r&&n.chess,a=e=>!i||!e.pair?e.label:`${K[e.subject]} ${e.pair}`;return{primary:Se.filter(e=>Oe(e,n)).filter(e=>!(i&&e.path===`/chess`)).filter(n=>ye(n.path,e,t)||n.subject===`chess`).map(e=>({...e,label:a(e)})),tools:[...be(xe.filter(e=>r||n.chess&&e.path===`/mental-flash-games`),e,t),...n.chess?Ce:[],...r?[{label:`Practice`,path:`/practice`,icon:`fa-dumbbell`,subject:`abacus`}]:[]]}}function Ae(e,t){let{primary:n,tools:r}=ke(e,t),i=n.filter(e=>Te.includes(e.path));if(i.length>1){let e=i[0],t={...e,label:`Daily Practice`,also:i.filter(t=>t!==e).map(e=>e.path)},a=n.indexOf(e),o=n.filter(e=>!i.includes(e));return o.splice(a,0,t),{primary:o,tools:r}}return{primary:n,tools:r}}function je(e,t){return t===e.path?!0:e.exact?!1:e.also?.some(e=>t===e||t.startsWith(`${e}/`))?!0:t.startsWith(`${e.path}/`)}var q=T();function Me({toggleSidebar:e,hideSidebarToggle:n=!1}){let r=b(),{profile:a,institute:o,membership:s,signOut:c}=t(),[l,u]=(0,V.useState)(!1),[d,f]=(0,V.useState)(!1),[p,m]=(0,V.useState)(!1),[h,g]=(0,V.useState)(!1),_=(0,V.useRef)(null),v=(0,V.useRef)(null),y=(0,V.useRef)(null),{activeSubjects:x}=i(),S=De(x).chess,{announcements:C,loading:w,unreadCount:T,markSeen:E}=me();(0,V.useEffect)(()=>{if(!d&&!p&&!h)return;function e(e){d&&_.current&&!_.current.contains(e.target)&&f(!1),p&&v.current&&!v.current.contains(e.target)&&m(!1),h&&y.current&&!y.current.contains(e.target)&&g(!1)}return document.addEventListener(`mousedown`,e),document.addEventListener(`touchstart`,e),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`touchstart`,e)}},[d,p,h]);function D(){g(e=>{let t=!e;return t&&E(),t})}let O=Array.isArray(o?.institute_branding)?o?.institute_branding[0]?.logo_url:o?.institute_branding?.logo_url,ee=o?.name||`Student Portal`,te=a?.full_name||`Student`,k=a?.current_level===999?`All levels`:`Level ${a?.current_level??0}`,A=Ne(s?.id),j=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(e=>{console.error(`Error attempting to enable fullscreen: ${e.message}`)})};(0,V.useEffect)(()=>{let e=()=>{u(!!document.fullscreenElement)};return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]);async function M(){await c(),f(!1),r(`/login`)}return(0,q.jsxs)(`nav`,{className:`navbar`,children:[(0,q.jsxs)(`div`,{className:`nav-left`,children:[n?null:(0,q.jsx)(`button`,{className:`hamburger nav-hamburger-left`,onClick:e,"aria-label":`Toggle Sidebar`,children:(0,q.jsx)(`i`,{className:`fa-solid fa-bars`})}),(0,q.jsxs)(`div`,{className:`logo`,onClick:()=>r(`/`),children:[(0,q.jsx)(`span`,{className:`nav-brand-logo-wrapper`,children:O&&(0,q.jsx)(`img`,{src:O,alt:ee,className:`nav-brand-logo`})}),(0,q.jsx)(`span`,{children:ee})]})]}),(0,q.jsxs)(`div`,{className:`nav-actions`,children:[(0,q.jsxs)(`button`,{className:`nav-streak-pill`,onClick:()=>r(`/`),title:`Daily login streak`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-fire`}),(0,q.jsx)(`span`,{children:A})]}),(0,q.jsxs)(`div`,{className:`nav-notif`,ref:y,children:[(0,q.jsxs)(`button`,{className:`nav-notif-button`,onClick:D,"aria-label":`Open announcements`,"aria-expanded":h,title:`Announcements`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-bell`}),T>0?(0,q.jsx)(`span`,{className:`nav-notif-dot`}):null]}),h?(0,q.jsxs)(`div`,{className:`nav-notif-menu`,children:[(0,q.jsx)(`div`,{className:`nav-notif-header`,children:`Announcements`}),(0,q.jsx)(`div`,{className:`nav-notif-list`,children:w?(0,q.jsx)(`div`,{className:`nav-notif-empty`,children:`Loading…`}):C.length===0?(0,q.jsx)(`div`,{className:`nav-notif-empty`,children:`No announcements yet.`}):C.map(e=>(0,q.jsxs)(`div`,{className:`nav-notif-item`,children:[e.title?(0,q.jsx)(`strong`,{children:e.title}):null,(0,q.jsx)(`p`,{children:e.message}),(0,q.jsxs)(`span`,{children:[e.batch_name,` · `,new Date(e.created_at).toLocaleString()]})]},e.id))}),(0,q.jsx)(`button`,{className:`nav-notif-viewall`,onClick:()=>{g(!1),r(`/classroom`)},children:`View in Classroom`})]}):null]}),(0,q.jsxs)(`div`,{className:`nav-profile`,ref:_,children:[(0,q.jsxs)(`button`,{className:`nav-profile-button`,onClick:()=>f(e=>!e),"aria-label":`Open profile menu`,"aria-expanded":d,children:[(0,q.jsx)(`span`,{className:`nav-profile-avatar`,children:(0,q.jsx)(`i`,{className:`fa-solid fa-user`})}),(0,q.jsxs)(`span`,{className:`nav-profile-text`,children:[(0,q.jsx)(`strong`,{children:te}),(0,q.jsx)(`span`,{children:k})]}),(0,q.jsx)(`i`,{className:`fa-solid fa-chevron-${d?`up`:`down`} nav-profile-caret`})]}),d?(0,q.jsxs)(`div`,{className:`nav-profile-menu`,children:[(0,q.jsxs)(`button`,{onClick:()=>{f(!1),r(`/profile`)},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-user`}),`Profile`]}),(0,q.jsxs)(`button`,{onClick:()=>{f(!1),r(`/achievement`)},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-medal`}),`Achievements`]}),S?(0,q.jsxs)(`button`,{onClick:()=>{f(!1),r(`/chess/certificates`)},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-award`}),`Certificates`]}):null,(0,q.jsxs)(`button`,{onClick:M,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),`Log Out`]})]}):null]}),(0,q.jsx)(`button`,{className:`fullscreen-toggle`,onClick:j,title:l?`Exit Fullscreen`:`Enter Fullscreen`,children:(0,q.jsx)(`i`,{className:`fa-solid ${l?`fa-compress`:`fa-expand`}`})})]}),(0,q.jsxs)(`div`,{className:`nav-more`,ref:v,children:[(0,q.jsx)(`button`,{className:`nav-more-button`,onClick:()=>m(e=>!e),"aria-label":`Open menu`,"aria-expanded":p,children:(0,q.jsx)(`i`,{className:`fa-solid fa-ellipsis-vertical`})}),p?(0,q.jsxs)(`div`,{className:`nav-more-menu`,children:[(0,q.jsxs)(`div`,{className:`nav-more-profile`,children:[(0,q.jsx)(`span`,{className:`nav-profile-avatar`,children:(0,q.jsx)(`i`,{className:`fa-solid fa-user`})}),(0,q.jsxs)(`div`,{className:`nav-more-profile-text`,children:[(0,q.jsx)(`strong`,{children:te}),(0,q.jsx)(`span`,{children:k})]})]}),(0,q.jsxs)(`button`,{onClick:()=>r(`/`),children:[(0,q.jsx)(`i`,{className:`fa-solid fa-fire`}),`Login streak`,(0,q.jsx)(`span`,{className:`nav-more-badge`,children:A})]}),(0,q.jsxs)(`button`,{onClick:()=>{m(!1),E(),r(`/classroom`)},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-bell`}),`Announcements`,T>0?(0,q.jsx)(`span`,{className:`nav-more-badge`,children:T}):null]}),(0,q.jsxs)(`button`,{onClick:()=>{j(),m(!1)},children:[(0,q.jsx)(`i`,{className:`fa-solid ${l?`fa-compress`:`fa-expand`}`}),l?`Exit fullscreen`:`Fullscreen`]}),(0,q.jsxs)(`button`,{onClick:()=>{m(!1),r(`/profile`)},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-user`}),`Profile`]}),(0,q.jsxs)(`button`,{onClick:()=>{m(!1),r(`/achievement`)},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-medal`}),`Achievements`]}),S?(0,q.jsxs)(`button`,{onClick:()=>{m(!1),r(`/chess/certificates`)},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-award`}),`Certificates`]}):null,(0,q.jsxs)(`button`,{onClick:M,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),`Log Out`]})]}):null]})]})}function Ne(e){if(!e)return 0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);return Number(t.streakCount||0)}catch{return 0}}var Pe=70,Fe=110,Ie=[`canvas`,`input`,`textarea`,`select`,`[contenteditable='true']`,`[data-no-pull-refresh]`,`.rubiks-viewport`,`.exam-question-panel`,`.ebook-draw-active`,`.yt-frame`,`.yt-playlist`].join(`,`);function Le(e){if(!(e instanceof Element)||e.closest(Ie))return!0;for(let t=e;t&&t!==document.body;t=t.parentElement)if(t.scrollTop>0||getComputedStyle(t).touchAction===`none`)return!0;return!1}function Re(){let[e,t]=(0,V.useState)(0),[n,r]=(0,V.useState)(!1),i=(0,V.useRef)(null),a=(0,V.useRef)(0);if((0,V.useEffect)(()=>{if(!(`ontouchstart`in window))return;function e(e){if(e.touches.length!==1||window.scrollY>0||Le(e.target)){i.current=null;return}i.current=e.touches[0].clientY}function n(e){if(i.current==null)return;let n=e.touches[0].clientY-i.current;if(n<=0||window.scrollY>0){a.current=0,t(0);return}let r=Math.min(Fe,n*.5);a.current=r,t(r),e.cancelable&&e.preventDefault()}function o(){i.current!=null&&(i.current=null,a.current>=Pe?(r(!0),t(Pe),window.location.reload()):t(0),a.current=0)}return window.addEventListener(`touchstart`,e,{passive:!0}),window.addEventListener(`touchmove`,n,{passive:!1}),window.addEventListener(`touchend`,o),window.addEventListener(`touchcancel`,o),()=>{window.removeEventListener(`touchstart`,e),window.removeEventListener(`touchmove`,n),window.removeEventListener(`touchend`,o),window.removeEventListener(`touchcancel`,o)}},[]),!e&&!n)return null;let o=e>=Pe;return(0,q.jsx)(`div`,{"aria-hidden":`true`,style:{position:`fixed`,top:`calc(var(--nav-h, 56px) + 6px)`,left:`50%`,zIndex:1e4,width:38,height:38,borderRadius:`50%`,background:`var(--card-bg, #fff)`,boxShadow:`0 4px 14px rgba(0, 0, 0, 0.18)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--primary-blue)`,transform:`translate(-50%, ${e-44}px)`,opacity:Math.min(1,e/Pe),transition:`opacity 0.15s ease`,pointerEvents:`none`},children:(0,q.jsx)(`i`,{className:`fa-solid ${n?`fa-circle-notch fa-spin`:`fa-arrow-rotate-right`}`,style:{fontSize:`1rem`,transform:n?void 0:`rotate(${e/Pe*270}deg)`,color:o||n?`var(--primary-blue)`:`var(--text-light)`}})})}var ze={"/chess":()=>w(()=>import(`./App-DsdYSWlL.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])),"/practice":()=>w(()=>import(`./Practice-C-5mNqfg.js`),__vite__mapDeps([10,1,2,11,12])),"/practice-session":()=>w(()=>import(`./PracticeSession-CxM8ksd6.js`),__vite__mapDeps([13,1,2,6,7,12,8])),"/exam":()=>w(()=>import(`./Exam-BCrhd5xc.js`),__vite__mapDeps([14,1,2,6,15])),"/live-classes":()=>w(()=>import(`./LiveClasses-iVfkgNRy.js`),__vite__mapDeps([16,1,2,15])),"/recorded-lectures":()=>w(()=>import(`./RecordedLecture-MyMAVOnh.js`),__vite__mapDeps([17,1,2,4,15])),"/classroom":()=>w(()=>import(`./Classroom-DrgSj6U4.js`),__vite__mapDeps([18,1,2,4])),"/syllabus":()=>w(()=>import(`./Syllabus-MBNdQIUL.js`),__vite__mapDeps([19,1,2])),"/e-book":()=>w(()=>import(`./EBook-Dr0TO-ff.js`),__vite__mapDeps([20,1,2,15])),"/profile":()=>w(()=>import(`./Profile-Csvuvpnr.js`),__vite__mapDeps([21,1,2])),"/achievement":()=>w(()=>import(`./Achievement-DhaZHOXg.js`),__vite__mapDeps([22,1,2]))};function J(e){return ze[e.startsWith(`/chess/`)?`/chess`:e]}function Be(e){let t=navigator.connection;t?.saveData||t?.effectiveType?.endsWith(`2g`)||J(e)?.().catch(()=>{})}function Ve({isOpen:e,toggleSidebar:n,minimized:r,onToggleMinimized:a,classroomUnread:o}){let{signOut:s}=t(),{activeSubjects:c,enabledFeatures:l}=i(),u=b(),d=_(),f=Ae(c,l);function p(e){u(e),window.innerWidth<=1024&&n()}async function m(){await s(),u(`/login`),window.innerWidth<=1024&&n()}function h(e){return je(e,d.pathname)}return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`div`,{className:`sidebar-overlay ${e?`active`:``}`,onClick:n}),(0,q.jsxs)(`aside`,{className:`sidebar student-sidebar ${e?`active`:``} ${r?`minimized`:``}`,children:[a?(0,q.jsxs)(`button`,{type:`button`,className:`student-sidebar-collapse`,onClick:a,title:r?`Expand sidebar`:`Minimize sidebar`,"aria-label":r?`Expand sidebar`:`Minimize sidebar`,"aria-expanded":!r,children:[(0,q.jsx)(`i`,{className:`fa-solid ${r?`fa-angles-right`:`fa-angles-left`}`}),(0,q.jsx)(`span`,{children:`Minimize`})]}):null,(0,q.jsxs)(`nav`,{className:`student-sidebar-scroll`,children:[(0,q.jsx)(He,{title:`Learn`,links:f.primary,isActive:h,onNavigate:p,unreadPaths:o?[`/classroom`]:[]}),(0,q.jsx)(He,{title:`Tools`,links:f.tools,isActive:h,onNavigate:p})]}),(0,q.jsxs)(`button`,{className:`student-logout`,onClick:m,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,q.jsx)(`span`,{children:`Log Out`})]})]})]})}function He({title:e,links:t,isActive:n,onNavigate:r,unreadPaths:i=[]}){return(0,q.jsxs)(`section`,{className:`student-sidebar-group`,children:[(0,q.jsx)(`div`,{className:`student-sidebar-label`,children:e}),(0,q.jsx)(`div`,{className:`student-sidebar-links`,children:t.map(e=>(0,q.jsxs)(`button`,{className:`student-sidebar-link ${n(e)?`active`:``}`,onClick:()=>r(e.path),onPointerEnter:()=>Be(e.path),onFocus:()=>Be(e.path),title:e.label,children:[(0,q.jsxs)(`span`,{className:`student-link-icon`,children:[(0,q.jsx)(`i`,{className:`fa-solid ${e.icon}`}),i.includes(e.path)?(0,q.jsx)(`span`,{className:`nav-unread-dot`}):null]}),(0,q.jsx)(`span`,{children:e.label})]},e.path))})]})}function Ue({classroomUnread:e}){let t=b(),n=_(),{activeSubjects:r,enabledFeatures:a}=i(),o=Ae(r,a);return(0,q.jsx)(`nav`,{className:`student-topnav`,"aria-label":`Primary`,children:(0,q.jsx)(`div`,{className:`student-topnav-scroll`,children:[...o.primary,...o.tools].map(r=>(0,q.jsxs)(`button`,{type:`button`,className:`student-topnav-link ${je(r,n.pathname)?`active`:``}`,onClick:()=>t(r.path),onPointerEnter:()=>Be(r.path),onFocus:()=>Be(r.path),children:[(0,q.jsxs)(`span`,{style:{position:`relative`,display:`inline-flex`},children:[(0,q.jsx)(`i`,{className:`fa-solid ${r.icon}`}),r.path===`/classroom`&&e?(0,q.jsx)(`span`,{className:`nav-unread-dot`}):null]}),(0,q.jsx)(`span`,{children:r.label})]},r.path))})})}var We=e(ae(),1);function Ge(){let{profile:e}=t(),[n,r]=(0,V.useState)(!1);(0,V.useEffect)(()=>{if(!e){console.log(`[BirthdayCelebration] No profile loaded`);return}let t=e.extra_details?.dob||e.extra_details?.date_of_birth;if(console.log(`[BirthdayCelebration] Found DOB:`,t,`extra_details:`,e.extra_details),!t)return;let n=t.split(`-`);if(n.length===3){let e=new Date,t=e.getMonth()+1,i=e.getDate(),a=parseInt(n[1],10),o=parseInt(n[2],10);console.log(`[BirthdayCelebration] Checking Date match: Today is ${t}/${i}, Born: ${a}/${o}`);let s=a===t&&o===i;console.log(`[BirthdayCelebration] Match result:`,s),s&&r(!0)}},[e]);let i=()=>{r(!1)};if(!n||!e)return null;let a=e.full_name||e.name||`Student`,o=Array.from({length:60}).map((e,t)=>{let n=Math.random()*100,r=Math.random()*4,i=Math.random()*3+2,a=Math.random()*.6+.4,o=[`#ff0a54`,`#ff477e`,`#ff7096`,`#ff85a1`,`#fbb1bd`,`#f9bec7`,`#3b82f6`,`#10b981`,`#fbbf24`,`#8b5cf6`],s=o[Math.floor(Math.random()*o.length)],c=[`circle`,`square`,`triangle`],l=c[Math.floor(Math.random()*c.length)];return{left:`${n}%`,delay:`${r}s`,duration:`${i}s`,scale:a,color:s,shape:l,id:t}});return(0,We.createPortal)((0,q.jsxs)(`div`,{style:Ke.overlay,children:[(0,q.jsx)(`style`,{children:`
          @keyframes fall {
            0% {
              transform: translateY(-20px) rotate(0deg);
              opacity: 0.8;
            }
            100% {
              transform: translateY(105vh) rotate(360deg);
              opacity: 0.1;
            }
          }
          @keyframes modalEnter {
            from { transform: scale(0.9) translateY(20px); opacity: 0; }
            to { transform: scale(1) translateY(0); opacity: 1; }
          }
          @keyframes floatBall {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(2deg); }
          }
          .confetti-particle {
            position: absolute;
            top: -20px;
            z-index: 99999;
            animation: fall linear infinite;
          }
          .birthday-modal {
            background: rgba(15, 23, 42, 0.85); /* Premium Glass Dark */
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(99, 102, 241, 0.4);
            box-shadow: 0 30px 70px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1);
            animation: modalEnter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .floating-balloon {
            font-size: 3rem;
            display: inline-block;
            animation: floatBall 3.5s ease-in-out infinite;
          }
        `}),o.map(e=>{let t=`0`;e.shape===`circle`&&(t=`50%`);let n=`10px`,r=`10px`;return e.shape===`triangle`&&(n=`0`,r=`0`),(0,q.jsx)(`div`,{className:`confetti-particle`,style:{left:e.left,animationDelay:e.delay,animationDuration:e.duration,transform:`scale(${e.scale})`,backgroundColor:e.shape===`triangle`?`transparent`:e.color,borderRadius:t,width:e.shape===`triangle`?void 0:n,height:e.shape===`triangle`?void 0:r,borderLeft:e.shape===`triangle`?`6px solid transparent`:void 0,borderRight:e.shape===`triangle`?`6px solid transparent`:void 0,borderBottom:e.shape===`triangle`?`10px solid ${e.color}`:void 0}},e.id)}),(0,q.jsx)(`div`,{className:`birthday-modal`,style:Ke.modal,children:(0,q.jsxs)(`div`,{style:{position:`relative`,zIndex:2,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`24px`},children:[(0,q.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,justifyContent:`center`},children:[(0,q.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`0s`},children:`🎈`}),(0,q.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`0.5s`,fontSize:`3.5rem`},children:`🎂`}),(0,q.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`1s`},children:`🎉`})]}),(0,q.jsxs)(`h2`,{style:Ke.title,children:[`Happy Birthday, `,a,`!`]}),(0,q.jsx)(`p`,{style:Ke.message,children:`We wish you a fantastic year ahead filled with happiness, learning, and success. Have a wonderful day! 🌟✨`}),(0,q.jsx)(`button`,{onClick:i,style:Ke.button,children:`Thank You! ❤️`})]})})]}),document.body)}var Ke={overlay:{position:`fixed`,top:0,left:0,right:0,bottom:0,backgroundColor:`rgba(8, 10, 18, 0.7)`,zIndex:999999,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`20px`,boxSizing:`border-box`},modal:{width:`100%`,maxWidth:`520px`,borderRadius:`28px`,padding:`48px 36px`,textAlign:`center`,boxSizing:`border-box`,position:`relative`,overflow:`hidden`},title:{fontFamily:`"Sora", sans-serif`,fontSize:`2.25rem`,fontWeight:`900`,background:`linear-gradient(135deg, #a5b4fc, #6366f1, #eab308)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,margin:0,lineHeight:1.25},message:{color:`#94a3b8`,fontSize:`1.05rem`,fontWeight:`500`,lineHeight:1.6,margin:`4px 0 8px 0`},button:{border:0,background:`linear-gradient(135deg, #6366f1, #4f46e5)`,color:`white`,borderRadius:`16px`,padding:`14px 38px`,fontSize:`1.02rem`,fontWeight:`800`,cursor:`pointer`,boxShadow:`0 10px 25px rgba(99, 102, 241, 0.4)`,transition:`all 0.2s ease`}},qe=60,Je={border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`14px 18px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.9rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`};function Ye({email:e,onCancel:n}){let{user:i,signOut:a,institute:o}=t(),[s,c]=(0,V.useState)(!1),[l,u]=(0,V.useState)(!1),[d,f]=(0,V.useState)(0),[p,h]=(0,V.useState)(``),[g,_]=(0,V.useState)(``),v=(0,V.useRef)(null),y=e||i?.email||``,b=!!i;(0,V.useEffect)(()=>{if(!(d<=0))return v.current=window.setInterval(()=>{f(e=>e<=1?0:e-1)},1e3),()=>window.clearInterval(v.current)},[d]);async function x(){if(s||d>0||!y)return;c(!0),_(``),h(``);let{error:e}=await r.functions.invoke(`student-self-register`,{body:{mode:`resend`,instituteId:o?.id,email:y}});if(c(!1),e){let t=e.message;try{let n=await e.context?.json?.();n?.error&&(t=n.error)}catch{}_(t||`Could not send the confirmation email. Please try again.`);return}h(`Confirmation email sent to ${y}. Open it and click the link inside.`),f(qe)}async function S(){if(l)return;u(!0),_(``),h(``);let{data:e,error:t}=await r.auth.refreshSession();if(t){u(!1),_(`Could not check your status. Please try again in a moment.`);return}if(e?.user?.email_confirmed_at){window.location.reload();return}u(!1),_(`This email is still unverified. Please click the link in the confirmation email first.`)}return(0,q.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,q.jsx)(m,{}),(0,q.jsx)(`style`,{children:`
        .verify-email-card { animation: verifySpring 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        @keyframes verifySpring {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .verify-btn-primary { transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
        .verify-btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 55%, transparent);
        }
        .verify-btn-primary:active:not(:disabled) { transform: translateY(0); }
        .verify-btn-secondary { transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1); }
        .verify-btn-secondary:hover:not(:disabled) {
          border-color: var(--primary-blue, #3b82f6);
          color: var(--primary-blue, #3b82f6);
          background: color-mix(in srgb, var(--primary-blue, #3b82f6) 10%, transparent);
        }
      `}),(0,q.jsxs)(`div`,{className:`verify-email-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,q.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent)`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-envelope-circle-check`})})}),(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,q.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Email Not Verified`]})}),(0,q.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:`Confirm Your Email`}),(0,q.jsxs)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:[`We sent a confirmation link to`,` `,(0,q.jsx)(`strong`,{style:{color:`var(--dark-blue, #0f172a)`,wordBreak:`break-all`},children:y}),`. Open that email and click the link to unlock your panel. Check your spam folder if you can't find it.`]}),p?(0,q.jsxs)(`p`,{style:{color:`#15803d`,background:`#dcfce7`,border:`1px solid #bbf7d0`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,q.jsx)(`span`,{children:p})]}):null,g?(0,q.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err, #c62828) 20%, transparent)`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,q.jsx)(`span`,{children:g})]}):null,(0,q.jsx)(`button`,{className:`verify-btn-primary`,type:`button`,onClick:x,disabled:s||d>0,style:{marginTop:`26px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:s||d>0?`not-allowed`:`pointer`,opacity:s||d>0?.65:1,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:s?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,q.jsx)(`span`,{children:`Sending...`})]}):d>0?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-regular fa-clock`}),(0,q.jsxs)(`span`,{children:[`Resend in `,d,`s`]})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-paper-plane`}),(0,q.jsx)(`span`,{children:`Resend confirmation email`})]})}),(0,q.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,marginTop:`12px`},children:[b?(0,q.jsx)(`button`,{className:`verify-btn-secondary`,type:`button`,onClick:S,disabled:l,style:{...Je,flex:1,opacity:l?.7:1,cursor:l?`not-allowed`:`pointer`},children:l?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,q.jsx)(`span`,{children:`Checking...`})]}):(0,q.jsx)(`span`,{children:`I've verified`})}):null,(0,q.jsx)(`button`,{className:`verify-btn-secondary`,type:`button`,onClick:b?a:n,style:{...Je,flex:b?void 0:1,color:`var(--text-light, #64748b)`},children:b?`Log out`:`Back to sign in`})]})]})]})}async function Xe(e,t){let{data:n,error:i}=await r.rpc(`resolve_branch_code_for_signup`,{p_institute_id:e,p_code:t});return i?{branch:null,error:i.message}:{branch:n?.[0]||null,error:null}}async function Ze({instituteId:e,email:t,password:n,fullName:i,phone:a,branchId:o}){let{data:s,error:c}=await r.functions.invoke(`student-self-register`,{body:{instituteId:e,email:t,password:n,fullName:i,phone:a||null,branchId:o||null}});if(c){let e=c.message;try{let t=await c.context?.json?.();t?.error&&(e=t.error)}catch{}return{ok:!1,error:e||`Could not create your account.`}}return s?.ok?{ok:!0,alreadyPending:!!s.alreadyPending}:{ok:!1,error:s?.error||`Could not submit your registration.`}}async function Qe({email:e,instituteId:t}){let{error:n}=await r.functions.invoke(`send-password-reset`,{body:{email:e,instituteId:t||null,redirectTo:`${window.location.origin}/reset-password`}});if(!n)return{error:null};let i=n.message;try{let e=await n.context?.json?.();e?.error&&(i=e.error)}catch{}return{error:{message:i||`Could not send the reset email. Please try again.`}}}function $e(e){return e?e.code===`email_not_confirmed`?!0:/email not confirmed/i.test(e.message||``):!1}function et(){let e=b(),n=_(),{login:r,institute:i,instituteReady:a,user:o,membership:s,membershipInvalid:l,signOut:u}=t(),[d,f]=(0,V.useState)(`signin`),[p,g]=(0,V.useState)(``),[v,y]=(0,V.useState)(``),[x,S]=(0,V.useState)(!1),[C,w]=(0,V.useState)(null),[T,E]=(0,V.useState)(!1),[D,O]=(0,V.useState)(!1),[ee,te]=(0,V.useState)(!1),[k,A]=(0,V.useState)(!1),[j,M]=(0,V.useState)(null),[N,P]=(0,V.useState)(null),[F,ne]=(0,V.useState)(!1);(0,V.useEffect)(()=>{let e=setTimeout(()=>ne(!0),1e3);return()=>clearTimeout(e)},[]);let re=!F||!a,[ie,I]=(0,V.useState)(``),[L,R]=(0,V.useState)(``),[ae,oe]=(0,V.useState)(``),[z,B]=(0,V.useState)(``),[se,ce]=(0,V.useState)(``),[le,H]=(0,V.useState)(!1),[ue,U]=(0,V.useState)(null),[de,fe]=(0,V.useState)(null),[pe,me]=(0,V.useState)(``),[he,W]=(0,V.useState)(`idle`),[G,ge]=(0,V.useState)(null);async function _e(e){let t=e.trim();if(!t)return W(`idle`),ge(null),null;if(G?.forCode===t)return G;W(`checking`);let{branch:n}=await Xe(i.id,t);if(n){let e={...n,forCode:t};return ge(e),W(`valid`),e}return ge(null),W(`invalid`),null}(0,V.useEffect)(()=>(document.body.classList.add(`login-body`),()=>{document.body.classList.remove(`login-body`)}),[]),(0,V.useEffect)(()=>{try{localStorage.getItem(`portal_evicted_notice`)&&(localStorage.removeItem(c),M(`You were signed out because this account was opened in another browser.`))}catch{}},[]);let ve=()=>{let e=n.state?.from;return e&&e!==`/login`&&!e.startsWith(`/login?`)?e:`/`};(0,V.useEffect)(()=>{o&&s&&e(ve(),{replace:!0})},[o,s,e,n.state]),(0,V.useEffect)(()=>{l&&(w(`This account does not belong to this institute. Please sign in on your own institute's portal.`),S(!1),u().catch(()=>{}))},[l,u]);async function ye(t){t.preventDefault(),S(!0),w(null);try{let t=await r(p,v);if(t?.error){if($e(t.error)){P(p),S(!1);return}w(t.error.message||`Failed to sign in. Please check your credentials.`),S(!1)}else e(ve(),{replace:!0})}catch(e){console.error(`Login submit error:`,e),w(e?.message||`An unexpected error occurred. Please try again.`),S(!1)}}async function be(){if(w(null),M(null),!p){w(`Enter your student email above, then tap 'Forgot password?'.`);return}A(!0);let{error:e}=await Qe({email:p,instituteId:i?.id});if(A(!1),e){w(e.message);return}M(`If an account exists for ${p}, a reset link is on its way.`)}async function xe(e){if(e.preventDefault(),U(null),!i?.id){U(`This portal is not configured for a valid institute.`);return}if(z.length<6){U(`Password must be at least 6 characters.`);return}if(z!==se){U(`Passwords do not match.`);return}let t=G;if(pe.trim()&&(t=await _e(pe),!t)){U(`That branch code isn't valid. Please check it and try again.`);return}H(!0);try{let e=await Ze({instituteId:i.id,email:L,password:z,fullName:ie,phone:ae,branchId:t?.id||null});if(!e.ok){U(e.error),H(!1);return}fe(L)}catch(e){console.error(`Registration submit error:`,e),U(e?.message||`An unexpected error occurred. Please try again.`)}finally{H(!1)}}function Se(){I(``),R(``),oe(``),B(``),ce(``),U(null),fe(null),me(``),W(`idle`),ge(null)}let Ce=Array.isArray(i?.institute_branding)?i?.institute_branding[0]:i?.institute_branding,K=Ce?.logo_url;return(0,q.jsxs)(`div`,{className:`login-page-container layout-${Ce?.login_layout||`split_screen`}`,children:[re&&(0,q.jsxs)(`div`,{className:`login-splash-overlay`,children:[K&&(0,q.jsx)(`img`,{src:K,alt:``,className:`login-splash-logo`}),(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin login-splash-spinner`})]}),N?(0,q.jsx)(Ye,{email:N,onCancel:()=>P(null)}):null,(0,q.jsx)(m,{}),(0,q.jsxs)(`div`,{className:`login-left-pane`,children:[(0,q.jsx)(`div`,{className:`login-blob-1`}),(0,q.jsx)(`div`,{className:`login-blob-2`}),(0,q.jsxs)(`div`,{className:`login-left-header`,children:[(0,q.jsx)(`div`,{className:`login-left-logo-wrapper`,children:K&&(0,q.jsx)(`img`,{src:K,alt:`Institute Logo`,className:`login-left-logo`})}),(0,q.jsx)(`span`,{className:`login-left-brand-name`,children:i?i.name:`Erpli Wave`})]}),(0,q.jsxs)(`div`,{className:`login-left-content`,children:[(0,q.jsxs)(`h2`,{className:`login-left-title`,children:[`Unlock the Power of `,(0,q.jsx)(`br`,{}),(0,q.jsx)(`span`,{style:{color:`var(--gold)`},children:`Mental Math`})]}),(0,q.jsx)(`p`,{className:`login-left-subtitle`,children:`Experience the ultimate training portal. Boost your calculation speed, complete assignments, challenge friends, and track your analytical growth.`}),(0,q.jsxs)(`div`,{className:`showcase-glass-card`,children:[(0,q.jsx)(`span`,{className:`showcase-badge`,children:`Student Platform`}),(0,q.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,q.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-gamepad`,style:{color:`var(--gold)`}}),`Interactive Games`]}),(0,q.jsx)(`span`,{className:`showcase-stat-value`,children:`Abacus & Flash`})]}),(0,q.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,q.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-trophy`,style:{color:`var(--gold)`}}),`Weekly Leaderboards`]}),(0,q.jsx)(`span`,{className:`showcase-stat-value`,children:`Global Rankings`})]}),(0,q.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,q.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-chart-line`,style:{color:`var(--gold)`}}),`Progress Analytics`]}),(0,q.jsx)(`span`,{className:`showcase-stat-value`,children:`Detailed Insights`})]})]})]}),(0,q.jsxs)(`div`,{className:`login-left-footer`,children:[`© `,new Date().getFullYear(),` `,i?i.name:`Erpli Wave`,`. All rights reserved.`]})]}),(0,q.jsx)(`div`,{className:`login-right-pane`,children:(0,q.jsxs)(`div`,{className:`login-form-card`,children:[(0,q.jsxs)(`div`,{className:`login-logo-header`,children:[(0,q.jsx)(`div`,{className:`login-logo-container`,children:K&&(0,q.jsx)(`img`,{src:K,alt:`Institute Logo`,className:`login-main-logo`})}),(0,q.jsx)(`h1`,{className:`login-title-text`,children:i?i.name:`Student Portal`}),(0,q.jsx)(`p`,{className:`login-subtitle-text`,children:d===`register`?`Create your account to request access`:`Sign in to access your mental math dashboard`})]}),!de&&(0,q.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,marginBottom:`24px`,background:`rgba(148, 163, 184, 0.14)`,borderRadius:`14px`,padding:`4px`},children:[(0,q.jsx)(`button`,{type:`button`,onClick:()=>{f(`signin`),w(null)},style:{flex:1,border:`none`,borderRadius:`10px`,padding:`10px 12px`,fontWeight:800,fontSize:`0.85rem`,cursor:`pointer`,background:d===`signin`?`var(--card-bg, #ffffff)`:`transparent`,color:d===`signin`?`var(--dark-blue, #0f172a)`:`var(--text-light, #64748b)`,boxShadow:d===`signin`?`0 1px 4px rgba(0,0,0,0.08)`:`none`},children:`Sign In`}),(0,q.jsx)(`button`,{type:`button`,onClick:()=>{f(`register`),w(null)},style:{flex:1,border:`none`,borderRadius:`10px`,padding:`10px 12px`,fontWeight:800,fontSize:`0.85rem`,cursor:`pointer`,background:d===`register`?`var(--card-bg, #ffffff)`:`transparent`,color:d===`register`?`var(--dark-blue, #0f172a)`:`var(--text-light, #64748b)`,boxShadow:d===`register`?`0 1px 4px rgba(0,0,0,0.08)`:`none`},children:`Register`})]}),d===`signin`&&C&&(0,q.jsxs)(`div`,{style:{background:`#fef2f2`,color:`#dc2626`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:`600`,marginBottom:`24px`,border:`1px solid #fecaca`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1rem`}}),(0,q.jsx)(`span`,{children:C})]}),d===`signin`&&j&&(0,q.jsxs)(`div`,{style:{background:`#f0fdf4`,color:`#15803d`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:600,marginBottom:`24px`,border:`1px solid #bbf7d0`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-envelope-circle-check`,style:{fontSize:`1rem`}}),(0,q.jsx)(`span`,{children:j})]}),d===`register`?de?(0,q.jsxs)(`div`,{style:{textAlign:`left`},children:[(0,q.jsxs)(`div`,{style:{background:`#f0fdf4`,color:`#15803d`,padding:`16px`,borderRadius:`14px`,fontSize:`0.88rem`,fontWeight:600,marginBottom:`20px`,border:`1px solid #bbf7d0`,display:`flex`,alignItems:`flex-start`,gap:`10px`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`,style:{fontSize:`1.1rem`,marginTop:`2px`}}),(0,q.jsxs)(`span`,{children:[`Registration submitted for `,(0,q.jsx)(`strong`,{children:de}),`. Check your inbox to verify your email, then wait for your institute admin to approve your account — you'll be able to sign in once they do.`]})]}),(0,q.jsx)(`button`,{type:`button`,onClick:()=>{Se(),f(`signin`)},className:`login-submit-button`,children:`Back to Sign In`})]}):(0,q.jsxs)(`form`,{onSubmit:xe,children:[ue&&(0,q.jsxs)(`div`,{style:{background:`#fef2f2`,color:`#dc2626`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:600,marginBottom:`20px`,border:`1px solid #fecaca`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1rem`}}),(0,q.jsx)(`span`,{children:ue})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Full Name`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-regular fa-user login-input-icon`}),(0,q.jsx)(`input`,{type:`text`,value:ie,onChange:e=>I(e.target.value),placeholder:`Your full name`,required:!0,className:`login-input-field`})]})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Email`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-regular fa-envelope login-input-icon`}),(0,q.jsx)(`input`,{type:`email`,value:L,onChange:e=>R(e.target.value),placeholder:`student@example.com`,required:!0,className:`login-input-field`})]})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Phone (optional)`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-phone login-input-icon`}),(0,q.jsx)(`input`,{type:`tel`,value:ae,onChange:e=>oe(e.target.value),placeholder:`Your phone number`,className:`login-input-field`})]})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Branch Code (optional)`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-hashtag login-input-icon`}),(0,q.jsx)(`input`,{type:`text`,value:pe,onChange:e=>{me(e.target.value),W(`idle`),ge(null)},onBlur:e=>_e(e.target.value),placeholder:`Code given by your branch/school`,className:`login-input-field`})]}),he===`checking`&&(0,q.jsxs)(`div`,{className:`branch-picker-message`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),`Checking code...`]}),he===`valid`&&G&&(0,q.jsxs)(`div`,{className:`branch-picker-message branch-picker-message-success`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`}),G.name]}),he===`invalid`&&(0,q.jsxs)(`div`,{className:`branch-picker-message branch-picker-message-error`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),`Invalid branch code.`]})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Password`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,q.jsx)(`input`,{type:`password`,value:z,onChange:e=>B(e.target.value),placeholder:`At least 6 characters`,required:!0,minLength:6,className:`login-input-field`})]})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,style:{marginBottom:`16px`},children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Confirm Password`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,q.jsx)(`input`,{type:`password`,value:se,onChange:e=>ce(e.target.value),placeholder:`Re-enter your password`,required:!0,minLength:6,className:`login-input-field`})]})]}),(0,q.jsx)(`button`,{type:`submit`,disabled:le||!a||!i?.id||he===`checking`,className:`login-submit-button`,children:le?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,q.jsx)(`span`,{children:`Submitting...`})]}):(0,q.jsx)(`span`,{children:`Request Access`})})]}):(0,q.jsxs)(`form`,{onSubmit:ye,children:[(0,q.jsxs)(`div`,{className:`login-input-group`,children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Student Email`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper ${D?`login-input-wrapper-focused`:``}`,children:[(0,q.jsx)(`i`,{className:`fa-regular fa-envelope login-input-icon`}),(0,q.jsx)(`input`,{type:`email`,value:p,onChange:e=>g(e.target.value),onFocus:()=>O(!0),onBlur:()=>O(!1),placeholder:`student@example.com`,required:!0,className:`login-input-field`})]})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,style:{marginBottom:`16px`},children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Password`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper ${ee?`login-input-wrapper-focused`:``}`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,q.jsx)(`input`,{type:T?`text`:`password`,value:v,onChange:e=>y(e.target.value),onFocus:()=>te(!0),onBlur:()=>te(!1),placeholder:`••••••••`,required:!0,className:`login-input-field`}),(0,q.jsx)(`button`,{type:`button`,onClick:()=>E(!T),className:`login-password-toggle`,children:(0,q.jsx)(`i`,{className:T?`fa-solid fa-eye-slash`:`fa-solid fa-eye`})})]})]}),(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,marginBottom:`24px`},children:(0,q.jsx)(`button`,{type:`button`,onClick:be,disabled:k,style:{background:`none`,border:`none`,padding:0,cursor:k?`default`:`pointer`,color:`var(--primary-blue, #2563eb)`,fontSize:`0.82rem`,fontWeight:700},children:k?`Sending reset link...`:`Forgot password?`})}),(0,q.jsx)(`button`,{type:`submit`,disabled:x,className:`login-submit-button`,children:x?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,q.jsx)(`span`,{children:`Signing in...`})]}):(0,q.jsx)(`span`,{children:`Sign In`})})]}),(0,q.jsxs)(`p`,{style:{textAlign:`center`,marginTop:16,fontSize:13},children:[`By signing in you agree to our`,` `,(0,q.jsx)(h,{to:`/policies#terms`,children:`Terms & Conditions`}),` `,`and`,` `,(0,q.jsx)(h,{to:`/policies#privacy`,children:`Privacy Policy`}),`.`]})]})})]})}function tt(e){return e?e.code===`email_not_confirmed`?!0:/email not confirmed/i.test(e.message||``):!1}function nt(){let e=b(),n=_(),{login:r,institute:i,instituteReady:a,user:o,membership:s,membershipInvalid:l,signOut:u}=t(),[d,f]=(0,V.useState)(`signin`),[p,m]=(0,V.useState)(``),[h,g]=(0,V.useState)(``),[v,y]=(0,V.useState)(!1),[x,S]=(0,V.useState)(null),[C,w]=(0,V.useState)(null),[T,E]=(0,V.useState)(!1),[D,O]=(0,V.useState)(null),[ee,te]=(0,V.useState)(!1);(0,V.useEffect)(()=>{let e=setTimeout(()=>te(!0),1e3);return()=>clearTimeout(e)},[]);let k=!ee||!a,[A,j]=(0,V.useState)({fullName:``,email:``,phone:``,password:``,confirmPassword:``,branchCode:``}),[M,N]=(0,V.useState)(!1),[P,F]=(0,V.useState)(null),[ne,re]=(0,V.useState)(null),[ie,I]=(0,V.useState)(`idle`),[L,R]=(0,V.useState)(null);function ae(e,t){j(n=>({...n,[e]:t})),e===`branchCode`&&(I(`idle`),R(null))}async function oe(e){let t=e.trim();if(!t)return I(`idle`),R(null),null;if(L?.forCode===t)return L;I(`checking`);let{branch:n}=await Xe(i.id,t);if(n){let e={...n,forCode:t};return R(e),I(`valid`),e}return R(null),I(`invalid`),null}(0,V.useEffect)(()=>{try{localStorage.getItem(`portal_evicted_notice`)&&(localStorage.removeItem(c),w(`You were signed out because this account was opened in another browser.`))}catch{}},[]);let z=()=>{let e=n.state?.from;return e&&e!==`/login`&&!e.startsWith(`/login?`)?e:`/`};(0,V.useEffect)(()=>{o&&s&&e(z(),{replace:!0})},[o,s,e,n.state]),(0,V.useEffect)(()=>{l&&(S(`This account does not belong to this institute. Please sign in on your own institute's portal.`),y(!1),u().catch(()=>{}))},[l,u]);async function B(t){t.preventDefault(),y(!0),S(null);try{let t=await r(p,h);if(t?.error){if(tt(t.error)){O(p),y(!1);return}S(t.error.message||`Failed to sign in. Please check your credentials.`),y(!1)}else e(z(),{replace:!0})}catch(e){console.error(`Login submit error:`,e),S(e?.message||`An unexpected error occurred. Please try again.`),y(!1)}}async function se(){if(S(null),w(null),!p){S(`Enter your student email above, then tap 'Forgot password?'.`);return}E(!0);let{error:e}=await Qe({email:p,instituteId:i?.id});if(E(!1),e){S(e.message);return}w(`If an account exists for ${p}, a reset link is on its way.`)}async function ce(e){if(e.preventDefault(),F(null),!i?.id){F(`This portal is not configured for a valid institute.`);return}if(A.password.length<6){F(`Password must be at least 6 characters.`);return}if(A.password!==A.confirmPassword){F(`Passwords do not match.`);return}let t=L;if(A.branchCode.trim()&&(t=await oe(A.branchCode),!t)){F(`That branch code isn't valid. Please check it and try again.`);return}N(!0);try{let e=await Ze({instituteId:i.id,email:A.email,password:A.password,fullName:A.fullName,phone:A.phone,branchId:t?.id||null});if(!e.ok){F(e.error);return}re(A.email)}catch(e){console.error(`Registration submit error:`,e),F(e?.message||`An unexpected error occurred. Please try again.`)}finally{N(!1)}}function le(){j({fullName:``,email:``,phone:``,password:``,confirmPassword:``,branchCode:``}),F(null),re(null),I(`idle`),R(null),f(`signin`)}function H(e){f(e),S(null)}return{institute:i,instituteReady:a,logoUrl:(Array.isArray(i?.institute_branding)?i?.institute_branding[0]:i?.institute_branding)?.logo_url,showSplash:k,mode:d,switchMode:H,email:p,setEmail:m,password:h,setPassword:g,loading:v,error:x,notice:C,resetSending:T,unverifiedEmail:D,setUnverifiedEmail:O,handleSubmit:B,handleForgotPassword:se,reg:A,setRegField:ae,regLoading:M,regError:P,regSubmittedEmail:ne,branchCodeStatus:ie,resolvedBranch:L,checkBranchCode:oe,handleRegisterSubmit:ce,backToSignIn:le}}var rt=Array.from({length:28},(e,t)=>({left:t*37%100,top:t*53%90,size:t%3+1,delay:t%7*.5}));function Y({label:e,icon:t,children:n,trailing:r}){return(0,q.jsxs)(`label`,{className:`sg-group`,children:[(0,q.jsx)(`span`,{className:`sg-label`,children:e}),(0,q.jsxs)(`span`,{className:`sg-field`,children:[(0,q.jsx)(`i`,{className:`${t} sg-field-icon`}),n,r]})]})}function it(){let e=nt(),[t,n]=(0,V.useState)(!1),r=e.institute?.name?.trim()||`Star Genius Abacus`,i=e.logoUrl;return(0,V.useEffect)(()=>(document.body.classList.add(`sg-login-body`),()=>document.body.classList.remove(`sg-login-body`)),[]),(0,q.jsxs)(`div`,{className:`sg-login`,children:[e.showSplash&&(0,q.jsx)(`div`,{className:`sg-splash`,children:(0,q.jsx)(`div`,{className:`sg-logo sg-logo-splash`,children:i&&(0,q.jsx)(`img`,{src:i,alt:``})})}),e.unverifiedEmail&&(0,q.jsx)(Ye,{email:e.unverifiedEmail,onCancel:()=>e.setUnverifiedEmail(null)}),(0,q.jsxs)(`header`,{className:`sg-hero`,children:[(0,q.jsxs)(`div`,{className:`sg-sky`,"aria-hidden":`true`,children:[rt.map((e,t)=>(0,q.jsx)(`span`,{className:`sg-star`,style:{left:`${e.left}%`,top:`${e.top}%`,width:e.size,height:e.size,animationDelay:`${e.delay}s`}},t)),(0,q.jsx)(`span`,{className:`sg-shooting`})]}),(0,q.jsx)(`div`,{className:`sg-logo sg-logo-hero`,children:i&&(0,q.jsx)(`img`,{src:i,alt:`Institute logo`})}),(0,q.jsx)(`h1`,{className:`sg-title`,children:r}),(0,q.jsxs)(`p`,{className:`sg-tagline`,children:[`Learn `,(0,q.jsx)(`span`,{children:`·`}),` Practice `,(0,q.jsx)(`span`,{children:`·`}),` Shine`]})]}),(0,q.jsxs)(`main`,{className:`sg-sheet`,children:[!e.regSubmittedEmail&&(0,q.jsxs)(`div`,{className:`sg-switch`,role:`tablist`,children:[(0,q.jsx)(`button`,{type:`button`,className:e.mode===`signin`?`is-active`:``,onClick:()=>e.switchMode(`signin`),children:`Sign In`}),(0,q.jsx)(`button`,{type:`button`,className:e.mode===`register`?`is-active`:``,onClick:()=>e.switchMode(`register`),children:`Register`})]}),e.mode===`signin`?(0,q.jsxs)(`form`,{onSubmit:e.handleSubmit,className:`sg-form`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{className:`sg-heading`,children:`Welcome back`}),(0,q.jsx)(`p`,{className:`sg-muted`,children:`Sign in to continue to your account.`})]}),e.error&&(0,q.jsxs)(`div`,{className:`sg-alert sg-alert-error`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),e.error]}),e.notice&&(0,q.jsxs)(`div`,{className:`sg-alert sg-alert-ok`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`}),e.notice]}),(0,q.jsx)(Y,{label:`Email`,icon:`fa-regular fa-envelope`,children:(0,q.jsx)(`input`,{type:`email`,value:e.email,onChange:t=>e.setEmail(t.target.value),placeholder:`name@example.com`,autoComplete:`email`,required:!0})}),(0,q.jsx)(Y,{label:`Password`,icon:`fa-solid fa-lock`,trailing:(0,q.jsx)(`button`,{type:`button`,className:`sg-eye`,onClick:()=>n(e=>!e),"aria-label":`Toggle password visibility`,children:(0,q.jsx)(`i`,{className:t?`fa-regular fa-eye-slash`:`fa-regular fa-eye`})}),children:(0,q.jsx)(`input`,{type:t?`text`:`password`,value:e.password,onChange:t=>e.setPassword(t.target.value),placeholder:`Enter your password`,autoComplete:`current-password`,required:!0})}),(0,q.jsx)(`button`,{type:`button`,className:`sg-link`,onClick:e.handleForgotPassword,disabled:e.resetSending,children:e.resetSending?`Sending reset link...`:`Forgot password?`}),(0,q.jsx)(`button`,{type:`submit`,className:`sg-cta`,disabled:e.loading,children:e.loading?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Signing in...`]}):`Sign In`})]}):e.regSubmittedEmail?(0,q.jsxs)(`div`,{className:`sg-form`,children:[(0,q.jsx)(`div`,{className:`sg-done-icon`,children:(0,q.jsx)(`i`,{className:`fa-regular fa-envelope`})}),(0,q.jsx)(`h2`,{className:`sg-heading sg-center`,children:`Registration submitted`}),(0,q.jsxs)(`p`,{className:`sg-muted sg-center`,children:[`A verification link has been sent to `,(0,q.jsx)(`strong`,{children:e.regSubmittedEmail}),`. Verify your email, then sign in once your institute approves your account.`]}),(0,q.jsx)(`button`,{type:`button`,className:`sg-cta`,onClick:e.backToSignIn,children:`Back to Sign In`})]}):(0,q.jsxs)(`form`,{onSubmit:e.handleRegisterSubmit,className:`sg-form`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{className:`sg-heading`,children:`Create an account`}),(0,q.jsx)(`p`,{className:`sg-muted`,children:`Request access to your institute's portal.`})]}),e.regError&&(0,q.jsxs)(`div`,{className:`sg-alert sg-alert-error`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),e.regError]}),(0,q.jsx)(Y,{label:`Full name`,icon:`fa-regular fa-user`,children:(0,q.jsx)(`input`,{value:e.reg.fullName,onChange:t=>e.setRegField(`fullName`,t.target.value),placeholder:`Your full name`,required:!0})}),(0,q.jsx)(Y,{label:`Email`,icon:`fa-regular fa-envelope`,children:(0,q.jsx)(`input`,{type:`email`,value:e.reg.email,onChange:t=>e.setRegField(`email`,t.target.value),placeholder:`name@example.com`,required:!0})}),(0,q.jsx)(Y,{label:`Phone (optional)`,icon:`fa-solid fa-phone`,children:(0,q.jsx)(`input`,{type:`tel`,value:e.reg.phone,onChange:t=>e.setRegField(`phone`,t.target.value),placeholder:`Your phone number`})}),(0,q.jsx)(Y,{label:`Branch code (optional)`,icon:`fa-solid fa-hashtag`,children:(0,q.jsx)(`input`,{value:e.reg.branchCode,onChange:t=>e.setRegField(`branchCode`,t.target.value),onBlur:t=>e.checkBranchCode(t.target.value),placeholder:`Code from your branch`})}),e.branchCodeStatus===`checking`&&(0,q.jsxs)(`p`,{className:`sg-hint`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Checking code...`]}),e.branchCodeStatus===`valid`&&e.resolvedBranch&&(0,q.jsxs)(`p`,{className:`sg-hint sg-hint-ok`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`}),` `,e.resolvedBranch.name]}),e.branchCodeStatus===`invalid`&&(0,q.jsxs)(`p`,{className:`sg-hint sg-hint-bad`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),` Invalid branch code.`]}),(0,q.jsx)(Y,{label:`Password`,icon:`fa-solid fa-lock`,children:(0,q.jsx)(`input`,{type:`password`,value:e.reg.password,onChange:t=>e.setRegField(`password`,t.target.value),placeholder:`At least 6 characters`,minLength:6,required:!0})}),(0,q.jsx)(Y,{label:`Confirm password`,icon:`fa-solid fa-lock`,children:(0,q.jsx)(`input`,{type:`password`,value:e.reg.confirmPassword,onChange:t=>e.setRegField(`confirmPassword`,t.target.value),placeholder:`Re-enter your password`,minLength:6,required:!0})}),(0,q.jsx)(`button`,{type:`submit`,className:`sg-cta`,disabled:e.regLoading||!e.instituteReady||!e.institute?.id||e.branchCodeStatus===`checking`,children:e.regLoading?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Submitting...`]}):`Request Access`})]}),(0,q.jsxs)(`p`,{className:`sg-footer`,children:[(0,q.jsx)(h,{to:`/policies#terms`,children:`Terms & Conditions`}),` · `,(0,q.jsx)(h,{to:`/policies#privacy`,children:`Privacy Policy`})]}),(0,q.jsxs)(`p`,{className:`sg-footer`,children:[`© `,new Date().getFullYear(),` `,r,`. All rights reserved.`]})]})]})}var at=[`#a35c9e`,`#e31e24`,`#008bd2`,`#ffcd00`,`#f0821a`,`#afca1c`,`#009a48`,`#e5097f`];function X({label:e,icon:t,children:n,trailing:r}){return(0,q.jsxs)(`label`,{className:`bp-group`,children:[(0,q.jsx)(`span`,{className:`bp-label`,children:e}),(0,q.jsxs)(`span`,{className:`bp-field`,children:[(0,q.jsx)(`i`,{className:`${t} bp-field-icon`}),n,r]})]})}function ot(){let e=nt(),[t,n]=(0,V.useState)(!1),r=e.institute?.name?.trim()||`Brain Power Zone`,i=e.logoUrl;return(0,V.useEffect)(()=>(document.body.classList.add(`bp-login-body`),()=>document.body.classList.remove(`bp-login-body`)),[]),(0,q.jsxs)(`div`,{className:`bp-login`,children:[e.showSplash&&(0,q.jsx)(`div`,{className:`bp-splash`,children:(0,q.jsx)(`div`,{className:`bp-logo bp-logo-splash`,children:i&&(0,q.jsx)(`img`,{src:i,alt:``})})}),e.unverifiedEmail&&(0,q.jsx)(Ye,{email:e.unverifiedEmail,onCancel:()=>e.setUnverifiedEmail(null)}),(0,q.jsxs)(`header`,{className:`bp-hero`,children:[(0,q.jsx)(`div`,{className:`bp-dots`,"aria-hidden":`true`,children:at.map((e,t)=>(0,q.jsx)(`span`,{style:{background:e,animationDelay:`${t*.25}s`}},e))}),(0,q.jsx)(`div`,{className:`bp-logo bp-logo-hero`,children:i&&(0,q.jsx)(`img`,{src:i,alt:r})}),(0,q.jsxs)(`p`,{className:`bp-tagline`,children:[`Think `,(0,q.jsx)(`span`,{children:`·`}),` Train `,(0,q.jsx)(`span`,{children:`·`}),` Triumph`]})]}),(0,q.jsxs)(`main`,{className:`bp-sheet`,children:[!e.regSubmittedEmail&&(0,q.jsxs)(`div`,{className:`bp-switch`,role:`tablist`,children:[(0,q.jsx)(`button`,{type:`button`,className:e.mode===`signin`?`is-active`:``,onClick:()=>e.switchMode(`signin`),children:`Sign In`}),(0,q.jsx)(`button`,{type:`button`,className:e.mode===`register`?`is-active`:``,onClick:()=>e.switchMode(`register`),children:`Register`})]}),e.mode===`signin`?(0,q.jsxs)(`form`,{onSubmit:e.handleSubmit,className:`bp-form`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{className:`bp-heading`,children:`Welcome back`}),(0,q.jsx)(`p`,{className:`bp-muted`,children:`Sign in to continue to your account.`})]}),e.error&&(0,q.jsxs)(`div`,{className:`bp-alert bp-alert-error`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),e.error]}),e.notice&&(0,q.jsxs)(`div`,{className:`bp-alert bp-alert-ok`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`}),e.notice]}),(0,q.jsx)(X,{label:`Email`,icon:`fa-regular fa-envelope`,children:(0,q.jsx)(`input`,{type:`email`,value:e.email,onChange:t=>e.setEmail(t.target.value),placeholder:`name@example.com`,autoComplete:`email`,required:!0})}),(0,q.jsx)(X,{label:`Password`,icon:`fa-solid fa-lock`,trailing:(0,q.jsx)(`button`,{type:`button`,className:`bp-eye`,onClick:()=>n(e=>!e),"aria-label":`Toggle password visibility`,children:(0,q.jsx)(`i`,{className:t?`fa-regular fa-eye-slash`:`fa-regular fa-eye`})}),children:(0,q.jsx)(`input`,{type:t?`text`:`password`,value:e.password,onChange:t=>e.setPassword(t.target.value),placeholder:`Enter your password`,autoComplete:`current-password`,required:!0})}),(0,q.jsx)(`button`,{type:`button`,className:`bp-link`,onClick:e.handleForgotPassword,disabled:e.resetSending,children:e.resetSending?`Sending reset link...`:`Forgot password?`}),(0,q.jsx)(`button`,{type:`submit`,className:`bp-cta`,disabled:e.loading,children:e.loading?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Signing in...`]}):`Sign In`})]}):e.regSubmittedEmail?(0,q.jsxs)(`div`,{className:`bp-form`,children:[(0,q.jsx)(`div`,{className:`bp-done-icon`,children:(0,q.jsx)(`i`,{className:`fa-regular fa-envelope`})}),(0,q.jsx)(`h2`,{className:`bp-heading bp-center`,children:`Registration submitted`}),(0,q.jsxs)(`p`,{className:`bp-muted bp-center`,children:[`A verification link has been sent to `,(0,q.jsx)(`strong`,{children:e.regSubmittedEmail}),`. Verify your email, then sign in once your institute approves your account.`]}),(0,q.jsx)(`button`,{type:`button`,className:`bp-cta`,onClick:e.backToSignIn,children:`Back to Sign In`})]}):(0,q.jsxs)(`form`,{onSubmit:e.handleRegisterSubmit,className:`bp-form`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{className:`bp-heading`,children:`Create an account`}),(0,q.jsx)(`p`,{className:`bp-muted`,children:`Request access to your institute's portal.`})]}),e.regError&&(0,q.jsxs)(`div`,{className:`bp-alert bp-alert-error`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),e.regError]}),(0,q.jsx)(X,{label:`Full name`,icon:`fa-regular fa-user`,children:(0,q.jsx)(`input`,{value:e.reg.fullName,onChange:t=>e.setRegField(`fullName`,t.target.value),placeholder:`Your full name`,required:!0})}),(0,q.jsx)(X,{label:`Email`,icon:`fa-regular fa-envelope`,children:(0,q.jsx)(`input`,{type:`email`,value:e.reg.email,onChange:t=>e.setRegField(`email`,t.target.value),placeholder:`name@example.com`,required:!0})}),(0,q.jsx)(X,{label:`Phone (optional)`,icon:`fa-solid fa-phone`,children:(0,q.jsx)(`input`,{type:`tel`,value:e.reg.phone,onChange:t=>e.setRegField(`phone`,t.target.value),placeholder:`Your phone number`})}),(0,q.jsx)(X,{label:`Branch code (optional)`,icon:`fa-solid fa-hashtag`,children:(0,q.jsx)(`input`,{value:e.reg.branchCode,onChange:t=>e.setRegField(`branchCode`,t.target.value),onBlur:t=>e.checkBranchCode(t.target.value),placeholder:`Code from your branch`})}),e.branchCodeStatus===`checking`&&(0,q.jsxs)(`p`,{className:`bp-hint`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Checking code...`]}),e.branchCodeStatus===`valid`&&e.resolvedBranch&&(0,q.jsxs)(`p`,{className:`bp-hint bp-hint-ok`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`}),` `,e.resolvedBranch.name]}),e.branchCodeStatus===`invalid`&&(0,q.jsxs)(`p`,{className:`bp-hint bp-hint-bad`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),` Invalid branch code.`]}),(0,q.jsx)(X,{label:`Password`,icon:`fa-solid fa-lock`,children:(0,q.jsx)(`input`,{type:`password`,value:e.reg.password,onChange:t=>e.setRegField(`password`,t.target.value),placeholder:`At least 6 characters`,minLength:6,required:!0})}),(0,q.jsx)(X,{label:`Confirm password`,icon:`fa-solid fa-lock`,children:(0,q.jsx)(`input`,{type:`password`,value:e.reg.confirmPassword,onChange:t=>e.setRegField(`confirmPassword`,t.target.value),placeholder:`Re-enter your password`,minLength:6,required:!0})}),(0,q.jsx)(`button`,{type:`submit`,className:`bp-cta`,disabled:e.regLoading||!e.instituteReady||!e.institute?.id||e.branchCodeStatus===`checking`,children:e.regLoading?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Submitting...`]}):`Request Access`})]}),(0,q.jsxs)(`p`,{className:`bp-footer`,children:[(0,q.jsx)(h,{to:`/policies#terms`,children:`Terms & Conditions`}),` · `,(0,q.jsx)(h,{to:`/policies#privacy`,children:`Privacy Policy`})]}),(0,q.jsxs)(`p`,{className:`bp-footer`,children:[`© `,new Date().getFullYear(),` `,r,`. All rights reserved.`]})]})]})}var st=[`#f97316`,`#facc15`,`#38bdf8`,`#f97316`,`#facc15`,`#38bdf8`,`#f97316`,`#facc15`];function Z({label:e,icon:t,children:n,trailing:r}){return(0,q.jsxs)(`label`,{className:`im-group`,children:[(0,q.jsx)(`span`,{className:`im-label`,children:e}),(0,q.jsxs)(`span`,{className:`im-field`,children:[(0,q.jsx)(`i`,{className:`${t} im-field-icon`}),n,r]})]})}function ct(){let e=nt(),[t,n]=(0,V.useState)(!1),r=`Impact Master Brain Academy`,i=e.logoUrl;return(0,V.useEffect)(()=>(document.body.classList.add(`im-login-body`),()=>document.body.classList.remove(`im-login-body`)),[]),(0,q.jsxs)(`div`,{className:`im-login`,children:[e.showSplash&&(0,q.jsx)(`div`,{className:`im-splash`,children:(0,q.jsx)(`div`,{className:`im-logo im-logo-splash`,children:i&&(0,q.jsx)(`img`,{src:i,alt:``})})}),e.unverifiedEmail&&(0,q.jsx)(Ye,{email:e.unverifiedEmail,onCancel:()=>e.setUnverifiedEmail(null)}),(0,q.jsxs)(`header`,{className:`im-hero`,children:[(0,q.jsx)(`div`,{className:`im-dots`,"aria-hidden":`true`,children:st.map((e,t)=>(0,q.jsx)(`span`,{style:{background:e,animationDelay:`${t*.25}s`}},t))}),(0,q.jsx)(`div`,{className:`im-logo im-logo-hero`,children:i&&(0,q.jsx)(`img`,{src:i,alt:r})}),(0,q.jsx)(`h1`,{className:`im-title`,children:r}),(0,q.jsxs)(`p`,{className:`im-tagline`,children:[`Focus `,(0,q.jsx)(`span`,{children:`·`}),` Practice `,(0,q.jsx)(`span`,{children:`·`}),` Impact`]})]}),(0,q.jsxs)(`main`,{className:`im-sheet`,children:[!e.regSubmittedEmail&&(0,q.jsxs)(`div`,{className:`im-switch`,role:`tablist`,children:[(0,q.jsx)(`button`,{type:`button`,className:e.mode===`signin`?`is-active`:``,onClick:()=>e.switchMode(`signin`),children:`Sign In`}),(0,q.jsx)(`button`,{type:`button`,className:e.mode===`register`?`is-active`:``,onClick:()=>e.switchMode(`register`),children:`Register`})]}),e.mode===`signin`?(0,q.jsxs)(`form`,{onSubmit:e.handleSubmit,className:`im-form`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{className:`im-heading`,children:`Welcome back`}),(0,q.jsx)(`p`,{className:`im-muted`,children:`Sign in to continue to your account.`})]}),e.error&&(0,q.jsxs)(`div`,{className:`im-alert im-alert-error`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),e.error]}),e.notice&&(0,q.jsxs)(`div`,{className:`im-alert im-alert-ok`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`}),e.notice]}),(0,q.jsx)(Z,{label:`Email`,icon:`fa-regular fa-envelope`,children:(0,q.jsx)(`input`,{type:`email`,value:e.email,onChange:t=>e.setEmail(t.target.value),placeholder:`name@example.com`,autoComplete:`email`,required:!0})}),(0,q.jsx)(Z,{label:`Password`,icon:`fa-solid fa-lock`,trailing:(0,q.jsx)(`button`,{type:`button`,className:`im-eye`,onClick:()=>n(e=>!e),"aria-label":`Toggle password visibility`,children:(0,q.jsx)(`i`,{className:t?`fa-regular fa-eye-slash`:`fa-regular fa-eye`})}),children:(0,q.jsx)(`input`,{type:t?`text`:`password`,value:e.password,onChange:t=>e.setPassword(t.target.value),placeholder:`Enter your password`,autoComplete:`current-password`,required:!0})}),(0,q.jsx)(`button`,{type:`button`,className:`im-link`,onClick:e.handleForgotPassword,disabled:e.resetSending,children:e.resetSending?`Sending reset link...`:`Forgot password?`}),(0,q.jsx)(`button`,{type:`submit`,className:`im-cta`,disabled:e.loading,children:e.loading?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Signing in...`]}):`Sign In`})]}):e.regSubmittedEmail?(0,q.jsxs)(`div`,{className:`im-form`,children:[(0,q.jsx)(`div`,{className:`im-done-icon`,children:(0,q.jsx)(`i`,{className:`fa-regular fa-envelope`})}),(0,q.jsx)(`h2`,{className:`im-heading im-center`,children:`Registration submitted`}),(0,q.jsxs)(`p`,{className:`im-muted im-center`,children:[`A verification link has been sent to `,(0,q.jsx)(`strong`,{children:e.regSubmittedEmail}),`. Verify your email, then sign in once your institute approves your account.`]}),(0,q.jsx)(`button`,{type:`button`,className:`im-cta`,onClick:e.backToSignIn,children:`Back to Sign In`})]}):(0,q.jsxs)(`form`,{onSubmit:e.handleRegisterSubmit,className:`im-form`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{className:`im-heading`,children:`Create an account`}),(0,q.jsx)(`p`,{className:`im-muted`,children:`Request access to your institute's portal.`})]}),e.regError&&(0,q.jsxs)(`div`,{className:`im-alert im-alert-error`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),e.regError]}),(0,q.jsx)(Z,{label:`Full name`,icon:`fa-regular fa-user`,children:(0,q.jsx)(`input`,{value:e.reg.fullName,onChange:t=>e.setRegField(`fullName`,t.target.value),placeholder:`Your full name`,required:!0})}),(0,q.jsx)(Z,{label:`Email`,icon:`fa-regular fa-envelope`,children:(0,q.jsx)(`input`,{type:`email`,value:e.reg.email,onChange:t=>e.setRegField(`email`,t.target.value),placeholder:`name@example.com`,required:!0})}),(0,q.jsx)(Z,{label:`Phone (optional)`,icon:`fa-solid fa-phone`,children:(0,q.jsx)(`input`,{type:`tel`,value:e.reg.phone,onChange:t=>e.setRegField(`phone`,t.target.value),placeholder:`Your phone number`})}),(0,q.jsx)(Z,{label:`Branch code (optional)`,icon:`fa-solid fa-hashtag`,children:(0,q.jsx)(`input`,{value:e.reg.branchCode,onChange:t=>e.setRegField(`branchCode`,t.target.value),onBlur:t=>e.checkBranchCode(t.target.value),placeholder:`Code from your branch`})}),e.branchCodeStatus===`checking`&&(0,q.jsxs)(`p`,{className:`im-hint`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Checking code...`]}),e.branchCodeStatus===`valid`&&e.resolvedBranch&&(0,q.jsxs)(`p`,{className:`im-hint im-hint-ok`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`}),` `,e.resolvedBranch.name]}),e.branchCodeStatus===`invalid`&&(0,q.jsxs)(`p`,{className:`im-hint im-hint-bad`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),` Invalid branch code.`]}),(0,q.jsx)(Z,{label:`Password`,icon:`fa-solid fa-lock`,children:(0,q.jsx)(`input`,{type:`password`,value:e.reg.password,onChange:t=>e.setRegField(`password`,t.target.value),placeholder:`At least 6 characters`,minLength:6,required:!0})}),(0,q.jsx)(Z,{label:`Confirm password`,icon:`fa-solid fa-lock`,children:(0,q.jsx)(`input`,{type:`password`,value:e.reg.confirmPassword,onChange:t=>e.setRegField(`confirmPassword`,t.target.value),placeholder:`Re-enter your password`,minLength:6,required:!0})}),(0,q.jsx)(`button`,{type:`submit`,className:`im-cta`,disabled:e.regLoading||!e.instituteReady||!e.institute?.id||e.branchCodeStatus===`checking`,children:e.regLoading?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Submitting...`]}):`Request Access`})]}),(0,q.jsxs)(`p`,{className:`im-footer`,children:[(0,q.jsx)(h,{to:`/policies#terms`,children:`Terms & Conditions`}),` · `,(0,q.jsx)(h,{to:`/policies#privacy`,children:`Privacy Policy`})]}),(0,q.jsxs)(`p`,{className:`im-footer`,children:[`© `,new Date().getFullYear(),` `,r,`. All rights reserved.`]})]})]})}var lt={"star-genius-abacus":it,"brain-power-zone":ot,impactmasterbrainacademy:ct},ut=o.isNativePlatform()||!1;function dt(){let{instituteSlug:e}=t(),n=ut?lt[e]:null;return n?(0,q.jsx)(n,{}):(0,q.jsx)(et,{})}function ft(){let{institute:e}=t(),n=e?.name||`Abacus`,{hash:r}=_();return(0,V.useEffect)(()=>{r&&document.getElementById(r.slice(1))?.scrollIntoView()},[r]),(0,q.jsxs)(`div`,{className:`policies`,children:[(0,q.jsxs)(`header`,{className:`policies-hero`,children:[(0,q.jsx)(h,{to:`/login`,className:`policies-back`,children:`← Back to login`}),(0,q.jsx)(`h1`,{children:n}),(0,q.jsx)(`p`,{children:`Policies for students and parents`}),(0,q.jsxs)(`nav`,{className:`policies-nav`,children:[(0,q.jsx)(`a`,{href:`#terms`,children:`Terms`}),(0,q.jsx)(`a`,{href:`#privacy`,children:`Privacy`}),(0,q.jsx)(`a`,{href:`#delete-account`,children:`Delete account`})]})]}),(0,q.jsxs)(`section`,{className:`policies-card`,children:[(0,q.jsx)(`h2`,{id:`terms`,children:`Terms & Conditions`}),(0,q.jsx)(`h3`,{children:`1. Acceptance`}),(0,q.jsxs)(`p`,{children:[`These terms apply to the `,n,` website, student panel, mobile app and class enrolment. For students under 18, a parent or guardian accepts them on the student's behalf.`]}),(0,q.jsx)(`h3`,{children:`2. Student accounts`}),(0,q.jsx)(`p`,{children:`Accounts are created by your branch after enrolment. Keep your login details private and tell us if you think someone else is using your account. Accounts may not be shared, sold or transferred.`}),(0,q.jsx)(`h3`,{children:`3. Classes, levels and demo class`}),(0,q.jsx)(`p`,{children:`The demo class is free and does not oblige you to enrol. Timings, centres and teachers may change; we give notice where we can. Moving to the next level depends on assessment, and we do not guarantee specific results.`}),(0,q.jsx)(`h3`,{children:`4. Fees and refunds`}),(0,q.jsx)(`p`,{children:`Fees are confirmed by your branch at enrolment and paid directly to the branch; the app does not take payments. Level fees already paid and kits or books already issued are generally not refundable unless the branch agrees otherwise in writing.`}),(0,q.jsx)(`h3`,{children:`5. Acceptable use`}),(0,q.jsx)(`p`,{children:`Do not access other people's accounts, copy or share course content, interfere with the app's security, or use the services for anything unlawful.`}),(0,q.jsx)(`h3`,{children:`6. Intellectual property`}),(0,q.jsxs)(`p`,{children:[`Course material, videos, logos and app content belong to `,n,` or its licensors and are for the enrolled student's own learning only.`]}),(0,q.jsx)(`h3`,{children:`7. Availability and changes`}),(0,q.jsx)(`p`,{children:`The app may sometimes be unavailable and features may change. We may suspend an account that breaks these terms or after a student leaves.`}),(0,q.jsx)(`h3`,{children:`8. Limitation of liability`}),(0,q.jsx)(`p`,{children:`The services are provided "as is". As far as the law allows, we are not liable for indirect or consequential loss. Your rights under Indian consumer law are not affected.`}),(0,q.jsx)(`h3`,{children:`9. Governing law`}),(0,q.jsx)(`p`,{children:`These terms are governed by the laws of India.`})]}),(0,q.jsxs)(`section`,{className:`policies-card`,children:[(0,q.jsx)(`h2`,{id:`privacy`,children:`Privacy Policy`}),(0,q.jsx)(`h3`,{children:`1. Who we are`}),(0,q.jsxs)(`p`,{children:[n,` runs abacus and mental maths classes and operates this website, student panel and mobile app.`]}),(0,q.jsx)(`h3`,{children:`2. Information we collect`}),(0,q.jsx)(`p`,{children:`Parent and student details, login details, messages, practice and test activity, fee records, and basic technical data such as device type and crash logs. We do not collect precise location, contacts or photos, and we do not use third-party advertising.`}),(0,q.jsx)(`h3`,{children:`3. How we use it`}),(0,q.jsx)(`p`,{children:`To enrol students, track progress, contact parents, keep the service secure and meet legal obligations. We do not sell personal data, and children's data is never used for advertising or profiling.`}),(0,q.jsx)(`h3`,{children:`4. Sharing`}),(0,q.jsxs)(`p`,{children:[`Data is shared only within `,n,`, with hosting and service providers bound by confidentiality, or when the law or a child's safety requires it.`]}),(0,q.jsx)(`h3`,{children:`5. Children's privacy`}),(0,q.jsx)(`p`,{children:`Student accounts are created by the branch at a parent's request and with their consent. Parents can review, correct or delete their child's data.`}),(0,q.jsx)(`h3`,{children:`6. Security and retention`}),(0,q.jsx)(`p`,{children:`Data is sent over HTTPS and only authorised staff can access it. We keep records while the student is enrolled and up to 2 years afterwards, unless you ask us to delete them sooner or the law requires us to keep them.`}),(0,q.jsx)(`h3`,{children:`7. Your rights`}),(0,q.jsx)(`p`,{children:`Under India's Digital Personal Data Protection Act, 2023 you can ask to access, correct or delete your data, or withdraw consent, by contacting your branch.`}),(0,q.jsx)(`h3`,{children:`8. Changes`}),(0,q.jsx)(`p`,{children:`We update the date of this policy when it changes and tell parents about significant changes through the app or WhatsApp.`})]}),(0,q.jsxs)(`section`,{className:`policies-card`,children:[(0,q.jsx)(`h2`,{id:`delete-account`,children:`Delete your account and data`}),(0,q.jsxs)(`p`,{children:[`You can ask us to delete your `,n,` app account and its data at any time.`]}),(0,q.jsxs)(`ol`,{children:[(0,q.jsx)(`li`,{children:`Send a WhatsApp message or email to your branch with the subject "Account deletion request".`}),(0,q.jsx)(`li`,{children:`Include the student's name, branch and registered mobile number so we can confirm the request comes from the parent or guardian.`}),(0,q.jsx)(`li`,{children:`We confirm and delete the account within 30 days.`})]}),(0,q.jsxs)(`p`,{children:[(0,q.jsx)(`strong`,{children:`What is deleted:`}),` the login, profile details, practice and test history, scores and progress reports.`]}),(0,q.jsxs)(`p`,{children:[(0,q.jsx)(`strong`,{children:`What may be kept:`}),` fee receipts and enrolment records we must keep for accounting or tax purposes, only for the required period.`]}),(0,q.jsx)(`p`,{children:`You can also ask us to delete only some data (for example practice history) without closing the account.`})]})]})}function pt(){let e=b(),[t,n]=(0,V.useState)(`checking`),[i,a]=(0,V.useState)(``),[o,s]=(0,V.useState)(``),[c,l]=(0,V.useState)(!1),[u,d]=(0,V.useState)(!1),[f,h]=(0,V.useState)(null);(0,V.useEffect)(()=>(document.body.classList.add(`login-body`),()=>document.body.classList.remove(`login-body`)),[]),(0,V.useEffect)(()=>{let e=!1;async function t(){let t=new URLSearchParams(p.hash.replace(/^#/,``)),i=new URLSearchParams(p.search),a=t.get(`error_description`)||i.get(`error_description`);if(a){e||(h(a),n(`invalid`));return}let o=i.get(`code`);if(!(o||t.get(`type`)===`recovery`||t.get(`access_token`))){e||n(`invalid`);return}if(o){let{error:t}=await r.auth.exchangeCodeForSession(o);if(t&&!e){h(t.message),n(`invalid`);return}}let{data:{session:s}}=await r.auth.getSession();e||(s?(window.history.replaceState({},document.title,`/reset-password`),n(`ready`)):n(`invalid`))}return t(),()=>{e=!0}},[]);async function g(t){if(t.preventDefault(),h(null),i.length<6){h(`Password must be at least 6 characters.`);return}if(i!==o){h(`Passwords do not match.`);return}d(!0);let{error:a}=await r.auth.updateUser({password:i});if(d(!1),a){h(a.message);return}await r.auth.signOut(),n(`done`),setTimeout(()=>e(`/login`,{replace:!0}),2e3)}return(0,q.jsxs)(`div`,{className:`login-page-container layout-classic_centered`,children:[(0,q.jsx)(m,{}),(0,q.jsx)(`div`,{className:`login-right-pane`,children:(0,q.jsxs)(`div`,{className:`login-form-card`,children:[(0,q.jsxs)(`div`,{style:{marginBottom:`24px`,textAlign:`center`},children:[(0,q.jsx)(`h1`,{className:`login-title-text`,children:`Set a new password`}),(0,q.jsx)(`p`,{className:`login-subtitle-text`,children:`Choose a new password for your student account`})]}),f&&(0,q.jsxs)(`div`,{style:{background:`#fef2f2`,color:`#dc2626`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:600,marginBottom:`24px`,border:`1px solid #fecaca`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),(0,q.jsx)(`span`,{children:f})]}),t===`checking`&&(0,q.jsxs)(`p`,{style:{textAlign:`center`,fontWeight:600},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`,style:{marginRight:8}}),`Verifying your reset link...`]}),t===`invalid`&&(0,q.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,q.jsx)(`p`,{style:{fontWeight:600,marginBottom:20},children:`This reset link is invalid or has expired. Please request a new one.`}),(0,q.jsx)(`button`,{className:`login-submit-button`,type:`button`,onClick:()=>e(`/login`),children:(0,q.jsx)(`span`,{children:`Back to Sign In`})})]}),t===`done`&&(0,q.jsx)(`p`,{style:{textAlign:`center`,fontWeight:600,color:`#16a34a`},children:`Password updated. Redirecting you to sign in...`}),t===`ready`&&(0,q.jsxs)(`form`,{onSubmit:g,children:[(0,q.jsxs)(`div`,{className:`login-input-group`,children:[(0,q.jsx)(`label`,{className:`login-label`,children:`New password`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,q.jsx)(`input`,{type:c?`text`:`password`,value:i,onChange:e=>a(e.target.value),placeholder:`At least 6 characters`,autoComplete:`new-password`,required:!0,className:`login-input-field`}),(0,q.jsx)(`button`,{type:`button`,onClick:()=>l(!c),className:`login-password-toggle`,children:(0,q.jsx)(`i`,{className:c?`fa-solid fa-eye-slash`:`fa-solid fa-eye`})})]})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,style:{marginBottom:`30px`},children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Confirm new password`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,q.jsx)(`input`,{type:`password`,value:o,onChange:e=>s(e.target.value),placeholder:`Repeat new password`,autoComplete:`new-password`,required:!0,className:`login-input-field`})]})]}),(0,q.jsx)(`button`,{type:`submit`,disabled:u,className:`login-submit-button`,children:u?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,q.jsx)(`span`,{children:`Updating...`})]}):(0,q.jsx)(`span`,{children:`Update Password`})})]})]})})]})}function mt(){return(0,q.jsxs)(`div`,{className:`skel-root`,children:[(0,q.jsx)(`style`,{children:`
        .skel-root {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: var(--bg, #f8fafc);
          overflow: hidden;
        }
        .skel-shine {
          background: linear-gradient(
            90deg,
            color-mix(in srgb, var(--primary-blue, #2563eb) 10%, transparent) 25%,
            color-mix(in srgb, var(--primary-blue, #2563eb) 20%, transparent) 37%,
            color-mix(in srgb, var(--primary-blue, #2563eb) 10%, transparent) 63%
          );
          background-size: 400% 100%;
          animation: skelShimmer 1.4s ease infinite;
          border-radius: 10px;
        }
        .skel-shine-light {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.35) 25%,
            rgba(255, 255, 255, 0.6) 37%,
            rgba(255, 255, 255, 0.35) 63%
          );
          background-size: 400% 100%;
          animation: skelShimmer 1.4s ease infinite;
          border-radius: 10px;
        }
        @keyframes skelShimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .skel-navbar {
          height: 58px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 0 16px;
          background: color-mix(in srgb, var(--primary-blue, #0f766e) 97%, transparent);
        }
        .skel-navbar-icon {
          width: 22px;
          height: 16px;
          border-radius: 3px;
        }
        .skel-navbar-icon.round {
          width: 34px;
          height: 34px;
          border-radius: 50%;
        }

        .skel-body {
          display: flex;
          height: calc(100% - 58px);
        }
        .skel-sidebar {
          display: none;
          width: 220px;
          flex-direction: column;
          gap: 12px;
          padding: 18px 16px;
          border-right: 1px solid color-mix(in srgb, var(--border, #cbd5e1) 50%, transparent);
        }
        .skel-content {
          flex: 1;
          min-width: 0;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow: hidden;
        }
        .skel-card {
          background: var(--card-bg, #ffffff);
          border-radius: 18px;
          padding: 18px;
          box-shadow: 0 1px 3px rgba(15, 23, 42, 0.06);
        }
        .skel-stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .skel-week-bars {
          display: flex;
          align-items: flex-end;
          gap: 10px;
          height: 90px;
        }
        .skel-week-bar {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          height: 100%;
          justify-content: flex-end;
        }

        @media (min-width: 1025px) {
          .skel-sidebar { display: flex; }
          .skel-stat-grid { grid-template-columns: repeat(4, 1fr); }
          .skel-content { padding: 24px; gap: 20px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .skel-shine, .skel-shine-light { animation: none; }
        }
      `}),(0,q.jsxs)(`div`,{className:`skel-navbar`,children:[(0,q.jsx)(`div`,{className:`skel-shine-light skel-navbar-icon`}),(0,q.jsx)(`div`,{className:`skel-shine-light`,style:{width:34,height:34,borderRadius:10}}),(0,q.jsx)(`div`,{className:`skel-shine-light`,style:{width:100,height:14}}),(0,q.jsx)(`div`,{style:{flex:1}}),(0,q.jsx)(`div`,{className:`skel-shine-light skel-navbar-icon round`})]}),(0,q.jsxs)(`div`,{className:`skel-body`,children:[(0,q.jsx)(`div`,{className:`skel-sidebar`,children:Array.from({length:8}).map((e,t)=>(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:t===3?`65%`:`85%`,height:13}},t))}),(0,q.jsxs)(`div`,{className:`skel-content`,children:[(0,q.jsxs)(`div`,{className:`skel-card`,children:[(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`70%`,height:22,marginBottom:10}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`90%`,height:12,marginBottom:6}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`50%`,height:12}})]}),(0,q.jsxs)(`div`,{style:{display:`flex`,gap:10},children:[(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:110,height:34,borderRadius:999}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:90,height:34,borderRadius:999}})]}),(0,q.jsx)(`div`,{className:`skel-stat-grid`,children:Array.from({length:4}).map((e,t)=>(0,q.jsxs)(`div`,{className:`skel-card`,style:{padding:14},children:[(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:30,height:30,borderRadius:9,marginBottom:10}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`60%`,height:14,marginBottom:6}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`40%`,height:10}})]},t))}),(0,q.jsxs)(`div`,{className:`skel-card`,style:{border:`1px solid color-mix(in srgb, var(--gold, #f59e0b) 45%, transparent)`},children:[(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`45%`,height:16,marginBottom:10}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`85%`,height:12,marginBottom:14}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:130,height:36,borderRadius:12}})]}),(0,q.jsxs)(`div`,{className:`skel-card`,style:{flex:1,minHeight:150,display:`flex`,flexDirection:`column`,gap:14},children:[(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`35%`,height:14}}),(0,q.jsx)(`div`,{className:`skel-week-bars`,children:Array.from({length:7}).map((e,t)=>(0,q.jsxs)(`div`,{className:`skel-week-bar`,children:[(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`100%`,height:`${40+t%4*12}%`,borderRadius:8}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`70%`,height:8}})]},t))})]})]})]})]})}function ht({notice:e,onConsented:n}){let{signOut:r}=t(),[i]=(0,V.useState)(`en`),[a,o]=(0,V.useState)(!1),[s,c]=(0,V.useState)(!1),[l,u]=(0,V.useState)(null),[d,f]=(0,V.useState)(e.english_title),[p,m]=(0,V.useState)(e.english_content),[h,g]=(0,V.useState)((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),[_,v]=(0,V.useState)((e.optional_purposes||[]).map(e=>({...e,label_display:e.label_en,checked:!1})));(0,V.useEffect)(()=>{if(i===`en`){f(e.english_title),m(e.english_content),g((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),v(t=>(e.optional_purposes||[]).map(e=>{let n=t.find(t=>t.key===e.key);return{...e,label_display:e.label_en,checked:!!n?.checked}}));return}async function t(){o(!0),u(null);let{data:t,error:n}=await A(e.id,i);n?(console.error(`Translation load failed, falling back to English`,n),y()):!t||t.status!==`approved`?y():(f(t.translated_title),m(t.translated_content),g((e.required_purposes||[]).map(e=>{let n=t.translated_required_purposes?.find(t=>t.key===e.key);return{...e,label_display:n?.label_translated||e.label_en}})),v(n=>(e.optional_purposes||[]).map(e=>{let r=t.translated_optional_purposes?.find(t=>t.key===e.key),i=n.find(t=>t.key===e.key);return{...e,label_display:r?.label_translated||e.label_en,checked:!!i?.checked}}))),o(!1)}t()},[i,e]);function y(){f(e.english_title),m(e.english_content),g((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),v(t=>(e.optional_purposes||[]).map(e=>{let n=t.find(t=>t.key===e.key);return{...e,label_display:e.label_en,checked:!!n?.checked}}))}function b(e){v(t=>t.map(t=>t.key===e?{...t,checked:!t.checked}:t))}async function x(t=!1){c(!0),u(null);let r=[],a=[];h.forEach(e=>r.push(e.key)),_.forEach(e=>{!t&&e.checked?r.push(e.key):a.push(e.key)});let{data:o,error:s}=await N(e.id,i,r,a);s?(u(s.message),c(!1)):n()}return(0,q.jsxs)(`div`,{className:`consent-fullscreen-overlay`,children:[(0,q.jsx)(`style`,{children:`
        .consent-fullscreen-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(15, 23, 42, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 99999;
          padding: 20px;
          font-family: "Sora", "Inter", sans-serif;
        }
        .consent-card {
          background: #ffffff;
          border: 1px solid var(--border, #e2e8f0);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.15);
          border-radius: 24px;
          width: 100%;
          max-width: 720px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          animation: consentFadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes consentFadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .consent-header {
          padding: 24px 30px;
          border-bottom: 1px solid var(--border, #e2e8f0);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          background: #ffffff;
        }
        .consent-title {
          margin: 0;
          font-size: 20px;
          font-weight: 700;
          color: var(--dark-blue, #0f172a);
          font-family: "Sora", sans-serif;
        }
        .consent-lang-container {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .consent-lang-label {
          font-size: 12px;
          color: var(--text-light, #64748b);
          font-weight: 600;
        }
        .consent-select-lang {
          padding: 8px 12px;
          background: #f8fafc;
          border: 1px solid var(--border, #cbd5e1);
          border-radius: 10px;
          color: var(--dark-blue, #0f172a);
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          outline: none;
          transition: all 0.2s;
        }
        .consent-select-lang:focus {
          border-color: var(--primary-blue, #3b82f6);
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.15);
        }
        .consent-content-area {
          padding: 24px 30px;
          overflow-y: auto;
          flex: 1;
          border-bottom: 1px solid var(--border, #e2e8f0);
          min-height: 160px;
          background: #ffffff;
        }
        .consent-spinner-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          min-height: 150px;
        }
        .consent-spinner {
          width: 32px;
          height: 32px;
          border: 3px solid rgba(59, 130, 246, 0.15);
          border-top-color: var(--primary-blue, #3b82f6);
          border-radius: 50%;
          animation: consentSpin 0.8s linear infinite;
        }
        @keyframes consentSpin {
          to { transform: rotate(360deg); }
        }
        .consent-notice-body {
          font-size: 14.5px;
          line-height: 1.65;
          color: #334155;
          white-space: pre-wrap;
        }
        .consent-purposes-section {
          padding: 24px 30px;
          background: #f8fafc;
          border-bottom: 1px solid var(--border, #e2e8f0);
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .consent-purpose-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .consent-group-heading {
          margin: 0;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          color: var(--text-light, #64748b);
          font-weight: 700;
        }
        .consent-purposes-list {
          display: grid;
          gap: 8px;
        }
        .consent-purpose-label {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13.5px;
          color: var(--dark-blue, #0f172a);
          cursor: pointer;
          padding: 10px 14px;
          background: #ffffff;
          border: 1px solid var(--border, #e2e8f0);
          border-radius: 12px;
          transition: all 0.2s;
          user-select: none;
        }
        .consent-purpose-label:hover:not(.disabled) {
          border-color: var(--primary-blue, #3b82f6);
          background: #f0f7ff;
        }
        .consent-purpose-label.disabled {
          color: var(--text-light, #64748b);
          background: #f1f5f9;
          cursor: default;
          border-color: #e2e8f0;
        }
        .consent-checkbox {
          width: 18px;
          height: 18px;
          accent-color: var(--primary-blue, #3b82f6);
          cursor: inherit;
        }
        .consent-error-msg {
          color: #ef4444;
          font-size: 13px;
          margin: 12px 30px 0;
          font-weight: 600;
        }
        .consent-footer {
          padding: 20px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 14px;
          background: #ffffff;
        }
        .consent-footer-right {
          display: flex;
          gap: 12px;
        }
        .consent-btn {
          padding: 12px 22px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: "Sora", sans-serif;
        }
        .consent-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        .consent-btn-primary {
          background: linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af));
          color: #ffffff;
          box-shadow: 0 4px 10px -2px rgba(59, 130, 246, 0.3);
        }
        .consent-btn-primary:hover:not(:disabled) {
          transform: translateY(-1.5px);
          box-shadow: 0 10px 20px -5px rgba(59, 130, 246, 0.4);
        }
        .consent-btn-primary:active:not(:disabled) {
          transform: translateY(0);
        }
        .consent-btn-secondary {
          background: transparent;
          border: 1px solid var(--border, #cbd5e1);
          color: var(--text-light, #64748b);
        }
        .consent-btn-secondary:hover:not(:disabled) {
          background: #f8fafc;
          color: var(--dark-blue, #0f172a);
          border-color: var(--text-light, #64748b);
        }
        .consent-btn-danger {
          background: transparent;
          border: 1px solid #fee2e2;
          color: #ef4444;
        }
        .consent-btn-danger:hover:not(:disabled) {
          background: #fef2f2;
          border-color: #fca5a5;
        }

        @media (max-width: 640px) {
          .consent-fullscreen-overlay {
            padding: 0;
            align-items: flex-end;
          }
          .consent-card {
            max-width: 100%;
            max-height: 95vh;
            width: 100%;
            border-radius: 20px 20px 0 0;
          }
          .consent-header {
            padding: 16px 18px;
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
          .consent-title {
            font-size: 17px;
          }
          .consent-lang-container {
            width: 100%;
            justify-content: space-between;
          }
          .consent-select-lang {
            flex: 1;
            max-width: 60%;
          }
          .consent-content-area {
            padding: 16px 18px;
            min-height: 100px;
          }
          .consent-notice-body {
            font-size: 13.5px;
          }
          .consent-purposes-section {
            padding: 16px 18px;
            gap: 14px;
          }
          .consent-purpose-label {
            font-size: 13px;
            padding: 10px 12px;
          }
          .consent-error-msg {
            margin: 12px 18px 0;
          }
          .consent-footer {
            padding: 14px 18px 18px;
            flex-direction: column-reverse;
            align-items: stretch;
            gap: 10px;
          }
          .consent-footer-right {
            flex-direction: column-reverse;
            width: 100%;
            gap: 10px;
          }
          .consent-btn {
            width: 100%;
            padding: 13px 16px;
          }
        }
      `}),(0,q.jsxs)(`div`,{className:`consent-card`,children:[(0,q.jsx)(`div`,{className:`consent-header`,children:(0,q.jsx)(`h2`,{className:`consent-title`,children:d})}),(0,q.jsx)(`div`,{className:`consent-content-area`,children:a?(0,q.jsxs)(`div`,{className:`consent-spinner-container`,children:[(0,q.jsx)(`div`,{className:`consent-spinner`}),(0,q.jsx)(`p`,{style:{marginTop:14,color:`var(--text-light, #64748b)`,fontSize:13.5,fontWeight:500},children:`Retrieving translation...`})]}):(0,q.jsx)(`div`,{className:`consent-notice-body`,children:p})}),(0,q.jsxs)(`div`,{className:`consent-purposes-section`,children:[h.length>0&&(0,q.jsxs)(`div`,{className:`consent-purpose-group`,children:[(0,q.jsx)(`h4`,{className:`consent-group-heading`,children:`Required Processing (Core Services)`}),(0,q.jsx)(`div`,{className:`consent-purposes-list`,children:h.map(e=>(0,q.jsxs)(`label`,{className:`consent-purpose-label disabled`,children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:!0,disabled:!0,className:`consent-checkbox`}),(0,q.jsx)(`span`,{children:e.label_display})]},e.key))})]}),_.length>0&&(0,q.jsxs)(`div`,{className:`consent-purpose-group`,children:[(0,q.jsx)(`h4`,{className:`consent-group-heading`,children:`Optional Processing (Preferences)`}),(0,q.jsx)(`div`,{className:`consent-purposes-list`,children:_.map(e=>(0,q.jsxs)(`label`,{className:`consent-purpose-label`,children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:e.checked,onChange:()=>b(e.key),disabled:s,className:`consent-checkbox`}),(0,q.jsx)(`span`,{children:e.label_display})]},e.key))})]})]}),l&&(0,q.jsxs)(`p`,{className:`consent-error-msg`,children:[`Error saving consent: `,l]}),(0,q.jsxs)(`div`,{className:`consent-footer`,children:[(0,q.jsxs)(`button`,{className:`consent-btn consent-btn-danger`,onClick:r,disabled:s||a,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),` Sign Out`]}),(0,q.jsxs)(`div`,{className:`consent-footer-right`,children:[_.length>0&&(0,q.jsx)(`button`,{className:`consent-btn consent-btn-secondary`,onClick:()=>x(!0),disabled:s||a,children:`Decline optional use`}),(0,q.jsx)(`button`,{className:`consent-btn consent-btn-primary`,onClick:()=>x(!1),disabled:s||a,children:`Agree and continue`})]})]})]})]})}function gt(){let{signOut:e}=t();return(0,q.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,q.jsx)(m,{}),(0,q.jsx)(`style`,{children:`
        .access-blocked-card { animation: accessSpring 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        @keyframes accessSpring {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}),(0,q.jsxs)(`div`,{className:`access-blocked-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,q.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:`linear-gradient(135deg, #f59e0b, #b45309)`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px rgba(245, 158, 11, 0.5)`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-triangle-exclamation`})})}),(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,q.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, #f59e0b 14%, transparent)`,color:`#b45309`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Access Paused`]})}),(0,q.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:`Panel Unavailable`}),(0,q.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:`There is an issue from your institute's side. Please contact your institute to restore access to your student panel.`}),(0,q.jsxs)(`button`,{type:`button`,onClick:e,style:{marginTop:`28px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,q.jsx)(`span`,{children:`Log out`})]})]})]})}function _t(){if(window.location.pathname!==`/exam`)return!1;let e=window.location.search;return e.includes(`slug=`)||e.includes(`examId=`)||e.includes(`accessToken=`)}var vt=150,yt=!1;function bt({children:e}){let{user:n,loading:r,sessionBlocked:i,accessBlocked:a,replaceActiveSession:o,signOut:c,consentRequiredNotice:l,setConsentRequiredNotice:u,consentCheckFailed:d,retryConsentCheck:f}=t(),[p,h]=(0,V.useState)(!1),[g,_]=(0,V.useState)(``),[v,y]=(0,V.useState)(yt);if((0,V.useEffect)(()=>{if(yt)return;let e=setTimeout(()=>{yt=!0,y(!0)},vt);return()=>clearTimeout(e)},[]),r||!v)return(0,q.jsx)(mt,{});if(!n){if(_t())return e;let t=window.location.pathname+window.location.search;return(0,q.jsx)(s,{to:`/login`,state:{from:t&&t!==`/login`&&!t.startsWith(`/login?`)?t:`/`},replace:!0})}if(a)return(0,q.jsx)(gt,{});if(!n.email_confirmed_at)return(0,q.jsx)(Ye,{});if(i){let e=i.activeSession,t=![`invalid_membership`,`evicted`,`validity_expired`].includes(i.reason);async function n(){_(``),h(!0);try{let e=await o();e?.error&&_(e.error.message||`Could not log out the other browser.`)}catch(e){_(e?.message||`Could not log out the other browser. Check your connection and try again.`)}finally{h(!1)}}return(0,q.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:99999,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
          radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 35%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 25%, transparent) 50%, rgba(15, 23, 42, 0.94) 85%),
          linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 15%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 15%, transparent) 1px, transparent 1px)
        `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backgroundPosition:`center center`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,q.jsx)(m,{}),(0,q.jsx)(`div`,{style:{position:`absolute`,width:`480px`,height:`480px`,borderRadius:`50%`,background:`radial-gradient(circle, color-mix(in srgb, var(--primary-blue, #3b82f6) 35%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 20%, transparent) 45%, transparent 70%)`,filter:`blur(60px)`,pointerEvents:`none`,zIndex:0,animation:`glowPulse 4s ease-in-out infinite alternate`}}),(0,q.jsx)(`style`,{children:`
          @keyframes glowPulse {
            from { transform: scale(0.9) opacity(0.7); }
            to { transform: scale(1.1) opacity(1); }
          }
          .session-blocked-card {
            animation: modalSpring 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
          }
          @keyframes modalSpring {
            from { opacity: 0; transform: scale(0.88) translateY(20px); }
            to { opacity: 1; transform: scale(1) translateY(0); }
          }
          .active-pulse-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background-color: #22c55e;
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
            animation: activePulse 2s infinite;
          }
          @keyframes activePulse {
            0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
            70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
            100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
          }
          .session-btn-primary {
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
            position: relative;
            overflow: hidden;
          }
          .session-btn-primary::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(60deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%);
            transform: rotate(30deg) translateX(-100%);
            transition: transform 0.6s ease;
          }
          .session-btn-primary:hover::after {
            transform: rotate(30deg) translateX(100%);
          }
          .session-btn-primary:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 14px 28px -4px color-mix(in srgb, var(--primary-blue) 55%, transparent) !important;
          }
          .session-btn-primary:active:not(:disabled) {
            transform: translateY(0);
          }
          .session-btn-secondary {
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
          }
          .session-btn-secondary:hover {
            border-color: var(--primary-blue) !important;
            background: color-mix(in srgb, var(--primary-blue) 10%, transparent) !important;
            color: var(--primary-blue) !important;
            transform: translateY(-1px);
          }
        `}),(0,q.jsxs)(`div`,{className:`session-blocked-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.94))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent), 0 0 0 1px rgba(255, 255, 255, 0.8) inset, 0 2px 0 rgba(255, 255, 255, 0.9) inset`},children:[(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,q.jsx)(`div`,{style:{position:`relative`,width:`72px`,height:`72px`,borderRadius:`24px`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent), 0 0 0 6px color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-shield-halved`})})}),(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,q.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Active Session Lock`]})}),(0,q.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.55rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 8px`,letterSpacing:`-0.02em`},children:t?`Account Already in Use`:i.reason===`evicted`?`Signed Out`:i.reason===`validity_expired`?`Access Expired`:`Account Not Available`}),(0,q.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.94rem`,fontWeight:`600`,lineHeight:`1.55`},children:i.message}),e?(0,q.jsxs)(`div`,{style:{marginTop:`22px`,padding:`18px 20px`,border:`1px solid var(--border, rgba(59, 130, 246, 0.2))`,borderRadius:`20px`,textAlign:`left`,background:`linear-gradient(135deg, color-mix(in srgb, var(--primary-blue, #3b82f6) 8%, transparent) 0%, color-mix(in srgb, var(--gold, #94a3b8) 6%, transparent) 100%)`,display:`flex`,alignItems:`center`,gap:`16px`,boxShadow:`0 4px 14px color-mix(in srgb, var(--primary-blue, #3b82f6) 6%, transparent)`},children:[(0,q.jsx)(`div`,{style:{width:`48px`,height:`48px`,borderRadius:`16px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 16%, transparent)`,color:`var(--primary-blue, #3b82f6)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.25rem`,flexShrink:0,boxShadow:`0 2px 8px color-mix(in srgb, var(--primary-blue) 15%, transparent)`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-desktop`})}),(0,q.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`8px`,marginBottom:`4px`},children:[(0,q.jsx)(`span`,{style:{fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,fontSize:`0.98rem`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e.browser||`Other Browser`}),(0,q.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`5px`,fontSize:`0.72rem`,color:`#15803d`,fontWeight:`800`,background:`#dcfce7`,padding:`2px 8px`,borderRadius:`999px`},children:[(0,q.jsx)(`span`,{className:`active-pulse-dot`}),`Active Now`]})]}),(0,q.jsxs)(`div`,{style:{color:`var(--text-light, #64748b)`,fontSize:`0.83rem`,fontWeight:`600`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,q.jsx)(`i`,{className:`fa-regular fa-clock`,style:{fontSize:`0.78rem`}}),`Last active `,e.last_seen_at?new Date(e.last_seen_at).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}):`recently`]})]})]}):null,g?(0,q.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err) 20%, transparent)`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,q.jsx)(`span`,{children:g})]}):null,(0,q.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,marginTop:`26px`},children:[t?(0,q.jsx)(`button`,{className:`session-btn-primary`,type:`button`,onClick:n,disabled:p,style:{flex:1,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:p?`not-allowed`:`pointer`,opacity:p?.7:1,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:p?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,q.jsx)(`span`,{children:`Logging out...`})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,q.jsx)(`span`,{children:`Log out other browser`})]})}):null,(0,q.jsx)(`button`,{className:`session-btn-secondary`,type:`button`,onClick:c,style:{flex:t?void 0:1,border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`15px 22px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`},children:t?`Cancel`:`Sign out`})]})]})]})}return d?(0,q.jsx)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`,padding:24},children:(0,q.jsxs)(`div`,{style:{maxWidth:420,textAlign:`center`,fontFamily:`'Sora', sans-serif`},children:[(0,q.jsx)(`h2`,{style:{color:`var(--dark-blue, #0f172a)`,marginBottom:8},children:`Couldn't connect`}),(0,q.jsx)(`p`,{style:{color:`#64748b`,marginBottom:20},children:`Please check your internet connection and try again.`}),(0,q.jsx)(`button`,{type:`button`,onClick:f,style:{border:`none`,borderRadius:`18px`,padding:`14px 28px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#fff`,background:`var(--primary, #2563eb)`,cursor:`pointer`},children:`Try again`}),(0,q.jsx)(`button`,{type:`button`,onClick:c,style:{display:`block`,margin:`14px auto 0`,background:`none`,border:`none`,color:`#64748b`,cursor:`pointer`},children:`Sign out`})]})}):l?(0,q.jsx)(ht,{notice:l,onConsented:()=>u(null)}):e}function xt({children:e}){let{profile:n}=t(),{pathname:r}=_(),a=b(),{ready:o,unlockLevelByPath:s,activeSubjects:c,enabledFeatures:l}=i(),u=W(r),d=_e(r),f=ve(`practice_playground`,l),p=f?`/practice`:`/`,m=f?`Back to Practice`:`Back to Home`,h=te(n?.current_level),{taught:g,required:v,locked:y}=R(r,h,s);return!o&&(re(r)||u||d)?null:!G(u,c)||!ve(d,l)?(0,q.jsx)(St,{onBack:()=>a(p),backLabel:m}):g&&(v===0||!y)?e:(0,q.jsx)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:(0,q.jsxs)(`div`,{style:{maxWidth:`520px`,margin:`60px auto`,padding:`40px 32px`,textAlign:`center`,background:`var(--card-bg, #fff)`,border:`1px solid var(--border, #e2e8f0)`,borderRadius:`28px`},children:[(0,q.jsx)(`div`,{style:{width:`72px`,height:`72px`,margin:`0 auto 20px`,borderRadius:`24px`,background:`#f1f5f9`,color:`#94a3b8`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.8rem`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-lock`})}),(0,q.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontWeight:900,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`},children:g?`Not unlocked yet`:`Not on your course`}),(0,q.jsx)(`p`,{style:{color:`var(--text-light, #64748b)`,fontWeight:600,margin:`0 0 26px`,lineHeight:1.55},children:g?(0,q.jsxs)(q.Fragment,{children:[`This practice unlocks at `,(0,q.jsxs)(`strong`,{children:[`Level `,v]}),`. You are on `,(0,q.jsxs)(`strong`,{children:[`Level `,h]}),`. Keep going with your daily practice and your teacher will move you up.`]}):(0,q.jsx)(q.Fragment,{children:`This practice is not part of your course. Your practice tools are all on the Practice page.`})}),(0,q.jsx)(`button`,{type:`button`,onClick:()=>a(p),style:{border:`none`,borderRadius:`16px`,padding:`14px 26px`,fontWeight:800,fontFamily:`'Sora', sans-serif`,color:`#fff`,background:`var(--primary-blue, #3b82f6)`,cursor:`pointer`},children:m})]})})}function St({onBack:e,backLabel:t}){return(0,q.jsx)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:(0,q.jsxs)(`div`,{style:{maxWidth:`520px`,margin:`60px auto`,padding:`40px 32px`,textAlign:`center`,background:`var(--card-bg, #fff)`,border:`1px solid var(--border, #e2e8f0)`,borderRadius:`28px`},children:[(0,q.jsx)(`div`,{style:{width:`72px`,height:`72px`,margin:`0 auto 20px`,borderRadius:`24px`,background:`#f1f5f9`,color:`#94a3b8`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.8rem`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-circle-minus`})}),(0,q.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontWeight:900,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`},children:`Not part of your course`}),(0,q.jsx)(`p`,{style:{color:`var(--text-light, #64748b)`,fontWeight:600,margin:`0 0 26px`,lineHeight:1.55},children:`Your institute does not run this. Everything it does teach is in your menu.`}),(0,q.jsx)(`button`,{type:`button`,onClick:e,style:{border:`none`,borderRadius:`16px`,padding:`14px 26px`,fontWeight:800,fontFamily:`'Sora', sans-serif`,color:`#fff`,background:`var(--primary-blue, #3b82f6)`,cursor:`pointer`},children:t})]})})}function Ct(e){return`${e}-${Math.random().toString(36).slice(2,10)}`}function Q(e,t){return console.warn(`chat:${e}:failed`,t?.message),{data:null,error:{message:t?.message||`Something went wrong.`}}}async function wt(){let{data:e}=await r.auth.getSession();return e?.session?.user?.id??null}async function Tt(e){let{data:t,error:n}=await r.rpc(`chat_inbox`,{p_institute_id:e??null});return n?{...Q(`inbox`,n),data:[]}:{data:t??[],error:null}}async function Et(e,t=``){let{data:n,error:i}=await r.rpc(`chat_contacts`,{p_institute_id:e??null,p_search:t||null});return i?{...Q(`contacts`,i),data:[]}:{data:n??[],error:null}}async function Dt(e,t){let{data:n,error:i}=await r.rpc(`chat_start_direct`,{p_institute_id:e??null,p_target_membership_id:t});return i?Q(`start`,i):{data:n,error:null}}function Ot(e){return{id:e.id,body:e.message,sender_user_id:e.sender_user_id,sender_name:e.sender_name,sender_role:e.sender_role,created_at:e.created_at,reply_to_id:e.reply_to_id,forwarded:e.forwarded,edited_at:e.edited_at,deleted_at:e.deleted_at,pinned_at:e.pinned_at}}async function kt(e){let{data:t,error:n}=await(e.kind===`batch`?r.from(`batch_chat_messages`).select(`*`).eq(`batch_id`,e.thread_id):r.from(`chat_messages`).select(`*`).eq(`conversation_id`,e.thread_id)).order(`created_at`,{ascending:!0}).limit(500);return n?{...Q(`messages`,n),data:[]}:{data:(t??[]).map(t=>e.kind===`batch`?Ot(t):t),error:null}}async function At(e,t,n,i={}){let a=n.trim();if(!a)return{data:null,error:{message:`Message cannot be empty.`}};if(e.kind!==`batch`){let{data:t,error:n}=await r.rpc(`chat_send`,{p_conversation_id:e.thread_id,p_body:a,p_reply_to_id:i.replyToId||null,p_forwarded:!!i.forwarded});return n?Q(`send`,n):{data:t,error:null}}let o=await wt(),{data:s}=await r.from(`memberships`).select(`role, profiles:user_id(full_name)`).eq(`user_id`,o).eq(`institute_id`,t).eq(`status`,`active`).limit(1).maybeSingle(),{data:c,error:l}=await r.from(`batch_chat_messages`).insert({institute_id:t,batch_id:e.thread_id,sender_user_id:o,sender_name:s?.profiles?.full_name||`User`,sender_role:s?.role||`student`,message:a,reply_to_id:i.replyToId||null,forwarded:!!i.forwarded}).select().single();return l?Q(`send_batch`,l):{data:Ot(c),error:null}}async function jt(e,t,n,i=null){let{error:a}=await r.rpc(`chat_modify_message`,{p_message_id:e,p_is_batch:t,p_action:n,p_body:i});return a?Q(n,a):{data:!0,error:null}}async function Mt(e){let{error:t}=await r.rpc(`chat_mark_read`,{p_thread_id:e});t&&console.warn(`chat:mark_read:failed`,t.message)}async function Nt(e,t,n){let{error:i}=await r.rpc(`chat_set_blocked`,{p_institute_id:e,p_target_membership_id:t,p_blocked:n});return i?Q(`block`,i):{data:!0,error:null}}async function Pt(e){let{data:t}=await r.from(`chat_blocks`).select(`blocked_membership_id`).eq(`blocked_membership_id`,e).limit(1);return!!t?.length}async function Ft(e,t,n){let{error:i}=await r.rpc(`chat_report_message`,{p_message_id:e,p_is_batch:t,p_reason:n||null});return i?Q(`report`,i):{data:!0,error:null}}function It(e){try{let t=r.channel(Ct(`chat-activity`)).on(`postgres_changes`,{event:`INSERT`,schema:`public`,table:`chat_messages`},t=>e({threadId:t.new.conversation_id,message:t.new})).on(`postgres_changes`,{event:`INSERT`,schema:`public`,table:`batch_chat_messages`},t=>e({threadId:t.new.batch_id,message:Ot(t.new)})).on(`postgres_changes`,{event:`UPDATE`,schema:`public`,table:`chat_messages`},t=>e({threadId:t.new.conversation_id,message:t.new,updated:!0})).on(`postgres_changes`,{event:`UPDATE`,schema:`public`,table:`batch_chat_messages`},t=>e({threadId:t.new.batch_id,message:Ot(t.new),updated:!0})).subscribe();return()=>r.removeChannel(t)}catch(e){return console.warn(`chat:subscribe:failed`,e.message),()=>{}}}var Lt=`classroom_seen_at_`;function Rt(e){try{return Number(localStorage.getItem(`${Lt}${e}`))||0}catch{return 0}}function zt(e){if(e)try{localStorage.setItem(`${Lt}${e}`,String(Date.now()))}catch{}}function Bt(){let{institute:e,membership:n}=t(),i=e?.id??null,a=n?.id??null,[o,s]=(0,V.useState)(!1);return(0,V.useEffect)(()=>{if(!i||!a){s(!1);return}let e=!0,t=[];async function n(){let{data:n}=await ie(i,a);if(!e)return;let o=[...new Set(n.map(e=>e.batch_id).filter(Boolean))],c=Rt(a),[{data:l},{data:u}]=await Promise.all([Tt(i),o.length?r.from(`batch_announcements`).select(`created_at`).in(`batch_id`,o).order(`created_at`,{ascending:!1}).limit(1):Promise.resolve({data:[]})]);if(!e)return;let d=u?.[0]?.created_at?new Date(u[0].created_at).getTime():0;s(l.some(e=>e.unread>0)||d>c);let f=await wt();e&&(t.push(It(({message:t,updated:n})=>e&&!n&&t.sender_user_id!==f&&s(!0))),o.forEach(n=>{t.push(U(n,()=>e&&s(!0)))}))}return n(),()=>{e=!1,t.forEach(e=>e())}},[i,a]),o}function Vt({slug:e=``}){let[t,n]=(0,V.useState)(e),[r,i]=(0,V.useState)(``),a=M(),o=ee(),s=!!e;function c(e){e.preventDefault(),i(``),F(t)||i(`Use 3-32 characters: lowercase letters, numbers and dashes only.`)}return(0,q.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,q.jsx)(m,{}),(0,q.jsx)(`style`,{children:`
        .institute-missing-card { animation: instituteSpring 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        @keyframes instituteSpring {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .institute-missing-input:focus {
          outline: none;
          border-color: var(--primary-blue, #3b82f6);
          box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary-blue, #3b82f6) 14%, transparent);
        }
      `}),(0,q.jsxs)(`div`,{className:`institute-missing-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,q.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:s?`linear-gradient(135deg, #f59e0b, #b45309)`:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:s?`0 14px 32px -4px rgba(245, 158, 11, 0.5)`:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent)`},children:(0,q.jsx)(`i`,{className:s?`fa-solid fa-link-slash`:`fa-solid fa-school`})})}),(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,q.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:s?`color-mix(in srgb, #f59e0b 14%, transparent)`:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:s?`#b45309`:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-info`,style:{fontSize:`0.68rem`}}),s?`Unknown Portal`:`Select Institute`]})}),(0,q.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:s?`Portal Not Found`:`Which Institute?`}),(0,q.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:s?(0,q.jsxs)(q.Fragment,{children:[`There is no institute matching `,(0,q.jsx)(`strong`,{style:{color:`var(--dark-blue, #0f172a)`},children:e}),`.`,a?` Check the code below, or ask your institute for the correct link.`:` Please check the link your institute gave you.`]}):`Enter your institute code to open its student panel.`}),a?(0,q.jsxs)(`form`,{onSubmit:c,style:{marginTop:`26px`,textAlign:`left`},children:[(0,q.jsx)(`label`,{htmlFor:`institute-slug`,style:{display:`block`,fontSize:`0.76rem`,fontWeight:`900`,letterSpacing:`0.08em`,textTransform:`uppercase`,color:`var(--text-light, #64748b)`,marginBottom:`8px`},children:`Institute code`}),(0,q.jsx)(`input`,{id:`institute-slug`,className:`institute-missing-input`,type:`text`,value:t,onChange:e=>n(e.target.value.toLowerCase().trim()),placeholder:`speedomath`,autoComplete:`off`,autoCapitalize:`none`,spellCheck:`false`,style:{width:`100%`,boxSizing:`border-box`,border:`1px solid var(--border, #cbd5e1)`,borderRadius:`16px`,padding:`14px 16px`,fontSize:`1rem`,fontWeight:`700`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.9)`,transition:`border-color 0.2s, box-shadow 0.2s`}}),r?(0,q.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err, #c62828) 20%, transparent)`,borderRadius:`14px`,padding:`11px 14px`,fontSize:`0.86rem`,fontWeight:`700`,margin:`12px 0 0`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{flexShrink:0}}),(0,q.jsx)(`span`,{children:r})]}):null,(0,q.jsxs)(`button`,{type:`submit`,style:{marginTop:`18px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-arrow-right`}),(0,q.jsx)(`span`,{children:`Continue`})]}),o?(0,q.jsx)(`button`,{type:`button`,onClick:k,style:{marginTop:`10px`,width:`100%`,border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`13px 20px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.9rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`},children:`Clear and start over`}):null]}):null]})]})}var Ht=Object.entries(S).map(([e,t])=>({ordinal:Number(e),topics:t.newModes.map(e=>I[e]?.label).filter(Boolean).slice(0,3)}));function Ut({levels:e,currentLevel:t,activeSubjects:n,enabledFeatures:r,unlockLevelByPath:i,hasSyllabus:a}){let o=e?.length?e:Ht,[s,c]=(0,V.useState)(!1),l=o.findIndex(e=>e.ordinal===t),u=Math.max(0,l-1),d=Math.max(0,l)+2;return(0,q.jsxs)(`section`,{className:`learning-pathway abacus-pathway`,"aria-labelledby":`abacus-pathway-title`,children:[(0,q.jsxs)(`div`,{className:`learning-pathway-heading`,children:[(0,q.jsx)(`span`,{className:`learning-pathway-heading-icon`,children:(0,q.jsx)(ce,{size:23,"aria-hidden":`true`})}),(0,q.jsx)(`h2`,{id:`abacus-pathway-title`,children:`Your Abacus pathway`}),u>0||d<o.length-1?(0,q.jsxs)(`button`,{className:`learning-pathway-toggle`,type:`button`,"aria-expanded":s,"aria-controls":`abacus-pathway-steps`,onClick:()=>c(!s),children:[s?`Show fewer levels`:`See all levels`,` `,(0,q.jsx)(le,{size:16,"aria-hidden":`true`})]}):null]}),(0,q.jsx)(`ol`,{id:`abacus-pathway-steps`,className:`learning-pathway-list`,children:o.map(({ordinal:e,name:o,topics:c},l)=>{if(!s&&(l<u||l>d))return null;let f=e===t,p=e>t,m=f?`current`:p?`locked`:`review`,_=o||c[0]||`Abacus practice`,v=c.filter(e=>e!==_).slice(0,2).join(` · `),y=c.flatMap(g).find(e=>ye(e,n,r)&&(!i||i[e]<=t));return(0,q.jsxs)(`li`,{className:`learning-pathway-step is-${m}`,"aria-current":f?`step`:void 0,"data-level-color":l%6,children:[(0,q.jsx)(`span`,{className:`learning-pathway-marker learning-pathway-level-number`,"aria-hidden":`true`,children:e}),(0,q.jsxs)(`div`,{className:`learning-pathway-stop`,children:[(0,q.jsxs)(`div`,{className:`learning-pathway-stop-label`,children:[(0,q.jsxs)(`span`,{children:[`Level `,e]}),f?(0,q.jsx)(`strong`,{className:`learning-pathway-badge`,children:`Your level`}):null,p?(0,q.jsxs)(`span`,{className:`learning-pathway-badge`,children:[(0,q.jsx)(se,{size:13,"aria-hidden":`true`}),` Locked`]}):null]}),(0,q.jsx)(`h3`,{children:_}),v?(0,q.jsx)(`p`,{children:v}):null,p?null:(0,q.jsx)(`div`,{className:`learning-pathway-actions`,children:f?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsxs)(h,{className:`learning-pathway-primary`,to:`/practice-session`,children:[`Daily practice `,(0,q.jsx)(B,{size:16,"aria-hidden":`true`})]}),a?(0,q.jsxs)(h,{className:`learning-pathway-review`,to:`/syllabus`,children:[(0,q.jsx)(z,{size:16,"aria-hidden":`true`}),` View syllabus`]}):null]}):(0,q.jsxs)(h,{className:`learning-pathway-review`,to:y??`/abacus`,children:[y?`Review skills`:`Open Abacus tools`,` `,(0,q.jsx)(B,{size:16,"aria-hidden":`true`})]})})]})]},e)})})]})}function Wt(){let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}async function Gt(e){let[t,n]=await Promise.all([r.from(`chess_student_levels`).select(`level_id, chess_levels(name)`).eq(`student_membership_id`,e).maybeSingle(),r.rpc(`chess_get_my_daily_practice`,{p_day:Wt()})]),i=Array.isArray(n.data?.puzzles)?n.data.puzzles:[];return{membershipId:e,levelId:t.data?.level_id??null,levelName:t.data?.chess_levels?.name||null,total:i.length,done:i.filter(e=>e.result!=null).length,streakDays:n.data?.streak_days??0,paused:!!n.data?.paused,error:t.error?.message||n.error?.message||null}}var Kt=(0,V.lazy)(()=>w(()=>import(`./ChessPathway-Bn4C52xu.js`).then(e=>e.n).then(e=>({default:e.ChessPathway})),__vite__mapDeps([5,1,2,3,4]))),qt=`

  .dashboard-container {
    --ink-dk: var(--dark-blue);
    --sh-sm: 0 1px 2px color-mix(in srgb, var(--dark-blue) 6%, transparent), 0 1px 3px color-mix(in srgb, var(--dark-blue) 7%, transparent);
    --sh-md: 0 2px 4px color-mix(in srgb, var(--dark-blue) 5%, transparent), 0 10px 22px -6px color-mix(in srgb, var(--dark-blue) 14%, transparent);
    --sh-lg: 0 4px 10px color-mix(in srgb, var(--dark-blue) 6%, transparent), 0 24px 48px -16px color-mix(in srgb, var(--dark-blue) 22%, transparent);
    --r: 20px;
    max-width: none;
    width: 100%;
    margin: 0;
    padding: 24px 30px 60px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    animation: fadeIn 0.4s ease-out;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Header */
  .dash-header {
    position: relative;
    border-radius: 20px;
    padding: 26px 30px;
    background: #ffffff;
    border: 1px solid var(--border);
    box-shadow: var(--sh-sm);
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  .dash-title {
    font-family: "Sora", sans-serif;
    font-size: clamp(1.7rem, 3vw, 2.3rem);
    font-weight: 700;
    color: var(--dark-blue);
    line-height: 1.2;
    letter-spacing: -0.3px;
  }
  .dash-title span {
    color: var(--primary-blue);
  }
  .dash-subtitle {
    color: var(--text-light);
    font-size: 0.95rem;
    font-weight: 500;
    margin-top: 6px;
    max-width: 48ch;
  }
  .dash-date {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
    background: var(--light-blue);
    padding: 10px 16px;
    border-radius: 999px;
    font-family: "Sora", sans-serif;
    font-weight: 600;
    font-size: 0.82rem;
    color: var(--primary-blue);
  }

  /* Stats Row */
  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
  }
  .stat-card {
    position: relative;
    overflow: hidden;
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: var(--r);
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 15px;
    box-shadow: var(--sh-md);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  .stat-card::after {
    content: "";
    position: absolute;
    left: 0; top: 0;
    height: 100%;
    width: 4px;
    background: linear-gradient(180deg, var(--primary-blue), var(--gold));
  }
  .stat-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--sh-lg);
  }
  .stat-icon {
    width: 52px;
    height: 52px;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.6);
  }
  .stat-info {
    flex: 1;
  }
  .stat-val {
    font-family: "Sora", sans-serif;
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--dark-blue);
    line-height: 1.05;
    letter-spacing: -0.5px;
  }
  .stat-label {
    font-size: 0.72rem;
    font-weight: 700;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 0.8px;
    margin-top: 5px;
  }

  /* Main Grid Layout */
  .dash-main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 22px;
  }
  .dash-left-col {
    display: flex;
    flex-direction: column;
    gap: 22px;
  }
  @media (max-width: 900px) {
    .dash-main {
      grid-template-columns: 1fr;
    }
  }

  .home-tabs {
    display: inline-flex;
    align-self: flex-start;
    gap: 4px;
    padding: 5px;
    border-radius: 999px;
    background: #ffffff;
    border: 1px solid var(--border);
    box-shadow: var(--sh-sm);
  }
  .home-tab {
    border: 0;
    border-radius: 999px;
    background: transparent;
    color: var(--text-light);
    padding: 9px 20px;
    font-family: "Sora", sans-serif;
    font-weight: 600;
    font-size: 0.86rem;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.18s;
  }
  .home-tab.active {
    color: white;
    background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue));
    box-shadow: 0 10px 20px -8px color-mix(in srgb, var(--primary-blue) 55%, transparent);
  }

  .streak-card {
    border-radius: 22px;
    border: 1px solid rgba(255,255,255,0.74);
    background:
      radial-gradient(circle at 16% 18%, rgba(255, 255, 255, 0.68), transparent 22%),
      linear-gradient(135deg, color-mix(in srgb, var(--primary-blue) 8%, transparent) 0%, color-mix(in srgb, var(--gold) 15%, transparent) 100%);
    box-shadow: var(--shadow);
    padding: 24px;
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 18px;
    align-items: center;
  }
  .streak-flame {
    width: 86px;
    height: 86px;
    border-radius: 26px;
    display: grid;
    place-items: center;
    color: white;
    font-size: 2.6rem;
    background: linear-gradient(135deg, var(--gold), var(--primary-blue));
    box-shadow: 0 16px 26px color-mix(in srgb, var(--primary-blue) 25%, transparent);
  }
  .streak-copy h2 {
    margin: 0;
    color: var(--dark-blue);
    font-family: "Sora", sans-serif;
    font-size: clamp(1.6rem, 3vw, 2.45rem);
  }
  .streak-copy p {
    margin: 6px 0 0;
    color: var(--text-light);
    font-weight: 850;
  }
  .streak-days {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 10px;
    margin-top: 4px;
  }
  .streak-day {
    min-height: 82px;
    border-radius: 18px;
    border: 1px solid var(--border);
    background: white;
    display: grid;
    place-items: center;
    gap: 4px;
    padding: 10px 6px;
    color: var(--text-light);
    font-weight: 900;
  }
  .streak-day.done {
    color: white;
    background: linear-gradient(135deg, #22c55e, #84cc16);
    border-color: transparent;
  }
  .streak-day.today {
    outline: 3px solid color-mix(in srgb, var(--primary-blue) 30%, transparent);
  }
  .streak-day i {
    font-size: 1.15rem;
  }
  @media (max-width: 700px) {
    .dashboard-container {
      padding: 10px 16px 40px !important;
      gap: 16px !important;
    }
    .dash-header {
      align-items: flex-start;
      flex-direction: column;
      padding: 20px 16px !important;
      border-radius: 20px !important;
      gap: 12px !important;
    }
    .panel {
      padding: 16px !important;
      border-radius: 16px !important;
    }
    .achievement-meter {
      grid-template-columns: auto 1fr;
    }
    .meter-percent {
      grid-column: 1 / -1;
    }
    .trophy-row {
      grid-template-columns: repeat(2, 1fr);
    }
    .streak-card {
      grid-template-columns: 1fr;
    }
    .streak-days {
      grid-template-columns: repeat(4, 1fr);
    }
    .stats-grid {
      grid-template-columns: repeat(2, 1fr) !important;
      gap: 12px !important;
    }
    .stat-card {
      padding: 14px 12px !important;
      gap: 10px !important;
      border-radius: 14px !important;
    }
    .stat-icon {
      width: 38px !important;
      height: 38px !important;
      font-size: 16px !important;
      border-radius: 10px !important;
    }
    .stat-val {
      font-size: 1.15rem !important;
    }
    .stat-label {
      font-size: 0.65rem !important;
    }
  }

  /* Panel Generic */
  .panel {
    position: relative;
    background: #ffffff;
    border: 1px solid var(--border);
    border-radius: var(--r);
    padding: 24px;
    box-shadow: var(--sh-md);
  }
  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .panel-title {
    font-family: "Sora", sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--dark-blue);
    display: flex;
    align-items: center;
    gap: 9px;
  }
  .panel-title::before {
    content: "";
    width: 4px;
    height: 16px;
    border-radius: 3px;
    background: linear-gradient(180deg, var(--primary-blue), var(--gold));
  }
  .panel-action {
    border: 1px solid var(--border);
    background: #ffffff;
    color: var(--primary-blue);
    border-radius: 999px;
    padding: 7px 14px;
    font-family: "Sora", sans-serif;
    font-weight: 600;
    font-size: 0.76rem;
    cursor: pointer;
    transition: all 0.18s;
  }
  .panel-action:hover { background: var(--light-blue); }

  .quest-card {
    border-radius: var(--r);
    padding: 20px 24px;
    background: var(--light-blue);
    border: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .quest-copy h3 {
    font-family: "Sora", sans-serif;
    margin: 0 0 4px;
    color: var(--dark-blue);
    font-size: 1.05rem;
    font-weight: 700;
  }
  .quest-copy p {
    margin: 0;
    color: var(--text-light);
    font-weight: 500;
    font-size: 0.88rem;
  }
  .quest-start {
    border: 0;
    border-radius: 12px;
    padding: 12px 24px;
    background: var(--primary-blue);
    color: #ffffff;
    font-family: "Sora", sans-serif;
    font-weight: 700;
    font-size: 0.9rem;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
  }
  .quest-start:hover { background: var(--dark-blue); }
  .quest-start:active { transform: scale(0.97); }

  .trophy-panel {
    background: linear-gradient(135deg, #ffffff, color-mix(in srgb, var(--gold) 4%, #ffffff));
  }
  .achievement-meter {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 16px;
    align-items: center;
    margin-bottom: 18px;
  }
  .trophy-big {
    width: 60px;
    height: 60px;
    border-radius: 17px;
    display: grid;
    place-items: center;
    color: white;
    font-size: 1.6rem;
    background: linear-gradient(135deg, var(--gold), var(--primary-blue));
    box-shadow: 0 14px 26px -10px color-mix(in srgb, var(--primary-blue) 50%, transparent), inset 0 1px 0 rgba(255,255,255,0.4);
  }
  .meter-copy strong {
    display: block;
    font-family: "Sora", sans-serif;
    font-size: 1.7rem;
    line-height: 1;
    color: var(--dark-blue);
  }
  .meter-copy span {
    display: block;
    margin-top: 5px;
    color: var(--text-light);
    font-weight: 600;
    font-size: 0.86rem;
  }
  .meter-percent {
    font-family: "Sora", sans-serif;
    font-size: 1.4rem;
    font-weight: 800;
    color: var(--primary-blue);
  }
  .achievement-track {
    height: 14px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--dark-blue) 8%, transparent);
    overflow: hidden;
    box-shadow: inset 0 1px 3px color-mix(in srgb, var(--dark-blue) 16%, transparent);
  }
  .achievement-fill {
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, var(--primary-blue), var(--gold));
    box-shadow: 0 0 12px -2px color-mix(in srgb, var(--gold) 65%, transparent);
    transition: width 0.5s ease;
  }
  .trophy-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin-top: 18px;
  }
  .mini-trophy {
    border: 1px solid var(--border);
    border-radius: 15px;
    background: #ffffff;
    padding: 14px 8px;
    display: grid;
    justify-items: center;
    gap: 9px;
    cursor: pointer;
    box-shadow: var(--sh-sm);
    transition: transform 0.18s, box-shadow 0.18s;
  }
  .mini-trophy:hover { transform: translateY(-3px); box-shadow: var(--sh-md); }
  .mini-trophy.locked {
    opacity: 0.4;
    filter: grayscale(1);
  }
  .mini-trophy-icon {
    width: 40px;
    height: 40px;
    border-radius: 13px;
    display: grid;
    place-items: center;
    color: white;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.4);
  }
  .mini-trophy span {
    max-width: 100%;
    color: var(--dark-blue);
    font-family: "Sora", sans-serif;
    font-weight: 600;
    font-size: 0.72rem;
    line-height: 1.15;
    text-align: center;
  }

  /* CSS Bar Chart */
  .chart-area {
    height: 210px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 10px;
    padding-bottom: 26px;
    border-bottom: 1px solid var(--border);
    position: relative;
  }
  .chart-bar-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 10px;
  }
  .chart-bar-wrap {
    width: 100%;
    max-width: 34px;
    height: 150px;
    display: flex;
    align-items: flex-end;
    background: linear-gradient(180deg, color-mix(in srgb, var(--dark-blue) 5%, transparent), color-mix(in srgb, var(--dark-blue) 2%, transparent));
    border-radius: 9px;
    overflow: hidden;
    position: relative;
  }
  .chart-bar {
    width: 100%;
    background: linear-gradient(180deg, var(--primary-blue) 0%, var(--dark-blue) 100%);
    border-radius: 9px 9px 3px 3px;
    box-shadow: 0 -4px 12px -4px color-mix(in srgb, var(--primary-blue) 55%, transparent);
    transition: height 1s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .chart-bar.peak {
    background: linear-gradient(180deg, var(--gold), color-mix(in srgb, var(--gold) 60%, var(--primary-blue)));
  }
  .chart-label {
    font-size: 0.74rem;
    font-weight: 600;
    color: var(--text-light);
  }

  /* Notifications */
  .notif-list {
    display: flex;
    flex-direction: column;
    gap: 11px;
  }
  .notif-item {
    display: flex;
    gap: 13px;
    padding: 14px;
    border-radius: 15px;
    background: #ffffff;
    border: 1px solid var(--border);
    box-shadow: var(--sh-sm);
    transition: transform 0.18s, box-shadow 0.18s;
    cursor: pointer;
  }
  .notif-item:hover {
    transform: translateX(3px);
    box-shadow: var(--sh-md);
  }
  .notif-icon {
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: var(--light-blue);
    color: var(--primary-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    flex-shrink: 0;
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
  }
  .notif-content h4 {
    font-family: "Sora", sans-serif;
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--dark-blue);
    margin-bottom: 3px;
  }
  .notif-content p {
    font-size: 0.76rem;
    color: var(--text-light);
    line-height: 1.35;
  }

  .home-loading {
    padding: 14px;
    border-radius: 16px;
    background: #ffffff;
    border: 1px solid var(--border);
    color: var(--text-light);
    font-weight: 600;
  }

  /* Playful theme (matches Daily Practice) */
  .dashboard-container { --clay: inset 0 -3px 0 rgba(15,23,42,0.06); }
  .dash-header {
    border: 2px solid color-mix(in srgb, var(--primary-blue) 22%, white);
    border-radius: 24px;
    background:
      radial-gradient(circle at 8% 25%, color-mix(in srgb, var(--gold) 30%, transparent), transparent 26%),
      radial-gradient(circle at 92% 15%, color-mix(in srgb, #ec4899 18%, transparent), transparent 28%),
      linear-gradient(135deg, rgba(255,255,255,0.96), color-mix(in srgb, var(--primary-blue) 7%, white));
    box-shadow: var(--clay), var(--sh-md);
  }
  .dash-title { font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; color: #0f172a; letter-spacing: 0; }
  .dash-subtitle { font-family: "Fredoka", "Baloo 2", sans-serif; font-weight: 600; font-size: 1.05rem; color: #475569; }
  .dash-date {
    font-family: "Baloo 2", sans-serif; font-weight: 800; font-size: 0.95rem;
    background: #fef3c7; color: #b45309; box-shadow: inset 0 -3px 0 rgba(217,119,6,0.18);
  }
  .dash-date i { color: #f59e0b; }

  .home-tabs { border: 2px solid #e2e8f0; box-shadow: var(--clay); }
  .home-tab { font-family: "Baloo 2", sans-serif; font-weight: 800; font-size: 0.98rem; color: #334155; }

  .stat-card {
    --tile: var(--primary-blue);
    border: 2px solid color-mix(in srgb, var(--tile) 28%, white);
    background: color-mix(in srgb, var(--tile) 8%, white);
    border-radius: 22px;
    box-shadow: inset 0 -3px 0 color-mix(in srgb, var(--tile) 18%, transparent);
  }
  .stat-card::after { display: none; }
  .stat-card .stat-icon {
    border-radius: 999px; background: white !important; color: var(--tile) !important;
    box-shadow: 0 4px 10px -4px color-mix(in srgb, var(--tile) 45%, transparent);
  }
  .stat-val { font-family: "Baloo 2", sans-serif; font-weight: 800; font-size: 1.7rem; color: #0f172a; letter-spacing: 0; }
  .stat-label { font-family: "Fredoka", sans-serif; font-weight: 600; font-size: 0.9rem; color: #334155; text-transform: none; letter-spacing: 0; }

  .panel { border: 2px solid #e2e8f0; border-radius: 24px; box-shadow: var(--clay), var(--sh-sm); }
  .panel-title { font-family: "Baloo 2", sans-serif; font-weight: 800; font-size: 1.3rem; color: #0f172a; }
  .panel-title::before { width: 12px; height: 12px; border-radius: 999px; background: #f59e0b; }
  .panel-action {
    font-family: "Baloo 2", sans-serif; font-weight: 800; font-size: 0.88rem;
    border: 2px solid color-mix(in srgb, var(--primary-blue) 25%, white);
    background: color-mix(in srgb, var(--primary-blue) 8%, white);
  }

  .quest-card {
    border-radius: 24px; border: 2px solid #86efac; background: #f0fdf4;
    box-shadow: inset 0 -3px 0 rgba(21,128,61,0.12);
  }
  .quest-copy h3 { font-family: "Baloo 2", sans-serif; font-weight: 800; font-size: 1.4rem; color: #15803d; }
  .quest-copy p { font-family: "Fredoka", sans-serif; font-weight: 600; font-size: 1rem; color: #475569; }
  .quest-start {
    border-radius: 999px; font-family: "Baloo 2", sans-serif; font-weight: 800; font-size: 1.05rem;
    box-shadow: inset 0 -4px 0 rgba(0,0,0,0.15);
  }

  .chart-bar-group:nth-child(6n+1) { --bar: #3b82f6; }
  .chart-bar-group:nth-child(6n+2) { --bar: #22c55e; }
  .chart-bar-group:nth-child(6n+3) { --bar: #f59e0b; }
  .chart-bar-group:nth-child(6n+4) { --bar: #ec4899; }
  .chart-bar-group:nth-child(6n+5) { --bar: #8b5cf6; }
  .chart-bar-group:nth-child(6n+6) { --bar: #06b6d4; }
  .chart-bar-wrap { border-radius: 999px; background: #eef2f7; box-shadow: inset 0 2px 3px rgba(15,23,42,0.08); }
  .chart-bar, .chart-bar.peak {
    border-radius: 999px;
    background: linear-gradient(180deg, color-mix(in srgb, var(--bar) 75%, white), var(--bar));
    box-shadow: inset 0 -3px 0 rgba(0,0,0,0.12);
  }
  .chart-label { font-family: "Baloo 2", sans-serif; font-weight: 800; font-size: 0.85rem; color: #334155; }

  .trophy-panel { background: color-mix(in srgb, #f59e0b 6%, white); border-color: color-mix(in srgb, #f59e0b 30%, white); }
  .trophy-big { border-radius: 999px; background: #f59e0b; box-shadow: inset 0 -4px 0 rgba(0,0,0,0.15); }
  .meter-copy strong, .meter-percent { font-family: "Baloo 2", sans-serif; font-weight: 800; color: #0f172a; }
  .meter-percent { color: #b45309; }
  .meter-copy span { font-family: "Fredoka", sans-serif; color: #475569; }
  .achievement-fill { background: linear-gradient(90deg, #22c55e, #84cc16 60%, #f59e0b); }
  .mini-trophy { border: 2px solid #e2e8f0; border-radius: 18px; box-shadow: var(--clay); }
  .mini-trophy-icon { border-radius: 999px; }
  .mini-trophy span { font-family: "Baloo 2", sans-serif; font-weight: 800; font-size: 0.8rem; color: #334155; }


  .notif-item {
    --tile: var(--primary-blue);
    border: 2px solid color-mix(in srgb, var(--tile) 25%, white);
    background: color-mix(in srgb, var(--tile) 6%, white);
    border-radius: 18px;
    box-shadow: inset 0 -3px 0 color-mix(in srgb, var(--tile) 14%, transparent);
  }
  .notif-icon { border-radius: 999px; background: white !important; color: var(--tile) !important; box-shadow: 0 4px 10px -4px color-mix(in srgb, var(--tile) 45%, transparent); }
  .notif-content h4 { font-family: "Baloo 2", sans-serif; font-weight: 800; font-size: 1rem; color: #0f172a; }
  .notif-content p { font-family: "Fredoka", sans-serif; font-weight: 600; font-size: 0.88rem; color: #475569; }

  .streak-card { border: 2px solid #fdba74; background: #fff7ed; box-shadow: inset 0 -3px 0 rgba(194,65,12,0.12); }
  .streak-flame { border-radius: 999px; background: linear-gradient(135deg, #f97316, #ef4444); box-shadow: inset 0 -4px 0 rgba(0,0,0,0.15); }
  .streak-copy h2 { font-family: "Baloo 2", sans-serif; font-weight: 800; color: #c2410c; }
  .streak-copy p { font-family: "Fredoka", sans-serif; font-weight: 600; color: #475569; }
  .streak-day { border: 2px solid #e2e8f0; font-family: "Baloo 2", sans-serif; font-weight: 800; color: #334155; box-shadow: var(--clay); }
`;function Jt(){let{ready:e,activeSubjects:n,abacusPath:r,unlockLevelByPath:a,enabledFeatures:o}=i(),s=e&&De(n).chess,{profile:c,institute:f,membership:p,user:g}=t(),[_,v]=(0,V.useState)(`overview`),[y,b]=(0,V.useState)(`abacus`),S=s&&y===`chess`,w=S?`/chess/practice`:`/practice-session`,[T,E]=(0,V.useState)(null),D=`${f?.id}:${p?.id}`,ee=T?.key===D&&T.available;(0,V.useEffect)(()=>{if(!f?.id||!p?.id)return;let e=!0;return d(f.id,p.id).then(t=>{e&&E({key:D,available:t})}).catch(()=>{}),()=>{e=!1}},[f?.id,p?.id,D]);let[k,A]=(0,V.useState)(null),j=k?.membershipId===p?.id?k:null;(0,V.useEffect)(()=>{if(!s||!p?.id)return;let e=!0;return Gt(p.id).then(t=>{e&&A(t)}).catch(()=>{}),()=>{e=!1}},[s,p?.id]);let M=!!(j&&j.total>0&&j.done>=j.total),[N,P]=(0,V.useState)({liveClasses:[],eBooks:[],recordedCourses:[],exams:[],results:[],achievements:[],loading:!0,error:``}),F=c?.current_level===999?`All levels`:`Level ${c?.current_level??0}`,re=c?.full_name?.split(` `)?.[0]||g?.email?.split(`@`)?.[0]||`Student`,ie=Xt(p?.id),I=Zt(p?.id);(0,V.useEffect)(()=>{let e=!0;async function t(){if(!f?.id||!p?.id){P(e=>({...e,loading:!1}));return}let t=`home_dash_v2_${f.id}_${p.id}`;try{let n=JSON.parse(sessionStorage.getItem(t)||`null`);if(n&&Date.now()-n._at<300*1e3){e&&P({...n,loading:!1,error:``});return}}catch{}P(e=>({...e,loading:!0,error:``}));let[n,r,i,a,o]=await Promise.all([L(f.id),x(f.id,`ebook`),u(f.id),C(f.id,p.id),O(f.id,p.id)]);if(!e)return;let s=n.error||r.error||i.error||a.error||o.error,c={liveClasses:n.data??[],eBooks:r.data??[],recordedCourses:i.data??[],exams:a.data?.exams??[],results:a.data?.results??[],achievements:o.data??[],loading:!1,error:s?.message||``};if(!s)try{sessionStorage.setItem(t,JSON.stringify({...c,_at:Date.now()}))}catch{}P(c)}return t(),()=>{e=!1}},[f?.id,p?.id]);let R=(0,V.useMemo)(()=>N.exams.filter(e=>e.kind!==`secure`),[N.exams]),ae=(0,V.useMemo)(()=>N.results.filter(e=>{let t=N.exams.find(t=>t.id===e.exam_id);return t&&t.kind!==`secure`}),[N.exams,N.results]),oe=N.liveClasses[0],z=R.filter(e=>!ae.some(t=>t.exam_id===e.id)),B=ae[0],se=te(c?.current_level),ce=localStorage.getItem(`practice_session_${g?.id||`guest`}_${Yt()}_level_${se}`)===`done`,le=(0,V.useMemo)(()=>$t(g?.id),[g?.id]),H=ae.map(e=>{let t=Number(e.total_marks??e.totalMarks??0);return t?Math.round(Number(e.score??0)/t*100):null}).filter(e=>e!=null),ue=H.length?Math.round(H.reduce((e,t)=>e+t,0)/H.length):null,U=[oe?{icon:`fa-video`,title:`Live class is ready`,text:`${oe.title||`Your next class`} is coming up.`,bg:`#fee2e2`,color:`#dc2626`,path:`/live-classes`}:null,z[0]?{icon:`fa-file-lines`,title:`Exam waiting`,text:`${z[0].title||`New exam`} is ready to solve.`,bg:`#e0e7ff`,color:`#4f46e5`,path:`/exam`}:null,B?{icon:`fa-award`,title:`Result posted`,text:`Latest score: ${en(B)}.`,bg:`#dcfce7`,color:`#16a34a`,path:`/exam`}:null,N.recordedCourses[0]?{icon:`fa-circle-play`,title:`Video lesson`,text:`${N.recordedCourses[0].title||N.recordedCourses[0].name||`A course`} is available.`,bg:`#fef3c7`,color:`#d97706`,path:`/recorded-lectures`}:null].filter(Boolean);return(0,q.jsxs)(`div`,{className:`page-wrap student-home-page`,style:{paddingTop:`calc(var(--nav-h) + 8px)`},children:[(0,q.jsx)(`style`,{children:qt}),(0,q.jsx)(m,{}),(0,q.jsxs)(`div`,{className:`dashboard-container abacus-learning-home`,children:[(0,q.jsxs)(`header`,{className:`learning-pathway-home`,children:[(0,q.jsxs)(`div`,{className:`learning-home-intro`,children:[(0,q.jsxs)(`h1`,{children:[`Welcome back, `,re,`!`]}),(0,q.jsxs)(`div`,{className:`learning-pathway-actions`,children:[(0,q.jsxs)(h,{className:`learning-pathway-primary`,to:w,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-calendar-check`,"aria-hidden":`true`}),` Daily practice`]}),(0,q.jsxs)(h,{className:`learning-home-play`,to:S?`/chess/play`:`/abacus`,children:[(0,q.jsx)(`i`,{className:S?`fa-solid fa-chess-knight`:`fa-solid fa-calculator`,"aria-hidden":`true`}),` `,S?`Play chess`:`Abacus tools`]}),S||ee?(0,q.jsxs)(h,{className:`learning-home-learn`,to:S?`/chess/level`:`/syllabus`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-book-open`,"aria-hidden":`true`}),` Syllabus`]}):null]})]}),(0,q.jsx)(`div`,{className:`learning-home-art abacus-home-art`,"aria-hidden":`true`,children:S?(0,q.jsx)(`span`,{className:`home-chess-hero-piece`,children:`♞︎`}):(0,q.jsx)(ne,{variant:`abacus-banner`,size:170})})]}),(0,q.jsxs)(`div`,{className:`home-tabs`,role:`tablist`,"aria-label":`Home dashboard`,children:[(0,q.jsxs)(`button`,{className:`home-tab ${_===`overview`?`active`:``}`,onClick:()=>v(`overview`),children:[(0,q.jsx)(`i`,{className:`fa-solid fa-house`}),`Overview`]}),(0,q.jsxs)(`button`,{className:`home-tab ${_===`streak`?`active`:``}`,onClick:()=>v(`streak`),children:[(0,q.jsx)(`i`,{className:`fa-solid fa-fire`}),`Streak`]})]}),_===`streak`?(0,q.jsxs)(`div`,{className:`streak-card`,children:[(0,q.jsx)(`div`,{className:`streak-flame`,children:(0,q.jsx)(`i`,{className:`fa-solid fa-fire`})}),(0,q.jsxs)(`div`,{className:`streak-copy`,children:[(0,q.jsxs)(`h2`,{children:[ie,` day streak`]}),(0,q.jsx)(`p`,{children:`Come back every day to keep the flame glowing.`})]}),(0,q.jsx)(`div`,{className:`streak-days`,children:I.map(e=>(0,q.jsxs)(`div`,{className:`streak-day ${e.done?`done`:``} ${e.today?`today`:``}`,children:[(0,q.jsx)(`i`,{className:`fa-solid ${e.done?`fa-check`:`fa-fire`}`}),(0,q.jsx)(`span`,{children:e.label})]},e.key))})]}):null,_===`overview`?(0,q.jsxs)(`div`,{className:`dash-main home-learning-grid`,children:[(0,q.jsxs)(`div`,{className:`dash-left-col`,children:[s?(0,q.jsxs)(`div`,{className:`home-subject-switch`,role:`group`,"aria-label":`Learning pathway`,children:[(0,q.jsxs)(`button`,{type:`button`,"aria-pressed":!S,onClick:()=>b(`abacus`),children:[(0,q.jsx)(`i`,{className:`fa-solid fa-calculator`,"aria-hidden":`true`}),` Abacus`]}),(0,q.jsxs)(`button`,{type:`button`,"aria-pressed":S,onClick:()=>b(`chess`),children:[(0,q.jsx)(`i`,{className:`fa-solid fa-chess-knight`,"aria-hidden":`true`}),` Chess`]})]}):null,(0,q.jsxs)(`section`,{className:`home-today-practice`,"aria-label":`Today's practice`,children:[(0,q.jsx)(`span`,{className:`home-widget-icon`,"aria-hidden":`true`,children:(0,q.jsx)(`i`,{className:S?`fa-solid fa-chess-knight`:`fa-solid fa-bolt`})}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{children:S?`Chess practice`:`Today’s practice`}),(0,q.jsx)(`p`,{children:S?j?j.levelName?j.paused?`Practice is paused.`:M?`Done today${j.streakDays?` · ${j.streakDays}-day streak`:``}`:`${j.done} of ${j.total} puzzles done`:`Your teacher will assign your starting level.`:`Loading today’s puzzles…`:ce?`Done today`:`Questions for your level are ready.`})]}),!S||j?.levelName?(0,q.jsxs)(h,{className:`home-practice-link`,to:w,children:[S?M?`See result`:j?.done?`Continue`:`Start`:ce?`Review`:`Start`,(0,q.jsx)(`i`,{className:`fa-solid fa-arrow-right`,"aria-hidden":`true`})]}):null]}),S?f?.id&&j&&j.membershipId===p?.id?(0,q.jsx)(V.Suspense,{fallback:(0,q.jsx)(`p`,{role:`status`,children:`Loading chess pathway…`}),children:(0,q.jsx)(Kt,{instituteId:f.id,levelId:j.levelId})}):(0,q.jsx)(`p`,{role:`status`,children:`Loading chess pathway…`}):e&&De(n).abacus?(0,q.jsx)(Ut,{levels:r,currentLevel:Number(c?.current_level??0),activeSubjects:n,enabledFeatures:o,unlockLevelByPath:a,hasSyllabus:ee}):null]}),(0,q.jsxs)(`aside`,{className:`home-widgets`,"aria-label":`Activity and updates`,children:[(0,q.jsxs)(`section`,{className:`home-widget home-weekly`,children:[(0,q.jsxs)(`div`,{className:`home-widget-heading`,children:[(0,q.jsx)(`span`,{className:`home-widget-icon`,"aria-hidden":`true`,children:(0,q.jsx)(`i`,{className:`fa-solid fa-calendar-days`})}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{children:`Weekly Abacus practice`}),(0,q.jsxs)(`p`,{children:[le.filter(e=>e.done).length,` of 7 days`]})]})]}),(0,q.jsx)(`ol`,{className:`home-week-days`,children:le.map(({day:e,done:t},n)=>(0,q.jsxs)(`li`,{className:t?`is-done`:``,"aria-label":`${e}: ${t?`complete`:`no practice recorded`}`,children:[(0,q.jsx)(`span`,{"aria-hidden":`true`,children:(0,q.jsx)(`i`,{className:t?`fa-solid fa-check`:`fa-solid fa-minus`})}),(0,q.jsxs)(`small`,{"aria-hidden":`true`,children:[e,n===6?(0,q.jsx)(`span`,{className:`home-today-dot`}):null]})]},e))})]}),(0,q.jsxs)(`section`,{className:`home-widget home-badges`,children:[(0,q.jsxs)(`div`,{className:`home-widget-heading`,children:[(0,q.jsx)(`span`,{className:`home-widget-icon`,"aria-hidden":`true`,children:(0,q.jsx)(`i`,{className:`fa-solid fa-trophy`})}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{children:`Badges`}),(0,q.jsxs)(`p`,{children:[N.achievements.length,` of `,l.length,` earned`]})]}),(0,q.jsx)(h,{className:`home-widget-link`,to:`/achievement`,children:`View badges`})]}),(0,q.jsx)(`progress`,{value:Math.min(N.achievements.length,l.length),max:l.length,"aria-label":`Badges earned`})]}),(0,q.jsxs)(`section`,{className:`home-widget home-updates`,children:[(0,q.jsxs)(`div`,{className:`home-widget-heading`,children:[(0,q.jsx)(`span`,{className:`home-widget-icon`,"aria-hidden":`true`,children:(0,q.jsx)(`i`,{className:`fa-solid fa-bell`})}),(0,q.jsx)(`div`,{children:(0,q.jsx)(`h2`,{children:`Today’s updates`})})]}),N.loading?(0,q.jsx)(`p`,{role:`status`,children:`Loading updates…`}):null,N.error?(0,q.jsx)(`p`,{role:`alert`,children:`Some updates couldn’t load.`}):null,!N.loading&&!N.error&&!U.length?(0,q.jsx)(`p`,{children:`No new class work today.`}):null,U.length?(0,q.jsx)(`ul`,{className:`home-update-list`,children:U.map(e=>(0,q.jsx)(`li`,{children:(0,q.jsxs)(h,{to:e.path,children:[(0,q.jsx)(`span`,{className:`home-update-icon`,style:{background:e.bg,color:e.color},"aria-hidden":`true`,children:(0,q.jsx)(`i`,{className:`fa-solid ${e.icon}`})}),(0,q.jsxs)(`span`,{children:[(0,q.jsx)(`strong`,{children:e.title}),(0,q.jsx)(`small`,{children:e.text})]}),(0,q.jsx)(`i`,{className:`fa-solid fa-angle-right`,"aria-hidden":`true`})]})},e.title))}):null,(0,q.jsx)(h,{className:`home-widget-link home-history-link`,to:`/exam`,children:`Exam history`})]}),(0,q.jsxs)(`div`,{className:`stats-grid home-quick-stats`,children:[(0,q.jsx)(`div`,{className:`stat-card`,style:{"--tile":`#8b5cf6`},children:(0,q.jsxs)(`div`,{className:`stat-info`,children:[(0,q.jsx)(`div`,{className:`stat-val`,children:S?j?.levelName||`Not set`:F}),(0,q.jsx)(`div`,{className:`stat-label`,children:S?`Chess Level`:`Abacus Level`})]})}),(0,q.jsx)(`div`,{className:`stat-card`,style:{"--tile":`#22c55e`},children:(0,q.jsxs)(`div`,{className:`stat-info`,children:[(0,q.jsx)(`div`,{className:`stat-val`,children:ue==null?`--`:`${ue}%`}),(0,q.jsx)(`div`,{className:`stat-label`,children:`Exam Average`})]})}),(0,q.jsx)(`div`,{className:`stat-card`,style:{"--tile":`#ec4899`},children:(0,q.jsxs)(`div`,{className:`stat-info`,children:[(0,q.jsx)(`div`,{className:`stat-val`,children:N.liveClasses.length}),(0,q.jsx)(`div`,{className:`stat-label`,children:`Live Classes`})]})})]})]})]}):null]})]})}function Yt(){return new Date().toISOString().slice(0,10)}function Xt(e){if(!e)return 0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);return Number(t.streakCount||0)}catch{return 0}}function Zt(e){let t=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],n=new Date,r=``,i=0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);r=t.lastLoginDate||``,i=Number(t.streakCount||0)}catch{}return Array.from({length:7},(e,a)=>{let o=new Date(n);o.setDate(n.getDate()-(6-a));let s=o.toLocaleDateString(`en-CA`),c=Math.round((Qt(n)-Qt(o))/864e5),l=r&&c<i;return{key:s,label:t[o.getDay()],today:s===n.toLocaleDateString(`en-CA`),done:l}})}function Qt(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function $t(e){let t=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],n=new Date,r=`practice_session_${e||`guest`}_`,i=new Set(Object.keys(localStorage).filter(e=>e.startsWith(r)&&localStorage.getItem(e)===`done`).map(e=>e.slice(r.length,r.length+10)));return Array.from({length:7},(e,r)=>{let a=new Date(n);a.setDate(n.getDate()-(6-r));let o=a.toISOString().slice(0,10);return{day:t[a.getDay()],done:i.has(o)}})}function en(e){let t=Number(e?.score??0),n=Number(e?.total_marks??e?.totalMarks??0);return n?`${t}/${n}`:`${t}`}var tn=`
  .not-found-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 40px 20px;
  }
  .abacus-wrap { 
    margin-bottom: 20px; 
    filter: drop-shadow(0 8px 24px rgba(0, 86, 179, 0.15)); 
  }
  .bead { 
    transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1); 
    cursor: pointer; 
  }
  .bead:hover { 
    transform: translateX(6px); 
  }
  @keyframes slideIn {
    from { transform: translateX(-40px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }
  .b-anim { animation: slideIn 0.6s cubic-bezier(0.34,1.56,0.64,1) both; }
  .b-anim:nth-child(1) { animation-delay: 0.1s; }
  .b-anim:nth-child(2) { animation-delay: 0.2s; }
  .b-anim:nth-child(3) { animation-delay: 0.3s; }
  .b-anim:nth-child(4) { animation-delay: 0.4s; }
  .b-anim:nth-child(5) { animation-delay: 0.5s; }
  
  .error-code { 
    font-family: "Sora", sans-serif;
    font-size: 5rem; 
    font-weight: 900; 
    letter-spacing: 2px; 
    color: var(--primary-blue); 
    line-height: 1; 
    margin-bottom: 10px; 
  }
  .error-msg { 
    font-size: 1.2rem; 
    font-weight: 700;
    color: var(--dark-blue); 
    margin-bottom: 6px; 
  }
  .error-sub { 
    color: var(--text-light); 
    font-size: 0.95rem; 
    font-weight: 700; 
    letter-spacing: 1px; 
    text-transform: uppercase; 
    margin-bottom: 32px; 
  }
`;function nn(){let e=b();return(0,q.jsxs)(`div`,{className:`page-wrap`,style:{justifyContent:`center`},children:[(0,q.jsx)(`style`,{children:tn}),(0,q.jsx)(m,{}),(0,q.jsxs)(`div`,{className:`practice-card not-found-container`,style:{maxWidth:`550px`,marginTop:0},children:[(0,q.jsx)(`div`,{className:`abacus-wrap`,children:(0,q.jsxs)(`svg`,{width:`320`,height:`160`,viewBox:`0 0 420 200`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,q.jsx)(`rect`,{x:`10`,y:`10`,width:`400`,height:`180`,rx:`16`,ry:`16`,fill:`#ffffff`,stroke:`var(--dark-blue)`,strokeWidth:`6`}),(0,q.jsx)(`rect`,{x:`10`,y:`85`,width:`400`,height:`6`,fill:`var(--dark-blue)`}),(0,q.jsx)(`text`,{x:`95`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`4`}),(0,q.jsx)(`text`,{x:`210`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`0`}),(0,q.jsx)(`text`,{x:`325`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`4`}),(0,q.jsx)(`line`,{x1:`95`,y1:`20`,x2:`95`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`72`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`101`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`123`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`145`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`158`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`line`,{x1:`210`,y1:`20`,x2:`210`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`35`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`101`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`118`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`135`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`152`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`line`,{x1:`325`,y1:`20`,x2:`325`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`72`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`101`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`123`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`145`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`158`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`})]})}),(0,q.jsx)(`div`,{className:`error-code`,children:`404`}),(0,q.jsx)(`p`,{className:`error-msg`,children:`Oops! This bead slipped off the rod.`}),(0,q.jsx)(`p`,{className:`error-sub`,children:`Page not found`}),(0,q.jsxs)(`button`,{className:`btn btn-primary`,onClick:()=>e(`/`),children:[(0,q.jsx)(`i`,{className:`fa-solid fa-house`,style:{marginRight:`8px`}}),` Back to Dashboard`]})]})]})}var rn=(0,V.lazy)(()=>w(()=>import(`./Basic-B1yrcMc_.js`),__vite__mapDeps([23,2,1]))),an=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e._),__vite__mapDeps([24,1,2]))),on=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.v),__vite__mapDeps([24,1,2]))),sn=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.u),__vite__mapDeps([24,1,2]))),cn=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.a),__vite__mapDeps([24,1,2]))),ln=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.o),__vite__mapDeps([24,1,2]))),un=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.d),__vite__mapDeps([24,1,2]))),dn=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.m),__vite__mapDeps([24,1,2]))),fn=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.f),__vite__mapDeps([24,1,2]))),pn=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.p),__vite__mapDeps([24,1,2]))),mn=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.r),__vite__mapDeps([24,1,2]))),hn=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.h),__vite__mapDeps([24,1,2]))),gn=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.n),__vite__mapDeps([24,1,2]))),_n=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.g),__vite__mapDeps([24,1,2]))),vn=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.s),__vite__mapDeps([24,1,2]))),yn=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.t),__vite__mapDeps([24,1,2]))),bn=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.i),__vite__mapDeps([24,1,2]))),xn=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.c),__vite__mapDeps([24,1,2]))),Sn=(0,V.lazy)(()=>w(()=>import(`./levels-0qtTUwOg.js`).then(e=>e.l),__vite__mapDeps([24,1,2]))),Cn=(0,V.lazy)(()=>w(()=>import(`./Abacus-DNj-oeEh.js`),__vite__mapDeps([25,1,2,26]))),wn=(0,V.lazy)(()=>w(()=>import(`./interactive-DBksK-Cu.js`).then(e=>e.a),__vite__mapDeps([2,1]))),Tn=(0,V.lazy)(()=>w(()=>import(`./interactive-DBksK-Cu.js`).then(e=>e.c),__vite__mapDeps([2,1]))),En=(0,V.lazy)(()=>w(()=>import(`./interactive-DBksK-Cu.js`).then(e=>e.l),__vite__mapDeps([2,1]))),Dn=(0,V.lazy)(()=>w(()=>import(`./interactive-DBksK-Cu.js`).then(e=>e.r),__vite__mapDeps([2,1]))),On=(0,V.lazy)(()=>w(()=>import(`./interactive-DBksK-Cu.js`).then(e=>e.o),__vite__mapDeps([2,1]))),kn=(0,V.lazy)(()=>w(()=>import(`./interactive-DBksK-Cu.js`).then(e=>e.s),__vite__mapDeps([2,1]))),An=(0,V.lazy)(()=>w(()=>import(`./interactive-DBksK-Cu.js`).then(e=>e.t),__vite__mapDeps([2,1]))),jn=(0,V.lazy)(()=>w(()=>import(`./interactive-DBksK-Cu.js`).then(e=>e.i),__vite__mapDeps([2,1]))),Mn=(0,V.lazy)(()=>w(()=>import(`./interactive-DBksK-Cu.js`).then(e=>e.n),__vite__mapDeps([2,1]))),Nn=(0,V.lazy)(()=>w(()=>import(`./VedicMaster-DwfsbsJv.js`),__vite__mapDeps([11,2,1,12]))),Pn=(0,V.lazy)(()=>w(()=>import(`./VedicTrickPractice-n2xbsQvI.js`),__vite__mapDeps([27,1,2,12]))),Fn=(0,V.lazy)(J(`/chess`)),In=(0,V.lazy)(()=>w(()=>import(`./RubiksCube-D7g8Xy_V.js`),__vite__mapDeps([28,1,2,29,26,8]))),Ln=(0,V.lazy)(J(`/practice`)),Rn=(0,V.lazy)(J(`/practice-session`)),zn=(0,V.lazy)(J(`/exam`)),Bn=(0,V.lazy)(J(`/live-classes`)),Vn=(0,V.lazy)(J(`/recorded-lectures`)),Hn=(0,V.lazy)(J(`/classroom`)),Un=(0,V.lazy)(J(`/syllabus`)),Wn=(0,V.lazy)(J(`/e-book`)),Gn=(0,V.lazy)(J(`/profile`)),Kn=(0,V.lazy)(J(`/achievement`)),qn=(0,V.lazy)(()=>w(()=>import(`./GameZone-BMKaKMUB.js`),__vite__mapDeps([30,1,2,8]))),Jn=(0,V.lazy)(()=>w(()=>import(`./mcq-DP6g8Mik.js`).then(e=>e.f),__vite__mapDeps([8,1,2]))),Yn=(0,V.lazy)(()=>w(()=>import(`./mcq-DP6g8Mik.js`).then(e=>e.p),__vite__mapDeps([8,1,2]))),Xn=(0,V.lazy)(()=>w(()=>import(`./mcq-DP6g8Mik.js`).then(e=>e.c),__vite__mapDeps([8,1,2]))),Zn=(0,V.lazy)(()=>w(()=>import(`./mcq-DP6g8Mik.js`).then(e=>e.l),__vite__mapDeps([8,1,2]))),Qn=(0,V.lazy)(()=>w(()=>import(`./mcq-DP6g8Mik.js`).then(e=>e.i),__vite__mapDeps([8,1,2]))),$n=(0,V.lazy)(()=>w(()=>import(`./mcq-DP6g8Mik.js`).then(e=>e.s),__vite__mapDeps([8,1,2]))),er=(0,V.lazy)(()=>w(()=>import(`./mcq-DP6g8Mik.js`).then(e=>e.t),__vite__mapDeps([8,1,2]))),tr=(0,V.lazy)(()=>w(()=>import(`./mcq-DP6g8Mik.js`).then(e=>e.n),__vite__mapDeps([8,1,2]))),nr=(0,V.lazy)(()=>w(()=>import(`./mcq-DP6g8Mik.js`).then(e=>e.d),__vite__mapDeps([8,1,2]))),rr=(0,V.lazy)(()=>w(()=>import(`./mcq-DP6g8Mik.js`).then(e=>e.u),__vite__mapDeps([8,1,2]))),ir=(0,V.lazy)(()=>w(()=>import(`./mcq-DP6g8Mik.js`).then(e=>e.a),__vite__mapDeps([8,1,2]))),ar=(0,V.lazy)(()=>w(()=>import(`./mcq-DP6g8Mik.js`).then(e=>e.o),__vite__mapDeps([8,1,2]))),or=(0,V.lazy)(()=>w(()=>import(`./mcq-DP6g8Mik.js`).then(e=>e.r),__vite__mapDeps([8,1,2]))),sr=new Set(`/addition./addsub./negative./multiply./division./decimal-addsub./decimal-multiply./decimal-division./sq-root./cube-root./square./cube./long-multiply./table./percentage./lcm./hcf./mcq-addition./mcq-addsub./mcq-decimal-add./mcq-decimal-addsub./mcq-multiply./mcq-division./mcq-square./mcq-sqroot./mcq-cube./mcq-cuberoot./mcq-lcm./mcq-hcf./mcq-percentage`.split(`.`)),cr=new Set([`/interactive-abacus-addition`,`/interactive-abacus-addsub`,`/interactive-abacus-multiply`,`/interactive-abacus-division`,`/interactive-abacus-decimals`,`/interactive-abacus-sqroots`,`/interactive-abacus-lcmhcf`,`/interactive-abacus-percentage`]);function lr(){let{instituteReady:e,instituteMissing:n,instituteSlug:r}=t();return e&&n&&!_t()?(0,q.jsx)(Vt,{slug:r}):(0,q.jsxs)(f,{children:[(0,q.jsx)(ur,{}),(0,q.jsx)(dr,{}),(0,q.jsx)(V.Suspense,{fallback:(0,q.jsx)(_r,{}),children:(0,q.jsxs)(v,{children:[(0,q.jsx)(a,{path:`/login`,element:(0,q.jsx)(dt,{})}),(0,q.jsx)(a,{path:`/policies`,element:(0,q.jsx)(ft,{})}),(0,q.jsx)(a,{path:`/reset-password`,element:(0,q.jsx)(pt,{})}),(0,q.jsx)(a,{path:`/`,element:(0,q.jsx)($,{children:(0,q.jsx)(mr,{})})}),(0,q.jsx)(a,{path:`/chess/*`,element:(0,q.jsx)(hr,{})}),(0,q.jsx)(a,{path:`/Basic`,element:(0,q.jsx)($,{children:(0,q.jsx)(rn,{})})}),(0,q.jsx)(a,{path:`/addition`,element:(0,q.jsx)($,{children:(0,q.jsx)(an,{})})}),(0,q.jsx)(a,{path:`/addsub`,element:(0,q.jsx)($,{children:(0,q.jsx)(on,{})})}),(0,q.jsx)(a,{path:`/formula-direct`,element:(0,q.jsx)($,{children:(0,q.jsx)(sn,{formula:`direct`})})}),(0,q.jsx)(a,{path:`/formula-small-friend`,element:(0,q.jsx)($,{children:(0,q.jsx)(sn,{formula:`smallFriend`})})}),(0,q.jsx)(a,{path:`/formula-big-friend`,element:(0,q.jsx)($,{children:(0,q.jsx)(sn,{formula:`bigFriend`})})}),(0,q.jsx)(a,{path:`/formula-combination`,element:(0,q.jsx)($,{children:(0,q.jsx)(sn,{formula:`combination`})})}),(0,q.jsx)(a,{path:`/negative`,element:(0,q.jsx)($,{children:(0,q.jsx)(cn,{})})}),(0,q.jsx)(a,{path:`/multiply`,element:(0,q.jsx)($,{children:(0,q.jsx)(ln,{})})}),(0,q.jsx)(a,{path:`/division`,element:(0,q.jsx)($,{children:(0,q.jsx)(un,{})})}),(0,q.jsx)(a,{path:`/decimal-addsub`,element:(0,q.jsx)($,{children:(0,q.jsx)(dn,{})})}),(0,q.jsx)(a,{path:`/decimal-multiply`,element:(0,q.jsx)($,{children:(0,q.jsx)(fn,{})})}),(0,q.jsx)(a,{path:`/decimal-division`,element:(0,q.jsx)($,{children:(0,q.jsx)(pn,{})})}),(0,q.jsx)(a,{path:`/sq-root`,element:(0,q.jsx)($,{children:(0,q.jsx)(mn,{})})}),(0,q.jsx)(a,{path:`/cube-root`,element:(0,q.jsx)($,{children:(0,q.jsx)(hn,{})})}),(0,q.jsx)(a,{path:`/square`,element:(0,q.jsx)($,{children:(0,q.jsx)(gn,{})})}),(0,q.jsx)(a,{path:`/cube`,element:(0,q.jsx)($,{children:(0,q.jsx)(_n,{})})}),(0,q.jsx)(a,{path:`/long-multiply`,element:(0,q.jsx)($,{children:(0,q.jsx)(vn,{})})}),(0,q.jsx)(a,{path:`/table`,element:(0,q.jsx)($,{children:(0,q.jsx)(yn,{})})}),(0,q.jsx)(a,{path:`/percentage`,element:(0,q.jsx)($,{children:(0,q.jsx)(bn,{})})}),(0,q.jsx)(a,{path:`/lcm`,element:(0,q.jsx)($,{children:(0,q.jsx)(xn,{})})}),(0,q.jsx)(a,{path:`/hcf`,element:(0,q.jsx)($,{children:(0,q.jsx)(Sn,{})})}),(0,q.jsx)(a,{path:`/abacus`,element:(0,q.jsx)($,{children:(0,q.jsx)(Cn,{})})}),(0,q.jsx)(a,{path:`/interactive-abacus`,element:(0,q.jsx)($,{children:(0,q.jsx)(wn,{})})}),(0,q.jsx)(a,{path:`/interactive-abacus-addition`,element:(0,q.jsx)($,{children:(0,q.jsx)(Tn,{})})}),(0,q.jsx)(a,{path:`/interactive-abacus-addsub`,element:(0,q.jsx)($,{children:(0,q.jsx)(En,{})})}),(0,q.jsx)(a,{path:`/interactive-abacus-multiply`,element:(0,q.jsx)($,{children:(0,q.jsx)(Dn,{})})}),(0,q.jsx)(a,{path:`/interactive-abacus-division`,element:(0,q.jsx)($,{children:(0,q.jsx)(On,{})})}),(0,q.jsx)(a,{path:`/interactive-abacus-decimals`,element:(0,q.jsx)($,{children:(0,q.jsx)(kn,{})})}),(0,q.jsx)(a,{path:`/interactive-abacus-sqroots`,element:(0,q.jsx)($,{children:(0,q.jsx)(An,{})})}),(0,q.jsx)(a,{path:`/interactive-abacus-lcmhcf`,element:(0,q.jsx)($,{children:(0,q.jsx)(jn,{})})}),(0,q.jsx)(a,{path:`/interactive-abacus-percentage`,element:(0,q.jsx)($,{children:(0,q.jsx)(Mn,{})})}),(0,q.jsx)(a,{path:`/iabacus`,element:(0,q.jsx)(s,{to:`/interactive-abacus`,replace:!0})}),(0,q.jsx)(a,{path:`/iabacus-addition`,element:(0,q.jsx)(s,{to:`/interactive-abacus-addition`,replace:!0})}),(0,q.jsx)(a,{path:`/iabacus-addsub`,element:(0,q.jsx)(s,{to:`/interactive-abacus-addsub`,replace:!0})}),(0,q.jsx)(a,{path:`/iabacus-multiply`,element:(0,q.jsx)(s,{to:`/interactive-abacus-multiply`,replace:!0})}),(0,q.jsx)(a,{path:`/iabacus-division`,element:(0,q.jsx)(s,{to:`/interactive-abacus-division`,replace:!0})}),(0,q.jsx)(a,{path:`/iabacus-decimals`,element:(0,q.jsx)(s,{to:`/interactive-abacus-decimals`,replace:!0})}),(0,q.jsx)(a,{path:`/iabacus-sqroots`,element:(0,q.jsx)(s,{to:`/interactive-abacus-sqroots`,replace:!0})}),(0,q.jsx)(a,{path:`/iabacus-lcmhcf`,element:(0,q.jsx)(s,{to:`/interactive-abacus-lcmhcf`,replace:!0})}),(0,q.jsx)(a,{path:`/iabacus-percentage`,element:(0,q.jsx)(s,{to:`/interactive-abacus-percentage`,replace:!0})}),(0,q.jsx)(a,{path:`/RubiksCube`,element:(0,q.jsx)($,{children:(0,q.jsx)(In,{})})}),(0,q.jsx)(a,{path:`/practice`,element:(0,q.jsx)($,{children:(0,q.jsx)(Ln,{})})}),(0,q.jsx)(a,{path:`/practice-session`,element:(0,q.jsx)($,{children:(0,q.jsx)(Rn,{},`abacus`)})}),(0,q.jsx)(a,{path:`/exam`,element:(0,q.jsx)($,{children:(0,q.jsx)(zn,{})})}),(0,q.jsx)(a,{path:`/live-classes`,element:(0,q.jsx)($,{children:(0,q.jsx)(Bn,{})})}),(0,q.jsx)(a,{path:`/recorded-lectures`,element:(0,q.jsx)($,{children:(0,q.jsx)(Vn,{})})}),(0,q.jsx)(a,{path:`/classroom`,element:(0,q.jsx)($,{children:(0,q.jsx)(Hn,{})})}),(0,q.jsx)(a,{path:`/syllabus`,element:(0,q.jsx)($,{children:(0,q.jsx)(Un,{})})}),(0,q.jsx)(a,{path:`/e-book`,element:(0,q.jsx)($,{children:(0,q.jsx)(Wn,{})})}),(0,q.jsx)(a,{path:`/profile`,element:(0,q.jsx)($,{children:(0,q.jsx)(Gn,{})})}),(0,q.jsx)(a,{path:`/achievement`,element:(0,q.jsx)($,{children:(0,q.jsx)(Kn,{})})}),(0,q.jsx)(a,{path:`/mcq-addition`,element:(0,q.jsx)($,{children:(0,q.jsx)(Jn,{})})}),(0,q.jsx)(a,{path:`/mcq-addsub`,element:(0,q.jsx)($,{children:(0,q.jsx)(Yn,{})})}),(0,q.jsx)(a,{path:`/mcq-decimal-add`,element:(0,q.jsx)($,{children:(0,q.jsx)(Xn,{})})}),(0,q.jsx)(a,{path:`/mcq-decimal-addsub`,element:(0,q.jsx)($,{children:(0,q.jsx)(Zn,{})})}),(0,q.jsx)(a,{path:`/mcq-multiply`,element:(0,q.jsx)($,{children:(0,q.jsx)(Qn,{})})}),(0,q.jsx)(a,{path:`/mcq-division`,element:(0,q.jsx)($,{children:(0,q.jsx)($n,{})})}),(0,q.jsx)(a,{path:`/mcq-square`,element:(0,q.jsx)($,{children:(0,q.jsx)(er,{})})}),(0,q.jsx)(a,{path:`/mcq-sqroot`,element:(0,q.jsx)($,{children:(0,q.jsx)(tr,{})})}),(0,q.jsx)(a,{path:`/mcq-cube`,element:(0,q.jsx)($,{children:(0,q.jsx)(nr,{})})}),(0,q.jsx)(a,{path:`/mcq-cuberoot`,element:(0,q.jsx)($,{children:(0,q.jsx)(rr,{})})}),(0,q.jsx)(a,{path:`/mcq-lcm`,element:(0,q.jsx)($,{children:(0,q.jsx)(ir,{})})}),(0,q.jsx)(a,{path:`/mcq-hcf`,element:(0,q.jsx)($,{children:(0,q.jsx)(ar,{})})}),(0,q.jsx)(a,{path:`/mcq-percentage`,element:(0,q.jsx)($,{children:(0,q.jsx)(or,{})})}),(0,q.jsx)(a,{path:`/mental-flash-games`,element:(0,q.jsx)($,{children:(0,q.jsx)(qn,{})})}),(0,q.jsx)(a,{path:`/vedic-math`,element:(0,q.jsx)(s,{to:`/vedic-math/master`,replace:!0})}),(0,q.jsx)(a,{path:`/vedic-math/master`,element:(0,q.jsx)($,{children:(0,q.jsx)(Nn,{})})}),(0,q.jsx)(a,{path:`/vedic-math/daily`,element:(0,q.jsx)($,{children:(0,q.jsx)(Rn,{track:`vedic`},`vedic`)})}),(0,q.jsx)(a,{path:`/vedic-math/practice/:trickId`,element:(0,q.jsx)($,{children:(0,q.jsx)(Pn,{})})}),(0,q.jsx)(a,{path:`*`,element:(0,q.jsx)(nn,{})})]})})]})}function ur(){let e=b(),t=_();return(0,V.useEffect)(()=>{if(!o.isNativePlatform())return;let r=n.addListener(`backButton`,({canGoBack:r})=>{r&&window.history.length>1?window.history.back():t.pathname!==`/`&&t.pathname!==`/login`?e(`/`,{replace:!0}):n.exitApp()});return()=>{r.then(e=>e.remove())}},[e,t.pathname]),null}function dr(){let{pathname:e}=_(),{user:n,membership:r,consentRequiredNotice:i}=t(),a=n&&r?.role===`student`&&!i?r.id:null;return(0,V.useEffect)(()=>{if(a)return E(a),()=>j()},[a]),(0,V.useEffect)(()=>{a&&D(e)},[e,a]),null}var fr=`student-sidebar-collapsed`;function pr(){try{return window.localStorage.getItem(fr)===`1`}catch{return!1}}function mr(){let{ready:e,activeSubjects:t}=i();return e&&!G(`abacus`,t)&&G(`chess`,t)?(0,q.jsx)(s,{to:`/chess`,replace:!0}):(0,q.jsx)(Jt,{})}function hr(){let{pathname:e}=_();return e.startsWith(`/chess/verify/`)?(0,q.jsx)(Fn,{}):(0,q.jsx)($,{children:(0,q.jsx)(gr,{})})}function gr(){let{signOut:e}=t(),{pathname:n}=_(),{ready:r,activeSubjects:a}=i();return r&&!G(`chess`,a)?(0,q.jsx)(s,{to:`/`,replace:!0}):n.replace(/\/$/,``)===`/chess/exams`?(0,q.jsx)(s,{to:`/exam`,replace:!0}):r&&n.replace(/\/$/,``)===`/chess`&&G(`abacus`,a)?(0,q.jsx)(s,{to:`/`,replace:!0}):(0,q.jsx)(Fn,{onSignOut:e})}function _r(){return(0,q.jsx)(`p`,{role:`status`,style:{padding:24},children:`Loading page…`})}function $({children:e}){let[n,r]=(0,V.useState)(!1),[a,o]=(0,V.useState)(pr),{pathname:s}=_(),c=b(),{user:l,studentLayout:u}=t(),d=sr.has(s),f=cr.has(s),p=d||f,m=/^\/chess\/(learn|openings|games)(?:\/|$)/.test(s),h=p||m||a,{enabledFeatures:g}=i(),v=Bt(),y=f?{path:`/interactive-abacus`,label:`Interactive Abacus`}:ve(`practice_playground`,g)?{path:`/practice`,label:`Practice`}:{path:`/`,label:`Home`},x=u||`sidebar_classic`,S=x===`topbar_focus`||x===`bento_gamified`,C=()=>{r(e=>!e)};return(0,q.jsx)(bt,{children:l?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(Me,{toggleSidebar:C,hideSidebarToggle:p}),S&&!p?(0,q.jsx)(Ue,{classroomUnread:v}):null,(0,q.jsxs)(`div`,{className:`app-layout app-layout-${x} ${p?`app-layout-focus`:``} ${h&&!p?`app-layout-collapsed`:``}`,children:[(0,q.jsx)(Ve,{isOpen:n,toggleSidebar:C,minimized:h,classroomUnread:v,onToggleMinimized:p||m?null:()=>{o(e=>{let t=!e;try{window.localStorage.setItem(fr,t?`1`:`0`)}catch{}return t})}}),(0,q.jsxs)(`main`,{className:`main-content`,children:[p?(0,q.jsx)(`div`,{className:`practice-focus-topbar`,children:(0,q.jsx)(`button`,{className:`practice-back-button`,type:`button`,"aria-label":`Back to ${y.label}`,title:`Back to ${y.label}`,onClick:()=>c(y.path),children:(0,q.jsx)(`i`,{className:`fa-solid fa-arrow-left`})})}):null,(0,q.jsx)(V.Suspense,{fallback:(0,q.jsx)(_r,{}),children:(0,q.jsx)(xt,{children:e})})]})]}),(0,q.jsx)(Re,{}),(0,q.jsx)(Ge,{})]}):(0,q.jsx)(`div`,{className:`app-layout app-layout-focus`,style:{minHeight:`100vh`,width:`100%`},children:(0,q.jsx)(`main`,{className:`main-content`,style:{margin:0,padding:`20px 16px`,width:`100%`},children:(0,q.jsx)(V.Suspense,{fallback:(0,q.jsx)(_r,{}),children:e})})})})}function vr(e,t){return new Intl.NumberFormat(`en-IN`,{style:`currency`,currency:t}).format(e/100)}function yr(e){return e.reduce((e,t)=>e+t.amount,0)}function br(e){return e?new Intl.DateTimeFormat(`en-IN`,{dateStyle:`medium`,timeZone:`UTC`}).format(new Date(e+`T00:00:00Z`)):``}function xr({invoice:e}){let{issuer:t,student:n,parent:r,number:i,issuedOn:a,dueOn:o,currency:s,items:c,upi:l,holder:u,bank:d,account:f,routing:p,notes:m,color:h,logo:g}=e,_=yr(c),v=/^#[a-f0-9]{6}$/i.test(h||``)?h:`#315c50`,y=/^https:\/\//i.test(g||``)?g:``;return(0,q.jsxs)(`article`,{className:`parent-invoice`,style:{"--invoice-accent":v},children:[(0,q.jsxs)(`header`,{className:`parent-invoice-brand`,children:[y&&(0,q.jsx)(`img`,{src:y,alt:``,crossOrigin:`anonymous`}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`div`,{className:`parent-invoice-issuer`,children:t||`Institute name`}),e.contact&&(0,q.jsx)(`div`,{children:e.contact})]})]}),(0,q.jsxs)(`div`,{className:`parent-invoice-meta`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`div`,{className:`parent-invoice-label`,children:`Billed to`}),(0,q.jsx)(`strong`,{children:r||n||`Student name`}),r&&n&&(0,q.jsxs)(`div`,{children:[`Student · `,n]})]}),(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{children:`Invoice`}),i&&(0,q.jsx)(`div`,{children:i}),(0,q.jsxs)(`div`,{children:[`Issued `,br(a)]}),o&&(0,q.jsxs)(`div`,{children:[`Due `,br(o)]})]})]}),(0,q.jsxs)(`table`,{children:[(0,q.jsx)(`thead`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`col`,children:`Description`}),(0,q.jsx)(`th`,{scope:`col`,children:`Amount`})]})}),(0,q.jsx)(`tbody`,{children:c.map((e,t)=>(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`td`,{children:e.description||`Fee description`}),(0,q.jsx)(`td`,{children:vr(e.amount,s)})]},t))}),(0,q.jsx)(`tfoot`,{children:(0,q.jsxs)(`tr`,{children:[(0,q.jsx)(`th`,{scope:`row`,children:`Total due`}),(0,q.jsx)(`td`,{children:vr(_,s)})]})})]}),(l||f)&&(0,q.jsxs)(`section`,{className:`parent-invoice-payment`,children:[(0,q.jsx)(`div`,{className:`parent-invoice-label`,children:`Payment details`}),l&&(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`strong`,{children:`UPI ID`}),` · `,l]}),f&&(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`strong`,{children:`Bank transfer`}),` · `,[u,d].filter(Boolean).join(` · `)]}),f&&(0,q.jsxs)(`div`,{children:[`Account `,f,p&&` · IFSC / routing ${p}`]})]}),m&&(0,q.jsx)(`p`,{className:`parent-invoice-note`,children:m})]})}var Sr=/^[a-f\d]{8}-[a-f\d]{4}-4[a-f\d]{3}-[89ab][a-f\d]{3}-[a-f\d]{12}$/i,Cr=new Set([`INR`,`USD`,`GBP`,`EUR`,`AED`]),wr=/^\d{4}-\d{2}-\d{2}$/;function Tr(e){return typeof e==`string`&&wr.test(e)&&Number.isFinite(Date.parse(e+`T00:00:00Z`))}function Er(e){return!e||!Cr.has(e.currency)||!Tr(e.issuedOn)||e.dueOn&&!Tr(e.dueOn)?!1:[`issuer`,`student`,`parent`,`contact`,`number`,`upi`,`holder`,`bank`,`account`,`routing`,`notes`,`logo`,`color`].every(t=>typeof e[t]==`string`)&&Array.isArray(e.items)&&e.items.length>0&&e.items.length<=8&&e.items.every(e=>e&&typeof e.description==`string`&&Number.isSafeInteger(e.amount)&&e.amount>0)}function Dr(){let[e,t]=(0,V.useState)(()=>window.location.hash.slice(1)),[n,i]=(0,V.useState)(null),[a,o]=(0,V.useState)(0),s=n?.token===e&&n?.attempt===a?n:null;return(0,V.useEffect)(()=>{let e=()=>t(window.location.hash.slice(1));return window.addEventListener(`hashchange`,e),()=>window.removeEventListener(`hashchange`,e)},[]),(0,V.useEffect)(()=>{if(document.title=`Invoice`,!Sr.test(e))return;let t=new AbortController;async function n(){try{let{data:n,error:o}=await r.rpc(`read_parent_invoice`,{p_token:e,p_host:window.location.hostname}).abortSignal(t.signal);t.signal.aborted||i({token:e,attempt:a,invoice:Er(n)?n:null,error:!!o})}catch{t.signal.aborted||i({token:e,attempt:a,invoice:null,error:!0})}}return n(),()=>t.abort()},[e,a]),(0,V.useEffect)(()=>{document.title=s?.invoice?`Invoice | ${s.invoice.issuer}`:`Invoice`},[s]),(0,q.jsx)(`main`,{className:`parent-invoice-page`,children:s?.invoice?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`div`,{className:`parent-invoice-page-actions`,children:(0,q.jsx)(`button`,{type:`button`,onClick:()=>window.print(),children:`Print / Save PDF`})}),(0,q.jsx)(xr,{invoice:s.invoice})]}):(0,q.jsx)(`div`,{className:`parent-invoice-page-status`,role:`status`,children:s?.error?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`h1`,{children:`Couldn’t load the invoice`}),(0,q.jsx)(`button`,{type:`button`,onClick:()=>o(e=>e+1),children:`Try again`})]}):Sr.test(e)&&!s?(0,q.jsx)(`p`,{children:`Loading invoice…`}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`h1`,{children:`Invoice unavailable`}),(0,q.jsx)(`p`,{children:`Ask your institute for a current invoice link.`})]})})})}var Or=/^\/invoice\/?$/.test(window.location.pathname);if(Or)for(let[e,t]of[[`robots`,`noindex, nofollow`],[`referrer`,`no-referrer`]]){let n=document.createElement(`meta`);n.name=e,n.content=t,document.head.appendChild(n)}(0,H.createRoot)(document.getElementById(`root`)).render((0,q.jsx)(V.StrictMode,{children:Or?(0,q.jsx)(Dr,{}):(0,q.jsx)(y,{children:(0,q.jsx)(lr,{})})}));export{De as _,Tt as a,jt as c,Nt as d,Dt as f,ye as g,Ee as h,Et as i,Ft as l,Qe as m,wt as n,kt as o,It as p,Pt as r,Mt as s,zt as t,At as u};