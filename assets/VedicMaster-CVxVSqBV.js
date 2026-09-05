import{T as e,ft as t,k as n,u as r}from"./interactive-CSVeMiOv.js";import{a as i,i as a,r as o}from"./vedicPractice-BnZ1Bj4Q.js";var s=n(),c=`var(--primary-blue)`,l=e=>`color-mix(in srgb, ${c} ${e}%, transparent)`,u=`
  /* .iabacus-grid / .iabacus-card are shared with the Interactive Abacus
     home page's small icon tiles, whose mobile rule forces 2 columns.
     These trick cards carry a title, description, and full-width button,
     so they need their own single-column mobile layout instead. */
  .vedic-tricks-grid {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .vedic-trick-card {
    background: #ffffff;
    box-shadow: 0 6px 18px -8px color-mix(in srgb, var(--dark-blue) 18%, transparent);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }
  .vedic-trick-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 26px -8px color-mix(in srgb, var(--primary-blue) 28%, transparent);
  }
  @media (max-width: 640px) {
    .vedic-tricks-grid {
      grid-template-columns: 1fr !important;
      gap: 14px !important;
    }
    .vedic-trick-card {
      padding: 20px 18px !important;
      border-radius: 18px !important;
      gap: 10px !important;
    }
    .vedic-trick-card h3 {
      font-size: 1.05rem !important;
    }
  }
`;function d(){let n=t();return(0,s.jsxs)(`div`,{className:`page-wrap iabacus-page`,style:{paddingTop:`calc(var(--nav-h) + 20px)`,width:`100%`,display:`flex`,flexDirection:`column`,gap:`24px`,paddingBottom:`60px`,boxSizing:`border-box`,justifyContent:`flex-start`,minHeight:0},children:[(0,s.jsx)(`style`,{children:u}),(0,s.jsx)(e,{}),(0,s.jsxs)(`div`,{className:`iabacus-header-banner premium-banner`,style:{position:`relative`,overflow:`hidden`,borderRadius:`26px`,padding:`32px 24px`,border:`1px solid rgba(255, 255, 255, 0.82)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`20px`},children:[(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`,minWidth:0},children:[(0,s.jsxs)(`button`,{onClick:()=>n(`/practice`),style:{alignSelf:`flex-start`,background:`none`,border:`none`,cursor:`pointer`,color:`var(--primary-blue)`,fontWeight:800,padding:0,marginBottom:4},children:[(0,s.jsx)(`i`,{className:`fa-solid fa-arrow-left`}),` Practice`]}),(0,s.jsx)(`span`,{className:`setup-badge`,style:{background:`var(--light-blue)`,color:`var(--primary-blue)`,display:`inline-block`,alignSelf:`flex-start`,margin:0},children:`Master · Ages 10+`}),(0,s.jsx)(`h1`,{style:{fontFamily:`Sora, sans-serif`,fontSize:`2.2rem`,fontWeight:900,color:`var(--dark-blue)`,margin:0},children:`Vedic Math Tricks`}),(0,s.jsx)(`p`,{style:{color:`var(--text-light)`,fontSize:`1.05rem`,fontWeight:500,margin:0,lineHeight:1.4},children:`Pick a trick and practice it — the answer is checked as you go.`})]}),(0,s.jsx)(r,{variant:`vedic-banner`,size:300})]}),i.map(e=>(0,s.jsxs)(`section`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,s.jsxs)(`h2`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,fontFamily:`Sora, sans-serif`,fontSize:`1.3rem`,fontWeight:900,color:`var(--dark-blue)`,margin:0},children:[(0,s.jsx)(`span`,{style:{width:`36px`,height:`36px`,borderRadius:`12px`,background:l(9),color:c,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`1rem`},children:(0,s.jsx)(`i`,{className:`fa-solid ${e.icon}`})}),e.title]}),(0,s.jsx)(`div`,{className:`iabacus-grid vedic-tricks-grid`,children:e.tricks.map(e=>(0,s.jsxs)(`div`,{className:`iabacus-card vedic-trick-card`,style:{alignItems:`flex-start`,flexDirection:`column`,gap:`10px`},children:[(0,s.jsx)(`h3`,{style:{fontSize:`1.05rem`,fontWeight:900,color:`var(--dark-blue)`,margin:0,fontFamily:`Sora, sans-serif`},children:e.name}),o(e.name)&&(0,s.jsxs)(`button`,{type:`button`,onClick:()=>n(`/vedic-math/practice/${a(e.name)}`),style:{marginTop:`auto`,alignSelf:`stretch`,border:`none`,borderRadius:`999px`,padding:`11px 18px`,background:c,color:`#fff`,fontFamily:`Sora, sans-serif`,fontWeight:800,fontSize:`0.8rem`,letterSpacing:`0.6px`,textTransform:`uppercase`,cursor:`pointer`},children:[(0,s.jsx)(`i`,{className:`fa-solid fa-dumbbell`,style:{marginRight:7}}),`Practice`]})]},e.name))})]},e.title))]})}export{d as default};