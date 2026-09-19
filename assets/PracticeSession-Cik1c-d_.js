import{r as e}from"./rolldown-runtime-S-ySWqyJ.js";import{Dt as t,L as n,M as r,R as i,_ as a,b as o,dt as s,ft as ee,g as te,h as ne,m as c,mt as re,p as l,q as ie,st as ae,u as oe,v as se,x as u,y as d}from"./interactive-DWz-MLw3.js";import{m as ce}from"./mcq-DrmERkED.js";var f=e(t(),1),p=i(),le=`
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
    .session-shell { padding: 0 12px 24px; }
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
`,ue=[`Warm Up`,`Brain Builder`,`Speed Round`,`Focus Finish`,`Missing Link`,`Compare Clash`];function de(){return new Date().toLocaleDateString(`en-CA`)}function fe(e,t=.8,n=null){if(!(`speechSynthesis`in window))return!1;window.speechSynthesis.cancel();let r=e.map((e,t)=>t===0?String(e):e<0?`minus ${Math.abs(e)}`:`plus ${e}`),i=0;function a(){if(i>=r.length){n?.(-1);return}n?.(i);let e=new SpeechSynthesisUtterance(r[i]);e.rate=t,e.onend=()=>{i++,setTimeout(a,500)},window.speechSynthesis.speak(e)}return a(),!0}function pe(e){let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let n=new t,r=n.createGain();r.connect(n.destination),r.gain.setValueAtTime(1e-4,n.currentTime),r.gain.exponentialRampToValueAtTime(.14,n.currentTime+.02),r.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+.35),(e===`correct`?[523.25,659.25,783.99]:[196,164.81]).forEach((t,i)=>{let a=n.createOscillator();a.type=e===`correct`?`sine`:`triangle`,a.frequency.value=t,a.connect(r);let o=n.currentTime+i*.09;a.start(o),a.stop(o+.12)}),setTimeout(()=>n.close(),500)}function me(){`vibrate`in navigator&&navigator.vibrate([80,40,80])}function he({value:e}){return(0,p.jsx)(`div`,{className:`session-abacus`,children:String(e).padStart(2,`0`).split(``).map(Number).map((e,t)=>{let n=e>=5,r=e%5;return(0,p.jsxs)(`div`,{className:`session-col`,children:[(0,p.jsx)(`div`,{className:`session-bead-zone heaven`,children:(0,p.jsx)(`span`,{className:`session-bead ${n?`active`:``}`})}),(0,p.jsx)(`div`,{className:`session-bead-zone`,children:[1,2,3,4].map(e=>(0,p.jsx)(`span`,{className:`session-bead ${r>=e?`active`:``}`},e))})]},`${e}-${t}`)})})}var ge=new Set([`full`,`longSum`,`addSub`,`decimalAddSub`,`negative`]),_e=`practice_question_layout`;function ve({numbers:e}){return(0,p.jsxs)(`div`,{className:`session-vertical`,children:[e.map((e,t)=>(0,p.jsxs)(`span`,{style:{display:`contents`},children:[(0,p.jsx)(`span`,{className:`vrow-sign`,children:t===0?``:e<0?`-`:`+`}),(0,p.jsx)(`span`,{className:`vrow-value`,children:u(t===0?e:Math.abs(e))})]},`${e}-${t}`)),(0,p.jsx)(`span`,{className:`vrule`}),(0,p.jsx)(`span`,{className:`vtotal`,children:`?`})]})}var m=new Set([`full`,`longSum`,`flash`,`voice`,`addSub`,`missing`,`compare`,`abacus`]);function h(e){return e?{min:e<=1?1:10**(e-1),max:10**e-1}:null}function ye(e){let t=e.trim().startsWith(`-`),[n,...r]=e.replace(/[^0-9.]/g,``).split(`.`),i=r.length?`.${r.join(``)}`:``;return`${t?`-`:``}${n}${i}`}function g(e){let t=String(e??``).trim().toLowerCase();return t&&/^-?\d*\.?\d+$/.test(t)?String(Number(t)):t}function be(e,t){if(!e||!(e.rows!=null||e.digits!=null||e.digits2!=null||e.decimals!=null||e.rule!=null||e.flashSpeed!=null||e.voiceRate!=null))return{};let n=c(t),r=h(e.digits),i=h(e.digits2),a={};if(e.rule&&(a.rules={...n.rules||{},rule:e.rule}),e.flashSpeed!=null&&(a.flashSpeed=e.flashSpeed),m.has(e.mode)){let t=n.additionConfigs&&n.additionConfigs[0]||n.number||{min:1,max:9,count:3},i={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count};a.additionConfigs=[i],a.number={...i}}else if(e.mode===`multiply`){let e=n.multiply||{};a.multiply={aMin:r?r.min:e.aMin,aMax:r?r.max:e.aMax,bMin:i?i.min:e.bMin,bMax:i?i.max:e.bMax}}else if(e.mode===`division`){let e=n.division||{};a.division={quotientMin:r?r.min:e.quotientMin,quotientMax:r?r.max:e.quotientMax,divisorMin:i?i.min:e.divisorMin,divisorMax:i?i.max:e.divisorMax}}else if(e.mode===`decimalAddSub`){let t=n.number||{min:10,max:99,count:3};a.number={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count},e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals,addDivisor:10**e.decimals})}else if(e.mode===`negative`){let t=n.negative||{};a.negative={min:r?r.min:t.min,max:r?r.max:t.max,count:e.rows?e.rows:t.count}}else if(e.mode===`percentage`){let e=n.percentage||{};a.percentage={...e,baseMin:r?r.min:e.baseMin,baseMax:r?r.max:e.baseMax}}else (e.mode===`decimalMultiply`||e.mode===`decimalDivision`)&&e.decimals!=null&&(a.decimal={...n.decimal||{},places:e.decimals});return Object.keys(a).length===0?{}:{[t]:a}}var _=[20,20,20,20,10,10];function xe(e,t){let n=c(e).modes,r=n.slice(-3).reverse(),i=n.slice(0,-3),a=i.length?d(`${t}-${e}-fallback`)%i.length:0,o=i.map((e,t)=>i[(a+t)%i.length]),s=[...r];for(let e of o){if(s.length>=_.length)break;s.includes(e)||s.push(e)}return s.map((e,t)=>({mode:e,questions:_[t]??4}))}function Se(){let{profile:e,user:t,institute:i,membership:d}=n(),m=se(e?.current_level),h=de(),[_,Se]=(0,f.useState)(null),[Ce,we]=(0,f.useState)(!0),[v,Te]=(0,f.useState)(`mcq`),[y,Ee]=(0,f.useState)(``),De=(0,f.useRef)(null),Oe=(0,f.useRef)(null),b=(0,f.useMemo)(()=>{let e=(_??xe(m,h)).filter(e=>ne(e.mode,m));return e.length?e:c(m).modes.slice(0,4).map(e=>({mode:e,questions:4}))},[_,m,h]),x=(0,f.useMemo)(()=>b.map(e=>e.mode),[b]),S=e=>Number(b[e]?.questions)||4,C=`practice_session_${t?.id||`guest`}_${h}_level_${m}`,ke=`practice_report_${t?.id||`guest`}_${h}_level_${m}`,Ae=`practice_draft_${t?.id||`guest`}_level_${m}`,[w,je]=(0,f.useState)(()=>localStorage.getItem(C)===`done`),[T]=(0,f.useState)(()=>{try{if(localStorage.getItem(C)===`done`)return null;let e=localStorage.getItem(Ae);if(!e)return null;let t=JSON.parse(e);return t.date===h?t:null}catch{return null}}),[Me,Ne]=(0,f.useState)(()=>{try{let e=localStorage.getItem(ke);return e?JSON.parse(e):null}catch{return null}}),[E,Pe]=(0,f.useState)(`daily`),[D,Fe]=(0,f.useState)(()=>{let e=T?.modeIndex??0;return b.length>0?Math.min(e,b.length-1):0}),[O,Ie]=(0,f.useState)(T?.questionIndex??0),[k,Le]=(0,f.useState)(null),[A,j]=(0,f.useState)(null),[M,Re]=(0,f.useState)(T?.score??0),[N,P]=(0,f.useState)(!1),[F,ze]=(0,f.useState)(0),[Be,Ve]=(0,f.useState)(1500),[He,Ue]=(0,f.useState)(.8),[I,L]=(0,f.useState)(-1),[R,We]=(0,f.useState)(T?.mistakes??[]),[Ge,Ke]=(0,f.useState)(T?.answers??[]),[z,qe]=(0,f.useState)(T?.completedModes??[]),[Je,Ye]=(0,f.useState)(0),[B,Xe]=(0,f.useState)(T?.maxCorrectStreak??0),[Ze,Qe]=(0,f.useState)(!!T),[$e,et]=(0,f.useState)([]),[V,tt]=(0,f.useState)(!1),[H,U]=(0,f.useState)(!1),[W,G]=(0,f.useState)(null),[K,nt]=(0,f.useState)(null),[q,rt]=(0,f.useState)(()=>localStorage.getItem(_e)||`horizontal`);(0,f.useEffect)(()=>{v===`input`&&k&&A===null&&Oe.current?.focus()},[k,v,A]),(0,f.useEffect)(()=>{if(A===null||H||w)return;let e=setTimeout(()=>ft(),750);return()=>clearTimeout(e)},[A,H,w]),(0,f.useEffect)(()=>{if(!(!N||w||H||E!==`daily`))try{localStorage.setItem(Ae,JSON.stringify({date:h,modeIndex:D,questionIndex:O,score:M,mistakes:R,answers:Ge,completedModes:z,maxCorrectStreak:B}))}catch{}},[D,O,M,R,Ge,z,B]);function J(e){rt(e),localStorage.setItem(_e,e)}let Y=x[D],X=(0,f.useMemo)(()=>b.reduce((e,t)=>e+(Number(t.questions)||4),0),[b]),it=(0,f.useMemo)(()=>{let e=0;return b.forEach((t,n)=>{let r=Number(t.questions)||4;n<D?e+=r:n===D&&(e+=O)}),e},[b,D,O]);(0,f.useEffect)(()=>{let e=!1;async function t(){if(!i?.id)return;let{data:t}=await ie(i.id);if(e||!t)return;we(t.enabled??!0),Te(t.answer_mode||`mcq`);let n=t.journey?.[m]||t.journey?.[String(m)];Array.isArray(n)&&n.length&&Se(n.map(e=>({mode:e.mode,questions:Number(e.questions)||4,rows:e.rows,digits:e.digits,digits2:e.digits2,decimals:e.decimals})))}return t(),()=>{e=!0}},[i?.id,m]);let at=e?.full_name?.split(` `)?.[0]||e?.name?.split(` `)?.[0]||t?.email?.split(`@`)?.[0]||`champ`,ot=E===`daily`&&(N||H)&&!w;(0,f.useEffect)(()=>(document.body.classList.toggle(`practice-session-focus`,ot),()=>document.body.classList.remove(`practice-session-focus`)),[ot]),(0,f.useEffect)(()=>{if(K===null)return;let e=setTimeout(()=>{if(K>1){nt(e=>e-1);return}nt(null),Z(b[D])},900);return()=>clearTimeout(e)},[b,D,K]),(0,f.useEffect)(()=>{function e(e){if(!(document.activeElement.tagName===`INPUT`||document.activeElement.tagName===`TEXTAREA`)){if(!w&&N&&k&&A===null&&v!==`input`&&[`1`,`2`,`3`,`4`].includes(e.key)){let t=Number(e.key)-1;k.options&&k.options[t]!==void 0&&$(k.options[t])}e.key===`Enter`&&(!N&&!H&&!w?ct():N&&A!==null&&!V?ft():H&&!V&&pt())}}return window.addEventListener(`keydown`,e),()=>window.removeEventListener(`keydown`,e)},[w,N,k,A,V,H,O,D,Y,v]);function Z(e){let t=typeof e==`string`?e:e?.mode,n=typeof e==`string`?{}:be(e,m),r=a(t,m,n);if(Le(r),j(null),Ee(``),G(null),ze(0),P(!0),t===`voice`){let t=typeof e!=`string`&&e?.voiceRate||.8;Ue(t),L(-1),fe(r.numbers,t,e=>L(e))}if(t===`flash`){let e=c(m,n).flashSpeed;Ve(e),r.numbers.forEach((t,n)=>setTimeout(()=>ze(n),n*e)),setTimeout(()=>ze(r.numbers.length),r.numbers.length*e)}}function st(){Z(b[D])}function Q(e){if(!w){if(e===x.length){U(!0),P(!1),Le(null),j(null),G(null);return}U(!1),Fe(e),Ie(0),j(null),G(null),Z(b[e])}}async function ct(){De.current=Date.now(),P(!0),Le(null),j(null),G(null),T?Z(b[D]):nt(3),dt(`session_start`,Y).catch(e=>{console.warn(`Practice start saved locally but not submitted:`,e)})}function $(e){if(A!==null)return;let t=g(e)===g(k.answer),n={mode:k.mode,modeLabel:l[k.mode]?.label||k.mode,question:mt(k),numbers:k.numbers,selectedAnswer:e,correctAnswer:k.answer,isCorrect:t,answeredAt:new Date().toISOString()};j(e),Ke(e=>[...e,n]),t?(pe(`correct`),G({type:`correct`,text:`Great job`}),Re(e=>e+1),Ye(e=>{let t=e+1;return Xe(e=>Math.max(e,t)),t})):(pe(`wrong`),me(),G({type:`wrong`,text:`Good try. The answer was ${k.answer}.`}),We(t=>[...t,{...k,selectedAnswer:e,modeLabel:l[k.mode]?.label||k.mode}]),Ye(0))}function lt({nextAnswers:e=Ge,nextMistakes:t=R,nextCompletedModes:n=z,status:r=`in_progress`,achievements:a=$e}={}){let o=e.filter(e=>e.isCorrect).length,s=e.reduce((e,t)=>(e[t.mode]=e[t.mode]||{label:t.modeLabel,correct:0,wrong:0},e[t.mode][t.isCorrect?`correct`:`wrong`]+=1,e),{}),ee=De.current?Math.round((Date.now()-De.current)/1e3):0;return{institute_id:i?.id,student_membership_id:d?.id,level:m,session_date:h,mode_rotation:x,completed_modes:n,total_questions:X,total_time_seconds:ee,answered_count:e.length,correct_count:o,wrong_count:e.length-o,max_correct_streak:B,question_type_summary:s,answers:e,mistakes:t,earned_achievements:a.map(e=>({code:e.code,name:e.name,type:e.type})),status:r,completed_at:r===`completed`?new Date().toISOString():null,updated_at:new Date().toISOString()}}function ut(e,n,r){let i=`practice_report_${t?.id||`guest`}_${h}_level_${m}`;localStorage.setItem(i,JSON.stringify(e));let a=`${i}_events`,o=JSON.parse(localStorage.getItem(a)||`[]`);o.push({eventType:n,mode:r,payload:e,createdAt:new Date().toISOString()}),localStorage.setItem(a,JSON.stringify(o))}async function dt(e,t,n={}){let r=lt(n);if(ut(r,e,t),!r.institute_id||!r.student_membership_id)return;tt(!0);let{data:i,error:a}=await s(r);a?console.warn(`Practice report saved locally but not submitted:`,a):await ae({institute_id:r.institute_id,student_membership_id:r.student_membership_id,attempt_id:i?.id,level:m,session_date:h,event_type:e,mode:t,payload:r}),tt(!1)}async function ft(){let e=S(D);if(O+1<e){Ie(e=>e+1),setTimeout(()=>Z(b[D]),0);return}let t=[...new Set([...z,Y])];if(qe(t),await dt(`mode_complete`,Y,{nextCompletedModes:t}),D+1<x.length){let e=b[D+1];Fe(e=>e+1),Ie(0),setTimeout(()=>Z(e),0);return}U(!0),P(!1)}async function pt(){let e=[...new Set([...z,Y])],t=re({score:M,totalQuestions:X,maxCorrectStreak:B,mistakes:R,completedModes:e});et(t),localStorage.setItem(C,`done`),localStorage.setItem(`${C}_achievements`,JSON.stringify(t)),localStorage.removeItem(Ae);let n={nextCompletedModes:e,status:`completed`,achievements:t};Ne(lt(n)),await dt(`session_complete`,`review`,n),i?.id&&d?.id&&await Promise.all(t.map(e=>ee({institute_id:i.id,student_membership_id:d.id,achievement_code:e.code,achievement_name:e.name,achievement_type:e.type,description:e.description,metadata:{level:m,session_date:h,score:M,total_questions:X,max_correct_streak:B}}))),je(!0),U(!1)}function mt(e){return te(e.mode)?e.prompt:e.mode===`abacus`?`Abacus number: ${e.answer}`:e.mode===`missing`?`${e.numbers[0]} + ? + ${e.numbers[2]} = ${e.numbers[3]}`:e.mode===`compare`?`1: ${e.numbers.slice(0,3).join(` + `)} | 2: ${e.numbers.slice(4,7).join(` + `)}`:[`table`,`multiply`,`decimalMultiply`].includes(e.mode)?`${u(e.numbers[0])} x ${u(e.numbers[1])}`:[`division`,`decimalDivision`].includes(e.mode)?`${u(e.numbers[0])} / ${u(e.numbers[1])}`:e.mode===`percentage`?`${e.numbers[0]}% of ${e.numbers[1]}`:e.mode===`square`?`${e.numbers[0]} squared`:e.mode===`squareRoot`?`square root of ${e.numbers[0]}`:e.mode===`cube`?`${e.numbers[0]} cubed`:e.mode===`cubeRoot`?`cube root of ${e.numbers[0]}`:o(e.numbers)}function ht(){if(K!==null)return(0,p.jsxs)(`div`,{className:`session-countdown`,children:[(0,p.jsx)(`div`,{className:`countdown-ring`,children:(0,p.jsx)(`strong`,{children:K})}),(0,p.jsx)(`div`,{className:`countdown-title`,children:`Get ready`}),(0,p.jsx)(`div`,{className:`countdown-copy`,children:`Look at the first challenge calmly, then choose your answer.`})]});if(!k)return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`session-expression`,children:(0,p.jsx)(`i`,{className:`fa-solid ${l[Y]?.icon??`fa-star`}`})}),(0,p.jsx)(`div`,{className:`session-sub`,children:`Start today's session.`})]});if(te(Y))return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`session-expression`,children:k.prompt}),(0,p.jsx)(`div`,{className:`session-sub`,children:l[Y]?.label})]});if(Y===`abacus`)return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(he,{value:k.answer}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]});if(Y===`voice`){let e=k?.numbers?.length||0;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`session-expression`,children:(0,p.jsx)(`i`,{className:`fa-solid fa-volume-high`})}),(0,p.jsx)(`div`,{className:`voice-dots`,children:k?.numbers?.map((e,t)=>(0,p.jsx)(`span`,{className:`voice-dot${I===t?` active`:I>t?` done`:``}`},t))}),(0,p.jsx)(`div`,{className:`voice-label`,children:I>=0&&I<e?`Number ${I+1} of ${e}`:`Listen and add up the numbers`})]})}if(Y===`flash`){let e=F>=k.numbers.length;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`session-expression ${e?`animate-flash-reveal`:`animate-flash-num`}`,children:e?`?`:k.numbers[F]},F),(0,p.jsx)(`div`,{className:`session-sub`,children:e?`Select the correct sum`:`Number ${F+1} of ${k.numbers.length}`})]})}return ge.has(Y)?(0,p.jsxs)(p.Fragment,{children:[q===`vertical`?(0,p.jsx)(ve,{numbers:k.numbers}):(0,p.jsx)(`div`,{className:`session-expression`,children:o(k.numbers)}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):Y===`missing`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[k.numbers[0],` + ? + `,k.numbers[2],` = `,k.numbers[3]]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):Y===`compare`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[`1: `,k.numbers.slice(0,3).join(` + `),(0,p.jsx)(`br`,{}),`2: `,k.numbers.slice(4,7).join(` + `)]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):Y===`table`||Y===`multiply`||Y===`decimalMultiply`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[u(k.numbers[0]),` x `,u(k.numbers[1])]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):Y===`division`||Y===`decimalDivision`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[u(k.numbers[0]),` / `,u(k.numbers[1])]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):Y===`percentage`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[u(k.numbers[0]),`% of `,u(k.numbers[1])]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):Y===`square`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[k.numbers[0],`^2`]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):Y===`squareRoot`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[`sqrt(`,k.numbers[0],`)`]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):Y===`cube`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[k.numbers[0],`^3`]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):Y===`cubeRoot`?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-expression`,children:[`cuberoot(`,k.numbers[0],`)`]}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`div`,{className:`session-expression`,children:o(k.numbers)}),(0,p.jsx)(`div`,{className:`session-sub`,children:k.prompt})]})}return(0,p.jsxs)(`div`,{className:`page-wrap`,style:{paddingTop:`calc(var(--nav-h) + 20px)`},children:[(0,p.jsx)(`style`,{children:le}),(0,p.jsx)(r,{}),(0,p.jsxs)(`div`,{className:`session-shell ${(N||H)&&!w?`playing-active`:``}`,children:[(0,p.jsxs)(`div`,{className:`session-hero`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h1`,{children:E===`flash`?`Mental Flash Training`:`Daily Session`}),(0,p.jsx)(`p`,{children:E===`flash`?`Customize and play infinite rounds of listening, abacus visualization, and speed flashes.`:`Four quick challenge cards, then one mistake review card to help you level up.`})]}),(0,p.jsx)(oe,{variant:`practice-banner`,size:260}),(0,p.jsx)(`div`,{className:`session-pill`,children:E===`flash`?`Free Training`:`Level ${m} | ${h}`})]}),!N&&!H&&(0,p.jsx)(`div`,{className:`session-tabs`,children:(0,p.jsxs)(`button`,{className:`session-tab-btn ${E===`daily`?`active`:``}`,onClick:()=>Pe(`daily`),children:[(0,p.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),` Daily Session`,!w&&(0,p.jsx)(`span`,{style:{display:`inline-block`,width:`8px`,height:`8px`,borderRadius:`50%`,background:`#f59e0b`,boxShadow:`0 0 8px #f59e0b`,marginLeft:`6px`,verticalAlign:`middle`},title:`Pending for today`})]})}),E===`flash`&&!N?(0,p.jsx)(ce,{isNested:!0}):E===`daily`&&!N&&!H&&!w?Ce?(0,p.jsxs)(`div`,{className:`session-ready`,children:[(0,p.jsxs)(`section`,{className:`ready-panel`,children:[(0,p.jsxs)(`div`,{className:`ready-kicker`,children:[(0,p.jsx)(`i`,{className:`fa-solid fa-calendar-check`}),`Daily Session`]}),(0,p.jsxs)(`h2`,{className:`ready-title`,children:[`Ready, `,at,`?`]}),(0,p.jsx)(`p`,{className:`ready-copy`,children:`Today has a short practice journey. Start when you are ready, then the page will become quiet so you can focus.`}),(0,p.jsxs)(`div`,{className:`ready-stats`,children:[(0,p.jsxs)(`div`,{className:`ready-stat`,children:[(0,p.jsx)(`strong`,{children:x.length}),(0,p.jsx)(`span`,{children:`practice stops`})]}),(0,p.jsxs)(`div`,{className:`ready-stat`,children:[(0,p.jsx)(`strong`,{children:X}),(0,p.jsx)(`span`,{children:`questions today`})]}),(0,p.jsxs)(`div`,{className:`ready-stat`,children:[(0,p.jsxs)(`strong`,{children:[`Level `,m]}),(0,p.jsx)(`span`,{children:`current level`})]})]}),T?(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:8,background:`color-mix(in srgb, var(--accent) 10%, transparent)`,border:`1px solid color-mix(in srgb, var(--accent) 25%, transparent)`,borderRadius:10,padding:`8px 14px`,marginBottom:12,fontSize:`0.82rem`,fontWeight:700,color:`var(--accent)`},children:[(0,p.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),`Session in progress — `,T.score,` correct, on step `,T.modeIndex+1,` of `,x.length]}):null,(0,p.jsx)(`div`,{children:(0,p.jsx)(`button`,{className:`session-btn-next`,onClick:ct,disabled:V,children:V?`Getting Ready…`:T?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),` Resume Session`]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`i`,{className:`fa-solid fa-play`}),` Start Today's Practice`]})})})]}),(0,p.jsxs)(`aside`,{className:`journey-panel`,children:[(0,p.jsx)(`h2`,{children:`Today's journey`}),(0,p.jsxs)(`div`,{className:`journey-list`,children:[x.map((e,t)=>(0,p.jsxs)(`div`,{className:`journey-card`,children:[(0,p.jsx)(`i`,{className:`fa-solid ${l[e]?.icon??`fa-star`}`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`strong`,{children:ue[t]||`Step ${t+1}`}),(0,p.jsxs)(`span`,{children:[l[e]?.label??e,` | `,S(t),` questions`]})]})]},`${e}-${t}`)),(0,p.jsxs)(`div`,{className:`journey-card`,children:[(0,p.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`strong`,{children:`Review`}),(0,p.jsx)(`span`,{children:`Check anything that needs one more look`})]})]})]})]})]}):(0,p.jsx)(`div`,{className:`session-ready`,children:(0,p.jsxs)(`section`,{className:`ready-panel`,children:[(0,p.jsxs)(`div`,{className:`ready-kicker`,children:[(0,p.jsx)(`i`,{className:`fa-solid fa-circle-info`}),`Daily Session`]}),(0,p.jsx)(`h2`,{className:`ready-title`,children:`Paused for now`}),(0,p.jsx)(`p`,{className:`ready-copy`,children:`Your institute has turned off daily practice. Please check back later or ask your teacher.`})]})}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`mobile-sub-bar`,children:[(0,p.jsxs)(`div`,{className:`mobile-mode-strip`,children:[x.map((e,t)=>(0,p.jsxs)(`div`,{className:`mobile-mode-dot${t===D&&!H?` active`:``}${t<D||z.includes(e)?` done`:``}`,onClick:()=>Q(t),title:l[e]?.label??e,children:[(0,p.jsx)(`i`,{className:`fa-solid ${l[e]?.icon??`fa-star`}`}),(0,p.jsx)(`span`,{children:t+1})]},t)),(0,p.jsxs)(`div`,{className:`mobile-mode-dot${H?` active`:``}${w?` done`:``}`,onClick:()=>Q(x.length),title:`Review`,children:[(0,p.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,p.jsx)(`span`,{children:`Rev`})]})]}),ge.has(Y)?(0,p.jsxs)(`div`,{className:`mobile-layout-toggle`,role:`group`,"aria-label":`Question format`,children:[(0,p.jsxs)(`button`,{className:q===`horizontal`?`active`:``,onClick:()=>J(`horizontal`),children:[(0,p.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` H`]}),(0,p.jsxs)(`button`,{className:q===`vertical`?`active`:``,onClick:()=>J(`vertical`),children:[(0,p.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` V`]})]}):null]}),(0,p.jsxs)(`div`,{className:`session-grid`,children:[(0,p.jsxs)(`div`,{className:`mode-list`,children:[x.map((e,t)=>(0,p.jsxs)(`div`,{className:`mode-row ${t===D&&!H?`active`:``} ${t<D||w?`done`:``}`,onClick:()=>Q(t),title:`${ue[t]||`Step ${t+1}`} — ${l[e]?.label??e}`,children:[(0,p.jsx)(`i`,{className:`fa-solid ${l[e]?.icon??`fa-star`}`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`span`,{className:`journey-step`,children:ue[t]||`Step ${t+1}`}),(0,p.jsxs)(`span`,{className:`journey-mode`,children:[l[e]?.label??e,` | `,S(t),` questions`]})]})]},`${e}-${t}`)),(0,p.jsxs)(`div`,{className:`mode-row review ${H?`active`:``} ${w?`done`:``}`,onClick:()=>Q(x.length),title:`Review mistakes`,children:[(0,p.jsx)(`i`,{className:`fa-solid fa-clipboard-check`}),(0,p.jsxs)(`span`,{children:[(0,p.jsx)(`span`,{className:`journey-step`,children:`Review`}),(0,p.jsxs)(`span`,{className:`journey-mode`,children:[R.length,` to check`]})]})]})]}),(0,p.jsx)(`div`,{className:`session-card`,children:w?(0,p.jsxs)(`div`,{className:`session-stage`,children:[(0,p.jsx)(`div`,{className:`session-expression`,children:(0,p.jsx)(`i`,{className:`fa-solid fa-circle-check`})}),(0,p.jsxs)(`div`,{className:`session-result`,children:[`Today's Level `,m,` session is complete`]}),(0,p.jsxs)(`div`,{className:`session-result`,style:{fontSize:`1.6rem`},children:[`Score: `,Me?.correct_count??M,`/`,Me?.total_questions??X]}),(0,p.jsx)(`div`,{className:`session-sub`,children:`Report saved for admin and teachers. Come back tomorrow for a new rotation.`}),$e.length?(0,p.jsx)(`div`,{className:`achievement-strip`,children:$e.map(e=>(0,p.jsxs)(`div`,{className:`achievement-chip`,children:[(0,p.jsx)(`i`,{className:`fa-solid ${e.icon}`,style:{background:e.color}}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`strong`,{children:e.name}),(0,p.jsx)(`span`,{children:e.description})]})]},e.code))}):null]}):H?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-game-header`,children:[(0,p.jsx)(`span`,{className:`session-mode-pill`,children:`Mistake Review`}),(0,p.jsx)(`div`,{className:`session-spacer`}),(0,p.jsxs)(`span`,{className:`session-score-chip`,children:[`Score `,M,`/`,X]})]}),(0,p.jsx)(`div`,{className:`session-prog-track`,children:(0,p.jsx)(`div`,{className:`session-prog-fill`,style:{width:`100%`}})}),(0,p.jsxs)(`div`,{className:`session-stage`,style:{alignItems:`stretch`,justifyContent:`flex-start`,paddingTop:0},children:[(0,p.jsx)(`div`,{className:`session-result`,style:{margin:`0 0 4px`,fontSize:`1.6rem`},children:R.length?`Review your misses`:`No mistakes today 🎉`}),(0,p.jsx)(`div`,{className:`session-sub`,children:R.length?`Check the correct answers before you finish.`:`Clean round! Finish and come back tomorrow.`}),R.length?(0,p.jsx)(`div`,{className:`mistake-list`,children:R.map((e,t)=>(0,p.jsxs)(`div`,{className:`mistake-card`,children:[(0,p.jsxs)(`strong`,{children:[e.modeLabel,`: `,mt(e)]}),(0,p.jsxs)(`span`,{children:[`Your answer: `,e.selectedAnswer,` \xA0·\xA0 Correct: `,e.answer]})]},`${e.mode}-${t}`))}):null]}),(0,p.jsx)(`div`,{className:`session-action-bar`,children:(0,p.jsx)(`button`,{className:`session-btn-next`,onClick:pt,disabled:V,children:V?`Saving…`:(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(`i`,{className:`fa-solid fa-flag-checkered`}),` Finish Today`]})})})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(`div`,{className:`session-game-header`,children:[(0,p.jsx)(`span`,{className:`session-mode-pill`,children:l[Y]?.label??Y}),(0,p.jsxs)(`span`,{className:`session-q-counter`,children:[`Q `,O+1,` / `,S(D)]}),ge.has(Y)?(0,p.jsxs)(`div`,{className:`layout-toggle layout-toggle-inline`,role:`group`,"aria-label":`Question format`,children:[(0,p.jsxs)(`button`,{className:q===`horizontal`?`active`:``,onClick:()=>J(`horizontal`),children:[(0,p.jsx)(`i`,{className:`fa-solid fa-arrows-left-right`}),` H`]}),(0,p.jsxs)(`button`,{className:q===`vertical`?`active`:``,onClick:()=>J(`vertical`),children:[(0,p.jsx)(`i`,{className:`fa-solid fa-arrows-up-down`}),` V`]})]}):null,(0,p.jsx)(`div`,{className:`session-spacer`}),Ze?(0,p.jsxs)(`span`,{className:`resumed-pill`,onAnimationEnd:()=>Qe(!1),children:[(0,p.jsx)(`i`,{className:`fa-solid fa-rotate-right`}),` Resumed`]}):null,(0,p.jsxs)(`span`,{className:`session-score-chip`,children:[`Score `,M,`/`,it+(A===null?0:1)]})]}),(0,p.jsx)(`div`,{className:`session-prog-track`,children:(0,p.jsx)(`div`,{className:`session-prog-fill`,style:{width:`${it/X*100}%`}})}),(0,p.jsx)(`div`,{className:`session-stage`,children:ht()}),(0,p.jsx)(`div`,{className:`feedback-pop`,children:W?(0,p.jsxs)(`div`,{className:`feedback-bubble ${W.type}`,children:[(0,p.jsx)(`span`,{className:`feedback-character`,children:(0,p.jsx)(`i`,{className:`fa-solid ${W.type===`correct`?`fa-star`:`fa-rotate-right`}`})}),W.text]}):null}),(0,p.jsx)(`div`,{className:`session-answer-area`,children:k&&v===`input`?(0,p.jsxs)(`div`,{className:`typed-answer-wrap`,children:[(0,p.jsxs)(`div`,{className:`typed-answer-row`,children:[(0,p.jsx)(`input`,{ref:Oe,className:`typed-answer-input`,type:`text`,inputMode:`decimal`,pattern:`-?[0-9]*\\.?[0-9]*`,value:y,disabled:A!==null,onChange:e=>Ee(ye(e.target.value)),onKeyDown:e=>{e.key===`Enter`&&y.trim()!==``&&(e.preventDefault(),$(y))},placeholder:`Type your answer…`}),(0,p.jsx)(`button`,{className:`typed-answer-submit`,disabled:A!==null||y.trim()===``,onClick:()=>$(y),children:`Submit`})]}),A!==null&&g(A)!==g(k.answer)?(0,p.jsxs)(`span`,{className:`typed-answer-correct`,children:[`Correct answer: `,k.answer]}):null]}):k?(0,p.jsx)(`div`,{className:`mcq-grid`,children:k.options.map((e,t)=>{let n=``;return A!==null&&(e===k.answer?n=`correct`:e===A&&(n=`wrong`)),(0,p.jsxs)(`button`,{className:`mcq-btn ${n}`,disabled:A!==null,onClick:()=>$(e),children:[(0,p.jsx)(`span`,{className:`mcq-key-hint`,children:t+1}),e]},e)})}):null}),(0,p.jsxs)(`div`,{className:`session-action-bar`,children:[Y===`voice`&&k?(0,p.jsxs)(`button`,{className:`session-btn-ghost`,onClick:()=>{L(-1),fe(k.numbers,He,e=>L(e))},children:[(0,p.jsx)(`i`,{className:`fa-solid fa-volume-high`}),` Repeat`]}):null,!N&&!k?(0,p.jsxs)(`button`,{className:`session-btn-next`,onClick:st,children:[(0,p.jsx)(`i`,{className:`fa-solid fa-play`}),` Start`]}):null,A!==null&&V?(0,p.jsx)(`button`,{className:`session-btn-next`,disabled:!0,children:`Saving…`}):null]})]})})]})]})]})]})}export{Se as default};