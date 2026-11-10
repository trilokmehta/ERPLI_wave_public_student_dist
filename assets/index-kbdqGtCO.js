const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Basic-CoIdZVYD.js","assets/interactive-DJFVKhAI.js","assets/rolldown-runtime-S-ySWqyJ.js","assets/levels-8MlW5pS5.js","assets/Abacus-D-ilulso.js","assets/LiveToolBanner-4cFCMVpr.js","assets/VedicMaster-CDkt-H4z.js","assets/vedicSyllabus-Bu1g1_5T.js","assets/VedicTrickPractice-Cpoms3wE.js","assets/App-BeVBMOGG.js","assets/vendor-DOKOsNY3.js","assets/react-dom-B8G0Evpv.js","assets/vendor-rptWOpCb.css","assets/KidResultCard-C4bX3Zu4.js","assets/mcq-DzM2X8cc.js","assets/gameSounds-C92IiOI5.js","assets/App-B6oAdwbd.css","assets/RubiksCube-BZez0dHR.js","assets/three-C981oIoY.js","assets/Practice-Be7PUjcc.js","assets/PracticeSession-CjKzTwA0.js","assets/Exam-DUGnrnQK.js","assets/contentLevels-BDc0wFeC.js","assets/LiveClasses-6Qc6MtTJ.js","assets/RecordedLecture-DICcABxO.js","assets/Classroom-BOg9KrRm.js","assets/Syllabus-D2kF5VUy.js","assets/EBook-Bu7Gmo81.js","assets/Profile-Dthhu512.js","assets/Achievement-B9Gen6XL.js","assets/GameZone-XcBTopb7.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{$ as t,At as n,Bt as r,Ft as i,G as a,Gt as o,Ht as s,It as c,Kt as l,Mt as u,Nt as d,O as f,Pt as p,Q as m,Rt as h,U as g,Ut as _,Vt as v,W as y,X as b,Y as x,Z as S,_t as ee,at as C,et as w,f as T,g as E,ht as D,it as O,mt as te,nt as k,p as A,pt as j,q as M,tt as N,v as P,vt as F,y as ne,yt as re}from"./interactive-DJFVKhAI.js";import{n as ie,t as I}from"./react-dom-B8G0Evpv.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var L=e(l(),1),R=I();function z(e){return`${e}-${Math.random().toString(36).slice(2,10)}`}function ae(e,t){try{let n=p.channel(z(`batch-announcements-${e}`)).on(`postgres_changes`,{event:`INSERT`,schema:`public`,table:`batch_announcements`,filter:`batch_id=eq.${e}`},e=>t(e.new)).subscribe();return()=>p.removeChannel(n)}catch(e){return console.warn(`batch_announcements:subscribe:failed`,e.message),()=>{}}}var B=`announcements_seen_at_`;function V(e){try{return Number(localStorage.getItem(`${B}${e}`))||0}catch{return 0}}function oe(e,t){try{localStorage.setItem(`${B}${e}`,String(t))}catch{}}function se(){let{institute:e,membership:t}=S(),n=e?.id??null,r=t?.id??null,[i,a]=(0,L.useState)([]),[o,s]=(0,L.useState)(!0),[c,l]=(0,L.useState)(0),u=(0,L.useCallback)(e=>{if(!r)return;let t=V(r);l(e.filter(e=>new Date(e.created_at).getTime()>t).length)},[r]);return(0,L.useEffect)(()=>{if(!n||!r){a([]),l(0),s(!1);return}let e=!0,t=[];async function i(){s(!0);let{data:i}=await D(n,r);if(!e)return;let o=[...new Set(i.map(e=>e.batch_id).filter(Boolean))],c=new Map(i.map(e=>[e.batch_id,e.batches?.name||`Batch`]));if(!o.length){a([]),l(0),s(!1);return}let{data:d,error:f}=await p.from(`batch_announcements`).select(`*`).in(`batch_id`,o).order(`created_at`,{ascending:!1}).limit(30);if(!e)return;if(f){console.warn(`announcements_feed:list:failed`,f.message),a([]),l(0),s(!1);return}let m=(d??[]).map(e=>({...e,batch_name:c.get(e.batch_id)}));a(m),u(m),s(!1),o.forEach(n=>{t.push(ae(n,t=>{if(!e)return;let r={...t,batch_name:c.get(n)};a(e=>{if(e.some(e=>e.id===r.id))return e;let t=[r,...e].slice(0,30);return u(t),t})}))})}return i(),()=>{e=!1,t.forEach(e=>e())}},[n,r,u]),{announcements:i,loading:o,unreadCount:c,markSeen:(0,L.useCallback)(()=>{if(!r)return;let e=i.reduce((e,t)=>Math.max(e,new Date(t.created_at).getTime()||0),0);oe(r,Math.max(Date.now(),e,V(r))),l(0)},[r,i])}}var ce=[{prefix:`/vedic-math`,subject:`vedic`},{prefix:`/RubiksCube`,subject:`rubiks`},{prefix:`/chess`,subject:`chess`},{prefix:`/interactive-abacus`,subject:`abacus`},{prefix:`/abacus`,subject:`abacus`}];function le(e){return ce.find(t=>e===t.prefix||e.startsWith(`${t.prefix}/`)||e.startsWith(`${t.prefix}-`))?.subject??null}function H(e,t){return!e||!t?!0:t.has(e)}var ue=[{prefix:`/vedic-math`,feature:`vedic_math`},{prefix:`/interactive-abacus`,feature:`interactive_abacus`},{prefix:`/iabacus`,feature:`interactive_abacus`},{prefix:`/practice`,feature:`practice_playground`,exact:!0}];function U(e){return ue.find(t=>e===t.prefix||!t.exact&&(e.startsWith(`${t.prefix}/`)||e.startsWith(`${t.prefix}-`)))?.feature??null}function W(e,t){return e?!!t?.has(e):!0}function de(e,t,n){return H(le(e),t)&&W(U(e),n)}function fe(e,t,n){return e.filter(e=>de(e.path,t,n))}var pe=[{label:`Interactive Abacus`,path:`/interactive-abacus`,icon:`fa-calculator`},{label:`Digital Abacus`,path:`/abacus`,icon:`fa-desktop`},{label:`Vedic Math`,path:`/vedic-math`,icon:`fa-wand-magic-sparkles`},{label:`Rubik's Cube`,path:`/RubiksCube`,icon:`fa-cube`},{label:`Game Zone`,path:`/mental-flash-games`,icon:`fa-gamepad`}],me=[{label:`Home`,path:`/`,icon:`fa-house`,subject:`abacus`,exact:!0},{label:`Home`,path:`/chess`,icon:`fa-house`,subject:`chess`,exact:!0},{label:`Practice`,path:`/practice`,icon:`fa-dumbbell`,subject:`abacus`},{label:`Daily Practice`,path:`/practice-session`,icon:`fa-calendar-check`,subject:`abacus`,pair:`Daily Practice`},{label:`Daily Practice`,path:`/chess/practice`,icon:`fa-calendar-check`,subject:`chess`,pair:`Daily Practice`},{label:`Live Classes`,path:`/live-classes`,icon:`fa-video`},{label:`Chat & Notices`,path:`/classroom`,icon:`fa-comments`},{label:`Recordings`,path:`/recorded-lectures`,icon:`fa-circle-play`},{label:`E-Books`,path:`/e-book`,icon:`fa-book-open`},{label:`Exams`,path:`/exam`,icon:`fa-file-lines`}],G=[{label:`Learn Chess`,path:`/chess/learn`,icon:`fa-chess-knight`,subject:`chess`,also:[`/chess/openings`,`/chess/games`]},{label:`Puzzles`,path:`/chess/puzzles`,icon:`fa-puzzle-piece`,subject:`chess`},{label:`Play Chess`,path:`/chess/play`,icon:`fa-chess`,subject:`chess`}],he={abacus:`Abacus`,chess:`Chess`};function K(e){return{abacus:H(`abacus`,e),chess:H(`chess`,e)}}function ge(e,t){return e.subject===`chess`?t.chess:e.subject===`abacus`?t.abacus||!t.chess:!0}function _e(e,t){let n=K(e),r=n.abacus||!n.chess,i=r&&n.chess,a=e=>!i||!e.pair?e.label:`${he[e.subject]} ${e.pair}`;return{primary:me.filter(e=>ge(e,n)).filter(e=>!(i&&e.path===`/chess`)).filter(n=>de(n.path,e,t)||n.subject===`chess`).map(e=>({...e,label:a(e)})),tools:[...r?fe(pe,e,t):[],...n.chess?G:[]]}}function ve(e,t){return t===e.path?!0:e.exact?!1:e.also?.some(e=>t===e||t.startsWith(`${e}/`))?!0:t.startsWith(`${e.path}/`)}var q=m();function ye({toggleSidebar:e,hideSidebarToggle:t=!1}){let n=_(),{profile:r,institute:i,membership:a,signOut:o}=S(),[s,c]=(0,L.useState)(!1),[l,u]=(0,L.useState)(!1),[d,f]=(0,L.useState)(!1),[p,m]=(0,L.useState)(!1),h=(0,L.useRef)(null),g=(0,L.useRef)(null),v=(0,L.useRef)(null),{activeSubjects:y}=M(),b=K(y).chess,{announcements:x,loading:ee,unreadCount:C,markSeen:w}=se();(0,L.useEffect)(()=>{if(!l&&!d&&!p)return;function e(e){l&&h.current&&!h.current.contains(e.target)&&u(!1),d&&g.current&&!g.current.contains(e.target)&&f(!1),p&&v.current&&!v.current.contains(e.target)&&m(!1)}return document.addEventListener(`mousedown`,e),document.addEventListener(`touchstart`,e),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`touchstart`,e)}},[l,d,p]);function T(){m(e=>{let t=!e;return t&&w(),t})}let E=Array.isArray(i?.institute_branding)?i?.institute_branding[0]?.logo_url:i?.institute_branding?.logo_url,D=i?.name||`Student Portal`,O=r?.full_name||`Student`,te=r?.current_level===999?`All levels`:`Level ${r?.current_level??0}`,k=be(a?.id),A=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(e=>{console.error(`Error attempting to enable fullscreen: ${e.message}`)})};(0,L.useEffect)(()=>{let e=()=>{c(!!document.fullscreenElement)};return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]);async function j(){await o(),u(!1),n(`/login`)}return(0,q.jsxs)(`nav`,{className:`navbar`,children:[(0,q.jsxs)(`div`,{className:`nav-left`,children:[t?null:(0,q.jsx)(`button`,{className:`hamburger nav-hamburger-left`,onClick:e,"aria-label":`Toggle Sidebar`,children:(0,q.jsx)(`i`,{className:`fa-solid fa-bars`})}),(0,q.jsxs)(`div`,{className:`logo`,onClick:()=>n(`/`),children:[(0,q.jsx)(`span`,{className:`nav-brand-logo-wrapper`,children:E&&(0,q.jsx)(`img`,{src:E,alt:D,className:`nav-brand-logo`})}),(0,q.jsx)(`span`,{children:D})]})]}),(0,q.jsxs)(`div`,{className:`nav-actions`,children:[(0,q.jsxs)(`button`,{className:`nav-streak-pill`,onClick:()=>n(`/`),title:`Daily login streak`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-fire`}),(0,q.jsx)(`span`,{children:k})]}),(0,q.jsxs)(`div`,{className:`nav-notif`,ref:v,children:[(0,q.jsxs)(`button`,{className:`nav-notif-button`,onClick:T,"aria-label":`Open announcements`,"aria-expanded":p,title:`Announcements`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-bell`}),C>0?(0,q.jsx)(`span`,{className:`nav-notif-dot`}):null]}),p?(0,q.jsxs)(`div`,{className:`nav-notif-menu`,children:[(0,q.jsx)(`div`,{className:`nav-notif-header`,children:`Announcements`}),(0,q.jsx)(`div`,{className:`nav-notif-list`,children:ee?(0,q.jsx)(`div`,{className:`nav-notif-empty`,children:`Loading…`}):x.length===0?(0,q.jsx)(`div`,{className:`nav-notif-empty`,children:`No announcements yet.`}):x.map(e=>(0,q.jsxs)(`div`,{className:`nav-notif-item`,children:[e.title?(0,q.jsx)(`strong`,{children:e.title}):null,(0,q.jsx)(`p`,{children:e.message}),(0,q.jsxs)(`span`,{children:[e.batch_name,` · `,new Date(e.created_at).toLocaleString()]})]},e.id))}),(0,q.jsx)(`button`,{className:`nav-notif-viewall`,onClick:()=>{m(!1),n(`/classroom`)},children:`View in Classroom`})]}):null]}),(0,q.jsxs)(`div`,{className:`nav-profile`,ref:h,children:[(0,q.jsxs)(`button`,{className:`nav-profile-button`,onClick:()=>u(e=>!e),"aria-label":`Open profile menu`,"aria-expanded":l,children:[(0,q.jsx)(`span`,{className:`nav-profile-avatar`,children:(0,q.jsx)(`i`,{className:`fa-solid fa-user`})}),(0,q.jsxs)(`span`,{className:`nav-profile-text`,children:[(0,q.jsx)(`strong`,{children:O}),(0,q.jsx)(`span`,{children:te})]}),(0,q.jsx)(`i`,{className:`fa-solid fa-chevron-${l?`up`:`down`} nav-profile-caret`})]}),l?(0,q.jsxs)(`div`,{className:`nav-profile-menu`,children:[(0,q.jsxs)(`button`,{onClick:()=>{u(!1),n(`/profile`)},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-user`}),`Profile`]}),(0,q.jsxs)(`button`,{onClick:()=>{u(!1),n(`/achievement`)},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-medal`}),`Achievements`]}),b?(0,q.jsxs)(`button`,{onClick:()=>{u(!1),n(`/chess/certificates`)},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-award`}),`Certificates`]}):null,(0,q.jsxs)(`button`,{onClick:j,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),`Log Out`]})]}):null]}),(0,q.jsx)(`button`,{className:`fullscreen-toggle`,onClick:A,title:s?`Exit Fullscreen`:`Enter Fullscreen`,children:(0,q.jsx)(`i`,{className:`fa-solid ${s?`fa-compress`:`fa-expand`}`})})]}),(0,q.jsxs)(`div`,{className:`nav-more`,ref:g,children:[(0,q.jsx)(`button`,{className:`nav-more-button`,onClick:()=>f(e=>!e),"aria-label":`Open menu`,"aria-expanded":d,children:(0,q.jsx)(`i`,{className:`fa-solid fa-ellipsis-vertical`})}),d?(0,q.jsxs)(`div`,{className:`nav-more-menu`,children:[(0,q.jsxs)(`div`,{className:`nav-more-profile`,children:[(0,q.jsx)(`span`,{className:`nav-profile-avatar`,children:(0,q.jsx)(`i`,{className:`fa-solid fa-user`})}),(0,q.jsxs)(`div`,{className:`nav-more-profile-text`,children:[(0,q.jsx)(`strong`,{children:O}),(0,q.jsx)(`span`,{children:te})]})]}),(0,q.jsxs)(`button`,{onClick:()=>n(`/`),children:[(0,q.jsx)(`i`,{className:`fa-solid fa-fire`}),`Login streak`,(0,q.jsx)(`span`,{className:`nav-more-badge`,children:k})]}),(0,q.jsxs)(`button`,{onClick:()=>{f(!1),w(),n(`/classroom`)},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-bell`}),`Announcements`,C>0?(0,q.jsx)(`span`,{className:`nav-more-badge`,children:C}):null]}),(0,q.jsxs)(`button`,{onClick:()=>{A(),f(!1)},children:[(0,q.jsx)(`i`,{className:`fa-solid ${s?`fa-compress`:`fa-expand`}`}),s?`Exit fullscreen`:`Fullscreen`]}),(0,q.jsxs)(`button`,{onClick:()=>{f(!1),n(`/profile`)},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-user`}),`Profile`]}),(0,q.jsxs)(`button`,{onClick:()=>{f(!1),n(`/achievement`)},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-medal`}),`Achievements`]}),b?(0,q.jsxs)(`button`,{onClick:()=>{f(!1),n(`/chess/certificates`)},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-award`}),`Certificates`]}):null,(0,q.jsxs)(`button`,{onClick:j,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),`Log Out`]})]}):null]})]})}function be(e){if(!e)return 0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);return Number(t.streakCount||0)}catch{return 0}}var xe=70,Se=110,J=[`canvas`,`input`,`textarea`,`select`,`[contenteditable='true']`,`[data-no-pull-refresh]`,`.rubiks-viewport`,`.exam-question-panel`,`.ebook-draw-active`,`.yt-frame`,`.yt-playlist`].join(`,`);function Ce(e){if(!(e instanceof Element)||e.closest(J))return!0;for(let t=e;t&&t!==document.body;t=t.parentElement)if(t.scrollTop>0||getComputedStyle(t).touchAction===`none`)return!0;return!1}function we(){let[e,t]=(0,L.useState)(0),[n,r]=(0,L.useState)(!1),i=(0,L.useRef)(null),a=(0,L.useRef)(0);if((0,L.useEffect)(()=>{if(!(`ontouchstart`in window))return;function e(e){if(e.touches.length!==1||window.scrollY>0||Ce(e.target)){i.current=null;return}i.current=e.touches[0].clientY}function n(e){if(i.current==null)return;let n=e.touches[0].clientY-i.current;if(n<=0||window.scrollY>0){a.current=0,t(0);return}let r=Math.min(Se,n*.5);a.current=r,t(r),e.cancelable&&e.preventDefault()}function o(){i.current!=null&&(i.current=null,a.current>=xe?(r(!0),t(xe),window.location.reload()):t(0),a.current=0)}return window.addEventListener(`touchstart`,e,{passive:!0}),window.addEventListener(`touchmove`,n,{passive:!1}),window.addEventListener(`touchend`,o),window.addEventListener(`touchcancel`,o),()=>{window.removeEventListener(`touchstart`,e),window.removeEventListener(`touchmove`,n),window.removeEventListener(`touchend`,o),window.removeEventListener(`touchcancel`,o)}},[]),!e&&!n)return null;let o=e>=xe;return(0,q.jsx)(`div`,{"aria-hidden":`true`,style:{position:`fixed`,top:`calc(var(--nav-h, 56px) + 6px)`,left:`50%`,zIndex:1e4,width:38,height:38,borderRadius:`50%`,background:`var(--card-bg, #fff)`,boxShadow:`0 4px 14px rgba(0, 0, 0, 0.18)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`var(--primary-blue)`,transform:`translate(-50%, ${e-44}px)`,opacity:Math.min(1,e/xe),transition:`opacity 0.15s ease`,pointerEvents:`none`},children:(0,q.jsx)(`i`,{className:`fa-solid ${n?`fa-circle-notch fa-spin`:`fa-arrow-rotate-right`}`,style:{fontSize:`1rem`,transform:n?void 0:`rotate(${e/xe*270}deg)`,color:o||n?`var(--primary-blue)`:`var(--text-light)`}})})}function Te(e){return`${e}-${Math.random().toString(36).slice(2,10)}`}function Y(e,t){return console.warn(`chat:${e}:failed`,t?.message),{data:null,error:{message:t?.message||`Something went wrong.`}}}async function Ee(){let{data:e}=await p.auth.getSession();return e?.session?.user?.id??null}async function De(e){let{data:t,error:n}=await p.rpc(`chat_inbox`,{p_institute_id:e??null});return n?{...Y(`inbox`,n),data:[]}:{data:t??[],error:null}}async function Oe(e,t=``){let{data:n,error:r}=await p.rpc(`chat_contacts`,{p_institute_id:e??null,p_search:t||null});return r?{...Y(`contacts`,r),data:[]}:{data:n??[],error:null}}async function ke(e,t){let{data:n,error:r}=await p.rpc(`chat_start_direct`,{p_institute_id:e??null,p_target_membership_id:t});return r?Y(`start`,r):{data:n,error:null}}function Ae(e){return{id:e.id,body:e.message,sender_user_id:e.sender_user_id,sender_name:e.sender_name,sender_role:e.sender_role,created_at:e.created_at,reply_to_id:e.reply_to_id,forwarded:e.forwarded,edited_at:e.edited_at,deleted_at:e.deleted_at,pinned_at:e.pinned_at}}async function je(e){let{data:t,error:n}=await(e.kind===`batch`?p.from(`batch_chat_messages`).select(`*`).eq(`batch_id`,e.thread_id):p.from(`chat_messages`).select(`*`).eq(`conversation_id`,e.thread_id)).order(`created_at`,{ascending:!0}).limit(500);return n?{...Y(`messages`,n),data:[]}:{data:(t??[]).map(t=>e.kind===`batch`?Ae(t):t),error:null}}async function Me(e,t,n,r={}){let i=n.trim();if(!i)return{data:null,error:{message:`Message cannot be empty.`}};if(e.kind!==`batch`){let{data:t,error:n}=await p.rpc(`chat_send`,{p_conversation_id:e.thread_id,p_body:i,p_reply_to_id:r.replyToId||null,p_forwarded:!!r.forwarded});return n?Y(`send`,n):{data:t,error:null}}let a=await Ee(),{data:o}=await p.from(`memberships`).select(`role, profiles:user_id(full_name)`).eq(`user_id`,a).eq(`institute_id`,t).eq(`status`,`active`).limit(1).maybeSingle(),{data:s,error:c}=await p.from(`batch_chat_messages`).insert({institute_id:t,batch_id:e.thread_id,sender_user_id:a,sender_name:o?.profiles?.full_name||`User`,sender_role:o?.role||`student`,message:i,reply_to_id:r.replyToId||null,forwarded:!!r.forwarded}).select().single();return c?Y(`send_batch`,c):{data:Ae(s),error:null}}async function Ne(e,t,n,r=null){let{error:i}=await p.rpc(`chat_modify_message`,{p_message_id:e,p_is_batch:t,p_action:n,p_body:r});return i?Y(n,i):{data:!0,error:null}}async function Pe(e){let{error:t}=await p.rpc(`chat_mark_read`,{p_thread_id:e});t&&console.warn(`chat:mark_read:failed`,t.message)}async function Fe(e,t,n){let{error:r}=await p.rpc(`chat_set_blocked`,{p_institute_id:e,p_target_membership_id:t,p_blocked:n});return r?Y(`block`,r):{data:!0,error:null}}async function Ie(e){let{data:t}=await p.from(`chat_blocks`).select(`blocked_membership_id`).eq(`blocked_membership_id`,e).limit(1);return!!t?.length}async function Le(e,t,n){let{error:r}=await p.rpc(`chat_report_message`,{p_message_id:e,p_is_batch:t,p_reason:n||null});return r?Y(`report`,r):{data:!0,error:null}}function Re(e){try{let t=p.channel(Te(`chat-activity`)).on(`postgres_changes`,{event:`INSERT`,schema:`public`,table:`chat_messages`},t=>e({threadId:t.new.conversation_id,message:t.new})).on(`postgres_changes`,{event:`INSERT`,schema:`public`,table:`batch_chat_messages`},t=>e({threadId:t.new.batch_id,message:Ae(t.new)})).on(`postgres_changes`,{event:`UPDATE`,schema:`public`,table:`chat_messages`},t=>e({threadId:t.new.conversation_id,message:t.new,updated:!0})).on(`postgres_changes`,{event:`UPDATE`,schema:`public`,table:`batch_chat_messages`},t=>e({threadId:t.new.batch_id,message:Ae(t.new),updated:!0})).subscribe();return()=>p.removeChannel(t)}catch(e){return console.warn(`chat:subscribe:failed`,e.message),()=>{}}}var ze=`classroom_seen_at_`;function Be(e){try{return Number(localStorage.getItem(`${ze}${e}`))||0}catch{return 0}}function Ve(e){if(e)try{localStorage.setItem(`${ze}${e}`,String(Date.now()))}catch{}}function He(){let{institute:e,membership:t}=S(),n=e?.id??null,r=t?.id??null,[i,a]=(0,L.useState)(!1);return(0,L.useEffect)(()=>{if(!n||!r){a(!1);return}let e=!0,t=[];async function i(){let{data:i}=await D(n,r);if(!e)return;let o=[...new Set(i.map(e=>e.batch_id).filter(Boolean))],s=Be(r),[{data:c},{data:l}]=await Promise.all([De(n),o.length?p.from(`batch_announcements`).select(`created_at`).in(`batch_id`,o).order(`created_at`,{ascending:!1}).limit(1):Promise.resolve({data:[]})]);if(!e)return;let u=l?.[0]?.created_at?new Date(l[0].created_at).getTime():0;a(c.some(e=>e.unread>0)||u>s);let d=await Ee();t.push(Re(({message:t,updated:n})=>e&&!n&&t.sender_user_id!==d&&a(!0))),o.forEach(n=>{t.push(ae(n,()=>e&&a(!0)))})}return i(),()=>{e=!1,t.forEach(e=>e())}},[n,r]),i}function Ue({isOpen:e,toggleSidebar:t,minimized:n,onToggleMinimized:r}){let{signOut:i}=S(),{activeSubjects:a,enabledFeatures:o}=M(),c=He(),l=_(),u=s(),d=_e(a,o);function f(e){l(e),window.innerWidth<=1024&&t()}async function p(){await i(),l(`/login`),window.innerWidth<=1024&&t()}function m(e){return ve(e,u.pathname)}return(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`div`,{className:`sidebar-overlay ${e?`active`:``}`,onClick:t}),(0,q.jsxs)(`aside`,{className:`sidebar student-sidebar ${e?`active`:``} ${n?`minimized`:``}`,children:[r?(0,q.jsxs)(`button`,{type:`button`,className:`student-sidebar-collapse`,onClick:r,title:n?`Expand sidebar`:`Minimize sidebar`,"aria-label":n?`Expand sidebar`:`Minimize sidebar`,"aria-expanded":!n,children:[(0,q.jsx)(`i`,{className:`fa-solid ${n?`fa-angles-right`:`fa-angles-left`}`}),(0,q.jsx)(`span`,{children:`Minimize`})]}):null,(0,q.jsxs)(`nav`,{className:`student-sidebar-scroll`,children:[(0,q.jsx)(We,{title:`Learn`,links:d.primary,isActive:m,onNavigate:f,unreadPaths:c?[`/classroom`]:[]}),(0,q.jsx)(We,{title:`Tools`,links:d.tools,isActive:m,onNavigate:f})]}),(0,q.jsxs)(`button`,{className:`student-logout`,onClick:p,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,q.jsx)(`span`,{children:`Log Out`})]})]})]})}function We({title:e,links:t,isActive:n,onNavigate:r,unreadPaths:i=[]}){return(0,q.jsxs)(`section`,{className:`student-sidebar-group`,children:[(0,q.jsx)(`div`,{className:`student-sidebar-label`,children:e}),(0,q.jsx)(`div`,{className:`student-sidebar-links`,children:t.map(e=>(0,q.jsxs)(`button`,{className:`student-sidebar-link ${n(e)?`active`:``}`,onClick:()=>r(e.path),title:e.label,children:[(0,q.jsxs)(`span`,{className:`student-link-icon`,children:[(0,q.jsx)(`i`,{className:`fa-solid ${e.icon}`}),i.includes(e.path)?(0,q.jsx)(`span`,{className:`nav-unread-dot`}):null]}),(0,q.jsx)(`span`,{children:e.label})]},e.path))})]})}function Ge(){let e=_(),t=s(),{activeSubjects:n,enabledFeatures:r}=M(),i=He(),a=_e(n,r);return(0,q.jsx)(`nav`,{className:`student-topnav`,"aria-label":`Primary`,children:(0,q.jsx)(`div`,{className:`student-topnav-scroll`,children:[...a.primary,...a.tools].map(n=>(0,q.jsxs)(`button`,{type:`button`,className:`student-topnav-link ${ve(n,t.pathname)?`active`:``}`,onClick:()=>e(n.path),children:[(0,q.jsxs)(`span`,{style:{position:`relative`,display:`inline-flex`},children:[(0,q.jsx)(`i`,{className:`fa-solid ${n.icon}`}),n.path===`/classroom`&&i?(0,q.jsx)(`span`,{className:`nav-unread-dot`}):null]}),(0,q.jsx)(`span`,{children:n.label})]},n.path))})})}var Ke=e(ie(),1);function qe(){let{profile:e}=S(),[t,n]=(0,L.useState)(!1);(0,L.useEffect)(()=>{if(!e){console.log(`[BirthdayCelebration] No profile loaded`);return}let t=e.extra_details?.dob||e.extra_details?.date_of_birth;if(console.log(`[BirthdayCelebration] Found DOB:`,t,`extra_details:`,e.extra_details),!t)return;let r=t.split(`-`);if(r.length===3){let e=new Date,t=e.getMonth()+1,i=e.getDate(),a=parseInt(r[1],10),o=parseInt(r[2],10);console.log(`[BirthdayCelebration] Checking Date match: Today is ${t}/${i}, Born: ${a}/${o}`);let s=a===t&&o===i;console.log(`[BirthdayCelebration] Match result:`,s),s&&n(!0)}},[e]);let r=()=>{n(!1)};if(!t||!e)return null;let i=e.full_name||e.name||`Student`,a=Array.from({length:60}).map((e,t)=>{let n=Math.random()*100,r=Math.random()*4,i=Math.random()*3+2,a=Math.random()*.6+.4,o=[`#ff0a54`,`#ff477e`,`#ff7096`,`#ff85a1`,`#fbb1bd`,`#f9bec7`,`#3b82f6`,`#10b981`,`#fbbf24`,`#8b5cf6`],s=o[Math.floor(Math.random()*o.length)],c=[`circle`,`square`,`triangle`],l=c[Math.floor(Math.random()*c.length)];return{left:`${n}%`,delay:`${r}s`,duration:`${i}s`,scale:a,color:s,shape:l,id:t}});return(0,Ke.createPortal)((0,q.jsxs)(`div`,{style:Je.overlay,children:[(0,q.jsx)(`style`,{children:`
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
        `}),a.map(e=>{let t=`0`;e.shape===`circle`&&(t=`50%`);let n=`10px`,r=`10px`;return e.shape===`triangle`&&(n=`0`,r=`0`),(0,q.jsx)(`div`,{className:`confetti-particle`,style:{left:e.left,animationDelay:e.delay,animationDuration:e.duration,transform:`scale(${e.scale})`,backgroundColor:e.shape===`triangle`?`transparent`:e.color,borderRadius:t,width:e.shape===`triangle`?void 0:n,height:e.shape===`triangle`?void 0:r,borderLeft:e.shape===`triangle`?`6px solid transparent`:void 0,borderRight:e.shape===`triangle`?`6px solid transparent`:void 0,borderBottom:e.shape===`triangle`?`10px solid ${e.color}`:void 0}},e.id)}),(0,q.jsx)(`div`,{className:`birthday-modal`,style:Je.modal,children:(0,q.jsxs)(`div`,{style:{position:`relative`,zIndex:2,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`24px`},children:[(0,q.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,justifyContent:`center`},children:[(0,q.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`0s`},children:`🎈`}),(0,q.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`0.5s`,fontSize:`3.5rem`},children:`🎂`}),(0,q.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`1s`},children:`🎉`})]}),(0,q.jsxs)(`h2`,{style:Je.title,children:[`Happy Birthday, `,i,`!`]}),(0,q.jsx)(`p`,{style:Je.message,children:`We wish you a fantastic year ahead filled with happiness, learning, and success. Have a wonderful day! 🌟✨`}),(0,q.jsx)(`button`,{onClick:r,style:Je.button,children:`Thank You! ❤️`})]})})]}),document.body)}var Je={overlay:{position:`fixed`,top:0,left:0,right:0,bottom:0,backgroundColor:`rgba(8, 10, 18, 0.7)`,zIndex:999999,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`20px`,boxSizing:`border-box`},modal:{width:`100%`,maxWidth:`520px`,borderRadius:`28px`,padding:`48px 36px`,textAlign:`center`,boxSizing:`border-box`,position:`relative`,overflow:`hidden`},title:{fontFamily:`"Sora", sans-serif`,fontSize:`2.25rem`,fontWeight:`900`,background:`linear-gradient(135deg, #a5b4fc, #6366f1, #eab308)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,margin:0,lineHeight:1.25},message:{color:`#94a3b8`,fontSize:`1.05rem`,fontWeight:`500`,lineHeight:1.6,margin:`4px 0 8px 0`},button:{border:0,background:`linear-gradient(135deg, #6366f1, #4f46e5)`,color:`white`,borderRadius:`16px`,padding:`14px 38px`,fontSize:`1.02rem`,fontWeight:`800`,cursor:`pointer`,boxShadow:`0 10px 25px rgba(99, 102, 241, 0.4)`,transition:`all 0.2s ease`}},Ye=60,Xe={border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`14px 18px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.9rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`};function Ze({email:e,onCancel:t}){let{user:n,signOut:r,institute:i}=S(),[a,o]=(0,L.useState)(!1),[s,c]=(0,L.useState)(!1),[l,u]=(0,L.useState)(0),[d,f]=(0,L.useState)(``),[m,h]=(0,L.useState)(``),_=(0,L.useRef)(null),v=e||n?.email||``,y=!!n;(0,L.useEffect)(()=>{if(!(l<=0))return _.current=window.setInterval(()=>{u(e=>e<=1?0:e-1)},1e3),()=>window.clearInterval(_.current)},[l]);async function b(){if(a||l>0||!v)return;o(!0),h(``),f(``);let{error:e}=await p.functions.invoke(`student-self-register`,{body:{mode:`resend`,instituteId:i?.id,email:v}});if(o(!1),e){let t=e.message;try{let n=await e.context?.json?.();n?.error&&(t=n.error)}catch{}h(t||`Could not send the confirmation email. Please try again.`);return}f(`Confirmation email sent to ${v}. Open it and click the link inside.`),u(Ye)}async function x(){if(s)return;c(!0),h(``),f(``);let{data:e,error:t}=await p.auth.refreshSession();if(t){c(!1),h(`Could not check your status. Please try again in a moment.`);return}if(e?.user?.email_confirmed_at){window.location.reload();return}c(!1),h(`This email is still unverified. Please click the link in the confirmation email first.`)}return(0,q.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,q.jsx)(g,{}),(0,q.jsx)(`style`,{children:`
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
      `}),(0,q.jsxs)(`div`,{className:`verify-email-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,q.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent)`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-envelope-circle-check`})})}),(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,q.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Email Not Verified`]})}),(0,q.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:`Confirm Your Email`}),(0,q.jsxs)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:[`We sent a confirmation link to`,` `,(0,q.jsx)(`strong`,{style:{color:`var(--dark-blue, #0f172a)`,wordBreak:`break-all`},children:v}),`. Open that email and click the link to unlock your panel. Check your spam folder if you can't find it.`]}),d?(0,q.jsxs)(`p`,{style:{color:`#15803d`,background:`#dcfce7`,border:`1px solid #bbf7d0`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,q.jsx)(`span`,{children:d})]}):null,m?(0,q.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err, #c62828) 20%, transparent)`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,q.jsx)(`span`,{children:m})]}):null,(0,q.jsx)(`button`,{className:`verify-btn-primary`,type:`button`,onClick:b,disabled:a||l>0,style:{marginTop:`26px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:a||l>0?`not-allowed`:`pointer`,opacity:a||l>0?.65:1,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:a?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,q.jsx)(`span`,{children:`Sending...`})]}):l>0?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-regular fa-clock`}),(0,q.jsxs)(`span`,{children:[`Resend in `,l,`s`]})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-paper-plane`}),(0,q.jsx)(`span`,{children:`Resend confirmation email`})]})}),(0,q.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,marginTop:`12px`},children:[y?(0,q.jsx)(`button`,{className:`verify-btn-secondary`,type:`button`,onClick:x,disabled:s,style:{...Xe,flex:1,opacity:s?.7:1,cursor:s?`not-allowed`:`pointer`},children:s?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,q.jsx)(`span`,{children:`Checking...`})]}):(0,q.jsx)(`span`,{children:`I've verified`})}):null,(0,q.jsx)(`button`,{className:`verify-btn-secondary`,type:`button`,onClick:y?r:t,style:{...Xe,flex:y?void 0:1,color:`var(--text-light, #64748b)`},children:y?`Log out`:`Back to sign in`})]})]})]})}async function Qe(e,t){let{data:n,error:r}=await p.rpc(`resolve_branch_code_for_signup`,{p_institute_id:e,p_code:t});return r?{branch:null,error:r.message}:{branch:n?.[0]||null,error:null}}async function $e({instituteId:e,email:t,password:n,fullName:r,phone:i,branchId:a}){let{data:o,error:s}=await p.functions.invoke(`student-self-register`,{body:{instituteId:e,email:t,password:n,fullName:r,phone:i||null,branchId:a||null}});if(s){let e=s.message;try{let t=await s.context?.json?.();t?.error&&(e=t.error)}catch{}return{ok:!1,error:e||`Could not create your account.`}}return o?.ok?{ok:!0,alreadyPending:!!o.alreadyPending}:{ok:!1,error:o?.error||`Could not submit your registration.`}}async function et({email:e,instituteId:t}){let{error:n}=await p.functions.invoke(`send-password-reset`,{body:{email:e,instituteId:t||null,redirectTo:`${window.location.origin}/reset-password`}});if(!n)return{error:null};let r=n.message;try{let e=await n.context?.json?.();e?.error&&(r=e.error)}catch{}return{error:{message:r||`Could not send the reset email. Please try again.`}}}function tt(e){return e?e.code===`email_not_confirmed`?!0:/email not confirmed/i.test(e.message||``):!1}function nt(){let e=_(),t=s(),{login:n,institute:r,instituteReady:i,user:a,membership:o,membershipInvalid:l,signOut:u}=S(),[d,f]=(0,L.useState)(`signin`),[p,m]=(0,L.useState)(``),[h,v]=(0,L.useState)(``),[y,x]=(0,L.useState)(!1),[ee,C]=(0,L.useState)(null),[w,T]=(0,L.useState)(!1),[E,D]=(0,L.useState)(!1),[O,te]=(0,L.useState)(!1),[k,A]=(0,L.useState)(!1),[j,M]=(0,L.useState)(null),[N,P]=(0,L.useState)(null),[F,ne]=(0,L.useState)(!1);(0,L.useEffect)(()=>{let e=setTimeout(()=>ne(!0),1e3);return()=>clearTimeout(e)},[]);let re=!F||!i,[ie,I]=(0,L.useState)(``),[R,z]=(0,L.useState)(``),[ae,B]=(0,L.useState)(``),[V,oe]=(0,L.useState)(``),[se,ce]=(0,L.useState)(``),[le,H]=(0,L.useState)(!1),[ue,U]=(0,L.useState)(null),[W,de]=(0,L.useState)(null),[fe,pe]=(0,L.useState)(``),[me,G]=(0,L.useState)(`idle`),[he,K]=(0,L.useState)(null);async function ge(e){let t=e.trim();if(!t)return G(`idle`),K(null),null;if(he?.forCode===t)return he;G(`checking`);let{branch:n}=await Qe(r.id,t);if(n){let e={...n,forCode:t};return K(e),G(`valid`),e}return K(null),G(`invalid`),null}(0,L.useEffect)(()=>(document.body.classList.add(`login-body`),()=>{document.body.classList.remove(`login-body`)}),[]),(0,L.useEffect)(()=>{try{localStorage.getItem(`portal_evicted_notice`)&&(localStorage.removeItem(b),M(`You were signed out because this account was opened in another browser.`))}catch{}},[]);let _e=()=>{let e=t.state?.from;return e&&e!==`/login`&&!e.startsWith(`/login?`)?e:`/`};(0,L.useEffect)(()=>{a&&o&&e(_e(),{replace:!0})},[a,o,e,t.state]),(0,L.useEffect)(()=>{l&&(C(`This account does not belong to this institute. Please sign in on your own institute's portal.`),x(!1),u().catch(()=>{}))},[l,u]);async function ve(t){t.preventDefault(),x(!0),C(null);try{let t=await n(p,h);if(t?.error){if(tt(t.error)){P(p),x(!1);return}C(t.error.message||`Failed to sign in. Please check your credentials.`),x(!1)}else e(_e(),{replace:!0})}catch(e){console.error(`Login submit error:`,e),C(e?.message||`An unexpected error occurred. Please try again.`),x(!1)}}async function ye(){if(C(null),M(null),!p){C(`Enter your student email above, then tap 'Forgot password?'.`);return}A(!0);let{error:e}=await et({email:p,instituteId:r?.id});if(A(!1),e){C(e.message);return}M(`If an account exists for ${p}, a reset link is on its way.`)}async function be(e){if(e.preventDefault(),U(null),!r?.id){U(`This portal is not configured for a valid institute.`);return}if(V.length<6){U(`Password must be at least 6 characters.`);return}if(V!==se){U(`Passwords do not match.`);return}let t=he;if(fe.trim()&&(t=await ge(fe),!t)){U(`That branch code isn't valid. Please check it and try again.`);return}H(!0);try{let e=await $e({instituteId:r.id,email:R,password:V,fullName:ie,phone:ae,branchId:t?.id||null});if(!e.ok){U(e.error),H(!1);return}de(R)}catch(e){console.error(`Registration submit error:`,e),U(e?.message||`An unexpected error occurred. Please try again.`)}finally{H(!1)}}function xe(){I(``),z(``),B(``),oe(``),ce(``),U(null),de(null),pe(``),G(`idle`),K(null)}let Se=Array.isArray(r?.institute_branding)?r?.institute_branding[0]:r?.institute_branding,J=Se?.logo_url;return(0,q.jsxs)(`div`,{className:`login-page-container layout-${Se?.login_layout||`split_screen`}`,children:[re&&(0,q.jsxs)(`div`,{className:`login-splash-overlay`,children:[J&&(0,q.jsx)(`img`,{src:J,alt:``,className:`login-splash-logo`}),(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin login-splash-spinner`})]}),N?(0,q.jsx)(Ze,{email:N,onCancel:()=>P(null)}):null,(0,q.jsx)(g,{}),(0,q.jsxs)(`div`,{className:`login-left-pane`,children:[(0,q.jsx)(`div`,{className:`login-blob-1`}),(0,q.jsx)(`div`,{className:`login-blob-2`}),(0,q.jsxs)(`div`,{className:`login-left-header`,children:[(0,q.jsx)(`div`,{className:`login-left-logo-wrapper`,children:J&&(0,q.jsx)(`img`,{src:J,alt:`Institute Logo`,className:`login-left-logo`})}),(0,q.jsx)(`span`,{className:`login-left-brand-name`,children:r?r.name:`Erpli Wave`})]}),(0,q.jsxs)(`div`,{className:`login-left-content`,children:[(0,q.jsxs)(`h2`,{className:`login-left-title`,children:[`Unlock the Power of `,(0,q.jsx)(`br`,{}),(0,q.jsx)(`span`,{style:{color:`var(--gold)`},children:`Mental Math`})]}),(0,q.jsx)(`p`,{className:`login-left-subtitle`,children:`Experience the ultimate training portal. Boost your calculation speed, complete assignments, challenge friends, and track your analytical growth.`}),(0,q.jsxs)(`div`,{className:`showcase-glass-card`,children:[(0,q.jsx)(`span`,{className:`showcase-badge`,children:`Student Platform`}),(0,q.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,q.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-gamepad`,style:{color:`var(--gold)`}}),`Interactive Games`]}),(0,q.jsx)(`span`,{className:`showcase-stat-value`,children:`Abacus & Flash`})]}),(0,q.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,q.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-trophy`,style:{color:`var(--gold)`}}),`Weekly Leaderboards`]}),(0,q.jsx)(`span`,{className:`showcase-stat-value`,children:`Global Rankings`})]}),(0,q.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,q.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-chart-line`,style:{color:`var(--gold)`}}),`Progress Analytics`]}),(0,q.jsx)(`span`,{className:`showcase-stat-value`,children:`Detailed Insights`})]})]})]}),(0,q.jsxs)(`div`,{className:`login-left-footer`,children:[`© `,new Date().getFullYear(),` `,r?r.name:`Erpli Wave`,`. All rights reserved.`]})]}),(0,q.jsx)(`div`,{className:`login-right-pane`,children:(0,q.jsxs)(`div`,{className:`login-form-card`,children:[(0,q.jsxs)(`div`,{className:`login-logo-header`,children:[(0,q.jsx)(`div`,{className:`login-logo-container`,children:J&&(0,q.jsx)(`img`,{src:J,alt:`Institute Logo`,className:`login-main-logo`})}),(0,q.jsx)(`h1`,{className:`login-title-text`,children:r?r.name:`Student Portal`}),(0,q.jsx)(`p`,{className:`login-subtitle-text`,children:d===`register`?`Create your account to request access`:`Sign in to access your mental math dashboard`})]}),!W&&(0,q.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,marginBottom:`24px`,background:`rgba(148, 163, 184, 0.14)`,borderRadius:`14px`,padding:`4px`},children:[(0,q.jsx)(`button`,{type:`button`,onClick:()=>{f(`signin`),C(null)},style:{flex:1,border:`none`,borderRadius:`10px`,padding:`10px 12px`,fontWeight:800,fontSize:`0.85rem`,cursor:`pointer`,background:d===`signin`?`var(--card-bg, #ffffff)`:`transparent`,color:d===`signin`?`var(--dark-blue, #0f172a)`:`var(--text-light, #64748b)`,boxShadow:d===`signin`?`0 1px 4px rgba(0,0,0,0.08)`:`none`},children:`Sign In`}),(0,q.jsx)(`button`,{type:`button`,onClick:()=>{f(`register`),C(null)},style:{flex:1,border:`none`,borderRadius:`10px`,padding:`10px 12px`,fontWeight:800,fontSize:`0.85rem`,cursor:`pointer`,background:d===`register`?`var(--card-bg, #ffffff)`:`transparent`,color:d===`register`?`var(--dark-blue, #0f172a)`:`var(--text-light, #64748b)`,boxShadow:d===`register`?`0 1px 4px rgba(0,0,0,0.08)`:`none`},children:`Register`})]}),d===`signin`&&ee&&(0,q.jsxs)(`div`,{style:{background:`#fef2f2`,color:`#dc2626`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:`600`,marginBottom:`24px`,border:`1px solid #fecaca`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1rem`}}),(0,q.jsx)(`span`,{children:ee})]}),d===`signin`&&j&&(0,q.jsxs)(`div`,{style:{background:`#f0fdf4`,color:`#15803d`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:600,marginBottom:`24px`,border:`1px solid #bbf7d0`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-envelope-circle-check`,style:{fontSize:`1rem`}}),(0,q.jsx)(`span`,{children:j})]}),d===`register`?W?(0,q.jsxs)(`div`,{style:{textAlign:`left`},children:[(0,q.jsxs)(`div`,{style:{background:`#f0fdf4`,color:`#15803d`,padding:`16px`,borderRadius:`14px`,fontSize:`0.88rem`,fontWeight:600,marginBottom:`20px`,border:`1px solid #bbf7d0`,display:`flex`,alignItems:`flex-start`,gap:`10px`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`,style:{fontSize:`1.1rem`,marginTop:`2px`}}),(0,q.jsxs)(`span`,{children:[`Registration submitted for `,(0,q.jsx)(`strong`,{children:W}),`. Check your inbox to verify your email, then wait for your institute admin to approve your account — you'll be able to sign in once they do.`]})]}),(0,q.jsx)(`button`,{type:`button`,onClick:()=>{xe(),f(`signin`)},className:`login-submit-button`,children:`Back to Sign In`})]}):(0,q.jsxs)(`form`,{onSubmit:be,children:[ue&&(0,q.jsxs)(`div`,{style:{background:`#fef2f2`,color:`#dc2626`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:600,marginBottom:`20px`,border:`1px solid #fecaca`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1rem`}}),(0,q.jsx)(`span`,{children:ue})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Full Name`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-regular fa-user login-input-icon`}),(0,q.jsx)(`input`,{type:`text`,value:ie,onChange:e=>I(e.target.value),placeholder:`Your full name`,required:!0,className:`login-input-field`})]})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Email`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-regular fa-envelope login-input-icon`}),(0,q.jsx)(`input`,{type:`email`,value:R,onChange:e=>z(e.target.value),placeholder:`student@example.com`,required:!0,className:`login-input-field`})]})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Phone (optional)`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-phone login-input-icon`}),(0,q.jsx)(`input`,{type:`tel`,value:ae,onChange:e=>B(e.target.value),placeholder:`Your phone number`,className:`login-input-field`})]})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Branch Code (optional)`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-hashtag login-input-icon`}),(0,q.jsx)(`input`,{type:`text`,value:fe,onChange:e=>{pe(e.target.value),G(`idle`),K(null)},onBlur:e=>ge(e.target.value),placeholder:`Code given by your branch/school`,className:`login-input-field`})]}),me===`checking`&&(0,q.jsxs)(`div`,{className:`branch-picker-message`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),`Checking code...`]}),me===`valid`&&he&&(0,q.jsxs)(`div`,{className:`branch-picker-message branch-picker-message-success`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`}),he.name]}),me===`invalid`&&(0,q.jsxs)(`div`,{className:`branch-picker-message branch-picker-message-error`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),`Invalid branch code.`]})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Password`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,q.jsx)(`input`,{type:`password`,value:V,onChange:e=>oe(e.target.value),placeholder:`At least 6 characters`,required:!0,minLength:6,className:`login-input-field`})]})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,style:{marginBottom:`16px`},children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Confirm Password`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,q.jsx)(`input`,{type:`password`,value:se,onChange:e=>ce(e.target.value),placeholder:`Re-enter your password`,required:!0,minLength:6,className:`login-input-field`})]})]}),(0,q.jsx)(`button`,{type:`submit`,disabled:le||!i||!r?.id||me===`checking`,className:`login-submit-button`,children:le?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,q.jsx)(`span`,{children:`Submitting...`})]}):(0,q.jsx)(`span`,{children:`Request Access`})})]}):(0,q.jsxs)(`form`,{onSubmit:ve,children:[(0,q.jsxs)(`div`,{className:`login-input-group`,children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Student Email`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper ${E?`login-input-wrapper-focused`:``}`,children:[(0,q.jsx)(`i`,{className:`fa-regular fa-envelope login-input-icon`}),(0,q.jsx)(`input`,{type:`email`,value:p,onChange:e=>m(e.target.value),onFocus:()=>D(!0),onBlur:()=>D(!1),placeholder:`student@example.com`,required:!0,className:`login-input-field`})]})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,style:{marginBottom:`16px`},children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Password`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper ${O?`login-input-wrapper-focused`:``}`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,q.jsx)(`input`,{type:w?`text`:`password`,value:h,onChange:e=>v(e.target.value),onFocus:()=>te(!0),onBlur:()=>te(!1),placeholder:`••••••••`,required:!0,className:`login-input-field`}),(0,q.jsx)(`button`,{type:`button`,onClick:()=>T(!w),className:`login-password-toggle`,children:(0,q.jsx)(`i`,{className:w?`fa-solid fa-eye-slash`:`fa-solid fa-eye`})})]})]}),(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,marginBottom:`24px`},children:(0,q.jsx)(`button`,{type:`button`,onClick:ye,disabled:k,style:{background:`none`,border:`none`,padding:0,cursor:k?`default`:`pointer`,color:`var(--primary-blue, #2563eb)`,fontSize:`0.82rem`,fontWeight:700},children:k?`Sending reset link...`:`Forgot password?`})}),(0,q.jsx)(`button`,{type:`submit`,disabled:y,className:`login-submit-button`,children:y?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,q.jsx)(`span`,{children:`Signing in...`})]}):(0,q.jsx)(`span`,{children:`Sign In`})})]}),(0,q.jsxs)(`p`,{style:{textAlign:`center`,marginTop:16,fontSize:13},children:[`By signing in you agree to our`,` `,(0,q.jsx)(c,{to:`/policies#terms`,children:`Terms & Conditions`}),` `,`and`,` `,(0,q.jsx)(c,{to:`/policies#privacy`,children:`Privacy Policy`}),`.`]})]})})]})}function rt(e){return e?e.code===`email_not_confirmed`?!0:/email not confirmed/i.test(e.message||``):!1}function it(){let e=_(),t=s(),{login:n,institute:r,instituteReady:i,user:a,membership:o,membershipInvalid:c,signOut:l}=S(),[u,d]=(0,L.useState)(`signin`),[f,p]=(0,L.useState)(``),[m,h]=(0,L.useState)(``),[g,v]=(0,L.useState)(!1),[y,x]=(0,L.useState)(null),[ee,C]=(0,L.useState)(null),[w,T]=(0,L.useState)(!1),[E,D]=(0,L.useState)(null),[O,te]=(0,L.useState)(!1);(0,L.useEffect)(()=>{let e=setTimeout(()=>te(!0),1e3);return()=>clearTimeout(e)},[]);let k=!O||!i,[A,j]=(0,L.useState)({fullName:``,email:``,phone:``,password:``,confirmPassword:``,branchCode:``}),[M,N]=(0,L.useState)(!1),[P,F]=(0,L.useState)(null),[ne,re]=(0,L.useState)(null),[ie,I]=(0,L.useState)(`idle`),[R,z]=(0,L.useState)(null);function ae(e,t){j(n=>({...n,[e]:t})),e===`branchCode`&&(I(`idle`),z(null))}async function B(e){let t=e.trim();if(!t)return I(`idle`),z(null),null;if(R?.forCode===t)return R;I(`checking`);let{branch:n}=await Qe(r.id,t);if(n){let e={...n,forCode:t};return z(e),I(`valid`),e}return z(null),I(`invalid`),null}(0,L.useEffect)(()=>{try{localStorage.getItem(`portal_evicted_notice`)&&(localStorage.removeItem(b),C(`You were signed out because this account was opened in another browser.`))}catch{}},[]);let V=()=>{let e=t.state?.from;return e&&e!==`/login`&&!e.startsWith(`/login?`)?e:`/`};(0,L.useEffect)(()=>{a&&o&&e(V(),{replace:!0})},[a,o,e,t.state]),(0,L.useEffect)(()=>{c&&(x(`This account does not belong to this institute. Please sign in on your own institute's portal.`),v(!1),l().catch(()=>{}))},[c,l]);async function oe(t){t.preventDefault(),v(!0),x(null);try{let t=await n(f,m);if(t?.error){if(rt(t.error)){D(f),v(!1);return}x(t.error.message||`Failed to sign in. Please check your credentials.`),v(!1)}else e(V(),{replace:!0})}catch(e){console.error(`Login submit error:`,e),x(e?.message||`An unexpected error occurred. Please try again.`),v(!1)}}async function se(){if(x(null),C(null),!f){x(`Enter your student email above, then tap 'Forgot password?'.`);return}T(!0);let{error:e}=await et({email:f,instituteId:r?.id});if(T(!1),e){x(e.message);return}C(`If an account exists for ${f}, a reset link is on its way.`)}async function ce(e){if(e.preventDefault(),F(null),!r?.id){F(`This portal is not configured for a valid institute.`);return}if(A.password.length<6){F(`Password must be at least 6 characters.`);return}if(A.password!==A.confirmPassword){F(`Passwords do not match.`);return}let t=R;if(A.branchCode.trim()&&(t=await B(A.branchCode),!t)){F(`That branch code isn't valid. Please check it and try again.`);return}N(!0);try{let e=await $e({instituteId:r.id,email:A.email,password:A.password,fullName:A.fullName,phone:A.phone,branchId:t?.id||null});if(!e.ok){F(e.error);return}re(A.email)}catch(e){console.error(`Registration submit error:`,e),F(e?.message||`An unexpected error occurred. Please try again.`)}finally{N(!1)}}function le(){j({fullName:``,email:``,phone:``,password:``,confirmPassword:``,branchCode:``}),F(null),re(null),I(`idle`),z(null),d(`signin`)}function H(e){d(e),x(null)}return{institute:r,instituteReady:i,logoUrl:(Array.isArray(r?.institute_branding)?r?.institute_branding[0]:r?.institute_branding)?.logo_url,showSplash:k,mode:u,switchMode:H,email:f,setEmail:p,password:m,setPassword:h,loading:g,error:y,notice:ee,resetSending:w,unverifiedEmail:E,setUnverifiedEmail:D,handleSubmit:oe,handleForgotPassword:se,reg:A,setRegField:ae,regLoading:M,regError:P,regSubmittedEmail:ne,branchCodeStatus:ie,resolvedBranch:R,checkBranchCode:B,handleRegisterSubmit:ce,backToSignIn:le}}var at=Array.from({length:28},(e,t)=>({left:t*37%100,top:t*53%90,size:t%3+1,delay:t%7*.5}));function X({label:e,icon:t,children:n,trailing:r}){return(0,q.jsxs)(`label`,{className:`sg-group`,children:[(0,q.jsx)(`span`,{className:`sg-label`,children:e}),(0,q.jsxs)(`span`,{className:`sg-field`,children:[(0,q.jsx)(`i`,{className:`${t} sg-field-icon`}),n,r]})]})}function ot(){let e=it(),[t,n]=(0,L.useState)(!1),r=e.institute?.name?.trim()||`Star Genius Abacus`,i=e.logoUrl;return(0,L.useEffect)(()=>(document.body.classList.add(`sg-login-body`),()=>document.body.classList.remove(`sg-login-body`)),[]),(0,q.jsxs)(`div`,{className:`sg-login`,children:[e.showSplash&&(0,q.jsx)(`div`,{className:`sg-splash`,children:(0,q.jsx)(`div`,{className:`sg-logo sg-logo-splash`,children:i&&(0,q.jsx)(`img`,{src:i,alt:``})})}),e.unverifiedEmail&&(0,q.jsx)(Ze,{email:e.unverifiedEmail,onCancel:()=>e.setUnverifiedEmail(null)}),(0,q.jsxs)(`header`,{className:`sg-hero`,children:[(0,q.jsxs)(`div`,{className:`sg-sky`,"aria-hidden":`true`,children:[at.map((e,t)=>(0,q.jsx)(`span`,{className:`sg-star`,style:{left:`${e.left}%`,top:`${e.top}%`,width:e.size,height:e.size,animationDelay:`${e.delay}s`}},t)),(0,q.jsx)(`span`,{className:`sg-shooting`})]}),(0,q.jsx)(`div`,{className:`sg-logo sg-logo-hero`,children:i&&(0,q.jsx)(`img`,{src:i,alt:`Institute logo`})}),(0,q.jsx)(`h1`,{className:`sg-title`,children:r}),(0,q.jsxs)(`p`,{className:`sg-tagline`,children:[`Learn `,(0,q.jsx)(`span`,{children:`·`}),` Practice `,(0,q.jsx)(`span`,{children:`·`}),` Shine`]})]}),(0,q.jsxs)(`main`,{className:`sg-sheet`,children:[!e.regSubmittedEmail&&(0,q.jsxs)(`div`,{className:`sg-switch`,role:`tablist`,children:[(0,q.jsx)(`button`,{type:`button`,className:e.mode===`signin`?`is-active`:``,onClick:()=>e.switchMode(`signin`),children:`Sign In`}),(0,q.jsx)(`button`,{type:`button`,className:e.mode===`register`?`is-active`:``,onClick:()=>e.switchMode(`register`),children:`Register`})]}),e.mode===`signin`?(0,q.jsxs)(`form`,{onSubmit:e.handleSubmit,className:`sg-form`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{className:`sg-heading`,children:`Welcome back`}),(0,q.jsx)(`p`,{className:`sg-muted`,children:`Sign in to continue to your account.`})]}),e.error&&(0,q.jsxs)(`div`,{className:`sg-alert sg-alert-error`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),e.error]}),e.notice&&(0,q.jsxs)(`div`,{className:`sg-alert sg-alert-ok`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`}),e.notice]}),(0,q.jsx)(X,{label:`Email`,icon:`fa-regular fa-envelope`,children:(0,q.jsx)(`input`,{type:`email`,value:e.email,onChange:t=>e.setEmail(t.target.value),placeholder:`name@example.com`,autoComplete:`email`,required:!0})}),(0,q.jsx)(X,{label:`Password`,icon:`fa-solid fa-lock`,trailing:(0,q.jsx)(`button`,{type:`button`,className:`sg-eye`,onClick:()=>n(e=>!e),"aria-label":`Toggle password visibility`,children:(0,q.jsx)(`i`,{className:t?`fa-regular fa-eye-slash`:`fa-regular fa-eye`})}),children:(0,q.jsx)(`input`,{type:t?`text`:`password`,value:e.password,onChange:t=>e.setPassword(t.target.value),placeholder:`Enter your password`,autoComplete:`current-password`,required:!0})}),(0,q.jsx)(`button`,{type:`button`,className:`sg-link`,onClick:e.handleForgotPassword,disabled:e.resetSending,children:e.resetSending?`Sending reset link...`:`Forgot password?`}),(0,q.jsx)(`button`,{type:`submit`,className:`sg-cta`,disabled:e.loading,children:e.loading?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Signing in...`]}):`Sign In`})]}):e.regSubmittedEmail?(0,q.jsxs)(`div`,{className:`sg-form`,children:[(0,q.jsx)(`div`,{className:`sg-done-icon`,children:(0,q.jsx)(`i`,{className:`fa-regular fa-envelope`})}),(0,q.jsx)(`h2`,{className:`sg-heading sg-center`,children:`Registration submitted`}),(0,q.jsxs)(`p`,{className:`sg-muted sg-center`,children:[`A verification link has been sent to `,(0,q.jsx)(`strong`,{children:e.regSubmittedEmail}),`. Verify your email, then sign in once your institute approves your account.`]}),(0,q.jsx)(`button`,{type:`button`,className:`sg-cta`,onClick:e.backToSignIn,children:`Back to Sign In`})]}):(0,q.jsxs)(`form`,{onSubmit:e.handleRegisterSubmit,className:`sg-form`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{className:`sg-heading`,children:`Create an account`}),(0,q.jsx)(`p`,{className:`sg-muted`,children:`Request access to your institute's portal.`})]}),e.regError&&(0,q.jsxs)(`div`,{className:`sg-alert sg-alert-error`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),e.regError]}),(0,q.jsx)(X,{label:`Full name`,icon:`fa-regular fa-user`,children:(0,q.jsx)(`input`,{value:e.reg.fullName,onChange:t=>e.setRegField(`fullName`,t.target.value),placeholder:`Your full name`,required:!0})}),(0,q.jsx)(X,{label:`Email`,icon:`fa-regular fa-envelope`,children:(0,q.jsx)(`input`,{type:`email`,value:e.reg.email,onChange:t=>e.setRegField(`email`,t.target.value),placeholder:`name@example.com`,required:!0})}),(0,q.jsx)(X,{label:`Phone (optional)`,icon:`fa-solid fa-phone`,children:(0,q.jsx)(`input`,{type:`tel`,value:e.reg.phone,onChange:t=>e.setRegField(`phone`,t.target.value),placeholder:`Your phone number`})}),(0,q.jsx)(X,{label:`Branch code (optional)`,icon:`fa-solid fa-hashtag`,children:(0,q.jsx)(`input`,{value:e.reg.branchCode,onChange:t=>e.setRegField(`branchCode`,t.target.value),onBlur:t=>e.checkBranchCode(t.target.value),placeholder:`Code from your branch`})}),e.branchCodeStatus===`checking`&&(0,q.jsxs)(`p`,{className:`sg-hint`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Checking code...`]}),e.branchCodeStatus===`valid`&&e.resolvedBranch&&(0,q.jsxs)(`p`,{className:`sg-hint sg-hint-ok`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`}),` `,e.resolvedBranch.name]}),e.branchCodeStatus===`invalid`&&(0,q.jsxs)(`p`,{className:`sg-hint sg-hint-bad`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),` Invalid branch code.`]}),(0,q.jsx)(X,{label:`Password`,icon:`fa-solid fa-lock`,children:(0,q.jsx)(`input`,{type:`password`,value:e.reg.password,onChange:t=>e.setRegField(`password`,t.target.value),placeholder:`At least 6 characters`,minLength:6,required:!0})}),(0,q.jsx)(X,{label:`Confirm password`,icon:`fa-solid fa-lock`,children:(0,q.jsx)(`input`,{type:`password`,value:e.reg.confirmPassword,onChange:t=>e.setRegField(`confirmPassword`,t.target.value),placeholder:`Re-enter your password`,minLength:6,required:!0})}),(0,q.jsx)(`button`,{type:`submit`,className:`sg-cta`,disabled:e.regLoading||!e.instituteReady||!e.institute?.id||e.branchCodeStatus===`checking`,children:e.regLoading?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Submitting...`]}):`Request Access`})]}),(0,q.jsxs)(`p`,{className:`sg-footer`,children:[(0,q.jsx)(c,{to:`/policies#terms`,children:`Terms & Conditions`}),` · `,(0,q.jsx)(c,{to:`/policies#privacy`,children:`Privacy Policy`})]}),(0,q.jsxs)(`p`,{className:`sg-footer`,children:[`© `,new Date().getFullYear(),` `,r,`. All rights reserved.`]})]})]})}var st=[`#a35c9e`,`#e31e24`,`#008bd2`,`#ffcd00`,`#f0821a`,`#afca1c`,`#009a48`,`#e5097f`];function Z({label:e,icon:t,children:n,trailing:r}){return(0,q.jsxs)(`label`,{className:`bp-group`,children:[(0,q.jsx)(`span`,{className:`bp-label`,children:e}),(0,q.jsxs)(`span`,{className:`bp-field`,children:[(0,q.jsx)(`i`,{className:`${t} bp-field-icon`}),n,r]})]})}function ct(){let e=it(),[t,n]=(0,L.useState)(!1),r=e.institute?.name?.trim()||`Brain Power Zone`,i=e.logoUrl;return(0,L.useEffect)(()=>(document.body.classList.add(`bp-login-body`),()=>document.body.classList.remove(`bp-login-body`)),[]),(0,q.jsxs)(`div`,{className:`bp-login`,children:[e.showSplash&&(0,q.jsx)(`div`,{className:`bp-splash`,children:(0,q.jsx)(`div`,{className:`bp-logo bp-logo-splash`,children:i&&(0,q.jsx)(`img`,{src:i,alt:``})})}),e.unverifiedEmail&&(0,q.jsx)(Ze,{email:e.unverifiedEmail,onCancel:()=>e.setUnverifiedEmail(null)}),(0,q.jsxs)(`header`,{className:`bp-hero`,children:[(0,q.jsx)(`div`,{className:`bp-dots`,"aria-hidden":`true`,children:st.map((e,t)=>(0,q.jsx)(`span`,{style:{background:e,animationDelay:`${t*.25}s`}},e))}),(0,q.jsx)(`div`,{className:`bp-logo bp-logo-hero`,children:i&&(0,q.jsx)(`img`,{src:i,alt:r})}),(0,q.jsxs)(`p`,{className:`bp-tagline`,children:[`Think `,(0,q.jsx)(`span`,{children:`·`}),` Train `,(0,q.jsx)(`span`,{children:`·`}),` Triumph`]})]}),(0,q.jsxs)(`main`,{className:`bp-sheet`,children:[!e.regSubmittedEmail&&(0,q.jsxs)(`div`,{className:`bp-switch`,role:`tablist`,children:[(0,q.jsx)(`button`,{type:`button`,className:e.mode===`signin`?`is-active`:``,onClick:()=>e.switchMode(`signin`),children:`Sign In`}),(0,q.jsx)(`button`,{type:`button`,className:e.mode===`register`?`is-active`:``,onClick:()=>e.switchMode(`register`),children:`Register`})]}),e.mode===`signin`?(0,q.jsxs)(`form`,{onSubmit:e.handleSubmit,className:`bp-form`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{className:`bp-heading`,children:`Welcome back`}),(0,q.jsx)(`p`,{className:`bp-muted`,children:`Sign in to continue to your account.`})]}),e.error&&(0,q.jsxs)(`div`,{className:`bp-alert bp-alert-error`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),e.error]}),e.notice&&(0,q.jsxs)(`div`,{className:`bp-alert bp-alert-ok`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`}),e.notice]}),(0,q.jsx)(Z,{label:`Email`,icon:`fa-regular fa-envelope`,children:(0,q.jsx)(`input`,{type:`email`,value:e.email,onChange:t=>e.setEmail(t.target.value),placeholder:`name@example.com`,autoComplete:`email`,required:!0})}),(0,q.jsx)(Z,{label:`Password`,icon:`fa-solid fa-lock`,trailing:(0,q.jsx)(`button`,{type:`button`,className:`bp-eye`,onClick:()=>n(e=>!e),"aria-label":`Toggle password visibility`,children:(0,q.jsx)(`i`,{className:t?`fa-regular fa-eye-slash`:`fa-regular fa-eye`})}),children:(0,q.jsx)(`input`,{type:t?`text`:`password`,value:e.password,onChange:t=>e.setPassword(t.target.value),placeholder:`Enter your password`,autoComplete:`current-password`,required:!0})}),(0,q.jsx)(`button`,{type:`button`,className:`bp-link`,onClick:e.handleForgotPassword,disabled:e.resetSending,children:e.resetSending?`Sending reset link...`:`Forgot password?`}),(0,q.jsx)(`button`,{type:`submit`,className:`bp-cta`,disabled:e.loading,children:e.loading?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Signing in...`]}):`Sign In`})]}):e.regSubmittedEmail?(0,q.jsxs)(`div`,{className:`bp-form`,children:[(0,q.jsx)(`div`,{className:`bp-done-icon`,children:(0,q.jsx)(`i`,{className:`fa-regular fa-envelope`})}),(0,q.jsx)(`h2`,{className:`bp-heading bp-center`,children:`Registration submitted`}),(0,q.jsxs)(`p`,{className:`bp-muted bp-center`,children:[`A verification link has been sent to `,(0,q.jsx)(`strong`,{children:e.regSubmittedEmail}),`. Verify your email, then sign in once your institute approves your account.`]}),(0,q.jsx)(`button`,{type:`button`,className:`bp-cta`,onClick:e.backToSignIn,children:`Back to Sign In`})]}):(0,q.jsxs)(`form`,{onSubmit:e.handleRegisterSubmit,className:`bp-form`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{className:`bp-heading`,children:`Create an account`}),(0,q.jsx)(`p`,{className:`bp-muted`,children:`Request access to your institute's portal.`})]}),e.regError&&(0,q.jsxs)(`div`,{className:`bp-alert bp-alert-error`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),e.regError]}),(0,q.jsx)(Z,{label:`Full name`,icon:`fa-regular fa-user`,children:(0,q.jsx)(`input`,{value:e.reg.fullName,onChange:t=>e.setRegField(`fullName`,t.target.value),placeholder:`Your full name`,required:!0})}),(0,q.jsx)(Z,{label:`Email`,icon:`fa-regular fa-envelope`,children:(0,q.jsx)(`input`,{type:`email`,value:e.reg.email,onChange:t=>e.setRegField(`email`,t.target.value),placeholder:`name@example.com`,required:!0})}),(0,q.jsx)(Z,{label:`Phone (optional)`,icon:`fa-solid fa-phone`,children:(0,q.jsx)(`input`,{type:`tel`,value:e.reg.phone,onChange:t=>e.setRegField(`phone`,t.target.value),placeholder:`Your phone number`})}),(0,q.jsx)(Z,{label:`Branch code (optional)`,icon:`fa-solid fa-hashtag`,children:(0,q.jsx)(`input`,{value:e.reg.branchCode,onChange:t=>e.setRegField(`branchCode`,t.target.value),onBlur:t=>e.checkBranchCode(t.target.value),placeholder:`Code from your branch`})}),e.branchCodeStatus===`checking`&&(0,q.jsxs)(`p`,{className:`bp-hint`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Checking code...`]}),e.branchCodeStatus===`valid`&&e.resolvedBranch&&(0,q.jsxs)(`p`,{className:`bp-hint bp-hint-ok`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`}),` `,e.resolvedBranch.name]}),e.branchCodeStatus===`invalid`&&(0,q.jsxs)(`p`,{className:`bp-hint bp-hint-bad`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),` Invalid branch code.`]}),(0,q.jsx)(Z,{label:`Password`,icon:`fa-solid fa-lock`,children:(0,q.jsx)(`input`,{type:`password`,value:e.reg.password,onChange:t=>e.setRegField(`password`,t.target.value),placeholder:`At least 6 characters`,minLength:6,required:!0})}),(0,q.jsx)(Z,{label:`Confirm password`,icon:`fa-solid fa-lock`,children:(0,q.jsx)(`input`,{type:`password`,value:e.reg.confirmPassword,onChange:t=>e.setRegField(`confirmPassword`,t.target.value),placeholder:`Re-enter your password`,minLength:6,required:!0})}),(0,q.jsx)(`button`,{type:`submit`,className:`bp-cta`,disabled:e.regLoading||!e.instituteReady||!e.institute?.id||e.branchCodeStatus===`checking`,children:e.regLoading?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Submitting...`]}):`Request Access`})]}),(0,q.jsxs)(`p`,{className:`bp-footer`,children:[(0,q.jsx)(c,{to:`/policies#terms`,children:`Terms & Conditions`}),` · `,(0,q.jsx)(c,{to:`/policies#privacy`,children:`Privacy Policy`})]}),(0,q.jsxs)(`p`,{className:`bp-footer`,children:[`© `,new Date().getFullYear(),` `,r,`. All rights reserved.`]})]})]})}var lt=[`#f97316`,`#facc15`,`#38bdf8`,`#f97316`,`#facc15`,`#38bdf8`,`#f97316`,`#facc15`];function Q({label:e,icon:t,children:n,trailing:r}){return(0,q.jsxs)(`label`,{className:`im-group`,children:[(0,q.jsx)(`span`,{className:`im-label`,children:e}),(0,q.jsxs)(`span`,{className:`im-field`,children:[(0,q.jsx)(`i`,{className:`${t} im-field-icon`}),n,r]})]})}function ut(){let e=it(),[t,n]=(0,L.useState)(!1),r=`Impact Master Brain Academy`,i=e.logoUrl;return(0,L.useEffect)(()=>(document.body.classList.add(`im-login-body`),()=>document.body.classList.remove(`im-login-body`)),[]),(0,q.jsxs)(`div`,{className:`im-login`,children:[e.showSplash&&(0,q.jsx)(`div`,{className:`im-splash`,children:(0,q.jsx)(`div`,{className:`im-logo im-logo-splash`,children:i&&(0,q.jsx)(`img`,{src:i,alt:``})})}),e.unverifiedEmail&&(0,q.jsx)(Ze,{email:e.unverifiedEmail,onCancel:()=>e.setUnverifiedEmail(null)}),(0,q.jsxs)(`header`,{className:`im-hero`,children:[(0,q.jsx)(`div`,{className:`im-dots`,"aria-hidden":`true`,children:lt.map((e,t)=>(0,q.jsx)(`span`,{style:{background:e,animationDelay:`${t*.25}s`}},t))}),(0,q.jsx)(`div`,{className:`im-logo im-logo-hero`,children:i&&(0,q.jsx)(`img`,{src:i,alt:r})}),(0,q.jsx)(`h1`,{className:`im-title`,children:r}),(0,q.jsxs)(`p`,{className:`im-tagline`,children:[`Focus `,(0,q.jsx)(`span`,{children:`·`}),` Practice `,(0,q.jsx)(`span`,{children:`·`}),` Impact`]})]}),(0,q.jsxs)(`main`,{className:`im-sheet`,children:[!e.regSubmittedEmail&&(0,q.jsxs)(`div`,{className:`im-switch`,role:`tablist`,children:[(0,q.jsx)(`button`,{type:`button`,className:e.mode===`signin`?`is-active`:``,onClick:()=>e.switchMode(`signin`),children:`Sign In`}),(0,q.jsx)(`button`,{type:`button`,className:e.mode===`register`?`is-active`:``,onClick:()=>e.switchMode(`register`),children:`Register`})]}),e.mode===`signin`?(0,q.jsxs)(`form`,{onSubmit:e.handleSubmit,className:`im-form`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{className:`im-heading`,children:`Welcome back`}),(0,q.jsx)(`p`,{className:`im-muted`,children:`Sign in to continue to your account.`})]}),e.error&&(0,q.jsxs)(`div`,{className:`im-alert im-alert-error`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),e.error]}),e.notice&&(0,q.jsxs)(`div`,{className:`im-alert im-alert-ok`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`}),e.notice]}),(0,q.jsx)(Q,{label:`Email`,icon:`fa-regular fa-envelope`,children:(0,q.jsx)(`input`,{type:`email`,value:e.email,onChange:t=>e.setEmail(t.target.value),placeholder:`name@example.com`,autoComplete:`email`,required:!0})}),(0,q.jsx)(Q,{label:`Password`,icon:`fa-solid fa-lock`,trailing:(0,q.jsx)(`button`,{type:`button`,className:`im-eye`,onClick:()=>n(e=>!e),"aria-label":`Toggle password visibility`,children:(0,q.jsx)(`i`,{className:t?`fa-regular fa-eye-slash`:`fa-regular fa-eye`})}),children:(0,q.jsx)(`input`,{type:t?`text`:`password`,value:e.password,onChange:t=>e.setPassword(t.target.value),placeholder:`Enter your password`,autoComplete:`current-password`,required:!0})}),(0,q.jsx)(`button`,{type:`button`,className:`im-link`,onClick:e.handleForgotPassword,disabled:e.resetSending,children:e.resetSending?`Sending reset link...`:`Forgot password?`}),(0,q.jsx)(`button`,{type:`submit`,className:`im-cta`,disabled:e.loading,children:e.loading?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Signing in...`]}):`Sign In`})]}):e.regSubmittedEmail?(0,q.jsxs)(`div`,{className:`im-form`,children:[(0,q.jsx)(`div`,{className:`im-done-icon`,children:(0,q.jsx)(`i`,{className:`fa-regular fa-envelope`})}),(0,q.jsx)(`h2`,{className:`im-heading im-center`,children:`Registration submitted`}),(0,q.jsxs)(`p`,{className:`im-muted im-center`,children:[`A verification link has been sent to `,(0,q.jsx)(`strong`,{children:e.regSubmittedEmail}),`. Verify your email, then sign in once your institute approves your account.`]}),(0,q.jsx)(`button`,{type:`button`,className:`im-cta`,onClick:e.backToSignIn,children:`Back to Sign In`})]}):(0,q.jsxs)(`form`,{onSubmit:e.handleRegisterSubmit,className:`im-form`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsx)(`h2`,{className:`im-heading`,children:`Create an account`}),(0,q.jsx)(`p`,{className:`im-muted`,children:`Request access to your institute's portal.`})]}),e.regError&&(0,q.jsxs)(`div`,{className:`im-alert im-alert-error`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),e.regError]}),(0,q.jsx)(Q,{label:`Full name`,icon:`fa-regular fa-user`,children:(0,q.jsx)(`input`,{value:e.reg.fullName,onChange:t=>e.setRegField(`fullName`,t.target.value),placeholder:`Your full name`,required:!0})}),(0,q.jsx)(Q,{label:`Email`,icon:`fa-regular fa-envelope`,children:(0,q.jsx)(`input`,{type:`email`,value:e.reg.email,onChange:t=>e.setRegField(`email`,t.target.value),placeholder:`name@example.com`,required:!0})}),(0,q.jsx)(Q,{label:`Phone (optional)`,icon:`fa-solid fa-phone`,children:(0,q.jsx)(`input`,{type:`tel`,value:e.reg.phone,onChange:t=>e.setRegField(`phone`,t.target.value),placeholder:`Your phone number`})}),(0,q.jsx)(Q,{label:`Branch code (optional)`,icon:`fa-solid fa-hashtag`,children:(0,q.jsx)(`input`,{value:e.reg.branchCode,onChange:t=>e.setRegField(`branchCode`,t.target.value),onBlur:t=>e.checkBranchCode(t.target.value),placeholder:`Code from your branch`})}),e.branchCodeStatus===`checking`&&(0,q.jsxs)(`p`,{className:`im-hint`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Checking code...`]}),e.branchCodeStatus===`valid`&&e.resolvedBranch&&(0,q.jsxs)(`p`,{className:`im-hint im-hint-ok`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-check`}),` `,e.resolvedBranch.name]}),e.branchCodeStatus===`invalid`&&(0,q.jsxs)(`p`,{className:`im-hint im-hint-bad`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),` Invalid branch code.`]}),(0,q.jsx)(Q,{label:`Password`,icon:`fa-solid fa-lock`,children:(0,q.jsx)(`input`,{type:`password`,value:e.reg.password,onChange:t=>e.setRegField(`password`,t.target.value),placeholder:`At least 6 characters`,minLength:6,required:!0})}),(0,q.jsx)(Q,{label:`Confirm password`,icon:`fa-solid fa-lock`,children:(0,q.jsx)(`input`,{type:`password`,value:e.reg.confirmPassword,onChange:t=>e.setRegField(`confirmPassword`,t.target.value),placeholder:`Re-enter your password`,minLength:6,required:!0})}),(0,q.jsx)(`button`,{type:`submit`,className:`im-cta`,disabled:e.regLoading||!e.instituteReady||!e.institute?.id||e.branchCodeStatus===`checking`,children:e.regLoading?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),` Submitting...`]}):`Request Access`})]}),(0,q.jsxs)(`p`,{className:`im-footer`,children:[(0,q.jsx)(c,{to:`/policies#terms`,children:`Terms & Conditions`}),` · `,(0,q.jsx)(c,{to:`/policies#privacy`,children:`Privacy Policy`})]}),(0,q.jsxs)(`p`,{className:`im-footer`,children:[`© `,new Date().getFullYear(),` `,r,`. All rights reserved.`]})]})]})}var dt={"star-genius-abacus":ot,"brain-power-zone":ct,impactmasterbrainacademy:ut},ft=a.isNativePlatform()||!1;function pt(){let{instituteSlug:e}=S(),t=ft?dt[e]:null;return t?(0,q.jsx)(t,{}):(0,q.jsx)(nt,{})}function mt(){let{institute:e}=S(),t=e?.name||`Abacus`,{hash:n}=s();return(0,L.useEffect)(()=>{n&&document.getElementById(n.slice(1))?.scrollIntoView()},[n]),(0,q.jsxs)(`div`,{className:`policies`,children:[(0,q.jsxs)(`header`,{className:`policies-hero`,children:[(0,q.jsx)(c,{to:`/login`,className:`policies-back`,children:`← Back to login`}),(0,q.jsx)(`h1`,{children:t}),(0,q.jsx)(`p`,{children:`Policies for students and parents`}),(0,q.jsxs)(`nav`,{className:`policies-nav`,children:[(0,q.jsx)(`a`,{href:`#terms`,children:`Terms`}),(0,q.jsx)(`a`,{href:`#privacy`,children:`Privacy`}),(0,q.jsx)(`a`,{href:`#delete-account`,children:`Delete account`})]})]}),(0,q.jsxs)(`section`,{className:`policies-card`,children:[(0,q.jsx)(`h2`,{id:`terms`,children:`Terms & Conditions`}),(0,q.jsx)(`h3`,{children:`1. Acceptance`}),(0,q.jsxs)(`p`,{children:[`These terms apply to the `,t,` website, student panel, mobile app and class enrolment. For students under 18, a parent or guardian accepts them on the student's behalf.`]}),(0,q.jsx)(`h3`,{children:`2. Student accounts`}),(0,q.jsx)(`p`,{children:`Accounts are created by your branch after enrolment. Keep your login details private and tell us if you think someone else is using your account. Accounts may not be shared, sold or transferred.`}),(0,q.jsx)(`h3`,{children:`3. Classes, levels and demo class`}),(0,q.jsx)(`p`,{children:`The demo class is free and does not oblige you to enrol. Timings, centres and teachers may change; we give notice where we can. Moving to the next level depends on assessment, and we do not guarantee specific results.`}),(0,q.jsx)(`h3`,{children:`4. Fees and refunds`}),(0,q.jsx)(`p`,{children:`Fees are confirmed by your branch at enrolment and paid directly to the branch; the app does not take payments. Level fees already paid and kits or books already issued are generally not refundable unless the branch agrees otherwise in writing.`}),(0,q.jsx)(`h3`,{children:`5. Acceptable use`}),(0,q.jsx)(`p`,{children:`Do not access other people's accounts, copy or share course content, interfere with the app's security, or use the services for anything unlawful.`}),(0,q.jsx)(`h3`,{children:`6. Intellectual property`}),(0,q.jsxs)(`p`,{children:[`Course material, videos, logos and app content belong to `,t,` or its licensors and are for the enrolled student's own learning only.`]}),(0,q.jsx)(`h3`,{children:`7. Availability and changes`}),(0,q.jsx)(`p`,{children:`The app may sometimes be unavailable and features may change. We may suspend an account that breaks these terms or after a student leaves.`}),(0,q.jsx)(`h3`,{children:`8. Limitation of liability`}),(0,q.jsx)(`p`,{children:`The services are provided "as is". As far as the law allows, we are not liable for indirect or consequential loss. Your rights under Indian consumer law are not affected.`}),(0,q.jsx)(`h3`,{children:`9. Governing law`}),(0,q.jsx)(`p`,{children:`These terms are governed by the laws of India.`})]}),(0,q.jsxs)(`section`,{className:`policies-card`,children:[(0,q.jsx)(`h2`,{id:`privacy`,children:`Privacy Policy`}),(0,q.jsx)(`h3`,{children:`1. Who we are`}),(0,q.jsxs)(`p`,{children:[t,` runs abacus and mental maths classes and operates this website, student panel and mobile app.`]}),(0,q.jsx)(`h3`,{children:`2. Information we collect`}),(0,q.jsx)(`p`,{children:`Parent and student details, login details, messages, practice and test activity, fee records, and basic technical data such as device type and crash logs. We do not collect precise location, contacts or photos, and we do not use third-party advertising.`}),(0,q.jsx)(`h3`,{children:`3. How we use it`}),(0,q.jsx)(`p`,{children:`To enrol students, track progress, contact parents, keep the service secure and meet legal obligations. We do not sell personal data, and children's data is never used for advertising or profiling.`}),(0,q.jsx)(`h3`,{children:`4. Sharing`}),(0,q.jsxs)(`p`,{children:[`Data is shared only within `,t,`, with hosting and service providers bound by confidentiality, or when the law or a child's safety requires it.`]}),(0,q.jsx)(`h3`,{children:`5. Children's privacy`}),(0,q.jsx)(`p`,{children:`Student accounts are created by the branch at a parent's request and with their consent. Parents can review, correct or delete their child's data.`}),(0,q.jsx)(`h3`,{children:`6. Security and retention`}),(0,q.jsx)(`p`,{children:`Data is sent over HTTPS and only authorised staff can access it. We keep records while the student is enrolled and up to 2 years afterwards, unless you ask us to delete them sooner or the law requires us to keep them.`}),(0,q.jsx)(`h3`,{children:`7. Your rights`}),(0,q.jsx)(`p`,{children:`Under India's Digital Personal Data Protection Act, 2023 you can ask to access, correct or delete your data, or withdraw consent, by contacting your branch.`}),(0,q.jsx)(`h3`,{children:`8. Changes`}),(0,q.jsx)(`p`,{children:`We update the date of this policy when it changes and tell parents about significant changes through the app or WhatsApp.`})]}),(0,q.jsxs)(`section`,{className:`policies-card`,children:[(0,q.jsx)(`h2`,{id:`delete-account`,children:`Delete your account and data`}),(0,q.jsxs)(`p`,{children:[`You can ask us to delete your `,t,` app account and its data at any time.`]}),(0,q.jsxs)(`ol`,{children:[(0,q.jsx)(`li`,{children:`Send a WhatsApp message or email to your branch with the subject "Account deletion request".`}),(0,q.jsx)(`li`,{children:`Include the student's name, branch and registered mobile number so we can confirm the request comes from the parent or guardian.`}),(0,q.jsx)(`li`,{children:`We confirm and delete the account within 30 days.`})]}),(0,q.jsxs)(`p`,{children:[(0,q.jsx)(`strong`,{children:`What is deleted:`}),` the login, profile details, practice and test history, scores and progress reports.`]}),(0,q.jsxs)(`p`,{children:[(0,q.jsx)(`strong`,{children:`What may be kept:`}),` fee receipts and enrolment records we must keep for accounting or tax purposes, only for the required period.`]}),(0,q.jsx)(`p`,{children:`You can also ask us to delete only some data (for example practice history) without closing the account.`})]})]})}function ht(){let e=_(),[t,n]=(0,L.useState)(`checking`),[r,i]=(0,L.useState)(``),[a,o]=(0,L.useState)(``),[s,c]=(0,L.useState)(!1),[l,u]=(0,L.useState)(!1),[f,m]=(0,L.useState)(null);(0,L.useEffect)(()=>(document.body.classList.add(`login-body`),()=>document.body.classList.remove(`login-body`)),[]),(0,L.useEffect)(()=>{let e=!1;async function t(){let t=new URLSearchParams(d.hash.replace(/^#/,``)),r=new URLSearchParams(d.search),i=t.get(`error_description`)||r.get(`error_description`);if(i){e||(m(i),n(`invalid`));return}let a=r.get(`code`);if(!(a||t.get(`type`)===`recovery`||t.get(`access_token`))){e||n(`invalid`);return}if(a){let{error:t}=await p.auth.exchangeCodeForSession(a);if(t&&!e){m(t.message),n(`invalid`);return}}let{data:{session:o}}=await p.auth.getSession();e||(o?(window.history.replaceState({},document.title,`/reset-password`),n(`ready`)):n(`invalid`))}return t(),()=>{e=!0}},[]);async function h(t){if(t.preventDefault(),m(null),r.length<6){m(`Password must be at least 6 characters.`);return}if(r!==a){m(`Passwords do not match.`);return}u(!0);let{error:i}=await p.auth.updateUser({password:r});if(u(!1),i){m(i.message);return}await p.auth.signOut(),n(`done`),setTimeout(()=>e(`/login`,{replace:!0}),2e3)}return(0,q.jsxs)(`div`,{className:`login-page-container layout-classic_centered`,children:[(0,q.jsx)(g,{}),(0,q.jsx)(`div`,{className:`login-right-pane`,children:(0,q.jsxs)(`div`,{className:`login-form-card`,children:[(0,q.jsxs)(`div`,{style:{marginBottom:`24px`,textAlign:`center`},children:[(0,q.jsx)(`h1`,{className:`login-title-text`,children:`Set a new password`}),(0,q.jsx)(`p`,{className:`login-subtitle-text`,children:`Choose a new password for your student account`})]}),f&&(0,q.jsxs)(`div`,{style:{background:`#fef2f2`,color:`#dc2626`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:600,marginBottom:`24px`,border:`1px solid #fecaca`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),(0,q.jsx)(`span`,{children:f})]}),t===`checking`&&(0,q.jsxs)(`p`,{style:{textAlign:`center`,fontWeight:600},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`,style:{marginRight:8}}),`Verifying your reset link...`]}),t===`invalid`&&(0,q.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,q.jsx)(`p`,{style:{fontWeight:600,marginBottom:20},children:`This reset link is invalid or has expired. Please request a new one.`}),(0,q.jsx)(`button`,{className:`login-submit-button`,type:`button`,onClick:()=>e(`/login`),children:(0,q.jsx)(`span`,{children:`Back to Sign In`})})]}),t===`done`&&(0,q.jsx)(`p`,{style:{textAlign:`center`,fontWeight:600,color:`#16a34a`},children:`Password updated. Redirecting you to sign in...`}),t===`ready`&&(0,q.jsxs)(`form`,{onSubmit:h,children:[(0,q.jsxs)(`div`,{className:`login-input-group`,children:[(0,q.jsx)(`label`,{className:`login-label`,children:`New password`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,q.jsx)(`input`,{type:s?`text`:`password`,value:r,onChange:e=>i(e.target.value),placeholder:`At least 6 characters`,autoComplete:`new-password`,required:!0,className:`login-input-field`}),(0,q.jsx)(`button`,{type:`button`,onClick:()=>c(!s),className:`login-password-toggle`,children:(0,q.jsx)(`i`,{className:s?`fa-solid fa-eye-slash`:`fa-solid fa-eye`})})]})]}),(0,q.jsxs)(`div`,{className:`login-input-group`,style:{marginBottom:`30px`},children:[(0,q.jsx)(`label`,{className:`login-label`,children:`Confirm new password`}),(0,q.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,q.jsx)(`input`,{type:`password`,value:a,onChange:e=>o(e.target.value),placeholder:`Repeat new password`,autoComplete:`new-password`,required:!0,className:`login-input-field`})]})]}),(0,q.jsx)(`button`,{type:`submit`,disabled:l,className:`login-submit-button`,children:l?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,q.jsx)(`span`,{children:`Updating...`})]}):(0,q.jsx)(`span`,{children:`Update Password`})})]})]})})]})}function gt(){return(0,q.jsxs)(`div`,{className:`skel-root`,children:[(0,q.jsx)(`style`,{children:`
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
      `}),(0,q.jsxs)(`div`,{className:`skel-navbar`,children:[(0,q.jsx)(`div`,{className:`skel-shine-light skel-navbar-icon`}),(0,q.jsx)(`div`,{className:`skel-shine-light`,style:{width:34,height:34,borderRadius:10}}),(0,q.jsx)(`div`,{className:`skel-shine-light`,style:{width:100,height:14}}),(0,q.jsx)(`div`,{style:{flex:1}}),(0,q.jsx)(`div`,{className:`skel-shine-light skel-navbar-icon round`})]}),(0,q.jsxs)(`div`,{className:`skel-body`,children:[(0,q.jsx)(`div`,{className:`skel-sidebar`,children:Array.from({length:8}).map((e,t)=>(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:t===3?`65%`:`85%`,height:13}},t))}),(0,q.jsxs)(`div`,{className:`skel-content`,children:[(0,q.jsxs)(`div`,{className:`skel-card`,children:[(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`70%`,height:22,marginBottom:10}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`90%`,height:12,marginBottom:6}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`50%`,height:12}})]}),(0,q.jsxs)(`div`,{style:{display:`flex`,gap:10},children:[(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:110,height:34,borderRadius:999}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:90,height:34,borderRadius:999}})]}),(0,q.jsx)(`div`,{className:`skel-stat-grid`,children:Array.from({length:4}).map((e,t)=>(0,q.jsxs)(`div`,{className:`skel-card`,style:{padding:14},children:[(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:30,height:30,borderRadius:9,marginBottom:10}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`60%`,height:14,marginBottom:6}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`40%`,height:10}})]},t))}),(0,q.jsxs)(`div`,{className:`skel-card`,style:{border:`1px solid color-mix(in srgb, var(--gold, #f59e0b) 45%, transparent)`},children:[(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`45%`,height:16,marginBottom:10}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`85%`,height:12,marginBottom:14}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:130,height:36,borderRadius:12}})]}),(0,q.jsxs)(`div`,{className:`skel-card`,style:{flex:1,minHeight:150,display:`flex`,flexDirection:`column`,gap:14},children:[(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`35%`,height:14}}),(0,q.jsx)(`div`,{className:`skel-week-bars`,children:Array.from({length:7}).map((e,t)=>(0,q.jsxs)(`div`,{className:`skel-week-bar`,children:[(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`100%`,height:`${40+t%4*12}%`,borderRadius:8}}),(0,q.jsx)(`div`,{className:`skel-shine`,style:{width:`70%`,height:8}})]},t))})]})]})]})]})}function _t({notice:e,onConsented:t}){let{signOut:n}=S(),[r]=(0,L.useState)(`en`),[i,a]=(0,L.useState)(!1),[o,s]=(0,L.useState)(!1),[c,l]=(0,L.useState)(null),[u,d]=(0,L.useState)(e.english_title),[f,p]=(0,L.useState)(e.english_content),[m,h]=(0,L.useState)((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),[g,_]=(0,L.useState)((e.optional_purposes||[]).map(e=>({...e,label_display:e.label_en,checked:!1})));(0,L.useEffect)(()=>{if(r===`en`){d(e.english_title),p(e.english_content),h((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),_(t=>(e.optional_purposes||[]).map(e=>{let n=t.find(t=>t.key===e.key);return{...e,label_display:e.label_en,checked:!!n?.checked}}));return}async function t(){a(!0),l(null);let{data:t,error:n}=await O(e.id,r);n?(console.error(`Translation load failed, falling back to English`,n),v()):!t||t.status!==`approved`?v():(d(t.translated_title),p(t.translated_content),h((e.required_purposes||[]).map(e=>{let n=t.translated_required_purposes?.find(t=>t.key===e.key);return{...e,label_display:n?.label_translated||e.label_en}})),_(n=>(e.optional_purposes||[]).map(e=>{let r=t.translated_optional_purposes?.find(t=>t.key===e.key),i=n.find(t=>t.key===e.key);return{...e,label_display:r?.label_translated||e.label_en,checked:!!i?.checked}}))),a(!1)}t()},[r,e]);function v(){d(e.english_title),p(e.english_content),h((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),_(t=>(e.optional_purposes||[]).map(e=>{let n=t.find(t=>t.key===e.key);return{...e,label_display:e.label_en,checked:!!n?.checked}}))}function y(e){_(t=>t.map(t=>t.key===e?{...t,checked:!t.checked}:t))}async function b(n=!1){s(!0),l(null);let i=[],a=[];m.forEach(e=>i.push(e.key)),g.forEach(e=>{!n&&e.checked?i.push(e.key):a.push(e.key)});let{data:o,error:c}=await C(e.id,r,i,a);c?(l(c.message),s(!1)):t()}return(0,q.jsxs)(`div`,{className:`consent-fullscreen-overlay`,children:[(0,q.jsx)(`style`,{children:`
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
      `}),(0,q.jsxs)(`div`,{className:`consent-card`,children:[(0,q.jsx)(`div`,{className:`consent-header`,children:(0,q.jsx)(`h2`,{className:`consent-title`,children:u})}),(0,q.jsx)(`div`,{className:`consent-content-area`,children:i?(0,q.jsxs)(`div`,{className:`consent-spinner-container`,children:[(0,q.jsx)(`div`,{className:`consent-spinner`}),(0,q.jsx)(`p`,{style:{marginTop:14,color:`var(--text-light, #64748b)`,fontSize:13.5,fontWeight:500},children:`Retrieving translation...`})]}):(0,q.jsx)(`div`,{className:`consent-notice-body`,children:f})}),(0,q.jsxs)(`div`,{className:`consent-purposes-section`,children:[m.length>0&&(0,q.jsxs)(`div`,{className:`consent-purpose-group`,children:[(0,q.jsx)(`h4`,{className:`consent-group-heading`,children:`Required Processing (Core Services)`}),(0,q.jsx)(`div`,{className:`consent-purposes-list`,children:m.map(e=>(0,q.jsxs)(`label`,{className:`consent-purpose-label disabled`,children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:!0,disabled:!0,className:`consent-checkbox`}),(0,q.jsx)(`span`,{children:e.label_display})]},e.key))})]}),g.length>0&&(0,q.jsxs)(`div`,{className:`consent-purpose-group`,children:[(0,q.jsx)(`h4`,{className:`consent-group-heading`,children:`Optional Processing (Preferences)`}),(0,q.jsx)(`div`,{className:`consent-purposes-list`,children:g.map(e=>(0,q.jsxs)(`label`,{className:`consent-purpose-label`,children:[(0,q.jsx)(`input`,{type:`checkbox`,checked:e.checked,onChange:()=>y(e.key),disabled:o,className:`consent-checkbox`}),(0,q.jsx)(`span`,{children:e.label_display})]},e.key))})]})]}),c&&(0,q.jsxs)(`p`,{className:`consent-error-msg`,children:[`Error saving consent: `,c]}),(0,q.jsxs)(`div`,{className:`consent-footer`,children:[(0,q.jsxs)(`button`,{className:`consent-btn consent-btn-danger`,onClick:n,disabled:o||i,children:[(0,q.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),` Sign Out`]}),(0,q.jsxs)(`div`,{className:`consent-footer-right`,children:[g.length>0&&(0,q.jsx)(`button`,{className:`consent-btn consent-btn-secondary`,onClick:()=>b(!0),disabled:o||i,children:`Decline optional use`}),(0,q.jsx)(`button`,{className:`consent-btn consent-btn-primary`,onClick:()=>b(!1),disabled:o||i,children:`Agree and continue`})]})]})]})]})}function vt(){let{signOut:e}=S();return(0,q.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,q.jsx)(g,{}),(0,q.jsx)(`style`,{children:`
        .access-blocked-card { animation: accessSpring 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        @keyframes accessSpring {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}),(0,q.jsxs)(`div`,{className:`access-blocked-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,q.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:`linear-gradient(135deg, #f59e0b, #b45309)`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px rgba(245, 158, 11, 0.5)`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-triangle-exclamation`})})}),(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,q.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, #f59e0b 14%, transparent)`,color:`#b45309`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Access Paused`]})}),(0,q.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:`Panel Unavailable`}),(0,q.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:`There is an issue from your institute's side. Please contact your institute to restore access to your student panel.`}),(0,q.jsxs)(`button`,{type:`button`,onClick:e,style:{marginTop:`28px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,q.jsx)(`span`,{children:`Log out`})]})]})]})}function yt(){if(window.location.pathname!==`/exam`)return!1;let e=window.location.search;return e.includes(`slug=`)||e.includes(`examId=`)||e.includes(`accessToken=`)}var bt=150,xt=!1;function St({children:e}){let{user:t,loading:n,sessionBlocked:r,accessBlocked:i,replaceActiveSession:a,signOut:o,consentRequiredNotice:s,setConsentRequiredNotice:c,consentCheckFailed:l,retryConsentCheck:u}=S(),[d,f]=(0,L.useState)(!1),[p,m]=(0,L.useState)(``),[_,v]=(0,L.useState)(xt);if((0,L.useEffect)(()=>{if(xt)return;let e=setTimeout(()=>{xt=!0,v(!0)},bt);return()=>clearTimeout(e)},[]),n||!_)return(0,q.jsx)(gt,{});if(!t){if(yt())return e;let t=window.location.pathname+window.location.search;return(0,q.jsx)(h,{to:`/login`,state:{from:t&&t!==`/login`&&!t.startsWith(`/login?`)?t:`/`},replace:!0})}if(i)return(0,q.jsx)(vt,{});if(!t.email_confirmed_at)return(0,q.jsx)(Ze,{});if(r){let e=r.activeSession,t=![`invalid_membership`,`evicted`,`validity_expired`].includes(r.reason);async function n(){m(``),f(!0);try{let e=await a();e?.error&&m(e.error.message||`Could not log out the other browser.`)}catch(e){m(e?.message||`Could not log out the other browser. Check your connection and try again.`)}finally{f(!1)}}return(0,q.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:99999,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
          radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 35%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 25%, transparent) 50%, rgba(15, 23, 42, 0.94) 85%),
          linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 15%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 15%, transparent) 1px, transparent 1px)
        `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backgroundPosition:`center center`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,q.jsx)(g,{}),(0,q.jsx)(`div`,{style:{position:`absolute`,width:`480px`,height:`480px`,borderRadius:`50%`,background:`radial-gradient(circle, color-mix(in srgb, var(--primary-blue, #3b82f6) 35%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 20%, transparent) 45%, transparent 70%)`,filter:`blur(60px)`,pointerEvents:`none`,zIndex:0,animation:`glowPulse 4s ease-in-out infinite alternate`}}),(0,q.jsx)(`style`,{children:`
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
        `}),(0,q.jsxs)(`div`,{className:`session-blocked-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.94))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent), 0 0 0 1px rgba(255, 255, 255, 0.8) inset, 0 2px 0 rgba(255, 255, 255, 0.9) inset`},children:[(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,q.jsx)(`div`,{style:{position:`relative`,width:`72px`,height:`72px`,borderRadius:`24px`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent), 0 0 0 6px color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-shield-halved`})})}),(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,q.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Active Session Lock`]})}),(0,q.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.55rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 8px`,letterSpacing:`-0.02em`},children:t?`Account Already in Use`:r.reason===`evicted`?`Signed Out`:r.reason===`validity_expired`?`Access Expired`:`Account Not Available`}),(0,q.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.94rem`,fontWeight:`600`,lineHeight:`1.55`},children:r.message}),e?(0,q.jsxs)(`div`,{style:{marginTop:`22px`,padding:`18px 20px`,border:`1px solid var(--border, rgba(59, 130, 246, 0.2))`,borderRadius:`20px`,textAlign:`left`,background:`linear-gradient(135deg, color-mix(in srgb, var(--primary-blue, #3b82f6) 8%, transparent) 0%, color-mix(in srgb, var(--gold, #94a3b8) 6%, transparent) 100%)`,display:`flex`,alignItems:`center`,gap:`16px`,boxShadow:`0 4px 14px color-mix(in srgb, var(--primary-blue, #3b82f6) 6%, transparent)`},children:[(0,q.jsx)(`div`,{style:{width:`48px`,height:`48px`,borderRadius:`16px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 16%, transparent)`,color:`var(--primary-blue, #3b82f6)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.25rem`,flexShrink:0,boxShadow:`0 2px 8px color-mix(in srgb, var(--primary-blue) 15%, transparent)`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-desktop`})}),(0,q.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,q.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`8px`,marginBottom:`4px`},children:[(0,q.jsx)(`span`,{style:{fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,fontSize:`0.98rem`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e.browser||`Other Browser`}),(0,q.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`5px`,fontSize:`0.72rem`,color:`#15803d`,fontWeight:`800`,background:`#dcfce7`,padding:`2px 8px`,borderRadius:`999px`},children:[(0,q.jsx)(`span`,{className:`active-pulse-dot`}),`Active Now`]})]}),(0,q.jsxs)(`div`,{style:{color:`var(--text-light, #64748b)`,fontSize:`0.83rem`,fontWeight:`600`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,q.jsx)(`i`,{className:`fa-regular fa-clock`,style:{fontSize:`0.78rem`}}),`Last active `,e.last_seen_at?new Date(e.last_seen_at).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}):`recently`]})]})]}):null,p?(0,q.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err) 20%, transparent)`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,q.jsx)(`span`,{children:p})]}):null,(0,q.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,marginTop:`26px`},children:[t?(0,q.jsx)(`button`,{className:`session-btn-primary`,type:`button`,onClick:n,disabled:d,style:{flex:1,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:d?`not-allowed`:`pointer`,opacity:d?.7:1,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:d?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,q.jsx)(`span`,{children:`Logging out...`})]}):(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,q.jsx)(`span`,{children:`Log out other browser`})]})}):null,(0,q.jsx)(`button`,{className:`session-btn-secondary`,type:`button`,onClick:o,style:{flex:t?void 0:1,border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`15px 22px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`},children:t?`Cancel`:`Sign out`})]})]})]})}return l?(0,q.jsx)(`div`,{style:{minHeight:`100vh`,display:`grid`,placeItems:`center`,padding:24},children:(0,q.jsxs)(`div`,{style:{maxWidth:420,textAlign:`center`,fontFamily:`'Sora', sans-serif`},children:[(0,q.jsx)(`h2`,{style:{color:`var(--dark-blue, #0f172a)`,marginBottom:8},children:`Couldn't connect`}),(0,q.jsx)(`p`,{style:{color:`#64748b`,marginBottom:20},children:`Please check your internet connection and try again.`}),(0,q.jsx)(`button`,{type:`button`,onClick:u,style:{border:`none`,borderRadius:`18px`,padding:`14px 28px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#fff`,background:`var(--primary, #2563eb)`,cursor:`pointer`},children:`Try again`}),(0,q.jsx)(`button`,{type:`button`,onClick:o,style:{display:`block`,margin:`14px auto 0`,background:`none`,border:`none`,color:`#64748b`,cursor:`pointer`},children:`Sign out`})]})}):s?(0,q.jsx)(_t,{notice:s,onConsented:()=>c(null)}):e}function Ct({children:e}){let{profile:t}=S(),{pathname:n}=s(),r=_(),{ready:i,unlockLevelByPath:a,activeSubjects:o,enabledFeatures:c}=M(),l=le(n),u=U(n),d=W(`practice_playground`,c),p=d?`/practice`:`/`,m=d?`Back to Practice`:`Back to Home`,h=f(t?.current_level),{taught:g,required:v,locked:y}=ne(n,h,a);return!i&&(P(n)||l||u)?null:!H(l,o)||!W(u,c)?(0,q.jsx)(wt,{onBack:()=>r(p),backLabel:m}):g&&(v===0||!y)?e:(0,q.jsx)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:(0,q.jsxs)(`div`,{style:{maxWidth:`520px`,margin:`60px auto`,padding:`40px 32px`,textAlign:`center`,background:`var(--card-bg, #fff)`,border:`1px solid var(--border, #e2e8f0)`,borderRadius:`28px`},children:[(0,q.jsx)(`div`,{style:{width:`72px`,height:`72px`,margin:`0 auto 20px`,borderRadius:`24px`,background:`#f1f5f9`,color:`#94a3b8`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.8rem`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-lock`})}),(0,q.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontWeight:900,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`},children:g?`Not unlocked yet`:`Not on your course`}),(0,q.jsx)(`p`,{style:{color:`var(--text-light, #64748b)`,fontWeight:600,margin:`0 0 26px`,lineHeight:1.55},children:g?(0,q.jsxs)(q.Fragment,{children:[`This practice unlocks at `,(0,q.jsxs)(`strong`,{children:[`Level `,v]}),`. You are on `,(0,q.jsxs)(`strong`,{children:[`Level `,h]}),`. Keep going with your daily practice and your teacher will move you up.`]}):(0,q.jsx)(q.Fragment,{children:`This practice is not part of your course. Your practice tools are all on the Practice page.`})}),(0,q.jsx)(`button`,{type:`button`,onClick:()=>r(p),style:{border:`none`,borderRadius:`16px`,padding:`14px 26px`,fontWeight:800,fontFamily:`'Sora', sans-serif`,color:`#fff`,background:`var(--primary-blue, #3b82f6)`,cursor:`pointer`},children:m})]})})}function wt({onBack:e,backLabel:t}){return(0,q.jsx)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:(0,q.jsxs)(`div`,{style:{maxWidth:`520px`,margin:`60px auto`,padding:`40px 32px`,textAlign:`center`,background:`var(--card-bg, #fff)`,border:`1px solid var(--border, #e2e8f0)`,borderRadius:`28px`},children:[(0,q.jsx)(`div`,{style:{width:`72px`,height:`72px`,margin:`0 auto 20px`,borderRadius:`24px`,background:`#f1f5f9`,color:`#94a3b8`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.8rem`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-circle-minus`})}),(0,q.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontWeight:900,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`},children:`Not part of your course`}),(0,q.jsx)(`p`,{style:{color:`var(--text-light, #64748b)`,fontWeight:600,margin:`0 0 26px`,lineHeight:1.55},children:`Your institute does not run this. Everything it does teach is in your menu.`}),(0,q.jsx)(`button`,{type:`button`,onClick:e,style:{border:`none`,borderRadius:`16px`,padding:`14px 26px`,fontWeight:800,fontFamily:`'Sora', sans-serif`,color:`#fff`,background:`var(--primary-blue, #3b82f6)`,cursor:`pointer`},children:t})]})})}function Tt({slug:e=``}){let[n,r]=(0,L.useState)(e),[i,a]=(0,L.useState)(``),o=N(),s=k(),c=!!e;function l(e){e.preventDefault(),a(``),t(n)||a(`Use 3-32 characters: lowercase letters, numbers and dashes only.`)}return(0,q.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,q.jsx)(g,{}),(0,q.jsx)(`style`,{children:`
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
      `}),(0,q.jsxs)(`div`,{className:`institute-missing-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,q.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:c?`linear-gradient(135deg, #f59e0b, #b45309)`:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:c?`0 14px 32px -4px rgba(245, 158, 11, 0.5)`:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent)`},children:(0,q.jsx)(`i`,{className:c?`fa-solid fa-link-slash`:`fa-solid fa-school`})})}),(0,q.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,q.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:c?`color-mix(in srgb, #f59e0b 14%, transparent)`:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:c?`#b45309`:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-info`,style:{fontSize:`0.68rem`}}),c?`Unknown Portal`:`Select Institute`]})}),(0,q.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:c?`Portal Not Found`:`Which Institute?`}),(0,q.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:c?(0,q.jsxs)(q.Fragment,{children:[`There is no institute matching `,(0,q.jsx)(`strong`,{style:{color:`var(--dark-blue, #0f172a)`},children:e}),`.`,o?` Check the code below, or ask your institute for the correct link.`:` Please check the link your institute gave you.`]}):`Enter your institute code to open its student panel.`}),o?(0,q.jsxs)(`form`,{onSubmit:l,style:{marginTop:`26px`,textAlign:`left`},children:[(0,q.jsx)(`label`,{htmlFor:`institute-slug`,style:{display:`block`,fontSize:`0.76rem`,fontWeight:`900`,letterSpacing:`0.08em`,textTransform:`uppercase`,color:`var(--text-light, #64748b)`,marginBottom:`8px`},children:`Institute code`}),(0,q.jsx)(`input`,{id:`institute-slug`,className:`institute-missing-input`,type:`text`,value:n,onChange:e=>r(e.target.value.toLowerCase().trim()),placeholder:`speedomath`,autoComplete:`off`,autoCapitalize:`none`,spellCheck:`false`,style:{width:`100%`,boxSizing:`border-box`,border:`1px solid var(--border, #cbd5e1)`,borderRadius:`16px`,padding:`14px 16px`,fontSize:`1rem`,fontWeight:`700`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.9)`,transition:`border-color 0.2s, box-shadow 0.2s`}}),i?(0,q.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err, #c62828) 20%, transparent)`,borderRadius:`14px`,padding:`11px 14px`,fontSize:`0.86rem`,fontWeight:`700`,margin:`12px 0 0`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{flexShrink:0}}),(0,q.jsx)(`span`,{children:i})]}):null,(0,q.jsxs)(`button`,{type:`submit`,style:{marginTop:`18px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-arrow-right`}),(0,q.jsx)(`span`,{children:`Continue`})]}),s?(0,q.jsx)(`button`,{type:`button`,onClick:w,style:{marginTop:`10px`,width:`100%`,border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`13px 20px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.9rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`},children:`Clear and start over`}):null]}):null]})]})}function Et(){let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}-${String(e.getDate()).padStart(2,`0`)}`}async function Dt(e){let[t,n]=await Promise.all([p.from(`chess_student_levels`).select(`chess_levels(name)`).eq(`student_membership_id`,e).maybeSingle(),p.rpc(`chess_get_my_daily_practice`,{p_day:Et()})]),r=Array.isArray(n.data?.puzzles)?n.data.puzzles:[];return{levelName:t.data?.chess_levels?.name||null,total:r.length,done:r.filter(e=>e.result!=null).length,paused:!!n.data?.paused,error:t.error?.message||n.error?.message||null}}var Ot=`

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
`;function kt(){let e=_(),{activeSubjects:t}=M(),r=K(t).chess,{profile:i,institute:a,membership:o,user:s}=S(),[c,l]=(0,L.useState)(`overview`),[u,d]=(0,L.useState)(null);(0,L.useEffect)(()=>{if(!r||!o?.id)return;let e=!0;return Dt(o.id).then(t=>{e&&d(t)}).catch(()=>{}),()=>{e=!1}},[r,o?.id]);let p=!!(u&&u.total>0&&u.done>=u.total),[m,h]=(0,L.useState)({liveClasses:[],eBooks:[],recordedCourses:[],exams:[],results:[],achievements:[],loading:!0,error:``}),v=i?.current_level===999?`All levels`:`Level ${i?.current_level??0}`,y=i?.full_name?.split(` `)?.[0]||s?.email?.split(`@`)?.[0]||`Student`,b=jt(o?.id),x=Mt(o?.id);(0,L.useEffect)(()=>{let e=!0;async function t(){if(!a?.id||!o?.id){h(e=>({...e,loading:!1}));return}let t=`home_dash_${a.id}_${o.id}`;try{let n=JSON.parse(sessionStorage.getItem(t)||`null`);if(n&&Date.now()-n._at<300*1e3){e&&h({...n,loading:!1,error:``});return}}catch{}h(e=>({...e,loading:!0,error:``}));let[n,r,i,s,c]=await Promise.all([F(a.id),te(a.id,`ebook`),re(a.id),ee(a.id,o.id),j(a.id,o.id)]);if(!e)return;let l=n.error||r.error||i.error||s.error||c.error,u={liveClasses:n.data??[],eBooks:r.data??[],recordedCourses:i.data?.courses??[],exams:s.data?.exams??[],results:s.data?.results??[],achievements:c.data??[],loading:!1,error:l?.message||``};if(!l)try{sessionStorage.setItem(t,JSON.stringify({...u,_at:Date.now()}))}catch{}h(u)}return t(),()=>{e=!1}},[a?.id,o?.id]);let C=(0,L.useMemo)(()=>m.exams.filter(e=>e.kind!==`secure`),[m.exams]),w=(0,L.useMemo)(()=>m.results.filter(e=>{let t=m.exams.find(t=>t.id===e.exam_id);return t&&t.kind!==`secure`}),[m.exams,m.results]),T=m.liveClasses[0],E=C.filter(e=>!w.some(t=>t.exam_id===e.id)),D=w[0],O=f(i?.current_level),k=localStorage.getItem(`practice_session_${s?.id||`guest`}_${At()}_level_${O}`)===`done`,A=(0,L.useMemo)(()=>Pt(s?.id),[s?.id]),N=(0,L.useMemo)(()=>A.reduce((e,t)=>Math.max(e,t.percent||0),0),[A]),P=w.map(e=>{let t=Number(e.total_marks??e.totalMarks??0);return t?Math.round(Number(e.score??0)/t*100):null}).filter(e=>e!=null),ne=P.length?Math.round(P.reduce((e,t)=>e+t,0)/P.length):null,ie=new Set(m.achievements.map(e=>e.achievement_code)),I=n.length?Math.round(m.achievements.length/n.length*100):0,R=Ft(m.achievements,ie),z=[T?{icon:`fa-video`,title:`Live class is ready`,text:`${T.title||`Your next class`} is coming up.`,bg:`#fee2e2`,color:`#dc2626`,action:()=>e(`/live-classes`)}:null,E[0]?{icon:`fa-file-lines`,title:`Exam waiting`,text:`${E[0].title||`New exam`} is ready to solve.`,bg:`#e0e7ff`,color:`#4f46e5`,action:()=>e(`/exam`)}:null,D?{icon:`fa-award`,title:`Result posted`,text:`Latest score: ${It(D)}.`,bg:`#dcfce7`,color:`#16a34a`,action:()=>e(`/exam`)}:null,m.recordedCourses[0]?{icon:`fa-circle-play`,title:`Video lesson`,text:`${m.recordedCourses[0].title||m.recordedCourses[0].name||`A course`} is available.`,bg:`#fef3c7`,color:`#d97706`,action:()=>e(`/recorded-lectures`)}:null].filter(Boolean);return(0,q.jsxs)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 10px)`},children:[(0,q.jsx)(`style`,{children:Ot}),(0,q.jsx)(g,{}),(0,q.jsxs)(`div`,{className:`dashboard-container`,children:[(0,q.jsxs)(`div`,{className:`dash-header`,children:[(0,q.jsxs)(`div`,{children:[(0,q.jsxs)(`h1`,{className:`dash-title`,children:[`Welcome back, `,(0,q.jsx)(`span`,{children:y}),`!`]}),(0,q.jsxs)(`p`,{className:`dash-subtitle`,children:[`Pick today's quest, collect wins, and keep your `,r?`abacus and chess`:`abacus`,` brain sharp.`]})]}),(0,q.jsxs)(`div`,{className:`dash-date`,children:[(0,q.jsx)(`i`,{className:`fa-regular fa-calendar`,style:{marginRight:`6px`}}),new Date().toLocaleDateString(`en-US`,{weekday:`short`,month:`short`,day:`numeric`})]})]}),(0,q.jsxs)(`div`,{className:`home-tabs`,role:`tablist`,"aria-label":`Home dashboard`,children:[(0,q.jsxs)(`button`,{className:`home-tab ${c===`overview`?`active`:``}`,onClick:()=>l(`overview`),children:[(0,q.jsx)(`i`,{className:`fa-solid fa-house`}),`Overview`]}),(0,q.jsxs)(`button`,{className:`home-tab ${c===`streak`?`active`:``}`,onClick:()=>l(`streak`),children:[(0,q.jsx)(`i`,{className:`fa-solid fa-fire`}),`Streak`]})]}),c===`streak`?(0,q.jsxs)(`div`,{className:`streak-card`,children:[(0,q.jsx)(`div`,{className:`streak-flame`,children:(0,q.jsx)(`i`,{className:`fa-solid fa-fire`})}),(0,q.jsxs)(`div`,{className:`streak-copy`,children:[(0,q.jsxs)(`h2`,{children:[b,` day streak`]}),(0,q.jsx)(`p`,{children:`Come back every day to keep the flame glowing.`})]}),(0,q.jsx)(`div`,{className:`streak-days`,children:x.map(e=>(0,q.jsxs)(`div`,{className:`streak-day ${e.done?`done`:``} ${e.today?`today`:``}`,children:[(0,q.jsx)(`i`,{className:`fa-solid ${e.done?`fa-check`:`fa-fire`}`}),(0,q.jsx)(`span`,{children:e.label})]},e.key))})]}):null,(0,q.jsxs)(`div`,{className:`stats-grid`,style:{display:c===`overview`?void 0:`none`},children:[(0,q.jsxs)(`div`,{className:`stat-card`,style:{"--tile":`#8b5cf6`},children:[(0,q.jsx)(`div`,{className:`stat-icon`,style:{background:`#e0e7ff`,color:`#4f46e5`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-layer-group`})}),(0,q.jsxs)(`div`,{className:`stat-info`,children:[(0,q.jsx)(`div`,{className:`stat-val`,children:v}),(0,q.jsx)(`div`,{className:`stat-label`,children:r?`Abacus Level`:`Current Stage`})]})]}),r?(0,q.jsxs)(`div`,{className:`stat-card`,style:{"--tile":`#0ea5e9`},children:[(0,q.jsx)(`div`,{className:`stat-icon`,style:{background:`#e0f2fe`,color:`#0284c7`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-chess-knight`})}),(0,q.jsxs)(`div`,{className:`stat-info`,children:[(0,q.jsx)(`div`,{className:`stat-val`,children:u?.levelName||`Not set`}),(0,q.jsx)(`div`,{className:`stat-label`,children:`Chess Level`})]})]}):null,(0,q.jsxs)(`div`,{className:`stat-card`,style:{"--tile":`#22c55e`},children:[(0,q.jsx)(`div`,{className:`stat-icon`,style:{background:`#dcfce7`,color:`#16a34a`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-bullseye`})}),(0,q.jsxs)(`div`,{className:`stat-info`,children:[(0,q.jsx)(`div`,{className:`stat-val`,children:ne==null?`--`:`${ne}%`}),(0,q.jsx)(`div`,{className:`stat-label`,children:`Exam Average`})]})]}),(0,q.jsxs)(`div`,{className:`stat-card`,style:{"--tile":k?`#22c55e`:`#f59e0b`},children:[(0,q.jsx)(`div`,{className:`stat-icon`,style:{background:k?`#d1fae5`:`#fef3c7`,color:k?`#10b981`:`#d97706`},children:(0,q.jsx)(`i`,{className:`fa-solid ${k?`fa-circle-check`:`fa-calendar-check`}`})}),(0,q.jsxs)(`div`,{className:`stat-info`,children:[(0,q.jsx)(`div`,{className:`stat-val`,style:{color:k?`#15803d`:`#b45309`},children:k?`Complete`:`Pending`}),(0,q.jsx)(`div`,{className:`stat-label`,children:r?`Abacus Practice`:`Daily Practice`})]})]}),(0,q.jsxs)(`div`,{className:`stat-card`,style:{"--tile":`#ec4899`},children:[(0,q.jsx)(`div`,{className:`stat-icon`,style:{background:`#fce7f3`,color:`#db2777`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-clock`})}),(0,q.jsxs)(`div`,{className:`stat-info`,children:[(0,q.jsx)(`div`,{className:`stat-val`,children:m.liveClasses.length}),(0,q.jsx)(`div`,{className:`stat-label`,children:`Live Classes`})]})]})]}),(0,q.jsxs)(`div`,{className:`dash-main`,style:{display:c===`overview`?void 0:`none`},children:[(0,q.jsxs)(`div`,{className:`dash-left-col`,children:[(0,q.jsxs)(`div`,{className:`quest-card ${k?``:`pending-quest-highlight`}`,style:k?{}:{border:`2px solid #f59e0b`,boxShadow:`0 8px 24px -4px rgba(245, 158, 11, 0.35)`,background:`linear-gradient(135deg, color-mix(in srgb, var(--gold) 15%, white), white)`,position:`relative`},children:[!k&&(0,q.jsxs)(`span`,{style:{position:`absolute`,top:`-10px`,right:`14px`,background:`#f59e0b`,color:`#ffffff`,fontSize:`0.68rem`,fontWeight:`900`,padding:`3px 10px`,borderRadius:`50px`,textTransform:`uppercase`,letterSpacing:`0.8px`,boxShadow:`0 2px 8px rgba(245, 158, 11, 0.4)`,zIndex:2},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-bell`,style:{marginRight:4}}),` PENDING TODAY`]}),(0,q.jsxs)(`div`,{className:`quest-copy`,children:[(0,q.jsx)(`h3`,{style:{color:k?void 0:`#d97706`},children:r?k?`Abacus Practice Done!`:`Abacus Practice`:k?`Daily Practice Done!`:`Daily Practice`}),(0,q.jsx)(`p`,{children:k?`Nice work. Today's practice is done. A fresh round unlocks tomorrow.`:`Solve today's questions for your level.`})]}),(0,q.jsx)(`button`,{className:`quest-start`,onClick:()=>e(`/practice-session`),style:k?{}:{background:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,boxShadow:`0 4px 14px rgba(245, 158, 11, 0.4)`,fontWeight:`800`},children:k?`Review`:`Start Practice`})]}),r?(0,q.jsxs)(`div`,{className:`quest-card ${u&&!p&&u.total?`pending-quest-highlight`:``}`,style:u&&!p&&u.total?{border:`2px solid #0ea5e9`,boxShadow:`0 8px 24px -4px rgba(14, 165, 233, 0.3)`,background:`linear-gradient(135deg, #e0f2fe, white)`}:{},children:[(0,q.jsxs)(`div`,{className:`quest-copy`,children:[(0,q.jsxs)(`h3`,{style:{color:u&&!p&&u.total?`#0369a1`:void 0},children:[(0,q.jsx)(`i`,{className:`fa-solid fa-chess-knight`,style:{marginRight:8}}),p?`Chess Puzzles Done!`:`Chess Puzzles`]}),(0,q.jsx)(`p`,{children:u?u.levelName?u.paused?`Chess practice is paused for now.`:p?`All ${u.total} puzzles solved. New ones tomorrow.`:`${u.done} of ${u.total} puzzles done today · ${u.levelName}`:`Your coach will give you a chess level soon.`:`Loading your chess puzzles…`})]}),(0,q.jsx)(`button`,{className:`quest-start`,onClick:()=>e(`/chess/practice`),disabled:!u?.levelName,style:u&&!p&&u.total?{background:`linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)`,boxShadow:`0 4px 14px rgba(14, 165, 233, 0.35)`,fontWeight:`800`}:{},children:p?`See result`:u?.done?`Continue`:`Start Puzzles`})]}):null,(0,q.jsxs)(`div`,{className:`panel`,children:[(0,q.jsxs)(`div`,{className:`panel-header`,children:[(0,q.jsx)(`h2`,{className:`panel-title`,children:`Weekly Activity`}),(0,q.jsx)(`button`,{className:`panel-action`,onClick:()=>e(`/practice-session`),children:`Daily Practice`})]}),(0,q.jsx)(`div`,{className:`chart-area`,children:A.map(e=>(0,q.jsxs)(`div`,{className:`chart-bar-group`,children:[(0,q.jsx)(`div`,{className:`chart-bar-wrap`,children:(0,q.jsx)(`div`,{className:`chart-bar ${e.percent>=N&&N>0?`peak`:``}`,style:{height:`${e.percent}%`}})}),(0,q.jsx)(`span`,{className:`chart-label`,children:e.day})]},e.day))})]}),(0,q.jsxs)(`div`,{className:`panel trophy-panel`,children:[(0,q.jsxs)(`div`,{className:`panel-header`,children:[(0,q.jsx)(`h2`,{className:`panel-title`,children:`Trophy Power`}),(0,q.jsx)(`button`,{className:`panel-action`,onClick:()=>e(`/achievement`),children:`Badges`})]}),(0,q.jsxs)(`div`,{className:`achievement-meter`,children:[(0,q.jsx)(`div`,{className:`trophy-big`,children:(0,q.jsx)(`i`,{className:`fa-solid fa-trophy`})}),(0,q.jsxs)(`div`,{className:`meter-copy`,children:[(0,q.jsxs)(`strong`,{children:[m.achievements.length,`/`,n.length]}),(0,q.jsx)(`span`,{children:`badges collected`})]}),(0,q.jsxs)(`div`,{className:`meter-percent`,children:[I,`%`]})]}),(0,q.jsx)(`div`,{className:`achievement-track`,"aria-label":`Achievement progress`,children:(0,q.jsx)(`div`,{className:`achievement-fill`,style:{width:`${Math.max(4,I)}%`}})}),(0,q.jsx)(`div`,{className:`trophy-row`,children:R.map(t=>(0,q.jsxs)(`div`,{className:`mini-trophy ${t.earned?``:`locked`}`,onClick:()=>e(`/achievement`),children:[(0,q.jsx)(`div`,{className:`mini-trophy-icon`,style:{background:t.color},children:(0,q.jsx)(`i`,{className:`fa-solid ${t.icon}`})}),(0,q.jsx)(`span`,{children:t.name})]},t.code))})]})]}),(0,q.jsxs)(`div`,{className:`panel`,style:{display:`flex`,flexDirection:`column`},children:[(0,q.jsxs)(`div`,{className:`panel-header`,children:[(0,q.jsx)(`h2`,{className:`panel-title`,children:`Today's Updates`}),(0,q.jsx)(`button`,{className:`panel-action`,onClick:()=>e(`/recorded-lectures`),children:`Lessons`})]}),(0,q.jsxs)(`div`,{className:`notif-list`,children:[m.loading?(0,q.jsx)(`div`,{className:`home-loading`,children:`Loading your quests...`}):null,m.error?(0,q.jsxs)(`div`,{className:`home-loading`,children:[`Could not load some updates: `,m.error]}):null,!m.loading&&!z.length?(0,q.jsxs)(`div`,{className:`notif-item`,onClick:()=>e(`/practice-session`),style:{"--tile":`#16a34a`},children:[(0,q.jsx)(`div`,{className:`notif-icon`,style:{background:`#dcfce7`,color:`#16a34a`},children:(0,q.jsx)(`i`,{className:`fa-solid fa-wand-magic-sparkles`})}),(0,q.jsxs)(`div`,{className:`notif-content`,children:[(0,q.jsx)(`h4`,{children:`No new class work`}),(0,q.jsx)(`p`,{children:`Your daily practice quest is ready.`})]})]}):null,z.map(e=>(0,q.jsxs)(`div`,{className:`notif-item`,onClick:e.action,style:{"--tile":e.color},children:[(0,q.jsx)(`div`,{className:`notif-icon`,style:{background:e.bg,color:e.color},children:(0,q.jsx)(`i`,{className:`fa-solid ${e.icon}`})}),(0,q.jsxs)(`div`,{className:`notif-content`,children:[(0,q.jsx)(`h4`,{children:e.title}),(0,q.jsx)(`p`,{children:e.text})]})]},e.title))]}),(0,q.jsx)(`button`,{className:`btn btn-secondary`,style:{marginTop:`20px`,width:`100%`,padding:`12px`},onClick:()=>e(`/exam`),children:`View Exam History`})]})]})]})]})}function At(){return new Date().toISOString().slice(0,10)}function jt(e){if(!e)return 0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);return Number(t.streakCount||0)}catch{return 0}}function Mt(e){let t=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],n=new Date,r=``,i=0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);r=t.lastLoginDate||``,i=Number(t.streakCount||0)}catch{}return Array.from({length:7},(e,a)=>{let o=new Date(n);o.setDate(n.getDate()-(6-a));let s=o.toLocaleDateString(`en-CA`),c=Math.round((Nt(n)-Nt(o))/864e5),l=r&&c<i;return{key:s,label:t[o.getDay()],today:s===n.toLocaleDateString(`en-CA`),done:l}})}function Nt(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function Pt(e){let t=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],n=new Date;return Array.from({length:7},(r,i)=>{let a=new Date(n);a.setDate(n.getDate()-(6-i));let o=a.toISOString().slice(0,10);return{day:t[a.getDay()],percent:Object.keys(localStorage).filter(t=>t.startsWith(`practice_session_${e||`guest`}_${o}`)&&localStorage.getItem(t)===`done`).length?100:18}})}function Ft(e,t){let r=e.slice(0,2).map(e=>({...u(e.achievement_code),earned:!0})).filter(e=>e.code),i=n.filter(e=>!t.has(e.code)).slice(0,Math.max(0,4-r.length)).map(e=>({...e,earned:!1}));return[...r,...i].slice(0,4)}function It(e){let t=Number(e?.score??0),n=Number(e?.total_marks??e?.totalMarks??0);return n?`${t}/${n}`:`${t}`}var Lt=`
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
`;function Rt(){let e=_();return(0,q.jsxs)(`div`,{className:`page-wrap`,style:{justifyContent:`center`},children:[(0,q.jsx)(`style`,{children:Lt}),(0,q.jsx)(g,{}),(0,q.jsxs)(`div`,{className:`practice-card not-found-container`,style:{maxWidth:`550px`,marginTop:0},children:[(0,q.jsx)(`div`,{className:`abacus-wrap`,children:(0,q.jsxs)(`svg`,{width:`320`,height:`160`,viewBox:`0 0 420 200`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,q.jsx)(`rect`,{x:`10`,y:`10`,width:`400`,height:`180`,rx:`16`,ry:`16`,fill:`#ffffff`,stroke:`var(--dark-blue)`,strokeWidth:`6`}),(0,q.jsx)(`rect`,{x:`10`,y:`85`,width:`400`,height:`6`,fill:`var(--dark-blue)`}),(0,q.jsx)(`text`,{x:`95`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`4`}),(0,q.jsx)(`text`,{x:`210`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`0`}),(0,q.jsx)(`text`,{x:`325`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`4`}),(0,q.jsx)(`line`,{x1:`95`,y1:`20`,x2:`95`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`72`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`101`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`123`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`145`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`158`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`line`,{x1:`210`,y1:`20`,x2:`210`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`35`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`101`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`118`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`135`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`152`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`line`,{x1:`325`,y1:`20`,x2:`325`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`72`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`101`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`123`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`145`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,q.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`158`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`})]})}),(0,q.jsx)(`div`,{className:`error-code`,children:`404`}),(0,q.jsx)(`p`,{className:`error-msg`,children:`Oops! This bead slipped off the rod.`}),(0,q.jsx)(`p`,{className:`error-sub`,children:`Page not found`}),(0,q.jsxs)(`button`,{className:`btn btn-primary`,onClick:()=>e(`/`),children:[(0,q.jsx)(`i`,{className:`fa-solid fa-house`,style:{marginRight:`8px`}}),` Back to Dashboard`]})]})]})}var zt=(0,L.lazy)(()=>o(()=>import(`./Basic-CoIdZVYD.js`),__vite__mapDeps([0,1,2]))),Bt=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e._),__vite__mapDeps([3,2,1]))),Vt=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.v),__vite__mapDeps([3,2,1]))),Ht=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.u),__vite__mapDeps([3,2,1]))),Ut=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.a),__vite__mapDeps([3,2,1]))),Wt=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.o),__vite__mapDeps([3,2,1]))),Gt=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.d),__vite__mapDeps([3,2,1]))),Kt=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.m),__vite__mapDeps([3,2,1]))),qt=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.f),__vite__mapDeps([3,2,1]))),Jt=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.p),__vite__mapDeps([3,2,1]))),Yt=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.r),__vite__mapDeps([3,2,1]))),Xt=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.h),__vite__mapDeps([3,2,1]))),Zt=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.n),__vite__mapDeps([3,2,1]))),Qt=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.g),__vite__mapDeps([3,2,1]))),$t=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.s),__vite__mapDeps([3,2,1]))),en=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.t),__vite__mapDeps([3,2,1]))),tn=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.i),__vite__mapDeps([3,2,1]))),nn=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.c),__vite__mapDeps([3,2,1]))),rn=(0,L.lazy)(()=>o(()=>import(`./levels-8MlW5pS5.js`).then(e=>e.l),__vite__mapDeps([3,2,1]))),an=(0,L.lazy)(()=>o(()=>import(`./Abacus-D-ilulso.js`),__vite__mapDeps([4,2,1,5]))),on=(0,L.lazy)(()=>o(()=>import(`./interactive-DJFVKhAI.js`).then(e=>e.a),__vite__mapDeps([1,2]))),sn=(0,L.lazy)(()=>o(()=>import(`./interactive-DJFVKhAI.js`).then(e=>e.c),__vite__mapDeps([1,2]))),cn=(0,L.lazy)(()=>o(()=>import(`./interactive-DJFVKhAI.js`).then(e=>e.l),__vite__mapDeps([1,2]))),ln=(0,L.lazy)(()=>o(()=>import(`./interactive-DJFVKhAI.js`).then(e=>e.r),__vite__mapDeps([1,2]))),un=(0,L.lazy)(()=>o(()=>import(`./interactive-DJFVKhAI.js`).then(e=>e.o),__vite__mapDeps([1,2]))),dn=(0,L.lazy)(()=>o(()=>import(`./interactive-DJFVKhAI.js`).then(e=>e.s),__vite__mapDeps([1,2]))),fn=(0,L.lazy)(()=>o(()=>import(`./interactive-DJFVKhAI.js`).then(e=>e.t),__vite__mapDeps([1,2]))),pn=(0,L.lazy)(()=>o(()=>import(`./interactive-DJFVKhAI.js`).then(e=>e.i),__vite__mapDeps([1,2]))),mn=(0,L.lazy)(()=>o(()=>import(`./interactive-DJFVKhAI.js`).then(e=>e.n),__vite__mapDeps([1,2]))),hn=(0,L.lazy)(()=>o(()=>import(`./VedicMaster-CDkt-H4z.js`),__vite__mapDeps([6,1,2,7]))),gn=(0,L.lazy)(()=>o(()=>import(`./VedicTrickPractice-Cpoms3wE.js`),__vite__mapDeps([8,2,1,7]))),_n=(0,L.lazy)(()=>o(()=>import(`./App-BeVBMOGG.js`),__vite__mapDeps([9,2,1,10,11,12,13,14,15,16]))),vn=(0,L.lazy)(()=>o(()=>import(`./RubiksCube-BZez0dHR.js`),__vite__mapDeps([17,2,1,18,5,14]))),yn=(0,L.lazy)(()=>o(()=>import(`./Practice-Be7PUjcc.js`),__vite__mapDeps([19,2,1]))),bn=(0,L.lazy)(()=>o(()=>import(`./PracticeSession-CjKzTwA0.js`),__vite__mapDeps([20,2,1,13,7,14,15]))),xn=(0,L.lazy)(()=>o(()=>import(`./Exam-DUGnrnQK.js`),__vite__mapDeps([21,2,1,13,22]))),Sn=(0,L.lazy)(()=>o(()=>import(`./LiveClasses-6Qc6MtTJ.js`),__vite__mapDeps([23,2,1,22]))),Cn=(0,L.lazy)(()=>o(()=>import(`./RecordedLecture-DICcABxO.js`),__vite__mapDeps([24,2,1,11,22]))),wn=(0,L.lazy)(()=>o(()=>import(`./Classroom-BOg9KrRm.js`),__vite__mapDeps([25,2,1,11]))),Tn=(0,L.lazy)(()=>o(()=>import(`./Syllabus-D2kF5VUy.js`),__vite__mapDeps([26,2,1]))),En=(0,L.lazy)(()=>o(()=>import(`./EBook-Bu7Gmo81.js`),__vite__mapDeps([27,2,1,10,11,12,22]))),Dn=(0,L.lazy)(()=>o(()=>import(`./Profile-Dthhu512.js`),__vite__mapDeps([28,2,1]))),On=(0,L.lazy)(()=>o(()=>import(`./Achievement-B9Gen6XL.js`),__vite__mapDeps([29,2,1]))),kn=(0,L.lazy)(()=>o(()=>import(`./GameZone-XcBTopb7.js`),__vite__mapDeps([30,2,1,14]))),An=(0,L.lazy)(()=>o(()=>import(`./mcq-DzM2X8cc.js`).then(e=>e.f),__vite__mapDeps([14,2,1]))),jn=(0,L.lazy)(()=>o(()=>import(`./mcq-DzM2X8cc.js`).then(e=>e.p),__vite__mapDeps([14,2,1]))),Mn=(0,L.lazy)(()=>o(()=>import(`./mcq-DzM2X8cc.js`).then(e=>e.c),__vite__mapDeps([14,2,1]))),Nn=(0,L.lazy)(()=>o(()=>import(`./mcq-DzM2X8cc.js`).then(e=>e.l),__vite__mapDeps([14,2,1]))),Pn=(0,L.lazy)(()=>o(()=>import(`./mcq-DzM2X8cc.js`).then(e=>e.i),__vite__mapDeps([14,2,1]))),Fn=(0,L.lazy)(()=>o(()=>import(`./mcq-DzM2X8cc.js`).then(e=>e.s),__vite__mapDeps([14,2,1]))),In=(0,L.lazy)(()=>o(()=>import(`./mcq-DzM2X8cc.js`).then(e=>e.t),__vite__mapDeps([14,2,1]))),Ln=(0,L.lazy)(()=>o(()=>import(`./mcq-DzM2X8cc.js`).then(e=>e.n),__vite__mapDeps([14,2,1]))),Rn=(0,L.lazy)(()=>o(()=>import(`./mcq-DzM2X8cc.js`).then(e=>e.d),__vite__mapDeps([14,2,1]))),zn=(0,L.lazy)(()=>o(()=>import(`./mcq-DzM2X8cc.js`).then(e=>e.u),__vite__mapDeps([14,2,1]))),Bn=(0,L.lazy)(()=>o(()=>import(`./mcq-DzM2X8cc.js`).then(e=>e.a),__vite__mapDeps([14,2,1]))),Vn=(0,L.lazy)(()=>o(()=>import(`./mcq-DzM2X8cc.js`).then(e=>e.o),__vite__mapDeps([14,2,1]))),Hn=(0,L.lazy)(()=>o(()=>import(`./mcq-DzM2X8cc.js`).then(e=>e.r),__vite__mapDeps([14,2,1]))),Un=new Set(`/addition./addsub./negative./multiply./division./decimal-addsub./decimal-multiply./decimal-division./sq-root./cube-root./square./cube./long-multiply./table./percentage./lcm./hcf./mcq-addition./mcq-addsub./mcq-decimal-add./mcq-decimal-addsub./mcq-multiply./mcq-division./mcq-square./mcq-sqroot./mcq-cube./mcq-cuberoot./mcq-lcm./mcq-hcf./mcq-percentage`.split(`.`)),Wn=new Set([`/interactive-abacus-addition`,`/interactive-abacus-addsub`,`/interactive-abacus-multiply`,`/interactive-abacus-division`,`/interactive-abacus-decimals`,`/interactive-abacus-sqroots`,`/interactive-abacus-lcmhcf`,`/interactive-abacus-percentage`]);function Gn(){let{instituteReady:e,instituteMissing:t,instituteSlug:n}=S();return e&&t&&!yt()?(0,q.jsx)(Tt,{slug:n}):(0,q.jsxs)(i,{children:[(0,q.jsx)(Kn,{}),(0,q.jsx)(qn,{}),(0,q.jsx)(L.Suspense,{fallback:null,children:(0,q.jsxs)(v,{children:[(0,q.jsx)(r,{path:`/login`,element:(0,q.jsx)(pt,{})}),(0,q.jsx)(r,{path:`/policies`,element:(0,q.jsx)(mt,{})}),(0,q.jsx)(r,{path:`/reset-password`,element:(0,q.jsx)(ht,{})}),(0,q.jsx)(r,{path:`/`,element:(0,q.jsx)($,{children:(0,q.jsx)(Xn,{})})}),(0,q.jsx)(r,{path:`/chess/*`,element:(0,q.jsx)(Zn,{})}),(0,q.jsx)(r,{path:`/Basic`,element:(0,q.jsx)($,{children:(0,q.jsx)(zt,{})})}),(0,q.jsx)(r,{path:`/addition`,element:(0,q.jsx)($,{children:(0,q.jsx)(Bt,{})})}),(0,q.jsx)(r,{path:`/addsub`,element:(0,q.jsx)($,{children:(0,q.jsx)(Vt,{})})}),(0,q.jsx)(r,{path:`/formula-direct`,element:(0,q.jsx)($,{children:(0,q.jsx)(Ht,{formula:`direct`})})}),(0,q.jsx)(r,{path:`/formula-small-friend`,element:(0,q.jsx)($,{children:(0,q.jsx)(Ht,{formula:`smallFriend`})})}),(0,q.jsx)(r,{path:`/formula-big-friend`,element:(0,q.jsx)($,{children:(0,q.jsx)(Ht,{formula:`bigFriend`})})}),(0,q.jsx)(r,{path:`/formula-combination`,element:(0,q.jsx)($,{children:(0,q.jsx)(Ht,{formula:`combination`})})}),(0,q.jsx)(r,{path:`/negative`,element:(0,q.jsx)($,{children:(0,q.jsx)(Ut,{})})}),(0,q.jsx)(r,{path:`/multiply`,element:(0,q.jsx)($,{children:(0,q.jsx)(Wt,{})})}),(0,q.jsx)(r,{path:`/division`,element:(0,q.jsx)($,{children:(0,q.jsx)(Gt,{})})}),(0,q.jsx)(r,{path:`/decimal-addsub`,element:(0,q.jsx)($,{children:(0,q.jsx)(Kt,{})})}),(0,q.jsx)(r,{path:`/decimal-multiply`,element:(0,q.jsx)($,{children:(0,q.jsx)(qt,{})})}),(0,q.jsx)(r,{path:`/decimal-division`,element:(0,q.jsx)($,{children:(0,q.jsx)(Jt,{})})}),(0,q.jsx)(r,{path:`/sq-root`,element:(0,q.jsx)($,{children:(0,q.jsx)(Yt,{})})}),(0,q.jsx)(r,{path:`/cube-root`,element:(0,q.jsx)($,{children:(0,q.jsx)(Xt,{})})}),(0,q.jsx)(r,{path:`/square`,element:(0,q.jsx)($,{children:(0,q.jsx)(Zt,{})})}),(0,q.jsx)(r,{path:`/cube`,element:(0,q.jsx)($,{children:(0,q.jsx)(Qt,{})})}),(0,q.jsx)(r,{path:`/long-multiply`,element:(0,q.jsx)($,{children:(0,q.jsx)($t,{})})}),(0,q.jsx)(r,{path:`/table`,element:(0,q.jsx)($,{children:(0,q.jsx)(en,{})})}),(0,q.jsx)(r,{path:`/percentage`,element:(0,q.jsx)($,{children:(0,q.jsx)(tn,{})})}),(0,q.jsx)(r,{path:`/lcm`,element:(0,q.jsx)($,{children:(0,q.jsx)(nn,{})})}),(0,q.jsx)(r,{path:`/hcf`,element:(0,q.jsx)($,{children:(0,q.jsx)(rn,{})})}),(0,q.jsx)(r,{path:`/abacus`,element:(0,q.jsx)($,{children:(0,q.jsx)(an,{})})}),(0,q.jsx)(r,{path:`/interactive-abacus`,element:(0,q.jsx)($,{children:(0,q.jsx)(on,{})})}),(0,q.jsx)(r,{path:`/interactive-abacus-addition`,element:(0,q.jsx)($,{children:(0,q.jsx)(sn,{})})}),(0,q.jsx)(r,{path:`/interactive-abacus-addsub`,element:(0,q.jsx)($,{children:(0,q.jsx)(cn,{})})}),(0,q.jsx)(r,{path:`/interactive-abacus-multiply`,element:(0,q.jsx)($,{children:(0,q.jsx)(ln,{})})}),(0,q.jsx)(r,{path:`/interactive-abacus-division`,element:(0,q.jsx)($,{children:(0,q.jsx)(un,{})})}),(0,q.jsx)(r,{path:`/interactive-abacus-decimals`,element:(0,q.jsx)($,{children:(0,q.jsx)(dn,{})})}),(0,q.jsx)(r,{path:`/interactive-abacus-sqroots`,element:(0,q.jsx)($,{children:(0,q.jsx)(fn,{})})}),(0,q.jsx)(r,{path:`/interactive-abacus-lcmhcf`,element:(0,q.jsx)($,{children:(0,q.jsx)(pn,{})})}),(0,q.jsx)(r,{path:`/interactive-abacus-percentage`,element:(0,q.jsx)($,{children:(0,q.jsx)(mn,{})})}),(0,q.jsx)(r,{path:`/iabacus`,element:(0,q.jsx)(h,{to:`/interactive-abacus`,replace:!0})}),(0,q.jsx)(r,{path:`/iabacus-addition`,element:(0,q.jsx)(h,{to:`/interactive-abacus-addition`,replace:!0})}),(0,q.jsx)(r,{path:`/iabacus-addsub`,element:(0,q.jsx)(h,{to:`/interactive-abacus-addsub`,replace:!0})}),(0,q.jsx)(r,{path:`/iabacus-multiply`,element:(0,q.jsx)(h,{to:`/interactive-abacus-multiply`,replace:!0})}),(0,q.jsx)(r,{path:`/iabacus-division`,element:(0,q.jsx)(h,{to:`/interactive-abacus-division`,replace:!0})}),(0,q.jsx)(r,{path:`/iabacus-decimals`,element:(0,q.jsx)(h,{to:`/interactive-abacus-decimals`,replace:!0})}),(0,q.jsx)(r,{path:`/iabacus-sqroots`,element:(0,q.jsx)(h,{to:`/interactive-abacus-sqroots`,replace:!0})}),(0,q.jsx)(r,{path:`/iabacus-lcmhcf`,element:(0,q.jsx)(h,{to:`/interactive-abacus-lcmhcf`,replace:!0})}),(0,q.jsx)(r,{path:`/iabacus-percentage`,element:(0,q.jsx)(h,{to:`/interactive-abacus-percentage`,replace:!0})}),(0,q.jsx)(r,{path:`/RubiksCube`,element:(0,q.jsx)($,{children:(0,q.jsx)(vn,{})})}),(0,q.jsx)(r,{path:`/practice`,element:(0,q.jsx)($,{children:(0,q.jsx)(yn,{})})}),(0,q.jsx)(r,{path:`/practice-session`,element:(0,q.jsx)($,{children:(0,q.jsx)(bn,{})})}),(0,q.jsx)(r,{path:`/exam`,element:(0,q.jsx)($,{children:(0,q.jsx)(xn,{})})}),(0,q.jsx)(r,{path:`/live-classes`,element:(0,q.jsx)($,{children:(0,q.jsx)(Sn,{})})}),(0,q.jsx)(r,{path:`/recorded-lectures`,element:(0,q.jsx)($,{children:(0,q.jsx)(Cn,{})})}),(0,q.jsx)(r,{path:`/classroom`,element:(0,q.jsx)($,{children:(0,q.jsx)(wn,{})})}),(0,q.jsx)(r,{path:`/syllabus`,element:(0,q.jsx)($,{children:(0,q.jsx)(Tn,{})})}),(0,q.jsx)(r,{path:`/e-book`,element:(0,q.jsx)($,{children:(0,q.jsx)(En,{})})}),(0,q.jsx)(r,{path:`/profile`,element:(0,q.jsx)($,{children:(0,q.jsx)(Dn,{})})}),(0,q.jsx)(r,{path:`/achievement`,element:(0,q.jsx)($,{children:(0,q.jsx)(On,{})})}),(0,q.jsx)(r,{path:`/mcq-addition`,element:(0,q.jsx)($,{children:(0,q.jsx)(An,{})})}),(0,q.jsx)(r,{path:`/mcq-addsub`,element:(0,q.jsx)($,{children:(0,q.jsx)(jn,{})})}),(0,q.jsx)(r,{path:`/mcq-decimal-add`,element:(0,q.jsx)($,{children:(0,q.jsx)(Mn,{})})}),(0,q.jsx)(r,{path:`/mcq-decimal-addsub`,element:(0,q.jsx)($,{children:(0,q.jsx)(Nn,{})})}),(0,q.jsx)(r,{path:`/mcq-multiply`,element:(0,q.jsx)($,{children:(0,q.jsx)(Pn,{})})}),(0,q.jsx)(r,{path:`/mcq-division`,element:(0,q.jsx)($,{children:(0,q.jsx)(Fn,{})})}),(0,q.jsx)(r,{path:`/mcq-square`,element:(0,q.jsx)($,{children:(0,q.jsx)(In,{})})}),(0,q.jsx)(r,{path:`/mcq-sqroot`,element:(0,q.jsx)($,{children:(0,q.jsx)(Ln,{})})}),(0,q.jsx)(r,{path:`/mcq-cube`,element:(0,q.jsx)($,{children:(0,q.jsx)(Rn,{})})}),(0,q.jsx)(r,{path:`/mcq-cuberoot`,element:(0,q.jsx)($,{children:(0,q.jsx)(zn,{})})}),(0,q.jsx)(r,{path:`/mcq-lcm`,element:(0,q.jsx)($,{children:(0,q.jsx)(Bn,{})})}),(0,q.jsx)(r,{path:`/mcq-hcf`,element:(0,q.jsx)($,{children:(0,q.jsx)(Vn,{})})}),(0,q.jsx)(r,{path:`/mcq-percentage`,element:(0,q.jsx)($,{children:(0,q.jsx)(Hn,{})})}),(0,q.jsx)(r,{path:`/mental-flash-games`,element:(0,q.jsx)($,{children:(0,q.jsx)(kn,{})})}),(0,q.jsx)(r,{path:`/vedic-math`,element:(0,q.jsx)(h,{to:`/vedic-math/master`,replace:!0})}),(0,q.jsx)(r,{path:`/vedic-math/master`,element:(0,q.jsx)($,{children:(0,q.jsx)(hn,{})})}),(0,q.jsx)(r,{path:`/vedic-math/practice/:trickId`,element:(0,q.jsx)($,{children:(0,q.jsx)(gn,{})})}),(0,q.jsx)(r,{path:`*`,element:(0,q.jsx)(Rt,{})})]})})]})}function Kn(){let e=_(),t=s();return(0,L.useEffect)(()=>{if(!a.isNativePlatform())return;let n=y.addListener(`backButton`,({canGoBack:n})=>{n&&window.history.length>1?window.history.back():t.pathname!==`/`&&t.pathname!==`/login`?e(`/`,{replace:!0}):y.exitApp()});return()=>{n.then(e=>e.remove())}},[e,t.pathname]),null}function qn(){let{pathname:e}=s(),{user:t,membership:n,consentRequiredNotice:r}=S(),i=t&&n?.role===`student`&&!r?n.id:null;return(0,L.useEffect)(()=>{if(i)return T(i),()=>A()},[i]),(0,L.useEffect)(()=>{i&&E(e)},[e,i]),null}var Jn=`student-sidebar-collapsed`;function Yn(){try{return window.localStorage.getItem(Jn)===`1`}catch{return!1}}function Xn(){let{ready:e,activeSubjects:t}=M();return e&&!H(`abacus`,t)&&H(`chess`,t)?(0,q.jsx)(h,{to:`/chess`,replace:!0}):(0,q.jsx)(kt,{})}function Zn(){let{pathname:e}=s();return e.startsWith(`/chess/verify/`)?(0,q.jsx)(_n,{}):(0,q.jsx)($,{children:(0,q.jsx)(Qn,{})})}function Qn(){let{signOut:e}=S(),{pathname:t}=s(),{ready:n,activeSubjects:r}=M();return n&&!H(`chess`,r)?(0,q.jsx)(h,{to:`/`,replace:!0}):t.replace(/\/$/,``)===`/chess/exams`?(0,q.jsx)(h,{to:`/exam`,replace:!0}):n&&t.replace(/\/$/,``)===`/chess`&&H(`abacus`,r)?(0,q.jsx)(h,{to:`/`,replace:!0}):(0,q.jsx)(_n,{onSignOut:e})}function $({children:e}){let[t,n]=(0,L.useState)(!1),[r,i]=(0,L.useState)(Yn),{pathname:a}=s(),o=_(),{user:c,studentLayout:l}=S(),u=Un.has(a),d=Wn.has(a),f=u||d,{enabledFeatures:p}=M(),m=d?{path:`/interactive-abacus`,label:`Interactive Abacus`}:W(`practice_playground`,p)?{path:`/practice`,label:`Practice`}:{path:`/`,label:`Home`},h=l||`sidebar_classic`,g=h===`topbar_focus`||h===`bento_gamified`,v=()=>{n(e=>!e)};return(0,q.jsx)(St,{children:c?(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(ye,{toggleSidebar:v,hideSidebarToggle:f}),g&&!f?(0,q.jsx)(Ge,{}):null,(0,q.jsxs)(`div`,{className:`app-layout app-layout-${h} ${f?`app-layout-focus`:``} ${r&&!f?`app-layout-collapsed`:``}`,children:[(0,q.jsx)(Ue,{isOpen:t,toggleSidebar:v,minimized:f||r,onToggleMinimized:f?null:()=>{i(e=>{let t=!e;try{window.localStorage.setItem(Jn,t?`1`:`0`)}catch{}return t})}}),(0,q.jsxs)(`main`,{className:`main-content`,children:[f?(0,q.jsx)(`div`,{className:`practice-focus-topbar`,children:(0,q.jsx)(`button`,{className:`practice-back-button`,type:`button`,"aria-label":`Back to ${m.label}`,title:`Back to ${m.label}`,onClick:()=>o(m.path),children:(0,q.jsx)(`i`,{className:`fa-solid fa-arrow-left`})})}):null,(0,q.jsx)(Ct,{children:e})]})]}),(0,q.jsx)(we,{}),(0,q.jsx)(qe,{})]}):(0,q.jsx)(`div`,{className:`app-layout app-layout-focus`,style:{minHeight:`100vh`,width:`100%`},children:(0,q.jsx)(`main`,{className:`main-content`,style:{margin:0,padding:`20px 16px`,width:`100%`},children:e})})})}(0,R.createRoot)(document.getElementById(`root`)).render((0,q.jsx)(L.StrictMode,{children:(0,q.jsx)(x,{children:(0,q.jsx)(Gn,{})})}));export{K as _,Oe as a,Pe as c,Me as d,Fe as f,H as g,de as h,Ie as i,Ne as l,Re as m,Ve as n,De as o,ke as p,Ee as r,je as s,et as t,Le as u};