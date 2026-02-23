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
9. [Quiz & Boss Challenge Standards](#9-quiz--boss-challenge-standards)
10. [The Content Pipeline: PDF → JSON → HTML](#10-the-content-pipeline)
11. [Quality Assurance Checklist](#11-quality-assurance-checklist)
12. [Deployment & Distribution](#12-deployment--distribution)
13. [Subject-Specific Guidelines](#13-subject-specific-guidelines)
14. [Common Mistakes & Lessons Learned](#14-common-mistakes--lessons-learned)
15. [Quick Reference Card](#15-quick-reference-card)

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
│   │   └── engine.js              # Quest engine (quizzes, XP, streaks, progress)
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
  <script src="../libs/jsxgraph/jsxgraphcore.js"></script>
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
    <div class="phase phase-hook animate-fadeInUp delay-1">
      <div class="phase-tag">&#127918; Hook</div>
      <h2>HOOK TITLE</h2>
      <!-- Hook content here -->
    </div>

    <!-- PHASE: CHALLENGE -->
    <div class="phase phase-challenge animate-fadeInUp delay-2">
      <div class="phase-tag">&#9876; Challenge</div>
      <h2>Before You Begin...</h2>
      <!-- Quick puzzle here -->
    </div>

    <!-- PHASE: ORIGINS -->
    <section class="phase phase-origins animate-fadeInUp">
      <div class="phase-tag">&#128220; The Origins</div>
      <h2>ORIGINS TITLE</h2>
      <!-- Timeline + heritage-box here -->
    </section>

    <!-- PHASE: DISCOVERY -->
    <div class="phase phase-discovery">
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
            <div class="viz-section" style="margin-top:var(--space-lg);">
              <h4>Interactive: VIZ TITLE</h4>
              <p>VIZ INSTRUCTIONS</p>
              <div id="jsx-VIZNAME" class="jsx-container" style="height:400px;"></div>
              <div class="jsx-readout" id="VIZNAME-readout"></div>
            </div>
          </div>
        </div>

        <!-- Section 2, 3, ... (same pattern) -->

      </div><!-- /reveal-group -->
    </div>

    <!-- PHASE: PRACTICE -->
    <div class="phase phase-practice">
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
    <div class="phase phase-boss">
      <div class="phase-tag">&#128123; Boss Level</div>
      <h2>Final Boss</h2>
      <!-- 3-4 boss challenges (see Boss Standards section) -->
      <div style="text-align:center; margin-top:32px;">
        <button class="btn btn-success" onclick="QuestMath.completeChapter('CHAPTER_NUMBER')" style="font-size:1.1rem; padding:16px 40px;">
          &#127942; Complete Quest CHAPTER_NUMBER
        </button>
      </div>
    </div>

    <div style="text-align:center; padding:40px 0;">
      <a href="../index.html" class="btn btn-ghost">&#8592; Return to Dashboard</a>
    </div>

  </div><!-- /container -->

  <!-- JSXGraph Visualizations -->
  <script>
  document.addEventListener('DOMContentLoaded', function() {
    // All visualization code here (see Visualization section)
  });
  </script>

  <script src="../js/engine.js"></script>
  <script src="../libs/katex/katex.min.js"></script>
  <script src="../libs/katex/auto-render.min.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => { QuestMath.init(); });
  </script>
</body>
</html>
```

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

Every visualization follows this exact pattern:

```javascript
/* ====== Viz N: Title ====== */
(function() {
  var el = document.getElementById('jsx-VIZNAME');
  if (!el) return;                          // Guard: skip if container missing
  var board = JXG.JSXGraph.initBoard('jsx-VIZNAME', {
    boundingbox: [-6, 6, 6, -6],            // [xmin, ymax, xmax, ymin]
    axis: false, grid: false,
    showNavigation: false, showCopyright: false,
    keepAspectRatio: true                   // true for geometry, false for charts
  });
  board.containerObj.style.background = 'rgba(0,0,0,0.4)';  // ALWAYS set this

  // Create elements...
  // ...

  var readout = document.getElementById('VIZNAME-readout');
  function updateReadout() {
    readout.innerHTML = '...';              // Live-updating values
  }

  // Bind drag events
  point.on('drag', updateReadout);

  // CRITICAL: Call updateReadout at init so readout isn't empty
  updateReadout();
})();
```

### Key Rules

1. **IIFE wrapper**: Every viz wrapped in `(function(){ ... })();` to prevent variable collision
2. **Existence guard**: `var el = document.getElementById('...'); if (!el) return;`
3. **Dark background**: `board.containerObj.style.background = 'rgba(0,0,0,0.4)';`
4. **Only approved colors**: See the color table in Section 5
5. **Initial readout**: Always call `updateReadout()` at the end — never leave readout empty
6. **Inline placement**: Viz goes INSIDE the `reveal-content` div of its relevant section, NOT at the bottom
7. **DOMContentLoaded**: All vizzes wrapped in `document.addEventListener('DOMContentLoaded', function(){ ... });`

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

## 9. Quiz & Boss Challenge Standards

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
    <button class="btn btn-primary" onclick="QuestMath.checkFillIn('boss1-input', 'ANSWER', 'boss1-fb')">Submit</button>
  </div>
  <div class="boss-feedback" id="boss1-fb"></div>
  <div class="quiz-hint">
    <strong>Hint:</strong> HINT TEXT
  </div>
  <button class="btn btn-hint" onclick="this.previousElementSibling.classList.toggle('show')" style="margin-top:8px;">Show Hint</button>
</div>
```

**Rules**:
- 3–4 challenges per chapter
- Answer must be a simple string (number, fraction like "1/4", or short text)
- `checkFillIn` does case-insensitive, whitespace-stripped comparison
- Always include a hint (hidden by default)
- Boss IDs must be unique: `boss1-input`/`boss1-fb`, `boss2-input`/`boss2-fb`, etc.

---

## 10. The Content Pipeline

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
- IIFE wrapper per viz
- Existence guard
- Dark background: rgba(0,0,0,0.4)
- Only these colors: #00d4ff, #ff006e, #00ff88, #ffd700, #a855f7, #94a3b8, #cbd5e1
- Initial updateReadout() call
- Place INSIDE the reveal-content div
```

### Step 5: QA (see next section)

---

## 11. Quality Assurance Checklist

Run this checklist for EVERY chapter before it ships. No exceptions.

### Automated Checks (can be scripted)

```
[ ] No CDN URLs — all libs referenced locally (../libs/...)
[ ] No banned dark colors (#555, #475569, #64748b, #334155, #1e293b)
[ ] Every jsx-VIZNAME container ID has matching getElementById in JS
[ ] Every VIZNAME-readout ID has matching getElementById in JS
[ ] Every viz IIFE has updateReadout() or equivalent called at end
[ ] data-chapter attribute present on <html> and <body>
[ ] <meta name="viewport"> present
[ ] KaTeX scripts load AFTER engine.js
[ ] QuestMath.init() is called in DOMContentLoaded
[ ] completeChapter() call uses correct chapter number
[ ] All quiz questions have data-correct matching one option's data-value
[ ] Both correct-fb and incorrect-fb exist for every quiz question
[ ] All boss inputs have unique IDs
```

### Manual Checks (human review)

```
[ ] Open in Chrome mobile (or DevTools mobile view) — UI looks good
[ ] Open each accordion section — content displays, KaTeX renders
[ ] Drag every visualization point — readout updates, no JS errors
[ ] Click every slider — values change, viz updates
[ ] Answer all 8 quiz questions — scoring works, XP appears
[ ] Complete all boss challenges — feedback shows
[ ] Click "Complete Quest" button — achievement popup + confetti
[ ] Click "Back" link — returns to dashboard
[ ] Content accuracy: compare every formula/definition against textbook
[ ] Origins section: at least one Islamic/South Asian scholar mentioned
[ ] Hook: no prerequisite knowledge required
```

---

## 12. Deployment & Distribution

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

## 13. Subject-Specific Guidelines

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

## 14. Common Mistakes & Lessons Learned

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
| Used `defer` on some scripts but not others | Inconsistent load order | Use plain `<script src="...">` consistently |

---

## 15. Quick Reference Card

Print this and keep it next to your screen while building.

```
╔══════════════════════════════════════════════════════════════════╗
║                    QUEST CHAPTER QUICK REF                      ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  PHASES: Hook → Challenge → Origins → Discovery → Practice → Boss║
║                                                                  ║
║  COLORS:                                                         ║
║    #00d4ff  cyan     Primary, headings                           ║
║    #ff006e  pink     Draggable points                            ║
║    #00ff88  green    Success, positive                           ║
║    #ffd700  gold     Highlights, special                         ║
║    #a855f7  purple   Secondary accent                            ║
║    #94a3b8  gray     Muted labels (minimum for visibility)       ║
║    #cbd5e1  light    Readable text on dark                       ║
║    BANNED:  #555 #475569 #64748b #334155 #1e293b                 ║
║                                                                  ║
║  VIZ PATTERN:                                                    ║
║    (function(){                                                  ║
║      var el = document.getElementById('jsx-NAME');               ║
║      if (!el) return;                                            ║
║      var board = JXG.JSXGraph.initBoard('jsx-NAME', {...});      ║
║      board.containerObj.style.background = 'rgba(0,0,0,0.4)';   ║
║      // ... elements ...                                         ║
║      updateReadout();  // ALWAYS CALL AT END                     ║
║    })();                                                         ║
║                                                                  ║
║  QUIZ: 8 questions, 4 options each, data-correct="a|b|c|d"      ║
║  BOSS: 3-4 fill-in, checkFillIn('inputId','answer','fbId')      ║
║                                                                  ║
║  FILES: ch{NN}_{topic}.html  |  data-chapter="NN" on html+body  ║
║  LIBS:  ../libs/katex/  ../libs/jsxgraph/  (NO CDN!)            ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
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
