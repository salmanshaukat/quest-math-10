/* ============================================
   QUEST MATH 10 - Game Engine
   Quiz, XP, Streaks, Achievements, Progress
   ============================================ */

var QuestMath = {
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

  _storageAvailable: null,

  // --- Init ---
  init: function() {
    this._checkStorage();
    this.loadState();
    this.renderTopBar();
    this.initRevealSteps();
    this.initQuizzes();
    this.renderKaTeX();
  },

  // --- Storage availability check ---
  _checkStorage: function() {
    if (this._storageAvailable !== null) return this._storageAvailable;
    try {
      var test = '__qm_test__';
      localStorage.setItem(test, '1');
      localStorage.removeItem(test);
      this._storageAvailable = true;
    } catch (e) {
      this._storageAvailable = false;
      console.warn('[QuestMath] localStorage not available — progress will not be saved.');
    }
    return this._storageAvailable;
  },

  // --- Persistence ---
  loadState: function() {
    if (!this._storageAvailable) return;
    var saved = localStorage.getItem('questmath10_state');
    if (saved) {
      try {
        var parsed = JSON.parse(saved);
        // Only merge known keys to prevent injection of unknown properties
        var keys = ['xp', 'level', 'streak', 'bestStreak', 'chaptersCompleted', 'achievements', 'quizScores', 'currentChapter'];
        for (var i = 0; i < keys.length; i++) {
          if (parsed.hasOwnProperty(keys[i])) {
            this.state[keys[i]] = parsed[keys[i]];
          }
        }
      } catch (e) {
        console.warn('[QuestMath] Corrupt save data — starting fresh.');
      }
    }
  },

  saveState: function() {
    if (!this._storageAvailable) return;
    try {
      localStorage.setItem('questmath10_state', JSON.stringify(this.state));
    } catch (e) {
      // Storage full — silently fail rather than crash
      console.warn('[QuestMath] Could not save progress (storage full?).');
    }
  },

  // --- XP System ---
  addXP: function(amount, reason) {
    this.state.xp += amount;
    var newLevel = Math.floor(this.state.xp / this.XP_PER_LEVEL) + 1;
    if (newLevel > this.state.level) {
      this.state.level = newLevel;
      this.showAchievement('Level ' + newLevel + '!', "You've reached Level " + newLevel + '. Keep going!');
    }
    this.saveState();
    this.updateXPDisplay();
    this.showXPPopup('+' + amount + ' XP');
  },

  updateXPDisplay: function() {
    var xpEl = document.getElementById('xp-count');
    var levelEl = document.getElementById('level-count');
    var streakEl = document.getElementById('streak-count');
    var xpBar = document.getElementById('xp-progress');

    if (xpEl) xpEl.textContent = this.state.xp;
    if (levelEl) levelEl.textContent = this.state.level;
    if (streakEl) streakEl.textContent = this.state.streak;
    if (xpBar) {
      var xpInLevel = this.state.xp % this.XP_PER_LEVEL;
      xpBar.style.width = (xpInLevel / this.XP_PER_LEVEL * 100) + '%';
    }
  },

  // --- Streak System ---
  incrementStreak: function() {
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

  resetStreak: function() {
    this.state.streak = 0;
    this.saveState();
    this.updateXPDisplay();
  },

  // --- Top Bar ---
  renderTopBar: function() {
    var topBar = document.getElementById('top-bar-stats');
    if (!topBar) return;
    this.updateXPDisplay();
  },

  // --- Reveal Steps (Accordion) ---
  initRevealSteps: function() {
    var self = this;
    document.querySelectorAll('.reveal-header').forEach(function(header) {
      if (header._revealBound) return;
      header._revealBound = true;

      header.setAttribute('role', 'button');
      header.setAttribute('tabindex', '0');
      header.setAttribute('aria-expanded', 'false');

      var toggle = function() {
        var step = header.parentElement;
        var wasOpen = step.classList.contains('open');

        var group = step.closest('.reveal-group');
        if (group) {
          group.querySelectorAll('.reveal-step.open').forEach(function(s) {
            s.classList.remove('open');
            var h = s.querySelector('.reveal-header');
            if (h) h.setAttribute('aria-expanded', 'false');
          });
        }

        if (!wasOpen) {
          step.classList.add('open');
          header.setAttribute('aria-expanded', 'true');
          var content = step.querySelector('.reveal-content');
          if (content) self.renderKaTeXIn(content);
          setTimeout(function() { window.dispatchEvent(new Event('resize')); }, 150);
        }
      };

      header.addEventListener('click', toggle);
      header.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          toggle();
        }
      });
    });
  },

  // --- Quiz System ---
  initQuizzes: function() {
    var self = this;
    document.querySelectorAll('.quiz-question').forEach(function(q) {
      if (q._quizBound) return;
      q._quizBound = true;

      var options = q.querySelectorAll('.quiz-option');
      var correctAnswer = q.dataset.correct;
      var feedbackCorrect = q.querySelector('.quiz-feedback.correct-fb');
      var feedbackIncorrect = q.querySelector('.quiz-feedback.incorrect-fb');
      var hintEl = q.querySelector('.quiz-hint');
      var hintBtn = q.querySelector('.btn-hint');

      if (hintBtn && hintEl) {
        hintBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          hintEl.classList.toggle('show');
        });
      }

      options.forEach(function(opt) {
        opt.setAttribute('role', 'button');
        opt.setAttribute('tabindex', '0');

        var handleSelect = function() {
          if (q.classList.contains('answered')) return;
          q.classList.add('answered');

          var selected = opt.dataset.value;
          var isCorrect = selected === correctAnswer;

          options.forEach(function(o) { o.classList.add('disabled'); });

          if (isCorrect) {
            opt.classList.add('correct');
            if (feedbackCorrect) feedbackCorrect.classList.add('show');
            self.addXP(self.XP_PER_CORRECT + (self.state.streak * self.XP_STREAK_BONUS), 'quiz_correct');
            self.incrementStreak();
          } else {
            opt.classList.add('incorrect');
            options.forEach(function(o) {
              if (o.dataset.value === correctAnswer) o.classList.add('correct');
            });
            if (feedbackIncorrect) feedbackIncorrect.classList.add('show');
            self.resetStreak();
          }

          var chapterEl = q.closest('[data-chapter]');
          var chapterId = chapterEl ? chapterEl.dataset.chapter : null;
          if (chapterId) {
            if (!self.state.quizScores[chapterId]) {
              self.state.quizScores[chapterId] = { correct: 0, total: 0 };
            }
            self.state.quizScores[chapterId].total++;
            if (isCorrect) self.state.quizScores[chapterId].correct++;
            self.saveState();
          }

          self.updateQuizScore(q.closest('.quiz-container'));
        };

        opt.addEventListener('click', handleSelect);
        opt.addEventListener('keydown', function(e) {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleSelect();
          }
        });
      });
    });
  },

  updateQuizScore: function(container) {
    if (!container) return;
    var answered = container.querySelectorAll('.quiz-question.answered').length;
    var correct = container.querySelectorAll('.quiz-option.correct').length;
    var total = container.querySelectorAll('.quiz-question').length;

    var scoreEl = container.querySelector('.quiz-score');
    if (scoreEl) {
      scoreEl.textContent = correct + '/' + answered + ' correct';
    }

    var progressEl = container.querySelector('.quiz-progress-bar');
    if (progressEl) {
      progressEl.style.width = (answered / total * 100) + '%';
    }
  },

  // --- Fill-in-the-blank Quiz (uses SafeDOM if available) ---
  checkFillIn: function(inputId, correctAnswer, feedbackId) {
    var input = document.getElementById(inputId);
    var fb = document.getElementById(feedbackId);
    if (!input || !fb) return;

    var userAnswer = input.value.trim().replace(/\s+/g, '').toLowerCase();
    var correct = correctAnswer.trim().replace(/\s+/g, '').toLowerCase();
    var isCorrect = userAnswer === correct;

    input.style.borderColor = isCorrect ? 'var(--neon-green)' : 'var(--neon-red)';
    input.style.boxShadow = isCorrect
      ? '0 0 15px rgba(0,255,136,0.3)'
      : '0 0 15px rgba(255,51,102,0.3)';

    if (typeof SafeDOM !== 'undefined') {
      SafeDOM.feedback(fb, isCorrect,
        isCorrect ? 'Correct! Well done!' : 'Not quite. The answer is: ' + correctAnswer
      );
    } else {
      fb.textContent = isCorrect ? 'Correct! Well done!' : 'Not quite. The answer is: ' + correctAnswer;
      fb.style.color = isCorrect ? 'var(--neon-green)' : 'var(--neon-red)';
      fb.style.display = 'block';
    }

    if (isCorrect) {
      this.addXP(this.XP_PER_CORRECT, 'fillin_correct');
      this.incrementStreak();
    } else {
      this.resetStreak();
    }
  },

  // --- Visual Effects ---
  showXPPopup: function(text) {
    var popup = document.createElement('div');
    popup.className = 'xp-popup show';
    popup.textContent = text;
    document.body.appendChild(popup);
    setTimeout(function() { popup.remove(); }, 1200);
  },

  showAchievement: function(title, desc) {
    var popup = document.querySelector('.achievement-popup');
    if (!popup) {
      popup = document.createElement('div');
      popup.className = 'achievement-popup';
      document.body.appendChild(popup);
    }
    // Build safely with DOM methods instead of innerHTML
    popup.textContent = '';

    var iconDiv = document.createElement('div');
    iconDiv.style.fontSize = '1.5rem';
    iconDiv.style.marginBottom = '8px';
    iconDiv.textContent = '\uD83C\uDFC6'; // trophy emoji
    popup.appendChild(iconDiv);

    var titleDiv = document.createElement('div');
    titleDiv.style.fontWeight = '700';
    titleDiv.style.color = 'var(--neon-purple)';
    titleDiv.style.marginBottom = '4px';
    titleDiv.textContent = title;
    popup.appendChild(titleDiv);

    var descDiv = document.createElement('div');
    descDiv.style.fontSize = '0.85rem';
    descDiv.style.color = 'var(--text-secondary)';
    descDiv.textContent = desc;
    popup.appendChild(descDiv);

    popup.classList.add('show');
    setTimeout(function() { popup.classList.remove('show'); }, 3000);
  },

  launchConfetti: function() {
    var colors = ['#00d4ff', '#00ff88', '#a855f7', '#ffd700', '#ff006e', '#ff8c00'];
    for (var i = 0; i < 50; i++) {
      var piece = document.createElement('div');
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
      (function(p) { setTimeout(function() { p.remove(); }, 3000); })(piece);
    }
  },

  // --- KaTeX Rendering ---
  renderKaTeX: function() {
    try {
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
    } catch (e) {
      console.warn('[QuestMath] KaTeX render failed:', e.message);
    }
  },

  renderKaTeXIn: function(element) {
    try {
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
    } catch (e) {
      console.warn('[QuestMath] KaTeX render failed in element:', e.message);
    }
  },

  // --- Chapter Completion ---
  completeChapter: function(chapterId) {
    if (this.state.chaptersCompleted.indexOf(chapterId) === -1) {
      this.state.chaptersCompleted.push(chapterId);
      this.addXP(this.XP_BOSS_CLEAR, 'chapter_complete');
      this.showAchievement('Quest Complete!', 'Chapter ' + chapterId + ' mastered!');
      this.launchConfetti();
      this.saveState();
    }
  },

  // --- Dashboard Progress ---
  updateDashboard: function() {
    var self = this;
    document.querySelectorAll('.quest-card').forEach(function(card) {
      var ch = card.dataset.chapter;
      if (self.state.chaptersCompleted.indexOf(ch) !== -1) {
        card.classList.add('completed');
        var statusEl = card.querySelector('.quest-status-text');
        if (statusEl) statusEl.textContent = 'COMPLETED';
      }
    });

    var totalProgress = document.getElementById('total-progress');
    if (totalProgress) {
      var pct = (this.state.chaptersCompleted.length / 12 * 100);
      totalProgress.style.width = pct + '%';
    }
  },

  // --- Reset (for testing) ---
  resetAll: function() {
    if (this._storageAvailable) {
      localStorage.removeItem('questmath10_state');
    }
    this.state = { xp: 0, level: 1, streak: 0, bestStreak: 0, chaptersCompleted: [], achievements: [], quizScores: {}, currentChapter: null };
    location.reload();
  }
};

// Auto-init on DOM ready
document.addEventListener('DOMContentLoaded', function() { QuestMath.init(); });
