import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{B as t,J as n,P as r,at as i,kt as a,u as o,ut as s,y as c,z as l}from"./interactive-Bll_ySd5.js";import{n as u}from"./react-dom-O7GvRn0W.js";import{n as d,t as f}from"./contentLevels-CDV_YUuY.js";var p=e(a(),1),m=e(u(),1),h=t(),g=`https://www.youtube.com/iframe_api`,_=null;function v(){return window.YT?.Player?Promise.resolve(window.YT):_||(_=new Promise(e=>{let t=window.onYouTubeIframeAPIReady;if(window.onYouTubeIframeAPIReady=()=>{t?.(),e(window.YT)},!document.querySelector(`script[src="${g}"]`)){let e=document.createElement(`script`);e.src=g,document.head.appendChild(e)}}),_)}var y={highres:`4320p`,hd2160:`2160p`,hd1440:`1440p`,hd1080:`1080p`,hd720:`720p`,large:`480p`,medium:`360p`,small:`240p`,tiny:`144p`},b=Object.keys(y);function x(e){return!e||e===`auto`?`Auto`:y[e]||e}function S(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}function C({videoId:e,title:t}){let n=(0,p.useRef)(null),r=(0,p.useRef)(null),i=(0,p.useRef)(null),a=(0,p.useRef)(!1),o=(0,p.useRef)(!1),[s,c]=(0,p.useState)(!1),[l,u]=(0,p.useState)(!1),[d,f]=(0,p.useState)(!1),[g,_]=(0,p.useState)(!1),[y,C]=(0,p.useState)(0),[T,E]=(0,p.useState)(0),[D,O]=(0,p.useState)(100),[k,A]=(0,p.useState)(!1),[j,M]=(0,p.useState)(1),[N,P]=(0,p.useState)(!1),[F,I]=(0,p.useState)([]),[L,R]=(0,p.useState)(`auto`),[z,B]=(0,p.useState)(!1),[V,H]=(0,p.useState)(null),[U,W]=(0,p.useState)(!0),G=(0,p.useRef)(null),K=(0,p.useRef)(null);(0,p.useEffect)(()=>{let t=!1;return c(!1),u(!1),f(!1),C(0),E(0),I([]),R(`auto`),v().then(n=>{t||!r.current||(i.current=new n.Player(r.current,{videoId:e,playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,modestbranding:1,rel:0,iv_load_policy:3,playsinline:1,cc_load_policy:0,origin:window.location.origin},events:{onReady:e=>{t||(c(!0),E(e.target.getDuration()||0),O(e.target.getVolume()),A(e.target.isMuted()),o.current&&(o.current=!1,e.target.playVideo(),u(!0)))},onStateChange:e=>{if(t)return;let r=e.data;u(r===n.PlayerState.PLAYING),_(r===n.PlayerState.BUFFERING),f(r===n.PlayerState.ENDED),r===n.PlayerState.PLAYING&&(E(e.target.getDuration()||0),I((e.target.getAvailableQualityLevels?.()||[]).filter(e=>b.includes(e)).sort((e,t)=>b.indexOf(e)-b.indexOf(t))))}}}))}),()=>{t=!0,i.current?.destroy?.(),i.current=null}},[e]),(0,p.useEffect)(()=>{if(!s)return;let e=window.setInterval(()=>{let e=i.current;if(!e?.getCurrentTime||a.current)return;C(e.getCurrentTime()||0);let t=e.getDuration()||0;E(e=>Math.abs(e-t)>.5?t:e)},250);return()=>window.clearInterval(e)},[s]),(0,p.useEffect)(()=>{if(!z)return;function e(){let e=K.current?.getBoundingClientRect();e&&H({left:e.right,bottom:window.innerHeight-e.top+8,maxHeight:Math.max(96,Math.min(208,e.top-16))})}e(),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e);function t(e){e.target.closest?.(`.lp-menu-wrap, .lp-portal-menu`)||B(!1)}return document.addEventListener(`click`,t),()=>{window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e),document.removeEventListener(`click`,t)}},[z]),(0,p.useEffect)(()=>{function e(){P(document.fullscreenElement===n.current)}return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]);let q=(0,p.useCallback)(()=>{window.clearTimeout(G.current),G.current=window.setTimeout(()=>{W(e=>Y.current&&!X.current?!1:e)},2600)},[]),J=(0,p.useCallback)(()=>{W(!0),q()},[q]),Y=(0,p.useRef)(l),X=(0,p.useRef)(z);(0,p.useEffect)(()=>{Y.current=l,X.current=z,l?J():(window.clearTimeout(G.current),W(!0))},[l,z,J]),(0,p.useEffect)(()=>()=>window.clearTimeout(G.current),[]);let Z=(0,p.useCallback)(()=>{let e=i.current;if(!s||!e){o.current=!0,u(!0);return}l?(e.pauseVideo(),u(!1)):(e.playVideo(),u(!0))},[l,s]),Q=(0,p.useCallback)(e=>{let t=i.current;if(!t?.getCurrentTime)return;let n=Math.max(0,Math.min(t.getDuration()||0,t.getCurrentTime()+e));t.seekTo(n,!0),C(n)},[]),ee=(0,p.useCallback)(()=>{let e=i.current;e&&(e.isMuted()?(e.unMute(),A(!1)):(e.mute(),A(!0)))},[]),te=(0,p.useCallback)(()=>{document.fullscreenElement===n.current?document.exitFullscreen?.():n.current?.requestFullscreen?.()},[]);function $(){a.current=!0}function ne(e){C(Number(e.target.value))}function re(e){let t=Number(e.target.value);a.current=!1,i.current?.seekTo(t,!0)}function ie(e){let t=Number(e.target.value);O(t),i.current?.setVolume(t),t===0?(i.current?.mute(),A(!0)):k&&(i.current?.unMute(),A(!1))}function ae(e){R(e),B(!1),i.current?.setPlaybackQuality?.(e)}function oe(){let e=[1,1.25,1.5,1.75,2,.75],t=e[(e.indexOf(j)+1)%e.length];M(t),i.current?.setPlaybackRate(t)}let se=T?y/T*100:0;return(0,h.jsxs)(`div`,{className:`lp-shell ${U?``:`lp-controls-hidden`}`,ref:n,tabIndex:0,onMouseMove:J,onMouseLeave:()=>l&&!z&&W(!1),onMouseDown:()=>n.current?.focus(),onKeyDown:e=>{(e.code===`Space`||e.key===` `)&&(e.preventDefault(),Z())},children:[(0,h.jsx)(`style`,{children:w}),(0,h.jsxs)(`div`,{className:`lp-stage`,onClick:Z,children:[(0,h.jsx)(`div`,{className:`lp-video`,children:(0,h.jsx)(`div`,{ref:r},e)}),(!l||d)&&!g?(0,h.jsx)(`div`,{className:`lp-cover`,style:{backgroundImage:`linear-gradient(rgba(6, 12, 24, 0.45), rgba(6, 12, 24, 0.6)), url(https://i.ytimg.com/vi/${e}/maxresdefault.jpg), url(https://i.ytimg.com/vi/${e}/hqdefault.jpg)`},children:(0,h.jsx)(`button`,{type:`button`,className:`lp-big-play`,onClick:e=>{if(e.stopPropagation(),!s){o.current=!0,u(!0);return}d&&i.current?.seekTo(0,!0),i.current?.playVideo(),u(!0)},"aria-label":s?d?`Replay`:`Play`:`Loading`,children:s?(0,h.jsx)(`i`,{className:`fa-solid ${d?`fa-rotate-right`:`fa-play`}`}):(0,h.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`})})}):null,g?(0,h.jsx)(`div`,{className:`lp-center`,children:(0,h.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin lp-spinner`})}):null]}),(0,h.jsxs)(`div`,{className:`lp-bar`,onClick:e=>e.stopPropagation(),children:[(0,h.jsx)(`input`,{className:`lp-seek`,type:`range`,min:0,max:T||0,step:.1,value:y,onMouseDown:$,onTouchStart:$,onChange:ne,onMouseUp:re,onTouchEnd:re,style:{"--lp-progress":`${se}%`},"aria-label":`Seek`}),(0,h.jsxs)(`div`,{className:`lp-controls`,children:[(0,h.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:Z,"aria-label":l?`Pause`:`Play`,children:(0,h.jsx)(`i`,{className:`fa-solid ${l?`fa-pause`:`fa-play`}`})}),(0,h.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:()=>Q(-10),"aria-label":`Back 10 seconds`,children:(0,h.jsx)(`i`,{className:`fa-solid fa-rotate-left`})}),(0,h.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:()=>Q(10),"aria-label":`Forward 10 seconds`,children:(0,h.jsx)(`i`,{className:`fa-solid fa-rotate-right`})}),(0,h.jsxs)(`span`,{className:`lp-time`,children:[S(y),` `,(0,h.jsx)(`span`,{className:`lp-time-sep`,children:`/`}),` `,S(T)]}),(0,h.jsxs)(`div`,{className:`lp-volume`,children:[(0,h.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:ee,"aria-label":k?`Unmute`:`Mute`,children:(0,h.jsx)(`i`,{className:`fa-solid ${k||D===0?`fa-volume-xmark`:`fa-volume-high`}`})}),(0,h.jsx)(`input`,{className:`lp-vol-range`,type:`range`,min:0,max:100,value:k?0:D,onChange:ie,style:{"--lp-progress":`${k?0:D}%`},"aria-label":`Volume`})]}),(0,h.jsx)(`div`,{className:`lp-menu-wrap`,children:(0,h.jsx)(`button`,{ref:K,type:`button`,className:`lp-btn lp-rate`,onClick:()=>B(e=>!e),"aria-label":`Video quality`,"aria-expanded":z,children:x(L)})}),(0,h.jsxs)(`button`,{type:`button`,className:`lp-btn lp-rate`,onClick:oe,"aria-label":`Playback speed`,children:[j,`x`]}),(0,h.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:te,"aria-label":`Fullscreen`,children:(0,h.jsx)(`i`,{className:`fa-solid ${N?`fa-compress`:`fa-expand`}`})})]})]}),t?(0,h.jsx)(`span`,{className:`sr-only`,children:t}):null,z&&V?(0,m.createPortal)((0,h.jsxs)(`div`,{className:`lp-portal-menu`,style:{left:V.left,bottom:V.bottom,maxHeight:V.maxHeight},onClick:e=>e.stopPropagation(),children:[(0,h.jsx)(`button`,{type:`button`,className:`lp-menu-item ${L===`auto`?`is-active`:``}`,onClick:()=>ae(`auto`),children:`Auto`}),F.map(e=>(0,h.jsx)(`button`,{type:`button`,className:`lp-menu-item ${L===e?`is-active`:``}`,onClick:()=>ae(e),children:x(e)},e)),F.length?null:(0,h.jsx)(`span`,{className:`lp-menu-empty`,children:`Play to load`})]}),N&&n.current||document.body):null]})}var w=`
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
`,T=`courseId`;function E(e){return!!(e.expiry_date&&new Date(e.expiry_date)<new Date)}function D(){let{institute:e,profile:t,membership:a}=l(),u=c(t?.current_level),f=a?.id||t?.membership_id||null,[m,g]=(0,p.useState)({courses:[],sections:[],lessons:[],assignedCourseIds:[],accessRequests:[]}),[_,v]=(0,p.useState)(()=>F()),[y,b]=(0,p.useState)(null),[x,S]=(0,p.useState)(``),[C,w]=(0,p.useState)(!1),[T,D]=(0,p.useState)(!0),[A,j]=(0,p.useState)(null),[N,P]=(0,p.useState)(null);async function z(){D(!0),j(null);let t=await i(e?.id,f);g(t.data),v(e=>e&&t.data.courses.some(t=>t.id===e)?e:null),b(null),S(``),j(t.error),D(!1)}(0,p.useEffect)(()=>((async()=>{await z()})(),()=>{}),[e?.id,f]);function B(e){return m.assignedCourseIds.includes(e.id)}function V(e){return E(e)?!1:B(e)?!0:e.access_mode===`approval_required`?!1:d(e.level,u)}function H(e){return m.accessRequests.find(t=>t.course_id===e.id)?.status??null}async function U(e){P(e.id);let t=await s(e.id);if(P(null),t.error){j(t.error);return}await z()}(0,p.useEffect)(()=>{function e(){v(F()),b(null),S(``)}return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]);let W=m.courses,G=W.find(e=>e.id===_&&V(e));(0,p.useEffect)(()=>(document.body.classList.toggle(`recorded-player-focus`,!!G),()=>document.body.classList.remove(`recorded-player-focus`)),[G]);let K=(0,p.useMemo)(()=>m.sections.filter(e=>e.course_id===_),[m.sections,_]);async function q(e){if(b(e),S(``),e.lesson_type===`external_video`){S(e.metadata?.external_url||``);return}w(!0);let t=await n(e.asset_id);if(w(!1),t.error){j(t.error),b(null);return}S(t.data.downloadUrl)}return(0,h.jsxs)(`div`,{className:`page-wrap recorded-page ${G?`recorded-page-focus`:``}`,style:{paddingTop:G?`calc(var(--nav-h) + 8px)`:`calc(var(--nav-h) + 20px)`},children:[(0,h.jsx)(`style`,{children:R}),(0,h.jsx)(r,{}),(0,h.jsxs)(`div`,{className:`recorded-container ${G?`recorded-container-focus`:``}`,style:{...L.container,...G?L.containerFocus:{}},children:[G?null:(0,h.jsxs)(`div`,{className:`recorded-header-banner premium-banner`,style:{position:`relative`,overflow:`hidden`,borderRadius:`26px`,padding:`32px 24px`,border:`1px solid rgba(255, 255, 255, 0.82)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`20px`,marginBottom:`8px`},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,minWidth:0},children:[(0,h.jsx)(`span`,{className:`setup-badge`,style:{background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`inline-block`,alignSelf:`flex-start`,margin:0},children:`Video Course`}),(0,h.jsx)(`h1`,{style:{fontFamily:`Sora, sans-serif`,fontSize:`2.2rem`,fontWeight:`900`,color:`var(--dark-blue)`,margin:0},children:`Video Library`}),(0,h.jsx)(`p`,{style:{color:`var(--text-light)`,fontSize:`1.05rem`,fontWeight:`500`,margin:0,lineHeight:1.4},children:`Choose a recorded course, then watch its videos.`})]}),(0,h.jsx)(o,{variant:`recordings-banner`,size:300})]}),T?(0,h.jsx)(M,{icon:`fa-circle-notch fa-spin`,title:`Loading recorded lectures...`,fill:!0}):null,A?(0,h.jsx)(M,{icon:`fa-triangle-exclamation`,title:A.message,tone:`error`,fill:!0}):null,!T&&!A&&!W.length?(0,h.jsx)(M,{variant:`recordings-empty`,title:`No recorded courses assigned yet.`,subtitle:`Your recorded lectures will show up here once assigned.`,fill:!0}):null,!T&&!A&&W.length&&!G?(0,h.jsx)(O,{courses:W,sections:m.sections,lessons:m.lessons,isCourseUnlocked:V,isCourseExpired:E,accessRequestStatus:H,requestingCourseId:N,onRequestAccess:U,onOpenCourse:e=>{v(e),I(e)}}):null,!T&&!A&&G?(0,h.jsx)(k,{course:G,sections:K,lessons:m.lessons,activeLesson:y,playerUrl:x,playerLoading:C,onBack:()=>{v(null),b(null),S(``),I(null)},onOpenLesson:q}):null]})]})}function O({courses:e,sections:t,lessons:n,isCourseUnlocked:r,isCourseExpired:i,accessRequestStatus:a,requestingCourseId:o,onRequestAccess:s,onOpenCourse:c}){return(0,h.jsx)(`div`,{className:`ytc-grid`,children:e.map(e=>{let l=r(e),u=i(e),d=a(e),p=t.filter(t=>t.course_id===e.id),m=p.flatMap(e=>n.filter(t=>t.section_id===e.id)),g=m.map(j).find(Boolean),_=l?()=>c(e.id):void 0,v=o===e.id,y=null;return l||(y=u?(0,h.jsx)(`button`,{className:`ytc-btn`,disabled:!0,children:`Access expired`}):d===`pending`?(0,h.jsx)(`button`,{className:`ytc-btn`,disabled:!0,children:`Request pending`}):(0,h.jsx)(`button`,{className:`ytc-btn ytc-btn-primary`,disabled:v,onClick:()=>s(e),children:v?`Sending…`:d===`rejected`?`Denied — ask again`:`Request access`})),(0,h.jsxs)(`article`,{className:`ytc-card ${l?``:`ytc-card-locked`}`,children:[(0,h.jsxs)(`div`,{className:`ytc-thumb`,onClick:_,children:[g?(0,h.jsx)(`img`,{src:g,alt:``,loading:`lazy`}):(0,h.jsx)(`i`,{className:`fa-solid fa-circle-play ytc-thumb-icon`}),(0,h.jsxs)(`span`,{className:`ytc-count`,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-list`}),m.length,` videos`]}),(0,h.jsxs)(`span`,{className:`ytc-hover`,children:[(0,h.jsx)(`i`,{className:`fa-solid ${l?`fa-play`:`fa-lock`}`}),l?`Play all`:`Locked`]})]}),(0,h.jsxs)(`div`,{className:`ytc-info`,children:[(0,h.jsx)(`div`,{className:`ytc-avatar`,children:(0,h.jsx)(`i`,{className:`fa-solid fa-graduation-cap`})}),(0,h.jsxs)(`div`,{className:`ytc-text`,children:[(0,h.jsx)(`h2`,{className:`ytc-title`,onClick:_,children:e.title}),(0,h.jsxs)(`p`,{className:`ytc-meta`,children:[f(e.level,`Course`),` · `,p.length,` sections`]}),(0,h.jsx)(`p`,{className:`ytc-desc`,children:e.description||N(e.recorded_lecture_course_batches)}),e.expiry_date?(0,h.jsxs)(`p`,{className:`ytc-meta ${u?`ytc-expired`:``}`,children:[u?`Access expired `:`Access until `,new Date(e.expiry_date).toLocaleDateString()]}):null,y]})]})]},e.id)})})}function k({course:e,sections:t,lessons:n,activeLesson:r,playerUrl:i,playerLoading:a,onBack:o,onOpenLesson:s}){let c=new Set(t.map(e=>e.id)),l=t.flatMap(e=>n.filter(t=>t.section_id===e.id)),u=l[0]||n.find(e=>c.has(e.section_id)),d=r?l.findIndex(e=>e.id===r.id):-1,m=d>0?l[d-1]:null,g=d>=0?l[d+1]||null:u||null,_=r?t.find(e=>e.id===r.section_id):null,[v,y]=(0,p.useState)(!1),[b,x]=(0,p.useState)(!1);(0,p.useEffect)(()=>{!r&&u&&s(u)},[e.id]);let S=e.description||N(e.recorded_lecture_course_batches);return(0,h.jsxs)(`div`,{className:`yt-watch`,children:[(0,h.jsxs)(`div`,{className:`yt-primary`,children:[(0,h.jsx)(`div`,{className:`yt-player`,children:(0,h.jsx)(A,{lesson:r,playerUrl:i,loading:a,onStartFirst:u?()=>s(u):null})}),(0,h.jsx)(`h1`,{className:`yt-title`,children:r?r.title:e.title}),(0,h.jsxs)(`div`,{className:`yt-owner-row`,children:[(0,h.jsxs)(`div`,{className:`yt-owner`,children:[(0,h.jsx)(`div`,{className:`yt-avatar`,children:(0,h.jsx)(`i`,{className:`fa-solid fa-graduation-cap`})}),(0,h.jsxs)(`div`,{className:`yt-owner-text`,children:[(0,h.jsx)(`strong`,{children:e.title}),(0,h.jsxs)(`span`,{children:[f(e.level,`Course`),` · `,l.length,` videos`]})]})]}),(0,h.jsxs)(`div`,{className:`yt-actions`,children:[(0,h.jsxs)(`button`,{className:`yt-pill`,onClick:o,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),(0,h.jsx)(`span`,{children:`All courses`})]}),(0,h.jsxs)(`button`,{className:`yt-pill`,disabled:!m,onClick:()=>m&&s(m),children:[(0,h.jsx)(`i`,{className:`fa-solid fa-backward-step`}),(0,h.jsx)(`span`,{children:`Previous`})]}),(0,h.jsxs)(`button`,{className:`yt-pill yt-pill-primary`,disabled:!g,onClick:()=>g&&s(g),children:[(0,h.jsx)(`span`,{children:r?`Next`:`Start`}),(0,h.jsx)(`i`,{className:`fa-solid fa-forward-step`})]})]})]}),(0,h.jsxs)(`div`,{className:`yt-desc ${b?`yt-desc-open`:``}`,onClick:()=>x(e=>!e),children:[(0,h.jsxs)(`div`,{className:`yt-desc-meta`,children:[_?(0,h.jsx)(`span`,{children:_.title}):null,(0,h.jsxs)(`span`,{children:[t.length,` sections`]}),r?(0,h.jsx)(`span`,{children:r.lesson_type===`external_video`?`Online video`:`Class video`}):null,e.expiry_date?(0,h.jsxs)(`span`,{children:[`Access until `,new Date(e.expiry_date).toLocaleDateString()]}):null]}),(0,h.jsx)(`p`,{children:S}),(0,h.jsx)(`button`,{className:`yt-desc-toggle`,type:`button`,children:b?`Show less`:`...more`})]})]}),(0,h.jsxs)(`button`,{className:`yt-list-toggle`,onClick:()=>y(!0),children:[(0,h.jsx)(`i`,{className:`fa-solid fa-list`}),`Lessons`]}),v?(0,h.jsx)(`div`,{className:`yt-list-backdrop`,onClick:()=>y(!1)}):null,(0,h.jsxs)(`aside`,{className:`yt-playlist ${v?`yt-playlist-open`:``}`,children:[(0,h.jsxs)(`div`,{className:`yt-playlist-head`,children:[(0,h.jsxs)(`div`,{style:{minWidth:0},children:[(0,h.jsx)(`h2`,{children:e.title}),(0,h.jsxs)(`span`,{children:[`Playlist · `,d>=0?d+1:0,` / `,l.length]})]}),(0,h.jsx)(`button`,{className:`yt-list-close`,onClick:()=>y(!1),"aria-label":`Close lessons`,children:(0,h.jsx)(`i`,{className:`fa-solid fa-xmark`})})]}),(0,h.jsx)(`div`,{className:`yt-playlist-body`,children:t.map(e=>{let t=n.filter(t=>t.section_id===e.id);return(0,h.jsxs)(`section`,{className:`yt-section`,children:[(0,h.jsx)(`h3`,{className:`yt-section-title`,children:e.title}),t.length?t.map(e=>{let t=r?.id===e.id,n=l.findIndex(t=>t.id===e.id)+1,i=j(e);return(0,h.jsxs)(`button`,{className:`yt-item ${t?`yt-item-active`:``}`,onClick:()=>{s(e),y(!1)},children:[(0,h.jsx)(`span`,{className:`yt-item-index`,children:t?(0,h.jsx)(`i`,{className:`fa-solid fa-play`}):n}),(0,h.jsxs)(`span`,{className:`yt-thumb`,children:[i?(0,h.jsx)(`img`,{src:i,alt:``,loading:`lazy`}):(0,h.jsx)(`i`,{className:`fa-solid fa-circle-play`}),t?(0,h.jsx)(`span`,{className:`yt-thumb-now`,children:`Now playing`}):null]}),(0,h.jsxs)(`span`,{className:`yt-item-text`,children:[(0,h.jsx)(`strong`,{children:e.title}),(0,h.jsx)(`small`,{children:e.lesson_type===`external_video`?`Online video`:`Class video`})]})]},e.id)}):(0,h.jsx)(`p`,{className:`yt-empty`,children:`No videos in this section yet.`})]},e.id)})})]})]})}function A({lesson:e,playerUrl:t,loading:n,onStartFirst:r}){let i=e?.lesson_type===`external_video`?P(t):null;return e?(0,h.jsx)(`div`,{className:`yt-frame`,children:n?(0,h.jsxs)(`div`,{className:`yt-frame-msg`,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,h.jsx)(`h2`,{children:`Getting your video ready`})]}):i?.provider===`youtube`?(0,h.jsx)(C,{videoId:i.id,title:e.title}):i?.provider===`vimeo`?(0,h.jsx)(`iframe`,{title:e.title,src:`https://player.vimeo.com/video/${i.id}?title=0&byline=0&portrait=0`,style:L.iframe,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0}):e.lesson_type===`external_video`?(0,h.jsxs)(`div`,{className:`yt-frame-msg`,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-up-right-from-square`}),(0,h.jsx)(`h2`,{children:`This video opens on another site`}),(0,h.jsx)(`button`,{className:`btn btn-primary`,onClick:()=>window.open(t,`_blank`,`noopener,noreferrer`),children:`Open Video`})]}):(0,h.jsx)(`video`,{src:t,controls:!0,controlsList:`nodownload`,style:L.video})}):(0,h.jsx)(`div`,{className:`yt-frame yt-frame-empty`,children:(0,h.jsxs)(`div`,{className:`yt-frame-msg`,children:[(0,h.jsx)(`i`,{className:`fa-solid fa-circle-play`,style:{fontSize:`3.5rem`,color:`var(--gold)`}}),(0,h.jsx)(`h2`,{children:`Pick a video to start learning`}),(0,h.jsx)(`p`,{children:`Lessons will play here, inside your classroom.`}),r?(0,h.jsx)(`button`,{className:`g-btn g-btn-p`,style:{padding:`12px 28px`,fontSize:`0.95rem`},onClick:r,children:`Start First Video`}):null]})})}function j(e){if(e.lesson_type!==`external_video`)return null;let t=P(e.metadata?.external_url);return t?.provider===`youtube`?`https://i.ytimg.com/vi/${t.id}/mqdefault.jpg`:null}function M({icon:e,title:t,subtitle:n,tone:r,fill:i,variant:a}){return i?(0,h.jsxs)(`div`,{style:{...L.state,...r===`error`?L.error:{},...L.stateFill},children:[a?(0,h.jsx)(o,{variant:a,size:420}):(0,h.jsx)(`div`,{style:L.illustrationCore,children:(0,h.jsx)(`i`,{className:`fa-solid ${e}`})}),(0,h.jsxs)(`div`,{style:L.stateFillText,children:[(0,h.jsx)(`span`,{style:L.stateFillTitle,children:t}),n?(0,h.jsx)(`p`,{style:L.stateFillSubtitle,children:n}):null]})]}):(0,h.jsxs)(`div`,{style:{...L.state,...r===`error`?L.error:{}},children:[(0,h.jsx)(`i`,{className:`fa-solid ${e}`}),(0,h.jsx)(`span`,{children:t})]})}function N(e=[]){let t=e.map(e=>e.batches?.name).filter(Boolean);return t.length?t.join(`, `):`Assigned course`}function P(e){if(!e)return null;try{let t=new URL(e);if(t.hostname.includes(`youtube.com`)){let e=t.searchParams.get(`v`)||t.pathname.split(`/`).filter(Boolean).pop();return e?{provider:`youtube`,id:e}:null}if(t.hostname.includes(`youtu.be`)){let e=t.pathname.replace(`/`,``);return e?{provider:`youtube`,id:e}:null}if(t.hostname.includes(`vimeo.com`)){let e=t.pathname.split(`/`).filter(Boolean)[0];return e?{provider:`vimeo`,id:e}:null}}catch{return null}return null}function F(){return new URLSearchParams(window.location.search).get(T)}function I(e){let t=new URL(window.location.href);e?t.searchParams.set(T,e):t.searchParams.delete(T);let n=`${t.pathname}${t.search}${t.hash}`;n!==`${window.location.pathname}${window.location.search}${window.location.hash}`&&window.history.pushState({courseId:e},``,n)}var L={container:{width:`100%`,display:`flex`,flexDirection:`column`,gap:24,padding:`20px 28px 60px`,boxSizing:`border-box`},containerFocus:{width:`100%`,gap:8,padding:`20px 28px 60px`,boxSizing:`border-box`},title:{fontFamily:`Sora, sans-serif`,fontSize:`2.4rem`,color:`var(--dark-blue)`,marginBottom:8},subtitle:{color:`var(--text-light)`,fontSize:`1.05rem`,fontWeight:600},courseGrid:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(280px, 1fr))`,gap:20},courseCard:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,overflow:`hidden`,boxShadow:`var(--shadow)`,display:`flex`,flexDirection:`column`},courseThumb:{height:150,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:42},courseCardBody:{padding:18,display:`flex`,flexDirection:`column`,gap:14,flex:1},courseCardTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.1rem`,lineHeight:1.3},courseStats:{display:`flex`,justifyContent:`space-between`,gap:10,color:`var(--text-light)`,fontSize:`0.8rem`,fontWeight:800},openButton:{width:`100%`,textAlign:`center`,marginTop:`auto`},detailWrap:{display:`flex`,flexDirection:`column`,gap:14},backButton:{width:`fit-content`,border:`1px solid var(--border)`,background:`var(--card-bg)`,color:`var(--primary-blue)`,borderRadius:999,padding:`10px 16px`,fontWeight:800,display:`inline-flex`,alignItems:`center`,gap:8,cursor:`pointer`},lessonPanel:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:16,boxShadow:`var(--shadow)`},panelHeader:{display:`flex`,justifyContent:`space-between`,gap:16,marginBottom:12,flexWrap:`wrap`},courseHeading:{marginBottom:24,paddingBottom:16,borderBottom:`1px solid var(--border)`},panelTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.4rem`},countPill:{alignSelf:`flex-start`,background:`var(--light-blue)`,color:`var(--primary-blue)`,borderRadius:999,padding:`7px 12px`,fontSize:`0.78rem`,fontWeight:900},watchLayout:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 460px`,gap:10,alignItems:`start`},playerCard:{minWidth:0},playlistCard:{background:`rgba(255,255,255,0.45)`,border:`1px solid var(--border)`,borderRadius:16,padding:14,maxHeight:620,overflowY:`auto`,alignSelf:`start`},playlistHeader:{display:`flex`,justifyContent:`flex-end`,marginBottom:10},playerFrame:{width:`100%`,aspectRatio:`16 / 8.4`,maxHeight:`calc(100vh - var(--nav-h) - 190px)`,borderRadius:18,overflow:`hidden`,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,border:`1px solid var(--border)`,display:`flex`,alignItems:`center`,justifyContent:`center`},video:{width:`100%`,height:`100%`,display:`block`,background:`#000`},iframe:{width:`100%`,height:`100%`,border:0,display:`block`,background:`#000`},playerEmpty:{minHeight:260,color:`white`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,textAlign:`center`,gap:12,padding:24},playerButton:{marginTop:6},nowPlaying:{marginTop:14,background:`rgba(255,255,255,0.65)`,border:`1px solid var(--border)`,borderRadius:14,padding:14},nowBadge:{display:`inline-block`,color:`var(--primary-blue)`,fontWeight:900,fontSize:`0.72rem`,textTransform:`uppercase`,marginBottom:5},nowTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.1rem`},section:{borderTop:`1px solid var(--border)`,paddingTop:18,marginTop:18},sectionTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.22rem`,marginBottom:12},lesson:{width:`100%`,border:`1px solid var(--border)`,background:`rgba(255,255,255,0.7)`,borderRadius:14,padding:16,display:`flex`,alignItems:`center`,gap:14,cursor:`pointer`,marginBottom:12,color:`var(--dark-blue)`,fontSize:`1rem`},lessonActive:{background:`var(--light-blue)`,borderColor:`var(--primary-blue)`},lessonIcon:{width:38,height:38,borderRadius:12,background:`var(--primary-blue)`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,fontWeight:900},lessonText:{flex:1,textAlign:`left`,minWidth:0,lineHeight:1.25},meta:{color:`var(--text-light)`,fontSize:`0.95rem`,fontWeight:700,display:`block`},state:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:16,padding:20,display:`flex`,alignItems:`center`,gap:12,color:`var(--dark-blue)`,fontWeight:800},error:{color:`#b91c1c`,borderColor:`#fecaca`,background:`#fff5f5`},stateFill:{flex:1,minHeight:`45vh`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:8,textAlign:`center`},stateFillText:{display:`flex`,flexDirection:`column`,gap:6,maxWidth:420},stateFillTitle:{fontFamily:`Sora, sans-serif`,fontSize:`1.2rem`,color:`var(--dark-blue)`},stateFillSubtitle:{margin:0,color:`var(--text-light)`,fontWeight:600,fontSize:`0.95rem`,lineHeight:1.4},illustrationCore:{width:84,height:84,borderRadius:`50%`,background:`linear-gradient(135deg, var(--light-blue), color-mix(in srgb, var(--primary-blue) 14%, white))`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:30,boxShadow:`0 10px 24px color-mix(in srgb, var(--primary-blue) 18%, transparent)`}},R=`
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

  /* Phones in landscape: short viewport, so keep player + playlist side by side
     and size everything off the viewport height. */
  .recorded-list-toggle,
  .recorded-list-close,
  .recorded-list-backdrop {
    display: none;
  }

  @media (orientation: landscape) and (max-height: 500px) {
    .recorded-list-toggle {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      position: fixed;
      right: 12px;
      bottom: 12px;
      z-index: 60;
      border: 0;
      border-radius: 999px;
      padding: 8px 14px;
      background: var(--primary-blue);
      color: #fff;
      font-weight: 800;
      font-size: 0.78rem;
      box-shadow: var(--shadow);
      cursor: pointer;
    }

    .recorded-list-backdrop {
      display: block;
      position: fixed;
      inset: 0;
      z-index: 70;
      background: rgba(0, 0, 0, 0.35);
    }

    .recorded-list-close {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: auto;
      width: 28px;
      height: 28px;
      border: 1px solid var(--border);
      border-radius: 50%;
      background: var(--card-bg);
      color: var(--dark-blue);
      cursor: pointer;
    }

    .recorded-page {
      padding-top: calc(var(--nav-h) + 8px) !important;
      padding-bottom: 12px !important;
    }

    .recorded-container {
      width: 100% !important;
      padding: 0 12px !important;
      gap: 10px !important;
    }

    .recorded-detail {
      gap: 8px !important;
    }

    .recorded-back {
      padding: 6px 12px !important;
      font-size: 0.8rem !important;
    }

    .recorded-panel {
      padding: 10px !important;
      border-radius: 14px !important;
    }

    .recorded-course-heading {
      margin-bottom: 10px !important;
      padding-bottom: 8px !important;
    }

    .recorded-panel-title {
      font-size: 1.1rem !important;
      margin: 0 !important;
    }

    .recorded-watch-layout {
      display: grid !important;
      grid-template-columns: minmax(0, 1fr) !important;
      gap: 10px !important;
      align-items: start !important;
    }

    .recorded-player-card {
      width: auto !important;
      max-width: calc((100dvh - var(--nav-h) - 40px) * 16 / 9);
      margin: 0 auto;
    }

    .recorded-player-frame {
      aspect-ratio: 16 / 9 !important;
      max-height: calc(100vh - var(--nav-h) - 40px) !important;
      max-height: calc(100dvh - var(--nav-h) - 40px) !important;
      border-radius: 12px !important;
    }

    .recorded-player-empty {
      min-height: 0 !important;
      padding: 12px !important;
      gap: 6px !important;
    }

    .recorded-player-empty h2 {
      font-size: 1rem !important;
    }

    .recorded-player-empty i {
      font-size: 2rem !important;
    }

    .recorded-now-playing {
      margin-top: 8px !important;
      padding: 8px 10px !important;
    }

    .recorded-course-heading p {
      font-size: 0.72rem !important;
      margin: 2px 0 0 !important;
    }

    .recorded-back {
      padding: 4px 10px !important;
      font-size: 0.7rem !important;
    }

    .recorded-panel-title {
      font-size: 0.95rem !important;
    }

    .recorded-now-playing h2 {
      font-size: 0.85rem !important;
    }

    .recorded-section {
      padding-top: 8px !important;
      margin-top: 8px !important;
    }

    .recorded-section-title {
      font-size: 0.85rem !important;
      margin: 0 0 6px !important;
    }

    .recorded-lesson {
      padding: 6px 8px !important;
      gap: 8px !important;
      font-size: 0.78rem !important;
    }

    .recorded-lesson > span:first-child {
      width: 26px !important;
      height: 26px !important;
      min-width: 26px !important;
      font-size: 0.7rem !important;
    }

    .recorded-lesson small {
      font-size: 0.66rem !important;
    }

    .recorded-playlist > div:first-child > span {
      font-size: 0.66rem !important;
      padding: 4px 8px !important;
    }

    .recorded-playlist {
      position: fixed !important;
      top: 0 !important;
      right: 0 !important;
      bottom: 0 !important;
      z-index: 80 !important;
      width: min(320px, 70vw) !important;
      max-height: none !important;
      margin: 0 !important;
      padding: 10px !important;
      border-radius: 14px 0 0 14px !important;
      background: var(--card-bg) !important;
      overflow-y: auto !important;
      transform: translateX(105%);
      transition: transform 0.25s ease;
    }

    .recorded-playlist-open {
      transform: translateX(0);
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

  /* ─── YouTube-style watch page ─── */
  .yt-watch {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 402px;
    gap: 24px;
    align-items: start;
    max-width: 1720px;
    width: 100%;
    margin: 0 auto;
  }
  .yt-primary { min-width: 0; }

  .yt-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    max-height: calc(100vh - var(--nav-h) - 210px);
    max-height: calc(100dvh - var(--nav-h) - 210px);
    border-radius: 12px;
    overflow: hidden;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .yt-frame > * { width: 100%; height: 100%; }
  .yt-frame-empty {
    background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue));
  }
  .yt-frame .yt-frame-msg {
    height: auto;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    padding: 24px;
  }
  .yt-frame-msg h2 { margin: 0; font-family: Sora, sans-serif; font-weight: 800; font-size: 1.25rem; }
  .yt-frame-msg p { margin: 0; opacity: 0.85; font-weight: 600; }
  .yt-frame-msg button { width: auto !important; }
  .yt-frame-msg i { font-size: 2.6rem; }

  .yt-title {
    margin: 14px 0 0;
    font-family: Sora, sans-serif;
    font-size: 1.3rem;
    font-weight: 800;
    line-height: 1.35;
    color: var(--dark-blue);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .yt-owner-row {
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .yt-owner { display: flex; align-items: center; gap: 12px; min-width: 0; }
  .yt-avatar {
    width: 42px; height: 42px; border-radius: 50%;
    flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue));
    color: #fff; font-size: 1.05rem;
  }
  .yt-owner-text { display: flex; flex-direction: column; min-width: 0; line-height: 1.3; }
  .yt-owner-text strong {
    color: var(--dark-blue); font-size: 1rem;
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .yt-owner-text span { color: var(--text-light); font-size: 0.8rem; font-weight: 600; }

  .yt-actions { display: flex; gap: 8px; flex-wrap: wrap; }
  .yt-pill {
    display: inline-flex; align-items: center; gap: 8px;
    height: 36px; padding: 0 16px;
    border: 0; border-radius: 999px;
    background: color-mix(in srgb, var(--dark-blue) 7%, transparent);
    color: var(--dark-blue);
    font-weight: 700; font-size: 0.86rem;
    cursor: pointer;
    transition: background 0.15s ease;
  }
  .yt-pill:hover:not(:disabled) { background: color-mix(in srgb, var(--dark-blue) 13%, transparent); }
  .yt-pill:disabled { opacity: 0.4; cursor: not-allowed; }
  .yt-pill-primary { background: var(--dark-blue); color: #fff; }
  .yt-pill-primary:hover:not(:disabled) { background: var(--primary-blue); }

  .yt-desc {
    margin-top: 12px;
    padding: 12px 14px;
    border-radius: 12px;
    background: color-mix(in srgb, var(--dark-blue) 6%, transparent);
    cursor: pointer;
    transition: background 0.15s ease;
  }
  .yt-desc:hover { background: color-mix(in srgb, var(--dark-blue) 10%, transparent); }
  .yt-desc-meta {
    display: flex; flex-wrap: wrap; gap: 4px 12px;
    font-weight: 800; font-size: 0.86rem; color: var(--dark-blue);
  }
  .yt-desc p {
    margin: 6px 0 0;
    color: var(--dark-blue);
    font-size: 0.9rem;
    line-height: 1.5;
    white-space: pre-wrap;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .yt-desc-open p { -webkit-line-clamp: unset; display: block; }
  .yt-desc-toggle {
    margin-top: 4px; padding: 0; border: 0; background: none;
    font-weight: 800; font-size: 0.86rem; color: var(--dark-blue); cursor: pointer;
  }

  /* Playlist panel */
  .yt-playlist {
    border: 1px solid var(--border);
    border-radius: 12px;
    background: var(--card-bg);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - var(--nav-h) - 40px);
    max-height: calc(100dvh - var(--nav-h) - 40px);
    position: sticky;
    top: calc(var(--nav-h) + 12px);
  }
  .yt-playlist-head {
    display: flex; align-items: flex-start; justify-content: space-between; gap: 10px;
    padding: 14px 16px 12px;
    background: color-mix(in srgb, var(--dark-blue) 5%, transparent);
    border-bottom: 1px solid var(--border);
  }
  .yt-playlist-head h2 {
    margin: 0; font-family: Sora, sans-serif; font-size: 1.05rem; font-weight: 800;
    color: var(--dark-blue);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .yt-playlist-head span { color: var(--text-light); font-size: 0.78rem; font-weight: 700; }
  .yt-playlist-body { overflow-y: auto; padding: 4px 0 8px; }

  .yt-section-title {
    margin: 0; padding: 12px 16px 6px;
    font-size: 0.74rem; font-weight: 900; letter-spacing: 0.6px;
    text-transform: uppercase; color: var(--text-light);
  }
  .yt-empty { margin: 0; padding: 4px 16px 8px; color: var(--text-light); font-size: 0.82rem; }

  .yt-item {
    width: 100%;
    display: flex; align-items: center; gap: 8px;
    padding: 6px 12px 6px 4px;
    border: 0; background: transparent;
    text-align: left; cursor: pointer;
    color: var(--dark-blue);
  }
  .yt-item:hover { background: color-mix(in srgb, var(--dark-blue) 6%, transparent); }
  .yt-item-active,
  .yt-item-active:hover { background: color-mix(in srgb, var(--primary-blue) 12%, transparent); }
  .yt-item-index {
    width: 24px; flex-shrink: 0;
    text-align: center; font-size: 0.74rem; font-weight: 700; color: var(--text-light);
  }
  .yt-item-active .yt-item-index { color: var(--primary-blue); }
  .yt-thumb {
    position: relative;
    width: 120px; aspect-ratio: 16 / 9; flex-shrink: 0;
    border-radius: 8px; overflow: hidden;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue));
    color: rgba(255, 255, 255, 0.9); font-size: 1.3rem;
  }
  .yt-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .yt-thumb-now {
    position: absolute; inset: auto 0 0 0;
    padding: 2px 0;
    background: rgba(0, 0, 0, 0.72); color: #fff;
    font-size: 0.62rem; font-weight: 800; text-align: center; text-transform: uppercase;
  }
  .yt-item-text { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
  .yt-item-text strong {
    font-size: 0.86rem; font-weight: 700; line-height: 1.3;
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
  }
  .yt-item-text small { font-size: 0.74rem; color: var(--text-light); font-weight: 600; }

  .yt-list-toggle, .yt-list-close, .yt-list-backdrop { display: none; }

  @media (max-width: 1100px) {
    .yt-watch { grid-template-columns: minmax(0, 1fr) 340px; gap: 18px; }
    .yt-thumb { width: 100px; }
  }

  /* Stacked: player on top, playlist below (like YouTube mobile) */
  @media (max-width: 900px) {
    .yt-watch { display: flex; flex-direction: column; align-items: stretch; gap: 14px; }
    .yt-playlist { position: static; max-height: none; width: 100%; }
    .yt-frame { max-height: none; }
    .yt-playlist .yt-list-close { display: none; }
    .yt-frame-empty { aspect-ratio: auto; min-height: 230px; }
  }

  @media (max-width: 640px) {
    .recorded-page-focus .recorded-container { padding: 0 !important; }
    .yt-frame { border-radius: 0; }
    .yt-primary > :not(.yt-player) { margin-left: 12px; margin-right: 12px; }
    .yt-title { font-size: 1.05rem; }
    .yt-actions { width: 100%; }
    .yt-pill { flex: 1; justify-content: center; padding: 0 10px; font-size: 0.8rem; }
    .yt-playlist { border-radius: 12px; margin: 0 12px; width: auto; }
    .yt-watch { gap: 12px; }
    .yt-title { margin-top: 10px; font-size: 1rem; }
    .yt-owner-row { margin-top: 8px; gap: 10px; }
    .yt-avatar { width: 34px; height: 34px; font-size: 0.85rem; }
    .yt-owner-text strong { font-size: 0.9rem; }
    .yt-owner-text span { font-size: 0.74rem; }
    .yt-actions { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; }
    .yt-pill { height: 34px; padding: 0 8px; gap: 6px; font-size: 0.76rem; min-width: 0; }
    .yt-pill span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .yt-desc { margin-top: 10px; padding: 10px 12px; }
    .yt-desc-meta { font-size: 0.78rem; }
    .yt-desc p { font-size: 0.82rem; }
    .yt-desc-toggle { font-size: 0.78rem; }
    .yt-playlist-head { padding: 10px 12px; }
    .yt-playlist-head h2 { font-size: 0.95rem; }
    .yt-section-title { padding: 10px 12px 4px; }
    .yt-item { padding: 6px 12px 6px 2px; }
    .yt-thumb { width: 112px; }
  }

  /* Phones in landscape: full-height player, playlist in a slide-out drawer */
  @media (orientation: landscape) and (max-height: 500px) {
    .recorded-page-focus { padding-bottom: 12px !important; }
    .yt-watch { display: block; }
    .yt-player { max-width: calc((100dvh - var(--nav-h) - 24px) * 16 / 9); margin: 0 auto; }
    .yt-frame { max-height: calc(100dvh - var(--nav-h) - 24px); border-radius: 10px; }
    .yt-frame-empty { aspect-ratio: 16 / 9; min-height: 0; }
    .yt-frame-msg { padding: 12px; gap: 6px; }
    .yt-frame-msg h2 { font-size: 1rem; }
    .yt-list-toggle {
      display: inline-flex; align-items: center; gap: 6px;
      position: fixed; right: 12px; bottom: 12px; z-index: 60;
      border: 0; border-radius: 999px; padding: 8px 14px;
      background: var(--dark-blue); color: #fff;
      font-weight: 800; font-size: 0.78rem;
      box-shadow: var(--shadow); cursor: pointer;
    }
    .yt-list-backdrop { display: block; position: fixed; inset: 0; z-index: 70; background: rgba(0, 0, 0, 0.35); }
    .yt-list-close {
      display: inline-flex; align-items: center; justify-content: center;
      width: 28px; height: 28px; flex-shrink: 0;
      border: 1px solid var(--border); border-radius: 50%;
      background: var(--card-bg); color: var(--dark-blue); cursor: pointer;
    }
    .yt-playlist {
      position: fixed; top: 0; right: 0; bottom: 0; z-index: 80;
      width: min(340px, 72vw); max-height: none;
      border-radius: 12px 0 0 12px;
      transform: translateX(105%);
      transition: transform 0.25s ease;
    }
    .yt-playlist-open { transform: translateX(0); }
    .yt-thumb { width: 84px; }
  }

  /* ─── YouTube-style course grid ─── */
  .ytc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 36px 18px;
  }
  .ytc-card { display: flex; flex-direction: column; gap: 12px; min-width: 0; animation: fadeInUp 0.4s ease both; }
  .ytc-thumb {
    position: relative;
    aspect-ratio: 16 / 9;
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue));
    transition: border-radius 0.2s ease;
  }
  .ytc-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .ytc-thumb-icon { font-size: 3rem; color: rgba(255, 255, 255, 0.85); }
  .ytc-card:hover .ytc-thumb { border-radius: 0; }
  .ytc-card-locked .ytc-thumb { cursor: default; filter: grayscale(0.6); opacity: 0.75; }
  .ytc-count {
    position: absolute; right: 8px; bottom: 8px;
    display: inline-flex; align-items: center; gap: 5px;
    padding: 3px 7px; border-radius: 6px;
    background: rgba(0, 0, 0, 0.78); color: #fff;
    font-size: 0.74rem; font-weight: 700;
  }
  .ytc-hover {
    position: absolute; inset: 0;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    background: rgba(0, 0, 0, 0.55); color: #fff;
    font-weight: 800; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px;
    opacity: 0; transition: opacity 0.2s ease;
  }
  .ytc-card:hover .ytc-hover { opacity: 1; }

  .ytc-info { display: flex; gap: 12px; align-items: flex-start; }
  .ytc-avatar {
    width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue));
    color: #fff; font-size: 0.9rem;
  }
  .ytc-text { display: flex; flex-direction: column; gap: 3px; min-width: 0; flex: 1; }
  .ytc-title {
    margin: 0; cursor: pointer;
    font-family: Sora, sans-serif; font-size: 1rem; font-weight: 800; line-height: 1.35;
    color: var(--dark-blue);
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
  }
  .ytc-card-locked .ytc-title { cursor: default; }
  .ytc-meta { margin: 0; font-size: 0.82rem; font-weight: 600; color: var(--text-light); }
  .ytc-expired { color: #b91c1c; }
  .ytc-desc {
    margin: 0; font-size: 0.8rem; line-height: 1.4; color: var(--text-light);
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
  }
  .ytc-btn {
    align-self: flex-start;
    margin-top: 8px; height: 34px; padding: 0 16px;
    border: 0; border-radius: 999px;
    background: color-mix(in srgb, var(--dark-blue) 8%, transparent);
    color: var(--dark-blue); font-weight: 700; font-size: 0.82rem;
    cursor: pointer;
  }
  .ytc-btn:disabled { opacity: 0.6; cursor: not-allowed; }
  .ytc-btn-primary { background: var(--dark-blue); color: #fff; }
  .ytc-btn-primary:hover:not(:disabled) { background: var(--primary-blue); }

  @media (max-width: 640px) {
    .ytc-grid { grid-template-columns: 1fr; gap: 24px; }
  }
`;export{D as default};