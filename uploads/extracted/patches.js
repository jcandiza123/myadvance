(function () {
  function autoGrow(el) {
    if (!el) return;
    el.style.height = 'auto';
    var max = Math.floor(window.innerHeight * 0.6);
    var h = el.scrollHeight;
    if (h > max) {
      el.style.height = max + 'px';
      el.style.overflowY = 'auto';
    } else {
      el.style.height = h + 'px';
      el.style.overflowY = 'hidden';
    }
  }

  function bindAutoGrow(el) {
    if (!el || el.dataset.autogrowBound === '1') return;
    el.dataset.autogrowBound = '1';
    el.addEventListener('input', function () { autoGrow(el); }, { passive: true });
    el.addEventListener('change', function () { autoGrow(el); }, { passive: true });
    // Initial size
    autoGrow(el);
  }

  function growAllChordInputs() {
    var els = document.querySelectorAll('.chord-input-section');
    for (var i = 0; i < els.length; i++) bindAutoGrow(els[i]);
    // Re-measure after layout settles (modal animations / iOS reflow)
    setTimeout(function () {
      for (var j = 0; j < els.length; j++) autoGrow(els[j]);
    }, 80);
    setTimeout(function () {
      for (var k = 0; k < els.length; k++) autoGrow(els[k]);
    }, 250);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', growAllChordInputs);
  } else {
    growAllChordInputs();
  }

  // Wrap modal openers so the textarea height is computed AFTER the modal becomes visible.
  if (typeof window.editCurrentSong === 'function' && !window.editCurrentSong.__autogrowWrapped) {
    var _origEdit = window.editCurrentSong;
    var wrappedEdit = function () {
      var r = _origEdit.apply(this, arguments);
      growAllChordInputs();
      return r;
    };
    wrappedEdit.__autogrowWrapped = true;
    window.editCurrentSong = wrappedEdit;
  }

  if (typeof window.openAddModal === 'function' && !window.openAddModal.__autogrowWrapped) {
    var _origOpenAdd = window.openAddModal;
    var wrappedOpenAdd = function () {
      var r2 = _origOpenAdd.apply(this, arguments);
      growAllChordInputs();
      return r2;
    };
    wrappedOpenAdd.__autogrowWrapped = true;
    window.openAddModal = wrappedOpenAdd;
  }


  if (typeof window.addSection === 'function' && !window.addSection.__autogrowWrapped) {
    var _origAddSection = window.addSection;
    var wrappedAddSection = function () {
      var r3 = _origAddSection.apply(this, arguments);
      // New textareas are inserted dynamically; bind + size them after insertion.
      growAllChordInputs();
      return r3;
    };
    wrappedAddSection.__autogrowWrapped = true;
    window.addSection = wrappedAddSection;
  }
  // Disable closing modals by clicking outside the modal-content.
  // Keep Cancel/Close buttons as the only way to close.
  window.onclick = function () { /* intentionally disabled */ };
})();

(function () {
  var ua = navigator.userAgent || "";
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (!isIOS) return;

  function getOpenModal() {
    var modals = document.querySelectorAll(".modal");
    for (var i = 0; i < modals.length; i++) {
      var m = modals[i];
      var cs = window.getComputedStyle(m);
      if (cs && cs.display !== "none" && cs.visibility !== "hidden" && cs.opacity !== "0") return m;
    }
    return null;
  }

  function bindModalContent(el) {
    if (!el || el.__iosScrollBound) return;
    el.__iosScrollBound = true;

    // Nudge scrollTop away from edges so momentum scrolling doesn't "lock"
    el.addEventListener("touchstart", function () {
      var top = el.scrollTop;
      var max = el.scrollHeight - el.offsetHeight;

      if (max <= 0) return; // nothing to scroll

      if (top <= 0) {
        el.scrollTop = 1;
      } else if (top >= max) {
        el.scrollTop = max - 1;
      }
    }, { passive: true });

    // Prevent scroll events from bubbling to the page
    el.addEventListener("touchmove", function (e) {
      e.stopPropagation();
    }, { passive: true });
  }

  function bindAll() {
    var contents = document.querySelectorAll(".modal-content");
    for (var i = 0; i < contents.length; i++) bindModalContent(contents[i]);
  }

  // Bind existing modal contents
  bindAll();

  // Bind any modal contents added later
  if (window.MutationObserver) {
    var mo = new MutationObserver(function () { bindAll(); });
    mo.observe(document.body, { childList: true, subtree: true });
  }

  // Block background page scroll while a modal is open (tap/drag outside content)
  document.addEventListener("touchmove", function (e) {
    var open = getOpenModal();
    if (!open) return;

    // Allow scrolling inside modal-content only
    if (!e.target.closest || !e.target.closest(".modal-content")) {
      e.preventDefault();
    }
  }, { passive: false });
})();

  // iOS Safari sometimes requires one tap to blur a focused textarea, and a second tap to click the button.
  // This patch ensures "Update Song" runs on the first tap by:
  // 1) Delegating a touchend handler to the Update Song button while in edit mode.
  // 2) Wrapping updateSong to blur active inputs in the add modal before running.
  var isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

  // Wrap updateSong safely (non-destructive).
  if (typeof window.updateSong === 'function' && !window.updateSong.__patched_singleTap) {
    var _updateSong = window.updateSong;
    var wrapped = function () {
      try {
        var active = document.activeElement;
        if (isiOS && active && active.closest && active.closest('#addModal') &&
            (active.tagName === 'TEXTAREA' || active.tagName === 'INPUT')) {
          active.blur();
          // Defer to let iOS commit the latest value after blur.
          setTimeout(function () { _updateSong.apply(window, arguments); }.bind(null, ...arguments), 0);
          return;
        }
      } catch (e) { /* fall through */ }
      return _updateSong.apply(window, arguments);
    };
    wrapped.__patched_singleTap = true;
    window.updateSong = wrapped;
  }

  // Touchend handler: force update on first tap in edit mode.
  document.addEventListener('touchend', function (e) {
    if (!isiOS) return;

    var btn = e.target && e.target.closest ? e.target.closest('#addModal .btn-modal.btn-primary') : null;
    if (!btn) return;

    // Only intercept when the modal is in "edit/update" state.
    var isEditing = (typeof window.editingSongIndex !== 'undefined' && window.editingSongIndex !== null);
    var isUpdateLabel = (btn.textContent || '').trim().toLowerCase() === 'update song';
    if (!isEditing || !isUpdateLabel) return;

    e.preventDefault(); // prevent the "first tap just blurs" behavior from requiring a second tap
    if (typeof window.updateSong === 'function') {
      window.updateSong();
    }
  }, { passive: false });
})();
