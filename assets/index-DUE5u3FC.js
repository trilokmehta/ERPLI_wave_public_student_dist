const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Basic-C3EPrS6W.js","assets/interactive-Cdjdmhdv.js","assets/rolldown-runtime-S-ySWqyJ.js","assets/levels-TdPqfTja.js","assets/Abacus-Bc3V3rBV.js","assets/LiveToolBanner-Dm0B6azV.js","assets/mcq-CTdn8LzU.js","assets/RubiksCube-DT73elh8.js","assets/three-BV_NVX2Z.js","assets/VedicMath-CByEb2aQ.js","assets/VedicMaster-BiZWqyFD.js","assets/VedicJuniorPath-C8UiiBSd.js","assets/LevelPath-BTzi6gL-.js","assets/vedicProgress-DckmEqb0.js","assets/juniorLevels-CZ35pFEy.js","assets/JuniorLevel-Q0Kg8Zu1.js","assets/juniorRandom-BAV2sf5P.js","assets/VedicExplorerPath-Dw52ziKB.js","assets/explorerLevels-Bim6gbjc.js","assets/ExplorerLevel-Md0Pgqqz.js","assets/Practice-C9XMf1jQ.js","assets/PracticeSession-ByfentUL.js","assets/Exam-DJLkZhMC.js","assets/LiveClasses-2yX_AkE1.js","assets/RecordedLecture-DXS5J5j0.js","assets/EBook-Bd1pjb2G.js","assets/vendor-DqlZT81e.js","assets/vendor-rptWOpCb.css","assets/Profile-jfB0FPyM.js","assets/Achievement-Bo2XCzj5.js","assets/GameZone-DgRLDH-8.js"])))=>i.map(i=>d[i]);
import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{_ as t,b as n,d as r,f as i,g as a,h as o,m as s,p as c,u as l,y as u}from"./interactive-Cdjdmhdv.js";import{n as d,t as f}from"./react-dom-CF56MuER.js";import{$ as p,B as m,C as h,D as g,E as _,I as v,L as y,O as b,Q as x,S,T as C,V as w,Y as T,Z as E,k as D,w as O,z as k}from"./mcq-CTdn8LzU.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var A=e(n(),1),j=f(),M=r();function N({toggleSidebar:e,hideSidebarToggle:n=!1}){let r=t(),{profile:i,institute:a,membership:o,signOut:s}=h(),[c,l]=(0,A.useState)(!1),[u,d]=(0,A.useState)(!1),f=Array.isArray(a?.institute_branding)?a?.institute_branding[0]?.logo_url:a?.institute_branding?.logo_url,p=a?.name||`Student Portal`,m=i?.full_name||`Student`,g=i?.current_level===999?`All levels`:`Level ${i?.current_level??0}`,_=P(o?.id),v=()=>{document.fullscreenElement?document.exitFullscreen&&document.exitFullscreen():document.documentElement.requestFullscreen().catch(e=>{console.error(`Error attempting to enable fullscreen: ${e.message}`)})};(0,A.useEffect)(()=>{let e=()=>{l(!!document.fullscreenElement)};return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]);async function y(){await s(),d(!1),r(`/login`)}return(0,M.jsxs)(`nav`,{className:`navbar`,children:[(0,M.jsxs)(`div`,{className:`logo`,onClick:()=>r(`/`),children:[(0,M.jsx)(`img`,{src:f||`/Abacus.png`,alt:p,className:`nav-brand-logo`}),(0,M.jsx)(`span`,{children:p})]}),(0,M.jsxs)(`div`,{className:`nav-actions`,children:[(0,M.jsxs)(`button`,{className:`nav-streak-pill`,onClick:()=>r(`/`),title:`Daily login streak`,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-fire`}),(0,M.jsx)(`span`,{children:_})]}),(0,M.jsx)(`button`,{className:`fullscreen-toggle`,onClick:v,title:c?`Exit Fullscreen`:`Enter Fullscreen`,style:{background:`transparent`,border:`none`,color:`white`,fontSize:`20px`,cursor:`pointer`,opacity:.85,transition:`all 0.2s ease`,padding:`4px`,display:`flex`,alignItems:`center`,justifyContent:`center`},onMouseEnter:e=>{e.currentTarget.style.opacity=`1`,e.currentTarget.style.transform=`scale(1.1)`},onMouseLeave:e=>{e.currentTarget.style.opacity=`0.85`,e.currentTarget.style.transform=`scale(1)`},children:(0,M.jsx)(`i`,{className:`fa-solid ${c?`fa-compress`:`fa-expand`}`})}),(0,M.jsxs)(`div`,{className:`nav-profile`,children:[(0,M.jsxs)(`button`,{className:`nav-profile-button`,onClick:()=>d(e=>!e),"aria-label":`Open profile menu`,"aria-expanded":u,children:[(0,M.jsx)(`span`,{className:`nav-profile-avatar`,children:(0,M.jsx)(`i`,{className:`fa-solid fa-user`})}),(0,M.jsxs)(`span`,{className:`nav-profile-text`,children:[(0,M.jsx)(`strong`,{children:m}),(0,M.jsx)(`span`,{children:g})]}),(0,M.jsx)(`i`,{className:`fa-solid fa-chevron-${u?`up`:`down`} nav-profile-caret`})]}),u?(0,M.jsxs)(`div`,{className:`nav-profile-menu`,children:[(0,M.jsxs)(`button`,{onClick:()=>{d(!1),r(`/profile`)},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-user`}),`Profile`]}),(0,M.jsxs)(`button`,{onClick:()=>{d(!1),r(`/achievement`)},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-medal`}),`Achievements`]}),(0,M.jsxs)(`button`,{onClick:y,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),`Log Out`]})]}):null]}),n?null:(0,M.jsx)(`button`,{className:`hamburger`,onClick:e,"aria-label":`Toggle Sidebar`,style:{marginLeft:0},children:(0,M.jsx)(`i`,{className:`fa-solid fa-bars`})})]})]})}function P(e){if(!e)return 0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);return Number(t.streakCount||0)}catch{return 0}}function F(){let[e,t]=(0,A.useState)(`Hi! I'm Abby. I'll be your math buddy!`),[n,r]=(0,A.useState)(!0),[i,a]=(0,A.useState)(`happy`),o=(0,A.useRef)(null),s=(0,A.useRef)(null),c=(0,A.useRef)(null),l=(e,n=`default`,i=5e3)=>{t(e),a(n),r(!0),setTimeout(()=>{r(!1),a(e=>e===n?`default`:e)},i)};return(0,A.useEffect)(()=>{setTimeout(()=>r(!1),5e3);let e=e=>{if(o.current){let t=e.clientX/window.innerWidth*8-4,n=e.clientY/window.innerHeight*8-4;o.current.style.transform=`translate(${t}px, ${n}px)`}a(e=>e===`sleep`?(l(`You're back! Let's go!`,`happy`,3e3),`happy`):e),clearTimeout(s.current),s.current=setTimeout(()=>{a(`sleep`),r(!1)},6e4)},t=()=>{document.hidden?clearTimeout(s.current):l(`Welcome back! Keep your focus here! `,`happy`,4e3)};return c.current=setInterval(()=>{l(`Beep boop! You've been staring at the screen for 20 mins. Stretch and blink!`,`alert`,8e3)},12e5),window.addEventListener(`mousemove`,e),document.addEventListener(`visibilitychange`,t),()=>{window.removeEventListener(`mousemove`,e),document.removeEventListener(`visibilitychange`,t),clearTimeout(s.current),clearInterval(c.current)}},[]),(0,M.jsxs)(`div`,{className:`study-buddy-wrap ${i===`alert`?`alert-mode`:``}`,children:[(0,M.jsxs)(`div`,{className:`speech-bubble ${n?`visible`:``}`,children:[e,(0,M.jsx)(`div`,{className:`bubble-tail`})]}),i===`sleep`&&(0,M.jsxs)(`div`,{className:`zzz-container`,children:[(0,M.jsx)(`span`,{className:`z1`,children:`Z`}),(0,M.jsx)(`span`,{className:`z2`,children:`z`}),(0,M.jsx)(`span`,{className:`z3`,children:`z`})]}),(0,M.jsx)(`div`,{className:`bot-character ${i}`,onClick:()=>{let e=[`You've got this! `,`I'm so proud of your progress!`,`Math is just a puzzle, and you have the pieces!`,`I love calculating things with you!`,`High five! `];l(e[Math.floor(Math.random()*e.length)],`happy`,4e3)},onMouseEnter:()=>{let e=[`Haha! That tickles!  Let's do some math!`,`Hehehe! I'm so excited to learn with you!`,`Yay! Let's solve some equations!`,`Beep boop! You make me so happy!`];l(e[Math.floor(Math.random()*e.length)],`happy`,3e3)},children:(0,M.jsxs)(`svg`,{viewBox:`0 0 100 100`,width:`100%`,height:`100%`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,M.jsx)(`circle`,{cx:`50`,cy:`50`,r:`40`,fill:`var(--primary-blue)`,className:`orb-glow`}),(0,M.jsx)(`circle`,{cx:`50`,cy:`50`,r:`35`,fill:`var(--card-bg)`,stroke:`var(--primary-blue)`,strokeWidth:`3`}),(0,M.jsx)(`rect`,{x:`22`,y:`35`,width:`56`,height:`26`,rx:`13`,fill:`var(--dark-blue)`}),(0,M.jsx)(`g`,{ref:o,className:`bot-eyes-tracking`,children:(()=>{if(i===`sleep`)return(0,M.jsxs)(`g`,{stroke:`white`,strokeWidth:`3`,strokeLinecap:`round`,children:[(0,M.jsx)(`line`,{x1:`33`,y1:`48`,x2:`39`,y2:`48`}),(0,M.jsx)(`line`,{x1:`61`,y1:`48`,x2:`67`,y2:`48`})]});if(i===`happy`)return(0,M.jsxs)(`g`,{stroke:`white`,strokeWidth:`3`,strokeLinecap:`round`,fill:`none`,children:[(0,M.jsx)(`path`,{d:`M 32 50 Q 36 44 40 50`}),(0,M.jsx)(`path`,{d:`M 60 50 Q 64 44 68 50`})]});let e=i===`alert`?`#ef4444`:`white`;return(0,M.jsxs)(`g`,{children:[(0,M.jsx)(`circle`,{cx:`36`,cy:`48`,r:`4.5`,fill:e}),(0,M.jsx)(`circle`,{cx:`64`,cy:`48`,r:`4.5`,fill:e})]})})()}),(0,M.jsx)(`path`,{d:`M 50 15 L 50 4`,stroke:`var(--primary-blue)`,strokeWidth:`3`,strokeLinecap:`round`}),(0,M.jsx)(`circle`,{cx:`50`,cy:`4`,r:`4`,fill:i===`alert`?`#ef4444`:`var(--gold)`,className:`antenna-bulb`}),(0,M.jsx)(`circle`,{cx:`15`,cy:`70`,r:`5`,fill:`var(--primary-blue)`,className:`float-bead b1`}),(0,M.jsx)(`circle`,{cx:`85`,cy:`30`,r:`4`,fill:`var(--gold)`,className:`float-bead b2`}),(0,M.jsx)(`circle`,{cx:`82`,cy:`75`,r:`6`,fill:`var(--dark-blue)`,className:`float-bead b3`})]})})]})}var I=[{label:`Home`,path:`/`,icon:`fa-house`},{label:`Practice`,path:`/practice`,icon:`fa-dumbbell`},{label:`Daily Session`,path:`/practice-session`,icon:`fa-calendar-check`},{label:`Achievements`,path:`/achievement`,icon:`fa-medal`},{label:`Live Classes`,path:`/live-classes`,icon:`fa-video`},{label:`Recordings`,path:`/recorded-lectures`,icon:`fa-circle-play`},{label:`E-Books`,path:`/e-book`,icon:`fa-book-open`},{label:`Exams`,path:`/exam`,icon:`fa-file-lines`}],L=[{label:`Interactive Abacus`,path:`/interactive-abacus`,icon:`fa-calculator`},{label:`Digital Abacus`,path:`/abacus`,icon:`fa-desktop`},{label:`Rubik's Cube`,path:`/RubiksCube`,icon:`fa-cube`},{label:`Game Zone`,path:`/mental-flash-games`,icon:`fa-gamepad`}];function R({isOpen:e,toggleSidebar:n,minimized:r}){let{signOut:i}=h(),o=t(),s=a();function c(e){o(e),window.innerWidth<=1024&&n()}async function l(){await i(),o(`/login`),window.innerWidth<=1024&&n()}function u(e){return s.pathname===e}return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`div`,{className:`sidebar-overlay ${e?`active`:``}`,onClick:n}),(0,M.jsxs)(`aside`,{className:`sidebar student-sidebar ${e?`active`:``} ${r?`minimized`:``}`,children:[(0,M.jsxs)(`nav`,{className:`student-sidebar-scroll`,children:[(0,M.jsx)(z,{title:`Learn`,links:I,isActive:u,onNavigate:c}),(0,M.jsx)(z,{title:`Tools`,links:L,isActive:u,onNavigate:c})]}),(0,M.jsxs)(`button`,{className:`student-logout`,onClick:l,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,M.jsx)(`span`,{children:`Log Out`})]})]})]})}function z({title:e,links:t,isActive:n,onNavigate:r}){return(0,M.jsxs)(`section`,{className:`student-sidebar-group`,children:[(0,M.jsx)(`div`,{className:`student-sidebar-label`,children:e}),(0,M.jsx)(`div`,{className:`student-sidebar-links`,children:t.map(e=>(0,M.jsxs)(`button`,{className:`student-sidebar-link ${n(e.path)?`active`:``}`,onClick:()=>r(e.path),children:[(0,M.jsx)(`span`,{className:`student-link-icon`,children:(0,M.jsx)(`i`,{className:`fa-solid ${e.icon}`})}),(0,M.jsx)(`span`,{children:e.label})]},e.path))})]})}function B(){let e=t(),n=a();return(0,M.jsx)(`nav`,{className:`student-topnav`,"aria-label":`Primary`,children:(0,M.jsx)(`div`,{className:`student-topnav-scroll`,children:[...I,...L].map(t=>(0,M.jsxs)(`button`,{type:`button`,className:`student-topnav-link ${n.pathname===t.path?`active`:``}`,onClick:()=>e(t.path),children:[(0,M.jsx)(`i`,{className:`fa-solid ${t.icon}`}),(0,M.jsx)(`span`,{children:t.label})]},t.path))})})}var ee=e(d(),1);function te(){let{profile:e}=h(),[t,n]=(0,A.useState)(!1);(0,A.useEffect)(()=>{if(!e){console.log(`[BirthdayCelebration] No profile loaded`);return}let t=e.extra_details?.dob||e.extra_details?.date_of_birth;if(console.log(`[BirthdayCelebration] Found DOB:`,t,`extra_details:`,e.extra_details),!t)return;let r=t.split(`-`);if(r.length===3){let e=new Date,t=e.getMonth()+1,i=e.getDate(),a=parseInt(r[1],10),o=parseInt(r[2],10);console.log(`[BirthdayCelebration] Checking Date match: Today is ${t}/${i}, Born: ${a}/${o}`);let s=a===t&&o===i;console.log(`[BirthdayCelebration] Match result:`,s),s&&n(!0)}},[e]);let r=()=>{n(!1)};if(!t||!e)return null;let i=e.full_name||e.name||`Student`,a=Array.from({length:60}).map((e,t)=>{let n=Math.random()*100,r=Math.random()*4,i=Math.random()*3+2,a=Math.random()*.6+.4,o=[`#ff0a54`,`#ff477e`,`#ff7096`,`#ff85a1`,`#fbb1bd`,`#f9bec7`,`#3b82f6`,`#10b981`,`#fbbf24`,`#8b5cf6`],s=o[Math.floor(Math.random()*o.length)],c=[`circle`,`square`,`triangle`],l=c[Math.floor(Math.random()*c.length)];return{left:`${n}%`,delay:`${r}s`,duration:`${i}s`,scale:a,color:s,shape:l,id:t}});return(0,ee.createPortal)((0,M.jsxs)(`div`,{style:V.overlay,children:[(0,M.jsx)(`style`,{children:`
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
        `}),a.map(e=>{let t=`0`;e.shape===`circle`&&(t=`50%`);let n=`10px`,r=`10px`;return e.shape===`triangle`&&(n=`0`,r=`0`),(0,M.jsx)(`div`,{className:`confetti-particle`,style:{left:e.left,animationDelay:e.delay,animationDuration:e.duration,transform:`scale(${e.scale})`,backgroundColor:e.shape===`triangle`?`transparent`:e.color,borderRadius:t,width:e.shape===`triangle`?void 0:n,height:e.shape===`triangle`?void 0:r,borderLeft:e.shape===`triangle`?`6px solid transparent`:void 0,borderRight:e.shape===`triangle`?`6px solid transparent`:void 0,borderBottom:e.shape===`triangle`?`10px solid ${e.color}`:void 0}},e.id)}),(0,M.jsx)(`div`,{className:`birthday-modal`,style:V.modal,children:(0,M.jsxs)(`div`,{style:{position:`relative`,zIndex:2,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`24px`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`20px`,justifyContent:`center`},children:[(0,M.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`0s`},children:`🎈`}),(0,M.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`0.5s`,fontSize:`3.5rem`},children:`🎂`}),(0,M.jsx)(`span`,{className:`floating-balloon`,style:{animationDelay:`1s`},children:`🎉`})]}),(0,M.jsxs)(`h2`,{style:V.title,children:[`Happy Birthday, `,i,`!`]}),(0,M.jsx)(`p`,{style:V.message,children:`We wish you a fantastic year ahead filled with happiness, learning, and success. Have a wonderful day! 🌟✨`}),(0,M.jsx)(`button`,{onClick:r,style:V.button,children:`Thank You! ❤️`})]})})]}),document.body)}var V={overlay:{position:`fixed`,top:0,left:0,right:0,bottom:0,backgroundColor:`rgba(8, 10, 18, 0.7)`,zIndex:999999,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`20px`,boxSizing:`border-box`},modal:{width:`100%`,maxWidth:`520px`,borderRadius:`28px`,padding:`48px 36px`,textAlign:`center`,boxSizing:`border-box`,position:`relative`,overflow:`hidden`},title:{fontFamily:`"Sora", sans-serif`,fontSize:`2.25rem`,fontWeight:`900`,background:`linear-gradient(135deg, #a5b4fc, #6366f1, #eab308)`,WebkitBackgroundClip:`text`,WebkitTextFillColor:`transparent`,margin:0,lineHeight:1.25},message:{color:`#94a3b8`,fontSize:`1.05rem`,fontWeight:`500`,lineHeight:1.6,margin:`4px 0 8px 0`},button:{border:0,background:`linear-gradient(135deg, #6366f1, #4f46e5)`,color:`white`,borderRadius:`16px`,padding:`14px 38px`,fontSize:`1.02rem`,fontWeight:`800`,cursor:`pointer`,boxShadow:`0 10px 25px rgba(99, 102, 241, 0.4)`,transition:`all 0.2s ease`}},H=60,U={border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`14px 18px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.9rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`};function W({email:e,onCancel:t}){let{user:n,signOut:r}=h(),[i,a]=(0,A.useState)(!1),[o,s]=(0,A.useState)(!1),[c,u]=(0,A.useState)(0),[d,f]=(0,A.useState)(``),[m,g]=(0,A.useState)(``),_=(0,A.useRef)(null),v=e||n?.email||``,y=!!n;(0,A.useEffect)(()=>{if(!(c<=0))return _.current=window.setInterval(()=>{u(e=>e<=1?0:e-1)},1e3),()=>window.clearInterval(_.current)},[c]);async function b(){if(i||c>0||!v)return;a(!0),g(``),f(``);let{error:e}=await p.auth.resend({type:`signup`,email:v,options:{emailRedirectTo:window.location.origin}});if(a(!1),e){g(e.message||`Could not send the confirmation email. Please try again.`);return}f(`Confirmation email sent to ${v}. Open it and click the link inside.`),u(H)}async function x(){if(o)return;s(!0),g(``),f(``);let{data:e,error:t}=await p.auth.refreshSession();if(t){s(!1),g(`Could not check your status. Please try again in a moment.`);return}if(e?.user?.email_confirmed_at){window.location.reload();return}s(!1),g(`This email is still unverified. Please click the link in the confirmation email first.`)}return(0,M.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,M.jsx)(l,{}),(0,M.jsx)(`style`,{children:`
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
      `}),(0,M.jsxs)(`div`,{className:`verify-email-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,M.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,M.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent)`},children:(0,M.jsx)(`i`,{className:`fa-solid fa-envelope-circle-check`})})}),(0,M.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,M.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Email Not Verified`]})}),(0,M.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:`Confirm Your Email`}),(0,M.jsxs)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:[`We sent a confirmation link to`,` `,(0,M.jsx)(`strong`,{style:{color:`var(--dark-blue, #0f172a)`,wordBreak:`break-all`},children:v}),`. Open that email and click the link to unlock your panel. Check your spam folder if you can't find it.`]}),d?(0,M.jsxs)(`p`,{style:{color:`#15803d`,background:`#dcfce7`,border:`1px solid #bbf7d0`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-check`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,M.jsx)(`span`,{children:d})]}):null,m?(0,M.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err, #c62828) 20%, transparent)`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,M.jsx)(`span`,{children:m})]}):null,(0,M.jsx)(`button`,{className:`verify-btn-primary`,type:`button`,onClick:b,disabled:i||c>0,style:{marginTop:`26px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:i||c>0?`not-allowed`:`pointer`,opacity:i||c>0?.65:1,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:i?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,M.jsx)(`span`,{children:`Sending...`})]}):c>0?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`i`,{className:`fa-regular fa-clock`}),(0,M.jsxs)(`span`,{children:[`Resend in `,c,`s`]})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`i`,{className:`fa-solid fa-paper-plane`}),(0,M.jsx)(`span`,{children:`Resend confirmation email`})]})}),(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,marginTop:`12px`},children:[y?(0,M.jsx)(`button`,{className:`verify-btn-secondary`,type:`button`,onClick:x,disabled:o,style:{...U,flex:1,opacity:o?.7:1,cursor:o?`not-allowed`:`pointer`},children:o?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,M.jsx)(`span`,{children:`Checking...`})]}):(0,M.jsx)(`span`,{children:`I've verified`})}):null,(0,M.jsx)(`button`,{className:`verify-btn-secondary`,type:`button`,onClick:y?r:t,style:{...U,flex:y?void 0:1,color:`var(--text-light, #64748b)`},children:y?`Log out`:`Back to sign in`})]})]})]})}function ne(e){return e?e.code===`email_not_confirmed`?!0:/email not confirmed/i.test(e.message||``):!1}function re(){let e=t(),n=a(),{login:r,institute:i,user:o}=h(),[s,c]=(0,A.useState)(``),[u,d]=(0,A.useState)(``),[f,m]=(0,A.useState)(!1),[g,_]=(0,A.useState)(null),[v,y]=(0,A.useState)(!1),[b,x]=(0,A.useState)(!1),[S,C]=(0,A.useState)(!1),[w,T]=(0,A.useState)(!1),[E,D]=(0,A.useState)(null),[O,k]=(0,A.useState)(null);(0,A.useEffect)(()=>(document.body.classList.add(`login-body`),()=>{document.body.classList.remove(`login-body`)}),[]);let j=()=>{let e=n.state?.from;return e&&e!==`/login`&&!e.startsWith(`/login?`)?e:`/`};(0,A.useEffect)(()=>{o&&e(j(),{replace:!0})},[o,e,n.state]);async function N(t){t.preventDefault(),m(!0),_(null);try{let t=await r(s,u);if(t?.error){if(ne(t.error)){k(s),m(!1);return}_(t.error.message||`Failed to sign in. Please check your credentials.`),m(!1)}else e(j(),{replace:!0})}catch(e){console.error(`Login submit error:`,e),_(e?.message||`An unexpected error occurred. Please try again.`),m(!1)}}async function P(){if(_(null),D(null),!s){_(`Enter your student email above, then tap 'Forgot password?'.`);return}T(!0);let{error:e}=await p.auth.resetPasswordForEmail(s,{redirectTo:`${window.location.origin}/reset-password`});if(T(!1),e){_(e.message);return}D(`If an account exists for ${s}, a reset link is on its way.`)}let F=Array.isArray(i?.institute_branding)?i?.institute_branding[0]:i?.institute_branding,I=F?.logo_url;return(0,M.jsxs)(`div`,{className:`login-page-container layout-${F?.login_layout||`split_screen`}`,children:[O?(0,M.jsx)(W,{email:O,onCancel:()=>k(null)}):null,(0,M.jsx)(l,{}),(0,M.jsxs)(`div`,{className:`login-left-pane`,children:[(0,M.jsx)(`div`,{className:`login-blob-1`}),(0,M.jsx)(`div`,{className:`login-blob-2`}),(0,M.jsxs)(`div`,{className:`login-left-header`,children:[(0,M.jsx)(`div`,{className:`login-left-logo-wrapper`,children:(0,M.jsx)(`img`,{src:I||`/Abacus.png`,alt:`Institute Logo`,className:`login-left-logo`})}),(0,M.jsx)(`span`,{className:`login-left-brand-name`,children:i?i.name:`Erpli Wave`})]}),(0,M.jsxs)(`div`,{className:`login-left-content`,children:[(0,M.jsxs)(`h2`,{className:`login-left-title`,children:[`Unlock the Power of `,(0,M.jsx)(`br`,{}),(0,M.jsx)(`span`,{style:{color:`var(--gold)`},children:`Mental Math`})]}),(0,M.jsx)(`p`,{className:`login-left-subtitle`,children:`Experience the ultimate training portal. Boost your calculation speed, complete assignments, challenge friends, and track your analytical growth.`}),(0,M.jsxs)(`div`,{className:`showcase-glass-card`,children:[(0,M.jsx)(`span`,{className:`showcase-badge`,children:`Student Platform`}),(0,M.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,M.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-gamepad`,style:{color:`var(--gold)`}}),`Interactive Games`]}),(0,M.jsx)(`span`,{className:`showcase-stat-value`,children:`Abacus & Flash`})]}),(0,M.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,M.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-trophy`,style:{color:`var(--gold)`}}),`Weekly Leaderboards`]}),(0,M.jsx)(`span`,{className:`showcase-stat-value`,children:`Global Rankings`})]}),(0,M.jsxs)(`div`,{className:`showcase-stat-row`,children:[(0,M.jsxs)(`span`,{className:`showcase-stat-label`,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-chart-line`,style:{color:`var(--gold)`}}),`Progress Analytics`]}),(0,M.jsx)(`span`,{className:`showcase-stat-value`,children:`Detailed Insights`})]})]})]}),(0,M.jsxs)(`div`,{className:`login-left-footer`,children:[`© `,new Date().getFullYear(),` `,i?i.name:`Erpli Wave`,`. All rights reserved.`]})]}),(0,M.jsx)(`div`,{className:`login-right-pane`,children:(0,M.jsxs)(`div`,{className:`login-form-card`,children:[(0,M.jsxs)(`div`,{className:`login-logo-header`,children:[(0,M.jsx)(`div`,{className:`login-logo-container`,children:(0,M.jsx)(`img`,{src:I||`/Abacus.png`,alt:`Institute Logo`,className:`login-main-logo`})}),(0,M.jsx)(`h1`,{className:`login-title-text`,children:i?i.name:`Student Portal`}),(0,M.jsx)(`p`,{className:`login-subtitle-text`,children:`Sign in to access your mental math dashboard`})]}),g&&(0,M.jsxs)(`div`,{style:{background:`#fef2f2`,color:`#dc2626`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:`600`,marginBottom:`24px`,border:`1px solid #fecaca`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1rem`}}),(0,M.jsx)(`span`,{children:g})]}),E&&(0,M.jsxs)(`div`,{style:{background:`#f0fdf4`,color:`#15803d`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:600,marginBottom:`24px`,border:`1px solid #bbf7d0`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-envelope-circle-check`,style:{fontSize:`1rem`}}),(0,M.jsx)(`span`,{children:E})]}),(0,M.jsxs)(`form`,{onSubmit:N,children:[(0,M.jsxs)(`div`,{className:`login-input-group`,children:[(0,M.jsx)(`label`,{className:`login-label`,children:`Student Email`}),(0,M.jsxs)(`div`,{className:`login-input-wrapper ${b?`login-input-wrapper-focused`:``}`,children:[(0,M.jsx)(`i`,{className:`fa-regular fa-envelope login-input-icon`}),(0,M.jsx)(`input`,{type:`email`,value:s,onChange:e=>c(e.target.value),onFocus:()=>x(!0),onBlur:()=>x(!1),placeholder:`student@example.com`,required:!0,className:`login-input-field`})]})]}),(0,M.jsxs)(`div`,{className:`login-input-group`,style:{marginBottom:`16px`},children:[(0,M.jsx)(`label`,{className:`login-label`,children:`Password`}),(0,M.jsxs)(`div`,{className:`login-input-wrapper ${S?`login-input-wrapper-focused`:``}`,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,M.jsx)(`input`,{type:v?`text`:`password`,value:u,onChange:e=>d(e.target.value),onFocus:()=>C(!0),onBlur:()=>C(!1),placeholder:`••••••••`,required:!0,className:`login-input-field`}),(0,M.jsx)(`button`,{type:`button`,onClick:()=>y(!v),className:`login-password-toggle`,children:(0,M.jsx)(`i`,{className:v?`fa-solid fa-eye-slash`:`fa-solid fa-eye`})})]})]}),(0,M.jsx)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,marginBottom:`24px`},children:(0,M.jsx)(`button`,{type:`button`,onClick:P,disabled:w,style:{background:`none`,border:`none`,padding:0,cursor:w?`default`:`pointer`,color:`var(--primary-blue, #2563eb)`,fontSize:`0.82rem`,fontWeight:700},children:w?`Sending reset link...`:`Forgot password?`})}),(0,M.jsx)(`button`,{type:`submit`,disabled:f,className:`login-submit-button`,children:f?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,M.jsx)(`span`,{children:`Signing in...`})]}):(0,M.jsx)(`span`,{children:`Sign In`})})]})]})})]})}function G(){let e=t(),[n,r]=(0,A.useState)(`checking`),[i,a]=(0,A.useState)(``),[o,s]=(0,A.useState)(``),[c,u]=(0,A.useState)(!1),[d,f]=(0,A.useState)(!1),[m,h]=(0,A.useState)(null);(0,A.useEffect)(()=>(document.body.classList.add(`login-body`),()=>document.body.classList.remove(`login-body`)),[]),(0,A.useEffect)(()=>{let e=!1;async function t(){let t=new URLSearchParams(x.hash.replace(/^#/,``)),n=new URLSearchParams(x.search),i=t.get(`error_description`)||n.get(`error_description`);if(i){e||(h(i),r(`invalid`));return}let a=n.get(`code`);if(!(a||t.get(`type`)===`recovery`||t.get(`access_token`))){e||r(`invalid`);return}if(a){let{error:t}=await p.auth.exchangeCodeForSession(a);if(t&&!e){h(t.message),r(`invalid`);return}}let{data:{session:o}}=await p.auth.getSession();e||(o?(window.history.replaceState({},document.title,`/reset-password`),r(`ready`)):r(`invalid`))}return t(),()=>{e=!0}},[]);async function g(t){if(t.preventDefault(),h(null),i.length<6){h(`Password must be at least 6 characters.`);return}if(i!==o){h(`Passwords do not match.`);return}f(!0);let{error:n}=await p.auth.updateUser({password:i});if(f(!1),n){h(n.message);return}await p.auth.signOut(),r(`done`),setTimeout(()=>e(`/login`,{replace:!0}),2e3)}return(0,M.jsxs)(`div`,{className:`login-page-container layout-classic_centered`,children:[(0,M.jsx)(l,{}),(0,M.jsx)(`div`,{className:`login-right-pane`,children:(0,M.jsxs)(`div`,{className:`login-form-card`,children:[(0,M.jsxs)(`div`,{style:{marginBottom:`24px`,textAlign:`center`},children:[(0,M.jsx)(`h1`,{className:`login-title-text`,children:`Set a new password`}),(0,M.jsx)(`p`,{className:`login-subtitle-text`,children:`Choose a new password for your student account`})]}),m&&(0,M.jsxs)(`div`,{style:{background:`#fef2f2`,color:`#dc2626`,padding:`14px`,borderRadius:`14px`,fontSize:`0.85rem`,fontWeight:600,marginBottom:`24px`,border:`1px solid #fecaca`,display:`flex`,alignItems:`center`,gap:`10px`,textAlign:`left`},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),(0,M.jsx)(`span`,{children:m})]}),n===`checking`&&(0,M.jsxs)(`p`,{style:{textAlign:`center`,fontWeight:600},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`,style:{marginRight:8}}),`Verifying your reset link...`]}),n===`invalid`&&(0,M.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,M.jsx)(`p`,{style:{fontWeight:600,marginBottom:20},children:`This reset link is invalid or has expired. Please request a new one.`}),(0,M.jsx)(`button`,{className:`login-submit-button`,type:`button`,onClick:()=>e(`/login`),children:(0,M.jsx)(`span`,{children:`Back to Sign In`})})]}),n===`done`&&(0,M.jsx)(`p`,{style:{textAlign:`center`,fontWeight:600,color:`#16a34a`},children:`Password updated. Redirecting you to sign in...`}),n===`ready`&&(0,M.jsxs)(`form`,{onSubmit:g,children:[(0,M.jsxs)(`div`,{className:`login-input-group`,children:[(0,M.jsx)(`label`,{className:`login-label`,children:`New password`}),(0,M.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,M.jsx)(`input`,{type:c?`text`:`password`,value:i,onChange:e=>a(e.target.value),placeholder:`At least 6 characters`,autoComplete:`new-password`,required:!0,className:`login-input-field`}),(0,M.jsx)(`button`,{type:`button`,onClick:()=>u(!c),className:`login-password-toggle`,children:(0,M.jsx)(`i`,{className:c?`fa-solid fa-eye-slash`:`fa-solid fa-eye`})})]})]}),(0,M.jsxs)(`div`,{className:`login-input-group`,style:{marginBottom:`30px`},children:[(0,M.jsx)(`label`,{className:`login-label`,children:`Confirm new password`}),(0,M.jsxs)(`div`,{className:`login-input-wrapper`,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-lock login-input-icon`}),(0,M.jsx)(`input`,{type:`password`,value:o,onChange:e=>s(e.target.value),placeholder:`Repeat new password`,autoComplete:`new-password`,required:!0,className:`login-input-field`})]})]}),(0,M.jsx)(`button`,{type:`submit`,disabled:d,className:`login-submit-button`,children:d?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,M.jsx)(`span`,{children:`Updating...`})]}):(0,M.jsx)(`span`,{children:`Update Password`})})]})]})})]})}var K=[{code:`en`,name:`English`},{code:`hi`,name:`Hindi`},{code:`as`,name:`Assamese`},{code:`bn`,name:`Bengali`},{code:`brx`,name:`Bodo`},{code:`doi`,name:`Dogri`},{code:`gu`,name:`Gujarati`},{code:`kn`,name:`Kannada`},{code:`ks`,name:`Kashmiri`},{code:`kok`,name:`Konkani`},{code:`mai`,name:`Maithili`},{code:`ml`,name:`Malayalam`},{code:`mni`,name:`Manipuri`},{code:`mr`,name:`Marathi`},{code:`ne`,name:`Nepali`},{code:`or`,name:`Odia`},{code:`pa`,name:`Punjabi`},{code:`sa`,name:`Sanskrit`},{code:`sat`,name:`Santali`},{code:`sd`,name:`Sindhi`},{code:`ta`,name:`Tamil`},{code:`te`,name:`Telugu`},{code:`ur`,name:`Urdu`}];function q({notice:e,onConsented:t}){let{signOut:n}=h(),[r,i]=(0,A.useState)(`en`),[a,o]=(0,A.useState)(!1),[s,c]=(0,A.useState)(!1),[l,u]=(0,A.useState)(null),[d,f]=(0,A.useState)(e.english_title),[p,m]=(0,A.useState)(e.english_content),[g,_]=(0,A.useState)((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),[v,y]=(0,A.useState)((e.optional_purposes||[]).map(e=>({...e,label_display:e.label_en,checked:!1})));(0,A.useEffect)(()=>{if(r===`en`){f(e.english_title),m(e.english_content),_((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),y(t=>(e.optional_purposes||[]).map(e=>{let n=t.find(t=>t.key===e.key);return{...e,label_display:e.label_en,checked:!!n?.checked}}));return}async function t(){o(!0),u(null);let{data:t,error:n}=await b(e.id,r);n?(console.error(`Translation load failed, falling back to English`,n),x()):!t||t.status!==`approved`?x():(f(t.translated_title),m(t.translated_content),_((e.required_purposes||[]).map(e=>{let n=t.translated_required_purposes?.find(t=>t.key===e.key);return{...e,label_display:n?.label_translated||e.label_en}})),y(n=>(e.optional_purposes||[]).map(e=>{let r=t.translated_optional_purposes?.find(t=>t.key===e.key),i=n.find(t=>t.key===e.key);return{...e,label_display:r?.label_translated||e.label_en,checked:!!i?.checked}}))),o(!1)}t()},[r,e]);function x(){f(e.english_title),m(e.english_content),_((e.required_purposes||[]).map(e=>({...e,label_display:e.label_en}))),y(t=>(e.optional_purposes||[]).map(e=>{let n=t.find(t=>t.key===e.key);return{...e,label_display:e.label_en,checked:!!n?.checked}}))}function S(e){y(t=>t.map(t=>t.key===e?{...t,checked:!t.checked}:t))}async function C(n=!1){c(!0),u(null);let i=[],a=[];g.forEach(e=>i.push(e.key)),v.forEach(e=>{!n&&e.checked?i.push(e.key):a.push(e.key)});let{data:o,error:s}=await D(e.id,r,i,a);s?(u(s.message),c(!1)):t()}return(0,M.jsxs)(`div`,{className:`consent-fullscreen-overlay`,children:[(0,M.jsx)(`style`,{children:`
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
      `}),(0,M.jsxs)(`div`,{className:`consent-card`,children:[(0,M.jsxs)(`div`,{className:`consent-header`,children:[(0,M.jsx)(`h2`,{className:`consent-title`,children:d}),(0,M.jsxs)(`div`,{className:`consent-lang-container`,children:[(0,M.jsx)(`label`,{className:`consent-lang-label`,children:`Language:`}),(0,M.jsx)(`select`,{className:`consent-select-lang`,value:r,onChange:e=>i(e.target.value),disabled:a||s,children:K.map(e=>(0,M.jsx)(`option`,{value:e.code,children:e.name},e.code))})]})]}),(0,M.jsx)(`div`,{className:`consent-content-area`,children:a?(0,M.jsxs)(`div`,{className:`consent-spinner-container`,children:[(0,M.jsx)(`div`,{className:`consent-spinner`}),(0,M.jsx)(`p`,{style:{marginTop:14,color:`var(--text-light, #64748b)`,fontSize:13.5,fontWeight:500},children:`Retrieving translation...`})]}):(0,M.jsx)(`div`,{className:`consent-notice-body`,children:p})}),(0,M.jsxs)(`div`,{className:`consent-purposes-section`,children:[g.length>0&&(0,M.jsxs)(`div`,{className:`consent-purpose-group`,children:[(0,M.jsx)(`h4`,{className:`consent-group-heading`,children:`Required Processing (Core Services)`}),(0,M.jsx)(`div`,{className:`consent-purposes-list`,children:g.map(e=>(0,M.jsxs)(`label`,{className:`consent-purpose-label disabled`,children:[(0,M.jsx)(`input`,{type:`checkbox`,checked:!0,disabled:!0,className:`consent-checkbox`}),(0,M.jsx)(`span`,{children:e.label_display})]},e.key))})]}),v.length>0&&(0,M.jsxs)(`div`,{className:`consent-purpose-group`,children:[(0,M.jsx)(`h4`,{className:`consent-group-heading`,children:`Optional Processing (Preferences)`}),(0,M.jsx)(`div`,{className:`consent-purposes-list`,children:v.map(e=>(0,M.jsxs)(`label`,{className:`consent-purpose-label`,children:[(0,M.jsx)(`input`,{type:`checkbox`,checked:e.checked,onChange:()=>S(e.key),disabled:s,className:`consent-checkbox`}),(0,M.jsx)(`span`,{children:e.label_display})]},e.key))})]})]}),l&&(0,M.jsxs)(`p`,{className:`consent-error-msg`,children:[`Error saving consent: `,l]}),(0,M.jsxs)(`div`,{className:`consent-footer`,children:[(0,M.jsxs)(`button`,{className:`consent-btn consent-btn-danger`,onClick:n,disabled:s||a,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),` Sign Out`]}),(0,M.jsxs)(`div`,{className:`consent-footer-right`,children:[v.length>0&&(0,M.jsx)(`button`,{className:`consent-btn consent-btn-secondary`,onClick:()=>C(!0),disabled:s||a,children:`Decline optional use`}),(0,M.jsx)(`button`,{className:`consent-btn consent-btn-primary`,onClick:()=>C(!1),disabled:s||a,children:`Agree and continue`})]})]})]})]})}function J(){let{signOut:e}=h();return(0,M.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,M.jsx)(l,{}),(0,M.jsx)(`style`,{children:`
        .access-blocked-card { animation: accessSpring 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        @keyframes accessSpring {
          from { opacity: 0; transform: scale(0.88) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}),(0,M.jsxs)(`div`,{className:`access-blocked-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,M.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,M.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:`linear-gradient(135deg, #f59e0b, #b45309)`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px rgba(245, 158, 11, 0.5)`},children:(0,M.jsx)(`i`,{className:`fa-solid fa-triangle-exclamation`})})}),(0,M.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,M.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, #f59e0b 14%, transparent)`,color:`#b45309`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Access Paused`]})}),(0,M.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:`Panel Unavailable`}),(0,M.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:`There is an issue from your institute's side. Please contact your institute to restore access to your student panel.`}),(0,M.jsxs)(`button`,{type:`button`,onClick:e,style:{marginTop:`28px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,M.jsx)(`span`,{children:`Log out`})]})]})]})}function Y(){if(window.location.pathname!==`/exam`)return!1;let e=window.location.search;return e.includes(`slug=`)||e.includes(`examId=`)||e.includes(`accessToken=`)}function X({children:e}){let{user:t,loading:n,sessionBlocked:r,accessBlocked:i,replaceActiveSession:a,signOut:o}=h(),[s,u]=(0,A.useState)(!1),[d,f]=(0,A.useState)(``);if(n)return(0,M.jsx)(`div`,{style:{minHeight:`100vh`,display:`flex`,alignItems:`center`,justifyContent:`center`,background:`transparent`},children:(0,M.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`,style:{fontSize:`3rem`,color:`var(--primary-blue, #2563eb)`}})});if(!t){if(Y())return e;let t=window.location.pathname+window.location.search;return(0,M.jsx)(c,{to:`/login`,state:{from:t&&t!==`/login`&&!t.startsWith(`/login?`)?t:`/`},replace:!0})}if(i)return(0,M.jsx)(J,{});if(!t.email_confirmed_at)return(0,M.jsx)(W,{});if(r){let e=r.activeSession;async function t(){f(``),u(!0);let e=await a();u(!1),e?.error&&f(e.error.message||`Could not log out the other browser.`)}return(0,M.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:99999,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
          radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 35%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 25%, transparent) 50%, rgba(15, 23, 42, 0.94) 85%),
          linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 15%, transparent) 1px, transparent 1px),
          linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 15%, transparent) 1px, transparent 1px)
        `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backgroundPosition:`center center`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,M.jsx)(l,{}),(0,M.jsx)(`div`,{style:{position:`absolute`,width:`480px`,height:`480px`,borderRadius:`50%`,background:`radial-gradient(circle, color-mix(in srgb, var(--primary-blue, #3b82f6) 35%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 20%, transparent) 45%, transparent 70%)`,filter:`blur(60px)`,pointerEvents:`none`,zIndex:0,animation:`glowPulse 4s ease-in-out infinite alternate`}}),(0,M.jsx)(`style`,{children:`
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
        `}),(0,M.jsxs)(`div`,{className:`session-blocked-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.94))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent), 0 0 0 1px rgba(255, 255, 255, 0.8) inset, 0 2px 0 rgba(255, 255, 255, 0.9) inset`},children:[(0,M.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,M.jsx)(`div`,{style:{position:`relative`,width:`72px`,height:`72px`,borderRadius:`24px`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent), 0 0 0 6px color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`},children:(0,M.jsx)(`i`,{className:`fa-solid fa-shield-halved`})})}),(0,M.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,M.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-lock`,style:{fontSize:`0.68rem`}}),`Active Session Lock`]})}),(0,M.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.55rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 8px`,letterSpacing:`-0.02em`},children:`Account Already in Use`}),(0,M.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.94rem`,fontWeight:`600`,lineHeight:`1.55`},children:r.message}),e?(0,M.jsxs)(`div`,{style:{marginTop:`22px`,padding:`18px 20px`,border:`1px solid var(--border, rgba(59, 130, 246, 0.2))`,borderRadius:`20px`,textAlign:`left`,background:`linear-gradient(135deg, color-mix(in srgb, var(--primary-blue, #3b82f6) 8%, transparent) 0%, color-mix(in srgb, var(--gold, #94a3b8) 6%, transparent) 100%)`,display:`flex`,alignItems:`center`,gap:`16px`,boxShadow:`0 4px 14px color-mix(in srgb, var(--primary-blue, #3b82f6) 6%, transparent)`},children:[(0,M.jsx)(`div`,{style:{width:`48px`,height:`48px`,borderRadius:`16px`,background:`color-mix(in srgb, var(--primary-blue, #3b82f6) 16%, transparent)`,color:`var(--primary-blue, #3b82f6)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.25rem`,flexShrink:0,boxShadow:`0 2px 8px color-mix(in srgb, var(--primary-blue) 15%, transparent)`},children:(0,M.jsx)(`i`,{className:`fa-solid fa-desktop`})}),(0,M.jsxs)(`div`,{style:{flex:1,minWidth:0},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`8px`,marginBottom:`4px`},children:[(0,M.jsx)(`span`,{style:{fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,fontSize:`0.98rem`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:e.browser||`Other Browser`}),(0,M.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`5px`,fontSize:`0.72rem`,color:`#15803d`,fontWeight:`800`,background:`#dcfce7`,padding:`2px 8px`,borderRadius:`999px`},children:[(0,M.jsx)(`span`,{className:`active-pulse-dot`}),`Active Now`]})]}),(0,M.jsxs)(`div`,{style:{color:`var(--text-light, #64748b)`,fontSize:`0.83rem`,fontWeight:`600`,display:`flex`,alignItems:`center`,gap:`6px`},children:[(0,M.jsx)(`i`,{className:`fa-regular fa-clock`,style:{fontSize:`0.78rem`}}),`Last active `,e.last_seen_at?new Date(e.last_seen_at).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`}):`recently`]})]})]}):null,d?(0,M.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err) 20%, transparent)`,borderRadius:`14px`,padding:`12px 16px`,fontSize:`0.88rem`,fontWeight:`700`,margin:`18px 0 0`,textAlign:`left`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{fontSize:`1.05rem`,flexShrink:0}}),(0,M.jsx)(`span`,{children:d})]}):null,(0,M.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,marginTop:`26px`},children:[(0,M.jsx)(`button`,{className:`session-btn-primary`,type:`button`,onClick:t,disabled:s,style:{flex:1,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:s?`not-allowed`:`pointer`,opacity:s?.7:1,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:s?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,M.jsx)(`span`,{children:`Logging out...`})]}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),(0,M.jsx)(`span`,{children:`Log out other browser`})]})}),(0,M.jsx)(`button`,{className:`session-btn-secondary`,type:`button`,onClick:o,style:{border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`15px 22px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`},children:`Cancel`})]})]})]})}let{consentRequiredNotice:p,setConsentRequiredNotice:m}=h();return p?(0,M.jsx)(q,{notice:p,onConsented:()=>m(null)}):e}function ie({slug:e=``}){let[t,n]=(0,A.useState)(e),[r,i]=(0,A.useState)(``),a=_(),o=g(),s=!!e;function c(e){e.preventDefault(),i(``),O(t)||i(`Use 3-32 characters: lowercase letters, numbers and dashes only.`)}return(0,M.jsxs)(`div`,{style:{position:`fixed`,top:0,left:0,right:0,bottom:0,zIndex:1e5,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,backgroundColor:`#0f172a`,backgroundImage:`
        radial-gradient(ellipse at 50% 50%, color-mix(in srgb, var(--primary-blue, #3b82f6) 30%, transparent) 0%, color-mix(in srgb, var(--dark-blue, #1e40af) 22%, transparent) 50%, rgba(15, 23, 42, 0.96) 85%),
        linear-gradient(to right, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px),
        linear-gradient(to bottom, color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent) 1px, transparent 1px)
      `,backgroundSize:`100% 100%, 32px 32px, 32px 32px`,backdropFilter:`blur(20px)`,WebkitBackdropFilter:`blur(20px)`},children:[(0,M.jsx)(l,{}),(0,M.jsx)(`style`,{children:`
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
      `}),(0,M.jsxs)(`div`,{className:`institute-missing-card`,style:{position:`relative`,zIndex:1,maxWidth:`460px`,width:`100%`,background:`var(--card-bg, rgba(255, 255, 255, 0.95))`,border:`1px solid var(--border, rgba(255, 255, 255, 0.8))`,borderRadius:`32px`,padding:`40px 32px 32px`,textAlign:`center`,boxShadow:`0 30px 90px -20px color-mix(in srgb, var(--primary-blue, #3b82f6) 40%, transparent)`},children:[(0,M.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`16px`},children:(0,M.jsx)(`div`,{style:{width:`72px`,height:`72px`,borderRadius:`24px`,background:s?`linear-gradient(135deg, #f59e0b, #b45309)`:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,color:`#ffffff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1.85rem`,boxShadow:s?`0 14px 32px -4px rgba(245, 158, 11, 0.5)`:`0 14px 32px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 50%, transparent)`},children:(0,M.jsx)(`i`,{className:s?`fa-solid fa-link-slash`:`fa-solid fa-school`})})}),(0,M.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,marginBottom:`12px`},children:(0,M.jsxs)(`div`,{style:{display:`inline-flex`,alignItems:`center`,gap:`6px`,padding:`5px 14px`,borderRadius:`999px`,background:s?`color-mix(in srgb, #f59e0b 14%, transparent)`:`color-mix(in srgb, var(--primary-blue, #3b82f6) 12%, transparent)`,color:s?`#b45309`:`var(--primary-blue, #3b82f6)`,fontSize:`0.72rem`,fontWeight:`900`,letterSpacing:`0.1em`,textTransform:`uppercase`},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-info`,style:{fontSize:`0.68rem`}}),s?`Unknown Portal`:`Select Institute`]})}),(0,M.jsx)(`h2`,{style:{fontFamily:`'Sora', sans-serif`,fontSize:`1.5rem`,fontWeight:`900`,color:`var(--dark-blue, #0f172a)`,margin:`0 0 10px`,letterSpacing:`-0.02em`},children:s?`Portal Not Found`:`Which Institute?`}),(0,M.jsx)(`p`,{style:{margin:0,color:`var(--text-light, #64748b)`,fontSize:`0.96rem`,fontWeight:`600`,lineHeight:`1.6`},children:s?(0,M.jsxs)(M.Fragment,{children:[`There is no institute matching `,(0,M.jsx)(`strong`,{style:{color:`var(--dark-blue, #0f172a)`},children:e}),`.`,a?` Check the code below, or ask your institute for the correct link.`:` Please check the link your institute gave you.`]}):`Enter your institute code to open its student panel.`}),a?(0,M.jsxs)(`form`,{onSubmit:c,style:{marginTop:`26px`,textAlign:`left`},children:[(0,M.jsx)(`label`,{htmlFor:`institute-slug`,style:{display:`block`,fontSize:`0.76rem`,fontWeight:`900`,letterSpacing:`0.08em`,textTransform:`uppercase`,color:`var(--text-light, #64748b)`,marginBottom:`8px`},children:`Institute code`}),(0,M.jsx)(`input`,{id:`institute-slug`,className:`institute-missing-input`,type:`text`,value:t,onChange:e=>n(e.target.value.toLowerCase().trim()),placeholder:`speedomath`,autoComplete:`off`,autoCapitalize:`none`,spellCheck:`false`,style:{width:`100%`,boxSizing:`border-box`,border:`1px solid var(--border, #cbd5e1)`,borderRadius:`16px`,padding:`14px 16px`,fontSize:`1rem`,fontWeight:`700`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.9)`,transition:`border-color 0.2s, box-shadow 0.2s`}}),r?(0,M.jsxs)(`p`,{style:{color:`var(--err, #c62828)`,background:`var(--err-lt, #fdecea)`,border:`1px solid color-mix(in srgb, var(--err, #c62828) 20%, transparent)`,borderRadius:`14px`,padding:`11px 14px`,fontSize:`0.86rem`,fontWeight:`700`,margin:`12px 0 0`,display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`,style:{flexShrink:0}}),(0,M.jsx)(`span`,{children:r})]}):null,(0,M.jsxs)(`button`,{type:`submit`,style:{marginTop:`18px`,width:`100%`,border:`none`,borderRadius:`18px`,padding:`15px 20px`,fontWeight:`900`,fontFamily:`'Sora', sans-serif`,fontSize:`0.95rem`,color:`#ffffff`,background:`var(--gradient-premium-primary, linear-gradient(135deg, var(--primary-blue, #3b82f6), var(--dark-blue, #1e40af)))`,boxShadow:`0 10px 24px -4px color-mix(in srgb, var(--primary-blue, #3b82f6) 45%, transparent)`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-arrow-right`}),(0,M.jsx)(`span`,{children:`Continue`})]}),o?(0,M.jsx)(`button`,{type:`button`,onClick:C,style:{marginTop:`10px`,width:`100%`,border:`1px solid var(--border, #cbd5e1)`,borderRadius:`18px`,padding:`13px 20px`,fontWeight:`800`,fontFamily:`'Sora', sans-serif`,fontSize:`0.9rem`,color:`var(--dark-blue, #0f172a)`,background:`rgba(255, 255, 255, 0.85)`,cursor:`pointer`},children:`Clear and start over`}):null]}):null]})]})}var ae=`
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
`;function oe(){let e=t(),{profile:n,institute:r,membership:i,user:a}=h(),[o,s]=(0,A.useState)(`overview`),[c,u]=(0,A.useState)({liveClasses:[],eBooks:[],recordedCourses:[],exams:[],results:[],achievements:[],loading:!0,error:``}),d=n?.current_level===999?`All levels`:`Level ${n?.current_level??0}`,f=n?.full_name?.split(` `)?.[0]||a?.email?.split(`@`)?.[0]||`Student`,p=ce(i?.id),g=le(i?.id);(0,A.useEffect)(()=>{let e=!0;async function t(){if(!r?.id||!i?.id){u(e=>({...e,loading:!1}));return}let t=`home_dash_${r.id}_${i.id}`;try{let n=JSON.parse(sessionStorage.getItem(t)||`null`);if(n&&Date.now()-n._at<300*1e3){e&&u({...n,loading:!1,error:``});return}}catch{}u(e=>({...e,loading:!0,error:``}));let[n,a,o,s,c]=await Promise.all([m(r.id),y(r.id,`ebook`),w(r.id),k(r.id,i.id),v(r.id,i.id)]);if(!e)return;let l=n.error||a.error||o.error||s.error||c.error,d={liveClasses:n.data??[],eBooks:a.data??[],recordedCourses:o.data?.courses??[],exams:s.data?.exams??[],results:s.data?.results??[],achievements:c.data??[],loading:!1,error:l?.message||``};if(!l)try{sessionStorage.setItem(t,JSON.stringify({...d,_at:Date.now()}))}catch{}u(d)}return t(),()=>{e=!1}},[r?.id,i?.id]);let _=(0,A.useMemo)(()=>c.exams.filter(e=>e.kind!==`secure`),[c.exams]),b=(0,A.useMemo)(()=>c.results.filter(e=>{let t=c.exams.find(t=>t.id===e.exam_id);return t&&t.kind!==`secure`}),[c.exams,c.results]),x=c.liveClasses[0],S=_.filter(e=>!b.some(t=>t.exam_id===e.id)),C=b[0],E=n?.current_level===999?9:Math.max(0,Math.min(9,Number(n?.current_level??0))),D=localStorage.getItem(`practice_session_${a?.id||`guest`}_${se()}_level_${E}`)===`done`,O=(0,A.useMemo)(()=>ue(a?.id),[a?.id]),j=(0,A.useMemo)(()=>O.reduce((e,t)=>Math.max(e,t.percent||0),0),[O]),N=b.map(e=>{let t=Number(e.total_marks??e.totalMarks??0);return t?Math.round(Number(e.score??0)/t*100):null}).filter(e=>e!=null),P=N.length?Math.round(N.reduce((e,t)=>e+t,0)/N.length):null,F=new Set(c.achievements.map(e=>e.achievement_code)),I=T.length?Math.round(c.achievements.length/T.length*100):0,L=de(c.achievements,F),R=[x?{icon:`fa-video`,title:`Live class is ready`,text:`${x.title||`Your next class`} is coming up.`,bg:`#fee2e2`,color:`#dc2626`,action:()=>e(`/live-classes`)}:null,S[0]?{icon:`fa-file-lines`,title:`Exam waiting`,text:`${S[0].title||`New exam`} is ready to solve.`,bg:`#e0e7ff`,color:`#4f46e5`,action:()=>e(`/exam`)}:null,C?{icon:`fa-award`,title:`Result posted`,text:`Latest score: ${fe(C)}.`,bg:`#dcfce7`,color:`#16a34a`,action:()=>e(`/exam`)}:null,c.recordedCourses[0]?{icon:`fa-circle-play`,title:`Video lesson`,text:`${c.recordedCourses[0].title||c.recordedCourses[0].name||`A course`} is available.`,bg:`#fef3c7`,color:`#d97706`,action:()=>e(`/recorded-lectures`)}:null].filter(Boolean);return(0,M.jsxs)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 10px)`},children:[(0,M.jsx)(`style`,{children:ae}),(0,M.jsx)(l,{}),(0,M.jsxs)(`div`,{className:`dashboard-container`,children:[(0,M.jsxs)(`div`,{className:`dash-header`,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsxs)(`h1`,{className:`dash-title`,children:[`Welcome back, `,(0,M.jsx)(`span`,{children:f}),`!`]}),(0,M.jsx)(`p`,{className:`dash-subtitle`,children:`Pick today's quest, collect wins, and keep your abacus brain sharp.`})]}),(0,M.jsxs)(`div`,{className:`dash-date`,children:[(0,M.jsx)(`i`,{className:`fa-regular fa-calendar`,style:{marginRight:`6px`}}),new Date().toLocaleDateString(`en-US`,{weekday:`short`,month:`short`,day:`numeric`})]})]}),(0,M.jsxs)(`div`,{className:`home-tabs`,role:`tablist`,"aria-label":`Home dashboard`,children:[(0,M.jsxs)(`button`,{className:`home-tab ${o===`overview`?`active`:``}`,onClick:()=>s(`overview`),children:[(0,M.jsx)(`i`,{className:`fa-solid fa-house`}),`Overview`]}),(0,M.jsxs)(`button`,{className:`home-tab ${o===`streak`?`active`:``}`,onClick:()=>s(`streak`),children:[(0,M.jsx)(`i`,{className:`fa-solid fa-fire`}),`Streak`]})]}),o===`streak`?(0,M.jsxs)(`div`,{className:`streak-card`,children:[(0,M.jsx)(`div`,{className:`streak-flame`,children:(0,M.jsx)(`i`,{className:`fa-solid fa-fire`})}),(0,M.jsxs)(`div`,{className:`streak-copy`,children:[(0,M.jsxs)(`h2`,{children:[p,` day streak`]}),(0,M.jsx)(`p`,{children:`Come back every day to keep the flame glowing.`})]}),(0,M.jsx)(`div`,{className:`streak-days`,children:g.map(e=>(0,M.jsxs)(`div`,{className:`streak-day ${e.done?`done`:``} ${e.today?`today`:``}`,children:[(0,M.jsx)(`i`,{className:`fa-solid ${e.done?`fa-check`:`fa-fire`}`}),(0,M.jsx)(`span`,{children:e.label})]},e.key))})]}):null,(0,M.jsxs)(`div`,{className:`stats-grid`,style:{display:o===`overview`?void 0:`none`},children:[(0,M.jsxs)(`div`,{className:`stat-card`,children:[(0,M.jsx)(`div`,{className:`stat-icon`,style:{background:`#e0e7ff`,color:`#4f46e5`},children:(0,M.jsx)(`i`,{className:`fa-solid fa-layer-group`})}),(0,M.jsxs)(`div`,{className:`stat-info`,children:[(0,M.jsx)(`div`,{className:`stat-val`,children:d}),(0,M.jsx)(`div`,{className:`stat-label`,children:`Current Stage`})]})]}),(0,M.jsxs)(`div`,{className:`stat-card`,children:[(0,M.jsx)(`div`,{className:`stat-icon`,style:{background:`#dcfce7`,color:`#16a34a`},children:(0,M.jsx)(`i`,{className:`fa-solid fa-bullseye`})}),(0,M.jsxs)(`div`,{className:`stat-info`,children:[(0,M.jsx)(`div`,{className:`stat-val`,children:P==null?`--`:`${P}%`}),(0,M.jsx)(`div`,{className:`stat-label`,children:`Exam Average`})]})]}),(0,M.jsxs)(`div`,{className:`stat-card`,children:[(0,M.jsx)(`div`,{className:`stat-icon`,style:{background:D?`#d1fae5`:`#fef3c7`,color:D?`#10b981`:`#d97706`},children:(0,M.jsx)(`i`,{className:`fa-solid ${D?`fa-circle-check`:`fa-calendar-check`}`})}),(0,M.jsxs)(`div`,{className:`stat-info`,children:[(0,M.jsx)(`div`,{className:`stat-val`,style:{color:D?`#10b981`:`#d97706`},children:D?`Complete`:`Pending`}),(0,M.jsx)(`div`,{className:`stat-label`,children:`Daily Session`})]})]}),(0,M.jsxs)(`div`,{className:`stat-card`,children:[(0,M.jsx)(`div`,{className:`stat-icon`,style:{background:`#fce7f3`,color:`#db2777`},children:(0,M.jsx)(`i`,{className:`fa-solid fa-clock`})}),(0,M.jsxs)(`div`,{className:`stat-info`,children:[(0,M.jsx)(`div`,{className:`stat-val`,children:c.liveClasses.length}),(0,M.jsx)(`div`,{className:`stat-label`,children:`Live Classes`})]})]})]}),(0,M.jsxs)(`div`,{className:`dash-main`,style:{display:o===`overview`?void 0:`none`},children:[(0,M.jsxs)(`div`,{className:`dash-left-col`,children:[(0,M.jsxs)(`div`,{className:`quest-card ${D?``:`pending-quest-highlight`}`,style:D?{}:{border:`2px solid #f59e0b`,boxShadow:`0 8px 24px -4px rgba(245, 158, 11, 0.35)`,background:`linear-gradient(135deg, color-mix(in srgb, var(--gold) 15%, white), white)`,position:`relative`},children:[!D&&(0,M.jsxs)(`span`,{style:{position:`absolute`,top:`-10px`,right:`14px`,background:`#f59e0b`,color:`#ffffff`,fontSize:`0.68rem`,fontWeight:`900`,padding:`3px 10px`,borderRadius:`50px`,textTransform:`uppercase`,letterSpacing:`0.8px`,boxShadow:`0 2px 8px rgba(245, 158, 11, 0.4)`,zIndex:2},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-bell`,style:{marginRight:4}}),` PENDING TODAY`]}),(0,M.jsxs)(`div`,{className:`quest-copy`,children:[(0,M.jsx)(`h3`,{style:{color:D?void 0:`#d97706`},children:D?`Daily Session Complete`:`Daily Session`}),(0,M.jsx)(`p`,{children:D?`Nice work. Today's daily session is complete. A fresh round unlocks tomorrow.`:`Solve today's level-wise daily session questions.`})]}),(0,M.jsx)(`button`,{className:`quest-start`,onClick:()=>e(`/practice-session`),style:D?{}:{background:`linear-gradient(135deg, #f59e0b 0%, #d97706 100%)`,boxShadow:`0 4px 14px rgba(245, 158, 11, 0.4)`,fontWeight:`800`},children:D?`Review`:`Start Session`})]}),(0,M.jsxs)(`div`,{className:`panel`,children:[(0,M.jsxs)(`div`,{className:`panel-header`,children:[(0,M.jsx)(`h2`,{className:`panel-title`,children:`Weekly Activity`}),(0,M.jsx)(`button`,{className:`panel-action`,onClick:()=>e(`/practice-session`),children:`Daily Session`})]}),(0,M.jsx)(`div`,{className:`chart-area`,children:O.map(e=>(0,M.jsxs)(`div`,{className:`chart-bar-group`,children:[(0,M.jsx)(`div`,{className:`chart-bar-wrap`,children:(0,M.jsx)(`div`,{className:`chart-bar ${e.percent>=j&&j>0?`peak`:``}`,style:{height:`${e.percent}%`}})}),(0,M.jsx)(`span`,{className:`chart-label`,children:e.day})]},e.day))})]}),(0,M.jsxs)(`div`,{className:`panel trophy-panel`,children:[(0,M.jsxs)(`div`,{className:`panel-header`,children:[(0,M.jsx)(`h2`,{className:`panel-title`,children:`Trophy Power`}),(0,M.jsx)(`button`,{className:`panel-action`,onClick:()=>e(`/achievement`),children:`Badges`})]}),(0,M.jsxs)(`div`,{className:`achievement-meter`,children:[(0,M.jsx)(`div`,{className:`trophy-big`,children:(0,M.jsx)(`i`,{className:`fa-solid fa-trophy`})}),(0,M.jsxs)(`div`,{className:`meter-copy`,children:[(0,M.jsxs)(`strong`,{children:[c.achievements.length,`/`,T.length]}),(0,M.jsx)(`span`,{children:`badges collected`})]}),(0,M.jsxs)(`div`,{className:`meter-percent`,children:[I,`%`]})]}),(0,M.jsx)(`div`,{className:`achievement-track`,"aria-label":`Achievement progress`,children:(0,M.jsx)(`div`,{className:`achievement-fill`,style:{width:`${Math.max(4,I)}%`}})}),(0,M.jsx)(`div`,{className:`trophy-row`,children:L.map(t=>(0,M.jsxs)(`div`,{className:`mini-trophy ${t.earned?``:`locked`}`,onClick:()=>e(`/achievement`),children:[(0,M.jsx)(`div`,{className:`mini-trophy-icon`,style:{background:t.color},children:(0,M.jsx)(`i`,{className:`fa-solid ${t.icon}`})}),(0,M.jsx)(`span`,{children:t.name})]},t.code))})]}),(0,M.jsxs)(`div`,{className:`panel`,children:[(0,M.jsx)(`div`,{className:`panel-header`,style:{marginBottom:`0`},children:(0,M.jsx)(`h2`,{className:`panel-title`,children:`Quick Actions`})}),(0,M.jsxs)(`div`,{className:`quick-grid`,children:[(0,M.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/interactive-abacus`),children:[(0,M.jsx)(`i`,{className:`fa-solid fa-calculator`}),`Int. Abacus`]}),(0,M.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/practice`),children:[(0,M.jsx)(`i`,{className:`fa-solid fa-dumbbell`}),`Start Practice`]}),(0,M.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/live-classes`),children:[(0,M.jsx)(`i`,{className:`fa-solid fa-video`}),`Join Live Class`]}),(0,M.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/exam`),children:[(0,M.jsx)(`i`,{className:`fa-solid fa-file-lines`}),`Take Exam`]}),(0,M.jsxs)(`div`,{className:`quick-btn`,onClick:()=>e(`/achievement`),children:[(0,M.jsx)(`i`,{className:`fa-solid fa-medal`}),`Achievements`]})]})]})]}),(0,M.jsxs)(`div`,{className:`panel`,style:{display:`flex`,flexDirection:`column`},children:[(0,M.jsxs)(`div`,{className:`panel-header`,children:[(0,M.jsx)(`h2`,{className:`panel-title`,children:`Today's Updates`}),(0,M.jsx)(`button`,{className:`panel-action`,onClick:()=>e(`/recorded-lectures`),children:`Lessons`})]}),(0,M.jsxs)(`div`,{className:`notif-list`,children:[c.loading?(0,M.jsx)(`div`,{className:`home-loading`,children:`Loading your quests...`}):null,c.error?(0,M.jsxs)(`div`,{className:`home-loading`,children:[`Could not load some updates: `,c.error]}):null,!c.loading&&!R.length?(0,M.jsxs)(`div`,{className:`notif-item`,onClick:()=>e(`/practice-session`),children:[(0,M.jsx)(`div`,{className:`notif-icon`,style:{background:`#dcfce7`,color:`#16a34a`},children:(0,M.jsx)(`i`,{className:`fa-solid fa-wand-magic-sparkles`})}),(0,M.jsxs)(`div`,{className:`notif-content`,children:[(0,M.jsx)(`h4`,{children:`No new class work`}),(0,M.jsx)(`p`,{children:`Your daily practice quest is ready.`})]})]}):null,R.map(e=>(0,M.jsxs)(`div`,{className:`notif-item`,onClick:e.action,children:[(0,M.jsx)(`div`,{className:`notif-icon`,style:{background:e.bg,color:e.color},children:(0,M.jsx)(`i`,{className:`fa-solid ${e.icon}`})}),(0,M.jsxs)(`div`,{className:`notif-content`,children:[(0,M.jsx)(`h4`,{children:e.title}),(0,M.jsx)(`p`,{children:e.text})]})]},e.title))]}),(0,M.jsx)(`button`,{className:`btn btn-secondary`,style:{marginTop:`20px`,width:`100%`,padding:`12px`},onClick:()=>e(`/exam`),children:`View Exam History`})]})]})]})]})}function se(){return new Date().toISOString().slice(0,10)}function ce(e){if(!e)return 0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);return Number(t.streakCount||0)}catch{return 0}}function le(e){let t=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],n=new Date,r=``,i=0;try{let t=JSON.parse(localStorage.getItem(`login_streak_${e}`)||`{}`);r=t.lastLoginDate||``,i=Number(t.streakCount||0)}catch{}return Array.from({length:7},(e,a)=>{let o=new Date(n);o.setDate(n.getDate()-(6-a));let s=o.toLocaleDateString(`en-CA`),c=Math.round((Z(n)-Z(o))/864e5),l=r&&c<i;return{key:s,label:t[o.getDay()],today:s===n.toLocaleDateString(`en-CA`),done:l}})}function Z(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate())}function ue(e){let t=[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`],n=new Date;return Array.from({length:7},(r,i)=>{let a=new Date(n);a.setDate(n.getDate()-(6-i));let o=a.toISOString().slice(0,10);return{day:t[a.getDay()],percent:Object.keys(localStorage).filter(t=>t.startsWith(`practice_session_${e||`guest`}_${o}`)&&localStorage.getItem(t)===`done`).length?100:18}})}function de(e,t){let n=e.slice(0,2).map(e=>({...E(e.achievement_code),earned:!0})).filter(e=>e.code),r=T.filter(e=>!t.has(e.code)).slice(0,Math.max(0,4-n.length)).map(e=>({...e,earned:!1}));return[...n,...r].slice(0,4)}function fe(e){let t=Number(e?.score??0),n=Number(e?.total_marks??e?.totalMarks??0);return n?`${t}/${n}`:`${t}`}var pe=`
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
`;function me(){let e=t();return(0,M.jsxs)(`div`,{className:`page-wrap`,style:{justifyContent:`center`},children:[(0,M.jsx)(`style`,{children:pe}),(0,M.jsx)(l,{}),(0,M.jsxs)(`div`,{className:`practice-card not-found-container`,style:{maxWidth:`550px`,marginTop:0},children:[(0,M.jsx)(`div`,{className:`abacus-wrap`,children:(0,M.jsxs)(`svg`,{width:`320`,height:`160`,viewBox:`0 0 420 200`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,M.jsx)(`rect`,{x:`10`,y:`10`,width:`400`,height:`180`,rx:`16`,ry:`16`,fill:`#ffffff`,stroke:`var(--dark-blue)`,strokeWidth:`6`}),(0,M.jsx)(`rect`,{x:`10`,y:`85`,width:`400`,height:`6`,fill:`var(--dark-blue)`}),(0,M.jsx)(`text`,{x:`95`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`4`}),(0,M.jsx)(`text`,{x:`210`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`0`}),(0,M.jsx)(`text`,{x:`325`,y:`180`,textAnchor:`middle`,fill:`var(--primary-blue)`,fontSize:`18`,fontWeight:`800`,fontFamily:`Sora`,children:`4`}),(0,M.jsx)(`line`,{x1:`95`,y1:`20`,x2:`95`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`72`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`101`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`123`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`145`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`95`,cy:`158`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,M.jsx)(`line`,{x1:`210`,y1:`20`,x2:`210`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`35`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`101`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`118`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`135`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`210`,cy:`152`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,M.jsx)(`line`,{x1:`325`,y1:`20`,x2:`325`,y2:`165`,stroke:`#cbd5e1`,strokeWidth:`4`,strokeLinecap:`round`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`72`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`101`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`123`,rx:`22`,ry:`11`,fill:`var(--primary-blue)`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`145`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`}),(0,M.jsx)(`ellipse`,{className:`bead b-anim`,cx:`325`,cy:`158`,rx:`22`,ry:`11`,fill:`rgba(0, 86, 179, 0.2)`})]})}),(0,M.jsx)(`div`,{className:`error-code`,children:`404`}),(0,M.jsx)(`p`,{className:`error-msg`,children:`Oops! This bead slipped off the rod.`}),(0,M.jsx)(`p`,{className:`error-sub`,children:`Page not found`}),(0,M.jsxs)(`button`,{className:`btn btn-primary`,onClick:()=>e(`/`),children:[(0,M.jsx)(`i`,{className:`fa-solid fa-house`,style:{marginRight:`8px`}}),` Back to Dashboard`]})]})]})}var he=(0,A.lazy)(()=>u(()=>import(`./Basic-C3EPrS6W.js`),__vite__mapDeps([0,1,2]))),ge=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.g),__vite__mapDeps([3,2,1]))),_e=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e._),__vite__mapDeps([3,2,1]))),ve=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.a),__vite__mapDeps([3,2,1]))),ye=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.o),__vite__mapDeps([3,2,1]))),be=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.u),__vite__mapDeps([3,2,1]))),xe=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.p),__vite__mapDeps([3,2,1]))),Se=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.d),__vite__mapDeps([3,2,1]))),Ce=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.f),__vite__mapDeps([3,2,1]))),we=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.r),__vite__mapDeps([3,2,1]))),Te=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.m),__vite__mapDeps([3,2,1]))),Ee=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.n),__vite__mapDeps([3,2,1]))),De=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.h),__vite__mapDeps([3,2,1]))),Oe=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.s),__vite__mapDeps([3,2,1]))),ke=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.t),__vite__mapDeps([3,2,1]))),Ae=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.i),__vite__mapDeps([3,2,1]))),je=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.c),__vite__mapDeps([3,2,1]))),Me=(0,A.lazy)(()=>u(()=>import(`./levels-TdPqfTja.js`).then(e=>e.l),__vite__mapDeps([3,2,1]))),Ne=(0,A.lazy)(()=>u(()=>import(`./Abacus-Bc3V3rBV.js`),__vite__mapDeps([4,2,1,5,6]))),Pe=(0,A.lazy)(()=>u(()=>import(`./interactive-Cdjdmhdv.js`).then(e=>e.a),__vite__mapDeps([1,2]))),Fe=(0,A.lazy)(()=>u(()=>import(`./interactive-Cdjdmhdv.js`).then(e=>e.c),__vite__mapDeps([1,2]))),Ie=(0,A.lazy)(()=>u(()=>import(`./interactive-Cdjdmhdv.js`).then(e=>e.l),__vite__mapDeps([1,2]))),Le=(0,A.lazy)(()=>u(()=>import(`./interactive-Cdjdmhdv.js`).then(e=>e.r),__vite__mapDeps([1,2]))),Re=(0,A.lazy)(()=>u(()=>import(`./interactive-Cdjdmhdv.js`).then(e=>e.o),__vite__mapDeps([1,2]))),ze=(0,A.lazy)(()=>u(()=>import(`./interactive-Cdjdmhdv.js`).then(e=>e.s),__vite__mapDeps([1,2]))),Be=(0,A.lazy)(()=>u(()=>import(`./interactive-Cdjdmhdv.js`).then(e=>e.t),__vite__mapDeps([1,2]))),Ve=(0,A.lazy)(()=>u(()=>import(`./interactive-Cdjdmhdv.js`).then(e=>e.i),__vite__mapDeps([1,2]))),He=(0,A.lazy)(()=>u(()=>import(`./interactive-Cdjdmhdv.js`).then(e=>e.n),__vite__mapDeps([1,2]))),Ue=(0,A.lazy)(()=>u(()=>import(`./RubiksCube-DT73elh8.js`),__vite__mapDeps([7,2,1,6,8,5]))),We=(0,A.lazy)(()=>u(()=>import(`./VedicMath-CByEb2aQ.js`),__vite__mapDeps([9,1,2,6]))),Ge=(0,A.lazy)(()=>u(()=>import(`./VedicMaster-BiZWqyFD.js`),__vite__mapDeps([10,2,1]))),Ke=(0,A.lazy)(()=>u(()=>import(`./VedicJuniorPath-C8UiiBSd.js`),__vite__mapDeps([11,1,2,12,6,13,14]))),qe=(0,A.lazy)(()=>u(()=>import(`./JuniorLevel-Q0Kg8Zu1.js`),__vite__mapDeps([15,2,1,14,16,6,13]))),Je=(0,A.lazy)(()=>u(()=>import(`./VedicExplorerPath-Dw52ziKB.js`),__vite__mapDeps([17,1,2,12,6,13,18]))),Ye=(0,A.lazy)(()=>u(()=>import(`./ExplorerLevel-Md0Pgqqz.js`),__vite__mapDeps([19,2,1,18,16,6,13]))),Xe=(0,A.lazy)(()=>u(()=>import(`./Practice-C9XMf1jQ.js`),__vite__mapDeps([20,2,1,6]))),Ze=(0,A.lazy)(()=>u(()=>import(`./PracticeSession-ByfentUL.js`),__vite__mapDeps([21,2,1,6]))),Qe=(0,A.lazy)(()=>u(()=>import(`./Exam-DJLkZhMC.js`),__vite__mapDeps([22,2,1,6]))),$e=(0,A.lazy)(()=>u(()=>import(`./LiveClasses-2yX_AkE1.js`),__vite__mapDeps([23,2,1,6]))),et=(0,A.lazy)(()=>u(()=>import(`./RecordedLecture-DXS5J5j0.js`),__vite__mapDeps([24,2,1,6]))),tt=(0,A.lazy)(()=>u(()=>import(`./EBook-Bd1pjb2G.js`),__vite__mapDeps([25,2,1,6,26,27]))),nt=(0,A.lazy)(()=>u(()=>import(`./Profile-jfB0FPyM.js`),__vite__mapDeps([28,2,1,6]))),rt=(0,A.lazy)(()=>u(()=>import(`./Achievement-Bo2XCzj5.js`),__vite__mapDeps([29,2,1,6]))),it=(0,A.lazy)(()=>u(()=>import(`./GameZone-DgRLDH-8.js`),__vite__mapDeps([30,2,1,6]))),at=(0,A.lazy)(()=>u(()=>import(`./mcq-CTdn8LzU.js`).then(e=>e.f),__vite__mapDeps([6,2,1]))),ot=(0,A.lazy)(()=>u(()=>import(`./mcq-CTdn8LzU.js`).then(e=>e.p),__vite__mapDeps([6,2,1]))),st=(0,A.lazy)(()=>u(()=>import(`./mcq-CTdn8LzU.js`).then(e=>e.c),__vite__mapDeps([6,2,1]))),ct=(0,A.lazy)(()=>u(()=>import(`./mcq-CTdn8LzU.js`).then(e=>e.l),__vite__mapDeps([6,2,1]))),lt=(0,A.lazy)(()=>u(()=>import(`./mcq-CTdn8LzU.js`).then(e=>e.i),__vite__mapDeps([6,2,1]))),ut=(0,A.lazy)(()=>u(()=>import(`./mcq-CTdn8LzU.js`).then(e=>e.s),__vite__mapDeps([6,2,1]))),dt=(0,A.lazy)(()=>u(()=>import(`./mcq-CTdn8LzU.js`).then(e=>e.t),__vite__mapDeps([6,2,1]))),ft=(0,A.lazy)(()=>u(()=>import(`./mcq-CTdn8LzU.js`).then(e=>e.n),__vite__mapDeps([6,2,1]))),pt=(0,A.lazy)(()=>u(()=>import(`./mcq-CTdn8LzU.js`).then(e=>e.d),__vite__mapDeps([6,2,1]))),Q=(0,A.lazy)(()=>u(()=>import(`./mcq-CTdn8LzU.js`).then(e=>e.u),__vite__mapDeps([6,2,1]))),mt=(0,A.lazy)(()=>u(()=>import(`./mcq-CTdn8LzU.js`).then(e=>e.a),__vite__mapDeps([6,2,1]))),ht=(0,A.lazy)(()=>u(()=>import(`./mcq-CTdn8LzU.js`).then(e=>e.o),__vite__mapDeps([6,2,1]))),gt=(0,A.lazy)(()=>u(()=>import(`./mcq-CTdn8LzU.js`).then(e=>e.r),__vite__mapDeps([6,2,1]))),_t=new Set(`/addition./addsub./negative./multiply./division./decimal-addsub./decimal-multiply./decimal-division./sq-root./cube-root./square./cube./long-multiply./table./percentage./lcm./hcf./mcq-addition./mcq-addsub./mcq-decimal-add./mcq-decimal-addsub./mcq-multiply./mcq-division./mcq-square./mcq-sqroot./mcq-cube./mcq-cuberoot./mcq-lcm./mcq-hcf./mcq-percentage`.split(`.`)),vt=new Set([`/interactive-abacus-addition`,`/interactive-abacus-addsub`,`/interactive-abacus-multiply`,`/interactive-abacus-division`,`/interactive-abacus-decimals`,`/interactive-abacus-sqroots`,`/interactive-abacus-lcmhcf`,`/interactive-abacus-percentage`]),yt=[`/vedic-math/junior/level/`,`/vedic-math/explorer/level/`];function bt(){let{instituteReady:e,instituteMissing:t,instituteSlug:n}=h();return e&&t&&!Y()?(0,M.jsx)(ie,{slug:n}):(0,M.jsx)(i,{children:(0,M.jsx)(A.Suspense,{fallback:null,children:(0,M.jsxs)(o,{children:[(0,M.jsx)(s,{path:`/login`,element:(0,M.jsx)(re,{})}),(0,M.jsx)(s,{path:`/reset-password`,element:(0,M.jsx)(G,{})}),(0,M.jsx)(s,{path:`/`,element:(0,M.jsx)($,{children:(0,M.jsx)(oe,{})})}),(0,M.jsx)(s,{path:`/Basic`,element:(0,M.jsx)($,{children:(0,M.jsx)(he,{})})}),(0,M.jsx)(s,{path:`/addition`,element:(0,M.jsx)($,{children:(0,M.jsx)(ge,{})})}),(0,M.jsx)(s,{path:`/addsub`,element:(0,M.jsx)($,{children:(0,M.jsx)(_e,{})})}),(0,M.jsx)(s,{path:`/negative`,element:(0,M.jsx)($,{children:(0,M.jsx)(ve,{})})}),(0,M.jsx)(s,{path:`/multiply`,element:(0,M.jsx)($,{children:(0,M.jsx)(ye,{})})}),(0,M.jsx)(s,{path:`/division`,element:(0,M.jsx)($,{children:(0,M.jsx)(be,{})})}),(0,M.jsx)(s,{path:`/decimal-addsub`,element:(0,M.jsx)($,{children:(0,M.jsx)(xe,{})})}),(0,M.jsx)(s,{path:`/decimal-multiply`,element:(0,M.jsx)($,{children:(0,M.jsx)(Se,{})})}),(0,M.jsx)(s,{path:`/decimal-division`,element:(0,M.jsx)($,{children:(0,M.jsx)(Ce,{})})}),(0,M.jsx)(s,{path:`/sq-root`,element:(0,M.jsx)($,{children:(0,M.jsx)(we,{})})}),(0,M.jsx)(s,{path:`/cube-root`,element:(0,M.jsx)($,{children:(0,M.jsx)(Te,{})})}),(0,M.jsx)(s,{path:`/square`,element:(0,M.jsx)($,{children:(0,M.jsx)(Ee,{})})}),(0,M.jsx)(s,{path:`/cube`,element:(0,M.jsx)($,{children:(0,M.jsx)(De,{})})}),(0,M.jsx)(s,{path:`/long-multiply`,element:(0,M.jsx)($,{children:(0,M.jsx)(Oe,{})})}),(0,M.jsx)(s,{path:`/table`,element:(0,M.jsx)($,{children:(0,M.jsx)(ke,{})})}),(0,M.jsx)(s,{path:`/percentage`,element:(0,M.jsx)($,{children:(0,M.jsx)(Ae,{})})}),(0,M.jsx)(s,{path:`/lcm`,element:(0,M.jsx)($,{children:(0,M.jsx)(je,{})})}),(0,M.jsx)(s,{path:`/hcf`,element:(0,M.jsx)($,{children:(0,M.jsx)(Me,{})})}),(0,M.jsx)(s,{path:`/abacus`,element:(0,M.jsx)($,{children:(0,M.jsx)(Ne,{})})}),(0,M.jsx)(s,{path:`/interactive-abacus`,element:(0,M.jsx)($,{children:(0,M.jsx)(Pe,{})})}),(0,M.jsx)(s,{path:`/interactive-abacus-addition`,element:(0,M.jsx)($,{children:(0,M.jsx)(Fe,{})})}),(0,M.jsx)(s,{path:`/interactive-abacus-addsub`,element:(0,M.jsx)($,{children:(0,M.jsx)(Ie,{})})}),(0,M.jsx)(s,{path:`/interactive-abacus-multiply`,element:(0,M.jsx)($,{children:(0,M.jsx)(Le,{})})}),(0,M.jsx)(s,{path:`/interactive-abacus-division`,element:(0,M.jsx)($,{children:(0,M.jsx)(Re,{})})}),(0,M.jsx)(s,{path:`/interactive-abacus-decimals`,element:(0,M.jsx)($,{children:(0,M.jsx)(ze,{})})}),(0,M.jsx)(s,{path:`/interactive-abacus-sqroots`,element:(0,M.jsx)($,{children:(0,M.jsx)(Be,{})})}),(0,M.jsx)(s,{path:`/interactive-abacus-lcmhcf`,element:(0,M.jsx)($,{children:(0,M.jsx)(Ve,{})})}),(0,M.jsx)(s,{path:`/interactive-abacus-percentage`,element:(0,M.jsx)($,{children:(0,M.jsx)(He,{})})}),(0,M.jsx)(s,{path:`/iabacus`,element:(0,M.jsx)(c,{to:`/interactive-abacus`,replace:!0})}),(0,M.jsx)(s,{path:`/iabacus-addition`,element:(0,M.jsx)(c,{to:`/interactive-abacus-addition`,replace:!0})}),(0,M.jsx)(s,{path:`/iabacus-addsub`,element:(0,M.jsx)(c,{to:`/interactive-abacus-addsub`,replace:!0})}),(0,M.jsx)(s,{path:`/iabacus-multiply`,element:(0,M.jsx)(c,{to:`/interactive-abacus-multiply`,replace:!0})}),(0,M.jsx)(s,{path:`/iabacus-division`,element:(0,M.jsx)(c,{to:`/interactive-abacus-division`,replace:!0})}),(0,M.jsx)(s,{path:`/iabacus-decimals`,element:(0,M.jsx)(c,{to:`/interactive-abacus-decimals`,replace:!0})}),(0,M.jsx)(s,{path:`/iabacus-sqroots`,element:(0,M.jsx)(c,{to:`/interactive-abacus-sqroots`,replace:!0})}),(0,M.jsx)(s,{path:`/iabacus-lcmhcf`,element:(0,M.jsx)(c,{to:`/interactive-abacus-lcmhcf`,replace:!0})}),(0,M.jsx)(s,{path:`/iabacus-percentage`,element:(0,M.jsx)(c,{to:`/interactive-abacus-percentage`,replace:!0})}),(0,M.jsx)(s,{path:`/RubiksCube`,element:(0,M.jsx)($,{children:(0,M.jsx)(Ue,{})})}),(0,M.jsx)(s,{path:`/vedic-math`,element:(0,M.jsx)($,{children:(0,M.jsx)(We,{})})}),(0,M.jsx)(s,{path:`/vedic-math/master`,element:(0,M.jsx)($,{children:(0,M.jsx)(Ge,{})})}),(0,M.jsx)(s,{path:`/vedic-math/junior`,element:(0,M.jsx)($,{children:(0,M.jsx)(Ke,{})})}),(0,M.jsx)(s,{path:`/vedic-math/junior/level/:levelId`,element:(0,M.jsx)($,{children:(0,M.jsx)(qe,{})})}),(0,M.jsx)(s,{path:`/vedic-math/explorer`,element:(0,M.jsx)($,{children:(0,M.jsx)(Je,{})})}),(0,M.jsx)(s,{path:`/vedic-math/explorer/level/:levelId`,element:(0,M.jsx)($,{children:(0,M.jsx)(Ye,{})})}),(0,M.jsx)(s,{path:`/practice`,element:(0,M.jsx)($,{children:(0,M.jsx)(Xe,{})})}),(0,M.jsx)(s,{path:`/practice-session`,element:(0,M.jsx)($,{children:(0,M.jsx)(Ze,{})})}),(0,M.jsx)(s,{path:`/exam`,element:(0,M.jsx)($,{children:(0,M.jsx)(Qe,{})})}),(0,M.jsx)(s,{path:`/live-classes`,element:(0,M.jsx)($,{children:(0,M.jsx)($e,{})})}),(0,M.jsx)(s,{path:`/recorded-lectures`,element:(0,M.jsx)($,{children:(0,M.jsx)(et,{})})}),(0,M.jsx)(s,{path:`/e-book`,element:(0,M.jsx)($,{children:(0,M.jsx)(tt,{})})}),(0,M.jsx)(s,{path:`/profile`,element:(0,M.jsx)($,{children:(0,M.jsx)(nt,{})})}),(0,M.jsx)(s,{path:`/achievement`,element:(0,M.jsx)($,{children:(0,M.jsx)(rt,{})})}),(0,M.jsx)(s,{path:`/mcq-addition`,element:(0,M.jsx)($,{children:(0,M.jsx)(at,{})})}),(0,M.jsx)(s,{path:`/mcq-addsub`,element:(0,M.jsx)($,{children:(0,M.jsx)(ot,{})})}),(0,M.jsx)(s,{path:`/mcq-decimal-add`,element:(0,M.jsx)($,{children:(0,M.jsx)(st,{})})}),(0,M.jsx)(s,{path:`/mcq-decimal-addsub`,element:(0,M.jsx)($,{children:(0,M.jsx)(ct,{})})}),(0,M.jsx)(s,{path:`/mcq-multiply`,element:(0,M.jsx)($,{children:(0,M.jsx)(lt,{})})}),(0,M.jsx)(s,{path:`/mcq-division`,element:(0,M.jsx)($,{children:(0,M.jsx)(ut,{})})}),(0,M.jsx)(s,{path:`/mcq-square`,element:(0,M.jsx)($,{children:(0,M.jsx)(dt,{})})}),(0,M.jsx)(s,{path:`/mcq-sqroot`,element:(0,M.jsx)($,{children:(0,M.jsx)(ft,{})})}),(0,M.jsx)(s,{path:`/mcq-cube`,element:(0,M.jsx)($,{children:(0,M.jsx)(pt,{})})}),(0,M.jsx)(s,{path:`/mcq-cuberoot`,element:(0,M.jsx)($,{children:(0,M.jsx)(Q,{})})}),(0,M.jsx)(s,{path:`/mcq-lcm`,element:(0,M.jsx)($,{children:(0,M.jsx)(mt,{})})}),(0,M.jsx)(s,{path:`/mcq-hcf`,element:(0,M.jsx)($,{children:(0,M.jsx)(ht,{})})}),(0,M.jsx)(s,{path:`/mcq-percentage`,element:(0,M.jsx)($,{children:(0,M.jsx)(gt,{})})}),(0,M.jsx)(s,{path:`/mental-flash-games`,element:(0,M.jsx)($,{children:(0,M.jsx)(it,{})})}),(0,M.jsx)(s,{path:`*`,element:(0,M.jsx)(me,{})})]})})})}function $({children:e}){let[n,r]=(0,A.useState)(!1),{pathname:i}=a(),o=t(),{user:s,studentLayout:c}=h();if(!s)return(0,M.jsx)(X,{children:(0,M.jsx)(`div`,{className:`app-layout app-layout-focus`,style:{minHeight:`100vh`,width:`100%`},children:(0,M.jsx)(`main`,{className:`main-content`,style:{margin:0,padding:`20px 16px`,width:`100%`},children:e})})});let l=_t.has(i),u=vt.has(i),d=yt.some(e=>i.startsWith(e)),f=l||u||d,p=u?{path:`/interactive-abacus`,label:`Interactive Abacus`}:{path:`/practice`,label:`Practice`},m=c||`sidebar_classic`,g=m===`topbar_focus`||m===`bento_gamified`,_=()=>{r(e=>!e)};return(0,M.jsxs)(X,{children:[(0,M.jsx)(N,{toggleSidebar:_,hideSidebarToggle:f}),g&&!f?(0,M.jsx)(B,{}):null,(0,M.jsxs)(`div`,{className:`app-layout app-layout-${m} ${f?`app-layout-focus`:``}`,children:[(0,M.jsx)(R,{isOpen:n,toggleSidebar:_,minimized:f}),(0,M.jsxs)(`main`,{className:`main-content`,children:[f&&!d?(0,M.jsx)(`div`,{className:`practice-focus-topbar`,children:(0,M.jsxs)(`button`,{className:`practice-back-button`,type:`button`,onClick:()=>o(p.path),children:[(0,M.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),(0,M.jsx)(`span`,{children:p.label})]})}):null,e]})]}),(0,M.jsx)(F,{}),(0,M.jsx)(te,{})]})}(0,j.createRoot)(document.getElementById(`root`)).render((0,M.jsx)(A.StrictMode,{children:(0,M.jsx)(S,{children:(0,M.jsx)(bt,{})})}));