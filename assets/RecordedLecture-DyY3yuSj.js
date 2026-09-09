import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Dt as t,K as n,L as r,M as i,R as a,ct as o,rt as s,u as c,v as l}from"./interactive-2Wp_hJ_T.js";import{n as u}from"./react-dom-BerkrKBt.js";import{n as d,t as f}from"./contentLevels-CDV_YUuY.js";var p=e(t(),1),m=e(u(),1),h=a(),g=`https://www.youtube.com/iframe_api`,_=null;function v(){return window.YT?.Player?Promise.resolve(window.YT):_||(_=new Promise(e=>{let t=window.onYouTubeIframeAPIReady;if(window.onYouTubeIframeAPIReady=()=>{t?.(),e(window.YT)},!document.querySelector(`script[src="${g}"]`)){let e=document.createElement(`script`);e.src=g,document.head.appendChild(e)}}),_)}var y={highres:`4320p`,hd2160:`2160p`,hd1440:`1440p`,hd1080:`1080p`,hd720:`720p`,large:`480p`,medium:`360p`,small:`240p`,tiny:`144p`},b=Object.keys(y);function x(e){return!e||e===`auto`?`Auto`:y[e]||e}function S(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}function C({videoId:e,title:t}){let n=(0,p.useRef)(null),r=(0,p.useRef)(null),i=(0,p.useRef)(null),a=(0,p.useRef)(!1),o=(0,p.useRef)(!1),[s,c]=(0,p.useState)(!1),[l,u]=(0,p.useState)(!1),[d,f]=(0,p.useState)(!1),[g,_]=(0,p.useState)(!1),[y,C]=(0,p.useState)(0),[T,E]=(0,p.useState)(0),[D,O]=(0,p.useState)(100),[k,A]=(0,p.useState)(!1),[j,M]=(0,p.useState)(1),[N,P]=(0,p.useState)(!1),[F,I]=(0,p.useState)([]),[L,R]=(0,p.useState)(`auto`),[z,B]=(0,p.useState)(!1),[V,H]=(0,p.useState)(null),[U,W]=(0,p.useState)(!0),G=(0,p.useRef)(null),K=(0,p.useRef)(null);(0,p.useEffect)(()=>{let t=!1;return c(!1),u(!1),f(!1),C(0),E(0),I([]),R(`auto`),v().then(n=>{t||!r.current||(i.current=new n.Player(r.current,{videoId:e,playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,modestbranding:1,rel:0,iv_load_policy:3,playsinline:1,cc_load_policy:0,origin:window.location.origin},events:{onReady:e=>{t||(c(!0),E(e.target.getDuration()||0),O(e.target.getVolume()),A(e.target.isMuted()),o.current&&(o.current=!1,e.target.playVideo(),u(!0)))},onStateChange:e=>{if(t)return;let r=e.data;u(r===n.PlayerState.PLAYING),_(r===n.PlayerState.BUFFERING),f(r===n.PlayerState.ENDED),r===n.PlayerState.PLAYING&&(E(e.target.getDuration()||0),I((e.target.getAvailableQualityLevels?.()||[]).filter(e=>b.includes(e)).sort((e,t)=>b.indexOf(e)-b.indexOf(t))))}}}))}),()=>{t=!0,i.current?.destroy?.(),i.current=null}},[e]),(0,p.useEffect)(()=>{if(!s)return;let e=window.setInterval(()=>{let e=i.current;if(!e?.getCurrentTime||a.current)return;C(e.getCurrentTime()||0);let t=e.getDuration()||0;E(e=>Math.abs(e-t)>.5?t:e)},250);return()=>window.clearInterval(e)},[s]),(0,p.useEffect)(()=>{if(!z)return;function e(){let e=K.current?.getBoundingClientRect();e&&H({left:e.right,bottom:window.innerHeight-e.top+8})}e(),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e);function t(e){e.target.closest?.(`.lp-menu-wrap, .lp-portal-menu`)||B(!1)}return document.addEventListener(`click`,t),()=>{window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e),document.removeEventListener(`click`,t)}},[z]),(0,p.useEffect)(()=>{function e(){P(document.fullscreenElement===n.current)}return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]);let q=(0,p.useCallback)(()=>{window.clearTimeout(G.current),G.current=window.setTimeout(()=>{W(e=>Y.current&&!X.current?!1:e)},2600)},[]),J=(0,p.useCallback)(()=>{W(!0),q()},[q]),Y=(0,p.useRef)(l),X=(0,p.useRef)(z);(0,p.useEffect)(()=>{Y.current=l,X.current=z,l?J():(window.clearTimeout(G.current),W(!0))},[l,z,J]),(0,p.useEffect)(()=>()=>window.clearTimeout(G.current),[]);let Z=(0,p.useCallback)(()=>{let e=i.current;if(!s||!e){o.current=!0,u(!0);return}l?(e.pauseVideo(),u(!1)):(e.playVideo(),u(!0))},[l,s]),Q=(0,p.useCallback)(e=>{let t=i.current;if(!t?.getCurrentTime)return;let n=Math.max(0,Math.min(t.getDuration()||0,t.getCurrentTime()+e));t.seekTo(n,!0),C(n)},[]),ee=(0,p.useCallback)(()=>{let e=i.current;e&&(e.isMuted()?(e.unMute(),A(!1)):(e.mute(),A(!0)))},[]),te=(0,p.useCallback)(()=>{document.fullscreenElement===n.current?document.exitFullscreen?.():n.current?.requestFullscreen?.()},[]);function $(){a.current=!0}function ne(e){C(Number(e.target.value))}function re(e){let t=Number(e.target.value);a.current=!1,i.current?.seekTo(t,!0)}function ie(e){let t=Number(e.target.value);O(t),i.current?.setVolume(t),t===0?(i.current?.mute(),A(!0)):k&&(i.current?.unMute(),A(!1))}function ae(e){R(e),B(!1),i.current?.setPlaybackQuality?.(e)}function oe(){let e=[1,1.25,1.5,1.75,2,.75],t=e[(e.indexOf(j)+1)%e.length];M(t),i.current?.setPlaybackRate(t)}let se=T?y/T*100:0;return(0,h.jsxs)(`div`,{className:`lp-shell ${U?``:`lp-controls-hidden`}`,ref:n,tabIndex:0,onMouseMove:J,onMouseLeave:()=>l&&!z&&W(!1),onMouseDown:()=>n.current?.focus(),onKeyDown:e=>{(e.code===`Space`||e.key===` `)&&(e.preventDefault(),Z())},children:[(0,h.jsx)(`style`,{children:w}),(0,h.jsxs)(`div`,{className:`lp-stage`,onClick:Z,children:[(0,h.jsx)(`div`,{className:`lp-video`,children:(0,h.jsx)(`div`,{ref:r},e)}),(!l||d)&&!g?(0,h.jsx)(`div`,{className:`lp-cover`,style:{backgroundImage:`linear-gradient(rgba(6, 12, 24, 0.45), rgba(6, 12, 24, 0.6)), url(https://i.ytimg.com/vi/${e}/maxresdefault.jpg), url(https://i.ytimg.com/vi/${e}/hqdefault.jpg)`},children:(0,h.jsx)(`button`,{type:`button`,className:`lp-big-play`,onClick:e=>{if(e.stopPropagation(),!s){o.current=!0,u(!0);return}d&&i.current?.seekTo(0,!0),i.current?.playVideo(),u(!0)},"aria-label":s?d?`Replay`:`Play`:`Loading`,children:s?(0,h.jsx)(`i`,{className:`fa-solid ${d?`fa-rotate-right`:`fa-play`}`}):(0,h.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`})})}):null,g?(0,h.jsx)(`div`,{className:`lp-center`,children:(0,h.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin lp-spinner`})}):null]}),(0,h.jsxs)(`div`,{className:`lp-bar`,onClick:e=>e.stopPropagation(),children:[(0,h.jsx)(`input`,{className:`lp-seek`,type:`range`,min:0,max:T||0,step:.1,value:y,onMouseDown:$,onTouchStart:$,onChange:ne,onMouseUp:re,onTouchEnd:re,style:{"--lp-progress":`${se}%`},"aria-label":`Seek`}),(0,h.jsxs)(`div`,{className:`lp-controls`,children:[(0,h.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:Z,"aria-label":l?`Pause`:`Play`,children:(0,h.jsx)(`i`,{className:`fa-solid ${l?`fa-pause`:`fa-play`}`})}),(0,h.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:()=>Q(-10),"aria-label":`Back 10 seconds`,children:(0,h.jsx)(`i`,{className:`fa-solid fa-rotate-left`})}),(0,h.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:()=>Q(10),"aria-label":`Forward 10 seconds`,children:(0,h.jsx)(`i`,{className:`fa-solid fa-rotate-right`})}),(0,h.jsxs)(`span`,{className:`lp-time`,children:[S(y),` `,(0,h.jsx)(`span`,{className:`lp-time-sep`,children:`/`}),` `,S(T)]}),(0,h.jsxs)(`div`,{className:`lp-volume`,children:[(0,h.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:ee,"aria-label":k?`Unmute`:`Mute`,children:(0,h.jsx)(`i`,{className:`fa-solid ${k||D===0?`fa-volume-xmark`:`fa-volume-high`}`})}),(0,h.jsx)(`input`,{className:`lp-vol-range`,type:`range`,min:0,max:100,value:k?0:D,onChange:ie,style:{"--lp-progress":`${k?0:D}%`},"aria-label":`Volume`})]}),(0,h.jsx)(`div`,{className:`lp-menu-wrap`,children:(0,h.jsx)(`button`,{ref:K,type:`button`,className:`lp-btn lp-rate`,onClick:()=>B(e=>!e),"aria-label":`Video quality`,"aria-expanded":z,children:x(L)})}),(0,h.jsxs)(`button`,{type:`button`,className:`lp-btn lp-rate`,onClick:oe,"aria-label":`Playback speed`,children:[j,`x`]}),(0,h.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:te,"aria-label":`Fullscreen`,children:(0,h.jsx)(`i`,{className:`fa-solid ${N?`fa-compress`:`fa-expand`}`})})]})]}),t?(0,h.jsx)(`span`,{className:`sr-only`,children:t}):null,z&&V?(0,m.createPortal)((0,h.jsxs)(`div`,{className:`lp-portal-menu`,style:{left:V.left,bottom:V.bottom},onClick:e=>e.stopPropagation(),children:[(0,h.jsx)(`button`,{type:`button`,className:`lp-menu-item ${L===`auto`?`is-active`:``}`,onClick:()=>ae(`auto`),children:`Auto`}),F.map(e=>(0,h.jsx)(`button`,{type:`button`,className:`lp-menu-item ${L===e?`is-active`:``}`,onClick:()=>ae(e),children:x(e)},e)),F.length?null:(0,h.jsx)(`span`,{className:`lp-menu-empty`,children:`Play to load`})]}),document.body):null]})}var w=`
  .lp-shell {
    position: relative;
    width: 100%;
    height: 100%;
    /* The frame is a centering flex box, so claim the full box explicitly. */
    flex: 1;
    align-self: stretch;
    display: flex;
    flex-direction: column;
    background: #0b1220;
    border-radius: inherit;
    overflow: hidden;
    outline: none;
  }

  .lp-stage {
    position: relative;
    flex: 1;
    min-height: 0;
    background: #000;
    cursor: pointer;
    /* Clips the over-sized iframe below — this is what removes the branding. */
    overflow: hidden;
  }

  .lp-video {
    position: absolute;
    inset: 0;
    overflow: hidden;
    /* Belt and braces: the embed never receives a pointer, so YouTube's
       hover chrome and its clickable logo never activate. */
    pointer-events: none;
  }

  /* YouTube's title bar, channel name, share button, "More videos" and the
     "Watch on YouTube" logo are all anchored to the top and bottom edges of
     the iframe, and render whether or not the player is hovered. Rendering
     the iframe 3x taller than the visible stage and centering it (top: -100%,
     height: 300%) pushes those edges a full stage-height above/below the
     clipped viewport. YouTube's player still fits the actual video to the
     iframe's width and letterboxes it vertically — with a 300%-tall iframe
     that letterboxed video lands exactly inside the visible middle third, so
     nothing of the picture itself is cropped, only the chrome pinned to the
     iframe's real edges. */
  .lp-video > div,
  .lp-video iframe {
    position: absolute;
    top: -100%;
    left: 0;
    width: 100% !important;
    height: 300% !important;
    border: 0;
  }

  /* Opaque on purpose: this is what hides YouTube's branding. */
  .lp-cover {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0b1220;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  /* Buffering happens mid-playback, where YouTube shows no branding — so this
     one stays see-through rather than blacking out the video. */
  .lp-center {
    position: absolute;
    inset: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .lp-big-play {
    width: 74px;
    height: 74px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.16);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #fff;
    font-size: 26px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.25s ease;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.28);
  }

  .lp-big-play:hover {
    transform: scale(1.1);
    background: #fff;
    color: var(--primary-blue);
  }

  .lp-spinner {
    color: #fff;
    font-size: 2.2rem;
  }

  .lp-bar {
    background: linear-gradient(180deg, rgba(11, 18, 32, 0.98), #0b1220);
    padding: 8px 14px 10px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-shrink: 0;
    max-height: 80px;
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.28s ease, transform 0.28s ease, max-height 0.28s ease, padding 0.28s ease;
    overflow: hidden;
  }

  /* Only fades during uninterrupted playback (see wakeControls/scheduleHide);
     paused, ended and menu-open states always force this class off. Collapsing
     max-height (not just opacity) is what removes the empty bar strip once the
     content has faded — otherwise the now-invisible bar keeps claiming space
     under the video. */
  .lp-controls-hidden .lp-bar {
    opacity: 0;
    transform: translateY(6px);
    max-height: 0;
    padding-top: 0;
    padding-bottom: 0;
    pointer-events: none;
  }

  .lp-controls-hidden .lp-stage {
    cursor: none;
  }

  .lp-seek,
  .lp-vol-range {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 5px;
    border-radius: 999px;
    cursor: pointer;
    background: linear-gradient(
      to right,
      var(--gold, #f5b301) 0%,
      var(--gold, #f5b301) var(--lp-progress, 0%),
      rgba(255, 255, 255, 0.22) var(--lp-progress, 0%),
      rgba(255, 255, 255, 0.22) 100%
    );
  }

  .lp-seek::-webkit-slider-thumb,
  .lp-vol-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid var(--gold, #f5b301);
    cursor: pointer;
  }

  .lp-seek::-moz-range-thumb,
  .lp-vol-range::-moz-range-thumb {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #fff;
    border: 2px solid var(--gold, #f5b301);
    cursor: pointer;
  }

  .lp-controls {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .lp-btn {
    background: transparent;
    border: 0;
    color: rgba(255, 255, 255, 0.88);
    width: 34px;
    height: 34px;
    border-radius: 9px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.95rem;
    transition: background 0.2s ease, color 0.2s ease;
  }

  .lp-btn:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
  }

  .lp-rate {
    width: auto;
    padding: 0 10px;
    font-weight: 800;
    font-size: 0.8rem;
  }

  .lp-menu-wrap {
    position: relative;
    display: inline-flex;
  }

  /* Portalled to document.body (see the effect that computes its position) so
     it lives outside the iframe's DOM subtree entirely — that's what keeps it
     visible instead of painted over by YouTube's own compositing layer. */
  .lp-portal-menu {
    position: fixed;
    transform: translateX(-100%);
    min-width: 108px;
    max-height: 208px;
    overflow-y: auto;
    background: #16223a;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 1px;
    box-shadow: 0 14px 34px rgba(0, 0, 0, 0.42);
    z-index: 2147483647;
  }

  .lp-menu-item {
    background: transparent;
    border: 0;
    color: rgba(255, 255, 255, 0.85);
    text-align: left;
    padding: 7px 10px;
    border-radius: 7px;
    font-size: 0.8rem;
    font-weight: 700;
    cursor: pointer;
    white-space: nowrap;
  }

  .lp-menu-item:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #fff;
  }

  .lp-menu-item.is-active {
    background: var(--gold, #f5b301);
    color: #16223a;
  }

  .lp-menu-empty {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.74rem;
    font-weight: 700;
    padding: 7px 10px;
    white-space: nowrap;
  }

  .lp-time {
    color: rgba(255, 255, 255, 0.82);
    font-size: 0.8rem;
    font-weight: 700;
    font-variant-numeric: tabular-nums;
    margin-left: 4px;
  }

  .lp-time-sep {
    opacity: 0.45;
  }

  .lp-volume {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-left: auto;
  }

  .lp-vol-range {
    width: 86px;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  @media (max-width: 640px) {
    .lp-bar {
      padding: 6px 10px 8px;
    }

    .lp-btn {
      width: 30px;
      height: 30px;
      font-size: 0.85rem;
    }

    .lp-vol-range {
      width: 54px;
    }

    .lp-time {
      font-size: 0.72rem;
    }
  }
`,T=`courseId`;function E(e){return!!(e.expiry_date&&new Date(e.expiry_date)<new Date)}function D(){let{institute:e,profile:t,membership:a}=r(),u=l(t?.current_level),f=a?.id||t?.membership_id||null,[m,g]=(0,p.useState)({courses:[],sections:[],lessons:[],assignedCourseIds:[],accessRequests:[]}),[_,v]=(0,p.useState)(()=>I()),[y,b]=(0,p.useState)(null),[x,S]=(0,p.useState)(``),[C,w]=(0,p.useState)(!1),[T,D]=(0,p.useState)(!0),[A,M]=(0,p.useState)(null),[N,P]=(0,p.useState)(null);async function F(){D(!0),M(null);let t=await s(e?.id,f);g(t.data),v(e=>e&&t.data.courses.some(t=>t.id===e)?e:null),b(null),S(``),M(t.error),D(!1)}(0,p.useEffect)(()=>((async()=>{await F()})(),()=>{}),[e?.id,f]);function B(e){return m.assignedCourseIds.includes(e.id)}function V(e){return E(e)?!1:B(e)?!0:e.access_mode===`approval_required`?!1:d(e.level,u)}function H(e){return m.accessRequests.find(t=>t.course_id===e.id)?.status??null}async function U(e){P(e.id);let t=await o(e.id);if(P(null),t.error){M(t.error);return}await F()}(0,p.useEffect)(()=>{function e(){v(I()),b(null),S(``)}return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]);let W=m.courses,G=W.find(e=>e.id===_&&V(e));(0,p.useEffect)(()=>(document.body.classList.toggle(`recorded-player-focus`,!!G),()=>document.body.classList.remove(`recorded-player-focus`)),[G]);let K=(0,p.useMemo)(()=>m.sections.filter(e=>e.course_id===_),[m.sections,_]);async function q(e){if(b(e),S(``),e.lesson_type===`external_video`){S(e.metadata?.external_url||``);return}w(!0);let t=await n(e.asset_id);if(w(!1),t.error){M(t.error),b(null);return}S(t.data.downloadUrl)}return(0,h.jsxs)(`div`,{className:`page-wrap recorded-page ${G?`recorded-page-focus`:``}`,style:{paddingTop:G?`calc(var(--nav-h) + 8px)`:`calc(var(--nav-h) + 20px)`},children:[(0,h.jsx)(`style`,{children:z}),(0,h.jsx)(i,{}),(0,h.jsxs)(`div`,{className:`recorded-container ${G?`recorded-container-focus`:``}`,style:{...R.container,...G?R.containerFocus:{}},children:[G?null:(0,h.jsxs)(`div`,{className:`recorded-header-banner premium-banner`,style:{position:`relative`,overflow:`hidden`,borderRadius:`26px`,padding:`32px 24px`,border:`1px solid rgba(255, 255, 255, 0.82)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`20px`,marginBottom:`8px`},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,minWidth:0},children:[(0,h.jsx)(`span`,{className:`setup-badge`,style:{background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`inline-block`,alignSelf:`flex-start`,margin:0},children:`Video Course`}),(0,h.jsx)(`h1`,{style:{fontFamily:`Sora, sans-serif`,fontSize:`2.2rem`,fontWeight:`900`,color:`var(--dark-blue)`,margin:0},children:`Video Library`}),(0,h.jsx)(`p`,{style:{color:`var(--text-light)`,fontSize:`1.05rem`,fontWeight:`500`,margin:0,lineHeight:1.4},children:`Choose a recorded course, then watch its videos.`})]}),(0,h.jsx)(c,{variant:`recordings-banner`,size:300})]}),T?(0,h.jsx)(j,{icon:`fa-circle-notch fa-spin`,title:`Loading recorded lectures...`,fill:!0}):null,A?(0,h.jsx)(j,{icon:`fa-triangle-exclamation`,title:A.message,tone:`error`,fill:!0}):null,!T&&!A&&!W.length?(0,h.jsx)(j,{variant:`recordings-empty`,title:`No recorded courses assigned yet.`,subtitle:`Your recorded lectures will show up here once assigned.`,fill:!0}):null,!T&&!A&&W.length&&!G?(0,h.jsx)(O,{courses:W,sections:m.sections,lessons:m.lessons,isCourseUnlocked:V,isCourseExpired:E,accessRequestStatus:H,requestingCourseId:N,onRequestAccess:U,onOpenCourse:e=>{v(e),L(e)}}):null,!T&&!A&&G?(0,h.jsx)(k,{course:G,sections:K,lessons:m.lessons,activeLesson:y,playerUrl:x,playerLoading:C,onBack:()=>{v(null),b(null),S(``),L(null)},onOpenLesson:q}):null]})]})}function O({courses:e,sections:t,lessons:n,isCourseUnlocked:r,isCourseExpired:i,accessRequestStatus:a,requestingCourseId:o,onRequestAccess:s,onOpenCourse:c}){return(0,h.jsx)(`div`,{className:`recorded-course-grid`,style:R.courseGrid,children:e.map(e=>{let l=r(e),u=i(e),d=a(e),p=l?()=>c(e.id):void 0;return(0,h.jsxs)(`article`,{className:`recorded-course-card`,style:R.courseCard,children:[(0,h.jsxs)(`div`,{className:`recorded-course-thumb`,style:{...R.courseThumb,cursor:l?`pointer`:`default`,opacity:l?1:.6},onClick:p,children:[(0,h.jsx)(`span`,{className:`level-badge`,children:f(e.level,`Course`)}),(0,h.jsx)(`div`,{className:`play-btn-circle`,onClick:p,children:(0,h.jsx)(`i`,{className:`fa-solid ${l?`fa-play`:`fa-lock`}`})}),(0,h.jsx)(`div`,{className:`shimmer-effect`})]}),(0,h.jsxs)(`div`,{className:`recorded-course-body`,style:R.courseCardBody,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h2`,{className:`recorded-course-title`,style:R.courseCardTitle,children:e.title}),(0,h.jsx)(`p`,{style:R.meta,children:e.description||M(e.recorded_lecture_course_batches)}),e.expiry_date?(0,h.jsxs)(`p`,{style:{...R.meta,color:u?`#b91c1c`:`var(--text-light)`},children:[u?`Access expired `:`Access until `,new Date(e.expiry_date).toLocaleDateString()]}):null]}),(0,h.jsxs)(`div`,{className:`recorded-course-stats`,style:R.courseStats,children:[(0,h.jsx)(`span`,{children:f(e.level,`Course`)}),(0,h.jsx)(`span`,{children:N(e.id,t,n)})]}),(0,h.jsx)(`div`,{className:`open-btn-container`,children:l?(0,h.jsx)(`button`,{className:`btn btn-primary`,style:R.openButton,onClick:()=>c(e.id),children:`Open Course`}):u?(0,h.jsx)(`button`,{className:`btn btn-primary`,style:{...R.openButton,opacity:.6,cursor:`not-allowed`},disabled:!0,children:`Access Expired`}):d===`pending`?(0,h.jsx)(`button`,{className:`btn btn-primary`,style:{...R.openButton,opacity:.7,cursor:`not-allowed`},disabled:!0,children:`Request Pending`}):d===`rejected`?(0,h.jsx)(`button`,{className:`btn btn-primary`,style:R.openButton,disabled:o===e.id,onClick:()=>s(e),children:o===e.id?`Sending…`:`Request Denied — Ask Again`}):(0,h.jsx)(`button`,{className:`btn btn-primary`,style:R.openButton,disabled:o===e.id,onClick:()=>s(e),children:o===e.id?`Sending…`:`Request Access`})})]})]},e.id)})})}function k({course:e,sections:t,lessons:n,activeLesson:r,playerUrl:i,playerLoading:a,onBack:o,onOpenLesson:s}){let c=new Set(t.map(e=>e.id)),l=n.find(e=>c.has(e.section_id));return(0,h.jsxs)(`div`,{className:`recorded-detail`,style:R.detailWrap,children:[(0,h.jsxs)(`button`,{className:`recorded-back`,style:R.backButton,onClick:o,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),`All courses`]}),(0,h.jsxs)(`main`,{className:`recorded-panel`,style:R.lessonPanel,children:[(0,h.jsxs)(`div`,{className:`recorded-course-heading`,style:R.courseHeading,children:[(0,h.jsx)(`h2`,{className:`recorded-panel-title`,style:R.panelTitle,children:e.title}),(0,h.jsx)(`p`,{style:R.meta,children:e.description||M(e.recorded_lecture_course_batches)})]}),(0,h.jsxs)(`div`,{className:`recorded-watch-layout`,style:R.watchLayout,children:[(0,h.jsx)(`section`,{className:`recorded-player-card`,style:R.playerCard,children:(0,h.jsx)(A,{lesson:r,playerUrl:i,loading:a,onStartFirst:l?()=>s(l):null})}),(0,h.jsxs)(`aside`,{className:`recorded-playlist`,style:R.playlistCard,children:[(0,h.jsx)(`div`,{style:R.playlistHeader,children:(0,h.jsxs)(`span`,{style:R.countPill,children:[t.length,` sections | `,P(n,t),` videos`]})}),t.map(e=>{let t=n.filter(t=>t.section_id===e.id);return(0,h.jsxs)(`section`,{className:`recorded-section`,style:R.section,children:[(0,h.jsx)(`h3`,{className:`recorded-section-title`,style:R.sectionTitle,children:e.title}),t.length?t.map((e,t)=>(0,h.jsxs)(`button`,{className:`recorded-lesson`,style:{...R.lesson,...r?.id===e.id?R.lessonActive:{}},onClick:()=>s(e),children:[(0,h.jsx)(`span`,{style:R.lessonIcon,children:r?.id===e.id?(0,h.jsx)(`i`,{className:`fa-solid fa-pause`}):t+1}),(0,h.jsxs)(`span`,{style:R.lessonText,children:[(0,h.jsx)(`strong`,{children:e.title}),(0,h.jsx)(`small`,{style:R.meta,children:e.lesson_type===`external_video`?`Online video`:`Class video`})]})]},e.id)):(0,h.jsx)(`p`,{style:R.meta,children:`No videos in this section yet.`})]},e.id)})]})]})]})]})}function A({lesson:e,playerUrl:t,loading:n,onStartFirst:r}){let i=e?.lesson_type===`external_video`?F(t):null;return e?(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`div`,{className:`recorded-player-frame`,style:R.playerFrame,children:n?(0,h.jsxs)(`div`,{className:`recorded-player-empty`,style:R.playerEmpty,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,h.jsx)(`h2`,{children:`Getting your video ready`})]}):i?.provider===`youtube`?(0,h.jsx)(C,{videoId:i.id,title:e.title}):i?.provider===`vimeo`?(0,h.jsx)(`iframe`,{title:e.title,src:`https://player.vimeo.com/video/${i.id}?title=0&byline=0&portrait=0`,style:R.iframe,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0}):e.lesson_type===`external_video`?(0,h.jsxs)(`div`,{className:`recorded-player-empty`,style:R.playerEmpty,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-up-right-from-square`}),(0,h.jsx)(`h2`,{children:`This video opens on another site`}),(0,h.jsx)(`button`,{className:`btn btn-primary`,style:R.playerButton,onClick:()=>window.open(t,`_blank`,`noopener,noreferrer`),children:`Open Video`})]}):(0,h.jsx)(`video`,{src:t,controls:!0,controlsList:`nodownload`,style:R.video})}),(0,h.jsxs)(`div`,{className:`recorded-now-playing`,style:R.nowPlaying,children:[(0,h.jsx)(`span`,{style:R.nowBadge,children:`Now Playing`}),(0,h.jsx)(`h2`,{style:R.nowTitle,children:e.title})]})]}):(0,h.jsx)(`div`,{className:`recorded-player-frame recorded-player-frame-empty`,style:R.playerFrame,children:(0,h.jsxs)(`div`,{className:`recorded-player-empty`,style:R.playerEmpty,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-circle-play`,style:{fontSize:`3.5rem`,color:`var(--gold)`}}),(0,h.jsx)(`h2`,{style:{margin:0,fontFamily:`Sora, sans-serif`,fontWeight:800},children:`Pick a video to start learning`}),(0,h.jsx)(`p`,{style:{margin:0,opacity:.85,fontWeight:600},children:`Lessons will play here, inside your classroom.`}),r?(0,h.jsx)(`button`,{className:`g-btn g-btn-p`,style:{...R.playerButton,padding:`12px 28px`,fontSize:`0.95rem`},onClick:r,children:`Start First Video`}):null]})})}function j({icon:e,title:t,subtitle:n,tone:r,fill:i,variant:a}){return i?(0,h.jsxs)(`div`,{style:{...R.state,...r===`error`?R.error:{},...R.stateFill},children:[a?(0,h.jsx)(c,{variant:a,size:420}):(0,h.jsx)(`div`,{style:R.illustrationCore,children:(0,h.jsx)(`i`,{className:`fa-solid ${e}`})}),(0,h.jsxs)(`div`,{style:R.stateFillText,children:[(0,h.jsx)(`span`,{style:R.stateFillTitle,children:t}),n?(0,h.jsx)(`p`,{style:R.stateFillSubtitle,children:n}):null]})]}):(0,h.jsxs)(`div`,{style:{...R.state,...r===`error`?R.error:{}},children:[(0,h.jsx)(`i`,{className:`fa-solid ${e}`}),(0,h.jsx)(`span`,{children:t})]})}function M(e=[]){let t=e.map(e=>e.batches?.name).filter(Boolean);return t.length?t.join(`, `):`Assigned course`}function N(e,t,n){let r=t.filter(t=>t.course_id===e);return`${r.length} sections | ${P(n,r)} videos`}function P(e,t){let n=new Set(t.map(e=>e.id));return e.filter(e=>n.has(e.section_id)).length}function F(e){if(!e)return null;try{let t=new URL(e);if(t.hostname.includes(`youtube.com`)){let e=t.searchParams.get(`v`)||t.pathname.split(`/`).filter(Boolean).pop();return e?{provider:`youtube`,id:e}:null}if(t.hostname.includes(`youtu.be`)){let e=t.pathname.replace(`/`,``);return e?{provider:`youtube`,id:e}:null}if(t.hostname.includes(`vimeo.com`)){let e=t.pathname.split(`/`).filter(Boolean)[0];return e?{provider:`vimeo`,id:e}:null}}catch{return null}return null}function I(){return new URLSearchParams(window.location.search).get(T)}function L(e){let t=new URL(window.location.href);e?t.searchParams.set(T,e):t.searchParams.delete(T);let n=`${t.pathname}${t.search}${t.hash}`;n!==`${window.location.pathname}${window.location.search}${window.location.hash}`&&window.history.pushState({courseId:e},``,n)}var R={container:{width:`100%`,display:`flex`,flexDirection:`column`,gap:24,padding:`20px 28px 60px`,boxSizing:`border-box`},containerFocus:{width:`100%`,gap:8,padding:`20px 28px 60px`,boxSizing:`border-box`},title:{fontFamily:`Sora, sans-serif`,fontSize:`2.4rem`,color:`var(--dark-blue)`,marginBottom:8},subtitle:{color:`var(--text-light)`,fontSize:`1.05rem`,fontWeight:600},courseGrid:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(280px, 1fr))`,gap:20},courseCard:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,overflow:`hidden`,boxShadow:`var(--shadow)`,display:`flex`,flexDirection:`column`},courseThumb:{height:150,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:42},courseCardBody:{padding:18,display:`flex`,flexDirection:`column`,gap:14,flex:1},courseCardTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.1rem`,lineHeight:1.3},courseStats:{display:`flex`,justifyContent:`space-between`,gap:10,color:`var(--text-light)`,fontSize:`0.8rem`,fontWeight:800},openButton:{width:`100%`,textAlign:`center`,marginTop:`auto`},detailWrap:{display:`flex`,flexDirection:`column`,gap:14},backButton:{width:`fit-content`,border:`1px solid var(--border)`,background:`var(--card-bg)`,color:`var(--primary-blue)`,borderRadius:999,padding:`10px 16px`,fontWeight:800,display:`inline-flex`,alignItems:`center`,gap:8,cursor:`pointer`},lessonPanel:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:16,boxShadow:`var(--shadow)`},panelHeader:{display:`flex`,justifyContent:`space-between`,gap:16,marginBottom:12,flexWrap:`wrap`},courseHeading:{marginBottom:24,paddingBottom:16,borderBottom:`1px solid var(--border)`},panelTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.4rem`},countPill:{alignSelf:`flex-start`,background:`var(--light-blue)`,color:`var(--primary-blue)`,borderRadius:999,padding:`7px 12px`,fontSize:`0.78rem`,fontWeight:900},watchLayout:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 460px`,gap:10,alignItems:`start`},playerCard:{minWidth:0},playlistCard:{background:`rgba(255,255,255,0.45)`,border:`1px solid var(--border)`,borderRadius:16,padding:14,maxHeight:620,overflowY:`auto`,alignSelf:`start`},playlistHeader:{display:`flex`,justifyContent:`flex-end`,marginBottom:10},playerFrame:{width:`100%`,aspectRatio:`16 / 8.4`,maxHeight:`calc(100vh - var(--nav-h) - 190px)`,borderRadius:18,overflow:`hidden`,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,border:`1px solid var(--border)`,display:`flex`,alignItems:`center`,justifyContent:`center`},video:{width:`100%`,height:`100%`,display:`block`,background:`#000`},iframe:{width:`100%`,height:`100%`,border:0,display:`block`,background:`#000`},playerEmpty:{minHeight:260,color:`white`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,textAlign:`center`,gap:12,padding:24},playerButton:{marginTop:6},nowPlaying:{marginTop:14,background:`rgba(255,255,255,0.65)`,border:`1px solid var(--border)`,borderRadius:14,padding:14},nowBadge:{display:`inline-block`,color:`var(--primary-blue)`,fontWeight:900,fontSize:`0.72rem`,textTransform:`uppercase`,marginBottom:5},nowTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.1rem`},section:{borderTop:`1px solid var(--border)`,paddingTop:18,marginTop:18},sectionTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.22rem`,marginBottom:12},lesson:{width:`100%`,border:`1px solid var(--border)`,background:`rgba(255,255,255,0.7)`,borderRadius:14,padding:16,display:`flex`,alignItems:`center`,gap:14,cursor:`pointer`,marginBottom:12,color:`var(--dark-blue)`,fontSize:`1rem`},lessonActive:{background:`var(--light-blue)`,borderColor:`var(--primary-blue)`},lessonIcon:{width:38,height:38,borderRadius:12,background:`var(--primary-blue)`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,fontWeight:900},lessonText:{flex:1,textAlign:`left`,minWidth:0,lineHeight:1.25},meta:{color:`var(--text-light)`,fontSize:`0.95rem`,fontWeight:700,display:`block`},state:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:16,padding:20,display:`flex`,alignItems:`center`,gap:12,color:`var(--dark-blue)`,fontWeight:800},error:{color:`#b91c1c`,borderColor:`#fecaca`,background:`#fff5f5`},stateFill:{flex:1,minHeight:`45vh`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:8,textAlign:`center`},stateFillText:{display:`flex`,flexDirection:`column`,gap:6,maxWidth:420},stateFillTitle:{fontFamily:`Sora, sans-serif`,fontSize:`1.2rem`,color:`var(--dark-blue)`},stateFillSubtitle:{margin:0,color:`var(--text-light)`,fontWeight:600,fontSize:`0.95rem`,lineHeight:1.4},illustrationCore:{width:84,height:84,borderRadius:`50%`,background:`linear-gradient(135deg, var(--light-blue), color-mix(in srgb, var(--primary-blue) 14%, white))`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:30,boxShadow:`0 10px 24px color-mix(in srgb, var(--primary-blue) 18%, transparent)`}},z=`
  @media (max-width: 720px) {
    .page-illustration {
      display: none !important;
    }
  }

  /* Keyframes for Card Entrance */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Premium Course Card Enhancements */
  .recorded-course-card {
    animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
    position: relative;
    cursor: pointer;
    background: #ffffff !important;
    border: 1px solid rgba(226, 232, 240, 0.8) !important;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03) !important;
  }
  .recorded-course-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px color-mix(in srgb, var(--primary-blue) 12%, transparent), 0 1px 3px rgba(0, 0, 0, 0.02) !important;
    border-color: color-mix(in srgb, var(--primary-blue) 25%, transparent) !important;
  }

  /* Elegant Glassmorphic Level Badge */
  .recorded-course-card .level-badge {
    position: absolute;
    top: 14px;
    left: 14px;
    background: rgba(255, 255, 255, 0.22);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.3);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    z-index: 10;
    pointer-events: none;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
  }

  /* Vibrant Graduated Thumbnail with Mesh Dots Pattern Overlay */
  .recorded-course-thumb {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background: linear-gradient(135deg, var(--primary-blue) 0%, var(--dark-blue) 100%) !important;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }
  .recorded-course-thumb::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 75% 25%, rgba(255, 255, 255, 0.18), transparent 45%),
                radial-gradient(circle at 20% 75%, rgba(255, 255, 255, 0.08), transparent 35%);
    opacity: 1;
    transition: transform 0.6s ease;
  }
  .recorded-course-thumb::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: radial-gradient(rgba(255, 255, 255, 0.14) 1px, transparent 1px);
    background-size: 14px 14px;
    opacity: 0.8;
    pointer-events: none;
  }
  .recorded-course-card:hover .recorded-course-thumb::before {
    transform: scale(1.25) rotate(10deg);
  }

  /* Moving Shimmer Reflection */
  .recorded-course-thumb .shimmer-effect {
    position: absolute;
    top: 0;
    left: -150%;
    width: 60%;
    height: 100%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.25) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-25deg);
    transition: 0.75s ease;
    pointer-events: none;
    z-index: 5;
  }
  .recorded-course-card:hover .shimmer-effect {
    left: 150%;
  }

  /* Interactive Glowing Play Button */
  .recorded-course-thumb .play-btn-circle {
    width: 58px;
    height: 58px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.18);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    z-index: 8;
  }
  .recorded-course-thumb .play-btn-circle i {
    font-size: 21px;
    color: #fff;
    margin-left: 4px;
    transition: transform 0.3s ease;
  }
  .recorded-course-card:hover .play-btn-circle {
    background: #ffffff;
    border-color: #ffffff;
    box-shadow: 0 12px 30px color-mix(in srgb, var(--primary-blue) 35%, transparent);
    transform: scale(1.15);
  }
  .recorded-course-card:hover .play-btn-circle i {
    color: var(--primary-blue);
  }

  /* Title Style and Color Transition */
  .recorded-course-title {
    font-weight: 700 !important;
    transition: color 0.25s ease;
  }
  .recorded-course-card:hover .recorded-course-title {
    color: var(--primary-blue) !important;
  }

  /* Open Button Glamour */
  .recorded-course-card .open-btn-container button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
    background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue)) !important;
    border: none !important;
    box-shadow: 0 4px 14px color-mix(in srgb, var(--primary-blue) 25%, transparent) !important;
    border-radius: 12px !important;
    padding: 11px 20px !important;
    font-weight: 700 !important;
    letter-spacing: 0.3px;
  }
  .recorded-course-card:hover .open-btn-container button {
    transform: translateY(-2px);
    box-shadow: 0 6px 22px color-mix(in srgb, var(--primary-blue) 45%, transparent) !important;
    filter: brightness(1.08);
  }

  .recorded-page {
    align-items: stretch !important;
    justify-content: flex-start !important;
    min-height: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .recorded-page-focus {
    padding-bottom: 18px !important;
  }

  .recorded-container {
    margin: 0;
    max-width: none;
  }

  .recorded-container-focus {
    max-width: none;
  }

  @media (max-width: 900px) {
    .recorded-watch-layout {
      display: flex !important;
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 14px !important;
    }

    .recorded-playlist {
      max-height: none !important;
      overflow: visible !important;
      margin-top: 0 !important;
      width: 100% !important;
      box-sizing: border-box !important;
    }

    .recorded-player-card {
      width: 100% !important;
    }
  }

  @media (max-width: 640px) {
    .recorded-page {
      padding-top: calc(var(--nav-h) + 10px) !important;
      padding-bottom: 24px !important;
    }

    .recorded-container {
      width: 100% !important;
      padding: 0 10px !important;
      gap: 14px !important;
    }

    .recorded-header {
      padding: 0 4px;
    }

    .recorded-title {
      font-size: 1.45rem !important;
      margin-bottom: 2px !important;
    }

    .recorded-subtitle {
      font-size: 0.86rem !important;
      line-height: 1.35 !important;
    }

    .recorded-course-grid {
      grid-template-columns: 1fr !important;
      gap: 12px !important;
    }

    .recorded-course-card {
      border-radius: 14px !important;
      display: grid !important;
      grid-template-columns: 82px minmax(0, 1fr) !important;
      min-height: 120px !important;
    }

    .recorded-course-thumb {
      height: 100% !important;
      min-height: 120px !important;
      font-size: 24px !important;
    }

    .recorded-course-body {
      padding: 12px !important;
      gap: 8px !important;
    }

    .recorded-course-title {
      font-size: 0.96rem !important;
      line-height: 1.25 !important;
    }

    .recorded-course-stats {
      flex-direction: column !important;
      gap: 2px !important;
      font-size: 0.72rem !important;
    }

    .recorded-back {
      padding: 8px 12px !important;
      font-size: 0.82rem !important;
    }

    .recorded-panel {
      padding: 10px !important;
      border-radius: 14px !important;
    }

    .recorded-panel-header {
      margin-bottom: 12px !important;
      gap: 8px !important;
    }

    .recorded-panel-title {
      font-size: 1rem !important;
      line-height: 1.25 !important;
    }

    .recorded-course-heading {
      margin-bottom: 8px !important;
    }

    .recorded-player-frame {
      border-radius: 12px !important;
      height: auto !important;
      min-height: 0 !important;
      aspect-ratio: 16 / 10 !important;
    }

    /* The "pick a video" placeholder isn't an actual video, so it doesn't
       need to be locked to a 16:10 box — let it grow to fit its own icon,
       copy, and button instead of clipping them. */
    .recorded-player-frame-empty {
      aspect-ratio: auto !important;
      min-height: 230px !important;
    }

    .recorded-player-empty {
      min-height: 0 !important;
      padding: 16px !important;
      gap: 8px !important;
    }

    .recorded-player-empty i {
      font-size: 2.3rem !important;
    }

    .recorded-player-empty h2 {
      font-size: 1rem !important;
      line-height: 1.25 !important;
    }

    .recorded-player-empty p {
      font-size: 0.85rem !important;
    }

    .recorded-now-playing {
      margin-top: 10px !important;
      padding: 10px !important;
    }

    .recorded-playlist {
      padding: 10px !important;
      border-radius: 14px !important;
    }

    .recorded-section {
      margin-top: 10px !important;
      padding-top: 10px !important;
    }

    .recorded-section:first-child {
      margin-top: 0 !important;
      padding-top: 0 !important;
      border-top: 0 !important;
    }

    .recorded-section-title {
      font-size: 1rem !important;
      margin-bottom: 8px !important;
    }

    .recorded-lesson {
      padding: 12px !important;
      gap: 9px !important;
      border-radius: 12px !important;
      font-size: 0.95rem !important;
    }
  }
`;export{D as default};