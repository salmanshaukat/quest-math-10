/* ============================================
   QUEST MATH 10 - Safe DOM Utilities
   XSS-free rendering, safe feedback, readouts
   ============================================ */

var SafeDOM = (function() {
  'use strict';

  /**
   * Safely set text content of an element (no HTML parsing = no XSS).
   * @param {string|HTMLElement} elOrId - Element or its ID
   * @param {string} text              - Plain text to set
   */
  function setText(elOrId, text) {
    var el = _resolve(elOrId);
    if (el) el.textContent = text;
  }

  /**
   * Build a styled feedback message safely (correct/incorrect).
   * @param {string|HTMLElement} elOrId
   * @param {boolean} isCorrect
   * @param {string} message - Plain text message
   */
  function feedback(elOrId, isCorrect, message) {
    var el = _resolve(elOrId);
    if (!el) return;

    // Clear previous content
    el.textContent = '';

    var span = document.createElement('span');
    span.style.color = isCorrect ? 'var(--neon-green)' : 'var(--neon-red)';
    span.textContent = message;
    el.appendChild(span);
    el.style.display = 'block';
  }

  /**
   * Build a readout display with labeled values, safely.
   * @param {string|HTMLElement} elOrId
   * @param {Array} items - Array of {label: string, value: string, color?: string}
   */
  function readout(elOrId, items) {
    var el = _resolve(elOrId);
    if (!el) return;

    // Clear previous content
    el.textContent = '';

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (i > 0) {
        el.appendChild(document.createTextNode(' \u2502 ')); // │ separator
      }

      var strong = document.createElement('strong');
      strong.style.color = item.color || 'var(--neon-cyan)';
      strong.textContent = item.label + ': ';
      el.appendChild(strong);

      el.appendChild(document.createTextNode(item.value));
    }
  }

  /**
   * Build a readout as a single HTML string — ONLY for trusted data
   * (computed values, never user input). Use when KaTeX or special
   * formatting is needed inside readouts.
   * @param {string|HTMLElement} elOrId
   * @param {string} trustedHTML - HTML from OUR code, never user input
   */
  function readoutHTML(elOrId, trustedHTML) {
    var el = _resolve(elOrId);
    if (el) el.innerHTML = trustedHTML;
  }

  /**
   * Create a boss-challenge feedback element safely.
   * @param {string|HTMLElement} elOrId
   * @param {boolean} isCorrect
   * @param {string} correctAnswer - The correct answer to show if wrong
   */
  function bossFeedback(elOrId, isCorrect, correctAnswer) {
    var el = _resolve(elOrId);
    if (!el) return;

    el.textContent = '';

    var div = document.createElement('div');
    div.className = isCorrect
      ? 'quiz-feedback correct-fb show'
      : 'quiz-feedback incorrect-fb show';
    div.textContent = isCorrect
      ? 'Correct! Well done!'
      : 'Not quite. The answer is: ' + correctAnswer;
    el.appendChild(div);
  }

  /**
   * Safely create a dataset/mode button group.
   * @param {string|HTMLElement} containerOrId
   * @param {Array} buttons - Array of {label: string, onClick: function, active?: boolean}
   * @param {string} btnClass - CSS class for buttons (default: 'btn btn-ghost')
   */
  function buttonGroup(containerOrId, buttons, btnClass) {
    var container = _resolve(containerOrId);
    if (!container) return;

    container.textContent = '';
    var cls = btnClass || 'btn btn-ghost';

    for (var i = 0; i < buttons.length; i++) {
      (function(btn) {
        var el = document.createElement('button');
        el.className = cls + (btn.active ? ' active' : '');
        el.textContent = btn.label;
        el.addEventListener('click', function() {
          // Deactivate siblings
          var siblings = container.querySelectorAll('button');
          for (var j = 0; j < siblings.length; j++) siblings[j].classList.remove('active');
          el.classList.add('active');
          if (typeof btn.onClick === 'function') btn.onClick();
        });
        container.appendChild(el);
      })(buttons[i]);
    }
  }

  // --- Internal ---

  function _resolve(elOrId) {
    if (typeof elOrId === 'string') return document.getElementById(elOrId);
    return elOrId;
  }

  return {
    setText: setText,
    feedback: feedback,
    readout: readout,
    readoutHTML: readoutHTML,
    bossFeedback: bossFeedback,
    buttonGroup: buttonGroup
  };
})();
