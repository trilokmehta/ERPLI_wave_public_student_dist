import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{L as t,O as n,T as r,g as i,ht as a,k as o,q as s,u as c}from"./interactive-uyPM431K.js";import{n as l}from"./react-dom-4Jyf7-Qx.js";import{n as u,t as d}from"./contentLevels-D8PMhpsV.js";var f=e(a(),1),p=e(l(),1),m=o(),h=`https://www.youtube.com/iframe_api`,g=null;function _(){return window.YT?.Player?Promise.resolve(window.YT):g||(g=new Promise(e=>{let t=window.onYouTubeIframeAPIReady;if(window.onYouTubeIframeAPIReady=()=>{t?.(),e(window.YT)},!document.querySelector(`script[src="${h}"]`)){let e=document.createElement(`script`);e.src=h,document.head.appendChild(e)}}),g)}var v={highres:`4320p`,hd2160:`2160p`,hd1440:`1440p`,hd1080:`1080p`,hd720:`720p`,large:`480p`,medium:`360p`,small:`240p`,tiny:`144p`},y=Object.keys(v);function b(e){return!e||e===`auto`?`Auto`:v[e]||e}function x(e){if(!Number.isFinite(e)||e<0)return`0:00`;let t=Math.floor(e),n=Math.floor(t/3600),r=Math.floor(t%3600/60),i=t%60;return n?`${n}:${String(r).padStart(2,`0`)}:${String(i).padStart(2,`0`)}`:`${r}:${String(i).padStart(2,`0`)}`}function S({videoId:e,title:t}){let n=(0,f.useRef)(null),r=(0,f.useRef)(null),i=(0,f.useRef)(null),a=(0,f.useRef)(!1),[o,s]=(0,f.useState)(!1),[c,l]=(0,f.useState)(!1),[u,d]=(0,f.useState)(!1),[h,g]=(0,f.useState)(!1),[v,S]=(0,f.useState)(0),[w,T]=(0,f.useState)(0),[E,D]=(0,f.useState)(100),[O,k]=(0,f.useState)(!1),[A,j]=(0,f.useState)(1),[M,N]=(0,f.useState)(!1),[P,F]=(0,f.useState)([]),[I,L]=(0,f.useState)(`auto`),[R,z]=(0,f.useState)(!1),[B,V]=(0,f.useState)(null),[ee,H]=(0,f.useState)(!0),U=(0,f.useRef)(null),W=(0,f.useRef)(null);(0,f.useEffect)(()=>{let t=!1;return s(!1),l(!1),d(!1),S(0),T(0),F([]),L(`auto`),_().then(n=>{t||!r.current||(i.current=new n.Player(r.current,{videoId:e,playerVars:{autoplay:0,controls:0,disablekb:1,fs:0,modestbranding:1,rel:0,iv_load_policy:3,playsinline:1,cc_load_policy:0,origin:window.location.origin},events:{onReady:e=>{t||(s(!0),T(e.target.getDuration()||0),D(e.target.getVolume()),k(e.target.isMuted()))},onStateChange:e=>{if(t)return;let r=e.data;l(r===n.PlayerState.PLAYING),g(r===n.PlayerState.BUFFERING),d(r===n.PlayerState.ENDED),r===n.PlayerState.PLAYING&&(T(e.target.getDuration()||0),F((e.target.getAvailableQualityLevels?.()||[]).filter(e=>y.includes(e)).sort((e,t)=>y.indexOf(e)-y.indexOf(t))))}}}))}),()=>{t=!0,i.current?.destroy?.(),i.current=null}},[e]),(0,f.useEffect)(()=>{if(!o)return;let e=window.setInterval(()=>{let e=i.current;if(!e?.getCurrentTime||a.current)return;S(e.getCurrentTime()||0);let t=e.getDuration()||0;T(e=>Math.abs(e-t)>.5?t:e)},250);return()=>window.clearInterval(e)},[o]),(0,f.useEffect)(()=>{if(!R)return;function e(){let e=W.current?.getBoundingClientRect();e&&V({left:e.right,bottom:window.innerHeight-e.top+8})}e(),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e);function t(e){e.target.closest?.(`.lp-menu-wrap, .lp-portal-menu`)||z(!1)}return document.addEventListener(`click`,t),()=>{window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e),document.removeEventListener(`click`,t)}},[R]),(0,f.useEffect)(()=>{function e(){N(document.fullscreenElement===n.current)}return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]);let G=(0,f.useCallback)(()=>{window.clearTimeout(U.current),U.current=window.setTimeout(()=>{H(e=>q.current&&!J.current?!1:e)},2600)},[]),K=(0,f.useCallback)(()=>{H(!0),G()},[G]),q=(0,f.useRef)(c),J=(0,f.useRef)(R);(0,f.useEffect)(()=>{q.current=c,J.current=R,c?K():(window.clearTimeout(U.current),H(!0))},[c,R,K]),(0,f.useEffect)(()=>()=>window.clearTimeout(U.current),[]);let Y=(0,f.useCallback)(()=>{let e=i.current;e&&(c?e.pauseVideo():e.playVideo())},[c]),X=(0,f.useCallback)(e=>{let t=i.current;if(!t?.getCurrentTime)return;let n=Math.max(0,Math.min(t.getDuration()||0,t.getCurrentTime()+e));t.seekTo(n,!0),S(n)},[]),te=(0,f.useCallback)(()=>{let e=i.current;e&&(e.isMuted()?(e.unMute(),k(!1)):(e.mute(),k(!0)))},[]),ne=(0,f.useCallback)(()=>{document.fullscreenElement===n.current?document.exitFullscreen?.():n.current?.requestFullscreen?.()},[]);function Z(){a.current=!0}function re(e){S(Number(e.target.value))}function Q(e){let t=Number(e.target.value);a.current=!1,i.current?.seekTo(t,!0)}function ie(e){let t=Number(e.target.value);D(t),i.current?.setVolume(t),t===0?(i.current?.mute(),k(!0)):O&&(i.current?.unMute(),k(!1))}function $(e){L(e),z(!1),i.current?.setPlaybackQuality?.(e)}function ae(){let e=[1,1.25,1.5,1.75,2,.75],t=e[(e.indexOf(A)+1)%e.length];j(t),i.current?.setPlaybackRate(t)}let oe=w?v/w*100:0;return(0,m.jsxs)(`div`,{className:`lp-shell ${ee?``:`lp-controls-hidden`}`,ref:n,onMouseMove:K,onMouseLeave:()=>c&&!R&&H(!1),children:[(0,m.jsx)(`style`,{children:C}),(0,m.jsxs)(`div`,{className:`lp-stage`,onClick:Y,children:[(0,m.jsx)(`div`,{className:`lp-video`,children:(0,m.jsx)(`div`,{ref:r},e)}),(!c||u)&&!h?(0,m.jsx)(`div`,{className:`lp-cover`,style:{backgroundImage:`linear-gradient(rgba(6, 12, 24, 0.45), rgba(6, 12, 24, 0.6)), url(https://i.ytimg.com/vi/${e}/maxresdefault.jpg), url(https://i.ytimg.com/vi/${e}/hqdefault.jpg)`},children:(0,m.jsx)(`button`,{type:`button`,className:`lp-big-play`,onClick:e=>{e.stopPropagation(),u&&i.current?.seekTo(0,!0),i.current?.playVideo()},"aria-label":u?`Replay`:`Play`,children:(0,m.jsx)(`i`,{className:`fa-solid ${u?`fa-rotate-right`:`fa-play`}`})})}):null,h?(0,m.jsx)(`div`,{className:`lp-center`,children:(0,m.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin lp-spinner`})}):null]}),(0,m.jsxs)(`div`,{className:`lp-bar`,onClick:e=>e.stopPropagation(),children:[(0,m.jsx)(`input`,{className:`lp-seek`,type:`range`,min:0,max:w||0,step:.1,value:v,onMouseDown:Z,onTouchStart:Z,onChange:re,onMouseUp:Q,onTouchEnd:Q,style:{"--lp-progress":`${oe}%`},"aria-label":`Seek`}),(0,m.jsxs)(`div`,{className:`lp-controls`,children:[(0,m.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:Y,"aria-label":c?`Pause`:`Play`,children:(0,m.jsx)(`i`,{className:`fa-solid ${c?`fa-pause`:`fa-play`}`})}),(0,m.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:()=>X(-10),"aria-label":`Back 10 seconds`,children:(0,m.jsx)(`i`,{className:`fa-solid fa-rotate-left`})}),(0,m.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:()=>X(10),"aria-label":`Forward 10 seconds`,children:(0,m.jsx)(`i`,{className:`fa-solid fa-rotate-right`})}),(0,m.jsxs)(`span`,{className:`lp-time`,children:[x(v),` `,(0,m.jsx)(`span`,{className:`lp-time-sep`,children:`/`}),` `,x(w)]}),(0,m.jsxs)(`div`,{className:`lp-volume`,children:[(0,m.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:te,"aria-label":O?`Unmute`:`Mute`,children:(0,m.jsx)(`i`,{className:`fa-solid ${O||E===0?`fa-volume-xmark`:`fa-volume-high`}`})}),(0,m.jsx)(`input`,{className:`lp-vol-range`,type:`range`,min:0,max:100,value:O?0:E,onChange:ie,style:{"--lp-progress":`${O?0:E}%`},"aria-label":`Volume`})]}),(0,m.jsx)(`div`,{className:`lp-menu-wrap`,children:(0,m.jsx)(`button`,{ref:W,type:`button`,className:`lp-btn lp-rate`,onClick:()=>z(e=>!e),"aria-label":`Video quality`,"aria-expanded":R,children:b(I)})}),(0,m.jsxs)(`button`,{type:`button`,className:`lp-btn lp-rate`,onClick:ae,"aria-label":`Playback speed`,children:[A,`x`]}),(0,m.jsx)(`button`,{type:`button`,className:`lp-btn`,onClick:ne,"aria-label":`Fullscreen`,children:(0,m.jsx)(`i`,{className:`fa-solid ${M?`fa-compress`:`fa-expand`}`})})]})]}),t?(0,m.jsx)(`span`,{className:`sr-only`,children:t}):null,R&&B?(0,p.createPortal)((0,m.jsxs)(`div`,{className:`lp-portal-menu`,style:{left:B.left,bottom:B.bottom},onClick:e=>e.stopPropagation(),children:[(0,m.jsx)(`button`,{type:`button`,className:`lp-menu-item ${I===`auto`?`is-active`:``}`,onClick:()=>$(`auto`),children:`Auto`}),P.map(e=>(0,m.jsx)(`button`,{type:`button`,className:`lp-menu-item ${I===e?`is-active`:``}`,onClick:()=>$(e),children:b(e)},e)),P.length?null:(0,m.jsx)(`span`,{className:`lp-menu-empty`,children:`Play to load`})]}),document.body):null]})}var C=`
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

  .lp-video,
  .lp-video > div,
  .lp-video iframe {
    position: absolute;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
    border: 0;
  }

  /* Belt and braces: the embed never receives a pointer, so YouTube's hover
     chrome and its clickable logo never activate. */
  .lp-video {
    pointer-events: none;
  }

  /* YouTube's title bar, channel name, share button, "More videos" and the
     "Watch on YouTube" logo are all anchored to the top and bottom edges of the
     iframe, and they render whether or not the player is hovered. Blowing the
     iframe up past the stage pushes those edges — and everything pinned to
     them — outside the clipped area, which is the only reliable way to be rid
     of them. The trade-off is that the outer border of the picture is cropped. */
  .lp-video iframe {
    transform: scale(1.34);
    transform-origin: center center;
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
    /* A short stage means a smaller absolute shift for the same scale, so the
       chrome needs a bigger push to clear the crop. */
    .lp-video iframe {
      transform: scale(1.5);
    }

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
`,w=`courseId`;function T(){let{institute:e,profile:a}=n(),o=i(a?.current_level),[l,d]=(0,f.useState)({courses:[],sections:[],lessons:[]}),[p,h]=(0,f.useState)(()=>P()),[g,_]=(0,f.useState)(null),[v,y]=(0,f.useState)(``),[b,x]=(0,f.useState)(!1),[S,C]=(0,f.useState)(!0),[w,T]=(0,f.useState)(null);(0,f.useEffect)(()=>{let t=!0;async function n(){C(!0),T(null);let n=await s(e?.id);t&&(d(n.data),h(e=>e&&n.data.courses.some(t=>t.id===e&&u(t.level,o))?e:null),_(null),y(``),T(n.error),C(!1))}return n(),()=>{t=!1}},[e?.id]),(0,f.useEffect)(()=>{function e(){h(P()),_(null),y(``)}return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]);let O=(0,f.useMemo)(()=>l.courses.filter(e=>u(e.level,o)),[l.courses,o]),A=O.find(e=>e.id===p);(0,f.useEffect)(()=>(document.body.classList.toggle(`recorded-player-focus`,!!A),()=>document.body.classList.remove(`recorded-player-focus`)),[A]);let j=(0,f.useMemo)(()=>l.sections.filter(e=>e.course_id===p),[l.sections,p]);async function M(e){if(_(e),y(``),e.lesson_type===`external_video`){y(e.metadata?.external_url||``);return}x(!0);let n=await t(e.asset_id);if(x(!1),n.error){T(n.error),_(null);return}y(n.data.downloadUrl)}return(0,m.jsxs)(`div`,{className:`page-wrap recorded-page ${A?`recorded-page-focus`:``}`,style:{paddingTop:A?`calc(var(--nav-h) + 8px)`:`calc(var(--nav-h) + 20px)`},children:[(0,m.jsx)(`style`,{children:L}),(0,m.jsx)(r,{}),(0,m.jsxs)(`div`,{className:`recorded-container ${A?`recorded-container-focus`:``}`,style:{...I.container,...A?I.containerFocus:{}},children:[A?null:(0,m.jsxs)(`div`,{className:`recorded-header-banner premium-banner`,style:{position:`relative`,overflow:`hidden`,borderRadius:`26px`,padding:`32px 24px`,border:`1px solid rgba(255, 255, 255, 0.82)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`20px`,marginBottom:`8px`},children:[(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,minWidth:0},children:[(0,m.jsx)(`span`,{className:`setup-badge`,style:{background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`inline-block`,alignSelf:`flex-start`,margin:0},children:`Video Course`}),(0,m.jsx)(`h1`,{style:{fontFamily:`Sora, sans-serif`,fontSize:`2.2rem`,fontWeight:`900`,color:`var(--dark-blue)`,margin:0},children:`Video Library`}),(0,m.jsx)(`p`,{style:{color:`var(--text-light)`,fontSize:`1.05rem`,fontWeight:`500`,margin:0,lineHeight:1.4},children:`Choose a recorded course, then watch its videos.`})]}),(0,m.jsx)(c,{variant:`recordings-banner`,size:300})]}),S?(0,m.jsx)(k,{icon:`fa-circle-notch fa-spin`,title:`Loading recorded lectures...`,fill:!0}):null,w?(0,m.jsx)(k,{icon:`fa-triangle-exclamation`,title:w.message,tone:`error`,fill:!0}):null,!S&&!w&&!O.length?(0,m.jsx)(k,{variant:`recordings-empty`,title:l.courses.length?`No courses for Level ${o} yet.`:`No recorded courses assigned yet.`,subtitle:l.courses.length?`More courses unlock as your level goes up.`:`Your recorded lectures will show up here once assigned.`,fill:!0}):null,!S&&!w&&O.length&&!A?(0,m.jsx)(E,{courses:O,sections:l.sections,lessons:l.lessons,onOpenCourse:e=>{h(e),F(e)}}):null,!S&&!w&&A?(0,m.jsx)(D,{course:A,sections:j,lessons:l.lessons,activeLesson:g,playerUrl:v,playerLoading:b,onBack:()=>{h(null),_(null),y(``),F(null)},onOpenLesson:M}):null]})]})}function E({courses:e,sections:t,lessons:n,onOpenCourse:r}){return(0,m.jsx)(`div`,{className:`recorded-course-grid`,style:I.courseGrid,children:e.map(e=>(0,m.jsxs)(`article`,{className:`recorded-course-card`,style:I.courseCard,children:[(0,m.jsxs)(`div`,{className:`recorded-course-thumb`,style:I.courseThumb,onClick:()=>r(e.id),children:[(0,m.jsx)(`span`,{className:`level-badge`,children:d(e.level,`Course`)}),(0,m.jsx)(`div`,{className:`play-btn-circle`,onClick:()=>r(e.id),children:(0,m.jsx)(`i`,{className:`fa-solid fa-play`})}),(0,m.jsx)(`div`,{className:`shimmer-effect`})]}),(0,m.jsxs)(`div`,{className:`recorded-course-body`,style:I.courseCardBody,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h2`,{className:`recorded-course-title`,style:I.courseCardTitle,children:e.title}),(0,m.jsx)(`p`,{style:I.meta,children:e.description||A(e.recorded_lecture_course_batches)})]}),(0,m.jsxs)(`div`,{className:`recorded-course-stats`,style:I.courseStats,children:[(0,m.jsx)(`span`,{children:d(e.level,`Course`)}),(0,m.jsx)(`span`,{children:j(e.id,t,n)})]}),(0,m.jsx)(`div`,{className:`open-btn-container`,children:(0,m.jsx)(`button`,{className:`btn btn-primary`,style:I.openButton,onClick:()=>r(e.id),children:`Open Course`})})]})]},e.id))})}function D({course:e,sections:t,lessons:n,activeLesson:r,playerUrl:i,playerLoading:a,onBack:o,onOpenLesson:s}){let c=new Set(t.map(e=>e.id)),l=n.find(e=>c.has(e.section_id));return(0,m.jsxs)(`div`,{className:`recorded-detail`,style:I.detailWrap,children:[(0,m.jsxs)(`button`,{className:`recorded-back`,style:I.backButton,onClick:o,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),`All courses`]}),(0,m.jsxs)(`main`,{className:`recorded-panel`,style:I.lessonPanel,children:[(0,m.jsxs)(`div`,{className:`recorded-course-heading`,style:I.courseHeading,children:[(0,m.jsx)(`h2`,{className:`recorded-panel-title`,style:I.panelTitle,children:e.title}),(0,m.jsx)(`p`,{style:I.meta,children:e.description||A(e.recorded_lecture_course_batches)})]}),(0,m.jsxs)(`div`,{className:`recorded-watch-layout`,style:I.watchLayout,children:[(0,m.jsx)(`section`,{className:`recorded-player-card`,style:I.playerCard,children:(0,m.jsx)(O,{lesson:r,playerUrl:i,loading:a,onStartFirst:l?()=>s(l):null})}),(0,m.jsxs)(`aside`,{className:`recorded-playlist`,style:I.playlistCard,children:[(0,m.jsx)(`div`,{style:I.playlistHeader,children:(0,m.jsxs)(`span`,{style:I.countPill,children:[t.length,` sections | `,M(n,t),` videos`]})}),t.map(e=>{let t=n.filter(t=>t.section_id===e.id);return(0,m.jsxs)(`section`,{className:`recorded-section`,style:I.section,children:[(0,m.jsx)(`h3`,{className:`recorded-section-title`,style:I.sectionTitle,children:e.title}),t.length?t.map((e,t)=>(0,m.jsxs)(`button`,{className:`recorded-lesson`,style:{...I.lesson,...r?.id===e.id?I.lessonActive:{}},onClick:()=>s(e),children:[(0,m.jsx)(`span`,{style:I.lessonIcon,children:r?.id===e.id?(0,m.jsx)(`i`,{className:`fa-solid fa-pause`}):t+1}),(0,m.jsxs)(`span`,{style:I.lessonText,children:[(0,m.jsx)(`strong`,{children:e.title}),(0,m.jsx)(`small`,{style:I.meta,children:e.lesson_type===`external_video`?`Online video`:`Class video`})]})]},e.id)):(0,m.jsx)(`p`,{style:I.meta,children:`No videos in this section yet.`})]},e.id)})]})]})]})]})}function O({lesson:e,playerUrl:t,loading:n,onStartFirst:r}){let i=e?.lesson_type===`external_video`?N(t):null;return e?(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`div`,{className:`recorded-player-frame`,style:I.playerFrame,children:n?(0,m.jsxs)(`div`,{className:`recorded-player-empty`,style:I.playerEmpty,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,m.jsx)(`h2`,{children:`Getting your video ready`})]}):i?.provider===`youtube`?(0,m.jsx)(S,{videoId:i.id,title:e.title}):i?.provider===`vimeo`?(0,m.jsx)(`iframe`,{title:e.title,src:`https://player.vimeo.com/video/${i.id}?title=0&byline=0&portrait=0`,style:I.iframe,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0}):e.lesson_type===`external_video`?(0,m.jsxs)(`div`,{className:`recorded-player-empty`,style:I.playerEmpty,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-up-right-from-square`}),(0,m.jsx)(`h2`,{children:`This video opens on another site`}),(0,m.jsx)(`button`,{className:`btn btn-primary`,style:I.playerButton,onClick:()=>window.open(t,`_blank`,`noopener,noreferrer`),children:`Open Video`})]}):(0,m.jsx)(`video`,{src:t,controls:!0,controlsList:`nodownload`,style:I.video})}),(0,m.jsxs)(`div`,{className:`recorded-now-playing`,style:I.nowPlaying,children:[(0,m.jsx)(`span`,{style:I.nowBadge,children:`Now Playing`}),(0,m.jsx)(`h2`,{style:I.nowTitle,children:e.title})]})]}):(0,m.jsx)(`div`,{className:`recorded-player-frame recorded-player-frame-empty`,style:I.playerFrame,children:(0,m.jsxs)(`div`,{className:`recorded-player-empty`,style:I.playerEmpty,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-circle-play`,style:{fontSize:`3.5rem`,color:`var(--gold)`}}),(0,m.jsx)(`h2`,{style:{margin:0,fontFamily:`Sora, sans-serif`,fontWeight:800},children:`Pick a video to start learning`}),(0,m.jsx)(`p`,{style:{margin:0,opacity:.85,fontWeight:600},children:`Lessons will play here, inside your classroom.`}),r?(0,m.jsx)(`button`,{className:`g-btn g-btn-p`,style:{...I.playerButton,padding:`12px 28px`,fontSize:`0.95rem`},onClick:r,children:`Start First Video`}):null]})})}function k({icon:e,title:t,subtitle:n,tone:r,fill:i,variant:a}){return i?(0,m.jsxs)(`div`,{style:{...I.state,...r===`error`?I.error:{},...I.stateFill},children:[a?(0,m.jsx)(c,{variant:a,size:420}):(0,m.jsx)(`div`,{style:I.illustrationCore,children:(0,m.jsx)(`i`,{className:`fa-solid ${e}`})}),(0,m.jsxs)(`div`,{style:I.stateFillText,children:[(0,m.jsx)(`span`,{style:I.stateFillTitle,children:t}),n?(0,m.jsx)(`p`,{style:I.stateFillSubtitle,children:n}):null]})]}):(0,m.jsxs)(`div`,{style:{...I.state,...r===`error`?I.error:{}},children:[(0,m.jsx)(`i`,{className:`fa-solid ${e}`}),(0,m.jsx)(`span`,{children:t})]})}function A(e=[]){let t=e.map(e=>e.batches?.name).filter(Boolean);return t.length?t.join(`, `):`Assigned course`}function j(e,t,n){let r=t.filter(t=>t.course_id===e);return`${r.length} sections | ${M(n,r)} videos`}function M(e,t){let n=new Set(t.map(e=>e.id));return e.filter(e=>n.has(e.section_id)).length}function N(e){if(!e)return null;try{let t=new URL(e);if(t.hostname.includes(`youtube.com`)){let e=t.searchParams.get(`v`)||t.pathname.split(`/`).filter(Boolean).pop();return e?{provider:`youtube`,id:e}:null}if(t.hostname.includes(`youtu.be`)){let e=t.pathname.replace(`/`,``);return e?{provider:`youtube`,id:e}:null}if(t.hostname.includes(`vimeo.com`)){let e=t.pathname.split(`/`).filter(Boolean)[0];return e?{provider:`vimeo`,id:e}:null}}catch{return null}return null}function P(){return new URLSearchParams(window.location.search).get(w)}function F(e){let t=new URL(window.location.href);e?t.searchParams.set(w,e):t.searchParams.delete(w);let n=`${t.pathname}${t.search}${t.hash}`;n!==`${window.location.pathname}${window.location.search}${window.location.hash}`&&window.history.pushState({courseId:e},``,n)}var I={container:{width:`100%`,display:`flex`,flexDirection:`column`,gap:24,padding:`20px 28px 60px`,boxSizing:`border-box`},containerFocus:{width:`100%`,gap:8,padding:`20px 28px 60px`,boxSizing:`border-box`},title:{fontFamily:`Sora, sans-serif`,fontSize:`2.4rem`,color:`var(--dark-blue)`,marginBottom:8},subtitle:{color:`var(--text-light)`,fontSize:`1.05rem`,fontWeight:600},courseGrid:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(280px, 1fr))`,gap:20},courseCard:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,overflow:`hidden`,boxShadow:`var(--shadow)`,display:`flex`,flexDirection:`column`},courseThumb:{height:150,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:42},courseCardBody:{padding:18,display:`flex`,flexDirection:`column`,gap:14,flex:1},courseCardTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.1rem`,lineHeight:1.3},courseStats:{display:`flex`,justifyContent:`space-between`,gap:10,color:`var(--text-light)`,fontSize:`0.8rem`,fontWeight:800},openButton:{width:`100%`,textAlign:`center`,marginTop:`auto`},detailWrap:{display:`flex`,flexDirection:`column`,gap:14},backButton:{width:`fit-content`,border:`1px solid var(--border)`,background:`var(--card-bg)`,color:`var(--primary-blue)`,borderRadius:999,padding:`10px 16px`,fontWeight:800,display:`inline-flex`,alignItems:`center`,gap:8,cursor:`pointer`},lessonPanel:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:16,boxShadow:`var(--shadow)`},panelHeader:{display:`flex`,justifyContent:`space-between`,gap:16,marginBottom:12,flexWrap:`wrap`},courseHeading:{marginBottom:24,paddingBottom:16,borderBottom:`1px solid var(--border)`},panelTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.4rem`},countPill:{alignSelf:`flex-start`,background:`var(--light-blue)`,color:`var(--primary-blue)`,borderRadius:999,padding:`7px 12px`,fontSize:`0.78rem`,fontWeight:900},watchLayout:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 460px`,gap:10,alignItems:`start`},playerCard:{minWidth:0},playlistCard:{background:`rgba(255,255,255,0.45)`,border:`1px solid var(--border)`,borderRadius:16,padding:14,maxHeight:620,overflowY:`auto`,alignSelf:`start`},playlistHeader:{display:`flex`,justifyContent:`flex-end`,marginBottom:10},playerFrame:{width:`100%`,aspectRatio:`16 / 8.4`,maxHeight:`calc(100vh - var(--nav-h) - 190px)`,borderRadius:18,overflow:`hidden`,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,border:`1px solid var(--border)`,display:`flex`,alignItems:`center`,justifyContent:`center`},video:{width:`100%`,height:`100%`,display:`block`,background:`#000`},iframe:{width:`100%`,height:`100%`,border:0,display:`block`,background:`#000`},playerEmpty:{minHeight:260,color:`white`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,textAlign:`center`,gap:12,padding:24},playerButton:{marginTop:6},nowPlaying:{marginTop:14,background:`rgba(255,255,255,0.65)`,border:`1px solid var(--border)`,borderRadius:14,padding:14},nowBadge:{display:`inline-block`,color:`var(--primary-blue)`,fontWeight:900,fontSize:`0.72rem`,textTransform:`uppercase`,marginBottom:5},nowTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.1rem`},section:{borderTop:`1px solid var(--border)`,paddingTop:18,marginTop:18},sectionTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.22rem`,marginBottom:12},lesson:{width:`100%`,border:`1px solid var(--border)`,background:`rgba(255,255,255,0.7)`,borderRadius:14,padding:16,display:`flex`,alignItems:`center`,gap:14,cursor:`pointer`,marginBottom:12,color:`var(--dark-blue)`,fontSize:`1rem`},lessonActive:{background:`var(--light-blue)`,borderColor:`var(--primary-blue)`},lessonIcon:{width:38,height:38,borderRadius:12,background:`var(--primary-blue)`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,fontWeight:900},lessonText:{flex:1,textAlign:`left`,minWidth:0,lineHeight:1.25},meta:{color:`var(--text-light)`,fontSize:`0.95rem`,fontWeight:700,display:`block`},state:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:16,padding:20,display:`flex`,alignItems:`center`,gap:12,color:`var(--dark-blue)`,fontWeight:800},error:{color:`#b91c1c`,borderColor:`#fecaca`,background:`#fff5f5`},stateFill:{flex:1,minHeight:`45vh`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:8,textAlign:`center`},stateFillText:{display:`flex`,flexDirection:`column`,gap:6,maxWidth:420},stateFillTitle:{fontFamily:`Sora, sans-serif`,fontSize:`1.2rem`,color:`var(--dark-blue)`},stateFillSubtitle:{margin:0,color:`var(--text-light)`,fontWeight:600,fontSize:`0.95rem`,lineHeight:1.4},illustrationCore:{width:84,height:84,borderRadius:`50%`,background:`linear-gradient(135deg, var(--light-blue), color-mix(in srgb, var(--primary-blue) 14%, white))`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:30,boxShadow:`0 10px 24px color-mix(in srgb, var(--primary-blue) 18%, transparent)`}},L=`
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
`;export{T as default};