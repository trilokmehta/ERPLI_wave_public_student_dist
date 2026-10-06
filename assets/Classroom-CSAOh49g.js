import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{X as t,Y as n,zt as r}from"./interactive-TMORbrKA.js";import{n as i}from"./react-dom-z07GAIXF.js";import{a,c as o,d as s,f as c,i as l,l as u,m as d,n as f,o as p,p as m,r as h,s as g,u as ee}from"./index-B_DtlIPY.js";var _=e(r(),1),v=e(i(),1),y=t(),b={platform_admin:`Platform admin`,institute_admin:`Institute admin`,branch_admin:`Branch admin`,teacher:`Teacher`,student:`Student`},x=[`#e07a5f`,`#3d8bd9`,`#d99a2b`,`#c2528b`,`#7c6fd6`,`#2a9d8f`,`#d1544f`,`#5b8c5a`];function S(e=``){let t=0;for(let n=0;n<e.length;n+=1)t=t*31+e.charCodeAt(n)|0;return x[Math.abs(t)%x.length]}function C(e=``){let t=e.trim().split(/\s+/).filter(Boolean);return((t[0]?.[0]||`?`)+(t[1]?.[0]||``)).toUpperCase()}function w(e,t){return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function T(e){return new Date(e).toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}function E(e){if(!e)return``;let t=new Date(e),n=new Date;if(w(t,n))return T(e);let r=new Date(n);return r.setDate(n.getDate()-1),w(t,r)?`Yesterday`:n-t<6*864e5?t.toLocaleDateString([],{weekday:`long`}):t.toLocaleDateString()}function D(e){let t=new Date(e),n=new Date;if(w(t,n))return`Today`;let r=new Date(n);return r.setDate(n.getDate()-1),w(t,r)?`Yesterday`:t.toLocaleDateString([],{day:`numeric`,month:`long`,year:`numeric`})}function O({thread:e,name:t,url:n,size:r=49}){let i={width:r,height:r,minWidth:r};return n?(0,y.jsx)(`img`,{className:`wa-avatar`,style:i,src:n,alt:``}):e&&e.kind!==`direct`?(0,y.jsx)(`div`,{className:`wa-avatar wa-avatar-group`,style:i,children:(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,width:r*.5,height:r*.5,fill:`currentColor`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z`})})}):(0,y.jsx)(`div`,{className:`wa-avatar`,style:{...i,background:`color-mix(in srgb, ${S(t)} 18%, var(--wa-bg))`,color:S(t),fontSize:r*.36},children:C(t)})}function k({instituteId:e,role:t,height:n=`calc(100dvh - 140px)`}){let[r,i]=(0,_.useState)(null),[a,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(!0),[u,f]=(0,_.useState)(``),[g,ee]=(0,_.useState)(``),[v,x]=(0,_.useState)(`all`),[S,C]=(0,_.useState)(null),[w,T]=(0,_.useState)(!1),D=(0,_.useRef)(null);D.current=S;let k=(0,_.useCallback)(async()=>{let t=await p(e);return s(t.data),t.error&&f(t.error.message),l(!1),t.data},[e]);(0,_.useEffect)(()=>{h().then(i)},[]),(0,_.useEffect)(()=>{l(!0),C(null),k()},[k]);let[te,A]=(0,_.useState)(null);(0,_.useEffect)(()=>{let e=null,t=d(t=>{A(t),clearTimeout(e),e=setTimeout(()=>{t.threadId===D.current?o(t.threadId).then(k):k()},400)});return()=>{clearTimeout(e),t()}},[k]);let j=a.find(e=>e.thread_id===S)||null,M=a.some(e=>e.is_monitored),P=(0,_.useMemo)(()=>{let e=g.trim().toLowerCase();return a.filter(t=>!((v===`monitored`?!t.is_monitored:t.is_monitored)||v===`unread`&&!t.unread||v===`groups`&&t.kind===`direct`||e&&!`${t.title} ${t.last_message_preview||``}`.toLowerCase().includes(e)))},[a,g,v]),L=a.filter(e=>e.unread>0&&!e.is_monitored).length;async function R(e){C(e),T(!1),await o(e),s(t=>t.map(t=>t.thread_id===e?{...t,unread:0}:t))}async function z(t){let n=await m(e,t.membership_id);if(n.error){f(n.error.message);return}(await k()).some(e=>e.thread_id===n.data)||s(e=>[{thread_id:n.data,kind:`direct`,title:t.name,subtitle:t.role,avatar_url:t.avatar_url,peer_membership_id:t.membership_id,peer_role:t.role,unread:0,can_send:!0,is_monitored:!1},...e]),R(n.data)}return(0,y.jsxs)(`div`,{className:`wa-root${j?` wa-has-active`:``}`,style:{height:n},children:[(0,y.jsx)(`style`,{children:I}),(0,y.jsx)(`aside`,{className:`wa-sidebar`,children:w?(0,y.jsx)(F,{instituteId:e,onBack:()=>T(!1),onPick:z}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`header`,{className:`wa-sidebar-head`,children:[(0,y.jsx)(`h2`,{children:`Chats`}),(0,y.jsx)(`button`,{type:`button`,className:`wa-new-btn`,onClick:()=>T(!0),title:`New chat`,"aria-label":`New chat`,children:(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`22`,height:`22`,fill:`currentColor`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M22 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4V4zm-5 7h-4v4h-2v-4H7V9h4V5h2v4h4v2z`})})})]}),(0,y.jsxs)(`div`,{className:`wa-search`,children:[(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`18`,height:`18`,fill:`currentColor`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z`})}),(0,y.jsx)(`input`,{value:g,onChange:e=>ee(e.target.value),placeholder:`Search or start a new chat`})]}),(0,y.jsx)(`div`,{className:`wa-chips`,children:[[`all`,`All`],[`unread`,L?`Unread ${L}`:`Unread`],[`groups`,`Groups`],...M?[[`monitored`,`Monitored`]]:[]].map(([e,t])=>(0,y.jsx)(`button`,{type:`button`,className:`wa-chip${v===e?` active`:``}`,onClick:()=>x(e),children:t},e))}),u?(0,y.jsx)(`div`,{className:`wa-error`,onClick:()=>f(``),children:u}):null,(0,y.jsx)(`div`,{className:`wa-list`,children:c?(0,y.jsx)(`p`,{className:`wa-empty`,children:`Loading chats…`}):P.length===0?(0,y.jsx)(`p`,{className:`wa-empty`,children:v===`all`&&!g?`No chats yet. Tap the new-chat button to start one.`:`Nothing here.`}):P.map(e=>(0,y.jsxs)(`button`,{type:`button`,className:`wa-row${e.thread_id===S?` active`:``}`,onClick:()=>R(e.thread_id),children:[(0,y.jsx)(O,{thread:e,name:e.title,url:e.avatar_url}),(0,y.jsxs)(`div`,{className:`wa-row-body`,children:[(0,y.jsxs)(`div`,{className:`wa-row-top`,children:[(0,y.jsx)(`span`,{className:`wa-row-title`,children:e.title}),(0,y.jsx)(`span`,{className:`wa-row-time${e.unread?` unread`:``}`,children:E(e.last_message_at)})]}),(0,y.jsxs)(`div`,{className:`wa-row-bottom`,children:[(0,y.jsx)(`span`,{className:`wa-row-preview`,children:e.last_message_preview?(0,y.jsxs)(y.Fragment,{children:[e.last_is_mine?`You: `:``,!e.last_is_mine&&e.kind!==`direct`&&e.last_sender_name?`${e.last_sender_name}: `:``,e.last_message_preview]}):(0,y.jsx)(`em`,{children:e.kind===`direct`?b[e.peer_role]||``:e.subtitle})}),e.unread?(0,y.jsx)(`span`,{className:`wa-badge`,children:e.unread>99?`99+`:e.unread}):null]})]})]},e.thread_id))})]})}),(0,y.jsx)(`main`,{className:`wa-main`,children:j?(0,y.jsx)(N,{thread:j,instituteId:e,role:t,userId:r,liveMessage:te,onBack:()=>C(null),onError:f,onSent:k,threads:a},j.thread_id):(0,y.jsxs)(`div`,{className:`wa-placeholder`,children:[(0,y.jsx)(`div`,{className:`wa-placeholder-icon`,children:(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`44`,height:`44`,fill:`currentColor`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12z`})})}),(0,y.jsx)(`h3`,{children:`Messages`}),(0,y.jsx)(`p`,{children:`Pick a chat on the left, or start a new one. Your batch groups are already here.`}),(0,y.jsx)(`div`,{className:`wa-placeholder-foot`,children:`These chats aren't encrypted and are permanently deleted after 30 days.`})]})})]})}var te=900*1e3,A={reply:`M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z`,copy:`M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z`,forward:`M14 9V5l7 7-7 7v-4.1c-5 0-8.5 1.6-11 5.1 1-5 4-10 11-11z`,pin:`M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3zm-7.1 3c.7-.84 1.1-1.89 1.1-3V4h4v5c0 1.11.4 2.16 1.1 3H8.9z`,edit:`M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83a1 1 0 0 0 0-1.41z`,report:`M14.4 6 14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6zM18 14h-3.36l-.4-2H7V6h5.36l.4 2H18v6z`,delete:`M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z`,lock:`M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z`,eye:`M12 6a9.77 9.77 0 0 1 8.82 5.5A9.77 9.77 0 0 1 12 17a9.77 9.77 0 0 1-8.82-5.5A9.77 9.77 0 0 1 12 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z`,block:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9A7.902 7.902 0 0 1 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1A7.902 7.902 0 0 1 20 12c0 4.42-3.58 8-8 8z`,close:`M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z`};function j({name:e,size:t=16,className:n}){return(0,y.jsx)(`svg`,{className:`wa-icon${n?` ${n}`:``}`,viewBox:`0 0 24 24`,width:t,height:t,fill:`currentColor`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:A[e]})})}function M({icon:e,label:t,onClick:n,danger:r,disabled:i}){return(0,y.jsxs)(`button`,{type:`button`,className:r?`danger`:void 0,disabled:i,onClick:n,children:[(0,y.jsx)(j,{name:e,size:20}),t]})}function N({thread:e,instituteId:t,role:n,userId:r,liveMessage:i,onBack:a,onError:o,onSent:d,threads:f}){let[p,m]=(0,_.useState)([]),[h,x]=(0,_.useState)(!0),[C,w]=(0,_.useState)(``),[E,k]=(0,_.useState)(!1),[A,N]=(0,_.useState)(!1),[F,I]=(0,_.useState)(!1),[L,R]=(0,_.useState)({}),[z,B]=(0,_.useState)(null),[V,H]=(0,_.useState)(null),[U,W]=(0,_.useState)(null),[ne,re]=(0,_.useState)(null),ie=(0,_.useRef)(null),G=(0,_.useRef)(null);(0,_.useEffect)(()=>{let t=!0;return g(e).then(e=>{t&&(m(e.data),e.error&&o(e.error.message),x(!1))}),()=>{t=!1}},[e.thread_id]),(0,_.useEffect)(()=>{if(!i||i.threadId!==e.thread_id)return;let t=i.message;m(e=>e.some(e=>e.id===t.id)?e.map(e=>e.id===t.id?{...e,...t}:e):i.updated?e:[...e,t])},[i,e.thread_id]),(0,_.useEffect)(()=>{ie.current?.scrollIntoView({block:`end`})},[p.length,h]),(0,_.useEffect)(()=>{G.current?.focus()},[e.thread_id]),(0,_.useEffect)(()=>{if(!z)return;let e=()=>B(null);return document.addEventListener(`click`,e),window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{document.removeEventListener(`click`,e),window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[z]);function ae(e,t,n){let r=e.currentTarget.getBoundingClientRect(),i={};r.bottom+300>window.innerHeight&&r.top>300?i.bottom=window.innerHeight-r.top+4:i.top=r.bottom+4,n?i.right=Math.max(8,window.innerWidth-r.right):i.left=Math.max(8,r.left),B({id:t.id,style:i})}let oe=e.kind===`batch`;function K(e,t){m(n=>n.map(n=>n.id===e?{...n,...t}:n))}async function q(e,t,n){let r=await u(e.id,oe,t,n);return r.error?(o(r.error.message),!1):(d(),!0)}function se(e){W(null),H(e),G.current?.focus()}function ce(e){H(null),W(e),w(e.body),G.current?.focus()}function le(){U&&w(``),W(null),H(null)}async function ue(e){try{await navigator.clipboard.writeText(e.body)}catch{o(`Couldn't copy to the clipboard.`)}}async function de(e){window.confirm(`Delete this message for everyone?`)&&await q(e,`delete`)&&K(e.id,{deleted_at:new Date().toISOString(),body:`This message was deleted`,pinned_at:null})}async function fe(e){let t=e.pinned_at?`unpin`:`pin`;await q(e,t)&&K(e.id,{pinned_at:t===`pin`?new Date().toISOString():null})}function pe(e){let t=document.getElementById(`wa-msg-${e}`);t&&(t.scrollIntoView({block:`center`,behavior:`smooth`}),t.classList.add(`wa-flash`),setTimeout(()=>t.classList.remove(`wa-flash`),1200))}async function me(n){if(n?.preventDefault(),!C.trim()||E)return;if(k(!0),U){let e=C.trim(),t=e!==U.body,n=!t||await q(U,`edit`,e);if(k(!1),!n)return;t&&K(U.id,{body:e,edited_at:new Date().toISOString()}),W(null),w(``);return}let r=await s(e,t,C,{replyToId:V?.id});if(k(!1),r.error){o(r.error.message);return}w(``),H(null),m(e=>e.some(e=>e.id===r.data.id)?e:[...e,r.data]),d(),G.current?.focus()}async function he(t){let n=window.prompt(`Why are you reporting this message? Your institute admin will review it.`);if(n===null)return;let r=await ee(t.id,e.kind===`batch`,n);r.error?o(r.error.message):R(e=>({...e,[t.id]:!0}))}async function ge(){N(!1);let n=!F;if(n&&!window.confirm(`Block ${e.title}? They won't be able to message you.`))return;let r=await c(t,e.peer_membership_id,n);r.error?o(r.error.message):(I(n),d())}let J=n===`student`,Y=!J&&e.kind===`direct`&&e.peer_role===`student`&&e.peer_membership_id;(0,_.useEffect)(()=>{Y&&l(e.peer_membership_id).then(I)},[Y,e.peer_membership_id]);let _e=e.kind===`direct`?e.is_monitored?`Monitored conversation (read-only)`:b[e.peer_role]||``:e.subtitle,X=[],ve=null,Z=null;for(let e of p){let t=new Date(e.created_at).toDateString();t!==ve&&(X.push({type:`day`,key:`day-${t}`,label:D(e.created_at)}),ve=t,Z=null),X.push({type:`msg`,key:e.id,message:e,first:e.sender_user_id!==Z}),Z=e.sender_user_id}let ye=new Map(p.map(e=>[e.id,e])),Q=p.filter(e=>e.pinned_at&&!e.deleted_at).sort((e,t)=>new Date(t.pinned_at)-new Date(e.pinned_at))[0],$=e.can_send&&!F&&!e.is_monitored,be=!e.is_monitored&&(oe?!J:e.can_send);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`header`,{className:`wa-conv-head`,children:[(0,y.jsx)(`button`,{type:`button`,className:`wa-back`,onClick:a,"aria-label":`Back to chats`,children:(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`24`,height:`24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z`})})}),(0,y.jsx)(O,{thread:e,name:e.title,url:e.avatar_url,size:40}),(0,y.jsxs)(`div`,{className:`wa-conv-title`,children:[(0,y.jsx)(`strong`,{children:e.title}),(0,y.jsx)(`span`,{children:_e})]}),Y?(0,y.jsxs)(`div`,{className:`wa-menu-wrap`,children:[(0,y.jsx)(`button`,{type:`button`,className:`wa-icon-btn`,onClick:()=>N(e=>!e),"aria-label":`Menu`,children:(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`22`,height:`22`,fill:`currentColor`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z`})})}),A?(0,y.jsx)(`div`,{className:`wa-menu`,children:(0,y.jsxs)(`button`,{type:`button`,onClick:ge,children:[F?`Unblock`:`Block`,` `,e.title]})}):null]}):null]}),Q?(0,y.jsxs)(`button`,{type:`button`,className:`wa-pinned`,onClick:()=>pe(Q.id),children:[(0,y.jsx)(j,{name:`pin`,size:20}),(0,y.jsxs)(`span`,{className:`wa-pinned-body`,children:[(0,y.jsx)(`strong`,{children:`Pinned message`}),(0,y.jsx)(`span`,{children:Q.body})]})]}):null,(0,y.jsxs)(`div`,{className:`wa-thread`,children:[e.kind===`direct`&&J?(0,y.jsxs)(`div`,{className:`wa-notice`,children:[(0,y.jsx)(j,{name:`lock`,size:14}),` Messages here may be reviewed by your institute to keep everyone safe.`]}):null,e.is_monitored?(0,y.jsxs)(`div`,{className:`wa-notice`,children:[(0,y.jsx)(j,{name:`eye`,size:14}),` You are viewing this chat as an institute admin. You can read it but not reply.`]}):null,h?(0,y.jsx)(`div`,{className:`wa-notice`,children:`Loading messages…`}):p.length===0?(0,y.jsxs)(`div`,{className:`wa-empty-thread`,children:[(0,y.jsx)(`strong`,{children:`No messages yet`}),(0,y.jsx)(`span`,{children:`Send the first message to start the conversation.`})]}):X.map(t=>{if(t.type===`day`)return(0,y.jsx)(`div`,{className:`wa-day`,children:(0,y.jsx)(`span`,{children:t.label})},t.key);let n=t.message,i=n.sender_user_id===r,a=!i&&t.first&&(e.kind!==`direct`||e.is_monitored),o=!!n.deleted_at,s=n.reply_to_id?ye.get(n.reply_to_id):null,c=i&&!o&&$&&Date.now()-new Date(n.created_at)<te,l=z?.id===n.id,u=e=>()=>{B(null),e(n)};return(0,y.jsx)(`div`,{id:`wa-msg-${n.id}`,className:`wa-msg-row${i?` mine`:``}${t.first?` first`:``}`,children:(0,y.jsxs)(`div`,{className:`wa-bubble${i?` mine`:``}${t.first?` tail`:``}${l?` menu-open`:``}`,children:[l?(0,v.createPortal)((0,y.jsx)(`div`,{className:`wa-root wa-portal`,children:(0,y.jsxs)(`div`,{className:`wa-msg-menu`,style:z.style,onClick:e=>e.stopPropagation(),children:[$?(0,y.jsx)(M,{icon:`reply`,label:`Reply`,onClick:u(se)}):null,(0,y.jsx)(M,{icon:`copy`,label:`Copy`,onClick:u(ue)}),e.is_monitored?null:(0,y.jsx)(M,{icon:`forward`,label:`Forward`,onClick:u(re)}),be?(0,y.jsx)(M,{icon:`pin`,label:n.pinned_at?`Unpin`:`Pin`,onClick:u(fe)}):null,c?(0,y.jsx)(M,{icon:`edit`,label:`Edit`,onClick:u(ce)}):null,i||!e.is_monitored?(0,y.jsx)(`hr`,{}):null,!i&&!e.is_monitored?(0,y.jsx)(M,{icon:`report`,label:L[n.id]?`Reported`:`Report`,disabled:L[n.id],onClick:u(he)}):null,i?(0,y.jsx)(M,{icon:`delete`,label:`Delete`,danger:!0,onClick:u(de)}):null]})}),document.body):null,a?(0,y.jsxs)(`div`,{className:`wa-sender`,style:{color:S(n.sender_name||``)},children:[n.sender_name,n.sender_role&&n.sender_role!==`student`?(0,y.jsxs)(`span`,{className:`wa-sender-role`,children:[` · `,b[n.sender_role]]}):null]}):null,n.forwarded&&!o?(0,y.jsxs)(`div`,{className:`wa-forwarded`,children:[(0,y.jsx)(j,{name:`forward`,size:14}),` Forwarded`]}):null,n.reply_to_id&&!o?(0,y.jsxs)(`button`,{type:`button`,className:`wa-quote`,onClick:()=>s&&pe(s.id),children:[(0,y.jsx)(`strong`,{style:{color:S(s?.sender_name||``)},children:s?s.sender_user_id===r?`You`:s.sender_name:``}),(0,y.jsx)(`span`,{children:s?s.body:`Original message is no longer available`})]}):null,(0,y.jsx)(`span`,{className:`wa-text${o?` deleted`:``}`,children:o?(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(j,{name:`block`,size:15}),` This message was deleted`]}):n.body}),(0,y.jsxs)(`span`,{className:`wa-meta`,children:[n.pinned_at&&!o?(0,y.jsx)(`span`,{title:`Pinned`,children:(0,y.jsx)(j,{name:`pin`,size:13})}):null,n.edited_at&&!o?(0,y.jsx)(`span`,{children:`Edited`}):null,T(n.created_at),o?null:(0,y.jsx)(`button`,{type:`button`,className:`wa-msg-caret`,"aria-label":`Message options`,onClick:e=>{e.stopPropagation(),l?B(null):ae(e,n,i)},children:(0,y.jsx)(`svg`,{viewBox:`0 0 18 18`,width:`18`,height:`18`,fill:`currentColor`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M3.3 4.6 9 10.3l5.7-5.7 1.6 1.6L9 13.4 1.7 6.2l1.6-1.6z`})})})]})]})},t.key)}),(0,y.jsx)(`div`,{ref:ie})]}),$&&(V||U)?(0,y.jsxs)(`div`,{className:`wa-compose-context`,children:[(0,y.jsxs)(`div`,{className:`wa-quote static`,children:[(0,y.jsx)(`strong`,{style:{color:U?void 0:S(V.sender_name||``)},children:U?`Editing message`:V.sender_user_id===r?`Replying to yourself`:`Replying to ${V.sender_name}`}),(0,y.jsx)(`span`,{children:(U||V).body})]}),(0,y.jsx)(`button`,{type:`button`,className:`wa-icon-btn`,onClick:le,"aria-label":`Cancel`,children:(0,y.jsx)(j,{name:`close`,size:20})})]}):null,e.can_send&&!F?(0,y.jsxs)(`form`,{className:`wa-composer`,onSubmit:me,children:[(0,y.jsx)(`textarea`,{ref:G,rows:1,value:C,maxLength:4e3,placeholder:`Type a message`,onChange:e=>w(e.target.value),onKeyDown:e=>{e.key===`Enter`&&!e.shiftKey&&me(e),e.key===`Escape`&&le()}}),(0,y.jsx)(`button`,{type:`submit`,className:`wa-send`,disabled:E||!C.trim(),"aria-label":`Send`,children:(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`22`,height:`22`,fill:`currentColor`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z`})})})]}):(0,y.jsx)(`div`,{className:`wa-readonly`,children:F?`You blocked this contact. Unblock them from the menu to chat again.`:e.is_monitored?`Read-only: monitored conversation.`:`You can no longer send messages in this chat.`}),ne?(0,y.jsx)(P,{message:ne,threads:f.filter(e=>e.can_send&&!e.is_monitored),instituteId:t,onClose:()=>re(null),onError:o,onDone:d}):null]})}function P({message:e,threads:t,instituteId:n,onClose:r,onError:i,onDone:a}){let[o,c]=(0,_.useState)(``),[l,u]=(0,_.useState)({}),[d,f]=(0,_.useState)(!1),p=o.trim().toLowerCase(),m=t.filter(e=>e.title.toLowerCase().includes(p)),h=t.filter(e=>l[e.thread_id]);async function g(){f(!0);for(let t of h){let r=await s(t,n,e.body,{forwarded:!0});r.error&&i(`${t.title}: ${r.error.message}`)}f(!1),a(),r()}return(0,y.jsx)(`div`,{className:`wa-modal-backdrop`,onClick:r,children:(0,y.jsxs)(`div`,{className:`wa-modal`,role:`dialog`,"aria-label":`Forward message`,onClick:e=>e.stopPropagation(),children:[(0,y.jsxs)(`header`,{className:`wa-drawer-head`,children:[(0,y.jsx)(`button`,{type:`button`,className:`wa-icon-btn`,onClick:r,"aria-label":`Close`,children:(0,y.jsx)(j,{name:`close`,size:22})}),(0,y.jsx)(`h2`,{children:`Forward message to`})]}),(0,y.jsx)(`div`,{className:`wa-search`,children:(0,y.jsx)(`input`,{autoFocus:!0,value:o,onChange:e=>c(e.target.value),placeholder:`Search chats`})}),(0,y.jsx)(`div`,{className:`wa-list`,children:m.length===0?(0,y.jsx)(`p`,{className:`wa-empty`,children:`No chats to forward to.`}):m.map(e=>(0,y.jsxs)(`label`,{className:`wa-row wa-forward-row`,children:[(0,y.jsx)(`input`,{type:`checkbox`,checked:!!l[e.thread_id],onChange:t=>u(n=>({...n,[e.thread_id]:t.target.checked}))}),(0,y.jsx)(O,{thread:e,name:e.title,url:e.avatar_url,size:40}),(0,y.jsx)(`div`,{className:`wa-row-body`,children:(0,y.jsx)(`span`,{className:`wa-row-title`,children:e.title})})]},e.thread_id))}),(0,y.jsxs)(`footer`,{className:`wa-modal-foot`,children:[(0,y.jsx)(`span`,{children:h.length?h.map(e=>e.title).join(`, `):`Pick one or more chats`}),(0,y.jsx)(`button`,{type:`button`,className:`wa-send`,disabled:!h.length||d,onClick:g,"aria-label":`Forward`,children:(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`22`,height:`22`,fill:`currentColor`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z`})})})]})]})})}function F({instituteId:e,onBack:t,onPick:n}){let[r,i]=(0,_.useState)(``),[o,s]=(0,_.useState)([]),[c,l]=(0,_.useState)(!0);(0,_.useEffect)(()=>{let t=!0,n=setTimeout(async()=>{l(!0);let n=await a(e,r.trim());t&&(s(n.data),l(!1))},250);return()=>{t=!1,clearTimeout(n)}},[e,r]);let u=(0,_.useMemo)(()=>{let e=[`platform_admin`,`institute_admin`,`branch_admin`,`teacher`,`student`],t={};for(let e of o)(t[e.role]||=[]).push(e);return e.filter(e=>t[e]).map(e=>[e,t[e]])},[o]);return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(`header`,{className:`wa-drawer-head`,children:[(0,y.jsx)(`button`,{type:`button`,className:`wa-icon-btn`,onClick:t,"aria-label":`Back`,children:(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`24`,height:`24`,fill:`currentColor`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M12 4l1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z`})})}),(0,y.jsx)(`h2`,{children:`New chat`})]}),(0,y.jsxs)(`div`,{className:`wa-search`,children:[(0,y.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`18`,height:`18`,fill:`currentColor`,"aria-hidden":`true`,children:(0,y.jsx)(`path`,{d:`M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z`})}),(0,y.jsx)(`input`,{autoFocus:!0,value:r,onChange:e=>i(e.target.value),placeholder:`Search name`})]}),(0,y.jsx)(`div`,{className:`wa-list`,children:c?(0,y.jsx)(`p`,{className:`wa-empty`,children:`Loading people…`}):u.length===0?(0,y.jsx)(`p`,{className:`wa-empty`,children:`No one you can message matches that.`}):u.map(([e,t])=>(0,y.jsxs)(`div`,{children:[(0,y.jsxs)(`div`,{className:`wa-section`,children:[b[e],`s`]}),t.map(e=>(0,y.jsxs)(`button`,{type:`button`,className:`wa-row`,onClick:()=>n(e),children:[(0,y.jsx)(O,{name:e.name,url:e.avatar_url}),(0,y.jsxs)(`div`,{className:`wa-row-body`,children:[(0,y.jsx)(`div`,{className:`wa-row-top`,children:(0,y.jsx)(`span`,{className:`wa-row-title`,children:e.name})}),(0,y.jsx)(`div`,{className:`wa-row-bottom`,children:(0,y.jsxs)(`span`,{className:`wa-row-preview`,children:[b[e.role],e.branch_name?` · ${e.branch_name}`:``]})})]})]},e.membership_id))]},e))})]})}var I=`
.wa-root {
  --wa-accent: var(--brand-primary, var(--primary-blue, #00a884));
  --wa-accent-strong: var(--brand-primary-hover, var(--dark-blue, #008069));
  --wa-solid: var(--brand-solid, var(--primary-blue, #00a884));
  --wa-solid-hover: var(--brand-solid-hover, var(--dark-blue, #008069));
  --wa-on-accent: #ffffff;
  --wa-bg: var(--bg-surface, var(--card-bg, #ffffff));
  --wa-text: var(--text-heading, var(--dark-blue, #111b21));
  --wa-muted: var(--text-muted, var(--text-light, #667781));
  --wa-border: var(--border-main, var(--border, #e9edef));
  --wa-panel: color-mix(in srgb, var(--wa-text) 4%, var(--wa-bg));
  --wa-hover: color-mix(in srgb, var(--wa-text) 5%, var(--wa-bg));
  --wa-active: color-mix(in srgb, var(--wa-accent) 12%, var(--wa-bg));
  --wa-chat-bg: var(--bg-app, color-mix(in srgb, var(--wa-accent) 4%, var(--wa-bg)));
  --wa-in: var(--wa-bg);
  --wa-out: color-mix(in srgb, var(--wa-accent) 16%, var(--wa-bg));
  --wa-out-border: color-mix(in srgb, var(--wa-accent) 32%, var(--wa-border));
  --wa-chip: var(--wa-panel);
  --wa-chip-active: var(--wa-solid);
  --wa-chip-active-text: #ffffff;
  --wa-notice: color-mix(in srgb, #f5b841 16%, var(--wa-bg));
  --wa-notice-text: var(--wa-text);
  --wa-day: var(--wa-bg);
  --wa-doodle: color-mix(in srgb, var(--wa-text) 6%, transparent);
  --wa-shadow: none;
  display: flex; width: 100%; min-height: 420px; border-radius: 12px; overflow: hidden;
  border: 1px solid var(--wa-border); background: var(--wa-bg); color: var(--wa-text);
  font-family: inherit; box-sizing: border-box; text-align: left;
  box-shadow: var(--shadow-card, none);
}
body.dark-mode .wa-root {
  --wa-accent-strong: var(--brand-primary, #f6a5a3);
  --wa-notice: color-mix(in srgb, #f5b841 10%, var(--wa-bg));
  --wa-shadow: none;
}
.wa-root *, .wa-root *::before, .wa-root *::after { box-sizing: border-box; }
.wa-root button { font-family: inherit; }

.wa-sidebar { width: 36%; min-width: 300px; max-width: 460px; display: flex; flex-direction: column; border-right: 1px solid var(--wa-border); background: var(--wa-bg); }
.wa-sidebar-head, .wa-drawer-head { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px 8px; gap: 12px; }
.wa-drawer-head { justify-content: flex-start; padding: 14px 16px 8px; }
.wa-sidebar-head h2, .wa-drawer-head h2 { margin: 0; font-size: 20px; font-weight: 700; color: var(--wa-text); }
.wa-new-btn { width: 38px; height: 38px; border-radius: 10px; border: none; background: var(--wa-solid); color: var(--wa-on-accent); display: grid; place-items: center; cursor: pointer; }
.wa-new-btn:hover, .wa-send:not(:disabled):hover { background: var(--wa-solid-hover); }
.wa-icon-btn { width: 40px; height: 40px; border-radius: 50%; border: none; background: transparent; color: var(--wa-muted); display: grid; place-items: center; cursor: pointer; }
.wa-icon-btn:hover { background: var(--wa-hover); }

.wa-search { margin: 4px 12px 8px; display: flex; align-items: center; gap: 10px; background: var(--wa-chat-bg); border: 1px solid var(--wa-border); border-radius: 8px; padding: 0 12px; color: var(--wa-muted); }
.wa-search input { flex: 1; border: none; outline: none; background: transparent; padding: 9px 0; font-size: 14px; color: var(--wa-text); }
.wa-chips { display: flex; gap: 8px; padding: 4px 12px 8px; flex-wrap: wrap; }
.wa-chip { border: none; border-radius: 16px; padding: 6px 12px; font-size: 14px; background: var(--wa-chip); color: var(--wa-muted); cursor: pointer; }
.wa-chip.active { background: var(--wa-chip-active); color: var(--wa-chip-active-text); font-weight: 600; }
.wa-error { margin: 0 12px 8px; padding: 8px 12px; border-radius: 8px; background: color-mix(in srgb, #e5484d 14%, var(--wa-bg)); color: #e5484d; font-size: 13px; cursor: pointer; }

.wa-list { flex: 1; overflow-y: auto; }
.wa-section { padding: 14px 16px 6px; color: var(--wa-muted); font-size: 11px; font-weight: 700; letter-spacing: .06em; text-transform: uppercase; }
.wa-empty { padding: 32px 24px; text-align: center; color: var(--wa-muted); font-size: 14px; margin: 0; }
.wa-row { width: 100%; display: flex; align-items: center; gap: 14px; padding: 0 0 0 14px; border: none; background: transparent; cursor: pointer; color: inherit; text-align: left; }
.wa-row:hover { background: var(--wa-hover); }
.wa-row.active { background: var(--wa-active); box-shadow: inset 3px 0 0 var(--wa-solid); }
.wa-row-body { flex: 1; min-width: 0; padding: 12px 14px 12px 0; border-bottom: 1px solid var(--wa-border); }
.wa-row-top, .wa-row-bottom { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.wa-row-title { font-size: 15px; font-weight: 600; color: var(--wa-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.wa-row-time { font-size: 12px; color: var(--wa-muted); flex-shrink: 0; }
.wa-row-time.unread { color: var(--wa-solid); font-weight: 700; }
.wa-row-preview { font-size: 13px; color: var(--wa-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; margin-top: 2px; display: flex; align-items: center; gap: 3px; }
.wa-row-preview em { font-style: normal; }
.wa-badge { min-width: 20px; height: 20px; padding: 0 6px; border-radius: 10px; background: var(--wa-solid); color: var(--wa-on-accent); font-size: 12px; font-weight: 700; display: grid; place-items: center; flex-shrink: 0; }

.wa-avatar { border-radius: 50%; display: grid; place-items: center; font-weight: 700; object-fit: cover; }
.wa-avatar-group { background: var(--wa-active); color: var(--wa-accent-strong); }

.wa-main { flex: 1; min-width: 0; display: flex; flex-direction: column; background: var(--wa-chat-bg); position: relative; }
.wa-placeholder { margin: auto; text-align: center; padding: 40px; color: var(--wa-muted); max-width: 440px; }
.wa-placeholder-icon { width: 96px; height: 96px; margin: 0 auto 14px; border-radius: 50%; display: grid; place-items: center; color: var(--wa-solid); background: var(--wa-active); }
.wa-placeholder h3 { margin: 0 0 8px; color: var(--wa-text); font-weight: 600; font-size: 22px; }
.wa-placeholder p { margin: 0; font-size: 14px; line-height: 1.5; }
.wa-placeholder-foot { position: absolute; left: 0; right: 0; bottom: 14px; text-align: center; padding: 0 16px; font-size: 11px; color: var(--wa-muted); opacity: 0.6; }

.wa-conv-head { display: flex; align-items: center; gap: 12px; padding: 10px 16px; background: var(--wa-bg); border-bottom: 1px solid var(--wa-border); }
.wa-back { display: none; border: none; background: transparent; color: var(--wa-muted); cursor: pointer; padding: 4px; }
.wa-conv-title { flex: 1; min-width: 0; display: flex; flex-direction: column; }
.wa-conv-title strong { font-size: 16px; font-weight: 600; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.wa-conv-title span { font-size: 13px; color: var(--wa-muted); }
.wa-menu-wrap { position: relative; }
.wa-menu { position: absolute; right: 0; top: 44px; background: var(--wa-bg); border-radius: 6px; box-shadow: 0 4px 16px rgba(0,0,0,.2); padding: 8px 0; z-index: 5; min-width: 200px; }
.wa-menu button { width: 100%; text-align: left; border: none; background: transparent; padding: 10px 20px; font-size: 14px; color: var(--wa-text); cursor: pointer; }
.wa-menu button:hover { background: var(--wa-hover); }

.wa-thread {
  flex: 1; overflow-y: auto; padding: 16px 7% 8px; display: flex; flex-direction: column;
  background-image: radial-gradient(var(--wa-doodle) 1.5px, transparent 1.5px), radial-gradient(var(--wa-doodle) 1.5px, transparent 1.5px);
  background-size: 28px 28px; background-position: 0 0, 14px 14px;
}
.wa-thread > :first-child { margin-top: auto; }
.wa-notice { align-self: center; max-width: 520px; text-align: center; margin: 6px 0 10px; padding: 6px 12px; border-radius: 8px; background: var(--wa-notice); color: var(--wa-notice-text); font-size: 12.5px; box-shadow: var(--wa-shadow); }
.wa-day { align-self: center; margin: 10px 0; }
.wa-day span { display: inline-block; padding: 5px 12px; border-radius: 8px; background: var(--wa-day); color: var(--wa-muted); font-size: 12.5px; box-shadow: var(--wa-shadow); }

.wa-msg-row { display: flex; margin-top: 2px; }
.wa-msg-row.first { margin-top: 10px; }
.wa-msg-row.mine { justify-content: flex-end; }
.wa-bubble { position: relative; max-width: min(65%, 560px); background: var(--wa-in); border-radius: 8px; padding: 6px 7px 8px 9px; box-shadow: var(--wa-shadow); font-size: 14.2px; line-height: 19px; }
.wa-bubble.mine { background: var(--wa-out); }
.wa-bubble.tail { border-top-left-radius: 0; }
.wa-bubble.mine.tail { border-top-left-radius: 8px; border-top-right-radius: 0; }
.wa-bubble.tail::before { content: ""; position: absolute; top: 0; left: -8px; border-top: 0 solid transparent; border-right: 8px solid var(--wa-in); border-bottom: 13px solid transparent; }
.wa-bubble.mine.tail::before { left: auto; right: -8px; border-right: none; border-left: 8px solid var(--wa-out); }
.wa-sender { font-size: 12.8px; font-weight: 600; margin-bottom: 2px; }
.wa-sender-role { font-weight: 400; opacity: 0.8; }
.wa-text { white-space: pre-wrap; overflow-wrap: anywhere; color: var(--wa-text); }
.wa-meta { float: right; margin: 6px 0 -4px 12px; font-size: 11px; color: var(--wa-muted); display: inline-flex; align-items: center; gap: 3px; position: relative; top: 3px; }
.wa-empty-thread { margin: auto; display: grid; gap: 4px; text-align: center; color: var(--wa-muted); font-size: 13px; }
.wa-empty-thread strong { color: var(--wa-text); font-size: 15px; }
.wa-text.deleted { font-style: italic; color: var(--wa-muted); }

.wa-msg-caret { width: 18px; height: 18px; margin: 0 -3px 0 1px; padding: 0; border: none; background: transparent; color: var(--wa-muted); cursor: pointer; display: grid; place-items: center; opacity: 0; transition: opacity .15s; }
.wa-msg-caret:hover { color: var(--wa-text); }
.wa-bubble:hover .wa-msg-caret, .wa-bubble.menu-open .wa-msg-caret, .wa-msg-caret:focus-visible { opacity: 1; }
.wa-root.wa-portal { display: contents; }
.wa-msg-menu { position: fixed; background: color-mix(in srgb, var(--wa-text) 3%, var(--wa-bg)); border: 1px solid var(--wa-border); border-radius: 14px; box-shadow: 0 10px 30px rgba(0,0,0,.35); padding: 8px 0; z-index: 1000; min-width: 190px; }
.wa-msg-menu button { display: flex; align-items: center; gap: 14px; width: 100%; text-align: left; border: none; background: transparent; padding: 9px 20px; font-size: 14.5px; color: var(--wa-text); cursor: pointer; font-family: inherit; }
.wa-msg-menu button svg { flex-shrink: 0; opacity: .85; }
.wa-msg-menu button:hover:not(:disabled) { background: var(--wa-hover); }
.wa-msg-menu button:disabled { color: var(--wa-muted); cursor: default; }
.wa-msg-menu button.danger { color: #e0605b; }
.wa-msg-menu hr { border: none; border-top: 1px solid var(--wa-border); margin: 6px 12px; }
.wa-msg-menu hr:last-child { display: none; }

.wa-icon { vertical-align: -2px; flex-shrink: 0; }
.wa-pinned .wa-icon { color: var(--wa-muted); }
.wa-meta .wa-icon { display: block; }
.wa-forwarded { font-size: 12px; font-style: italic; color: var(--wa-muted); margin-bottom: 2px; }
.wa-quote { display: grid; gap: 1px; width: 100%; text-align: left; border: none; border-left: 4px solid var(--wa-accent); border-radius: 6px; background: color-mix(in srgb, var(--wa-text) 6%, transparent); padding: 5px 8px; margin: 0 0 4px; font: inherit; cursor: pointer; min-width: 0; }
.wa-quote.static { cursor: default; flex: 1; }
.wa-quote strong { font-size: 12.5px; color: var(--wa-accent-strong); }
.wa-quote span { font-size: 13px; color: var(--wa-muted); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.wa-compose-context { display: flex; align-items: center; gap: 8px; padding: 8px 16px 0; background: var(--wa-bg); border-top: 1px solid var(--wa-border); }
.wa-compose-context + .wa-composer { border-top: none; }

.wa-pinned { display: flex; align-items: center; gap: 10px; width: 100%; padding: 8px 16px; border: none; border-bottom: 1px solid var(--wa-border); background: var(--wa-bg); text-align: left; cursor: pointer; font: inherit; }
.wa-pinned-body { display: grid; min-width: 0; }
.wa-pinned-body strong { font-size: 12px; color: var(--wa-accent-strong); }
.wa-pinned-body span { font-size: 13.5px; color: var(--wa-text); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.wa-flash .wa-bubble { animation: wa-flash 1.2s ease; }
@keyframes wa-flash { 0%, 60% { box-shadow: 0 0 0 3px color-mix(in srgb, var(--wa-accent) 45%, transparent); } 100% { box-shadow: var(--wa-shadow); } }

.wa-modal-backdrop { position: absolute; inset: 0; background: rgba(0,0,0,.35); display: grid; place-items: center; z-index: 20; padding: 16px; }
.wa-modal { width: min(420px, 100%); max-height: min(560px, 100%); display: flex; flex-direction: column; background: var(--wa-bg); border-radius: 10px; overflow: hidden; box-shadow: 0 12px 40px rgba(0,0,0,.3); }
.wa-modal .wa-list { flex: 1; min-height: 120px; }
.wa-forward-row { cursor: pointer; }
.wa-forward-row input { accent-color: var(--wa-solid); width: 18px; height: 18px; flex-shrink: 0; }
.wa-modal-foot { display: flex; align-items: center; gap: 12px; padding: 10px 16px; border-top: 1px solid var(--wa-border); font-size: 13px; color: var(--wa-muted); }
.wa-modal-foot span { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

.wa-composer { display: flex; align-items: flex-end; gap: 8px; padding: 10px 16px; background: var(--wa-bg); border-top: 1px solid var(--wa-border); }
.wa-composer textarea { flex: 1; resize: none; border: none; outline: none; border-radius: 8px; padding: 10px 14px; font-size: 15px; font-family: inherit; line-height: 20px; max-height: 120px; background: var(--wa-panel); color: var(--wa-text); border: 1px solid var(--wa-border); }
.wa-composer textarea:focus { border-color: var(--wa-accent); }
.wa-send { width: 44px; height: 44px; border-radius: 10px; border: none; background: var(--wa-solid); color: var(--wa-on-accent); display: grid; place-items: center; cursor: pointer; flex-shrink: 0; }
.wa-send:disabled { background: transparent; color: var(--wa-muted); cursor: default; }
.wa-readonly { padding: 16px; text-align: center; font-size: 14px; color: var(--wa-muted); background: var(--wa-panel); }

@media (max-width: 820px) {
  .wa-root { border-radius: 0; border-left: none; border-right: none; }
  .wa-sidebar { width: 100%; max-width: none; min-width: 0; border-right: none; }
  .wa-main { display: none; }
  .wa-has-active .wa-sidebar { display: none; }
  .wa-has-active .wa-main { display: flex; }
  .wa-back { display: block; }
  .wa-thread { padding: 12px 12px 6px; }
  .wa-bubble { max-width: 85%; }
  .wa-msg-caret { opacity: 1; }
}
`;function L(){let{institute:e,membership:t}=n(),r=t?.id||null;return(0,_.useEffect)(()=>{r&&f(r)},[r]),(0,_.useEffect)(()=>(document.body.classList.add(`classroom-focus`),()=>document.body.classList.remove(`classroom-focus`)),[]),(0,y.jsxs)(`div`,{className:`page-wrap classroom-page`,children:[(0,y.jsx)(`style`,{children:`
        /* Full-bleed: the chat fills everything below the top bar, like a messaging app. */
        .classroom-page {
          align-items: stretch !important; justify-content: flex-start !important;
          min-height: 0 !important; margin: 0 !important; width: 100% !important;
          padding: var(--nav-h) 0 0 !important; box-sizing: border-box; overflow: hidden;
          /* #root is zoomed by --app-scale (0.9 on desktop), which shrinks 100dvh
             too; divide it back out or the chat stops 10% short of the bottom. */
          height: calc(100dvh / var(--app-scale, 1));
        }
        .classroom-container { width: 100%; height: 100%; padding: 0; box-sizing: border-box; }

        /* Student-panel look for the shared chat: solid cards, the institute's
           colour, Sora headings and the soft rounded shadows used on every
           other student page. */
        .classroom-page .wa-root {
          --wa-bg: #ffffff;
          --wa-solid: var(--primary-blue);
          --wa-solid-hover: color-mix(in srgb, var(--primary-blue) 85%, #000);
          --wa-accent: var(--primary-blue);
          --wa-accent-strong: color-mix(in srgb, var(--primary-blue) 80%, #000);
          --wa-border: color-mix(in srgb, var(--primary-blue) 14%, #e5e7eb);
          --wa-chat-bg: color-mix(in srgb, var(--primary-blue) 5%, #f8fafc);
          --wa-panel: color-mix(in srgb, var(--primary-blue) 6%, #ffffff);
          --wa-hover: color-mix(in srgb, var(--primary-blue) 6%, #ffffff);
          --wa-active: color-mix(in srgb, var(--primary-blue) 12%, #ffffff);
          --wa-out: var(--primary-blue);
          --wa-tick: #ffffff;
          border-radius: 0;
          border: none;
          box-shadow: none;
          min-height: 0;
        }
        .classroom-page .wa-sidebar-head h2,
        .classroom-page .wa-drawer-head h2,
        .classroom-page .wa-placeholder h3,
        .classroom-page .wa-conv-title strong { font-family: Sora, sans-serif; font-weight: 800; color: var(--dark-blue); }
        .classroom-page .wa-sidebar-head h2 { font-size: 1.5rem; }
        .classroom-page .wa-row-title { font-weight: 700; color: var(--dark-blue); }
        .classroom-page .wa-new-btn, .classroom-page .wa-send { border-radius: 14px; box-shadow: 0 6px 16px color-mix(in srgb, var(--primary-blue) 30%, transparent); }
        .classroom-page .wa-chip { border-radius: 999px; font-weight: 700; }
        .classroom-page .wa-search { border-radius: 14px; }
        .classroom-page .wa-row { border-radius: 14px; margin: 2px 8px; width: calc(100% - 16px); padding-left: 10px; }
        .classroom-page .wa-row-body { border-bottom: none; }
        .classroom-page .wa-row.active { box-shadow: none; }
        /* Own messages: filled in the institute colour, white text */
        .classroom-page .wa-bubble { border-radius: 16px; box-shadow: 0 1px 2px rgba(15, 23, 42, 0.06); }
        .classroom-page .wa-bubble.mine { color: #fff; }
        .classroom-page .wa-bubble.mine .wa-text,
        .classroom-page .wa-bubble.mine .wa-meta { color: #fff; }
        .classroom-page .wa-bubble.mine .wa-meta { opacity: 0.85; }
        .classroom-page .wa-bubble.tail::before { display: none; }
        .classroom-page .wa-bubble.tail { border-top-left-radius: 6px; }
        .classroom-page .wa-bubble.mine.tail { border-top-left-radius: 16px; border-top-right-radius: 6px; }
        .classroom-page .wa-composer textarea { border-radius: 14px; background: var(--wa-chat-bg); }
        .classroom-page .wa-conv-head, .classroom-page .wa-composer { background: #ffffff; }
        .classroom-page .wa-sidebar { width: 380px; min-width: 320px; max-width: 380px; }
        .classroom-page .wa-sidebar-head { padding: 18px 16px 10px; }
        .classroom-page .wa-conv-head { padding: 12px 20px; }
        .classroom-page .wa-thread { padding: 16px 4% 10px; }
        .classroom-page .wa-bubble { max-width: min(70%, 680px); }
        .classroom-page .wa-row-preview { gap: 4px; }
        @media (max-width: 820px) {
          .classroom-page .wa-sidebar { width: 100%; max-width: none; min-width: 0; }
        }
      `}),(0,y.jsx)(`div`,{className:`classroom-container`,children:e?.id?(0,y.jsx)(k,{instituteId:e.id,role:`student`,height:`100%`}):(0,y.jsx)(`p`,{style:{textAlign:`center`,color:`var(--text-light)`,fontWeight:700},children:`Loading your chats…`})})]})}export{L as default};