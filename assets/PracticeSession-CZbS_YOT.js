import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{C as t,Ct as n,D as r,E as i,Et as a,F as o,H as s,O as c,S as l,T as ee,V as te,X as u,Y as ne,_ as re,at as ie,b as d,k as f,m as ae,u as oe,w as se,wt as ce,x as p,yt as le,zt as m}from"./interactive-TMORbrKA.js";import{h as ue}from"./index-CgTHWfxS.js";import{m as de}from"./mcq-D_VlzdpN.js";import{n as fe,t as pe}from"./vedicSyllabus-Cs56sLFg.js";var h=e(m(),1),g=u(),me=`
  /* ── Focus mode: hide sidebar & hamburger on tablet/mobile ── */
  @media (max-width: 1024px) {
    body.practice-session-focus .sidebar,
    body.practice-session-focus .sidebar-overlay,
    body.practice-session-focus .hamburger { display: none; }
    body.practice-session-focus .main-content { margin-left: 0; width: 100%; }
  }
  body.practice-session-focus .page-wrap {
    justify-content: flex-start;
    min-height: 100vh;
    padding-top: calc(var(--nav-h) + 20px) !important;
  }

  /* Themes (emerald_forest, sunset_glow, …) pad .main-content for the navbar;
     page-wrap already does, so drop the duplicate here. */
  body .app-layout .main-content:has(.session-page-wrap) { padding-top: 0 !important; }

  /* ── Shell ── */
  .session-shell {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 60px;
    width: 100%;
  }

  /* ── Hero banner ── */
  .session-hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    padding: 28px 28px;
    background:
      radial-gradient(circle at 8% 25%, color-mix(in srgb, var(--gold) 35%, transparent), transparent 26%),
      radial-gradient(circle at 90% 15%, color-mix(in srgb, var(--primary-blue) 25%, transparent), transparent 28%),
      linear-gradient(135deg, color-mix(in srgb, var(--primary-blue) 5%, transparent), color-mix(in srgb, var(--dark-blue) 3%, transparent));
    border: 1px solid rgba(255,255,255,0.85);
    box-shadow: 0 2px 16px rgba(0,0,0,0.06);
    margin-bottom: 20px;
    transition: all 0.35s ease;
  }
  .playing-active .session-hero {
    padding: 14px 20px;
    border-radius: 14px;
    margin-bottom: 14px;
  }
  .session-hero h1 {
    font-family: "Sora", sans-serif;
    font-size: clamp(1.4rem, 3vw, 2.2rem);
    line-height: 1.1;
    margin: 0 0 4px;
    color: var(--dark-blue);
    transition: font-size 0.3s;
  }
  .playing-active .session-hero h1 { font-size: clamp(1rem, 2vw, 1.4rem); margin: 0; }
  .session-hero p {
    color: var(--text-light);
    font-weight: 700;
    margin: 0;
    font-size: 0.9rem;
    transition: opacity 0.3s;
  }
  .playing-active .session-hero p { display: none; }
  .session-pill {
    border: 0;
    background: var(--dark-blue);
    color: white;
    border-radius: 8px;
    padding: 7px 14px;
    font-weight: 900;
    white-space: nowrap;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.5px;
    flex-shrink: 0;
  }

  /* ── Tabs (before session starts) ── */
  .session-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
    border-bottom: 1.5px solid var(--border);
    padding-bottom: 12px;
  }
  .session-tab-btn {
    background: none;
    border: none;
    padding: 9px 18px;
    font-size: 0.92rem;
    font-weight: 700;
    color: var(--text-light);
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.18s ease;
    display: flex;
    align-items: center;
    gap: 7px;
  }
  .session-tab-btn:hover { background: var(--light-blue); color: var(--primary-blue); }
  .session-tab-btn.active {
    background: var(--dark-blue);
    color: white;
    box-shadow: 0 3px 10px rgba(0,0,0,0.14);
  }

  /* ── Layout grid (active session) ── */
  .session-grid {
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 16px;
    align-items: start;
    transition: grid-template-columns 0.35s cubic-bezier(0.4,0,0.2,1);
  }
  .playing-active .session-grid { grid-template-columns: 1fr; }

  /* ── Mode list (left panel) ── */
  .mode-list {
    border: 1px solid var(--border);
    background: var(--card-bg);
    border-radius: 16px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    padding: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    overflow: hidden;
    transition: padding 0.35s cubic-bezier(0.4,0,0.2,1);
    position: sticky;
    top: calc(var(--nav-h) + 20px);
  }
  .playing-active .mode-list {
    flex-direction: row;
    overflow-x: auto;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    padding: 8px;
    gap: 6px;
    position: static;
    border-radius: 14px;
  }
  .playing-active .mode-list::-webkit-scrollbar { display: none; }

  .mode-row {
    border: 1px solid transparent;
    background: transparent;
    border-radius: 12px;
    padding: 10px 11px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 800;
    cursor: pointer;
    transition: padding 0.35s cubic-bezier(0.4,0,0.2,1), background 0.2s, border-color 0.2s;
  }
  .mode-row:hover:not(.active) {
    background: color-mix(in srgb, var(--primary-blue) 5%, transparent);
  }
  .playing-active .mode-row:hover i {
    background: color-mix(in srgb, var(--primary-blue) 18%, white);
    color: var(--primary-blue);
  }
  .playing-active .mode-row.active:hover i {
    background: var(--primary-blue);
    color: white;
  }
  .playing-active .mode-row {
    flex-shrink: 0;
    padding: 7px 10px;
    justify-content: flex-start;
    border-radius: 10px;
  }
  .playing-active .mode-row span { display: none; }
  .playing-active .mode-row.active span { display: block; }
  .playing-active .mode-row.active .journey-mode { display: none; }
  .playing-active .mode-row.active .journey-step { font-size: 0.8rem; white-space: nowrap; }
  .mode-row i {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    display: grid;
    place-items: center;
    background: var(--light-blue);
    color: var(--primary-blue);
    font-size: 0.85rem;
    flex-shrink: 0;
    transition: background 0.2s, color 0.2s;
  }
  .mode-row .journey-step {
    display: block;
    color: var(--dark-blue);
    font-family: "Sora", sans-serif;
    font-size: 0.88rem;
    line-height: 1.2;
  }
  .mode-row .journey-mode {
    display: block;
    color: var(--text-light);
    font-family: "DM Sans", sans-serif;
    font-size: 0.74rem;
    font-weight: 800;
    margin-top: 1px;
  }
  .mode-row.active {
    background: color-mix(in srgb, var(--primary-blue) 8%, transparent);
    border-color: color-mix(in srgb, var(--primary-blue) 28%, transparent);
  }
  .mode-row.active i { background: var(--primary-blue); color: white; }
  .mode-row.done i { background: var(--ok-lt); color: var(--ok); }
  .mode-row.done .journey-step { color: var(--ok); }
  .mode-row.review i { background: color-mix(in srgb, var(--gold) 18%, white); color: var(--gold, #f59e0b); }

  /* ── Session card ── */
  .session-card {
    background: var(--card-bg);
    border: 1px solid var(--border);
    border-radius: 18px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.06);
    padding: 24px;
    min-height: 480px;
    display: flex;
    flex-direction: column;
  }

  /* ── Game top bar ── */
  .session-game-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
    flex-wrap: wrap;
  }
  .session-mode-pill {
    background: var(--light-blue);
    color: var(--primary-blue);
    border: 1px solid color-mix(in srgb, var(--primary-blue) 20%, transparent);
    border-radius: 8px;
    padding: 6px 14px;
    font-family: "Sora", sans-serif;
    font-size: 0.82rem;
    font-weight: 900;
    letter-spacing: 0.2px;
  }
  .session-q-counter {
    font-family: "DM Sans", sans-serif;
    font-size: 0.82rem;
    font-weight: 800;
    color: var(--text-light);
  }
  .session-spacer { flex: 1; }
  .session-score-chip {
    background: var(--ok-lt);
    color: var(--ok);
    border: 1px solid color-mix(in srgb, var(--ok) 22%, transparent);
    border-radius: 8px;
    padding: 6px 14px;
    font-family: "Sora", sans-serif;
    font-size: 0.82rem;
    font-weight: 900;
  }
  @keyframes resumePillFade {
    0%   { opacity: 1; transform: translateY(0); }
    80%  { opacity: 1; transform: translateY(0); }
    100% { opacity: 0; transform: translateY(-6px); }
  }
  .resumed-pill {
    display: flex;
    align-items: center;
    gap: 5px;
    background: color-mix(in srgb, var(--accent) 12%, transparent);
    color: var(--accent);
    border: 1px solid color-mix(in srgb, var(--accent) 28%, transparent);
    border-radius: 8px;
    padding: 5px 10px;
    font-size: 0.75rem;
    font-weight: 700;
    animation: resumePillFade 4s ease forwards;
    pointer-events: none;
  }

  /* Hidden on desktop, shown only via mobile media query */
  .mobile-sub-bar { display: none; }
  .mobile-layout-toggle { display: none; }

  /* ── Progress bar ── */
  .session-prog-track {
    height: 5px;
    background: color-mix(in srgb, var(--border) 60%, transparent);
    border-radius: 99px;
    overflow: hidden;
    margin-bottom: 20px;
  }
  .session-prog-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-blue), var(--gold));
    border-radius: 99px;
    transition: width 0.5s cubic-bezier(0.4,0,0.2,1);
  }

  /* ── Question stage ── */
  .session-stage {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    text-align: center;
    padding: 32px 20px;
    min-height: 180px;
  }
  .session-expression {
    font-family: "Sora", sans-serif;
    font-size: clamp(2.2rem, 5vw, 4.8rem);
    font-weight: 900;
    color: var(--dark-blue);
    line-height: 1.1;
    overflow-wrap: anywhere;
    letter-spacing: -0.5px;
  }
  .session-sub {
    color: var(--text-light);
    font-weight: 700;
    font-size: 0.95rem;
    margin-top: 2px;
  }
  .session-vertical {
    font-family: "Sora", sans-serif;
    font-size: clamp(1.8rem, 4vw, 3.6rem);
    font-weight: 900;
    color: var(--dark-blue);
    line-height: 1.3;
    display: inline-grid;
    grid-template-columns: 1.2em auto;
    justify-items: end;
    column-gap: 0.3em;
  }
  .session-vertical .vrow-sign { justify-self: center; color: var(--primary-blue); }
  .session-vertical .vrow-value { font-variant-numeric: tabular-nums; }
  .session-vertical .vrule {
    grid-column: 1 / -1;
    width: 100%;
    height: 2.5px;
    background: var(--dark-blue);
    border-radius: 2px;
    margin: 4px 0 6px;
    opacity: 0.5;
  }
  .session-vertical .vtotal { grid-column: 1 / -1; color: var(--primary-blue); }

  /* ── Countdown ── */
  .session-countdown {
    width: min(100%, 400px);
    display: grid;
    justify-items: center;
    gap: 14px;
  }
  .countdown-ring {
    width: 110px;
    height: 110px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    background:
      radial-gradient(circle, white 54%, transparent 55%),
      conic-gradient(var(--primary-blue), var(--gold), var(--primary-blue));
    box-shadow: 0 12px 28px color-mix(in srgb, var(--primary-blue) 20%, transparent);
    animation: countdownPulse 0.9s ease-in-out infinite;
  }
  .countdown-ring strong {
    font-family: "Sora", sans-serif;
    font-size: 3rem;
    color: var(--primary-blue);
    line-height: 1;
  }
  .countdown-title {
    font-family: "Sora", sans-serif;
    color: var(--dark-blue);
    font-size: clamp(1.4rem, 4vw, 2rem);
    font-weight: 900;
  }
  .countdown-copy { color: var(--text-light); font-weight: 750; font-size: 0.9rem; }
  @keyframes countdownPulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
  @keyframes flashNumSlide {
    0%   { transform: translateX(70px) scale(0.65); opacity: 0; }
    100% { transform: translateX(0)    scale(1);    opacity: 1; }
  }
  @keyframes flashNumAccent {
    0%   { color: var(--accent); }
    60%  { color: var(--accent); }
    100% { color: inherit; }
  }
  @keyframes flashNumReveal {
    0%   { transform: scale(0.5); opacity: 0; }
    60%  { transform: scale(1.1); opacity: 1; }
    100% { transform: scale(1);   opacity: 1; }
  }
  /* Entry snaps in 0.28s, then HOLDS at full opacity for the rest of the teacher-set interval */
  .animate-flash-num {
    display: inline-block;
    animation:
      flashNumSlide 0.28s cubic-bezier(0.34,1.56,0.64,1) forwards,
      flashNumAccent 0.9s ease forwards;
  }
  .animate-flash-reveal {
    display: inline-block;
    animation: flashNumReveal 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards;
  }

  /* ── Voice dots ── */
  @keyframes voicePulse {
    0%, 100% { transform: scale(1.4); box-shadow: 0 0 0 0 color-mix(in srgb, var(--accent) 60%, transparent); }
    50% { transform: scale(1.7); box-shadow: 0 0 0 6px color-mix(in srgb, var(--accent) 0%, transparent); }
  }
  .voice-dots {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    margin: 16px 0 8px;
  }
  .voice-dot {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: color-mix(in srgb, var(--accent) 25%, transparent);
    border: 2px solid color-mix(in srgb, var(--accent) 40%, transparent);
    transition: background 0.2s, border-color 0.2s;
  }
  .voice-dot.done {
    background: color-mix(in srgb, var(--accent) 55%, transparent);
    border-color: color-mix(in srgb, var(--accent) 55%, transparent);
  }
  .voice-dot.active {
    background: var(--accent);
    border-color: var(--accent);
    animation: voicePulse 0.7s ease-in-out infinite;
  }
  .voice-label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--accent);
    letter-spacing: 0.03em;
    min-height: 1.2em;
  }

  /* ── Feedback ── */
  .feedback-pop {
    min-height: 48px;
    margin: 4px 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .feedback-bubble {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 18px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    font-family: "Sora", sans-serif;
    font-weight: 800;
    font-size: 0.92rem;
    animation: feedbackPop 0.22s ease-out;
  }
  .feedback-bubble.correct {
    color: var(--ok);
    background: var(--ok-lt);
    border-color: color-mix(in srgb, var(--ok) 28%, transparent);
  }
  .feedback-bubble.wrong {
    color: #9a3412;
    background: #fff7ed;
    border-color: #fcd9a8;
  }
  .feedback-character {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.65);
    font-size: 0.9rem;
  }
  @keyframes feedbackPop {
    from { transform: scale(0.88) translateY(6px); opacity: 0; }
    to { transform: scale(1) translateY(0); opacity: 1; }
  }

  /* ── MCQ answer grid ── */
  .session-answer-area { margin-top: 4px; }

  /* ── Typed-answer input mode ── */
  .typed-answer-wrap { display: flex; flex-direction: column; gap: 8px; }
  .typed-answer-row { display: flex; align-items: stretch; gap: 10px; }
  .typed-answer-input {
    flex: 1;
    min-width: 0;
    padding: 14px 18px;
    border-radius: 12px;
    border: 1.5px solid var(--border);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--dark-blue);
    outline: none;
    background: white;
    transition: border-color 0.15s, box-shadow 0.15s;
  }
  .typed-answer-input:focus {
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--primary-blue) 12%, transparent);
  }
  .typed-answer-input:disabled { background: #f8fafc; color: var(--text-light); }
  .typed-answer-submit {
    flex-shrink: 0;
    border: none;
    border-radius: 12px;
    padding: 0 22px;
    background: var(--dark-blue);
    color: white;
    font-size: 0.85rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
    transition: background 0.15s, transform 0.1s;
    white-space: nowrap;
  }
  .typed-answer-submit:hover:not(:disabled) { background: var(--primary-blue); }
  .typed-answer-submit:active:not(:disabled) { transform: scale(0.97); }
  .typed-answer-submit:disabled { opacity: 0.45; cursor: not-allowed; }
  .typed-answer-correct {
    font-size: 0.82rem;
    font-weight: 700;
    color: #dc2626;
    padding: 2px 4px;
  }

  /* ── Action bar (next/finish buttons) ── */
  .session-action-bar {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 16px;
    padding-top: 14px;
    border-top: 1px solid var(--border);
    flex-wrap: wrap;
  }
  .session-btn-next {
    border: none;
    border-radius: 12px;
    padding: 13px 28px;
    background: var(--dark-blue);
    color: white;
    font-family: "Sora", sans-serif;
    font-size: 0.88rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: background 0.15s, transform 0.1s, box-shadow 0.15s;
    box-shadow: 0 3px 12px rgba(0,0,0,0.15);
  }
  .session-btn-next:hover:not(:disabled) {
    background: var(--primary-blue);
    box-shadow: 0 4px 16px color-mix(in srgb, var(--primary-blue) 28%, transparent);
    transform: translateY(-1px);
  }
  .session-btn-next:active:not(:disabled) { transform: translateY(0) scale(0.98); }
  .session-btn-next:disabled { opacity: 0.5; cursor: not-allowed; }
  .session-btn-ghost {
    border: 1.5px solid var(--border);
    border-radius: 12px;
    padding: 12px 20px;
    background: transparent;
    color: var(--text-light);
    font-family: "Sora", sans-serif;
    font-size: 0.85rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.15s;
  }
  .session-btn-ghost:hover { background: var(--light-blue); color: var(--primary-blue); border-color: color-mix(in srgb, var(--primary-blue) 30%, transparent); }

  /* ── Layout toggle ── */
  .layout-toggle {
    display: inline-flex;
    gap: 3px;
    padding: 3px;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: #f8fafc;
  }
  .layout-toggle button {
    border: 0;
    background: transparent;
    color: var(--text-light);
    font-weight: 800;
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.3px;
    padding: 5px 11px;
    border-radius: 7px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: all 0.15s;
  }
  .layout-toggle button.active {
    background: white;
    color: var(--primary-blue);
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  }

  /* ── Abacus ── */
  .session-abacus { display: flex; gap: 10px; padding: 14px; border-radius: 14px; background: #f8fafc; border: 1px solid var(--border); }
  .session-col {
    width: 44px;
    min-height: 160px;
    border-radius: 12px;
    background: white;
    border: 1.5px solid color-mix(in srgb, var(--primary-blue) 14%, transparent);
    display: grid;
    grid-template-rows: 50px 1fr;
    position: relative;
    overflow: hidden;
  }
  .session-col::before {
    content: "";
    position: absolute;
    left: 0; right: 0; top: 53px;
    height: 2.5px;
    background: var(--dark-blue);
    opacity: 0.5;
  }
  .session-bead-zone { display: flex; flex-direction: column; align-items: center; gap: 7px; padding: 7px 0; }
  .session-bead {
    width: 26px;
    height: 15px;
    border-radius: 999px;
    background: color-mix(in srgb, var(--primary-blue) 12%, transparent);
    border: 1.5px solid color-mix(in srgb, var(--primary-blue) 22%, transparent);
    transition: transform .16s ease, background .16s ease;
  }
  .session-bead.active { background: linear-gradient(135deg, var(--primary-blue), var(--dark-blue)); border-color: transparent; }
  .session-bead-zone.heaven .session-bead.active { transform: translateY(22px); }

  /* ── Result (completion) ── */
  .session-result {
    text-align: center;
    font-family: "Sora", sans-serif;
    font-size: 2.2rem;
    color: var(--primary-blue);
    font-weight: 900;
    margin: 14px 0;
  }

  /* ── Review / mistake cards ── */
  .mistake-list { display: grid; gap: 10px; margin-top: 14px; }
  .mistake-card {
    border: 1px solid var(--border);
    border-radius: 12px;
    background: rgba(255,255,255,0.82);
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .mistake-card strong { color: var(--dark-blue); font-size: 0.92rem; }
  .mistake-card span { color: var(--text-light); font-weight: 800; font-size: 0.84rem; }

  /* ── Achievements ── */
  .achievement-strip { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 10px; margin-top: 14px; }
  .achievement-chip {
    border: 1px solid var(--border);
    border-radius: 12px;
    background: rgba(255,255,255,0.84);
    padding: 12px;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .achievement-chip i { width: 34px; height: 34px; border-radius: 10px; display: grid; place-items: center; color: white; flex-shrink: 0; }
  .achievement-chip strong { display: block; color: var(--dark-blue); font-size: 0.86rem; }
  .achievement-chip span { color: var(--text-light); font-size: 0.72rem; font-weight: 800; }

  /* ── Ready screen ── */
  .session-ready {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
    gap: 16px;
    align-items: stretch;
  }
  .ready-panel, .journey-panel {
    border: 1px solid var(--border);
    background: rgba(255,255,255,0.88);
    border-radius: 18px;
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
    padding: 28px;
  }
  .ready-panel {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 20px;
    background:
      radial-gradient(circle at 14% 16%, color-mix(in srgb, var(--gold) 20%, transparent), transparent 28%),
      linear-gradient(135deg, rgba(255,255,255,0.96), color-mix(in srgb, var(--primary-blue) 6%, white));
  }
  .ready-kicker {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    width: fit-content;
    border-radius: 999px;
    padding: 7px 14px;
    background: var(--light-blue);
    color: var(--primary-blue);
    font-family: "Sora", sans-serif;
    font-size: 0.75rem;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .ready-title {
    font-family: "Sora", sans-serif;
    font-size: clamp(2rem, 4vw, 3.4rem);
    line-height: 1.05;
    color: var(--dark-blue);
    margin: 0;
  }
  .ready-copy { color: var(--text-light); font-size: 1rem; font-weight: 750; margin: 0; }
  .ready-stats { display: flex; gap: 10px; flex-wrap: wrap; }
  .ready-stat {
    border: 1px solid var(--border);
    background: white;
    border-radius: 12px;
    padding: 11px 14px;
    min-width: 108px;
  }
  .ready-stat strong { display: block; color: var(--dark-blue); font-family: "Sora", sans-serif; font-size: 1.1rem; }
  .ready-stat span { color: var(--text-light); font-size: 0.74rem; font-weight: 850; }
  .journey-panel h2 { font-family: "Sora", sans-serif; color: var(--dark-blue); font-size: 1.1rem; margin: 0 0 14px; }
  .journey-list { display: grid; gap: 8px; }
  .journey-card {
    border: 1px solid var(--border);
    background: white;
    border-radius: 12px;
    padding: 11px 12px;
    display: flex;
    gap: 11px;
    align-items: center;
  }
  .journey-card i { width: 36px; height: 36px; border-radius: 10px; display: grid; place-items: center; background: var(--light-blue); color: var(--primary-blue); flex-shrink: 0; font-size: 0.85rem; }
  .journey-card strong { display: block; color: var(--dark-blue); font-family: "Sora", sans-serif; font-size: 0.86rem; }
  .journey-card span { display: block; color: var(--text-light); font-size: 0.75rem; font-weight: 800; }

  /* ── MCQ buttons ── */
  .mcq-btn {
    position: relative;
    padding-left: 50px !important;
    text-align: left;
    border-radius: 12px !important;
  }
  .mcq-key-hint {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 22px;
    height: 22px;
    background: #f1f5f9;
    color: #64748b;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    font-size: 0.72rem;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .mcq-btn.correct .mcq-key-hint,
  .mcq-btn.wrong .mcq-key-hint {
    background: rgba(255,255,255,0.25);
    color: white;
    border-color: rgba(255,255,255,0.4);
  }

  /* ── Responsive: tablet ── */
  @media (max-width: 900px) {
    .session-grid { grid-template-columns: 220px 1fr; }
    .playing-active .session-grid { grid-template-columns: 1fr; }
    .session-ready { grid-template-columns: 1fr; }
    .session-hero { padding: 22px 20px; }
  }
  /* ── Responsive: mobile ── */
  @media (max-width: 640px) {
    body .app-layout .main-content .page-wrap.session-page-wrap { padding-top: calc(var(--nav-h) + 6px) !important; }
    .session-shell { padding: 0 12px 24px; }
    .session-hero { margin-top: 0 !important; }
    .session-hero { flex-direction: column; align-items: flex-start; gap: 8px; padding: 16px 14px; border-radius: 14px; }
    .playing-active .session-hero { flex-direction: row; align-items: center; padding: 10px 14px; }
    .playing-active .session-hero p { display: none; }
    .session-grid { grid-template-columns: 1fr; }
    .playing-active .session-grid { grid-template-columns: 1fr; }
    .playing-active .mode-list { display: none; }
    .session-card { padding: 14px; border-radius: 14px; min-height: unset; }
    .session-stage { padding: 20px 10px; min-height: 150px; }
    .session-expression { font-size: clamp(1.8rem, 9vw, 3rem); }
    .session-vertical { font-size: clamp(1.6rem, 8vw, 2.6rem); }
    .session-game-header { gap: 6px; flex-wrap: nowrap; overflow: hidden; }
    .session-mode-pill { font-size: 0.75rem; padding: 5px 10px; white-space: nowrap; }
    .session-q-counter { font-size: 0.75rem; white-space: nowrap; }
    .session-score-chip { font-size: 0.75rem; padding: 5px 10px; white-space: nowrap; flex-shrink: 0; }
    /* Hide inline layout-toggle in header; we show it in the sub-bar instead */
    .layout-toggle-inline { display: none; }
    .typed-answer-row { gap: 8px; }
    .typed-answer-input { font-size: 1rem; padding: 12px 14px; }
    .typed-answer-submit { padding: 0 16px; font-size: 0.8rem; min-height: 46px; }
    .session-action-bar { padding-top: 10px; margin-top: 10px; }
    .session-btn-next { width: 100%; justify-content: center; padding: 14px 20px; }
    .session-btn-ghost { width: 100%; justify-content: center; }
    .ready-panel { padding: 20px 16px; }
    .journey-panel { display: none; }
    .session-ready { grid-template-columns: 1fr; }

    /* ── Mobile mode strip ── */
    .mobile-sub-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 12px;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 14px;
      padding: 8px 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    }
    .mobile-mode-strip {
      display: flex;
      overflow-x: auto;
      gap: 4px;
      flex: 1;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
    }
    .mobile-mode-strip::-webkit-scrollbar { display: none; }
    .mobile-mode-dot {
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2px;
      cursor: pointer;
      padding: 5px 8px;
      border-radius: 8px;
      border: 1px solid transparent;
      transition: all 0.18s;
    }
    .mobile-mode-dot i { font-size: 1rem; color: var(--text-light); }
    .mobile-mode-dot span { font-size: 0.58rem; font-weight: 700; color: var(--text-light); }
    .mobile-mode-dot.active {
      background: color-mix(in srgb, var(--accent) 12%, transparent);
      border-color: color-mix(in srgb, var(--accent) 35%, transparent);
    }
    .mobile-mode-dot.active i,
    .mobile-mode-dot.active span { color: var(--accent); }
    .mobile-mode-dot.done i,
    .mobile-mode-dot.done span { color: var(--ok); opacity: 0.75; }
    /* H/V toggle — clear segmented button pair */
    .mobile-layout-toggle {
      display: flex;
      flex-shrink: 0;
      margin-left: 6px;
      border: 1.5px solid var(--border);
      border-radius: 10px;
      overflow: hidden;
      background: #f1f5f9;
    }
    .mobile-layout-toggle button {
      border: 0;
      background: transparent;
      color: var(--text-light);
      font-size: 0.72rem;
      font-weight: 800;
      padding: 7px 11px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 4px;
      line-height: 1;
      transition: all 0.15s;
      white-space: nowrap;
    }
    .mobile-layout-toggle button:first-child {
      border-right: 1.5px solid var(--border);
    }
    .mobile-layout-toggle button.active {
      background: var(--primary-blue);
      color: #fff;
    }
    .mobile-layout-toggle button:not(.active):hover {
      background: #e2e8f0;
      color: var(--dark-blue);
    }
  }
`,he=[`Warm Up`,`Brain Builder`,`Speed Round`,`Focus Finish`,`Missing Link`,`Compare Clash`];function ge(){return new Date().toLocaleDateString(`en-CA`)}function _e(e,t=.8,n=null){if(!(`speechSynthesis`in window))return!1;window.speechSynthesis.cancel();let r=e.map((e,t)=>t===0?String(e):e<0?`minus ${Math.abs(e)}`:`plus ${e}`),i=0;function a(){if(i>=r.length){n?.(-1);return}n?.(i);let e=new SpeechSynthesisUtterance(r[i]);e.rate=t,e.onend=()=>{i++,setTimeout(a,500)},window.speechSynthesis.speak(e)}return a(),!0}function ve(e){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let n=new t,r=n.createGain();r.connect(n.destination),r.gain.setValueAtTime(1e-4,n.currentTime),r.gain.exponentialRampToValueAtTime(.14,n.currentTime+.02),r.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.35),(e===`correct`?[523.25,659.25,783.99]:[196,164.81]).forEach((t,i)=>{let a=n.createOscillator();a.type=e===`correct`?`sine`:`triangle`,a.frequency.value=t,a.connect(r);let o=n.currentTime+i*.09;a.start(o),a.stop(o+.12)}),setTimeout(()=>n.close(),500)}function ye(){`vibrate`in navigator&&navigator.vibrate([80,40,80])}function be({value:e}){return(0,g.jsx)(`div`,{className:`session-abacus`,children:String(e).padStart(2,`0`).split(``).map(Number).map((e,t)=>{let n=e>=5,r=e%5;return(0,g.jsxs)(`div`,{className:`session-col`,children:[(0,g.jsx)(`div`,{className:`session-bead-zone heaven`,children:(0,g.jsx)(`span`,{className:`session-bead ${n?`active`:``}`})}),(0,g.jsx)(`div`,{className:`session-bead-zone`,children:[1,2,3,4].map(e=>(0,g.jsx)(`span`,{className:`session-bead ${r>=e?`active`:``}`},e))})]},`${e}-${t}`)})})}var xe=new Set([`full`,`longSum`,`addSub`,`decimalAddSub`,`negative`]),Se=`practice_question_layout`;function Ce({numbers:e}){return(0,g.jsxs)(`div`,{className:`session-vertical`,children:[e.map((e,t)=>(0,g.jsxs)(`span`,{style:{display:`contents`},children:[(0,g.jsx)(`span`,{className:`vrow-sign`,children:t===0?``:e<0?`-`:`+`}),(0,g.jsx)(`span`,{className:`vrow-value`,children:f(t===0?e:Math.abs(e))})]},`${e}-${t}`)),(0,g.jsx)(`span`,{className:`vrule`}),(0,g.jsx)(`span`,{className:`vtotal`,children:`?`})]})}var we=new Set([`full`,`longSum`,`flash`,`voice`,`addSub`,`missing`,`compare`,`abacus`]);function _(e){return e?{min:e<=1?1:10**(e-1),max:10**e-1}:null}function Te(e){let t=e.trim().startsWith(`-`),[n,...r]=e.replace(/[^0-9.]/g,``).split(`.`),i=r.length?`.${r.join(``)}`:``;return`${t?`-`:``}${n}${i}`}function v(e){let t=String(e??``).trim().toLowerCase();return t&&/^-?\d*\.?\d+$/.test(t)?String(Number(t)):t}function Ee(e,t){if(!e||!(e.rows!=null||e.digits!=null||e.digits2!=null||e.decimals!=null||e.rule!=null||e.flashSpeed!=null||e.voiceRate!=null))return{};let n=l(t),r=_(e.digits),i=_(e.digits2),a={};if(e.rule&&(a.rules={...n.rules||{},rule:e.rule}),e.flashSpeed!=null&&(a.flashSpeed=e.flashSpeed),we.has(e.mode)){let t=n.additionConfigs&&n.additionConfigs[0]||n.number||{min:1,max:9,count:3},i={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count};a.additionConfigs=[i],a.number={...i}}else if(e.mode===`multiply`){let e=n.multiply||{};a.multiply={aMin:r?r.min:e.aMin,aMax:r?r.max:e.aMax,bMin:i?i.min:e.bMin,bMax:i?i.max:e.bMax}}else if(e.mode===`division`){let e=n.division||{};a.division={quotientMin:r?r.min:e.quotientMin,quotientMax:r?r.max:e.quotientMax,divisorMin:i?i.min:e.divisorMin,divisorMax:i?i.max:e.divisorMax}}else if(e.mode===`decimalAddSub`){let t=n.number||{min:10,max:99,count:3};a.number={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count},e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals,addDivisor:10**e.decimals})}else if(e.mode===`negative`){let t=n.negative||{};a.negative={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count}}else if(e.mode===`percentage`){let e=n.percentage||{};a.percentage={...e,baseMin:r?r.min:e.baseMin,baseMax:r?r.max:e.baseMax}}else (e.mode===`decimalMultiply`||e.mode===`decimalDivision`)&&e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals});return Object.keys(a).length===0?{}:{[t]:a}}var De=[20,20,20,20,10,10];function Oe(e,t){let n=l(e).modes,i=n.slice(-3).reverse(),a=n.slice(0,-3),o=a.length?r(`${t}-${e}-fallback`)%a.length:0,s=a.map((e,t)=>a[(o+t)%a.length]),c=[...i];for(let e of s){if(c.length>=De.length)break;c.includes(e)||c.push(e)}return c.map((e,t)=>({mode:e,questions:De[t]??4}))}var ke=10;function Ae(e,t,{vedicTopics:n,activeSubjects:i}){if(!ue(`vedic`,i))return null;let a=fe(o.map(e=>e.name),n);if(!a&&!l(e).modes.includes(`multiply`))return null;let s=o.filter(t=>{let n=pe(t.name,e,a);return n.taught&&!n.locked});return s.length?`${p}${s[r(`${t}-${e}-vedic`)%s.length].id}`:null}function je(){let{profile:e,user:r,institute:o,membership:u}=ne(),p=i(e?.current_level),m=ge(),[ue,fe]=(0,h.useState)(null),{ready:pe,vedicTopics:we,activeSubjects:_}=s(),[De,je]=(0,h.useState)(!0),[y,Me]=(0,h.useState)(`mcq`),[b,Ne]=(0,h.useState)(``),Pe=(0,h.useRef)(null),Fe=(0,h.useRef)(null),x=(0,h.useMemo)(()=>{let e=ue;if(!e){e=Oe(p,m);let t=pe?Ae(p,m,{vedicTopics:we,activeSubjects:_}):null;t&&(e=[...e,{mode:t,questions:ke}])}let n=e.filter(e=>t(e.mode,p));return n.length?n:l(p).modes.slice(0,4).map(e=>({mode:e,questions:4}))},[ue,p,m,pe,we,_]),S=(0,h.useMemo)(()=>x.map(e=>e.mode),[x]),C=e=>Number(x[e]?.questions)||4,w=`practice_session_${r?.id||`guest`}_${m}_level_${p}`,Ie=`practice_report_${r?.id||`guest`}_${m}_level_${p}`,Le=`practice_draft_${r?.id||`guest`}_level_${p}`,[T,Re]=(0,h.useState)(()=>localStorage.getItem(w)===`done`),[E]=(0,h.useState)(()=>{try{if(localStorage.getItem(w)===`done`)return null;let e=localStorage.getItem(Le);if(!e)return null;let t=JSON.parse(e);return t.date===m?t:null}catch{return null}}),[ze,Be]=(0,h.useState)(()=>{try{let e=localStorage.getItem(Ie);return e?JSON.parse(e):null}catch{return null}}),[D,Ve]=(0,h.useState)(`daily`),[O,He]=(0,h.useState)(()=>{let e=E?.modeIndex??0;return x.length>0?Math.min(e,x.length-1):0}),[k,Ue]=(0,h.useState)(E?.questionIndex??0),[A,We]=(0,h.useState)(null),[j,M]=(0,h.useState)(null),[N,Ge]=(0,h.useState)(E?.score??0),[P,F]=(0,h.useState)(!1);re(`daily-practice`,P);let[I,Ke]=(0,h.useState)(0),[qe,Je]=(0,h.useState)(1500),[Ye,Xe]=(0,h.useState)(.8),[L,R]=(0,h.useState)(-1),[z,Ze]=(0,h.useState)(E?.mistakes??[]),[Qe,$e]=(0,h.useState)(E?.answers??[]),[B,et]=(0,h.useState)(E?.completedModes??[]),[tt,nt]=(0,h.useState)(0),[V,rt]=(0,h.useState)(E?.maxCorrectStreak??0),[it,at]=(0,h.useState)(!!E),[ot,st]=(0,h.useState)([]),[H,ct]=(0,h.useState)(!1),[U,W]=(0,h.useState)(!1),[G,K]=(0,h.useState)(null),[q,lt]=(0,h.useState)(null),[J,ut]=(0,h.useState)(()=>localStorage.getItem(Se)||`horizontal`);(0,h.useEffect)(()=>{y===`input`&&A&&j===null&&Fe.current?.focus()},[A,y,j]),(0,h.useEffect)(()=>{if(j===null||U||T)return;let e=setTimeout(()=>bt(),750);return()=>clearTimeout(e)},[j,U,T]),(0,h.useEffect)(()=>{if(!(!P||T||U||D!==`daily`))try{localStorage.setItem(Le,JSON.stringify({date:m,modeIndex:O,questionIndex:k,score:N,mistakes:z,answers:Qe,completedModes:B,maxCorrectStreak:V}))}catch{}},[O,k,N,z,Qe,B,V]);function Y(e){ut(e),localStorage.setItem(Se,e)}let X=S[O],Z=(0,h.useMemo)(()=>x.reduce((e,t)=>e+(Number(t.questions)||4),0),[x]),dt=(0,h.useMemo)(()=>{let e=0;return x.forEach((t,n)=>{let r=Number(t.questions)||4;n<O?e+=r:n===O&&(e+=k)}),e},[x,O,k]);(0,h.useEffect)(()=>{let e=!1;async function t(){if(!o?.id)return;let{data:t}=await ie(o.id);if(e||!t)return;je(t.enabled??!0),Me(t.answer_mode||`mcq`);let n=t.journey?.[p]||t.journey?.[String(p)];Array.isArray(n)&&n.length&&fe(n.map(e=>({mode:e.mode,questions:Number(e.questions)||4,rows:e.rows,digits:e.digits,digits2:e.digits2,decimals:e.decimals,rule:e.rule,flashSpeed:e.flashSpeed,voiceRate:e.voiceRate})))}return t(),()=>{e=!0}},[o?.id,p]);let ft=e?.full_name?.split(` `)?.[0]||e?.name?.split(` `)?.[0]||r?.email?.split(`@`)?.[0]||`champ`,pt=D===`daily`&&(P||U)&&!T;(0,h.useEffect)(()=>(document.body.classList.toggle(`practice-session-focus`,pt),()=>document.body.classList.remove(`practice-session-focus`)),[pt]),(0,h.useEffect)(()=>{if(q===null)return;let e=setTimeout(()=>{if(q>1){lt(e=>e-1);return}lt(null),Q(x[O])},900);return()=>clearTimeout(e)},[x,O,q]),(0,h.useEffect)(()=>{function e(e){if(!(document.activeElement.tagName===`INPUT`||document.activeElement.tagName===`TEXTAREA`)){if(!T&&P&&A&&j===null&&y!==`input`&&[`1`,`2`,`3`,`4`].includes(e.key)){let t=Number(e.key)-1;A.options&&A.options[t]!==void 0&&gt(A.options[t])}e.key===`Enter`&&(!P&&!U&&!T?ht():P&&j!==null&&!H?bt():U&&!H&&xt())}}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[T,P,A,j,H,U,k,O,X,y]);function Q(e){let t=typeof e==`string`?e:e?.mode,n=typeof e==`string`?{}:Ee(e,p),r=ee(t,p,n);if(We(r),M(null),Ne(``),K(null),Ke(0),F(!0),t===`voice`){let t=typeof e!=`string`&&e?.voiceRate||.8;Xe(t),R(-1),_e(r.numbers,t,e=>R(e))}if(t===`flash`){let e=l(p,n).flashSpeed;Je(e),r.numbers.forEach((t,n)=>setTimeout(()=>Ke(n),n*e)),setTimeout(()=>Ke(r.numbers.length),r.numbers.length*e)}}function mt(){Q(x[O])}function $(e){if(!T){if(e===S.length){W(!0),F(!1),We(null),M(null),K(null);return}W(!1),He(e),Ue(0),M(null),K(null),Q(x[e])}}async function ht(){Pe.current=Date.now(),F(!0),We(null),M(null),K(null),E?Q(x[O]):lt(3),yt(`session_start`,X).catch(e=>{console.warn(`Practice start saved locally but not submitted:`,e)})}function gt(e){if(j!==null)return;let t=v(e)===v(A.answer),n={mode:A.mode,modeLabel:d[A.mode]?.label||A.mode,question:St(A),numbers:A.numbers,selectedAnswer:e,correctAnswer:A.answer,isCorrect:t,answeredAt:new Date().toISOString()};M(e),$e(e=>[...e,n]),t?(ve(`correct`),K({type:`correct`,text:`Great job`}),Ge(e=>e+1),nt(e=>{let t=e+1;return rt(e=>Math.max(e,t)),t})):(ve(`wrong`),ye(),K({type:`wrong`,text:`Good try. The answer was ${A.answer}.`}),Ze(t=>[...t,{...A,selectedAnswer:e,modeLabel:d[A.mode]?.label||A.mode}]),nt(0))}function _t({nextAnswers:e=Qe,nextMistakes:t=z,nextCompletedModes:n=B,status:r=`in_progress`,achievements:i=ot}={}){let a=e.filter(e=>e.isCorrect).length,s=e.reduce((e,t)=>(e[t.mode]=e[t.mode]||{label:t.modeLabel,correct:0,wrong:0},e[t.mode][t.isCorrect?`correct`:`wrong`]+=1,e),{}),c=Pe.current?Math.round((Date.now()-Pe.current)/1e3):0;return{institute_id:o?.id,student_membership_id:u?.id,level:p,session_date:m,mode_rotation:S,completed_modes:n,total_questions:Z,total_time_seconds:c,answered_count:e.length,correct_count:a,wrong_count:e.length-a,max_correct_streak:V,question_type_summary:s,answers:e,mistakes:t,earned_achievements:i.map(e=>({code:e.code,name:e.name,type:e.type})),status:r,completed_at:r===`completed`?new Date().toISOString():null,updated_at:new Date().toISOString()}}function vt(e,t,n){let i=`practice_report_${r?.id||`guest`}_${m}_level_${p}`;localStorage.setItem(i,JSON.stringify(e));let a=`${i}_events`,o=JSON.parse(localStorage.getItem(a)||`[]`);o.push({eventType:t,mode:n,payload:e,createdAt:new Date().toISOString()}),localStorage.setItem(a,JSON.stringify(o))}async function yt(e,t,r={}){let i=_t(r);if(vt(i,e,t),!i.institute_id||!i.student_membership_id)return;ct(!0);let{data:a,error:o}=await n(i);o?console.warn(`Practice report saved locally but not submitted:`,o):await le({institute_id:i.institute_id,student_membership_id:i.student_membership_id,attempt_id:a?.id,level:p,session_date:m,event_type:e,mode:t,payload:i}),ct(!1)}async function bt(){let e=C(O);if(k+1<e){Ue(e=>e+1),setTimeout(()=>Q(x[O]),0);return}let t=[...new Set([...B,X])];if(et(t),await yt(`mode_complete`,X,{nextCompletedModes:t}),O+1<S.length){let e=x[O+1];He(e=>e+1),Ue(0),setTimeout(()=>Q(e),0);return}W(!0),F(!1)}async function xt(){let e=[...new Set([...B,X])],t=a({score:N,totalQuestions:Z,maxCorrectStreak:V,mistakes:z,completedModes:e});st(t),localStorage.setItem(w,`done`),localStorage.setItem(`${w}_achievements`,JSON.stringify(t)),localStorage.removeItem(Le);let n={nextCompletedModes:e,status:`completed`,achievements:t};Be(_t(n)),ae(`daily-practice`,{score:N,total:Z}),await yt(`session_complete`,`review`,n),o?.id&&u?.id&&await Promise.all(t.map(e=>ce({institute_id:o.id,student_membership_id:u.id,achievement_code:e.code,achievement_name:e.name,achievement_type:e.type,description:e.description,metadata:{level:p,session_date:m,score:N,total_questions:Z,max_correct_streak:V}}))),Re(!0),W(!1)}function St(e){return se(e.mode)?e.prompt:e.mode===`abacus`?`Abacus number: ${e.answer}`:e.mode===`missing`?`${e.numbers[0]} + ? + ${e.numbers[2]} = ${e.numbers[3]}`:e.mode===`compare`?`1: ${e.numbers.slice(0,3).join(` + `)} | 2: ${e.numbers.slice(4,7).join(` + `)}`:[`table`,`multiply`,`decimalMultiply`].includes(e.mode)?`${f(e.numbers[0])} x ${f(e.numbers[1])}`:[`division`,`decimalDivision`].includes(e.mode)?`${f(e.numbers[0])} / ${f(e.numbers[1])}`:e.mode===`percentage`?`${e.numbers[0]}% of ${e.numbers[1]}`:e.mode===`square`?`${e.numbers[0]} squared`:e.mode===`squareRoot`?`square root of ${e.numbers[0]}`:e.mode===`cube`?`${e.numbers[0]} cubed`:e.mode===`cubeRoot`?`cube root of ${e.numbers[0]}`:c(e.numbers)}function Ct(){if(q!==null)return(0,g.jsxs)(`div`,{className:`session-countdown`,children:[(0,g.jsx)(`div`,{className:`countdown-ring`,children:(0,g.jsx)(`strong`,{children:q})}),(0,g.jsx)(`div`,{className:`countdown-title`,children:`Get ready`}),(0,g.jsx)(`div`,{className:`countdown-copy`,children:`Look at the first challenge calmly, then choose your answer.`})]});if(!A)return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:`session-expression`,children:(0,g.jsx)(`i`,{className:`fa-solid ${d[X]?.icon??`fa-star`}`})}),(0,g.jsx)(`div`,{className:`session-sub`,children:`Start today's session.`})]});if(se(X))return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:`session-expression`,children:A.prompt}),(0,g.jsx)(`div`,{className:`session-sub`,children:d[X]?.label})]});if(X===`abacus`)return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(be,{value:A.answer}),(0,g.jsx)(`div`,{className:`session-sub`,children:A.prompt})]});if(X===`voice`){let e=A?.numbers?.length||0;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:`session-expression`,children:(0,g.jsx)(`i`,{className:`fa-solid fa-volume-high`})}),(0,g.jsx)(`div`,{className:`voice-dots`,children:A?.numbers?.map((e,t)=>(0,g.jsx)(`span`,{className:`voice-dot${L===t?` active`:L>t?` done`:``}`},t))}),(0,g.jsx)(`div`,{className:`voice-label`,children:L>=0&&L<e?`Number ${L+1} of ${e}`:`Listen and add up the numbers`})]})}if(X===`flash`){let e=I>=A.numbers.length;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:`session-expression ${e?`animate-flash-reveal`:`animate-flash-num`}`,children:e?`?`:A.numbers[I]},I),(0,g.jsx)(`div`,{className:`session-sub`,children:e?`Select the correct sum`:`Number ${I+1} of ${A.numbers.length}`})]})}return xe.has(X)?(0,g.jsxs)(g.Fragment,{children:[J===`vertical`?(0,g.jsx)(Ce,{numbers:A.numbers}):(0,g.jsx)(`div`,{className:`session-expression`,children:c(A.numbers)}),(0,g.jsx)(`div`,{className:`session-sub`,children:A.prompt})]}):X===`missing`?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`session-expression`,children:[A.numbers[0],` + ? + `,A.numbers[2],` = `,A.numbers[3]]}),(0,g.jsx)(`div`,{className:`session-sub`,children:A.prompt})]}):X===`compare`?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`session-expression`,children:[`1: `,A.numbers.slice(0,3).join(` + `),(0,g.jsx)(`br`,{}),`2: `,A.numbers.slice(4,7).join(` + `)]}),(0,g.jsx)(`div`,{className:`session-sub`,children:A.prompt})]}):X===`table`||X===`multiply`||X===`decimalMultiply`?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`session-expression`,children:[f(A.numbers[0]),` x `,f(A.numbers[1])]}),(0,g.jsx)(`div`,{className:`session-sub`,children:A.prompt})]}):X===`division`||X===`decimalDivision`?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`session-expression`,children:[f(A.numbers[0]),` / `,f(A.numbers[1])]}),(0,g.jsx)(`div`,{className:`session-sub`,children:A.prompt})]}):X===`percentage`?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`session-expression`,children:[f(A.numbers[0]),`% of `,f(A.numbers[1])]}),(0,g.jsx)(`div`,{className:`session-sub`,children:A.prompt})]}):X===`square`?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`session-expression`,children:[A.numbers[0],`^2`]}),(0,g.jsx)(`div`,{className:`session-sub`,children:A.prompt})]}):X===`squareRoot`?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`session-expression`,children:[`sqrt(`,A.numbers[0],`)`]}),(0,g.jsx)(`div`,{className:`session-sub`,children:A.prompt})]}):X===`cube`?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`session-expression`,children:[A.numbers[0],`^3`]}),(0,g.jsx)(`div`,{className:`session-sub`,children:A.prompt})]}):X===`cubeRoot`?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`session-expression`,children:[`cuberoot(`,A.numbers[0],`)`]}),(0,g.jsx)(`div`,{className:`session-sub`,children:A.prompt})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`div`,{className:`session-expression`,children:c(A.numbers)}),(0,g.jsx)(`div`,{className:`session-sub`,children:A.prompt})]})}return(0,g.jsxs)(`div`,{className:`page-wrap session-page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:[(0,g.jsx)(`style`,{children:me}),(0,g.jsx)(te,{}),(0,g.jsxs)(`div`,{className:`session-shell ${(P||U)&&!T?`playing-active`:``}`,children:[(0,g.jsxs)(`div`,{className:`session-hero`,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h1`,{children:D===`flash`?`Mental Flash Training`:`Daily Session`}),(0,g.jsx)(`p`,{children:D===`flash`?`Customize and play infinite rounds of listening, abacus visualization, and speed flashes.`:`Four quick challenge cards, then one mistake review card to help you level up.`})]}),(0,g.jsx)(oe,{variant:`practice-banner`,size:260}),(0,g.jsx)(`div`,{className:`session-pill`,children:D===`flash`?`Free Training`:`Level ${p} | ${m}`})]}),!P&&!U&&(0,g.jsx)(`div`,{className:`session-tabs`,children:(0,g.jsxs)(`button`,{className:`session-tab-btn ${D===`daily`?`active`:``}`,onClick:()=>Ve(`daily`),children:[(0,g.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),` Daily Session`,!T&&(0,g.jsx)(`span`,{style:{display:`inline-block`,width:`8px`,height:`8px`,borderRadius:`50%`,background:`#f59e0b`,boxShadow:`0 0 8px #f59e0b`,marginLeft:`6px`,verticalAlign:`middle`},title:`Pending for today`})]})}),D===`flash`&&!P?(0,g.jsx)(de,{isNested:!0}):D===`daily`&&!P&&!U&&!T?De?(0,g.jsxs)(`div`,{className:`session-ready`,children:[(0,g.jsxs)(`section`,{className:`ready-panel`,children:[(0,g.jsxs)(`div`,{className:`ready-kicker`,children:[(0,g.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),`Daily Session`]}),(0,g.jsxs)(`h2`,{className:`ready-title`,children:[`Ready, `,ft,`?`]}),(0,g.jsx)(`p`,{className:`ready-copy`,children:`Today has a short practice journey. Start when you are ready, then the page will become quiet so you can focus.`}),(0,g.jsxs)(`div`,{className:`ready-stats`,children:[(0,g.jsxs)(`div`,{className:`ready-stat`,children:[(0,g.jsx)(`strong`,{children:S.length}),(0,g.jsx)(`span`,{children:`practice stops`})]}),(0,g.jsxs)(`div`,{className:`ready-stat`,children:[(0,g.jsx)(`strong`,{children:Z}),(0,g.jsx)(`span`,{children:`questions today`})]}),(0,g.jsxs)(`div`,{className:`ready-stat`,children:[(0,g.jsxs)(`strong`,{children:[`Level `,p]}),(0,g.jsx)(`span`,{children:`current level`})]})]}),E?(0,g.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,background:`color-mix(in srgb, var(--accent) 10%, transparent)`,border:`1px solid color-mix(in srgb, var(--accent) 25%, transparent)`,borderRadius:10,padding:`8px 14px`,marginBottom:12,fontSize:`0.82rem`,fontWeight:700,color:`var(--accent)`},children:[(0,g.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),`Session in progress — `,E.score,` correct, on step `,E.modeIndex+1,` of `,S.length]}):null,(0,g.jsx)(`div`,{children:(0,g.jsx)(`button`,{className:`session-btn-next`,onClick:ht,disabled:H,children:H?`Getting Ready…`:E?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),` Resume Session`]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`i`,{className:`fa-solid fa-play`}),` Start Today's Practice`]})})})]}),(0,g.jsxs)(`aside`,{className:`journey-panel`,children:[(0,g.jsx)(`h2`,{children:`Today's journey`}),(0,g.jsxs)(`div`,{className:`journey-list`,children:[S.map((e,t)=>(0,g.jsxs)(`div`,{className:`journey-card`,children:[(0,g.jsx)(`i`,{className:`fa-solid ${d[e]?.icon??`fa-star`}`}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`strong`,{children:he[t]||`Step ${t+1}`}),(0,g.jsxs)(`span`,{children:[d[e]?.label??e,` | `,C(t),` questions`]})]})]},`${e}-${t}`)),(0,g.jsxs)(`div`,{className:`journey-card`,children:[(0,g.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`strong`,{children:`Review`}),(0,g.jsx)(`span`,{children:`Check anything that needs one more look`})]})]})]})]})]}):(0,g.jsx)(`div`,{className:`session-ready`,children:(0,g.jsxs)(`section`,{className:`ready-panel`,children:[(0,g.jsxs)(`div`,{className:`ready-kicker`,children:[(0,g.jsx)(`i`,{className:`fa-solid fa-circle-info`}),`Daily Session`]}),(0,g.jsx)(`h2`,{className:`ready-title`,children:`Paused for now`}),(0,g.jsx)(`p`,{className:`ready-copy`,children:`Your institute has turned off daily practice. Please check back later or ask your teacher.`})]})}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`mobile-sub-bar`,children:[(0,g.jsxs)(`div`,{className:`mobile-mode-strip`,children:[S.map((e,t)=>(0,g.jsxs)(`div`,{className:`mobile-mode-dot${t===O&&!U?` active`:``}${t<O||B.includes(e)?` done`:``}`,onClick:()=>$(t),title:d[e]?.label??e,children:[(0,g.jsx)(`i`,{className:`fa-solid ${d[e]?.icon??`fa-star`}`}),(0,g.jsx)(`span`,{children:t+1})]},t)),(0,g.jsxs)(`div`,{className:`mobile-mode-dot${U?` active`:``}${T?` done`:``}`,onClick:()=>$(S.length),title:`Review`,children:[(0,g.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,g.jsx)(`span`,{children:`Rev`})]})]}),xe.has(X)?(0,g.jsxs)(`div`,{className:`mobile-layout-toggle`,role:`group`,"aria-label":`Question format`,children:[(0,g.jsxs)(`button`,{className:J===`horizontal`?`active`:``,onClick:()=>Y(`horizontal`),children:[(0,g.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` H`]}),(0,g.jsxs)(`button`,{className:J===`vertical`?`active`:``,onClick:()=>Y(`vertical`),children:[(0,g.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` V`]})]}):null]}),(0,g.jsxs)(`div`,{className:`session-grid`,children:[(0,g.jsxs)(`div`,{className:`mode-list`,children:[S.map((e,t)=>(0,g.jsxs)(`div`,{className:`mode-row ${t===O&&!U?`active`:``} ${t<O||T?`done`:``}`,onClick:()=>$(t),title:`${he[t]||`Step ${t+1}`} — ${d[e]?.label??e}`,children:[(0,g.jsx)(`i`,{className:`fa-solid ${d[e]?.icon??`fa-star`}`}),(0,g.jsxs)(`span`,{children:[(0,g.jsx)(`span`,{className:`journey-step`,children:he[t]||`Step ${t+1}`}),(0,g.jsxs)(`span`,{className:`journey-mode`,children:[d[e]?.label??e,` | `,C(t),` questions`]})]})]},`${e}-${t}`)),(0,g.jsxs)(`div`,{className:`mode-row review ${U?`active`:``} ${T?`done`:``}`,onClick:()=>$(S.length),title:`Review mistakes`,children:[(0,g.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,g.jsxs)(`span`,{children:[(0,g.jsx)(`span`,{className:`journey-step`,children:`Review`}),(0,g.jsxs)(`span`,{className:`journey-mode`,children:[z.length,` to check`]})]})]})]}),(0,g.jsx)(`div`,{className:`session-card`,children:T?(0,g.jsxs)(`div`,{className:`session-stage`,children:[(0,g.jsx)(`div`,{className:`session-expression`,children:(0,g.jsx)(`i`,{className:`fa-solid fa-circle-check`})}),(0,g.jsxs)(`div`,{className:`session-result`,children:[`Today's Level `,p,` session is complete`]}),(0,g.jsxs)(`div`,{className:`session-result`,style:{fontSize:`1.6rem`},children:[`Score: `,ze?.correct_count??N,`/`,ze?.total_questions??Z]}),(0,g.jsx)(`div`,{className:`session-sub`,children:`Report saved for admin and teachers. Come back tomorrow for a new rotation.`}),ot.length?(0,g.jsx)(`div`,{className:`achievement-strip`,children:ot.map(e=>(0,g.jsxs)(`div`,{className:`achievement-chip`,children:[(0,g.jsx)(`i`,{className:`fa-solid ${e.icon}`,style:{background:e.color}}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`strong`,{children:e.name}),(0,g.jsx)(`span`,{children:e.description})]})]},e.code))}):null]}):U?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`session-game-header`,children:[(0,g.jsx)(`span`,{className:`session-mode-pill`,children:`Mistake Review`}),(0,g.jsx)(`div`,{className:`session-spacer`}),(0,g.jsxs)(`span`,{className:`session-score-chip`,children:[`Score `,N,`/`,Z]})]}),(0,g.jsx)(`div`,{className:`session-prog-track`,children:(0,g.jsx)(`div`,{className:`session-prog-fill`,style:{width:`100%`}})}),(0,g.jsxs)(`div`,{className:`session-stage`,style:{alignItems:`stretch`,justifyContent:`flex-start`,paddingTop:0},children:[(0,g.jsx)(`div`,{className:`session-result`,style:{margin:`0 0 4px`,fontSize:`1.6rem`},children:z.length?`Review your misses`:`No mistakes today 🎉`}),(0,g.jsx)(`div`,{className:`session-sub`,children:z.length?`Check the correct answers before you finish.`:`Clean round! Finish and come back tomorrow.`}),z.length?(0,g.jsx)(`div`,{className:`mistake-list`,children:z.map((e,t)=>(0,g.jsxs)(`div`,{className:`mistake-card`,children:[(0,g.jsxs)(`strong`,{children:[e.modeLabel,`: `,St(e)]}),(0,g.jsxs)(`span`,{children:[`Your answer: `,e.selectedAnswer,` \xA0·\xA0 Correct: `,e.answer]})]},`${e.mode}-${t}`))}):null]}),(0,g.jsx)(`div`,{className:`session-action-bar`,children:(0,g.jsx)(`button`,{className:`session-btn-next`,onClick:xt,disabled:H,children:H?`Saving…`:(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(`i`,{className:`fa-solid fa-flag-checkered`}),` Finish Today`]})})})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:`session-game-header`,children:[(0,g.jsx)(`span`,{className:`session-mode-pill`,children:d[X]?.label??X}),(0,g.jsxs)(`span`,{className:`session-q-counter`,children:[`Q `,k+1,` / `,C(O)]}),xe.has(X)?(0,g.jsxs)(`div`,{className:`layout-toggle layout-toggle-inline`,role:`group`,"aria-label":`Question format`,children:[(0,g.jsxs)(`button`,{className:J===`horizontal`?`active`:``,onClick:()=>Y(`horizontal`),children:[(0,g.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` H`]}),(0,g.jsxs)(`button`,{className:J===`vertical`?`active`:``,onClick:()=>Y(`vertical`),children:[(0,g.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` V`]})]}):null,(0,g.jsx)(`div`,{className:`session-spacer`}),it?(0,g.jsxs)(`span`,{className:`resumed-pill`,onAnimationEnd:()=>at(!1),children:[(0,g.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),` Resumed`]}):null,(0,g.jsxs)(`span`,{className:`session-score-chip`,children:[`Score `,N,`/`,dt+(j===null?0:1)]})]}),(0,g.jsx)(`div`,{className:`session-prog-track`,children:(0,g.jsx)(`div`,{className:`session-prog-fill`,style:{width:`${dt/Z*100}%`}})}),(0,g.jsx)(`div`,{className:`session-stage`,children:Ct()}),(0,g.jsx)(`div`,{className:`feedback-pop`,children:G?(0,g.jsxs)(`div`,{className:`feedback-bubble ${G.type}`,children:[(0,g.jsx)(`span`,{className:`feedback-character`,children:(0,g.jsx)(`i`,{className:`fa-solid ${G.type===`correct`?`fa-star`:`fa-rotate-right`}`})}),G.text]}):null}),(0,g.jsx)(`div`,{className:`session-answer-area`,children:A&&y===`input`?(0,g.jsxs)(`div`,{className:`typed-answer-wrap`,children:[(0,g.jsxs)(`div`,{className:`typed-answer-row`,children:[(0,g.jsx)(`input`,{ref:Fe,className:`typed-answer-input`,type:`text`,inputMode:`decimal`,pattern:`-?[0-9]*\\.?[0-9]*`,value:b,disabled:j!==null,onChange:e=>Ne(Te(e.target.value)),onKeyDown:e=>{e.key===`Enter`&&b.trim()!==``&&(e.preventDefault(),gt(b))},placeholder:`Type your answer…`}),(0,g.jsx)(`button`,{className:`typed-answer-submit`,disabled:j!==null||b.trim()===``,onClick:()=>gt(b),children:`Submit`})]}),j!==null&&v(j)!==v(A.answer)?(0,g.jsxs)(`span`,{className:`typed-answer-correct`,children:[`Correct answer: `,A.answer]}):null]}):A?(0,g.jsx)(`div`,{className:`mcq-grid`,children:A.options.map((e,t)=>{let n=``;return j!==null&&(e===A.answer?n=`correct`:e===j&&(n=`wrong`)),(0,g.jsxs)(`button`,{className:`mcq-btn ${n}`,disabled:j!==null,onClick:()=>gt(e),children:[(0,g.jsx)(`span`,{className:`mcq-key-hint`,children:t+1}),e]},e)})}):null}),(0,g.jsxs)(`div`,{className:`session-action-bar`,children:[X===`voice`&&A?(0,g.jsxs)(`button`,{className:`session-btn-ghost`,onClick:()=>{R(-1),_e(A.numbers,Ye,e=>R(e))},children:[(0,g.jsx)(`i`,{className:`fa-solid fa-volume-high`}),` Repeat`]}):null,!P&&!A?(0,g.jsxs)(`button`,{className:`session-btn-next`,onClick:mt,children:[(0,g.jsx)(`i`,{className:`fa-solid fa-play`}),` Start`]}):null,j!==null&&H?(0,g.jsx)(`button`,{className:`session-btn-next`,disabled:!0,children:`Saving…`}):null]})]})})]})]})]})]})}export{je as default};