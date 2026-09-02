import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{D as t,O as n,T as r,V as i,et as a,it as o,mt as s,nt as c}from"./interactive-_zGgTTtJ.js";var l=e(s(),1),u=n(),d=`
  .profile-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 60px;
    width: 100%;
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 30px;
    animation: fadeIn 0.4s ease-out;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @media (max-width: 900px) {
    .profile-container { grid-template-columns: 1fr; }
  }
  .profile-sidebar,
  .profile-main {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .user-card,
  .profile-nav,
  .profile-panel,
  .p-stat-box {
    background: var(--card-bg);
    backdrop-filter: blur(12px);
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
  }
  .user-card {
    border-radius: 24px;
    padding: 34px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .avatar-wrap {
    width: 112px;
    height: 112px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue));
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Sora", sans-serif;
    font-size: 2.5rem;
    font-weight: 900;
    color: white;
    margin-bottom: 20px;
    box-shadow: 0 10px 25px rgba(0, 86, 179, 0.3);
  }
  .user-name {
    font-family: "Sora", sans-serif;
    font-size: 1.55rem;
    font-weight: 800;
    color: var(--dark-blue);
    margin: 0 0 4px;
  }
  .user-email {
    color: var(--text-light);
    font-size: 0.9rem;
    font-weight: 600;
    margin: 0 0 16px;
    overflow-wrap: anywhere;
  }
  .level-badge {
    background: rgba(0, 86, 179, 0.1);
    color: var(--primary-blue);
    padding: 6px 16px;
    border-radius: 50px;
    font-size: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    border: 1px solid rgba(0, 86, 179, 0.2);
  }
  .profile-nav {
    border-radius: 20px;
    padding: 12px;
  }
  .p-nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    border: 0;
    background: transparent;
    text-align: left;
    padding: 14px 18px;
    border-radius: 12px;
    font: inherit;
    font-weight: 800;
    color: var(--text-main);
    cursor: pointer;
    transition: all 0.2s;
  }
  .p-nav-item i {
    width: 20px;
    text-align: center;
    color: var(--text-light);
    transition: color 0.2s;
  }
  .p-nav-item:hover {
    background: rgba(0, 86, 179, 0.05);
    color: var(--primary-blue);
  }
  .p-nav-item:hover i { color: var(--primary-blue); }
  .p-nav-item.active {
    background: var(--primary-blue);
    color: white;
  }
  .p-nav-item.active i { color: white; }
  .p-nav-item.danger {
    color: #dc2626;
    margin-top: 12px;
  }
  .p-nav-item.danger i { color: #dc2626; }
  .p-nav-item.danger:hover { background: #fee2e2; }
  .p-stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 20px;
  }
  .p-stat-box {
    border-radius: 20px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .p-stat-box::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
  }
  .p-stat-box.level::before { background: #3b82f6; }
  .p-stat-box.role::before { background: #10b981; }
  .p-stat-box.institute::before { background: #f59e0b; }
  .p-stat-box.email::before { background: #8b5cf6; }
  .p-stat-val {
    font-family: "Sora", sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: var(--dark-blue);
    margin: 12px 0 4px;
    line-height: 1;
    text-transform: capitalize;
  }
  .p-stat-label {
    font-size: 0.8rem;
    font-weight: 800;
    color: var(--text-light);
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  .profile-panel {
    border-radius: 24px;
    padding: 28px;
  }
  .panel-title {
    font-family: "Sora", sans-serif;
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--dark-blue);
    margin: 0 0 22px;
    display: flex;
    align-items: center;
    gap: 12px;
  }
  .form-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }
  .profile-form {
    display: grid;
    gap: 16px;
  }
  .field {
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  .field label {
    color: var(--dark-blue);
    font-weight: 800;
    font-size: 0.86rem;
  }
  .field input {
    width: 100%;
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 13px 14px;
    font: inherit;
    color: var(--text-main);
    background: rgba(255,255,255,0.82);
    outline: none;
  }
  .field input:focus {
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-blue) 15%, transparent);
  }
  .readonly-value {
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 13px 14px;
    background: rgba(255,255,255,0.62);
    color: var(--text-light);
    font-weight: 700;
    min-height: 48px;
    overflow-wrap: anywhere;
  }
  .activity-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  .act-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px;
    border-radius: 16px;
    background: rgba(255,255,255,0.62);
    border: 1px solid var(--border);
  }
  .act-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
  }
  .act-info { flex: 1; }
  .act-info h4 {
    font-size: 0.95rem;
    font-weight: 800;
    color: var(--dark-blue);
    margin: 0 0 4px;
  }
  .act-info p {
    font-size: 0.82rem;
    color: var(--text-light);
    margin: 0;
    font-weight: 700;
  }
  .act-score {
    font-family: "Sora", sans-serif;
    font-weight: 800;
    color: var(--ok);
    background: var(--ok-lt);
    padding: 6px 12px;
    border-radius: 50px;
    font-size: 0.85rem;
    white-space: nowrap;
  }
  .account-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }
  .profile-alert {
    border-radius: 12px;
    padding: 12px 14px;
    font-weight: 800;
    font-size: 0.9rem;
  }
  .profile-alert.ok {
    background: var(--ok-lt);
    color: var(--ok);
  }
  .profile-alert.err {
    background: var(--err-lt);
    color: var(--err);
  }
  .achievements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 14px;
  }
  .badge-item {
    border: 1px solid var(--border);
    border-radius: 14px;
    background: rgba(255,255,255,0.72);
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 150px;
  }
  .badge-item.locked {
    opacity: 0.55;
    filter: grayscale(1);
  }
  .badge-icon {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: grid;
    place-items: center;
    color: white;
    font-size: 1.1rem;
  }
  .badge-item h5 {
    color: var(--dark-blue);
    font-size: 0.92rem;
    margin: 0;
  }
  .badge-item p {
    color: var(--text-light);
    font-size: 0.76rem;
    line-height: 1.35;
    font-weight: 700;
    margin: 0;
  }
  @media (max-width: 640px) {
    .form-grid { grid-template-columns: 1fr; }
    .act-item { align-items: flex-start; flex-direction: column; }
  }
`;function f(e){if(!e)return`Not available`;let t=new Date(e);return Number.isNaN(t.getTime())?`Not available`:t.toLocaleDateString(`en-IN`,{day:`numeric`,month:`long`,year:`numeric`})}function p(e,t){return e?.full_name||e?.name||t?.user_metadata?.full_name||t?.email?.split(`@`)[0]||`Student`}function m(){let[e,n]=(0,l.useState)(`overview`),{user:s,profile:m,setProfile:h,institute:g,membership:_,signOut:v}=t(),[y,b]=(0,l.useState)(``),[x,S]=(0,l.useState)(``),[C,w]=(0,l.useState)(``),[T,E]=(0,l.useState)(!1),[D,O]=(0,l.useState)(!1),[k,A]=(0,l.useState)(null),[j,M]=(0,l.useState)([]),[N,P]=(0,l.useState)(m?.extra_details?.dob||m?.extra_details?.date_of_birth||``),[F,I]=(0,l.useState)(!1);(0,l.useEffect)(()=>{let e=m?.extra_details?.dob||m?.extra_details?.date_of_birth||``;e&&P(e)},[m?.extra_details?.dob,m?.extra_details?.date_of_birth]);let L=p(m,s),R=(0,l.useMemo)(()=>L.trim().split(/\s+/).slice(0,2).map(e=>e[0]?.toUpperCase()).join(``)||`S`,[L]),z=(m?.role||`student`).replaceAll(`_`,` `),B=m?.current_level===999?`All Levels`:`Level ${m?.current_level??0}`,V=m?.created_at||s?.created_at,H=s?.email_confirmed_at?`Verified`:`Not verified`,U=(0,l.useMemo)(()=>new Set(j.map(e=>e.achievement_code)),[j]);(0,l.useEffect)(()=>{let e=!0;if(!(!g?.id||!_?.id))return i(g.id,_.id).then(({data:t,error:n})=>{if(n){console.warn(`Achievement load failed:`,n);return}e&&M(t)}),()=>{e=!1}},[g?.id,_?.id]);async function W(e){if(e.preventDefault(),A(null),!y){A({type:`err`,text:`Enter your current password to confirm this change.`});return}if(x.length<6){A({type:`err`,text:`New password must be at least 6 characters.`});return}if(x!==C){A({type:`err`,text:`New password and confirm password do not match.`});return}if(x===y){A({type:`err`,text:`New password must be different from your current password.`});return}E(!0);let{error:t}=await o.auth.signInWithPassword({email:s.email,password:y});if(t){E(!1),A({type:`err`,text:`Current password is incorrect.`});return}let{error:n}=await o.auth.updateUser({password:x});if(E(!1),n){A({type:`err`,text:n.message});return}b(``),S(``),w(``),A({type:`ok`,text:`Password updated successfully.`})}async function G(){if(!s?.email)return;A(null),O(!0);let{error:e}=await o.auth.resetPasswordForEmail(s.email,{redirectTo:`${window.location.origin}/reset-password`});if(O(!1),e){A({type:`err`,text:e.message});return}A({type:`ok`,text:`Password reset email sent to ${s.email}.`})}async function K(e){let t=e.target.value;P(t),I(!0),A(null);try{let e={...m?.extra_details||{},dob:t,date_of_birth:t},{error:n}=await o.from(`student_profiles`).update({extra_details:e}).eq(`membership_id`,_.id);n?A({type:`err`,text:n.message}):(A({type:`ok`,text:`Date of Birth updated successfully.`}),h({...m,extra_details:e}))}catch(e){console.error(e),A({type:`err`,text:`Failed to update Date of Birth.`})}finally{I(!1)}}return(0,u.jsxs)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:[(0,u.jsx)(`style`,{children:d}),(0,u.jsx)(r,{}),(0,u.jsxs)(`div`,{className:`profile-container`,children:[(0,u.jsxs)(`div`,{className:`profile-sidebar`,children:[(0,u.jsxs)(`div`,{className:`user-card`,children:[(0,u.jsx)(`div`,{className:`avatar-wrap`,children:R}),(0,u.jsx)(`h1`,{className:`user-name`,children:L}),(0,u.jsx)(`p`,{className:`user-email`,children:s?.email||`No email found`}),(0,u.jsxs)(`div`,{className:`level-badge`,children:[(0,u.jsx)(`i`,{className:`fa-solid fa-star`,style:{marginRight:`6px`}}),B]}),(0,u.jsxs)(`p`,{style:{fontSize:`0.8rem`,color:`var(--text-light)`,marginTop:`16px`,fontWeight:`700`},children:[`Joined `,f(V)]})]}),(0,u.jsxs)(`div`,{className:`profile-nav`,children:[(0,u.jsxs)(`button`,{className:`p-nav-item ${e===`overview`?`active`:``}`,onClick:()=>n(`overview`),children:[(0,u.jsx)(`i`,{className:`fa-solid fa-table-columns`}),` Dashboard Overview`]}),(0,u.jsxs)(`button`,{className:`p-nav-item ${e===`settings`?`active`:``}`,onClick:()=>n(`settings`),children:[(0,u.jsx)(`i`,{className:`fa-solid fa-gear`}),` Account Settings`]}),(0,u.jsxs)(`button`,{className:`p-nav-item ${e===`security`?`active`:``}`,onClick:()=>n(`security`),children:[(0,u.jsx)(`i`,{className:`fa-solid fa-shield-halved`}),` Password & Security`]}),(0,u.jsxs)(`button`,{className:`p-nav-item danger`,onClick:v,children:[(0,u.jsx)(`i`,{className:`fa-solid fa-right-from-bracket`}),` Log Out`]})]})]}),(0,u.jsxs)(`div`,{className:`profile-main`,children:[k?(0,u.jsx)(`div`,{className:`profile-alert ${k.type}`,children:k.text}):null,e===`overview`?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(`div`,{className:`p-stats-grid`,children:[(0,u.jsxs)(`div`,{className:`p-stat-box level`,children:[(0,u.jsx)(`i`,{className:`fa-solid fa-layer-group`,style:{fontSize:`28px`,color:`#3b82f6`}}),(0,u.jsx)(`div`,{className:`p-stat-val`,children:m?.current_level===999?`All`:m?.current_level??0}),(0,u.jsx)(`div`,{className:`p-stat-label`,children:`Current Level`})]}),(0,u.jsxs)(`div`,{className:`p-stat-box role`,children:[(0,u.jsx)(`i`,{className:`fa-solid fa-user-shield`,style:{fontSize:`28px`,color:`#10b981`}}),(0,u.jsx)(`div`,{className:`p-stat-val`,style:{fontSize:`1.45rem`},children:z}),(0,u.jsx)(`div`,{className:`p-stat-label`,children:`Role`})]}),(0,u.jsxs)(`div`,{className:`p-stat-box institute`,children:[(0,u.jsx)(`i`,{className:`fa-solid fa-building-columns`,style:{fontSize:`28px`,color:`#f59e0b`}}),(0,u.jsx)(`div`,{className:`p-stat-val`,style:{fontSize:`1.45rem`},children:g?.name?`Active`:`None`}),(0,u.jsx)(`div`,{className:`p-stat-label`,children:`Institute`})]}),(0,u.jsxs)(`div`,{className:`p-stat-box email`,children:[(0,u.jsx)(`i`,{className:`fa-solid fa-envelope-circle-check`,style:{fontSize:`28px`,color:`#8b5cf6`}}),(0,u.jsx)(`div`,{className:`p-stat-val`,style:{fontSize:`1.35rem`},children:H}),(0,u.jsx)(`div`,{className:`p-stat-label`,children:`Email Status`})]})]}),(0,u.jsxs)(`div`,{className:`profile-panel`,children:[(0,u.jsxs)(`h2`,{className:`panel-title`,children:[(0,u.jsx)(`i`,{className:`fa-solid fa-id-card`,style:{color:`var(--primary-blue)`}}),` Student Details`]}),(0,u.jsxs)(`div`,{className:`form-grid`,children:[(0,u.jsxs)(`div`,{className:`field`,children:[(0,u.jsx)(`label`,{children:`Full name`}),(0,u.jsx)(`div`,{className:`readonly-value`,children:L})]}),(0,u.jsxs)(`div`,{className:`field`,children:[(0,u.jsx)(`label`,{children:`Email`}),(0,u.jsx)(`div`,{className:`readonly-value`,children:s?.email||`Not available`})]}),(0,u.jsxs)(`div`,{className:`field`,children:[(0,u.jsx)(`label`,{children:`Institute`}),(0,u.jsx)(`div`,{className:`readonly-value`,children:g?.name||`Not assigned`})]}),(0,u.jsxs)(`div`,{className:`field`,children:[(0,u.jsx)(`label`,{children:`Role`}),(0,u.jsx)(`div`,{className:`readonly-value`,style:{textTransform:`capitalize`},children:z})]}),(0,u.jsxs)(`div`,{className:`field`,children:[(0,u.jsx)(`label`,{children:`Membership ID`}),(0,u.jsx)(`div`,{className:`readonly-value`,children:_?.id||`Not available`})]}),(0,u.jsxs)(`div`,{className:`field`,children:[(0,u.jsx)(`label`,{children:`Account created`}),(0,u.jsx)(`div`,{className:`readonly-value`,children:f(V)})]})]})]}),(0,u.jsxs)(`div`,{className:`profile-panel`,children:[(0,u.jsxs)(`h2`,{className:`panel-title`,children:[(0,u.jsx)(`i`,{className:`fa-solid fa-clock-rotate-left`,style:{color:`var(--primary-blue)`}}),` Account Activity`]}),(0,u.jsxs)(`div`,{className:`activity-list`,children:[(0,u.jsxs)(`div`,{className:`act-item`,children:[(0,u.jsx)(`div`,{className:`act-icon`,style:{background:`#dbeafe`,color:`#2563eb`},children:(0,u.jsx)(`i`,{className:`fa-solid fa-right-to-bracket`})}),(0,u.jsxs)(`div`,{className:`act-info`,children:[(0,u.jsx)(`h4`,{children:`Latest sign in`}),(0,u.jsx)(`p`,{children:f(s?.last_sign_in_at)})]}),(0,u.jsx)(`div`,{className:`act-score`,children:s?.email_confirmed_at?`Secure`:`Check email`})]}),(0,u.jsxs)(`div`,{className:`act-item`,children:[(0,u.jsx)(`div`,{className:`act-icon`,style:{background:`#ede9fe`,color:`#8b5cf6`},children:(0,u.jsx)(`i`,{className:`fa-solid fa-building-columns`})}),(0,u.jsxs)(`div`,{className:`act-info`,children:[(0,u.jsx)(`h4`,{children:`Institute access`}),(0,u.jsxs)(`p`,{children:[g?.name||`No institute loaded`,` | `,z]})]}),(0,u.jsx)(`div`,{className:`act-score`,style:{background:`transparent`,color:`var(--primary-blue)`},children:B})]})]})]}),(0,u.jsxs)(`div`,{className:`profile-panel`,children:[(0,u.jsxs)(`h2`,{className:`panel-title`,children:[(0,u.jsx)(`i`,{className:`fa-solid fa-medal`,style:{color:`var(--gold)`}}),` Achievements & Badges`]}),(0,u.jsx)(`div`,{className:`achievements-grid`,children:a.slice(0,16).map(e=>{let t=U.has(e.code),n=j.find(t=>t.achievement_code===e.code),r=c(e.code)||e;return(0,u.jsxs)(`div`,{className:`badge-item ${t?``:`locked`}`,children:[(0,u.jsx)(`div`,{className:`badge-icon`,style:{background:r.color},children:(0,u.jsx)(`i`,{className:`fa-solid ${r.icon}`})}),(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`h5`,{children:r.name}),(0,u.jsx)(`p`,{children:t?`Earned ${f(n?.earned_at)}`:r.description})]})]},e.code)})})]})]}):null,e===`settings`?(0,u.jsxs)(`div`,{className:`profile-panel`,children:[(0,u.jsxs)(`h2`,{className:`panel-title`,children:[(0,u.jsx)(`i`,{className:`fa-solid fa-gear`,style:{color:`var(--primary-blue)`}}),` Account Settings`]}),(0,u.jsxs)(`div`,{className:`form-grid`,children:[(0,u.jsxs)(`div`,{className:`field`,children:[(0,u.jsx)(`label`,{children:`Display name`}),(0,u.jsx)(`div`,{className:`readonly-value`,children:L})]}),(0,u.jsxs)(`div`,{className:`field`,children:[(0,u.jsx)(`label`,{children:`Email address`}),(0,u.jsx)(`div`,{className:`readonly-value`,children:s?.email||`Not available`})]}),(0,u.jsxs)(`div`,{className:`field`,children:[(0,u.jsx)(`label`,{children:`Current level`}),(0,u.jsx)(`div`,{className:`readonly-value`,children:B})]}),(0,u.jsxs)(`div`,{className:`field`,children:[(0,u.jsx)(`label`,{children:`Institute`}),(0,u.jsx)(`div`,{className:`readonly-value`,children:g?.name||`Not assigned`})]}),(0,u.jsxs)(`div`,{className:`field`,children:[(0,u.jsx)(`label`,{children:`Date of Birth`}),(0,u.jsx)(`input`,{type:`date`,value:N,onChange:K,disabled:F,style:{width:`100%`,border:`1px solid var(--border)`,borderRadius:`12px`,padding:`13px 14px`,font:`inherit`,color:`var(--text-main)`,background:`rgba(255,255,255,0.82)`,outline:`none`}}),F?(0,u.jsx)(`span`,{style:{fontSize:`0.85rem`,color:`var(--text-light)`,marginTop:`4px`},children:`Saving...`}):null]})]})]}):null,e===`security`?(0,u.jsxs)(`div`,{className:`profile-panel`,children:[(0,u.jsxs)(`h2`,{className:`panel-title`,children:[(0,u.jsx)(`i`,{className:`fa-solid fa-shield-halved`,style:{color:`var(--primary-blue)`}}),` Password & Security`]}),(0,u.jsxs)(`form`,{className:`profile-form`,onSubmit:W,children:[(0,u.jsxs)(`div`,{className:`form-grid`,children:[(0,u.jsxs)(`div`,{className:`field`,children:[(0,u.jsx)(`label`,{children:`Current password`}),(0,u.jsx)(`input`,{type:`password`,value:y,onChange:e=>b(e.target.value),autoComplete:`current-password`,placeholder:`Your existing password`})]}),(0,u.jsxs)(`div`,{className:`field`,children:[(0,u.jsx)(`label`,{children:`New password`}),(0,u.jsx)(`input`,{type:`password`,value:x,onChange:e=>S(e.target.value),autoComplete:`new-password`,placeholder:`At least 6 characters`})]}),(0,u.jsxs)(`div`,{className:`field`,children:[(0,u.jsx)(`label`,{children:`Confirm new password`}),(0,u.jsx)(`input`,{type:`password`,value:C,onChange:e=>w(e.target.value),autoComplete:`new-password`,placeholder:`Repeat new password`})]})]}),(0,u.jsxs)(`div`,{className:`account-actions`,children:[(0,u.jsxs)(`button`,{className:`g-btn g-btn-p`,type:`submit`,disabled:T,children:[(0,u.jsx)(`i`,{className:`fa-solid fa-key`,style:{marginRight:`8px`}}),T?`Updating...`:`Update Password`]}),(0,u.jsxs)(`button`,{className:`g-btn g-btn-ghost`,type:`button`,disabled:D||!s?.email,onClick:G,children:[(0,u.jsx)(`i`,{className:`fa-solid fa-envelope`,style:{marginRight:`8px`}}),D?`Sending...`:`Send Reset Email`]})]})]})]}):null]})]})]})}export{m as default};