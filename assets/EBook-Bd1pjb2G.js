import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{b as t,d as n,u as r}from"./interactive-Cdjdmhdv.js";import{C as i,L as a,j as o}from"./mcq-CTdn8LzU.js";import{i as s,n as c,r as l,t as u}from"./vendor-DqlZT81e.js";var d=e(t(),1),f=n();s.workerPort=new u;function p(){let{institute:e}=i(),[t,n]=(0,d.useState)([]),[s,c]=(0,d.useState)(null),[l,u]=(0,d.useState)(``),[p,g]=(0,d.useState)(!0),[v,b]=(0,d.useState)(!1),[C,w]=(0,d.useState)(null),[T,E]=(0,d.useState)(0),[D,O]=(0,d.useState)(``);(0,d.useEffect)(()=>()=>{l&&l.startsWith(`blob:`)&&URL.revokeObjectURL(l)},[l]),(0,d.useEffect)(()=>(document.body.classList.toggle(`ebook-reader-focus`,!!s),()=>document.body.classList.remove(`ebook-reader-focus`)),[s]),(0,d.useEffect)(()=>{let t=!0;async function r(){g(!0),w(null);let r=await a(e?.id,`ebook`);t&&(n(r.data),w(r.error),g(!1))}return r(),()=>{t=!1}},[e?.id]);async function k(e){c(e),u(``),E(0),b(!0);let t=await o(e.id);if(t.error){w(t.error),c(null),b(!1);return}try{let n=await fetch(t.data.downloadUrl);if(!n.ok)throw Error(`Failed to download e-book`);if((n.headers.get(`content-type`)||``).includes(`application/pdf`)||y(e)){let e;if(n.body&&typeof n.body.getReader==`function`){let t=n.body.getReader(),r=+(n.headers.get(`Content-Length`)||0),i=0,a=[];for(;;){let{done:e,value:n}=await t.read();if(e)break;a.push(n),i+=n.length,r&&E(Math.round(i/r*100))}e=new Uint8Array(i);let o=0;for(let t of a)e.set(t,o),o+=t.length}else{let t=await n.arrayBuffer();e=new Uint8Array(t),E(100)}let t=new Blob([e],{type:`application/pdf`});u(URL.createObjectURL(t))}else u(t.data.downloadUrl)}catch(e){w(e),c(null)}finally{b(!1)}}function A(){l&&l.startsWith(`blob:`)&&URL.revokeObjectURL(l),c(null),u(``),E(0),b(!1)}let j=s?y(s):!1,M=t.filter(e=>e.title?.toLowerCase().includes(D.toLowerCase())||e.level&&String(e.level).includes(D));return(0,f.jsxs)(`div`,{className:`page-wrap ebook-page ${s?`ebook-page-reader`:``}`,children:[(0,f.jsx)(`style`,{children:S}),(0,f.jsx)(r,{}),(0,f.jsx)(`div`,{className:`ebook-container ${s?`ebook-container-reader`:``}`,style:x.container,children:s?(0,f.jsx)(h,{book:s,books:t,readerUrl:l,loading:v,isPdf:j,onBack:A,onOpenBook:k,downloadProgress:T}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(`div`,{className:`ebook-header-banner premium-banner`,style:{position:`relative`,overflow:`hidden`,borderRadius:`26px`,padding:`32px 24px`,border:`1px solid rgba(255, 255, 255, 0.82)`,display:`flex`,flexDirection:`column`,gap:`8px`,marginBottom:`8px`},children:[(0,f.jsx)(`span`,{className:`setup-badge`,style:{background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`inline-block`,alignSelf:`flex-start`,margin:0},children:`Digital Library`}),(0,f.jsx)(`h1`,{style:{fontFamily:`Sora, sans-serif`,fontSize:`2.2rem`,fontWeight:`900`,color:`var(--dark-blue)`,margin:0},children:`E-Books`}),(0,f.jsxs)(`p`,{style:{color:`var(--text-light)`,fontSize:`1.05rem`,fontWeight:`500`,margin:0,lineHeight:1.4},children:[`Choose a book and start reading (`,t.length,` books available).`]})]}),(0,f.jsxs)(`div`,{style:x.searchContainer,className:`ebook-search-wrapper`,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-magnifying-glass`,style:x.searchIcon}),(0,f.jsx)(`input`,{type:`text`,placeholder:`Search by title or level...`,value:D,onChange:e=>O(e.target.value),style:x.searchInput,className:`ebook-search-input`}),D&&(0,f.jsx)(`button`,{onClick:()=>O(``),style:x.clearSearchBtn,children:(0,f.jsx)(`i`,{className:`fa-solid fa-xmark`})})]}),p?(0,f.jsx)(_,{icon:`fa-circle-notch fa-spin`,title:`Loading e-books...`}):null,C?(0,f.jsx)(_,{icon:`fa-triangle-exclamation`,title:C.message,tone:`error`}):null,!p&&!C&&!t.length?(0,f.jsx)(_,{icon:`fa-book-open`,title:`No e-books assigned yet.`}):null,D&&!M.length?(0,f.jsx)(_,{icon:`fa-magnifying-glass`,title:`No books match "${D}"`}):null,(0,f.jsx)(`div`,{className:`ebook-grid`,style:x.grid,children:M.map((e,t)=>(0,f.jsx)(m,{asset:e,index:t,onOpen:()=>k(e)},e.id))})]})})]})}function m({asset:e,index:t,onOpen:n}){let r=b(t);return(0,f.jsxs)(`article`,{className:`ebook-card`,style:x.card,children:[(0,f.jsxs)(`div`,{style:{...x.cover,background:r.background},className:`ebook-premium-cover`,children:[(0,f.jsx)(`span`,{style:x.coverSpine}),(0,f.jsx)(`div`,{style:x.coverRibbon}),(0,f.jsx)(`div`,{style:x.coverTitleText,children:e.title}),(0,f.jsxs)(`div`,{style:x.coverFooter,children:[e.level?(0,f.jsxs)(`span`,{style:x.coverLevelTag,children:[`Lvl `,e.level]}):null,(0,f.jsx)(`span`,{style:x.coverSpineFormat,children:y(e)?`PDF`:`Book`})]})]}),(0,f.jsxs)(`div`,{style:x.cardBody,children:[(0,f.jsx)(`h2`,{className:`ebook-card-title`,style:x.cardTitle,children:e.title}),(0,f.jsxs)(`div`,{style:x.bookChips,children:[e.level?(0,f.jsxs)(`span`,{style:x.bookChip,children:[`Level `,e.level]}):null,(0,f.jsx)(`span`,{style:x.bookChip,children:y(e)?`PDF Doc`:`Book File`})]}),(0,f.jsx)(`p`,{style:x.batchText,children:v(e.asset_batches)}),(0,f.jsxs)(`button`,{className:`btn btn-primary ebook-card-btn`,style:x.button,onClick:n,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-book-open`,style:{marginRight:8}}),`Open Reader`]})]})]})}function h({book:e,books:t,readerUrl:n,loading:r,isPdf:i,onBack:a,onOpenBook:o,downloadProgress:s}){let[u,p]=(0,d.useState)(!0),[m,h]=(0,d.useState)(!1),[_,v]=(0,d.useState)(0),[y,b]=(0,d.useState)(1),[S,C]=(0,d.useState)(null),[w,T]=(0,d.useState)(0),[E,D]=(0,d.useState)(null),[O,k]=(0,d.useState)(1),[A,j]=(0,d.useState)({width:0,height:0}),[M,N]=(0,d.useState)(!1),[P,F]=(0,d.useState)(`pen`),[I,L]=(0,d.useState)(`#ef4444`),R=(0,d.useRef)(null),z=(0,d.useRef)({}),B=(0,d.useRef)(!1),V=(0,d.useRef)(null);(0,d.useEffect)(()=>{n&&(p(!0),C(null),v(0),b(1),k(1),z.current={})},[n]),(0,d.useEffect)(()=>{if(!E)return;let e=new ResizeObserver(e=>{for(let t of e)T(t.contentRect.width)});return e.observe(E),()=>e.disconnect()},[E]);function H({numPages:e}){v(e),p(!1)}function U(e){console.error(`[EBook] PDF load error:`,e),C(e),p(!1)}function W(){k(e=>Math.min(3,+(e+.25).toFixed(2)))}function G(){k(e=>Math.max(.5,+(e-.25).toFixed(2)))}function K(e,t,n,r){let i=t.points[n],a=t.points[r];if(!i||!a)return;let o=e.canvas;e.save(),t.tool===`eraser`?(e.globalCompositeOperation=`destination-out`,e.globalAlpha=1,e.lineWidth=26):(e.globalCompositeOperation=`source-over`,e.globalAlpha=t.tool===`marker`?.35:1,e.lineWidth=t.tool===`marker`?16:3),e.strokeStyle=t.color,e.lineCap=`round`,e.lineJoin=`round`,e.beginPath(),e.moveTo(i.x*o.width,i.y*o.height),e.lineTo(a.x*o.width,a.y*o.height),e.stroke(),e.restore()}function q(){let e=R.current;if(!e)return;let t=e.getContext(`2d`);t.clearRect(0,0,e.width,e.height);let n=z.current[y]||[];for(let e of n)for(let n=0;n<e.points.length-1;n++)K(t,e,n,n+1)}(0,d.useEffect)(()=>{q()},[y,A]);function J(e){let t=R.current.getBoundingClientRect();return{x:(e.clientX-t.left)/t.width,y:(e.clientY-t.top)/t.height}}function Y(e){M&&(e.preventDefault(),R.current.setPointerCapture(e.pointerId),B.current=!0,V.current={tool:P,color:I,points:[J(e)]})}function X(e){if(!M||!B.current||!V.current)return;e.preventDefault();let t=V.current;t.points.push(J(e)),K(R.current.getContext(`2d`),t,t.points.length-2,t.points.length-1)}function Z(){if(!B.current)return;B.current=!1;let e=V.current;if(V.current=null,e&&e.points.length>1){let t=z.current[y]||[];t.push(e),z.current[y]=t}}function Q(){z.current[y]=[],q()}(0,d.useEffect)(()=>{function e(){h(!!document.fullscreenElement)}return document.addEventListener(`fullscreenchange`,e),()=>document.removeEventListener(`fullscreenchange`,e)},[]);function $(){let e=document.querySelector(`.ebook-reader-panel`);e&&(document.fullscreenElement?document.exitFullscreen().then(()=>{h(!1)}):e.requestFullscreen().then(()=>{h(!0)}).catch(e=>{window.open(n,`_blank`)}))}return(0,f.jsx)(`div`,{className:`ebook-reader-shell`,style:x.readerShell,children:(0,f.jsx)(`div`,{className:`ebook-reader-layout`,style:x.readerLayout,children:(0,f.jsxs)(`main`,{className:`ebook-reader-panel`,style:x.readerPanel,children:[(0,f.jsxs)(`div`,{className:`ebook-internal-toolbar`,style:x.internalToolbar,children:[(0,f.jsxs)(`button`,{className:`ebook-back-btn`,style:x.backBtn,onClick:a,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),(0,f.jsx)(`span`,{children:`Library`})]}),(0,f.jsxs)(`div`,{style:x.toolbarTitleBlock,children:[(0,f.jsx)(`h2`,{style:x.toolbarBookTitle,children:e.title}),e.level?(0,f.jsxs)(`span`,{style:x.toolbarLevelTag,children:[`Level `,e.level]}):null]}),(0,f.jsx)(`div`,{className:`ebook-toolbar-actions`,style:{display:`flex`,gap:10,marginLeft:`auto`,flexWrap:`wrap`},children:i&&n&&(0,f.jsxs)(f.Fragment,{children:[_>1&&(0,f.jsxs)(`div`,{style:x.pageNavGroup,children:[(0,f.jsx)(`button`,{className:`ebook-action-btn`,style:x.pageNavBtn,disabled:y<=1,onClick:()=>b(e=>Math.max(1,e-1)),children:(0,f.jsx)(`i`,{className:`fa-solid fa-chevron-left`})}),(0,f.jsxs)(`span`,{style:x.pageNavLabel,children:[y,` / `,_]}),(0,f.jsx)(`button`,{className:`ebook-action-btn`,style:x.pageNavBtn,disabled:y>=_,onClick:()=>b(e=>Math.min(_,e+1)),children:(0,f.jsx)(`i`,{className:`fa-solid fa-chevron-right`})})]}),(0,f.jsxs)(`div`,{style:x.pageNavGroup,children:[(0,f.jsx)(`button`,{className:`ebook-action-btn`,style:x.pageNavBtn,onClick:G,disabled:O<=.5,children:(0,f.jsx)(`i`,{className:`fa-solid fa-magnifying-glass-minus`})}),(0,f.jsxs)(`span`,{style:x.pageNavLabel,children:[Math.round(O*100),`%`]}),(0,f.jsx)(`button`,{className:`ebook-action-btn`,style:x.pageNavBtn,onClick:W,disabled:O>=3,children:(0,f.jsx)(`i`,{className:`fa-solid fa-magnifying-glass-plus`})})]}),(0,f.jsxs)(`button`,{className:`ebook-action-btn`,style:{...x.actionButton,...M?x.actionButtonActive:{}},onClick:()=>N(e=>!e),children:[(0,f.jsx)(`i`,{className:`fa-solid fa-pen`,style:{marginRight:8}}),(0,f.jsx)(`span`,{children:M?`Stop Drawing`:`Draw`})]}),(0,f.jsxs)(`button`,{className:`ebook-action-btn`,style:x.actionButton,onClick:$,children:[(0,f.jsx)(`i`,{className:`fa-solid ${m?`fa-compress`:`fa-expand`}`,style:{marginRight:8}}),(0,f.jsx)(`span`,{children:m?`Exit`:`Fullscreen`})]})]})})]}),i&&n&&M&&(0,f.jsxs)(`div`,{style:x.annotationToolbar,children:[(0,f.jsxs)(`div`,{style:x.toolGroup,children:[(0,f.jsx)(`button`,{style:{...x.toolBtn,...P===`pen`?x.toolBtnActive:{}},onClick:()=>F(`pen`),title:`Pen`,children:(0,f.jsx)(`i`,{className:`fa-solid fa-pen`})}),(0,f.jsx)(`button`,{style:{...x.toolBtn,...P===`marker`?x.toolBtnActive:{}},onClick:()=>F(`marker`),title:`Marker`,children:(0,f.jsx)(`i`,{className:`fa-solid fa-highlighter`})}),(0,f.jsx)(`button`,{style:{...x.toolBtn,...P===`eraser`?x.toolBtnActive:{}},onClick:()=>F(`eraser`),title:`Eraser`,children:(0,f.jsx)(`i`,{className:`fa-solid fa-eraser`})})]}),(0,f.jsxs)(`div`,{style:x.toolGroup,children:[[`#ef4444`,`#2563eb`,`#16a34a`,`#f59e0b`,`#111827`].map(e=>(0,f.jsx)(`button`,{style:{...x.colorSwatch,background:e,...I===e?x.colorSwatchActive:{}},onClick:()=>L(e)},e)),(0,f.jsx)(`input`,{type:`color`,value:I,onChange:e=>L(e.target.value),style:x.colorInput})]}),(0,f.jsx)(`button`,{style:x.toolBtn,onClick:Q,title:`Clear page`,children:(0,f.jsx)(`i`,{className:`fa-solid fa-trash`})})]}),(0,f.jsx)(`div`,{style:x.iframeContainer,children:r?(0,f.jsxs)(`div`,{style:x.iframeLoaderOverlay,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`,style:{fontSize:`2.5rem`,color:`var(--primary-blue)`,marginBottom:16}}),(0,f.jsx)(`h3`,{style:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,margin:0,fontWeight:700},children:s>0?`Loading Book (${s}%)`:`Opening your book...`}),(0,f.jsx)(`p`,{style:{color:`var(--text-light)`,fontSize:`0.85rem`,margin:`4px 0 0`},children:`Please wait while the book is prepared.`}),(0,f.jsx)(`div`,{style:x.progressBarBg,children:(0,f.jsx)(`div`,{style:{...x.progressBarFill,width:s>0?`${s}%`:`50%`,left:s>0?0:void 0},className:s>0?``:`ebook-progress-fill`})})]}):i&&n?(0,f.jsxs)(`div`,{ref:D,style:x.pdfScrollArea,children:[u&&(0,f.jsxs)(`div`,{style:x.iframeLoaderOverlay,children:[(0,f.jsx)(`i`,{className:`fa-solid fa-circle-notch fa-spin`,style:{fontSize:`2.5rem`,color:`var(--primary-blue)`,marginBottom:16}}),(0,f.jsx)(`h3`,{style:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,margin:0,fontWeight:700},children:`Loading PDF Document...`}),(0,f.jsx)(`p`,{style:{color:`var(--text-light)`,fontSize:`0.85rem`,margin:`4px 0 0`},children:`Please wait while the book is prepared.`}),(0,f.jsx)(`div`,{style:x.progressBarBg,children:(0,f.jsx)(`div`,{style:x.progressBarFill,className:`ebook-progress-fill`})})]}),S?(0,f.jsx)(g,{icon:`fa-triangle-exclamation`,title:`Couldn't display this PDF`,detail:(0,f.jsxs)(f.Fragment,{children:[`Please try reopening the book.`,S?.message?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`br`,{}),(0,f.jsx)(`span`,{style:{fontSize:`0.72rem`,opacity:.7},children:String(S.message)})]}):null]})}):(0,f.jsx)(l,{file:n,onLoadSuccess:H,onLoadError:U,onSourceError:U,loading:null,error:null,children:w>0&&(0,f.jsxs)(`div`,{style:x.pageStage,className:M?`ebook-draw-active`:``,children:[(0,f.jsx)(c,{pageNumber:y,width:Math.max(200,(w-32)*O),renderAnnotationLayer:!0,renderTextLayer:!0,onRenderSuccess:e=>j({width:e.width,height:e.height})}),A.width>0&&(0,f.jsx)(`canvas`,{ref:R,width:A.width,height:A.height,style:{...x.annotationCanvas,width:A.width,height:A.height,pointerEvents:M?`auto`:`none`,cursor:M?P===`eraser`?`cell`:`crosshair`:`default`,touchAction:M?`none`:`auto`},onPointerDown:Y,onPointerMove:X,onPointerUp:Z,onPointerLeave:Z})]})})]}):(0,f.jsx)(g,{icon:`fa-file-lines`,title:`Preview is not available for this file type`,detail:`Ask your teacher to upload this e-book as a PDF so it can open inside the student portal.`})})]})})})}function g({icon:e,title:t,detail:n}){return(0,f.jsxs)(`div`,{style:x.readerState,children:[(0,f.jsx)(`i`,{className:`fa-solid ${e}`}),(0,f.jsx)(`h2`,{children:t}),n?(0,f.jsx)(`p`,{children:n}):null]})}function _({icon:e,title:t,tone:n}){return(0,f.jsxs)(`div`,{style:{...x.state,...n===`error`?x.error:{}},children:[(0,f.jsx)(`i`,{className:`fa-solid ${e}`}),(0,f.jsx)(`span`,{children:t})]})}function v(e=[]){let t=e.map(e=>e.batches?.name).filter(Boolean);return t.length?t.join(`, `):`Assigned book`}function y(e){return e.content_type===`application/pdf`||e.metadata?.content_type===`application/pdf`||e.file_name?.toLowerCase().endsWith(`.pdf`)}function b(e){let t=[`linear-gradient(145deg, #2563eb, #0f766e)`,`linear-gradient(145deg, #7c3aed, #2563eb)`,`linear-gradient(145deg, #f59e0b, #dc2626)`,`linear-gradient(145deg, #059669, #0284c7)`,`linear-gradient(145deg, #db2777, #7c3aed)`,`linear-gradient(145deg, #0891b2, #4338ca)`];return{background:t[e%t.length]}}var x={container:{width:`100%`,display:`flex`,flexDirection:`column`,gap:24,padding:`20px 28px 60px`,boxSizing:`border-box`},header:{display:`flex`,justifyContent:`flex-start`,alignItems:`center`,gap:14,background:`linear-gradient(135deg, rgba(255,255,255,0.94), color-mix(in srgb, var(--primary-blue) 9%, white))`,border:`1px solid var(--border)`,borderRadius:18,padding:18,boxShadow:`var(--shadow)`},headerIcon:{width:58,height:58,borderRadius:16,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:24,flexShrink:0},headerText:{flex:1,minWidth:0},title:{fontFamily:`Sora, sans-serif`,fontSize:`2rem`,color:`var(--dark-blue)`,marginBottom:4},subtitle:{color:`var(--text-light)`,fontSize:`1rem`,fontWeight:700},libraryBadge:{background:`var(--light-blue)`,color:`var(--primary-blue)`,borderRadius:999,padding:`10px 16px`,fontWeight:900,display:`flex`,alignItems:`center`,gap:8,whiteSpace:`nowrap`},grid:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(300px, 1fr))`,gap:16},card:{background:`rgba(255,255,255,0.9)`,border:`1px solid var(--border)`,borderRadius:18,padding:16,display:`flex`,gap:16,boxShadow:`var(--shadow)`,minHeight:164},cover:{width:110,height:154,borderRadius:`6px 14px 14px 6px`,color:`white`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`space-between`,flexShrink:0,boxShadow:`5px 8px 18px color-mix(in srgb, var(--primary-blue) 30%, transparent)`,position:`relative`,overflow:`hidden`,transition:`transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,border:`1px solid rgba(255, 255, 255, 0.15)`},coverSpine:{position:`absolute`,left:0,top:0,bottom:0,width:12,background:`rgba(255,255,255,0.18)`,borderRight:`1px solid rgba(0,0,0,0.12)`},coverRibbon:{position:`absolute`,top:0,right:14,width:12,height:38,background:`#facc15`,borderRadius:`0 0 4px 4px`,boxShadow:`0 2px 6px rgba(0,0,0,0.15)`,zIndex:2},coverTitleText:{fontFamily:`Sora, sans-serif`,fontSize:`0.8rem`,fontWeight:800,textAlign:`center`,color:`white`,width:`100%`,padding:`0 10px 0 16px`,lineHeight:1.25,zIndex:2,marginTop:20,display:`-webkit-box`,WebkitLineClamp:3,WebkitBoxOrient:`vertical`,overflow:`hidden`,textShadow:`0 2px 4px rgba(0,0,0,0.3)`},coverFooter:{position:`absolute`,bottom:10,left:16,right:10,display:`flex`,justifyContent:`space-between`,alignItems:`center`,zIndex:2},coverLevelTag:{fontSize:`0.62rem`,fontWeight:900,background:`rgba(255, 255, 255, 0.22)`,padding:`2px 6px`,borderRadius:999,backdropFilter:`blur(4px)`,color:`white`},coverSpineFormat:{fontSize:`0.62rem`,fontWeight:900,opacity:.9,textTransform:`uppercase`,letterSpacing:`0.5px`,color:`white`},cardBody:{minWidth:0,display:`flex`,flexDirection:`column`,gap:10,flex:1},cardTitle:{fontFamily:`Sora, sans-serif`,fontSize:`1.18rem`,color:`var(--dark-blue)`,lineHeight:1.25},meta:{color:`var(--text-light)`,fontSize:`0.88rem`,fontWeight:700},bookChips:{display:`flex`,gap:8,flexWrap:`wrap`},bookChip:{background:`var(--light-blue)`,color:`var(--primary-blue)`,borderRadius:999,padding:`4px 9px`,fontSize:`0.72rem`,fontWeight:900},batchText:{color:`var(--text-main)`,fontSize:`0.92rem`,fontWeight:800},button:{width:`fit-content`,padding:`11px 20px`,marginTop:`auto`},readerShell:{display:`flex`,flexDirection:`column`,gap:12},readerTopbar:{display:`flex`,alignItems:`center`,gap:14,padding:0},actionButton:{border:`1px solid var(--border)`,background:`white`,color:`var(--primary-blue)`,borderRadius:999,padding:`8px 14px`,fontWeight:900,display:`inline-flex`,alignItems:`center`,cursor:`pointer`,fontSize:`0.85rem`,boxShadow:`var(--shadow)`},actionButtonActive:{background:`var(--primary-blue)`,color:`white`,border:`1px solid var(--primary-blue)`},readerLayout:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr)`,gap:16,alignItems:`start`},readerPanel:{height:`calc(100vh - var(--nav-h) - 58px)`,minHeight:560,background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:24,overflow:`hidden`,boxShadow:`var(--shadow)`,display:`flex`,flexDirection:`column`},pdfFrame:{width:`100%`,height:`100%`,border:0,display:`block`,background:`white`},pdfScrollArea:{width:`100%`,height:`100%`,minHeight:0,overflow:`auto`,display:`block`,textAlign:`center`,padding:`12px`,boxSizing:`border-box`},pageStage:{position:`relative`,display:`inline-block`},annotationCanvas:{position:`absolute`,top:0,left:0,zIndex:10},annotationToolbar:{display:`flex`,alignItems:`center`,gap:14,padding:`8px 20px`,borderBottom:`1px solid var(--border)`,background:`rgba(255, 255, 255, 0.75)`,backdropFilter:`blur(12px)`,flexWrap:`wrap`},toolGroup:{display:`flex`,alignItems:`center`,gap:6,border:`1px solid var(--border)`,background:`white`,borderRadius:999,padding:`4px 6px`},toolBtn:{border:`1px solid var(--border)`,background:`white`,color:`var(--primary-blue)`,borderRadius:999,width:32,height:32,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,cursor:`pointer`,fontSize:`0.85rem`},toolBtnActive:{background:`var(--primary-blue)`,color:`white`,border:`1px solid var(--primary-blue)`},colorSwatch:{width:22,height:22,borderRadius:`50%`,border:`2px solid white`,boxShadow:`0 0 0 1px var(--border)`,cursor:`pointer`,padding:0},colorSwatchActive:{boxShadow:`0 0 0 2px var(--primary-blue)`},colorInput:{width:26,height:26,padding:0,border:`none`,background:`none`,cursor:`pointer`},pageNavGroup:{display:`flex`,alignItems:`center`,gap:8,border:`1px solid var(--border)`,background:`white`,borderRadius:999,padding:`4px 10px`,boxShadow:`var(--shadow)`},pageNavBtn:{border:0,background:`transparent`,color:`var(--primary-blue)`,cursor:`pointer`,padding:`4px 6px`,fontSize:`0.85rem`},pageNavLabel:{fontSize:`0.8rem`,fontWeight:800,color:`var(--dark-blue)`,whiteSpace:`nowrap`},readerState:{height:`100%`,minHeight:360,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,textAlign:`center`,gap:12,padding:24,color:`var(--dark-blue)`},readerList:{background:`rgba(255, 255, 255, 0.45)`,border:`1px solid var(--border)`,borderRadius:18,padding:12,boxShadow:`var(--shadow)`,maxHeight:`calc(100vh - var(--nav-h) - 110px)`,overflowY:`auto`},readerListHeader:{color:`var(--primary-blue)`,fontWeight:900,textTransform:`uppercase`,fontSize:`0.75rem`,margin:`4px 4px 10px`},readerBook:{width:`100%`,border:`1px solid var(--border)`,background:`rgba(255,255,255,0.72)`,borderRadius:14,padding:12,display:`flex`,alignItems:`center`,gap:10,marginBottom:10,cursor:`pointer`,color:`var(--dark-blue)`},readerBookActive:{background:`var(--light-blue)`,borderColor:`var(--primary-blue)`},readerBookIcon:{width:38,height:46,borderRadius:9,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},readerBookText:{minWidth:0,textAlign:`left`,display:`flex`,flexDirection:`column`,gap:3,lineHeight:1.2},state:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:16,padding:20,display:`flex`,alignItems:`center`,gap:12,color:`var(--dark-blue)`,fontWeight:800},error:{color:`#b91c1c`,borderColor:`#fecaca`,background:`#fff5f5`},iframeLoaderOverlay:{position:`absolute`,inset:0,background:`var(--card-bg)`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,zIndex:10,borderRadius:20},progressBarBg:{width:`200px`,height:`6px`,background:`var(--light-blue)`,borderRadius:`3px`,marginTop:`16px`,overflow:`hidden`,position:`relative`},progressBarFill:{height:`100%`,width:`50%`,background:`var(--primary-blue)`,borderRadius:`3px`,position:`absolute`,left:`-50%`},searchContainer:{position:`relative`,display:`flex`,alignItems:`center`,background:`rgba(255, 255, 255, 0.8)`,border:`1px solid var(--border)`,borderRadius:16,padding:`0 16px`,height:48,boxShadow:`var(--shadow)`,maxWidth:480,width:`100%`,marginBottom:8},searchIcon:{color:`var(--text-light)`,fontSize:`1rem`,marginRight:10},searchInput:{border:0,outline:`none`,background:`transparent`,width:`100%`,fontSize:`0.95rem`,color:`var(--dark-blue)`,fontWeight:600},clearSearchBtn:{border:0,background:`transparent`,color:`var(--text-light)`,cursor:`pointer`,padding:4,display:`flex`,alignItems:`center`,justifyContent:`center`},iframeContainer:{flex:1,minHeight:0,width:`100%`,position:`relative`,overflow:`hidden`,background:`linear-gradient(135deg, #eef6ff, #ffffff)`},internalToolbar:{height:60,borderBottom:`1px solid var(--border)`,background:`rgba(255, 255, 255, 0.65)`,backdropFilter:`blur(12px)`,display:`flex`,alignItems:`center`,padding:`0 20px`,gap:14,zIndex:5},backBtn:{border:`1px solid var(--border)`,background:`white`,color:`var(--primary-blue)`,borderRadius:999,padding:`8px 14px`,fontWeight:900,display:`inline-flex`,alignItems:`center`,gap:6,cursor:`pointer`,fontSize:`0.85rem`,transition:`all 0.2s ease`},toolbarTitleBlock:{display:`flex`,alignItems:`center`,gap:10,marginLeft:8,minWidth:0},toolbarBookTitle:{fontFamily:`Sora, sans-serif`,fontSize:`1.05rem`,fontWeight:800,color:`var(--dark-blue)`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,margin:0},toolbarLevelTag:{fontSize:`0.7rem`,fontWeight:900,background:`var(--light-blue)`,color:`var(--primary-blue)`,padding:`3px 8px`,borderRadius:999,whiteSpace:`nowrap`}},S=`
  .ebook-page {
    align-items: stretch !important;
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
`;export{p as default};