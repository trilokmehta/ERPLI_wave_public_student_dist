import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Dt as t,Et as n,F as r,I as i,Kt as a,O as o,P as s,Pt as c,Q as l,U as u,Ut as d,Z as f,_ as p,_t as m,dt as h,ft as g,gt as _,m as v,ot as ee,q as y,st as b,u as x}from"./interactive-DJFVKhAI.js";import{_ as S}from"./index-kbdqGtCO.js";import{n as C,t as w}from"./KidResultCard-C4bX3Zu4.js";import{n as te,t as T}from"./contentLevels-BDc0wFeC.js";var E=e(a(),1),D=l();function O(e){return e.submission?.status===`released`||e.submission?.status===`submitted`}function k({exam:e,color:t,showSubject:n}){let r=d(),i=Date.now(),a=e.submission,o=O(e),s=!a&&e.opens_at&&i<Date.parse(e.opens_at),c=!a&&e.closes_at&&i>=Date.parse(e.closes_at),l=o?`Done`:a?.status===`in_progress`?`In progress`:s?`Not open yet`:c?`Missed`:`Ready`,u=o?`Review`:a?.status===`in_progress`?`Resume`:`Start exam`,f=()=>{s||c||r(o?`/chess/exams/${e.id}/results`:`/chess/exams/${e.id}`)};return(0,D.jsxs)(`article`,{className:`exm-card ${o?`exm-card-done`:``}`,style:{"--stop-color":t},onClick:f,children:[(0,D.jsxs)(`div`,{className:`exm-head`,children:[(0,D.jsx)(`span`,{className:`exm-icon`,children:(0,D.jsx)(`i`,{className:`fa-solid fa-chess`})}),(0,D.jsxs)(`span`,{className:`exm-status ${o?`exm-status-done`:``}`,children:[(0,D.jsx)(`i`,{className:`fa-solid ${o?`fa-circle-check`:`fa-circle`}`}),l]})]}),(0,D.jsx)(`h2`,{className:`exm-title`,title:e.title,children:e.title}),(0,D.jsxs)(`p`,{className:`exm-sub`,children:[n?`Chess · `:``,e.question_count,` questions`]}),(0,D.jsxs)(`div`,{className:`exm-chips`,children:[e.duration_minutes?(0,D.jsxs)(`span`,{children:[(0,D.jsx)(`i`,{className:`fa-regular fa-clock`}),e.duration_minutes,` min`]}):null,(0,D.jsxs)(`span`,{children:[(0,D.jsx)(`i`,{className:`fa-solid fa-star`}),e.max_score,` marks`]})]}),(0,D.jsxs)(`div`,{className:`exm-foot`,children:[a?.status===`released`?(0,D.jsxs)(`span`,{className:`exm-score`,children:[(0,D.jsx)(`i`,{className:`fa-solid fa-star`,"aria-hidden":`true`}),a.score??`-`,(0,D.jsxs)(`small`,{children:[`/`,a.max_score]})]}):a?.status===`submitted`?(0,D.jsx)(`span`,{className:`exm-sub`,children:`Awaiting review`}):(0,D.jsx)(`span`,{}),s||c?null:(0,D.jsxs)(`button`,{className:`exm-btn ${o?`exm-btn-ghost`:``}`,onClick:e=>{e.stopPropagation(),f()},children:[u,(0,D.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]})]})}var A={k:`♚︎`,q:`♛︎`,r:`♜︎`,b:`♝︎`,n:`♞︎`,p:`♟︎`},j=`abcdefgh`;function M(e){let[t=``,n=`w`]=String(e||``).split(` `),r=t.split(`/`).slice(0,8).map(e=>{let t=[];for(let n of e)if(/\d/.test(n))for(let e=0;e<Number(n);e++)t.push(null);else t.push(n);return t.slice(0,8)});for(;r.length<8;)r.push(Array(8).fill(null));return{rows:r,flipped:n===`b`}}function N({fen:e,size:t=280,label:n=`Chess position`}){let{rows:r,flipped:i}=M(e),a=[...Array(8).keys()],o=i?[...a].reverse():a,s=i?[...a].reverse():a,c=t/8;return(0,D.jsx)(`div`,{role:`img`,"aria-label":n,style:{display:`inline-block`,width:t,maxWidth:`100%`,containerType:`inline-size`},children:(0,D.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(8, 1fr)`,width:`100%`,aspectRatio:`1 / 1`,borderRadius:8,overflow:`hidden`,boxShadow:`0 2px 10px rgba(0,0,0,0.15)`},children:o.map(e=>s.map(t=>{let n=r[e][t],a=(e+t)%2==0,o=n&&n===n.toUpperCase();return(0,D.jsxs)(`div`,{style:{background:a?`#f0d9b5`:`#b58863`,display:`flex`,alignItems:`center`,justifyContent:`center`,position:`relative`,fontSize:`min(${c*.85}px, 10.6cqw)`,lineHeight:1},children:[n?(0,D.jsx)(`span`,{style:{color:o?`#ffffff`:`#1f1f1f`,WebkitTextStroke:o?`0.6px #333`:`0`,textShadow:o?`0 0 1px #333, 0 1px 2px rgba(0,0,0,0.4)`:`0 1px 1px rgba(255,255,255,0.25)`,fontFamily:`"Segoe UI Symbol", "DejaVu Sans", "Noto Sans Symbols 2", serif`},children:A[n.toLowerCase()]}):null,(i?e===0:e===7)?(0,D.jsx)(`span`,{style:{position:`absolute`,right:2,bottom:0,fontSize:`min(${Math.max(8,c*.2)}px, 2.4cqw)`,color:a?`#b58863`:`#f0d9b5`,fontWeight:700},children:j[t]}):null,(i?t===7:t===0)?(0,D.jsx)(`span`,{style:{position:`absolute`,left:2,top:1,fontSize:`min(${Math.max(8,c*.2)}px, 2.4cqw)`,color:a?`#b58863`:`#f0d9b5`,fontWeight:700},children:8-e}):null]},`${e}-${t}`)}))})})}var P=[{value:`addition`,label:`Addition`},{value:`subtraction`,label:`Subtraction`},{value:`mixed_add_sub`,label:`Add & Subtract (Mixed)`},{value:`negative_numbers`,label:`Negative Numbers`},{value:`decimal_add_sub`,label:`Decimal Add & Subtract`},{value:`multiplication`,label:`Multiplication`},{value:`long_multiplication`,label:`Long Multiplication`},{value:`times_table`,label:`Times Table`},{value:`decimal_multiply`,label:`Decimal Multiply`},{value:`division`,label:`Division`},{value:`long_division`,label:`Long Division`},{value:`division_remainder`,label:`Division with Remainder`},{value:`decimal_division`,label:`Decimal Division`},{value:`lcm`,label:`LCM (Lowest Common Multiple)`},{value:`hcf`,label:`HCF (Highest Common Factor)`},{value:`fraction_add`,label:`Fraction Add & Subtract`},{value:`fraction_multiply`,label:`Fraction Multiply & Divide`},{value:`squares`,label:`Squares`},{value:`square_roots`,label:`Square Roots`},{value:`cubes`,label:`Cubes`},{value:`cube_roots`,label:`Cube Roots`},{value:`percentages`,label:`Percentages`}];P.slice(0,5),P.slice(5,10),P.slice(10,16),P.slice(16);function F(e,t){for(;t;){let n=t;t=e%t,e=n}return e}function I(e,t){return e*t/F(e,t)}function L(e,t){return Math.floor(Math.random()*(t-e+1))+e}function R(e,t){let n=F(Math.abs(e),Math.abs(t));return[e/n,t/n]}function z(e){let{operation:t,numQuestions:n=20,numRows:r=4,minVal:i=1,maxVal:a=10,decimals:o=1,minF1:s=2,maxF1:c=12,minF2:l=2,maxF2:u=12,minTable:d=2,maxTable:f=10,minPct:p=5,maxPct:m=50,isDirect:h=!1,rule:g=h?`direct`:`any`}=e,_=[];for(let e=0;e<n;e++)if(t===`squares`){let e=L(i,a);_.push({type:`horizontal`,prompt:`${e}² = `,answer:e*e})}else if(t===`square_roots`){let e=L(i,a);_.push({type:`horizontal`,prompt:`√${e*e} = `,answer:e})}else if(t===`cubes`){let e=L(i,a);_.push({type:`horizontal`,prompt:`${e}³ = `,answer:e*e*e})}else if(t===`cube_roots`){let e=L(i,a);_.push({type:`horizontal`,prompt:`∛${e*e*e} = `,answer:e})}else if(t===`lcm`){let e=Array.from({length:r},()=>L(i,a)),t=e[0];for(let n=1;n<e.length;n++)t=I(t,e[n]);_.push({type:`horizontal`,prompt:`LCM(${e.join(`, `)}) = `,answer:t})}else if(t===`hcf`){let e=Array.from({length:r},()=>L(i,a)),t=e[0];for(let n=1;n<e.length;n++)t=F(t,e[n]);_.push({type:`horizontal`,prompt:`HCF(${e.join(`, `)}) = `,answer:t})}else if(t===`percentages`){let e=L(p,m),t=L(i,a),n=parseFloat((e*t/100).toFixed(2));_.push({type:`horizontal`,prompt:`${e}% of ${t.toLocaleString()} = `,answer:n})}else if(t===`times_table`){let e=L(d,f),t=L(1,10);_.push({type:`horizontal`,prompt:`${e} × ${t} = `,answer:e*t})}else if(t===`multiplication`||t===`long_multiplication`){let e=L(s,c),t=L(l,u);_.push({type:`horizontal`,prompt:`${e.toLocaleString()} × ${t.toLocaleString()} = `,answer:e*t})}else if(t===`decimal_multiply`){let e=parseInt(o)||1,t=10**e,n=Math.ceil(i*t),r=Math.floor(a*t),s=L(n,r),c=L(n,r),l=(s/t).toFixed(e),u=(c/t).toFixed(e),d=parseFloat((s*c/(t*t)).toFixed(e*2));_.push({type:`horizontal`,prompt:`${l} × ${u} = `,answer:d})}else if(t===`division`){let e=L(s,c),t=L(l,u);_.push({type:`horizontal`,prompt:`${(e*t).toLocaleString()} ÷ ${e.toLocaleString()} = `,answer:t})}else if(t===`long_division`){let e=L(l,u),t=L(s,c);_.push({type:`horizontal`,prompt:`${(e*t).toLocaleString()} ÷ ${e.toLocaleString()} = `,answer:t})}else if(t===`division_remainder`){let e=L(l,u),t=L(s,c),n=L(0,e-1),r=e*t+n,i=n===0?`${t}`:`${t} R ${n}`;_.push({type:`horizontal`,prompt:`${r.toLocaleString()} ÷ ${e.toLocaleString()} = `,answer:i})}else if(t===`decimal_division`){let e=parseInt(o)||1,t=L(1,e),n=Math.max(0,L(-1,e)),r=Math.max(1,Math.ceil(i)),s=Math.floor(a),c=L(r,s),l=L(r,s),u=n+t,d=c*l,f=parseFloat((d/10**u).toFixed(u)).toString(),p=parseFloat((l/10**t).toFixed(t)).toString(),m=parseFloat((c/10**n).toFixed(n)).toString();_.push({type:`horizontal`,prompt:`${f} ÷ ${p} = `,answer:parseFloat(m)})}else if(t===`fraction_add`){let e=L(2,Math.min(a,12)),t=L(2,Math.min(a,12)),n=L(1,e-1),r=L(1,t-1),i=Math.random()<.5,[o,s]=R(i?n*t-r*e:n*t+r*e,e*t),c=i?`−`:`+`,l=s===1?`${o}`:`${o}/${s}`;_.push({type:`horizontal`,prompt:`${n}/${e} ${c} ${r}/${t} = `,answer:l})}else if(t===`fraction_multiply`){let e=L(2,Math.min(a,9)),t=L(2,Math.min(a,9)),n=L(1,e),r=L(1,t),i=Math.random()<.5,o,s,c;i?([o,s]=R(n*t,e*r),c=`÷`):([o,s]=R(n*r,e*t),c=`×`);let l=s===1?`${o}`:`${o}/${s}`;_.push({type:`horizontal`,prompt:`${n}/${e} ${c} ${r}/${t} = `,answer:l})}else if(t===`addition`)_.push(re({numRows:r,minVal:i,maxVal:a,rule:g}));else if(t===`subtraction`)_.push(V({numRows:r,minVal:i,maxVal:a,rule:g}));else if(t===`negative_numbers`){let e=[],t=0,n=Math.abs(i),o=Math.abs(a);for(let i=0;i<r;i++){let r=L(n,o),a=Math.random()<.4?-r:r;i===0?(t=a,e.push({prefix:``,value:a})):(t+=a,e.push({prefix:a>=0?`+`:`-`,value:r}))}_.push({type:`vertical`,rows:e,answer:t})}else if(t===`decimal_add_sub`){let e=parseInt(o)||1,t=10**e,n=0,s=[];for(let o=0;o<r;o++){let r=Math.ceil(i*t),c=Math.floor(a*t);r>=c&&(r=Math.ceil(t),c=Math.floor(10*t));let l=L(r,c),u=(l/t).toFixed(e);o===0?(s.push({prefix:``,value:u}),n=l):Math.random()<.5&&n-l>=0?(s.push({prefix:`-`,value:u}),n-=l):(s.push({prefix:`+`,value:u}),n+=l)}_.push({type:`vertical`,rows:s,answer:parseFloat((n/t).toFixed(e))})}else _.push(H({numRows:r,minVal:i,maxVal:a,rule:g}));return _}var ne=60;function B(e,t){if(!s(e))return{...t(!0),ruleOk:!0};let n=null;for(let i=0;i<ne;i++){let i=t(!1);if(i){if(r(i.values,e))return{...i,ruleOk:!0};n||=i}}return{...n||t(!0),ruleOk:!1}}function re({numRows:e,minVal:t,maxVal:n,rule:r}){return B(r,a=>{let o=[],s=[],c=0;for(let l=0;l<e;l++){let u;if(l===0)u=L(t,n);else if(u=i({total:c,min:t,max:n,rule:r,lookahead:l<e-1,lookaheadSubtract:!1}),u===null){if(!a)return null;u=L(t,n)}c+=u,s.push(u),o.push({prefix:l>0?`+`:``,value:u})}return{type:`vertical`,rows:o,answer:c,values:s}})}function V({numRows:e,minVal:t,maxVal:n,rule:r}){return B(r,a=>{let o=L(Math.ceil(t*e),n*e),s=[{prefix:``,value:o}],c=[o],l=o;for(let n=1;n<e;n++){let o=Math.max(t,Math.floor(l/(e-n))),u=i({total:l,min:t,max:o,rule:r,subtract:!0,lookahead:n<e-1});if(u===null||l-u<1){if(!a)return null;u=L(t,o)}l-=u,c.push(-u),s.push({prefix:`−`,value:u})}return{type:`vertical`,rows:s,answer:l,values:c}})}function H({numRows:e,minVal:t,maxVal:n,rule:r}){return B(r,a=>{let o=[],s=[],c=0;for(let l=0;l<e;l++){if(l===0){let e=L(t,n);c=e,s.push(e),o.push({prefix:``,value:e});continue}let u=Math.random()<.5&&c-t>=0,d=l<e-1,f=u,p=i({total:c,min:t,max:n,rule:r,subtract:f,lookahead:d});if(p===null&&(f=!f,p=i({total:c,min:t,max:n,rule:r,subtract:f,lookahead:d})),p===null){if(!a)return null;p=L(t,n),f=!1}c+=f?-p:p,s.push(f?-p:p),o.push({prefix:f?`-`:`+`,value:p})}return{type:`vertical`,rows:o,answer:c,values:s}})}var U=`examId`;function ie(){let{institute:e,membership:t,profile:n,user:r}=f(),i=n?.full_name?.split(` `)?.[0]||n?.name?.split(` `)?.[0]||r?.email?.split(`@`)?.[0]||`champ`,a=o(n?.current_level),[s,l]=(0,E.useState)([]),[d,p]=(0,E.useState)([]),[_,v]=(0,E.useState)(()=>ke()),[ee,x]=(0,E.useState)(``),[C,w]=(0,E.useState)(!0),[T,A]=(0,E.useState)(null),[j,M]=(0,E.useState)(null),{activeSubjects:N}=y(),P={...S(N),chess:me&&S(N).chess},F=P.abacus||!P.chess,I=P.chess&&F,[L,R]=(0,E.useState)(null),[z,ne]=(0,E.useState)(null);(0,E.useEffect)(()=>{if(!P.chess)return;let e=!0;return c.rpc(`chess_list_my_exams`).then(({data:t,error:n})=>{e&&(n?ne(n.message):R(t||[]))}),()=>{e=!1}},[P.chess]);let[B,re]=(0,E.useState)(`all`);(0,E.useEffect)(()=>{let n=!0;async function r(){w(!0),A(null);let r=[],i=[],a=null,o=null;if(e?.id&&t?.id){let n=await m(e.id,t.id);r=n.data.exams||[],i=n.data.results||[],a=n.error}let s=new URLSearchParams(window.location.search).get(`slug`)||new URLSearchParams(window.location.search).get(`examId`)||new URLSearchParams(window.location.search).get(`accessToken`);if(s){let e=await h(s);if(e.data){if(r.some(t=>t.id===e.data.id)||(r=[e.data,...r]),v(e.data.id),e.data.institute_id){let t=await g(e.data.institute_id);n&&t.data&&M(t.data)}}else o=e.error?{message:`Could not open this exam link: ${e.error.message}`}:{message:`This exam link is not valid, or the exam is no longer published.`}}else if(e?.id){let t=await g(e.id);n&&t.data&&M(t.data)}n&&(l(r),p(i),A(o||a),w(!1))}return r(),()=>{n=!1}},[e?.id,t?.id]);let V=(0,E.useMemo)(()=>s.filter(e=>pe(e)||te(e.level,a)),[s,a]),H=V.find(e=>e.id===_);(0,E.useEffect)(()=>{function e(){v(ke()),x(``)}return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]),(0,E.useEffect)(()=>{let e=!0;async function t(){if(x(``),!H?.exam_asset_id||Y(H).length)return;let t=await b(H.exam_asset_id);if(e){if(t.error){A(t.error);return}x(t.data.downloadUrl)}}return t(),()=>{e=!1}},[H]);let U=(0,E.useMemo)(()=>{let e=new Map;return d.forEach(t=>{e.has(t.exam_id)||e.set(t.exam_id,t)}),e},[d]),ie=(0,E.useMemo)(()=>{let e=new Map;return d.forEach(t=>e.set(t.exam_id,(e.get(t.exam_id)||0)+1)),e},[d]),ce=(0,E.useMemo)(()=>V.filter(e=>e.kind!==`secure`),[V]),le=(0,E.useMemo)(()=>d.filter(e=>{let t=s.find(t=>t.id===e.exam_id);return t&&t.kind!==`secure`}),[s,d]),W=F&&B!==`chess`&&!C&&!T?ce:[],G=P.chess&&B!==`abacus`&&L||[],K=F&&B!==`chess`&&C||P.chess&&B!==`abacus`&&!L&&!z,q=F&&B!==`chess`&&T?.message||P.chess&&B!==`abacus`&&z||null;function ue(e){v(e),Ae(e)}function de(){v(null),x(``),Ae(null)}async function fe(e){p(t=>[e,...t])}return(0,D.jsxs)(`div`,{className:`page-wrap exam-page ${H?`exam-page-focus`:``}`,children:[(0,D.jsx)(`style`,{children:je}),(0,D.jsx)(u,{}),(0,D.jsx)(`div`,{className:`exam-container ${H?`exam-container-focus`:``}`,style:$.container,children:H?(0,D.jsx)(se,{exam:H,result:U.get(H.id),canRetake:!!t?.id&&ae(H,ie.get(H.id)),fileUrl:ee,instituteBranding:j,instituteId:e?.id,membershipId:t?.id,onBack:de,onSubmitted:fe}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(`section`,{className:`exm-hero`,children:[(0,D.jsxs)(`div`,{className:`exm-hero-top`,children:[(0,D.jsx)(`span`,{className:`exm-hero-badge`,"aria-hidden":`true`,children:(0,D.jsx)(`i`,{className:`fa-solid fa-trophy`})}),(0,D.jsxs)(`div`,{className:`exm-hero-heading`,children:[(0,D.jsxs)(`span`,{className:`exm-hero-hello`,children:[`Hi `,i,`!`]}),(0,D.jsx)(`h1`,{className:`exm-hero-title`,children:`Your Exams`})]})]}),(0,D.jsxs)(`div`,{className:`exm-hero-stats`,children:[(0,D.jsxs)(`div`,{className:`exm-stat`,style:{"--tile":`#3b82f6`},children:[(0,D.jsx)(`span`,{className:`exm-stat-icon`,"aria-hidden":`true`,children:(0,D.jsx)(`i`,{className:`fa-solid fa-file-lines`})}),(0,D.jsxs)(`span`,{children:[(0,D.jsx)(`strong`,{children:(F?ce.length:0)+(L?.length||0)}),(0,D.jsx)(`span`,{children:`To take`})]})]}),(0,D.jsxs)(`div`,{className:`exm-stat`,style:{"--tile":`#22c55e`},children:[(0,D.jsx)(`span`,{className:`exm-stat-icon`,"aria-hidden":`true`,children:(0,D.jsx)(`i`,{className:`fa-solid fa-circle-check`})}),(0,D.jsxs)(`span`,{children:[(0,D.jsx)(`strong`,{children:(F?le.length:0)+(L||[]).filter(O).length}),(0,D.jsx)(`span`,{children:`Done`})]})]}),(0,D.jsxs)(`div`,{className:`exm-stat`,style:{"--tile":`#f59e0b`},children:[(0,D.jsx)(`span`,{className:`exm-stat-icon`,"aria-hidden":`true`,children:(0,D.jsx)(`i`,{className:`fa-solid fa-star`})}),(0,D.jsxs)(`span`,{children:[(0,D.jsx)(`strong`,{children:De(F?le:[],L)}),(0,D.jsx)(`span`,{children:`Best score`})]})]})]})]}),I?(0,D.jsx)(`div`,{className:`exm-filter`,role:`tablist`,"aria-label":`Show exams for`,children:[[`all`,`All`,`fa-layer-group`],[`abacus`,`Abacus`,`fa-calculator`],[`chess`,`Chess`,`fa-chess-knight`]].map(([e,t,n])=>(0,D.jsxs)(`button`,{type:`button`,role:`tab`,"aria-selected":B===e,className:`exm-filter-chip ${B===e?`active`:``}`,onClick:()=>re(e),children:[(0,D.jsx)(`i`,{className:`fa-solid ${n}`}),` `,t]},e))}):null,K?(0,D.jsx)(J,{icon:`fa-circle-notch fa-spin`,title:`Loading exams...`,fill:!0}):null,q?(0,D.jsx)(J,{icon:`fa-triangle-exclamation`,title:q,tone:`error`,fill:!0}):null,!K&&!q&&!W.length&&!G.length?(0,D.jsx)(J,{variant:`exams-empty`,title:B===`chess`?`No chess exams yet.`:s.length?`No exams for Level ${a} yet.`:`No exams assigned yet.`,subtitle:s.length&&B!==`chess`?`More exams unlock as your level goes up.`:`Your assigned exams will show up here.`,fill:!0}):null,!K&&!q&&(W.length||G.length)?(0,D.jsxs)(`div`,{className:`exam-grid exm-grid`,children:[G.filter(e=>!O(e)).map((e,t)=>(0,D.jsx)(k,{exam:e,color:Z[t%Z.length],showSubject:I},e.id)),W.map((e,t)=>(0,D.jsx)(oe,{color:Z[t%Z.length],exam:e,result:U.get(e.id),canRetake:ae(e,ie.get(e.id)),onOpen:()=>ue(e.id),showSubject:I},e.id)),G.filter(O).map((e,t)=>(0,D.jsx)(k,{exam:e,color:Z[t%Z.length],showSubject:I},e.id))]}):null]})})]})}function ae(e,t=0){return!t||e.kind===`file`?!1:e.max_attempts==null||t<e.max_attempts}function oe({exam:e,result:t,canRetake:n,color:r,onOpen:i,showSubject:a}){let o=Y(e),s=e.kind===`file`?`File exam`:o.length?`${o.length} questions`:`Auto-generated`;return(0,D.jsxs)(`article`,{className:`exm-card ${t?`exm-card-done`:``}`,style:{"--stop-color":r},onClick:i,children:[(0,D.jsxs)(`div`,{className:`exm-head`,children:[(0,D.jsx)(`span`,{className:`exm-icon`,children:(0,D.jsx)(`i`,{className:`fa-solid ${e.kind===`file`?`fa-file-lines`:`fa-pen-to-square`}`})}),(0,D.jsxs)(`span`,{className:`exm-status ${t?`exm-status-done`:``}`,children:[(0,D.jsx)(`i`,{className:`fa-solid ${t?`fa-circle-check`:`fa-circle`}`}),n?`Play again`:t?`Done`:`Ready`]})]}),(0,D.jsx)(`h2`,{className:`exm-title`,title:e.title,children:e.title}),(0,D.jsxs)(`p`,{className:`exm-sub`,children:[a?`Abacus · `:``,s,` · `,Ee(e.exam_batches)]}),(0,D.jsxs)(`div`,{className:`exm-chips`,children:[(0,D.jsxs)(`span`,{children:[(0,D.jsx)(`i`,{className:`fa-solid fa-layer-group`}),T(e.level)]}),e.duration_minutes?(0,D.jsxs)(`span`,{children:[(0,D.jsx)(`i`,{className:`fa-regular fa-clock`}),e.duration_minutes,` min`]}):null,(0,D.jsxs)(`span`,{children:[(0,D.jsx)(`i`,{className:`fa-solid fa-star`}),Q(e),` marks`]})]}),(0,D.jsxs)(`div`,{className:`exm-foot`,children:[t?(0,D.jsxs)(`span`,{className:`exm-score`,children:[(0,D.jsx)(`i`,{className:`fa-solid fa-star`,"aria-hidden":`true`}),t.score??`-`,(0,D.jsxs)(`small`,{children:[`/`,t.total_marks??Q(e)]})]}):(0,D.jsx)(`span`,{}),(0,D.jsxs)(`button`,{className:`exm-btn ${t?`exm-btn-ghost`:``}`,onClick:e=>{e.stopPropagation(),i()},children:[n?`Retake`:t?`Review`:`Start exam`,(0,D.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]})]})}function se({exam:e,result:t,canRetake:n,fileUrl:r,instituteId:i,membershipId:a,instituteBranding:o,onBack:s,onSubmitted:c}){let[l,u]=(0,E.useState)(!1),[d,f]=(0,E.useState)(null),[p,m]=(0,E.useState)([]),[h,g]=(0,E.useState)(null),[v,y]=(0,E.useState)(null),[b,x]=(0,E.useState)(!1),S=b?null:t,[C,w]=(0,E.useState)(!!t&&!n),[te,T]=(0,E.useState)(null),[O,k]=(0,E.useState)(!1),A=e.kind===`file`,j=pe(e),M=e.kind===`secure`&&e.settings?.access_mode!==`guest`;(0,E.useEffect)(()=>{if(!S)return document.body.classList.add(`exam-live-focus`),()=>document.body.classList.remove(`exam-live-focus`)},[S]),(0,E.useEffect)(()=>{if(A||!C)return;let t=!0;async function n(){u(!0),f(null);try{let n=[];if(a){let{data:t,error:r}=await _(e.id,a);if(r)throw r;n=t||[]}if(S){let r=n?.find(e=>e.status===`completed`||e.id===S.attempt_id)||n?.[0];if(r){if(!t)return;g(r.id);let n=`exam_q_${a||`guest`}_${e.id}_${r.id}`,i=[];try{i=JSON.parse(sessionStorage.getItem(n)||`[]`)}catch{}m(i),y(r.expires_at)}else{if(!t)return;m(Y(e))}u(!1);return}let r=b?null:n?.find(e=>e.status===`in_progress`&&(!e.expires_at||new Date(e.expires_at)>new Date));if(r){if(!t)return;g(r.id);let n=`exam_q_${a||`guest`}_${e.id}_${r.id}`,i=[];try{i=JSON.parse(sessionStorage.getItem(n)||`[]`)}catch{}if(i.length===0){let t=e.generation_settings||{},r=Array.isArray(t.sections)&&t.sections.length?t.sections:t.operation?[t]:[];if(r.length>0){let e=0;for(let t of r){let n=z(t);for(let t of n)i.push({id:`gen_${e}`,type:`integer`,prompt:t.type===`horizontal`?t.prompt.replace(/\s*=\s*$/,``):t.rows.map(e=>`${e.prefix}${e.value}`).join(` `),marks:1,correctAnswer:String(t.answer)}),e+=1}try{sessionStorage.setItem(n,JSON.stringify(i))}catch{}}}m(i),y(r.expires_at),u(!1);return}if(a){let n=e.access_token||new URLSearchParams(window.location.search).get(`accessToken`)||null,r=await ee({instituteId:i,examId:e.id,studentMembershipId:a,accessToken:n,isPreview:!1});if(r.error)throw Error(r.error.message||`Failed to start exam.`);if(!t)return;g(r.data.attemptId);let o=r.data.questions||[];if(o.length===0){let t=e.generation_settings||{},n=Array.isArray(t.sections)&&t.sections.length?t.sections:t.operation?[t]:[];if(n.length>0){let e=0;for(let t of n){let n=z(t);for(let t of n)o.push({id:`gen_${e}`,type:`integer`,prompt:t.type===`horizontal`?t.prompt.replace(/\s*=\s*$/,``):t.rows.map(e=>`${e.prefix}${e.value}`).join(` `),marks:1,correctAnswer:String(t.answer)}),e+=1}}}let s=`exam_q_${a}_${e.id}_${r.data.attemptId}`;try{sessionStorage.setItem(s,JSON.stringify(o))}catch{}m(o),y(r.data.expiresAt)}else{let n=Y(e);if(n.length===0){let t=e.generation_settings||{},r=Array.isArray(t.sections)&&t.sections.length?t.sections:t.operation?[t]:[];if(r.length>0){let e=0;for(let t of r){let r=z(t);for(let t of r)n.push({id:`gen_${e}`,type:`integer`,prompt:t.type===`horizontal`?t.prompt.replace(/\s*=\s*$/,``):t.rows.map(e=>`${e.prefix}${e.value}`).join(` `),marks:1,correctAnswer:String(t.answer)}),e+=1}}}if(!t)return;m(n),u(!1)}}catch(e){if(!t)return;f(e.message||`An error occurred starting the exam.`)}finally{t&&u(!1)}}return n(),()=>{t=!1}},[e.id,S,a,i,A,C,b]);let N=!!a;if(!C)return(0,D.jsxs)(`div`,{className:`exam-room`,style:$.room,children:[N&&(0,D.jsxs)(`button`,{className:`exam-back`,style:$.backButton,onClick:s,children:[(0,D.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),`All exams`]}),(0,D.jsx)(le,{exam:e,instituteBranding:o,isGuestExam:j,isLoginOnly:M,isLoggedIn:!!a,result:S,onStart:e=>{e&&T(e),w(!0)},onRetake:n?()=>{x(!0),w(!0)}:null})]});if(A)return(0,D.jsxs)(`div`,{className:`exam-room`,style:$.room,children:[N&&(0,D.jsxs)(`button`,{className:`exam-back`,style:$.backButton,onClick:s,children:[(0,D.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),`All exams`]}),(0,D.jsx)(de,{exam:e,fileUrl:r,result:S})]});let P=C&&!S&&!A;return(0,D.jsxs)(`div`,{className:`exam-room`,style:$.room,children:[N&&(0,D.jsxs)(`button`,{className:`exam-back`,style:$.backButton,onClick:()=>P?k(!0):s(),children:[(0,D.jsx)(`i`,{className:`fa-solid ${P?`fa-xmark`:`fa-arrow-left`}`}),P?`Exit`:`All exams`]}),O?(0,D.jsx)(K,{onStay:()=>k(!1),onLeave:()=>{k(!1),s()}}):null,l?(0,D.jsx)(J,{icon:`fa-circle-notch fa-spin`,title:`Preparing exam questions...`}):d?(0,D.jsx)(J,{icon:`fa-triangle-exclamation`,title:d,tone:`error`}):(0,D.jsx)(W,{exam:e,questions:p,attemptId:h,expiresAt:v,previousResult:S,instituteId:i,membershipId:a,guestInfo:te,onSubmitted:c})]})}function ce({branding:e,centered:t=!1,compact:n=!1}){return!e?.name&&!e?.logoUrl?null:(0,D.jsxs)(`div`,{className:n?`exam-brand-bar exam-brand-bar-compact`:`exam-brand-bar`,style:{...$.brandBar,...t?{width:`100%`,justifyContent:`center`,borderBottom:`none`,marginBottom:12,paddingBottom:0}:{}},children:[e.logoUrl?(0,D.jsx)(`img`,{src:e.logoUrl,alt:e.name||`Institute`,className:`exam-brand-logo`,style:$.brandLogo}):(0,D.jsx)(`div`,{className:`exam-brand-logo`,style:$.brandLogoFallback,children:(0,D.jsx)(`i`,{className:`fa-solid fa-graduation-cap`})}),e.name?(0,D.jsx)(`span`,{className:`exam-brand-name`,style:$.brandName,children:e.name}):null]})}function le({exam:e,instituteBranding:t,onStart:n,onRetake:r,isGuestExam:i,isLoginOnly:a,isLoggedIn:o,result:s}){let[c,l]=(0,E.useState)({fullName:``,phone:``,email:``,level:`0`,passcode:``}),[u,d]=(0,E.useState)(``);if(a&&!o)return(0,D.jsxs)(`section`,{className:`exam-guest-card`,style:$.guestCard,children:[(0,D.jsx)(`div`,{style:$.guestIconCircleError,children:(0,D.jsx)(`i`,{className:`fa-solid fa-lock`})}),(0,D.jsxs)(`div`,{style:{textAlign:`center`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,D.jsx)(`span`,{style:{...$.guestEyebrow,color:`#dc2626`,background:`#fee2e2`},children:`Login Required`}),(0,D.jsx)(`h1`,{style:$.guestRoomTitle,children:e.title}),(0,D.jsx)(`p`,{style:$.guestSubtext,children:`This is a secure, login-only exam. You must sign in with your student account credentials to take this exam.`}),(0,D.jsxs)(`a`,{href:`/login`,className:`btn btn-primary`,style:{marginTop:16,width:`100%`,maxWidth:280,display:`inline-flex`,justifyContent:`center`},children:[(0,D.jsx)(`i`,{className:`fa-solid fa-right-to-bracket`,style:{marginRight:8}}),`Go to Student Login`]})]})]});function f(t){if(t.preventDefault(),d(``),!c.fullName.trim()){d(`Please enter your full name.`);return}let r=c.phone.replace(/\D/g,``);if(!r||r.length<10){d(`Please enter a valid phone number.`);return}if(c.email.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email.trim())){d(`Please enter a valid email address.`);return}if(e.settings?.guest_passcode&&c.passcode!==e.settings.guest_passcode){d(`Incorrect exam passcode.`);return}n({fullName:c.fullName.trim(),phone:c.phone.trim(),email:c.email.trim()||null,level:c.level})}let p=Y(e).length,m=[e.duration_minutes?`${e.duration_minutes} min timer`:`No timer set`,`${Q(e)} marks`,e.kind===`file`?`File exam`:p?`${p} questions`:`Auto questions`];return i?(0,D.jsx)(`section`,{className:`exam-guest-card`,style:$.guestCard,children:(0,D.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,textAlign:`center`},children:[(0,D.jsx)(`div`,{style:$.guestIconCircle,children:t?.logoUrl?(0,D.jsx)(`img`,{src:t.logoUrl,alt:t.name||`Institute`,style:$.guestIconLogo}):(0,D.jsx)(`i`,{className:s?`fa-solid fa-circle-check`:`fa-solid fa-user-pen`})}),t?.name?(0,D.jsx)(`span`,{style:$.guestInstituteName,children:t.name}):null,(0,D.jsx)(`span`,{style:$.guestEyebrow,children:s?`Exam Completed`:`Guest Student Check-in`}),(0,D.jsx)(`h1`,{style:$.guestRoomTitle,children:e.title}),(0,D.jsx)(`div`,{style:$.guestPillRow,children:m.map(e=>(0,D.jsxs)(`span`,{style:$.guestMetaPill,children:[(0,D.jsx)(`i`,{className:`fa-solid fa-circle-info`,style:{color:`var(--primary-blue)`,fontSize:`0.8rem`}}),e]},e))}),s?(0,D.jsx)(`p`,{style:$.guestSubtext,children:`You have already attempted this exam. You can view your score and submission details below.`}):(0,D.jsx)(`p`,{style:$.guestSubtext,children:`Please enter your student details below to begin your exam session.`}),u&&(0,D.jsxs)(`div`,{style:$.guestErrBox,children:[(0,D.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),u]}),s?(0,D.jsxs)(`button`,{type:`button`,className:`btn btn-primary guest-submit-btn`,style:$.guestSubmitBtn,onClick:()=>n(null),children:[(0,D.jsx)(`span`,{children:`View Completed Result`}),(0,D.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]}):(0,D.jsxs)(`form`,{onSubmit:f,style:$.guestForm,children:[(0,D.jsxs)(`div`,{style:$.inputGroup,children:[(0,D.jsxs)(`label`,{style:$.inputLabel,children:[`Full Name `,(0,D.jsx)(`span`,{style:{color:`#ef4444`},children:`*`})]}),(0,D.jsxs)(`div`,{style:$.inputWrapper,children:[(0,D.jsx)(`i`,{className:`fa-solid fa-user`,style:$.inputIcon}),(0,D.jsx)(`input`,{type:`text`,required:!0,placeholder:`Enter your name...`,value:c.fullName,onChange:e=>l(t=>({...t,fullName:e.target.value})),style:$.guestInput,className:`guest-form-input`})]})]}),(0,D.jsxs)(`div`,{style:$.inputGroup,children:[(0,D.jsxs)(`label`,{style:$.inputLabel,children:[`Phone Number `,(0,D.jsx)(`span`,{style:{color:`#ef4444`},children:`*`})]}),(0,D.jsxs)(`div`,{style:$.inputWrapper,children:[(0,D.jsx)(`i`,{className:`fa-solid fa-phone`,style:$.inputIcon}),(0,D.jsx)(`input`,{type:`tel`,required:!0,placeholder:`Enter your phone number...`,value:c.phone,onChange:e=>l(t=>({...t,phone:e.target.value})),style:$.guestInput,className:`guest-form-input`})]})]}),(0,D.jsxs)(`div`,{style:$.inputGroup,children:[(0,D.jsx)(`label`,{style:$.inputLabel,children:`Email ID`}),(0,D.jsxs)(`div`,{style:$.inputWrapper,children:[(0,D.jsx)(`i`,{className:`fa-solid fa-envelope`,style:$.inputIcon}),(0,D.jsx)(`input`,{type:`email`,placeholder:`Enter your email (optional)...`,value:c.email,onChange:e=>l(t=>({...t,email:e.target.value})),style:$.guestInput,className:`guest-form-input`})]})]}),(0,D.jsxs)(`div`,{style:$.inputGroup,children:[(0,D.jsx)(`label`,{style:$.inputLabel,children:`Level / Grade`}),(0,D.jsxs)(`div`,{style:$.inputWrapper,children:[(0,D.jsx)(`i`,{className:`fa-solid fa-layer-group`,style:$.inputIcon}),(0,D.jsxs)(`select`,{value:c.level,onChange:e=>l(t=>({...t,level:e.target.value})),style:$.guestInput,className:`guest-form-input`,children:[(0,D.jsx)(`option`,{value:`0`,children:`Level 0`}),(0,D.jsx)(`option`,{value:`1`,children:`Level 1`}),(0,D.jsx)(`option`,{value:`2`,children:`Level 2`}),(0,D.jsx)(`option`,{value:`3`,children:`Level 3`}),(0,D.jsx)(`option`,{value:`4`,children:`Level 4`}),(0,D.jsx)(`option`,{value:`5`,children:`Level 5`}),(0,D.jsx)(`option`,{value:`6`,children:`Level 6`}),(0,D.jsx)(`option`,{value:`7`,children:`Level 7`}),(0,D.jsx)(`option`,{value:`8`,children:`Level 8`})]})]})]}),e.settings?.guest_passcode&&(0,D.jsxs)(`div`,{style:$.inputGroup,children:[(0,D.jsxs)(`label`,{style:$.inputLabel,children:[`Passcode `,(0,D.jsx)(`span`,{style:{color:`#ef4444`},children:`*`})]}),(0,D.jsxs)(`div`,{style:$.inputWrapper,children:[(0,D.jsx)(`i`,{className:`fa-solid fa-key`,style:$.inputIcon}),(0,D.jsx)(`input`,{type:`password`,required:!0,placeholder:`Enter exam passcode...`,value:c.passcode,onChange:e=>l(t=>({...t,passcode:e.target.value})),style:$.guestInput,className:`guest-form-input`})]})]}),(0,D.jsxs)(`button`,{type:`submit`,className:`btn btn-primary guest-submit-btn`,style:$.guestSubmitBtn,children:[(0,D.jsx)(`span`,{children:`Submit Details & Start Exam`}),(0,D.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]})]})}):(0,D.jsxs)(`section`,{className:`exam-start-panel`,style:$.startPanel,children:[(0,D.jsx)(`div`,{style:$.startIcon,children:(0,D.jsx)(`i`,{className:s?`fa-solid fa-circle-check`:i?`fa-solid fa-user-pen`:`fa-solid fa-triangle-exclamation`})}),(0,D.jsxs)(`div`,{style:$.startContent,children:[(0,D.jsx)(ce,{branding:t}),(0,D.jsx)(`span`,{style:$.startEyebrow,children:s?`Exam Completed`:i?`Non-Login Guest Exam`:`Before you begin`}),(0,D.jsx)(`h1`,{className:`exam-room-title`,style:$.roomTitle,children:e.title}),(0,D.jsx)(`p`,{style:$.startText,children:s&&r?`You have attempted this exam before. You can take it again, or review your last score and answer breakdown.`:s?`You have already attempted this exam. You can review your score and answer breakdown below.`:`Once you start, stay on this page and complete the exam in one sitting. Keep your answers ready before submitting.`}),(0,D.jsx)(`div`,{className:`exam-start-details`,style:$.startDetails,children:m.map(e=>(0,D.jsxs)(`span`,{style:$.startDetail,children:[(0,D.jsx)(`i`,{className:`fa-solid fa-circle-info`}),e]},e))}),!s&&(0,D.jsxs)(`ul`,{style:$.startList,children:[(0,D.jsx)(`li`,{children:`Check your internet connection before starting.`}),(0,D.jsx)(`li`,{children:`Do not refresh or close the browser during the exam.`}),(0,D.jsx)(`li`,{children:`The sidebar is hidden here so you can focus.`})]}),s&&r?(0,D.jsx)(`button`,{className:`btn btn-primary`,style:$.startButton,onClick:r,children:`Retake exam`}):null,(0,D.jsx)(`button`,{className:s&&r?`btn btn-secondary`:`btn btn-primary`,style:$.startButton,onClick:()=>n(null),children:s&&r?`Review last result`:s?`Review Exam Results`:`I am ready, start exam`})]})]})}function W({exam:e,questions:r,attemptId:i,expiresAt:a,previousResult:o,instituteId:s,membershipId:c,guestInfo:l,onSubmitted:u}){let[d,f]=(0,E.useState)({}),[m,h]=(0,E.useState)(0),[g]=(0,E.useState)(()=>new Date().toISOString()),[_,ee]=(0,E.useState)(()=>{if(a){let e=Math.floor((new Date(a).getTime()-Date.now())/1e3);return Math.max(0,e)}return(e.duration_minutes||0)*60}),[y,b]=(0,E.useState)(!1),[x,S]=(0,E.useState)(null),[C,w]=(0,E.useState)(o??null),[te,T]=(0,E.useState)(!1),O=!!C;p(`exam`,!O);let k=r[m],A=Q(e,r),j=r.filter((e,t)=>we(d[X(e,t)])).length;(0,E.useEffect)(()=>{if(O||!_)return;let e=window.setInterval(()=>{ee(e=>Math.max(0,e-1))},1e3);return()=>window.clearInterval(e)},[O,_]),(0,E.useEffect)(()=>{_===0&&e.duration_minutes&&!O&&P()},[_]);function M(e,t,n){f(r=>({...r,[X(e,t)]:n}))}function N(){y||O||T(!0)}async function P(){if(y||O)return;T(!1),b(!0),S(null);let a=r.some(e=>e.id?.startsWith(`gen_`))||!!l||!c,o;if(a||l){let n=fe(r,d,e);o=await t({attemptId:i,instituteId:s||e.institute_id,examId:e.id,studentMembershipId:c||null,score:n.score,totalMarks:n.totalMarks,answers:{byQuestion:d,graded:n.details,guestInfo:l||null},startedAt:g,guest_name:l?.fullName||null,guest_level:l?.level||null})}else o=await n({attemptId:i,answers:d});if(o.error){S(o.error.message||`Failed to submit exam.`),b(!1);return}try{sessionStorage.removeItem(`exam_q_${c}_${e.id}_${i}`)}catch{}v(`exam`),w(o.data),u(o.data)}return!O&&(!r||r.length===0)?(0,D.jsx)(J,{icon:`fa-triangle-exclamation`,title:`This exam has no questions.`,tone:`error`}):(0,D.jsxs)(`div`,{className:`exam-room-layout`,style:{...O?$.roomLayoutDone:$.roomLayout,"--stop-color":Z[m%Z.length]},children:[(0,D.jsxs)(`main`,{className:`exam-question-panel`,style:$.questionPanel,children:[(0,D.jsxs)(`div`,{className:`exam-room-header`,style:$.roomHeader,children:[(0,D.jsxs)(`div`,{children:[(0,D.jsx)(`h1`,{className:`exam-room-title`,style:$.roomTitle,children:e.title}),(0,D.jsx)(`p`,{className:`exam-meta`,style:$.meta,children:O?`Submitted`:`${j} of ${r.length} answered`})]}),O?null:(0,D.jsxs)(`div`,{className:`exam-timer-pill${e.duration_minutes&&_<=60?` exam-timer-low`:``}`,style:$.timerPill,children:[(0,D.jsx)(`i`,{className:`fa-solid fa-clock`}),e.duration_minutes?Oe(_):`No timer`]})]}),O?null:(0,D.jsx)(`div`,{className:`exam-progress-track`,style:$.progressTrack,role:`progressbar`,"aria-valuemin":0,"aria-valuemax":r.length,"aria-valuenow":j,"aria-label":`Exam progress`,children:(0,D.jsx)(`div`,{style:{...$.progressFill,width:`${r.length?j/r.length*100:0}%`},children:(0,D.jsx)(`i`,{className:`fa-solid fa-star exam-progress-star`,"aria-hidden":`true`})})}),te&&!O?(0,D.jsx)(q,{answered:j,total:r.length,onCancel:()=>T(!1),onConfirm:()=>void P()}):null,O?(0,D.jsx)(ue,{result:C,exam:e,totalMarks:A,guestInfo:l}):(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(G,{question:k,index:m,answer:d[X(k,m)],onAnswer:e=>M(k,m,e),onEnter:()=>{m<r.length-1?h(e=>Math.min(r.length-1,e+1)):N()}}),x?(0,D.jsx)(`div`,{style:$.errorBox,children:x}):null,(0,D.jsxs)(`div`,{style:$.navRow,children:[(0,D.jsxs)(`button`,{className:`exam-nav-btn`,style:$.navButton,disabled:m===0,onClick:()=>h(e=>Math.max(0,e-1)),"aria-label":`Previous question`,children:[(0,D.jsx)(`i`,{className:`fa-solid fa-arrow-left`,"aria-hidden":`true`}),(0,D.jsx)(`span`,{className:`exam-nav-label`,children:`Previous`})]}),m<r.length-1?(0,D.jsxs)(`button`,{className:`exam-nav-btn exam-nav-primary btn btn-primary`,style:$.navPrimary,onClick:()=>h(e=>Math.min(r.length-1,e+1)),children:[`Next `,(0,D.jsx)(`i`,{className:`fa-solid fa-arrow-right`,"aria-hidden":`true`})]}):(0,D.jsx)(`button`,{className:`exam-nav-btn exam-nav-primary btn btn-primary`,style:$.navPrimary,disabled:y,onClick:N,children:y?`Submitting...`:`Submit Exam`})]})]})]}),O?null:(0,D.jsxs)(`aside`,{className:`exam-question-list`,style:$.questionList,children:[(0,D.jsx)(`div`,{className:`exam-question-list-title`,style:$.questionListTitle,children:`Questions`}),(0,D.jsx)(`div`,{style:$.questionDots,children:r.map((e,t)=>{let n=X(e,t),r=we(d[n]);return(0,D.jsx)(`button`,{className:`exam-question-dot ${t===m?`active`:``} ${r?`answered`:``}`,style:{...$.questionDot,...t===m?$.questionDotActive:{},...r?$.questionDotAnswered:{}},onClick:()=>h(t),children:t+1},n)})})]})]})}function G({question:e,index:t,answer:n,onAnswer:r,onEnter:i}){let a=be(e.type),o=(0,E.useRef)(null),s=ve(e),c=(0,E.useMemo)(()=>ge(s),[s]),[l,u]=(0,E.useState)(()=>{try{return localStorage.getItem(he)||`horizontal`}catch{return`horizontal`}});function d(e){u(e);try{localStorage.setItem(he,e)}catch{}}return(0,E.useEffect)(()=>{o.current&&o.current.focus()},[t]),(0,D.jsxs)(`section`,{className:`exam-question-card`,style:$.questionCard,children:[(0,D.jsxs)(`div`,{className:`exam-question-head`,style:$.questionHead,children:[(0,D.jsxs)(`div`,{className:`exam-question-badge`,style:$.questionBadge,children:[`Question `,t+1,` | `,xe(a)]}),c?(0,D.jsxs)(`div`,{className:`exam-layout-toggle`,role:`group`,"aria-label":`Question format`,children:[(0,D.jsxs)(`button`,{type:`button`,className:l===`horizontal`?`active`:``,title:`Horizontal`,onClick:()=>d(`horizontal`),children:[(0,D.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` Horizontal`]}),(0,D.jsxs)(`button`,{type:`button`,className:l===`vertical`?`active`:``,title:`Vertical`,onClick:()=>d(`vertical`),children:[(0,D.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` Vertical`]})]}):null]}),c&&l===`vertical`?(0,D.jsx)(_e,{terms:c}):(0,D.jsx)(`h2`,{className:`exam-question-text`,style:$.questionText,children:s}),e.fen?(0,D.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,margin:`8px 0 16px`},children:(0,D.jsx)(N,{fen:e.fen,size:320})}):null,a===`mcq`?(0,D.jsx)(`div`,{style:$.optionGrid,className:`exam-option-grid`,children:Se(e).map(e=>(0,D.jsx)(`button`,{className:`exam-option-button`,style:{...$.optionButton,...n===e?$.optionButtonActive:{}},onClick:()=>r(e),children:e},e))}):(0,D.jsxs)(`div`,{style:$.answerBox,children:[(0,D.jsx)(`label`,{className:`exam-question-label`,style:$.answerLabel,children:`Enter number`}),(0,D.jsx)(`input`,{ref:o,className:`exam-answer-input`,style:$.answerInput,type:`text`,inputMode:`decimal`,pattern:`-?[0-9]*\\.?[0-9]*`,value:n??``,onChange:e=>r(Ce(e.target.value)),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),i?.())},placeholder:`0`},X(e,t))]})]})}function K({onStay:e,onLeave:t}){return(0,E.useEffect)(()=>{function t(t){t.key===`Escape`&&e()}return window.addEventListener(`keydown`,t),()=>window.removeEventListener(`keydown`,t)},[e]),(0,D.jsx)(`div`,{style:$.confirmBackdrop,role:`presentation`,onClick:e,children:(0,D.jsxs)(`div`,{style:$.confirmCard,role:`alertdialog`,"aria-modal":`true`,"aria-labelledby":`exam-leave-title`,onClick:e=>e.stopPropagation(),children:[(0,D.jsx)(`div`,{style:{...$.confirmIcon,color:`#f97316`},children:(0,D.jsx)(`i`,{className:`fa-solid fa-door-open`})}),(0,D.jsx)(`h2`,{id:`exam-leave-title`,style:$.confirmTitle,children:`Leave the exam?`}),(0,D.jsx)(`p`,{style:$.confirmText,children:`Your answers so far will not be submitted.`}),(0,D.jsxs)(`div`,{style:$.confirmActions,children:[(0,D.jsx)(`button`,{type:`button`,className:`btn btn-primary`,style:$.confirmButton,onClick:e,autoFocus:!0,children:`Keep going`}),(0,D.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,style:$.confirmButton,onClick:t,children:`Leave`})]})]})})}function q({answered:e,total:t,onCancel:n,onConfirm:r}){let i=Math.max(0,t-e);return(0,E.useEffect)(()=>{function e(e){e.key===`Escape`&&n()}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[n]),(0,D.jsx)(`div`,{style:$.confirmBackdrop,role:`presentation`,onClick:n,children:(0,D.jsxs)(`div`,{style:$.confirmCard,role:`alertdialog`,"aria-modal":`true`,"aria-labelledby":`exam-confirm-title`,onClick:e=>e.stopPropagation(),children:[(0,D.jsx)(`div`,{style:$.confirmIcon,children:(0,D.jsx)(`i`,{className:`fa-solid fa-circle-question`})}),(0,D.jsx)(`h2`,{id:`exam-confirm-title`,style:$.confirmTitle,children:`Submit the exam?`}),(0,D.jsxs)(`p`,{style:$.confirmText,children:[`You have answered `,e,` of `,t,` questions.`,i?` ${i} ${i===1?`question is`:`questions are`} still unanswered.`:``,` `,`You cannot change your answers after submitting.`]}),(0,D.jsxs)(`div`,{style:$.confirmActions,children:[(0,D.jsx)(`button`,{type:`button`,className:`btn btn-secondary`,style:$.confirmButton,onClick:n,autoFocus:!0,children:`Keep answering`}),(0,D.jsx)(`button`,{type:`button`,className:`btn btn-primary`,style:$.confirmButton,onClick:r,children:`Yes, submit`})]})]})})}function ue({result:e,exam:t,totalMarks:n,guestInfo:r}){let i=Number(e?.score??0),a=Number(e?.total_marks??n??0),o=a?Math.round(i/a*100):0,s=Number(t?.settings?.pass_percentage??40),c=o>=s,l=Array.isArray(e?.answers?.graded)?e.answers.graded:null,u=l?l.filter(e=>we(e.given)).length:null,d=l?l.filter(e=>we(e.given)&&!e.isCorrect).length:null,f=e?.started_at?new Date(e.started_at):null,p=e?.submitted_at?new Date(e.submitted_at):null,m=f&&p?C(p-f):null;return(0,D.jsx)(w,{score:i,marks:a,passPercent:s,tiles:[l&&{icon:`fa-check`,label:`Right`,value:u-d,tone:`right`},l&&{icon:`fa-xmark`,label:`Wrong`,value:d,tone:`wrong`},l&&{icon:`fa-forward`,label:`Skipped`,value:l.length-u,tone:`skipped`},m&&{icon:`fa-stopwatch`,label:`Time`,value:m,tone:`time`}].filter(Boolean),footnote:[l?`${l.length} questions`:null,c?`Passed`:`Not passed yet`,p?p.toLocaleString(`en-IN`,{day:`2-digit`,month:`short`,year:`numeric`,hour:`2-digit`,minute:`2-digit`}):null].filter(Boolean).join(` · `),children:r?.fullName?(0,D.jsxs)(`p`,{style:{color:`var(--primary-blue)`,fontWeight:800,margin:0},children:[r.fullName,` (Level `,r.level,`) · `,r.phone,r.email?` · ${r.email}`:``]}):null})}function de({exam:e,fileUrl:t,result:n}){return(0,D.jsxs)(`div`,{className:`exam-file-layout`,style:$.fileLayout,children:[(0,D.jsx)(`main`,{style:$.filePanel,children:t?(0,D.jsx)(`iframe`,{title:e.title,src:`${t}#toolbar=0&navpanes=0&scrollbar=1`,style:$.fileFrame}):(0,D.jsx)(J,{icon:`fa-circle-notch fa-spin`,title:`Opening exam file...`})}),(0,D.jsxs)(`aside`,{style:$.fileAside,children:[(0,D.jsx)(`h1`,{style:$.roomTitle,children:e.title}),(0,D.jsx)(`p`,{style:$.meta,children:Ee(e.exam_batches)}),n?(0,D.jsxs)(`p`,{style:$.score,children:[`Submitted: `,n.score??`-`,` / `,n.total_marks??Q(e)]}):null,(0,D.jsx)(`p`,{style:$.meta,children:`Answer this file exam as instructed by your teacher.`})]})]})}function J({icon:e,title:t,subtitle:n,tone:r,fill:i,variant:a}){return i?(0,D.jsxs)(`div`,{style:{...$.state,...r===`error`?$.error:{},...$.stateFill},children:[a?(0,D.jsx)(x,{variant:a,size:420}):(0,D.jsx)(`div`,{style:$.illustrationCore,children:(0,D.jsx)(`i`,{className:`fa-solid ${e}`})}),(0,D.jsxs)(`div`,{style:$.stateFillText,children:[(0,D.jsx)(`span`,{style:$.stateFillTitle,children:t}),n?(0,D.jsx)(`p`,{style:$.stateFillSubtitle,children:n}):null]})]}):(0,D.jsxs)(`div`,{style:{...$.state,...r===`error`?$.error:{}},children:[(0,D.jsx)(`i`,{className:`fa-solid ${e}`}),(0,D.jsx)(`span`,{children:t})]})}function fe(e,t,n){let r=e.map((e,n)=>{let r=X(e,n),i=t[r],a=ye(e),o=Number(e.marks??1),s=Te(i)===Te(a);return{id:r,given:i,correct:a,marks:o,isCorrect:s,score:s?o:0}});return{score:r.reduce((e,t)=>e+t.score,0),totalMarks:Q(n,e),details:r}}function pe(e){return e?.kind===`secure`&&e?.settings?.access_mode===`guest`}var me=!1;function Y(e){return Array.isArray(e.settings?.questions)?e.settings.questions:[]}function X(e,t){return e?e.id??`q_${t}`:`q_${t}`}var he=`exam_question_layout`,Z=[`#3b82f6`,`#22c55e`,`#f59e0b`,`#ec4899`,`#8b5cf6`,`#06b6d4`];function ge(e){let t=String(e??``).trim().replace(/[=?]+$/,``).trim();if(!t||!/^[-+]?\s*\d+(?:\.\d+)?(?:\s*[-+]\s*\d+(?:\.\d+)?)+$/.test(t))return null;let n=t.match(/[-+]?\s*\d+(?:\.\d+)?/g);return!n||n.length<2?null:n.map((e,t)=>{let n=e.replace(/\s+/g,``),r=n.startsWith(`-`);return{sign:t===0?r?`-`:``:r?`-`:`+`,value:n.replace(/^[-+]/,``)}})}function _e({terms:e}){return(0,D.jsxs)(`div`,{className:`exam-vertical`,"aria-label":`Question in vertical format`,children:[e.map((e,t)=>(0,D.jsxs)(`span`,{style:{display:`contents`},children:[(0,D.jsx)(`span`,{className:`vrow-sign`,children:e.sign}),(0,D.jsx)(`span`,{className:`vrow-value`,children:e.value})]},`${e.sign}${e.value}-${t}`)),(0,D.jsx)(`span`,{className:`vrule`}),(0,D.jsx)(`span`,{className:`vtotal`,children:`?`})]})}function ve(e){return e?e.prompt??e.question??``:``}function ye(e){return e?e.correctAnswer??e.correct_answer??e.answer??``:``}function be(e){return e===`fill_blank`||e===`fill`?`fill_blank`:e===`integer`||e===`number`?`integer`:`mcq`}function xe(e){return e===`fill_blank`?`Fill blank`:e===`integer`?`Integer`:`MCQ`}function Se(e){return e?Array.isArray(e.options)?e.options.map(e=>typeof e==`string`?e:e?.label).filter(Boolean):[e.option_a,e.option_b,e.option_c,e.option_d].filter(Boolean):[]}function Ce(e){let t=e.trim().startsWith(`-`),[n,...r]=e.replace(/[^0-9.]/g,``).split(`.`),i=r.length?`.${r.join(``)}`:``;return`${t?`-`:``}${n}${i}`}function we(e){return e!=null&&String(e).trim()!==``}function Te(e){let t=String(e??``).trim().toLowerCase();return t&&/^-?\d*\.?\d+$/.test(t)?String(Number(t)):t}function Ee(e=[]){let t=e.map(e=>e.batches?.name).filter(Boolean);return t.length?t.join(`, `):`Assigned exam`}function Q(e,t=Y(e)){let n=t.reduce((e,t)=>e+Number(t.marks??1),0);return Number(e.total_marks??n??0)}function De(e,t=[]){let n=[...e.map(e=>Number(e.score??0)),...(t||[]).filter(e=>e.submission?.status===`released`).map(e=>Number(e.submission.score??0))];return n.length?Math.max(...n):`-`}function Oe(e){let t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,`0`)}`}function ke(){return new URLSearchParams(window.location.search).get(U)}function Ae(e){let t=new URL(window.location.href);e?t.searchParams.set(U,e):t.searchParams.delete(U);let n=`${t.pathname}${t.search}${t.hash}`;n!==`${window.location.pathname}${window.location.search}${window.location.hash}`&&window.history.pushState({examId:e},``,n)}var $={container:{width:`100%`,display:`flex`,flexDirection:`column`,gap:24,padding:`20px 28px 60px`,boxSizing:`border-box`},header:{display:`flex`,alignItems:`center`,gap:14,background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:18,boxShadow:`var(--shadow)`},headerIcon:{width:58,height:58,borderRadius:16,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:24,flexShrink:0},title:{fontFamily:`Sora, sans-serif`,fontSize:`2rem`,color:`var(--dark-blue)`,marginBottom:4},subtitle:{color:`var(--text-light)`,fontSize:`1rem`,fontWeight:700},grid:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(300px, 1fr))`,gap:16},card:{background:`rgba(255,255,255,0.9)`,border:`1px solid var(--border)`,borderRadius:18,padding:18,display:`flex`,flexDirection:`column`,gap:12,boxShadow:`var(--shadow)`,minWidth:0,overflow:`hidden`},cardHeader:{display:`flex`,justifyContent:`space-between`,gap:12,alignItems:`flex-start`},cardTitle:{fontFamily:`Sora, sans-serif`,fontSize:`1.12rem`,color:`var(--dark-blue)`,margin:0,minWidth:0,overflowWrap:`anywhere`,display:`-webkit-box`,WebkitLineClamp:2,WebkitBoxOrient:`vertical`,overflow:`hidden`},readyBadge:{background:`#dcfce7`,color:`#166534`,borderRadius:999,padding:`5px 10px`,fontSize:`0.72rem`,fontWeight:900,textTransform:`uppercase`,flexShrink:0,whiteSpace:`nowrap`,alignSelf:`flex-start`},doneBadge:{background:`#e0e7ff`,color:`#3730a3`,borderRadius:999,padding:`5px 10px`,fontSize:`0.72rem`,fontWeight:900,textTransform:`uppercase`,flexShrink:0,whiteSpace:`nowrap`,alignSelf:`flex-start`},meta:{color:`var(--text-light)`,fontSize:`0.88rem`,fontWeight:700,overflowWrap:`anywhere`,minWidth:0},score:{color:`var(--dark-blue)`,fontWeight:900},button:{marginTop:`auto`,textAlign:`center`},room:{display:`flex`,flexDirection:`column`,gap:10,width:`100%`},backButton:{width:`fit-content`,border:`1px solid var(--border)`,background:`white`,color:`var(--primary-blue)`,borderRadius:999,padding:`10px 16px`,fontWeight:900,display:`inline-flex`,alignItems:`center`,gap:8,cursor:`pointer`},startPanel:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:26,boxShadow:`var(--shadow)`,display:`grid`,gridTemplateColumns:`72px minmax(0, 1fr)`,gap:20,alignItems:`start`,maxWidth:880,margin:`0 auto`},startIcon:{width:64,height:64,borderRadius:18,background:`#fef3c7`,color:`#b45309`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:26},startContent:{display:`flex`,flexDirection:`column`,gap:12},brandBar:{display:`flex`,alignItems:`center`,gap:12,paddingBottom:14,marginBottom:4,borderBottom:`1px solid var(--border)`},brandLogo:{width:44,height:44,borderRadius:12,objectFit:`cover`,border:`1px solid var(--border)`,background:`white`,flexShrink:0},brandLogoFallback:{width:44,height:44,borderRadius:12,background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:20,flexShrink:0},brandName:{fontFamily:`Sora, sans-serif`,fontWeight:900,fontSize:`1.05rem`,color:`var(--dark-blue)`},startEyebrow:{color:`var(--primary-blue)`,fontWeight:900,textTransform:`uppercase`,fontSize:`0.76rem`,letterSpacing:`0.08em`},startText:{color:`var(--text-light)`,fontSize:`1rem`,fontWeight:700,lineHeight:1.5,maxWidth:680},startDetails:{display:`flex`,flexWrap:`wrap`,gap:10},startDetail:{border:`1px solid var(--border)`,background:`white`,color:`var(--dark-blue)`,borderRadius:999,padding:`8px 12px`,fontSize:`0.84rem`,fontWeight:900,display:`inline-flex`,alignItems:`center`,gap:7},startList:{margin:`2px 0 0 18px`,color:`var(--text-light)`,fontWeight:700,lineHeight:1.7},startButton:{alignSelf:`flex-start`,marginTop:4},guestCard:{background:`rgba(255, 255, 255, 0.94)`,backdropFilter:`blur(20px)`,border:`1px solid rgba(255, 255, 255, 0.8)`,borderRadius:24,padding:`36px 32px`,boxShadow:`0 20px 48px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.05)`,maxWidth:560,width:`100%`,margin:`20px auto`,boxSizing:`border-box`},guestIconCircle:{width:64,height:64,borderRadius:20,background:`linear-gradient(135deg, var(--light-blue), #dbeafe)`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:26,marginBottom:16,overflow:`hidden`,boxShadow:`0 8px 16px -4px color-mix(in srgb, var(--primary-blue) 20%, transparent)`},guestIconLogo:{width:`100%`,height:`100%`,objectFit:`cover`,borderRadius:`inherit`},guestInstituteName:{fontFamily:`Sora, sans-serif`,fontWeight:800,fontSize:`0.95rem`,color:`var(--dark-blue)`,marginBottom:12},guestIconCircleError:{width:64,height:64,borderRadius:20,background:`linear-gradient(135deg, #fee2e2, #fecaca)`,color:`#dc2626`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:26,margin:`0 auto 16px`},guestEyebrow:{background:`var(--light-blue)`,color:`var(--primary-blue)`,fontWeight:900,textTransform:`uppercase`,fontSize:`0.74rem`,letterSpacing:`0.08em`,padding:`6px 14px`,borderRadius:999,display:`inline-block`},guestRoomTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.65rem`,lineHeight:1.25,margin:`12px 0 10px`,textAlign:`center`},guestPillRow:{display:`flex`,flexWrap:`wrap`,justifyContent:`center`,gap:8,marginBottom:14},guestMetaPill:{border:`1px solid var(--border)`,background:`white`,color:`var(--dark-blue)`,borderRadius:999,padding:`6px 14px`,fontSize:`0.82rem`,fontWeight:800,display:`inline-flex`,alignItems:`center`,gap:6,boxShadow:`0 2px 4px rgba(0,0,0,0.02)`},guestSubtext:{color:`var(--text-light)`,fontSize:`0.95rem`,fontWeight:600,lineHeight:1.5,textAlign:`center`,marginBottom:20,maxWidth:460},guestErrBox:{width:`100%`,padding:`12px 16px`,background:`#fff5f5`,color:`#b91c1c`,border:`1px solid #fecaca`,borderRadius:14,fontSize:`0.88rem`,fontWeight:700,marginBottom:16,display:`flex`,alignItems:`center`,gap:8,boxSizing:`border-box`},guestForm:{display:`flex`,flexDirection:`column`,gap:16,width:`100%`},inputGroup:{display:`flex`,flexDirection:`column`,gap:6,textAlign:`left`,width:`100%`},inputLabel:{fontSize:`0.8rem`,fontWeight:800,textTransform:`uppercase`,color:`var(--dark-blue)`,letterSpacing:`0.03em`},inputWrapper:{position:`relative`,width:`100%`},inputIcon:{position:`absolute`,left:16,top:`50%`,transform:`translateY(-50%)`,color:`var(--text-light)`,fontSize:`0.95rem`,pointerEvents:`none`},guestInput:{width:`100%`,padding:`13px 16px 13px 44px`,borderRadius:14,border:`1.5px solid var(--border)`,outline:`none`,fontWeight:700,fontSize:`0.95rem`,color:`var(--dark-blue)`,background:`white`,boxSizing:`border-box`,transition:`all 0.2s ease`},guestSubmitBtn:{width:`100%`,padding:`14px 20px`,marginTop:8,borderRadius:14,fontSize:`1rem`,fontWeight:800,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10,boxShadow:`0 8px 20px -4px color-mix(in srgb, var(--primary-blue) 30%, transparent)`,cursor:`pointer`},roomLayout:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 236px`,gap:16,alignItems:`start`},roomLayoutDone:{display:`block`,maxWidth:880,width:`100%`,margin:`0 auto`},questionPanel:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderTop:`6px solid var(--stop-color, var(--primary-blue))`,borderRadius:24,padding:20,boxShadow:`inset 0 -4px 0 rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.06)`,display:`flex`,flexDirection:`column`,gap:12,minWidth:0},roomHeader:{display:`flex`,justifyContent:`space-between`,gap:12,alignItems:`center`,paddingBottom:12,borderBottom:`1px solid var(--border)`},roomTitle:{fontFamily:`'Baloo 2', 'Fredoka', Sora, sans-serif`,fontWeight:800,color:`#0f172a`,fontSize:`1.6rem`,lineHeight:1.15},timerPill:{background:`#dbeafe`,color:`#1d4ed8`,borderRadius:999,padding:`8px 16px`,fontFamily:`'Baloo 2', 'Fredoka', Sora, sans-serif`,fontWeight:800,fontSize:`1.15rem`,display:`inline-flex`,alignItems:`center`,gap:8,whiteSpace:`nowrap`,boxShadow:`inset 0 -3px 0 rgba(29,78,216,0.12)`},questionCard:{background:`color-mix(in srgb, var(--stop-color, var(--primary-blue)) 5%, white)`,border:`2px solid color-mix(in srgb, var(--stop-color, var(--primary-blue)) 25%, transparent)`,borderRadius:22,padding:20,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:14,boxShadow:`inset 0 -4px 0 color-mix(in srgb, var(--stop-color, var(--primary-blue)) 15%, transparent)`,minWidth:0},progressTrack:{position:`relative`,height:14,borderRadius:999,background:`#eef2f7`,boxShadow:`inset 0 2px 3px rgba(15,23,42,0.08)`,margin:`4px 0 16px`},progressFill:{position:`relative`,height:`100%`,minWidth:14,borderRadius:999,background:`linear-gradient(90deg, #22c55e, #84cc16 60%, #f59e0b)`,transition:`width 0.4s cubic-bezier(0.4,0,0.2,1)`},questionHead:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:10,flexWrap:`wrap`,width:`100%`},questionBadge:{display:`inline-flex`,alignItems:`center`,gap:6,width:`fit-content`,padding:`6px 14px`,borderRadius:999,background:`color-mix(in srgb, var(--stop-color, var(--primary-blue)) 14%, white)`,color:`color-mix(in srgb, var(--stop-color, var(--primary-blue)) 70%, #0f172a)`,border:`1px solid color-mix(in srgb, var(--stop-color, var(--primary-blue)) 35%, transparent)`,fontFamily:`'Baloo 2', 'Fredoka', Sora, sans-serif`,fontWeight:800,fontSize:`0.95rem`},questionText:{fontFamily:`'Baloo 2', 'Fredoka', Sora, sans-serif`,fontWeight:800,color:`#0f172a`,fontSize:`clamp(1.7rem, 3.6vw, 2.6rem)`,lineHeight:1.2,margin:`4px 0`,textAlign:`center`,overflowWrap:`anywhere`},optionGrid:{display:`grid`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`,gap:12,width:`100%`,maxWidth:560},optionButton:{border:`2px solid color-mix(in srgb, var(--stop-color, var(--primary-blue)) 40%, transparent)`,background:`white`,color:`#0f172a`,borderRadius:18,padding:18,minHeight:64,fontFamily:`'Baloo 2', 'Fredoka', Sora, sans-serif`,fontWeight:800,cursor:`pointer`,textAlign:`left`,fontSize:`1.35rem`,boxShadow:`inset 0 -4px 0 color-mix(in srgb, var(--stop-color, var(--primary-blue)) 20%, transparent)`},optionButtonActive:{borderColor:`var(--stop-color, var(--primary-blue))`,background:`color-mix(in srgb, var(--stop-color, var(--primary-blue)) 14%, white)`,color:`#0f172a`,boxShadow:`inset 0 -4px 0 color-mix(in srgb, var(--stop-color, var(--primary-blue)) 35%, transparent)`},answerBox:{display:`grid`,gap:8,width:`100%`,maxWidth:380,margin:`4px auto 0`,justifyItems:`center`},answerLabel:{color:`#475569`,fontFamily:`'Fredoka', 'Baloo 2', sans-serif`,fontWeight:600,fontSize:`1rem`},answerInput:{width:`100%`,boxSizing:`border-box`,border:`2px solid color-mix(in srgb, var(--stop-color, var(--primary-blue)) 40%, transparent)`,borderRadius:18,padding:`12px 18px`,fontFamily:`'Baloo 2', 'Fredoka', Sora, sans-serif`,fontSize:`1.6rem`,fontWeight:800,color:`#0f172a`,outline:`none`,background:`white`,textAlign:`center`},errorBox:{marginTop:12,background:`#fff5f5`,color:`#b91c1c`,border:`1px solid #fecaca`,borderRadius:12,padding:12,fontWeight:800},navRow:{display:`flex`,justifyContent:`space-between`,gap:12},navButton:{border:`2px solid var(--border)`,background:`white`,color:`#334155`,borderRadius:999,padding:`8px 18px`,minHeight:44,fontFamily:`'Baloo 2', 'Fredoka', Sora, sans-serif`,fontWeight:800,fontSize:`1rem`,cursor:`pointer`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,gap:6},navPrimary:{minWidth:120,textAlign:`center`},questionList:{background:`white`,border:`1px solid var(--border)`,borderRadius:22,padding:16,boxShadow:`inset 0 -4px 0 rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.06)`,maxHeight:`calc(100vh - var(--nav-h) - 95px)`,overflowY:`auto`},questionListTitle:{color:`#0f172a`,fontFamily:`'Baloo 2', 'Fredoka', Sora, sans-serif`,fontWeight:800,fontSize:`1.05rem`,marginBottom:12},questionDots:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(36px, 1fr))`,gap:6},questionDot:{width:36,height:36,justifySelf:`center`,border:`2px solid #e2e8f0`,background:`white`,color:`#475569`,borderRadius:`50%`,fontFamily:`'Baloo 2', 'Fredoka', Sora, sans-serif`,fontWeight:800,fontSize:`0.9rem`,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:0},questionDotActive:{borderColor:`var(--stop-color, var(--primary-blue))`,background:`var(--stop-color, var(--primary-blue))`,color:`white`,boxShadow:`0 3px 8px color-mix(in srgb, var(--stop-color, var(--primary-blue)) 35%, transparent)`},questionDotAnswered:{background:`#dcfce7`,borderColor:`#86efac`,color:`#15803d`},confirmBackdrop:{position:`fixed`,inset:0,background:`rgba(15, 23, 42, 0.55)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:16,zIndex:1e3},confirmCard:{background:`white`,borderRadius:18,padding:24,maxWidth:420,width:`100%`,boxShadow:`0 20px 50px rgba(15, 23, 42, 0.3)`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:10,textAlign:`center`},confirmIcon:{fontSize:`2.4rem`,color:`var(--primary-blue)`},confirmTitle:{margin:0,fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.25rem`},confirmText:{margin:0,color:`var(--text-light)`,fontWeight:600,lineHeight:1.45},confirmActions:{display:`flex`,gap:10,width:`100%`,marginTop:8,flexWrap:`wrap`},confirmButton:{flex:`1 1 140px`,justifyContent:`center`},resultCircle:{width:128,height:128,borderRadius:`50%`,background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`Sora, sans-serif`,fontSize:`2rem`,fontWeight:900},resultTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`},fileLayout:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 280px`,gap:12},filePanel:{height:`calc(100vh - var(--nav-h) - 110px)`,minHeight:520,background:`white`,border:`1px solid var(--border)`,borderRadius:18,overflow:`hidden`,boxShadow:`var(--shadow)`},fileFrame:{width:`100%`,height:`100%`,border:0},fileAside:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:16,boxShadow:`var(--shadow)`,height:`fit-content`},state:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:16,padding:20,display:`flex`,alignItems:`center`,gap:12,color:`var(--dark-blue)`,fontWeight:800},error:{color:`#b91c1c`,borderColor:`#fecaca`,background:`#fff5f5`},stateFill:{flex:1,minHeight:`45vh`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:8,textAlign:`center`},stateFillText:{display:`flex`,flexDirection:`column`,gap:6,maxWidth:420},stateFillTitle:{fontFamily:`Sora, sans-serif`,fontSize:`1.2rem`,color:`var(--dark-blue)`},stateFillSubtitle:{margin:0,color:`var(--text-light)`,fontWeight:600,fontSize:`0.95rem`,lineHeight:1.4},illustrationCore:{width:84,height:84,borderRadius:`50%`,background:`linear-gradient(135deg, var(--light-blue), color-mix(in srgb, var(--primary-blue) 14%, white))`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:30,boxShadow:`0 10px 24px color-mix(in srgb, var(--primary-blue) 18%, transparent)`}},je=`
  .exm-filter { display: flex; gap: 8px; flex-wrap: wrap; margin: 4px 0 16px; }
  .exm-filter-chip {
    display: inline-flex; align-items: center; gap: 8px; height: 36px; padding: 0 16px;
    border-radius: 999px; border: 1px solid var(--border); background: var(--white, #fff);
    font: inherit; font-weight: 700; color: var(--text-main, #1e293b); cursor: pointer;
  }
  .exm-filter-chip.active { background: var(--primary-blue); border-color: var(--primary-blue); color: #fff; }
  .exm-section { margin-top: 28px; }
  .exm-section-title { display: flex; align-items: center; gap: 10px; margin: 8px 0 14px; font-size: 20px; font-weight: 800; color: var(--dark-blue, #0f172a); }
  .exm-section-title i { color: var(--primary-blue); }
  .exm-section-note { margin: 0; padding: 18px; border-radius: 14px; background: var(--white, #fff); border: 1px dashed var(--border); opacity: .85; }

  @media (max-width: 720px) {
    .page-illustration {
      display: none !important;
    }
  }

  .exam-page {
    align-items: stretch !important;
    justify-content: flex-start !important;
    min-height: 0 !important;
    padding-top: calc(var(--nav-h) + 20px) !important;
    padding-bottom: 28px !important;
  }

  .exam-container {
    margin: 0 auto;
    max-width: 1200px;
  }

  .exam-container-focus {
    width: 100% !important;
  }

  .exam-page-focus {
    padding-top: calc(var(--nav-h) + 8px) !important;
  }

  .exam-back {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .exam-back:hover {
    border-color: var(--primary-blue) !important;
    background-color: var(--light-blue) !important;
    transform: translateX(-4px);
  }

  .guest-form-input:focus {
    border-color: var(--primary-blue) !important;
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary-blue) 14%, transparent) !important;
    background-color: white !important;
  }

  .guest-submit-btn {
    transition: all 0.2s ease !important;
  }

  .guest-submit-btn:hover {
    transform: translateY(-2px) !important;
    box-shadow: 0 12px 24px -4px color-mix(in srgb, var(--primary-blue) 40%, transparent) !important;
  }

  .exam-option-button {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }

  .exam-option-button:hover {
    border-color: var(--primary-blue) !important;
    background-color: var(--light-blue) !important;
    transform: translateY(-2px);
  }

  .exam-option-button:active {
    transform: translateY(0);
  }

  .exam-vertical {
    font-family: "Sora", sans-serif;
    font-size: clamp(1.3rem, 2.2vw, 1.75rem);
    font-weight: 900;
    color: var(--dark-blue);
    line-height: 1.3;
    display: inline-grid;
    grid-template-columns: 1.2em auto;
    justify-items: end;
    column-gap: 0.35em;
    margin-bottom: 8px;
    /* The card is a column flexbox, so without this the grid stretches to the
       full card width and throws the signs away from the numbers. */
    align-self: center;
    width: fit-content;
  }

  .exam-vertical .vrow-sign {
    justify-self: center;
  }

  .exam-vertical .vrow-value {
    font-variant-numeric: tabular-nums;
  }

  .exam-vertical .vrule {
    grid-column: 1 / -1;
    width: 100%;
    height: 2px;
    background: var(--dark-blue);
    border-radius: 2px;
    margin: 5px 0;
  }

  .exam-vertical .vtotal {
    grid-column: 1 / -1;
    color: var(--primary-blue);
  }

  .exam-layout-toggle {
    display: inline-flex;
    gap: 4px;
    padding: 4px;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: white;
  }

  .exam-layout-toggle button {
    border: 0;
    background: transparent;
    color: var(--text-light);
    font-weight: 900;
    font-size: 0.72rem;
    text-transform: uppercase;
    padding: 6px 12px;
    border-radius: 999px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .exam-layout-toggle button.active {
    background: var(--stop-color, var(--primary-blue));
    color: white;
  }

  /* ── Practice look inside the exam ── */
  .exam-vertical, .exam-vertical * { font-family: "Baloo 2", "Fredoka", Sora, sans-serif !important; }
  .exam-vertical .vrow-sign, .exam-vertical .vtotal { color: var(--stop-color, var(--primary-blue)) !important; }
  .exam-layout-toggle { border-radius: 999px; border-width: 2px; }
  .exam-layout-toggle button { font-family: "Baloo 2", "Fredoka", sans-serif; font-size: 0.85rem; text-transform: none; }
  .exam-progress-star {
    position: absolute; right: -10px; top: 50%; transform: translateY(-50%);
    color: #f59e0b; font-size: 1.35rem; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
  }
  .exam-timer-low { background: #fee2e2 !important; color: #b91c1c !important; animation: examTimerPulse 1s ease-in-out infinite; }
  @keyframes examTimerPulse { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.06); } }

  .exam-option-button:hover { transform: translateY(-2px); }
  @media (prefers-reduced-motion: reduce) { .exam-timer-low { animation: none; } }

  .exam-answer-input {
    transition: all 0.2s ease !important;
  }

  .exam-answer-input:focus {
    border-color: var(--primary-blue) !important;
    box-shadow: 0 0 0 4px color-mix(in srgb, var(--primary-blue) 12%, transparent) !important;
    background-color: white !important;
  }

  .exam-question-dot {
    transition: all 0.2s ease !important;
  }

  @media (hover: hover) {
    .exam-question-dot:hover {
      border-color: var(--stop-color, var(--primary-blue)) !important;
    }
  }

  @media (max-width: 980px) {
    .exam-room-layout,
    .exam-file-layout {
      display: flex !important;
      flex-direction: column !important;
      align-items: stretch !important;
      gap: 16px !important;
    }

    .exam-question-list {
      max-height: none !important;
      overflow: visible !important;
    }
  }

  @media (max-width: 640px) {
    .exam-container {
      width: 100% !important;
      padding: 0 10px !important;
      gap: 14px !important;
    }

    .exam-guest-card {
      padding: 24px 18px !important;
      margin: 10px auto !important;
    }

    .exam-header-main {
      padding: 14px !important;
    }

    .exam-title-main {
      font-size: 1.35rem !important;
    }

    .exam-grid {
      grid-template-columns: 1fr !important;
      gap: 12px !important;
    }

    .exam-card {
      padding: 14px !important;
      border-radius: 14px !important;
    }

    .exam-card-title,
    .exam-room-title {
      font-size: 1rem !important;
    }

    .exam-back {
      padding: 6px 12px !important;
      font-size: 0.78rem !important;
      gap: 6px !important;
    }

    .exam-brand-bar-compact {
      padding-bottom: 8px !important;
      margin-bottom: 6px !important;
      gap: 8px !important;
    }

    .exam-brand-bar-compact .exam-brand-logo {
      width: 28px !important;
      height: 28px !important;
      border-radius: 8px !important;
    }

    .exam-brand-bar-compact .exam-brand-name {
      font-size: 0.85rem !important;
    }

    .exam-room-header {
      flex-direction: row !important;
      align-items: center !important;
      justify-content: space-between !important;
      flex-wrap: wrap !important;
      gap: 6px 10px !important;
      margin-bottom: 4px !important;
      padding-bottom: 8px !important;
    }

    .exam-meta {
      font-size: 0.78rem !important;
    }

    .exam-timer-pill {
      padding: 6px 12px !important;
      font-size: 0.82rem !important;
    }

    .exam-progress-track {
      margin: 2px 0 10px !important;
    }

    .exam-room {
      gap: 6px !important;
    }

    .exam-start-panel {
      grid-template-columns: 1fr !important;
      padding: 18px !important;
    }

    .exam-start-details {
      display: grid !important;
      grid-template-columns: 1fr !important;
    }

    .exam-question-panel {
      padding: 16px !important;
      min-height: auto !important;
    }

    .exam-question-text {
      font-size: 1.15rem !important;
    }

    .exam-option-grid {
      grid-template-columns: 1fr !important;
      gap: 10px !important;
    }
  }

  /* ─── Exam cards ─── */
  .exam-grid.exm-grid {
    display: grid !important;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)) !important;
    gap: 18px !important;
  }
  .exm-card {
    display: flex; flex-direction: column; gap: 10px; min-width: 0;
    padding: 18px;
    background: var(--card-bg, #fff);
    border: 1px solid var(--border);
    border-radius: 16px;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
  }
  .exm-card:hover {
    transform: translateY(-3px);
    border-color: color-mix(in srgb, var(--primary-blue) 35%, transparent);
    box-shadow: 0 14px 28px color-mix(in srgb, var(--primary-blue) 12%, transparent);
  }
  .exm-head { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
  .exm-icon {
    width: 40px; height: 40px; border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    background: color-mix(in srgb, var(--primary-blue) 12%, transparent);
    color: var(--primary-blue); font-size: 1rem;
  }
  .exm-card-done .exm-icon { background: #dcfce7; color: #15803d; }
  .exm-status {
    display: inline-flex; align-items: center; gap: 6px;
    padding: 4px 10px; border-radius: 999px;
    background: color-mix(in srgb, var(--primary-blue) 10%, transparent);
    color: var(--primary-blue);
    font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.4px;
  }
  .exm-status i { font-size: 0.5rem; }
  .exm-status-done { background: #dcfce7; color: #15803d; }
  .exm-status-done i { font-size: 0.72rem; }

  .exm-title {
    margin: 4px 0 0;
    font-family: Sora, sans-serif; font-size: 1.05rem; font-weight: 800; line-height: 1.35;
    color: var(--dark-blue);
    overflow-wrap: anywhere;
    display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
  }
  .exm-sub {
    margin: 0; font-size: 0.8rem; font-weight: 600; color: var(--text-light);
    white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
  }
  .exm-chips { display: flex; flex-wrap: wrap; gap: 6px; }
  .exm-chips span {
    display: inline-flex; align-items: center; gap: 5px;
    padding: 4px 9px; border-radius: 8px;
    background: color-mix(in srgb, var(--dark-blue) 5%, transparent);
    color: var(--dark-blue); font-size: 0.74rem; font-weight: 700;
  }
  .exm-chips i { font-size: 0.7rem; color: var(--text-light); }

  .exm-foot {
    margin-top: auto; padding-top: 12px;
    border-top: 1px dashed var(--border);
    display: flex; align-items: center; justify-content: space-between; gap: 10px;
  }
  .exm-score { font-family: Sora, sans-serif; font-weight: 900; font-size: 1.2rem; color: #15803d; }
  .exm-score small { font-size: 0.8rem; color: var(--text-light); font-weight: 700; }
  .exm-btn {
    display: inline-flex; align-items: center; gap: 8px;
    height: 36px; padding: 0 16px;
    border: 0; border-radius: 999px;
    background: var(--primary-blue); color: #fff;
    font-weight: 800; font-size: 0.82rem; white-space: nowrap;
    cursor: pointer; transition: background 0.15s ease, gap 0.15s ease;
  }
  .exm-card:hover .exm-btn { gap: 12px; }
  .exm-btn i { font-size: 0.75rem; }
  .exm-btn-ghost { background: color-mix(in srgb, var(--dark-blue) 8%, transparent); color: var(--dark-blue); }

  @media (max-width: 640px) {
    .exam-grid.exm-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
    .exm-card { padding: 14px; }
  }

  /* ─── Exams list: same playful look as daily practice ─── */
  .exm-hero {
    display: flex; flex-direction: column; gap: 16px; padding: 22px;
    border-radius: 24px; border: 1px solid var(--border);
    background:
      radial-gradient(circle at 12% 18%, color-mix(in srgb, #f59e0b 16%, transparent), transparent 32%),
      linear-gradient(135deg, #ffffff, color-mix(in srgb, var(--primary-blue) 5%, white));
    box-shadow: inset 0 -4px 0 rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.06);
  }
  .exm-hero-top { display: flex; align-items: center; gap: 14px; }
  .exm-hero-badge {
    width: 60px; height: 60px; border-radius: 50%; flex-shrink: 0; display: grid; place-items: center;
    background: #fef3c7; color: #d97706; font-size: 1.6rem; box-shadow: inset 0 -4px 0 rgba(217,119,6,0.18);
  }
  .exm-hero-heading { display: flex; flex-direction: column; min-width: 0; }
  .exm-hero-hello { font-family: "Fredoka", "Baloo 2", sans-serif; font-weight: 600; font-size: 1.05rem; color: #475569; }
  .exm-hero-title { margin: 0; font-family: "Baloo 2", "Fredoka", Sora, sans-serif; font-weight: 800; font-size: clamp(1.8rem, 3.4vw, 2.4rem); line-height: 1.05; color: #0f172a; }
  .exm-hero-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
  .exm-stat {
    display: flex; align-items: center; gap: 10px; min-width: 0; padding: 12px; border-radius: 16px;
    border: 2px solid color-mix(in srgb, var(--tile) 25%, transparent);
    background: color-mix(in srgb, var(--tile) 8%, white);
    box-shadow: inset 0 -3px 0 color-mix(in srgb, var(--tile) 18%, transparent);
  }
  .exm-stat-icon {
    width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0; display: grid; place-items: center;
    background: white; color: var(--tile); box-shadow: 0 2px 6px rgba(15,23,42,0.08);
  }
  .exm-stat strong { display: block; font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 1.5rem; line-height: 1.1; color: var(--tile); }
  .exm-stat span span { display: block; font-weight: 700; font-size: 0.85rem; color: #334155; }

  .exm-card {
    border-radius: 22px; border: 2px solid color-mix(in srgb, var(--stop-color, var(--primary-blue)) 25%, transparent);
    border-top: 6px solid var(--stop-color, var(--primary-blue));
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 5%, white);
    box-shadow: inset 0 -4px 0 color-mix(in srgb, var(--stop-color, var(--primary-blue)) 15%, transparent);
  }
  .exm-card:hover { border-color: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 45%, transparent); border-top-color: var(--stop-color, var(--primary-blue)); box-shadow: inset 0 -4px 0 color-mix(in srgb, var(--stop-color, var(--primary-blue)) 20%, transparent), 0 12px 24px rgba(15,23,42,0.08); }
  .exm-icon { border-radius: 50%; background: white; color: var(--stop-color, var(--primary-blue)); box-shadow: 0 2px 6px rgba(15,23,42,0.08); }
  .exm-card-done .exm-icon { background: white; color: #16a34a; }
  .exm-status { font-family: "Baloo 2", "Fredoka", sans-serif; font-size: 0.85rem; text-transform: none; letter-spacing: 0;
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 14%, white); color: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 70%, #0f172a); }
  .exm-title { font-family: "Baloo 2", "Fredoka", Sora, sans-serif; font-size: 1.3rem; color: #0f172a; }
  .exm-sub { color: #64748b; }
  .exm-chips span { border-radius: 999px; background: white; border: 1px solid #e2e8f0; color: #334155; }
  .exm-chips i { color: var(--stop-color, var(--primary-blue)); }
  .exm-foot { border-top: 2px dashed color-mix(in srgb, var(--stop-color, var(--primary-blue)) 20%, transparent); }
  .exm-score { display: inline-flex; align-items: center; gap: 5px; font-family: "Baloo 2", "Fredoka", sans-serif; font-size: 1.4rem; color: #92400e; }
  .exm-score i { color: #f59e0b; font-size: 1rem; }
  .exm-btn { height: 42px; padding: 0 18px; font-family: "Baloo 2", "Fredoka", sans-serif; font-size: 1rem;
    background: var(--stop-color, var(--primary-blue)); box-shadow: inset 0 -3px 0 rgba(0,0,0,0.15); }
  .exm-btn-ghost { background: white; color: #334155; border: 2px solid color-mix(in srgb, var(--stop-color, var(--primary-blue)) 30%, transparent); box-shadow: none; }
  @media (max-width: 640px) {
    .exm-hero { padding: 16px; }
    .exm-hero-stats { gap: 8px; }
    .exm-stat { flex-direction: column; text-align: center; padding: 10px 6px; }
  }

  /* ─── Exam in progress on phones: keep the header chrome minimal ─── */
  @media (max-width: 640px), (orientation: landscape) and (max-height: 500px) {
    /* Institute name + logo already sit in the navbar */
    .exam-question-panel .exam-brand-bar-compact { display: none !important; }
    .exam-back { padding: 4px 10px !important; font-size: 0.72rem !important; }
    .exam-question-panel {
      padding: 10px !important;
      gap: 8px !important;
      border-radius: 14px !important;
    }
    .exam-room-header {
      flex-wrap: nowrap !important;
      margin: 0 !important;
      padding: 0 0 8px !important;
    }
    .exam-room-header > div { min-width: 0; }
    .exam-room-title {
      font-size: 0.95rem !important;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .exam-meta { font-size: 0.7rem !important; margin: 0 !important; }
    .exam-timer-pill { padding: 4px 10px !important; font-size: 0.76rem !important; gap: 6px !important; }
    .exam-progress-track { height: 5px !important; margin: 0 0 4px !important; }
    .exam-question-card {
      padding: 12px !important;
      gap: 10px !important;
      border-radius: 12px !important;
    }

    /* Drop the outer card: the question card is the only box */
    .exam-question-panel {
      padding: 0 !important;
      background: transparent !important;
      border: 0 !important;
      box-shadow: none !important;
    }
    .exam-room-header { padding: 0 2px 6px !important; border-bottom: 0 !important; }
    /* The progress bar already shows how many are answered */
    .exam-room-header .exam-meta { display: none; }

    /* Back button: icon only */
    .exam-back {
      font-size: 0 !important;
      width: 30px; height: 30px;
      padding: 0 !important;
      justify-content: center;
    }
    .exam-back i { font-size: 0.8rem; }

    /* Question label + layout toggle on one row, toggle icon-only */
    .exam-question-head {
      flex-direction: row !important;
      flex-wrap: nowrap !important;
      align-items: center !important;
      justify-content: space-between !important;
      gap: 8px !important;
    }
    .exam-question-badge { font-size: 0.68rem !important; padding: 0 !important; }
    .exam-layout-toggle { flex-shrink: 0; padding: 2px !important; }
    .exam-layout-toggle button {
      font-size: 0 !important;
      width: 32px; height: 28px;
      padding: 0 !important;
      display: inline-flex; align-items: center; justify-content: center;
    }
    .exam-layout-toggle button i { font-size: 0.8rem; margin: 0 !important; }

    .exam-nav-btn { min-height: 42px !important; padding: 6px 16px !important; font-size: 0.95rem !important; }
    .exam-nav-btn:not(.exam-nav-primary) { min-width: 42px !important; padding: 0 12px !important; }
    .exam-nav-btn:not(.exam-nav-primary) .exam-nav-label { display: none; }
    .exam-question-list { padding: 10px 12px !important; border-radius: 16px !important; }
    .exam-question-list-title { font-size: 0.9rem !important; margin-bottom: 8px !important; }
    .exam-question-dot { width: 32px !important; height: 32px !important; font-size: 0.8rem !important; border-width: 1.5px !important; }
  }
`;export{ie as default};