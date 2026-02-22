/* ============================================
   QUEST MATH 10 - Game Engine
   Quiz, XP, Streaks, Achievements, Progress
   ============================================ */

const QuestMath = {
  // --- State ---
  state: {
    xp: 0,
    level: 1,
    streak: 0,
    bestStreak: 0,
    chaptersCompleted: [],
    achievements: [],
    quizScores: {},
    currentChapter: null
  },

  XP_PER_LEVEL: 500,
  XP_PER_CORRECT: 25,
  XP_STREAK_BONUS: 10,
  XP_BOSS_CLEAR: 100,

  // --- Init ---
  init() {
    this.loadState();
    this.renderTopBar();
    this.initRevealSteps();
    this.initQuizzes();
    this.renderKaTeX();
  },

  // --- Persistence ---
  loadState() {
    const saved = localStorage.getItem('questmath10_state');
    if (saved) {
      try {
        this.state = { ...this.state, ...JSON.parse(saved) };
      } catch (e) { console.warn('Failed to load state'); }
    }
  },

  saveState() {
    localStorage.setItem('questmath10_state', JSON.stringify(this.state));
  },

  // --- XP System ---
  addXP(amount, reason) {
    this.state.xp += amount;
    const newLevel = Math.floor(this.state.xp / this.XP_PER_LEVEL) + 1;
    if (newLevel > this.state.level) {
      this.state.level = newLevel;
      this.showAchievement(`Level ${newLevel}!`, `You've reached Level ${newLevel}. Keep going!`);
    }
    this.saveState();
    this.updateXPDisplay();
    this.showXPPopup(`+${amount} XP`);
  },

  updateXPDisplay() {
    const xpEl = document.getElementById('xp-count');
    const levelEl = document.getElementById('level-count');
    const streakEl = document.getElementById('streak-count');
    const xpBar = document.getElementById('xp-progress');

    if (xpEl) xpEl.textContent = this.state.xp;
    if (levelEl) levelEl.textContent = this.state.level;
    if (streakEl) streakEl.textContent = this.state.streak;
    if (xpBar) {
      const xpInLevel = this.state.xp % this.XP_PER_LEVEL;
      xpBar.style.width = (xpInLevel / this.XP_PER_LEVEL * 100) + '%';
    }
  },

  // --- Streak System ---
  incrementStreak() {
    this.state.streak++;
    if (this.state.streak > this.state.bestStreak) {
      this.state.bestStreak = this.state.streak;
    }
    if (this.state.streak === 5) {
      this.showAchievement('On Fire!', '5 correct in a row!');
      this.launchConfetti();
    }
    if (this.state.streak === 10) {
      this.showAchievement('UNSTOPPABLE!', '10 correct in a row! +50 bonus XP');
      this.addXP(50, 'streak_10');
      this.launchConfetti();
    }
    this.saveState();
    this.updateXPDisplay();
  },

  resetStreak() {
    this.state.streak = 0;
    this.saveState();
    this.updateXPDisplay();
  },

  // --- Top Bar ---
  renderTopBar() {
    const topBar = document.getElementById('top-bar-stats');
    if (!topBar) return;
    this.updateXPDisplay();
  },

  // --- Reveal Steps (Accordion) ---
  initRevealSteps() {
    document.querySelectorAll('.reveal-header').forEach(header => {
      header.addEventListener('click', () => {
        const step = header.parentElement;
        const wasOpen = step.classList.contains('open');

        // Close others in same group
        const group = step.closest('.reveal-group');
        if (group) {
          group.querySelectorAll('.reveal-step.open').forEach(s => s.classList.remove('open'));
        }

        if (!wasOpen) {
          step.classList.add('open');
          // Render KaTeX in newly revealed content
          const content = step.querySelector('.reveal-content');
          if (content) this.renderKaTeXIn(content);
        }
      });
    });
  },

  // --- Quiz System ---
  initQuizzes() {
    document.querySelectorAll('.quiz-question').forEach(q => {
      const options = q.querySelectorAll('.quiz-option');
      const correctAnswer = q.dataset.correct;
      const feedbackCorrect = q.querySelector('.quiz-feedback.correct-fb');
      const feedbackIncorrect = q.querySelector('.quiz-feedback.incorrect-fb');
      const hintEl = q.querySelector('.quiz-hint');
      const hintBtn = q.querySelector('.btn-hint');

      if (hintBtn && hintEl) {
        hintBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          hintEl.classList.toggle('show');
        });
      }

      options.forEach(opt => {
        opt.addEventListener('click', () => {
          if (q.classList.contains('answered')) return;
          q.classList.add('answered');

          const selected = opt.dataset.value;
          const isCorrect = selected === correctAnswer;

          // Disable all options
          options.forEach(o => o.classList.add('disabled'));

          // Mark correct/incorrect
          if (isCorrect) {
            opt.classList.add('correct');
            if (feedbackCorrect) feedbackCorrect.classList.add('show');
            this.addXP(this.XP_PER_CORRECT + (this.state.streak * this.XP_STREAK_BONUS), 'quiz_correct');
            this.incrementStreak();
          } else {
            opt.classList.add('incorrect');
            // Show the correct one
            options.forEach(o => {
              if (o.dataset.value === correctAnswer) o.classList.add('correct');
            });
            if (feedbackIncorrect) feedbackIncorrect.classList.add('show');
            this.resetStreak();
          }

          // Track score
          const chapterId = q.closest('[data-chapter]')?.dataset.chapter;
          if (chapterId) {
            if (!this.state.quizScores[chapterId]) {
              this.state.quizScores[chapterId] = { correct: 0, total: 0 };
            }
            this.state.quizScores[chapterId].total++;
            if (isCorrect) this.state.quizScores[chapterId].correct++;
            this.saveState();
          }

          // Update score display
          this.updateQuizScore(q.closest('.quiz-container'));
        });
      });
    });
  },

  updateQuizScore(container) {
    if (!container) return;
    const answered = container.querySelectorAll('.quiz-question.answered').length;
    const correct = container.querySelectorAll('.quiz-option.correct').length;
    const total = container.querySelectorAll('.quiz-question').length;

    const scoreEl = container.querySelector('.quiz-score');
    if (scoreEl) {
      scoreEl.textContent = `${correct}/${answered} correct`;
    }

    const progressEl = container.querySelector('.quiz-progress-bar');
    if (progressEl) {
      progressEl.style.width = (answered / total * 100) + '%';
    }
  },

  // --- Fill-in-the-blank Quiz ---
  checkFillIn(inputId, correctAnswer, feedbackId) {
    const input = document.getElementById(inputId);
    const feedback = document.getElementById(feedbackId);
    if (!input || !feedback) return;

    const userAnswer = input.value.trim().replace(/\s+/g, '').toLowerCase();
    const correct = correctAnswer.trim().replace(/\s+/g, '').toLowerCase();

    if (userAnswer === correct) {
      input.style.borderColor = 'var(--neon-green)';
      input.style.boxShadow = '0 0 15px rgba(0,255,136,0.3)';
      feedback.innerHTML = '<span style="color: var(--neon-green)">Correct! Well done!</span>';
      this.addXP(this.XP_PER_CORRECT, 'fillin_correct');
      this.incrementStreak();
    } else {
      input.style.borderColor = 'var(--neon-red)';
      input.style.boxShadow = '0 0 15px rgba(255,51,102,0.3)';
      feedback.innerHTML = `<span style="color: var(--neon-red)">Not quite. The answer is: ${correctAnswer}</span>`;
      this.resetStreak();
    }
    feedback.style.display = 'block';
  },

  // --- Visual Effects ---
  showXPPopup(text) {
    const popup = document.createElement('div');
    popup.className = 'xp-popup show';
    popup.textContent = text;
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 1200);
  },

  showAchievement(title, desc) {
    let popup = document.querySelector('.achievement-popup');
    if (!popup) {
      popup = document.createElement('div');
      popup.className = 'achievement-popup';
      document.body.appendChild(popup);
    }
    popup.innerHTML = `
      <div style="font-size: 1.5rem; margin-bottom: 8px;">&#127942;</div>
      <div style="font-weight: 700; color: var(--neon-purple); margin-bottom: 4px;">${title}</div>
      <div style="font-size: 0.85rem; color: var(--text-secondary);">${desc}</div>
    `;
    popup.classList.add('show');
    setTimeout(() => popup.classList.remove('show'), 3000);
  },

  launchConfetti() {
    const colors = ['#00d4ff', '#00ff88', '#a855f7', '#ffd700', '#ff006e', '#ff8c00'];
    for (let i = 0; i < 50; i++) {
      const piece = document.createElement('div');
      piece.className = 'confetti-piece';
      piece.style.left = Math.random() * 100 + 'vw';
      piece.style.top = '-10px';
      piece.style.width = (Math.random() * 8 + 4) + 'px';
      piece.style.height = (Math.random() * 8 + 4) + 'px';
      piece.style.background = colors[Math.floor(Math.random() * colors.length)];
      piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
      piece.style.animationDuration = (Math.random() * 2 + 1) + 's';
      piece.style.animationDelay = (Math.random() * 0.5) + 's';
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 3000);
    }
  },

  // --- KaTeX Rendering ---
  renderKaTeX() {
    if (typeof renderMathInElement !== 'undefined') {
      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    }
  },

  renderKaTeXIn(element) {
    if (typeof renderMathInElement !== 'undefined') {
      renderMathInElement(element, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
    }
  },

  // --- Chapter Completion ---
  completeChapter(chapterId) {
    if (!this.state.chaptersCompleted.includes(chapterId)) {
      this.state.chaptersCompleted.push(chapterId);
      this.addXP(this.XP_BOSS_CLEAR, 'chapter_complete');
      this.showAchievement('Quest Complete!', `Chapter ${chapterId} mastered!`);
      this.launchConfetti();
      this.saveState();
    }
  },

  // --- Dashboard Progress ---
  updateDashboard() {
    document.querySelectorAll('.quest-card').forEach(card => {
      const ch = card.dataset.chapter;
      if (this.state.chaptersCompleted.includes(ch)) {
        card.classList.add('completed');
        const statusEl = card.querySelector('.quest-status-text');
        if (statusEl) statusEl.textContent = 'COMPLETED';
      }
    });

    const totalProgress = document.getElementById('total-progress');
    if (totalProgress) {
      const pct = (this.state.chaptersCompleted.length / 12 * 100);
      totalProgress.style.width = pct + '%';
    }
  },

  // --- Reset (for testing) ---
  resetAll() {
    localStorage.removeItem('questmath10_state');
    this.state = { xp: 0, level: 1, streak: 0, bestStreak: 0, chaptersCompleted: [], achievements: [], quizScores: {}, currentChapter: null };
    location.reload();
  }
};

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', () => QuestMath.init());
