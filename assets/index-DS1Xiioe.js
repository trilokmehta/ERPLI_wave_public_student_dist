const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Basic-CS3UCHyF.js","assets/interactive-CtP7aZWY.js","assets/rolldown-runtime-S-ySWqyJ.js","assets/levels-D0ZCyXej.js","assets/Abacus-B0zNXjUt.js","assets/LiveToolBanner-CQv-f3yj.js","assets/VedicMaster-CS-Ej139.js","assets/vedicSyllabus-xt-k3Jbl.js","assets/VedicTrickPractice-BaC5YuZV.js","assets/RubiksCube-B9sBl-9Q.js","assets/three-CjiDZAja.js","assets/mcq-C8vxWQKM.js","assets/Practice-D__N50LQ.js","assets/PracticeSession-BeivQqhe.js","assets/Exam-G5k8cCbI.js","assets/contentLevels-CDV_YUuY.js","assets/LiveClasses-CUJ52YQZ.js","assets/RecordedLecture-CLhpfJ73.js","assets/react-dom-DMzigElm.js","assets/Classroom-gC2RgVCi.js","assets/Syllabus-FIcBuX-S.js","assets/EBook-CrtMni_6.js","assets/vendor-BCpWLCR9.js","assets/vendor-rptWOpCb.css","assets/Profile-BB3S4wA4.js","assets/Achievement-DTpFs1Fd.js","assets/GameZone-GMGPrW-l.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{$ as t,At as n,Dt as r,E as i,Ft as a,G as o,H as s,It as c,J as l,Mt as u,Nt as d,Ot as f,Pt as p,Q as m,Rt as h,Tt as g,V as _,W as v,X as y,Y as b,Z as x,dt as S,et as C,f as w,g as T,ht as ee,kt as E,lt as D,mt as O,nt as k,p as A,pt as te,q as j,tt as M,ut as ne,v as re,y as N,zt as ie}from"./interactive-CtP7aZWY.js";import{n as P,t as ae}from"./react-dom-DMzigElm.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var F=e(ie(),1),I=ae();function oe(e){return`${e}-${Math.random().toString(36).slice(2,10)}`}function L(e,t){try{let n=E.channel(oe(`batch-announcements-${e}`)).on(`postgres_changes`,{event:`INSERT`,schema:`public`,table:`batch_announcements`,filter:`batch_id=eq.${e}`},e=>t(e.new)).subscribe();return()=>E.removeChannel(n)}catch(e){return console.warn(`batch_announcements:subscribe:failed`,e.message),()=>{}}}var R=`announcements_seen_at_`;function z(e){try{return Number(localStorage.getItem(`${R}${e}`))||0}catch{return 0}}function se(e,t){try{localStorage.setItem(`${R}${e}`,String(t))}catch{}}function ce(){let{institute:e,membership:t}=b(),n=e?.id??null,r=t?.id??null,[i,a]=(0,F.useState)([]),[o,s]=(0,F.useState)(!0),[c,l]=(0,F.useState)(0),u=(0,F.useCallback)(e=>{if(!r)return;let t=z(r);l(e.filter(e=>new Date(e.created_at).getTime()>t).length)},[r]);return(0,F.useEffect)(()=>{if(!n||!r){a([]),l(0),s(!1);return}let e=!0,t=[];async function i(){s(!0);let{data:i}=await S(n,r);if(!e)return;let o=[...new Set(i.map(e=>e.batch_id).filter(Boolean))],c=new Map(i.map(e=>[e.batch_id,e.batches?.name||`Batch`]));if(!o.length){a([]),l(0),s(!1);return}let{data:d,error:f}=await E.from(`batch_announcements`).select(`*`).in(`batch_id`,o).order(`created_at`,{ascending:!1}).limit(30);if(!e)return;if(f){console.warn(`announcements_feed:list:failed`,f.message),a([]),l(0),s(!1);return}let p=(d??[]).map(e=>({...e,batch_name:c.get(e.batch_id)}));a(p),u(p),s(!1),o.forEach(n=>{t.push(L(n,t=>{if(!e)return;let r={...t,batch_name:c.get(n)};a(e=>{if(e.some(e=>e.id===r.id))return e;let t=[r,...e].slice(0,30);return u(t),t})}))})}return i(),()=>{e=!1,t.forEach(e=>e())}},[n,r,u]),{announcements:i,loading:o,unreadCount:c,markSeen:(0,F.useCallback)(()=>{if(!r)return;let e=i.reduce((e,t)=>Math.max(e,new Date(t.created_at).getTime()||0),0);se(r,Math.max(Date.now(),e,z(r))),l(0)},[r,i])}}var B=y();function le({toggleSidebar:e,hideSidebarToggle:t=!1}){let n=c(),{profile:r,institute:i,membership:a,signOut:o}=b(),[s,l]=(0,F.useState)(!1),[u,d]=(0,F.useState)(!1),[f,p]=(0,F.useState)(!1),[m,h]=(0,F.useState)(!1),g=(0,F.useRef)(null),_=(0,F.useRef)(null),v=(0,F.useRef)(null),{announcements:y,loading:x,unreadCount:S,markSeen:C}=ce();(0,F.useEffect)(()=>{if(!u&&!f&&!m)return;function e(e){u&&g.current&&!g.current.contains(e.target)&&d(!1),f&&_.current&&!_.current.contains(e.target)&&p(!1),m&&v.current&&!v.current.contains(e.target)&&h(!1)}return document.addEventListener(`mousedown`,e),document.addEventListener(`touchstart`,e),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`touchstart`,e)}},[u,f,m]);function w(){h(e=>{let t=!e;return t&&C(),t})}let T=Array.isArray(i?.institute_branding)?i?.institute_branding[0]?.logo_url:i?.institute_branding?.logo_url,ee=i?.name||`Student Portal`,E=r?.full_name||`Student`,D=r?.current_level===999?`All levels`:`Level ${r?.current_level??0}`,O=ue(a?.id),k=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(e=>{console.error(`Error attempting to enable fullscreen: ${e.message}`)})};(0,F.useEffect)(()=>{let e=()=>{l(!!document.fullscreenElement)};return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]);async function A(){await o(),d(!1),n(`/login`)}return(0,B.jsxs)(`nav`,{className:`navbar`,children:[(0,B.jsxs)(`div`,{className:`nav-left`,children:[t?null:(0,B.jsx)(`button`,{className:`hamburger nav-hamburger-left`,onClick:e,"aria-label":`Toggle Sidebar`,children:(0,B.jsx)(`i`,{className:`fa-solid fa-bars`})}),(0,B.jsxs)(`div`,{className:`logo`,onClick:()=>n(`/`),children:[(0,B.jsx)(`span`,{className:`nav-brand-logo-wrapper`,children:(0,B.jsx)(`img`,{src:T||`/Abacus.png`,alt:ee,className:`nav-brand-logo`})}),(0,B.jsx)(`span`,{children:ee})]})]}),(0,B.jsxs)(`div`,{className:`nav-actions`,children:[(0,B.jsxs)(`button`,{className:`nav-streak-pill`,onClick:()=>n(`/`),title:`Daily login streak`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-fire`}),(0,B.jsx)(`span`,{children:O})]}),(0,B.jsxs)(`div`,{className:`nav-notif`,ref:v,children:[(0,B.jsxs)(`button`,{className:`nav-notif-button`,onClick:w,"aria-label":`Open announcements`,"aria-expanded":m,title:`Announcements`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-bell`}),S>0?(0,B.jsx)(`span`,{className:`nav-notif-dot`}):null]}),m?(0,B.jsxs)(`div`,{className:`nav-notif-menu`,children:[(0,B.jsx)(`div`,{className:`nav-notif-header`,children:`Announcements`}),(0,B.jsx)(`div`,{className:`nav-notif-list`,children:x?(0,B.jsx)(`div`,{className:`nav-notif-empty`,children:`Loading…`}):y.length===0?(0,B.jsx)(`div`,{className:`nav-notif-empty`,children:`No announcements yet.`}):y.map(e=>(0,B.jsxs)(`div`,{className:`nav-notif-item`,children:[e.title?(0,B.jsx)(`strong`,{children:e.title}):null,(0,B.jsx)(`p`,{children:e.message}),(0,B.jsxs)(`span`,{children:[e.batch_name,` · `,new Date(e.created_at).toLocaleString()]})]},e.id))}),(0,B.jsx)(`button`,{className:`nav-notif-viewall`,onClick:()=>{h(!1),n(`/classroom`)},children:`View in Classroom`})]}):null]}),(0,B.jsxs)(`div`,{className:`nav-profile`,ref:g,children:[(0,B.jsxs)(`button`,{className:`nav-profile-button`,onClick:()=>d(e=>!e),"aria-label":`Open profile menu`,"aria-expanded":u,children:[(0,B.jsx)(`span`,{className:`nav-profile-avatar`,children:(0,B.jsx)(`i`,{className:`fa-solid fa-user`})}),(0,B.jsxs)(`span`,{className:`nav-profile-text`,children:[(0,B.jsx)(`strong`,{children:E}),(0,B.jsx)(`span`,{children:D})]}),(0,B.jsx)(`i`,{className:`fa-solid fa-chevron-${u?`up`:`down`} nav-profile-caret`})]}),u?(0,B.jsxs)(`div`,{className:`nav-profile-menu`,children:[(0,B.jsxs)(`button`,{onClick:()=>{d(!1),n(`/profile`)},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-user`}),`Profile`]}),(0,B.jsxs)(`button`,{onClick:()=>{d(!1),n(`/achievement`)},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-medal`}),`Achievements`]}),(0,B.jsxs)(`button`,{onClick:A,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),`Log Out`]})]}):null]}),(0,B.jsx)(`button`,{className:`fullscreen-toggle`,onClick:k,title:s?`Exit Fullscreen`:`Enter Fullscreen`,children:(0,B.jsx)(`i`,{className:`fa-solid ${s?`fa-compress`:`fa-expand`}`})})]}),(0,B.jsxs)(`div`,{className:`nav-more`,ref:_,children:[(0,B.jsx)(`button`,{className:`nav-more-button`,onClick:()=>p(e=>!e),"aria-label":`Open menu`,"aria-expanded":f,children:(0,B.jsx)(`i`,{className:`fa-solid fa-ellipsis-vertical`})}),f?(0,B.jsxs)(`div`,{className:`nav-more-menu`,children:[(0,B.jsxs)(`div`,{className:`nav-more-profile`,children:[(0,B.jsx)(`span`,{className:`nav-profile-avatar`,children:(0,B.jsx)(`i`,{className:`fa-solid fa-user`})}),(0,B.jsxs)(`div`,{className:`nav-more-profile-text`,children:[(0,B.jsx)(`strong`,{children:E}),(0,B.jsx)(`span`,{children:D})]})]}),(0,B.jsxs)(`button`,{onClick:()=>n(`/`),children:[(0,B.jsx)(`i`,{className:`fa-solid fa-fire`}),`Login streak`,(0,B.jsx)(`span`,{className:`nav-more-badge`,children:O})]}),(0,B.jsxs)(`button`,{onClick:()=>{p(!1),C(),n(`/classroom`)},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-bell`}),`Announcements`,S>0?(0,B.jsx)(`span`,{className:`nav-more-badge`,children:S}):null]}),(0,B.jsxs)(`button`,{onClick:()=>{k(),p(!1)},children:[(0,B.jsx)(`i`,{className:`fa-solid ${s?`fa-compress`:`fa-expand`}`}),s?`Exit fullscreen`:`Fullscreen`]}),(0,B.jsxs)(`button`,{onClick:()=>{p(!1),n(`/profile`)},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-user`}),`Profile`]}),(0,B.jsxs)(`button`,{onClick:()=>{p(!1),n(`/achievement`)},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-medal`}),`Achievements`]}),(0,B.jsxs)(`button`,{onClick:A,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),`Log Out`]})]}):null]})]})}function ue(e){if(!e)return 0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);return Number(t.streakCount||0)}catch{return 0}}var V=70,de=110,H=[`canvas`,`input`,`textarea`,`select`,`[contenteditable='true']`,`[data-no-pull-refresh]`,`.rubiks-viewport`,`.exam-question-panel`,`.ebook-draw-active`,`.yt-frame`,`.yt-playlist`].join(`,`);function U(e){if(!(e instanceof Element)||e.closest(H))return!0;for(let t=e;t&&t!==document.body;t=t.parentElement)if(t.scrollTop>0||getComputedStyle(t).touchAction===`none`)return!0;return!1}function fe(){let[e,t]=(0,F.useState)(0),[n,r]=(0,F.useState)(!1),i=(0,F.useRef)(null),a=(0,F.useRef)(0);if((0,F.useEffect)(()=>{if(!(`ontouchstart`in window))return;function e(e){if(e.touches.length!==1||window.scrollY>0||U(e.target)){i.current=null;return}i.current=e.touches[0].clientY}function n(e){if(i.current==null)return;let n=e.touches[0].clientY-i.current;if(n<=0||window.scrollY>0){a.current=0,t(0);return}let r=Math.min(de,n*.5);a.current=r,t(r),e.cancelable&&e.preventDefault()}function o(){i.current!=null&&(i.current=null,a.current>=V?(r(!0),t(V),window.location.reload()):t(0),a.current=0)}return window.addEventListener(`touchstart`,e,{passive:!0}),window.addEventListener(`touchmove`,n,{passive:!1}),window.addEventListener(`touchend`,o),window.addEventListener(`touchcancel`,o),()=>{window.removeEventListener(`touchstart`,e),window.removeEventListener(`touchmove`,n),window.removeEventListener(`touchend`,o),window.removeEventListener(`touchcancel`,o)}},[]),!e&&!n)return null;let o=e>=V;return(0,B.jsx)(`div`,{"aria-hidden":`true`,style:{position:`fixed`,top:`calc(var(--nav-h, 56px) + 6px)`,left:`50%`,zIndex:1e4,width:38,height:38,borderRadius:`50%`,background:`var(--card-bg, #fff)`,boxShadow:`0 4px 14px rgba(0, 0, 0, 0.18)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--primary-blue)`,transform:`translate(-50%, ${e-44}px)`,opacity:Math.min(1,e/V),transition:`opacity 0.15s ease`,pointerEvents:`none`},children:(0,B.jsx)(`i`,{className:`fa-solid ${n?`fa-circle-notch fa-spin`:`fa-arrow-rotate-right`}`,style:{fontSize:`1rem`,transform:n?void 0:`rotate(${e/V*270}deg)`,color:o||n?`var(--primary-blue)`:`var(--text-light)`}})})}var W=[{label:`Home`,path:`/`,icon:`fa-house`},{label:`Practice`,path:`/practice`,icon:`fa-dumbbell`},{label:`Daily Session`,path:`/practice-session`,icon:`fa-calendar-check`},{label:`Achievements`,path:`/achievement`,icon:`fa-medal`},{label:`Syllabus`,path:`/syllabus`,icon:`fa-list-check`},{label:`Live Classes`,path:`/live-classes`,icon:`fa-video`},{label:`Chat & Notices`,path:`/classroom`,icon:`fa-comments`},{label:`Recordings`,path:`/recorded-lectures`,icon:`fa-circle-play`},{label:`E-Books`,path:`/e-book`,icon:`fa-book-open`},{label:`Exams`,path:`/exam`,icon:`fa-file-lines`}],pe=[{prefix:`/vedic-math`,subject:`vedic`},{prefix:`/RubiksCube`,subject:`rubiks`},{prefix:`/interactive-abacus`,subject:`abacus`},{prefix:`/abacus`,subject:`abacus`}];function G(e){return pe.find(t=>e===t.prefix||e.startsWith(`${t.prefix}/`)||e.startsWith(`${t.prefix}-`))?.subject??null}function K(e,t){return!e||!t?!0:t.has(e)}function q(e,t){return e.filter(e=>K(G(e.path),t))}var J=[{label:`Interactive Abacus`,path:`/interactive-abacus`,icon:`fa-calculator`},{label:`Digital Abacus`,path:`/abacus`,icon:`fa-desktop`},{label:`Vedic Math`,path:`/vedic-math`,icon:`fa-wand-magic-sparkles`},{label:`Rubik's Cube`,path:`/RubiksCube`,icon:`fa-cube`},{label:`Game Zone`,path:`/mental-flash-games`,icon:`fa-gamepad`}];function me(e){return`${e}-${Math.random().toString(36).slice(2,10)}`}function Y(e,t){return console.warn(`chat:${e}:failed`,t?.message),{data:null,error:{message:t?.message||`Something went wrong.`}}}async function X(){let{data:e}=await E.auth.getSession();return e?.session?.user?.id??null}async function he(e){let{data:t,error:n}=await E.rpc(`chat_inbox`,{p_institute_id:e??null});return n?{...Y(`inbox`,n),data:[]}:{data:t??[],error:null}}async function ge(e,t=``){let{data:n,error:r}=await E.rpc(`chat_contacts`,{p_institute_id:e??null,p_search:t||null});return r?{...Y(`contacts`,r),data:[]}:{data:n??[],error:null}}async function _e(e,t){let{data:n,error:r}=await E.rpc(`chat_start_direct`,{p_institute_id:e??null,p_target_membership_id:t});return r?Y(`start`,r):{data:n,error:null}}function Z(e){return{id:e.id,body:e.message,sender_user_id:e.sender_user_id,sender_name:e.sender_name,sender_role:e.sender_role,created_at:e.created_at,reply_to_id:e.reply_to_id,forwarded:e.forwarded,edited_at:e.edited_at,deleted_at:e.deleted_at,pinned_at:e.pinned_at}}async function ve(e){let{data:t,error:n}=await(e.kind===`batch`?E.from(`batch_chat_messages`).select(`*`).eq(`batch_id`,e.thread_id):E.from(`chat_messages`).select(`*`).eq(`conversation_id`,e.thread_id)).order(`created_at`,{ascending:!0}).limit(500);return n?{...Y(`messages`,n),data:[]}:{data:(t??[]).map(t=>e.kind===`batch`?Z(t):t),error:null}}async function ye(e,t,n,r={}){let i=n.trim();if(!i)return{data:null,error:{message:`Message cannot be empty.`}};if(e.kind!==`batch`){let{data:t,error:n}=await E.rpc(`chat_send`,{p_conversation_id:e.thread_id,p_body:i,p_reply_to_id:r.replyToId||null,p_forwarded:!!r.forwarded});return n?Y(`send`,n):{data:t,error:null}}let a=await X(),{data:o}=await E.from(`memberships`).select(`role, profiles:user_id(full_name)`).eq(`user_id`,a).eq(`institute_id`,t).eq(`status`,`active`).limit(1).maybeSingle(),{data:s,error:c}=await E.from(`batch_chat_messages`).insert({institute_id:t,batch_id:e.thread_id,sender_user_id:a,sender_name:o?.profiles?.full_name||`User`,sender_role:o?.role||`student`,message:i,reply_to_id:r.replyToId||null,forwarded:!!r.forwarded}).select().single();return c?Y(`send_batch`,c):{data:Z(s),error:null}}async function be(e,t,n,r=null){let{error:i}=await E.rpc(`chat_modify_message`,{p_message_id:e,p_is_batch:t,p_action:n,p_body:r});return i?Y(n,i):{data:!0,error:null}}async function xe(e){let{error:t}=await E.rpc(`chat_mark_read`,{p_thread_id:e});t&&console.warn(`chat:mark_read:failed`,t.message)}async function Se(e,t,n){let{error:r}=await E.rpc(`chat_set_blocked`,{p_institute_id:e,p_target_membership_id:t,p_blocked:n});return r?Y(`block`,r):{data:!0,error:null}}async function Ce(e){let{data:t}=await E.from(`chat_blocks`).select(`blocked_membership_id`).eq(`blocked_membership_id`,e).limit(1);return!!t?.length}async function we(e,t,n){let{error:r}=await E.rpc(`chat_report_message`,{p_message_id:e,p_is_batch:t,p_reason:n||null});return r?Y(`report`,r):{data:!0,error:null}}function Te(e){try{let t=E.channel(me(`chat-activity`)).on(`postgres_changes`,{event:`INSERT`,schema:`public`,table:`chat_messages`},t=>e({threadId:t.new.conversation_id,message:t.new})).on(`postgres_changes`,{event:`INSERT`,schema:`public`,table:`batch_chat_messages`},t=>e({threadId:t.new.batch_id,message:Z(t.new)})).on(`postgres_changes`,{event:`UPDATE`,schema:`public`,table:`chat_messages`},t=>e({threadId:t.new.conversation_id,message:t.new,updated:!0})).on(`postgres_changes`,{event:`UPDATE`,schema:`public`,table:`batch_chat_messages`},t=>e({threadId:t.new.batch_id,message:Z(t.new),updated:!0})).subscribe();return()=>E.removeChannel(t)}catch(e){return console.warn(`chat:subscribe:failed`,e.message),()=>{}}}var Ee=`classroom_seen_at_`;function De(e){try{return Number(localStorage.getItem(`${Ee}${e}`))||0}catch{return 0}}function Oe(e){if(e)try{localStorage.setItem(`${Ee}${e}`,String(Date.now()))}catch{}}function ke(){let{institute:e,membership:t}=b(),n=e?.id??null,r=t?.id??null,[i,a]=(0,F.useState)(!1);return(0,F.useEffect)(()=>{if(!n||!r){a(!1);return}let e=!0,t=[];async function i(){let{data:i}=await S(n,r);if(!e)return;let o=[...new Set(i.map(e=>e.batch_id).filter(Boolean))],s=De(r),[{data:c},{data:l}]=await Promise.all([he(n),o.length?E.from(`batch_announcements`).select(`created_at`).in(`batch_id`,o).order(`created_at`,{ascending:!1}).limit(1):Promise.resolve({data:[]})]);if(!e)return;let u=l?.[0]?.created_at?new Date(l[0].created_at).getTime():0;a(c.some(e=>e.unread>0)||u>s);let d=await X();t.push(Te(({message:t,updated:n})=>e&&!n&&t.sender_user_id!==d&&a(!0))),o.forEach(n=>{t.push(L(n,()=>e&&a(!0)))})}return i(),()=>{e=!1,t.forEach(e=>e())}},[n,r]),i}function Ae({isOpen:e,toggleSidebar:t,minimized:n,onToggleMinimized:r}){let{signOut:i}=b(),{activeSubjects:o}=s(),l=ke(),u=c(),d=a();function f(e){u(e),window.innerWidth<=1024&&t()}async function p(){await i(),u(`/login`),window.innerWidth<=1024&&t()}function m(e){return d.pathname===e||d.pathname.startsWith(`${e}/`)}return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{className:`sidebar-overlay ${e?`active`:``}`,onClick:t}),(0,B.jsxs)(`aside`,{className:`sidebar student-sidebar ${e?`active`:``} ${n?`minimized`:``}`,children:[r?(0,B.jsxs)(`button`,{type:`button`,className:`student-sidebar-collapse`,onClick:r,title:n?`Expand sidebar`:`Minimize sidebar`,"aria-label":n?`Expand sidebar`:`Minimize sidebar`,"aria-expanded":!n,children:[(0,B.jsx)(`i`,{className:`fa-solid ${n?`fa-angles-right`:`fa-angles-left`}`}),(0,B.jsx)(`span`,{children:`Minimize`})]}):null,(0,B.jsxs)(`nav`,{className:`student-sidebar-scroll`,children:[(0,B.jsx)(je,{title:`Learn`,links:q(W,o),isActive:m,onNavigate:f,unreadPaths:l?[`/classroom`]:[]}),(0,B.jsx)(je,{title:`Tools`,links:q(J,o),isActive:m,onNavigate:f})]}),(0,B.jsxs)(`button`,{className:`student-logout`,onClick:p,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,B.jsx)(`span`,{children:`Log Out`})]})]})]})}function je({title:e,links:t,isActive:n,onNavigate:r,unreadPaths:i=[]}){return(0,B.jsxs)(`section`,{className:`student-sidebar-group`,children:[(0,B.jsx)(`div`,{className:`student-sidebar-label`,children:e}),(0,B.jsx)(`div`,{className:`student-sidebar-links`,children:t.map(e=>(0,B.jsxs)(`button`,{className:`student-sidebar-link ${n(e.path)?`active`:``}`,onClick:()=>r(e.path),title:e.label,children:[(0,B.jsxs)(`span`,{className:`student-link-icon`,children:[(0,B.jsx)(`i`,{className:`fa-solid ${e.icon}`}),i.includes(e.path)?(0,B.jsx)(`span`,{className:`nav-unread-dot`}):null]}),(0,B.jsx)(`span`,{children:e.label})]},e.path))})]})}function Me(){let e=c(),t=a(),{activeSubjects:n}=s(),r=ke();return(0,B.jsx)(`nav`,{className:`student-topnav`,"aria-label":`Primary`,children:(0,B.jsx)(`div`,{className:`student-topnav-scroll`,children:q([...W,...J],n).map(n=>(0,B.jsxs)(`button`,{type:`button`,className:`student-topnav-link ${t.pathname===n.path||t.pathname.startsWith(`${n.path}/`)?`active`:``}`,onClick:()=>e(n.path),children:[(0,B.jsxs)(`span`,{style:{position:`relative`,display:`inline-flex`},children:[(0,B.jsx)(`i`,{className:`fa-solid ${n.icon}`}),n.path===`/classroom`&&r?(0,B.jsx)(`span`,{className:`nav-unread-dot`}):null]}),(0,B.jsx)(`span`,{children:n.label})]},n.path))})})}var Ne=e(P(),1);function Pe(){let{profile:e}=b(),[t,n]=(0,F.useState)(!1);(0,F.useEffect)(()=>{if(!e){console.log(`[BirthdayCelebration] No profile loaded`);return}let t=e.extra_details?.dob||e.extra_details?.date_of_birth;if(console.log(`[BirthdayCelebration] Found DOB:`,t,`extra_details:`,e.extra_details),!t)return;let r=t.split(`-`);if(r.length===3){let e=new Date,t=e.getMonth()+1,i=e.getDate(),a=parseInt(r[1],10),o=parseInt(r[2],10);console.log(`[BirthdayCelebration] Checking Date match: Today is ${t}/${i}, Born: ${a}/${o}`);let s=a===t&&o===i;console.log(`[BirthdayCelebration] Match result:`,s),s&&n(!0)}},[e]);let r=()=>{n(!1)};if(!t||!e)return null;let i=e.full_name||e.name||`Student`,a=Array.from({length:60}).map((e,t)=>{let n=Math.random()*100,r=Math.random()*4,i=Math.random()*3+2,a=Math.random()*.6+.4,o=[`#ff0a54`,`#ff477e`,`#ff7096`,`#ff85a1`,`#fbb1bd`,`#f9bec7`,`#3b82f6`,`#10b981`,`#fbbf24`,`#8b5cf6`],s=o[Math.floor(Math.random()*o.length)],c=[`circle`,`square`,`triangle`],l=c[Math.floor(Math.random()*c.length)];return{left:`${n}%`,delay:`${r}s`,duration:`${i}s`,scale:a,color:s,shape:l,id:t}});return(0,Ne.createPortal)((0,B.jsxs)(`div`,{style:Q.overlay,children:[(0,B.jsx)(`style`,{children:`
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
        `}),a.map(e=>{let t=`0`;e.shape===`circle`&&(t=`50%`);let n=`10px`,r=`10px`;return e.shape===`triangle`&&(n=`0`,r=`0`),(0,B.jsx)(`div`,{className:`confetti-particle`,style:{left:e.left,animationDelay:e.delay,animationDuration:e.duration,transform:`scale(${e.scale})`,backgroundColor:e.shape===`triangle`?`transparent`:e.color,borderRadius:t,width:e.shape===`triangle`?void 0:n,height:e.shape===`triangle`?void 0:r,borderLeft:e.shape===`triangle`?`6px solid transparent`:void 0,borderRight:e.shape===`triangle`?`6px solid transparent`:void 0,borderBottom:e.shape===`triangle`?`10px solid ${e.color}`:void 0}},e.id)}),(0,B.jsx)(`div`,{className:`birthday-modal`,style:Q.modal,children:(0,B.jsxs)(`div`,{style:{position:`relative`,zIndex:2,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`24px`},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,justifyContent:`center`},children:[(0,B.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`0s`},children:`🎈`}),(0,B.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`0.5s`,fontSize:`3.5rem`},children:`🎂`}),(0,B.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`1s`},children:`🎉`})]}),(0,B.jsxs)(`h2`,{style:Q.title,children:[`Happy Birthday, `,i,`!`]}),(0,B.jsx)(`p`,{style:Q.message,children:`We wish you a fantastic year ahead filled with happiness, learning, and success. Have a wonderful day! 🌟✨`}),(0,B.jsx)(`button`,{onClick:r,style:Q.button,children:`Thank You! ❤️`})]})})]}),document.body)}var Q={overlay:{position:`fixed`,top:0,left:0,right:0,bottom:0,backgroundColor:`rgba(8, 10, 18, 0.7)`,zIndex:999999,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`20px`,boxSizing:`border-box`},modal:{width:`100%`,maxWidth:`520px`,borderRadius:`28px`,padding:`48px 36px`,textAlign:`center`,boxSizing:`border-box`,position:`relative`,overflow:`hidden`},title:{fontFamily:`"Sora", sans-serif`,fontSize:`2.25rem`,fontWeight:`900`,background:`linear-gradient(135deg, #a5b4fc, #6366f1, #eab308)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,margin:0,lineHeight:1.25},message:{color:`#94a3b8`,fontSize:`1.05rem`,fontWeight:`500`,lineHeight:1.6,margin:`4px 0 8px 0`},button:{border:0,background:`linear-gradient(135deg, #6366f1, #4f46e5)`,color:`white`,borderRadius:`16px`,padding:`14px 38px`,fontSize:`1.02rem`,fontWeight:`800`,cursor:`pointer`,boxShadow:`0 10px 25px rgba(99, 102, 241, 0.4)`,transition:`all 0.2s ease`}},Fe=60,Ie={border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`14px 18px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.9rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`};function Le({email:e,onCancel:t}){let{user:n,signOut:r,institute:i}=b(),[a,o]=(0,F.useState)(!1),[s,c]=(0,F.useState)(!1),[l,u]=(0,F.useState)(0),[d,f]=(0,F.useState)(``),[p,m]=(0,F.useState)(``),h=(0,F.useRef)(null),g=e||n?.email||``,v=!!n;(0,F.useEffect)(()=>{if(!(l<=0))return h.current=window.setInterval(()=>{u(e=>e<=1?0:e-1)},1e3),()=>window.clearInterval(h.current)},[l]);async function y(){if(a||l>0||!g)return;o(!0),m(``),f(``);let{error:e}=await E.functions.invoke(`student-self-register`,{body:{mode:`resend`,instituteId:i?.id,email:g}});if(o(!1),e){let t=e.message;try{let n=await e.context?.json?.();n?.error&&(t=n.error)}catch{}m(t||`Could not send the confirmation email. Please try again.`);return}f(`Confirmation email sent to ${g}. Open it and click the link inside.`),u(Fe)}async function x(){if(s)return;c(!0),m(``),f(``);let{data:e,error:t}=await E.auth.refreshSession();if(t){c(!1),m(`Could not check your status. Please try again in a moment.`);return}if(e?.user?.email_confirmed_at){window.location.reload();return}c(!1),m(`This email is still unverified. Please click the link in the confirmation email first.`)}return(0,B.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,B.jsx)(_,{}),(0,B.jsx)(`style`,{children:`
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
      `}),(0,B.jsxs)(`div`,{className:`verify-email-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,B.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent)`},children:(0,B.jsx)(`i`,{className:`fa-solid fa-envelope-circle-check`})})}),(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,B.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Email Not Verified`]})}),(0,B.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:`Confirm Your Email`}),(0,B.jsxs)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:[`We sent a confirmation link to`,` `,(0,B.jsx)(`strong`,{style:{color:`var(--dark-blue, #0f172a)`,wordBreak:`break-all`},children:g}),`. Open that email and click the link to unlock your panel. Check your spam folder if you can't find it.`]}),d?(0,B.jsxs)(`p`,{style:{color:`#15803d`,background:`#dcfce7`,border:`1px solid #bbf7d0`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-check`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,B.jsx)(`span`,{children:d})]}):null,p?(0,B.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err, #c62828) 20%, transparent)`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,B.jsx)(`span`,{children:p})]}):null,(0,B.jsx)(`button`,{className:`verify-btn-primary`,type:`button`,onClick:y,disabled:a||l>0,style:{marginTop:`26px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:a||l>0?`not-allowed`:`pointer`,opacity:a||l>0?.65:1,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:a?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,B.jsx)(`span`,{children:`Sending...`})]}):l>0?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`i`,{className:`fa-regular fa-clock`}),(0,B.jsxs)(`span`,{children:[`Resend in `,l,`s`]})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`i`,{className:`fa-solid fa-paper-plane`}),(0,B.jsx)(`span`,{children:`Resend confirmation email`})]})}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,marginTop:`12px`},children:[v?(0,B.jsx)(`button`,{className:`verify-btn-secondary`,type:`button`,onClick:x,disabled:s,style:{...Ie,flex:1,opacity:s?.7:1,cursor:s?`not-allowed`:`pointer`},children:s?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,B.jsx)(`span`,{children:`Checking...`})]}):(0,B.jsx)(`span`,{children:`I've verified`})}):null,(0,B.jsx)(`button`,{className:`verify-btn-secondary`,type:`button`,onClick:v?r:t,style:{...Ie,flex:v?void 0:1,color:`var(--text-light, #64748b)`},children:v?`Log out`:`Back to sign in`})]})]})]})}async function Re(e,t){let{data:n,error:r}=await E.rpc(`resolve_branch_code_for_signup`,{p_institute_id:e,p_code:t});return r?{branch:null,error:r.message}:{branch:n?.[0]||null,error:null}}async function ze({instituteId:e,email:t,password:n,fullName:r,phone:i,branchId:a}){let{data:o,error:s}=await E.functions.invoke(`student-self-register`,{body:{instituteId:e,email:t,password:n,fullName:r,phone:i||null,branchId:a||null}});if(s){let e=s.message;try{let t=await s.context?.json?.();t?.error&&(e=t.error)}catch{}return{ok:!1,error:e||`Could not create your account.`}}return o?.ok?{ok:!0,alreadyPending:!!o.alreadyPending}:{ok:!1,error:o?.error||`Could not submit your registration.`}}async function Be({email:e,instituteId:t}){let{error:n}=await E.functions.invoke(`send-password-reset`,{body:{email:e,instituteId:t||null,redirectTo:`${window.location.origin}/reset-password`}});if(!n)return{error:null};let r=n.message;try{let e=await n.context?.json?.();e?.error&&(r=e.error)}catch{}return{error:{message:r||`Could not send the reset email. Please try again.`}}}function Ve(e){return e?e.code===`email_not_confirmed`?!0:/email not confirmed/i.test(e.message||``):!1}function He(){let e=c(),t=a(),{login:n,institute:r,instituteReady:i,user:o,membership:s,membershipInvalid:u,signOut:d}=b(),[f,p]=(0,F.useState)(`signin`),[m,h]=(0,F.useState)(``),[g,v]=(0,F.useState)(``),[y,x]=(0,F.useState)(!1),[S,C]=(0,F.useState)(null),[w,T]=(0,F.useState)(!1),[ee,E]=(0,F.useState)(!1),[D,O]=(0,F.useState)(!1),[k,A]=(0,F.useState)(!1),[te,j]=(0,F.useState)(null),[M,ne]=(0,F.useState)(null),[re,N]=(0,F.useState)(!1);(0,F.useEffect)(()=>{let e=setTimeout(()=>N(!0),1e3);return()=>clearTimeout(e)},[]);let ie=!re||!i,[P,ae]=(0,F.useState)(``),[I,oe]=(0,F.useState)(``),[L,R]=(0,F.useState)(``),[z,se]=(0,F.useState)(``),[ce,le]=(0,F.useState)(``),[ue,V]=(0,F.useState)(!1),[de,H]=(0,F.useState)(null),[U,fe]=(0,F.useState)(null),[W,pe]=(0,F.useState)(``),[G,K]=(0,F.useState)(`idle`),[q,J]=(0,F.useState)(null);async function me(e){let t=e.trim();if(!t)return K(`idle`),J(null),null;if(q?.forCode===t)return q;K(`checking`);let{branch:n}=await Re(r.id,t);if(n){let e={...n,forCode:t};return J(e),K(`valid`),e}return J(null),K(`invalid`),null}(0,F.useEffect)(()=>(document.body.classList.add(`login-body`),()=>{document.body.classList.remove(`login-body`)}),[]),(0,F.useEffect)(()=>{try{localStorage.getItem(`portal_evicted_notice`)&&(localStorage.removeItem(l),j(`You were signed out because this account was opened in another browser.`))}catch{}},[]);let Y=()=>{let e=t.state?.from;return e&&e!==`/login`&&!e.startsWith(`/login?`)?e:`/`};(0,F.useEffect)(()=>{o&&s&&e(Y(),{replace:!0})},[o,s,e,t.state]),(0,F.useEffect)(()=>{u&&(C(`This account does not belong to this institute. Please sign in on your own institute's portal.`),x(!1),d().catch(()=>{}))},[u,d]);async function X(t){t.preventDefault(),x(!0),C(null);try{let t=await n(m,g);if(t?.error){if(Ve(t.error)){ne(m),x(!1);return}C(t.error.message||`Failed to sign in. Please check your credentials.`),x(!1)}else e(Y(),{replace:!0})}catch(e){console.error(`Login submit error:`,e),C(e?.message||`An unexpected error occurred. Please try again.`),x(!1)}}async function he(){if(C(null),j(null),!m){C(`Enter your student email above, then tap 'Forgot password?'.`);return}A(!0);let{error:e}=await Be({email:m,instituteId:r?.id});if(A(!1),e){C(e.message);return}j(`If an account exists for ${m}, a reset link is on its way.`)}async function ge(e){if(e.preventDefault(),H(null),!r?.id){H(`This portal is not configured for a valid institute.`);return}if(z.length<6){H(`Password must be at least 6 characters.`);return}if(z!==ce){H(`Passwords do not match.`);return}let t=q;if(W.trim()&&(t=await me(W),!t)){H(`That branch code isn't valid. Please check it and try again.`);return}V(!0);try{let e=await ze({instituteId:r.id,email:I,password:z,fullName:P,phone:L,branchId:t?.id||null});if(!e.ok){H(e.error),V(!1);return}fe(I)}catch(e){console.error(`Registration submit error:`,e),H(e?.message||`An unexpected error occurred. Please try again.`)}finally{V(!1)}}function _e(){ae(``),oe(``),R(``),se(``),le(``),H(null),fe(null),pe(``),K(`idle`),J(null)}let Z=Array.isArray(r?.institute_branding)?r?.institute_branding[0]:r?.institute_branding,ve=Z?.logo_url;return(0,B.jsxs)(`div`,{className:`login-page-container layout-${Z?.login_layout||`split_screen`}`,children:[ie&&(0,B.jsxs)(`div`,{className:`login-splash-overlay`,children:[(0,B.jsx)(`img`,{src:ve||`/Abacus.png`,alt:``,className:`login-splash-logo`}),(0,B.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin login-splash-spinner`})]}),M?(0,B.jsx)(Le,{email:M,onCancel:()=>ne(null)}):null,(0,B.jsx)(_,{}),(0,B.jsxs)(`div`,{className:`login-left-pane`,children:[(0,B.jsx)(`div`,{className:`login-blob-1`}),(0,B.jsx)(`div`,{className:`login-blob-2`}),(0,B.jsxs)(`div`,{className:`login-left-header`,children:[(0,B.jsx)(`div`,{className:`login-left-logo-wrapper`,children:(0,B.jsx)(`img`,{src:ve||`/Abacus.png`,alt:`Institute Logo`,className:`login-left-logo`})}),(0,B.jsx)(`span`,{className:`login-left-brand-name`,children:r?r.name:`Erpli Wave`})]}),(0,B.jsxs)(`div`,{className:`login-left-content`,children:[(0,B.jsxs)(`h2`,{className:`login-left-title`,children:[`Unlock the Power of `,(0,B.jsx)(`br`,{}),(0,B.jsx)(`span`,{style:{color:`var(--gold)`},children:`Mental Math`})]}),(0,B.jsx)(`p`,{className:`login-left-subtitle`,children:`Experience the ultimate training portal. Boost your calculation speed, complete assignments, challenge friends, and track your analytical growth.`}),(0,B.jsxs)(`div`,{className:`showcase-glass-card`,children:[(0,B.jsx)(`span`,{className:`showcase-badge`,children:`Student Platform`}),(0,B.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,B.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-gamepad`,style:{color:`var(--gold)`}}),`Interactive Games`]}),(0,B.jsx)(`span`,{className:`showcase-stat-value`,children:`Abacus & Flash`})]}),(0,B.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,B.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-trophy`,style:{color:`var(--gold)`}}),`Weekly Leaderboards`]}),(0,B.jsx)(`span`,{className:`showcase-stat-value`,children:`Global Rankings`})]}),(0,B.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,B.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-chart-line`,style:{color:`var(--gold)`}}),`Progress Analytics`]}),(0,B.jsx)(`span`,{className:`showcase-stat-value`,children:`Detailed Insights`})]})]})]}),(0,B.jsxs)(`div`,{className:`login-left-footer`,children:[`© `,new Date().getFullYear(),` `,r?r.name:`Erpli Wave`,`. All rights reserved.`]})]}),(0,B.jsx)(`div`,{className:`login-right-pane`,children:(0,B.jsxs)(`div`,{className:`login-form-card`,children:[(0,B.jsxs)(`div`,{className:`login-logo-header`,children:[(0,B.jsx)(`div`,{className:`login-logo-container`,children:(0,B.jsx)(`img`,{src:ve||`/Abacus.png`,alt:`Institute Logo`,className:`login-main-logo`})}),(0,B.jsx)(`h1`,{className:`login-title-text`,children:r?r.name:`Student Portal`}),(0,B.jsx)(`p`,{className:`login-subtitle-text`,children:f===`register`?`Create your account to request access`:`Sign in to access your mental math dashboard`})]}),!U&&(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,marginBottom:`24px`,background:`rgba(148, 163, 184, 0.14)`,borderRadius:`14px`,padding:`4px`},children:[(0,B.jsx)(`button`,{type:`button`,onClick:()=>{p(`signin`),C(null)},style:{flex:1,border:`none`,borderRadius:`10px`,padding:`10px 12px`,fontWeight:800,fontSize:`0.85rem`,cursor:`pointer`,background:f===`signin`?`var(--card-bg, #ffffff)`:`transparent`,color:f===`signin`?`var(--dark-blue, #0f172a)`:`var(--text-light, #64748b)`,boxShadow:f===`signin`?`0 1px 4px rgba(0,0,0,0.08)`:`none`},children:`Sign In`}),(0,B.jsx)(`button`,{type:`button`,onClick:()=>{p(`register`),C(null)},style:{flex:1,border:`none`,borderRadius:`10px`,padding:`10px 12px`,fontWeight:800,fontSize:`0.85rem`,cursor:`pointer`,background:f===`register`?`var(--card-bg, #ffffff)`:`transparent`,color:f===`register`?`var(--dark-blue, #0f172a)`:`var(--text-light, #64748b)`,boxShadow:f===`register`?`0 1px 4px rgba(0,0,0,0.08)`:`none`},children:`Register`})]}),f===`signin`&&S&&(0,B.jsxs)(`div`,{style:{background:`#fef2f2`,color:`#dc2626`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:`600`,marginBottom:`24px`,border:`1px solid #fecaca`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1rem`}}),(0,B.jsx)(`span`,{children:S})]}),f===`signin`&&te&&(0,B.jsxs)(`div`,{style:{background:`#f0fdf4`,color:`#15803d`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:600,marginBottom:`24px`,border:`1px solid #bbf7d0`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-envelope-circle-check`,style:{fontSize:`1rem`}}),(0,B.jsx)(`span`,{children:te})]}),f===`register`?U?(0,B.jsxs)(`div`,{style:{textAlign:`left`},children:[(0,B.jsxs)(`div`,{style:{background:`#f0fdf4`,color:`#15803d`,padding:`16px`,borderRadius:`14px`,fontSize:`0.88rem`,fontWeight:600,marginBottom:`20px`,border:`1px solid #bbf7d0`,display:`flex`,alignItems:`flex-start`,gap:`10px`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-check`,style:{fontSize:`1.1rem`,marginTop:`2px`}}),(0,B.jsxs)(`span`,{children:[`Registration submitted for `,(0,B.jsx)(`strong`,{children:U}),`. Check your inbox to verify your email, then wait for your institute admin to approve your account — you'll be able to sign in once they do.`]})]}),(0,B.jsx)(`button`,{type:`button`,onClick:()=>{_e(),p(`signin`)},className:`login-submit-button`,children:`Back to Sign In`})]}):(0,B.jsxs)(`form`,{onSubmit:ge,children:[de&&(0,B.jsxs)(`div`,{style:{background:`#fef2f2`,color:`#dc2626`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:600,marginBottom:`20px`,border:`1px solid #fecaca`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1rem`}}),(0,B.jsx)(`span`,{children:de})]}),(0,B.jsxs)(`div`,{className:`login-input-group`,children:[(0,B.jsx)(`label`,{className:`login-label`,children:`Full Name`}),(0,B.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,B.jsx)(`i`,{className:`fa-regular fa-user login-input-icon`}),(0,B.jsx)(`input`,{type:`text`,value:P,onChange:e=>ae(e.target.value),placeholder:`Your full name`,required:!0,className:`login-input-field`})]})]}),(0,B.jsxs)(`div`,{className:`login-input-group`,children:[(0,B.jsx)(`label`,{className:`login-label`,children:`Email`}),(0,B.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,B.jsx)(`i`,{className:`fa-regular fa-envelope login-input-icon`}),(0,B.jsx)(`input`,{type:`email`,value:I,onChange:e=>oe(e.target.value),placeholder:`student@example.com`,required:!0,className:`login-input-field`})]})]}),(0,B.jsxs)(`div`,{className:`login-input-group`,children:[(0,B.jsx)(`label`,{className:`login-label`,children:`Phone (optional)`}),(0,B.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-phone login-input-icon`}),(0,B.jsx)(`input`,{type:`tel`,value:L,onChange:e=>R(e.target.value),placeholder:`Your phone number`,className:`login-input-field`})]})]}),(0,B.jsxs)(`div`,{className:`login-input-group`,children:[(0,B.jsx)(`label`,{className:`login-label`,children:`Branch Code (optional)`}),(0,B.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-hashtag login-input-icon`}),(0,B.jsx)(`input`,{type:`text`,value:W,onChange:e=>{pe(e.target.value),K(`idle`),J(null)},onBlur:e=>me(e.target.value),placeholder:`Code given by your branch/school`,className:`login-input-field`})]}),G===`checking`&&(0,B.jsxs)(`div`,{className:`branch-picker-message`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),`Checking code...`]}),G===`valid`&&q&&(0,B.jsxs)(`div`,{className:`branch-picker-message branch-picker-message-success`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-check`}),q.name]}),G===`invalid`&&(0,B.jsxs)(`div`,{className:`branch-picker-message branch-picker-message-error`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),`Invalid branch code.`]})]}),(0,B.jsxs)(`div`,{className:`login-input-group`,children:[(0,B.jsx)(`label`,{className:`login-label`,children:`Password`}),(0,B.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,B.jsx)(`input`,{type:`password`,value:z,onChange:e=>se(e.target.value),placeholder:`At least 6 characters`,required:!0,minLength:6,className:`login-input-field`})]})]}),(0,B.jsxs)(`div`,{className:`login-input-group`,style:{marginBottom:`16px`},children:[(0,B.jsx)(`label`,{className:`login-label`,children:`Confirm Password`}),(0,B.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,B.jsx)(`input`,{type:`password`,value:ce,onChange:e=>le(e.target.value),placeholder:`Re-enter your password`,required:!0,minLength:6,className:`login-input-field`})]})]}),(0,B.jsx)(`button`,{type:`submit`,disabled:ue||!i||!r?.id||G===`checking`,className:`login-submit-button`,children:ue?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,B.jsx)(`span`,{children:`Submitting...`})]}):(0,B.jsx)(`span`,{children:`Request Access`})})]}):(0,B.jsxs)(`form`,{onSubmit:X,children:[(0,B.jsxs)(`div`,{className:`login-input-group`,children:[(0,B.jsx)(`label`,{className:`login-label`,children:`Student Email`}),(0,B.jsxs)(`div`,{className:`login-input-wrapper ${ee?`login-input-wrapper-focused`:``}`,children:[(0,B.jsx)(`i`,{className:`fa-regular fa-envelope login-input-icon`}),(0,B.jsx)(`input`,{type:`email`,value:m,onChange:e=>h(e.target.value),onFocus:()=>E(!0),onBlur:()=>E(!1),placeholder:`student@example.com`,required:!0,className:`login-input-field`})]})]}),(0,B.jsxs)(`div`,{className:`login-input-group`,style:{marginBottom:`16px`},children:[(0,B.jsx)(`label`,{className:`login-label`,children:`Password`}),(0,B.jsxs)(`div`,{className:`login-input-wrapper ${D?`login-input-wrapper-focused`:``}`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,B.jsx)(`input`,{type:w?`text`:`password`,value:g,onChange:e=>v(e.target.value),onFocus:()=>O(!0),onBlur:()=>O(!1),placeholder:`••••••••`,required:!0,className:`login-input-field`}),(0,B.jsx)(`button`,{type:`button`,onClick:()=>T(!w),className:`login-password-toggle`,children:(0,B.jsx)(`i`,{className:w?`fa-solid fa-eye-slash`:`fa-solid fa-eye`})})]})]}),(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,marginBottom:`24px`},children:(0,B.jsx)(`button`,{type:`button`,onClick:he,disabled:k,style:{background:`none`,border:`none`,padding:0,cursor:k?`default`:`pointer`,color:`var(--primary-blue, #2563eb)`,fontSize:`0.82rem`,fontWeight:700},children:k?`Sending reset link...`:`Forgot password?`})}),(0,B.jsx)(`button`,{type:`submit`,disabled:y,className:`login-submit-button`,children:y?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,B.jsx)(`span`,{children:`Signing in...`})]}):(0,B.jsx)(`span`,{children:`Sign In`})})]})]})})]})}function Ue(){let e=c(),[t,n]=(0,F.useState)(`checking`),[r,i]=(0,F.useState)(``),[a,o]=(0,F.useState)(``),[s,l]=(0,F.useState)(!1),[u,d]=(0,F.useState)(!1),[p,m]=(0,F.useState)(null);(0,F.useEffect)(()=>(document.body.classList.add(`login-body`),()=>document.body.classList.remove(`login-body`)),[]),(0,F.useEffect)(()=>{let e=!1;async function t(){let t=new URLSearchParams(f.hash.replace(/^#/,``)),r=new URLSearchParams(f.search),i=t.get(`error_description`)||r.get(`error_description`);if(i){e||(m(i),n(`invalid`));return}let a=r.get(`code`);if(!(a||t.get(`type`)===`recovery`||t.get(`access_token`))){e||n(`invalid`);return}if(a){let{error:t}=await E.auth.exchangeCodeForSession(a);if(t&&!e){m(t.message),n(`invalid`);return}}let{data:{session:o}}=await E.auth.getSession();e||(o?(window.history.replaceState({},document.title,`/reset-password`),n(`ready`)):n(`invalid`))}return t(),()=>{e=!0}},[]);async function h(t){if(t.preventDefault(),m(null),r.length<6){m(`Password must be at least 6 characters.`);return}if(r!==a){m(`Passwords do not match.`);return}d(!0);let{error:i}=await E.auth.updateUser({password:r});if(d(!1),i){m(i.message);return}await E.auth.signOut(),n(`done`),setTimeout(()=>e(`/login`,{replace:!0}),2e3)}return(0,B.jsxs)(`div`,{className:`login-page-container layout-classic_centered`,children:[(0,B.jsx)(_,{}),(0,B.jsx)(`div`,{className:`login-right-pane`,children:(0,B.jsxs)(`div`,{className:`login-form-card`,children:[(0,B.jsxs)(`div`,{style:{marginBottom:`24px`,textAlign:`center`},children:[(0,B.jsx)(`h1`,{className:`login-title-text`,children:`Set a new password`}),(0,B.jsx)(`p`,{className:`login-subtitle-text`,children:`Choose a new password for your student account`})]}),p&&(0,B.jsxs)(`div`,{style:{background:`#fef2f2`,color:`#dc2626`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:600,marginBottom:`24px`,border:`1px solid #fecaca`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),(0,B.jsx)(`span`,{children:p})]}),t===`checking`&&(0,B.jsxs)(`p`,{style:{textAlign:`center`,fontWeight:600},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`,style:{marginRight:8}}),`Verifying your reset link...`]}),t===`invalid`&&(0,B.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,B.jsx)(`p`,{style:{fontWeight:600,marginBottom:20},children:`This reset link is invalid or has expired. Please request a new one.`}),(0,B.jsx)(`button`,{className:`login-submit-button`,type:`button`,onClick:()=>e(`/login`),children:(0,B.jsx)(`span`,{children:`Back to Sign In`})})]}),t===`done`&&(0,B.jsx)(`p`,{style:{textAlign:`center`,fontWeight:600,color:`#16a34a`},children:`Password updated. Redirecting you to sign in...`}),t===`ready`&&(0,B.jsxs)(`form`,{onSubmit:h,children:[(0,B.jsxs)(`div`,{className:`login-input-group`,children:[(0,B.jsx)(`label`,{className:`login-label`,children:`New password`}),(0,B.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,B.jsx)(`input`,{type:s?`text`:`password`,value:r,onChange:e=>i(e.target.value),placeholder:`At least 6 characters`,autoComplete:`new-password`,required:!0,className:`login-input-field`}),(0,B.jsx)(`button`,{type:`button`,onClick:()=>l(!s),className:`login-password-toggle`,children:(0,B.jsx)(`i`,{className:s?`fa-solid fa-eye-slash`:`fa-solid fa-eye`})})]})]}),(0,B.jsxs)(`div`,{className:`login-input-group`,style:{marginBottom:`30px`},children:[(0,B.jsx)(`label`,{className:`login-label`,children:`Confirm new password`}),(0,B.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,B.jsx)(`input`,{type:`password`,value:a,onChange:e=>o(e.target.value),placeholder:`Repeat new password`,autoComplete:`new-password`,required:!0,className:`login-input-field`})]})]}),(0,B.jsx)(`button`,{type:`submit`,disabled:u,className:`login-submit-button`,children:u?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,B.jsx)(`span`,{children:`Updating...`})]}):(0,B.jsx)(`span`,{children:`Update Password`})})]})]})})]})}function We(){return(0,B.jsxs)(`div`,{className:`skel-root`,children:[(0,B.jsx)(`style`,{children:`
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
      `}),(0,B.jsxs)(`div`,{className:`skel-navbar`,children:[(0,B.jsx)(`div`,{className:`skel-shine-light skel-navbar-icon`}),(0,B.jsx)(`div`,{className:`skel-shine-light`,style:{width:34,height:34,borderRadius:10}}),(0,B.jsx)(`div`,{className:`skel-shine-light`,style:{width:100,height:14}}),(0,B.jsx)(`div`,{style:{flex:1}}),(0,B.jsx)(`div`,{className:`skel-shine-light skel-navbar-icon round`})]}),(0,B.jsxs)(`div`,{className:`skel-body`,children:[(0,B.jsx)(`div`,{className:`skel-sidebar`,children:Array.from({length:8}).map((e,t)=>(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:t===3?`65%`:`85%`,height:13}},t))}),(0,B.jsxs)(`div`,{className:`skel-content`,children:[(0,B.jsxs)(`div`,{className:`skel-card`,children:[(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:`70%`,height:22,marginBottom:10}}),(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:`90%`,height:12,marginBottom:6}}),(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:`50%`,height:12}})]}),(0,B.jsxs)(`div`,{style:{display:`flex`,gap:10},children:[(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:110,height:34,borderRadius:999}}),(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:90,height:34,borderRadius:999}})]}),(0,B.jsx)(`div`,{className:`skel-stat-grid`,children:Array.from({length:4}).map((e,t)=>(0,B.jsxs)(`div`,{className:`skel-card`,style:{padding:14},children:[(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:30,height:30,borderRadius:9,marginBottom:10}}),(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:`60%`,height:14,marginBottom:6}}),(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:`40%`,height:10}})]},t))}),(0,B.jsxs)(`div`,{className:`skel-card`,style:{border:`1px solid color-mix(in srgb, var(--gold, #f59e0b) 45%, transparent)`},children:[(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:`45%`,height:16,marginBottom:10}}),(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:`85%`,height:12,marginBottom:14}}),(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:130,height:36,borderRadius:12}})]}),(0,B.jsxs)(`div`,{className:`skel-card`,style:{flex:1,minHeight:150,display:`flex`,flexDirection:`column`,gap:14},children:[(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:`35%`,height:14}}),(0,B.jsx)(`div`,{className:`skel-week-bars`,children:Array.from({length:7}).map((e,t)=>(0,B.jsxs)(`div`,{className:`skel-week-bar`,children:[(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:`100%`,height:`${40+t%4*12}%`,borderRadius:8}}),(0,B.jsx)(`div`,{className:`skel-shine`,style:{width:`70%`,height:8}})]},t))})]})]})]})]})}function Ge({notice:e,onConsented:t}){let{signOut:n}=b(),[r]=(0,F.useState)(`en`),[i,a]=(0,F.useState)(!1),[o,s]=(0,F.useState)(!1),[c,l]=(0,F.useState)(null),[u,d]=(0,F.useState)(e.english_title),[f,p]=(0,F.useState)(e.english_content),[m,h]=(0,F.useState)((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),[g,_]=(0,F.useState)((e.optional_purposes||[]).map(e=>({...e,label_display:e.label_en,checked:!1})));(0,F.useEffect)(()=>{if(r===`en`){d(e.english_title),p(e.english_content),h((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),_(t=>(e.optional_purposes||[]).map(e=>{let n=t.find(t=>t.key===e.key);return{...e,label_display:e.label_en,checked:!!n?.checked}}));return}async function t(){a(!0),l(null);let{data:t,error:n}=await M(e.id,r);n?(console.error(`Translation load failed, falling back to English`,n),v()):!t||t.status!==`approved`?v():(d(t.translated_title),p(t.translated_content),h((e.required_purposes||[]).map(e=>{let n=t.translated_required_purposes?.find(t=>t.key===e.key);return{...e,label_display:n?.label_translated||e.label_en}})),_(n=>(e.optional_purposes||[]).map(e=>{let r=t.translated_optional_purposes?.find(t=>t.key===e.key),i=n.find(t=>t.key===e.key);return{...e,label_display:r?.label_translated||e.label_en,checked:!!i?.checked}}))),a(!1)}t()},[r,e]);function v(){d(e.english_title),p(e.english_content),h((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),_(t=>(e.optional_purposes||[]).map(e=>{let n=t.find(t=>t.key===e.key);return{...e,label_display:e.label_en,checked:!!n?.checked}}))}function y(e){_(t=>t.map(t=>t.key===e?{...t,checked:!t.checked}:t))}async function x(n=!1){s(!0),l(null);let i=[],a=[];m.forEach(e=>i.push(e.key)),g.forEach(e=>{!n&&e.checked?i.push(e.key):a.push(e.key)});let{data:o,error:c}=await k(e.id,r,i,a);c?(l(c.message),s(!1)):t()}return(0,B.jsxs)(`div`,{className:`consent-fullscreen-overlay`,children:[(0,B.jsx)(`style`,{children:`
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
      `}),(0,B.jsxs)(`div`,{className:`consent-card`,children:[(0,B.jsx)(`div`,{className:`consent-header`,children:(0,B.jsx)(`h2`,{className:`consent-title`,children:u})}),(0,B.jsx)(`div`,{className:`consent-content-area`,children:i?(0,B.jsxs)(`div`,{className:`consent-spinner-container`,children:[(0,B.jsx)(`div`,{className:`consent-spinner`}),(0,B.jsx)(`p`,{style:{marginTop:14,color:`var(--text-light, #64748b)`,fontSize:13.5,fontWeight:500},children:`Retrieving translation...`})]}):(0,B.jsx)(`div`,{className:`consent-notice-body`,children:f})}),(0,B.jsxs)(`div`,{className:`consent-purposes-section`,children:[m.length>0&&(0,B.jsxs)(`div`,{className:`consent-purpose-group`,children:[(0,B.jsx)(`h4`,{className:`consent-group-heading`,children:`Required Processing (Core Services)`}),(0,B.jsx)(`div`,{className:`consent-purposes-list`,children:m.map(e=>(0,B.jsxs)(`label`,{className:`consent-purpose-label disabled`,children:[(0,B.jsx)(`input`,{type:`checkbox`,checked:!0,disabled:!0,className:`consent-checkbox`}),(0,B.jsx)(`span`,{children:e.label_display})]},e.key))})]}),g.length>0&&(0,B.jsxs)(`div`,{className:`consent-purpose-group`,children:[(0,B.jsx)(`h4`,{className:`consent-group-heading`,children:`Optional Processing (Preferences)`}),(0,B.jsx)(`div`,{className:`consent-purposes-list`,children:g.map(e=>(0,B.jsxs)(`label`,{className:`consent-purpose-label`,children:[(0,B.jsx)(`input`,{type:`checkbox`,checked:e.checked,onChange:()=>y(e.key),disabled:o,className:`consent-checkbox`}),(0,B.jsx)(`span`,{children:e.label_display})]},e.key))})]})]}),c&&(0,B.jsxs)(`p`,{className:`consent-error-msg`,children:[`Error saving consent: `,c]}),(0,B.jsxs)(`div`,{className:`consent-footer`,children:[(0,B.jsxs)(`button`,{className:`consent-btn consent-btn-danger`,onClick:n,disabled:o||i,children:[(0,B.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),` Sign Out`]}),(0,B.jsxs)(`div`,{className:`consent-footer-right`,children:[g.length>0&&(0,B.jsx)(`button`,{className:`consent-btn consent-btn-secondary`,onClick:()=>x(!0),disabled:o||i,children:`Decline optional use`}),(0,B.jsx)(`button`,{className:`consent-btn consent-btn-primary`,onClick:()=>x(!1),disabled:o||i,children:`Agree and continue`})]})]})]})]})}function Ke(){let{signOut:e}=b();return(0,B.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,B.jsx)(_,{}),(0,B.jsx)(`style`,{children:`
        .access-blocked-card { animation: accessSpring 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        @keyframes accessSpring {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}),(0,B.jsxs)(`div`,{className:`access-blocked-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,B.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:`linear-gradient(135deg, #f59e0b, #b45309)`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px rgba(245, 158, 11, 0.5)`},children:(0,B.jsx)(`i`,{className:`fa-solid fa-triangle-exclamation`})})}),(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,B.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, #f59e0b 14%, transparent)`,color:`#b45309`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Access Paused`]})}),(0,B.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:`Panel Unavailable`}),(0,B.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:`There is an issue from your institute's side. Please contact your institute to restore access to your student panel.`}),(0,B.jsxs)(`button`,{type:`button`,onClick:e,style:{marginTop:`28px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,B.jsx)(`span`,{children:`Log out`})]})]})]})}function qe(){if(window.location.pathname!==`/exam`)return!1;let e=window.location.search;return e.includes(`slug=`)||e.includes(`examId=`)||e.includes(`accessToken=`)}var Je=150,Ye=!1;function Xe({children:e}){let{user:t,loading:n,sessionBlocked:r,accessBlocked:i,replaceActiveSession:a,signOut:o,consentRequiredNotice:s,setConsentRequiredNotice:c}=b(),[l,d]=(0,F.useState)(!1),[f,p]=(0,F.useState)(``),[m,h]=(0,F.useState)(Ye);if((0,F.useEffect)(()=>{if(Ye)return;let e=setTimeout(()=>{Ye=!0,h(!0)},Je);return()=>clearTimeout(e)},[]),n||!m)return(0,B.jsx)(We,{});if(!t){if(qe())return e;let t=window.location.pathname+window.location.search;return(0,B.jsx)(u,{to:`/login`,state:{from:t&&t!==`/login`&&!t.startsWith(`/login?`)?t:`/`},replace:!0})}if(i)return(0,B.jsx)(Ke,{});if(!t.email_confirmed_at)return(0,B.jsx)(Le,{});if(r){let e=r.activeSession,t=r.reason!==`invalid_membership`&&r.reason!==`evicted`;async function n(){p(``),d(!0);try{let e=await a();e?.error&&p(e.error.message||`Could not log out the other browser.`)}catch(e){p(e?.message||`Could not log out the other browser. Check your connection and try again.`)}finally{d(!1)}}return(0,B.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:99999,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
          radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 35%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 25%, transparent) 50%, rgba(15, 23, 42, 0.94) 85%),
          linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 15%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 15%, transparent) 1px, transparent 1px)
        `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backgroundPosition:`center center`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,B.jsx)(_,{}),(0,B.jsx)(`div`,{style:{position:`absolute`,width:`480px`,height:`480px`,borderRadius:`50%`,background:`radial-gradient(circle, color-mix(in srgb, var(--primary-blue, #3b82f6) 35%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 20%, transparent) 45%, transparent 70%)`,filter:`blur(60px)`,pointerEvents:`none`,zIndex:0,animation:`glowPulse 4s ease-in-out infinite alternate`}}),(0,B.jsx)(`style`,{children:`
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
        `}),(0,B.jsxs)(`div`,{className:`session-blocked-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.94))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent), 0 0 0 1px rgba(255, 255, 255, 0.8) inset, 0 2px 0 rgba(255, 255, 255, 0.9) inset`},children:[(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,B.jsx)(`div`,{style:{position:`relative`,width:`72px`,height:`72px`,borderRadius:`24px`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent), 0 0 0 6px color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`},children:(0,B.jsx)(`i`,{className:`fa-solid fa-shield-halved`})})}),(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,B.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Active Session Lock`]})}),(0,B.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.55rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 8px`,letterSpacing:`-0.02em`},children:t?`Account Already in Use`:r.reason===`evicted`?`Signed Out`:`Account Not Available`}),(0,B.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.94rem`,fontWeight:`600`,lineHeight:`1.55`},children:r.message}),e?(0,B.jsxs)(`div`,{style:{marginTop:`22px`,padding:`18px 20px`,border:`1px solid var(--border, rgba(59, 130, 246, 0.2))`,borderRadius:`20px`,textAlign:`left`,background:`linear-gradient(135deg, color-mix(in srgb, var(--primary-blue, #3b82f6) 8%, transparent) 0%, color-mix(in srgb, var(--gold, #94a3b8) 6%, transparent) 100%)`,display:`flex`,alignItems:`center`,gap:`16px`,boxShadow:`0 4px 14px color-mix(in srgb, var(--primary-blue, #3b82f6) 6%, transparent)`},children:[(0,B.jsx)(`div`,{style:{width:`48px`,height:`48px`,borderRadius:`16px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 16%, transparent)`,color:`var(--primary-blue, #3b82f6)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.25rem`,flexShrink:0,boxShadow:`0 2px 8px color-mix(in srgb, var(--primary-blue) 15%, transparent)`},children:(0,B.jsx)(`i`,{className:`fa-solid fa-desktop`})}),(0,B.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,B.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`8px`,marginBottom:`4px`},children:[(0,B.jsx)(`span`,{style:{fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,fontSize:`0.98rem`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e.browser||`Other Browser`}),(0,B.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`5px`,fontSize:`0.72rem`,color:`#15803d`,fontWeight:`800`,background:`#dcfce7`,padding:`2px 8px`,borderRadius:`999px`},children:[(0,B.jsx)(`span`,{className:`active-pulse-dot`}),`Active Now`]})]}),(0,B.jsxs)(`div`,{style:{color:`var(--text-light, #64748b)`,fontSize:`0.83rem`,fontWeight:`600`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,B.jsx)(`i`,{className:`fa-regular fa-clock`,style:{fontSize:`0.78rem`}}),`Last active `,e.last_seen_at?new Date(e.last_seen_at).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}):`recently`]})]})]}):null,f?(0,B.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err) 20%, transparent)`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,B.jsx)(`span`,{children:f})]}):null,(0,B.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,marginTop:`26px`},children:[t?(0,B.jsx)(`button`,{className:`session-btn-primary`,type:`button`,onClick:n,disabled:l,style:{flex:1,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:l?`not-allowed`:`pointer`,opacity:l?.7:1,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:l?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,B.jsx)(`span`,{children:`Logging out...`})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,B.jsx)(`span`,{children:`Log out other browser`})]})}):null,(0,B.jsx)(`button`,{className:`session-btn-secondary`,type:`button`,onClick:o,style:{flex:t?void 0:1,border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`15px 22px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`},children:t?`Cancel`:`Sign out`})]})]})]})}return s?(0,B.jsx)(Ge,{notice:s,onConsented:()=>c(null)}):e}function Ze({children:e}){let{profile:t}=b(),{pathname:n}=a(),r=c(),{ready:o,unlockLevelByPath:l,activeSubjects:u}=s(),d=G(n),f=i(t?.current_level),{taught:p,required:m,locked:h}=N(n,f,l);return!o&&(re(n)||d)?null:K(d,u)?p&&(m===0||!h)?e:(0,B.jsx)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:(0,B.jsxs)(`div`,{style:{maxWidth:`520px`,margin:`60px auto`,padding:`40px 32px`,textAlign:`center`,background:`var(--card-bg, #fff)`,border:`1px solid var(--border, #e2e8f0)`,borderRadius:`28px`},children:[(0,B.jsx)(`div`,{style:{width:`72px`,height:`72px`,margin:`0 auto 20px`,borderRadius:`24px`,background:`#f1f5f9`,color:`#94a3b8`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.8rem`},children:(0,B.jsx)(`i`,{className:`fa-solid fa-lock`})}),(0,B.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontWeight:900,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`},children:p?`Not unlocked yet`:`Not on your course`}),(0,B.jsx)(`p`,{style:{color:`var(--text-light, #64748b)`,fontWeight:600,margin:`0 0 26px`,lineHeight:1.55},children:p?(0,B.jsxs)(B.Fragment,{children:[`This practice unlocks at `,(0,B.jsxs)(`strong`,{children:[`Level `,m]}),`. You are on `,(0,B.jsxs)(`strong`,{children:[`Level `,f]}),`. Keep going with your daily sessions and your teacher will move you up.`]}):(0,B.jsx)(B.Fragment,{children:`This practice is not part of your course. Your practice tools are all on the Practice page.`})}),(0,B.jsx)(`button`,{type:`button`,onClick:()=>r(`/practice`),style:{border:`none`,borderRadius:`16px`,padding:`14px 26px`,fontWeight:800,fontFamily:`'Sora', sans-serif`,color:`#fff`,background:`var(--primary-blue, #3b82f6)`,cursor:`pointer`},children:`Back to Practice`})]})}):(0,B.jsx)(Qe,{onBack:()=>r(`/practice`)})}function Qe({onBack:e}){return(0,B.jsx)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:(0,B.jsxs)(`div`,{style:{maxWidth:`520px`,margin:`60px auto`,padding:`40px 32px`,textAlign:`center`,background:`var(--card-bg, #fff)`,border:`1px solid var(--border, #e2e8f0)`,borderRadius:`28px`},children:[(0,B.jsx)(`div`,{style:{width:`72px`,height:`72px`,margin:`0 auto 20px`,borderRadius:`24px`,background:`#f1f5f9`,color:`#94a3b8`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.8rem`},children:(0,B.jsx)(`i`,{className:`fa-solid fa-circle-minus`})}),(0,B.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontWeight:900,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`},children:`Not part of your course`}),(0,B.jsx)(`p`,{style:{color:`var(--text-light, #64748b)`,fontWeight:600,margin:`0 0 26px`,lineHeight:1.55},children:`Your institute does not run this subject. Everything it does teach is on your Practice page.`}),(0,B.jsx)(`button`,{type:`button`,onClick:e,style:{border:`none`,borderRadius:`16px`,padding:`14px 26px`,fontWeight:800,fontFamily:`'Sora', sans-serif`,color:`#fff`,background:`var(--primary-blue, #3b82f6)`,cursor:`pointer`},children:`Back to Practice`})]})})}function $e({slug:e=``}){let[n,r]=(0,F.useState)(e),[i,a]=(0,F.useState)(``),o=t(),s=C(),c=!!e;function l(e){e.preventDefault(),a(``),x(n)||a(`Use 3-32 characters: lowercase letters, numbers and dashes only.`)}return(0,B.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,B.jsx)(_,{}),(0,B.jsx)(`style`,{children:`
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
      `}),(0,B.jsxs)(`div`,{className:`institute-missing-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,B.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:c?`linear-gradient(135deg, #f59e0b, #b45309)`:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:c?`0 14px 32px -4px rgba(245, 158, 11, 0.5)`:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent)`},children:(0,B.jsx)(`i`,{className:c?`fa-solid fa-link-slash`:`fa-solid fa-school`})})}),(0,B.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,B.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:c?`color-mix(in srgb, #f59e0b 14%, transparent)`:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:c?`#b45309`:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-info`,style:{fontSize:`0.68rem`}}),c?`Unknown Portal`:`Select Institute`]})}),(0,B.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:c?`Portal Not Found`:`Which Institute?`}),(0,B.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:c?(0,B.jsxs)(B.Fragment,{children:[`There is no institute matching `,(0,B.jsx)(`strong`,{style:{color:`var(--dark-blue, #0f172a)`},children:e}),`.`,o?` Check the code below, or ask your institute for the correct link.`:` Please check the link your institute gave you.`]}):`Enter your institute code to open its student panel.`}),o?(0,B.jsxs)(`form`,{onSubmit:l,style:{marginTop:`26px`,textAlign:`left`},children:[(0,B.jsx)(`label`,{htmlFor:`institute-slug`,style:{display:`block`,fontSize:`0.76rem`,fontWeight:`900`,letterSpacing:`0.08em`,textTransform:`uppercase`,color:`var(--text-light, #64748b)`,marginBottom:`8px`},children:`Institute code`}),(0,B.jsx)(`input`,{id:`institute-slug`,className:`institute-missing-input`,type:`text`,value:n,onChange:e=>r(e.target.value.toLowerCase().trim()),placeholder:`speedomath`,autoComplete:`off`,autoCapitalize:`none`,spellCheck:`false`,style:{width:`100%`,boxSizing:`border-box`,border:`1px solid var(--border, #cbd5e1)`,borderRadius:`16px`,padding:`14px 16px`,fontSize:`1rem`,fontWeight:`700`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.9)`,transition:`border-color 0.2s, box-shadow 0.2s`}}),i?(0,B.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err, #c62828) 20%, transparent)`,borderRadius:`14px`,padding:`11px 14px`,fontSize:`0.86rem`,fontWeight:`700`,margin:`12px 0 0`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{flexShrink:0}}),(0,B.jsx)(`span`,{children:i})]}):null,(0,B.jsxs)(`button`,{type:`submit`,style:{marginTop:`18px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-arrow-right`}),(0,B.jsx)(`span`,{children:`Continue`})]}),s?(0,B.jsx)(`button`,{type:`button`,onClick:m,style:{marginTop:`10px`,width:`100%`,border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`13px 20px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.9rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`},children:`Clear and start over`}):null]}):null]})]})}var et=`
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
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
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

  /* Quick Actions Grid */
  .quick-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 18px;
  }
  .quick-btn {
    padding: 18px 12px;
    border-radius: 16px;
    border: 1px solid var(--border);
    background: #ffffff;
    color: var(--dark-blue);
    font-family: "Sora", sans-serif;
    font-weight: 600;
    font-size: 0.86rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    box-shadow: var(--sh-sm);
    transition: all 0.2s;
  }
  .quick-btn i {
    font-size: 1.4rem;
    color: var(--primary-blue);
    transition: color 0.2s;
  }
  .quick-btn:hover {
    background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue));
    color: white;
    transform: translateY(-3px);
    box-shadow: var(--sh-md);
  }
  .quick-btn:hover i { color: var(--gold); }
  .home-loading {
    padding: 14px;
    border-radius: 16px;
    background: #ffffff;
    border: 1px solid var(--border);
    color: var(--text-light);
    font-weight: 600;
  }
`;function tt(){let e=c(),{activeSubjects:t}=s(),{profile:n,institute:r,membership:a,user:o}=b(),[l,u]=(0,F.useState)(`overview`),[d,f]=(0,F.useState)({liveClasses:[],eBooks:[],recordedCourses:[],exams:[],results:[],achievements:[],loading:!0,error:``}),p=n?.current_level===999?`All levels`:`Level ${n?.current_level??0}`,m=n?.full_name?.split(` `)?.[0]||o?.email?.split(`@`)?.[0]||`Student`,h=rt(a?.id),v=it(a?.id);(0,F.useEffect)(()=>{let e=!0;async function t(){if(!r?.id||!a?.id){f(e=>({...e,loading:!1}));return}let t=`home_dash_${r.id}_${a.id}`;try{let n=JSON.parse(sessionStorage.getItem(t)||`null`);if(n&&Date.now()-n._at<300*1e3){e&&f({...n,loading:!1,error:``});return}}catch{}f(e=>({...e,loading:!0,error:``}));let[n,i,o,s,c]=await Promise.all([O(r.id),ne(r.id,`ebook`),ee(r.id),te(r.id,a.id),D(r.id,a.id)]);if(!e)return;let l=n.error||i.error||o.error||s.error||c.error,u={liveClasses:n.data??[],eBooks:i.data??[],recordedCourses:o.data?.courses??[],exams:s.data?.exams??[],results:s.data?.results??[],achievements:c.data??[],loading:!1,error:l?.message||``};if(!l)try{sessionStorage.setItem(t,JSON.stringify({...u,_at:Date.now()}))}catch{}f(u)}return t(),()=>{e=!1}},[r?.id,a?.id]);let y=(0,F.useMemo)(()=>d.exams.filter(e=>e.kind!==`secure`),[d.exams]),x=(0,F.useMemo)(()=>d.results.filter(e=>{let t=d.exams.find(t=>t.id===e.exam_id);return t&&t.kind!==`secure`}),[d.exams,d.results]),S=d.liveClasses[0],C=y.filter(e=>!x.some(t=>t.exam_id===e.id)),w=x[0],T=i(n?.current_level),E=localStorage.getItem(`practice_session_${o?.id||`guest`}_${nt()}_level_${T}`)===`done`,k=(0,F.useMemo)(()=>ot(o?.id),[o?.id]),A=(0,F.useMemo)(()=>k.reduce((e,t)=>Math.max(e,t.percent||0),0),[k]),j=x.map(e=>{let t=Number(e.total_marks??e.totalMarks??0);return t?Math.round(Number(e.score??0)/t*100):null}).filter(e=>e!=null),M=j.length?Math.round(j.reduce((e,t)=>e+t,0)/j.length):null,re=new Set(d.achievements.map(e=>e.achievement_code)),N=g.length?Math.round(d.achievements.length/g.length*100):0,ie=st(d.achievements,re),P=[S?{icon:`fa-video`,title:`Live class is ready`,text:`${S.title||`Your next class`} is coming up.`,bg:`#fee2e2`,color:`#dc2626`,action:()=>e(`/live-classes`)}:null,C[0]?{icon:`fa-file-lines`,title:`Exam waiting`,text:`${C[0].title||`New exam`} is ready to solve.`,bg:`#e0e7ff`,color:`#4f46e5`,action:()=>e(`/exam`)}:null,w?{icon:`fa-award`,title:`Result posted`,text:`Latest score: ${ct(w)}.`,bg:`#dcfce7`,color:`#16a34a`,action:()=>e(`/exam`)}:null,d.recordedCourses[0]?{icon:`fa-circle-play`,title:`Video lesson`,text:`${d.recordedCourses[0].title||d.recordedCourses[0].name||`A course`} is available.`,bg:`#fef3c7`,color:`#d97706`,action:()=>e(`/recorded-lectures`)}:null].filter(Boolean);return(0,B.jsxs)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 10px)`},children:[(0,B.jsx)(`style`,{children:et}),(0,B.jsx)(_,{}),(0,B.jsxs)(`div`,{className:`dashboard-container`,children:[(0,B.jsxs)(`div`,{className:`dash-header`,children:[(0,B.jsxs)(`div`,{children:[(0,B.jsxs)(`h1`,{className:`dash-title`,children:[`Welcome back, `,(0,B.jsx)(`span`,{children:m}),`!`]}),(0,B.jsx)(`p`,{className:`dash-subtitle`,children:`Pick today's quest, collect wins, and keep your abacus brain sharp.`})]}),(0,B.jsxs)(`div`,{className:`dash-date`,children:[(0,B.jsx)(`i`,{className:`fa-regular fa-calendar`,style:{marginRight:`6px`}}),new Date().toLocaleDateString(`en-US`,{weekday:`short`,month:`short`,day:`numeric`})]})]}),(0,B.jsxs)(`div`,{className:`home-tabs`,role:`tablist`,"aria-label":`Home dashboard`,children:[(0,B.jsxs)(`button`,{className:`home-tab ${l===`overview`?`active`:``}`,onClick:()=>u(`overview`),children:[(0,B.jsx)(`i`,{className:`fa-solid fa-house`}),`Overview`]}),(0,B.jsxs)(`button`,{className:`home-tab ${l===`streak`?`active`:``}`,onClick:()=>u(`streak`),children:[(0,B.jsx)(`i`,{className:`fa-solid fa-fire`}),`Streak`]})]}),l===`streak`?(0,B.jsxs)(`div`,{className:`streak-card`,children:[(0,B.jsx)(`div`,{className:`streak-flame`,children:(0,B.jsx)(`i`,{className:`fa-solid fa-fire`})}),(0,B.jsxs)(`div`,{className:`streak-copy`,children:[(0,B.jsxs)(`h2`,{children:[h,` day streak`]}),(0,B.jsx)(`p`,{children:`Come back every day to keep the flame glowing.`})]}),(0,B.jsx)(`div`,{className:`streak-days`,children:v.map(e=>(0,B.jsxs)(`div`,{className:`streak-day ${e.done?`done`:``} ${e.today?`today`:``}`,children:[(0,B.jsx)(`i`,{className:`fa-solid ${e.done?`fa-check`:`fa-fire`}`}),(0,B.jsx)(`span`,{children:e.label})]},e.key))})]}):null,(0,B.jsxs)(`div`,{className:`stats-grid`,style:{display:l===`overview`?void 0:`none`},children:[(0,B.jsxs)(`div`,{className:`stat-card`,children:[(0,B.jsx)(`div`,{className:`stat-icon`,style:{background:`#e0e7ff`,color:`#4f46e5`},children:(0,B.jsx)(`i`,{className:`fa-solid fa-layer-group`})}),(0,B.jsxs)(`div`,{className:`stat-info`,children:[(0,B.jsx)(`div`,{className:`stat-val`,children:p}),(0,B.jsx)(`div`,{className:`stat-label`,children:`Current Stage`})]})]}),(0,B.jsxs)(`div`,{className:`stat-card`,children:[(0,B.jsx)(`div`,{className:`stat-icon`,style:{background:`#dcfce7`,color:`#16a34a`},children:(0,B.jsx)(`i`,{className:`fa-solid fa-bullseye`})}),(0,B.jsxs)(`div`,{className:`stat-info`,children:[(0,B.jsx)(`div`,{className:`stat-val`,children:M==null?`--`:`${M}%`}),(0,B.jsx)(`div`,{className:`stat-label`,children:`Exam Average`})]})]}),(0,B.jsxs)(`div`,{className:`stat-card`,children:[(0,B.jsx)(`div`,{className:`stat-icon`,style:{background:E?`#d1fae5`:`#fef3c7`,color:E?`#10b981`:`#d97706`},children:(0,B.jsx)(`i`,{className:`fa-solid ${E?`fa-circle-check`:`fa-calendar-check`}`})}),(0,B.jsxs)(`div`,{className:`stat-info`,children:[(0,B.jsx)(`div`,{className:`stat-val`,style:{color:E?`#10b981`:`#d97706`},children:E?`Complete`:`Pending`}),(0,B.jsx)(`div`,{className:`stat-label`,children:`Daily Session`})]})]}),(0,B.jsxs)(`div`,{className:`stat-card`,children:[(0,B.jsx)(`div`,{className:`stat-icon`,style:{background:`#fce7f3`,color:`#db2777`},children:(0,B.jsx)(`i`,{className:`fa-solid fa-clock`})}),(0,B.jsxs)(`div`,{className:`stat-info`,children:[(0,B.jsx)(`div`,{className:`stat-val`,children:d.liveClasses.length}),(0,B.jsx)(`div`,{className:`stat-label`,children:`Live Classes`})]})]})]}),(0,B.jsxs)(`div`,{className:`dash-main`,style:{display:l===`overview`?void 0:`none`},children:[(0,B.jsxs)(`div`,{className:`dash-left-col`,children:[(0,B.jsxs)(`div`,{className:`quest-card ${E?``:`pending-quest-highlight`}`,style:E?{}:{border:`2px solid #f59e0b`,boxShadow:`0 8px 24px -4px rgba(245, 158, 11, 0.35)`,background:`linear-gradient(135deg, color-mix(in srgb, var(--gold) 15%, white), white)`,position:`relative`},children:[!E&&(0,B.jsxs)(`span`,{style:{position:`absolute`,top:`-10px`,right:`14px`,background:`#f59e0b`,color:`#ffffff`,fontSize:`0.68rem`,fontWeight:`900`,padding:`3px 10px`,borderRadius:`50px`,textTransform:`uppercase`,letterSpacing:`0.8px`,boxShadow:`0 2px 8px rgba(245, 158, 11, 0.4)`,zIndex:2},children:[(0,B.jsx)(`i`,{className:`fa-solid fa-bell`,style:{marginRight:4}}),` PENDING TODAY`]}),(0,B.jsxs)(`div`,{className:`quest-copy`,children:[(0,B.jsx)(`h3`,{style:{color:E?void 0:`#d97706`},children:E?`Daily Session Complete`:`Daily Session`}),(0,B.jsx)(`p`,{children:E?`Nice work. Today's daily session is complete. A fresh round unlocks tomorrow.`:`Solve today's level-wise daily session questions.`})]}),(0,B.jsx)(`button`,{className:`quest-start`,onClick:()=>e(`/practice-session`),style:E?{}:{background:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,boxShadow:`0 4px 14px rgba(245, 158, 11, 0.4)`,fontWeight:`800`},children:E?`Review`:`Start Session`})]}),(0,B.jsxs)(`div`,{className:`panel`,children:[(0,B.jsxs)(`div`,{className:`panel-header`,children:[(0,B.jsx)(`h2`,{className:`panel-title`,children:`Weekly Activity`}),(0,B.jsx)(`button`,{className:`panel-action`,onClick:()=>e(`/practice-session`),children:`Daily Session`})]}),(0,B.jsx)(`div`,{className:`chart-area`,children:k.map(e=>(0,B.jsxs)(`div`,{className:`chart-bar-group`,children:[(0,B.jsx)(`div`,{className:`chart-bar-wrap`,children:(0,B.jsx)(`div`,{className:`chart-bar ${e.percent>=A&&A>0?`peak`:``}`,style:{height:`${e.percent}%`}})}),(0,B.jsx)(`span`,{className:`chart-label`,children:e.day})]},e.day))})]}),(0,B.jsxs)(`div`,{className:`panel trophy-panel`,children:[(0,B.jsxs)(`div`,{className:`panel-header`,children:[(0,B.jsx)(`h2`,{className:`panel-title`,children:`Trophy Power`}),(0,B.jsx)(`button`,{className:`panel-action`,onClick:()=>e(`/achievement`),children:`Badges`})]}),(0,B.jsxs)(`div`,{className:`achievement-meter`,children:[(0,B.jsx)(`div`,{className:`trophy-big`,children:(0,B.jsx)(`i`,{className:`fa-solid fa-trophy`})}),(0,B.jsxs)(`div`,{className:`meter-copy`,children:[(0,B.jsxs)(`strong`,{children:[d.achievements.length,`/`,g.length]}),(0,B.jsx)(`span`,{children:`badges collected`})]}),(0,B.jsxs)(`div`,{className:`meter-percent`,children:[N,`%`]})]}),(0,B.jsx)(`div`,{className:`achievement-track`,"aria-label":`Achievement progress`,children:(0,B.jsx)(`div`,{className:`achievement-fill`,style:{width:`${Math.max(4,N)}%`}})}),(0,B.jsx)(`div`,{className:`trophy-row`,children:ie.map(t=>(0,B.jsxs)(`div`,{className:`mini-trophy ${t.earned?``:`locked`}`,onClick:()=>e(`/achievement`),children:[(0,B.jsx)(`div`,{className:`mini-trophy-icon`,style:{background:t.color},children:(0,B.jsx)(`i`,{className:`fa-solid ${t.icon}`})}),(0,B.jsx)(`span`,{children:t.name})]},t.code))})]}),(0,B.jsxs)(`div`,{className:`panel`,children:[(0,B.jsx)(`div`,{className:`panel-header`,style:{marginBottom:`0`},children:(0,B.jsx)(`h2`,{className:`panel-title`,children:`Quick Actions`})}),(0,B.jsxs)(`div`,{className:`quick-grid`,children:[K(`abacus`,t)&&(0,B.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/interactive-abacus`),children:[(0,B.jsx)(`i`,{className:`fa-solid fa-calculator`}),`Int. Abacus`]}),(0,B.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/practice`),children:[(0,B.jsx)(`i`,{className:`fa-solid fa-dumbbell`}),`Start Practice`]}),(0,B.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/live-classes`),children:[(0,B.jsx)(`i`,{className:`fa-solid fa-video`}),`Join Live Class`]}),(0,B.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/exam`),children:[(0,B.jsx)(`i`,{className:`fa-solid fa-file-lines`}),`Take Exam`]}),(0,B.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/achievement`),children:[(0,B.jsx)(`i`,{className:`fa-solid fa-medal`}),`Achievements`]})]})]})]}),(0,B.jsxs)(`div`,{className:`panel`,style:{display:`flex`,flexDirection:`column`},children:[(0,B.jsxs)(`div`,{className:`panel-header`,children:[(0,B.jsx)(`h2`,{className:`panel-title`,children:`Today's Updates`}),(0,B.jsx)(`button`,{className:`panel-action`,onClick:()=>e(`/recorded-lectures`),children:`Lessons`})]}),(0,B.jsxs)(`div`,{className:`notif-list`,children:[d.loading?(0,B.jsx)(`div`,{className:`home-loading`,children:`Loading your quests...`}):null,d.error?(0,B.jsxs)(`div`,{className:`home-loading`,children:[`Could not load some updates: `,d.error]}):null,!d.loading&&!P.length?(0,B.jsxs)(`div`,{className:`notif-item`,onClick:()=>e(`/practice-session`),children:[(0,B.jsx)(`div`,{className:`notif-icon`,style:{background:`#dcfce7`,color:`#16a34a`},children:(0,B.jsx)(`i`,{className:`fa-solid fa-wand-magic-sparkles`})}),(0,B.jsxs)(`div`,{className:`notif-content`,children:[(0,B.jsx)(`h4`,{children:`No new class work`}),(0,B.jsx)(`p`,{children:`Your daily practice quest is ready.`})]})]}):null,P.map(e=>(0,B.jsxs)(`div`,{className:`notif-item`,onClick:e.action,children:[(0,B.jsx)(`div`,{className:`notif-icon`,style:{background:e.bg,color:e.color},children:(0,B.jsx)(`i`,{className:`fa-solid ${e.icon}`})}),(0,B.jsxs)(`div`,{className:`notif-content`,children:[(0,B.jsx)(`h4`,{children:e.title}),(0,B.jsx)(`p`,{children:e.text})]})]},e.title))]}),(0,B.jsx)(`button`,{className:`btn btn-secondary`,style:{marginTop:`20px`,width:`100%`,padding:`12px`},onClick:()=>e(`/exam`),children:`View Exam History`})]})]})]})]})}function nt(){return new Date().toISOString().slice(0,10)}function rt(e){if(!e)return 0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);return Number(t.streakCount||0)}catch{return 0}}function it(e){let t=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],n=new Date,r=``,i=0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);r=t.lastLoginDate||``,i=Number(t.streakCount||0)}catch{}return Array.from({length:7},(e,a)=>{let o=new Date(n);o.setDate(n.getDate()-(6-a));let s=o.toLocaleDateString(`en-CA`),c=Math.round((at(n)-at(o))/864e5),l=r&&c<i;return{key:s,label:t[o.getDay()],today:s===n.toLocaleDateString(`en-CA`),done:l}})}function at(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function ot(e){let t=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],n=new Date;return Array.from({length:7},(r,i)=>{let a=new Date(n);a.setDate(n.getDate()-(6-i));let o=a.toISOString().slice(0,10);return{day:t[a.getDay()],percent:Object.keys(localStorage).filter(t=>t.startsWith(`practice_session_${e||`guest`}_${o}`)&&localStorage.getItem(t)===`done`).length?100:18}})}function st(e,t){let n=e.slice(0,2).map(e=>({...r(e.achievement_code),earned:!0})).filter(e=>e.code),i=g.filter(e=>!t.has(e.code)).slice(0,Math.max(0,4-n.length)).map(e=>({...e,earned:!1}));return[...n,...i].slice(0,4)}function ct(e){let t=Number(e?.score??0),n=Number(e?.total_marks??e?.totalMarks??0);return n?`${t}/${n}`:`${t}`}var lt=`
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
`;function ut(){let e=c();return(0,B.jsxs)(`div`,{className:`page-wrap`,style:{justifyContent:`center`},children:[(0,B.jsx)(`style`,{children:lt}),(0,B.jsx)(_,{}),(0,B.jsxs)(`div`,{className:`practice-card not-found-container`,style:{maxWidth:`550px`,marginTop:0},children:[(0,B.jsx)(`div`,{className:`abacus-wrap`,children:(0,B.jsxs)(`svg`,{width:`320`,height:`160`,viewBox:`0 0 420 200`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,B.jsx)(`rect`,{x:`10`,y:`10`,width:`400`,height:`180`,rx:`16`,ry:`16`,fill:`#ffffff`,stroke:`var(--dark-blue)`,strokeWidth:`6`}),(0,B.jsx)(`rect`,{x:`10`,y:`85`,width:`400`,height:`6`,fill:`var(--dark-blue)`}),(0,B.jsx)(`text`,{x:`95`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`4`}),(0,B.jsx)(`text`,{x:`210`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`0`}),(0,B.jsx)(`text`,{x:`325`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`4`}),(0,B.jsx)(`line`,{x1:`95`,y1:`20`,x2:`95`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`72`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`101`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`123`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`145`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`158`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,B.jsx)(`line`,{x1:`210`,y1:`20`,x2:`210`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`35`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`101`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`118`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`135`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`152`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,B.jsx)(`line`,{x1:`325`,y1:`20`,x2:`325`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`72`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`101`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`123`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`145`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,B.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`158`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`})]})}),(0,B.jsx)(`div`,{className:`error-code`,children:`404`}),(0,B.jsx)(`p`,{className:`error-msg`,children:`Oops! This bead slipped off the rod.`}),(0,B.jsx)(`p`,{className:`error-sub`,children:`Page not found`}),(0,B.jsxs)(`button`,{className:`btn btn-primary`,onClick:()=>e(`/`),children:[(0,B.jsx)(`i`,{className:`fa-solid fa-house`,style:{marginRight:`8px`}}),` Back to Dashboard`]})]})]})}var dt=(0,F.lazy)(()=>h(()=>import(`./Basic-CS3UCHyF.js`),__vite__mapDeps([0,1,2]))),ft=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e._),__vite__mapDeps([3,2,1]))),pt=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.v),__vite__mapDeps([3,2,1]))),mt=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.u),__vite__mapDeps([3,2,1]))),ht=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.a),__vite__mapDeps([3,2,1]))),gt=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.o),__vite__mapDeps([3,2,1]))),_t=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.d),__vite__mapDeps([3,2,1]))),vt=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.m),__vite__mapDeps([3,2,1]))),yt=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.f),__vite__mapDeps([3,2,1]))),bt=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.p),__vite__mapDeps([3,2,1]))),xt=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.r),__vite__mapDeps([3,2,1]))),St=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.h),__vite__mapDeps([3,2,1]))),Ct=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.n),__vite__mapDeps([3,2,1]))),wt=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.g),__vite__mapDeps([3,2,1]))),Tt=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.s),__vite__mapDeps([3,2,1]))),Et=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.t),__vite__mapDeps([3,2,1]))),Dt=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.i),__vite__mapDeps([3,2,1]))),Ot=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.c),__vite__mapDeps([3,2,1]))),kt=(0,F.lazy)(()=>h(()=>import(`./levels-D0ZCyXej.js`).then(e=>e.l),__vite__mapDeps([3,2,1]))),At=(0,F.lazy)(()=>h(()=>import(`./Abacus-B0zNXjUt.js`),__vite__mapDeps([4,2,1,5]))),jt=(0,F.lazy)(()=>h(()=>import(`./interactive-CtP7aZWY.js`).then(e=>e.a),__vite__mapDeps([1,2]))),Mt=(0,F.lazy)(()=>h(()=>import(`./interactive-CtP7aZWY.js`).then(e=>e.c),__vite__mapDeps([1,2]))),Nt=(0,F.lazy)(()=>h(()=>import(`./interactive-CtP7aZWY.js`).then(e=>e.l),__vite__mapDeps([1,2]))),Pt=(0,F.lazy)(()=>h(()=>import(`./interactive-CtP7aZWY.js`).then(e=>e.r),__vite__mapDeps([1,2]))),Ft=(0,F.lazy)(()=>h(()=>import(`./interactive-CtP7aZWY.js`).then(e=>e.o),__vite__mapDeps([1,2]))),It=(0,F.lazy)(()=>h(()=>import(`./interactive-CtP7aZWY.js`).then(e=>e.s),__vite__mapDeps([1,2]))),Lt=(0,F.lazy)(()=>h(()=>import(`./interactive-CtP7aZWY.js`).then(e=>e.t),__vite__mapDeps([1,2]))),Rt=(0,F.lazy)(()=>h(()=>import(`./interactive-CtP7aZWY.js`).then(e=>e.i),__vite__mapDeps([1,2]))),zt=(0,F.lazy)(()=>h(()=>import(`./interactive-CtP7aZWY.js`).then(e=>e.n),__vite__mapDeps([1,2]))),Bt=(0,F.lazy)(()=>h(()=>import(`./VedicMaster-CS-Ej139.js`),__vite__mapDeps([6,1,2,7]))),Vt=(0,F.lazy)(()=>h(()=>import(`./VedicTrickPractice-BaC5YuZV.js`),__vite__mapDeps([8,2,1,7]))),Ht=(0,F.lazy)(()=>h(()=>import(`./RubiksCube-B9sBl-9Q.js`),__vite__mapDeps([9,2,1,10,5,11]))),Ut=(0,F.lazy)(()=>h(()=>import(`./Practice-D__N50LQ.js`),__vite__mapDeps([12,2,1]))),Wt=(0,F.lazy)(()=>h(()=>import(`./PracticeSession-BeivQqhe.js`),__vite__mapDeps([13,2,1,7,11]))),Gt=(0,F.lazy)(()=>h(()=>import(`./Exam-G5k8cCbI.js`),__vite__mapDeps([14,2,1,15]))),Kt=(0,F.lazy)(()=>h(()=>import(`./LiveClasses-CUJ52YQZ.js`),__vite__mapDeps([16,2,1,15]))),qt=(0,F.lazy)(()=>h(()=>import(`./RecordedLecture-CLhpfJ73.js`),__vite__mapDeps([17,2,1,18,15]))),Jt=(0,F.lazy)(()=>h(()=>import(`./Classroom-gC2RgVCi.js`),__vite__mapDeps([19,2,1,18]))),Yt=(0,F.lazy)(()=>h(()=>import(`./Syllabus-FIcBuX-S.js`),__vite__mapDeps([20,2,1]))),Xt=(0,F.lazy)(()=>h(()=>import(`./EBook-CrtMni_6.js`),__vite__mapDeps([21,2,1,22,23,15]))),Zt=(0,F.lazy)(()=>h(()=>import(`./Profile-BB3S4wA4.js`),__vite__mapDeps([24,2,1]))),Qt=(0,F.lazy)(()=>h(()=>import(`./Achievement-DTpFs1Fd.js`),__vite__mapDeps([25,2,1]))),$t=(0,F.lazy)(()=>h(()=>import(`./GameZone-GMGPrW-l.js`),__vite__mapDeps([26,2,1,11]))),en=(0,F.lazy)(()=>h(()=>import(`./mcq-C8vxWQKM.js`).then(e=>e.f),__vite__mapDeps([11,2,1]))),tn=(0,F.lazy)(()=>h(()=>import(`./mcq-C8vxWQKM.js`).then(e=>e.p),__vite__mapDeps([11,2,1]))),nn=(0,F.lazy)(()=>h(()=>import(`./mcq-C8vxWQKM.js`).then(e=>e.c),__vite__mapDeps([11,2,1]))),rn=(0,F.lazy)(()=>h(()=>import(`./mcq-C8vxWQKM.js`).then(e=>e.l),__vite__mapDeps([11,2,1]))),an=(0,F.lazy)(()=>h(()=>import(`./mcq-C8vxWQKM.js`).then(e=>e.i),__vite__mapDeps([11,2,1]))),on=(0,F.lazy)(()=>h(()=>import(`./mcq-C8vxWQKM.js`).then(e=>e.s),__vite__mapDeps([11,2,1]))),sn=(0,F.lazy)(()=>h(()=>import(`./mcq-C8vxWQKM.js`).then(e=>e.t),__vite__mapDeps([11,2,1]))),cn=(0,F.lazy)(()=>h(()=>import(`./mcq-C8vxWQKM.js`).then(e=>e.n),__vite__mapDeps([11,2,1]))),ln=(0,F.lazy)(()=>h(()=>import(`./mcq-C8vxWQKM.js`).then(e=>e.d),__vite__mapDeps([11,2,1]))),un=(0,F.lazy)(()=>h(()=>import(`./mcq-C8vxWQKM.js`).then(e=>e.u),__vite__mapDeps([11,2,1]))),dn=(0,F.lazy)(()=>h(()=>import(`./mcq-C8vxWQKM.js`).then(e=>e.a),__vite__mapDeps([11,2,1]))),fn=(0,F.lazy)(()=>h(()=>import(`./mcq-C8vxWQKM.js`).then(e=>e.o),__vite__mapDeps([11,2,1]))),pn=(0,F.lazy)(()=>h(()=>import(`./mcq-C8vxWQKM.js`).then(e=>e.r),__vite__mapDeps([11,2,1]))),mn=new Set(`/addition./addsub./negative./multiply./division./decimal-addsub./decimal-multiply./decimal-division./sq-root./cube-root./square./cube./long-multiply./table./percentage./lcm./hcf./mcq-addition./mcq-addsub./mcq-decimal-add./mcq-decimal-addsub./mcq-multiply./mcq-division./mcq-square./mcq-sqroot./mcq-cube./mcq-cuberoot./mcq-lcm./mcq-hcf./mcq-percentage`.split(`.`)),hn=new Set([`/interactive-abacus-addition`,`/interactive-abacus-addsub`,`/interactive-abacus-multiply`,`/interactive-abacus-division`,`/interactive-abacus-decimals`,`/interactive-abacus-sqroots`,`/interactive-abacus-lcmhcf`,`/interactive-abacus-percentage`]);function gn(){let{instituteReady:e,instituteMissing:t,instituteSlug:r}=b();return e&&t&&!qe()?(0,B.jsx)($e,{slug:r}):(0,B.jsxs)(n,{children:[(0,B.jsx)(_n,{}),(0,B.jsx)(vn,{}),(0,B.jsx)(F.Suspense,{fallback:null,children:(0,B.jsxs)(p,{children:[(0,B.jsx)(d,{path:`/login`,element:(0,B.jsx)(He,{})}),(0,B.jsx)(d,{path:`/reset-password`,element:(0,B.jsx)(Ue,{})}),(0,B.jsx)(d,{path:`/`,element:(0,B.jsx)($,{children:(0,B.jsx)(tt,{})})}),(0,B.jsx)(d,{path:`/Basic`,element:(0,B.jsx)($,{children:(0,B.jsx)(dt,{})})}),(0,B.jsx)(d,{path:`/addition`,element:(0,B.jsx)($,{children:(0,B.jsx)(ft,{})})}),(0,B.jsx)(d,{path:`/addsub`,element:(0,B.jsx)($,{children:(0,B.jsx)(pt,{})})}),(0,B.jsx)(d,{path:`/formula-direct`,element:(0,B.jsx)($,{children:(0,B.jsx)(mt,{formula:`direct`})})}),(0,B.jsx)(d,{path:`/formula-small-friend`,element:(0,B.jsx)($,{children:(0,B.jsx)(mt,{formula:`smallFriend`})})}),(0,B.jsx)(d,{path:`/formula-big-friend`,element:(0,B.jsx)($,{children:(0,B.jsx)(mt,{formula:`bigFriend`})})}),(0,B.jsx)(d,{path:`/formula-combination`,element:(0,B.jsx)($,{children:(0,B.jsx)(mt,{formula:`combination`})})}),(0,B.jsx)(d,{path:`/negative`,element:(0,B.jsx)($,{children:(0,B.jsx)(ht,{})})}),(0,B.jsx)(d,{path:`/multiply`,element:(0,B.jsx)($,{children:(0,B.jsx)(gt,{})})}),(0,B.jsx)(d,{path:`/division`,element:(0,B.jsx)($,{children:(0,B.jsx)(_t,{})})}),(0,B.jsx)(d,{path:`/decimal-addsub`,element:(0,B.jsx)($,{children:(0,B.jsx)(vt,{})})}),(0,B.jsx)(d,{path:`/decimal-multiply`,element:(0,B.jsx)($,{children:(0,B.jsx)(yt,{})})}),(0,B.jsx)(d,{path:`/decimal-division`,element:(0,B.jsx)($,{children:(0,B.jsx)(bt,{})})}),(0,B.jsx)(d,{path:`/sq-root`,element:(0,B.jsx)($,{children:(0,B.jsx)(xt,{})})}),(0,B.jsx)(d,{path:`/cube-root`,element:(0,B.jsx)($,{children:(0,B.jsx)(St,{})})}),(0,B.jsx)(d,{path:`/square`,element:(0,B.jsx)($,{children:(0,B.jsx)(Ct,{})})}),(0,B.jsx)(d,{path:`/cube`,element:(0,B.jsx)($,{children:(0,B.jsx)(wt,{})})}),(0,B.jsx)(d,{path:`/long-multiply`,element:(0,B.jsx)($,{children:(0,B.jsx)(Tt,{})})}),(0,B.jsx)(d,{path:`/table`,element:(0,B.jsx)($,{children:(0,B.jsx)(Et,{})})}),(0,B.jsx)(d,{path:`/percentage`,element:(0,B.jsx)($,{children:(0,B.jsx)(Dt,{})})}),(0,B.jsx)(d,{path:`/lcm`,element:(0,B.jsx)($,{children:(0,B.jsx)(Ot,{})})}),(0,B.jsx)(d,{path:`/hcf`,element:(0,B.jsx)($,{children:(0,B.jsx)(kt,{})})}),(0,B.jsx)(d,{path:`/abacus`,element:(0,B.jsx)($,{children:(0,B.jsx)(At,{})})}),(0,B.jsx)(d,{path:`/interactive-abacus`,element:(0,B.jsx)($,{children:(0,B.jsx)(jt,{})})}),(0,B.jsx)(d,{path:`/interactive-abacus-addition`,element:(0,B.jsx)($,{children:(0,B.jsx)(Mt,{})})}),(0,B.jsx)(d,{path:`/interactive-abacus-addsub`,element:(0,B.jsx)($,{children:(0,B.jsx)(Nt,{})})}),(0,B.jsx)(d,{path:`/interactive-abacus-multiply`,element:(0,B.jsx)($,{children:(0,B.jsx)(Pt,{})})}),(0,B.jsx)(d,{path:`/interactive-abacus-division`,element:(0,B.jsx)($,{children:(0,B.jsx)(Ft,{})})}),(0,B.jsx)(d,{path:`/interactive-abacus-decimals`,element:(0,B.jsx)($,{children:(0,B.jsx)(It,{})})}),(0,B.jsx)(d,{path:`/interactive-abacus-sqroots`,element:(0,B.jsx)($,{children:(0,B.jsx)(Lt,{})})}),(0,B.jsx)(d,{path:`/interactive-abacus-lcmhcf`,element:(0,B.jsx)($,{children:(0,B.jsx)(Rt,{})})}),(0,B.jsx)(d,{path:`/interactive-abacus-percentage`,element:(0,B.jsx)($,{children:(0,B.jsx)(zt,{})})}),(0,B.jsx)(d,{path:`/iabacus`,element:(0,B.jsx)(u,{to:`/interactive-abacus`,replace:!0})}),(0,B.jsx)(d,{path:`/iabacus-addition`,element:(0,B.jsx)(u,{to:`/interactive-abacus-addition`,replace:!0})}),(0,B.jsx)(d,{path:`/iabacus-addsub`,element:(0,B.jsx)(u,{to:`/interactive-abacus-addsub`,replace:!0})}),(0,B.jsx)(d,{path:`/iabacus-multiply`,element:(0,B.jsx)(u,{to:`/interactive-abacus-multiply`,replace:!0})}),(0,B.jsx)(d,{path:`/iabacus-division`,element:(0,B.jsx)(u,{to:`/interactive-abacus-division`,replace:!0})}),(0,B.jsx)(d,{path:`/iabacus-decimals`,element:(0,B.jsx)(u,{to:`/interactive-abacus-decimals`,replace:!0})}),(0,B.jsx)(d,{path:`/iabacus-sqroots`,element:(0,B.jsx)(u,{to:`/interactive-abacus-sqroots`,replace:!0})}),(0,B.jsx)(d,{path:`/iabacus-lcmhcf`,element:(0,B.jsx)(u,{to:`/interactive-abacus-lcmhcf`,replace:!0})}),(0,B.jsx)(d,{path:`/iabacus-percentage`,element:(0,B.jsx)(u,{to:`/interactive-abacus-percentage`,replace:!0})}),(0,B.jsx)(d,{path:`/RubiksCube`,element:(0,B.jsx)($,{children:(0,B.jsx)(Ht,{})})}),(0,B.jsx)(d,{path:`/practice`,element:(0,B.jsx)($,{children:(0,B.jsx)(Ut,{})})}),(0,B.jsx)(d,{path:`/practice-session`,element:(0,B.jsx)($,{children:(0,B.jsx)(Wt,{})})}),(0,B.jsx)(d,{path:`/exam`,element:(0,B.jsx)($,{children:(0,B.jsx)(Gt,{})})}),(0,B.jsx)(d,{path:`/live-classes`,element:(0,B.jsx)($,{children:(0,B.jsx)(Kt,{})})}),(0,B.jsx)(d,{path:`/recorded-lectures`,element:(0,B.jsx)($,{children:(0,B.jsx)(qt,{})})}),(0,B.jsx)(d,{path:`/classroom`,element:(0,B.jsx)($,{children:(0,B.jsx)(Jt,{})})}),(0,B.jsx)(d,{path:`/syllabus`,element:(0,B.jsx)($,{children:(0,B.jsx)(Yt,{})})}),(0,B.jsx)(d,{path:`/e-book`,element:(0,B.jsx)($,{children:(0,B.jsx)(Xt,{})})}),(0,B.jsx)(d,{path:`/profile`,element:(0,B.jsx)($,{children:(0,B.jsx)(Zt,{})})}),(0,B.jsx)(d,{path:`/achievement`,element:(0,B.jsx)($,{children:(0,B.jsx)(Qt,{})})}),(0,B.jsx)(d,{path:`/mcq-addition`,element:(0,B.jsx)($,{children:(0,B.jsx)(en,{})})}),(0,B.jsx)(d,{path:`/mcq-addsub`,element:(0,B.jsx)($,{children:(0,B.jsx)(tn,{})})}),(0,B.jsx)(d,{path:`/mcq-decimal-add`,element:(0,B.jsx)($,{children:(0,B.jsx)(nn,{})})}),(0,B.jsx)(d,{path:`/mcq-decimal-addsub`,element:(0,B.jsx)($,{children:(0,B.jsx)(rn,{})})}),(0,B.jsx)(d,{path:`/mcq-multiply`,element:(0,B.jsx)($,{children:(0,B.jsx)(an,{})})}),(0,B.jsx)(d,{path:`/mcq-division`,element:(0,B.jsx)($,{children:(0,B.jsx)(on,{})})}),(0,B.jsx)(d,{path:`/mcq-square`,element:(0,B.jsx)($,{children:(0,B.jsx)(sn,{})})}),(0,B.jsx)(d,{path:`/mcq-sqroot`,element:(0,B.jsx)($,{children:(0,B.jsx)(cn,{})})}),(0,B.jsx)(d,{path:`/mcq-cube`,element:(0,B.jsx)($,{children:(0,B.jsx)(ln,{})})}),(0,B.jsx)(d,{path:`/mcq-cuberoot`,element:(0,B.jsx)($,{children:(0,B.jsx)(un,{})})}),(0,B.jsx)(d,{path:`/mcq-lcm`,element:(0,B.jsx)($,{children:(0,B.jsx)(dn,{})})}),(0,B.jsx)(d,{path:`/mcq-hcf`,element:(0,B.jsx)($,{children:(0,B.jsx)(fn,{})})}),(0,B.jsx)(d,{path:`/mcq-percentage`,element:(0,B.jsx)($,{children:(0,B.jsx)(pn,{})})}),(0,B.jsx)(d,{path:`/mental-flash-games`,element:(0,B.jsx)($,{children:(0,B.jsx)($t,{})})}),(0,B.jsx)(d,{path:`/vedic-math`,element:(0,B.jsx)(u,{to:`/vedic-math/master`,replace:!0})}),(0,B.jsx)(d,{path:`/vedic-math/master`,element:(0,B.jsx)($,{children:(0,B.jsx)(Bt,{})})}),(0,B.jsx)(d,{path:`/vedic-math/practice/:trickId`,element:(0,B.jsx)($,{children:(0,B.jsx)(Vt,{})})}),(0,B.jsx)(d,{path:`*`,element:(0,B.jsx)(ut,{})})]})})]})}function _n(){let e=c(),t=a();return(0,F.useEffect)(()=>{if(!o.isNativePlatform())return;let n=v.addListener(`backButton`,({canGoBack:n})=>{n&&window.history.length>1?window.history.back():t.pathname!==`/`&&t.pathname!==`/login`?e(`/`,{replace:!0}):v.exitApp()});return()=>{n.then(e=>e.remove())}},[e,t.pathname]),null}function vn(){let{pathname:e}=a(),{user:t,membership:n,consentRequiredNotice:r}=b(),i=t&&n?.role===`student`&&!r?n.id:null;return(0,F.useEffect)(()=>{if(i)return w(i),()=>A()},[i]),(0,F.useEffect)(()=>{i&&T(e)},[e,i]),null}var yn=`student-sidebar-collapsed`;function bn(){try{return window.localStorage.getItem(yn)===`1`}catch{return!1}}function $({children:e}){let[t,n]=(0,F.useState)(!1),[r,i]=(0,F.useState)(bn),{pathname:o}=a(),s=c(),{user:l,studentLayout:u}=b(),d=mn.has(o),f=hn.has(o),p=d||f,m=f?{path:`/interactive-abacus`,label:`Interactive Abacus`}:{path:`/practice`,label:`Practice`},h=u||`sidebar_classic`,g=h===`topbar_focus`||h===`bento_gamified`,_=()=>{n(e=>!e)};return(0,B.jsx)(Xe,{children:l?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(le,{toggleSidebar:_,hideSidebarToggle:p}),g&&!p?(0,B.jsx)(Me,{}):null,(0,B.jsxs)(`div`,{className:`app-layout app-layout-${h} ${p?`app-layout-focus`:``} ${r&&!p?`app-layout-collapsed`:``}`,children:[(0,B.jsx)(Ae,{isOpen:t,toggleSidebar:_,minimized:p||r,onToggleMinimized:p?null:()=>{i(e=>{let t=!e;try{window.localStorage.setItem(yn,t?`1`:`0`)}catch{}return t})}}),(0,B.jsxs)(`main`,{className:`main-content`,children:[p?(0,B.jsx)(`div`,{className:`practice-focus-topbar`,children:(0,B.jsx)(`button`,{className:`practice-back-button`,type:`button`,"aria-label":`Back to ${m.label}`,title:`Back to ${m.label}`,onClick:()=>s(m.path),children:(0,B.jsx)(`i`,{className:`fa-solid fa-arrow-left`})})}):null,(0,B.jsx)(Ze,{children:e})]})]}),(0,B.jsx)(fe,{}),(0,B.jsx)(Pe,{})]}):(0,B.jsx)(`div`,{className:`app-layout app-layout-focus`,style:{minHeight:`100vh`,width:`100%`},children:(0,B.jsx)(`main`,{className:`main-content`,style:{margin:0,padding:`20px 16px`,width:`100%`},children:e})})})}(0,I.createRoot)(document.getElementById(`root`)).render((0,B.jsx)(F.StrictMode,{children:(0,B.jsx)(j,{children:(0,B.jsx)(gn,{})})}));export{ge as a,xe as c,ye as d,Se as f,K as h,Ce as i,be as l,Te as m,Oe as n,he as o,_e as p,X as r,ve as s,Be as t,we as u};