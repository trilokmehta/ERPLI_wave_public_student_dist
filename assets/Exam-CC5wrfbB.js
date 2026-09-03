import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{B as t,C as n,D as r,F as i,I as a,O as o,S as s,T as c,U as l,W as u,X as d,Z as f,g as p,mt as m,u as h,w as g,z as _}from"./interactive-f7pjsBR7.js";import{n as v,t as y}from"./contentLevels-D8PMhpsV.js";var b=e(m(),1),x=[{value:`addition`,label:`Addition`},{value:`subtraction`,label:`Subtraction`},{value:`mixed_add_sub`,label:`Add & Subtract (Mixed)`},{value:`negative_numbers`,label:`Negative Numbers`},{value:`decimal_add_sub`,label:`Decimal Add & Subtract`},{value:`multiplication`,label:`Multiplication`},{value:`long_multiplication`,label:`Long Multiplication`},{value:`times_table`,label:`Times Table`},{value:`decimal_multiply`,label:`Decimal Multiply`},{value:`division`,label:`Division`},{value:`long_division`,label:`Long Division`},{value:`division_remainder`,label:`Division with Remainder`},{value:`decimal_division`,label:`Decimal Division`},{value:`lcm`,label:`LCM (Lowest Common Multiple)`},{value:`hcf`,label:`HCF (Highest Common Factor)`},{value:`fraction_add`,label:`Fraction Add & Subtract`},{value:`fraction_multiply`,label:`Fraction Multiply & Divide`},{value:`squares`,label:`Squares`},{value:`square_roots`,label:`Square Roots`},{value:`cubes`,label:`Cubes`},{value:`cube_roots`,label:`Cube Roots`},{value:`percentages`,label:`Percentages`}];x.slice(0,5),x.slice(5,10),x.slice(10,16),x.slice(16);function S(e,t){for(;t;){let n=t;t=e%t,e=n}return e}function C(e,t){return e*t/S(e,t)}function w(e,t){return Math.floor(Math.random()*(t-e+1))+e}function T(e,t){let n=S(Math.abs(e),Math.abs(t));return[e/n,t/n]}function E(e){let{operation:t,numQuestions:n=20,numRows:r=4,minVal:i=1,maxVal:a=10,decimals:o=1,minF1:s=2,maxF1:c=12,minF2:l=2,maxF2:u=12,minTable:d=2,maxTable:f=10,minPct:p=5,maxPct:m=50,isDirect:h=!1,rule:g=h?`direct`:`any`}=e,_=[];for(let e=0;e<n;e++)if(t===`squares`){let e=w(i,a);_.push({type:`horizontal`,prompt:`${e}² = `,answer:e*e})}else if(t===`square_roots`){let e=w(i,a);_.push({type:`horizontal`,prompt:`√${e*e} = `,answer:e})}else if(t===`cubes`){let e=w(i,a);_.push({type:`horizontal`,prompt:`${e}³ = `,answer:e*e*e})}else if(t===`cube_roots`){let e=w(i,a);_.push({type:`horizontal`,prompt:`∛${e*e*e} = `,answer:e})}else if(t===`lcm`){let e=Array.from({length:r},()=>w(i,a)),t=e[0];for(let n=1;n<e.length;n++)t=C(t,e[n]);_.push({type:`horizontal`,prompt:`LCM(${e.join(`, `)}) = `,answer:t})}else if(t===`hcf`){let e=Array.from({length:r},()=>w(i,a)),t=e[0];for(let n=1;n<e.length;n++)t=S(t,e[n]);_.push({type:`horizontal`,prompt:`HCF(${e.join(`, `)}) = `,answer:t})}else if(t===`percentages`){let e=w(p,m),t=w(i,a),n=parseFloat((e*t/100).toFixed(2));_.push({type:`horizontal`,prompt:`${e}% of ${t.toLocaleString()} = `,answer:n})}else if(t===`times_table`){let e=w(d,f),t=w(1,10);_.push({type:`horizontal`,prompt:`${e} × ${t} = `,answer:e*t})}else if(t===`multiplication`||t===`long_multiplication`){let e=w(s,c),t=w(l,u);_.push({type:`horizontal`,prompt:`${e.toLocaleString()} × ${t.toLocaleString()} = `,answer:e*t})}else if(t===`decimal_multiply`){let e=parseInt(o)||1,t=10**e,n=Math.ceil(i*t),r=Math.floor(a*t),s=w(n,r),c=w(n,r),l=(s/t).toFixed(e),u=(c/t).toFixed(e),d=parseFloat((s*c/(t*t)).toFixed(e*2));_.push({type:`horizontal`,prompt:`${l} × ${u} = `,answer:d})}else if(t===`division`){let e=w(s,c),t=w(l,u);_.push({type:`horizontal`,prompt:`${(e*t).toLocaleString()} ÷ ${e.toLocaleString()} = `,answer:t})}else if(t===`long_division`){let e=w(l,u),t=w(s,c);_.push({type:`horizontal`,prompt:`${(e*t).toLocaleString()} ÷ ${e.toLocaleString()} = `,answer:t})}else if(t===`division_remainder`){let e=w(l,u),t=w(s,c),n=w(0,e-1),r=e*t+n,i=n===0?`${t}`:`${t} R ${n}`;_.push({type:`horizontal`,prompt:`${r.toLocaleString()} ÷ ${e.toLocaleString()} = `,answer:i})}else if(t===`decimal_division`){let e=parseInt(o)||1,t=w(1,e),n=Math.max(0,w(-1,e)),r=Math.max(1,Math.ceil(i)),s=Math.floor(a),c=w(r,s),l=w(r,s),u=n+t,d=c*l,f=parseFloat((d/10**u).toFixed(u)).toString(),p=parseFloat((l/10**t).toFixed(t)).toString(),m=parseFloat((c/10**n).toFixed(n)).toString();_.push({type:`horizontal`,prompt:`${f} ÷ ${p} = `,answer:parseFloat(m)})}else if(t===`fraction_add`){let e=w(2,Math.min(a,12)),t=w(2,Math.min(a,12)),n=w(1,e-1),r=w(1,t-1),i=Math.random()<.5,[o,s]=T(i?n*t-r*e:n*t+r*e,e*t),c=i?`−`:`+`,l=s===1?`${o}`:`${o}/${s}`;_.push({type:`horizontal`,prompt:`${n}/${e} ${c} ${r}/${t} = `,answer:l})}else if(t===`fraction_multiply`){let e=w(2,Math.min(a,9)),t=w(2,Math.min(a,9)),n=w(1,e),r=w(1,t),i=Math.random()<.5,o,s,c;i?([o,s]=T(n*t,e*r),c=`÷`):([o,s]=T(n*r,e*t),c=`×`);let l=s===1?`${o}`:`${o}/${s}`;_.push({type:`horizontal`,prompt:`${n}/${e} ${c} ${r}/${t} = `,answer:l})}else if(t===`addition`)_.push(k({numRows:r,minVal:i,maxVal:a,rule:g}));else if(t===`subtraction`)_.push(A({numRows:r,minVal:i,maxVal:a,rule:g}));else if(t===`negative_numbers`){let e=[],t=0,n=Math.abs(i),o=Math.abs(a);for(let i=0;i<r;i++){let r=w(n,o),a=Math.random()<.4?-r:r;i===0?(t=a,e.push({prefix:``,value:a})):(t+=a,e.push({prefix:a>=0?`+`:`-`,value:r}))}_.push({type:`vertical`,rows:e,answer:t})}else if(t===`decimal_add_sub`){let e=parseInt(o)||1,t=10**e,n=0,s=[];for(let o=0;o<r;o++){let r=Math.ceil(i*t),c=Math.floor(a*t);r>=c&&(r=Math.ceil(t),c=Math.floor(10*t));let l=w(r,c),u=(l/t).toFixed(e);o===0?(s.push({prefix:``,value:u}),n=l):Math.random()<.5&&n-l>=0?(s.push({prefix:`-`,value:u}),n-=l):(s.push({prefix:`+`,value:u}),n+=l)}_.push({type:`vertical`,rows:s,answer:parseFloat((n/t).toFixed(e))})}else _.push(j({numRows:r,minVal:i,maxVal:a,rule:g}));return _}var D=60;function O(e,t){if(!s(e))return{...t(!0),ruleOk:!0};let r=null;for(let i=0;i<D;i++){let i=t(!1);if(i){if(n(i.values,e))return{...i,ruleOk:!0};r||=i}}return{...r||t(!0),ruleOk:!1}}function k({numRows:e,minVal:t,maxVal:n,rule:r}){return O(r,i=>{let a=[],o=[],s=0;for(let c=0;c<e;c++){let l;if(c===0)l=w(t,n);else if(l=g({total:s,min:t,max:n,rule:r,lookahead:c<e-1,lookaheadSubtract:!1}),l===null){if(!i)return null;l=w(t,n)}s+=l,o.push(l),a.push({prefix:c>0?`+`:``,value:l})}return{type:`vertical`,rows:a,answer:s,values:o}})}function A({numRows:e,minVal:t,maxVal:n,rule:r}){return O(r,i=>{let a=w(Math.ceil(t*e),n*e),o=[{prefix:``,value:a}],s=[a],c=a;for(let n=1;n<e;n++){let a=Math.max(t,Math.floor(c/(e-n))),l=g({total:c,min:t,max:a,rule:r,subtract:!0,lookahead:n<e-1});if(l===null||c-l<1){if(!i)return null;l=w(t,a)}c-=l,s.push(-l),o.push({prefix:`−`,value:l})}return{type:`vertical`,rows:o,answer:c,values:s}})}function j({numRows:e,minVal:t,maxVal:n,rule:r}){return O(r,i=>{let a=[],o=[],s=0;for(let c=0;c<e;c++){if(c===0){let e=w(t,n);s=e,o.push(e),a.push({prefix:``,value:e});continue}let l=Math.random()<.5&&s-t>=0,u=c<e-1,d=l,f=g({total:s,min:t,max:n,rule:r,subtract:d,lookahead:u});if(f===null&&(d=!d,f=g({total:s,min:t,max:n,rule:r,subtract:d,lookahead:u})),f===null){if(!i)return null;f=w(t,n),d=!1}s+=d?-f:f,o.push(d?-f:f),a.push({prefix:d?`-`:`+`,value:f})}return{type:`vertical`,rows:a,answer:s,values:o}})}var M=o(),N=`examId`;function P(){let{institute:e,membership:n,profile:i}=r(),o=p(i?.current_level),[s,l]=(0,b.useState)([]),[d,f]=(0,b.useState)([]),[m,g]=(0,b.useState)(()=>Z()),[y,x]=(0,b.useState)(``),[S,C]=(0,b.useState)(!0),[w,T]=(0,b.useState)(null),[E,D]=(0,b.useState)(null);(0,b.useEffect)(()=>{let r=!0;async function i(){C(!0),T(null);let i=[],a=[],o=null,s=null;if(e?.id&&n?.id){let t=await u(e.id,n.id);i=t.data.exams||[],a=t.data.results||[],o=t.error}let c=new URLSearchParams(window.location.search).get(`slug`)||new URLSearchParams(window.location.search).get(`examId`)||new URLSearchParams(window.location.search).get(`accessToken`);if(c){let e=await _(c);if(e.data){if(i.some(t=>t.id===e.data.id)||(i=[e.data,...i]),g(e.data.id),e.data.institute_id){let n=await t(e.data.institute_id);r&&n.data&&D(n.data)}}else s=e.error?{message:`Could not open this exam link: ${e.error.message}`}:{message:`This exam link is not valid, or the exam is no longer published.`}}else if(e?.id){let n=await t(e.id);r&&n.data&&D(n.data)}r&&(l(i),f(a),T(s||o),C(!1))}return i(),()=>{r=!1}},[e?.id,n?.id]);let O=(0,b.useMemo)(()=>s.filter(e=>z(e)||v(e.level,o)),[s,o]),k=O.find(e=>e.id===m);(0,b.useEffect)(()=>{function e(){g(Z()),x(``)}return window.addEventListener(`popstate`,e),()=>window.removeEventListener(`popstate`,e)},[]),(0,b.useEffect)(()=>{let e=!0;async function t(){if(x(``),!k?.exam_asset_id||B(k).length)return;let t=await a(k.exam_asset_id);if(e){if(t.error){T(t.error);return}x(t.data.downloadUrl)}}return t(),()=>{e=!1}},[k]);let A=(0,b.useMemo)(()=>{let e=new Map;return d.forEach(t=>{e.has(t.exam_id)||e.set(t.exam_id,t)}),e},[d]),j=(0,b.useMemo)(()=>O.filter(e=>e.kind!==`secure`),[O]),N=(0,b.useMemo)(()=>d.filter(e=>{let t=s.find(t=>t.id===e.exam_id);return t&&t.kind!==`secure`}),[s,d]);function P(e){g(e),Q(e)}function F(){g(null),x(``),Q(null)}async function I(e){f(t=>[e,...t])}return(0,M.jsxs)(`div`,{className:`page-wrap exam-page ${k?`exam-page-focus`:``}`,children:[(0,M.jsx)(`style`,{children:pe}),(0,M.jsx)(c,{}),(0,M.jsx)(`div`,{className:`exam-container ${k?`exam-container-focus`:``}`,style:$.container,children:k?(0,M.jsx)(te,{exam:k,result:A.get(k.id),fileUrl:y,instituteBranding:E,instituteId:e?.id,membershipId:n?.id,onBack:F,onSubmitted:I}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`div`,{className:`exam-header-banner premium-banner`,style:{position:`relative`,overflow:`hidden`,borderRadius:`26px`,padding:`32px 24px`,border:`1px solid rgba(255, 255, 255, 0.82)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`20px`,marginBottom:`8px`},children:[(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,minWidth:0},children:[(0,M.jsx)(`span`,{className:`setup-badge`,style:{background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`inline-block`,alignSelf:`flex-start`,margin:0},children:`Assessments`}),(0,M.jsx)(`h1`,{style:{fontFamily:`Sora, sans-serif`,fontSize:`2.2rem`,fontWeight:`900`,color:`var(--dark-blue)`,margin:0},children:`Exams`}),(0,M.jsx)(`p`,{style:{color:`var(--text-light)`,fontSize:`1.05rem`,fontWeight:`500`,margin:0,lineHeight:1.4},children:`Choose an exam and answer inside the portal.`})]}),(0,M.jsx)(h,{variant:`exams-banner`,size:300})]}),(0,M.jsxs)(`div`,{style:$.metrics,children:[(0,M.jsx)(L,{icon:`fa-file-lines`,label:`Available`,value:j.length}),(0,M.jsx)(L,{icon:`fa-circle-check`,label:`Submitted`,value:N.length}),(0,M.jsx)(L,{icon:`fa-bullseye`,label:`Best Score`,value:fe(N)})]}),S?(0,M.jsx)(R,{icon:`fa-circle-notch fa-spin`,title:`Loading exams...`,fill:!0}):null,w?(0,M.jsx)(R,{icon:`fa-triangle-exclamation`,title:w.message,tone:`error`,fill:!0}):null,!S&&!w&&!j.length?(0,M.jsx)(R,{variant:`exams-empty`,title:s.length?`No exams for Level ${o} yet.`:`No exams assigned yet.`,subtitle:s.length?`More exams unlock as your level goes up.`:`Your assigned exams will show up here.`,fill:!0}):null,!S&&!w&&j.length?(0,M.jsx)(`div`,{className:`exam-grid`,style:$.grid,children:j.map(e=>(0,M.jsx)(ee,{exam:e,result:A.get(e.id),onOpen:()=>P(e.id)},e.id))}):null]})})]})}function ee({exam:e,result:t,onOpen:n}){let r=B(e);return(0,M.jsxs)(`article`,{className:`exam-card`,style:$.card,children:[(0,M.jsxs)(`div`,{style:$.cardHeader,children:[(0,M.jsx)(`h2`,{className:`exam-card-title`,style:$.cardTitle,title:e.title,children:e.title}),(0,M.jsx)(`span`,{style:t?$.doneBadge:$.readyBadge,children:t?`Done`:`Ready`})]}),(0,M.jsx)(`p`,{style:$.meta,children:[y(e.level),e.duration_minutes?`${e.duration_minutes} mins`:null,`${Y(e)} marks`].filter(Boolean).join(` | `)}),(0,M.jsx)(`p`,{style:$.meta,children:e.kind===`file`?`File exam`:r.length?`${r.length} questions`:`Auto-generated exam`}),(0,M.jsx)(`p`,{style:$.meta,children:J(e.exam_batches)}),t?(0,M.jsxs)(`p`,{style:$.score,children:[`Score: `,t.score??`-`,` / `,t.total_marks??Y(e)]}):null,(0,M.jsx)(`button`,{className:`btn btn-primary`,style:$.button,onClick:n,children:t?`Review Exam`:`Start Exam`})]})}function te({exam:e,result:t,fileUrl:n,instituteId:r,membershipId:a,instituteBranding:o,onBack:s,onSubmitted:c}){let[u,d]=(0,b.useState)(!1),[f,p]=(0,b.useState)(null),[m,h]=(0,b.useState)([]),[g,_]=(0,b.useState)(null),[v,y]=(0,b.useState)(null),[x,S]=(0,b.useState)(!!t),[C,w]=(0,b.useState)(null),T=e.kind===`file`,D=z(e),O=e.kind===`secure`&&e.settings?.access_mode!==`guest`;(0,b.useEffect)(()=>{if(!t)return document.body.classList.add(`exam-live-focus`),()=>document.body.classList.remove(`exam-live-focus`)},[t]),(0,b.useEffect)(()=>{if(T||!x)return;let n=!0;async function o(){d(!0),p(null);try{let o=[];if(a){let{data:t,error:n}=await l(e.id,a);if(n)throw n;o=t||[]}if(t){let r=o?.find(e=>e.status===`completed`||e.id===t.attempt_id)||o?.[0];if(r){if(!n)return;_(r.id);let t=`exam_q_${a||`guest`}_${e.id}_${r.id}`,i=[];try{i=JSON.parse(sessionStorage.getItem(t)||`[]`)}catch{}h(i),y(r.expires_at)}else{if(!n)return;h(B(e))}d(!1);return}let s=o?.find(e=>e.status===`in_progress`&&(!e.expires_at||new Date(e.expires_at)>new Date));if(s){if(!n)return;_(s.id);let t=`exam_q_${a||`guest`}_${e.id}_${s.id}`,r=[];try{r=JSON.parse(sessionStorage.getItem(t)||`[]`)}catch{}if(r.length===0){let n=e.generation_settings||{},i=Array.isArray(n.sections)&&n.sections.length?n.sections:n.operation?[n]:[];if(i.length>0){let e=0;for(let t of i){let n=E(t);for(let t of n)r.push({id:`gen_${e}`,type:`integer`,prompt:t.type===`horizontal`?t.prompt.replace(/\s*=\s*$/,``):t.rows.map(e=>`${e.prefix}${e.value}`).join(` `),marks:1,correctAnswer:String(t.answer)}),e+=1}try{sessionStorage.setItem(t,JSON.stringify(r))}catch{}}}h(r),y(s.expires_at),d(!1);return}if(a){let t=e.access_token||new URLSearchParams(window.location.search).get(`accessToken`)||null,o=await i({instituteId:r,examId:e.id,studentMembershipId:a,accessToken:t,isPreview:!1});if(o.error)throw Error(o.error.message||`Failed to start exam.`);if(!n)return;_(o.data.attemptId);let s=o.data.questions||[];if(s.length===0){let t=e.generation_settings||{},n=Array.isArray(t.sections)&&t.sections.length?t.sections:t.operation?[t]:[];if(n.length>0){let e=0;for(let t of n){let n=E(t);for(let t of n)s.push({id:`gen_${e}`,type:`integer`,prompt:t.type===`horizontal`?t.prompt.replace(/\s*=\s*$/,``):t.rows.map(e=>`${e.prefix}${e.value}`).join(` `),marks:1,correctAnswer:String(t.answer)}),e+=1}}}let c=`exam_q_${a}_${e.id}_${o.data.attemptId}`;try{sessionStorage.setItem(c,JSON.stringify(s))}catch{}h(s),y(o.data.expiresAt)}else{let t=B(e);if(t.length===0){let n=e.generation_settings||{},r=Array.isArray(n.sections)&&n.sections.length?n.sections:n.operation?[n]:[];if(r.length>0){let e=0;for(let n of r){let r=E(n);for(let n of r)t.push({id:`gen_${e}`,type:`integer`,prompt:n.type===`horizontal`?n.prompt.replace(/\s*=\s*$/,``):n.rows.map(e=>`${e.prefix}${e.value}`).join(` `),marks:1,correctAnswer:String(n.answer)}),e+=1}}}if(!n)return;h(t),d(!1)}}catch(e){if(!n)return;p(e.message||`An error occurred starting the exam.`)}finally{n&&d(!1)}}return o(),()=>{n=!1}},[e.id,t,a,r,T,x]);let k=!!a;return!x&&!t?(0,M.jsxs)(`div`,{className:`exam-room`,style:$.room,children:[k&&(0,M.jsxs)(`button`,{className:`exam-back`,style:$.backButton,onClick:s,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),`All exams`]}),(0,M.jsx)(I,{exam:e,instituteBranding:o,isGuestExam:D,isLoginOnly:O,isLoggedIn:!!a,result:t,onStart:e=>{e&&w(e),S(!0)}})]}):T?(0,M.jsxs)(`div`,{className:`exam-room`,style:$.room,children:[k&&(0,M.jsxs)(`button`,{className:`exam-back`,style:$.backButton,onClick:s,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),`All exams`]}),(0,M.jsx)(ae,{exam:e,fileUrl:n,result:t})]}):(0,M.jsxs)(`div`,{className:`exam-room`,style:$.room,children:[k&&(0,M.jsxs)(`button`,{className:`exam-back`,style:$.backButton,onClick:s,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),`All exams`]}),u?(0,M.jsx)(R,{icon:`fa-circle-notch fa-spin`,title:`Preparing exam questions...`}):f?(0,M.jsx)(R,{icon:`fa-triangle-exclamation`,title:f,tone:`error`}):(0,M.jsx)(ne,{exam:e,questions:m,attemptId:g,expiresAt:v,previousResult:t,instituteId:r,membershipId:a,instituteBranding:o,guestInfo:C,onSubmitted:c})]})}function F({branding:e,centered:t=!1,compact:n=!1}){return!e?.name&&!e?.logoUrl?null:(0,M.jsxs)(`div`,{className:n?`exam-brand-bar exam-brand-bar-compact`:`exam-brand-bar`,style:{...$.brandBar,...t?{width:`100%`,justifyContent:`center`,borderBottom:`none`,marginBottom:12,paddingBottom:0}:{}},children:[e.logoUrl?(0,M.jsx)(`img`,{src:e.logoUrl,alt:e.name||`Institute`,className:`exam-brand-logo`,style:$.brandLogo}):(0,M.jsx)(`div`,{className:`exam-brand-logo`,style:$.brandLogoFallback,children:(0,M.jsx)(`i`,{className:`fa-solid fa-graduation-cap`})}),e.name?(0,M.jsx)(`span`,{className:`exam-brand-name`,style:$.brandName,children:e.name}):null]})}function I({exam:e,instituteBranding:t,onStart:n,isGuestExam:r,isLoginOnly:i,isLoggedIn:a,result:o}){let[s,c]=(0,b.useState)({fullName:``,phone:``,email:``,level:`0`,passcode:``}),[l,u]=(0,b.useState)(``);if(i&&!a)return(0,M.jsxs)(`section`,{className:`exam-guest-card`,style:$.guestCard,children:[(0,M.jsx)(`div`,{style:$.guestIconCircleError,children:(0,M.jsx)(`i`,{className:`fa-solid fa-lock`})}),(0,M.jsxs)(`div`,{style:{textAlign:`center`,display:`flex`,flexDirection:`column`,alignItems:`center`,gap:8},children:[(0,M.jsx)(`span`,{style:{...$.guestEyebrow,color:`#dc2626`,background:`#fee2e2`},children:`Login Required`}),(0,M.jsx)(`h1`,{style:$.guestRoomTitle,children:e.title}),(0,M.jsx)(`p`,{style:$.guestSubtext,children:`This is a secure, login-only exam. You must sign in with your student account credentials to take this exam.`}),(0,M.jsxs)(`a`,{href:`/login`,className:`btn btn-primary`,style:{marginTop:16,width:`100%`,maxWidth:280,display:`inline-flex`,justifyContent:`center`},children:[(0,M.jsx)(`i`,{className:`fa-solid fa-right-to-bracket`,style:{marginRight:8}}),`Go to Student Login`]})]})]});function d(t){if(t.preventDefault(),u(``),!s.fullName.trim()){u(`Please enter your full name.`);return}let r=s.phone.replace(/\D/g,``);if(!r||r.length<10){u(`Please enter a valid phone number.`);return}if(s.email.trim()&&!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s.email.trim())){u(`Please enter a valid email address.`);return}if(e.settings?.guest_passcode&&s.passcode!==e.settings.guest_passcode){u(`Incorrect exam passcode.`);return}n({fullName:s.fullName.trim(),phone:s.phone.trim(),email:s.email.trim()||null,level:s.level})}let f=B(e).length,p=[e.duration_minutes?`${e.duration_minutes} min timer`:`No timer set`,`${Y(e)} marks`,e.kind===`file`?`File exam`:f?`${f} questions`:`Auto questions`];return r?(0,M.jsx)(`section`,{className:`exam-guest-card`,style:$.guestCard,children:(0,M.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,textAlign:`center`},children:[(0,M.jsx)(`div`,{style:$.guestIconCircle,children:t?.logoUrl?(0,M.jsx)(`img`,{src:t.logoUrl,alt:t.name||`Institute`,style:$.guestIconLogo}):(0,M.jsx)(`i`,{className:o?`fa-solid fa-circle-check`:`fa-solid fa-user-pen`})}),t?.name?(0,M.jsx)(`span`,{style:$.guestInstituteName,children:t.name}):null,(0,M.jsx)(`span`,{style:$.guestEyebrow,children:o?`Exam Completed`:`Guest Student Check-in`}),(0,M.jsx)(`h1`,{style:$.guestRoomTitle,children:e.title}),(0,M.jsx)(`div`,{style:$.guestPillRow,children:p.map(e=>(0,M.jsxs)(`span`,{style:$.guestMetaPill,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-info`,style:{color:`var(--primary-blue)`,fontSize:`0.8rem`}}),e]},e))}),o?(0,M.jsx)(`p`,{style:$.guestSubtext,children:`You have already attempted this exam. You can view your score and submission details below.`}):(0,M.jsx)(`p`,{style:$.guestSubtext,children:`Please enter your student details below to begin your exam session.`}),l&&(0,M.jsxs)(`div`,{style:$.guestErrBox,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-exclamation`}),l]}),o?(0,M.jsxs)(`button`,{type:`button`,className:`btn btn-primary guest-submit-btn`,style:$.guestSubmitBtn,onClick:()=>n(null),children:[(0,M.jsx)(`span`,{children:`View Completed Result`}),(0,M.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]}):(0,M.jsxs)(`form`,{onSubmit:d,style:$.guestForm,children:[(0,M.jsxs)(`div`,{style:$.inputGroup,children:[(0,M.jsxs)(`label`,{style:$.inputLabel,children:[`Full Name `,(0,M.jsx)(`span`,{style:{color:`#ef4444`},children:`*`})]}),(0,M.jsxs)(`div`,{style:$.inputWrapper,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-user`,style:$.inputIcon}),(0,M.jsx)(`input`,{type:`text`,required:!0,placeholder:`Enter your name...`,value:s.fullName,onChange:e=>c(t=>({...t,fullName:e.target.value})),style:$.guestInput,className:`guest-form-input`})]})]}),(0,M.jsxs)(`div`,{style:$.inputGroup,children:[(0,M.jsxs)(`label`,{style:$.inputLabel,children:[`Phone Number `,(0,M.jsx)(`span`,{style:{color:`#ef4444`},children:`*`})]}),(0,M.jsxs)(`div`,{style:$.inputWrapper,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-phone`,style:$.inputIcon}),(0,M.jsx)(`input`,{type:`tel`,required:!0,placeholder:`Enter your phone number...`,value:s.phone,onChange:e=>c(t=>({...t,phone:e.target.value})),style:$.guestInput,className:`guest-form-input`})]})]}),(0,M.jsxs)(`div`,{style:$.inputGroup,children:[(0,M.jsx)(`label`,{style:$.inputLabel,children:`Email ID`}),(0,M.jsxs)(`div`,{style:$.inputWrapper,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-envelope`,style:$.inputIcon}),(0,M.jsx)(`input`,{type:`email`,placeholder:`Enter your email (optional)...`,value:s.email,onChange:e=>c(t=>({...t,email:e.target.value})),style:$.guestInput,className:`guest-form-input`})]})]}),(0,M.jsxs)(`div`,{style:$.inputGroup,children:[(0,M.jsx)(`label`,{style:$.inputLabel,children:`Level / Grade`}),(0,M.jsxs)(`div`,{style:$.inputWrapper,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-layer-group`,style:$.inputIcon}),(0,M.jsxs)(`select`,{value:s.level,onChange:e=>c(t=>({...t,level:e.target.value})),style:$.guestInput,className:`guest-form-input`,children:[(0,M.jsx)(`option`,{value:`0`,children:`Level 0`}),(0,M.jsx)(`option`,{value:`1`,children:`Level 1`}),(0,M.jsx)(`option`,{value:`2`,children:`Level 2`}),(0,M.jsx)(`option`,{value:`3`,children:`Level 3`}),(0,M.jsx)(`option`,{value:`4`,children:`Level 4`}),(0,M.jsx)(`option`,{value:`5`,children:`Level 5`}),(0,M.jsx)(`option`,{value:`6`,children:`Level 6`}),(0,M.jsx)(`option`,{value:`7`,children:`Level 7`}),(0,M.jsx)(`option`,{value:`8`,children:`Level 8`})]})]})]}),e.settings?.guest_passcode&&(0,M.jsxs)(`div`,{style:$.inputGroup,children:[(0,M.jsxs)(`label`,{style:$.inputLabel,children:[`Passcode `,(0,M.jsx)(`span`,{style:{color:`#ef4444`},children:`*`})]}),(0,M.jsxs)(`div`,{style:$.inputWrapper,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-key`,style:$.inputIcon}),(0,M.jsx)(`input`,{type:`password`,required:!0,placeholder:`Enter exam passcode...`,value:s.passcode,onChange:e=>c(t=>({...t,passcode:e.target.value})),style:$.guestInput,className:`guest-form-input`})]})]}),(0,M.jsxs)(`button`,{type:`submit`,className:`btn btn-primary guest-submit-btn`,style:$.guestSubmitBtn,children:[(0,M.jsx)(`span`,{children:`Submit Details & Start Exam`}),(0,M.jsx)(`i`,{className:`fa-solid fa-arrow-right`})]})]})]})}):(0,M.jsxs)(`section`,{className:`exam-start-panel`,style:$.startPanel,children:[(0,M.jsx)(`div`,{style:$.startIcon,children:(0,M.jsx)(`i`,{className:o?`fa-solid fa-circle-check`:r?`fa-solid fa-user-pen`:`fa-solid fa-triangle-exclamation`})}),(0,M.jsxs)(`div`,{style:$.startContent,children:[(0,M.jsx)(F,{branding:t}),(0,M.jsx)(`span`,{style:$.startEyebrow,children:o?`Exam Completed`:r?`Non-Login Guest Exam`:`Before you begin`}),(0,M.jsx)(`h1`,{className:`exam-room-title`,style:$.roomTitle,children:e.title}),(0,M.jsx)(`p`,{style:$.startText,children:o?`You have already attempted this exam. You can review your score and answer breakdown below.`:`Once you start, stay on this page and complete the exam in one sitting. Keep your answers ready before submitting.`}),(0,M.jsx)(`div`,{className:`exam-start-details`,style:$.startDetails,children:p.map(e=>(0,M.jsxs)(`span`,{style:$.startDetail,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-circle-info`}),e]},e))}),!o&&(0,M.jsxs)(`ul`,{style:$.startList,children:[(0,M.jsx)(`li`,{children:`Check your internet connection before starting.`}),(0,M.jsx)(`li`,{children:`Do not refresh or close the browser during the exam.`}),(0,M.jsx)(`li`,{children:`The sidebar is hidden here so you can focus.`})]}),(0,M.jsx)(`button`,{className:`btn btn-primary`,style:$.startButton,onClick:()=>n(null),children:o?`Review Exam Results`:`I am ready, start exam`})]})]})}function ne({exam:e,questions:t,attemptId:n,expiresAt:r,previousResult:i,instituteId:a,membershipId:o,instituteBranding:s,guestInfo:c,onSubmitted:l}){let[u,p]=(0,b.useState)({}),[m,h]=(0,b.useState)(0),[g]=(0,b.useState)(()=>new Date().toISOString()),[_,v]=(0,b.useState)(()=>{if(r){let e=Math.floor((new Date(r).getTime()-Date.now())/1e3);return Math.max(0,e)}return(e.duration_minutes||0)*60}),[y,x]=(0,b.useState)(!1),[S,C]=(0,b.useState)(null),[w,T]=(0,b.useState)(i??null),E=!!w,D=t[m],O=Y(e,t),k=t.filter((e,t)=>K(u[V(e,t)])).length;(0,b.useEffect)(()=>{if(E||!_)return;let e=window.setInterval(()=>{v(e=>Math.max(0,e-1))},1e3);return()=>window.clearInterval(e)},[E,_]),(0,b.useEffect)(()=>{_===0&&e.duration_minutes&&!E&&j()},[_]);function A(e,t,n){p(r=>({...r,[V(e,t)]:n}))}async function j(){if(y||E)return;x(!0),C(null);let r=t.some(e=>e.id?.startsWith(`gen_`))||!!c||!o,i;if(r||c){let r=oe(t,u,e);i=await f({attemptId:n,instituteId:a||e.institute_id,examId:e.id,studentMembershipId:o||null,score:r.score,totalMarks:r.totalMarks,answers:{byQuestion:u,graded:r.details,guestInfo:c||null},startedAt:g,guest_name:c?.fullName||null,guest_level:c?.level||null})}else i=await d({attemptId:n,answers:u});if(i.error){C(i.error.message||`Failed to submit exam.`),x(!1);return}try{sessionStorage.removeItem(`exam_q_${o}_${e.id}_${n}`)}catch{}T(i.data),l(i.data)}return!t||t.length===0?(0,M.jsx)(R,{icon:`fa-triangle-exclamation`,title:`This exam has no questions.`,tone:`error`}):(0,M.jsxs)(`div`,{className:`exam-room-layout`,style:$.roomLayout,children:[(0,M.jsxs)(`main`,{className:`exam-question-panel`,style:$.questionPanel,children:[(0,M.jsx)(F,{branding:s,compact:!0}),(0,M.jsxs)(`div`,{className:`exam-room-header`,style:$.roomHeader,children:[(0,M.jsxs)(`div`,{children:[(0,M.jsx)(`h1`,{className:`exam-room-title`,style:$.roomTitle,children:e.title}),(0,M.jsxs)(`p`,{className:`exam-meta`,style:$.meta,children:[k,` of `,t.length,` answered`]})]}),(0,M.jsxs)(`div`,{className:`exam-timer-pill`,style:$.timerPill,children:[(0,M.jsx)(`i`,{className:`fa-solid fa-clock`}),e.duration_minutes?X(_):`No timer`]})]}),E?null:(0,M.jsx)(`div`,{className:`exam-progress-track`,style:$.progressTrack,role:`progressbar`,"aria-valuemin":0,"aria-valuemax":t.length,"aria-valuenow":k,"aria-label":`Exam progress`,children:(0,M.jsx)(`div`,{style:{...$.progressFill,width:`${t.length?k/t.length*100:0}%`}})}),E?(0,M.jsx)(ie,{result:w,totalMarks:O,guestInfo:c}):(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(re,{question:D,index:m,answer:u[V(D,m)],onAnswer:e=>A(D,m,e),onEnter:()=>{m<t.length-1?h(e=>Math.min(t.length-1,e+1)):j()}}),S?(0,M.jsx)(`div`,{style:$.errorBox,children:S}):null,(0,M.jsxs)(`div`,{style:$.navRow,children:[(0,M.jsx)(`button`,{className:`exam-nav-btn`,style:$.navButton,disabled:m===0,onClick:()=>h(e=>Math.max(0,e-1)),children:`Previous`}),m<t.length-1?(0,M.jsx)(`button`,{className:`exam-nav-btn exam-nav-primary btn btn-primary`,style:$.navPrimary,onClick:()=>h(e=>Math.min(t.length-1,e+1)),children:`Next`}):(0,M.jsx)(`button`,{className:`exam-nav-btn exam-nav-primary btn btn-primary`,style:$.navPrimary,disabled:y,onClick:j,children:y?`Submitting...`:`Submit Exam`})]})]})]}),(0,M.jsxs)(`aside`,{className:`exam-question-list`,style:$.questionList,children:[(0,M.jsx)(`div`,{className:`exam-question-list-title`,style:$.questionListTitle,children:`Questions`}),(0,M.jsx)(`div`,{style:$.questionDots,children:t.map((e,t)=>{let n=V(e,t),r=K(u[n]);return(0,M.jsx)(`button`,{className:`exam-question-dot ${t===m?`active`:``} ${r?`answered`:``}`,style:{...$.questionDot,...t===m?$.questionDotActive:{},...r?$.questionDotAnswered:{}},onClick:()=>h(t),children:t+1},n)})})]})]})}function re({question:e,index:t,answer:n,onAnswer:r,onEnter:i}){let a=ce(e.type),o=(0,b.useRef)(null),s=W(e),c=(0,b.useMemo)(()=>se(s),[s]),[l,u]=(0,b.useState)(()=>{try{return localStorage.getItem(H)||`horizontal`}catch{return`horizontal`}});function d(e){u(e);try{localStorage.setItem(H,e)}catch{}}return(0,b.useEffect)(()=>{o.current&&o.current.focus()},[t]),(0,M.jsxs)(`section`,{className:`exam-question-card`,style:$.questionCard,children:[(0,M.jsxs)(`div`,{style:$.questionHead,children:[(0,M.jsxs)(`div`,{className:`exam-question-badge`,style:$.questionBadge,children:[`Question `,t+1,` | `,le(a)]}),c?(0,M.jsxs)(`div`,{className:`exam-layout-toggle`,role:`group`,"aria-label":`Question format`,children:[(0,M.jsxs)(`button`,{type:`button`,className:l===`horizontal`?`active`:``,onClick:()=>d(`horizontal`),children:[(0,M.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` Horizontal`]}),(0,M.jsxs)(`button`,{type:`button`,className:l===`vertical`?`active`:``,onClick:()=>d(`vertical`),children:[(0,M.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` Vertical`]})]}):null]}),c&&l===`vertical`?(0,M.jsx)(U,{terms:c}):(0,M.jsx)(`h2`,{className:`exam-question-text`,style:$.questionText,children:s}),a===`mcq`?(0,M.jsx)(`div`,{style:$.optionGrid,className:`exam-option-grid`,children:ue(e).map(e=>(0,M.jsx)(`button`,{className:`exam-option-button`,style:{...$.optionButton,...n===e?$.optionButtonActive:{}},onClick:()=>r(e),children:e},e))}):(0,M.jsxs)(`div`,{style:$.answerBox,children:[(0,M.jsx)(`label`,{className:`exam-question-label`,style:$.answerLabel,children:`Enter number`}),(0,M.jsx)(`input`,{ref:o,className:`exam-answer-input`,style:$.answerInput,type:`text`,inputMode:`decimal`,pattern:`-?[0-9]*\\.?[0-9]*`,value:n??``,onChange:e=>r(de(e.target.value)),onKeyDown:e=>{e.key===`Enter`&&(e.preventDefault(),i?.())},placeholder:`0`},V(e,t))]})]})}function ie({result:e,totalMarks:t,guestInfo:n}){let r=Number(e?.score??0),i=t?Math.round(r/t*100):0;return(0,M.jsxs)(`section`,{style:$.resultPanel,children:[(0,M.jsxs)(`div`,{style:$.resultCircle,children:[i,`%`]}),(0,M.jsx)(`h2`,{style:$.resultTitle,children:`Exam Submitted Successfully`}),n?.fullName?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(`p`,{style:{color:`var(--primary-blue)`,fontWeight:800,fontSize:`1.05rem`,margin:`4px 0`},children:[`Student: `,n.fullName,` (Level `,n.level,`)`]}),(0,M.jsxs)(`p`,{style:{color:`var(--text-light)`,fontSize:`0.9rem`,margin:`0 0 4px`},children:[n.phone,n.email?` • ${n.email}`:``]})]}):null,(0,M.jsxs)(`p`,{style:$.score,children:[`Score: `,r,` / `,t]})]})}function ae({exam:e,fileUrl:t,result:n}){return(0,M.jsxs)(`div`,{className:`exam-file-layout`,style:$.fileLayout,children:[(0,M.jsx)(`main`,{style:$.filePanel,children:t?(0,M.jsx)(`iframe`,{title:e.title,src:`${t}#toolbar=0&navpanes=0&scrollbar=1`,style:$.fileFrame}):(0,M.jsx)(R,{icon:`fa-circle-notch fa-spin`,title:`Opening exam file...`})}),(0,M.jsxs)(`aside`,{style:$.fileAside,children:[(0,M.jsx)(`h1`,{style:$.roomTitle,children:e.title}),(0,M.jsx)(`p`,{style:$.meta,children:J(e.exam_batches)}),n?(0,M.jsxs)(`p`,{style:$.score,children:[`Submitted: `,n.score??`-`,` / `,n.total_marks??Y(e)]}):null,(0,M.jsx)(`p`,{style:$.meta,children:`Answer this file exam as instructed by your teacher.`})]})]})}function L({icon:e,label:t,value:n}){return(0,M.jsxs)(`div`,{className:`exam-metric`,style:$.metric,children:[(0,M.jsx)(`span`,{style:$.metricIcon,children:(0,M.jsx)(`i`,{className:`fa-solid ${e}`})}),(0,M.jsxs)(`span`,{children:[(0,M.jsx)(`strong`,{style:$.metricValue,children:n}),(0,M.jsx)(`small`,{style:$.metricLabel,children:t})]})]})}function R({icon:e,title:t,subtitle:n,tone:r,fill:i,variant:a}){return i?(0,M.jsxs)(`div`,{style:{...$.state,...r===`error`?$.error:{},...$.stateFill},children:[a?(0,M.jsx)(h,{variant:a,size:420}):(0,M.jsx)(`div`,{style:$.illustrationCore,children:(0,M.jsx)(`i`,{className:`fa-solid ${e}`})}),(0,M.jsxs)(`div`,{style:$.stateFillText,children:[(0,M.jsx)(`span`,{style:$.stateFillTitle,children:t}),n?(0,M.jsx)(`p`,{style:$.stateFillSubtitle,children:n}):null]})]}):(0,M.jsxs)(`div`,{style:{...$.state,...r===`error`?$.error:{}},children:[(0,M.jsx)(`i`,{className:`fa-solid ${e}`}),(0,M.jsx)(`span`,{children:t})]})}function oe(e,t,n){let r=e.map((e,n)=>{let r=V(e,n),i=t[r],a=G(e),o=Number(e.marks??1),s=q(i)===q(a);return{id:r,given:i,correct:a,marks:o,isCorrect:s,score:s?o:0}});return{score:r.reduce((e,t)=>e+t.score,0),totalMarks:Y(n,e),details:r}}function z(e){return e?.kind===`secure`&&e?.settings?.access_mode===`guest`}function B(e){return Array.isArray(e.settings?.questions)?e.settings.questions:[]}function V(e,t){return e?e.id??`q_${t}`:`q_${t}`}var H=`exam_question_layout`;function se(e){let t=String(e??``).trim().replace(/[=?]+$/,``).trim();if(!t||!/^[-+]?\s*\d+(?:\.\d+)?(?:\s*[-+]\s*\d+(?:\.\d+)?)+$/.test(t))return null;let n=t.match(/[-+]?\s*\d+(?:\.\d+)?/g);return!n||n.length<2?null:n.map((e,t)=>{let n=e.replace(/\s+/g,``),r=n.startsWith(`-`);return{sign:t===0?r?`-`:``:r?`-`:`+`,value:n.replace(/^[-+]/,``)}})}function U({terms:e}){return(0,M.jsxs)(`div`,{className:`exam-vertical`,"aria-label":`Question in vertical format`,children:[e.map((e,t)=>(0,M.jsxs)(`span`,{style:{display:`contents`},children:[(0,M.jsx)(`span`,{className:`vrow-sign`,children:e.sign}),(0,M.jsx)(`span`,{className:`vrow-value`,children:e.value})]},`${e.sign}${e.value}-${t}`)),(0,M.jsx)(`span`,{className:`vrule`}),(0,M.jsx)(`span`,{className:`vtotal`,children:`?`})]})}function W(e){return e?e.prompt??e.question??``:``}function G(e){return e?e.correctAnswer??e.correct_answer??e.answer??``:``}function ce(e){return e===`fill_blank`||e===`fill`?`fill_blank`:e===`integer`||e===`number`?`integer`:`mcq`}function le(e){return e===`fill_blank`?`Fill blank`:e===`integer`?`Integer`:`MCQ`}function ue(e){return e?Array.isArray(e.options)?e.options.map(e=>typeof e==`string`?e:e?.label).filter(Boolean):[e.option_a,e.option_b,e.option_c,e.option_d].filter(Boolean):[]}function de(e){let t=e.trim().startsWith(`-`),[n,...r]=e.replace(/[^0-9.]/g,``).split(`.`),i=r.length?`.${r.join(``)}`:``;return`${t?`-`:``}${n}${i}`}function K(e){return e!=null&&String(e).trim()!==``}function q(e){let t=String(e??``).trim().toLowerCase();return t&&/^-?\d*\.?\d+$/.test(t)?String(Number(t)):t}function J(e=[]){let t=e.map(e=>e.batches?.name).filter(Boolean);return t.length?t.join(`, `):`Assigned exam`}function Y(e,t=B(e)){let n=t.reduce((e,t)=>e+Number(t.marks??1),0);return Number(e.total_marks??n??0)}function fe(e){return e.length?Math.max(...e.map(e=>Number(e.score??0))):`-`}function X(e){let t=Math.floor(e/60),n=e%60;return`${t}:${String(n).padStart(2,`0`)}`}function Z(){return new URLSearchParams(window.location.search).get(N)}function Q(e){let t=new URL(window.location.href);e?t.searchParams.set(N,e):t.searchParams.delete(N);let n=`${t.pathname}${t.search}${t.hash}`;n!==`${window.location.pathname}${window.location.search}${window.location.hash}`&&window.history.pushState({examId:e},``,n)}var $={container:{width:`100%`,display:`flex`,flexDirection:`column`,gap:24,padding:`20px 28px 60px`,boxSizing:`border-box`},header:{display:`flex`,alignItems:`center`,gap:14,background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:18,boxShadow:`var(--shadow)`},headerIcon:{width:58,height:58,borderRadius:16,background:`linear-gradient(135deg, var(--primary-blue), var(--dark-blue))`,color:`white`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:24,flexShrink:0},title:{fontFamily:`Sora, sans-serif`,fontSize:`2rem`,color:`var(--dark-blue)`,marginBottom:4},subtitle:{color:`var(--text-light)`,fontSize:`1rem`,fontWeight:700},metrics:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(220px, 1fr))`,gap:14},metric:{background:`rgba(255,255,255,0.9)`,border:`1px solid var(--border)`,borderRadius:16,padding:16,display:`flex`,alignItems:`center`,gap:14,boxShadow:`var(--shadow)`},metricIcon:{width:46,height:46,borderRadius:14,background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`},metricValue:{display:`block`,fontFamily:`Sora, sans-serif`,fontSize:`1.5rem`,color:`var(--dark-blue)`,lineHeight:1},metricLabel:{display:`block`,color:`var(--text-light)`,fontWeight:800,textTransform:`uppercase`,fontSize:`0.75rem`,marginTop:4},grid:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(300px, 1fr))`,gap:16},card:{background:`rgba(255,255,255,0.9)`,border:`1px solid var(--border)`,borderRadius:18,padding:18,display:`flex`,flexDirection:`column`,gap:12,boxShadow:`var(--shadow)`,minWidth:0,overflow:`hidden`},cardHeader:{display:`flex`,justifyContent:`space-between`,gap:12,alignItems:`flex-start`},cardTitle:{fontFamily:`Sora, sans-serif`,fontSize:`1.12rem`,color:`var(--dark-blue)`,margin:0,minWidth:0,overflowWrap:`anywhere`,display:`-webkit-box`,WebkitLineClamp:2,WebkitBoxOrient:`vertical`,overflow:`hidden`},readyBadge:{background:`#dcfce7`,color:`#166534`,borderRadius:999,padding:`5px 10px`,fontSize:`0.72rem`,fontWeight:900,textTransform:`uppercase`,flexShrink:0,whiteSpace:`nowrap`,alignSelf:`flex-start`},doneBadge:{background:`#e0e7ff`,color:`#3730a3`,borderRadius:999,padding:`5px 10px`,fontSize:`0.72rem`,fontWeight:900,textTransform:`uppercase`,flexShrink:0,whiteSpace:`nowrap`,alignSelf:`flex-start`},meta:{color:`var(--text-light)`,fontSize:`0.88rem`,fontWeight:700,overflowWrap:`anywhere`,minWidth:0},score:{color:`var(--dark-blue)`,fontWeight:900},button:{marginTop:`auto`,textAlign:`center`},room:{display:`flex`,flexDirection:`column`,gap:10,width:`100%`},backButton:{width:`fit-content`,border:`1px solid var(--border)`,background:`white`,color:`var(--primary-blue)`,borderRadius:999,padding:`10px 16px`,fontWeight:900,display:`inline-flex`,alignItems:`center`,gap:8,cursor:`pointer`},startPanel:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:26,boxShadow:`var(--shadow)`,display:`grid`,gridTemplateColumns:`72px minmax(0, 1fr)`,gap:20,alignItems:`start`,maxWidth:880,margin:`0 auto`},startIcon:{width:64,height:64,borderRadius:18,background:`#fef3c7`,color:`#b45309`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:26},startContent:{display:`flex`,flexDirection:`column`,gap:12},brandBar:{display:`flex`,alignItems:`center`,gap:12,paddingBottom:14,marginBottom:4,borderBottom:`1px solid var(--border)`},brandLogo:{width:44,height:44,borderRadius:12,objectFit:`cover`,border:`1px solid var(--border)`,background:`white`,flexShrink:0},brandLogoFallback:{width:44,height:44,borderRadius:12,background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:20,flexShrink:0},brandName:{fontFamily:`Sora, sans-serif`,fontWeight:900,fontSize:`1.05rem`,color:`var(--dark-blue)`},startEyebrow:{color:`var(--primary-blue)`,fontWeight:900,textTransform:`uppercase`,fontSize:`0.76rem`,letterSpacing:`0.08em`},startText:{color:`var(--text-light)`,fontSize:`1rem`,fontWeight:700,lineHeight:1.5,maxWidth:680},startDetails:{display:`flex`,flexWrap:`wrap`,gap:10},startDetail:{border:`1px solid var(--border)`,background:`white`,color:`var(--dark-blue)`,borderRadius:999,padding:`8px 12px`,fontSize:`0.84rem`,fontWeight:900,display:`inline-flex`,alignItems:`center`,gap:7},startList:{margin:`2px 0 0 18px`,color:`var(--text-light)`,fontWeight:700,lineHeight:1.7},startButton:{alignSelf:`flex-start`,marginTop:4},guestCard:{background:`rgba(255, 255, 255, 0.94)`,backdropFilter:`blur(20px)`,border:`1px solid rgba(255, 255, 255, 0.8)`,borderRadius:24,padding:`36px 32px`,boxShadow:`0 20px 48px -12px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.05)`,maxWidth:560,width:`100%`,margin:`20px auto`,boxSizing:`border-box`},guestIconCircle:{width:64,height:64,borderRadius:20,background:`linear-gradient(135deg, var(--light-blue), #dbeafe)`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:26,marginBottom:16,overflow:`hidden`,boxShadow:`0 8px 16px -4px color-mix(in srgb, var(--primary-blue) 20%, transparent)`},guestIconLogo:{width:`100%`,height:`100%`,objectFit:`cover`,borderRadius:`inherit`},guestInstituteName:{fontFamily:`Sora, sans-serif`,fontWeight:800,fontSize:`0.95rem`,color:`var(--dark-blue)`,marginBottom:12},guestIconCircleError:{width:64,height:64,borderRadius:20,background:`linear-gradient(135deg, #fee2e2, #fecaca)`,color:`#dc2626`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:26,margin:`0 auto 16px`},guestEyebrow:{background:`var(--light-blue)`,color:`var(--primary-blue)`,fontWeight:900,textTransform:`uppercase`,fontSize:`0.74rem`,letterSpacing:`0.08em`,padding:`6px 14px`,borderRadius:999,display:`inline-block`},guestRoomTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.65rem`,lineHeight:1.25,margin:`12px 0 10px`,textAlign:`center`},guestPillRow:{display:`flex`,flexWrap:`wrap`,justifyContent:`center`,gap:8,marginBottom:14},guestMetaPill:{border:`1px solid var(--border)`,background:`white`,color:`var(--dark-blue)`,borderRadius:999,padding:`6px 14px`,fontSize:`0.82rem`,fontWeight:800,display:`inline-flex`,alignItems:`center`,gap:6,boxShadow:`0 2px 4px rgba(0,0,0,0.02)`},guestSubtext:{color:`var(--text-light)`,fontSize:`0.95rem`,fontWeight:600,lineHeight:1.5,textAlign:`center`,marginBottom:20,maxWidth:460},guestErrBox:{width:`100%`,padding:`12px 16px`,background:`#fff5f5`,color:`#b91c1c`,border:`1px solid #fecaca`,borderRadius:14,fontSize:`0.88rem`,fontWeight:700,marginBottom:16,display:`flex`,alignItems:`center`,gap:8,boxSizing:`border-box`},guestForm:{display:`flex`,flexDirection:`column`,gap:16,width:`100%`},inputGroup:{display:`flex`,flexDirection:`column`,gap:6,textAlign:`left`,width:`100%`},inputLabel:{fontSize:`0.8rem`,fontWeight:800,textTransform:`uppercase`,color:`var(--dark-blue)`,letterSpacing:`0.03em`},inputWrapper:{position:`relative`,width:`100%`},inputIcon:{position:`absolute`,left:16,top:`50%`,transform:`translateY(-50%)`,color:`var(--text-light)`,fontSize:`0.95rem`,pointerEvents:`none`},guestInput:{width:`100%`,padding:`13px 16px 13px 44px`,borderRadius:14,border:`1.5px solid var(--border)`,outline:`none`,fontWeight:700,fontSize:`0.95rem`,color:`var(--dark-blue)`,background:`white`,boxSizing:`border-box`,transition:`all 0.2s ease`},guestSubmitBtn:{width:`100%`,padding:`14px 20px`,marginTop:8,borderRadius:14,fontSize:`1rem`,fontWeight:800,display:`flex`,alignItems:`center`,justifyContent:`center`,gap:10,boxShadow:`0 8px 20px -4px color-mix(in srgb, var(--primary-blue) 30%, transparent)`,cursor:`pointer`},roomLayout:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 290px`,gap:16,alignItems:`start`},questionPanel:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:24,boxShadow:`var(--shadow)`,minHeight:520,display:`flex`,flexDirection:`column`,gap:16},roomHeader:{display:`flex`,justifyContent:`space-between`,gap:12,alignItems:`flex-start`,marginBottom:8,paddingBottom:16,borderBottom:`1px solid var(--border)`},roomTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.4rem`,lineHeight:1.2},timerPill:{background:`var(--light-blue)`,color:`var(--primary-blue)`,borderRadius:999,padding:`8px 14px`,fontWeight:900,display:`inline-flex`,alignItems:`center`,gap:8,whiteSpace:`nowrap`},questionCard:{background:`rgba(255,255,255,0.76)`,border:`1px solid var(--border)`,borderRadius:18,padding:26,flex:1,display:`flex`,flexDirection:`column`,gap:16},progressTrack:{height:8,borderRadius:999,background:`color-mix(in srgb, var(--primary-blue) 12%, transparent)`,overflow:`hidden`,margin:`4px 0 16px`},progressFill:{height:`100%`,borderRadius:999,background:`linear-gradient(90deg, var(--primary-blue), var(--dark-blue))`,transition:`width 0.3s ease`},questionHead:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:12,flexWrap:`wrap`},questionBadge:{color:`var(--primary-blue)`,fontWeight:900,fontSize:`0.8rem`,textTransform:`uppercase`,marginBottom:4},questionText:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`,fontSize:`1.5rem`,lineHeight:1.35,marginBottom:8},optionGrid:{display:`grid`,gridTemplateColumns:`repeat(2, minmax(0, 1fr))`,gap:14,marginTop:12},optionButton:{border:`2px solid var(--border)`,background:`white`,color:`var(--dark-blue)`,borderRadius:16,padding:18,fontWeight:900,cursor:`pointer`,textAlign:`left`,fontSize:`1rem`},optionButtonActive:{borderColor:`var(--primary-blue)`,background:`var(--light-blue)`,color:`var(--primary-blue)`,boxShadow:`0 0 0 4px color-mix(in srgb, var(--primary-blue) 12%, transparent)`},answerBox:{display:`grid`,gap:10,maxWidth:520,marginTop:12},answerLabel:{color:`var(--text-light)`,fontWeight:900,textTransform:`uppercase`,fontSize:`0.78rem`},answerInput:{width:`100%`,boxSizing:`border-box`,border:`2px solid var(--border)`,borderRadius:16,padding:`16px 18px`,fontSize:`1.15rem`,fontWeight:800,color:`var(--dark-blue)`,outline:`none`,background:`white`},errorBox:{marginTop:12,background:`#fff5f5`,color:`#b91c1c`,border:`1px solid #fecaca`,borderRadius:12,padding:12,fontWeight:800},navRow:{display:`flex`,justifyContent:`space-between`,gap:12,marginTop:`auto`},navButton:{border:`1px solid var(--border)`,background:`white`,color:`var(--primary-blue)`,borderRadius:999,padding:`12px 22px`,fontWeight:900,cursor:`pointer`},navPrimary:{minWidth:150,textAlign:`center`},questionList:{background:`rgba(255,255,255,0.45)`,border:`1px solid var(--border)`,borderRadius:18,padding:16,boxShadow:`var(--shadow)`,maxHeight:`calc(100vh - var(--nav-h) - 95px)`,overflowY:`auto`},questionListTitle:{color:`var(--primary-blue)`,fontWeight:900,textTransform:`uppercase`,fontSize:`0.75rem`,marginBottom:12},questionDots:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(42px, 1fr))`,gap:8},questionDot:{aspectRatio:`1`,border:`1px solid var(--border)`,background:`white`,color:`var(--dark-blue)`,borderRadius:12,fontWeight:900,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`},questionDotActive:{borderColor:`var(--primary-blue)`,color:`var(--primary-blue)`,boxShadow:`0 0 0 2px color-mix(in srgb, var(--primary-blue) 15%, transparent)`},questionDotAnswered:{background:`var(--light-blue)`},resultPanel:{minHeight:360,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:12,textAlign:`center`},resultCircle:{width:128,height:128,borderRadius:`50%`,background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`Sora, sans-serif`,fontSize:`2rem`,fontWeight:900},resultTitle:{fontFamily:`Sora, sans-serif`,color:`var(--dark-blue)`},fileLayout:{display:`grid`,gridTemplateColumns:`minmax(0, 1fr) 280px`,gap:12},filePanel:{height:`calc(100vh - var(--nav-h) - 110px)`,minHeight:520,background:`white`,border:`1px solid var(--border)`,borderRadius:18,overflow:`hidden`,boxShadow:`var(--shadow)`},fileFrame:{width:`100%`,height:`100%`,border:0},fileAside:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:18,padding:16,boxShadow:`var(--shadow)`,height:`fit-content`},state:{background:`var(--card-bg)`,border:`1px solid var(--border)`,borderRadius:16,padding:20,display:`flex`,alignItems:`center`,gap:12,color:`var(--dark-blue)`,fontWeight:800},error:{color:`#b91c1c`,borderColor:`#fecaca`,background:`#fff5f5`},stateFill:{flex:1,minHeight:`45vh`,display:`flex`,flexDirection:`column`,alignItems:`center`,justifyContent:`center`,gap:8,textAlign:`center`},stateFillText:{display:`flex`,flexDirection:`column`,gap:6,maxWidth:420},stateFillTitle:{fontFamily:`Sora, sans-serif`,fontSize:`1.2rem`,color:`var(--dark-blue)`},stateFillSubtitle:{margin:0,color:`var(--text-light)`,fontWeight:600,fontSize:`0.95rem`,lineHeight:1.4},illustrationCore:{width:84,height:84,borderRadius:`50%`,background:`linear-gradient(135deg, var(--light-blue), color-mix(in srgb, var(--primary-blue) 14%, white))`,color:`var(--primary-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:30,boxShadow:`0 10px 24px color-mix(in srgb, var(--primary-blue) 18%, transparent)`}},pe=`
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
`;export{P as default};