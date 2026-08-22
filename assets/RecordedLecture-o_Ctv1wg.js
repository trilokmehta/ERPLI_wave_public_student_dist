import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{D as t,E as n,F as r,G as i,h as a,pt as o,w as s}from"./interactive-D2ktiliE.js";import{n as c,t as l}from"./contentLevels-D8PMhpsV.js";var u=e(o(),1),d=t(),f=`courseId`;function p(){let{institute:e,profile:t}=n(),o=a(t?.current_level),[l,f]=(0,u.useState)({courses:[],sections:[],lessons:[]}),[p,g]=(0,u.useState)(()=>S()),[v,y]=(0,u.useState)(null),[b,x]=(0,u.useState)(``),[E,D]=(0,u.useState)(!1),[O,k]=(0,u.useState)(!0),[A,j]=(0,u.useState)(null);(0,u.useEffect)(()=>{let t=!0;async function n(){k(!0),j(null);let n=await i(e?.id);t&&(f(n.data),g(e=>e&&n.data.courses.some(t=>t.id===e&&c(t.level,o))?e:null),y(null),x(``),j(n.error),k(!1))}return n(),()=>{t=!1}},[e?.id]),(0,u.useEffect)(()=>{function e(){g(S()),y(null),x(``)}return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]);let M=(0,u.useMemo)(()=>l.courses.filter(e=>c(e.level,o)),[l.courses,o]),N=M.find(e=>e.id===p);(0,u.useEffect)(()=>(document.body.classList.toggle(`recorded-player-focus`,!!N),()=>document.body.classList.remove(`recorded-player-focus`)),[N]);let P=(0,u.useMemo)(()=>l.sections.filter(e=>e.course_id===p),[l.sections,p]);async function F(e){if(y(e),x(``),e.lesson_type===`external_video`){x(e.metadata?.external_url||``);return}D(!0);let t=await r(e.asset_id);if(D(!1),t.error){j(t.error),y(null);return}x(t.data.downloadUrl)}return(0,d.jsxs)(`div`,{className:`page-wrap recorded-page ${N?`recorded-page-focus`:``}`,style:{paddingTop:N?`calc(var(--nav-h) + 8px)`:`calc(var(--nav-h) + 20px)`},children:[(0,d.jsx)(`style`,{children:T}),(0,d.jsx)(s,{}),(0,d.jsxs)(`div`,{className:`recorded-container ${N?`recorded-container-focus`:``}`,style:{...w.container,...N?w.containerFocus:{}},children:[N?null:(0,d.jsxs)(`div`,{className:`recorded-header-banner premium-banner`,style:{position:`relative`,overflow:`hidden`,borderRadius:`26px`,padding:`32px 24px`,border:`1px solid rgba(255, 255, 255, 0.82)`,display:`flex`,flexDirection:`column`,gap:`8px`,marginBottom:`8px`},children:[(0,d.jsx)(`span`,{className:`setup-badge`,style:{background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`inline-block`,alignSelf:`flex-start`,margin:0},children:`Video Course`}),(0,d.jsx)(`h1`,{style:{fontFamily:`Sora, sans-serif`,fontSize:`2.2rem`,fontWeight:`900`,color:`var(--dark-blue)`,margin:0},children:`Video Library`}),(0,d.jsx)(`p`,{style:{color:`var(--text-light)`,fontSize:`1.05rem`,fontWeight:`500`,margin:0,lineHeight:1.4},children:`Choose a recorded course, then watch its videos.`})]}),O?(0,d.jsx)(_,{icon:`fa-circle-notch fa-spin`,title:`Loading recorded lectures...`}):null,A?(0,d.jsx)(_,{icon:`fa-triangle-exclamation`,title:A.message,tone:`error`}):null,!O&&!A&&!M.length?(0,d.jsx)(_,{icon:`fa-play`,title:l.courses.length?`No courses for Level ${o} yet. More unlock as your level goes up.`:`No recorded courses assigned yet.`}):null,!O&&!A&&M.length&&!N?(0,d.jsx)(m,{courses:M,sections:l.sections,lessons:l.lessons,onOpenCourse:e=>{g(e),C(e)}}):null,!O&&!A&&N?(0,d.jsx)(h,{course:N,sections:P,lessons:l.lessons,activeLesson:v,playerUrl:b,playerLoading:E,onBack:()=>{g(null),y(null),x(``),C(null)},onOpenLesson:F}):null]})]})}function m({courses:e,sections:t,lessons:n,onOpenCourse:r}){return(0,d.jsx)(`div`,{className:`recorded-course-grid`,style:w.courseGrid,children:e.map(e=>(0,d.jsxs)(`article`,{className:`recorded-course-card`,style:w.courseCard,children:[(0,d.jsxs)(`div`,{className:`recorded-course-thumb`,style:w.courseThumb,onClick:()=>r(e.id),children:[(0,d.jsx)(`span`,{className:`level-badge`,children:l(e.level,`Course`)}),(0,d.jsx)(`div`,{className:`play-btn-circle`,onClick:()=>r(e.id),children:(0,d.jsx)(`i`,{className:`fa-solid fa-play`})}),(0,d.jsx)(`div`,{className:`shimmer-effect`})]}),(0,d.jsxs)(`div`,{className:`recorded-course-body`,style:w.courseCardBody,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`h2`,{className:`recorded-course-title`,style:w.courseCardTitle,children:e.title}),(0,d.jsx)(`p`,{style:w.meta,children:e.description||v(e.recorded_lecture_course_batches)})]}),(0,d.jsxs)(`div`,{className:`recorded-course-stats`,style:w.courseStats,children:[(0,d.jsx)(`span`,{children:l(e.level,`Course`)}),(0,d.jsx)(`span`,{children:y(e.id,t,n)})]}),(0,d.jsx)(`div`,{className:`open-btn-container`,children:(0,d.jsx)(`button`,{className:`btn btn-primary`,style:w.openButton,onClick:()=>r(e.id),children:`Open Course`})})]})]},e.id))})}function h({course:e,sections:t,lessons:n,activeLesson:r,playerUrl:i,playerLoading:a,onBack:o,onOpenLesson:s}){let c=new Set(t.map(e=>e.id)),l=n.find(e=>c.has(e.section_id));return(0,d.jsxs)(`div`,{className:`recorded-detail`,style:w.detailWrap,children:[(0,d.jsxs)(`button`,{className:`recorded-back`,style:w.backButton,onClick:o,children:[(0,d.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),`All courses`]}),(0,d.jsxs)(`main`,{className:`recorded-panel`,style:w.lessonPanel,children:[(0,d.jsxs)(`div`,{className:`recorded-course-heading`,style:w.courseHeading,children:[(0,d.jsx)(`h2`,{className:`recorded-panel-title`,style:w.panelTitle,children:e.title}),(0,d.jsx)(`p`,{style:w.meta,children:e.description||v(e.recorded_lecture_course_batches)})]}),(0,d.jsxs)(`div`,{className:`recorded-watch-layout`,style:w.watchLayout,children:[(0,d.jsx)(`section`,{className:`recorded-player-card`,style:w.playerCard,children:(0,d.jsx)(g,{lesson:r,playerUrl:i,loading:a,onStartFirst:l?()=>s(l):null})}),(0,d.jsxs)(`aside`,{className:`recorded-playlist`,style:w.playlistCard,children:[(0,d.jsx)(`div`,{style:w.playlistHeader,children:(0,d.jsxs)(`span`,{style:w.countPill,children:[t.length,` sections | `,b(n,t),` videos`]})}),t.map(e=>{let t=n.filter(t=>t.section_id===e.id);return(0,d.jsxs)(`section`,{className:`recorded-section`,style:w.section,children:[(0,d.jsx)(`h3`,{className:`recorded-section-title`,style:w.sectionTitle,children:e.title}),t.length?t.map((e,t)=>(0,d.jsxs)(`button`,{className:`recorded-lesson`,style:{...w.lesson,...r?.id===e.id?w.lessonActive:{}},onClick:()=>s(e),children:[(0,d.jsx)(`span`,{style:w.lessonIcon,children:r?.id===e.id?(0,d.jsx)(`i`,{className:`fa-solid fa-pause`}):t+1}),(0,d.jsxs)(`span`,{style:w.lessonText,children:[(0,d.jsx)(`strong`,{children:e.title}),(0,d.jsx)(`small`,{style:w.meta,children:e.lesson_type===`external_video`?`Online video`:`Class video`})]})]},e.id)):(0,d.jsx)(`p`,{style:w.meta,children:`No videos in this section yet.`})]},e.id)})]})]})]})]})}function g({lesson:e,playerUrl:t,loading:n,onStartFirst:r}){let i=e?.lesson_type===`external_video`?x(t):``;return e?(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`div`,{className:`recorded-player-frame`,style:w.playerFrame,children:n?(0,d.jsxs)(`div`,{className:`recorded-player-empty`,style:w.playerEmpty,children:[(0,d.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`}),(0,d.jsx)(`h2`,{children:`Getting your video ready`})]}):e.lesson_type===`external_video`&&i?(0,d.jsx)(`iframe`,{title:e.title,src:i,style:w.iframe,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0}):e.lesson_type===`external_video`?(0,d.jsxs)(`div`,{className:`recorded-player-empty`,style:w.playerEmpty,children:[(0,d.jsx)(`i`,{className:`fa-solid fa-up-right-from-square`}),(0,d.jsx)(`h2`,{children:`This video opens on another site`}),(0,d.jsx)(`button`,{className:`btn btn-primary`,style:w.playerButton,onClick:()=>window.open(t,`_blank`,`noopener,noreferrer`),children:`Open Video`})]}):(0,d.jsx)(`video`,{src:t,controls:!0,controlsList:`nodownload`,style:w.video})}),(0,d.jsxs)(`div`,{className:`recorded-now-playing`,style:w.nowPlaying,children:[(0,d.jsx)(`span`,{style:w.nowBadge,children:`Now Playing`}),(0,d.jsx)(`h2`,{style:w.nowTitle,children:e.title})]})]}):(0,d.jsx)(`div`,{className:`recorded-player-frame`,style:w.playerFrame,children:(0,d.jsxs)(`div`,{className:`recorded-player-empty`,style:w.playerEmpty,children:[(0,d.jsx)(`i`,{className:`fa-solid fa-circle-play`,style:{fontSize:`3.5rem`,color:`var(--gold)`}}),(0,d.jsx)(`h2`,{style:{margin:0,fontFamily:`Sora, sans-serif`,fontWeight:800},children:`Pick a video to start learning`}),(0,d.jsx)(`p`,{style:{margin:0,opacity:.85,fontWeight:600},children:`Lessons will play here, inside your classroom.`}),r?(0,d.jsx)(`button`,{className:`g-btn g-btn-p`,style:{...w.playerButton,padding:`12px 28px`,fontSize:`0.95rem`},onClick:r,children:`Start First Video`}):null]})})}function _({icon:e,title:t,tone:n}){return(0,d.jsxs)(`div`,{style:{...w.state,...n===`error`?w.error:{}},children:[(0,d.jsx)(`i`,{className:`fa-solid ${e}`}),(0,d.jsx)(`span`,{children:t})]})}function v(e=[]){let t=e.map(e=>e.batches?.name).filter(Boolean);return t.length?t.join(`, `):`Assigned course`}function y(e,t,n){let r=t.filter(t=>t.course_id===e);return`${r.length} sections | ${b(n,r)} videos`}function b(e,t){let n=new Set(t.map(e=>e.id));return e.filter(e=>n.has(e.section_id)).length}function x(e){if(!e)return``;try{let t=new URL(e);if(t.hostname.includes(`youtube.com`)){let n=t.searchParams.get(`v`);return n?`https://www.youtube.com/embed/${n}`:e}if(t.hostname.includes(`youtu.be`)){let e=t.pathname.replace(`/`,``);return e?`https://www.youtube.com/embed/${e}`:``}if(t.hostname.includes(`vimeo.com`)){let e=t.pathname.split(`/`).filter(Boolean)[0];return e?`https://player.vimeo.com/video/${e}`:``}}catch{return``}return``}function S(){return new URLSearchParams(window.location.search).get(f)}function C(e){let t=new URL(window.location.href);e?t.searchParams.set(f,e):t.searchParams.delete(f);let n=`${t.pathname}${t.search}${t.hash}`;n!==`${window.location.pathname}${window.location.search}${window.location.hash}`&&window.history.pushState({courseId:e},``,n)}var w={container:{width:`100%`,display:`flex`,flexDirection:`column`,gap:24,padding:`20px 28px 60px`,boxSizing:`border-box`},containerFocus:{width:`100%`,gap:8,padding:`20px 28px 60px`,boxSizing:`border-box`},title:{fontFamily:`Sora, sans-serif`,fontSize:`2.4rem`,color:`var(--dark-blue)`,marginBottom:8},subtitle:{color:`var(--text-light)`,fontSize:`1.05rem`,fontWeight:600},courseGrid:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(280px, 1fr))`,gap:20},courseCard:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,overflow:`hidden`,boxShadow:`var(--shadow)`,display:`flex`,flexDirection:`column`},courseThumb:{height:150,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:42},courseCardBody:{padding:18,display:`flex`,flexDirection:`column`,gap:14,flex:1},courseCardTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.1rem`,lineHeight:1.3},courseStats:{display:`flex`,justifyContent:`space-between`,gap:10,color:`var(--text-light)`,fontSize:`0.8rem`,fontWeight:800},openButton:{width:`100%`,textAlign:`center`,marginTop:`auto`},detailWrap:{display:`flex`,flexDirection:`column`,gap:14},backButton:{width:`fit-content`,border:`1px solid var(--border)`,background:`var(--card-bg)`,color:`var(--primary-blue)`,borderRadius:999,padding:`10px 16px`,fontWeight:800,display:`inline-flex`,alignItems:`center`,gap:8,cursor:`pointer`},lessonPanel:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:16,boxShadow:`var(--shadow)`},panelHeader:{display:`flex`,justifyContent:`space-between`,gap:16,marginBottom:12,flexWrap:`wrap`},courseHeading:{marginBottom:24,paddingBottom:16,borderBottom:`1px solid var(--border)`},panelTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.4rem`},countPill:{alignSelf:`flex-start`,background:`var(--light-blue)`,color:`var(--primary-blue)`,borderRadius:999,padding:`7px 12px`,fontSize:`0.78rem`,fontWeight:900},watchLayout:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 460px`,gap:10,alignItems:`start`},playerCard:{minWidth:0},playlistCard:{background:`rgba(255,255,255,0.45)`,border:`1px solid var(--border)`,borderRadius:16,padding:14,maxHeight:620,overflowY:`auto`,alignSelf:`start`},playlistHeader:{display:`flex`,justifyContent:`flex-end`,marginBottom:10},playerFrame:{width:`100%`,aspectRatio:`16 / 8.4`,maxHeight:`calc(100vh - var(--nav-h) - 190px)`,borderRadius:18,overflow:`hidden`,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,border:`1px solid var(--border)`,display:`flex`,alignItems:`center`,justifyContent:`center`},video:{width:`100%`,height:`100%`,display:`block`,background:`#000`},iframe:{width:`100%`,height:`100%`,border:0,display:`block`,background:`#000`},playerEmpty:{minHeight:260,color:`white`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,textAlign:`center`,gap:12,padding:24},playerButton:{marginTop:6},nowPlaying:{marginTop:14,background:`rgba(255,255,255,0.65)`,border:`1px solid var(--border)`,borderRadius:14,padding:14},nowBadge:{display:`inline-block`,color:`var(--primary-blue)`,fontWeight:900,fontSize:`0.72rem`,textTransform:`uppercase`,marginBottom:5},nowTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.1rem`},section:{borderTop:`1px solid var(--border)`,paddingTop:18,marginTop:18},sectionTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.22rem`,marginBottom:12},lesson:{width:`100%`,border:`1px solid var(--border)`,background:`rgba(255,255,255,0.7)`,borderRadius:14,padding:16,display:`flex`,alignItems:`center`,gap:14,cursor:`pointer`,marginBottom:12,color:`var(--dark-blue)`,fontSize:`1rem`},lessonActive:{background:`var(--light-blue)`,borderColor:`var(--primary-blue)`},lessonIcon:{width:38,height:38,borderRadius:12,background:`var(--primary-blue)`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0,fontWeight:900},lessonText:{flex:1,textAlign:`left`,minWidth:0,lineHeight:1.25},meta:{color:`var(--text-light)`,fontSize:`0.95rem`,fontWeight:700,display:`block`},state:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:16,padding:20,display:`flex`,alignItems:`center`,gap:12,color:`var(--dark-blue)`,fontWeight:800},error:{color:`#b91c1c`,borderColor:`#fecaca`,background:`#fff5f5`}},T=`
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
      gap: 14px !important;
    }

    .recorded-playlist {
      max-height: none !important;
      overflow: visible !important;
      margin-top: 0 !important;
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

    .recorded-player-empty {
      min-height: 190px !important;
      padding: 16px !important;
    }

    .recorded-player-empty h2 {
      font-size: 1rem !important;
      line-height: 1.25 !important;
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
`;export{p as default};