# Quest Academy — Builder's Guide

> **How to build interactive learning chapters for Pakistan Federal Board Classes 9–12**
>
> This guide captures everything we learned building Quest Math 10 (12 chapters, 50+ interactive visualizations, fully offline-capable). Follow it to build any subject for any class with the same quality and consistency.

---

## Table of Contents

1. [Project Vision](#1-project-vision)
2. [Architecture Overview](#2-architecture-overview)
3. [The 6-Phase Pedagogical Model](#3-the-6-phase-pedagogical-model)
4. [File Structure & Naming](#4-file-structure--naming)
5. [Design System (Colors, Typography, Components)](#5-design-system)
6. [HTML Chapter Template](#6-html-chapter-template)
7. [Writing Discovery Sections](#7-writing-discovery-sections)
8. [Building Interactive Visualizations](#8-building-interactive-visualizations)
9. [Security & Safe DOM Rendering](#9-security--safe-dom-rendering)
10. [Quiz & Boss Challenge Standards](#10-quiz--boss-challenge-standards)
11. [The Content Pipeline: PDF → JSON → HTML](#11-the-content-pipeline)
12. [Quality Assurance Checklist](#12-quality-assurance-checklist)
13. [Deployment & Distribution](#13-deployment--distribution)
14. [Subject-Specific Guidelines](#14-subject-specific-guidelines)
15. [Common Mistakes & Lessons Learned](#15-common-mistakes--lessons-learned)
16. [Quick Reference Card](#16-quick-reference-card)

---

## 1. Project Vision

**Quest Academy** makes Pakistan Federal Board textbooks interactive. Students open a link on their phone, and each chapter becomes a gamified quest with:

- A **hook** that makes them curious before teaching anything
- A **historical origins** story connecting to Islamic/South Asian mathematical heritage
- **Interactive visualizations** they can drag, slide, and explore
- **Quizzes** with instant feedback and XP rewards
- A **boss challenge** that tests real understanding

**Target**: All subjects, Classes 9–12, Federal Board of Intermediate and Secondary Education (FBISE).

**Constraints**:
- Must work on low-end Android phones in mobile Chrome
- Must work offline (after first load via GitHub Pages, or from extracted zip on desktop)
- Must be 100% aligned with the Federal Board syllabus
- No backend required (all state in localStorage)
- No build tools required (plain HTML/CSS/JS)

---

## 2. Architecture Overview

```
quest-academy/
├── index.html                     # Root redirect
├── BUILDERS_GUIDE.md              # This document
│
├── interactive/
│   ├── index.html                 # Dashboard — all subjects & chapters
│   ├── css/
│   │   └── style.css              # Global design system (shared by ALL subjects)
│   ├── js/
│   │   ├── engine.js              # Quest engine (quizzes, XP, streaks, progress)
│   │   ├── viz-manager.js         # JSXGraph lifecycle (create, destroy, cleanup)
│   │   └── safe-dom.js            # XSS-free DOM rendering utilities
│   ├── libs/                      # Bundled dependencies (no CDN)
│   │   ├── katex/
│   │   │   ├── katex.min.css
│   │   │   ├── katex.min.js
│   │   │   ├── auto-render.min.js
│   │   │   └── fonts/             # 20 woff2 font files
│   │   └── jsxgraph/
│   │       ├── jsxgraph.css
│   │       └── jsxgraphcore.js
│   │
│   └── chapters/
│       ├── ch01_complex_numbers.html
│       ├── ch02_quadratic_equations.html
│       └── ...
```

### Shared Modules (js/)

| Module | Purpose | Required? |
|--------|---------|-----------|
| `engine.js` | Quiz system, XP, streaks, progress, KaTeX rendering | Always |
| `viz-manager.js` | JSXGraph board lifecycle — create with error handling, auto-destroy on page unload | If chapter has JSXGraph visualizations |
| `safe-dom.js` | XSS-free DOM updates — `setText()`, `feedback()`, `readoutHTML()`, `bossFeedback()` | Always |

All three must be loaded in this order: `engine.js` → `viz-manager.js` → `safe-dom.js`

**Future multi-subject structure:**
```
quest-academy/
├── class-10/
│   ├── math/
│   │   ├── index.html             # Math dashboard
│   │   ├── chapters/
│   │   ├── css/
│   │   ├── js/
│   │   └── libs/
│   ├── physics/
│   │   ├── index.html             # Physics dashboard
│   │   ├── chapters/
│   │   └── ...
│   └── ...
├── class-9/
├── class-11/
└── class-12/
```

Each subject is self-contained — it has its own `css/`, `js/`, `libs/`, and `chapters/`. The `style.css` and `engine.js` are copied (not symlinked) so each subject can be distributed as an independent zip.

---

## 3. The 6-Phase Pedagogical Model

Every chapter follows this exact flow. **Do not skip or reorder phases.**

```
┌─────────┐    ┌───────────┐    ┌─────────┐    ┌───────────┐    ┌──────────┐    ┌──────┐
│  HOOK   │ →  │ CHALLENGE │ →  │ ORIGINS │ →  │ DISCOVERY │ →  │ PRACTICE │ →  │ BOSS │
│ Curious │    │  Puzzle   │    │ History │    │  Learn +  │    │  Quiz    │    │Final │
│  Story  │    │  Teaser   │    │ Heritage│    │Visualize  │    │  8 Qs    │    │Test  │
└─────────┘    └───────────┘    └─────────┘    └───────────┘    └──────────┘    └──────┘
```

### Phase Details

| Phase | CSS Class | Purpose | Guidelines |
|-------|-----------|---------|------------|
| **Hook** | `phase-hook` | Create curiosity before teaching | Use a real-world scenario students can relate to. NO prerequisite knowledge needed. Keep under 150 words. |
| **Challenge** | `phase-challenge` | Quick puzzle to activate thinking | One question/puzzle with answer revealed. Should be solvable with intuition. |
| **Origins** | `phase-origins` | Historical + heritage connection | 3–4 timeline entries. MUST include at least one Islamic/South Asian scholar. Show Pakistan connection. ~300 words. |
| **Discovery** | `phase-discovery` | Core learning content | Accordion sections (reveal-step). Each section: concept → formula → example → visualization. This is 60% of the chapter. |
| **Practice** | `phase-practice` | Multiple-choice quiz | Exactly 8 questions. Cover all discovery sections. Include feedback for correct AND incorrect answers. |
| **Boss** | `phase-boss` | Fill-in-the-blank challenges | 3–4 harder questions requiring calculation. Fill-in format (not multiple choice). Include hints. |

### Hook Guidelines — What Makes a Good Hook

**GOOD hooks** (relatable, no prerequisites):
- "You're the captain of a cricket team..." (statistics)
- "An architect needs to draw a perfect circle through 3 points..." (geometry)
- "A craftsman measures a square plot — area is 9m². What if the area were -9?" (complex numbers)

**BAD hooks** (require knowledge students don't have):
- "In an AC circuit, the impedance is..." (requires physics)
- "Consider the Fourier transform of..." (too advanced)

### Origins Guidelines — Required Heritage Connections

Every chapter MUST connect to the Islamic/South Asian mathematical tradition. Students should feel that they are heirs to this knowledge, not just learning a Western import.

Key scholars to reference (use the most relevant):
- **Al-Khwarizmi** (780–850 AD) — invented algebra, gave us the word "algorithm"
- **Al-Kindi** (801–873 AD) — cryptography, frequency analysis
- **Al-Battani** (858–929 AD) — trigonometric functions
- **Abu al-Wafa** (940–998 AD) — trigonometric identities, geometric constructions
- **Omar Khayyam** (1048–1131 AD) — cubic equations, binomial theorem
- **Ibn al-Haytham** (965–1040 AD) — optics, scientific method
- **Al-Biruni** (973–1048 AD) — measured Earth's radius, combinatorics
- **Aryabhata** (476–550 AD) — trigonometry, place-value system
- **Brahmagupta** (598–668 AD) — zero, negative numbers, quadratic formula

---

## 4. File Structure & Naming

### Chapter Files

**Format**: `ch{NN}_{snake_case_topic}.html`

```
ch01_complex_numbers.html
ch02_quadratic_equations.html
ch03_matrices.html
...
ch12_statistics.html
```

- Chapter numbers match the Federal Board textbook chapter numbers exactly
- Topic name uses snake_case, abbreviated if needed
- One HTML file per chapter (self-contained)

### Data Attributes

Every chapter HTML must have:
```html
<html lang="en" data-chapter="3">
<body data-chapter="3">
```

The `data-chapter` value is used by the engine for quiz score tracking and progress.

---

## 5. Design System

### Color Palette

The dark-neon gaming aesthetic is non-negotiable. It keeps students engaged and differentiates Quest from boring textbook PDFs.

| Color | Hex | CSS Variable | Usage |
|-------|-----|-------------|-------|
| Cyan | `#00d4ff` | `--neon-cyan` | Primary accent, headings, interactive elements |
| Green | `#00ff88` | `--neon-green` | Success, correct answers, positive values |
| Purple | `#a855f7` | `--neon-purple` | Secondary accent, construction arcs |
| Pink | `#ff006e` | `--neon-pink` | Draggable points, key interactive elements |
| Gold | `#ffd700` | `--neon-gold` | Highlights, medals, special values |
| Orange | `#ff8c00` | `--neon-orange` | Warnings, streaks |
| Red | `#ff3366` | `--neon-red` | Errors, incorrect answers |

### Visualization Colors (JSXGraph / Canvas)

**CRITICAL**: These are the ONLY colors allowed in visualizations:

| Purpose | Color | Contrast Ratio vs #060810 |
|---------|-------|--------------------------|
| Primary element | `#00d4ff` (cyan) | 10.2:1 AAA |
| Draggable point / accent | `#ff006e` (pink) | 5.4:1 AA |
| Positive / success | `#00ff88` (green) | 12.1:1 AAA |
| Highlight / special | `#ffd700` (gold) | 11.3:1 AAA |
| Secondary accent | `#a855f7` (purple) | 4.6:1 AA |
| Muted / labels | `#94a3b8` | 5.8:1 AA |
| Readable text on dark | `#cbd5e1` | 10.5:1 AAA |
| Board background | `rgba(0,0,0,0.4)` | — |

**BANNED colors** (invisible on dark background):
- `#555`, `#666`, `#475569`, `#64748b`, `#334155`, `#1e293b`
- Any gray darker than `#94a3b8`
- Any `rgba()` with alpha below 0.3 for text/lines

### Component CSS Classes

| Class | Purpose |
|-------|---------|
| `phase`, `phase-hook`, `phase-challenge`, etc. | Phase containers |
| `reveal-group` > `reveal-step` > `reveal-header` + `reveal-content` | Accordion sections |
| `formula-box` | Highlighted formula |
| `key-concept` | Important concept callout |
| `tip-box` | Tips and tricks |
| `warning-box` | Warnings and common mistakes |
| `example-box` | Worked examples |
| `heritage-box` | Islamic/South Asian heritage connection |
| `timeline` > `timeline-item` | Historical timeline |
| `quiz-question`, `quiz-options`, `quiz-option` | Quiz components |
| `boss-challenge`, `boss-input-group` | Boss level components |
| `jsx-container` | JSXGraph visualization container |
| `jsx-readout` | Live readout below visualization |
| `viz-section` | Wrapper for viz + readout |

### Utility CSS Classes

Use these instead of inline `style=` attributes. They keep your HTML clean and the styles in one place.

| Class | Effect |
|-------|--------|
| `.u-text-cyan` | `color: var(--neon-cyan)` |
| `.u-text-green` | `color: var(--neon-green)` |
| `.u-text-gold` | `color: var(--neon-gold)` |
| `.u-text-orange` | `color: var(--neon-orange)` |
| `.u-text-pink` | `color: var(--neon-pink)` |
| `.u-text-purple` | `color: var(--neon-purple)` |
| `.u-text-red` | `color: var(--neon-red)` |
| `.u-text-muted` | `color: var(--text-secondary)` |
| `.u-text-bright` | `color: var(--text-bright)` |
| `.u-mt-xs` / `.u-mt-sm` / `.u-mt-md` / `.u-mt-lg` / `.u-mt-xl` | Margin-top spacing |
| `.u-mb-sm` / `.u-mb-md` / `.u-mb-lg` | Margin-bottom spacing |
| `.u-bold` | `font-weight: 700` |
| `.u-mono` | Monospace font |
| `.u-center` | Center text |
| `.u-hidden` | `display: none` |
| `.u-flex-center` | Flex with center alignment |
| `.sr-only` | Visually hidden, screen-reader accessible |
| `.viz-error` | Fallback message when a visualization fails to load |

**Prefer these classes over inline styles.** For example:
```html
<!-- BAD -->
<p style="color: var(--neon-cyan); margin-top: var(--space-lg);">Text</p>

<!-- GOOD -->
<p class="u-text-cyan u-mt-lg">Text</p>
```

### Responsive Breakpoints

The design system has two mobile breakpoints:

| Breakpoint | Target | Key changes |
|------------|--------|-------------|
| `max-width: 768px` | Tablets | Quest grid → single column, smaller headings, phase padding reduced |
| `max-width: 480px` | Phones | JSXGraph height 250px, even smaller headings, compact stat badges |

JSXGraph containers scale automatically: 400px → 300px → 250px across breakpoints.

---

## 6. HTML Chapter Template

Every chapter follows this exact skeleton. Copy this and fill in the content.

```html
<!DOCTYPE html>
<html lang="en" data-chapter="CHAPTER_NUMBER">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quest CHAPTER_NUMBER: TITLE | Quest SUBJECT CLASS</title>
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../libs/katex/katex.min.css">
  <!-- Include JSXGraph ONLY if chapter has visualizations -->
  <link rel="stylesheet" href="../libs/jsxgraph/jsxgraph.css">
  <script defer src="../libs/jsxgraph/jsxgraphcore.js"></script>
  <style>
    /* Chapter-specific styles — keep these minimal */
    .chapter-hero { text-align:center; padding:60px 0 30px; position:relative; z-index:1; }
    .chapter-hero .chapter-number { font-size:0.85rem; text-transform:uppercase; letter-spacing:3px; color:var(--neon-cyan); margin-bottom:8px; }
    .chapter-hero h1 { font-size:2.8rem; margin-bottom:12px; }
    .chapter-hero .chapter-subtitle { color:var(--text-secondary); font-size:1.05rem; max-width:600px; margin:0 auto; }
    .back-link { display:inline-flex; align-items:center; gap:6px; color:var(--text-secondary); text-decoration:none; font-size:0.9rem; padding:8px 0; transition:color var(--transition-fast); }
    .back-link:hover { color:var(--neon-cyan); }
    .phase h2 { margin-bottom:16px; }
    .phase p, .phase li { margin-bottom:10px; line-height:1.8; }
    .phase ul, .phase ol { padding-left:20px; margin:12px 0; }
    .example-box { background:rgba(168,85,247,0.06); border:1px solid rgba(168,85,247,0.15); border-radius:var(--radius-md); padding:var(--space-lg); margin:var(--space-md) 0; }
    .boss-challenge { background:var(--bg-card); border:1px solid rgba(255,51,102,0.2); border-radius:var(--radius-md); padding:var(--space-lg); margin:var(--space-md) 0; }
    .boss-challenge h4 { color:var(--neon-red); }
    .boss-input-group { display:flex; gap:12px; align-items:center; margin:12px 0; flex-wrap:wrap; }
    .boss-feedback { margin-top:8px; font-size:0.9rem; display:none; }
  </style>
</head>
<body data-chapter="CHAPTER_NUMBER">

  <!-- Top Bar (copy exactly — engine.js reads these IDs) -->
  <nav class="top-bar">
    <div class="logo">
      <a href="../index.html" class="back-link">&#8592; Back</a>
      <span class="neon-text" style="margin-left:12px;">Quest SUBJECT CLASS</span>
    </div>
    <div class="stats" id="top-bar-stats">
      <div class="stat-badge stat-xp"><span>&#11088;</span> <span id="xp-count">0</span> XP</div>
      <div class="stat-badge stat-streak"><span>&#128293;</span> <span id="streak-count">0</span> Streak</div>
      <div class="stat-badge stat-level"><span>&#9878;</span> Lvl <span id="level-count">1</span></div>
    </div>
  </nav>
  <div style="padding:0 24px;"><div class="progress-container" style="height:4px;"><div class="progress-bar progress-bar-xp" id="xp-progress" style="width:0%"></div></div></div>

  <div class="container">

    <!-- HERO -->
    <div class="chapter-hero animate-fadeInUp">
      <div class="chapter-number">Quest CHAPTER_NUMBER</div>
      <h1><span class="neon-text">CHAPTER TITLE</span></h1>
      <p class="chapter-subtitle">ONE-LINE DESCRIPTION</p>
    </div>

    <!-- PHASE: HOOK -->
    <div class="phase phase-hook animate-fadeInUp delay-1" role="region" aria-label="Hook">
      <div class="phase-tag">&#127918; Hook</div>
      <h2>HOOK TITLE</h2>
      <!-- Hook content here -->
    </div>

    <!-- PHASE: CHALLENGE -->
    <div class="phase phase-challenge animate-fadeInUp delay-2" role="region" aria-label="Challenge">
      <div class="phase-tag">&#9876; Challenge</div>
      <h2>Before You Begin...</h2>
      <!-- Quick puzzle here -->
    </div>

    <!-- PHASE: ORIGINS -->
    <section class="phase phase-origins animate-fadeInUp" role="region" aria-label="Origins">
      <div class="phase-tag">&#128220; The Origins</div>
      <h2>ORIGINS TITLE</h2>
      <!-- Timeline + heritage-box here -->
    </section>

    <!-- PHASE: DISCOVERY -->
    <div class="phase phase-discovery" role="region" aria-label="Discovery">
      <div class="phase-tag">&#128161; Discovery</div>
      <h2>DISCOVERY TITLE</h2>
      <p>Unlock each topic step by step. Click to reveal.</p>
      <div class="reveal-group">

        <!-- Section 1 -->
        <div class="reveal-step">
          <div class="reveal-header">
            <span><span class="step-num">1</span> SECTION TITLE</span>
            <span class="reveal-arrow">&#9660;</span>
          </div>
          <div class="reveal-content">
            <!-- Content + formulas + examples -->
            <!-- Visualization (inline, inside this reveal-content) -->
            <div class="viz-section u-mt-lg">
              <h4>Interactive: VIZ TITLE</h4>
              <p>VIZ INSTRUCTIONS</p>
              <div id="jsx-VIZNAME" class="jsx-container" style="height:400px;" aria-label="Interactive visualization"></div>
              <div class="jsx-readout" id="VIZNAME-readout"></div>
            </div>
          </div>
        </div>

        <!-- Section 2, 3, ... (same pattern) -->

      </div><!-- /reveal-group -->
    </div>

    <!-- PHASE: PRACTICE -->
    <div class="phase phase-practice" role="region" aria-label="Practice quiz">
      <div class="phase-tag">&#127919; Practice</div>
      <h2>Test Your Knowledge</h2>
      <p>Answer all 8 questions.</p>
      <div class="scoreboard">
        <div class="score-item"><div class="score-value glow-text-cyan quiz-score">0/0</div><div class="score-label">Score</div></div>
        <div class="score-item"><div class="score-value glow-text-gold" id="quiz-streak">0</div><div class="score-label">Streak</div></div>
      </div>
      <div class="quiz-container">
        <!-- 8 quiz questions (see Quiz Standards section) -->
      </div>
    </div>

    <!-- PHASE: BOSS -->
    <div class="phase phase-boss" role="region" aria-label="Boss challenge">
      <div class="phase-tag">&#128123; Boss Level</div>
      <h2>Final Boss</h2>
      <!-- 3-4 boss challenges (see Boss Standards section) -->
      <div class="u-center u-mt-xl">
        <button class="btn btn-success" id="complete-ch-btn" style="font-size:1.1rem; padding:16px 40px;">
          &#127942; Complete Quest CHAPTER_NUMBER
        </button>
      </div>
    </div>

    <div class="u-center" style="padding:40px 0;">
      <a href="../index.html" class="btn btn-ghost">&#8592; Return to Dashboard</a>
    </div>

  </div><!-- /container -->

  <!-- Scripts: engine first, then shared modules, then libs, then chapter code -->
  <script src="../js/engine.js"></script>
  <script src="../js/viz-manager.js"></script>
  <script src="../js/safe-dom.js"></script>
  <script defer src="../libs/katex/katex.min.js"></script>
  <script defer src="../libs/katex/auto-render.min.js"></script>

  <!-- Chapter visualizations + event bindings -->
  <script>
  document.addEventListener('DOMContentLoaded', function() {

    // --- Boss challenge event bindings (NO inline onclick!) ---
    document.getElementById('complete-ch-btn').addEventListener('click', function() {
      QuestMath.completeChapter('CHAPTER_NUMBER');
    });

    // --- Visualization code below (see Visualization section) ---

  });
  </script>
</body>
</html>
```

### Template Changes from v1 (Important!)

If you're updating from a v1 template or an older chapter, note these mandatory changes:

| Old Pattern (v1) | New Pattern (v2) | Why |
|-------------------|-------------------|-----|
| `<script src="../libs/jsxgraph/jsxgraphcore.js"></script>` | `<script defer src="..."></script>` | Non-blocking page load |
| Only `engine.js` | `engine.js` + `viz-manager.js` + `safe-dom.js` | Shared modules for security & memory |
| `onclick="QuestMath.completeChapter('1')"` | `id="complete-ch-btn"` + `addEventListener` | No inline event handlers (security) |
| `readout.innerHTML = '...'` | `SafeDOM.readoutHTML(readout, '...')` | XSS prevention |
| `JXG.JSXGraph.initBoard(...)` | `VizManager.create(...)` | Automatic cleanup on page unload |
| `style="color: var(--neon-cyan)"` | `class="u-text-cyan"` | Utility classes, single source of truth |
| No ARIA attributes | `role="region"` + `aria-label` on phases and viz containers | Accessibility |

---

## 7. Writing Discovery Sections

### Structure of Each Section

```
Section Title
├── Concept explanation (2-4 paragraphs)
├── Formula box(es) with KaTeX
├── Worked example in example-box
├── Tip/warning box (optional)
└── Interactive visualization (inline, inside reveal-content)
```

### KaTeX Formula Syntax

- Inline math: `$x^2 + y^2 = r^2$`
- Display math: `$$\frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$`
- If a formula is too long and gets clipped, split into separate `$...$` blocks

### Content Accuracy Rules

1. **Every formula must match the Federal Board textbook exactly**
2. **Every example must be solvable with the methods taught in the chapter**
3. **Terminology must match the textbook** (e.g., "radial segment" not "radius line")
4. **Do NOT add content beyond the syllabus** — this is exam preparation, not enrichment

---

## 8. Building Interactive Visualizations

### The Visualization Pattern

Every visualization follows this exact pattern using `VizManager.create()`:

```javascript
/* ====== Viz N: Title ====== */
(function() {
  var el = document.getElementById('jsx-VIZNAME');
  if (!el) return;                          // Guard: skip if container missing

  var board = VizManager.create('jsx-VIZNAME', {
    boundingbox: [-6, 6, 6, -6],            // [xmin, ymax, xmax, ymin]
    axis: false, grid: false,
    keepaspectratio: true                    // true for geometry, false for charts
  });
  if (!board) return;                       // VizManager returns null on failure
  board.containerObj.style.background = 'rgba(0,0,0,0.4)';  // ALWAYS set this

  // Create elements...
  // ...

  var readout = document.getElementById('VIZNAME-readout');
  function updateReadout() {
    // Use SafeDOM for readouts — NEVER raw innerHTML
    SafeDOM.readoutHTML(readout,
      '<strong style="color:#00d4ff;">x:</strong> ' + P.X().toFixed(2) +
      ' | <strong style="color:#00ff88;">y:</strong> ' + P.Y().toFixed(2)
    );
  }

  // Bind drag events
  point.on('drag', updateReadout);

  // CRITICAL: Call updateReadout at init so readout isn't empty
  updateReadout();
})();
```

### VizManager API

`VizManager` is defined in `viz-manager.js` and manages the lifecycle of all JSXGraph boards:

| Method | Description |
|--------|-------------|
| `VizManager.create(containerId, opts)` | Create a board with error handling. Returns the board or `null`. Defaults include `showNavigation:false`, `showCopyright:false`, `renderer:'svg'`. |
| `VizManager.destroy(containerId)` | Destroy a specific board and free its resources. |
| `VizManager.destroyAll()` | Destroy ALL boards. Called automatically on `beforeunload`. |
| `VizManager.get(containerId)` | Get a registered board by container ID. |
| `VizManager.count()` | Get count of active boards (useful for debugging). |

**Why VizManager instead of raw `JXG.JSXGraph.initBoard()`?**
- **Memory safety**: All boards are automatically freed on page unload — no memory leaks
- **Error handling**: If the container doesn't exist or JSXGraph fails, you get `null` instead of a thrown error crashing the whole page
- **Duplicate prevention**: Creating a board in a container that already has one will free the old board first
- **Debugging**: `VizManager.count()` tells you how many boards are active

### Key Rules

1. **IIFE wrapper**: Every viz wrapped in `(function(){ ... })();` to prevent variable collision
2. **Existence guard**: `var el = document.getElementById('...'); if (!el) return;`
3. **Use VizManager**: `var board = VizManager.create('jsx-NAME', {...});` — NEVER `JXG.JSXGraph.initBoard` directly
4. **Null check**: `if (!board) return;` after `VizManager.create()`
5. **Dark background**: `board.containerObj.style.background = 'rgba(0,0,0,0.4)';`
6. **Only approved colors**: See the color table in Section 5
7. **SafeDOM for readouts**: `SafeDOM.readoutHTML(readout, '...')` — NEVER `readout.innerHTML = '...'` directly
8. **Initial readout**: Always call `updateReadout()` at the end — never leave readout empty
9. **Inline placement**: Viz goes INSIDE the `reveal-content` div of its relevant section, NOT at the bottom
10. **DOMContentLoaded**: All vizzes wrapped in `document.addEventListener('DOMContentLoaded', function(){ ... });`
11. **ARIA label**: Every `.jsx-container` div must have `aria-label="Interactive visualization"`
12. **No inline onclick**: Buttons that control vizzes use `addEventListener` inside the DOMContentLoaded block

### JSXGraph Element Cheat Sheet

```javascript
// Point (draggable)
board.create('point', [x, y], {name:'P', size:5, color:'#ff006e', label:{color:'#ff006e', fontSize:13}});

// Point (fixed)
board.create('point', [x, y], {name:'O', size:3, color:'#00d4ff', fixed:true});

// Glider (constrained to curve)
board.create('glider', [x, y, circle], {name:'P', size:5, color:'#ff006e'});

// Line segment
board.create('segment', [pointA, pointB], {strokeColor:'#00d4ff', strokeWidth:2});

// Circle
board.create('circle', [centre, radius], {strokeColor:'#00d4ff', strokeWidth:2});

// Arc
board.create('arc', [centre, startPoint, endPoint], {strokeColor:'#ffd700', strokeWidth:2});

// Angle marker (right angle)
board.create('angle', [pointA, vertex, pointB], {radius:0.4, type:'square', color:'rgba(255,215,0,0.2)', strokeColor:'#ffd700'});

// Slider
board.create('slider', [[x1,y], [x2,y], [min, start, max]], {
  name:'r', withLabel:true,
  baseline:{strokeColor:'#94a3b8'}, highline:{strokeColor:'#00d4ff'},
  fillColor:'#00d4ff', label:{color:'#cbd5e1', fontSize:11}
});

// Text label
board.create('text', [x, y, 'label'], {fontSize:11, color:'#cbd5e1', fixed:true});

// Dynamic text (updates with point movement)
board.create('text', [function(){return P.X();}, function(){return P.Y()+0.5;}, function(){return 'x='+P.X().toFixed(1);}], {fontSize:10, color:'#ffd700', fixed:true});
```

### Visualization Types by Subject

| Subject | Library | Use For |
|---------|---------|---------|
| **Math** | JSXGraph | Geometry, function plots, complex plane, vectors, statistics charts |
| **Physics** | JSXGraph + Canvas | Force diagrams, projectile motion, circuit diagrams, wave simulations |
| **Chemistry** | SVG + CSS animation | Molecular structures, reaction diagrams, periodic table explorer |
| **Biology** | SVG with interactive layers | Cell diagrams, body systems, classification trees |
| **Pak Studies** | SVG maps + timelines | Historical maps, timeline explorers, constitutional diagrams |
| **English/Urdu** | DOM-based | Sentence diagramming, vocabulary flashcards, fill-in-the-blank |

---

## 9. Security & Safe DOM Rendering

### The #1 Rule: NEVER Use `innerHTML` with Dynamic Data

`innerHTML` interprets strings as HTML. If any part of the string ever comes from user input, localStorage, or an external source, it's an XSS (Cross-Site Scripting) vulnerability. Even when the data is "trusted" today, it might not be tomorrow when another builder modifies the code.

**Use `SafeDOM` for ALL dynamic DOM updates.**

### SafeDOM API

`SafeDOM` is defined in `safe-dom.js`:

| Method | Purpose | Example |
|--------|---------|---------|
| `SafeDOM.setText(elOrId, text)` | Set plain text safely | `SafeDOM.setText('result', 'Answer: 42')` |
| `SafeDOM.feedback(elOrId, isCorrect, message)` | Show colored correct/incorrect message | `SafeDOM.feedback('fb1', true, 'Correct!')` |
| `SafeDOM.readoutHTML(elOrId, html)` | Set readout with trusted computed HTML | `SafeDOM.readoutHTML(readout, '<strong>x:</strong> 3.14')` |
| `SafeDOM.bossFeedback(elOrId, isCorrect, answer)` | Show boss challenge result | `SafeDOM.bossFeedback('boss1-fb', false, '3+2i')` |
| `SafeDOM.buttonGroup(elOrId, buttons, cls)` | Build a group of buttons safely | See below |

### When to Use Which Method

```
Is it plain text with no formatting?
  → SafeDOM.setText()

Is it a quiz/boss correct/incorrect message?
  → SafeDOM.feedback() or SafeDOM.bossFeedback()

Is it a JSXGraph readout showing computed values (coordinates, lengths, angles)?
  → SafeDOM.readoutHTML()  (HTML is from OUR code, never user input)

Is it a set of buttons that switch modes/datasets?
  → SafeDOM.buttonGroup()
```

### The `readoutHTML` Exception

`SafeDOM.readoutHTML()` still uses innerHTML internally because readouts often need `<strong>` tags and color styling for visual clarity. This is acceptable because:
1. The HTML string is constructed entirely from our own computed values (e.g., `P.X().toFixed(2)`)
2. No user input, localStorage data, or external data ever flows into it
3. The method is named explicitly (`HTML`) so builders know it's the one exception

### Event Handlers: addEventListener ONLY

**NEVER use inline `onclick=` attributes.** They:
- Can't be removed or tested
- Block Content Security Policy headers
- Mix markup with behavior

```html
<!-- BAD -->
<button onclick="checkBoss1()">Submit</button>
<button onclick="QuestMath.completeChapter('3')">Complete</button>

<!-- GOOD -->
<button id="boss1-submit">Submit</button>
<button id="complete-ch-btn">Complete</button>
```

```javascript
// Inside DOMContentLoaded:
document.getElementById('boss1-submit').addEventListener('click', checkBoss1);
document.getElementById('complete-ch-btn').addEventListener('click', function() {
  QuestMath.completeChapter('3');
});
```

### localStorage Safety

`engine.js` now includes these protections:
- **Availability check**: Detects if localStorage is blocked (private browsing, storage disabled)
- **Quota handling**: `saveState()` wrapped in try-catch — won't crash if storage is full
- **Whitelist merge**: Only known state keys are loaded — prevents injection of arbitrary properties
- **Graceful degradation**: If storage is unavailable, the app works normally but progress isn't saved

Builders do NOT need to worry about localStorage — the engine handles it. Just call `QuestMath.checkFillIn()`, `QuestMath.completeChapter()`, etc. as usual.

### Accessibility Requirements

Every chapter must include:

| Element | Required Attribute |
|---------|-------------------|
| Each `.phase` section | `role="region" aria-label="Hook"` (or Challenge/Origins/etc.) |
| Each `.jsx-container` div | `aria-label="Interactive visualization"` |
| Each `.reveal-header` div | Automatically gets `role="button"`, `tabindex="0"`, `aria-expanded` (engine.js handles this) |
| Each `.quiz-option` div | Automatically gets `role="button"`, `tabindex="0"` (engine.js handles this) |

The engine now supports **keyboard navigation**: Enter/Space to open accordion sections and select quiz options.

---

## 10. Quiz & Boss Challenge Standards

### Practice Quiz (8 Questions)

```html
<div class="quiz-question" data-correct="b">
  <div class="q-number">Question 1 of 8</div>
  <div class="q-text">THE QUESTION TEXT with $math$</div>
  <div class="quiz-options">
    <div class="quiz-option" data-value="a"><span class="opt-letter">A</span> Option A</div>
    <div class="quiz-option" data-value="b"><span class="opt-letter">B</span> Option B</div>
    <div class="quiz-option" data-value="c"><span class="opt-letter">C</span> Option C</div>
    <div class="quiz-option" data-value="d"><span class="opt-letter">D</span> Option D</div>
  </div>
  <div class="quiz-feedback correct-fb">Correct! EXPLANATION.</div>
  <div class="quiz-feedback incorrect-fb">EXPLANATION of correct answer.</div>
</div>
```

**Rules**:
- Exactly **8 questions** per chapter
- Always **4 options** (A–D)
- `data-correct` must match one `data-value`
- Both `correct-fb` and `incorrect-fb` must explain the answer
- Cover all discovery sections (not just the first few)
- At least 2 questions should require calculation, not just recall

### Boss Challenge (Fill-in-the-blank)

```html
<div class="boss-challenge">
  <h4>Boss Challenge 1: TITLE</h4>
  <p>PROBLEM STATEMENT with $math$</p>
  <div class="boss-input-group">
    <input type="text" id="boss1-input" class="math-input" placeholder="UNIT" style="max-width:160px;">
    <button class="btn btn-primary" id="boss1-submit">Submit</button>
  </div>
  <div class="boss-feedback" id="boss1-fb"></div>
  <div class="quiz-hint" id="boss1-hint">
    <strong>Hint:</strong> HINT TEXT
  </div>
  <button class="btn btn-hint" id="boss1-hint-btn" class="u-mt-sm">Show Hint</button>
</div>
```

```javascript
// Inside DOMContentLoaded:
document.getElementById('boss1-submit').addEventListener('click', function() {
  QuestMath.checkFillIn('boss1-input', 'ANSWER', 'boss1-fb');
});
document.getElementById('boss1-hint-btn').addEventListener('click', function() {
  document.getElementById('boss1-hint').classList.toggle('show');
});
```

**Rules**:
- 3–4 challenges per chapter
- Answer must be a simple string (number, fraction like "1/4", or short text)
- `checkFillIn` does case-insensitive, whitespace-stripped comparison
- Always include a hint (hidden by default)
- Boss IDs must be unique: `boss1-input`/`boss1-fb`, `boss2-input`/`boss2-fb`, etc.
- **NO inline onclick** — all events via addEventListener in the DOMContentLoaded block

---

## 11. The Content Pipeline

### Overview

```
STEP 1: Extract          STEP 2: Structure         STEP 3: Generate         STEP 4: Enhance         STEP 5: QA
─────────────────        ─────────────────         ─────────────────        ─────────────────       ─────────
Scanned PDF         →    Chapter JSON Schema   →   HTML from Template   →   Add Visualizations  →  Checklist
(Claude Vision)          (Claude Text)              (Manual/Script)          (Claude Code)           (Human)
```

### Step 1: Content Extraction (PDF → Raw Text)

Feed each chapter's scanned pages to Claude with this prompt:

```
You are extracting content from a Pakistani Federal Board textbook.

For each page, extract:
1. All text content (preserve headings, paragraphs, lists)
2. All mathematical formulas (convert to LaTeX notation)
3. All figure/diagram descriptions (describe what is shown)
4. All examples with their step-by-step solutions
5. All exercise questions with answers (if provided)

Output as structured markdown with clear section headings.
Preserve the EXACT terminology used in the textbook.
```

### Step 2: Content Structuring (Raw Text → JSON)

Feed the extracted text to Claude with this prompt:

```
Convert this Federal Board textbook chapter into a structured JSON
following this exact schema:

{
  "class": "10",
  "subject": "Physics",
  "chapter_number": 3,
  "title": "Dynamics",
  "subtitle": "One-line description",

  "hook": {
    "title": "Hook title (engaging, relatable)",
    "narrative": "2-3 paragraphs creating curiosity. Use a real-world scenario
                  the student would encounter. NO prerequisite knowledge.",
    "key_concept": "One-sentence core principle"
  },

  "challenge": {
    "puzzle": "A simple question solvable by intuition",
    "answer": "The answer with brief explanation"
  },

  "origins": {
    "title": "Historical title",
    "intro": "One paragraph connecting history to the topic",
    "timeline": [
      {"year": "~300 BC", "scholar": "Name", "contribution": "What they did"},
      ...
    ],
    "heritage": "Paragraph connecting to Islamic/South Asian/Pakistani heritage"
  },

  "discovery_sections": [
    {
      "number": 1,
      "title": "Section Title",
      "content": "Explanation in markdown with $LaTeX$ formulas",
      "formulas": ["key formula 1", "key formula 2"],
      "examples": [
        {"problem": "...", "solution": "step-by-step..."}
      ],
      "visualization_idea": "Description of an interactive viz that would help"
    },
    ...
  ],

  "practice_quiz": [
    {
      "question": "...",
      "options": {"a": "...", "b": "...", "c": "...", "d": "..."},
      "correct": "b",
      "feedback_correct": "...",
      "feedback_incorrect": "..."
    },
    ... (exactly 8)
  ],

  "boss_challenges": [
    {
      "title": "Challenge title",
      "problem": "...",
      "answer": "35",
      "hint": "..."
    },
    ... (3-4)
  ]
}
```

### Step 3: HTML Generation

Use the JSON + the chapter template from Section 6 to produce the HTML. This can be done:
- **Manually**: Copy template, paste content from JSON (fastest for 1–2 chapters)
- **With Claude**: Feed JSON + template and ask Claude to produce the full HTML
- **With a script**: Build a Node.js/Python script that reads JSON and outputs HTML (best for scale)

### Step 4: Visualization Enhancement

This is where Claude Code shines. Feed the generated HTML and ask:

```
Add inline JSXGraph visualizations to each discovery section.
Follow these rules exactly:
- Use VizManager.create() (NOT JXG.JSXGraph.initBoard)
- IIFE wrapper per viz
- Existence guard + null check after VizManager.create()
- Dark background: rgba(0,0,0,0.4)
- Only these colors: #00d4ff, #ff006e, #00ff88, #ffd700, #a855f7, #94a3b8, #cbd5e1
- Use SafeDOM.readoutHTML() for readouts (NOT innerHTML)
- Initial updateReadout() call
- Place INSIDE the reveal-content div
- Add aria-label="Interactive visualization" to every .jsx-container
- NO inline onclick — use addEventListener
- All event bindings inside DOMContentLoaded
```

### Step 5: QA (see next section)

---

## 12. Quality Assurance Checklist

Run this checklist for EVERY chapter before it ships. No exceptions.

### Automated Checks (can be scripted)

```
STRUCTURE & LOADING
[ ] No CDN URLs — all libs referenced locally (../libs/...)
[ ] data-chapter attribute present on <html> and <body>
[ ] <meta name="viewport"> present
[ ] Script load order: engine.js → viz-manager.js → safe-dom.js → KaTeX (defer)
[ ] JSXGraph script has defer attribute
[ ] KaTeX scripts have defer attribute

SECURITY (zero tolerance — must all pass)
[ ] Zero .innerHTML = assignments — use SafeDOM.readoutHTML() or SafeDOM.bossFeedback()
[ ] Zero onclick= attributes — use addEventListener in DOMContentLoaded
[ ] All VizManager.create() calls (not raw JXG.JSXGraph.initBoard)
[ ] No global functions outside IIFEs (except QuestMath)

VISUALIZATION INTEGRITY
[ ] No banned dark colors (#555, #475569, #64748b, #334155, #1e293b)
[ ] Every jsx-VIZNAME container ID has matching getElementById in JS
[ ] Every VIZNAME-readout ID has matching getElementById in JS
[ ] Every viz IIFE has updateReadout() or equivalent called at end
[ ] Every .jsx-container has aria-label="Interactive visualization"

QUIZ & BOSS
[ ] completeChapter() call uses correct chapter number
[ ] All quiz questions have data-correct matching one option's data-value
[ ] Both correct-fb and incorrect-fb exist for every quiz question
[ ] All boss inputs have unique IDs
[ ] Boss submit/hint buttons use addEventListener, not onclick

ACCESSIBILITY
[ ] Every .phase section has role="region" and aria-label
[ ] Every .jsx-container has aria-label="Interactive visualization"
```

### Manual Checks (human review)

```
VISUAL & MOBILE
[ ] Open in Chrome mobile (or DevTools mobile view @ 375px) — UI looks good
[ ] Open in DevTools @ 768px (tablet) — layout adapts correctly
[ ] JSXGraph boards scale properly on small screens (not clipped)

FUNCTIONALITY
[ ] Open each accordion section — content displays, KaTeX renders
[ ] Drag every visualization point — readout updates, no JS errors
[ ] Tab through quiz options with keyboard — Enter/Space selects
[ ] Tab to reveal headers with keyboard — Enter/Space toggles
[ ] Answer all 8 quiz questions — scoring works, XP appears
[ ] Complete all boss challenges — feedback shows (green/red)
[ ] Click "Complete Quest" button — achievement popup + confetti
[ ] Click "Back" link — returns to dashboard

CONTENT
[ ] Content accuracy: compare every formula/definition against textbook
[ ] Origins section: at least one Islamic/South Asian scholar mentioned
[ ] Hook: no prerequisite knowledge required

MEMORY
[ ] Open browser DevTools → Performance tab → visit chapter → navigate away
    → Memory should not increase continuously (boards are freed on unload)
```

---

## 13. Deployment & Distribution

### GitHub Pages (Primary — for mobile access)

```bash
# One-time setup
gh repo create quest-academy --public
git remote add origin https://github.com/USERNAME/quest-academy.git
gh api repos/USERNAME/quest-academy/pages -X POST \
  -f "build_type=legacy" -f "source[branch]=master" -f "source[path]=/"

# For every update
git add . && git commit -m "Update chapter" && git push
# Pages rebuilds automatically in ~60 seconds
```

**Live URL**: `https://USERNAME.github.io/quest-academy/`

### WhatsApp Distribution

Share this message in the class group:
```
Quest [Subject] [Class] — Interactive Learning

Open in your phone browser:
https://USERNAME.github.io/quest-academy/

12 chapters with:
✅ Interactive visualizations you can drag and explore
✅ Quizzes with instant feedback
✅ XP points and achievements
✅ Works on any phone — no app needed

Start from Chapter 1 and work your way through!
```

### Offline Zip (For desktop/laptop use)

```bash
cd quest-academy
powershell -Command "Compress-Archive -Path 'interactive\*' -DestinationPath 'QuestSubjectClass.zip' -Force"
```

WhatsApp document limit is 100 MB. Our zip is typically under 1 MB.

---

## 14. Subject-Specific Guidelines

### Physics (Classes 9–12)

- **Visualization library**: JSXGraph for mechanics (vectors, projectile, circular motion). Canvas API for wave animations and circuit diagrams.
- **Key interactivity**: Drag to apply forces, adjust angles, change velocities. Show real-time graphs (v-t, s-t, F-t) alongside the simulation.
- **Formulas**: Use consistent notation from textbook. Pay attention to vector notation (bold or arrow).
- **Units**: Always show units. SI units only.
- **Heritage scholars**: Ibn al-Haytham (optics), Al-Biruni (measurements), Ibn Sina (inertia concept)

### Chemistry (Classes 9–12)

- **Visualization library**: SVG for molecular structures, reaction diagrams. CSS animations for reaction processes.
- **Key interactivity**: Click to add/remove atoms in bonding diagrams. Slider to adjust temperature/concentration in equilibrium.
- **Periodic table**: Build a reusable interactive periodic table component.
- **Heritage scholars**: Jabir ibn Hayyan (father of chemistry), Al-Razi (distillation)

### Biology (Classes 9–12)

- **Visualization library**: Layered SVGs with hover/click to reveal labels. CSS transitions for process animations.
- **Key interactivity**: Click body system layers to show/hide. Step-through for mitosis/meiosis stages.
- **Diagrams**: Every major diagram from the textbook should have an interactive version.
- **Heritage scholars**: Ibn al-Nafis (pulmonary circulation), Al-Jahiz (evolution concepts)

### Pakistan Studies / Islamiat

- **Visualization library**: SVG maps, timeline components, DOM-based interactions.
- **Key interactivity**: Interactive maps (click regions), timeline sliders, constitutional comparison tools.
- **Sensitivity**: Content must be respectful and aligned with national narrative. Verify facts carefully.
- **No math needed**: KaTeX not required. Can skip JSXGraph. Focus on timeline, map, and text-based interactions.

### English / Urdu

- **Visualization library**: DOM-based (no JSXGraph needed).
- **Key interactivity**: Vocabulary flashcards, sentence parsing, drag-and-drop grammar exercises, cloze tests.
- **Typography**: Urdu requires right-to-left (RTL) support. Add `dir="rtl"` and appropriate Urdu fonts (Noto Nastaliq Urdu).
- **Audio**: Consider adding pronunciation audio (HTML5 `<audio>` element) for English chapters.

---

## 15. Common Mistakes & Lessons Learned

These are mistakes we actually made during Quest Math 10. Learn from them.

### Content Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Used electrical impedance in Ch1 hook | Students don't know physics yet — hook failed | Always use **zero-prerequisite** hooks |
| Formulas too long for mobile | Text clipped on small screens | Split long formulas into separate `$...$` blocks |
| Added content beyond syllabus | Students confused about exam relevance | Stick to textbook content ONLY |

### Visual Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Used `#555` for lines | Invisible on dark background | Only use approved colors (see Section 5) |
| Used `#64748b` for text | Failed contrast check | Use `#cbd5e1` for text, `#94a3b8` minimum for labels |
| Vizzes placed at bottom of page | Students didn't connect viz to concept | Place viz INLINE inside the relevant `reveal-content` |

### Technical Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| No `updateReadout()` at init | Readout empty until first drag | Always call `updateReadout()` after binding events |
| Used `board.create('line', ...)` for chord | Line extends infinitely | Use `'segment'` for finite lines |
| Points had `fixed:true` when they should be draggable | Students couldn't interact | Only fix points that shouldn't move |
| No IIFE wrapper on viz | Variable name collision between vizzes | Always wrap: `(function(){ ... })();` |
| No existence guard | JS error if container missing | Always: `var el = document.getElementById('...'); if (!el) return;` |
| CDN dependencies | Didn't work offline or on mobile file:// | Bundle all libs locally in `libs/` folder |

### Security & Architecture Mistakes (Fixed in v2)

| Mistake | Impact | Fix |
|---------|--------|-----|
| Used `innerHTML` for readouts and feedback (60 instances) | XSS vulnerability if any dynamic data flows through | Use `SafeDOM.readoutHTML()` or `SafeDOM.bossFeedback()` |
| Used `onclick=` inline handlers (69 instances) | Can't test, can't use CSP, mixes markup with behavior | Use `addEventListener()` inside DOMContentLoaded |
| Raw `JXG.JSXGraph.initBoard()` without cleanup | Memory leak — boards never freed, tab slows over time | Use `VizManager.create()` with auto-cleanup on `beforeunload` |
| No localStorage error handling | Silent crash in private browsing / when storage full | engine.js now checks availability and catches quota errors |
| State loaded via spread operator (`...JSON.parse(saved)`) | Any arbitrary key in localStorage gets merged into state | engine.js now only merges whitelisted keys |
| `const` and arrow functions in engine.js | Older browsers/WebViews may fail | Changed to `var` and `function()` for maximum compatibility |
| No ARIA labels, no keyboard navigation | Screen readers can't use the app | Added `role`, `aria-label`, `tabindex`, `keydown` handlers |
| Only one responsive breakpoint (768px) | Phones (< 480px) got clipped content | Added 480px breakpoint for phones |
| No `defer` on library scripts | Scripts block page rendering | All library scripts now have `defer` attribute |
| Global functions like `checkBoss1()` | Namespace pollution, override risk | Functions are now scoped inside DOMContentLoaded or IIFEs |

---

## 16. Quick Reference Card

Print this and keep it next to your screen while building.

```
╔══════════════════════════════════════════════════════════════════════╗
║                    QUEST CHAPTER QUICK REF (v2)                      ║
╠══════════════════════════════════════════════════════════════════════╣
║                                                                      ║
║  PHASES: Hook → Challenge → Origins → Discovery → Practice → Boss    ║
║                                                                      ║
║  SCRIPTS (load order):                                               ║
║    engine.js → viz-manager.js → safe-dom.js                          ║
║    KaTeX + JSXGraph scripts get "defer" attribute                    ║
║                                                                      ║
║  COLORS:                                                             ║
║    #00d4ff  cyan     Primary, headings                               ║
║    #ff006e  pink     Draggable points                                ║
║    #00ff88  green    Success, positive                               ║
║    #ffd700  gold     Highlights, special                             ║
║    #a855f7  purple   Secondary accent                                ║
║    #94a3b8  gray     Muted labels (minimum for visibility)           ║
║    #cbd5e1  light    Readable text on dark                           ║
║    BANNED:  #555 #475569 #64748b #334155 #1e293b                     ║
║                                                                      ║
║  VIZ PATTERN:                                                        ║
║    (function(){                                                      ║
║      var el = document.getElementById('jsx-NAME');                   ║
║      if (!el) return;                                                ║
║      var board = VizManager.create('jsx-NAME', {...});               ║
║      if (!board) return;                                             ║
║      board.containerObj.style.background = 'rgba(0,0,0,0.4)';       ║
║      // ... elements ...                                             ║
║      SafeDOM.readoutHTML(readout, '...');  // NOT innerHTML          ║
║      updateReadout();  // ALWAYS CALL AT END                         ║
║    })();                                                             ║
║                                                                      ║
║  SECURITY RULES:                                                     ║
║    ✗ NEVER: .innerHTML =        ✓ USE: SafeDOM.readoutHTML()         ║
║    ✗ NEVER: onclick="..."       ✓ USE: addEventListener()            ║
║    ✗ NEVER: JXG.JSXGraph.init   ✓ USE: VizManager.create()          ║
║    ✗ NEVER: global functions     ✓ USE: IIFEs or DOMContentLoaded    ║
║                                                                      ║
║  ACCESSIBILITY:                                                      ║
║    .phase → role="region" aria-label="Phase Name"                    ║
║    .jsx-container → aria-label="Interactive visualization"           ║
║    Keyboard: engine.js auto-adds tabindex + keydown for quizzes      ║
║                                                                      ║
║  QUIZ: 8 questions, 4 options each, data-correct="a|b|c|d"          ║
║  BOSS: 3-4 fill-in, checkFillIn('inputId','answer','fbId')          ║
║        Boss buttons: id="boss1-submit" + addEventListener            ║
║                                                                      ║
║  FILES: ch{NN}_{topic}.html  |  data-chapter="NN" on html+body      ║
║  LIBS:  ../libs/katex/  ../libs/jsxgraph/  (NO CDN!)                ║
║  CSS:   Use .u-text-cyan .u-mt-lg etc. — NOT inline style=          ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
```

---

## Getting Started as a New Builder

1. **Read this entire guide** (30 min)
2. **Study one completed chapter** — open `ch01_complex_numbers.html` in a text editor and trace through each phase
3. **Copy the template** from Section 6
4. **Get the PDF** for your assigned subject/chapter
5. **Follow the pipeline**: Extract → Structure → Generate → Enhance → QA
6. **Run the QA checklist** before submitting
7. **Push and verify** on GitHub Pages + mobile

Welcome to Quest Academy. Let's make learning unforgettable for every student in Pakistan.
