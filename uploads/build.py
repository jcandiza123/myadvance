#!/usr/bin/env python3
"""
Build script: takes extracted index.html sections, applies all 9 fixes,
and writes the final files to /app/frontend/public/.

Fixes applied:
 1. Mobile/tablet only (max ~1440px supporting Lenovo Xiaoxin Pad Pro)
 2. Full responsive portrait + landscape
 3. Alphabetical song-item list (A-Z)
 4. Reduced aggressive scroll-locking (fix scroll/click hangs)
 5. Search-bar dynamic-filter dropdown, scrollable, responsive
 6. Lineup auto-syncs with song edits; matches song-view design; section colors
 7. Add "Interlude" section + fix iOS sectionSelect double-tap issue
 8. Split into separate files (this script does it)
 9. General bug fixes & code cleanup
"""
import re
import textwrap
from pathlib import Path

EXTRACTED = Path('/app/uploads/extracted')
OUT = Path('/app/frontend/public')
OUT.mkdir(parents=True, exist_ok=True)


def dedent(s: str) -> str:
    """Remove the common leading 8-space indentation from the extracted blocks
    and strip trailing whitespace from blank lines so search-replace can match."""
    out = textwrap.dedent(s)
    # Strip trailing whitespace on each line so blank-line replacements work.
    return '\n'.join(line.rstrip() if not line.strip() else line for line in out.split('\n'))


def norm(s: str) -> str:
    """Normalise a search-pattern by stripping trailing whitespace from blank lines."""
    return '\n'.join(line.rstrip() if not line.strip() else line for line in s.split('\n'))


def rep(haystack: str, needle: str, replacement: str) -> str:
    """Search-replace that auto-normalises whitespace and warns when miss."""
    n = norm(needle)
    r = norm(replacement)
    if n not in haystack:
        # Try the raw needle as fallback
        if needle in haystack:
            return haystack.replace(needle, replacement, 1)
        print(f"  [WARN] needle not found: {needle[:80].strip()!r}...")
        return haystack
    return haystack.replace(n, r, 1)


# ---------------------------------------------------------------------------
# 1. CSS
# ---------------------------------------------------------------------------
css = (EXTRACTED / 'styles.css').read_text(encoding='utf-8')
css = dedent(css)

# Fix 1 + 2: Update desktop notice breakpoints to allow tablets up to ~1440px
# and remove rigid 100vw/100vh body sizing that creates double-scrollbars.
css = rep(css,
    """@media (min-width: 1440px) {
    .desktop-notice {
        display: none !important;
    }
    #mainApp {
        display: flex !important;
    }
}

@media (max-width: 1439px) and (min-height: 1200px) {
    .desktop-notice {
        display: none !important;
    }
    #mainApp {
        display: flex !important;
    }
}""",
    """/* Tablets up to Lenovo Xiaoxin Pad Pro size are supported.
   Show the "desktop-only" notice ONLY on real desktops (>1440px wide AND
   not a coarse-pointer/touch device). */
@media (min-width: 1441px) and (hover: hover) and (pointer: fine) {
    .desktop-notice { display: flex !important; }
    #mainApp { display: none !important; }
}
/* Default: hide the desktop notice everywhere else (mobile + tablet) */
@media (max-width: 1440px), (hover: none), (pointer: coarse) {
    .desktop-notice { display: none !important; }
    #mainApp { display: flex !important; }
}"""
)

# Body: remove fixed 100vh/100vw that breaks mobile scrolling.
css = rep(css,
    """body {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d1b69 50%, #4c1d95 100%) !important;
    background-attachment: fixed !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    min-height: 100vh !important;
    height: 100vh !important;
    width: 100vw !important;
    color: #f5f5f7;
    line-height: 1.47059;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    overflow: auto;
    overscroll-behavior: none;
    -webkit-overflow-scrolling: touch;
    /* Disable right-click */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}""",
    """body {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    background: linear-gradient(135deg, #1a1a1a 0%, #2d1b69 50%, #4c1d95 100%) !important;
    background-attachment: fixed !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;
    min-height: 100vh;
    width: 100%;
    color: #f5f5f7;
    line-height: 1.47059;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-y: contain;
    /* Disable right-click selections */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}"""
)

# Container: don't force 100vh - let it grow naturally so all sections stay accessible
css = re.sub(
    r"\.container\s*\{\s*max-width:\s*980px;\s*margin:\s*0 auto;\s*padding:\s*40px 20px 60px;\s*height:\s*100vh;\s*display:\s*flex;\s*flex-direction:\s*column;\s*overflow-y:\s*auto;\s*overflow-x:\s*hidden;\s*overscroll-behavior:\s*contain;\s*-webkit-overflow-scrolling:\s*touch;\s*\}",
    """.container {
    max-width: 980px;
    width: 100%;
    margin: 0 auto;
    padding: 24px 20px 48px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
}""",
    css,
    count=1,
)

# Update the desktop-notice info text bullets to reflect new supported sizes
css = rep(css,
    "📱 iPad (up to 1024px portrait / 1366px landscape)",
    "📱 Tablets up to 1440px wide (Lenovo Xiaoxin Pad Pro and similar)",
)

# Fix 5: search-bar dropdown styles (added below the search-bar rules).
search_styles = """
/* === SEARCH RESULTS DROPDOWN (Fix #5) === */
.search-section {
    position: relative;
}
.search-results {
    position: absolute;
    top: calc(100% + 6px);
    left: 0;
    right: 0;
    z-index: 50;
    max-height: min(60vh, 360px);
    overflow-y: auto;
    overflow-x: hidden;
    background: rgba(28, 25, 50, 0.96);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 18px;
    box-shadow: 0 16px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08);
    padding: 6px;
    display: none;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
}
.search-results.show { display: block; }
.search-result-item {
    padding: 12px 16px;
    border-radius: 12px;
    cursor: pointer;
    transition: background 0.2s ease;
    display: flex;
    flex-direction: column;
    gap: 2px;
}
.search-result-item:hover,
.search-result-item:active,
.search-result-item.highlighted {
    background: rgba(139, 92, 246, 0.22);
}
.search-result-title {
    font-size: 1rem;
    font-weight: 500;
    color: #f5f5f7;
    letter-spacing: -0.01em;
}
.search-result-description {
    font-size: 0.85rem;
    color: rgba(245, 245, 247, 0.65);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.search-result-empty {
    padding: 18px;
    text-align: center;
    color: rgba(245, 245, 247, 0.6);
    font-size: 0.95rem;
}
"""
css = rep(css,
    "/* Control Panel */",
    search_styles + "\n/* Control Panel */",
)

# Fix 6: Use the same section colors in the lineup body view (display-section-lineup).
# Add a left border colored by section type so the lineup matches the song view.
lineup_color_styles = """
/* === Lineup display section: color stripe (Fix #6) === */
.display-section-lineup {
    border-left: 4px solid var(--section-color, #a1a1aa) !important;
}
.display-section-lineup .display-section-title {
    color: var(--section-color, #f5f5f7);
}
.display-section {
    border-left: 4px solid var(--section-color, transparent);
}
"""
css += "\n" + lineup_color_styles

# Tablet landscape support extension - ensure all key sections fit within a 1366x900 viewport
extra_responsive = """
/* === Extra responsive rules to keep all sections visible (Fix #1, #2) === */
@media (max-width: 1440px) {
    html, body {
        height: auto;
        min-height: 100vh;
    }
    .container {
        height: auto;
        min-height: 100vh;
        overflow: visible;
    }
}

/* Landscape on phones / small tablets: tighten vertical spacing so everything fits */
@media (max-height: 600px) and (orientation: landscape) {
    .container {
        padding: 10px 14px 24px;
    }
    .header { margin-bottom: 12px; }
    .logo { width: 56px; height: 56px; margin: 0 auto 6px; }
    .app-subtitle { font-size: 0.85rem; margin: 2px 0 0; }
    .search-section { margin-bottom: 10px; }
    .search-bar { padding: 10px 16px; font-size: 0.95rem; }
    .control-panel { flex-direction: row !important; gap: 8px; margin-bottom: 10px; }
    .btn { min-height: 38px; padding: 8px 12px; font-size: 0.85rem; min-width: 0; flex: 1; }
    .import-export { gap: 8px; margin-bottom: 10px; }
    .btn-small { padding: 6px 12px; font-size: 0.78rem; }
    .song-list-title { font-size: 1rem; }
    .song-item { padding: 14px 18px; }
    .song-title { font-size: 1rem; }
    .song-description { font-size: 0.85rem; margin-bottom: 6px; }
    .modal-content { max-height: 92vh !important; }
}

/* Mid-size tablets (e.g., Lenovo Xiaoxin Pad Pro in landscape ~1200-1440px) */
@media (min-width: 1025px) and (max-width: 1440px) {
    .container {
        max-width: 1100px;
        padding: 28px 28px 48px;
    }
    .modal-content {
        max-width: 880px !important;
    }
    .modal-content.lineup-modal {
        max-width: 980px !important;
        width: 90% !important;
    }
}

/* Section dropdown reliability on iOS - prevent dropdown from sticking on Verse repeat */
.dropdown-select {
    -webkit-appearance: none;
    appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, rgba(245,245,247,0.6) 50%),
                      linear-gradient(135deg, rgba(245,245,247,0.6) 50%, transparent 50%);
    background-position: calc(100% - 20px) 50%, calc(100% - 14px) 50%;
    background-size: 6px 6px;
    background-repeat: no-repeat;
}
"""
css += "\n" + extra_responsive

(OUT / 'styles.css').write_text(css, encoding='utf-8')
print(f"styles.css: {len(css):,} bytes")


# ---------------------------------------------------------------------------
# 2. token-verify.js  (UNCHANGED per user request)
# ---------------------------------------------------------------------------
token_js = (EXTRACTED / 'token-verify.js').read_text(encoding='utf-8')
token_js = dedent(token_js)
(OUT / 'token-verify.js').write_text(token_js, encoding='utf-8')
print(f"token-verify.js: {len(token_js):,} bytes")


# ---------------------------------------------------------------------------
# 3. app.js  - apply all behavioural fixes
# ---------------------------------------------------------------------------
js = (EXTRACTED / 'app.js').read_text(encoding='utf-8')
js = dedent(js)

# ---- Fix 7: Add "Interlude" to chord-suggestion section types via the SELECT in HTML
# (handled in the index.html template). The JS already handles any string.

# ---- Fix 7 (continued): give "Interlude" its own color in getSectionColor.
js = rep(js,
    "if (type.includes('solo') || type.includes('instrumental')) return '#f97316';",
    "if (type.includes('solo') || type.includes('instrumental')) return '#f97316';\n    if (type.includes('interlude')) return '#06b6d4';",
)

# ---- Fix 3: sort songs A-Z by title in renderSongList
js = rep(js,
    """// Render song list
function renderSongList() {
    const container = document.getElementById('songListContainer');
    
    if (songs.length === 0) {""",
    """// Render song list (sorted alphabetically A-Z by title — Fix #3)
function renderSongList() {
    const container = document.getElementById('songListContainer');

    // Build a sorted view that maps back to the real songs[] indices
    const sortedView = songs
        .map((song, realIndex) => ({ song, realIndex }))
        .sort((a, b) => a.song.title.localeCompare(b.song.title, undefined, { sensitivity: 'base' }));

    if (songs.length === 0) {""",
)

# Replace the rendering map() block: it uses `song, index` and openSong(index), deleteSong(index, event), etc.
# We need to render using sortedView and pass the REAL index to handlers.
js = rep(js,
    """container.innerHTML = songs.map((song, index) => `
        <div class="song-item ${removeMode ? 'remove-mode' : ''}" onclick="${removeMode ? '' : 'openSong(' + index + ')'}" data-index="${index}">
            ${removeMode ? '<div class="delete-indicator" onclick="deleteSong(' + index + ', event)">🗑️</div>' : 
            `<div class="action-menu-trigger" onclick="toggleActionMenu(${index}, event)">
                ⋮
                <div class="action-menu" id="actionMenu${index}">
                    <button class="action-menu-item" onclick="exportThisSong(${index}, event)">""",
    """container.innerHTML = sortedView.map(({ song, realIndex }) => {
        const index = realIndex; // keep variable name compatible with template literals below
        return `
        <div class="song-item ${removeMode ? 'remove-mode' : ''}" onclick="${removeMode ? '' : 'openSong(' + index + ')'}" data-index="${index}">
            ${removeMode ? '<div class="delete-indicator" onclick="deleteSong(' + index + ', event)">🗑️</div>' : 
            `<div class="action-menu-trigger" onclick="toggleActionMenu(${index}, event)">
                ⋮
                <div class="action-menu" id="actionMenu${index}">
                    <button class="action-menu-item" onclick="exportThisSong(${index}, event)">""",
)
# Close the new function body: change `).join('');` after the song-item template
js = rep(js,
    """            <div class="song-sections-preview">
                ${generateSectionIndicators(song.sections)}
            </div>
        </div>
    `).join('');
}""",
    """            <div class="song-sections-preview">
                ${generateSectionIndicators(song.sections)}
            </div>
        </div>
    `;
    }).join('');
}""",
)

# ---- Fix 5: Replace the simple search bar input handler with a dropdown filter
js = rep(js,
    """// Search functionality
document.getElementById('searchBar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const songItems = document.querySelectorAll('.song-item');
    
    songItems.forEach(item => {
        const title = item.querySelector('.song-title').textContent.toLowerCase();
        const description = item.querySelector('.song-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});""",
    """// === SEARCH BAR — Dynamic dropdown with live filtering (Fix #5) ===
(function setupSearch() {
    const input = document.getElementById('searchBar');
    if (!input) return;

    // Build (or reuse) the dropdown container right after the search bar
    let dropdown = document.getElementById('searchResults');
    if (!dropdown) {
        dropdown = document.createElement('div');
        dropdown.id = 'searchResults';
        dropdown.className = 'search-results';
        dropdown.setAttribute('role', 'listbox');
        input.parentElement.appendChild(dropdown);
    }

    function hide() { dropdown.classList.remove('show'); dropdown.innerHTML = ''; }
    function show() { dropdown.classList.add('show'); }

    function buildResults(term) {
        const t = term.trim().toLowerCase();
        if (!t) { hide(); return; }

        const exact = songs.findIndex(s => s.title.toLowerCase() === t);
        let matches;
        if (exact !== -1) {
            // Exact title match: show only that one
            matches = [{ song: songs[exact], realIndex: exact }];
        } else {
            // A song matches when the FULL title OR any WORD in the title starts with `t`.
            // This way, typing "h" lists "Holy Holy Holy" / "Hosanna" / "How Great…", but
            // NOT "Be THOu My Vision" (since no word in it starts with "h").
            const titleStartsWith = [];
            const wordStartsWith  = [];
            const descMatches     = [];
            songs.forEach((song, realIndex) => {
                const title = song.title.toLowerCase();
                const desc  = (song.description || '').toLowerCase();

                if (title.startsWith(t)) {
                    titleStartsWith.push({ song, realIndex });
                    return;
                }
                // Check if any word in the title starts with the term
                const titleWords = title.split(/\s+/).filter(Boolean);
                if (titleWords.some(w => w.startsWith(t))) {
                    wordStartsWith.push({ song, realIndex });
                    return;
                }
                // Description fallback: word in description starts with the term
                const descWords = desc.split(/\s+/).filter(Boolean);
                if (descWords.some(w => w.startsWith(t))) {
                    descMatches.push({ song, realIndex });
                }
            });
            const byTitle = (a, b) => a.song.title.localeCompare(
                b.song.title, undefined, { sensitivity: 'base' }
            );
            titleStartsWith.sort(byTitle);
            wordStartsWith.sort(byTitle);
            descMatches.sort(byTitle);

            matches = titleStartsWith.concat(wordStartsWith);
            // Description matches are a fallback when no title matches at all.
            if (matches.length === 0) matches = descMatches;
        }

        if (matches.length === 0) {
            dropdown.innerHTML = '<div class="search-result-empty">No songs found</div>';
            show();
            return;
        }

        dropdown.innerHTML = matches.map(({ song, realIndex }) => `
            <div class="search-result-item" data-index="${realIndex}" role="option">
                <span class="search-result-title">${escapeHtml(song.title)}</span>
                ${song.description ? `<span class="search-result-description">${escapeHtml(song.description)}</span>` : ''}
            </div>
        `).join('');
        show();
    }

    function escapeHtml(str) {
        return String(str).replace(/[&<>"']/g, c => ({
            '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'
        }[c]));
    }

    input.addEventListener('input', function () { buildResults(this.value); });
    input.addEventListener('focus', function () { if (this.value.trim()) buildResults(this.value); });

    // Tap / click on a result -> open that song
    dropdown.addEventListener('click', function (e) {
        const item = e.target.closest('.search-result-item');
        if (!item) return;
        const idx = parseInt(item.getAttribute('data-index'), 10);
        if (!Number.isNaN(idx)) {
            hide();
            input.value = '';
            openSong(idx);
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.search-section')) hide();
    });
    document.addEventListener('touchstart', function (e) {
        if (!e.target.closest('.search-section')) hide();
    }, { passive: true });

    // Hide on escape
    input.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') { hide(); this.blur(); }
    });
})();""",
)

# ---- Fix 6: When updating a song, also update any copy in the lineup.
# Hook into updateSong (the existing fn) — add lineup sync right after `autoSave();` in updateSong.
js = rep(js,
    """    // Update the existing song
    songs[window.editingSongIndex] = {
        ...songs[window.editingSongIndex],
        title,
        description,
        sections
    };

    // Update currentSong with the new data
    currentSong = songs[window.editingSongIndex];
    currentSemitones = 0; // Reset transpose

    autoSave(); // Auto-save""",
    """    // Update the existing song
    songs[window.editingSongIndex] = {
        ...songs[window.editingSongIndex],
        title,
        description,
        sections
    };

    // Update currentSong with the new data
    currentSong = songs[window.editingSongIndex];
    currentSemitones = 0; // Reset transpose

    // Fix #6: keep the lineup dynamic — propagate the edit to any matching lineup entry
    if (Array.isArray(lineup)) {
        const songId = songs[window.editingSongIndex].id;
        for (let i = 0; i < lineup.length; i++) {
            if (lineup[i] && lineup[i].id === songId) {
                lineup[i] = {
                    id: songs[window.editingSongIndex].id,
                    title,
                    description,
                    sections
                };
            }
        }
    }

    autoSave(); // Auto-save""",
)

# ---- Fix 6: in displayLineupSong, attach the section color CSS variable so the
# lineup display gets the same colored stripe / heading as a normal song.
# We need to update both displaySong() and displayLineupSong() to set --section-color.
js = rep(js,
    """    const sectionsHtml = currentSong.sections.map((section, index) => `
        <div class="display-section" draggable="true" data-section-index="${index}" data-section-type="${section.title}">
            <div class="drag-handle">⋮⋮</div>
            <div class="display-section-title">${section.title}</div>
            <div class="display-chords" data-original-chords="${section.chords}">${section.chords}</div>
        </div>
    `).join('');""",
    """    const sectionsHtml = currentSong.sections.map((section, index) => {
        const baseType = (section.title || '').split(' ')[0];
        const color = getSectionColor(baseType);
        return `
        <div class="display-section" draggable="true" data-section-index="${index}" data-section-type="${section.title}" style="--section-color: ${color};">
            <div class="drag-handle">⋮⋮</div>
            <div class="display-section-title">${section.title}</div>
            <div class="display-chords" data-original-chords="${section.chords}">${section.chords}</div>
        </div>
    `;
    }).join('');""",
)

js = rep(js,
    """    // CRITICAL: Create sections with NO drag attributes or handlers
    const sectionsHtml = currentSong.sections.map((section, index) => `
        <div class="display-section-lineup" data-section-index="${index}" data-section-type="${section.title}">
            <div class="display-section-title">${section.title}</div>
            <div class="display-chords" data-original-chords="${section.chords}">${section.chords}</div>
        </div>
    `).join('');""",
    """    // CRITICAL: Create sections with NO drag attributes or handlers.
    // Fix #6: include section color so the lineup view matches the regular chord view.
    const sectionsHtml = currentSong.sections.map((section, index) => {
        const baseType = (section.title || '').split(' ')[0];
        const color = getSectionColor(baseType);
        return `
        <div class="display-section-lineup" data-section-index="${index}" data-section-type="${section.title}" style="--section-color: ${color};">
            <div class="display-section-title">${section.title}</div>
            <div class="display-chords" data-original-chords="${section.chords}">${section.chords}</div>
        </div>
    `;
    }).join('');""",
)

# ---- Fix 7: Fix iOS dropdown "Verse → click again" issue.
# Replace the `change` handler with one that resets the value to "" AFTER addSection runs,
# and add a blur to deselect the native picker so iOS commits the change reliably.
js = rep(js,
    """document.getElementById('sectionSelect').addEventListener('change', addSection);""",
    """// Fix #7: iOS keeps the dropdown focused after the first selection, so subsequent
// selections of the same option (e.g. clicking "Verse" again) won't fire 'change'.
// We force the dropdown to reset to "" and blur after every selection so any next
// pick — even the same option — triggers a fresh 'change' event on the first tap.
(function setupSectionSelect() {
    const sectionSelect = document.getElementById('sectionSelect');
    if (!sectionSelect) return;
    sectionSelect.addEventListener('change', function () {
        const value = sectionSelect.value;
        if (!value) return;
        // Call the section adder (it already reads sectionSelect.value & resets it).
        if (typeof addSection === 'function') addSection();
        // Defensive reset & blur — guarantees the next selection works on iOS Safari.
        sectionSelect.value = '';
        // Defer the blur so iOS doesn't cancel the change.
        setTimeout(() => { try { sectionSelect.blur(); } catch (e) {} }, 0);
    });
})();""",
)

# ---- Fix 4: Tone down the aggressive body-lock during drag.
# The original code sets position:fixed on body which sometimes leaves the page in a
# locked state if a touch event is interrupted. We add a safety net: a global watchdog
# that restores body styles if no drag is active for >3 seconds.
watchdog = """

// === Fix #4: Scroll-lock watchdog ===
// Aggressive scroll-blocking during drag can leave the body in a locked state
// when a touch is interrupted (incoming call, app switch, page becoming hidden).
// This watchdog detects a "stuck" body and restores it.
(function scrollWatchdog() {
    let lastTouchEnd = Date.now();
    document.addEventListener('touchend', () => { lastTouchEnd = Date.now(); }, { passive: true });
    document.addEventListener('touchcancel', () => { lastTouchEnd = Date.now(); }, { passive: true });

    function looksLocked() {
        const bs = document.body.style;
        return bs.position === 'fixed' && bs.overflow === 'hidden';
    }
    function unlock() {
        const bs = document.body.style;
        const top = bs.top;
        bs.position = '';
        bs.top = '';
        bs.left = '';
        bs.right = '';
        bs.bottom = '';
        bs.width = '';
        bs.height = '';
        bs.overflow = '';
        bs.touchAction = '';
        document.documentElement.style.overflow = '';
        document.documentElement.style.touchAction = '';
        // Restore scroll position if we stashed one
        if (top && top.startsWith('-')) {
            const y = parseInt(top.replace('-', '').replace('px', ''), 10);
            if (!Number.isNaN(y)) window.scrollTo(0, y);
        }
        console.log('[scrollWatchdog] Restored stuck body scroll-lock');
    }

    setInterval(() => {
        if (looksLocked() && Date.now() - lastTouchEnd > 3000) {
            // No drag activity for 3s but body is locked — unlock it.
            const anyModalOpen = Array.from(document.querySelectorAll('.modal'))
                .some(m => m.style.display === 'block');
            // Only unlock if no modal is open (modal-open intentionally locks).
            if (!anyModalOpen) unlock();
        }
    }, 1500);

    // Always unlock when the tab becomes visible again (e.g. after app-switch)
    document.addEventListener('visibilitychange', () => {
        if (!document.hidden && looksLocked()) {
            setTimeout(() => { if (looksLocked()) unlock(); }, 500);
        }
    });
})();
"""
js += watchdog

# ---- Fix 9: prevent the screen-size check from showing the "Mobile & Tablet Only"
# notice on the Lenovo Xiaoxin Pad Pro in landscape (~1300-1440px CSS px).
# Replace the inline check inside DOMContentLoaded.
js = rep(js,
    """    function checkScreenSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const desktopNotice = document.getElementById('desktopNotice');
        const mainApp = document.getElementById('mainApp');

        // Show desktop notice if screen is too large (desktop only)
        if (width >= 1440 || (width < 1440 && height >= 1200)) {
            desktopNotice.style.display = 'flex';
            mainApp.style.display = 'none';
        } else {
            desktopNotice.style.display = 'none';
            mainApp.style.display = 'flex';
        }
    }""",
    """    function checkScreenSize() {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const desktopNotice = document.getElementById('desktopNotice');
        const mainApp = document.getElementById('mainApp');

        // Detect touch / coarse pointer (tablet / phone)
        const isTouch = ('ontouchstart' in window) ||
                        (navigator.maxTouchPoints && navigator.maxTouchPoints > 0) ||
                        window.matchMedia('(pointer: coarse)').matches;

        // Anything <= 1440px wide is supported (covers Lenovo Xiaoxin Pad Pro landscape).
        // For touch devices we always allow it (so larger tablets like 13" iPads also work).
        // Only block real desktops (>1440px wide AND mouse pointer).
        const tooBigForDesktop = (width > 1440) && !isTouch;

        if (tooBigForDesktop) {
            desktopNotice.style.display = 'flex';
            mainApp.style.display = 'none';
        } else {
            desktopNotice.style.display = 'none';
            mainApp.style.display = 'flex';
        }
    }""",
)

(OUT / 'app.js').write_text(js, encoding='utf-8')
print(f"app.js: {len(js):,} bytes")


# ---------------------------------------------------------------------------
# 4. patches.js  (auto-grow, iOS modal scroll, iOS single-tap)
# ---------------------------------------------------------------------------
patches = (EXTRACTED / 'patches.js').read_text(encoding='utf-8')
patches = dedent(patches)
(OUT / 'patches.js').write_text(patches, encoding='utf-8')
print(f"patches.js: {len(patches):,} bytes")


# ---------------------------------------------------------------------------
# 5. manifest.json + service-worker.js
# ---------------------------------------------------------------------------
manifest_src = Path('/app/uploads/manifest.json').read_text(encoding='utf-8')
(OUT / 'manifest.json').write_text(manifest_src, encoding='utf-8')

# Bump service worker version so updates are picked up
sw_src = Path('/app/uploads/service-worker.js').read_text(encoding='utf-8')
sw_src = sw_src.replace("chords-pro-v1.0.3", "chords-pro-v1.1.0")
# Also include the new external CSS/JS files in the cache
sw_src = sw_src.replace(
    "const urlsToCache = [\n  '/',\n  '/index.html',\n  '/Jem Logo.png',\n  '/prochords192.png',\n  '/prochords512.png'\n];",
    "const urlsToCache = [\n  '/',\n  '/index.html',\n  '/styles.css',\n  '/app.js',\n  '/patches.js',\n  '/token-verify.js',\n  '/Jem Logo.png',\n  '/prochords192.png',\n  '/prochords512.png'\n];"
)
(OUT / 'service-worker.js').write_text(sw_src, encoding='utf-8')

print("manifest.json & service-worker.js: written")

print("\nBuild complete. Output:", OUT)
