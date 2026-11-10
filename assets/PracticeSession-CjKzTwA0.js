import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{A as t,C as n,Ct as r,D as i,E as a,Kt as o,L as s,O as c,Ot as l,Q as u,S as ee,T as te,U as d,Ut as ne,Z as re,_ as ie,b as f,ct as ae,j as p,jt as oe,k as m,kt as se,lt as ce,m as le,q as ue,rt as de,w as h,wt as fe,x as pe}from"./interactive-DJFVKhAI.js";import{g}from"./index-kbdqGtCO.js";import{m as me}from"./mcq-DzM2X8cc.js";import{t as he}from"./gameSounds-C92IiOI5.js";import{n as ge,t as _e}from"./KidResultCard-C4bX3Zu4.js";import{n as ve,t as ye}from"./vedicSyllabus-Bu1g1_5T.js";var _=e(o(),1),v=u(),be=`
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

  /* ── Kid-friendly game look (same language as the exam result card) ── */
  .session-card { border-radius: 24px; box-shadow: inset 0 -4px 0 rgba(15,23,42,0.05), 0 8px 24px rgba(15,23,42,0.06); }
  .session-mode-pill { border-radius: 999px; font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 0.95rem; }
  .session-score-chip {
    display: inline-flex; align-items: center; gap: 6px; border-radius: 999px;
    background: #fef3c7; color: #92400e; border-color: #fcd34d;
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1rem;
  }
  .session-score-chip i { color: #f59e0b; }
  .session-streak-chip {
    display: inline-flex; align-items: center; gap: 6px; border-radius: 999px; padding: 6px 12px;
    background: #ffedd5; color: #c2410c; border: 1px solid #fdba74;
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-weight: 800; font-size: 0.95rem;
    animation: kidPop 0.35s ease-out;
  }
  .session-prog-track { height: 14px; background: #eef2f7; overflow: visible; box-shadow: inset 0 2px 3px rgba(15,23,42,0.08); }
  .session-prog-fill {
    position: relative; min-width: 14px;
    background: linear-gradient(90deg, #22c55e, #84cc16 60%, #f59e0b);
  }
  .session-prog-star {
    position: absolute; right: -10px; top: 50%; transform: translateY(-50%);
    color: #f59e0b; font-size: 1.35rem; filter: drop-shadow(0 1px 2px rgba(0,0,0,0.2));
  }
  .session-card .mcq-grid { gap: 12px; }
  .session-card .mcq-btn {
    border-radius: 18px !important; border-width: 2px; min-height: 64px;
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1.5rem;
    box-shadow: inset 0 -4px 0 color-mix(in srgb, var(--primary-blue) 18%, transparent);
  }
  .session-card .mcq-btn:hover:not(:disabled) { transform: translateY(-2px); }
  .session-card .mcq-btn.correct { animation: kidPop 0.35s ease-out; box-shadow: inset 0 -4px 0 rgba(0,0,0,0.15), 0 6px 16px rgba(46,125,50,0.3); }
  .session-card .mcq-btn.wrong { animation: kidShake 0.35s ease-in-out; }
  .session-card .typed-answer-input { border-radius: 16px; font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1.5rem; }
  .feedback-bubble { border-radius: 999px; font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1.15rem; padding: 10px 20px; }
  .session-stage-done { padding-top: 8px; }

  .journey-list { position: relative; gap: 10px; }
  .journey-card {
    position: relative; border-radius: 18px;
    border: 2px solid color-mix(in srgb, var(--stop-color, var(--primary-blue)) 30%, transparent);
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 8%, white);
    box-shadow: inset 0 -3px 0 color-mix(in srgb, var(--stop-color, var(--primary-blue)) 18%, transparent);
  }
  .journey-card i { background: white; color: var(--stop-color, var(--primary-blue)); border-radius: 50%; }
  .journey-card .journey-num {
    display: grid; place-items: center; width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0;
    background: var(--stop-color, var(--primary-blue)); color: white;
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-weight: 800; font-size: 1rem;
  }
  .journey-card .journey-num i { background: none; color: white; width: auto; height: auto; font-size: 0.8rem; }
  /* Dotted path joining the stops. */
  .journey-card:not(:last-child)::after {
    content: ""; position: absolute; left: 26px; bottom: -12px; height: 12px;
    border-left: 3px dotted color-mix(in srgb, var(--stop-color, var(--primary-blue)) 55%, transparent);
  }
  .ready-stat { border-radius: 16px; box-shadow: inset 0 -3px 0 rgba(15,23,42,0.05); }
  .ready-stat strong { font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1.4rem; color: var(--primary-blue); }
  .session-btn-next { border-radius: 999px; font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1.1rem; }

  @keyframes kidPop { 0% { transform: scale(0.85); } 60% { transform: scale(1.08); } 100% { transform: scale(1); } }
  @keyframes kidShake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
  @media (prefers-reduced-motion: reduce) {
    .session-streak-chip, .session-card .mcq-btn.correct, .session-card .mcq-btn.wrong { animation: none; }
  }

  /* ── Start card ── */
  .ready-game { gap: 18px; justify-content: center; }
  .ready-top { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
  .ready-badge {
    width: 64px; height: 64px; border-radius: 50%; flex-shrink: 0;
    display: grid; place-items: center; font-size: 1.7rem;
    background: #fff4e8; color: #f97316;
    box-shadow: inset 0 -4px 0 rgba(249,115,22,0.18);
  }
  .ready-heading { display: flex; flex-direction: column; min-width: 0; }
  .ready-hello { font-family: "Fredoka", "Baloo 2", sans-serif; font-weight: 600; font-size: 1.1rem; color: #475569; }
  .ready-game .ready-title { font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: clamp(1.9rem, 3.4vw, 2.6rem); font-weight: 800; }
  .ready-date {
    margin-left: auto; display: inline-flex; align-items: center; gap: 6px;
    padding: 6px 12px; border-radius: 999px; background: var(--light-blue); color: var(--primary-blue);
    font-weight: 800; font-size: 0.85rem;
  }
  .ready-game .ready-stats { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
  .ready-game .ready-stat {
    display: flex; align-items: center; gap: 10px; min-width: 0; padding: 12px;
    border: 2px solid color-mix(in srgb, var(--tile) 25%, transparent);
    background: color-mix(in srgb, var(--tile) 8%, white);
    box-shadow: inset 0 -3px 0 color-mix(in srgb, var(--tile) 18%, transparent);
  }
  .ready-stat-icon {
    width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0; display: grid; place-items: center;
    background: white; color: var(--tile); font-size: 1rem; box-shadow: 0 2px 6px rgba(15,23,42,0.08);
  }
  .ready-game .ready-stat strong { color: var(--tile); line-height: 1.1; }
  .ready-game .ready-stat span span { display: block; color: #334155; font-size: 0.85rem; font-weight: 700; }
  .ready-reward {
    display: flex; align-items: center; gap: 10px; padding: 10px 14px; border-radius: 16px;
    background: #fef9e7; color: #92400e; font-family: "Fredoka", "Baloo 2", sans-serif; font-weight: 600; font-size: 1rem;
  }
  .ready-reward-stars { display: inline-flex; gap: 3px; color: #f59e0b; font-size: 1.05rem; }
  .ready-game .session-btn-next { padding: 14px 28px; font-size: 1.2rem; }
  @media (max-width: 640px) {
    .ready-date { margin-left: 0; }
    .ready-game .ready-stats { gap: 8px; }
    .ready-game .ready-stat { flex-direction: column; text-align: center; padding: 10px 6px; }
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

  /* ── Inside the practice: same colours and shapes as the journey map ── */
  .mode-list { border-radius: 22px; padding: 14px; gap: 10px; }
  .mode-row {
    border: 2px solid color-mix(in srgb, var(--stop-color, var(--primary-blue)) 22%, transparent);
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 6%, white);
    border-radius: 16px;
  }
  .mode-row:hover:not(.active) { background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 12%, white); }
  .mode-row i {
    border-radius: 50%; background: white; color: var(--stop-color, var(--primary-blue));
    box-shadow: 0 2px 6px rgba(15,23,42,0.08);
  }
  .mode-row .journey-step { font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1rem; }
  .mode-row.active {
    border-color: var(--stop-color, var(--primary-blue));
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 14%, white);
    box-shadow: inset 0 -3px 0 color-mix(in srgb, var(--stop-color, var(--primary-blue)) 30%, transparent);
  }
  .mode-row.active i,
  .playing-active .mode-row.active:hover i { background: var(--stop-color, var(--primary-blue)); color: white; }
  .playing-active .mode-row:hover i { background: white; color: var(--stop-color, var(--primary-blue)); }
  .mode-row.done { border-color: color-mix(in srgb, #22c55e 35%, transparent); background: #f0fdf4; }
  .mode-row.done i { background: #22c55e; color: white; }
  .mode-row.done .journey-step { color: #15803d; }
  .playing-active .mode-list { border-radius: 18px; padding: 10px; gap: 8px; }
  .playing-active .mode-row { border-radius: 999px; padding: 6px 12px 6px 6px; }

  .session-card { border-top: 6px solid var(--stop-color, var(--primary-blue)); }
  .session-card .session-mode-pill {
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 14%, white);
    color: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 70%, #0f172a);
    border-color: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 35%, transparent);
  }
  .session-q-counter {
    border-radius: 999px; padding: 5px 12px; background: #f1f5f9; color: #334155;
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 0.95rem;
  }
  .session-expression,
  .session-vertical {
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif;
    color: #0f172a;
  }
  .session-vertical .vrow-sign,
  .session-vertical .vtotal { color: var(--stop-color, var(--primary-blue)); }
  .session-sub { font-family: "Fredoka", "Baloo 2", sans-serif; font-weight: 600; font-size: 1.05rem; color: #475569; }
  .session-card .mcq-btn:not(.correct):not(.wrong) {
    border-color: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 45%, transparent);
    color: #0f172a;
    box-shadow: inset 0 -4px 0 color-mix(in srgb, var(--stop-color, var(--primary-blue)) 22%, transparent);
  }
  .session-card .mcq-btn:hover:not(:disabled) { background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 10%, white); }
  .session-card .mcq-key-hint {
    border-radius: 50%; border: none;
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 15%, white);
    color: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 70%, #0f172a);
  }

  .countdown-ring {
    background:
      radial-gradient(circle, white 56%, transparent 57%),
      conic-gradient(#22c55e, #f59e0b, #ec4899, #3b82f6, #22c55e);
  }
  .countdown-ring strong,
  .countdown-title { font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; }
  .countdown-copy { font-family: "Fredoka", "Baloo 2", sans-serif; font-weight: 600; color: #475569; }

  .review-head { display: flex; align-items: center; gap: 12px; }
  .review-badge {
    width: 52px; height: 52px; border-radius: 50%; flex-shrink: 0; display: grid; place-items: center;
    background: #fef3c7; color: #d97706; font-size: 1.3rem; box-shadow: inset 0 -3px 0 rgba(217,119,6,0.18);
  }
  .review-title { margin: 0 !important; font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; text-align: left; }
  .mistake-card {
    flex-direction: row; align-items: center; gap: 12px; border-radius: 18px; border: 2px solid #fde2e2;
    background: #fff7f7; box-shadow: inset 0 -3px 0 rgba(185,28,28,0.06);
  }
  .mistake-num {
    width: 30px; height: 30px; border-radius: 50%; flex-shrink: 0; display: grid; place-items: center;
    background: #f97316; color: white !important; font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 0.95rem !important;
  }
  .mistake-body { display: flex; flex-direction: column; min-width: 0; flex: 1; text-align: left; }
  .mistake-body strong { font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-size: 1.15rem; color: #0f172a; }
  .mistake-body small { color: #64748b; font-weight: 700; }
  .mistake-answers { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; }
  .mistake-chip {
    display: inline-flex; align-items: center; gap: 5px; border-radius: 999px; padding: 4px 10px;
    font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 1rem !important;
  }
  .mistake-chip.wrong { background: #fee2e2; color: #b91c1c !important; text-decoration: line-through; }
  .mistake-chip.right { background: #dcfce7; color: #15803d !important; }

  @media (max-width: 640px) {
    .session-card { border-top-width: 5px; }
    .mobile-mode-dot { border-radius: 12px; }
    .mobile-mode-dot i { color: var(--stop-color, var(--text-light)); }
    .mobile-mode-dot.active {
      background: color-mix(in srgb, var(--stop-color, var(--accent)) 14%, white);
      border-color: var(--stop-color, var(--accent));
    }
    .mobile-mode-dot.active i,
    .mobile-mode-dot.active span { color: var(--stop-color, var(--accent)); }
    .mobile-mode-dot.done i,
    .mobile-mode-dot.done span { color: #16a34a; opacity: 1; }
    .mistake-card { flex-wrap: wrap; }
    .mistake-answers { width: 100%; justify-content: flex-start; padding-left: 42px; }
  }


  /* Long sums: size each row from the screen height so the whole sum and
     the answers fit without scrolling; short sums keep their big size. */
  .session-vertical {
    font-size: clamp(1.2rem, calc((100vh - 430px) / (var(--rows, 4) * 1.3)), 3rem);
    line-height: 1.2;
  }
  .session-vertical .vrule { margin: 2px 0 4px; }
  .session-expression { font-size: clamp(1.8rem, 4vw, 3.4rem); }
  .session-stage:has(.session-vertical) { padding: 12px 20px; min-height: 0; gap: 6px; }
  @media (max-width: 640px) {
    .session-vertical { font-size: clamp(1.1rem, calc((100vh - 400px) / (var(--rows, 4) * 1.3)), 2.4rem); }
  }


  /* Grid items default to their content's width; let the card shrink to the
     screen so nothing is pushed off the right edge on phones. */
  .session-grid > *, .session-card, .session-answer-area, .typed-answer-wrap { min-width: 0; max-width: 100%; }
  @media (max-width: 640px) {
    .session-game-header { flex-wrap: wrap; overflow: visible; row-gap: 8px; }
    .session-game-header .session-spacer { display: none; }
    .session-score-chip { margin-left: auto; }
    .session-card .typed-answer-input { font-size: 1.25rem; padding: 12px 14px; }
    .typed-answer-submit { padding: 0 14px; }
  }


  /* ── Game feedback: Wow! / Oh no! / fire streak ── */
  .feedback-pop { min-height: 60px; }
  .feedback-bubble {
    gap: 10px; padding: 10px 22px; border-radius: 999px; border-width: 2px;
    font-family: "Baloo 2", "Fredoka", "Sora", sans-serif; font-weight: 800; font-size: 1.6rem; line-height: 1;
    animation: fbBurst 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
  .feedback-character { width: 38px; height: 38px; border-radius: 50%; font-size: 1.15rem; background: white; }
  .feedback-bubble.correct { color: #15803d; background: #dcfce7; border-color: #86efac; }
  .feedback-bubble.correct .feedback-character { color: #f59e0b; }
  .feedback-bubble.wrong { color: #b91c1c; background: #fee2e2; border-color: #fca5a5; animation: fbShake 0.4s ease-in-out; }
  .feedback-bubble.wrong .feedback-character { color: #dc2626; }
  .feedback-bubble.streak {
    color: white; border-color: #fdba74;
    background: linear-gradient(135deg, #f97316, #ef4444 55%, #dc2626);
    box-shadow: 0 6px 20px rgba(239, 68, 68, 0.4), inset 0 -3px 0 rgba(0,0,0,0.15);
    text-shadow: 0 1px 2px rgba(0,0,0,0.25);
    font-size: 1.8rem;
  }
  .feedback-bubble.streak .feedback-character { color: #f97316; animation: fbFlicker 0.6s ease-in-out infinite alternate; }
  .feedback-flames { display: inline-flex; gap: 2px; font-size: 1.1rem; color: #fde047; }
  .feedback-flames i { animation: fbFlame 0.5s ease-out both; }
  /* Scale only, never opacity, so a paused or skipped animation still shows the bubble. */
  @keyframes fbBurst { 0% { transform: scale(0.4); } 100% { transform: scale(1); } }
  @keyframes fbShake { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-8px); } 40% { transform: translateX(8px); } 60% { transform: translateX(-5px); } 80% { transform: translateX(5px); } }
  @keyframes fbFlicker { from { transform: scale(1) rotate(-6deg); } to { transform: scale(1.15) rotate(6deg); } }
  @keyframes fbFlame { 0% { transform: translateY(8px) scale(0.3); opacity: 0; } 100% { transform: none; opacity: 1; } }
  @media (prefers-reduced-motion: reduce) {
    .feedback-bubble, .feedback-bubble .feedback-character, .feedback-flames i { animation: none !important; }
  }
  @media (max-width: 640px) {
    .feedback-bubble { font-size: 1.35rem; padding: 8px 18px; }
    .feedback-bubble.streak { font-size: 1.5rem; }
  }


  /* ── Screen shake on a miss (two names so back-to-back misses replay) ── */
  .fx-shake-0 { animation: screenShakeA 0.45s cubic-bezier(.36,.07,.19,.97) both; }
  .fx-shake-1 { animation: screenShakeB 0.45s cubic-bezier(.36,.07,.19,.97) both; }
  .fx-bigShake-0 { animation: screenBigShakeA 0.7s cubic-bezier(.36,.07,.19,.97) both; }
  .fx-bigShake-1 { animation: screenBigShakeB 0.7s cubic-bezier(.36,.07,.19,.97) both; }
  @keyframes screenShakeA {
    10%, 90% { transform: translateX(-3px); } 20%, 80% { transform: translateX(6px); }
    30%, 50%, 70% { transform: translateX(-10px); } 40%, 60% { transform: translateX(10px); }
  }
  @keyframes screenShakeB {
    10%, 90% { transform: translateX(-3px); } 20%, 80% { transform: translateX(6px); }
    30%, 50%, 70% { transform: translateX(-10px); } 40%, 60% { transform: translateX(10px); }
  }
  @keyframes screenBigShakeA {
    10%, 90% { transform: translate(-4px, 2px) rotate(-0.5deg); } 20%, 80% { transform: translate(10px, -3px) rotate(0.8deg); }
    30%, 50%, 70% { transform: translate(-18px, 4px) rotate(-1.2deg); } 40%, 60% { transform: translate(18px, -4px) rotate(1.2deg); }
  }
  @keyframes screenBigShakeB {
    10%, 90% { transform: translate(-4px, 2px) rotate(-0.5deg); } 20%, 80% { transform: translate(10px, -3px) rotate(0.8deg); }
    30%, 50%, 70% { transform: translate(-18px, 4px) rotate(-1.2deg); } 40%, 60% { transform: translate(18px, -4px) rotate(1.2deg); }
  }

  /* ── Party poppers on a streak ── */
  .party-poppers { position: fixed; inset: 0; pointer-events: none; z-index: 1200; overflow: hidden; }
  .popper-cone {
    position: absolute; bottom: 18px; font-size: 2.6rem; color: #f59e0b;
    filter: drop-shadow(0 3px 4px rgba(0,0,0,0.2));
    animation: popperCone 1.4s ease-out both;
  }
  .popper-cone-left { left: 18px; --tilt: 25deg; }
  .popper-cone-right { right: 18px; --tilt: -25deg; }
  .popper-piece {
    position: absolute; bottom: 40px; width: 9px; height: 12px; border-radius: 2px;
    animation: popperBurst 1.5s cubic-bezier(.15,.7,.3,1) both;
  }
  .popper-strip { width: 4px; height: 18px; }
  .popper-left { left: 40px; }
  .popper-right { right: 40px; }
  @keyframes popperBurst {
    0% { transform: translate(0, 0) rotate(0); opacity: 1; }
    70% { opacity: 1; }
    100% { transform: translate(var(--dx), calc(var(--dy) + 140px)) rotate(var(--spin)); opacity: 0; }
  }
  @keyframes popperCone {
    0% { transform: rotate(var(--tilt)) scale(0.4); opacity: 0; }
    15% { transform: rotate(var(--tilt)) scale(1.25); opacity: 1; }
    30% { transform: rotate(var(--tilt)) scale(1); }
    85% { opacity: 1; }
    100% { transform: rotate(var(--tilt)) scale(1); opacity: 0; }
  }
  @media (prefers-reduced-motion: reduce) {
    .fx-shake-0, .fx-shake-1, .fx-bigShake-0, .fx-bigShake-1 { animation: none; }
    .party-poppers { display: none; }
  }


  /* ── Math symbols ── */
  .session-power { font-size: 0.55em; vertical-align: super; margin-left: 2px; line-height: 0; }
  .session-root { display: inline-flex; align-items: flex-end; line-height: 1; }
  .session-root-sign { font-size: 1.3em; line-height: 1; margin-right: -0.06em; transform: translateY(0.06em); }
  .session-radicand { border-top: 0.08em solid currentColor; padding: 0.06em 0.1em 0; line-height: 1.05; }
  .session-root-index { font-size: 0.42em; line-height: 1; align-self: flex-start; margin-right: -0.55em; margin-top: 0.25em; }

  /* ── Soroban ── */
  .soroban { width: 100%; height: auto; filter: drop-shadow(0 8px 16px rgba(120, 53, 15, 0.25)); }
  .soroban-bead path { transition: transform 0.25s ease; }
  @media (max-width: 640px) { .soroban { max-height: 42vh; } }


  /* ── Picture games ── */
  .fun-blank {
    display: inline-grid; place-items: center; min-width: 1.4em; padding: 0 0.15em; border-radius: 0.3em;
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 14%, white);
    color: var(--stop-color, var(--primary-blue)); border: 0.06em dashed currentColor;
  }
  .fun-frame {
    display: grid; grid-template-columns: repeat(var(--cols), 1fr); gap: 6px; padding: 10px;
    border-radius: 16px; background: #fffbeb; border: 3px solid #b45309; max-width: 420px; width: 100%;
  }
  .fun-frame:empty { display: none; }
  .fun-frame:has(.fun-dot:nth-child(6)) { grid-template-columns: repeat(5, 1fr); }
  .fun-dot { aspect-ratio: 1; border-radius: 50%; border: 2px dashed #d6b98a; background: white; }
  .fun-dot.filled { border: none; background: radial-gradient(circle at 35% 30%, #fb923c, #dc2626); box-shadow: inset 0 -3px 0 rgba(0,0,0,0.15); }

  .fun-pattern { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
  .fun-step {
    position: relative; min-width: 64px; padding: 12px 14px; border-radius: 18px; text-align: center;
    font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 1.8rem; color: #0f172a;
    background: color-mix(in srgb, var(--stop-color, var(--primary-blue)) 10%, white);
    border: 2px solid color-mix(in srgb, var(--stop-color, var(--primary-blue)) 35%, transparent);
    box-shadow: inset 0 -3px 0 color-mix(in srgb, var(--stop-color, var(--primary-blue)) 20%, transparent);
  }
  .fun-step-next { border-style: dashed; color: var(--stop-color, var(--primary-blue)); animation: funBob 1.2s ease-in-out infinite; }

  .fun-double { display: flex; align-items: center; gap: 12px; }
  .fun-card {
    display: grid; place-items: center; min-width: 84px; height: 96px; padding: 0 12px; border-radius: 18px;
    font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 2.6rem; color: white;
    background: linear-gradient(160deg, #8b5cf6, #6d28d9); box-shadow: inset 0 -5px 0 rgba(0,0,0,0.18);
  }
  .fun-card-twin { animation: funTwin 0.5s ease-out both; }
  .fun-plus { font-family: "Baloo 2", sans-serif; font-weight: 800; font-size: 2rem; color: #6d28d9; }
  .fun-double-label { font-size: clamp(1.4rem, 3vw, 2.2rem) !important; }

  .fun-coins { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; max-width: 520px; }
  .fun-coin {
    display: grid; place-items: center; width: 74px; height: 74px; border-radius: 50%;
    font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 1.35rem; color: #713f12;
    background: radial-gradient(circle at 35% 30%, #fef3c7, #f59e0b 70%, #b45309);
    border: 3px solid #d97706; box-shadow: inset 0 -4px 0 rgba(0,0,0,0.15), 0 3px 8px rgba(0,0,0,0.12);
    animation: funDrop 0.4s cubic-bezier(.34,1.56,.64,1) both;
  }
  .fun-coin[data-value="1"], .fun-coin[data-value="2"] {
    color: #334155; border-color: #94a3b8; background: radial-gradient(circle at 35% 30%, #f8fafc, #cbd5e1 70%, #94a3b8);
  }
  .fun-coin.note {
    width: 104px; height: 60px; border-radius: 10px; color: #14532d; border-color: #16a34a;
    background: linear-gradient(135deg, #dcfce7, #86efac);
  }
  .fun-coin.note[data-value="50"], .fun-coin.note[data-value="100"] { color: #581c87; border-color: #9333ea; background: linear-gradient(135deg, #f3e8ff, #d8b4fe); }

  @keyframes funBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
  /* Movement only, never opacity: if an animation is paused or skipped the
     card or coin is still visible. */
  @keyframes funTwin { from { transform: translateX(-60px) scale(0.8); } to { transform: none; } }
  @keyframes funDrop { from { transform: translateY(-24px) scale(0.6); } to { transform: none; } }

  .fun-count { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; max-width: 460px; font-size: 2.6rem; line-height: 1; }
  .fun-count span { animation: funDrop 0.4s cubic-bezier(.34,1.56,.64,1) both; }
  .fun-drum {
    display: grid; place-items: center; width: 132px; height: 132px; border-radius: 50%; font-size: 3.6rem;
    background: radial-gradient(circle at 40% 35%, #fde68a, #f59e0b 65%, #b45309); border: 6px solid #92400e;
    box-shadow: inset 0 -6px 0 rgba(0,0,0,0.18); cursor: pointer;
  }
  .fun-drum.hit { animation: funHit 0.18s ease-out; }
  .fun-clock { width: min(220px, 60vw); height: auto; }
  .fun-shop { display: flex; align-items: center; gap: 14px; flex-wrap: wrap; justify-content: center; }
  .fun-tag {
    font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 1.6rem; color: #9a3412;
    padding: 6px 14px; border-radius: 12px; background: #ffedd5; border: 2px dashed #ea580c;
  }
  .fun-toy { font-size: 3.4rem; }
  @keyframes funHit { 50% { transform: scale(0.88); } }
  @media (prefers-reduced-motion: reduce) { .fun-step-next, .fun-card-twin, .fun-coin { animation: none; } }
  @media (max-width: 640px) {
    .fun-step { min-width: 52px; font-size: 1.4rem; padding: 8px 10px; }
    .fun-card { min-width: 64px; height: 76px; font-size: 2rem; }
    .fun-coin { width: 60px; height: 60px; font-size: 1.1rem; }
    .fun-coin.note { width: 86px; height: 50px; }
  }


  /* Long journeys: the start card keeps its own height (it stretched to the
     list's and floated to the bottom), stays in view while scrolling, and on
     PC the list scrolls inside its panel instead of making the page huge. */
  .session-ready { align-items: start; }
  .ready-game { justify-content: flex-start; }
  @media (min-width: 901px) {
    .ready-game { position: sticky; top: calc(var(--nav-h) + 16px); }
    .journey-panel { display: flex; flex-direction: column; max-height: calc(100vh - var(--nav-h) - 40px); }
    .journey-panel .journey-list {
      overflow-y: auto; min-height: 0; padding: 4px 6px 6px 2px; margin-right: -6px;
      scrollbar-width: thin; scrollbar-color: #cbd5e1 transparent;
    }
  }


  /* Exit pill shown in full-screen practice. */
  .focus-exit {
    display: inline-flex; align-items: center; gap: 8px; margin: 0 0 12px; min-height: 44px; padding: 8px 18px;
    border-radius: 999px; border: 2px solid var(--border); background: white; color: #334155; cursor: pointer;
    font-family: "Baloo 2", "Fredoka", sans-serif; font-weight: 800; font-size: 1rem;
    box-shadow: inset 0 -3px 0 rgba(15,23,42,0.06);
  }
  .focus-exit:hover { border-color: #fca5a5; color: #b91c1c; }


  /* Full-screen practice reads as one centred game card, not an edge-to-edge
     page: on a wide screen the question and answer box stayed tiny in a sea
     of space. Phones keep their full width. */
  body.practice-session-focus .session-shell { max-width: 880px; margin-left: auto; margin-right: auto; }
  body.practice-session-focus .session-grid { grid-template-columns: 1fr; }
  .focus-exit { width: fit-content; align-self: flex-start; }
  body.practice-session-focus .typed-answer-wrap { max-width: 560px; width: 100%; margin: 0 auto; }
  body.practice-session-focus .mcq-grid { max-width: 640px; margin-left: auto; margin-right: auto; }

`,xe=3,y=[`#3b82f6`,`#22c55e`,`#f59e0b`,`#ec4899`,`#8b5cf6`,`#06b6d4`],Se=[`Warm Up`,`Brain Builder`,`Speed Round`,`Focus Finish`,`Missing Link`,`Compare Clash`];function Ce(e){let t=new Date(`${e}T00:00:00`);return Number.isNaN(t.getTime())?e:t.toLocaleDateString(`en-IN`,{weekday:`short`,day:`numeric`,month:`short`})}function we(){return new Date().toLocaleDateString(`en-CA`)}var b=0,Te=[/natural/i,/google uk english female/i,/google us english/i,/samantha/i,/online/i,/google/i],x=null;function Ee(){if(!(`speechSynthesis`in window))return null;if(x)return x;let e=window.speechSynthesis.getVoices().filter(e=>/^en(-|_|$)/i.test(e.lang));if(!e.length)return null;for(let t of Te){let n=e.find(e=>t.test(e.name));if(n)return x=n}return x=e.find(e=>/en-IN/i.test(e.lang))||e[0]}typeof window<`u`&&`speechSynthesis`in window&&window.speechSynthesis.addEventListener?.(`voiceschanged`,()=>{x=null,Ee()});function De(){`speechSynthesis`in window&&(b++,window.speechSynthesis.cancel())}function Oe(){if(!(`speechSynthesis`in window))return;let e=new SpeechSynthesisUtterance(` `);e.volume=0,window.speechSynthesis.speak(e)}function ke(e,t=.8,n=null){if(!(`speechSynthesis`in window))return!1;let r=++b;window.speechSynthesis.cancel();let i=Ee(),a=e.map((e,t)=>t===0?String(e):e<0?`minus ${Math.abs(e)}`:`plus ${e}`),o=0;function s(){if(r!==b)return;if(o>=a.length){n?.(-1);return}n?.(o);let e=new SpeechSynthesisUtterance(a[o]);e.rate=t,i&&(e.voice=i),e.onend=()=>{o++,setTimeout(s,500)},window.speechSynthesis.speak(e)}return s(),!0}function Ae(e,t){let n=e?.[t];return(typeof n==`string`?n:n?.mode)===`voice`}function je(e=!1){`vibrate`in navigator&&navigator.vibrate(e?[120,50,120,50,200]:[80,40,80])}var S=[`#f43f5e`,`#f59e0b`,`#22c55e`,`#3b82f6`,`#a855f7`,`#ec4899`,`#facc15`];function Me(){let e=[];return[`left`,`right`].forEach(t=>{for(let n=0;n<26;n+=1){let r=n/25*50+15,i=260+n*53%220,a=r*Math.PI/180,o=Math.sin(a)*i*(t===`left`?1:-1),s=-Math.cos(a)*i;e.push((0,v.jsx)(`span`,{className:`popper-piece popper-${t}${n%3==0?` popper-strip`:``}`,style:{"--dx":`${o}px`,"--dy":`${s}px`,"--spin":`${(n%2?1:-1)*(360+n*25)}deg`,background:S[n%S.length],animationDelay:`${n%5*.02}s`}},`${t}-${n}`))}}),(0,v.jsxs)(`div`,{className:`party-poppers`,"aria-hidden":`true`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-champagne-glasses popper-cone popper-cone-left`}),(0,v.jsx)(`i`,{className:`fa-solid fa-champagne-glasses popper-cone popper-cone-right`}),e]})}var Ne={colW:64,side:18,frame:16,heaven:70,bar:12,earth:132,beadW:50,beadH:25};function C({cx:e,cy:t,active:n}){let r=Ne.beadW/2,i=Ne.beadH/2,a=r*.36;return(0,v.jsxs)(`g`,{className:`soroban-bead${n?` active`:``}`,children:[(0,v.jsx)(`path`,{d:`M ${e-r} ${t} L ${e-a} ${t-i} L ${e+a} ${t-i} L ${e+r} ${t} L ${e+a} ${t+i} L ${e-a} ${t+i} Z`,fill:n?`url(#beadActive)`:`url(#beadWood)`,stroke:n?`#9a3412`:`#a16207`,strokeWidth:`1.2`,strokeLinejoin:`round`}),(0,v.jsx)(`ellipse`,{cx:e-r*.3,cy:t-i*.45,rx:r*.3,ry:i*.22,fill:`white`,opacity:n?.45:.35})]})}function Pe({count:e}){let[t,n]=(0,_.useState)(0),[r,i]=(0,_.useState)(0),a=(0,_.useRef)([]),o=(0,_.useCallback)(()=>{a.current.forEach(clearTimeout),a.current.length=0,n(0);let t=null;try{t=new(window.AudioContext||window.webkitAudioContext)}catch{t=null}for(let r=0;r<e;r+=1)a.current.push(setTimeout(()=>{if(n(r+1),i(e=>e+1),!t)return;let e=t.createOscillator(),a=t.createGain();e.frequency.setValueAtTime(150,t.currentTime),e.frequency.exponentialRampToValueAtTime(50,t.currentTime+.25),a.gain.setValueAtTime(.9,t.currentTime),a.gain.exponentialRampToValueAtTime(.001,t.currentTime+.3),e.connect(a).connect(t.destination),e.start(),e.stop(t.currentTime+.3)},600+r*650));a.current.push(setTimeout(()=>{n(-1),t?.close?.()},600+e*650+300))},[e]);return(0,_.useEffect)(()=>{let e=setTimeout(o,0),t=a.current;return()=>{clearTimeout(e),t.forEach(clearTimeout)}},[o]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`button`,{type:`button`,className:`fun-drum${r?` hit`:``}`,onClick:o,"aria-label":`Play the beats again`,children:`🥁`},r),(0,v.jsx)(`div`,{className:`session-sub`,children:t===-1?`Tap the drum to hear it again`:`Listen...`})]})}function Fe({hour:e,minute:t}){let n=e%12*30+t*.5,r=t*6;return(0,v.jsxs)(`svg`,{className:`fun-clock`,viewBox:`0 0 200 200`,"aria-hidden":`true`,children:[(0,v.jsx)(`circle`,{cx:`100`,cy:`100`,r:`94`,fill:`#fff`,stroke:`#2563eb`,strokeWidth:`8`}),Array.from({length:60},(e,t)=>(0,v.jsx)(`line`,{x1:`100`,y1:`12`,x2:`100`,y2:t%5?18:24,stroke:t%5?`#cbd5e1`:`#334155`,strokeWidth:t%5?1.5:3,transform:`rotate(${t*6} 100 100)`},t)),Array.from({length:12},(e,t)=>{let n=t+1,r=n*30*Math.PI/180;return(0,v.jsx)(`text`,{x:100+62*Math.sin(r),y:100-62*Math.cos(r)+7,textAnchor:`middle`,fontSize:`20`,fontWeight:`800`,fill:`#0f172a`,fontFamily:`Baloo 2, Fredoka, sans-serif`,children:n},n)}),(0,v.jsx)(`line`,{x1:`100`,y1:`100`,x2:`100`,y2:`54`,stroke:`#dc2626`,strokeWidth:`8`,strokeLinecap:`round`,transform:`rotate(${n} 100 100)`}),(0,v.jsx)(`line`,{x1:`100`,y1:`100`,x2:`100`,y2:`30`,stroke:`#0f172a`,strokeWidth:`5`,strokeLinecap:`round`,transform:`rotate(${r} 100 100)`}),(0,v.jsx)(`circle`,{cx:`100`,cy:`100`,r:`7`,fill:`#0f172a`})]})}function Ie({value:e}){let t=String(e).padStart(2,`0`).split(``).map(Number),{colW:n,side:r,frame:i,heaven:a,bar:o,earth:s,beadH:c}=Ne,l=r*2+n*t.length,u=i+a,ee=u+o,te=ee+s,d=te+i;return(0,v.jsxs)(`svg`,{className:`soroban`,viewBox:`0 0 ${l} ${d}`,style:{maxWidth:l},role:`img`,"aria-label":`Read the number shown on the abacus`,children:[(0,v.jsxs)(`defs`,{children:[(0,v.jsxs)(`linearGradient`,{id:`frameWood`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,v.jsx)(`stop`,{offset:`0`,stopColor:`#b45309`}),(0,v.jsx)(`stop`,{offset:`1`,stopColor:`#78350f`})]}),(0,v.jsxs)(`linearGradient`,{id:`beadWood`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,v.jsx)(`stop`,{offset:`0`,stopColor:`#fde68a`}),(0,v.jsx)(`stop`,{offset:`0.5`,stopColor:`#e9b872`}),(0,v.jsx)(`stop`,{offset:`1`,stopColor:`#c08a3e`})]}),(0,v.jsxs)(`linearGradient`,{id:`beadActive`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,v.jsx)(`stop`,{offset:`0`,stopColor:`#fb923c`}),(0,v.jsx)(`stop`,{offset:`0.5`,stopColor:`#ef4444`}),(0,v.jsx)(`stop`,{offset:`1`,stopColor:`#b91c1c`})]}),(0,v.jsxs)(`linearGradient`,{id:`rodMetal`,x1:`0`,y1:`0`,x2:`1`,y2:`0`,children:[(0,v.jsx)(`stop`,{offset:`0`,stopColor:`#94a3b8`}),(0,v.jsx)(`stop`,{offset:`0.5`,stopColor:`#f1f5f9`}),(0,v.jsx)(`stop`,{offset:`1`,stopColor:`#64748b`})]})]}),(0,v.jsx)(`rect`,{x:`0`,y:`0`,width:l,height:d,rx:`14`,fill:`url(#frameWood)`}),(0,v.jsx)(`rect`,{x:r-4,y:i,width:l-(r-4)*2,height:d-i*2,rx:`4`,fill:`#fffbeb`}),t.map((e,t)=>{let a=r+n*t+n/2,o=e>=5,s=e%5,l=o?u-c/2-1:i+c/2+2;return(0,v.jsxs)(`g`,{children:[(0,v.jsx)(`rect`,{x:a-2.5,y:i,width:`5`,height:d-i*2,rx:`2`,fill:`url(#rodMetal)`}),(0,v.jsx)(C,{cx:a,cy:l,active:o}),[1,2,3,4].map(e=>{let t=e<=s;return(0,v.jsx)(C,{cx:a,cy:t?ee+1+c/2+(e-1)*c:te-2-c/2-(4-e)*c,active:t},e)})]},t)}),(0,v.jsx)(`rect`,{x:r-4,y:u,width:l-(r-4)*2,height:o,fill:`url(#frameWood)`}),(0,v.jsx)(`circle`,{cx:r+n*(t.length-1)+n/2,cy:u+o/2,r:`2.6`,fill:`#fef3c7`})]})}var Le=new Set([`full`,`longSum`,`addSub`,`decimalAddSub`,`negative`]),Re=`practice_question_layout`;function ze({numbers:e}){return(0,v.jsxs)(`div`,{className:`session-vertical`,style:{"--rows":e.length+1},children:[e.map((e,t)=>(0,v.jsxs)(`span`,{style:{display:`contents`},children:[(0,v.jsx)(`span`,{className:`vrow-sign`,children:t===0?``:e<0?`-`:`+`}),(0,v.jsx)(`span`,{className:`vrow-value`,children:p(t===0?e:Math.abs(e))})]},`${e}-${t}`)),(0,v.jsx)(`span`,{className:`vrule`}),(0,v.jsx)(`span`,{className:`vtotal`,children:`?`})]})}var Be=new Set([`full`,`longSum`,`flash`,`voice`,`addSub`,`missing`,`compare`,`abacus`]);function w(e){return e?{min:e<=1?1:10**(e-1),max:10**e-1}:null}function Ve(e){let t=e.trim().startsWith(`-`),[n,...r]=e.replace(/[^0-9.]/g,``).split(`.`),i=r.length?`.${r.join(``)}`:``;return`${t?`-`:``}${n}${i}`}function He(e){let t=String(e??``).trim().toLowerCase();return t&&/^-?\d*\.?\d+$/.test(t)?String(Number(t)):t}function Ue(e,t){if(!e||!(e.rows!=null||e.digits!=null||e.digits2!=null||e.decimals!=null||e.rule!=null||e.flashSpeed!=null||e.voiceRate!=null))return{};let n=h(t),r=w(e.digits),i=w(e.digits2),a={};if(e.rule&&(a.rules={...n.rules||{},rule:e.rule}),e.flashSpeed!=null&&(a.flashSpeed=e.flashSpeed),Be.has(e.mode)){let t=n.additionConfigs&&n.additionConfigs[0]||n.number||{min:1,max:9,count:3},i={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count,exact:!!e.rows};a.additionConfigs=[i],a.number={...i}}else if(e.mode===`multiply`){let e=n.multiply||{};a.multiply={aMin:r?r.min:e.aMin,aMax:r?r.max:e.aMax,bMin:i?i.min:e.bMin,bMax:i?i.max:e.bMax}}else if(e.mode===`division`){let e=n.division||{};a.division={quotientMin:r?r.min:e.quotientMin,quotientMax:r?r.max:e.quotientMax,divisorMin:i?i.min:e.divisorMin,divisorMax:i?i.max:e.divisorMax}}else if(e.mode===`decimalAddSub`){let t=n.number||{min:10,max:99,count:3};a.number={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count},e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals,addDivisor:10**e.decimals})}else if(e.mode===`negative`){let t=n.negative||{};a.negative={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count}}else if(e.mode===`percentage`){let e=n.percentage||{};a.percentage={...e,baseMin:r?r.min:e.baseMin,baseMax:r?r.max:e.baseMax}}else (e.mode===`decimalMultiply`||e.mode===`decimalDivision`)&&e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals});return Object.keys(a).length===0?{}:{[t]:a}}var We=[20,20,20,20,10,10];function Ge(e,t){let n=h(e).modes,r=n.slice(-3).reverse(),i=n.slice(0,-3),a=i.length?m(`${t}-${e}-fallback`)%i.length:0,o=i.map((e,t)=>i[(a+t)%i.length]),s=[...r];for(let e of o){if(s.length>=We.length)break;s.includes(e)||s.push(e)}return s.map((e,t)=>({mode:e,questions:We[t]??4}))}var Ke=10;function qe(e,t,{vedicTopics:r,activeSubjects:i}){if(!g(`vedic`,i))return null;let a=ve(s.map(e=>e.name),r);if(!a&&!h(e).modes.includes(`multiply`))return null;let o=s.filter(t=>{let n=ye(t.name,e,a);return n.taught&&!n.locked});return o.length?`${n}${o[m(`${t}-${e}-vedic`)%o.length].id}`:null}function T(){let{profile:e,user:n,institute:o,membership:s}=re(),u=c(e?.current_level),m=we(),[g,ve]=(0,_.useState)(null),{ready:ye,vedicTopics:b,activeSubjects:Te}=ue(),[x,Ee]=(0,_.useState)(!0),[S,Ne]=(0,_.useState)(`mcq`),[C,Be]=(0,_.useState)(``),w=(0,_.useRef)(null),We=(0,_.useRef)(null),T=(0,_.useMemo)(()=>{let e=g;if(!e){e=Ge(u,m);let t=ye?qe(u,m,{vedicTopics:b,activeSubjects:Te}):null;t&&(e=[...e,{mode:t,questions:Ke}])}let t=g?e.filter(e=>te(e.mode,u)||!!f[e.mode]):e.filter(e=>te(e.mode,u));return t.length?t:h(u).modes.slice(0,4).map(e=>({mode:e,questions:4}))},[g,u,m,ye,b,Te]),E=(0,_.useMemo)(()=>T.map(e=>e.mode),[T]),Je=e=>Number(T[e]?.questions)||4,D=`practice_session_${n?.id||`guest`}_${m}_level_${u}`,Ye=`practice_report_${n?.id||`guest`}_${m}_level_${u}`,Xe=`practice_draft_${n?.id||`guest`}_level_${u}`,[O,Ze]=(0,_.useState)(()=>localStorage.getItem(D)===`done`),[k]=(0,_.useState)(()=>{try{if(localStorage.getItem(D)===`done`)return null;let e=localStorage.getItem(Xe);if(!e)return null;let t=JSON.parse(e);return t.date===m?t:null}catch{return null}}),[A,Qe]=(0,_.useState)(()=>{try{let e=localStorage.getItem(Ye);return e?JSON.parse(e):null}catch{return null}}),[$e]=(0,_.useState)(`daily`),[j,et]=(0,_.useState)(()=>{let e=k?.modeIndex??0;return T.length>0?Math.min(e,T.length-1):0}),[M,tt]=(0,_.useState)(k?.questionIndex??0),[N,nt]=(0,_.useState)(null),[P,F]=(0,_.useState)(null),[I,rt]=(0,_.useState)(k?.score??0),[L,it]=(0,_.useState)(!1);ie(`daily-practice`,L);let[at,ot]=(0,_.useState)(0),R=(0,_.useRef)([]);(0,_.useEffect)(()=>()=>R.current.forEach(clearTimeout),[]);let[st,ct]=(0,_.useState)(1500),[lt,ut]=(0,_.useState)(.8),[z,dt]=(0,_.useState)(-1),ft=Ae(T,j)&&z>=0,[B,pt]=(0,_.useState)(k?.mistakes??[]),[mt,ht]=(0,_.useState)(k?.answers??[]),[V,gt]=(0,_.useState)(k?.completedModes??[]),[H,_t]=(0,_.useState)(0),[U,vt]=(0,_.useState)(null),[W,yt]=(0,_.useState)(k?.maxCorrectStreak??0),[bt,xt]=(0,_.useState)(!!k),[St,Ct]=(0,_.useState)([]),[G,wt]=(0,_.useState)(!1),[K,Tt]=(0,_.useState)(!1),[q,J]=(0,_.useState)(null),[Y,Et]=(0,_.useState)(null),[X,Dt]=(0,_.useState)(()=>localStorage.getItem(Re)||`horizontal`);(0,_.useEffect)(()=>{S===`input`&&N&&P===null&&We.current?.focus()},[N,S,P]),(0,_.useEffect)(()=>{if(P===null||K||O)return;let e=setTimeout(()=>Bt(),750);return()=>clearTimeout(e)},[P,K,O]),(0,_.useEffect)(()=>{if(!(!L||O||K||$e!==`daily`))try{localStorage.setItem(Xe,JSON.stringify({date:m,modeIndex:j,questionIndex:M,score:I,mistakes:B,answers:mt,completedModes:V,maxCorrectStreak:W}))}catch{}},[j,M,I,B,mt,V,W]);function Ot(e){Dt(e),localStorage.setItem(Re,e)}let Z=E[j],Q=(0,_.useMemo)(()=>T.reduce((e,t)=>e+(Number(t.questions)||4),0),[T]),kt=(0,_.useMemo)(()=>{let e=0;return T.forEach((t,n)=>{let r=Number(t.questions)||4;n<j?e+=r:n===j&&(e+=M)}),e},[T,j,M]);(0,_.useEffect)(()=>{let e=!1;async function t(){if(!o?.id)return;let[{data:t},n,r]=await Promise.all([ae(o.id),ce(s?.id),de()]);if(e)return;let i=Number(u)===0&&pe.has(r);if(i&&ve(ee),!t||(Ee(t.enabled??!0),Ne(t.answer_mode||`mcq`),i))return;let{stops:a}=fe(t.journey,u,n);Array.isArray(a)&&a.length&&ve(a.map(e=>({mode:e.mode,questions:Number(e.questions)||4,rows:e.rows,digits:e.digits,digits2:e.digits2,decimals:e.decimals,rule:e.rule,flashSpeed:e.flashSpeed,voiceRate:e.voiceRate})))}return t(),()=>{e=!0}},[o?.id,s?.id,u]);let At=e?.full_name?.split(` `)?.[0]||e?.name?.split(` `)?.[0]||n?.email?.split(`@`)?.[0]||`champ`,jt=$e===`daily`&&(L||K)&&!O,Mt=ne();(0,_.useEffect)(()=>(document.body.classList.toggle(`practice-session-focus`,jt),()=>{document.body.classList.remove(`practice-session-focus`),De()}),[jt]),(0,_.useEffect)(()=>{if(Y===null)return;let e=setTimeout(()=>{if(Y>1){Et(e=>e-1);return}Et(null),$(T[j])},900);return()=>clearTimeout(e)},[T,j,Y]),(0,_.useEffect)(()=>{function e(e){if(!(document.activeElement.tagName===`INPUT`||document.activeElement.tagName===`TEXTAREA`)){if(!O&&L&&N&&P===null&&S!==`input`&&[`1`,`2`,`3`,`4`].includes(e.key)){let t=Number(e.key)-1;N.options&&N.options[t]!==void 0&&It(N.options[t])}e.key===`Enter`&&(!L&&!K&&!O?Ft():L&&P!==null&&!G?Bt():K&&!G&&Vt())}}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[O,L,N,P,G,K,M,j,Z,S]);function $(e){let t=typeof e==`string`?e:e?.mode,n=typeof e==`string`?{}:Ue(e,u);R.current.forEach(clearTimeout),R.current=[];let r=i(t,u,n,{teacherChosen:!!g});if(nt(r),F(null),Be(``),J(null),ot(0),it(!0),t!==`voice`&&De(),t===`voice`){let t=typeof e!=`string`&&e?.voiceRate||.8;ut(t),dt(-1),ke(r.numbers,t,e=>dt(e))}if(t===`flash`){let e=h(u,n).flashSpeed;ct(e),r.numbers.forEach((t,n)=>R.current.push(setTimeout(()=>ot(n),n*e))),R.current.push(setTimeout(()=>ot(r.numbers.length),r.numbers.length*e))}}function Nt(){$(T[j])}function Pt(e){if(!O){if(e===E.length){Tt(!0),it(!1),nt(null),F(null),J(null);return}Tt(!1),et(e),tt(0),F(null),J(null),$(T[e])}}async function Ft(){Oe(),w.current=Date.now(),it(!0),nt(null),F(null),J(null),k?$(T[j]):Et(3),zt(`session_start`,Z).catch(e=>{console.warn(`Practice start saved locally but not submitted:`,e)})}function It(e){if(P!==null||ft)return;let t=He(e)===He(N.answer),n={mode:N.mode,modeLabel:f[N.mode]?.label||N.mode,question:Ht(N),numbers:N.numbers,selectedAnswer:e,correctAnswer:N.answer,isCorrect:t,answeredAt:new Date().toISOString()};if(F(e),ht(e=>[...e,n]),t){let e=H+1;J(e>=xe?{type:`streak`,text:`${e} Streak!`,streak:e}:{type:`correct`,text:`Wow!`}),he(e>=xe?`streak`:`wow`,{streak:e}),e>=xe&&vt(e=>({kind:`poppers`,id:(e?.id??0)+1})),rt(e=>e+1),_t(e=>{let t=e+1;return yt(e=>Math.max(e,t)),t})}else{let t=H>=xe;je(t),vt(e=>({kind:t?`bigShake`:`shake`,id:(e?.id??0)+1})),J({type:`wrong`,text:`Oh no!`}),he(`ohNo`),pt(t=>[...t,{...N,selectedAnswer:e,modeLabel:f[N.mode]?.label||N.mode}]),_t(0)}}function Lt({nextAnswers:e=mt,nextMistakes:t=B,nextCompletedModes:n=V,status:r=`in_progress`,achievements:i=St}={}){let a=e.filter(e=>e.isCorrect).length,c=e.reduce((e,t)=>(e[t.mode]=e[t.mode]||{label:t.modeLabel,correct:0,wrong:0},e[t.mode][t.isCorrect?`correct`:`wrong`]+=1,e),{}),l=w.current?Math.round((Date.now()-w.current)/1e3):0;return{institute_id:o?.id,student_membership_id:s?.id,level:u,session_date:m,mode_rotation:E,completed_modes:n,total_questions:Q,total_time_seconds:l,answered_count:e.length,correct_count:a,wrong_count:e.length-a,max_correct_streak:W,question_type_summary:c,answers:e,mistakes:t,earned_achievements:i.map(e=>({code:e.code,name:e.name,type:e.type})),status:r,completed_at:r===`completed`?new Date().toISOString():null,updated_at:new Date().toISOString()}}function Rt(e,t,r){let i=`practice_report_${n?.id||`guest`}_${m}_level_${u}`;localStorage.setItem(i,JSON.stringify(e));let a=`${i}_events`,o=JSON.parse(localStorage.getItem(a)||`[]`);o.push({eventType:t,mode:r,payload:e,createdAt:new Date().toISOString()}),localStorage.setItem(a,JSON.stringify(o))}async function zt(e,t,n={}){let i=Lt(n);if(Rt(i,e,t),!i.institute_id||!i.student_membership_id)return;wt(!0);let{data:a,error:o}=await l(i);o?console.warn(`Practice report saved locally but not submitted:`,o):await r({institute_id:i.institute_id,student_membership_id:i.student_membership_id,attempt_id:a?.id,level:u,session_date:m,event_type:e,mode:t,payload:i}),wt(!1)}async function Bt(){let e=Je(j);if(M+1<e){tt(e=>e+1),setTimeout(()=>$(T[j]),0);return}let t=[...new Set([...V,Z])];if(gt(t),await zt(`mode_complete`,Z,{nextCompletedModes:t}),j+1<E.length){let e=T[j+1];et(e=>e+1),tt(0),setTimeout(()=>$(e),0);return}Tt(!0),it(!1)}async function Vt(){let e=[...new Set([...V,Z])],t=oe({score:I,totalQuestions:Q,maxCorrectStreak:W,mistakes:B,completedModes:e});Ct(t),localStorage.setItem(D,`done`),localStorage.setItem(`${D}_achievements`,JSON.stringify(t)),localStorage.removeItem(Xe);let n={nextCompletedModes:e,status:`completed`,achievements:t};Qe(Lt(n)),le(`daily-practice`,{score:I,total:Q}),await zt(`session_complete`,`review`,n),o?.id&&s?.id&&await Promise.all(t.map(e=>se({institute_id:o.id,student_membership_id:s.id,achievement_code:e.code,achievement_name:e.name,achievement_type:e.type,description:e.description,metadata:{level:u,session_date:m,score:I,total_questions:Q,max_correct_streak:W}}))),Ze(!0),Tt(!1)}function Ht(e){return a(e.mode)?e.prompt:e.mode===`abacus`?`Abacus number: ${e.answer}`:e.mode===`missing`?`${e.numbers[0]} + ? + ${e.numbers[2]} = ${e.numbers[3]}`:e.mode===`compare`?`1: ${e.numbers.slice(0,3).join(` + `)} | 2: ${e.numbers.slice(4,7).join(` + `)}`:[`table`,`multiply`,`decimalMultiply`].includes(e.mode)?`${p(e.numbers[0])} × ${p(e.numbers[1])}`:[`division`,`decimalDivision`].includes(e.mode)?`${p(e.numbers[0])} ÷ ${p(e.numbers[1])}`:e.mode===`percentage`?`${e.numbers[0]}% of ${e.numbers[1]}`:e.mode===`bonds`?`${e.numbers[0]} + ? = ${e.numbers[1]}`:e.mode===`pattern`?`${e.numbers.join(`, `)}, ?`:e.mode===`double`?`Double ${e.numbers[0]}`:e.mode===`coins`?e.numbers.map(e=>`₹${e}`).join(` + `):e.mode===`count`?`Count ${e.numbers[0]} ${e.thing??``}`.trim():e.mode===`beats`?`Count ${e.numbers[0]} drum beats`:e.mode===`clock`?`Clock at ${e.numbers[0]}:${String(e.numbers[1]).padStart(2,`0`)}`:e.mode===`change`?`Pay ₹${e.numbers[1]} for ₹${e.numbers[0]}`:e.mode===`square`?`${e.numbers[0]}²`:e.mode===`squareRoot`?`√${e.numbers[0]}`:e.mode===`cube`?`${e.numbers[0]}³`:e.mode===`cubeRoot`?`∛${e.numbers[0]}`:t(e.numbers)}function Ut(){if(Y!==null)return(0,v.jsxs)(`div`,{className:`session-countdown`,children:[(0,v.jsx)(`div`,{className:`countdown-ring`,children:(0,v.jsx)(`strong`,{children:Y})}),(0,v.jsx)(`div`,{className:`countdown-title`,children:`Get ready`}),(0,v.jsx)(`div`,{className:`countdown-copy`,children:`Look at the first challenge calmly, then choose your answer.`})]});if(!N)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`session-expression`,children:(0,v.jsx)(`i`,{className:`fa-solid ${f[Z]?.icon??`fa-star`}`})}),(0,v.jsx)(`div`,{className:`session-sub`,children:`Start today's practice.`})]});if(a(Z))return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`session-expression`,children:N.prompt}),(0,v.jsx)(`div`,{className:`session-sub`,children:f[Z]?.label})]});if(Z===`abacus`)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Ie,{value:N.answer}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]});if(Z===`voice`){let e=N?.numbers?.length||0;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`session-expression`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-volume-high`})}),(0,v.jsx)(`div`,{className:`voice-dots`,children:N?.numbers?.map((e,t)=>(0,v.jsx)(`span`,{className:`voice-dot${z===t?` active`:z>t?` done`:``}`},t))}),(0,v.jsx)(`div`,{className:`voice-label`,children:z>=0&&z<e?`Listen... number ${z+1} of ${e}`:`Now add them up!`})]})}if(Z===`flash`){let e=at>=N.numbers.length;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`session-expression ${e?`animate-flash-reveal`:`animate-flash-num`}`,children:e?`?`:N.numbers[at]},at),(0,v.jsx)(`div`,{className:`session-sub`,children:e?`Select the correct sum`:`Number ${at+1} of ${N.numbers.length}`})]})}if(Le.has(Z))return(0,v.jsxs)(v.Fragment,{children:[X===`vertical`?(0,v.jsx)(ze,{numbers:N.numbers}):(0,v.jsx)(`div`,{className:`session-expression`,children:t(N.numbers)}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]});if(Z===`bonds`){let[e,t]=N.numbers;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`fun-frame`,style:{"--cols":t===5?5:10},"aria-hidden":`true`,children:t<=10&&Array.from({length:t},(t,n)=>(0,v.jsx)(`span`,{className:`fun-dot${n<e?` filled`:``}`},n))}),(0,v.jsxs)(`div`,{className:`session-expression`,children:[e,` + `,(0,v.jsx)(`span`,{className:`fun-blank`,children:`?`}),` = `,t]}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]})}if(Z===`pattern`)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`fun-pattern`,children:[N.numbers.map((e,t)=>(0,v.jsx)(`span`,{className:`fun-step`,children:p(e)},t)),(0,v.jsx)(`span`,{className:`fun-step fun-step-next`,children:`?`})]}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]});if(Z===`double`){let[e]=N.numbers;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`fun-double`,children:[(0,v.jsx)(`span`,{className:`fun-card`,children:e}),(0,v.jsx)(`span`,{className:`fun-plus`,children:`+`}),(0,v.jsx)(`span`,{className:`fun-card fun-card-twin`,children:e})]}),(0,v.jsxs)(`div`,{className:`session-expression fun-double-label`,children:[`Double `,e,` = `,(0,v.jsx)(`span`,{className:`fun-blank`,children:`?`})]}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]})}if(Z===`coins`)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`fun-coins`,children:N.numbers.map((e,t)=>(0,v.jsxs)(`span`,{className:`fun-coin${e>=10?` note`:``}`,"data-value":e,style:{animationDelay:`${t*.08}s`},children:[`₹`,e]},t))}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]});if(Z===`count`)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`fun-count`,"aria-hidden":`true`,children:Array.from({length:N.numbers[0]},(e,t)=>(0,v.jsx)(`span`,{style:{animationDelay:`${t*.05}s`},children:N.thing},t))}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]});if(Z===`beats`)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Pe,{count:N.numbers[0]},`${j}-${M}`),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]});if(Z===`clock`)return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(Fe,{hour:N.numbers[0],minute:N.numbers[1]}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]});if(Z===`change`){let[e,t]=N.numbers;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`fun-shop`,children:[(0,v.jsx)(`span`,{className:`fun-toy`,children:N.thing}),(0,v.jsxs)(`span`,{className:`fun-tag`,children:[`₹`,e]}),(0,v.jsx)(`span`,{className:`fun-plus`,children:`←`}),(0,v.jsxs)(`span`,{className:`fun-coin note`,"data-value":t,children:[`₹`,t]})]}),(0,v.jsxs)(`div`,{className:`session-expression fun-double-label`,children:[`₹`,t,` − ₹`,e,` = `,(0,v.jsx)(`span`,{className:`fun-blank`,children:`?`})]}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]})}return Z===`missing`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-expression`,children:[N.numbers[0],` + ? + `,N.numbers[2],` = `,N.numbers[3]]}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]}):Z===`compare`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-expression`,children:[`1: `,N.numbers.slice(0,3).join(` + `),(0,v.jsx)(`br`,{}),`2: `,N.numbers.slice(4,7).join(` + `)]}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]}):Z===`table`||Z===`multiply`||Z===`decimalMultiply`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-expression`,children:[p(N.numbers[0]),` × `,p(N.numbers[1])]}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]}):Z===`division`||Z===`decimalDivision`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-expression`,children:[p(N.numbers[0]),` ÷ `,p(N.numbers[1])]}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]}):Z===`percentage`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-expression`,children:[p(N.numbers[0]),`% of `,p(N.numbers[1])]}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]}):Z===`square`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-expression`,children:[N.numbers[0],(0,v.jsx)(`sup`,{className:`session-power`,children:`2`})]}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]}):Z===`squareRoot`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`session-expression`,children:(0,v.jsxs)(`span`,{className:`session-root`,children:[(0,v.jsx)(`span`,{className:`session-root-sign`,children:`√`}),(0,v.jsx)(`span`,{className:`session-radicand`,children:N.numbers[0]})]})}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]}):Z===`cube`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-expression`,children:[N.numbers[0],(0,v.jsx)(`sup`,{className:`session-power`,children:`3`})]}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]}):Z===`cubeRoot`?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`session-expression`,children:(0,v.jsxs)(`span`,{className:`session-root`,children:[(0,v.jsx)(`sup`,{className:`session-root-index`,children:`3`}),(0,v.jsx)(`span`,{className:`session-root-sign`,children:`√`}),(0,v.jsx)(`span`,{className:`session-radicand`,children:N.numbers[0]})]})}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`div`,{className:`session-expression`,children:t(N.numbers)}),(0,v.jsx)(`div`,{className:`session-sub`,children:N.prompt})]})}return(0,v.jsxs)(`div`,{className:`page-wrap session-page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:[(0,v.jsx)(`style`,{children:be}),(0,v.jsx)(d,{}),U?.kind===`poppers`?(0,v.jsx)(Me,{},U.id):null,(0,v.jsxs)(`div`,{className:`session-shell ${(L||K)&&!O?`playing-active`:``}${U&&U.kind!==`poppers`?` fx-${U.kind}-${U.id%2}`:``}`,children:[jt?(0,v.jsxs)(`button`,{type:`button`,className:`focus-exit`,onClick:()=>{De(),Mt(`/`)},children:[(0,v.jsx)(`i`,{className:`fa-solid fa-xmark`,"aria-hidden":`true`}),` Exit`]}):null,$e===`flash`&&!L?(0,v.jsx)(me,{isNested:!0}):$e===`daily`&&!L&&!K&&!O?x?(0,v.jsxs)(`div`,{className:`session-ready`,children:[(0,v.jsxs)(`section`,{className:`ready-panel ready-game`,children:[(0,v.jsxs)(`div`,{className:`ready-top`,children:[(0,v.jsx)(`span`,{className:`ready-badge`,"aria-hidden":`true`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-rocket`})}),(0,v.jsxs)(`div`,{className:`ready-heading`,children:[(0,v.jsxs)(`span`,{className:`ready-hello`,children:[`Hi `,At,`!`]}),(0,v.jsx)(`h2`,{className:`ready-title`,children:`Today's Challenge`})]}),(0,v.jsxs)(`span`,{className:`ready-date`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-calendar-day`,"aria-hidden":`true`}),` `,Ce(m)]})]}),(0,v.jsxs)(`div`,{className:`ready-stats`,children:[(0,v.jsxs)(`div`,{className:`ready-stat`,style:{"--tile":`#3b82f6`},children:[(0,v.jsx)(`span`,{className:`ready-stat-icon`,"aria-hidden":`true`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-route`})}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`strong`,{children:E.length}),(0,v.jsx)(`span`,{children:`Stops`})]})]}),(0,v.jsxs)(`div`,{className:`ready-stat`,style:{"--tile":`#22c55e`},children:[(0,v.jsx)(`span`,{className:`ready-stat-icon`,"aria-hidden":`true`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-circle-question`})}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`strong`,{children:Q}),(0,v.jsx)(`span`,{children:`Questions`})]})]}),(0,v.jsxs)(`div`,{className:`ready-stat`,style:{"--tile":`#8b5cf6`},children:[(0,v.jsx)(`span`,{className:`ready-stat-icon`,"aria-hidden":`true`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-layer-group`})}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`strong`,{children:u}),(0,v.jsx)(`span`,{children:`Level`})]})]})]}),(0,v.jsxs)(`div`,{className:`ready-reward`,children:[(0,v.jsxs)(`span`,{className:`ready-reward-stars`,"aria-hidden":`true`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-star`}),(0,v.jsx)(`i`,{className:`fa-solid fa-star`}),(0,v.jsx)(`i`,{className:`fa-solid fa-star`})]}),`Finish the journey to win up to 3 stars!`]}),k?(0,v.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,background:`color-mix(in srgb, var(--accent) 10%, transparent)`,border:`1px solid color-mix(in srgb, var(--accent) 25%, transparent)`,borderRadius:10,padding:`8px 14px`,marginBottom:12,fontSize:`0.82rem`,fontWeight:700,color:`var(--accent)`},children:[(0,v.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),`Session in progress — `,k.score,` correct, on step `,k.modeIndex+1,` of `,E.length]}):null,(0,v.jsx)(`div`,{children:(0,v.jsx)(`button`,{className:`session-btn-next`,onClick:Ft,disabled:G,children:G?`Getting Ready…`:k?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),` Resume Practice`]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`i`,{className:`fa-solid fa-play`}),` Start Today's Practice`]})})})]}),(0,v.jsxs)(`aside`,{className:`journey-panel`,children:[(0,v.jsx)(`h2`,{children:`Today's journey`}),(0,v.jsxs)(`div`,{className:`journey-list`,children:[E.map((e,t)=>(0,v.jsxs)(`div`,{className:`journey-card`,style:{"--stop-color":y[t%y.length]},children:[(0,v.jsx)(`span`,{className:`journey-num`,"aria-hidden":`true`,children:t+1}),(0,v.jsx)(`i`,{className:`fa-solid ${f[e]?.icon??`fa-star`}`}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:Se[t]||`Step ${t+1}`}),(0,v.jsxs)(`span`,{children:[f[e]?.label??e,` | `,Je(t),` questions`]})]})]},`${e}-${t}`)),(0,v.jsxs)(`div`,{className:`journey-card`,style:{"--stop-color":`#f59e0b`},children:[(0,v.jsx)(`span`,{className:`journey-num`,"aria-hidden":`true`,children:(0,v.jsx)(`i`,{className:`fa-solid fa-flag-checkered`})}),(0,v.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:`Review`}),(0,v.jsx)(`span`,{children:`Check anything that needs one more look`})]})]})]})]})]}):(0,v.jsx)(`div`,{className:`session-ready`,children:(0,v.jsxs)(`section`,{className:`ready-panel`,children:[(0,v.jsxs)(`div`,{className:`ready-kicker`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-circle-info`}),`Daily Practice`]}),(0,v.jsx)(`h2`,{className:`ready-title`,children:`Paused for now`}),(0,v.jsx)(`p`,{className:`ready-copy`,children:`Your institute has turned off daily practice. Please check back later or ask your teacher.`})]})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`mobile-sub-bar`,children:[(0,v.jsxs)(`div`,{className:`mobile-mode-strip`,children:[E.map((e,t)=>(0,v.jsxs)(`div`,{style:{"--stop-color":y[t%y.length]},className:`mobile-mode-dot${t===j&&!K?` active`:``}${t<j||V.includes(e)?` done`:``}`,onClick:()=>Pt(t),title:f[e]?.label??e,children:[(0,v.jsx)(`i`,{className:`fa-solid ${f[e]?.icon??`fa-star`}`}),(0,v.jsx)(`span`,{children:t+1})]},t)),(0,v.jsxs)(`div`,{style:{"--stop-color":`#f59e0b`},className:`mobile-mode-dot${K?` active`:``}${O?` done`:``}`,onClick:()=>Pt(E.length),title:`Review`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,v.jsx)(`span`,{children:`Rev`})]})]}),Le.has(Z)?(0,v.jsxs)(`div`,{className:`mobile-layout-toggle`,role:`group`,"aria-label":`Question format`,children:[(0,v.jsxs)(`button`,{className:X===`horizontal`?`active`:``,onClick:()=>Ot(`horizontal`),children:[(0,v.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` H`]}),(0,v.jsxs)(`button`,{className:X===`vertical`?`active`:``,onClick:()=>Ot(`vertical`),children:[(0,v.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` V`]})]}):null]}),(0,v.jsxs)(`div`,{className:`session-grid`,children:[(0,v.jsxs)(`div`,{className:`mode-list`,children:[E.map((e,t)=>(0,v.jsxs)(`div`,{style:{"--stop-color":y[t%y.length]},className:`mode-row ${t===j&&!K?`active`:``} ${t<j||O?`done`:``}`,onClick:()=>Pt(t),title:`${Se[t]||`Step ${t+1}`} — ${f[e]?.label??e}`,children:[(0,v.jsx)(`i`,{className:`fa-solid ${f[e]?.icon??`fa-star`}`}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`span`,{className:`journey-step`,children:Se[t]||`Step ${t+1}`}),(0,v.jsxs)(`span`,{className:`journey-mode`,children:[f[e]?.label??e,` | `,Je(t),` questions`]})]})]},`${e}-${t}`)),(0,v.jsxs)(`div`,{style:{"--stop-color":`#f59e0b`},className:`mode-row review ${K?`active`:``} ${O?`done`:``}`,onClick:()=>Pt(E.length),title:`Review mistakes`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,v.jsxs)(`span`,{children:[(0,v.jsx)(`span`,{className:`journey-step`,children:`Review`}),(0,v.jsxs)(`span`,{className:`journey-mode`,children:[B.length,` to check`]})]})]})]}),(0,v.jsx)(`div`,{className:`session-card`,style:{"--stop-color":K||O?`#f59e0b`:y[j%y.length]},children:O?(0,v.jsxs)(`div`,{className:`session-stage session-stage-done`,children:[(0,v.jsx)(_e,{score:A?.correct_count??I,marks:A?.total_questions??Q,messages:{top:`Amazing! Today's journey is done. See you tomorrow!`,pass:`Today's journey is done! Come back tomorrow for more stars.`,low:`You finished today's journey! Practice again tomorrow to earn more stars.`},tiles:[{icon:`fa-check`,label:`Right`,value:A?.correct_count??I,tone:`right`},{icon:`fa-xmark`,label:`Wrong`,value:A?.wrong_count??B.length,tone:`wrong`},{icon:`fa-fire`,label:`Best streak`,value:A?.max_correct_streak??W,tone:`streak`},A?.total_time_seconds?{icon:`fa-stopwatch`,label:`Time`,value:ge(A.total_time_seconds*1e3),tone:`time`}:null].filter(Boolean),footnote:`Level ${u} · ${m} · Report saved for your teacher`}),St.length?(0,v.jsx)(`div`,{className:`achievement-strip`,children:St.map(e=>(0,v.jsxs)(`div`,{className:`achievement-chip`,children:[(0,v.jsx)(`i`,{className:`fa-solid ${e.icon}`,style:{background:e.color}}),(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`strong`,{children:e.name}),(0,v.jsx)(`span`,{children:e.description})]})]},e.code))}):null]}):K?(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-game-header`,children:[(0,v.jsx)(`span`,{className:`session-mode-pill`,children:`Mistake Review`}),(0,v.jsx)(`div`,{className:`session-spacer`}),(0,v.jsxs)(`span`,{className:`session-score-chip`,children:[`Score `,I,`/`,Q]})]}),(0,v.jsx)(`div`,{className:`session-prog-track`,children:(0,v.jsx)(`div`,{className:`session-prog-fill`,style:{width:`100%`}})}),(0,v.jsxs)(`div`,{className:`session-stage`,style:{alignItems:`stretch`,justifyContent:`flex-start`,paddingTop:0},children:[(0,v.jsxs)(`div`,{className:`review-head`,children:[(0,v.jsx)(`span`,{className:`review-badge`,"aria-hidden":`true`,children:(0,v.jsx)(`i`,{className:`fa-solid ${B.length?`fa-magnifying-glass`:`fa-crown`}`})}),(0,v.jsx)(`div`,{className:`session-result review-title`,children:B.length?`Let's fix these together`:`No mistakes today!`})]}),(0,v.jsx)(`div`,{className:`session-sub`,children:B.length?`Check the correct answers before you finish.`:`Clean round! Finish and come back tomorrow.`}),B.length?(0,v.jsx)(`div`,{className:`mistake-list`,children:B.map((e,t)=>(0,v.jsxs)(`div`,{className:`mistake-card`,children:[(0,v.jsx)(`span`,{className:`mistake-num`,"aria-hidden":`true`,children:t+1}),(0,v.jsxs)(`div`,{className:`mistake-body`,children:[(0,v.jsx)(`strong`,{children:Ht(e)}),(0,v.jsx)(`small`,{children:e.modeLabel})]}),(0,v.jsxs)(`div`,{className:`mistake-answers`,children:[(0,v.jsxs)(`span`,{className:`mistake-chip wrong`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-xmark`,"aria-hidden":`true`}),` `,e.selectedAnswer]}),(0,v.jsxs)(`span`,{className:`mistake-chip right`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-check`,"aria-hidden":`true`}),` `,e.answer]})]})]},`${e.mode}-${t}`))}):null]}),(0,v.jsx)(`div`,{className:`session-action-bar`,children:(0,v.jsx)(`button`,{className:`session-btn-next`,onClick:Vt,disabled:G,children:G?`Saving…`:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`i`,{className:`fa-solid fa-flag-checkered`}),` Finish Today`]})})})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:`session-game-header`,children:[(0,v.jsx)(`span`,{className:`session-mode-pill`,children:f[Z]?.label??Z}),(0,v.jsxs)(`span`,{className:`session-q-counter`,children:[`Q `,M+1,` / `,Je(j)]}),Le.has(Z)?(0,v.jsxs)(`div`,{className:`layout-toggle layout-toggle-inline`,role:`group`,"aria-label":`Question format`,children:[(0,v.jsxs)(`button`,{className:X===`horizontal`?`active`:``,onClick:()=>Ot(`horizontal`),children:[(0,v.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` H`]}),(0,v.jsxs)(`button`,{className:X===`vertical`?`active`:``,onClick:()=>Ot(`vertical`),children:[(0,v.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` V`]})]}):null,(0,v.jsx)(`div`,{className:`session-spacer`}),bt?(0,v.jsxs)(`span`,{className:`resumed-pill`,onAnimationEnd:()=>xt(!1),children:[(0,v.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),` Resumed`]}):null,H>=2?(0,v.jsxs)(`span`,{className:`session-streak-chip`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-fire`,"aria-hidden":`true`}),` `,H,` in a row`]},H):null,(0,v.jsxs)(`span`,{className:`session-score-chip`,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-star`,"aria-hidden":`true`}),` `,I,`/`,kt+(P===null?0:1)]})]}),(0,v.jsx)(`div`,{className:`session-prog-track`,children:(0,v.jsx)(`div`,{className:`session-prog-fill`,style:{width:`${kt/Q*100}%`},children:(0,v.jsx)(`i`,{className:`fa-solid fa-star session-prog-star`,"aria-hidden":`true`})})}),(0,v.jsx)(`div`,{className:`session-stage`,children:Ut()}),(0,v.jsx)(`div`,{className:`feedback-pop`,children:q?(0,v.jsxs)(`div`,{className:`feedback-bubble ${q.type}`,role:`status`,children:[(0,v.jsx)(`span`,{className:`feedback-character`,"aria-hidden":`true`,children:(0,v.jsx)(`i`,{className:`fa-solid ${q.type===`streak`?`fa-fire`:q.type===`correct`?`fa-star`:`fa-face-frown-open`}`})}),q.text,q.type===`streak`?(0,v.jsx)(`span`,{className:`feedback-flames`,"aria-hidden":`true`,children:Array.from({length:Math.min(q.streak,5)},(e,t)=>(0,v.jsx)(`i`,{className:`fa-solid fa-fire`,style:{animationDelay:`${t*.08}s`}},t))}):null]},mt.length):null}),(0,v.jsx)(`div`,{className:`session-answer-area`,children:N&&S===`input`?(0,v.jsx)(`div`,{className:`typed-answer-wrap`,children:(0,v.jsxs)(`div`,{className:`typed-answer-row`,children:[(0,v.jsx)(`input`,{ref:We,className:`typed-answer-input`,type:`text`,inputMode:`decimal`,pattern:`-?[0-9]*\\.?[0-9]*`,value:C,disabled:P!==null||ft,onChange:e=>Be(Ve(e.target.value)),onKeyDown:e=>{e.key===`Enter`&&C.trim()!==``&&(e.preventDefault(),It(C))},placeholder:`Type your answer…`}),(0,v.jsx)(`button`,{className:`typed-answer-submit`,disabled:P!==null||C.trim()===``,onClick:()=>It(C),children:`Submit`})]})}):N?(0,v.jsx)(`div`,{className:`mcq-grid`,children:N.options.map((e,t)=>{let n=``;return P!==null&&e===P&&(n=e===N.answer?`correct`:`wrong`),(0,v.jsxs)(`button`,{className:`mcq-btn ${n}`,disabled:P!==null||ft,onClick:()=>It(e),children:[(0,v.jsx)(`span`,{className:`mcq-key-hint`,children:t+1}),e]},e)})}):null}),(0,v.jsxs)(`div`,{className:`session-action-bar`,children:[Z===`voice`&&N?(0,v.jsxs)(`button`,{className:`session-btn-ghost`,onClick:()=>{dt(-1),ke(N.numbers,lt,e=>dt(e))},children:[(0,v.jsx)(`i`,{className:`fa-solid fa-volume-high`}),` Repeat`]}):null,!L&&!N?(0,v.jsxs)(`button`,{className:`session-btn-next`,onClick:Nt,children:[(0,v.jsx)(`i`,{className:`fa-solid fa-play`}),` Start`]}):null,P!==null&&G?(0,v.jsx)(`button`,{className:`session-btn-next`,disabled:!0,children:`Saving…`}):null]})]})})]})]})]})]})}export{T as default};