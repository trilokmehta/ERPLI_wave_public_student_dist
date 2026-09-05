import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{D as t,H as n,I as r,O as i,T as a,g as o,mt as s,u as c}from"./interactive-BcgBPI7h.js";import{i as l,n as u,r as d,t as f}from"./vendor-CiqH52wl.js";import{n as p,t as m}from"./contentLevels-D8PMhpsV.js";var h=e(s(),1),g=i();l.workerPort=new f;function _(){let{institute:e,profile:i}=t(),s=o(i?.current_level),[l,u]=(0,h.useState)([]),[d,f]=(0,h.useState)(null),[m,_]=(0,h.useState)(``),[b,S]=(0,h.useState)(!0),[w,D]=(0,h.useState)(!1),[O,k]=(0,h.useState)(null),[A,j]=(0,h.useState)(0),[M,N]=(0,h.useState)(``);(0,h.useEffect)(()=>()=>{m&&m.startsWith(`blob:`)&&URL.revokeObjectURL(m)},[m]),(0,h.useEffect)(()=>(document.body.classList.toggle(`ebook-reader-focus`,!!d),()=>document.body.classList.remove(`ebook-reader-focus`)),[d]),(0,h.useEffect)(()=>{let t=!0;async function r(){S(!0),k(null);let r=await n(e?.id,`ebook`);t&&(u(r.data),k(r.error),S(!1))}return r(),()=>{t=!1}},[e?.id]);async function P(e){f(e),_(``),j(0),D(!0);let t=await r(e.id);if(t.error){k(t.error),f(null),D(!1);return}try{let n=await fetch(t.data.downloadUrl);if(!n.ok)throw Error(`Failed to download e-book`);if((n.headers.get(`content-type`)||``).includes(`application/pdf`)||C(e)){let e;if(n.body&&typeof n.body.getReader==`function`){let t=n.body.getReader(),r=+(n.headers.get(`Content-Length`)||0),i=0,a=[];for(;;){let{done:e,value:n}=await t.read();if(e)break;a.push(n),i+=n.length,r&&j(Math.round(i/r*100))}e=new Uint8Array(i);let o=0;for(let t of a)e.set(t,o),o+=t.length}else{let t=await n.arrayBuffer();e=new Uint8Array(t),j(100)}let t=new Blob([e],{type:`application/pdf`});_(URL.createObjectURL(t))}else _(t.data.downloadUrl)}catch(e){k(e),f(null)}finally{D(!1)}}function F(){m&&m.startsWith(`blob:`)&&URL.revokeObjectURL(m),f(null),_(``),j(0),D(!1)}let I=d?C(d):!1,L=l.filter(e=>p(e.level,s)),R=L.filter(e=>e.title?.toLowerCase().includes(M.toLowerCase())||e.level&&String(e.level).includes(M));return(0,g.jsxs)(`div`,{className:`page-wrap ebook-page ${d?`ebook-page-reader`:``}`,children:[(0,g.jsx)(`style`,{children:E}),(0,g.jsx)(a,{}),(0,g.jsx)(`div`,{className:`ebook-container ${d?`ebook-container-reader`:``}`,style:T.container,children:d?(0,g.jsx)(y,{book:d,books:l,readerUrl:m,loading:w,isPdf:I,onBack:F,onOpenBook:P,downloadProgress:A}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`ebook-header-banner premium-banner`,style:{position:`relative`,overflow:`hidden`,borderRadius:`26px`,padding:`32px 24px`,border:`1px solid rgba(255, 255, 255, 0.82)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`20px`,marginBottom:`8px`},children:[(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,minWidth:0},children:[(0,g.jsx)(`span`,{className:`setup-badge`,style:{background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`inline-block`,alignSelf:`flex-start`,margin:0},children:`Digital Library`}),(0,g.jsx)(`h1`,{style:{fontFamily:`Sora, sans-serif`,fontSize:`2.2rem`,fontWeight:`900`,color:`var(--dark-blue)`,margin:0},children:`E-Books`}),(0,g.jsxs)(`p`,{style:{color:`var(--text-light)`,fontSize:`1.05rem`,fontWeight:`500`,margin:0,lineHeight:1.4},children:[`Choose a book and start reading (`,L.length,` books available).`]})]}),(0,g.jsx)(c,{variant:`ebooks-banner`,size:300})]}),(0,g.jsxs)(`div`,{style:T.searchContainer,className:`ebook-search-wrapper`,children:[(0,g.jsx)(`i`,{className:`fa-solid fa-magnifying-glass`,style:T.searchIcon}),(0,g.jsx)(`input`,{type:`text`,placeholder:`Search by title or level...`,value:M,onChange:e=>N(e.target.value),style:T.searchInput,className:`ebook-search-input`}),M&&(0,g.jsx)(`button`,{onClick:()=>N(``),style:T.clearSearchBtn,children:(0,g.jsx)(`i`,{className:`fa-solid fa-xmark`})})]}),b?(0,g.jsx)(x,{icon:`fa-circle-notch fa-spin`,title:`Loading e-books...`,fill:!0}):null,O?(0,g.jsx)(x,{icon:`fa-triangle-exclamation`,title:O.message,tone:`error`,fill:!0}):null,!b&&!O&&!L.length?(0,g.jsx)(x,{variant:`ebooks-empty`,title:l.length?`No e-books for Level ${s} yet.`:`No e-books assigned yet.`,subtitle:l.length?`More books unlock as your level goes up.`:`Your assigned e-books will show up here.`,fill:!0}):null,!b&&!O&&L.length&&M&&!R.length?(0,g.jsx)(x,{variant:`ebooks-empty`,title:`No books match "${M}"`,subtitle:`Try a different title or level.`,fill:!0}):null,!b&&!O&&R.length?(0,g.jsx)(`div`,{className:`ebook-grid`,style:T.grid,children:R.map((e,t)=>(0,g.jsx)(v,{asset:e,index:t,onOpen:()=>P(e)},e.id))}):null]})})]})}function v({asset:e,index:t,onOpen:n}){let r=w(t);return(0,g.jsxs)(`article`,{className:`ebook-card`,style:T.card,children:[(0,g.jsxs)(`div`,{style:{...T.cover,background:r.background},className:`ebook-premium-cover`,children:[(0,g.jsx)(`span`,{style:T.coverSpine}),(0,g.jsx)(`div`,{style:T.coverRibbon}),(0,g.jsx)(`div`,{style:T.coverTitleText,children:e.title}),(0,g.jsxs)(`div`,{style:T.coverFooter,children:[e.level?(0,g.jsxs)(`span`,{style:T.coverLevelTag,children:[`Lvl `,e.level]}):null,(0,g.jsx)(`span`,{style:T.coverSpineFormat,children:C(e)?`PDF`:`Book`})]})]}),(0,g.jsxs)(`div`,{style:T.cardBody,children:[(0,g.jsx)(`h2`,{className:`ebook-card-title`,style:T.cardTitle,children:e.title}),(0,g.jsxs)(`div`,{style:T.bookChips,children:[(0,g.jsx)(`span`,{style:T.bookChip,children:m(e.level)}),(0,g.jsx)(`span`,{style:T.bookChip,children:C(e)?`PDF Doc`:`Book File`})]}),(0,g.jsx)(`p`,{style:T.batchText,children:S(e.asset_batches)}),(0,g.jsxs)(`button`,{className:`btn btn-primary ebook-card-btn`,style:T.button,onClick:n,children:[(0,g.jsx)(`i`,{className:`fa-solid fa-book-open`,style:{marginRight:8}}),`Open Reader`]})]})]})}function y({book:e,books:t,readerUrl:n,loading:r,isPdf:i,onBack:a,onOpenBook:o,downloadProgress:s}){let[c,l]=(0,h.useState)(!0),[f,p]=(0,h.useState)(!1),[_,v]=(0,h.useState)(0),[y,x]=(0,h.useState)(1),[S,C]=(0,h.useState)(null),[w,E]=(0,h.useState)(0),[D,O]=(0,h.useState)(null),[k,A]=(0,h.useState)(1),[j,M]=(0,h.useState)({width:0,height:0}),[N,P]=(0,h.useState)(!1),[F,I]=(0,h.useState)(`pen`),[L,R]=(0,h.useState)(`#ef4444`),z=(0,h.useRef)(null),B=(0,h.useRef)({}),V=(0,h.useRef)(!1),H=(0,h.useRef)(null);(0,h.useEffect)(()=>{n&&(l(!0),C(null),v(0),x(1),A(1),B.current={})},[n]),(0,h.useEffect)(()=>{if(!D)return;let e=new ResizeObserver(e=>{for(let t of e)E(t.contentRect.width)});return e.observe(D),()=>e.disconnect()},[D]);function U({numPages:e}){v(e),l(!1)}function W(e){console.error(`[EBook] PDF load error:`,e),C(e),l(!1)}function G(){A(e=>Math.min(3,+(e+.25).toFixed(2)))}function K(){A(e=>Math.max(.5,+(e-.25).toFixed(2)))}function q(e,t,n,r){let i=t.points[n],a=t.points[r];if(!i||!a)return;let o=e.canvas;e.save(),t.tool===`eraser`?(e.globalCompositeOperation=`destination-out`,e.globalAlpha=1,e.lineWidth=26):(e.globalCompositeOperation=`source-over`,e.globalAlpha=t.tool===`marker`?.35:1,e.lineWidth=t.tool===`marker`?16:3),e.strokeStyle=t.color,e.lineCap=`round`,e.lineJoin=`round`,e.beginPath(),e.moveTo(i.x*o.width,i.y*o.height),e.lineTo(a.x*o.width,a.y*o.height),e.stroke(),e.restore()}function J(){let e=z.current;if(!e)return;let t=e.getContext(`2d`);t.clearRect(0,0,e.width,e.height);let n=B.current[y]||[];for(let e of n)for(let n=0;n<e.points.length-1;n++)q(t,e,n,n+1)}(0,h.useEffect)(()=>{J()},[y,j]);function Y(e){let t=z.current.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width,y:(e.clientY-t.top)/t.height}}function X(e){N&&(e.preventDefault(),z.current.setPointerCapture(e.pointerId),V.current=!0,H.current={tool:F,color:L,points:[Y(e)]})}function Z(e){if(!N||!V.current||!H.current)return;e.preventDefault();let t=H.current;t.points.push(Y(e)),q(z.current.getContext(`2d`),t,t.points.length-2,t.points.length-1)}function Q(){if(!V.current)return;V.current=!1;let e=H.current;if(H.current=null,e&&e.points.length>1){let t=B.current[y]||[];t.push(e),B.current[y]=t}}function $(){B.current[y]=[],J()}(0,h.useEffect)(()=>{function e(){p(!!document.fullscreenElement)}return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]);function ee(){let e=document.querySelector(`.ebook-reader-panel`);e&&(document.fullscreenElement?document.exitFullscreen().then(()=>{p(!1)}):e.requestFullscreen().then(()=>{p(!0)}).catch(e=>{window.open(n,`_blank`)}))}return(0,g.jsx)(`div`,{className:`ebook-reader-shell`,style:T.readerShell,children:(0,g.jsx)(`div`,{className:`ebook-reader-layout`,style:T.readerLayout,children:(0,g.jsxs)(`main`,{className:`ebook-reader-panel`,style:T.readerPanel,children:[(0,g.jsxs)(`div`,{className:`ebook-internal-toolbar`,style:T.internalToolbar,children:[(0,g.jsxs)(`button`,{className:`ebook-back-btn`,style:T.backBtn,onClick:a,children:[(0,g.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),(0,g.jsx)(`span`,{children:`Library`})]}),(0,g.jsxs)(`div`,{style:T.toolbarTitleBlock,children:[(0,g.jsx)(`h2`,{style:T.toolbarBookTitle,children:e.title}),(0,g.jsx)(`span`,{style:T.toolbarLevelTag,children:m(e.level)})]}),(0,g.jsx)(`div`,{className:`ebook-toolbar-actions`,style:{display:`flex`,gap:10,marginLeft:`auto`,flexWrap:`wrap`},children:i&&n&&(0,g.jsxs)(g.Fragment,{children:[_>1&&(0,g.jsxs)(`div`,{style:T.pageNavGroup,children:[(0,g.jsx)(`button`,{className:`ebook-action-btn`,style:T.pageNavBtn,disabled:y<=1,onClick:()=>x(e=>Math.max(1,e-1)),children:(0,g.jsx)(`i`,{className:`fa-solid fa-chevron-left`})}),(0,g.jsxs)(`span`,{style:T.pageNavLabel,children:[y,` / `,_]}),(0,g.jsx)(`button`,{className:`ebook-action-btn`,style:T.pageNavBtn,disabled:y>=_,onClick:()=>x(e=>Math.min(_,e+1)),children:(0,g.jsx)(`i`,{className:`fa-solid fa-chevron-right`})})]}),(0,g.jsxs)(`div`,{style:T.pageNavGroup,children:[(0,g.jsx)(`button`,{className:`ebook-action-btn`,style:T.pageNavBtn,onClick:K,disabled:k<=.5,children:(0,g.jsx)(`i`,{className:`fa-solid fa-magnifying-glass-minus`})}),(0,g.jsxs)(`span`,{style:T.pageNavLabel,children:[Math.round(k*100),`%`]}),(0,g.jsx)(`button`,{className:`ebook-action-btn`,style:T.pageNavBtn,onClick:G,disabled:k>=3,children:(0,g.jsx)(`i`,{className:`fa-solid fa-magnifying-glass-plus`})})]}),(0,g.jsxs)(`button`,{className:`ebook-action-btn`,style:{...T.actionButton,...N?T.actionButtonActive:{}},onClick:()=>P(e=>!e),children:[(0,g.jsx)(`i`,{className:`fa-solid fa-pen`,style:{marginRight:8}}),(0,g.jsx)(`span`,{children:N?`Stop Drawing`:`Draw`})]}),(0,g.jsxs)(`button`,{className:`ebook-action-btn`,style:T.actionButton,onClick:ee,children:[(0,g.jsx)(`i`,{className:`fa-solid ${f?`fa-compress`:`fa-expand`}`,style:{marginRight:8}}),(0,g.jsx)(`span`,{children:f?`Exit`:`Fullscreen`})]})]})})]}),i&&n&&N&&(0,g.jsxs)(`div`,{style:T.annotationToolbar,children:[(0,g.jsxs)(`div`,{style:T.toolGroup,children:[(0,g.jsx)(`button`,{style:{...T.toolBtn,...F===`pen`?T.toolBtnActive:{}},onClick:()=>I(`pen`),title:`Pen`,children:(0,g.jsx)(`i`,{className:`fa-solid fa-pen`})}),(0,g.jsx)(`button`,{style:{...T.toolBtn,...F===`marker`?T.toolBtnActive:{}},onClick:()=>I(`marker`),title:`Marker`,children:(0,g.jsx)(`i`,{className:`fa-solid fa-highlighter`})}),(0,g.jsx)(`button`,{style:{...T.toolBtn,...F===`eraser`?T.toolBtnActive:{}},onClick:()=>I(`eraser`),title:`Eraser`,children:(0,g.jsx)(`i`,{className:`fa-solid fa-eraser`})})]}),(0,g.jsxs)(`div`,{style:T.toolGroup,children:[[`#ef4444`,`#2563eb`,`#16a34a`,`#f59e0b`,`#111827`].map(e=>(0,g.jsx)(`button`,{style:{...T.colorSwatch,background:e,...L===e?T.colorSwatchActive:{}},onClick:()=>R(e)},e)),(0,g.jsx)(`input`,{type:`color`,value:L,onChange:e=>R(e.target.value),style:T.colorInput})]}),(0,g.jsx)(`button`,{style:T.toolBtn,onClick:$,title:`Clear page`,children:(0,g.jsx)(`i`,{className:`fa-solid fa-trash`})})]}),(0,g.jsx)(`div`,{style:T.iframeContainer,children:r?(0,g.jsxs)(`div`,{style:T.iframeLoaderOverlay,children:[(0,g.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`,style:{fontSize:`2.5rem`,color:`var(--primary-blue)`,marginBottom:16}}),(0,g.jsx)(`h3`,{style:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,margin:0,fontWeight:700},children:s>0?`Loading Book (${s}%)`:`Opening your book...`}),(0,g.jsx)(`p`,{style:{color:`var(--text-light)`,fontSize:`0.85rem`,margin:`4px 0 0`},children:`Please wait while the book is prepared.`}),(0,g.jsx)(`div`,{style:T.progressBarBg,children:(0,g.jsx)(`div`,{style:{...T.progressBarFill,width:s>0?`${s}%`:`50%`,left:s>0?0:void 0},className:s>0?``:`ebook-progress-fill`})})]}):i&&n?(0,g.jsxs)(`div`,{ref:O,style:T.pdfScrollArea,children:[c&&(0,g.jsxs)(`div`,{style:T.iframeLoaderOverlay,children:[(0,g.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`,style:{fontSize:`2.5rem`,color:`var(--primary-blue)`,marginBottom:16}}),(0,g.jsx)(`h3`,{style:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,margin:0,fontWeight:700},children:`Loading PDF Document...`}),(0,g.jsx)(`p`,{style:{color:`var(--text-light)`,fontSize:`0.85rem`,margin:`4px 0 0`},children:`Please wait while the book is prepared.`}),(0,g.jsx)(`div`,{style:T.progressBarBg,children:(0,g.jsx)(`div`,{style:T.progressBarFill,className:`ebook-progress-fill`})})]}),S?(0,g.jsx)(b,{icon:`fa-triangle-exclamation`,title:`Couldn't display this PDF`,detail:(0,g.jsxs)(g.Fragment,{children:[`Please try reopening the book.`,S?.message?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`br`,{}),(0,g.jsx)(`span`,{style:{fontSize:`0.72rem`,opacity:.7},children:String(S.message)})]}):null]})}):(0,g.jsx)(d,{file:n,onLoadSuccess:U,onLoadError:W,onSourceError:W,loading:null,error:null,children:w>0&&(0,g.jsxs)(`div`,{style:T.pageStage,className:N?`ebook-draw-active`:``,children:[(0,g.jsx)(u,{pageNumber:y,width:Math.max(200,(w-32)*k),renderAnnotationLayer:!0,renderTextLayer:!0,onRenderSuccess:e=>M({width:e.width,height:e.height})}),j.width>0&&(0,g.jsx)(`canvas`,{ref:z,width:j.width,height:j.height,style:{...T.annotationCanvas,width:j.width,height:j.height,pointerEvents:N?`auto`:`none`,cursor:N?F===`eraser`?`cell`:`crosshair`:`default`,touchAction:N?`none`:`auto`},onPointerDown:X,onPointerMove:Z,onPointerUp:Q,onPointerLeave:Q})]})})]}):(0,g.jsx)(b,{icon:`fa-file-lines`,title:`Preview is not available for this file type`,detail:`Ask your teacher to upload this e-book as a PDF so it can open inside the student portal.`})})]})})})}function b({icon:e,title:t,detail:n}){return(0,g.jsxs)(`div`,{style:T.readerState,children:[(0,g.jsx)(`i`,{className:`fa-solid ${e}`}),(0,g.jsx)(`h2`,{children:t}),n?(0,g.jsx)(`p`,{children:n}):null]})}function x({icon:e,title:t,subtitle:n,tone:r,fill:i,variant:a}){return i?(0,g.jsxs)(`div`,{style:{...T.state,...r===`error`?T.error:{},...T.stateFill},children:[a?(0,g.jsx)(c,{variant:a,size:420}):(0,g.jsx)(`div`,{style:T.illustrationCore,children:(0,g.jsx)(`i`,{className:`fa-solid ${e}`})}),(0,g.jsxs)(`div`,{style:T.stateFillText,children:[(0,g.jsx)(`span`,{style:T.stateFillTitle,children:t}),n?(0,g.jsx)(`p`,{style:T.stateFillSubtitle,children:n}):null]})]}):(0,g.jsxs)(`div`,{style:{...T.state,...r===`error`?T.error:{}},children:[(0,g.jsx)(`i`,{className:`fa-solid ${e}`}),(0,g.jsx)(`span`,{children:t})]})}function S(e=[]){let t=e.map(e=>e.batches?.name).filter(Boolean);return t.length?t.join(`, `):`Assigned book`}function C(e){return e.content_type===`application/pdf`||e.metadata?.content_type===`application/pdf`||e.file_name?.toLowerCase().endsWith(`.pdf`)}function w(e){let t=[`linear-gradient(145deg, #2563eb, #0f766e)`,`linear-gradient(145deg, #7c3aed, #2563eb)`,`linear-gradient(145deg, #f59e0b, #dc2626)`,`linear-gradient(145deg, #059669, #0284c7)`,`linear-gradient(145deg, #db2777, #7c3aed)`,`linear-gradient(145deg, #0891b2, #4338ca)`];return{background:t[e%t.length]}}var T={container:{width:`100%`,display:`flex`,flexDirection:`column`,gap:24,padding:`20px 28px 60px`,boxSizing:`border-box`},header:{display:`flex`,justifyContent:`flex-start`,alignItems:`center`,gap:14,background:`linear-gradient(135deg, rgba(255,255,255,0.94), color-mix(in srgb, var(--primary-blue) 9%, white))`,border:`1px solid var(--border)`,borderRadius:18,padding:18,boxShadow:`var(--shadow)`},headerIcon:{width:58,height:58,borderRadius:16,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:24,flexShrink:0},headerText:{flex:1,minWidth:0},title:{fontFamily:`Sora, sans-serif`,fontSize:`2rem`,color:`var(--dark-blue)`,marginBottom:4},subtitle:{color:`var(--text-light)`,fontSize:`1rem`,fontWeight:700},libraryBadge:{background:`var(--light-blue)`,color:`var(--primary-blue)`,borderRadius:999,padding:`10px 16px`,fontWeight:900,display:`flex`,alignItems:`center`,gap:8,whiteSpace:`nowrap`},grid:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(300px, 1fr))`,gap:16},card:{background:`rgba(255,255,255,0.9)`,border:`1px solid var(--border)`,borderRadius:18,padding:16,display:`flex`,gap:16,boxShadow:`var(--shadow)`,minHeight:164},cover:{width:110,height:154,borderRadius:`6px 14px 14px 6px`,color:`white`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`space-between`,flexShrink:0,boxShadow:`5px 8px 18px color-mix(in srgb, var(--primary-blue) 30%, transparent)`,position:`relative`,overflow:`hidden`,transition:`transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,border:`1px solid rgba(255, 255, 255, 0.15)`},coverSpine:{position:`absolute`,left:0,top:0,bottom:0,width:12,background:`rgba(255,255,255,0.18)`,borderRight:`1px solid rgba(0,0,0,0.12)`},coverRibbon:{position:`absolute`,top:0,right:14,width:12,height:38,background:`#facc15`,borderRadius:`0 0 4px 4px`,boxShadow:`0 2px 6px rgba(0,0,0,0.15)`,zIndex:2},coverTitleText:{fontFamily:`Sora, sans-serif`,fontSize:`0.8rem`,fontWeight:800,textAlign:`center`,color:`white`,width:`100%`,padding:`0 10px 0 16px`,lineHeight:1.25,zIndex:2,marginTop:20,display:`-webkit-box`,WebkitLineClamp:3,WebkitBoxOrient:`vertical`,overflow:`hidden`,textShadow:`0 2px 4px rgba(0,0,0,0.3)`},coverFooter:{position:`absolute`,bottom:10,left:16,right:10,display:`flex`,justifyContent:`space-between`,alignItems:`center`,zIndex:2},coverLevelTag:{fontSize:`0.62rem`,fontWeight:900,background:`rgba(255, 255, 255, 0.22)`,padding:`2px 6px`,borderRadius:999,backdropFilter:`blur(4px)`,color:`white`},coverSpineFormat:{fontSize:`0.62rem`,fontWeight:900,opacity:.9,textTransform:`uppercase`,letterSpacing:`0.5px`,color:`white`},cardBody:{minWidth:0,display:`flex`,flexDirection:`column`,gap:10,flex:1},cardTitle:{fontFamily:`Sora, sans-serif`,fontSize:`1.18rem`,color:`var(--dark-blue)`,lineHeight:1.25},meta:{color:`var(--text-light)`,fontSize:`0.88rem`,fontWeight:700},bookChips:{display:`flex`,gap:8,flexWrap:`wrap`},bookChip:{background:`var(--light-blue)`,color:`var(--primary-blue)`,borderRadius:999,padding:`4px 9px`,fontSize:`0.72rem`,fontWeight:900},batchText:{color:`var(--text-main)`,fontSize:`0.92rem`,fontWeight:800},button:{width:`fit-content`,padding:`11px 20px`,marginTop:`auto`},readerShell:{display:`flex`,flexDirection:`column`,gap:12},readerTopbar:{display:`flex`,alignItems:`center`,gap:14,padding:0},actionButton:{border:`1px solid var(--border)`,background:`white`,color:`var(--primary-blue)`,borderRadius:999,padding:`8px 14px`,fontWeight:900,display:`inline-flex`,alignItems:`center`,cursor:`pointer`,fontSize:`0.85rem`,boxShadow:`var(--shadow)`},actionButtonActive:{background:`var(--primary-blue)`,color:`white`,border:`1px solid var(--primary-blue)`},readerLayout:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr)`,gap:16,alignItems:`start`},readerPanel:{height:`calc(100vh - var(--nav-h) - 58px)`,minHeight:560,background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:24,overflow:`hidden`,boxShadow:`var(--shadow)`,display:`flex`,flexDirection:`column`},pdfFrame:{width:`100%`,height:`100%`,border:0,display:`block`,background:`white`},pdfScrollArea:{width:`100%`,height:`100%`,minHeight:0,overflow:`auto`,display:`block`,textAlign:`center`,padding:`12px`,boxSizing:`border-box`},pageStage:{position:`relative`,display:`inline-block`},annotationCanvas:{position:`absolute`,top:0,left:0,zIndex:10},annotationToolbar:{display:`flex`,alignItems:`center`,gap:14,padding:`8px 20px`,borderBottom:`1px solid var(--border)`,background:`rgba(255, 255, 255, 0.75)`,backdropFilter:`blur(12px)`,flexWrap:`wrap`},toolGroup:{display:`flex`,alignItems:`center`,gap:6,border:`1px solid var(--border)`,background:`white`,borderRadius:999,padding:`4px 6px`},toolBtn:{border:`1px solid var(--border)`,background:`white`,color:`var(--primary-blue)`,borderRadius:999,width:32,height:32,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,fontSize:`0.85rem`},toolBtnActive:{background:`var(--primary-blue)`,color:`white`,border:`1px solid var(--primary-blue)`},colorSwatch:{width:22,height:22,borderRadius:`50%`,border:`2px solid white`,boxShadow:`0 0 0 1px var(--border)`,cursor:`pointer`,padding:0},colorSwatchActive:{boxShadow:`0 0 0 2px var(--primary-blue)`},colorInput:{width:26,height:26,padding:0,border:`none`,background:`none`,cursor:`pointer`},pageNavGroup:{display:`flex`,alignItems:`center`,gap:8,border:`1px solid var(--border)`,background:`white`,borderRadius:999,padding:`4px 10px`,boxShadow:`var(--shadow)`},pageNavBtn:{border:0,background:`transparent`,color:`var(--primary-blue)`,cursor:`pointer`,padding:`4px 6px`,fontSize:`0.85rem`},pageNavLabel:{fontSize:`0.8rem`,fontWeight:800,color:`var(--dark-blue)`,whiteSpace:`nowrap`},readerState:{height:`100%`,minHeight:360,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,textAlign:`center`,gap:12,padding:24,color:`var(--dark-blue)`},readerList:{background:`rgba(255, 255, 255, 0.45)`,border:`1px solid var(--border)`,borderRadius:18,padding:12,boxShadow:`var(--shadow)`,maxHeight:`calc(100vh - var(--nav-h) - 110px)`,overflowY:`auto`},readerListHeader:{color:`var(--primary-blue)`,fontWeight:900,textTransform:`uppercase`,fontSize:`0.75rem`,margin:`4px 4px 10px`},readerBook:{width:`100%`,border:`1px solid var(--border)`,background:`rgba(255,255,255,0.72)`,borderRadius:14,padding:12,display:`flex`,alignItems:`center`,gap:10,marginBottom:10,cursor:`pointer`,color:`var(--dark-blue)`},readerBookActive:{background:`var(--light-blue)`,borderColor:`var(--primary-blue)`},readerBookIcon:{width:38,height:46,borderRadius:9,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},readerBookText:{minWidth:0,textAlign:`left`,display:`flex`,flexDirection:`column`,gap:3,lineHeight:1.2},state:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:16,padding:20,display:`flex`,alignItems:`center`,gap:12,color:`var(--dark-blue)`,fontWeight:800},error:{color:`#b91c1c`,borderColor:`#fecaca`,background:`#fff5f5`},stateFill:{flex:1,minHeight:`45vh`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:8,textAlign:`center`},stateFillText:{display:`flex`,flexDirection:`column`,gap:6,maxWidth:420},stateFillTitle:{fontFamily:`Sora, sans-serif`,fontSize:`1.2rem`,color:`var(--dark-blue)`},stateFillSubtitle:{margin:0,color:`var(--text-light)`,fontWeight:600,fontSize:`0.95rem`,lineHeight:1.4},illustrationCore:{width:84,height:84,borderRadius:`50%`,background:`linear-gradient(135deg, var(--light-blue), color-mix(in srgb, var(--primary-blue) 14%, white))`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:30,boxShadow:`0 10px 24px color-mix(in srgb, var(--primary-blue) 18%, transparent)`},iframeLoaderOverlay:{position:`absolute`,inset:0,background:`var(--card-bg)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,zIndex:10,borderRadius:20},progressBarBg:{width:`200px`,height:`6px`,background:`var(--light-blue)`,borderRadius:`3px`,marginTop:`16px`,overflow:`hidden`,position:`relative`},progressBarFill:{height:`100%`,width:`50%`,background:`var(--primary-blue)`,borderRadius:`3px`,position:`absolute`,left:`-50%`},searchContainer:{position:`relative`,display:`flex`,alignItems:`center`,background:`rgba(255, 255, 255, 0.8)`,border:`1px solid var(--border)`,borderRadius:16,padding:`0 16px`,height:48,boxShadow:`var(--shadow)`,maxWidth:480,width:`100%`,marginBottom:8},searchIcon:{color:`var(--text-light)`,fontSize:`1rem`,marginRight:10},searchInput:{border:0,outline:`none`,background:`transparent`,width:`100%`,fontSize:`0.95rem`,color:`var(--dark-blue)`,fontWeight:600},clearSearchBtn:{border:0,background:`transparent`,color:`var(--text-light)`,cursor:`pointer`,padding:4,display:`flex`,alignItems:`center`,justifyContent:`center`},iframeContainer:{flex:1,minHeight:0,width:`100%`,position:`relative`,overflow:`hidden`,background:`linear-gradient(135deg, #eef6ff, #ffffff)`},internalToolbar:{height:60,borderBottom:`1px solid var(--border)`,background:`rgba(255, 255, 255, 0.65)`,backdropFilter:`blur(12px)`,display:`flex`,alignItems:`center`,padding:`0 20px`,gap:14,zIndex:5},backBtn:{border:`1px solid var(--border)`,background:`white`,color:`var(--primary-blue)`,borderRadius:999,padding:`8px 14px`,fontWeight:900,display:`inline-flex`,alignItems:`center`,gap:6,cursor:`pointer`,fontSize:`0.85rem`,transition:`all 0.2s ease`},toolbarTitleBlock:{display:`flex`,alignItems:`center`,gap:10,marginLeft:8,minWidth:0},toolbarBookTitle:{fontFamily:`Sora, sans-serif`,fontSize:`1.05rem`,fontWeight:800,color:`var(--dark-blue)`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,margin:0},toolbarLevelTag:{fontSize:`0.7rem`,fontWeight:900,background:`var(--light-blue)`,color:`var(--primary-blue)`,padding:`3px 8px`,borderRadius:999,whiteSpace:`nowrap`}},E=`
  @media (max-width: 720px) {
    .page-illustration {
      display: none !important;
    }
  }

  .ebook-page {
    align-items: stretch !important;
    justify-content: flex-start !important;
    min-height: 0 !important;
    padding-top: calc(var(--nav-h) + 20px) !important;
    padding-bottom: 28px !important;
  }

  .ebook-container {
    margin: 0;
    max-width: none;
  }

  .ebook-page-reader {
    padding-top: calc(var(--nav-h) + 8px) !important;
  }

  .ebook-container-reader {
    width: 100% !important;
    padding-bottom: 0 !important;
  }

  .ebook-page-reader {
    padding-bottom: 0 !important;
  }

  .ebook-back {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .ebook-back:hover {
    border-color: var(--primary-blue) !important;
    background-color: var(--light-blue) !important;
    transform: translateX(-4px);
  }

  .ebook-reader-book {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .ebook-reader-book:hover {
    border-color: var(--primary-blue) !important;
    background-color: var(--light-blue) !important;
    transform: translateY(-2px);
  }

  .ebook-reader-book:active {
    transform: translateY(0);
  }

  .ebook-reader-book {
    position: relative;
    border-left: 3px solid transparent !important;
  }

  .ebook-reader-book.active-book-item {
    border-left-color: var(--primary-blue) !important;
    background-color: var(--light-blue) !important;
    color: var(--primary-blue) !important;
    font-weight: 800;
  }

  .ebook-card:hover .ebook-premium-cover {
    transform: perspective(600px) rotateY(-14deg) scale(1.04) !important;
    box-shadow: 12px 14px 28px color-mix(in srgb, var(--primary-blue) 35%, transparent) !important;
  }

  .ebook-back-btn:hover {
    border-color: var(--primary-blue) !important;
    background-color: var(--light-blue) !important;
    transform: translateX(-3px);
  }

  .ebook-search-input::placeholder {
    color: var(--text-light);
    opacity: 0.7;
  }

  .ebook-search-wrapper {
    transition: all 0.2s ease;
  }

  .ebook-search-wrapper:focus-within {
    border-color: var(--primary-blue) !important;
    background-color: white !important;
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary-blue) 12%, transparent) !important;
  }

  @media (max-width: 980px) {
    .ebook-reader-layout {
      display: flex !important;
      flex-direction: column !important;
      gap: 16px !important;
    }

    .ebook-reader-list {
      width: 100% !important;
      max-height: none !important;
      overflow: visible !important;
    }

    .ebook-reader-panel {
      height: calc(100vh - var(--nav-h) - 130px) !important;
      min-height: 480px !important;
    }
  }

  @media (max-width: 640px) {
    .ebook-page {
      padding-top: calc(var(--nav-h) + 10px) !important;
    }

    .ebook-container {
      width: 100% !important;
      padding: 0 10px !important;
      gap: 14px !important;
    }

    .ebook-header,
    .ebook-reader-topbar {
      align-items: center !important;
      flex-direction: row !important;
    }

    .ebook-title {
      font-size: 1.35rem !important;
      margin-bottom: 2px !important;
    }

    .ebook-subtitle {
      font-size: 0.9rem !important;
      line-height: 1.35 !important;
    }

    .ebook-grid {
      grid-template-columns: 1fr !important;
      gap: 12px !important;
    }

    .ebook-card {
      padding: 12px !important;
      border-radius: 14px !important;
    }

    .ebook-card-title {
      font-size: 1rem !important;
    }

    .ebook-reader-panel {
      height: calc(100vh - var(--nav-h) - 120px) !important;
      min-height: 420px !important;
      border-radius: 14px !important;
      max-width: 100% !important;
    }

    .ebook-reader-title {
      font-size: 1rem !important;
    }

    /* Keep the reader from ever forcing horizontal page scroll on mobile */
    .ebook-page-reader {
      overflow-x: hidden !important;
    }

    .ebook-reader-shell,
    .ebook-reader-layout {
      max-width: 100% !important;
      min-width: 0 !important;
    }

    /* Toolbar: allow wrapping and shrink to icon-only buttons so it never
       overflows and inflates the panel width */
    .ebook-internal-toolbar {
      height: auto !important;
      min-height: 52px;
      padding: 8px 10px !important;
      gap: 8px !important;
      flex-wrap: wrap !important;
    }

    .ebook-internal-toolbar .ebook-action-btn span,
    .ebook-back-btn span {
      display: none !important;
    }

    .ebook-internal-toolbar .ebook-action-btn i,
    .ebook-back-btn i {
      margin-right: 0 !important;
    }

    .ebook-internal-toolbar .ebook-action-btn,
    .ebook-back-btn {
      padding: 8px 10px !important;
    }

    /* Title can shrink; hide the level tag on very small screens */
    .ebook-internal-toolbar h2 {
      font-size: 0.95rem !important;
    }

    /* Let the action buttons (nav / zoom / draw / fullscreen) wrap onto their
       own line instead of overflowing and clipping the last button */
    .ebook-toolbar-actions {
      margin-left: 0 !important;
      width: 100% !important;
      justify-content: flex-start !important;
      row-gap: 8px !important;
    }
  }

  @keyframes indeterminate-progress {
    0% { left: -50%; }
    50% { left: 25%; }
    100% { left: 100%; }
  }

  .ebook-progress-fill {
    animation: indeterminate-progress 1.5s infinite linear !important;
  }

  .ebook-reader-panel:fullscreen {
    width: 100vw !important;
    height: 100vh !important;
    max-height: none !important;
    border-radius: 0 !important;
    border: 0 !important;
    background: #000000 !important;
  }

  .ebook-reader-panel:fullscreen iframe {
    height: 100% !important;
    border-radius: 0 !important;
  }

  .ebook-action-btn {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .ebook-action-btn:hover {
    border-color: var(--primary-blue) !important;
    background-color: var(--light-blue) !important;
    color: var(--primary-blue) !important;
  }

  /* While drawing, let the annotation canvas capture all pointer input by
     disabling it on react-pdf's text/annotation layers (which otherwise sit
     on top of the page and swallow the events). */
  .ebook-draw-active .react-pdf__Page__textLayer,
  .ebook-draw-active .react-pdf__Page__annotations,
  .ebook-draw-active .textLayer,
  .ebook-draw-active .annotationLayer {
    pointer-events: none !important;
    user-select: none !important;
  }
`;export{_ as default};