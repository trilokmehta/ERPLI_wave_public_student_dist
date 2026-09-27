import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{B as t,F as n,O as r,P as i,S as a,Y as o,_ as s,b as c,g as ee,gt as te,h as l,kt as u,lt as ne,m as d,mt as re,p as f,pt as ie,u as ae,v as oe,x as se,y as ce,z as le}from"./interactive-Bll_ySd5.js";import{h as ue}from"./index-Cdn5q43n.js";import{m as de}from"./mcq-Ci9shwMC.js";import{n as fe,t as pe}from"./vedicSyllabus-y4_Jbidu.js";var p=e(u(),1),m=t(),me=`
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
`,he=[`Warm Up`,`Brain Builder`,`Speed Round`,`Focus Finish`,`Missing Link`,`Compare Clash`];function ge(){return new Date().toLocaleDateString(`en-CA`)}function _e(e,t=.8,n=null){if(!(`speechSynthesis`in window))return!1;window.speechSynthesis.cancel();let r=e.map((e,t)=>t===0?String(e):e<0?`minus ${Math.abs(e)}`:`plus ${e}`),i=0;function a(){if(i>=r.length){n?.(-1);return}n?.(i);let e=new SpeechSynthesisUtterance(r[i]);e.rate=t,e.onend=()=>{i++,setTimeout(a,500)},window.speechSynthesis.speak(e)}return a(),!0}function ve(e){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let n=new t,r=n.createGain();r.connect(n.destination),r.gain.setValueAtTime(1e-4,n.currentTime),r.gain.exponentialRampToValueAtTime(.14,n.currentTime+.02),r.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.35),(e===`correct`?[523.25,659.25,783.99]:[196,164.81]).forEach((t,i)=>{let a=n.createOscillator();a.type=e===`correct`?`sine`:`triangle`,a.frequency.value=t,a.connect(r);let o=n.currentTime+i*.09;a.start(o),a.stop(o+.12)}),setTimeout(()=>n.close(),500)}function ye(){`vibrate`in navigator&&navigator.vibrate([80,40,80])}function be({value:e}){return(0,m.jsx)(`div`,{className:`session-abacus`,children:String(e).padStart(2,`0`).split(``).map(Number).map((e,t)=>{let n=e>=5,r=e%5;return(0,m.jsxs)(`div`,{className:`session-col`,children:[(0,m.jsx)(`div`,{className:`session-bead-zone heaven`,children:(0,m.jsx)(`span`,{className:`session-bead ${n?`active`:``}`})}),(0,m.jsx)(`div`,{className:`session-bead-zone`,children:[1,2,3,4].map(e=>(0,m.jsx)(`span`,{className:`session-bead ${r>=e?`active`:``}`},e))})]},`${e}-${t}`)})})}var xe=new Set([`full`,`longSum`,`addSub`,`decimalAddSub`,`negative`]),Se=`practice_question_layout`;function Ce({numbers:e}){return(0,m.jsxs)(`div`,{className:`session-vertical`,children:[e.map((e,t)=>(0,m.jsxs)(`span`,{style:{display:`contents`},children:[(0,m.jsx)(`span`,{className:`vrow-sign`,children:t===0?``:e<0?`-`:`+`}),(0,m.jsx)(`span`,{className:`vrow-value`,children:a(t===0?e:Math.abs(e))})]},`${e}-${t}`)),(0,m.jsx)(`span`,{className:`vrule`}),(0,m.jsx)(`span`,{className:`vtotal`,children:`?`})]})}var we=new Set([`full`,`longSum`,`flash`,`voice`,`addSub`,`missing`,`compare`,`abacus`]);function h(e){return e?{min:e<=1?1:10**(e-1),max:10**e-1}:null}function Te(e){let t=e.trim().startsWith(`-`),[n,...r]=e.replace(/[^0-9.]/g,``).split(`.`),i=r.length?`.${r.join(``)}`:``;return`${t?`-`:``}${n}${i}`}function g(e){let t=String(e??``).trim().toLowerCase();return t&&/^-?\d*\.?\d+$/.test(t)?String(Number(t)):t}function Ee(e,t){if(!e||!(e.rows!=null||e.digits!=null||e.digits2!=null||e.decimals!=null||e.rule!=null||e.flashSpeed!=null||e.voiceRate!=null))return{};let n=l(t),r=h(e.digits),i=h(e.digits2),a={};if(e.rule&&(a.rules={...n.rules||{},rule:e.rule}),e.flashSpeed!=null&&(a.flashSpeed=e.flashSpeed),we.has(e.mode)){let t=n.additionConfigs&&n.additionConfigs[0]||n.number||{min:1,max:9,count:3},i={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count};a.additionConfigs=[i],a.number={...i}}else if(e.mode===`multiply`){let e=n.multiply||{};a.multiply={aMin:r?r.min:e.aMin,aMax:r?r.max:e.aMax,bMin:i?i.min:e.bMin,bMax:i?i.max:e.bMax}}else if(e.mode===`division`){let e=n.division||{};a.division={quotientMin:r?r.min:e.quotientMin,quotientMax:r?r.max:e.quotientMax,divisorMin:i?i.min:e.divisorMin,divisorMax:i?i.max:e.divisorMax}}else if(e.mode===`decimalAddSub`){let t=n.number||{min:10,max:99,count:3};a.number={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count},e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals,addDivisor:10**e.decimals})}else if(e.mode===`negative`){let t=n.negative||{};a.negative={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count}}else if(e.mode===`percentage`){let e=n.percentage||{};a.percentage={...e,baseMin:r?r.min:e.baseMin,baseMax:r?r.max:e.baseMax}}else (e.mode===`decimalMultiply`||e.mode===`decimalDivision`)&&e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals});return Object.keys(a).length===0?{}:{[t]:a}}var De=[20,20,20,20,10,10];function Oe(e,t){let n=l(e).modes,r=n.slice(-3).reverse(),i=n.slice(0,-3),a=i.length?c(`${t}-${e}-fallback`)%i.length:0,o=i.map((e,t)=>i[(a+t)%i.length]),s=[...r];for(let e of o){if(s.length>=De.length)break;s.includes(e)||s.push(e)}return s.map((e,t)=>({mode:e,questions:De[t]??4}))}var ke=10;function Ae(e,t,{vedicTopics:n,activeSubjects:i}){if(!ue(`vedic`,i))return null;let a=fe(r.map(e=>e.name),n);if(!a&&!l(e).modes.includes(`multiply`))return null;let o=r.filter(t=>{let n=pe(t.name,e,a);return n.taught&&!n.locked});return o.length?`${d}${o[c(`${t}-${e}-vedic`)%o.length].id}`:null}function je(){let{profile:e,user:t,institute:r,membership:c}=le(),u=ce(e?.current_level),d=ge(),[ue,fe]=(0,p.useState)(null),{ready:pe,vedicTopics:we,activeSubjects:h}=n(),[De,je]=(0,p.useState)(!0),[_,Me]=(0,p.useState)(`mcq`),[v,Ne]=(0,p.useState)(``),Pe=(0,p.useRef)(null),Fe=(0,p.useRef)(null),y=(0,p.useMemo)(()=>{let e=ue;if(!e){e=Oe(u,d);let t=pe?Ae(u,d,{vedicTopics:we,activeSubjects:h}):null;t&&(e=[...e,{mode:t,questions:ke}])}let t=e.filter(e=>ee(e.mode,u));return t.length?t:l(u).modes.slice(0,4).map(e=>({mode:e,questions:4}))},[ue,u,d,pe,we,h]),b=(0,p.useMemo)(()=>y.map(e=>e.mode),[y]),x=e=>Number(y[e]?.questions)||4,S=`practice_session_${t?.id||`guest`}_${d}_level_${u}`,Ie=`practice_report_${t?.id||`guest`}_${d}_level_${u}`,Le=`practice_draft_${t?.id||`guest`}_level_${u}`,[C,Re]=(0,p.useState)(()=>localStorage.getItem(S)===`done`),[w]=(0,p.useState)(()=>{try{if(localStorage.getItem(S)===`done`)return null;let e=localStorage.getItem(Le);if(!e)return null;let t=JSON.parse(e);return t.date===d?t:null}catch{return null}}),[ze,Be]=(0,p.useState)(()=>{try{let e=localStorage.getItem(Ie);return e?JSON.parse(e):null}catch{return null}}),[T,Ve]=(0,p.useState)(`daily`),[E,He]=(0,p.useState)(()=>{let e=w?.modeIndex??0;return y.length>0?Math.min(e,y.length-1):0}),[D,Ue]=(0,p.useState)(w?.questionIndex??0),[O,We]=(0,p.useState)(null),[k,A]=(0,p.useState)(null),[j,Ge]=(0,p.useState)(w?.score??0),[M,N]=(0,p.useState)(!1),[P,Ke]=(0,p.useState)(0),[qe,Je]=(0,p.useState)(1500),[Ye,Xe]=(0,p.useState)(.8),[F,I]=(0,p.useState)(-1),[L,Ze]=(0,p.useState)(w?.mistakes??[]),[Qe,$e]=(0,p.useState)(w?.answers??[]),[R,et]=(0,p.useState)(w?.completedModes??[]),[tt,nt]=(0,p.useState)(0),[z,rt]=(0,p.useState)(w?.maxCorrectStreak??0),[it,at]=(0,p.useState)(!!w),[ot,st]=(0,p.useState)([]),[B,ct]=(0,p.useState)(!1),[V,H]=(0,p.useState)(!1),[U,W]=(0,p.useState)(null),[G,K]=(0,p.useState)(null),[q,lt]=(0,p.useState)(()=>localStorage.getItem(Se)||`horizontal`);(0,p.useEffect)(()=>{_===`input`&&O&&k===null&&Fe.current?.focus()},[O,_,k]),(0,p.useEffect)(()=>{if(k===null||V||C)return;let e=setTimeout(()=>vt(),750);return()=>clearTimeout(e)},[k,V,C]),(0,p.useEffect)(()=>{if(!(!M||C||V||T!==`daily`))try{localStorage.setItem(Le,JSON.stringify({date:d,modeIndex:E,questionIndex:D,score:j,mistakes:L,answers:Qe,completedModes:R,maxCorrectStreak:z}))}catch{}},[E,D,j,L,Qe,R,z]);function J(e){lt(e),localStorage.setItem(Se,e)}let Y=b[E],X=(0,p.useMemo)(()=>y.reduce((e,t)=>e+(Number(t.questions)||4),0),[y]),ut=(0,p.useMemo)(()=>{let e=0;return y.forEach((t,n)=>{let r=Number(t.questions)||4;n<E?e+=r:n===E&&(e+=D)}),e},[y,E,D]);(0,p.useEffect)(()=>{let e=!1;async function t(){if(!r?.id)return;let{data:t}=await o(r.id);if(e||!t)return;je(t.enabled??!0),Me(t.answer_mode||`mcq`);let n=t.journey?.[u]||t.journey?.[String(u)];Array.isArray(n)&&n.length&&fe(n.map(e=>({mode:e.mode,questions:Number(e.questions)||4,rows:e.rows,digits:e.digits,digits2:e.digits2,decimals:e.decimals})))}return t(),()=>{e=!0}},[r?.id,u]);let dt=e?.full_name?.split(` `)?.[0]||e?.name?.split(` `)?.[0]||t?.email?.split(`@`)?.[0]||`champ`,ft=T===`daily`&&(M||V)&&!C;(0,p.useEffect)(()=>(document.body.classList.toggle(`practice-session-focus`,ft),()=>document.body.classList.remove(`practice-session-focus`)),[ft]),(0,p.useEffect)(()=>{if(G===null)return;let e=setTimeout(()=>{if(G>1){K(e=>e-1);return}K(null),Z(y[E])},900);return()=>clearTimeout(e)},[y,E,G]),(0,p.useEffect)(()=>{function e(e){if(!(document.activeElement.tagName===`INPUT`||document.activeElement.tagName===`TEXTAREA`)){if(!C&&M&&O&&k===null&&_!==`input`&&[`1`,`2`,`3`,`4`].includes(e.key)){let t=Number(e.key)-1;O.options&&O.options[t]!==void 0&&$(O.options[t])}e.key===`Enter`&&(!M&&!V&&!C?mt():M&&k!==null&&!B?vt():V&&!B&&yt())}}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[C,M,O,k,B,V,D,E,Y,_]);function Z(e){let t=typeof e==`string`?e:e?.mode,n=typeof e==`string`?{}:Ee(e,u),r=oe(t,u,n);if(We(r),A(null),Ne(``),W(null),Ke(0),N(!0),t===`voice`){let t=typeof e!=`string`&&e?.voiceRate||.8;Xe(t),I(-1),_e(r.numbers,t,e=>I(e))}if(t===`flash`){let e=l(u,n).flashSpeed;Je(e),r.numbers.forEach((t,n)=>setTimeout(()=>Ke(n),n*e)),setTimeout(()=>Ke(r.numbers.length),r.numbers.length*e)}}function pt(){Z(y[E])}function Q(e){if(!C){if(e===b.length){H(!0),N(!1),We(null),A(null),W(null);return}H(!1),He(e),Ue(0),A(null),W(null),Z(y[e])}}async function mt(){Pe.current=Date.now(),N(!0),We(null),A(null),W(null),w?Z(y[E]):K(3),_t(`session_start`,Y).catch(e=>{console.warn(`Practice start saved locally but not submitted:`,e)})}function $(e){if(k!==null)return;let t=g(e)===g(O.answer),n={mode:O.mode,modeLabel:f[O.mode]?.label||O.mode,question:bt(O),numbers:O.numbers,selectedAnswer:e,correctAnswer:O.answer,isCorrect:t,answeredAt:new Date().toISOString()};A(e),$e(e=>[...e,n]),t?(ve(`correct`),W({type:`correct`,text:`Great job`}),Ge(e=>e+1),nt(e=>{let t=e+1;return rt(e=>Math.max(e,t)),t})):(ve(`wrong`),ye(),W({type:`wrong`,text:`Good try. The answer was ${O.answer}.`}),Ze(t=>[...t,{...O,selectedAnswer:e,modeLabel:f[O.mode]?.label||O.mode}]),nt(0))}function ht({nextAnswers:e=Qe,nextMistakes:t=L,nextCompletedModes:n=R,status:i=`in_progress`,achievements:a=ot}={}){let o=e.filter(e=>e.isCorrect).length,s=e.reduce((e,t)=>(e[t.mode]=e[t.mode]||{label:t.modeLabel,correct:0,wrong:0},e[t.mode][t.isCorrect?`correct`:`wrong`]+=1,e),{}),ee=Pe.current?Math.round((Date.now()-Pe.current)/1e3):0;return{institute_id:r?.id,student_membership_id:c?.id,level:u,session_date:d,mode_rotation:b,completed_modes:n,total_questions:X,total_time_seconds:ee,answered_count:e.length,correct_count:o,wrong_count:e.length-o,max_correct_streak:z,question_type_summary:s,answers:e,mistakes:t,earned_achievements:a.map(e=>({code:e.code,name:e.name,type:e.type})),status:i,completed_at:i===`completed`?new Date().toISOString():null,updated_at:new Date().toISOString()}}function gt(e,n,r){let i=`practice_report_${t?.id||`guest`}_${d}_level_${u}`;localStorage.setItem(i,JSON.stringify(e));let a=`${i}_events`,o=JSON.parse(localStorage.getItem(a)||`[]`);o.push({eventType:n,mode:r,payload:e,createdAt:new Date().toISOString()}),localStorage.setItem(a,JSON.stringify(o))}async function _t(e,t,n={}){let r=ht(n);if(gt(r,e,t),!r.institute_id||!r.student_membership_id)return;ct(!0);let{data:i,error:a}=await ie(r);a?console.warn(`Practice report saved locally but not submitted:`,a):await ne({institute_id:r.institute_id,student_membership_id:r.student_membership_id,attempt_id:i?.id,level:u,session_date:d,event_type:e,mode:t,payload:r}),ct(!1)}async function vt(){let e=x(E);if(D+1<e){Ue(e=>e+1),setTimeout(()=>Z(y[E]),0);return}let t=[...new Set([...R,Y])];if(et(t),await _t(`mode_complete`,Y,{nextCompletedModes:t}),E+1<b.length){let e=y[E+1];He(e=>e+1),Ue(0),setTimeout(()=>Z(e),0);return}H(!0),N(!1)}async function yt(){let e=[...new Set([...R,Y])],t=te({score:j,totalQuestions:X,maxCorrectStreak:z,mistakes:L,completedModes:e});st(t),localStorage.setItem(S,`done`),localStorage.setItem(`${S}_achievements`,JSON.stringify(t)),localStorage.removeItem(Le);let n={nextCompletedModes:e,status:`completed`,achievements:t};Be(ht(n)),await _t(`session_complete`,`review`,n),r?.id&&c?.id&&await Promise.all(t.map(e=>re({institute_id:r.id,student_membership_id:c.id,achievement_code:e.code,achievement_name:e.name,achievement_type:e.type,description:e.description,metadata:{level:u,session_date:d,score:j,total_questions:X,max_correct_streak:z}}))),Re(!0),H(!1)}function bt(e){return s(e.mode)?e.prompt:e.mode===`abacus`?`Abacus number: ${e.answer}`:e.mode===`missing`?`${e.numbers[0]} + ? + ${e.numbers[2]} = ${e.numbers[3]}`:e.mode===`compare`?`1: ${e.numbers.slice(0,3).join(` + `)} | 2: ${e.numbers.slice(4,7).join(` + `)}`:[`table`,`multiply`,`decimalMultiply`].includes(e.mode)?`${a(e.numbers[0])} x ${a(e.numbers[1])}`:[`division`,`decimalDivision`].includes(e.mode)?`${a(e.numbers[0])} / ${a(e.numbers[1])}`:e.mode===`percentage`?`${e.numbers[0]}% of ${e.numbers[1]}`:e.mode===`square`?`${e.numbers[0]} squared`:e.mode===`squareRoot`?`square root of ${e.numbers[0]}`:e.mode===`cube`?`${e.numbers[0]} cubed`:e.mode===`cubeRoot`?`cube root of ${e.numbers[0]}`:se(e.numbers)}function xt(){if(G!==null)return(0,m.jsxs)(`div`,{className:`session-countdown`,children:[(0,m.jsx)(`div`,{className:`countdown-ring`,children:(0,m.jsx)(`strong`,{children:G})}),(0,m.jsx)(`div`,{className:`countdown-title`,children:`Get ready`}),(0,m.jsx)(`div`,{className:`countdown-copy`,children:`Look at the first challenge calmly, then choose your answer.`})]});if(!O)return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`session-expression`,children:(0,m.jsx)(`i`,{className:`fa-solid ${f[Y]?.icon??`fa-star`}`})}),(0,m.jsx)(`div`,{className:`session-sub`,children:`Start today's session.`})]});if(s(Y))return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`session-expression`,children:O.prompt}),(0,m.jsx)(`div`,{className:`session-sub`,children:f[Y]?.label})]});if(Y===`abacus`)return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(be,{value:O.answer}),(0,m.jsx)(`div`,{className:`session-sub`,children:O.prompt})]});if(Y===`voice`){let e=O?.numbers?.length||0;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`session-expression`,children:(0,m.jsx)(`i`,{className:`fa-solid fa-volume-high`})}),(0,m.jsx)(`div`,{className:`voice-dots`,children:O?.numbers?.map((e,t)=>(0,m.jsx)(`span`,{className:`voice-dot${F===t?` active`:F>t?` done`:``}`},t))}),(0,m.jsx)(`div`,{className:`voice-label`,children:F>=0&&F<e?`Number ${F+1} of ${e}`:`Listen and add up the numbers`})]})}if(Y===`flash`){let e=P>=O.numbers.length;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`session-expression ${e?`animate-flash-reveal`:`animate-flash-num`}`,children:e?`?`:O.numbers[P]},P),(0,m.jsx)(`div`,{className:`session-sub`,children:e?`Select the correct sum`:`Number ${P+1} of ${O.numbers.length}`})]})}return xe.has(Y)?(0,m.jsxs)(m.Fragment,{children:[q===`vertical`?(0,m.jsx)(Ce,{numbers:O.numbers}):(0,m.jsx)(`div`,{className:`session-expression`,children:se(O.numbers)}),(0,m.jsx)(`div`,{className:`session-sub`,children:O.prompt})]}):Y===`missing`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[O.numbers[0],` + ? + `,O.numbers[2],` = `,O.numbers[3]]}),(0,m.jsx)(`div`,{className:`session-sub`,children:O.prompt})]}):Y===`compare`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[`1: `,O.numbers.slice(0,3).join(` + `),(0,m.jsx)(`br`,{}),`2: `,O.numbers.slice(4,7).join(` + `)]}),(0,m.jsx)(`div`,{className:`session-sub`,children:O.prompt})]}):Y===`table`||Y===`multiply`||Y===`decimalMultiply`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[a(O.numbers[0]),` x `,a(O.numbers[1])]}),(0,m.jsx)(`div`,{className:`session-sub`,children:O.prompt})]}):Y===`division`||Y===`decimalDivision`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[a(O.numbers[0]),` / `,a(O.numbers[1])]}),(0,m.jsx)(`div`,{className:`session-sub`,children:O.prompt})]}):Y===`percentage`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[a(O.numbers[0]),`% of `,a(O.numbers[1])]}),(0,m.jsx)(`div`,{className:`session-sub`,children:O.prompt})]}):Y===`square`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[O.numbers[0],`^2`]}),(0,m.jsx)(`div`,{className:`session-sub`,children:O.prompt})]}):Y===`squareRoot`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[`sqrt(`,O.numbers[0],`)`]}),(0,m.jsx)(`div`,{className:`session-sub`,children:O.prompt})]}):Y===`cube`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[O.numbers[0],`^3`]}),(0,m.jsx)(`div`,{className:`session-sub`,children:O.prompt})]}):Y===`cubeRoot`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-expression`,children:[`cuberoot(`,O.numbers[0],`)`]}),(0,m.jsx)(`div`,{className:`session-sub`,children:O.prompt})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:`session-expression`,children:se(O.numbers)}),(0,m.jsx)(`div`,{className:`session-sub`,children:O.prompt})]})}return(0,m.jsxs)(`div`,{className:`page-wrap session-page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:[(0,m.jsx)(`style`,{children:me}),(0,m.jsx)(i,{}),(0,m.jsxs)(`div`,{className:`session-shell ${(M||V)&&!C?`playing-active`:``}`,children:[(0,m.jsxs)(`div`,{className:`session-hero`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h1`,{children:T===`flash`?`Mental Flash Training`:`Daily Session`}),(0,m.jsx)(`p`,{children:T===`flash`?`Customize and play infinite rounds of listening, abacus visualization, and speed flashes.`:`Four quick challenge cards, then one mistake review card to help you level up.`})]}),(0,m.jsx)(ae,{variant:`practice-banner`,size:260}),(0,m.jsx)(`div`,{className:`session-pill`,children:T===`flash`?`Free Training`:`Level ${u} | ${d}`})]}),!M&&!V&&(0,m.jsx)(`div`,{className:`session-tabs`,children:(0,m.jsxs)(`button`,{className:`session-tab-btn ${T===`daily`?`active`:``}`,onClick:()=>Ve(`daily`),children:[(0,m.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),` Daily Session`,!C&&(0,m.jsx)(`span`,{style:{display:`inline-block`,width:`8px`,height:`8px`,borderRadius:`50%`,background:`#f59e0b`,boxShadow:`0 0 8px #f59e0b`,marginLeft:`6px`,verticalAlign:`middle`},title:`Pending for today`})]})}),T===`flash`&&!M?(0,m.jsx)(de,{isNested:!0}):T===`daily`&&!M&&!V&&!C?De?(0,m.jsxs)(`div`,{className:`session-ready`,children:[(0,m.jsxs)(`section`,{className:`ready-panel`,children:[(0,m.jsxs)(`div`,{className:`ready-kicker`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),`Daily Session`]}),(0,m.jsxs)(`h2`,{className:`ready-title`,children:[`Ready, `,dt,`?`]}),(0,m.jsx)(`p`,{className:`ready-copy`,children:`Today has a short practice journey. Start when you are ready, then the page will become quiet so you can focus.`}),(0,m.jsxs)(`div`,{className:`ready-stats`,children:[(0,m.jsxs)(`div`,{className:`ready-stat`,children:[(0,m.jsx)(`strong`,{children:b.length}),(0,m.jsx)(`span`,{children:`practice stops`})]}),(0,m.jsxs)(`div`,{className:`ready-stat`,children:[(0,m.jsx)(`strong`,{children:X}),(0,m.jsx)(`span`,{children:`questions today`})]}),(0,m.jsxs)(`div`,{className:`ready-stat`,children:[(0,m.jsxs)(`strong`,{children:[`Level `,u]}),(0,m.jsx)(`span`,{children:`current level`})]})]}),w?(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,background:`color-mix(in srgb, var(--accent) 10%, transparent)`,border:`1px solid color-mix(in srgb, var(--accent) 25%, transparent)`,borderRadius:10,padding:`8px 14px`,marginBottom:12,fontSize:`0.82rem`,fontWeight:700,color:`var(--accent)`},children:[(0,m.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),`Session in progress — `,w.score,` correct, on step `,w.modeIndex+1,` of `,b.length]}):null,(0,m.jsx)(`div`,{children:(0,m.jsx)(`button`,{className:`session-btn-next`,onClick:mt,disabled:B,children:B?`Getting Ready…`:w?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),` Resume Session`]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`i`,{className:`fa-solid fa-play`}),` Start Today's Practice`]})})})]}),(0,m.jsxs)(`aside`,{className:`journey-panel`,children:[(0,m.jsx)(`h2`,{children:`Today's journey`}),(0,m.jsxs)(`div`,{className:`journey-list`,children:[b.map((e,t)=>(0,m.jsxs)(`div`,{className:`journey-card`,children:[(0,m.jsx)(`i`,{className:`fa-solid ${f[e]?.icon??`fa-star`}`}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`strong`,{children:he[t]||`Step ${t+1}`}),(0,m.jsxs)(`span`,{children:[f[e]?.label??e,` | `,x(t),` questions`]})]})]},`${e}-${t}`)),(0,m.jsxs)(`div`,{className:`journey-card`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`strong`,{children:`Review`}),(0,m.jsx)(`span`,{children:`Check anything that needs one more look`})]})]})]})]})]}):(0,m.jsx)(`div`,{className:`session-ready`,children:(0,m.jsxs)(`section`,{className:`ready-panel`,children:[(0,m.jsxs)(`div`,{className:`ready-kicker`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-circle-info`}),`Daily Session`]}),(0,m.jsx)(`h2`,{className:`ready-title`,children:`Paused for now`}),(0,m.jsx)(`p`,{className:`ready-copy`,children:`Your institute has turned off daily practice. Please check back later or ask your teacher.`})]})}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`mobile-sub-bar`,children:[(0,m.jsxs)(`div`,{className:`mobile-mode-strip`,children:[b.map((e,t)=>(0,m.jsxs)(`div`,{className:`mobile-mode-dot${t===E&&!V?` active`:``}${t<E||R.includes(e)?` done`:``}`,onClick:()=>Q(t),title:f[e]?.label??e,children:[(0,m.jsx)(`i`,{className:`fa-solid ${f[e]?.icon??`fa-star`}`}),(0,m.jsx)(`span`,{children:t+1})]},t)),(0,m.jsxs)(`div`,{className:`mobile-mode-dot${V?` active`:``}${C?` done`:``}`,onClick:()=>Q(b.length),title:`Review`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,m.jsx)(`span`,{children:`Rev`})]})]}),xe.has(Y)?(0,m.jsxs)(`div`,{className:`mobile-layout-toggle`,role:`group`,"aria-label":`Question format`,children:[(0,m.jsxs)(`button`,{className:q===`horizontal`?`active`:``,onClick:()=>J(`horizontal`),children:[(0,m.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` H`]}),(0,m.jsxs)(`button`,{className:q===`vertical`?`active`:``,onClick:()=>J(`vertical`),children:[(0,m.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` V`]})]}):null]}),(0,m.jsxs)(`div`,{className:`session-grid`,children:[(0,m.jsxs)(`div`,{className:`mode-list`,children:[b.map((e,t)=>(0,m.jsxs)(`div`,{className:`mode-row ${t===E&&!V?`active`:``} ${t<E||C?`done`:``}`,onClick:()=>Q(t),title:`${he[t]||`Step ${t+1}`} — ${f[e]?.label??e}`,children:[(0,m.jsx)(`i`,{className:`fa-solid ${f[e]?.icon??`fa-star`}`}),(0,m.jsxs)(`span`,{children:[(0,m.jsx)(`span`,{className:`journey-step`,children:he[t]||`Step ${t+1}`}),(0,m.jsxs)(`span`,{className:`journey-mode`,children:[f[e]?.label??e,` | `,x(t),` questions`]})]})]},`${e}-${t}`)),(0,m.jsxs)(`div`,{className:`mode-row review ${V?`active`:``} ${C?`done`:``}`,onClick:()=>Q(b.length),title:`Review mistakes`,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,m.jsxs)(`span`,{children:[(0,m.jsx)(`span`,{className:`journey-step`,children:`Review`}),(0,m.jsxs)(`span`,{className:`journey-mode`,children:[L.length,` to check`]})]})]})]}),(0,m.jsx)(`div`,{className:`session-card`,children:C?(0,m.jsxs)(`div`,{className:`session-stage`,children:[(0,m.jsx)(`div`,{className:`session-expression`,children:(0,m.jsx)(`i`,{className:`fa-solid fa-circle-check`})}),(0,m.jsxs)(`div`,{className:`session-result`,children:[`Today's Level `,u,` session is complete`]}),(0,m.jsxs)(`div`,{className:`session-result`,style:{fontSize:`1.6rem`},children:[`Score: `,ze?.correct_count??j,`/`,ze?.total_questions??X]}),(0,m.jsx)(`div`,{className:`session-sub`,children:`Report saved for admin and teachers. Come back tomorrow for a new rotation.`}),ot.length?(0,m.jsx)(`div`,{className:`achievement-strip`,children:ot.map(e=>(0,m.jsxs)(`div`,{className:`achievement-chip`,children:[(0,m.jsx)(`i`,{className:`fa-solid ${e.icon}`,style:{background:e.color}}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`strong`,{children:e.name}),(0,m.jsx)(`span`,{children:e.description})]})]},e.code))}):null]}):V?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-game-header`,children:[(0,m.jsx)(`span`,{className:`session-mode-pill`,children:`Mistake Review`}),(0,m.jsx)(`div`,{className:`session-spacer`}),(0,m.jsxs)(`span`,{className:`session-score-chip`,children:[`Score `,j,`/`,X]})]}),(0,m.jsx)(`div`,{className:`session-prog-track`,children:(0,m.jsx)(`div`,{className:`session-prog-fill`,style:{width:`100%`}})}),(0,m.jsxs)(`div`,{className:`session-stage`,style:{alignItems:`stretch`,justifyContent:`flex-start`,paddingTop:0},children:[(0,m.jsx)(`div`,{className:`session-result`,style:{margin:`0 0 4px`,fontSize:`1.6rem`},children:L.length?`Review your misses`:`No mistakes today 🎉`}),(0,m.jsx)(`div`,{className:`session-sub`,children:L.length?`Check the correct answers before you finish.`:`Clean round! Finish and come back tomorrow.`}),L.length?(0,m.jsx)(`div`,{className:`mistake-list`,children:L.map((e,t)=>(0,m.jsxs)(`div`,{className:`mistake-card`,children:[(0,m.jsxs)(`strong`,{children:[e.modeLabel,`: `,bt(e)]}),(0,m.jsxs)(`span`,{children:[`Your answer: `,e.selectedAnswer,` \xA0·\xA0 Correct: `,e.answer]})]},`${e.mode}-${t}`))}):null]}),(0,m.jsx)(`div`,{className:`session-action-bar`,children:(0,m.jsx)(`button`,{className:`session-btn-next`,onClick:yt,disabled:B,children:B?`Saving…`:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`i`,{className:`fa-solid fa-flag-checkered`}),` Finish Today`]})})})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(`div`,{className:`session-game-header`,children:[(0,m.jsx)(`span`,{className:`session-mode-pill`,children:f[Y]?.label??Y}),(0,m.jsxs)(`span`,{className:`session-q-counter`,children:[`Q `,D+1,` / `,x(E)]}),xe.has(Y)?(0,m.jsxs)(`div`,{className:`layout-toggle layout-toggle-inline`,role:`group`,"aria-label":`Question format`,children:[(0,m.jsxs)(`button`,{className:q===`horizontal`?`active`:``,onClick:()=>J(`horizontal`),children:[(0,m.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` H`]}),(0,m.jsxs)(`button`,{className:q===`vertical`?`active`:``,onClick:()=>J(`vertical`),children:[(0,m.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` V`]})]}):null,(0,m.jsx)(`div`,{className:`session-spacer`}),it?(0,m.jsxs)(`span`,{className:`resumed-pill`,onAnimationEnd:()=>at(!1),children:[(0,m.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),` Resumed`]}):null,(0,m.jsxs)(`span`,{className:`session-score-chip`,children:[`Score `,j,`/`,ut+(k===null?0:1)]})]}),(0,m.jsx)(`div`,{className:`session-prog-track`,children:(0,m.jsx)(`div`,{className:`session-prog-fill`,style:{width:`${ut/X*100}%`}})}),(0,m.jsx)(`div`,{className:`session-stage`,children:xt()}),(0,m.jsx)(`div`,{className:`feedback-pop`,children:U?(0,m.jsxs)(`div`,{className:`feedback-bubble ${U.type}`,children:[(0,m.jsx)(`span`,{className:`feedback-character`,children:(0,m.jsx)(`i`,{className:`fa-solid ${U.type===`correct`?`fa-star`:`fa-rotate-right`}`})}),U.text]}):null}),(0,m.jsx)(`div`,{className:`session-answer-area`,children:O&&_===`input`?(0,m.jsxs)(`div`,{className:`typed-answer-wrap`,children:[(0,m.jsxs)(`div`,{className:`typed-answer-row`,children:[(0,m.jsx)(`input`,{ref:Fe,className:`typed-answer-input`,type:`text`,inputMode:`decimal`,pattern:`-?[0-9]*\\.?[0-9]*`,value:v,disabled:k!==null,onChange:e=>Ne(Te(e.target.value)),onKeyDown:e=>{e.key===`Enter`&&v.trim()!==``&&(e.preventDefault(),$(v))},placeholder:`Type your answer…`}),(0,m.jsx)(`button`,{className:`typed-answer-submit`,disabled:k!==null||v.trim()===``,onClick:()=>$(v),children:`Submit`})]}),k!==null&&g(k)!==g(O.answer)?(0,m.jsxs)(`span`,{className:`typed-answer-correct`,children:[`Correct answer: `,O.answer]}):null]}):O?(0,m.jsx)(`div`,{className:`mcq-grid`,children:O.options.map((e,t)=>{let n=``;return k!==null&&(e===O.answer?n=`correct`:e===k&&(n=`wrong`)),(0,m.jsxs)(`button`,{className:`mcq-btn ${n}`,disabled:k!==null,onClick:()=>$(e),children:[(0,m.jsx)(`span`,{className:`mcq-key-hint`,children:t+1}),e]},e)})}):null}),(0,m.jsxs)(`div`,{className:`session-action-bar`,children:[Y===`voice`&&O?(0,m.jsxs)(`button`,{className:`session-btn-ghost`,onClick:()=>{I(-1),_e(O.numbers,Ye,e=>I(e))},children:[(0,m.jsx)(`i`,{className:`fa-solid fa-volume-high`}),` Repeat`]}):null,!M&&!O?(0,m.jsxs)(`button`,{className:`session-btn-next`,onClick:pt,children:[(0,m.jsx)(`i`,{className:`fa-solid fa-play`}),` Start`]}):null,k!==null&&B?(0,m.jsx)(`button`,{className:`session-btn-next`,disabled:!0,children:`Saving…`}):null]})]})})]})]})]})]})}export{je as default};