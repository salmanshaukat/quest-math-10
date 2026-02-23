/* ============================================
   QUEST MATH 10 - Visualization Manager
   JSXGraph lifecycle, error handling, cleanup
   ============================================ */

var VizManager = (function() {
  'use strict';

  // Registry of all active JSXGraph boards keyed by container ID
  var _boards = {};

  /**
   * Create a JSXGraph board with error handling.
   * @param {string} containerId  - DOM element ID for the board container
   * @param {object} opts         - JSXGraph initBoard options
   * @returns {object|null}       - The board instance, or null on failure
   */
  function create(containerId, opts) {
    var el = document.getElementById(containerId);
    if (!el) {
      _warn('Container #' + containerId + ' not found');
      return null;
    }

    // Destroy any existing board in this container first
    destroy(containerId);

    // Merge sensible defaults for our dark theme
    var defaults = {
      boundingbox: [-5, 5, 5, -5],
      axis: true,
      showNavigation: false,
      showCopyright: false,
      keepaspectratio: false,
      pan: { enabled: false },
      zoom: { enabled: false },
      renderer: 'svg'
    };

    var config = _merge(defaults, opts || {});

    try {
      var board = JXG.JSXGraph.initBoard(containerId, config);
      _boards[containerId] = board;
      return board;
    } catch (e) {
      _warn('Failed to create board in #' + containerId + ': ' + e.message);
      _showFallback(el, 'Interactive visualization could not load.');
      return null;
    }
  }

  /**
   * Destroy a specific board and free its resources.
   * @param {string} containerId
   */
  function destroy(containerId) {
    if (_boards[containerId]) {
      try {
        JXG.JSXGraph.freeBoard(_boards[containerId]);
      } catch (e) {
        // Board may already be freed
      }
      delete _boards[containerId];
    }
  }

  /**
   * Destroy ALL registered boards. Called on page unload.
   */
  function destroyAll() {
    var ids = Object.keys(_boards);
    for (var i = 0; i < ids.length; i++) {
      destroy(ids[i]);
    }
  }

  /**
   * Get a registered board by container ID.
   * @param {string} containerId
   * @returns {object|null}
   */
  function get(containerId) {
    return _boards[containerId] || null;
  }

  /**
   * Get count of active boards (useful for debugging).
   * @returns {number}
   */
  function count() {
    return Object.keys(_boards).length;
  }

  // --- Internal helpers ---

  function _merge(target, source) {
    var result = {};
    var key;
    for (key in target) {
      if (target.hasOwnProperty(key)) result[key] = target[key];
    }
    for (key in source) {
      if (source.hasOwnProperty(key)) result[key] = source[key];
    }
    return result;
  }

  function _warn(msg) {
    if (typeof console !== 'undefined' && console.warn) {
      console.warn('[VizManager] ' + msg);
    }
  }

  function _showFallback(el, msg) {
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
    var span = document.createElement('span');
    span.style.color = '#94a3b8';
    span.style.fontSize = '0.9rem';
    span.textContent = msg;
    el.appendChild(span);
  }

  // Cleanup on page unload to prevent memory leaks
  window.addEventListener('beforeunload', destroyAll);

  // Public API
  return {
    create: create,
    destroy: destroy,
    destroyAll: destroyAll,
    get: get,
    count: count
  };
})();
