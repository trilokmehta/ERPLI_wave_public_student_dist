import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{E as t,M as n,N as r,P as i,St as a,V as o,X as s,Y as c,_ as l,ct as u,ft as d,it as f,m as p,pt as m,rt as h,st as g,u as _,xt as v,zt as y}from"./interactive-BUudiXIJ.js";import{n as b,t as x}from"./contentLevels-CDV_YUuY.js";var S=e(y(),1),C=[{value:`addition`,label:`Addition`},{value:`subtraction`,label:`Subtraction`},{value:`mixed_add_sub`,label:`Add & Subtract (Mixed)`},{value:`negative_numbers`,label:`Negative Numbers`},{value:`decimal_add_sub`,label:`Decimal Add & Subtract`},{value:`multiplication`,label:`Multiplication`},{value:`long_multiplication`,label:`Long Multiplication`},{value:`times_table`,label:`Times Table`},{value:`decimal_multiply`,label:`Decimal Multiply`},{value:`division`,label:`Division`},{value:`long_division`,label:`Long Division`},{value:`division_remainder`,label:`Division with Remainder`},{value:`decimal_division`,label:`Decimal Division`},{value:`lcm`,label:`LCM (Lowest Common Multiple)`},{value:`hcf`,label:`HCF (Highest Common Factor)`},{value:`fraction_add`,label:`Fraction Add & Subtract`},{value:`fraction_multiply`,label:`Fraction Multiply & Divide`},{value:`squares`,label:`Squares`},{value:`square_roots`,label:`Square Roots`},{value:`cubes`,label:`Cubes`},{value:`cube_roots`,label:`Cube Roots`},{value:`percentages`,label:`Percentages`}];C.slice(0,5),C.slice(5,10),C.slice(10,16),C.slice(16);function w(e,t){for(;t;){let n=t;t=e%t,e=n}return e}function T(e,t){return e*t/w(e,t)}function E(e,t){return Math.floor(Math.random()*(t-e+1))+e}function D(e,t){let n=w(Math.abs(e),Math.abs(t));return[e/n,t/n]}function O(e){let{operation:t,numQuestions:n=20,numRows:r=4,minVal:i=1,maxVal:a=10,decimals:o=1,minF1:s=2,maxF1:c=12,minF2:l=2,maxF2:u=12,minTable:d=2,maxTable:f=10,minPct:p=5,maxPct:m=50,isDirect:h=!1,rule:g=h?`direct`:`any`}=e,_=[];for(let e=0;e<n;e++)if(t===`squares`){let e=E(i,a);_.push({type:`horizontal`,prompt:`${e}² = `,answer:e*e})}else if(t===`square_roots`){let e=E(i,a);_.push({type:`horizontal`,prompt:`√${e*e} = `,answer:e})}else if(t===`cubes`){let e=E(i,a);_.push({type:`horizontal`,prompt:`${e}³ = `,answer:e*e*e})}else if(t===`cube_roots`){let e=E(i,a);_.push({type:`horizontal`,prompt:`∛${e*e*e} = `,answer:e})}else if(t===`lcm`){let e=Array.from({length:r},()=>E(i,a)),t=e[0];for(let n=1;n<e.length;n++)t=T(t,e[n]);_.push({type:`horizontal`,prompt:`LCM(${e.join(`, `)}) = `,answer:t})}else if(t===`hcf`){let e=Array.from({length:r},()=>E(i,a)),t=e[0];for(let n=1;n<e.length;n++)t=w(t,e[n]);_.push({type:`horizontal`,prompt:`HCF(${e.join(`, `)}) = `,answer:t})}else if(t===`percentages`){let e=E(p,m),t=E(i,a),n=parseFloat((e*t/100).toFixed(2));_.push({type:`horizontal`,prompt:`${e}% of ${t.toLocaleString()} = `,answer:n})}else if(t===`times_table`){let e=E(d,f),t=E(1,10);_.push({type:`horizontal`,prompt:`${e} × ${t} = `,answer:e*t})}else if(t===`multiplication`||t===`long_multiplication`){let e=E(s,c),t=E(l,u);_.push({type:`horizontal`,prompt:`${e.toLocaleString()} × ${t.toLocaleString()} = `,answer:e*t})}else if(t===`decimal_multiply`){let e=parseInt(o)||1,t=10**e,n=Math.ceil(i*t),r=Math.floor(a*t),s=E(n,r),c=E(n,r),l=(s/t).toFixed(e),u=(c/t).toFixed(e),d=parseFloat((s*c/(t*t)).toFixed(e*2));_.push({type:`horizontal`,prompt:`${l} × ${u} = `,answer:d})}else if(t===`division`){let e=E(s,c),t=E(l,u);_.push({type:`horizontal`,prompt:`${(e*t).toLocaleString()} ÷ ${e.toLocaleString()} = `,answer:t})}else if(t===`long_division`){let e=E(l,u),t=E(s,c);_.push({type:`horizontal`,prompt:`${(e*t).toLocaleString()} ÷ ${e.toLocaleString()} = `,answer:t})}else if(t===`division_remainder`){let e=E(l,u),t=E(s,c),n=E(0,e-1),r=e*t+n,i=n===0?`${t}`:`${t} R ${n}`;_.push({type:`horizontal`,prompt:`${r.toLocaleString()} ÷ ${e.toLocaleString()} = `,answer:i})}else if(t===`decimal_division`){let e=parseInt(o)||1,t=E(1,e),n=Math.max(0,E(-1,e)),r=Math.max(1,Math.ceil(i)),s=Math.floor(a),c=E(r,s),l=E(r,s),u=n+t,d=c*l,f=parseFloat((d/10**u).toFixed(u)).toString(),p=parseFloat((l/10**t).toFixed(t)).toString(),m=parseFloat((c/10**n).toFixed(n)).toString();_.push({type:`horizontal`,prompt:`${f} ÷ ${p} = `,answer:parseFloat(m)})}else if(t===`fraction_add`){let e=E(2,Math.min(a,12)),t=E(2,Math.min(a,12)),n=E(1,e-1),r=E(1,t-1),i=Math.random()<.5,[o,s]=D(i?n*t-r*e:n*t+r*e,e*t),c=i?`−`:`+`,l=s===1?`${o}`:`${o}/${s}`;_.push({type:`horizontal`,prompt:`${n}/${e} ${c} ${r}/${t} = `,answer:l})}else if(t===`fraction_multiply`){let e=E(2,Math.min(a,9)),t=E(2,Math.min(a,9)),n=E(1,e),r=E(1,t),i=Math.random()<.5,o,s,c;i?([o,s]=D(n*t,e*r),c=`÷`):([o,s]=D(n*r,e*t),c=`×`);let l=s===1?`${o}`:`${o}/${s}`;_.push({type:`horizontal`,prompt:`${n}/${e} ${c} ${r}/${t} = `,answer:l})}else if(t===`addition`)_.push(j({numRows:r,minVal:i,maxVal:a,rule:g}));else if(t===`subtraction`)_.push(M({numRows:r,minVal:i,maxVal:a,rule:g}));else if(t===`negative_numbers`){let e=[],t=0,n=Math.abs(i),o=Math.abs(a);for(let i=0;i<r;i++){let r=E(n,o),a=Math.random()<.4?-r:r;i===0?(t=a,e.push({prefix:``,value:a})):(t+=a,e.push({prefix:a>=0?`+`:`-`,value:r}))}_.push({type:`vertical`,rows:e,answer:t})}else if(t===`decimal_add_sub`){let e=parseInt(o)||1,t=10**e,n=0,s=[];for(let o=0;o<r;o++){let r=Math.ceil(i*t),c=Math.floor(a*t);r>=c&&(r=Math.ceil(t),c=Math.floor(10*t));let l=E(r,c),u=(l/t).toFixed(e);o===0?(s.push({prefix:``,value:u}),n=l):Math.random()<.5&&n-l>=0?(s.push({prefix:`-`,value:u}),n-=l):(s.push({prefix:`+`,value:u}),n+=l)}_.push({type:`vertical`,rows:s,answer:parseFloat((n/t).toFixed(e))})}else _.push(N({numRows:r,minVal:i,maxVal:a,rule:g}));return _}var k=60;function A(e,t){if(!n(e))return{...t(!0),ruleOk:!0};let i=null;for(let n=0;n<k;n++){let n=t(!1);if(n){if(r(n.values,e))return{...n,ruleOk:!0};i||=n}}return{...i||t(!0),ruleOk:!1}}function j({numRows:e,minVal:t,maxVal:n,rule:r}){return A(r,a=>{let o=[],s=[],c=0;for(let l=0;l<e;l++){let u;if(l===0)u=E(t,n);else if(u=i({total:c,min:t,max:n,rule:r,lookahead:l<e-1,lookaheadSubtract:!1}),u===null){if(!a)return null;u=E(t,n)}c+=u,s.push(u),o.push({prefix:l>0?`+`:``,value:u})}return{type:`vertical`,rows:o,answer:c,values:s}})}function M({numRows:e,minVal:t,maxVal:n,rule:r}){return A(r,a=>{let o=E(Math.ceil(t*e),n*e),s=[{prefix:``,value:o}],c=[o],l=o;for(let n=1;n<e;n++){let o=Math.max(t,Math.floor(l/(e-n))),u=i({total:l,min:t,max:o,rule:r,subtract:!0,lookahead:n<e-1});if(u===null||l-u<1){if(!a)return null;u=E(t,o)}l-=u,c.push(-u),s.push({prefix:`−`,value:u})}return{type:`vertical`,rows:s,answer:l,values:c}})}function N({numRows:e,minVal:t,maxVal:n,rule:r}){return A(r,a=>{let o=[],s=[],c=0;for(let l=0;l<e;l++){if(l===0){let e=E(t,n);c=e,s.push(e),o.push({prefix:``,value:e});continue}let u=Math.random()<.5&&c-t>=0,d=l<e-1,f=u,p=i({total:c,min:t,max:n,rule:r,subtract:f,lookahead:d});if(p===null&&(f=!f,p=i({total:c,min:t,max:n,rule:r,subtract:f,lookahead:d})),p===null){if(!a)return null;p=E(t,n),f=!1}c+=f?-p:p,s.push(f?-p:p),o.push({prefix:f?`-`:`+`,value:p})}return{type:`vertical`,rows:o,answer:c,values:s}})}var P=s(),F=`examId`;function I(){let{institute:e,membership:n,profile:r}=c(),i=t(r?.current_level),[a,s]=(0,S.useState)([]),[l,d]=(0,S.useState)([]),[p,h]=(0,S.useState)(()=>Z()),[v,y]=(0,S.useState)(``),[x,C]=(0,S.useState)(!0),[w,T]=(0,S.useState)(null),[E,D]=(0,S.useState)(null);(0,S.useEffect)(()=>{let t=!0;async function r(){C(!0),T(null);let r=[],i=[],a=null,o=null;if(e?.id&&n?.id){let t=await m(e.id,n.id);r=t.data.exams||[],i=t.data.results||[],a=t.error}let c=new URLSearchParams(window.location.search).get(`slug`)||new URLSearchParams(window.location.search).get(`examId`)||new URLSearchParams(window.location.search).get(`accessToken`);if(c){let e=await g(c);if(e.data){if(r.some(t=>t.id===e.data.id)||(r=[e.data,...r]),h(e.data.id),e.data.institute_id){let n=await u(e.data.institute_id);t&&n.data&&D(n.data)}}else o=e.error?{message:`Could not open this exam link: ${e.error.message}`}:{message:`This exam link is not valid, or the exam is no longer published.`}}else if(e?.id){let n=await u(e.id);t&&n.data&&D(n.data)}t&&(s(r),d(i),T(o||a),C(!1))}return r(),()=>{t=!1}},[e?.id,n?.id]);let O=(0,S.useMemo)(()=>a.filter(e=>U(e)||b(e.level,i)),[a,i]),k=O.find(e=>e.id===p);(0,S.useEffect)(()=>{function e(){h(Z()),y(``)}return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]),(0,S.useEffect)(()=>{let e=!0;async function t(){if(y(``),!k?.exam_asset_id||W(k).length)return;let t=await f(k.exam_asset_id);if(e){if(t.error){T(t.error);return}y(t.data.downloadUrl)}}return t(),()=>{e=!1}},[k]);let A=(0,S.useMemo)(()=>{let e=new Map;return l.forEach(t=>{e.has(t.exam_id)||e.set(t.exam_id,t)}),e},[l]),j=(0,S.useMemo)(()=>O.filter(e=>e.kind!==`secure`),[O]),M=(0,S.useMemo)(()=>l.filter(e=>{let t=a.find(t=>t.id===e.exam_id);return t&&t.kind!==`secure`}),[a,l]);function N(e){h(e),Q(e)}function F(){h(null),y(``),Q(null)}async function I(e){d(t=>[e,...t])}return(0,P.jsxs)(`div`,{className:`page-wrap exam-page ${k?`exam-page-focus`:``}`,children:[(0,P.jsx)(`style`,{children:he}),(0,P.jsx)(o,{}),(0,P.jsx)(`div`,{className:`exam-container ${k?`exam-container-focus`:``}`,style:$.container,children:k?(0,P.jsx)(ee,{exam:k,result:A.get(k.id),fileUrl:v,instituteBranding:E,instituteId:e?.id,membershipId:n?.id,onBack:F,onSubmitted:I}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`div`,{className:`exam-header-banner premium-banner`,style:{position:`relative`,overflow:`hidden`,borderRadius:`26px`,padding:`32px 24px`,border:`1px solid rgba(255, 255, 255, 0.82)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`20px`,marginBottom:`8px`},children:[(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,minWidth:0},children:[(0,P.jsx)(`span`,{className:`setup-badge`,style:{background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`inline-block`,alignSelf:`flex-start`,margin:0},children:`Assessments`}),(0,P.jsx)(`h1`,{style:{fontFamily:`Sora, sans-serif`,fontSize:`2.2rem`,fontWeight:`900`,color:`var(--dark-blue)`,margin:0},children:`Exams`}),(0,P.jsx)(`p`,{style:{color:`var(--text-light)`,fontSize:`1.05rem`,fontWeight:`500`,margin:0,lineHeight:1.4},children:`Choose an exam and answer inside the portal.`})]}),(0,P.jsx)(_,{variant:`exams-banner`,size:300})]}),(0,P.jsxs)(`div`,{style:$.metrics,children:[(0,P.jsx)(V,{icon:`fa-file-lines`,label:`Available`,value:j.length}),(0,P.jsx)(V,{icon:`fa-circle-check`,label:`Submitted`,value:M.length}),(0,P.jsx)(V,{icon:`fa-bullseye`,label:`Best Score`,value:pe(M)})]}),x?(0,P.jsx)(H,{icon:`fa-circle-notch fa-spin`,title:`Loading exams...`,fill:!0}):null,w?(0,P.jsx)(H,{icon:`fa-triangle-exclamation`,title:w.message,tone:`error`,fill:!0}):null,!x&&!w&&!j.length?(0,P.jsx)(H,{variant:`exams-empty`,title:a.length?`No exams for Level ${i} yet.`:`No exams assigned yet.`,subtitle:a.length?`More exams unlock as your level goes up.`:`Your assigned exams will show up here.`,fill:!0}):null,!x&&!w&&j.length?(0,P.jsx)(`div`,{className:`exam-grid exm-grid`,children:j.map(e=>(0,P.jsx)(L,{exam:e,result:A.get(e.id),onOpen:()=>N(e.id)},e.id))}):null]})})]})}function L({exam:e,result:t,onOpen:n}){let r=W(e),i=e.kind===`file`?`File exam`:r.length?`${r.length} questions`:`Auto-generated`;return(0,P.jsxs)(`article`,{className:`exm-card ${t?`exm-card-done`:``}`,onClick:n,children:[(0,P.jsxs)(`div`,{className:`exm-head`,children:[(0,P.jsx)(`span`,{className:`exm-icon`,children:(0,P.jsx)(`i`,{className:`fa-solid ${e.kind===`file`?`fa-file-lines`:`fa-pen-to-square`}`})}),(0,P.jsxs)(`span`,{className:`exm-status ${t?`exm-status-done`:``}`,children:[(0,P.jsx)(`i`,{className:`fa-solid ${t?`fa-circle-check`:`fa-circle`}`}),t?`Done`:`Ready`]})]}),(0,P.jsx)(`h2`,{className:`exm-title`,title:e.title,children:e.title}),(0,P.jsxs)(`p`,{className:`exm-sub`,children:[i,` · `,Y(e.exam_batches)]}),(0,P.jsxs)(`div`,{className:`exm-chips`,children:[(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`i`,{className:`fa-solid fa-layer-group`}),x(e.level)]}),e.duration_minutes?(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`i`,{className:`fa-regular fa-clock`}),e.duration_minutes,` min`]}):null,(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`i`,{className:`fa-solid fa-star`}),X(e),` marks`]})]}),(0,P.jsxs)(`div`,{className:`exm-foot`,children:[t?(0,P.jsxs)(`span`,{className:`exm-score`,children:[t.score??`-`,(0,P.jsxs)(`small`,{children:[`/`,t.total_marks??X(e)]})]}):(0,P.jsx)(`span`,{}),(0,P.jsxs)(`button`,{className:`exm-btn ${t?`exm-btn-ghost`:``}`,onClick:e=>{e.stopPropagation(),n()},children:[t?`Review`:`Start exam`,(0,P.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]})]})}function ee({exam:e,result:t,fileUrl:n,instituteId:r,membershipId:i,instituteBranding:a,onBack:o,onSubmitted:s}){let[c,l]=(0,S.useState)(!1),[u,f]=(0,S.useState)(null),[p,m]=(0,S.useState)([]),[g,_]=(0,S.useState)(null),[v,y]=(0,S.useState)(null),[b,x]=(0,S.useState)(!!t),[C,w]=(0,S.useState)(null),T=e.kind===`file`,E=U(e),D=e.kind===`secure`&&e.settings?.access_mode!==`guest`;(0,S.useEffect)(()=>{if(!t)return document.body.classList.add(`exam-live-focus`),()=>document.body.classList.remove(`exam-live-focus`)},[t]),(0,S.useEffect)(()=>{if(T||!b)return;let n=!0;async function a(){l(!0),f(null);try{let a=[];if(i){let{data:t,error:n}=await d(e.id,i);if(n)throw n;a=t||[]}if(t){let r=a?.find(e=>e.status===`completed`||e.id===t.attempt_id)||a?.[0];if(r){if(!n)return;_(r.id);let t=`exam_q_${i||`guest`}_${e.id}_${r.id}`,a=[];try{a=JSON.parse(sessionStorage.getItem(t)||`[]`)}catch{}m(a),y(r.expires_at)}else{if(!n)return;m(W(e))}l(!1);return}let o=a?.find(e=>e.status===`in_progress`&&(!e.expires_at||new Date(e.expires_at)>new Date));if(o){if(!n)return;_(o.id);let t=`exam_q_${i||`guest`}_${e.id}_${o.id}`,r=[];try{r=JSON.parse(sessionStorage.getItem(t)||`[]`)}catch{}if(r.length===0){let n=e.generation_settings||{},i=Array.isArray(n.sections)&&n.sections.length?n.sections:n.operation?[n]:[];if(i.length>0){let e=0;for(let t of i){let n=O(t);for(let t of n)r.push({id:`gen_${e}`,type:`integer`,prompt:t.type===`horizontal`?t.prompt.replace(/\s*=\s*$/,``):t.rows.map(e=>`${e.prefix}${e.value}`).join(` `),marks:1,correctAnswer:String(t.answer)}),e+=1}try{sessionStorage.setItem(t,JSON.stringify(r))}catch{}}}m(r),y(o.expires_at),l(!1);return}if(i){let t=e.access_token||new URLSearchParams(window.location.search).get(`accessToken`)||null,a=await h({instituteId:r,examId:e.id,studentMembershipId:i,accessToken:t,isPreview:!1});if(a.error)throw Error(a.error.message||`Failed to start exam.`);if(!n)return;_(a.data.attemptId);let o=a.data.questions||[];if(o.length===0){let t=e.generation_settings||{},n=Array.isArray(t.sections)&&t.sections.length?t.sections:t.operation?[t]:[];if(n.length>0){let e=0;for(let t of n){let n=O(t);for(let t of n)o.push({id:`gen_${e}`,type:`integer`,prompt:t.type===`horizontal`?t.prompt.replace(/\s*=\s*$/,``):t.rows.map(e=>`${e.prefix}${e.value}`).join(` `),marks:1,correctAnswer:String(t.answer)}),e+=1}}}let s=`exam_q_${i}_${e.id}_${a.data.attemptId}`;try{sessionStorage.setItem(s,JSON.stringify(o))}catch{}m(o),y(a.data.expiresAt)}else{let t=W(e);if(t.length===0){let n=e.generation_settings||{},r=Array.isArray(n.sections)&&n.sections.length?n.sections:n.operation?[n]:[];if(r.length>0){let e=0;for(let n of r){let r=O(n);for(let n of r)t.push({id:`gen_${e}`,type:`integer`,prompt:n.type===`horizontal`?n.prompt.replace(/\s*=\s*$/,``):n.rows.map(e=>`${e.prefix}${e.value}`).join(` `),marks:1,correctAnswer:String(n.answer)}),e+=1}}}if(!n)return;m(t),l(!1)}}catch(e){if(!n)return;f(e.message||`An error occurred starting the exam.`)}finally{n&&l(!1)}}return a(),()=>{n=!1}},[e.id,t,i,r,T,b]);let k=!!i;return!b&&!t?(0,P.jsxs)(`div`,{className:`exam-room`,style:$.room,children:[k&&(0,P.jsxs)(`button`,{className:`exam-back`,style:$.backButton,onClick:o,children:[(0,P.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),`All exams`]}),(0,P.jsx)(te,{exam:e,instituteBranding:a,isGuestExam:E,isLoginOnly:D,isLoggedIn:!!i,result:t,onStart:e=>{e&&w(e),x(!0)}})]}):T?(0,P.jsxs)(`div`,{className:`exam-room`,style:$.room,children:[k&&(0,P.jsxs)(`button`,{className:`exam-back`,style:$.backButton,onClick:o,children:[(0,P.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),`All exams`]}),(0,P.jsx)(B,{exam:e,fileUrl:n,result:t})]}):(0,P.jsxs)(`div`,{className:`exam-room`,style:$.room,children:[k&&(0,P.jsxs)(`button`,{className:`exam-back`,style:$.backButton,onClick:o,children:[(0,P.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),`All exams`]}),c?(0,P.jsx)(H,{icon:`fa-circle-notch fa-spin`,title:`Preparing exam questions...`}):u?(0,P.jsx)(H,{icon:`fa-triangle-exclamation`,title:u,tone:`error`}):(0,P.jsx)(ne,{exam:e,questions:p,attemptId:g,expiresAt:v,previousResult:t,instituteId:r,membershipId:i,instituteBranding:a,guestInfo:C,onSubmitted:s})]})}function R({branding:e,centered:t=!1,compact:n=!1}){return!e?.name&&!e?.logoUrl?null:(0,P.jsxs)(`div`,{className:n?`exam-brand-bar exam-brand-bar-compact`:`exam-brand-bar`,style:{...$.brandBar,...t?{width:`100%`,justifyContent:`center`,borderBottom:`none`,marginBottom:12,paddingBottom:0}:{}},children:[e.logoUrl?(0,P.jsx)(`img`,{src:e.logoUrl,alt:e.name||`Institute`,className:`exam-brand-logo`,style:$.brandLogo}):(0,P.jsx)(`div`,{className:`exam-brand-logo`,style:$.brandLogoFallback,children:(0,P.jsx)(`i`,{className:`fa-solid fa-graduation-cap`})}),e.name?(0,P.jsx)(`span`,{className:`exam-brand-name`,style:$.brandName,children:e.name}):null]})}function te({exam:e,instituteBranding:t,onStart:n,isGuestExam:r,isLoginOnly:i,isLoggedIn:a,result:o}){let[s,c]=(0,S.useState)({fullName:``,phone:``,email:``,level:`0`,passcode:``}),[l,u]=(0,S.useState)(``);if(i&&!a)return(0,P.jsxs)(`section`,{className:`exam-guest-card`,style:$.guestCard,children:[(0,P.jsx)(`div`,{style:$.guestIconCircleError,children:(0,P.jsx)(`i`,{className:`fa-solid fa-lock`})}),(0,P.jsxs)(`div`,{style:{textAlign:`center`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,P.jsx)(`span`,{style:{...$.guestEyebrow,color:`#dc2626`,background:`#fee2e2`},children:`Login Required`}),(0,P.jsx)(`h1`,{style:$.guestRoomTitle,children:e.title}),(0,P.jsx)(`p`,{style:$.guestSubtext,children:`This is a secure, login-only exam. You must sign in with your student account credentials to take this exam.`}),(0,P.jsxs)(`a`,{href:`/login`,className:`btn btn-primary`,style:{marginTop:16,width:`100%`,maxWidth:280,display:`inline-flex`,justifyContent:`center`},children:[(0,P.jsx)(`i`,{className:`fa-solid fa-right-to-bracket`,style:{marginRight:8}}),`Go to Student Login`]})]})]});function d(t){if(t.preventDefault(),u(``),!s.fullName.trim()){u(`Please enter your full name.`);return}let r=s.phone.replace(/\D/g,``);if(!r||r.length<10){u(`Please enter a valid phone number.`);return}if(s.email.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email.trim())){u(`Please enter a valid email address.`);return}if(e.settings?.guest_passcode&&s.passcode!==e.settings.guest_passcode){u(`Incorrect exam passcode.`);return}n({fullName:s.fullName.trim(),phone:s.phone.trim(),email:s.email.trim()||null,level:s.level})}let f=W(e).length,p=[e.duration_minutes?`${e.duration_minutes} min timer`:`No timer set`,`${X(e)} marks`,e.kind===`file`?`File exam`:f?`${f} questions`:`Auto questions`];return r?(0,P.jsx)(`section`,{className:`exam-guest-card`,style:$.guestCard,children:(0,P.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,textAlign:`center`},children:[(0,P.jsx)(`div`,{style:$.guestIconCircle,children:t?.logoUrl?(0,P.jsx)(`img`,{src:t.logoUrl,alt:t.name||`Institute`,style:$.guestIconLogo}):(0,P.jsx)(`i`,{className:o?`fa-solid fa-circle-check`:`fa-solid fa-user-pen`})}),t?.name?(0,P.jsx)(`span`,{style:$.guestInstituteName,children:t.name}):null,(0,P.jsx)(`span`,{style:$.guestEyebrow,children:o?`Exam Completed`:`Guest Student Check-in`}),(0,P.jsx)(`h1`,{style:$.guestRoomTitle,children:e.title}),(0,P.jsx)(`div`,{style:$.guestPillRow,children:p.map(e=>(0,P.jsxs)(`span`,{style:$.guestMetaPill,children:[(0,P.jsx)(`i`,{className:`fa-solid fa-circle-info`,style:{color:`var(--primary-blue)`,fontSize:`0.8rem`}}),e]},e))}),o?(0,P.jsx)(`p`,{style:$.guestSubtext,children:`You have already attempted this exam. You can view your score and submission details below.`}):(0,P.jsx)(`p`,{style:$.guestSubtext,children:`Please enter your student details below to begin your exam session.`}),l&&(0,P.jsxs)(`div`,{style:$.guestErrBox,children:[(0,P.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),l]}),o?(0,P.jsxs)(`button`,{type:`button`,className:`btn btn-primary guest-submit-btn`,style:$.guestSubmitBtn,onClick:()=>n(null),children:[(0,P.jsx)(`span`,{children:`View Completed Result`}),(0,P.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]}):(0,P.jsxs)(`form`,{onSubmit:d,style:$.guestForm,children:[(0,P.jsxs)(`div`,{style:$.inputGroup,children:[(0,P.jsxs)(`label`,{style:$.inputLabel,children:[`Full Name `,(0,P.jsx)(`span`,{style:{color:`#ef4444`},children:`*`})]}),(0,P.jsxs)(`div`,{style:$.inputWrapper,children:[(0,P.jsx)(`i`,{className:`fa-solid fa-user`,style:$.inputIcon}),(0,P.jsx)(`input`,{type:`text`,required:!0,placeholder:`Enter your name...`,value:s.fullName,onChange:e=>c(t=>({...t,fullName:e.target.value})),style:$.guestInput,className:`guest-form-input`})]})]}),(0,P.jsxs)(`div`,{style:$.inputGroup,children:[(0,P.jsxs)(`label`,{style:$.inputLabel,children:[`Phone Number `,(0,P.jsx)(`span`,{style:{color:`#ef4444`},children:`*`})]}),(0,P.jsxs)(`div`,{style:$.inputWrapper,children:[(0,P.jsx)(`i`,{className:`fa-solid fa-phone`,style:$.inputIcon}),(0,P.jsx)(`input`,{type:`tel`,required:!0,placeholder:`Enter your phone number...`,value:s.phone,onChange:e=>c(t=>({...t,phone:e.target.value})),style:$.guestInput,className:`guest-form-input`})]})]}),(0,P.jsxs)(`div`,{style:$.inputGroup,children:[(0,P.jsx)(`label`,{style:$.inputLabel,children:`Email ID`}),(0,P.jsxs)(`div`,{style:$.inputWrapper,children:[(0,P.jsx)(`i`,{className:`fa-solid fa-envelope`,style:$.inputIcon}),(0,P.jsx)(`input`,{type:`email`,placeholder:`Enter your email (optional)...`,value:s.email,onChange:e=>c(t=>({...t,email:e.target.value})),style:$.guestInput,className:`guest-form-input`})]})]}),(0,P.jsxs)(`div`,{style:$.inputGroup,children:[(0,P.jsx)(`label`,{style:$.inputLabel,children:`Level / Grade`}),(0,P.jsxs)(`div`,{style:$.inputWrapper,children:[(0,P.jsx)(`i`,{className:`fa-solid fa-layer-group`,style:$.inputIcon}),(0,P.jsxs)(`select`,{value:s.level,onChange:e=>c(t=>({...t,level:e.target.value})),style:$.guestInput,className:`guest-form-input`,children:[(0,P.jsx)(`option`,{value:`0`,children:`Level 0`}),(0,P.jsx)(`option`,{value:`1`,children:`Level 1`}),(0,P.jsx)(`option`,{value:`2`,children:`Level 2`}),(0,P.jsx)(`option`,{value:`3`,children:`Level 3`}),(0,P.jsx)(`option`,{value:`4`,children:`Level 4`}),(0,P.jsx)(`option`,{value:`5`,children:`Level 5`}),(0,P.jsx)(`option`,{value:`6`,children:`Level 6`}),(0,P.jsx)(`option`,{value:`7`,children:`Level 7`}),(0,P.jsx)(`option`,{value:`8`,children:`Level 8`})]})]})]}),e.settings?.guest_passcode&&(0,P.jsxs)(`div`,{style:$.inputGroup,children:[(0,P.jsxs)(`label`,{style:$.inputLabel,children:[`Passcode `,(0,P.jsx)(`span`,{style:{color:`#ef4444`},children:`*`})]}),(0,P.jsxs)(`div`,{style:$.inputWrapper,children:[(0,P.jsx)(`i`,{className:`fa-solid fa-key`,style:$.inputIcon}),(0,P.jsx)(`input`,{type:`password`,required:!0,placeholder:`Enter exam passcode...`,value:s.passcode,onChange:e=>c(t=>({...t,passcode:e.target.value})),style:$.guestInput,className:`guest-form-input`})]})]}),(0,P.jsxs)(`button`,{type:`submit`,className:`btn btn-primary guest-submit-btn`,style:$.guestSubmitBtn,children:[(0,P.jsx)(`span`,{children:`Submit Details & Start Exam`}),(0,P.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]})]})}):(0,P.jsxs)(`section`,{className:`exam-start-panel`,style:$.startPanel,children:[(0,P.jsx)(`div`,{style:$.startIcon,children:(0,P.jsx)(`i`,{className:o?`fa-solid fa-circle-check`:r?`fa-solid fa-user-pen`:`fa-solid fa-triangle-exclamation`})}),(0,P.jsxs)(`div`,{style:$.startContent,children:[(0,P.jsx)(R,{branding:t}),(0,P.jsx)(`span`,{style:$.startEyebrow,children:o?`Exam Completed`:r?`Non-Login Guest Exam`:`Before you begin`}),(0,P.jsx)(`h1`,{className:`exam-room-title`,style:$.roomTitle,children:e.title}),(0,P.jsx)(`p`,{style:$.startText,children:o?`You have already attempted this exam. You can review your score and answer breakdown below.`:`Once you start, stay on this page and complete the exam in one sitting. Keep your answers ready before submitting.`}),(0,P.jsx)(`div`,{className:`exam-start-details`,style:$.startDetails,children:p.map(e=>(0,P.jsxs)(`span`,{style:$.startDetail,children:[(0,P.jsx)(`i`,{className:`fa-solid fa-circle-info`}),e]},e))}),!o&&(0,P.jsxs)(`ul`,{style:$.startList,children:[(0,P.jsx)(`li`,{children:`Check your internet connection before starting.`}),(0,P.jsx)(`li`,{children:`Do not refresh or close the browser during the exam.`}),(0,P.jsx)(`li`,{children:`The sidebar is hidden here so you can focus.`})]}),(0,P.jsx)(`button`,{className:`btn btn-primary`,style:$.startButton,onClick:()=>n(null),children:o?`Review Exam Results`:`I am ready, start exam`})]})]})}function ne({exam:e,questions:t,attemptId:n,expiresAt:r,previousResult:i,instituteId:o,membershipId:s,instituteBranding:c,guestInfo:u,onSubmitted:d}){let[f,m]=(0,S.useState)({}),[h,g]=(0,S.useState)(0),[_]=(0,S.useState)(()=>new Date().toISOString()),[y,b]=(0,S.useState)(()=>{if(r){let e=Math.floor((new Date(r).getTime()-Date.now())/1e3);return Math.max(0,e)}return(e.duration_minutes||0)*60}),[x,C]=(0,S.useState)(!1),[w,T]=(0,S.useState)(null),[E,D]=(0,S.useState)(i??null),O=!!E;l(`exam`,!O);let k=t[h],A=X(e,t),j=t.filter((e,t)=>q(f[G(e,t)])).length;(0,S.useEffect)(()=>{if(O||!y)return;let e=window.setInterval(()=>{b(e=>Math.max(0,e-1))},1e3);return()=>window.clearInterval(e)},[O,y]),(0,S.useEffect)(()=>{y===0&&e.duration_minutes&&!O&&N()},[y]);function M(e,t,n){m(r=>({...r,[G(e,t)]:n}))}async function N(){if(x||O)return;C(!0),T(null);let r=t.some(e=>e.id?.startsWith(`gen_`))||!!u||!s,i;if(r||u){let r=ie(t,f,e);i=await a({attemptId:n,instituteId:o||e.institute_id,examId:e.id,studentMembershipId:s||null,score:r.score,totalMarks:r.totalMarks,answers:{byQuestion:f,graded:r.details,guestInfo:u||null},startedAt:_,guest_name:u?.fullName||null,guest_level:u?.level||null})}else i=await v({attemptId:n,answers:f});if(i.error){T(i.error.message||`Failed to submit exam.`),C(!1);return}try{sessionStorage.removeItem(`exam_q_${s}_${e.id}_${n}`)}catch{}p(`exam`),D(i.data),d(i.data)}return!t||t.length===0?(0,P.jsx)(H,{icon:`fa-triangle-exclamation`,title:`This exam has no questions.`,tone:`error`}):(0,P.jsxs)(`div`,{className:`exam-room-layout`,style:$.roomLayout,children:[(0,P.jsxs)(`main`,{className:`exam-question-panel`,style:$.questionPanel,children:[(0,P.jsx)(R,{branding:c,compact:!0}),(0,P.jsxs)(`div`,{className:`exam-room-header`,style:$.roomHeader,children:[(0,P.jsxs)(`div`,{children:[(0,P.jsx)(`h1`,{className:`exam-room-title`,style:$.roomTitle,children:e.title}),(0,P.jsxs)(`p`,{className:`exam-meta`,style:$.meta,children:[j,` of `,t.length,` answered`]})]}),(0,P.jsxs)(`div`,{className:`exam-timer-pill`,style:$.timerPill,children:[(0,P.jsx)(`i`,{className:`fa-solid fa-clock`}),e.duration_minutes?me(y):`No timer`]})]}),O?null:(0,P.jsx)(`div`,{className:`exam-progress-track`,style:$.progressTrack,role:`progressbar`,"aria-valuemin":0,"aria-valuemax":t.length,"aria-valuenow":j,"aria-label":`Exam progress`,children:(0,P.jsx)(`div`,{style:{...$.progressFill,width:`${t.length?j/t.length*100:0}%`}})}),O?(0,P.jsx)(z,{result:E,totalMarks:A,guestInfo:u}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(re,{question:k,index:h,answer:f[G(k,h)],onAnswer:e=>M(k,h,e),onEnter:()=>{h<t.length-1?g(e=>Math.min(t.length-1,e+1)):N()}}),w?(0,P.jsx)(`div`,{style:$.errorBox,children:w}):null,(0,P.jsxs)(`div`,{style:$.navRow,children:[(0,P.jsx)(`button`,{className:`exam-nav-btn`,style:$.navButton,disabled:h===0,onClick:()=>g(e=>Math.max(0,e-1)),children:`Previous`}),h<t.length-1?(0,P.jsx)(`button`,{className:`exam-nav-btn exam-nav-primary btn btn-primary`,style:$.navPrimary,onClick:()=>g(e=>Math.min(t.length-1,e+1)),children:`Next`}):(0,P.jsx)(`button`,{className:`exam-nav-btn exam-nav-primary btn btn-primary`,style:$.navPrimary,disabled:x,onClick:N,children:x?`Submitting...`:`Submit Exam`})]})]})]}),(0,P.jsxs)(`aside`,{className:`exam-question-list`,style:$.questionList,children:[(0,P.jsx)(`div`,{className:`exam-question-list-title`,style:$.questionListTitle,children:`Questions`}),(0,P.jsx)(`div`,{style:$.questionDots,children:t.map((e,t)=>{let n=G(e,t),r=q(f[n]);return(0,P.jsx)(`button`,{className:`exam-question-dot ${t===h?`active`:``} ${r?`answered`:``}`,style:{...$.questionDot,...t===h?$.questionDotActive:{},...r?$.questionDotAnswered:{}},onClick:()=>g(t),children:t+1},n)})})]})]})}function re({question:e,index:t,answer:n,onAnswer:r,onEnter:i}){let a=le(e.type),o=(0,S.useRef)(null),s=se(e),c=(0,S.useMemo)(()=>ae(s),[s]),[l,u]=(0,S.useState)(()=>{try{return localStorage.getItem(K)||`horizontal`}catch{return`horizontal`}});function d(e){u(e);try{localStorage.setItem(K,e)}catch{}}return(0,S.useEffect)(()=>{o.current&&o.current.focus()},[t]),(0,P.jsxs)(`section`,{className:`exam-question-card`,style:$.questionCard,children:[(0,P.jsxs)(`div`,{className:`exam-question-head`,style:$.questionHead,children:[(0,P.jsxs)(`div`,{className:`exam-question-badge`,style:$.questionBadge,children:[`Question `,t+1,` | `,ue(a)]}),c?(0,P.jsxs)(`div`,{className:`exam-layout-toggle`,role:`group`,"aria-label":`Question format`,children:[(0,P.jsxs)(`button`,{type:`button`,className:l===`horizontal`?`active`:``,title:`Horizontal`,onClick:()=>d(`horizontal`),children:[(0,P.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` Horizontal`]}),(0,P.jsxs)(`button`,{type:`button`,className:l===`vertical`?`active`:``,title:`Vertical`,onClick:()=>d(`vertical`),children:[(0,P.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` Vertical`]})]}):null]}),c&&l===`vertical`?(0,P.jsx)(oe,{terms:c}):(0,P.jsx)(`h2`,{className:`exam-question-text`,style:$.questionText,children:s}),a===`mcq`?(0,P.jsx)(`div`,{style:$.optionGrid,className:`exam-option-grid`,children:de(e).map(e=>(0,P.jsx)(`button`,{className:`exam-option-button`,style:{...$.optionButton,...n===e?$.optionButtonActive:{}},onClick:()=>r(e),children:e},e))}):(0,P.jsxs)(`div`,{style:$.answerBox,children:[(0,P.jsx)(`label`,{className:`exam-question-label`,style:$.answerLabel,children:`Enter number`}),(0,P.jsx)(`input`,{ref:o,className:`exam-answer-input`,style:$.answerInput,type:`text`,inputMode:`decimal`,pattern:`-?[0-9]*\\.?[0-9]*`,value:n??``,onChange:e=>r(fe(e.target.value)),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),i?.())},placeholder:`0`},G(e,t))]})]})}function z({result:e,totalMarks:t,guestInfo:n}){let r=Number(e?.score??0),i=t?Math.round(r/t*100):0;return(0,P.jsxs)(`section`,{style:$.resultPanel,children:[(0,P.jsxs)(`div`,{style:$.resultCircle,children:[i,`%`]}),(0,P.jsx)(`h2`,{style:$.resultTitle,children:`Exam Submitted Successfully`}),n?.fullName?(0,P.jsxs)(P.Fragment,{children:[(0,P.jsxs)(`p`,{style:{color:`var(--primary-blue)`,fontWeight:800,fontSize:`1.05rem`,margin:`4px 0`},children:[`Student: `,n.fullName,` (Level `,n.level,`)`]}),(0,P.jsxs)(`p`,{style:{color:`var(--text-light)`,fontSize:`0.9rem`,margin:`0 0 4px`},children:[n.phone,n.email?` • ${n.email}`:``]})]}):null,(0,P.jsxs)(`p`,{style:$.score,children:[`Score: `,r,` / `,t]})]})}function B({exam:e,fileUrl:t,result:n}){return(0,P.jsxs)(`div`,{className:`exam-file-layout`,style:$.fileLayout,children:[(0,P.jsx)(`main`,{style:$.filePanel,children:t?(0,P.jsx)(`iframe`,{title:e.title,src:`${t}#toolbar=0&navpanes=0&scrollbar=1`,style:$.fileFrame}):(0,P.jsx)(H,{icon:`fa-circle-notch fa-spin`,title:`Opening exam file...`})}),(0,P.jsxs)(`aside`,{style:$.fileAside,children:[(0,P.jsx)(`h1`,{style:$.roomTitle,children:e.title}),(0,P.jsx)(`p`,{style:$.meta,children:Y(e.exam_batches)}),n?(0,P.jsxs)(`p`,{style:$.score,children:[`Submitted: `,n.score??`-`,` / `,n.total_marks??X(e)]}):null,(0,P.jsx)(`p`,{style:$.meta,children:`Answer this file exam as instructed by your teacher.`})]})]})}function V({icon:e,label:t,value:n}){return(0,P.jsxs)(`div`,{className:`exam-metric`,style:$.metric,children:[(0,P.jsx)(`span`,{style:$.metricIcon,children:(0,P.jsx)(`i`,{className:`fa-solid ${e}`})}),(0,P.jsxs)(`span`,{children:[(0,P.jsx)(`strong`,{style:$.metricValue,children:n}),(0,P.jsx)(`small`,{style:$.metricLabel,children:t})]})]})}function H({icon:e,title:t,subtitle:n,tone:r,fill:i,variant:a}){return i?(0,P.jsxs)(`div`,{style:{...$.state,...r===`error`?$.error:{},...$.stateFill},children:[a?(0,P.jsx)(_,{variant:a,size:420}):(0,P.jsx)(`div`,{style:$.illustrationCore,children:(0,P.jsx)(`i`,{className:`fa-solid ${e}`})}),(0,P.jsxs)(`div`,{style:$.stateFillText,children:[(0,P.jsx)(`span`,{style:$.stateFillTitle,children:t}),n?(0,P.jsx)(`p`,{style:$.stateFillSubtitle,children:n}):null]})]}):(0,P.jsxs)(`div`,{style:{...$.state,...r===`error`?$.error:{}},children:[(0,P.jsx)(`i`,{className:`fa-solid ${e}`}),(0,P.jsx)(`span`,{children:t})]})}function ie(e,t,n){let r=e.map((e,n)=>{let r=G(e,n),i=t[r],a=ce(e),o=Number(e.marks??1),s=J(i)===J(a);return{id:r,given:i,correct:a,marks:o,isCorrect:s,score:s?o:0}});return{score:r.reduce((e,t)=>e+t.score,0),totalMarks:X(n,e),details:r}}function U(e){return e?.kind===`secure`&&e?.settings?.access_mode===`guest`}function W(e){return Array.isArray(e.settings?.questions)?e.settings.questions:[]}function G(e,t){return e?e.id??`q_${t}`:`q_${t}`}var K=`exam_question_layout`;function ae(e){let t=String(e??``).trim().replace(/[=?]+$/,``).trim();if(!t||!/^[-+]?\s*\d+(?:\.\d+)?(?:\s*[-+]\s*\d+(?:\.\d+)?)+$/.test(t))return null;let n=t.match(/[-+]?\s*\d+(?:\.\d+)?/g);return!n||n.length<2?null:n.map((e,t)=>{let n=e.replace(/\s+/g,``),r=n.startsWith(`-`);return{sign:t===0?r?`-`:``:r?`-`:`+`,value:n.replace(/^[-+]/,``)}})}function oe({terms:e}){return(0,P.jsxs)(`div`,{className:`exam-vertical`,"aria-label":`Question in vertical format`,children:[e.map((e,t)=>(0,P.jsxs)(`span`,{style:{display:`contents`},children:[(0,P.jsx)(`span`,{className:`vrow-sign`,children:e.sign}),(0,P.jsx)(`span`,{className:`vrow-value`,children:e.value})]},`${e.sign}${e.value}-${t}`)),(0,P.jsx)(`span`,{className:`vrule`}),(0,P.jsx)(`span`,{className:`vtotal`,children:`?`})]})}function se(e){return e?e.prompt??e.question??``:``}function ce(e){return e?e.correctAnswer??e.correct_answer??e.answer??``:``}function le(e){return e===`fill_blank`||e===`fill`?`fill_blank`:e===`integer`||e===`number`?`integer`:`mcq`}function ue(e){return e===`fill_blank`?`Fill blank`:e===`integer`?`Integer`:`MCQ`}function de(e){return e?Array.isArray(e.options)?e.options.map(e=>typeof e==`string`?e:e?.label).filter(Boolean):[e.option_a,e.option_b,e.option_c,e.option_d].filter(Boolean):[]}function fe(e){let t=e.trim().startsWith(`-`),[n,...r]=e.replace(/[^0-9.]/g,``).split(`.`),i=r.length?`.${r.join(``)}`:``;return`${t?`-`:``}${n}${i}`}function q(e){return e!=null&&String(e).trim()!==``}function J(e){let t=String(e??``).trim().toLowerCase();return t&&/^-?\d*\.?\d+$/.test(t)?String(Number(t)):t}function Y(e=[]){let t=e.map(e=>e.batches?.name).filter(Boolean);return t.length?t.join(`, `):`Assigned exam`}function X(e,t=W(e)){let n=t.reduce((e,t)=>e+Number(t.marks??1),0);return Number(e.total_marks??n??0)}function pe(e){return e.length?Math.max(...e.map(e=>Number(e.score??0))):`-`}function me(e){let t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,`0`)}`}function Z(){return new URLSearchParams(window.location.search).get(F)}function Q(e){let t=new URL(window.location.href);e?t.searchParams.set(F,e):t.searchParams.delete(F);let n=`${t.pathname}${t.search}${t.hash}`;n!==`${window.location.pathname}${window.location.search}${window.location.hash}`&&window.history.pushState({examId:e},``,n)}var $={container:{width:`100%`,display:`flex`,flexDirection:`column`,gap:24,padding:`20px 28px 60px`,boxSizing:`border-box`},header:{display:`flex`,alignItems:`center`,gap:14,background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:18,boxShadow:`var(--shadow)`},headerIcon:{width:58,height:58,borderRadius:16,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:24,flexShrink:0},title:{fontFamily:`Sora, sans-serif`,fontSize:`2rem`,color:`var(--dark-blue)`,marginBottom:4},subtitle:{color:`var(--text-light)`,fontSize:`1rem`,fontWeight:700},metrics:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:14},metric:{background:`rgba(255,255,255,0.9)`,border:`1px solid var(--border)`,borderRadius:16,padding:16,display:`flex`,alignItems:`center`,gap:14,boxShadow:`var(--shadow)`},metricIcon:{width:46,height:46,borderRadius:14,background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`},metricValue:{display:`block`,fontFamily:`Sora, sans-serif`,fontSize:`1.5rem`,color:`var(--dark-blue)`,lineHeight:1},metricLabel:{display:`block`,color:`var(--text-light)`,fontWeight:800,textTransform:`uppercase`,fontSize:`0.75rem`,marginTop:4},grid:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(300px, 1fr))`,gap:16},card:{background:`rgba(255,255,255,0.9)`,border:`1px solid var(--border)`,borderRadius:18,padding:18,display:`flex`,flexDirection:`column`,gap:12,boxShadow:`var(--shadow)`,minWidth:0,overflow:`hidden`},cardHeader:{display:`flex`,justifyContent:`space-between`,gap:12,alignItems:`flex-start`},cardTitle:{fontFamily:`Sora, sans-serif`,fontSize:`1.12rem`,color:`var(--dark-blue)`,margin:0,minWidth:0,overflowWrap:`anywhere`,display:`-webkit-box`,WebkitLineClamp:2,WebkitBoxOrient:`vertical`,overflow:`hidden`},readyBadge:{background:`#dcfce7`,color:`#166534`,borderRadius:999,padding:`5px 10px`,fontSize:`0.72rem`,fontWeight:900,textTransform:`uppercase`,flexShrink:0,whiteSpace:`nowrap`,alignSelf:`flex-start`},doneBadge:{background:`#e0e7ff`,color:`#3730a3`,borderRadius:999,padding:`5px 10px`,fontSize:`0.72rem`,fontWeight:900,textTransform:`uppercase`,flexShrink:0,whiteSpace:`nowrap`,alignSelf:`flex-start`},meta:{color:`var(--text-light)`,fontSize:`0.88rem`,fontWeight:700,overflowWrap:`anywhere`,minWidth:0},score:{color:`var(--dark-blue)`,fontWeight:900},button:{marginTop:`auto`,textAlign:`center`},room:{display:`flex`,flexDirection:`column`,gap:10,width:`100%`},backButton:{width:`fit-content`,border:`1px solid var(--border)`,background:`white`,color:`var(--primary-blue)`,borderRadius:999,padding:`10px 16px`,fontWeight:900,display:`inline-flex`,alignItems:`center`,gap:8,cursor:`pointer`},startPanel:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:26,boxShadow:`var(--shadow)`,display:`grid`,gridTemplateColumns:`72px minmax(0, 1fr)`,gap:20,alignItems:`start`,maxWidth:880,margin:`0 auto`},startIcon:{width:64,height:64,borderRadius:18,background:`#fef3c7`,color:`#b45309`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:26},startContent:{display:`flex`,flexDirection:`column`,gap:12},brandBar:{display:`flex`,alignItems:`center`,gap:12,paddingBottom:14,marginBottom:4,borderBottom:`1px solid var(--border)`},brandLogo:{width:44,height:44,borderRadius:12,objectFit:`cover`,border:`1px solid var(--border)`,background:`white`,flexShrink:0},brandLogoFallback:{width:44,height:44,borderRadius:12,background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:20,flexShrink:0},brandName:{fontFamily:`Sora, sans-serif`,fontWeight:900,fontSize:`1.05rem`,color:`var(--dark-blue)`},startEyebrow:{color:`var(--primary-blue)`,fontWeight:900,textTransform:`uppercase`,fontSize:`0.76rem`,letterSpacing:`0.08em`},startText:{color:`var(--text-light)`,fontSize:`1rem`,fontWeight:700,lineHeight:1.5,maxWidth:680},startDetails:{display:`flex`,flexWrap:`wrap`,gap:10},startDetail:{border:`1px solid var(--border)`,background:`white`,color:`var(--dark-blue)`,borderRadius:999,padding:`8px 12px`,fontSize:`0.84rem`,fontWeight:900,display:`inline-flex`,alignItems:`center`,gap:7},startList:{margin:`2px 0 0 18px`,color:`var(--text-light)`,fontWeight:700,lineHeight:1.7},startButton:{alignSelf:`flex-start`,marginTop:4},guestCard:{background:`rgba(255, 255, 255, 0.94)`,backdropFilter:`blur(20px)`,border:`1px solid rgba(255, 255, 255, 0.8)`,borderRadius:24,padding:`36px 32px`,boxShadow:`0 20px 48px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.05)`,maxWidth:560,width:`100%`,margin:`20px auto`,boxSizing:`border-box`},guestIconCircle:{width:64,height:64,borderRadius:20,background:`linear-gradient(135deg, var(--light-blue), #dbeafe)`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:26,marginBottom:16,overflow:`hidden`,boxShadow:`0 8px 16px -4px color-mix(in srgb, var(--primary-blue) 20%, transparent)`},guestIconLogo:{width:`100%`,height:`100%`,objectFit:`cover`,borderRadius:`inherit`},guestInstituteName:{fontFamily:`Sora, sans-serif`,fontWeight:800,fontSize:`0.95rem`,color:`var(--dark-blue)`,marginBottom:12},guestIconCircleError:{width:64,height:64,borderRadius:20,background:`linear-gradient(135deg, #fee2e2, #fecaca)`,color:`#dc2626`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:26,margin:`0 auto 16px`},guestEyebrow:{background:`var(--light-blue)`,color:`var(--primary-blue)`,fontWeight:900,textTransform:`uppercase`,fontSize:`0.74rem`,letterSpacing:`0.08em`,padding:`6px 14px`,borderRadius:999,display:`inline-block`},guestRoomTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.65rem`,lineHeight:1.25,margin:`12px 0 10px`,textAlign:`center`},guestPillRow:{display:`flex`,flexWrap:`wrap`,justifyContent:`center`,gap:8,marginBottom:14},guestMetaPill:{border:`1px solid var(--border)`,background:`white`,color:`var(--dark-blue)`,borderRadius:999,padding:`6px 14px`,fontSize:`0.82rem`,fontWeight:800,display:`inline-flex`,alignItems:`center`,gap:6,boxShadow:`0 2px 4px rgba(0,0,0,0.02)`},guestSubtext:{color:`var(--text-light)`,fontSize:`0.95rem`,fontWeight:600,lineHeight:1.5,textAlign:`center`,marginBottom:20,maxWidth:460},guestErrBox:{width:`100%`,padding:`12px 16px`,background:`#fff5f5`,color:`#b91c1c`,border:`1px solid #fecaca`,borderRadius:14,fontSize:`0.88rem`,fontWeight:700,marginBottom:16,display:`flex`,alignItems:`center`,gap:8,boxSizing:`border-box`},guestForm:{display:`flex`,flexDirection:`column`,gap:16,width:`100%`},inputGroup:{display:`flex`,flexDirection:`column`,gap:6,textAlign:`left`,width:`100%`},inputLabel:{fontSize:`0.8rem`,fontWeight:800,textTransform:`uppercase`,color:`var(--dark-blue)`,letterSpacing:`0.03em`},inputWrapper:{position:`relative`,width:`100%`},inputIcon:{position:`absolute`,left:16,top:`50%`,transform:`translateY(-50%)`,color:`var(--text-light)`,fontSize:`0.95rem`,pointerEvents:`none`},guestInput:{width:`100%`,padding:`13px 16px 13px 44px`,borderRadius:14,border:`1.5px solid var(--border)`,outline:`none`,fontWeight:700,fontSize:`0.95rem`,color:`var(--dark-blue)`,background:`white`,boxSizing:`border-box`,transition:`all 0.2s ease`},guestSubmitBtn:{width:`100%`,padding:`14px 20px`,marginTop:8,borderRadius:14,fontSize:`1rem`,fontWeight:800,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10,boxShadow:`0 8px 20px -4px color-mix(in srgb, var(--primary-blue) 30%, transparent)`,cursor:`pointer`},roomLayout:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 290px`,gap:16,alignItems:`start`},questionPanel:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:24,boxShadow:`var(--shadow)`,minHeight:520,display:`flex`,flexDirection:`column`,gap:16},roomHeader:{display:`flex`,justifyContent:`space-between`,gap:12,alignItems:`flex-start`,marginBottom:8,paddingBottom:16,borderBottom:`1px solid var(--border)`},roomTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.4rem`,lineHeight:1.2},timerPill:{background:`var(--light-blue)`,color:`var(--primary-blue)`,borderRadius:999,padding:`8px 14px`,fontWeight:900,display:`inline-flex`,alignItems:`center`,gap:8,whiteSpace:`nowrap`},questionCard:{background:`rgba(255,255,255,0.76)`,border:`1px solid var(--border)`,borderRadius:18,padding:26,flex:1,display:`flex`,flexDirection:`column`,gap:16},progressTrack:{height:8,borderRadius:999,background:`color-mix(in srgb, var(--primary-blue) 12%, transparent)`,overflow:`hidden`,margin:`4px 0 16px`},progressFill:{height:`100%`,borderRadius:999,background:`linear-gradient(90deg, var(--primary-blue), var(--dark-blue))`,transition:`width 0.3s ease`},questionHead:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:12,flexWrap:`wrap`},questionBadge:{color:`var(--primary-blue)`,fontWeight:900,fontSize:`0.8rem`,textTransform:`uppercase`,marginBottom:4},questionText:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.5rem`,lineHeight:1.35,marginBottom:8},optionGrid:{display:`grid`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`,gap:14,marginTop:12},optionButton:{border:`2px solid var(--border)`,background:`white`,color:`var(--dark-blue)`,borderRadius:16,padding:18,fontWeight:900,cursor:`pointer`,textAlign:`left`,fontSize:`1rem`},optionButtonActive:{borderColor:`var(--primary-blue)`,background:`var(--light-blue)`,color:`var(--primary-blue)`,boxShadow:`0 0 0 4px color-mix(in srgb, var(--primary-blue) 12%, transparent)`},answerBox:{display:`grid`,gap:10,maxWidth:520,marginTop:12},answerLabel:{color:`var(--text-light)`,fontWeight:900,textTransform:`uppercase`,fontSize:`0.78rem`},answerInput:{width:`100%`,boxSizing:`border-box`,border:`2px solid var(--border)`,borderRadius:16,padding:`16px 18px`,fontSize:`1.15rem`,fontWeight:800,color:`var(--dark-blue)`,outline:`none`,background:`white`},errorBox:{marginTop:12,background:`#fff5f5`,color:`#b91c1c`,border:`1px solid #fecaca`,borderRadius:12,padding:12,fontWeight:800},navRow:{display:`flex`,justifyContent:`space-between`,gap:12,marginTop:`auto`},navButton:{border:`1px solid var(--border)`,background:`white`,color:`var(--primary-blue)`,borderRadius:999,padding:`12px 22px`,fontWeight:900,cursor:`pointer`},navPrimary:{minWidth:150,textAlign:`center`},questionList:{background:`rgba(255,255,255,0.45)`,border:`1px solid var(--border)`,borderRadius:18,padding:16,boxShadow:`var(--shadow)`,maxHeight:`calc(100vh - var(--nav-h) - 95px)`,overflowY:`auto`},questionListTitle:{color:`var(--primary-blue)`,fontWeight:900,textTransform:`uppercase`,fontSize:`0.75rem`,marginBottom:12},questionDots:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(42px, 1fr))`,gap:8},questionDot:{aspectRatio:`1`,border:`1px solid var(--border)`,background:`white`,color:`var(--dark-blue)`,borderRadius:12,fontWeight:900,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`},questionDotActive:{borderColor:`var(--primary-blue)`,color:`var(--primary-blue)`,boxShadow:`0 0 0 2px color-mix(in srgb, var(--primary-blue) 15%, transparent)`},questionDotAnswered:{background:`var(--light-blue)`},resultPanel:{minHeight:360,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:12,textAlign:`center`},resultCircle:{width:128,height:128,borderRadius:`50%`,background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`Sora, sans-serif`,fontSize:`2rem`,fontWeight:900},resultTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`},fileLayout:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 280px`,gap:12},filePanel:{height:`calc(100vh - var(--nav-h) - 110px)`,minHeight:520,background:`white`,border:`1px solid var(--border)`,borderRadius:18,overflow:`hidden`,boxShadow:`var(--shadow)`},fileFrame:{width:`100%`,height:`100%`,border:0},fileAside:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:16,boxShadow:`var(--shadow)`,height:`fit-content`},state:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:16,padding:20,display:`flex`,alignItems:`center`,gap:12,color:`var(--dark-blue)`,fontWeight:800},error:{color:`#b91c1c`,borderColor:`#fecaca`,background:`#fff5f5`},stateFill:{flex:1,minHeight:`45vh`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:8,textAlign:`center`},stateFillText:{display:`flex`,flexDirection:`column`,gap:6,maxWidth:420},stateFillTitle:{fontFamily:`Sora, sans-serif`,fontSize:`1.2rem`,color:`var(--dark-blue)`},stateFillSubtitle:{margin:0,color:`var(--text-light)`,fontWeight:600,fontSize:`0.95rem`,lineHeight:1.4},illustrationCore:{width:84,height:84,borderRadius:`50%`,background:`linear-gradient(135deg, var(--light-blue), color-mix(in srgb, var(--primary-blue) 14%, white))`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:30,boxShadow:`0 10px 24px color-mix(in srgb, var(--primary-blue) 18%, transparent)`}},he=`
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
    align-self: flex-start;
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
    background: var(--light-blue);
    color: var(--primary-blue);
  }

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

  .exam-question-dot:hover {
    border-color: var(--primary-blue) !important;
    background-color: var(--light-blue) !important;
    color: var(--primary-blue) !important;
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
  }
`;export{I as default};