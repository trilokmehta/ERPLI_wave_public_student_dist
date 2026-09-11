const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Basic-BDv-kNmh.js","assets/interactive-VrFACgqL.js","assets/rolldown-runtime-S-ySWqyJ.js","assets/levels-joQmBHyv.js","assets/Abacus-Dz8L35lk.js","assets/LiveToolBanner-CyNxUe3t.js","assets/VedicMaster-DUTAVjwy.js","assets/vedicSyllabus-UxrGn6ki.js","assets/VedicTrickPractice-DQymAXjn.js","assets/RubiksCube-BjDNJi_M.js","assets/three-YpCEnCCI.js","assets/mcq-DZuEPLxH.js","assets/Practice-0MR7oHw1.js","assets/PracticeSession-CqUC0-99.js","assets/Exam-B_IoJQXI.js","assets/contentLevels-CDV_YUuY.js","assets/LiveClasses-CXNZcpbT.js","assets/RecordedLecture-Cg36mrVC.js","assets/react-dom-3hrF-nwF.js","assets/Classroom-BU98aKdO.js","assets/Syllabus-BXxSJdxO.js","assets/EBook-Dxx-mUsc.js","assets/vendor-kzo6S4Dl.js","assets/vendor-rptWOpCb.css","assets/Profile-Cixf_TjY.js","assets/Achievement-rAJogwwo.js","assets/GameZone-BFb90EOL.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{$ as t,B as n,Ct as r,Dt as i,Et as a,F as o,H as s,I as c,L as l,M as u,N as d,Q as f,R as p,St as m,U as h,V as g,W as _,Z as v,_t as y,bt as b,d as x,f as S,gt as C,ht as w,nt as ee,pt as T,rt as te,tt as ne,v as E,vt as D,wt as O,xt as k,z as A}from"./interactive-VrFACgqL.js";import{n as j,t as M}from"./react-dom-3hrF-nwF.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var N=e(i(),1),P=M(),F=p();function re({toggleSidebar:e,hideSidebarToggle:t=!1}){let n=O(),{profile:r,institute:i,membership:a,signOut:o}=l(),[s,c]=(0,N.useState)(!1),[u,d]=(0,N.useState)(!1),[f,p]=(0,N.useState)(!1),m=(0,N.useRef)(null),h=(0,N.useRef)(null);(0,N.useEffect)(()=>{if(!u&&!f)return;function e(e){u&&m.current&&!m.current.contains(e.target)&&d(!1),f&&h.current&&!h.current.contains(e.target)&&p(!1)}return document.addEventListener(`mousedown`,e),document.addEventListener(`touchstart`,e),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`touchstart`,e)}},[u,f]);let g=Array.isArray(i?.institute_branding)?i?.institute_branding[0]?.logo_url:i?.institute_branding?.logo_url,_=i?.name||`Student Portal`,v=r?.full_name||`Student`,y=r?.current_level===999?`All levels`:`Level ${r?.current_level??0}`,b=ie(a?.id),x=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(e=>{console.error(`Error attempting to enable fullscreen: ${e.message}`)})};(0,N.useEffect)(()=>{let e=()=>{c(!!document.fullscreenElement)};return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]);async function S(){await o(),d(!1),n(`/login`)}return(0,F.jsxs)(`nav`,{className:`navbar`,children:[(0,F.jsxs)(`div`,{className:`nav-left`,children:[t?null:(0,F.jsx)(`button`,{className:`hamburger nav-hamburger-left`,onClick:e,"aria-label":`Toggle Sidebar`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-bars`})}),(0,F.jsxs)(`div`,{className:`logo`,onClick:()=>n(`/`),children:[(0,F.jsx)(`span`,{className:`nav-brand-logo-wrapper`,children:(0,F.jsx)(`img`,{src:g||`/Abacus.png`,alt:_,className:`nav-brand-logo`})}),(0,F.jsx)(`span`,{children:_})]})]}),(0,F.jsxs)(`div`,{className:`nav-actions`,children:[(0,F.jsxs)(`button`,{className:`nav-streak-pill`,onClick:()=>n(`/`),title:`Daily login streak`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-fire`}),(0,F.jsx)(`span`,{children:b})]}),(0,F.jsx)(`button`,{className:`fullscreen-toggle`,onClick:x,title:s?`Exit Fullscreen`:`Enter Fullscreen`,style:{background:`transparent`,border:`none`,color:`white`,fontSize:`20px`,cursor:`pointer`,opacity:.85,transition:`all 0.2s ease`,padding:`4px`,display:`flex`,alignItems:`center`,justifyContent:`center`},onMouseEnter:e=>{e.currentTarget.style.opacity=`1`,e.currentTarget.style.transform=`scale(1.1)`},onMouseLeave:e=>{e.currentTarget.style.opacity=`0.85`,e.currentTarget.style.transform=`scale(1)`},children:(0,F.jsx)(`i`,{className:`fa-solid ${s?`fa-compress`:`fa-expand`}`})}),(0,F.jsxs)(`div`,{className:`nav-profile`,ref:m,children:[(0,F.jsxs)(`button`,{className:`nav-profile-button`,onClick:()=>d(e=>!e),"aria-label":`Open profile menu`,"aria-expanded":u,children:[(0,F.jsx)(`span`,{className:`nav-profile-avatar`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-user`})}),(0,F.jsxs)(`span`,{className:`nav-profile-text`,children:[(0,F.jsx)(`strong`,{children:v}),(0,F.jsx)(`span`,{children:y})]}),(0,F.jsx)(`i`,{className:`fa-solid fa-chevron-${u?`up`:`down`} nav-profile-caret`})]}),u?(0,F.jsxs)(`div`,{className:`nav-profile-menu`,children:[(0,F.jsxs)(`button`,{onClick:()=>{d(!1),n(`/profile`)},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-user`}),`Profile`]}),(0,F.jsxs)(`button`,{onClick:()=>{d(!1),n(`/achievement`)},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-medal`}),`Achievements`]}),(0,F.jsxs)(`button`,{onClick:S,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),`Log Out`]})]}):null]})]}),(0,F.jsxs)(`div`,{className:`nav-more`,ref:h,children:[(0,F.jsx)(`button`,{className:`nav-more-button`,onClick:()=>p(e=>!e),"aria-label":`Open menu`,"aria-expanded":f,children:(0,F.jsx)(`i`,{className:`fa-solid fa-ellipsis-vertical`})}),f?(0,F.jsxs)(`div`,{className:`nav-more-menu`,children:[(0,F.jsxs)(`div`,{className:`nav-more-profile`,children:[(0,F.jsx)(`span`,{className:`nav-profile-avatar`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-user`})}),(0,F.jsxs)(`div`,{className:`nav-more-profile-text`,children:[(0,F.jsx)(`strong`,{children:v}),(0,F.jsx)(`span`,{children:y})]})]}),(0,F.jsxs)(`button`,{onClick:()=>n(`/`),children:[(0,F.jsx)(`i`,{className:`fa-solid fa-fire`}),`Login streak`,(0,F.jsx)(`span`,{className:`nav-more-badge`,children:b})]}),(0,F.jsxs)(`button`,{onClick:()=>{x(),p(!1)},children:[(0,F.jsx)(`i`,{className:`fa-solid ${s?`fa-compress`:`fa-expand`}`}),s?`Exit fullscreen`:`Fullscreen`]}),(0,F.jsxs)(`button`,{onClick:()=>{p(!1),n(`/profile`)},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-user`}),`Profile`]}),(0,F.jsxs)(`button`,{onClick:()=>{p(!1),n(`/achievement`)},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-medal`}),`Achievements`]}),(0,F.jsxs)(`button`,{onClick:S,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),`Log Out`]})]}):null]})]})}function ie(e){if(!e)return 0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);return Number(t.streakCount||0)}catch{return 0}}function ae(){let[e,t]=(0,N.useState)(`Hi! I'm Abby. I'll be your math buddy!`),[n,r]=(0,N.useState)(!0),[i,a]=(0,N.useState)(`happy`),o=(0,N.useRef)(null),s=(0,N.useRef)(null),c=(0,N.useRef)(null),l=(e,n=`default`,i=5e3)=>{t(e),a(n),r(!0),setTimeout(()=>{r(!1),a(e=>e===n?`default`:e)},i)};return(0,N.useEffect)(()=>{setTimeout(()=>r(!1),5e3);let e=e=>{if(o.current){let t=e.clientX/window.innerWidth*8-4,n=e.clientY/window.innerHeight*8-4;o.current.style.transform=`translate(${t}px, ${n}px)`}a(e=>e===`sleep`?(l(`You're back! Let's go!`,`happy`,3e3),`happy`):e),clearTimeout(s.current),s.current=setTimeout(()=>{a(`sleep`),r(!1)},6e4)},t=()=>{document.hidden?clearTimeout(s.current):l(`Welcome back! Keep your focus here! `,`happy`,4e3)};return c.current=setInterval(()=>{l(`Beep boop! You've been staring at the screen for 20 mins. Stretch and blink!`,`alert`,8e3)},12e5),window.addEventListener(`mousemove`,e),document.addEventListener(`visibilitychange`,t),()=>{window.removeEventListener(`mousemove`,e),document.removeEventListener(`visibilitychange`,t),clearTimeout(s.current),clearInterval(c.current)}},[]),(0,F.jsxs)(`div`,{className:`study-buddy-wrap ${i===`alert`?`alert-mode`:``}`,children:[(0,F.jsxs)(`div`,{className:`speech-bubble ${n?`visible`:``}`,children:[e,(0,F.jsx)(`div`,{className:`bubble-tail`})]}),i===`sleep`&&(0,F.jsxs)(`div`,{className:`zzz-container`,children:[(0,F.jsx)(`span`,{className:`z1`,children:`Z`}),(0,F.jsx)(`span`,{className:`z2`,children:`z`}),(0,F.jsx)(`span`,{className:`z3`,children:`z`})]}),(0,F.jsx)(`div`,{className:`bot-character ${i}`,onClick:()=>{let e=[`You've got this! `,`I'm so proud of your progress!`,`Math is just a puzzle, and you have the pieces!`,`I love calculating things with you!`,`High five! `];l(e[Math.floor(Math.random()*e.length)],`happy`,4e3)},onMouseEnter:()=>{let e=[`Haha! That tickles!  Let's do some math!`,`Hehehe! I'm so excited to learn with you!`,`Yay! Let's solve some equations!`,`Beep boop! You make me so happy!`];l(e[Math.floor(Math.random()*e.length)],`happy`,3e3)},children:(0,F.jsxs)(`svg`,{viewBox:`0 0 100 100`,width:`100%`,height:`100%`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,F.jsx)(`circle`,{cx:`50`,cy:`50`,r:`40`,fill:`var(--primary-blue)`,className:`orb-glow`}),(0,F.jsx)(`circle`,{cx:`50`,cy:`50`,r:`35`,fill:`var(--card-bg)`,stroke:`var(--primary-blue)`,strokeWidth:`3`}),(0,F.jsx)(`rect`,{x:`22`,y:`35`,width:`56`,height:`26`,rx:`13`,fill:`var(--dark-blue)`}),(0,F.jsx)(`g`,{ref:o,className:`bot-eyes-tracking`,children:(()=>{if(i===`sleep`)return(0,F.jsxs)(`g`,{stroke:`white`,strokeWidth:`3`,strokeLinecap:`round`,children:[(0,F.jsx)(`line`,{x1:`33`,y1:`48`,x2:`39`,y2:`48`}),(0,F.jsx)(`line`,{x1:`61`,y1:`48`,x2:`67`,y2:`48`})]});if(i===`happy`)return(0,F.jsxs)(`g`,{stroke:`white`,strokeWidth:`3`,strokeLinecap:`round`,fill:`none`,children:[(0,F.jsx)(`path`,{d:`M 32 50 Q 36 44 40 50`}),(0,F.jsx)(`path`,{d:`M 60 50 Q 64 44 68 50`})]});let e=i===`alert`?`#ef4444`:`white`;return(0,F.jsxs)(`g`,{children:[(0,F.jsx)(`circle`,{cx:`36`,cy:`48`,r:`4.5`,fill:e}),(0,F.jsx)(`circle`,{cx:`64`,cy:`48`,r:`4.5`,fill:e})]})})()}),(0,F.jsx)(`path`,{d:`M 50 15 L 50 4`,stroke:`var(--primary-blue)`,strokeWidth:`3`,strokeLinecap:`round`}),(0,F.jsx)(`circle`,{cx:`50`,cy:`4`,r:`4`,fill:i===`alert`?`#ef4444`:`var(--gold)`,className:`antenna-bulb`}),(0,F.jsx)(`circle`,{cx:`15`,cy:`70`,r:`5`,fill:`var(--primary-blue)`,className:`float-bead b1`}),(0,F.jsx)(`circle`,{cx:`85`,cy:`30`,r:`4`,fill:`var(--gold)`,className:`float-bead b2`}),(0,F.jsx)(`circle`,{cx:`82`,cy:`75`,r:`6`,fill:`var(--dark-blue)`,className:`float-bead b3`})]})})]})}var I=[{label:`Home`,path:`/`,icon:`fa-house`},{label:`Practice`,path:`/practice`,icon:`fa-dumbbell`},{label:`Daily Session`,path:`/practice-session`,icon:`fa-calendar-check`},{label:`Achievements`,path:`/achievement`,icon:`fa-medal`},{label:`Syllabus`,path:`/syllabus`,icon:`fa-list-check`},{label:`Live Classes`,path:`/live-classes`,icon:`fa-video`},{label:`Chat & Notices`,path:`/classroom`,icon:`fa-comments`},{label:`Recordings`,path:`/recorded-lectures`,icon:`fa-circle-play`},{label:`E-Books`,path:`/e-book`,icon:`fa-book-open`},{label:`Exams`,path:`/exam`,icon:`fa-file-lines`}],oe=[{prefix:`/vedic-math`,subject:`vedic`},{prefix:`/RubiksCube`,subject:`rubiks`}];function L(e){return oe.find(t=>e===t.prefix||e.startsWith(`${t.prefix}/`))?.subject??null}function R(e,t){return!e||!t?!0:t.has(e)}function z(e,t){return e.filter(e=>R(L(e.path),t))}var B=[{label:`Interactive Abacus`,path:`/interactive-abacus`,icon:`fa-calculator`},{label:`Digital Abacus`,path:`/abacus`,icon:`fa-desktop`},{label:`Vedic Math`,path:`/vedic-math`,icon:`fa-wand-magic-sparkles`},{label:`Rubik's Cube`,path:`/RubiksCube`,icon:`fa-cube`},{label:`Game Zone`,path:`/mental-flash-games`,icon:`fa-gamepad`}];function V(e){return`${e}-${Math.random().toString(36).slice(2,10)}`}async function se(e){let{data:t}=await y.auth.getSession(),n=t?.session?.user?.id;if(!n)return{error:{message:`You are signed out. Sign in again.`}};let{data:r,error:i}=await y.from(`memberships`).select(`role, profiles:user_id(full_name)`).eq(`user_id`,n).eq(`institute_id`,e).eq(`status`,`active`).limit(1).maybeSingle();return i||!r?{error:{message:i?.message??`No active membership for this institute.`}}:{userId:n,role:r.role,name:r.profiles?.full_name||`Student`}}async function ce(e){let{data:t,error:n}=await y.from(`batch_chat_messages`).select(`*`).eq(`batch_id`,e).order(`created_at`,{ascending:!0});return n?(console.warn(`batch_chat:list:failed`,n.message),{data:[],error:n}):{data:t??[],error:null}}async function le({instituteId:e,batchId:t,message:n}){let r=await se(e);if(r.error)return{data:null,error:r.error};let i=n.trim();if(!i)return{data:null,error:{message:`Message cannot be empty.`}};let{data:a,error:o}=await y.from(`batch_chat_messages`).insert({institute_id:e,batch_id:t,sender_user_id:r.userId,sender_name:r.name,sender_role:r.role,message:i}).select().single();return o?(console.warn(`batch_chat:send:failed`,o.message),{data:null,error:o}):{data:a,error:null}}function H(e,t){try{let n=y.channel(V(`batch-chat-${e}`)).on(`postgres_changes`,{event:`INSERT`,schema:`public`,table:`batch_chat_messages`,filter:`batch_id=eq.${e}`},e=>t(e.new)).subscribe();return()=>y.removeChannel(n)}catch(e){return console.warn(`batch_chat:subscribe:failed`,e.message),()=>{}}}async function U(e){let{data:t,error:n}=await y.from(`batch_announcements`).select(`*`).eq(`batch_id`,e).order(`created_at`,{ascending:!1});return n?(console.warn(`batch_announcements:list:failed`,n.message),{data:[],error:n}):{data:t??[],error:null}}function W(e,t){try{let n=y.channel(V(`batch-announcements-${e}`)).on(`postgres_changes`,{event:`INSERT`,schema:`public`,table:`batch_announcements`,filter:`batch_id=eq.${e}`},e=>t(e.new)).subscribe();return()=>y.removeChannel(n)}catch(e){return console.warn(`batch_announcements:subscribe:failed`,e.message),()=>{}}}var G=`classroom_seen_at_`;function K(e){try{return Number(localStorage.getItem(`${G}${e}`))||0}catch{return 0}}function ue(e){if(e)try{localStorage.setItem(`${G}${e}`,String(Date.now()))}catch{}}function q(){let{institute:e,membership:n}=l(),r=e?.id??null,i=n?.id??null,[a,o]=(0,N.useState)(!1);return(0,N.useEffect)(()=>{if(!r||!i){o(!1);return}let e=!0,n=[];async function a(){let{data:a}=await t(r,i);if(!e)return;let s=[...new Set(a.map(e=>e.batch_id).filter(Boolean))];if(!s.length)return;let c=K(i),[{data:l},{data:u}]=await Promise.all([y.from(`batch_chat_messages`).select(`created_at`).in(`batch_id`,s).order(`created_at`,{ascending:!1}).limit(1),y.from(`batch_announcements`).select(`created_at`).in(`batch_id`,s).order(`created_at`,{ascending:!1}).limit(1)]);e&&(o(Math.max(l?.[0]?.created_at?new Date(l[0].created_at).getTime():0,u?.[0]?.created_at?new Date(u[0].created_at).getTime():0)>c),s.forEach(t=>{n.push(H(t,()=>e&&o(!0))),n.push(W(t,()=>e&&o(!0)))}))}return a(),()=>{e=!1,n.forEach(e=>e())}},[r,i]),a}function de({isOpen:e,toggleSidebar:t,minimized:n}){let{signOut:i}=l(),{activeSubjects:a}=d(),o=q(),s=O(),c=r();function u(e){s(e),window.innerWidth<=1024&&t()}async function f(){await i(),s(`/login`),window.innerWidth<=1024&&t()}function p(e){return c.pathname===e||c.pathname.startsWith(`${e}/`)}return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`div`,{className:`sidebar-overlay ${e?`active`:``}`,onClick:t}),(0,F.jsxs)(`aside`,{className:`sidebar student-sidebar ${e?`active`:``} ${n?`minimized`:``}`,children:[(0,F.jsxs)(`nav`,{className:`student-sidebar-scroll`,children:[(0,F.jsx)(J,{title:`Learn`,links:z(I,a),isActive:p,onNavigate:u,unreadPaths:o?[`/classroom`]:[]}),(0,F.jsx)(J,{title:`Tools`,links:z(B,a),isActive:p,onNavigate:u})]}),(0,F.jsxs)(`button`,{className:`student-logout`,onClick:f,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,F.jsx)(`span`,{children:`Log Out`})]})]})]})}function J({title:e,links:t,isActive:n,onNavigate:r,unreadPaths:i=[]}){return(0,F.jsxs)(`section`,{className:`student-sidebar-group`,children:[(0,F.jsx)(`div`,{className:`student-sidebar-label`,children:e}),(0,F.jsx)(`div`,{className:`student-sidebar-links`,children:t.map(e=>(0,F.jsxs)(`button`,{className:`student-sidebar-link ${n(e.path)?`active`:``}`,onClick:()=>r(e.path),children:[(0,F.jsxs)(`span`,{className:`student-link-icon`,children:[(0,F.jsx)(`i`,{className:`fa-solid ${e.icon}`}),i.includes(e.path)?(0,F.jsx)(`span`,{className:`nav-unread-dot`}):null]}),(0,F.jsx)(`span`,{children:e.label})]},e.path))})]})}function fe(){let e=O(),t=r(),{activeSubjects:n}=d(),i=q();return(0,F.jsx)(`nav`,{className:`student-topnav`,"aria-label":`Primary`,children:(0,F.jsx)(`div`,{className:`student-topnav-scroll`,children:z([...I,...B],n).map(n=>(0,F.jsxs)(`button`,{type:`button`,className:`student-topnav-link ${t.pathname===n.path||t.pathname.startsWith(`${n.path}/`)?`active`:``}`,onClick:()=>e(n.path),children:[(0,F.jsxs)(`span`,{style:{position:`relative`,display:`inline-flex`},children:[(0,F.jsx)(`i`,{className:`fa-solid ${n.icon}`}),n.path===`/classroom`&&i?(0,F.jsx)(`span`,{className:`nav-unread-dot`}):null]}),(0,F.jsx)(`span`,{children:n.label})]},n.path))})})}var Y=e(j(),1);function pe(){let{profile:e}=l(),[t,n]=(0,N.useState)(!1);(0,N.useEffect)(()=>{if(!e){console.log(`[BirthdayCelebration] No profile loaded`);return}let t=e.extra_details?.dob||e.extra_details?.date_of_birth;if(console.log(`[BirthdayCelebration] Found DOB:`,t,`extra_details:`,e.extra_details),!t)return;let r=t.split(`-`);if(r.length===3){let e=new Date,t=e.getMonth()+1,i=e.getDate(),a=parseInt(r[1],10),o=parseInt(r[2],10);console.log(`[BirthdayCelebration] Checking Date match: Today is ${t}/${i}, Born: ${a}/${o}`);let s=a===t&&o===i;console.log(`[BirthdayCelebration] Match result:`,s),s&&n(!0)}},[e]);let r=()=>{n(!1)};if(!t||!e)return null;let i=e.full_name||e.name||`Student`,a=Array.from({length:60}).map((e,t)=>{let n=Math.random()*100,r=Math.random()*4,i=Math.random()*3+2,a=Math.random()*.6+.4,o=[`#ff0a54`,`#ff477e`,`#ff7096`,`#ff85a1`,`#fbb1bd`,`#f9bec7`,`#3b82f6`,`#10b981`,`#fbbf24`,`#8b5cf6`],s=o[Math.floor(Math.random()*o.length)],c=[`circle`,`square`,`triangle`],l=c[Math.floor(Math.random()*c.length)];return{left:`${n}%`,delay:`${r}s`,duration:`${i}s`,scale:a,color:s,shape:l,id:t}});return(0,Y.createPortal)((0,F.jsxs)(`div`,{style:X.overlay,children:[(0,F.jsx)(`style`,{children:`
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
        `}),a.map(e=>{let t=`0`;e.shape===`circle`&&(t=`50%`);let n=`10px`,r=`10px`;return e.shape===`triangle`&&(n=`0`,r=`0`),(0,F.jsx)(`div`,{className:`confetti-particle`,style:{left:e.left,animationDelay:e.delay,animationDuration:e.duration,transform:`scale(${e.scale})`,backgroundColor:e.shape===`triangle`?`transparent`:e.color,borderRadius:t,width:e.shape===`triangle`?void 0:n,height:e.shape===`triangle`?void 0:r,borderLeft:e.shape===`triangle`?`6px solid transparent`:void 0,borderRight:e.shape===`triangle`?`6px solid transparent`:void 0,borderBottom:e.shape===`triangle`?`10px solid ${e.color}`:void 0}},e.id)}),(0,F.jsx)(`div`,{className:`birthday-modal`,style:X.modal,children:(0,F.jsxs)(`div`,{style:{position:`relative`,zIndex:2,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`24px`},children:[(0,F.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,justifyContent:`center`},children:[(0,F.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`0s`},children:`🎈`}),(0,F.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`0.5s`,fontSize:`3.5rem`},children:`🎂`}),(0,F.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`1s`},children:`🎉`})]}),(0,F.jsxs)(`h2`,{style:X.title,children:[`Happy Birthday, `,i,`!`]}),(0,F.jsx)(`p`,{style:X.message,children:`We wish you a fantastic year ahead filled with happiness, learning, and success. Have a wonderful day! 🌟✨`}),(0,F.jsx)(`button`,{onClick:r,style:X.button,children:`Thank You! ❤️`})]})})]}),document.body)}var X={overlay:{position:`fixed`,top:0,left:0,right:0,bottom:0,backgroundColor:`rgba(8, 10, 18, 0.7)`,zIndex:999999,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`20px`,boxSizing:`border-box`},modal:{width:`100%`,maxWidth:`520px`,borderRadius:`28px`,padding:`48px 36px`,textAlign:`center`,boxSizing:`border-box`,position:`relative`,overflow:`hidden`},title:{fontFamily:`"Sora", sans-serif`,fontSize:`2.25rem`,fontWeight:`900`,background:`linear-gradient(135deg, #a5b4fc, #6366f1, #eab308)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,margin:0,lineHeight:1.25},message:{color:`#94a3b8`,fontSize:`1.05rem`,fontWeight:`500`,lineHeight:1.6,margin:`4px 0 8px 0`},button:{border:0,background:`linear-gradient(135deg, #6366f1, #4f46e5)`,color:`white`,borderRadius:`16px`,padding:`14px 38px`,fontSize:`1.02rem`,fontWeight:`800`,cursor:`pointer`,boxShadow:`0 10px 25px rgba(99, 102, 241, 0.4)`,transition:`all 0.2s ease`}},Z=60,Q={border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`14px 18px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.9rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`};function me({email:e,onCancel:t}){let{user:n,signOut:r}=l(),[i,a]=(0,N.useState)(!1),[o,s]=(0,N.useState)(!1),[c,d]=(0,N.useState)(0),[f,p]=(0,N.useState)(``),[m,h]=(0,N.useState)(``),g=(0,N.useRef)(null),_=e||n?.email||``,v=!!n;(0,N.useEffect)(()=>{if(!(c<=0))return g.current=window.setInterval(()=>{d(e=>e<=1?0:e-1)},1e3),()=>window.clearInterval(g.current)},[c]);async function b(){if(i||c>0||!_)return;a(!0),h(``),p(``);let{error:e}=await y.auth.resend({type:`signup`,email:_,options:{emailRedirectTo:window.location.origin}});if(a(!1),e){h(e.message||`Could not send the confirmation email. Please try again.`);return}p(`Confirmation email sent to ${_}. Open it and click the link inside.`),d(Z)}async function x(){if(o)return;s(!0),h(``),p(``);let{data:e,error:t}=await y.auth.refreshSession();if(t){s(!1),h(`Could not check your status. Please try again in a moment.`);return}if(e?.user?.email_confirmed_at){window.location.reload();return}s(!1),h(`This email is still unverified. Please click the link in the confirmation email first.`)}return(0,F.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,F.jsx)(u,{}),(0,F.jsx)(`style`,{children:`
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
      `}),(0,F.jsxs)(`div`,{className:`verify-email-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,F.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,F.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent)`},children:(0,F.jsx)(`i`,{className:`fa-solid fa-envelope-circle-check`})})}),(0,F.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,F.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Email Not Verified`]})}),(0,F.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:`Confirm Your Email`}),(0,F.jsxs)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:[`We sent a confirmation link to`,` `,(0,F.jsx)(`strong`,{style:{color:`var(--dark-blue, #0f172a)`,wordBreak:`break-all`},children:_}),`. Open that email and click the link to unlock your panel. Check your spam folder if you can't find it.`]}),f?(0,F.jsxs)(`p`,{style:{color:`#15803d`,background:`#dcfce7`,border:`1px solid #bbf7d0`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-check`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,F.jsx)(`span`,{children:f})]}):null,m?(0,F.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err, #c62828) 20%, transparent)`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,F.jsx)(`span`,{children:m})]}):null,(0,F.jsx)(`button`,{className:`verify-btn-primary`,type:`button`,onClick:b,disabled:i||c>0,style:{marginTop:`26px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:i||c>0?`not-allowed`:`pointer`,opacity:i||c>0?.65:1,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:i?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,F.jsx)(`span`,{children:`Sending...`})]}):c>0?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`i`,{className:`fa-regular fa-clock`}),(0,F.jsxs)(`span`,{children:[`Resend in `,c,`s`]})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`i`,{className:`fa-solid fa-paper-plane`}),(0,F.jsx)(`span`,{children:`Resend confirmation email`})]})}),(0,F.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,marginTop:`12px`},children:[v?(0,F.jsx)(`button`,{className:`verify-btn-secondary`,type:`button`,onClick:x,disabled:o,style:{...Q,flex:1,opacity:o?.7:1,cursor:o?`not-allowed`:`pointer`},children:o?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,F.jsx)(`span`,{children:`Checking...`})]}):(0,F.jsx)(`span`,{children:`I've verified`})}):null,(0,F.jsx)(`button`,{className:`verify-btn-secondary`,type:`button`,onClick:v?r:t,style:{...Q,flex:v?void 0:1,color:`var(--text-light, #64748b)`},children:v?`Log out`:`Back to sign in`})]})]})]})}async function he(e){let{data:t,error:n}=await y.rpc(`list_institute_branches_for_signup`,{p_institute_id:e});return n?{data:[],error:n.message}:{data:t||[],error:null}}async function ge({instituteId:e,email:t,fullName:n,phone:r,notes:i,branchId:a}){let{data:o,error:s}=await y.rpc(`submit_student_signup_request`,{p_institute_id:e,p_email:t,p_full_name:n,p_phone:r||null,p_notes:i||null,p_branch_id:a||null});return s?{ok:!1,error:s.message||`Could not submit your registration.`}:o?.ok?{ok:!0,alreadyPending:!!o.already_pending}:{ok:!1,error:o?.error||`Could not submit your registration.`}}function _e(e){return e?e.code===`email_not_confirmed`?!0:/email not confirmed/i.test(e.message||``):!1}function ve(){let e=O(),t=r(),{login:n,institute:i,instituteReady:a,user:o,membership:s,membershipInvalid:d,signOut:f}=l(),[p,m]=(0,N.useState)(`signin`),[h,g]=(0,N.useState)(``),[_,v]=(0,N.useState)(``),[b,x]=(0,N.useState)(!1),[S,C]=(0,N.useState)(null),[w,ee]=(0,N.useState)(!1),[T,te]=(0,N.useState)(!1),[ne,E]=(0,N.useState)(!1),[D,k]=(0,N.useState)(!1),[A,j]=(0,N.useState)(null),[M,P]=(0,N.useState)(null),[re,ie]=(0,N.useState)(!1);(0,N.useEffect)(()=>{let e=setTimeout(()=>ie(!0),1e3);return()=>clearTimeout(e)},[]);let ae=!re||!a,[I,oe]=(0,N.useState)(``),[L,R]=(0,N.useState)(``),[z,B]=(0,N.useState)(``),[V,se]=(0,N.useState)(``),[ce,le]=(0,N.useState)(``),[H,U]=(0,N.useState)(!1),[W,G]=(0,N.useState)(null),[K,ue]=(0,N.useState)(null),[q,de]=(0,N.useState)([]),[J,fe]=(0,N.useState)(!1),[Y,pe]=(0,N.useState)(`branch`),[X,Z]=(0,N.useState)(``),Q=q.some(e=>e.kind===`branch`)&&q.some(e=>e.kind===`school`),ve=Q?q.filter(e=>e.kind===Y):q;(0,N.useEffect)(()=>{if(p!==`register`||!i?.id||J||q.length>0)return;let e=!1;return fe(!0),he(i.id).then(({data:t})=>{e||(de(t),t.length>0&&pe(t.some(e=>e.kind===`branch`)?`branch`:`school`),fe(!1))}),()=>{e=!0}},[p,i?.id]),(0,N.useEffect)(()=>(document.body.classList.add(`login-body`),()=>{document.body.classList.remove(`login-body`)}),[]),(0,N.useEffect)(()=>{try{localStorage.getItem(`portal_evicted_notice`)&&(localStorage.removeItem(c),j(`You were signed out because this account was opened in another browser.`))}catch{}},[]);let ye=()=>{let e=t.state?.from;return e&&e!==`/login`&&!e.startsWith(`/login?`)?e:`/`};(0,N.useEffect)(()=>{o&&s&&e(ye(),{replace:!0})},[o,s,e,t.state]),(0,N.useEffect)(()=>{d&&(C(`This account does not belong to this institute. Please sign in on your own institute's portal.`),x(!1),f().catch(()=>{}))},[d,f]);async function be(t){t.preventDefault(),x(!0),C(null);try{let t=await n(h,_);if(t?.error){if(_e(t.error)){P(h),x(!1);return}C(t.error.message||`Failed to sign in. Please check your credentials.`),x(!1)}else e(ye(),{replace:!0})}catch(e){console.error(`Login submit error:`,e),C(e?.message||`An unexpected error occurred. Please try again.`),x(!1)}}async function xe(){if(C(null),j(null),!h){C(`Enter your student email above, then tap 'Forgot password?'.`);return}k(!0);let{error:e}=await y.auth.resetPasswordForEmail(h,{redirectTo:`${window.location.origin}/reset-password`});if(k(!1),e){C(e.message);return}j(`If an account exists for ${h}, a reset link is on its way.`)}async function Se(e){if(e.preventDefault(),G(null),!i?.id){G(`This portal is not configured for a valid institute.`);return}if(V.length<6){G(`Password must be at least 6 characters.`);return}if(V!==ce){G(`Passwords do not match.`);return}if(q.length>0&&!X){G(`Please select a ${Y===`school`?`school`:`branch`} to register for.`);return}U(!0);try{let{data:e,error:t}=await y.auth.signUp({email:L,password:V,options:{data:{full_name:I}}});if(t){G(t.message||`Could not create your account.`),U(!1);return}if(!e?.user){G(`Could not create your account. Please try again.`),U(!1);return}await y.auth.signOut().catch(()=>{});let n=await ge({instituteId:i.id,email:L,fullName:I,phone:z,branchId:X||null});if(!n.ok){G(n.error),U(!1);return}ue(L)}catch(e){console.error(`Registration submit error:`,e),G(e?.message||`An unexpected error occurred. Please try again.`)}finally{U(!1)}}function Ce(){oe(``),R(``),B(``),se(``),le(``),G(null),ue(null),Z(``)}let we=Array.isArray(i?.institute_branding)?i?.institute_branding[0]:i?.institute_branding,Te=we?.logo_url;return(0,F.jsxs)(`div`,{className:`login-page-container layout-${we?.login_layout||`split_screen`}`,children:[ae&&(0,F.jsxs)(`div`,{className:`login-splash-overlay`,children:[(0,F.jsx)(`img`,{src:Te||`/Abacus.png`,alt:``,className:`login-splash-logo`}),(0,F.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin login-splash-spinner`})]}),M?(0,F.jsx)(me,{email:M,onCancel:()=>P(null)}):null,(0,F.jsx)(u,{}),(0,F.jsxs)(`div`,{className:`login-left-pane`,children:[(0,F.jsx)(`div`,{className:`login-blob-1`}),(0,F.jsx)(`div`,{className:`login-blob-2`}),(0,F.jsxs)(`div`,{className:`login-left-header`,children:[(0,F.jsx)(`div`,{className:`login-left-logo-wrapper`,children:(0,F.jsx)(`img`,{src:Te||`/Abacus.png`,alt:`Institute Logo`,className:`login-left-logo`})}),(0,F.jsx)(`span`,{className:`login-left-brand-name`,children:i?i.name:`Erpli Wave`})]}),(0,F.jsxs)(`div`,{className:`login-left-content`,children:[(0,F.jsxs)(`h2`,{className:`login-left-title`,children:[`Unlock the Power of `,(0,F.jsx)(`br`,{}),(0,F.jsx)(`span`,{style:{color:`var(--gold)`},children:`Mental Math`})]}),(0,F.jsx)(`p`,{className:`login-left-subtitle`,children:`Experience the ultimate training portal. Boost your calculation speed, complete assignments, challenge friends, and track your analytical growth.`}),(0,F.jsxs)(`div`,{className:`showcase-glass-card`,children:[(0,F.jsx)(`span`,{className:`showcase-badge`,children:`Student Platform`}),(0,F.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,F.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-gamepad`,style:{color:`var(--gold)`}}),`Interactive Games`]}),(0,F.jsx)(`span`,{className:`showcase-stat-value`,children:`Abacus & Flash`})]}),(0,F.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,F.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-trophy`,style:{color:`var(--gold)`}}),`Weekly Leaderboards`]}),(0,F.jsx)(`span`,{className:`showcase-stat-value`,children:`Global Rankings`})]}),(0,F.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,F.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-chart-line`,style:{color:`var(--gold)`}}),`Progress Analytics`]}),(0,F.jsx)(`span`,{className:`showcase-stat-value`,children:`Detailed Insights`})]})]})]}),(0,F.jsxs)(`div`,{className:`login-left-footer`,children:[`© `,new Date().getFullYear(),` `,i?i.name:`Erpli Wave`,`. All rights reserved.`]})]}),(0,F.jsx)(`div`,{className:`login-right-pane`,children:(0,F.jsxs)(`div`,{className:`login-form-card`,children:[(0,F.jsxs)(`div`,{className:`login-logo-header`,children:[(0,F.jsx)(`div`,{className:`login-logo-container`,children:(0,F.jsx)(`img`,{src:Te||`/Abacus.png`,alt:`Institute Logo`,className:`login-main-logo`})}),(0,F.jsx)(`h1`,{className:`login-title-text`,children:i?i.name:`Student Portal`}),(0,F.jsx)(`p`,{className:`login-subtitle-text`,children:p===`register`?`Create your account to request access`:`Sign in to access your mental math dashboard`})]}),!K&&(0,F.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,marginBottom:`24px`,background:`rgba(148, 163, 184, 0.14)`,borderRadius:`14px`,padding:`4px`},children:[(0,F.jsx)(`button`,{type:`button`,onClick:()=>{m(`signin`),C(null)},style:{flex:1,border:`none`,borderRadius:`10px`,padding:`10px 12px`,fontWeight:800,fontSize:`0.85rem`,cursor:`pointer`,background:p===`signin`?`var(--card-bg, #ffffff)`:`transparent`,color:p===`signin`?`var(--dark-blue, #0f172a)`:`var(--text-light, #64748b)`,boxShadow:p===`signin`?`0 1px 4px rgba(0,0,0,0.08)`:`none`},children:`Sign In`}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>{m(`register`),C(null)},style:{flex:1,border:`none`,borderRadius:`10px`,padding:`10px 12px`,fontWeight:800,fontSize:`0.85rem`,cursor:`pointer`,background:p===`register`?`var(--card-bg, #ffffff)`:`transparent`,color:p===`register`?`var(--dark-blue, #0f172a)`:`var(--text-light, #64748b)`,boxShadow:p===`register`?`0 1px 4px rgba(0,0,0,0.08)`:`none`},children:`Register`})]}),p===`signin`&&S&&(0,F.jsxs)(`div`,{style:{background:`#fef2f2`,color:`#dc2626`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:`600`,marginBottom:`24px`,border:`1px solid #fecaca`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1rem`}}),(0,F.jsx)(`span`,{children:S})]}),p===`signin`&&A&&(0,F.jsxs)(`div`,{style:{background:`#f0fdf4`,color:`#15803d`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:600,marginBottom:`24px`,border:`1px solid #bbf7d0`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-envelope-circle-check`,style:{fontSize:`1rem`}}),(0,F.jsx)(`span`,{children:A})]}),p===`register`?K?(0,F.jsxs)(`div`,{style:{textAlign:`left`},children:[(0,F.jsxs)(`div`,{style:{background:`#f0fdf4`,color:`#15803d`,padding:`16px`,borderRadius:`14px`,fontSize:`0.88rem`,fontWeight:600,marginBottom:`20px`,border:`1px solid #bbf7d0`,display:`flex`,alignItems:`flex-start`,gap:`10px`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-check`,style:{fontSize:`1.1rem`,marginTop:`2px`}}),(0,F.jsxs)(`span`,{children:[`Registration submitted for `,(0,F.jsx)(`strong`,{children:K}),`. Check your inbox to verify your email, then wait for your institute admin to approve your account — you'll be able to sign in once they do.`]})]}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>{Ce(),m(`signin`)},className:`login-submit-button`,children:`Back to Sign In`})]}):(0,F.jsxs)(`form`,{onSubmit:Se,children:[W&&(0,F.jsxs)(`div`,{style:{background:`#fef2f2`,color:`#dc2626`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:600,marginBottom:`20px`,border:`1px solid #fecaca`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1rem`}}),(0,F.jsx)(`span`,{children:W})]}),(0,F.jsxs)(`div`,{className:`login-input-group`,children:[(0,F.jsx)(`label`,{className:`login-label`,children:`Full Name`}),(0,F.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,F.jsx)(`i`,{className:`fa-regular fa-user login-input-icon`}),(0,F.jsx)(`input`,{type:`text`,value:I,onChange:e=>oe(e.target.value),placeholder:`Your full name`,required:!0,className:`login-input-field`})]})]}),(0,F.jsxs)(`div`,{className:`login-input-group`,children:[(0,F.jsx)(`label`,{className:`login-label`,children:`Email`}),(0,F.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,F.jsx)(`i`,{className:`fa-regular fa-envelope login-input-icon`}),(0,F.jsx)(`input`,{type:`email`,value:L,onChange:e=>R(e.target.value),placeholder:`student@example.com`,required:!0,className:`login-input-field`})]})]}),(0,F.jsxs)(`div`,{className:`login-input-group`,children:[(0,F.jsx)(`label`,{className:`login-label`,children:`Phone (optional)`}),(0,F.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-phone login-input-icon`}),(0,F.jsx)(`input`,{type:`tel`,value:z,onChange:e=>B(e.target.value),placeholder:`Your phone number`,className:`login-input-field`})]})]}),(J||q.length>0)&&(0,F.jsxs)(`div`,{className:`login-input-group`,children:[(0,F.jsx)(`label`,{className:`login-label`,children:Q?`Branch / School`:Y===`school`?`School`:`Branch`}),J?(0,F.jsxs)(`div`,{className:`branch-picker-message`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),`Loading locations...`]}):(0,F.jsxs)(F.Fragment,{children:[Q&&(0,F.jsx)(`div`,{className:`branch-kind-tabs`,children:[`branch`,`school`].map(e=>(0,F.jsxs)(`button`,{type:`button`,onClick:()=>{pe(e),Z(``)},className:`branch-kind-tab ${Y===e?`is-active`:``}`,children:[(0,F.jsx)(`i`,{className:e===`branch`?`fa-solid fa-store`:`fa-solid fa-school`}),e===`branch`?`Branches`:`Schools`]},e))}),ve.length===0?(0,F.jsxs)(`div`,{className:`branch-picker-message`,children:[(0,F.jsx)(`i`,{className:`fa-regular fa-circle-question`}),`No `,Y===`school`?`schools`:`branches`,` available.`]}):(0,F.jsx)(`div`,{className:`branch-option-list`,children:ve.map(e=>(0,F.jsxs)(`button`,{type:`button`,onClick:()=>Z(e.id),className:`branch-option ${X===e.id?`is-selected`:``}`,children:[(0,F.jsx)(`span`,{className:`branch-option-icon`,children:(0,F.jsx)(`i`,{className:e.kind===`school`?`fa-solid fa-school`:`fa-solid fa-store`})}),(0,F.jsx)(`span`,{className:`branch-option-name`,children:e.name}),(0,F.jsx)(`span`,{className:`branch-option-radio`,children:X===e.id&&(0,F.jsx)(`i`,{className:`fa-solid fa-check`})})]},e.id))})]})]}),(0,F.jsxs)(`div`,{className:`login-input-group`,children:[(0,F.jsx)(`label`,{className:`login-label`,children:`Password`}),(0,F.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,F.jsx)(`input`,{type:`password`,value:V,onChange:e=>se(e.target.value),placeholder:`At least 6 characters`,required:!0,minLength:6,className:`login-input-field`})]})]}),(0,F.jsxs)(`div`,{className:`login-input-group`,style:{marginBottom:`16px`},children:[(0,F.jsx)(`label`,{className:`login-label`,children:`Confirm Password`}),(0,F.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,F.jsx)(`input`,{type:`password`,value:ce,onChange:e=>le(e.target.value),placeholder:`Re-enter your password`,required:!0,minLength:6,className:`login-input-field`})]})]}),(0,F.jsx)(`button`,{type:`submit`,disabled:H||!a||!i?.id||J,className:`login-submit-button`,children:H?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,F.jsx)(`span`,{children:`Submitting...`})]}):(0,F.jsx)(`span`,{children:`Request Access`})})]}):(0,F.jsxs)(`form`,{onSubmit:be,children:[(0,F.jsxs)(`div`,{className:`login-input-group`,children:[(0,F.jsx)(`label`,{className:`login-label`,children:`Student Email`}),(0,F.jsxs)(`div`,{className:`login-input-wrapper ${T?`login-input-wrapper-focused`:``}`,children:[(0,F.jsx)(`i`,{className:`fa-regular fa-envelope login-input-icon`}),(0,F.jsx)(`input`,{type:`email`,value:h,onChange:e=>g(e.target.value),onFocus:()=>te(!0),onBlur:()=>te(!1),placeholder:`student@example.com`,required:!0,className:`login-input-field`})]})]}),(0,F.jsxs)(`div`,{className:`login-input-group`,style:{marginBottom:`16px`},children:[(0,F.jsx)(`label`,{className:`login-label`,children:`Password`}),(0,F.jsxs)(`div`,{className:`login-input-wrapper ${ne?`login-input-wrapper-focused`:``}`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,F.jsx)(`input`,{type:w?`text`:`password`,value:_,onChange:e=>v(e.target.value),onFocus:()=>E(!0),onBlur:()=>E(!1),placeholder:`••••••••`,required:!0,className:`login-input-field`}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>ee(!w),className:`login-password-toggle`,children:(0,F.jsx)(`i`,{className:w?`fa-solid fa-eye-slash`:`fa-solid fa-eye`})})]})]}),(0,F.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,marginBottom:`24px`},children:(0,F.jsx)(`button`,{type:`button`,onClick:xe,disabled:D,style:{background:`none`,border:`none`,padding:0,cursor:D?`default`:`pointer`,color:`var(--primary-blue, #2563eb)`,fontSize:`0.82rem`,fontWeight:700},children:D?`Sending reset link...`:`Forgot password?`})}),(0,F.jsx)(`button`,{type:`submit`,disabled:b,className:`login-submit-button`,children:b?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,F.jsx)(`span`,{children:`Signing in...`})]}):(0,F.jsx)(`span`,{children:`Sign In`})})]})]})})]})}function ye(){let e=O(),[t,n]=(0,N.useState)(`checking`),[r,i]=(0,N.useState)(``),[a,o]=(0,N.useState)(``),[s,c]=(0,N.useState)(!1),[l,d]=(0,N.useState)(!1),[f,p]=(0,N.useState)(null);(0,N.useEffect)(()=>(document.body.classList.add(`login-body`),()=>document.body.classList.remove(`login-body`)),[]),(0,N.useEffect)(()=>{let e=!1;async function t(){let t=new URLSearchParams(C.hash.replace(/^#/,``)),r=new URLSearchParams(C.search),i=t.get(`error_description`)||r.get(`error_description`);if(i){e||(p(i),n(`invalid`));return}let a=r.get(`code`);if(!(a||t.get(`type`)===`recovery`||t.get(`access_token`))){e||n(`invalid`);return}if(a){let{error:t}=await y.auth.exchangeCodeForSession(a);if(t&&!e){p(t.message),n(`invalid`);return}}let{data:{session:o}}=await y.auth.getSession();e||(o?(window.history.replaceState({},document.title,`/reset-password`),n(`ready`)):n(`invalid`))}return t(),()=>{e=!0}},[]);async function m(t){if(t.preventDefault(),p(null),r.length<6){p(`Password must be at least 6 characters.`);return}if(r!==a){p(`Passwords do not match.`);return}d(!0);let{error:i}=await y.auth.updateUser({password:r});if(d(!1),i){p(i.message);return}await y.auth.signOut(),n(`done`),setTimeout(()=>e(`/login`,{replace:!0}),2e3)}return(0,F.jsxs)(`div`,{className:`login-page-container layout-classic_centered`,children:[(0,F.jsx)(u,{}),(0,F.jsx)(`div`,{className:`login-right-pane`,children:(0,F.jsxs)(`div`,{className:`login-form-card`,children:[(0,F.jsxs)(`div`,{style:{marginBottom:`24px`,textAlign:`center`},children:[(0,F.jsx)(`h1`,{className:`login-title-text`,children:`Set a new password`}),(0,F.jsx)(`p`,{className:`login-subtitle-text`,children:`Choose a new password for your student account`})]}),f&&(0,F.jsxs)(`div`,{style:{background:`#fef2f2`,color:`#dc2626`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:600,marginBottom:`24px`,border:`1px solid #fecaca`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),(0,F.jsx)(`span`,{children:f})]}),t===`checking`&&(0,F.jsxs)(`p`,{style:{textAlign:`center`,fontWeight:600},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`,style:{marginRight:8}}),`Verifying your reset link...`]}),t===`invalid`&&(0,F.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,F.jsx)(`p`,{style:{fontWeight:600,marginBottom:20},children:`This reset link is invalid or has expired. Please request a new one.`}),(0,F.jsx)(`button`,{className:`login-submit-button`,type:`button`,onClick:()=>e(`/login`),children:(0,F.jsx)(`span`,{children:`Back to Sign In`})})]}),t===`done`&&(0,F.jsx)(`p`,{style:{textAlign:`center`,fontWeight:600,color:`#16a34a`},children:`Password updated. Redirecting you to sign in...`}),t===`ready`&&(0,F.jsxs)(`form`,{onSubmit:m,children:[(0,F.jsxs)(`div`,{className:`login-input-group`,children:[(0,F.jsx)(`label`,{className:`login-label`,children:`New password`}),(0,F.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,F.jsx)(`input`,{type:s?`text`:`password`,value:r,onChange:e=>i(e.target.value),placeholder:`At least 6 characters`,autoComplete:`new-password`,required:!0,className:`login-input-field`}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>c(!s),className:`login-password-toggle`,children:(0,F.jsx)(`i`,{className:s?`fa-solid fa-eye-slash`:`fa-solid fa-eye`})})]})]}),(0,F.jsxs)(`div`,{className:`login-input-group`,style:{marginBottom:`30px`},children:[(0,F.jsx)(`label`,{className:`login-label`,children:`Confirm new password`}),(0,F.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,F.jsx)(`input`,{type:`password`,value:a,onChange:e=>o(e.target.value),placeholder:`Repeat new password`,autoComplete:`new-password`,required:!0,className:`login-input-field`})]})]}),(0,F.jsx)(`button`,{type:`submit`,disabled:l,className:`login-submit-button`,children:l?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,F.jsx)(`span`,{children:`Updating...`})]}):(0,F.jsx)(`span`,{children:`Update Password`})})]})]})})]})}function be(){let{institute:e}=l(),t=(Array.isArray(e?.institute_branding)?e.institute_branding[0]:e?.institute_branding)?.logo_url||``,n=e?.name||``;return(0,F.jsxs)(`div`,{className:`init-screen`,children:[(0,F.jsx)(`style`,{children:`
        .init-screen {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 22px;
          padding: 24px;
          background: var(--bg, #f8fafc);
        }
        .init-mark {
          width: 88px;
          height: 88px;
          border-radius: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #2563eb), var(--dark-blue, #1e40af)));
          color: #fff;
          font-size: 2rem;
          box-shadow: 0 18px 40px -10px color-mix(in srgb, var(--primary-blue, #2563eb) 45%, transparent);
          animation: initMarkIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .init-mark img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        @keyframes initMarkIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        .init-name {
          font-family: "Sora", sans-serif;
          font-weight: 900;
          font-size: 1.1rem;
          color: var(--dark-blue, #0f172a);
          text-align: center;
        }
        .init-status {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: var(--text-light, #64748b);
          font-weight: 800;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .init-track {
          width: min(240px, 70vw);
          height: 5px;
          border-radius: 999px;
          overflow: hidden;
          background: color-mix(in srgb, var(--primary-blue, #2563eb) 14%, transparent);
        }
        .init-bar {
          height: 100%;
          width: 40%;
          border-radius: 999px;
          background: linear-gradient(90deg, var(--primary-blue, #2563eb), var(--dark-blue, #1e40af));
          animation: initSlide 1.2s ease-in-out infinite;
        }
        @keyframes initSlide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(250%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .init-mark, .init-bar { animation: none; }
          .init-bar { width: 100%; }
        }
      `}),(0,F.jsx)(`div`,{className:`init-mark`,children:t?(0,F.jsx)(`img`,{src:t,alt:``}):(0,F.jsx)(`i`,{className:`fa-solid fa-calculator`})}),n?(0,F.jsx)(`div`,{className:`init-name`,children:n}):null,(0,F.jsxs)(`div`,{className:`init-status`,role:`status`,"aria-live":`polite`,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),`Initializing...`]}),(0,F.jsx)(`div`,{className:`init-track`,children:(0,F.jsx)(`div`,{className:`init-bar`})})]})}var xe=[{code:`en`,name:`English`},{code:`hi`,name:`Hindi`},{code:`as`,name:`Assamese`},{code:`bn`,name:`Bengali`},{code:`brx`,name:`Bodo`},{code:`doi`,name:`Dogri`},{code:`gu`,name:`Gujarati`},{code:`kn`,name:`Kannada`},{code:`ks`,name:`Kashmiri`},{code:`kok`,name:`Konkani`},{code:`mai`,name:`Maithili`},{code:`ml`,name:`Malayalam`},{code:`mni`,name:`Manipuri`},{code:`mr`,name:`Marathi`},{code:`ne`,name:`Nepali`},{code:`or`,name:`Odia`},{code:`pa`,name:`Punjabi`},{code:`sa`,name:`Sanskrit`},{code:`sat`,name:`Santali`},{code:`sd`,name:`Sindhi`},{code:`ta`,name:`Tamil`},{code:`te`,name:`Telugu`},{code:`ur`,name:`Urdu`}];function Se({notice:e,onConsented:t}){let{signOut:n}=l(),[r,i]=(0,N.useState)(`en`),[a,o]=(0,N.useState)(!1),[s,c]=(0,N.useState)(!1),[u,d]=(0,N.useState)(null),[f,p]=(0,N.useState)(e.english_title),[m,g]=(0,N.useState)(e.english_content),[v,y]=(0,N.useState)((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),[b,x]=(0,N.useState)((e.optional_purposes||[]).map(e=>({...e,label_display:e.label_en,checked:!1})));(0,N.useEffect)(()=>{if(r===`en`){p(e.english_title),g(e.english_content),y((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),x(t=>(e.optional_purposes||[]).map(e=>{let n=t.find(t=>t.key===e.key);return{...e,label_display:e.label_en,checked:!!n?.checked}}));return}async function t(){o(!0),d(null);let{data:t,error:n}=await h(e.id,r);n?(console.error(`Translation load failed, falling back to English`,n),S()):!t||t.status!==`approved`?S():(p(t.translated_title),g(t.translated_content),y((e.required_purposes||[]).map(e=>{let n=t.translated_required_purposes?.find(t=>t.key===e.key);return{...e,label_display:n?.label_translated||e.label_en}})),x(n=>(e.optional_purposes||[]).map(e=>{let r=t.translated_optional_purposes?.find(t=>t.key===e.key),i=n.find(t=>t.key===e.key);return{...e,label_display:r?.label_translated||e.label_en,checked:!!i?.checked}}))),o(!1)}t()},[r,e]);function S(){p(e.english_title),g(e.english_content),y((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),x(t=>(e.optional_purposes||[]).map(e=>{let n=t.find(t=>t.key===e.key);return{...e,label_display:e.label_en,checked:!!n?.checked}}))}function C(e){x(t=>t.map(t=>t.key===e?{...t,checked:!t.checked}:t))}async function w(n=!1){c(!0),d(null);let i=[],a=[];v.forEach(e=>i.push(e.key)),b.forEach(e=>{!n&&e.checked?i.push(e.key):a.push(e.key)});let{data:o,error:s}=await _(e.id,r,i,a);s?(d(s.message),c(!1)):t()}return(0,F.jsxs)(`div`,{className:`consent-fullscreen-overlay`,children:[(0,F.jsx)(`style`,{children:`
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
      `}),(0,F.jsxs)(`div`,{className:`consent-card`,children:[(0,F.jsxs)(`div`,{className:`consent-header`,children:[(0,F.jsx)(`h2`,{className:`consent-title`,children:f}),(0,F.jsxs)(`div`,{className:`consent-lang-container`,children:[(0,F.jsx)(`label`,{className:`consent-lang-label`,children:`Language:`}),(0,F.jsx)(`select`,{className:`consent-select-lang`,value:r,onChange:e=>i(e.target.value),disabled:a||s,children:xe.map(e=>(0,F.jsx)(`option`,{value:e.code,children:e.name},e.code))})]})]}),(0,F.jsx)(`div`,{className:`consent-content-area`,children:a?(0,F.jsxs)(`div`,{className:`consent-spinner-container`,children:[(0,F.jsx)(`div`,{className:`consent-spinner`}),(0,F.jsx)(`p`,{style:{marginTop:14,color:`var(--text-light, #64748b)`,fontSize:13.5,fontWeight:500},children:`Retrieving translation...`})]}):(0,F.jsx)(`div`,{className:`consent-notice-body`,children:m})}),(0,F.jsxs)(`div`,{className:`consent-purposes-section`,children:[v.length>0&&(0,F.jsxs)(`div`,{className:`consent-purpose-group`,children:[(0,F.jsx)(`h4`,{className:`consent-group-heading`,children:`Required Processing (Core Services)`}),(0,F.jsx)(`div`,{className:`consent-purposes-list`,children:v.map(e=>(0,F.jsxs)(`label`,{className:`consent-purpose-label disabled`,children:[(0,F.jsx)(`input`,{type:`checkbox`,checked:!0,disabled:!0,className:`consent-checkbox`}),(0,F.jsx)(`span`,{children:e.label_display})]},e.key))})]}),b.length>0&&(0,F.jsxs)(`div`,{className:`consent-purpose-group`,children:[(0,F.jsx)(`h4`,{className:`consent-group-heading`,children:`Optional Processing (Preferences)`}),(0,F.jsx)(`div`,{className:`consent-purposes-list`,children:b.map(e=>(0,F.jsxs)(`label`,{className:`consent-purpose-label`,children:[(0,F.jsx)(`input`,{type:`checkbox`,checked:e.checked,onChange:()=>C(e.key),disabled:s,className:`consent-checkbox`}),(0,F.jsx)(`span`,{children:e.label_display})]},e.key))})]})]}),u&&(0,F.jsxs)(`p`,{className:`consent-error-msg`,children:[`Error saving consent: `,u]}),(0,F.jsxs)(`div`,{className:`consent-footer`,children:[(0,F.jsxs)(`button`,{className:`consent-btn consent-btn-danger`,onClick:n,disabled:s||a,children:[(0,F.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),` Sign Out`]}),(0,F.jsxs)(`div`,{className:`consent-footer-right`,children:[b.length>0&&(0,F.jsx)(`button`,{className:`consent-btn consent-btn-secondary`,onClick:()=>w(!0),disabled:s||a,children:`Decline optional use`}),(0,F.jsx)(`button`,{className:`consent-btn consent-btn-primary`,onClick:()=>w(!1),disabled:s||a,children:`Agree and continue`})]})]})]})]})}function Ce(){let{signOut:e}=l();return(0,F.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,F.jsx)(u,{}),(0,F.jsx)(`style`,{children:`
        .access-blocked-card { animation: accessSpring 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        @keyframes accessSpring {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}),(0,F.jsxs)(`div`,{className:`access-blocked-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,F.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,F.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:`linear-gradient(135deg, #f59e0b, #b45309)`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px rgba(245, 158, 11, 0.5)`},children:(0,F.jsx)(`i`,{className:`fa-solid fa-triangle-exclamation`})})}),(0,F.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,F.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, #f59e0b 14%, transparent)`,color:`#b45309`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Access Paused`]})}),(0,F.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:`Panel Unavailable`}),(0,F.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:`There is an issue from your institute's side. Please contact your institute to restore access to your student panel.`}),(0,F.jsxs)(`button`,{type:`button`,onClick:e,style:{marginTop:`28px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,F.jsx)(`span`,{children:`Log out`})]})]})]})}function we(){if(window.location.pathname!==`/exam`)return!1;let e=window.location.search;return e.includes(`slug=`)||e.includes(`examId=`)||e.includes(`accessToken=`)}var Te=1500,Ee=!1;function De({children:e}){let{user:t,loading:n,sessionBlocked:r,accessBlocked:i,replaceActiveSession:a,signOut:o,consentRequiredNotice:s,setConsentRequiredNotice:c}=l(),[d,f]=(0,N.useState)(!1),[p,m]=(0,N.useState)(``),[h,g]=(0,N.useState)(Ee);if((0,N.useEffect)(()=>{if(Ee)return;let e=setTimeout(()=>{Ee=!0,g(!0)},Te);return()=>clearTimeout(e)},[]),n||!h)return(0,F.jsx)(be,{});if(!t){if(we())return e;let t=window.location.pathname+window.location.search;return(0,F.jsx)(b,{to:`/login`,state:{from:t&&t!==`/login`&&!t.startsWith(`/login?`)?t:`/`},replace:!0})}if(i)return(0,F.jsx)(Ce,{});if(!t.email_confirmed_at)return(0,F.jsx)(me,{});if(r){let e=r.activeSession,t=r.reason!==`invalid_membership`&&r.reason!==`evicted`;async function n(){m(``),f(!0);try{let e=await a();e?.error&&m(e.error.message||`Could not log out the other browser.`)}catch(e){m(e?.message||`Could not log out the other browser. Check your connection and try again.`)}finally{f(!1)}}return(0,F.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:99999,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
          radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 35%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 25%, transparent) 50%, rgba(15, 23, 42, 0.94) 85%),
          linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 15%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 15%, transparent) 1px, transparent 1px)
        `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backgroundPosition:`center center`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,F.jsx)(u,{}),(0,F.jsx)(`div`,{style:{position:`absolute`,width:`480px`,height:`480px`,borderRadius:`50%`,background:`radial-gradient(circle, color-mix(in srgb, var(--primary-blue, #3b82f6) 35%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 20%, transparent) 45%, transparent 70%)`,filter:`blur(60px)`,pointerEvents:`none`,zIndex:0,animation:`glowPulse 4s ease-in-out infinite alternate`}}),(0,F.jsx)(`style`,{children:`
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
        `}),(0,F.jsxs)(`div`,{className:`session-blocked-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.94))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent), 0 0 0 1px rgba(255, 255, 255, 0.8) inset, 0 2px 0 rgba(255, 255, 255, 0.9) inset`},children:[(0,F.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,F.jsx)(`div`,{style:{position:`relative`,width:`72px`,height:`72px`,borderRadius:`24px`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent), 0 0 0 6px color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`},children:(0,F.jsx)(`i`,{className:`fa-solid fa-shield-halved`})})}),(0,F.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,F.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Active Session Lock`]})}),(0,F.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.55rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 8px`,letterSpacing:`-0.02em`},children:t?`Account Already in Use`:r.reason===`evicted`?`Signed Out`:`Account Not Available`}),(0,F.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.94rem`,fontWeight:`600`,lineHeight:`1.55`},children:r.message}),e?(0,F.jsxs)(`div`,{style:{marginTop:`22px`,padding:`18px 20px`,border:`1px solid var(--border, rgba(59, 130, 246, 0.2))`,borderRadius:`20px`,textAlign:`left`,background:`linear-gradient(135deg, color-mix(in srgb, var(--primary-blue, #3b82f6) 8%, transparent) 0%, color-mix(in srgb, var(--gold, #94a3b8) 6%, transparent) 100%)`,display:`flex`,alignItems:`center`,gap:`16px`,boxShadow:`0 4px 14px color-mix(in srgb, var(--primary-blue, #3b82f6) 6%, transparent)`},children:[(0,F.jsx)(`div`,{style:{width:`48px`,height:`48px`,borderRadius:`16px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 16%, transparent)`,color:`var(--primary-blue, #3b82f6)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.25rem`,flexShrink:0,boxShadow:`0 2px 8px color-mix(in srgb, var(--primary-blue) 15%, transparent)`},children:(0,F.jsx)(`i`,{className:`fa-solid fa-desktop`})}),(0,F.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,F.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`8px`,marginBottom:`4px`},children:[(0,F.jsx)(`span`,{style:{fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,fontSize:`0.98rem`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e.browser||`Other Browser`}),(0,F.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`5px`,fontSize:`0.72rem`,color:`#15803d`,fontWeight:`800`,background:`#dcfce7`,padding:`2px 8px`,borderRadius:`999px`},children:[(0,F.jsx)(`span`,{className:`active-pulse-dot`}),`Active Now`]})]}),(0,F.jsxs)(`div`,{style:{color:`var(--text-light, #64748b)`,fontSize:`0.83rem`,fontWeight:`600`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,F.jsx)(`i`,{className:`fa-regular fa-clock`,style:{fontSize:`0.78rem`}}),`Last active `,e.last_seen_at?new Date(e.last_seen_at).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}):`recently`]})]})]}):null,p?(0,F.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err) 20%, transparent)`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,F.jsx)(`span`,{children:p})]}):null,(0,F.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,marginTop:`26px`},children:[t?(0,F.jsx)(`button`,{className:`session-btn-primary`,type:`button`,onClick:n,disabled:d,style:{flex:1,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:d?`not-allowed`:`pointer`,opacity:d?.7:1,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:d?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,F.jsx)(`span`,{children:`Logging out...`})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,F.jsx)(`span`,{children:`Log out other browser`})]})}):null,(0,F.jsx)(`button`,{className:`session-btn-secondary`,type:`button`,onClick:o,style:{flex:t?void 0:1,border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`15px 22px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`},children:t?`Cancel`:`Sign out`})]})]})]})}return s?(0,F.jsx)(Se,{notice:s,onConsented:()=>c(null)}):e}function Oe({children:e}){let{profile:t}=l(),{pathname:n}=r(),i=O(),{ready:a,unlockLevelByPath:o,activeSubjects:s}=d(),c=L(n),u=E(t?.current_level),{taught:f,required:p,locked:m}=S(n,u,o);return!a&&(x(n)||c)?null:R(c,s)?f&&(p===0||!m)?e:(0,F.jsx)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:(0,F.jsxs)(`div`,{style:{maxWidth:`520px`,margin:`60px auto`,padding:`40px 32px`,textAlign:`center`,background:`var(--card-bg, #fff)`,border:`1px solid var(--border, #e2e8f0)`,borderRadius:`28px`},children:[(0,F.jsx)(`div`,{style:{width:`72px`,height:`72px`,margin:`0 auto 20px`,borderRadius:`24px`,background:`#f1f5f9`,color:`#94a3b8`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.8rem`},children:(0,F.jsx)(`i`,{className:`fa-solid fa-lock`})}),(0,F.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontWeight:900,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`},children:f?`Not unlocked yet`:`Not on your course`}),(0,F.jsx)(`p`,{style:{color:`var(--text-light, #64748b)`,fontWeight:600,margin:`0 0 26px`,lineHeight:1.55},children:f?(0,F.jsxs)(F.Fragment,{children:[`This practice unlocks at `,(0,F.jsxs)(`strong`,{children:[`Level `,p]}),`. You are on `,(0,F.jsxs)(`strong`,{children:[`Level `,u]}),`. Keep going with your daily sessions and your teacher will move you up.`]}):(0,F.jsx)(F.Fragment,{children:`This practice is not part of your course. Your practice tools are all on the Practice page.`})}),(0,F.jsx)(`button`,{type:`button`,onClick:()=>i(`/practice`),style:{border:`none`,borderRadius:`16px`,padding:`14px 26px`,fontWeight:800,fontFamily:`'Sora', sans-serif`,color:`#fff`,background:`var(--primary-blue, #3b82f6)`,cursor:`pointer`},children:`Back to Practice`})]})}):(0,F.jsx)(ke,{onBack:()=>i(`/practice`)})}function ke({onBack:e}){return(0,F.jsx)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:(0,F.jsxs)(`div`,{style:{maxWidth:`520px`,margin:`60px auto`,padding:`40px 32px`,textAlign:`center`,background:`var(--card-bg, #fff)`,border:`1px solid var(--border, #e2e8f0)`,borderRadius:`28px`},children:[(0,F.jsx)(`div`,{style:{width:`72px`,height:`72px`,margin:`0 auto 20px`,borderRadius:`24px`,background:`#f1f5f9`,color:`#94a3b8`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.8rem`},children:(0,F.jsx)(`i`,{className:`fa-solid fa-circle-minus`})}),(0,F.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontWeight:900,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`},children:`Not part of your course`}),(0,F.jsx)(`p`,{style:{color:`var(--text-light, #64748b)`,fontWeight:600,margin:`0 0 26px`,lineHeight:1.55},children:`Your institute does not run this subject. Everything it does teach is on your Practice page.`}),(0,F.jsx)(`button`,{type:`button`,onClick:e,style:{border:`none`,borderRadius:`16px`,padding:`14px 26px`,fontWeight:800,fontFamily:`'Sora', sans-serif`,color:`#fff`,background:`var(--primary-blue, #3b82f6)`,cursor:`pointer`},children:`Back to Practice`})]})})}function Ae({slug:e=``}){let[t,r]=(0,N.useState)(e),[i,a]=(0,N.useState)(``),o=g(),c=s(),l=!!e;function d(e){e.preventDefault(),a(``),A(t)||a(`Use 3-32 characters: lowercase letters, numbers and dashes only.`)}return(0,F.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,F.jsx)(u,{}),(0,F.jsx)(`style`,{children:`
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
      `}),(0,F.jsxs)(`div`,{className:`institute-missing-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,F.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,F.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:l?`linear-gradient(135deg, #f59e0b, #b45309)`:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:l?`0 14px 32px -4px rgba(245, 158, 11, 0.5)`:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent)`},children:(0,F.jsx)(`i`,{className:l?`fa-solid fa-link-slash`:`fa-solid fa-school`})})}),(0,F.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,F.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:l?`color-mix(in srgb, #f59e0b 14%, transparent)`:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:l?`#b45309`:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-info`,style:{fontSize:`0.68rem`}}),l?`Unknown Portal`:`Select Institute`]})}),(0,F.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:l?`Portal Not Found`:`Which Institute?`}),(0,F.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:l?(0,F.jsxs)(F.Fragment,{children:[`There is no institute matching `,(0,F.jsx)(`strong`,{style:{color:`var(--dark-blue, #0f172a)`},children:e}),`.`,o?` Check the code below, or ask your institute for the correct link.`:` Please check the link your institute gave you.`]}):`Enter your institute code to open its student panel.`}),o?(0,F.jsxs)(`form`,{onSubmit:d,style:{marginTop:`26px`,textAlign:`left`},children:[(0,F.jsx)(`label`,{htmlFor:`institute-slug`,style:{display:`block`,fontSize:`0.76rem`,fontWeight:`900`,letterSpacing:`0.08em`,textTransform:`uppercase`,color:`var(--text-light, #64748b)`,marginBottom:`8px`},children:`Institute code`}),(0,F.jsx)(`input`,{id:`institute-slug`,className:`institute-missing-input`,type:`text`,value:t,onChange:e=>r(e.target.value.toLowerCase().trim()),placeholder:`speedomath`,autoComplete:`off`,autoCapitalize:`none`,spellCheck:`false`,style:{width:`100%`,boxSizing:`border-box`,border:`1px solid var(--border, #cbd5e1)`,borderRadius:`16px`,padding:`14px 16px`,fontSize:`1rem`,fontWeight:`700`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.9)`,transition:`border-color 0.2s, box-shadow 0.2s`}}),i?(0,F.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err, #c62828) 20%, transparent)`,borderRadius:`14px`,padding:`11px 14px`,fontSize:`0.86rem`,fontWeight:`700`,margin:`12px 0 0`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{flexShrink:0}}),(0,F.jsx)(`span`,{children:i})]}):null,(0,F.jsxs)(`button`,{type:`submit`,style:{marginTop:`18px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-arrow-right`}),(0,F.jsx)(`span`,{children:`Continue`})]}),c?(0,F.jsx)(`button`,{type:`button`,onClick:n,style:{marginTop:`10px`,width:`100%`,border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`13px 20px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.9rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`},children:`Clear and start over`}):null]}):null]})]})}var je=`
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
`;function Me(){let e=O(),{profile:t,institute:n,membership:r,user:i}=l(),[a,o]=(0,N.useState)(`overview`),[s,c]=(0,N.useState)({liveClasses:[],eBooks:[],recordedCourses:[],exams:[],results:[],achievements:[],loading:!0,error:``}),d=t?.current_level===999?`All levels`:`Level ${t?.current_level??0}`,p=t?.full_name?.split(` `)?.[0]||i?.email?.split(`@`)?.[0]||`Student`,m=Pe(r?.id),h=Fe(r?.id);(0,N.useEffect)(()=>{let e=!0;async function t(){if(!n?.id||!r?.id){c(e=>({...e,loading:!1}));return}let t=`home_dash_${n.id}_${r.id}`;try{let n=JSON.parse(sessionStorage.getItem(t)||`null`);if(n&&Date.now()-n._at<300*1e3){e&&c({...n,loading:!1,error:``});return}}catch{}c(e=>({...e,loading:!0,error:``}));let[i,a,o,s,l]=await Promise.all([ee(n.id),f(n.id,`ebook`),te(n.id),ne(n.id,r.id),v(n.id,r.id)]);if(!e)return;let u=i.error||a.error||o.error||s.error||l.error,d={liveClasses:i.data??[],eBooks:a.data??[],recordedCourses:o.data?.courses??[],exams:s.data?.exams??[],results:s.data?.results??[],achievements:l.data??[],loading:!1,error:u?.message||``};if(!u)try{sessionStorage.setItem(t,JSON.stringify({...d,_at:Date.now()}))}catch{}c(d)}return t(),()=>{e=!1}},[n?.id,r?.id]);let g=(0,N.useMemo)(()=>s.exams.filter(e=>e.kind!==`secure`),[s.exams]),_=(0,N.useMemo)(()=>s.results.filter(e=>{let t=s.exams.find(t=>t.id===e.exam_id);return t&&t.kind!==`secure`}),[s.exams,s.results]),y=s.liveClasses[0],b=g.filter(e=>!_.some(t=>t.exam_id===e.id)),x=_[0],S=E(t?.current_level),C=localStorage.getItem(`practice_session_${i?.id||`guest`}_${Ne()}_level_${S}`)===`done`,w=(0,N.useMemo)(()=>Le(i?.id),[i?.id]),D=(0,N.useMemo)(()=>w.reduce((e,t)=>Math.max(e,t.percent||0),0),[w]),k=_.map(e=>{let t=Number(e.total_marks??e.totalMarks??0);return t?Math.round(Number(e.score??0)/t*100):null}).filter(e=>e!=null),A=k.length?Math.round(k.reduce((e,t)=>e+t,0)/k.length):null,j=new Set(s.achievements.map(e=>e.achievement_code)),M=T.length?Math.round(s.achievements.length/T.length*100):0,P=Re(s.achievements,j),re=[y?{icon:`fa-video`,title:`Live class is ready`,text:`${y.title||`Your next class`} is coming up.`,bg:`#fee2e2`,color:`#dc2626`,action:()=>e(`/live-classes`)}:null,b[0]?{icon:`fa-file-lines`,title:`Exam waiting`,text:`${b[0].title||`New exam`} is ready to solve.`,bg:`#e0e7ff`,color:`#4f46e5`,action:()=>e(`/exam`)}:null,x?{icon:`fa-award`,title:`Result posted`,text:`Latest score: ${ze(x)}.`,bg:`#dcfce7`,color:`#16a34a`,action:()=>e(`/exam`)}:null,s.recordedCourses[0]?{icon:`fa-circle-play`,title:`Video lesson`,text:`${s.recordedCourses[0].title||s.recordedCourses[0].name||`A course`} is available.`,bg:`#fef3c7`,color:`#d97706`,action:()=>e(`/recorded-lectures`)}:null].filter(Boolean);return(0,F.jsxs)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 10px)`},children:[(0,F.jsx)(`style`,{children:je}),(0,F.jsx)(u,{}),(0,F.jsxs)(`div`,{className:`dashboard-container`,children:[(0,F.jsxs)(`div`,{className:`dash-header`,children:[(0,F.jsxs)(`div`,{children:[(0,F.jsxs)(`h1`,{className:`dash-title`,children:[`Welcome back, `,(0,F.jsx)(`span`,{children:p}),`!`]}),(0,F.jsx)(`p`,{className:`dash-subtitle`,children:`Pick today's quest, collect wins, and keep your abacus brain sharp.`})]}),(0,F.jsxs)(`div`,{className:`dash-date`,children:[(0,F.jsx)(`i`,{className:`fa-regular fa-calendar`,style:{marginRight:`6px`}}),new Date().toLocaleDateString(`en-US`,{weekday:`short`,month:`short`,day:`numeric`})]})]}),(0,F.jsxs)(`div`,{className:`home-tabs`,role:`tablist`,"aria-label":`Home dashboard`,children:[(0,F.jsxs)(`button`,{className:`home-tab ${a===`overview`?`active`:``}`,onClick:()=>o(`overview`),children:[(0,F.jsx)(`i`,{className:`fa-solid fa-house`}),`Overview`]}),(0,F.jsxs)(`button`,{className:`home-tab ${a===`streak`?`active`:``}`,onClick:()=>o(`streak`),children:[(0,F.jsx)(`i`,{className:`fa-solid fa-fire`}),`Streak`]})]}),a===`streak`?(0,F.jsxs)(`div`,{className:`streak-card`,children:[(0,F.jsx)(`div`,{className:`streak-flame`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-fire`})}),(0,F.jsxs)(`div`,{className:`streak-copy`,children:[(0,F.jsxs)(`h2`,{children:[m,` day streak`]}),(0,F.jsx)(`p`,{children:`Come back every day to keep the flame glowing.`})]}),(0,F.jsx)(`div`,{className:`streak-days`,children:h.map(e=>(0,F.jsxs)(`div`,{className:`streak-day ${e.done?`done`:``} ${e.today?`today`:``}`,children:[(0,F.jsx)(`i`,{className:`fa-solid ${e.done?`fa-check`:`fa-fire`}`}),(0,F.jsx)(`span`,{children:e.label})]},e.key))})]}):null,(0,F.jsxs)(`div`,{className:`stats-grid`,style:{display:a===`overview`?void 0:`none`},children:[(0,F.jsxs)(`div`,{className:`stat-card`,children:[(0,F.jsx)(`div`,{className:`stat-icon`,style:{background:`#e0e7ff`,color:`#4f46e5`},children:(0,F.jsx)(`i`,{className:`fa-solid fa-layer-group`})}),(0,F.jsxs)(`div`,{className:`stat-info`,children:[(0,F.jsx)(`div`,{className:`stat-val`,children:d}),(0,F.jsx)(`div`,{className:`stat-label`,children:`Current Stage`})]})]}),(0,F.jsxs)(`div`,{className:`stat-card`,children:[(0,F.jsx)(`div`,{className:`stat-icon`,style:{background:`#dcfce7`,color:`#16a34a`},children:(0,F.jsx)(`i`,{className:`fa-solid fa-bullseye`})}),(0,F.jsxs)(`div`,{className:`stat-info`,children:[(0,F.jsx)(`div`,{className:`stat-val`,children:A==null?`--`:`${A}%`}),(0,F.jsx)(`div`,{className:`stat-label`,children:`Exam Average`})]})]}),(0,F.jsxs)(`div`,{className:`stat-card`,children:[(0,F.jsx)(`div`,{className:`stat-icon`,style:{background:C?`#d1fae5`:`#fef3c7`,color:C?`#10b981`:`#d97706`},children:(0,F.jsx)(`i`,{className:`fa-solid ${C?`fa-circle-check`:`fa-calendar-check`}`})}),(0,F.jsxs)(`div`,{className:`stat-info`,children:[(0,F.jsx)(`div`,{className:`stat-val`,style:{color:C?`#10b981`:`#d97706`},children:C?`Complete`:`Pending`}),(0,F.jsx)(`div`,{className:`stat-label`,children:`Daily Session`})]})]}),(0,F.jsxs)(`div`,{className:`stat-card`,children:[(0,F.jsx)(`div`,{className:`stat-icon`,style:{background:`#fce7f3`,color:`#db2777`},children:(0,F.jsx)(`i`,{className:`fa-solid fa-clock`})}),(0,F.jsxs)(`div`,{className:`stat-info`,children:[(0,F.jsx)(`div`,{className:`stat-val`,children:s.liveClasses.length}),(0,F.jsx)(`div`,{className:`stat-label`,children:`Live Classes`})]})]})]}),(0,F.jsxs)(`div`,{className:`dash-main`,style:{display:a===`overview`?void 0:`none`},children:[(0,F.jsxs)(`div`,{className:`dash-left-col`,children:[(0,F.jsxs)(`div`,{className:`quest-card ${C?``:`pending-quest-highlight`}`,style:C?{}:{border:`2px solid #f59e0b`,boxShadow:`0 8px 24px -4px rgba(245, 158, 11, 0.35)`,background:`linear-gradient(135deg, color-mix(in srgb, var(--gold) 15%, white), white)`,position:`relative`},children:[!C&&(0,F.jsxs)(`span`,{style:{position:`absolute`,top:`-10px`,right:`14px`,background:`#f59e0b`,color:`#ffffff`,fontSize:`0.68rem`,fontWeight:`900`,padding:`3px 10px`,borderRadius:`50px`,textTransform:`uppercase`,letterSpacing:`0.8px`,boxShadow:`0 2px 8px rgba(245, 158, 11, 0.4)`,zIndex:2},children:[(0,F.jsx)(`i`,{className:`fa-solid fa-bell`,style:{marginRight:4}}),` PENDING TODAY`]}),(0,F.jsxs)(`div`,{className:`quest-copy`,children:[(0,F.jsx)(`h3`,{style:{color:C?void 0:`#d97706`},children:C?`Daily Session Complete`:`Daily Session`}),(0,F.jsx)(`p`,{children:C?`Nice work. Today's daily session is complete. A fresh round unlocks tomorrow.`:`Solve today's level-wise daily session questions.`})]}),(0,F.jsx)(`button`,{className:`quest-start`,onClick:()=>e(`/practice-session`),style:C?{}:{background:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,boxShadow:`0 4px 14px rgba(245, 158, 11, 0.4)`,fontWeight:`800`},children:C?`Review`:`Start Session`})]}),(0,F.jsxs)(`div`,{className:`panel`,children:[(0,F.jsxs)(`div`,{className:`panel-header`,children:[(0,F.jsx)(`h2`,{className:`panel-title`,children:`Weekly Activity`}),(0,F.jsx)(`button`,{className:`panel-action`,onClick:()=>e(`/practice-session`),children:`Daily Session`})]}),(0,F.jsx)(`div`,{className:`chart-area`,children:w.map(e=>(0,F.jsxs)(`div`,{className:`chart-bar-group`,children:[(0,F.jsx)(`div`,{className:`chart-bar-wrap`,children:(0,F.jsx)(`div`,{className:`chart-bar ${e.percent>=D&&D>0?`peak`:``}`,style:{height:`${e.percent}%`}})}),(0,F.jsx)(`span`,{className:`chart-label`,children:e.day})]},e.day))})]}),(0,F.jsxs)(`div`,{className:`panel trophy-panel`,children:[(0,F.jsxs)(`div`,{className:`panel-header`,children:[(0,F.jsx)(`h2`,{className:`panel-title`,children:`Trophy Power`}),(0,F.jsx)(`button`,{className:`panel-action`,onClick:()=>e(`/achievement`),children:`Badges`})]}),(0,F.jsxs)(`div`,{className:`achievement-meter`,children:[(0,F.jsx)(`div`,{className:`trophy-big`,children:(0,F.jsx)(`i`,{className:`fa-solid fa-trophy`})}),(0,F.jsxs)(`div`,{className:`meter-copy`,children:[(0,F.jsxs)(`strong`,{children:[s.achievements.length,`/`,T.length]}),(0,F.jsx)(`span`,{children:`badges collected`})]}),(0,F.jsxs)(`div`,{className:`meter-percent`,children:[M,`%`]})]}),(0,F.jsx)(`div`,{className:`achievement-track`,"aria-label":`Achievement progress`,children:(0,F.jsx)(`div`,{className:`achievement-fill`,style:{width:`${Math.max(4,M)}%`}})}),(0,F.jsx)(`div`,{className:`trophy-row`,children:P.map(t=>(0,F.jsxs)(`div`,{className:`mini-trophy ${t.earned?``:`locked`}`,onClick:()=>e(`/achievement`),children:[(0,F.jsx)(`div`,{className:`mini-trophy-icon`,style:{background:t.color},children:(0,F.jsx)(`i`,{className:`fa-solid ${t.icon}`})}),(0,F.jsx)(`span`,{children:t.name})]},t.code))})]}),(0,F.jsxs)(`div`,{className:`panel`,children:[(0,F.jsx)(`div`,{className:`panel-header`,style:{marginBottom:`0`},children:(0,F.jsx)(`h2`,{className:`panel-title`,children:`Quick Actions`})}),(0,F.jsxs)(`div`,{className:`quick-grid`,children:[(0,F.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/interactive-abacus`),children:[(0,F.jsx)(`i`,{className:`fa-solid fa-calculator`}),`Int. Abacus`]}),(0,F.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/practice`),children:[(0,F.jsx)(`i`,{className:`fa-solid fa-dumbbell`}),`Start Practice`]}),(0,F.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/live-classes`),children:[(0,F.jsx)(`i`,{className:`fa-solid fa-video`}),`Join Live Class`]}),(0,F.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/exam`),children:[(0,F.jsx)(`i`,{className:`fa-solid fa-file-lines`}),`Take Exam`]}),(0,F.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/achievement`),children:[(0,F.jsx)(`i`,{className:`fa-solid fa-medal`}),`Achievements`]})]})]})]}),(0,F.jsxs)(`div`,{className:`panel`,style:{display:`flex`,flexDirection:`column`},children:[(0,F.jsxs)(`div`,{className:`panel-header`,children:[(0,F.jsx)(`h2`,{className:`panel-title`,children:`Today's Updates`}),(0,F.jsx)(`button`,{className:`panel-action`,onClick:()=>e(`/recorded-lectures`),children:`Lessons`})]}),(0,F.jsxs)(`div`,{className:`notif-list`,children:[s.loading?(0,F.jsx)(`div`,{className:`home-loading`,children:`Loading your quests...`}):null,s.error?(0,F.jsxs)(`div`,{className:`home-loading`,children:[`Could not load some updates: `,s.error]}):null,!s.loading&&!re.length?(0,F.jsxs)(`div`,{className:`notif-item`,onClick:()=>e(`/practice-session`),children:[(0,F.jsx)(`div`,{className:`notif-icon`,style:{background:`#dcfce7`,color:`#16a34a`},children:(0,F.jsx)(`i`,{className:`fa-solid fa-wand-magic-sparkles`})}),(0,F.jsxs)(`div`,{className:`notif-content`,children:[(0,F.jsx)(`h4`,{children:`No new class work`}),(0,F.jsx)(`p`,{children:`Your daily practice quest is ready.`})]})]}):null,re.map(e=>(0,F.jsxs)(`div`,{className:`notif-item`,onClick:e.action,children:[(0,F.jsx)(`div`,{className:`notif-icon`,style:{background:e.bg,color:e.color},children:(0,F.jsx)(`i`,{className:`fa-solid ${e.icon}`})}),(0,F.jsxs)(`div`,{className:`notif-content`,children:[(0,F.jsx)(`h4`,{children:e.title}),(0,F.jsx)(`p`,{children:e.text})]})]},e.title))]}),(0,F.jsx)(`button`,{className:`btn btn-secondary`,style:{marginTop:`20px`,width:`100%`,padding:`12px`},onClick:()=>e(`/exam`),children:`View Exam History`})]})]})]})]})}function Ne(){return new Date().toISOString().slice(0,10)}function Pe(e){if(!e)return 0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);return Number(t.streakCount||0)}catch{return 0}}function Fe(e){let t=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],n=new Date,r=``,i=0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);r=t.lastLoginDate||``,i=Number(t.streakCount||0)}catch{}return Array.from({length:7},(e,a)=>{let o=new Date(n);o.setDate(n.getDate()-(6-a));let s=o.toLocaleDateString(`en-CA`),c=Math.round((Ie(n)-Ie(o))/864e5),l=r&&c<i;return{key:s,label:t[o.getDay()],today:s===n.toLocaleDateString(`en-CA`),done:l}})}function Ie(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function Le(e){let t=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],n=new Date;return Array.from({length:7},(r,i)=>{let a=new Date(n);a.setDate(n.getDate()-(6-i));let o=a.toISOString().slice(0,10);return{day:t[a.getDay()],percent:Object.keys(localStorage).filter(t=>t.startsWith(`practice_session_${e||`guest`}_${o}`)&&localStorage.getItem(t)===`done`).length?100:18}})}function Re(e,t){let n=e.slice(0,2).map(e=>({...w(e.achievement_code),earned:!0})).filter(e=>e.code),r=T.filter(e=>!t.has(e.code)).slice(0,Math.max(0,4-n.length)).map(e=>({...e,earned:!1}));return[...n,...r].slice(0,4)}function ze(e){let t=Number(e?.score??0),n=Number(e?.total_marks??e?.totalMarks??0);return n?`${t}/${n}`:`${t}`}var Be=`
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
`;function Ve(){let e=O();return(0,F.jsxs)(`div`,{className:`page-wrap`,style:{justifyContent:`center`},children:[(0,F.jsx)(`style`,{children:Be}),(0,F.jsx)(u,{}),(0,F.jsxs)(`div`,{className:`practice-card not-found-container`,style:{maxWidth:`550px`,marginTop:0},children:[(0,F.jsx)(`div`,{className:`abacus-wrap`,children:(0,F.jsxs)(`svg`,{width:`320`,height:`160`,viewBox:`0 0 420 200`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,F.jsx)(`rect`,{x:`10`,y:`10`,width:`400`,height:`180`,rx:`16`,ry:`16`,fill:`#ffffff`,stroke:`var(--dark-blue)`,strokeWidth:`6`}),(0,F.jsx)(`rect`,{x:`10`,y:`85`,width:`400`,height:`6`,fill:`var(--dark-blue)`}),(0,F.jsx)(`text`,{x:`95`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`4`}),(0,F.jsx)(`text`,{x:`210`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`0`}),(0,F.jsx)(`text`,{x:`325`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`4`}),(0,F.jsx)(`line`,{x1:`95`,y1:`20`,x2:`95`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`72`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`101`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`123`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`145`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`158`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,F.jsx)(`line`,{x1:`210`,y1:`20`,x2:`210`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`35`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`101`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`118`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`135`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`152`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,F.jsx)(`line`,{x1:`325`,y1:`20`,x2:`325`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`72`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`101`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`123`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`145`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,F.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`158`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`})]})}),(0,F.jsx)(`div`,{className:`error-code`,children:`404`}),(0,F.jsx)(`p`,{className:`error-msg`,children:`Oops! This bead slipped off the rod.`}),(0,F.jsx)(`p`,{className:`error-sub`,children:`Page not found`}),(0,F.jsxs)(`button`,{className:`btn btn-primary`,onClick:()=>e(`/`),children:[(0,F.jsx)(`i`,{className:`fa-solid fa-house`,style:{marginRight:`8px`}}),` Back to Dashboard`]})]})]})}var He=(0,N.lazy)(()=>a(()=>import(`./Basic-BDv-kNmh.js`),__vite__mapDeps([0,1,2]))),Ue=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e._),__vite__mapDeps([3,2,1]))),We=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.v),__vite__mapDeps([3,2,1]))),Ge=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.u),__vite__mapDeps([3,2,1]))),Ke=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.a),__vite__mapDeps([3,2,1]))),qe=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.o),__vite__mapDeps([3,2,1]))),Je=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.d),__vite__mapDeps([3,2,1]))),Ye=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.m),__vite__mapDeps([3,2,1]))),Xe=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.f),__vite__mapDeps([3,2,1]))),Ze=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.p),__vite__mapDeps([3,2,1]))),Qe=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.r),__vite__mapDeps([3,2,1]))),$e=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.h),__vite__mapDeps([3,2,1]))),et=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.n),__vite__mapDeps([3,2,1]))),tt=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.g),__vite__mapDeps([3,2,1]))),nt=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.s),__vite__mapDeps([3,2,1]))),rt=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.t),__vite__mapDeps([3,2,1]))),it=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.i),__vite__mapDeps([3,2,1]))),at=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.c),__vite__mapDeps([3,2,1]))),ot=(0,N.lazy)(()=>a(()=>import(`./levels-joQmBHyv.js`).then(e=>e.l),__vite__mapDeps([3,2,1]))),st=(0,N.lazy)(()=>a(()=>import(`./Abacus-Dz8L35lk.js`),__vite__mapDeps([4,2,1,5]))),ct=(0,N.lazy)(()=>a(()=>import(`./interactive-VrFACgqL.js`).then(e=>e.a),__vite__mapDeps([1,2]))),lt=(0,N.lazy)(()=>a(()=>import(`./interactive-VrFACgqL.js`).then(e=>e.c),__vite__mapDeps([1,2]))),ut=(0,N.lazy)(()=>a(()=>import(`./interactive-VrFACgqL.js`).then(e=>e.l),__vite__mapDeps([1,2]))),dt=(0,N.lazy)(()=>a(()=>import(`./interactive-VrFACgqL.js`).then(e=>e.r),__vite__mapDeps([1,2]))),ft=(0,N.lazy)(()=>a(()=>import(`./interactive-VrFACgqL.js`).then(e=>e.o),__vite__mapDeps([1,2]))),pt=(0,N.lazy)(()=>a(()=>import(`./interactive-VrFACgqL.js`).then(e=>e.s),__vite__mapDeps([1,2]))),mt=(0,N.lazy)(()=>a(()=>import(`./interactive-VrFACgqL.js`).then(e=>e.t),__vite__mapDeps([1,2]))),ht=(0,N.lazy)(()=>a(()=>import(`./interactive-VrFACgqL.js`).then(e=>e.i),__vite__mapDeps([1,2]))),gt=(0,N.lazy)(()=>a(()=>import(`./interactive-VrFACgqL.js`).then(e=>e.n),__vite__mapDeps([1,2]))),_t=(0,N.lazy)(()=>a(()=>import(`./VedicMaster-DUTAVjwy.js`),__vite__mapDeps([6,1,2,7]))),vt=(0,N.lazy)(()=>a(()=>import(`./VedicTrickPractice-DQymAXjn.js`),__vite__mapDeps([8,2,1,7]))),yt=(0,N.lazy)(()=>a(()=>import(`./RubiksCube-BjDNJi_M.js`),__vite__mapDeps([9,2,1,10,5,11]))),bt=(0,N.lazy)(()=>a(()=>import(`./Practice-0MR7oHw1.js`),__vite__mapDeps([12,2,1]))),xt=(0,N.lazy)(()=>a(()=>import(`./PracticeSession-CqUC0-99.js`),__vite__mapDeps([13,2,1,11]))),St=(0,N.lazy)(()=>a(()=>import(`./Exam-B_IoJQXI.js`),__vite__mapDeps([14,2,1,15]))),Ct=(0,N.lazy)(()=>a(()=>import(`./LiveClasses-CXNZcpbT.js`),__vite__mapDeps([16,2,1,15]))),wt=(0,N.lazy)(()=>a(()=>import(`./RecordedLecture-Cg36mrVC.js`),__vite__mapDeps([17,2,1,18,15]))),Tt=(0,N.lazy)(()=>a(()=>import(`./Classroom-BU98aKdO.js`),__vite__mapDeps([19,2,1]))),Et=(0,N.lazy)(()=>a(()=>import(`./Syllabus-BXxSJdxO.js`),__vite__mapDeps([20,2,1]))),Dt=(0,N.lazy)(()=>a(()=>import(`./EBook-Dxx-mUsc.js`),__vite__mapDeps([21,2,1,22,23,15]))),Ot=(0,N.lazy)(()=>a(()=>import(`./Profile-Cixf_TjY.js`),__vite__mapDeps([24,2,1]))),kt=(0,N.lazy)(()=>a(()=>import(`./Achievement-rAJogwwo.js`),__vite__mapDeps([25,2,1]))),At=(0,N.lazy)(()=>a(()=>import(`./GameZone-BFb90EOL.js`),__vite__mapDeps([26,2,1,11]))),jt=(0,N.lazy)(()=>a(()=>import(`./mcq-DZuEPLxH.js`).then(e=>e.f),__vite__mapDeps([11,2,1]))),Mt=(0,N.lazy)(()=>a(()=>import(`./mcq-DZuEPLxH.js`).then(e=>e.p),__vite__mapDeps([11,2,1]))),Nt=(0,N.lazy)(()=>a(()=>import(`./mcq-DZuEPLxH.js`).then(e=>e.c),__vite__mapDeps([11,2,1]))),Pt=(0,N.lazy)(()=>a(()=>import(`./mcq-DZuEPLxH.js`).then(e=>e.l),__vite__mapDeps([11,2,1]))),Ft=(0,N.lazy)(()=>a(()=>import(`./mcq-DZuEPLxH.js`).then(e=>e.i),__vite__mapDeps([11,2,1]))),It=(0,N.lazy)(()=>a(()=>import(`./mcq-DZuEPLxH.js`).then(e=>e.s),__vite__mapDeps([11,2,1]))),Lt=(0,N.lazy)(()=>a(()=>import(`./mcq-DZuEPLxH.js`).then(e=>e.t),__vite__mapDeps([11,2,1]))),Rt=(0,N.lazy)(()=>a(()=>import(`./mcq-DZuEPLxH.js`).then(e=>e.n),__vite__mapDeps([11,2,1]))),zt=(0,N.lazy)(()=>a(()=>import(`./mcq-DZuEPLxH.js`).then(e=>e.d),__vite__mapDeps([11,2,1]))),Bt=(0,N.lazy)(()=>a(()=>import(`./mcq-DZuEPLxH.js`).then(e=>e.u),__vite__mapDeps([11,2,1]))),Vt=(0,N.lazy)(()=>a(()=>import(`./mcq-DZuEPLxH.js`).then(e=>e.a),__vite__mapDeps([11,2,1]))),Ht=(0,N.lazy)(()=>a(()=>import(`./mcq-DZuEPLxH.js`).then(e=>e.o),__vite__mapDeps([11,2,1]))),Ut=(0,N.lazy)(()=>a(()=>import(`./mcq-DZuEPLxH.js`).then(e=>e.r),__vite__mapDeps([11,2,1]))),Wt=new Set(`/addition./addsub./negative./multiply./division./decimal-addsub./decimal-multiply./decimal-division./sq-root./cube-root./square./cube./long-multiply./table./percentage./lcm./hcf./mcq-addition./mcq-addsub./mcq-decimal-add./mcq-decimal-addsub./mcq-multiply./mcq-division./mcq-square./mcq-sqroot./mcq-cube./mcq-cuberoot./mcq-lcm./mcq-hcf./mcq-percentage`.split(`.`)),Gt=new Set([`/interactive-abacus-addition`,`/interactive-abacus-addsub`,`/interactive-abacus-multiply`,`/interactive-abacus-division`,`/interactive-abacus-decimals`,`/interactive-abacus-sqroots`,`/interactive-abacus-lcmhcf`,`/interactive-abacus-percentage`]);function Kt(){let{instituteReady:e,instituteMissing:t,instituteSlug:n}=l();return e&&t&&!we()?(0,F.jsx)(Ae,{slug:n}):(0,F.jsx)(D,{children:(0,F.jsx)(N.Suspense,{fallback:null,children:(0,F.jsxs)(m,{children:[(0,F.jsx)(k,{path:`/login`,element:(0,F.jsx)(ve,{})}),(0,F.jsx)(k,{path:`/reset-password`,element:(0,F.jsx)(ye,{})}),(0,F.jsx)(k,{path:`/`,element:(0,F.jsx)($,{children:(0,F.jsx)(Me,{})})}),(0,F.jsx)(k,{path:`/Basic`,element:(0,F.jsx)($,{children:(0,F.jsx)(He,{})})}),(0,F.jsx)(k,{path:`/addition`,element:(0,F.jsx)($,{children:(0,F.jsx)(Ue,{})})}),(0,F.jsx)(k,{path:`/addsub`,element:(0,F.jsx)($,{children:(0,F.jsx)(We,{})})}),(0,F.jsx)(k,{path:`/formula-direct`,element:(0,F.jsx)($,{children:(0,F.jsx)(Ge,{formula:`direct`})})}),(0,F.jsx)(k,{path:`/formula-small-friend`,element:(0,F.jsx)($,{children:(0,F.jsx)(Ge,{formula:`smallFriend`})})}),(0,F.jsx)(k,{path:`/formula-big-friend`,element:(0,F.jsx)($,{children:(0,F.jsx)(Ge,{formula:`bigFriend`})})}),(0,F.jsx)(k,{path:`/formula-combination`,element:(0,F.jsx)($,{children:(0,F.jsx)(Ge,{formula:`combination`})})}),(0,F.jsx)(k,{path:`/negative`,element:(0,F.jsx)($,{children:(0,F.jsx)(Ke,{})})}),(0,F.jsx)(k,{path:`/multiply`,element:(0,F.jsx)($,{children:(0,F.jsx)(qe,{})})}),(0,F.jsx)(k,{path:`/division`,element:(0,F.jsx)($,{children:(0,F.jsx)(Je,{})})}),(0,F.jsx)(k,{path:`/decimal-addsub`,element:(0,F.jsx)($,{children:(0,F.jsx)(Ye,{})})}),(0,F.jsx)(k,{path:`/decimal-multiply`,element:(0,F.jsx)($,{children:(0,F.jsx)(Xe,{})})}),(0,F.jsx)(k,{path:`/decimal-division`,element:(0,F.jsx)($,{children:(0,F.jsx)(Ze,{})})}),(0,F.jsx)(k,{path:`/sq-root`,element:(0,F.jsx)($,{children:(0,F.jsx)(Qe,{})})}),(0,F.jsx)(k,{path:`/cube-root`,element:(0,F.jsx)($,{children:(0,F.jsx)($e,{})})}),(0,F.jsx)(k,{path:`/square`,element:(0,F.jsx)($,{children:(0,F.jsx)(et,{})})}),(0,F.jsx)(k,{path:`/cube`,element:(0,F.jsx)($,{children:(0,F.jsx)(tt,{})})}),(0,F.jsx)(k,{path:`/long-multiply`,element:(0,F.jsx)($,{children:(0,F.jsx)(nt,{})})}),(0,F.jsx)(k,{path:`/table`,element:(0,F.jsx)($,{children:(0,F.jsx)(rt,{})})}),(0,F.jsx)(k,{path:`/percentage`,element:(0,F.jsx)($,{children:(0,F.jsx)(it,{})})}),(0,F.jsx)(k,{path:`/lcm`,element:(0,F.jsx)($,{children:(0,F.jsx)(at,{})})}),(0,F.jsx)(k,{path:`/hcf`,element:(0,F.jsx)($,{children:(0,F.jsx)(ot,{})})}),(0,F.jsx)(k,{path:`/abacus`,element:(0,F.jsx)($,{children:(0,F.jsx)(st,{})})}),(0,F.jsx)(k,{path:`/interactive-abacus`,element:(0,F.jsx)($,{children:(0,F.jsx)(ct,{})})}),(0,F.jsx)(k,{path:`/interactive-abacus-addition`,element:(0,F.jsx)($,{children:(0,F.jsx)(lt,{})})}),(0,F.jsx)(k,{path:`/interactive-abacus-addsub`,element:(0,F.jsx)($,{children:(0,F.jsx)(ut,{})})}),(0,F.jsx)(k,{path:`/interactive-abacus-multiply`,element:(0,F.jsx)($,{children:(0,F.jsx)(dt,{})})}),(0,F.jsx)(k,{path:`/interactive-abacus-division`,element:(0,F.jsx)($,{children:(0,F.jsx)(ft,{})})}),(0,F.jsx)(k,{path:`/interactive-abacus-decimals`,element:(0,F.jsx)($,{children:(0,F.jsx)(pt,{})})}),(0,F.jsx)(k,{path:`/interactive-abacus-sqroots`,element:(0,F.jsx)($,{children:(0,F.jsx)(mt,{})})}),(0,F.jsx)(k,{path:`/interactive-abacus-lcmhcf`,element:(0,F.jsx)($,{children:(0,F.jsx)(ht,{})})}),(0,F.jsx)(k,{path:`/interactive-abacus-percentage`,element:(0,F.jsx)($,{children:(0,F.jsx)(gt,{})})}),(0,F.jsx)(k,{path:`/iabacus`,element:(0,F.jsx)(b,{to:`/interactive-abacus`,replace:!0})}),(0,F.jsx)(k,{path:`/iabacus-addition`,element:(0,F.jsx)(b,{to:`/interactive-abacus-addition`,replace:!0})}),(0,F.jsx)(k,{path:`/iabacus-addsub`,element:(0,F.jsx)(b,{to:`/interactive-abacus-addsub`,replace:!0})}),(0,F.jsx)(k,{path:`/iabacus-multiply`,element:(0,F.jsx)(b,{to:`/interactive-abacus-multiply`,replace:!0})}),(0,F.jsx)(k,{path:`/iabacus-division`,element:(0,F.jsx)(b,{to:`/interactive-abacus-division`,replace:!0})}),(0,F.jsx)(k,{path:`/iabacus-decimals`,element:(0,F.jsx)(b,{to:`/interactive-abacus-decimals`,replace:!0})}),(0,F.jsx)(k,{path:`/iabacus-sqroots`,element:(0,F.jsx)(b,{to:`/interactive-abacus-sqroots`,replace:!0})}),(0,F.jsx)(k,{path:`/iabacus-lcmhcf`,element:(0,F.jsx)(b,{to:`/interactive-abacus-lcmhcf`,replace:!0})}),(0,F.jsx)(k,{path:`/iabacus-percentage`,element:(0,F.jsx)(b,{to:`/interactive-abacus-percentage`,replace:!0})}),(0,F.jsx)(k,{path:`/RubiksCube`,element:(0,F.jsx)($,{children:(0,F.jsx)(yt,{})})}),(0,F.jsx)(k,{path:`/practice`,element:(0,F.jsx)($,{children:(0,F.jsx)(bt,{})})}),(0,F.jsx)(k,{path:`/practice-session`,element:(0,F.jsx)($,{children:(0,F.jsx)(xt,{})})}),(0,F.jsx)(k,{path:`/exam`,element:(0,F.jsx)($,{children:(0,F.jsx)(St,{})})}),(0,F.jsx)(k,{path:`/live-classes`,element:(0,F.jsx)($,{children:(0,F.jsx)(Ct,{})})}),(0,F.jsx)(k,{path:`/recorded-lectures`,element:(0,F.jsx)($,{children:(0,F.jsx)(wt,{})})}),(0,F.jsx)(k,{path:`/classroom`,element:(0,F.jsx)($,{children:(0,F.jsx)(Tt,{})})}),(0,F.jsx)(k,{path:`/syllabus`,element:(0,F.jsx)($,{children:(0,F.jsx)(Et,{})})}),(0,F.jsx)(k,{path:`/e-book`,element:(0,F.jsx)($,{children:(0,F.jsx)(Dt,{})})}),(0,F.jsx)(k,{path:`/profile`,element:(0,F.jsx)($,{children:(0,F.jsx)(Ot,{})})}),(0,F.jsx)(k,{path:`/achievement`,element:(0,F.jsx)($,{children:(0,F.jsx)(kt,{})})}),(0,F.jsx)(k,{path:`/mcq-addition`,element:(0,F.jsx)($,{children:(0,F.jsx)(jt,{})})}),(0,F.jsx)(k,{path:`/mcq-addsub`,element:(0,F.jsx)($,{children:(0,F.jsx)(Mt,{})})}),(0,F.jsx)(k,{path:`/mcq-decimal-add`,element:(0,F.jsx)($,{children:(0,F.jsx)(Nt,{})})}),(0,F.jsx)(k,{path:`/mcq-decimal-addsub`,element:(0,F.jsx)($,{children:(0,F.jsx)(Pt,{})})}),(0,F.jsx)(k,{path:`/mcq-multiply`,element:(0,F.jsx)($,{children:(0,F.jsx)(Ft,{})})}),(0,F.jsx)(k,{path:`/mcq-division`,element:(0,F.jsx)($,{children:(0,F.jsx)(It,{})})}),(0,F.jsx)(k,{path:`/mcq-square`,element:(0,F.jsx)($,{children:(0,F.jsx)(Lt,{})})}),(0,F.jsx)(k,{path:`/mcq-sqroot`,element:(0,F.jsx)($,{children:(0,F.jsx)(Rt,{})})}),(0,F.jsx)(k,{path:`/mcq-cube`,element:(0,F.jsx)($,{children:(0,F.jsx)(zt,{})})}),(0,F.jsx)(k,{path:`/mcq-cuberoot`,element:(0,F.jsx)($,{children:(0,F.jsx)(Bt,{})})}),(0,F.jsx)(k,{path:`/mcq-lcm`,element:(0,F.jsx)($,{children:(0,F.jsx)(Vt,{})})}),(0,F.jsx)(k,{path:`/mcq-hcf`,element:(0,F.jsx)($,{children:(0,F.jsx)(Ht,{})})}),(0,F.jsx)(k,{path:`/mcq-percentage`,element:(0,F.jsx)($,{children:(0,F.jsx)(Ut,{})})}),(0,F.jsx)(k,{path:`/mental-flash-games`,element:(0,F.jsx)($,{children:(0,F.jsx)(At,{})})}),(0,F.jsx)(k,{path:`/vedic-math`,element:(0,F.jsx)(b,{to:`/vedic-math/master`,replace:!0})}),(0,F.jsx)(k,{path:`/vedic-math/master`,element:(0,F.jsx)($,{children:(0,F.jsx)(_t,{})})}),(0,F.jsx)(k,{path:`/vedic-math/practice/:trickId`,element:(0,F.jsx)($,{children:(0,F.jsx)(vt,{})})}),(0,F.jsx)(k,{path:`*`,element:(0,F.jsx)(Ve,{})})]})})})}function $({children:e}){let[t,n]=(0,N.useState)(!1),{pathname:i}=r(),a=O(),{user:o,studentLayout:s}=l();if(!o)return(0,F.jsx)(De,{children:(0,F.jsx)(`div`,{className:`app-layout app-layout-focus`,style:{minHeight:`100vh`,width:`100%`},children:(0,F.jsx)(`main`,{className:`main-content`,style:{margin:0,padding:`20px 16px`,width:`100%`},children:e})})});let c=Wt.has(i),u=Gt.has(i),d=c||u,f=u?{path:`/interactive-abacus`,label:`Interactive Abacus`}:{path:`/practice`,label:`Practice`},p=s||`sidebar_classic`,m=p===`topbar_focus`||p===`bento_gamified`,h=()=>{n(e=>!e)};return(0,F.jsxs)(De,{children:[(0,F.jsx)(re,{toggleSidebar:h,hideSidebarToggle:d}),m&&!d?(0,F.jsx)(fe,{}):null,(0,F.jsxs)(`div`,{className:`app-layout app-layout-${p} ${d?`app-layout-focus`:``}`,children:[(0,F.jsx)(de,{isOpen:t,toggleSidebar:h,minimized:d}),(0,F.jsxs)(`main`,{className:`main-content`,children:[d?(0,F.jsx)(`div`,{className:`practice-focus-topbar`,children:(0,F.jsxs)(`button`,{className:`practice-back-button`,type:`button`,onClick:()=>a(f.path),children:[(0,F.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),(0,F.jsx)(`span`,{children:f.label})]})}):null,(0,F.jsx)(Oe,{children:e})]})]}),(0,F.jsx)(ae,{}),(0,F.jsx)(pe,{})]})}(0,P.createRoot)(document.getElementById(`root`)).render((0,F.jsx)(N.StrictMode,{children:(0,F.jsx)(o,{children:(0,F.jsx)(Kt,{})})}));export{W as a,le as i,U as n,H as o,ce as r,R as s,ue as t};