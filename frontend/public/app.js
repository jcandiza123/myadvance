const chromaticScale = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];

// Chord suggestion data
const chordSuggestions = {
    'C': [
        { name: 'C', description: 'Major' },
        { name: 'Cm', description: 'Minor' },
        { name: 'C7', description: 'Dominant 7th' },
        { name: 'Cmaj7', description: 'Major 7th' },
        { name: 'Cm7', description: 'Minor 7th' },
        { name: 'Cdim', description: 'Diminished' },
        { name: 'Caug', description: 'Augmented' },
        { name: 'Csus2', description: 'Suspended 2nd' },
        { name: 'Csus4', description: 'Suspended 4th' },
        { name: 'C6', description: 'Major 6th' },
        { name: 'Cm6', description: 'Minor 6th' },
        { name: 'C9', description: 'Dominant 9th' },
        { name: 'Cmaj9', description: 'Major 9th' },
        { name: 'Cm9', description: 'Minor 9th' },
        { name: 'C11', description: 'Dominant 11th' },
        { name: 'C13', description: 'Dominant 13th' },
        { name: 'Cadd9', description: 'Add 9th' },
        { name: 'Cm7b5', description: 'Half Diminished' }
    ],
    'C#': [
        { name: 'C#', description: 'Major' },
        { name: 'C#m', description: 'Minor' },
        { name: 'C#7', description: 'Dominant 7th' },
        { name: 'C#maj7', description: 'Major 7th' },
        { name: 'C#m7', description: 'Minor 7th' },
        { name: 'C#dim', description: 'Diminished' },
        { name: 'C#aug', description: 'Augmented' },
        { name: 'C#sus2', description: 'Suspended 2nd' },
        { name: 'C#sus4', description: 'Suspended 4th' },
        { name: 'C#6', description: 'Major 6th' },
        { name: 'C#m6', description: 'Minor 6th' },
        { name: 'C#9', description: 'Dominant 9th' },
        { name: 'C#maj9', description: 'Major 9th' },
        { name: 'C#m9', description: 'Minor 9th' },
        { name: 'C#add9', description: 'Add 9th' },
        { name: 'C#m7b5', description: 'Half Diminished' }
    ],
    'D': [
        { name: 'D', description: 'Major' },
        { name: 'Dm', description: 'Minor' },
        { name: 'D7', description: 'Dominant 7th' },
        { name: 'Dmaj7', description: 'Major 7th' },
        { name: 'Dm7', description: 'Minor 7th' },
        { name: 'Ddim', description: 'Diminished' },
        { name: 'Daug', description: 'Augmented' },
        { name: 'Dsus2', description: 'Suspended 2nd' },
        { name: 'Dsus4', description: 'Suspended 4th' },
        { name: 'D6', description: 'Major 6th' },
        { name: 'Dm6', description: 'Minor 6th' },
        { name: 'D9', description: 'Dominant 9th' },
        { name: 'Dmaj9', description: 'Major 9th' },
        { name: 'Dm9', description: 'Minor 9th' },
        { name: 'D11', description: 'Dominant 11th' },
        { name: 'D13', description: 'Dominant 13th' },
        { name: 'Dadd9', description: 'Add 9th' },
        { name: 'Dm7b5', description: 'Half Diminished' }
    ],
    'Eb': [
        { name: 'Eb', description: 'Major' },
        { name: 'Ebm', description: 'Minor' },
        { name: 'Eb7', description: 'Dominant 7th' },
        { name: 'Ebmaj7', description: 'Major 7th' },
        { name: 'Ebm7', description: 'Minor 7th' },
        { name: 'Ebdim', description: 'Diminished' },
        { name: 'Ebaug', description: 'Augmented' },
        { name: 'Ebsus2', description: 'Suspended 2nd' },
        { name: 'Ebsus4', description: 'Suspended 4th' },
        { name: 'Eb6', description: 'Major 6th' },
        { name: 'Ebm6', description: 'Minor 6th' },
        { name: 'Eb9', description: 'Dominant 9th' },
        { name: 'Ebmaj9', description: 'Major 9th' },
        { name: 'Ebm9', description: 'Minor 9th' },
        { name: 'Ebadd9', description: 'Add 9th' },
        { name: 'Ebm7b5', description: 'Half Diminished' }
    ],
    'E': [
        { name: 'E', description: 'Major' },
        { name: 'Em', description: 'Minor' },
        { name: 'E7', description: 'Dominant 7th' },
        { name: 'Emaj7', description: 'Major 7th' },
        { name: 'Em7', description: 'Minor 7th' },
        { name: 'Edim', description: 'Diminished' },
        { name: 'Eaug', description: 'Augmented' },
        { name: 'Esus2', description: 'Suspended 2nd' },
        { name: 'Esus4', description: 'Suspended 4th' },
        { name: 'E6', description: 'Major 6th' },
        { name: 'Em6', description: 'Minor 6th' },
        { name: 'E9', description: 'Dominant 9th' },
        { name: 'Emaj9', description: 'Major 9th' },
        { name: 'Em9', description: 'Minor 9th' },
        { name: 'E11', description: 'Dominant 11th' },
        { name: 'E13', description: 'Dominant 13th' },
        { name: 'Eadd9', description: 'Add 9th' },
        { name: 'Em7b5', description: 'Half Diminished' }
    ],
    'F': [
        { name: 'F', description: 'Major' },
        { name: 'Fm', description: 'Minor' },
        { name: 'F7', description: 'Dominant 7th' },
        { name: 'Fmaj7', description: 'Major 7th' },
        { name: 'Fm7', description: 'Minor 7th' },
        { name: 'Fdim', description: 'Diminished' },
        { name: 'Faug', description: 'Augmented' },
        { name: 'Fsus2', description: 'Suspended 2nd' },
        { name: 'Fsus4', description: 'Suspended 4th' },
        { name: 'F6', description: 'Major 6th' },
        { name: 'Fm6', description: 'Minor 6th' },
        { name: 'F9', description: 'Dominant 9th' },
        { name: 'Fmaj9', description: 'Major 9th' },
        { name: 'Fm9', description: 'Minor 9th' },
        { name: 'F11', description: 'Dominant 11th' },
        { name: 'F13', description: 'Dominant 13th' },
        { name: 'Fadd9', description: 'Add 9th' },
        { name: 'Fm7b5', description: 'Half Diminished' }
    ],
    'F#': [
        { name: 'F#', description: 'Major' },
        { name: 'F#m', description: 'Minor' },
        { name: 'F#7', description: 'Dominant 7th' },
        { name: 'F#maj7', description: 'Major 7th' },
        { name: 'F#m7', description: 'Minor 7th' },
        { name: 'F#dim', description: 'Diminished' },
        { name: 'F#aug', description: 'Augmented' },
        { name: 'F#sus2', description: 'Suspended 2nd' },
        { name: 'F#sus4', description: 'Suspended 4th' },
        { name: 'F#6', description: 'Major 6th' },
        { name: 'F#m6', description: 'Minor 6th' },
        { name: 'F#9', description: 'Dominant 9th' },
        { name: 'F#maj9', description: 'Major 9th' },
        { name: 'F#m9', description: 'Minor 9th' },
        { name: 'F#add9', description: 'Add 9th' },
        { name: 'F#m7b5', description: 'Half Diminished' }
    ],
    'G': [
        { name: 'G', description: 'Major' },
        { name: 'Gm', description: 'Minor' },
        { name: 'G7', description: 'Dominant 7th' },
        { name: 'Gmaj7', description: 'Major 7th' },
        { name: 'Gm7', description: 'Minor 7th' },
        { name: 'Gdim', description: 'Diminished' },
        { name: 'Gaug', description: 'Augmented' },
        { name: 'Gsus2', description: 'Suspended 2nd' },
        { name: 'Gsus4', description: 'Suspended 4th' },
        { name: 'G6', description: 'Major 6th' },
        { name: 'Gm6', description: 'Minor 6th' },
        { name: 'G9', description: 'Dominant 9th' },
        { name: 'Gmaj9', description: 'Major 9th' },
        { name: 'Gm9', description: 'Minor 9th' },
        { name: 'G11', description: 'Dominant 11th' },
        { name: 'G13', description: 'Dominant 13th' },
        { name: 'Gadd9', description: 'Add 9th' },
        { name: 'Gm7b5', description: 'Half Diminished' }
    ],
    'G#': [
        { name: 'G#', description: 'Major' },
        { name: 'G#m', description: 'Minor' },
        { name: 'G#7', description: 'Dominant 7th' },
        { name: 'G#maj7', description: 'Major 7th' },
        { name: 'G#m7', description: 'Minor 7th' },
        { name: 'G#dim', description: 'Diminished' },
        { name: 'G#aug', description: 'Augmented' },
        { name: 'G#sus2', description: 'Suspended 2nd' },
        { name: 'G#sus4', description: 'Suspended 4th' },
        { name: 'G#6', description: 'Major 6th' },
        { name: 'G#m6', description: 'Minor 6th' },
        { name: 'G#9', description: 'Dominant 9th' },
        { name: 'G#maj9', description: 'Major 9th' },
        { name: 'G#m9', description: 'Minor 9th' },
        { name: 'G#add9', description: 'Add 9th' },
        { name: 'G#m7b5', description: 'Half Diminished' }
    ],
    'A': [
        { name: 'A', description: 'Major' },
        { name: 'Am', description: 'Minor' },
        { name: 'A7', description: 'Dominant 7th' },
        { name: 'Amaj7', description: 'Major 7th' },
        { name: 'Am7', description: 'Minor 7th' },
        { name: 'Adim', description: 'Diminished' },
        { name: 'Aaug', description: 'Augmented' },
        { name: 'Asus2', description: 'Suspended 2nd' },
        { name: 'Asus4', description: 'Suspended 4th' },
        { name: 'A6', description: 'Major 6th' },
        { name: 'Am6', description: 'Minor 6th' },
        { name: 'A9', description: 'Dominant 9th' },
        { name: 'Amaj9', description: 'Major 9th' },
        { name: 'Am9', description: 'Minor 9th' },
        { name: 'A11', description: 'Dominant 11th' },
        { name: 'A13', description: 'Dominant 13th' },
        { name: 'Aadd9', description: 'Add 9th' },
        { name: 'Am7b5', description: 'Half Diminished' }
    ],
    'Bb': [
        { name: 'Bb', description: 'Major' },
        { name: 'Bbm', description: 'Minor' },
        { name: 'Bb7', description: 'Dominant 7th' },
        { name: 'Bbmaj7', description: 'Major 7th' },
        { name: 'Bbm7', description: 'Minor 7th' },
        { name: 'Bbdim', description: 'Diminished' },
        { name: 'Bbaug', description: 'Augmented' },
        { name: 'Bbsus2', description: 'Suspended 2nd' },
        { name: 'Bbsus4', description: 'Suspended 4th' },
        { name: 'Bb6', description: 'Major 6th' },
        { name: 'Bbm6', description: 'Minor 6th' },
        { name: 'Bb9', description: 'Dominant 9th' },
        { name: 'Bbmaj9', description: 'Major 9th' },
        { name: 'Bbm9', description: 'Minor 9th' },
        { name: 'Bbadd9', description: 'Add 9th' },
        { name: 'Bbm7b5', description: 'Half Diminished' }
    ],
    'B': [
        { name: 'B', description: 'Major' },
        { name: 'Bm', description: 'Minor' },
        { name: 'B7', description: 'Dominant 7th' },
        { name: 'Bmaj7', description: 'Major 7th' },
        { name: 'Bm7', description: 'Minor 7th' },
        { name: 'Bdim', description: 'Diminished' },
        { name: 'Baug', description: 'Augmented' },
        { name: 'Bsus2', description: 'Suspended 2nd' },
        { name: 'Bsus4', description: 'Suspended 4th' },
        { name: 'B6', description: 'Major 6th' },
        { name: 'Bm6', description: 'Minor 6th' },
        { name: 'B9', description: 'Dominant 9th' },
        { name: 'Bmaj9', description: 'Major 9th' },
        { name: 'Bm9', description: 'Minor 9th' },
        { name: 'B11', description: 'Dominant 11th' },
        { name: 'B13', description: 'Dominant 13th' },
        { name: 'Badd9', description: 'Add 9th' },
        { name: 'Bm7b5', description: 'Half Diminished' }
    ]
};

// Chord suggestion functionality
let currentSuggestionBox = null;
let selectedSuggestionIndex = -1;

function setupChordSuggestions(textarea) {
    const wrapper = textarea.parentElement;
    const suggestionBox = wrapper.querySelector('.chord-suggestions');

    let debounceTimer;
    let isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    // Input event with immediate response for touch devices
    textarea.addEventListener('input', function(e) {
        clearTimeout(debounceTimer);
        const delay = isTouch ? 50 : 150; // Much faster response on touch
        debounceTimer = setTimeout(() => {
            handleChordInput(textarea, suggestionBox);
        }, delay);
    });

    textarea.addEventListener('keydown', function(e) {
        if (suggestionBox.classList.contains('show')) {
            handleSuggestionNavigation(e, suggestionBox, textarea);
        }
    });

    // Enhanced blur handling - prevent blur when touching suggestions
    let preventBlur = false;
    let isScrolling = false;

    textarea.addEventListener('blur', function(e) {
        if (preventBlur || isScrolling) {
            preventBlur = false;
            return;
        }

        const delay = isTouch ? 800 : 150; // Longer delay for touch
        setTimeout(() => {
            if (!preventBlur && !isScrolling && !document.querySelector('.chord-suggestions:hover')) {
                hideSuggestions(suggestionBox);
            }
        }, delay);
    });

    // Enhanced touch handling for suggestion box
    let touchStartY = 0;
    let touchStartTime = 0;

    suggestionBox.addEventListener('touchstart', function(e) {
        preventBlur = true;
        touchStartY = e.touches[0].clientY;
        touchStartTime = Date.now();
        isScrolling = false;

        // Don't prevent default to allow scrolling
    }, { passive: true });

    suggestionBox.addEventListener('touchmove', function(e) {
        const touchMoveY = e.touches[0].clientY;
        const deltaY = Math.abs(touchMoveY - touchStartY);

        // If moved more than 10px, consider it scrolling
        if (deltaY > 10) {
            isScrolling = true;
        }
    }, { passive: true });

    suggestionBox.addEventListener('touchend', function(e) {
        const touchEndTime = Date.now();
        const touchDuration = touchEndTime - touchStartTime;

        // If it was a quick tap (less than 200ms) and no scrolling, it's a selection
        if (touchDuration < 200 && !isScrolling) {
            // Let the item's touch handler deal with selection
        } else {
            // It was scrolling, reset flags after a delay
            setTimeout(() => {
                isScrolling = false;
                preventBlur = false;
            }, 100);
        }
    }, { passive: true });

    suggestionBox.addEventListener('mousedown', function(e) {
        preventBlur = true;
        e.preventDefault();
    });

    // Focus event to retrigger suggestions
    textarea.addEventListener('focus', function(e) {
        if (textarea.value.trim()) {
            setTimeout(() => {
                handleChordInput(textarea, suggestionBox);
            }, 100);
        }
    });
}

function handleChordInput(textarea, suggestionBox) {
    const cursorPosition = textarea.selectionStart;
    const textBeforeCursor = textarea.value.substring(0, cursorPosition);
    const currentLine = textBeforeCursor.split('\n').pop();

    // Find the current word (chord) being typed
    const words = currentLine.split(/[\s\-–—,]+/);
    const currentWord = words[words.length - 1].trim();

    // Enhanced debug logging for iPad
    const isIPad = /iPad/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    console.log('iPad Chord Debug:', {
        currentWord,
        wordLength: currentWord.length,
        textLength: textarea.value.length,
        cursorPosition,
        currentLine,
        isIPad,
        suggestionBoxExists: !!suggestionBox,
        suggestionBoxVisible: suggestionBox ? suggestionBox.style.display : 'N/A'
    });

    if (currentWord.length === 0) {
        console.log('iPad Debug: No current word, hiding suggestions');
        hideSuggestions(suggestionBox);
        return;
    }

    // Extract root note from the current word
    const rootMatch = currentWord.match(/^([A-G][#b]?)/i);
    if (!rootMatch) {
        console.log('iPad Debug: No root note match for:', currentWord);
        hideSuggestions(suggestionBox);
        return;
    }

    const rootNote = rootMatch[1];
    console.log('iPad Debug: Root note found:', rootNote);

    const suggestions = chordSuggestions[rootNote];

    if (!suggestions) {
        console.log('iPad Debug: No suggestions for root note:', rootNote);
        hideSuggestions(suggestionBox);
        return;
    }

    // Filter suggestions based on what's already typed
    const filteredSuggestions = suggestions.filter(chord => 
        chord.name.toLowerCase().startsWith(currentWord.toLowerCase())
    );

    console.log('iPad Debug: Filtered suggestions:', filteredSuggestions.length, 'from', suggestions.length);

    if (filteredSuggestions.length === 0) {
        console.log('iPad Debug: No filtered suggestions, hiding');
        hideSuggestions(suggestionBox);
        return;
    }

    console.log('iPad Debug: About to show suggestions');
    showSuggestions(suggestionBox, filteredSuggestions, currentWord, textarea);
}

function showSuggestions(suggestionBox, suggestions, currentWord, textarea) {
    currentSuggestionBox = suggestionBox;
    selectedSuggestionIndex = -1;

    const html = `
        <div class="chord-suggestion-header">
            ${currentWord.charAt(0).toUpperCase()}${currentWord.slice(1)} Chords
        </div>
        ${suggestions.map((chord, index) => `
            <div class="chord-suggestion-item" data-chord="${chord.name}" data-index="${index}">
                <span class="chord-name">${chord.name}</span>
                <span class="chord-description">${chord.description}</span>
            </div>
        `).join('')}
    `;

    suggestionBox.innerHTML = html;
    suggestionBox.style.display = 'block';

    // Force reflow before adding show class
    suggestionBox.offsetHeight;
    suggestionBox.classList.add('show');

    // Add click/touch listeners to suggestion items
    suggestionBox.querySelectorAll('.chord-suggestion-item').forEach(item => {
        let itemTouchStartY = 0;
        let itemTouchStartTime = 0;
        let itemIsScrolling = false;

        // Track touch start on individual items
        item.addEventListener('touchstart', function(e) {
            itemTouchStartY = e.touches[0].clientY;
            itemTouchStartTime = Date.now();
            itemIsScrolling = false;

            // Visual feedback
            this.style.background = 'linear-gradient(135deg, rgba(139, 92, 246, 0.4) 0%, rgba(99, 102, 241, 0.4) 100%)';
            this.style.transform = 'translateX(4px)';
        }, { passive: true });

        // Track touch move on individual items
        item.addEventListener('touchmove', function(e) {
            const itemTouchMoveY = e.touches[0].clientY;
            const itemDeltaY = Math.abs(itemTouchMoveY - itemTouchStartY);

            if (itemDeltaY > 5) {
                itemIsScrolling = true;
                // Remove visual feedback if scrolling
                this.style.background = '';
                this.style.transform = '';
            }
        }, { passive: true });

        // Handle touch end with selection logic
        item.addEventListener('touchend', function(e) {
            const itemTouchEndTime = Date.now();
            const itemTouchDuration = itemTouchEndTime - itemTouchStartTime;

            // Only select if it was a quick tap and no scrolling
            if (itemTouchDuration < 300 && !itemIsScrolling) {
                e.preventDefault();
                e.stopPropagation();

                const chordName = this.getAttribute('data-chord');
                console.log('iPad Debug: Chord selected:', chordName);

                // Insert chord and hide suggestions
                insertChord(textarea, chordName);
                hideSuggestions(suggestionBox);

                // Focus textarea after a short delay
                setTimeout(() => {
                    textarea.focus();
                }, 50);
            } else {
                // It was scrolling, just remove visual feedback
                this.style.background = '';
                this.style.transform = '';
            }
        }, { passive: false });

        // Mouse events (fallback for desktop)
        item.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const chordName = this.getAttribute('data-chord');
            console.log('Desktop Debug: Chord selected:', chordName);
            insertChord(textarea, chordName);
            hideSuggestions(suggestionBox);
            textarea.focus();
        });
    });

    console.log('iPad Debug: Suggestions shown, count:', suggestions.length);
}

function hideSuggestions(suggestionBox) {
    suggestionBox.classList.remove('show');
    setTimeout(() => {
        suggestionBox.style.display = 'none';
        suggestionBox.innerHTML = '';
    }, 300);
    currentSuggestionBox = null;
    selectedSuggestionIndex = -1;
}

function handleSuggestionNavigation(e, suggestionBox, textarea) {
    const items = suggestionBox.querySelectorAll('.chord-suggestion-item');

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, items.length - 1);
        updateSuggestionHighlight(items);
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, -1);
        updateSuggestionHighlight(items);
    } else if (e.key === 'Enter' && selectedSuggestionIndex >= 0) {
        e.preventDefault();
        const selectedItem = items[selectedSuggestionIndex];
        const chordName = selectedItem.getAttribute('data-chord');
        insertChord(textarea, chordName);
        hideSuggestions(suggestionBox);
    } else if (e.key === 'Escape') {
        e.preventDefault();
        hideSuggestions(suggestionBox);
        textarea.focus();
    }
}

function updateSuggestionHighlight(items) {
    items.forEach((item, index) => {
        if (index === selectedSuggestionIndex) {
            item.classList.add('highlighted');
        } else {
            item.classList.remove('highlighted');
        }
    });
}

function insertChord(textarea, chordName) {
    const cursorPosition = textarea.selectionStart;
    const textBeforeCursor = textarea.value.substring(0, cursorPosition);
    const textAfterCursor = textarea.value.substring(cursorPosition);

    // Find the current line and word
    const lines = textBeforeCursor.split('\n');
    const currentLine = lines[lines.length - 1];
    const words = currentLine.split(/[\s\-–—,]+/);
    const currentWord = words[words.length - 1];

    // Calculate the position to replace
    const wordStartPosition = cursorPosition - currentWord.length;

    // Replace the current word with the selected chord
    const newText = textarea.value.substring(0, wordStartPosition) + 
                   chordName + 
                   textarea.value.substring(cursorPosition);

    textarea.value = newText;

    // Set cursor position after the inserted chord
    const newCursorPosition = wordStartPosition + chordName.length;
    textarea.setSelectionRange(newCursorPosition, newCursorPosition);
    textarea.focus();
}

// Initialize chord suggestions for existing textareas
function initializeChordSuggestions() {
    document.querySelectorAll('.chord-input-section').forEach(textarea => {
        setupChordSuggestions(textarea);
    });
}

let songs = [];
let currentSong = null;
let currentSemitones = 0;
let removeMode = false;
let sectionCounters = {};

// Load songs from localStorage
function loadSongs() {
    const savedSongs = localStorage.getItem('chordsSongs');
    if (savedSongs) {
        songs = JSON.parse(savedSongs);
        renderSongList();
    }
}

// Save songs to localStorage
function saveSongs() {
    localStorage.setItem('chordsSongs', JSON.stringify(songs));
}

// Get section color based on type
function getSectionColor(sectionType) {
    const type = sectionType.toLowerCase();
    if (type.includes('intro')) return '#10b981';
    if (type.includes('verse')) return '#3b82f6';
    if (type.includes('prechorus')) return '#f59e0b';
    if (type.includes('chorus')) return '#ef4444';
    if (type.includes('bridge')) return '#8b5cf6';
    if (type.includes('solo') || type.includes('instrumental')) return '#f97316';
    if (type.includes('interlude')) return '#06b6d4';
    if (type.includes('outro') || type.includes('ending') || type.includes('fade')) return '#6b7280';
    return '#a1a1aa'; // Default color
}

// Generate section indicators
function generateSectionIndicators(sections) {
    if (!sections || sections.length === 0) return '';

    // Group sections by type and count them
    const sectionCounts = {};
    sections.forEach(section => {
        const baseType = section.title.split(' ')[0]; // Get base type (e.g., "Verse" from "Verse 2")
        sectionCounts[baseType] = (sectionCounts[baseType] || 0) + 1;
    });

    // Create indicators
    return Object.entries(sectionCounts)
        .map(([type, count]) => {
            const color = getSectionColor(type);
            const displayText = count > 1 ? `${type} (${count})` : type;
            return `<span class="section-indicator">
                <span class="section-dot" style="background-color: ${color}"></span>
                ${displayText}
            </span>`;
        })
        .join('');
}

// Render song list (sorted alphabetically A-Z by title — Fix #3)
function renderSongList() {
    const container = document.getElementById('songListContainer');

    // Build a sorted view that maps back to the real songs[] indices
    const sortedView = songs
        .map((song, realIndex) => ({ song, realIndex }))
        .sort((a, b) => a.song.title.localeCompare(b.song.title, undefined, { sensitivity: 'base' }));

    if (songs.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🎼</div>
                <p>No songs yet. Click ADD to create your first song!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = sortedView.map(({ song, realIndex }) => {
        const index = realIndex; // keep variable name compatible with template literals below
        return `
        <div class="song-item ${removeMode ? 'remove-mode' : ''}" onclick="${removeMode ? '' : 'openSong(' + index + ')'}" data-index="${index}">
            ${removeMode ? '<div class="delete-indicator" onclick="deleteSong(' + index + ', event)">🗑️</div>' : 
            `<div class="action-menu-trigger" onclick="toggleActionMenu(${index}, event)">
                ⋮
                <div class="action-menu" id="actionMenu${index}">
                    <button class="action-menu-item" onclick="exportThisSong(${index}, event)">
                        <span class="action-menu-icon">
                            <svg viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                            </svg>
                        </span>
                        Export This Song
                    </button>
                    <button class="action-menu-item" onclick="addToLineup(${index}, event)">
                        <span class="action-menu-icon">
                            <svg viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                        </span>
                        Add to Lineup
                    </button>
                </div>
            </div>`}
            <div class="song-title">${song.title}</div>
            <div class="song-description">${song.description}</div>
            <div class="song-sections-preview">
                ${generateSectionIndicators(song.sections)}
            </div>
        </div>
    `;
    }).join('');
}

// Open add modal
function openAddModal() {
    preventBodyScroll();
    document.getElementById('addModal').style.display = 'block';
    sectionCounters = {};
}

// Close add modal
function closeAddModal() {
    restoreBodyScroll();
    document.getElementById('addModal').style.display = 'none';
    document.getElementById('songTitle').value = '';
    document.getElementById('songDescription').value = '';
    document.getElementById('sectionsContainer').innerHTML = '';
    document.getElementById('sectionSelect').value = '';
    resetAddModal(); // Reset modal state when closing
}

// Add section to song
function addSection() {
    const sectionSelect = document.getElementById('sectionSelect');
    const sectionType = sectionSelect.value;
    if (!sectionType) return;

    // Count sections for numbering
    if (!sectionCounters[sectionType]) {
        sectionCounters[sectionType] = 1;
    } else {
        sectionCounters[sectionType]++;
    }

    const sectionName = sectionCounters[sectionType] === 1 ? 
        sectionType : `${sectionType} ${sectionCounters[sectionType]}`;

    const sectionId = `section_${Date.now()}`;
    const sectionHtml = `
        <div class="section-item" data-section-id="${sectionId}">
            <div class="section-header">
                <span class="section-title">${sectionName}</span>
                <button class="remove-section" onclick="removeSection('${sectionId}', '${sectionType}')">×</button>
            </div>
            <div class="chord-input-wrapper">
                <textarea class="chord-input-section" placeholder="Enter chords for ${sectionName}..."></textarea>
                <div class="chord-suggestions" style="display: none;"></div>
            </div>
        </div>
    `;

    document.getElementById('sectionsContainer').insertAdjacentHTML('beforeend', sectionHtml);
    sectionSelect.value = '';

    // Initialize chord suggestions for the new textarea with delay
    setTimeout(() => {
        const newTextarea = document.querySelector(`[data-section-id="${sectionId}"] .chord-input-section`);
        if (newTextarea) {
            console.log('iPad Debug: Setting up suggestions for new section:', sectionId);
            setupChordSuggestions(newTextarea);

            // Test the setup immediately
            const wrapper = newTextarea.parentElement;
            const suggestionBox = wrapper.querySelector('.chord-suggestions');
            console.log('iPad Debug: New textarea setup complete:', {
                textareaExists: !!newTextarea,
                wrapperExists: !!wrapper,
                suggestionBoxExists: !!suggestionBox
            });
        }
    }, 100);
}

// Remove section
function removeSection(sectionId, sectionType) {
    document.querySelector(`[data-section-id="${sectionId}"]`).remove();
    if (sectionCounters[sectionType] > 0) {
        sectionCounters[sectionType]--;
    }
}

// Add song
function addSong() {
    const title = document.getElementById('songTitle').value.trim();
    const description = document.getElementById('songDescription').value.trim();

    if (!title) {
        alert('Please enter a song title');
        return;
    }

    const sections = [];
    const sectionElements = document.querySelectorAll('.section-item');

    sectionElements.forEach(element => {
        const sectionTitle = element.querySelector('.section-title').textContent;
        const chords = element.querySelector('.chord-input-section').value.trim();

        if (chords) {
            sections.push({
                title: sectionTitle,
                chords: chords
            });
        }
    });

    const song = {
        title,
        description,
        sections,
        id: Date.now()
    };

    songs.push(song);
    autoSave(); // Auto-save
    renderSongList();
    closeAddModal();
}

// Delete song function
function deleteSong(index, event) {
    // Prevent the song from opening when clicking delete
    event.stopPropagation();
    event.preventDefault();

    // Delete the song directly without confirmation
    songs.splice(index, 1);
    autoSave(); // Auto-save

    // Always exit remove mode after deleting one song
    toggleRemoveMode();

    renderSongList();
}

// Open song display
function openSong(index) {
    if (removeMode) {
        return; // Do nothing in remove mode, let delete button handle deletion
    }

    // Ensure we're not in lineup mode when opening regular songs
    if (lineupMode) {
        console.log('Blocked: Cannot open regular song while in lineup mode');
        return;
    }

    currentSong = songs[index];
    currentSemitones = 0;
    displaySong();

    // Set up normal song modal footer (not lineup footer)
    const footer = document.querySelector('#songModal .modal-footer');
    footer.innerHTML = `
        <button class="btn-modal btn-primary" onclick="editCurrentSong()" id="editSongBtn">Edit Song</button>
        <button class="btn-modal btn-secondary" onclick="closeSongModal()">Close</button>
    `;

    preventBodyScroll();
    document.getElementById('songModal').style.display = 'block';
}

// Display song content (REGULAR SONGS - with drag functionality)
function displaySong() {
    if (!currentSong) return;

    const sectionsHtml = currentSong.sections.map((section, index) => {
        const baseType = (section.title || '').split(' ')[0];
        const color = getSectionColor(baseType);
        return `
        <div class="display-section" draggable="true" data-section-index="${index}" data-section-type="${section.title}" style="--section-color: ${color};">
            <div class="drag-handle">⋮⋮</div>
            <div class="display-section-title">${section.title}</div>
            <div class="display-chords" data-original-chords="${section.chords}">${section.chords}</div>
        </div>
    `;
    }).join('');

    document.getElementById('songDisplay').innerHTML = `
        <h1 class="song-display-title">${currentSong.title}</h1>
        <p class="song-display-description">${currentSong.description}</p>

        <div class="transpose-section">
            <div class="transpose-container">
                <span class="transpose-title">Transpose</span>
                <div class="transpose-controls">
                    <button class="transpose-btn minus" onclick="transposeDown()">−</button>
                    <div class="semitone-display" id="semitoneDisplay">0</div>
                    <button class="transpose-btn plus" onclick="transposeUp()">+</button>
                </div>
            </div>
        </div>

        <div class="song-sections" id="songSections">
            ${sectionsHtml}
        </div>
    `;

    // Add drag and drop event listeners after the HTML is inserted
    setTimeout(() => {
        setupDragAndDrop();
    }, 0);
}

// LINEUP SONG DISPLAY (ZERO DRAG FUNCTIONALITY)
function displayLineupSong() {
    if (!currentSong) return;

    // CRITICAL: Create sections with NO drag attributes or handlers.
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
    }).join('');

    document.getElementById('songDisplay').innerHTML = `
        <h1 class="song-display-title">${currentSong.title}</h1>
        <p class="song-display-description">${currentSong.description}</p>

        <div class="transpose-section">
            <div class="transpose-container">
                <span class="transpose-title">Transpose</span>
                <div class="transpose-controls">
                    <button class="transpose-btn minus" onclick="transposeDown()">−</button>
                    <div class="semitone-display" id="semitoneDisplay">0</div>
                    <button class="transpose-btn plus" onclick="transposeUp()">+</button>
                </div>
            </div>
        </div>

        <div class="song-sections-lineup" id="songSections">
            ${sectionsHtml}
        </div>
    `;

    // CRITICAL: NO drag setup for lineup songs - completely isolated
    console.log('Lineup song displayed with ZERO drag functionality');
}

// TRANSPOSE FUNCTIONS - KEEPING EXACTLY AS THEY WERE
function transposeUp() {
    if (currentSemitones < 6) {
        currentSemitones++;
        updateSemitoneDisplay();
        updateAllChords();
    }
}

function transposeDown() {
    if (currentSemitones > -6) {
        currentSemitones--;
        updateSemitoneDisplay();
        updateAllChords();
    }
}

function updateSemitoneDisplay() {
    const display = document.getElementById('semitoneDisplay');
    if (currentSemitones > 0) {
        display.textContent = `+${currentSemitones}`;
    } else {
        display.textContent = currentSemitones.toString();
    }
}

function transposeNote(note, semitones) {
    if (!note || typeof note !== 'string') return note;

    let noteIndex = chromaticScale.indexOf(note);

    if (noteIndex === -1) {
        const alternateMap = {
            'D#': 'Eb',
            'A#': 'Bb',
            'Fb': 'E',
            'Cb': 'B',
            'E#': 'F',
            'B#': 'C'
        };

        if (alternateMap[note]) {
            note = alternateMap[note];
            noteIndex = chromaticScale.indexOf(note);
        }
    }

    if (noteIndex === -1) return note;

    let newIndex = (noteIndex + semitones) % 12;
    if (newIndex < 0) newIndex += 12;

    return chromaticScale[newIndex];
}

function transposeChord(chord, semitones) {
    if (!chord || typeof chord !== 'string') return chord;

    // Support chords wrapped in parentheses, e.g. "(G)" or "(D/F#)"
    // Keep the parentheses and only transpose the inner chord.
    const parenMatch = chord.match(/^\(\s*(.+?)\s*\)$/);
    if (parenMatch) {
        return '(' + transposeChord(parenMatch[1], semitones) + ')';
    }

    if (chord.includes('/')) {
        const [rootPart, bassPart] = chord.split('/');
        const transposedRoot = transposeChord(rootPart, semitones);
        const transposedBass = transposeNote(bassPart, semitones);
        return `${transposedRoot}/${transposedBass}`;
    }

    const chordRegex = /^([A-G][#b]?)(.*)$/;
    const match = chord.match(chordRegex);

    if (!match) return chord;

    const [, root, suffix] = match;
    const transposedRoot = transposeNote(root, semitones);

    return transposedRoot + suffix;
}

function updateAllChords() {
    const chordElements = document.querySelectorAll('.display-chords');

    chordElements.forEach(element => {
        const originalChords = element.getAttribute('data-original-chords');
        const lines = originalChords.split('\n');

        const transposedLines = lines.map(line => {
            if (!line.trim()) return '';

            const tokens = (line.match(/\([^)]*\)|[^\s,\-–—]+/g) || [])
                .map(t => t.trim())
                .filter(t => t.length > 0);

            const transposedTokens = tokens.map(token => {
                const groupMatch = token.match(/^\(\s*(.+?)\s*\)$/);
                if (groupMatch) {
                    const inner = groupMatch[1].trim();
                    // Handle multiple chords inside parentheses e.g. "(Gm F)"
                    const innerChords = inner.split(/\s+/).filter(Boolean);
                    const transposedInner = innerChords.map(ch => transposeChord(ch, currentSemitones));
                    return '(' + transposedInner.join(' ') + ')';
                }
                return transposeChord(token, currentSemitones);
            });

            return transposedTokens.join(' - ');
        });

        element.textContent = transposedLines.join('\n');
    });
}

// Drag and drop functionality with 1-second delay
function setupDragAndDrop() {
    const sections = document.querySelectorAll('.display-section');

    sections.forEach((section, index) => {
        // Desktop drag delay variables
        let desktopDragDelayTimer = null;
        let desktopDragDelayMet = false;

        // Desktop delay setup
        section.addEventListener('mousedown', function(e) {
            desktopDragDelayMet = false;

            // Clear any existing timer
            if (desktopDragDelayTimer) {
                clearTimeout(desktopDragDelayTimer);
            }

            // Start 1-second delay timer for desktop
            desktopDragDelayTimer = setTimeout(() => {
                desktopDragDelayMet = true;
                // Visual feedback when drag becomes available
                this.style.transform = 'scale(1.01)';
                this.style.transition = 'transform 0.1s ease';
            }, 1000);
        });

        section.addEventListener('mouseup', function(e) {
            // Clear timer and reset
            if (desktopDragDelayTimer) {
                clearTimeout(desktopDragDelayTimer);
                desktopDragDelayTimer = null;
            }
            desktopDragDelayMet = false;
            this.style.transform = '';
            this.style.transition = '';
        });

        section.addEventListener('mouseleave', function(e) {
            // Clear timer when mouse leaves
            if (desktopDragDelayTimer) {
                clearTimeout(desktopDragDelayTimer);
                desktopDragDelayTimer = null;
            }
            desktopDragDelayMet = false;
            this.style.transform = '';
            this.style.transition = '';
        });

        // Desktop drag events
        section.addEventListener('dragstart', function(e) {
            // Check if 1-second delay has been met for desktop sections
            if (!desktopDragDelayMet) {
                e.preventDefault();
                return false;
            }
            handleSectionDragStart.call(this, e);
        });
        section.addEventListener('dragend', handleSectionDragEnd);
        section.addEventListener('dragover', handleSectionDragOver);
        section.addEventListener('drop', handleSectionDrop);
        section.addEventListener('dragenter', handleSectionDragEnter);
        section.addEventListener('dragleave', handleSectionDragLeave);

        // Touch events for Safari/iPad with 1-second delay
        let touchStartY = 0;
        let touchStartX = 0;
        let touchStartTime = 0;
        let isDragging = false;
        let dragStarted = false;
        let initialTouch = null;
        let touchDelayTimer = null;
        let touchDelayMet = false;

        section.addEventListener('touchstart', function(e) {
            initialTouch = e.touches[0];
            touchStartY = initialTouch.clientY;
            touchStartX = initialTouch.clientX;
            touchStartTime = Date.now();
            isDragging = false;
            dragStarted = false;
            touchDelayMet = false;

            // Start 1-second delay timer for touch
            touchDelayTimer = setTimeout(() => {
                touchDelayMet = true;
                // Light visual feedback when delay is met
                this.style.transform = 'scale(1.01)';
                this.style.transition = 'transform 0.1s ease';
            }, 1000);
        }, { passive: true });

        section.addEventListener('touchmove', function(e) {
            if (!initialTouch) return;

            const currentTouch = e.touches[0];
            const deltaY = Math.abs(currentTouch.clientY - touchStartY);
            const deltaX = Math.abs(currentTouch.clientX - touchStartX);
            const touchDuration = Date.now() - touchStartTime;

            // CRITICAL: Only prevent scroll AFTER 1-second delay is met
            // This allows normal scrolling until drag mode activates
            if (touchDelayMet) {
                // Drag mode is active - prevent all scrolling
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();

                // Additional Safari-specific prevention
                if (e.cancelable) {
                    e.preventDefault();
                }

                // Force prevent any scroll behavior
                if (typeof e.returnValue !== 'undefined') {
                    e.returnValue = false;
                }
            }
            // If delay not met, allow normal scrolling (don't prevent default)

            // Start drag: moved >10px vertically, held >150ms, more vertical than horizontal, AND 1-second delay met
            if (deltaY > 10 && touchDuration > 150 && touchDelayMet && !dragStarted && deltaY > deltaX) {
                dragStarted = true;
                isDragging = true;

                // CRITICAL: Enhanced Safari/iPad scroll prevention
                const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
                const currentScrollX = window.pageXOffset || document.documentElement.scrollLeft;

                // Store original styles for restoration
                window.originalSectionDragStyles = {
                    bodyOverflow: document.body.style.overflow,
                    bodyPosition: document.body.style.position,
                    bodyTop: document.body.style.top,
                    bodyLeft: document.body.style.left,
                    bodyWidth: document.body.style.width,
                    bodyHeight: document.body.style.height,
                    bodyTouchAction: document.body.style.touchAction,
                    htmlOverflow: document.documentElement.style.overflow,
                    htmlTouchAction: document.documentElement.style.touchAction,
                    scrollY: currentScrollY,
                    scrollX: currentScrollX
                };

                // Apply comprehensive scroll blocking for Safari/iPad
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.top = `-${currentScrollY}px`;
                document.body.style.left = `-${currentScrollX}px`;
                document.body.style.width = '100vw';
                document.body.style.height = '100vh';
                document.body.style.touchAction = 'none';

                // Also block on document element for Safari
                document.documentElement.style.overflow = 'hidden';
                document.documentElement.style.touchAction = 'none';

                // Block modal content scrolling
                const modalContent = document.querySelector('#songModal .modal-content');
                if (modalContent) {
                    window.originalModalStyles = {
                        overflow: modalContent.style.overflow,
                        touchAction: modalContent.style.touchAction
                    };
                    modalContent.style.overflow = 'hidden';
                    modalContent.style.touchAction = 'none';
                }

                sectionDraggedElement = this;
                sectionDraggedIndex = parseInt(this.getAttribute('data-section-index'));

                this.classList.add('dragging');
                this.style.transform = 'scale(1.05) rotate(2deg)';
                this.style.zIndex = '1000';
                this.style.opacity = '0.8';
                this.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                this.style.transition = 'none';

                console.log('Section drag started with enhanced scroll blocking');
            }

            if (isDragging) {
                // Find drop target
                const elementBelow = document.elementFromPoint(currentTouch.clientX, currentTouch.clientY);
                const targetSection = elementBelow ? elementBelow.closest('.display-section') : null;

                // Clear all drag-over states
                document.querySelectorAll('.display-section').forEach(s => {
                    s.classList.remove('drag-over');
                });

                // Add drag-over to valid target
                if (targetSection && targetSection !== sectionDraggedElement) {
                    targetSection.classList.add('drag-over');
                }
            }

            return false; // Additional Safari prevention
        }, { passive: false });

        section.addEventListener('touchend', function(e) {
            // Clear delay timer
            if (touchDelayTimer) {
                clearTimeout(touchDelayTimer);
                touchDelayTimer = null;
            }

            // Reset visual state
            this.style.transform = '';
            this.style.transition = '';
            this.style.zIndex = '';
            this.style.opacity = '';
            this.style.boxShadow = '';

            if (isDragging && dragStarted) {
                e.preventDefault();

                // Find final drop target
                const endTouch = e.changedTouches[0];
                const elementBelow = document.elementFromPoint(endTouch.clientX, endTouch.clientY);
                const dropTarget = elementBelow ? elementBelow.closest('.display-section') : null;

                if (dropTarget && dropTarget !== sectionDraggedElement) {
                    const dropIndex = parseInt(dropTarget.getAttribute('data-section-index'));

                    if (sectionDraggedIndex !== dropIndex && sectionDraggedIndex >= 0 && dropIndex >= 0) {
                        // Perform reorder
                        const draggedSection = currentSong.sections[sectionDraggedIndex];
                        currentSong.sections.splice(sectionDraggedIndex, 1);
                        currentSong.sections.splice(dropIndex, 0, draggedSection);

                        // Update song in main array
                        const songIndex = songs.findIndex(song => song.id === currentSong.id);
                        if (songIndex !== -1) {
                            songs[songIndex] = currentSong;
                            autoSave();
                        }

                        // Re-render
                        displaySong();
                    }
                }

                // Cleanup
                this.classList.remove('dragging');
                document.querySelectorAll('.display-section').forEach(s => {
                    s.classList.remove('drag-over');
                });

                sectionDraggedElement = null;
                sectionDraggedIndex = null;
            }

            // CRITICAL: Always restore scrolling with Safari fixes
            if (isDragging || dragStarted) {
                // Restore body styles with scroll position
                if (window.originalSectionDragStyles) {
                    const styles = window.originalSectionDragStyles;

                    // Restore body styles
                    document.body.style.overflow = styles.bodyOverflow || '';
                    document.body.style.position = styles.bodyPosition || '';
                    document.body.style.top = styles.bodyTop || '';
                    document.body.style.left = styles.bodyLeft || '';
                    document.body.style.width = styles.bodyWidth || '';
                    document.body.style.height = styles.bodyHeight || '';
                    document.body.style.touchAction = styles.bodyTouchAction || '';

                    // Restore document element
                    document.documentElement.style.overflow = styles.htmlOverflow || '';
                    document.documentElement.style.touchAction = styles.htmlTouchAction || '';

                    // Restore scroll position for Safari
                    if (styles.scrollY !== undefined || styles.scrollX !== undefined) {
                        setTimeout(() => {
                            window.scrollTo(styles.scrollX || 0, styles.scrollY || 0);
                        }, 10);
                    }

                    // Clear stored styles
                    window.originalSectionDragStyles = null;
                }

                // Restore modal content
                if (window.originalModalStyles) {
                    const modalContent = document.querySelector('#songModal .modal-content');
                    if (modalContent) {
                        modalContent.style.overflow = window.originalModalStyles.overflow || '';
                        modalContent.style.touchAction = window.originalModalStyles.touchAction || '';
                    }
                    window.originalModalStyles = null;
                }

                console.log('Section drag scrolling restored with Safari fixes');
            }

            // Reset state
            isDragging = false;
            dragStarted = false;
            initialTouch = null;
            touchDelayMet = false;
        }, { passive: false });

        // Handle touch cancel for cleanup
        section.addEventListener('touchcancel', function(e) {
            // Clear delay timer
            if (touchDelayTimer) {
                clearTimeout(touchDelayTimer);
                touchDelayTimer = null;
            }

            this.style.transform = '';
            this.style.transition = '';
            this.style.zIndex = '';
            this.style.opacity = '';
            this.style.boxShadow = '';
            this.classList.remove('dragging');

            document.querySelectorAll('.display-section').forEach(s => {
                s.classList.remove('drag-over');
            });

            // CRITICAL: Restore scrolling with Safari fixes on cancel
            if (isDragging || dragStarted) {
                // Restore body styles with scroll position
                if (window.originalSectionDragStyles) {
                    const styles = window.originalSectionDragStyles;

                    // Restore body styles
                    document.body.style.overflow = styles.bodyOverflow || '';
                    document.body.style.position = styles.bodyPosition || '';
                    document.body.style.top = styles.bodyTop || '';
                    document.body.style.left = styles.bodyLeft || '';
                    document.body.style.width = styles.bodyWidth || '';
                    document.body.style.height = styles.bodyHeight || '';
                    document.body.style.touchAction = styles.bodyTouchAction || '';

                    // Restore document element
                    document.documentElement.style.overflow = styles.htmlOverflow || '';
                    document.documentElement.style.touchAction = styles.htmlTouchAction || '';

                    // Restore scroll position for Safari
                    if (styles.scrollY !== undefined || styles.scrollX !== undefined) {
                        setTimeout(() => {
                            window.scrollTo(styles.scrollX || 0, styles.scrollY || 0);
                        }, 10);
                    }

                    // Clear stored styles
                    window.originalSectionDragStyles = null;
                }

                // Restore modal content
                if (window.originalModalStyles) {
                    const modalContent = document.querySelector('#songModal .modal-content');
                    if (modalContent) {
                        modalContent.style.overflow = window.originalModalStyles.overflow || '';
                        modalContent.style.touchAction = window.originalModalStyles.touchAction || '';
                    }
                    window.originalModalStyles = null;
                }

                console.log('Section drag scrolling restored on cancel with Safari fixes');
            }

            sectionDraggedElement = null;
            sectionDraggedIndex = null;
            isDragging = false;
            dragStarted = false;
            initialTouch = null;
            touchDelayMet = false;
        }, { passive: true });
    });
}

let sectionDraggedElement = null;
let sectionDraggedIndex = null;
let sectionDragCounter = 0;

function handleSectionDragStart(e) {
    console.log('Section drag start');
    sectionDraggedElement = this;
    sectionDraggedIndex = parseInt(this.getAttribute('data-section-index'));
    sectionDragCounter = 0;

    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);

    // Set drag image
    const dragImage = this.cloneNode(true);
    dragImage.style.transform = 'rotate(2deg) scale(1.02)';
    dragImage.style.opacity = '0.8';
    e.dataTransfer.setDragImage(dragImage, e.offsetX, e.offsetY);
}

function handleSectionDragEnd(e) {
    console.log('Section drag end');
    this.classList.remove('dragging');

    // Clean up all drag-over classes
    document.querySelectorAll('.display-section').forEach(section => {
        section.classList.remove('drag-over');
    });

    sectionDraggedElement = null;
    sectionDraggedIndex = null;
    sectionDragCounter = 0;
}

function handleSectionDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleSectionDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();

    sectionDragCounter++;

    if (this !== sectionDraggedElement && sectionDraggedElement) {
        this.classList.add('drag-over');
    }
}

function handleSectionDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();

    sectionDragCounter--;

    if (sectionDragCounter === 0) {
        this.classList.remove('drag-over');
    }
}

function handleSectionDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log('Section drop triggered');

    if (sectionDraggedElement && sectionDraggedElement !== this) {
        const dropIndex = parseInt(this.getAttribute('data-section-index'));
        const dragIndex = sectionDraggedIndex;

        console.log(`Moving section from index ${dragIndex} to ${dropIndex}`);

        if (dragIndex !== dropIndex && dragIndex >= 0 && dropIndex >= 0) {
            // Reorder the sections in the currentSong object
            const draggedSection = currentSong.sections[dragIndex];
            currentSong.sections.splice(dragIndex, 1);
            currentSong.sections.splice(dropIndex, 0, draggedSection);

            // Update the song in the songs array
            const songIndex = songs.findIndex(song => song.id === currentSong.id);
            if (songIndex !== -1) {
                songs[songIndex] = currentSong;
                autoSave();
            }

            console.log('Section reordered, re-rendering...');
            // Re-render the song display
            displaySong();
        }
    }

    // Clean up
    this.classList.remove('drag-over');
    sectionDragCounter = 0;

    return false;
}

// Close song modal
function closeSongModal() {
    restoreBodyScroll();
    document.getElementById('songModal').style.display = 'none';

    // Only reset currentSong if we're not in lineup mode
    // In lineup mode, we want to keep track of the current song
    if (!lineupMode) {
        currentSong = null;
    }

    // Reset transpose when closing
    currentSemitones = 0;
}

// Toggle remove mode
function toggleRemoveMode() {
    removeMode = !removeMode;
    const btn = document.getElementById('removeBtn');

    if (removeMode) {
        btn.textContent = 'CANCEL';
        btn.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
        document.body.style.cursor = 'not-allowed';
    } else {
        btn.textContent = 'REMOVE';
        btn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
        document.body.style.cursor = 'default';
    }

    // Re-render the song list to show/hide delete indicators
    renderSongList();
}

// === SEARCH BAR — Dynamic dropdown with live filtering (Fix #5) ===
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
})();

// Edit current song
function editCurrentSong() {
    if (!currentSong) return;

    // Find the song index in the main songs array
    const songIndex = songs.findIndex(song => song.id === currentSong.id);
    if (songIndex === -1) return;

    // Store the song index for updating
    window.editingSongIndex = songIndex;

    // Store current song data before closing modal
    const songToEdit = { ...currentSong };

    // Close the song display modal
    document.getElementById('songModal').style.display = 'none';

    // Populate the add modal with current song data
    document.getElementById('songTitle').value = songToEdit.title;
    document.getElementById('songDescription').value = songToEdit.description;

    // Clear existing sections
    document.getElementById('sectionsContainer').innerHTML = '';
    sectionCounters = {};

    // Add existing sections with proper section counting
    songToEdit.sections.forEach((section, index) => {
        const sectionType = section.title.split(' ')[0]; // Get base section type

        if (!sectionCounters[sectionType]) {
            sectionCounters[sectionType] = 1;
        } else {
            sectionCounters[sectionType]++;
        }

        const sectionId = `section_${Date.now()}_${index}`;
        const sectionHtml = `
            <div class="section-item" data-section-id="${sectionId}">
                <div class="section-header">
                    <span class="section-title">${section.title}</span>
                    <button class="remove-section" onclick="removeSection('${sectionId}', '${sectionType}')">×</button>
                </div>
                <div class="chord-input-wrapper">
                    <textarea class="chord-input-section" placeholder="Enter chords for ${section.title}...">${section.chords}</textarea>
                    <div class="chord-suggestions" style="display: none;"></div>
                </div>
            </div>
        `;

        document.getElementById('sectionsContainer').insertAdjacentHTML('beforeend', sectionHtml);

        // Initialize chord suggestions for the new textarea
        const newTextarea = document.querySelector(`[data-section-id="${sectionId}"] .chord-input-section`);
        if (newTextarea) {
            setupChordSuggestions(newTextarea);
        }
    });

    // Change the modal title and button text
    document.querySelector('#addModal .modal-title').textContent = 'Edit Song';
    document.querySelector('#addModal .btn-primary').textContent = 'Update Song';

    // Update the button's onclick handler
    const updateButton = document.querySelector('#addModal .btn-primary');
    updateButton.onclick = function() { updateSong(); };

    // Show the edit modal
    document.getElementById('addModal').style.display = 'block';
}

// Update song function
function updateSong() {
    const title = document.getElementById('songTitle').value.trim();
    const description = document.getElementById('songDescription').value.trim();

    if (!title) {
        alert('Please enter a song title');
        return;
    }

    const sections = [];
    const sectionElements = document.querySelectorAll('.section-item');

    sectionElements.forEach(element => {
        const sectionTitle = element.querySelector('.section-title').textContent;
        const chords = element.querySelector('.chord-input-section').value.trim();

        if (chords) {
            sections.push({
                title: sectionTitle,
                chords: chords
            });
        }
    });

    // Update the existing song
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

    autoSave(); // Auto-save
    renderSongList();
    closeAddModal();

    // Reset the modal for adding new songs
    resetAddModal();

    // Reopen the song display modal with updated content
    displaySong();
    document.getElementById('songModal').style.display = 'block';
}

// Reset add modal to default state
function resetAddModal() {
    document.querySelector('#addModal .modal-title').textContent = 'Add New Song';
    document.querySelector('#addModal .btn-primary').textContent = 'Add Song';
    document.querySelector('#addModal .btn-primary').onclick = addSong;
    window.editingSongIndex = undefined;
}

// Lineup functionality
let lineup = [];
let currentLineupIndex = -1;
let lineupMode = false;
let lineupEditMode = false;

// Lineup songs
function lineupSongs() {
    preventBodyScroll();
    document.getElementById('lineupModal').style.display = 'block';
    renderLineup();
}

// Export songs - Safari/iPad Compatible
function exportSongs() {
    try {
        if (songs.length === 0) {
            alert('No songs to export! Add some songs first.');
            return;
        }

        // Create export data with metadata
        const exportData = {
            version: "1.0",
            exportDate: new Date().toISOString(),
            songCount: songs.length,
            songs: songs
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const fileName = `chords-pro-songs-${new Date().toISOString().split('T')[0]}.json`;

        // Safari/iOS compatible download method
        if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
            // Safari-specific method
            const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
            const link = document.createElement('a');
            link.href = dataUri;
            link.download = fileName;
            link.style.display = 'none';

            // For Safari, we need to add to DOM and trigger click
            document.body.appendChild(link);

            // Use setTimeout to ensure DOM is ready
            setTimeout(() => {
                link.click();
                setTimeout(() => {
                    document.body.removeChild(link);
                }, 100);
            }, 100);

        } else {
            // Standard method for other browsers
            const dataBlob = new Blob([dataStr], {type: 'application/json'});

            // Check if we can use the modern download API
            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                // IE/Edge
                window.navigator.msSaveOrOpenBlob(dataBlob, fileName);
            } else {
                // Modern browsers
                const url = URL.createObjectURL(dataBlob);
                const link = document.createElement('a');
                link.href = url;
                link.download = fileName;
                link.style.display = 'none';

                document.body.appendChild(link);
                link.click();

                // Clean up
                setTimeout(() => {
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                }, 100);
            }
        }

        alert(`Successfully exported ${songs.length} songs!`);

    } catch (error) {
        console.error('Export error:', error);
        alert('Error exporting songs. Please try again.');
    }
}

// Import songs - Fixed for all JSON formats
function importSongs() {
    console.log('Import function called - Fixed version');

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json,text/plain,.txt';
    input.style.display = 'none';

    const handleFileSelect = function(e) {
        console.log('File selection triggered');
        const file = e.target.files[0];

        if (!file) {
            console.log('No file selected');
            cleanup();
            return;
        }

        console.log('File details:', {
            name: file.name,
            type: file.type,
            size: file.size
        });

        // Accept any file that ends with .json or has json mime type
        const fileName = file.name.toLowerCase();
        if (!fileName.endsWith('.json') && !file.type.includes('json') && !fileName.endsWith('.txt')) {
            alert('❌ Please select a .json file');
            cleanup();
            return;
        }

        const reader = new FileReader();

        reader.onload = function(event) {
            try {
                const content = event.target.result;
                console.log('File read successfully, length:', content.length);

                if (!content || content.trim() === '') {
                    alert('❌ File is empty');
                    cleanup();
                    return;
                }

                // Parse JSON
                let data;
                try {
                    data = JSON.parse(content);
                    console.log('JSON parsed successfully');
                } catch (parseError) {
                    console.error('JSON parse error:', parseError);
                    alert('❌ Invalid JSON file. Please check the file format.');
                    cleanup();
                    return;
                }

                // Extract songs from different formats
                let songsToImport = [];

                if (Array.isArray(data)) {
                    // Direct array of songs
                    songsToImport = data;
                    console.log('Format: Direct array, songs:', songsToImport.length);
                } else if (data && data.songs && Array.isArray(data.songs)) {
                    // Wrapped format with songs property
                    songsToImport = data.songs;
                    console.log('Format: Wrapped object, songs:', songsToImport.length);
                } else if (data && data.title && data.sections) {
                    // Single song object
                    songsToImport = [data];
                    console.log('Format: Single song');
                } else {
                    console.error('Unknown format:', data);
                    alert('❌ Unrecognized file format. Expected songs array or single song object.');
                    cleanup();
                    return;
                }

                if (songsToImport.length === 0) {
                    alert('❌ No songs found in file');
                    cleanup();
                    return;
                }

                // Validate and clean songs
                const validSongs = [];

                songsToImport.forEach((song, index) => {
                    // Basic validation
                    if (!song || typeof song !== 'object') {
                        console.log(`Skipping invalid song at index ${index}: not an object`);
                        return;
                    }

                    if (!song.title || typeof song.title !== 'string' || song.title.trim() === '') {
                        console.log(`Skipping song at index ${index}: missing or invalid title`);
                        return;
                    }

                    if (!song.sections || !Array.isArray(song.sections)) {
                        console.log(`Skipping song "${song.title}": missing or invalid sections`);
                        return;
                    }

                    // Validate sections
                    const validSections = song.sections.filter(section => {
                        return section && 
                               typeof section === 'object' && 
                               section.title && 
                               typeof section.title === 'string' && 
                               section.chords && 
                               typeof section.chords === 'string';
                    });

                    if (validSections.length === 0) {
                        console.log(`Skipping song "${song.title}": no valid sections`);
                        return;
                    }

                    // Create clean song object
                    const cleanSong = {
                        id: song.id || Date.now() + Math.random() * 1000 + index,
                        title: song.title.trim(),
                        description: song.description || '',
                        sections: validSections
                    };

                    validSongs.push(cleanSong);
                    console.log(`Valid song added: "${cleanSong.title}" with ${validSections.length} sections`);
                });

                if (validSongs.length === 0) {
                    alert('❌ No valid songs found in file. Please check the file structure.');
                    cleanup();
                    return;
                }

                // Check for duplicates
                const existingTitles = songs.map(s => s.title.toLowerCase());
                const duplicates = validSongs.filter(song => 
                    existingTitles.includes(song.title.toLowerCase())
                );

                let proceed = true;
                if (duplicates.length > 0) {
                    const duplicateNames = duplicates.map(s => s.title).join(', ');
                    proceed = confirm(
                        `⚠️ Found ${duplicates.length} duplicate song(s):\n${duplicateNames}\n\nImport anyway? (They will be added as separate songs)`
                    );
                }

                if (proceed) {
                    // Add songs to the main array
                    const beforeCount = songs.length;
                    songs.push(...validSongs);

                    // Save and refresh
                    saveSongs();
                    renderSongList();

                    const imported = validSongs.length;
                    const skipped = songsToImport.length - validSongs.length;

                    let message = `✅ Successfully imported ${imported} song${imported !== 1 ? 's' : ''}!`;
                    if (skipped > 0) {
                        message += `\n⚠️ ${skipped} invalid song${skipped !== 1 ? 's were' : ' was'} skipped`;
                    }
                    message += `\n📊 Total songs: ${songs.length}`;

                    console.log('Import completed:', {
                        before: beforeCount,
                        imported: imported,
                        skipped: skipped,
                        total: songs.length
                    });

                    alert(message);
                }

            } catch (error) {
                console.error('Import error:', error);
                alert(`❌ Import failed: ${error.message || 'Unknown error'}`);
            }

            cleanup();
        };

        reader.onerror = function() {
            console.error('FileReader error');
            alert('❌ Error reading file. Please try again.');
            cleanup();
        };

        // Read the file
        reader.readAsText(file, 'UTF-8');
    };

    const cleanup = function() {
        if (input && input.parentNode) {
            input.removeEventListener('change', handleFileSelect);
            document.body.removeChild(input);
        }
    };

    // Set up and trigger file picker
    input.addEventListener('change', handleFileSelect);
    document.body.appendChild(input);
    input.click();

    // Cleanup timeout
    setTimeout(() => {
        if (input && input.parentNode && !input.files.length) {
            cleanup();
        }
    }, 30000);
}

// Modal body overflow management - only prevent main body scroll
function preventBodyScroll() {
    // Store current scroll position
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.setAttribute('data-scroll-y', scrollY);
}

function restoreBodyScroll() {
    const scrollY = document.body.getAttribute('data-scroll-y');
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    document.body.removeAttribute('data-scroll-y');
    if (scrollY) {
        window.scrollTo(0, parseInt(scrollY));
    }
}

// Close modals when clicking outside
window.onclick = function(event) {
    const addModal = document.getElementById('addModal');
    const songModal = document.getElementById('songModal');
    const lineupModal = document.getElementById('lineupModal');

    if (event.target === addModal) {
        closeAddModal();
    }
    if (event.target === songModal) {
        closeSongModal();
    }
    if (event.target === lineupModal) {
        closeLineupModal();
    }
}

// Action menu functions
function toggleActionMenu(index, event) {
    event.stopPropagation();
    event.preventDefault();

    const menu = document.getElementById(`actionMenu${index}`);
    const allMenus = document.querySelectorAll('.action-menu');

    // Close all other menus
    allMenus.forEach(m => {
        if (m !== menu) {
            m.classList.remove('show');
        }
    });

    // Toggle current menu
    menu.classList.toggle('show');
}

function exportThisSong(index, event) {
    event.stopPropagation();
    event.preventDefault();

    try {
        const song = songs[index];

        // Create export data with metadata for single song
        const exportData = {
            version: "1.0",
            exportDate: new Date().toISOString(),
            songCount: 1,
            songs: [song]
        };

        const dataStr = JSON.stringify(exportData, null, 2);
        const fileName = `${song.title.replace(/[^a-z0-9\s]/gi, '').replace(/\s+/g, '_').toLowerCase()}.json`;

        // Safari/iOS compatible download method
        if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
            // Safari-specific method
            const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
            const link = document.createElement('a');
            link.href = dataUri;
            link.download = fileName;
            link.style.display = 'none';

            document.body.appendChild(link);

            setTimeout(() => {
                link.click();
                setTimeout(() => {
                    document.body.removeChild(link);
                }, 100);
            }, 100);

        } else {
            // Standard method for other browsers
            const dataBlob = new Blob([dataStr], {type: 'application/json'});

            if (window.navigator && window.navigator.msSaveOrOpenBlob) {
                // IE/Edge
                window.navigator.msSaveOrOpenBlob(dataBlob, fileName);
            } else {
                // Modern browsers
                const url = URL.createObjectURL(dataBlob);
                const link = document.createElement('a');
                link.href = url;
                link.download = fileName;
                link.style.display = 'none';

                document.body.appendChild(link);
                link.click();

                setTimeout(() => {
                    document.body.removeChild(link);
                    URL.revokeObjectURL(url);
                }, 100);
            }
        }

        alert(`Successfully exported "${song.title}"!`);
    } catch (error) {
        console.error('Export error:', error);
        alert('Error exporting song. Please try again.');
    }

    // Close menu
    document.getElementById(`actionMenu${index}`).classList.remove('show');
}

function addToLineup(index, event) {
    event.stopPropagation();
    event.preventDefault();

    const song = songs[index];

    // Check if song is already in lineup
    const existingIndex = lineup.findIndex(item => item.id === song.id);
    if (existingIndex !== -1) {
        alert(`"${song.title}" is already in the lineup!`);
        document.getElementById(`actionMenu${index}`).classList.remove('show');
        return;
    }

    // Add song to lineup
    lineup.push({
        id: song.id,
        title: song.title,
        description: song.description,
        sections: song.sections
    });

    autoSave(); // Auto-save

    // Close menu
    document.getElementById(`actionMenu${index}`).classList.remove('show');

    // Show confirmation
    alert(`"${song.title}" added to lineup!`);
}

// Lineup management functions
function renderLineup() {
    const container = document.getElementById('lineupContainer');
    const countElement = document.getElementById('lineupCount');

    // Update count
    countElement.textContent = lineup.length;

    if (lineup.length === 0) {
        container.innerHTML = `
            <div class="lineup-empty">
                <div class="lineup-empty-icon">🎧</div>
                <p>No songs in lineup yet. Add songs using the "Add to Lineup" button!</p>
            </div>
        `;
        return;
    }

    // CRITICAL: Completely clear container and create fresh elements
    container.innerHTML = '';

    if (lineupMode) {
        // ACTIVE LINEUP MODE - Create completely separate container with zero drag
        const activeContainer = document.createElement('div');
        activeContainer.id = 'activeLineupContainer';
        activeContainer.className = 'active-lineup-container';
        container.appendChild(activeContainer);
        renderActiveLineup();
    } else {
        // EDIT MODE - Create separate container with full drag functionality
        const editContainer = document.createElement('div');
        editContainer.id = 'editLineupContainer';
        editContainer.className = 'edit-lineup-container';
        container.appendChild(editContainer);
        renderEditableLineup();
    }
}

function renderActiveLineup() {
    const container = document.getElementById('activeLineupContainer');
    if (!container) return;

    // CRITICAL: Clear any existing content
    container.innerHTML = '';

    // Create simple, non-draggable lineup items for active mode
    lineup.forEach((song, index) => {
        const lineupItem = document.createElement('div');
        lineupItem.className = 'lineup-item-active';
        lineupItem.setAttribute('data-lineup-index', index);

        // CRITICAL: Explicitly disable all drag properties
        lineupItem.draggable = false;
        lineupItem.style.cursor = 'pointer';
        lineupItem.style.webkitUserDrag = 'none';
        lineupItem.style.khtmlUserDrag = 'none';
        lineupItem.style.mozUserDrag = 'none';
        lineupItem.style.oUserDrag = 'none';
        lineupItem.style.userDrag = 'none';

        lineupItem.innerHTML = `
            <div class="lineup-item-content">
                <div class="lineup-number">${index + 1}</div>
                <div class="lineup-song-info">
                    <div class="lineup-song-title">${song.title}</div>
                    <div class="lineup-song-description">${song.description}</div>
                </div>
            </div>
        `;

        // Only add click handler for navigation - NO drag functionality
        lineupItem.addEventListener('click', function(event) {
            if (lineupMode) {
                // Navigate to this song in the lineup
                currentLineupIndex = index;
                openLineupSong(index);
            }
        });

        // CRITICAL: Prevent any drag events from being attached
        lineupItem.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });

        container.appendChild(lineupItem);
    });
}

function renderEditableLineup() {
    const container = document.getElementById('editLineupContainer');

    // Create draggable lineup items for edit mode
    lineup.forEach((song, index) => {
        const lineupItem = document.createElement('div');
        lineupItem.className = `lineup-item ${lineupEditMode ? 'edit-mode' : ''}`;
        lineupItem.draggable = true;
        lineupItem.setAttribute('data-lineup-index', index);
        lineupItem.setAttribute('data-song-id', song.id);

        // Desktop delay setup for lineup items
        let lineupDesktopDragDelayTimer = null;
        let lineupDesktopDragDelayMet = false;

        lineupItem.addEventListener('mousedown', function(e) {
            lineupDesktopDragDelayMet = false;

            // Clear any existing timer
            if (lineupDesktopDragDelayTimer) {
                clearTimeout(lineupDesktopDragDelayTimer);
            }

            // Start 1-second delay timer for desktop lineup
            lineupDesktopDragDelayTimer = setTimeout(() => {
                lineupDesktopDragDelayMet = true;
                this.setAttribute('data-lineup-delay-met', 'true');
                // Visual feedback when drag becomes available
                this.style.transform = 'scale(1.01)';
                this.style.transition = 'transform 0.1s ease';
            }, 1000);
        });

        lineupItem.addEventListener('mouseup', function(e) {
            // Clear timer and reset
            if (lineupDesktopDragDelayTimer) {
                clearTimeout(lineupDesktopDragDelayTimer);
                lineupDesktopDragDelayTimer = null;
            }
            lineupDesktopDragDelayMet = false;
            this.removeAttribute('data-lineup-delay-met');
            this.style.transform = '';
            this.style.transition = '';
        });

        lineupItem.addEventListener('mouseleave', function(e) {
            // Clear timer when mouse leaves
            if (lineupDesktopDragDelayTimer) {
                clearTimeout(lineupDesktopDragDelayTimer);
                lineupDesktopDragDelayTimer = null;
            }
            lineupDesktopDragDelayMet = false;
            this.removeAttribute('data-lineup-delay-met');
            this.style.transform = '';
            this.style.transition = '';
        });

        lineupItem.innerHTML = `
            <div class="lineup-item-content">
                <div class="lineup-number">${index + 1}</div>
                <div class="lineup-song-info">
                    <div class="lineup-song-title">${song.title}</div>
                    <div class="lineup-song-description">${song.description}</div>
                </div>
            </div>
            <div class="lineup-delete-btn">×</div>
            <div class="lineup-drag-handle">⋮⋮</div>
        `;

        // Add event listeners for edit mode
        const itemContent = lineupItem.querySelector('.lineup-item-content');
        const deleteBtn = lineupItem.querySelector('.lineup-delete-btn');

        itemContent.addEventListener('click', function(event) {
            handleLineupItemClick(index, event);
        });

        deleteBtn.addEventListener('click', function(event) {
            event.stopPropagation();
            event.preventDefault();

            const currentIndex = parseInt(lineupItem.getAttribute('data-lineup-index'));
            if (currentIndex >= 0 && currentIndex < lineup.length) {
                lineup.splice(currentIndex, 1);
                autoSave();
                renderLineup();
            }
        });

        container.appendChild(lineupItem);
    });

    // Only setup drag and drop for editable lineup
    setTimeout(() => {
        setupEditableLineupDragAndDrop();
    }, 100);
}

function handleLineupItemClick(index, event) {
    // Only handle clicks if not in edit mode and not dragging
    if (!lineupEditMode && !lineupDraggedElement) {
        event.stopPropagation();
        // Could add functionality to preview song here if needed
    }
}

function initLineupDrag(event) {
    // This function is no longer needed - drag is handled by the item itself
    // Just prevent default to avoid conflicts
    event.preventDefault();
    event.stopPropagation();
}

// CRITICAL: Enhanced Drag & Drop Scroll Prevention - DO NOT REMOVE OR MODIFY
// This prevents scroll interference during lineup drag operations
let lineupScrollContainer = null;
let originalOverflow = '';
let originalTouchAction = '';
let originalBodyOverflow = '';
let isDragActive = false;

function disableLineupScroll() {
    if (isDragActive) return; // Prevent multiple calls

    isDragActive = true;
    lineupScrollContainer = document.querySelector('#lineupModal .modal-content');

    // Disable modal scroll
    if (lineupScrollContainer) {
        originalOverflow = lineupScrollContainer.style.overflow;
        originalTouchAction = lineupScrollContainer.style.touchAction;
        lineupScrollContainer.style.overflow = 'hidden';
        lineupScrollContainer.style.touchAction = 'none';
    }

    // CRITICAL: Disable body scroll to prevent page scrolling during drag
    originalBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Also disable scroll on html element for extra safety
    document.documentElement.style.overflow = 'hidden';

    console.log('All scrolling disabled for smooth drag');
}

function enableLineupScroll() {
    if (!isDragActive) return; // Prevent multiple calls

    isDragActive = false;

    // Re-enable modal scroll
    if (lineupScrollContainer) {
        lineupScrollContainer.style.overflow = originalOverflow;
        lineupScrollContainer.style.touchAction = originalTouchAction;
        lineupScrollContainer = null;
    }

    // CRITICAL: Re-enable body scroll
    document.body.style.overflow = originalBodyOverflow;
    document.documentElement.style.overflow = '';

    console.log('All scrolling re-enabled');
}

function setupEditableLineupDragAndDrop() {
    // CRITICAL: Only target items in the editable container - never active container
    const editContainer = document.getElementById('editLineupContainer');
    if (!editContainer) {
        console.log('No editable container found - skipping drag setup');
        return;
    }

    const items = editContainer.querySelectorAll('.lineup-item');

    items.forEach((item, index) => {
        // This function only runs for editable lineup items
        item.draggable = true;
        item.style.cursor = 'grab';
        // Desktop drag events
        item.addEventListener('dragstart', function(e) {
            // Check if 2-second delay has been met for desktop lineup
            const lineupDesktopDragDelayMet = this.getAttribute('data-lineup-delay-met') === 'true';
            if (!lineupDesktopDragDelayMet) {
                e.preventDefault();
                return false;
            }
            disableLineupScroll(); // CRITICAL: Disable scroll during drag
            handleLineupDragStart.call(this, e);
        }, false);

        item.addEventListener('dragend', function(e) {
            enableLineupScroll(); // CRITICAL: Re-enable scroll after drag
            handleLineupDragEnd.call(this, e);
        }, false);

        item.addEventListener('dragover', function(e) {
            handleLineupDragOver.call(this, e);
        }, false);

        item.addEventListener('drop', function(e) {
            handleLineupDrop.call(this, e);
        }, false);

        item.addEventListener('dragenter', function(e) {
            handleLineupDragEnter.call(this, e);
        }, false);

        item.addEventListener('dragleave', function(e) {
            handleLineupDragLeave.call(this, e);
        }, false);

        // Enhanced touch events for iOS/Android with comprehensive scroll blocking
        let touchStartY = 0;
        let touchStartX = 0;
        let touchStartTime = 0;
        let isDragging = false;
        let dragStarted = false;
        let initialTouchId = null;
        let originalBodyStyle = {};
        let originalModalStyle = {};
        let originalLineupStyle = {};
        let touchDelayTimer = null;
        let touchDelayMet = false;

        item.addEventListener('touchstart', function(e) {
            // Store the first touch ID to track only this touch
            initialTouchId = e.touches[0].identifier;
            touchStartY = e.touches[0].clientY;
            touchStartX = e.touches[0].clientX;
            touchStartTime = Date.now();
            isDragging = false;
            dragStarted = false;
            touchDelayMet = false;

            // Start 1-second delay timer for touch
            touchDelayTimer = setTimeout(() => {
                touchDelayMet = true;
                // Enhanced visual feedback when delay is met
                this.style.transform = 'scale(1.02)';
                this.style.transition = 'transform 0.2s ease';
            }, 1000);
        }, { passive: true });

        item.addEventListener('touchmove', function(e) {
            // Only handle the original touch
            const currentTouch = Array.from(e.touches).find(touch => touch.identifier === initialTouchId);
            if (!currentTouch) return;

            const touchMoveY = currentTouch.clientY;
            const touchMoveX = currentTouch.clientX;
            const deltaY = Math.abs(touchMoveY - touchStartY);
            const deltaX = Math.abs(touchMoveX - touchStartX);
            const touchDuration = Date.now() - touchStartTime;

            // CRITICAL: Only prevent scroll AFTER 1-second delay is met
            // This allows normal scrolling until drag mode activates
            if (touchDelayMet) {
                // Drag mode is active - prevent all scrolling
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();

                // Additional Safari-specific prevention
                if (e.cancelable) {
                    e.preventDefault();
                }

                // Force prevent any scroll behavior
                if (typeof e.returnValue !== 'undefined') {
                    e.returnValue = false;
                }
            }
            // If delay not met, allow normal scrolling (don't prevent default)

            // Start drag if moved more than 15px vertically, held for 1000ms, more vertical than horizontal movement, AND 1-second delay met
            if (deltaY > 15 && touchDuration > 1000 && touchDelayMet && !dragStarted && deltaY > deltaX * 1.2) {
                dragStarted = true;
                isDragging = true;

                // CRITICAL: Enhanced Safari scroll blocking - Store current scroll position
                const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
                const currentScrollX = window.pageXOffset || document.documentElement.scrollLeft;

                // Store original body styles
                originalBodyStyle = {
                    overflow: document.body.style.overflow,
                    position: document.body.style.position,
                    top: document.body.style.top,
                    left: document.body.style.left,
                    right: document.body.style.right,
                    bottom: document.body.style.bottom,
                    height: document.body.style.height,
                    width: document.body.style.width,
                    touchAction: document.body.style.touchAction,
                    webkitOverflowScrolling: document.body.style.webkitOverflowScrolling,
                    webkitTouchCallout: document.body.style.webkitTouchCallout,
                    webkitUserSelect: document.body.style.webkitUserSelect,
                    userSelect: document.body.style.userSelect,
                    scrollY: currentScrollY,
                    scrollX: currentScrollX
                };

                // Apply comprehensive body scroll blocking with fixed positioning
                document.body.style.overflow = 'hidden';
                document.body.style.position = 'fixed';
                document.body.style.top = `-${currentScrollY}px`;
                document.body.style.left = `-${currentScrollX}px`;
                document.body.style.right = '0';
                document.body.style.bottom = '0';
                document.body.style.height = '100vh';
                document.body.style.width = '100vw';
                document.body.style.touchAction = 'none';
                document.body.style.webkitOverflowScrolling = 'auto';
                document.body.style.webkitTouchCallout = 'none';
                document.body.style.webkitUserSelect = 'none';
                document.body.style.userSelect = 'none';

                // Also block on document element with Safari-specific fixes
                document.documentElement.style.overflow = 'hidden';
                document.documentElement.style.touchAction = 'none';
                document.documentElement.style.webkitOverflowScrolling = 'auto';
                document.documentElement.style.webkitTouchCallout = 'none';
                document.documentElement.style.webkitUserSelect = 'none';
                document.documentElement.style.userSelect = 'none';
                document.documentElement.style.position = 'fixed';
                document.documentElement.style.width = '100%';
                document.documentElement.style.height = '100%';

                // Block lineup modal content scrolling with Safari fixes
                const lineupModalContent = document.querySelector('#lineupModal .modal-content');
                if (lineupModalContent) {
                    originalModalStyle = {
                        overflow: lineupModalContent.style.overflow,
                        touchAction: lineupModalContent.style.touchAction,
                        webkitOverflowScrolling: lineupModalContent.style.webkitOverflowScrolling,
                        webkitTouchCallout: lineupModalContent.style.webkitTouchCallout,
                        webkitUserSelect: lineupModalContent.style.webkitUserSelect,
                        userSelect: lineupModalContent.style.userSelect,
                        position: lineupModalContent.style.position
                    };
                    lineupModalContent.style.overflow = 'hidden';
                    lineupModalContent.style.touchAction = 'none';
                    lineupModalContent.style.webkitOverflowScrolling = 'auto';
                    lineupModalContent.style.webkitTouchCallout = 'none';
                    lineupModalContent.style.webkitUserSelect = 'none';
                    lineupModalContent.style.userSelect = 'none';
                    lineupModalContent.style.position = 'relative';
                }

                // Block lineup container scrolling with Safari fixes
                const lineupContainer = document.getElementById('lineupContainer');
                if (lineupContainer) {
                    originalLineupStyle = {
                        overflow: lineupContainer.style.overflow,
                        touchAction: lineupContainer.style.touchAction,
                        webkitOverflowScrolling: lineupContainer.style.webkitOverflowScrolling,
                        webkitTouchCallout: lineupContainer.style.webkitTouchCallout,
                        webkitUserSelect: lineupContainer.style.webkitUserSelect,
                        userSelect: lineupContainer.style.userSelect,
                        position: lineupContainer.style.position
                    };
                    lineupContainer.style.overflow = 'hidden';
                    lineupContainer.style.touchAction = 'none';
                    lineupContainer.style.webkitOverflowScrolling = 'auto';
                    lineupContainer.style.webkitTouchCallout = 'none';
                    lineupContainer.style.webkitUserSelect = 'none';
                    lineupContainer.style.userSelect = 'none';
                    lineupContainer.style.position = 'relative';
                }

                // Start drag mode
                lineupDraggedElement = this;
                lineupDraggedIndex = parseInt(this.getAttribute('data-lineup-index'));

                this.classList.add('dragging');
                this.style.transform = 'scale(1.03) rotate(2deg)';
                this.style.zIndex = '1000';
                this.style.opacity = '0.8';
                this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.35)';

                console.log('Safari/iOS lineup drag started with enhanced scroll blocking:', lineupDraggedIndex);
            }

            if (isDragging) {
                // Find element under touch point
                const elementBelow = document.elementFromPoint(currentTouch.clientX, currentTouch.clientY);
                const targetItem = elementBelow ? elementBelow.closest('.lineup-item') : null;

                // Update drag over states
                document.querySelectorAll('.lineup-item').forEach(s => {
                    s.classList.remove('drag-over');
                });

                if (targetItem && targetItem !== lineupDraggedElement) {
                    targetItem.classList.add('drag-over');
                }
            }

            return false; // Additional Safari prevention
        }, { passive: false });

        item.addEventListener('touchend', function(e) {
            // Only handle if this was the original touch
            if (initialTouchId !== null && !Array.from(e.changedTouches).find(touch => touch.identifier === initialTouchId)) {
                return;
            }

            // Clear delay timer
            if (touchDelayTimer) {
                clearTimeout(touchDelayTimer);
                touchDelayTimer = null;
            }

            this.style.transform = '';
            this.style.transition = '';
            this.style.zIndex = '';
            this.style.opacity = '';
            this.style.boxShadow = '';

            if (isDragging && dragStarted) {
                e.preventDefault();
                e.stopPropagation();

                // Find drop target using the last known touch position
                const changedTouch = Array.from(e.changedTouches).find(touch => touch.identifier === initialTouchId);
                if (changedTouch) {
                    const elementBelow = document.elementFromPoint(changedTouch.clientX, changedTouch.clientY);
                    const dropTarget = elementBelow ? elementBelow.closest('.lineup-item') : null;

                    if (dropTarget && dropTarget !== lineupDraggedElement) {
                        const dropIndex = parseInt(dropTarget.getAttribute('data-lineup-index'));

                        console.log(`iOS/Android lineup drop: moving from ${lineupDraggedIndex} to ${dropIndex}`);

                        // Perform the reorder
                        if (lineupDraggedIndex !== dropIndex && lineupDraggedIndex >= 0 && dropIndex >= 0) {
                            const draggedItem = lineup[lineupDraggedIndex];
                            lineup.splice(lineupDraggedIndex, 1);
                            lineup.splice(dropIndex, 0, draggedItem);

                            autoSave();

                            // Re-render the lineup
                            renderLineup();
                        }
                    }
                }

                // Clean up
                this.classList.remove('dragging');
                document.querySelectorAll('.lineup-item').forEach(s => {
                    s.classList.remove('drag-over');
                });

                lineupDraggedElement = null;
                lineupDraggedIndex = null;
            }

            // CRITICAL: Always restore scrolling after touch ends with Safari fixes
            if (isDragging || dragStarted) {
                // Restore body styles with scroll position
                Object.keys(originalBodyStyle).forEach(key => {
                    if (key === 'scrollY' || key === 'scrollX') return; // Skip scroll position keys

                    if (originalBodyStyle[key]) {
                        document.body.style[key] = originalBodyStyle[key];
                    } else {
                        document.body.style[key] = '';
                    }
                });

                // Restore document element with Safari fixes
                document.documentElement.style.overflow = '';
                document.documentElement.style.touchAction = '';
                document.documentElement.style.webkitOverflowScrolling = '';
                document.documentElement.style.webkitTouchCallout = '';
                document.documentElement.style.webkitUserSelect = '';
                document.documentElement.style.userSelect = '';
                document.documentElement.style.position = '';
                document.documentElement.style.width = '';
                document.documentElement.style.height = '';

                // Restore scroll position for Safari
                if (originalBodyStyle.scrollY !== undefined || originalBodyStyle.scrollX !== undefined) {
                    setTimeout(() => {
                        window.scrollTo(
                            originalBodyStyle.scrollX || 0, 
                            originalBodyStyle.scrollY || 0
                        );
                    }, 10);
                }

                // Restore modal content with Safari fixes
                const lineupModalContent = document.querySelector('#lineupModal .modal-content');
                if (lineupModalContent && originalModalStyle) {
                    Object.keys(originalModalStyle).forEach(key => {
                        if (originalModalStyle[key]) {
                            lineupModalContent.style[key] = originalModalStyle[key];
                        } else {
                            lineupModalContent.style[key] = '';
                        }
                    });
                }

                // Restore lineup container with Safari fixes
                const lineupContainer = document.getElementById('lineupContainer');
                if (lineupContainer && originalLineupStyle) {
                    Object.keys(originalLineupStyle).forEach(key => {
                        if (originalLineupStyle[key]) {
                            lineupContainer.style[key] = originalLineupStyle[key];
                        } else {
                            lineupContainer.style[key] = '';
                        }
                    });
                }

                console.log('Safari/iOS lineup scrolling restored with position fix');
            }

            // Reset all variables
            isDragging = false;
            dragStarted = false;
            initialTouchId = null;
            touchDelayMet = false;
            originalBodyStyle = {};
            originalModalStyle = {};
            originalLineupStyle = {};
        }, { passive: false });

        // CRITICAL: Handle touch cancel to ensure cleanup
        item.addEventListener('touchcancel', function(e) {
            // Clear delay timer
            if (touchDelayTimer) {
                clearTimeout(touchDelayTimer);
                touchDelayTimer = null;
            }

            this.style.transform = '';
            this.style.transition = '';
            this.style.zIndex = '';
            this.style.opacity = '';
            this.style.boxShadow = '';

            // Clean up drag state
            this.classList.remove('dragging');
            document.querySelectorAll('.lineup-item').forEach(s => {
                s.classList.remove('drag-over');
            });

            lineupDraggedElement = null;
            lineupDraggedIndex = null;

            // Restore scrolling with Safari fixes
            if (isDragging || dragStarted) {
                Object.keys(originalBodyStyle).forEach(key => {
                    if (key === 'scrollY' || key === 'scrollX') return; // Skip scroll position keys

                    if (originalBodyStyle[key]) {
                        document.body.style[key] = originalBodyStyle[key];
                    } else {
                        document.body.style[key] = '';
                    }
                });

                // Restore document element with Safari fixes
                document.documentElement.style.overflow = '';
                document.documentElement.style.touchAction = '';
                document.documentElement.style.webkitOverflowScrolling = '';
                document.documentElement.style.webkitTouchCallout = '';
                document.documentElement.style.webkitUserSelect = '';
                document.documentElement.style.userSelect = '';
                document.documentElement.style.position = '';
                document.documentElement.style.width = '';
                document.documentElement.style.height = '';

                // Restore scroll position for Safari
                if (originalBodyStyle.scrollY !== undefined || originalBodyStyle.scrollX !== undefined) {
                    setTimeout(() => {
                        window.scrollTo(
                            originalBodyStyle.scrollX || 0, 
                            originalBodyStyle.scrollY || 0
                        );
                    }, 10);
                }

                const lineupModalContent = document.querySelector('#lineupModal .modal-content');
                if (lineupModalContent && originalModalStyle) {
                    Object.keys(originalModalStyle).forEach(key => {
                        if (originalModalStyle[key]) {
                            lineupModalContent.style[key] = originalModalStyle[key];
                        } else {
                            lineupModalContent.style[key] = '';
                        }
                    });
                }

                const lineupContainer = document.getElementById('lineupContainer');
                if (lineupContainer && originalLineupStyle) {
                    Object.keys(originalLineupStyle).forEach(key => {
                        if (originalLineupStyle[key]) {
                            lineupContainer.style[key] = originalLineupStyle[key];
                        } else {
                            lineupContainer.style[key] = '';
                        }
                    });
                }
            }

            isDragging = false;
            dragStarted = false;
            initialTouchId = null;
            touchDelayMet = false;
            originalBodyStyle = {};
            originalModalStyle = {};
            originalLineupStyle = {};
        }, { passive: false });

        // Event handlers are now managed in renderLineup() to avoid conflicts
    });
}

let lineupDraggedElement = null;
let lineupDraggedIndex = null;
let lineupDragCounter = 0;



function handleLineupDragStart(e) {
    // Check if 1-second delay has been met for desktop lineup
    const lineupDesktopDragDelayMet = this.getAttribute('data-lineup-delay-met') === 'true';
    if (!lineupDesktopDragDelayMet) {
        e.preventDefault();
        return false;
    }

    console.log('Lineup drag start');
    lineupDraggedElement = this;
    lineupDraggedIndex = parseInt(this.getAttribute('data-lineup-index'));
    lineupDragCounter = 0;

    this.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);

    // Set drag image
    const dragImage = this.cloneNode(true);
    dragImage.style.transform = 'rotate(2deg)';
    dragImage.style.opacity = '0.8';
    e.dataTransfer.setDragImage(dragImage, e.offsetX, e.offsetY);
}

function handleLineupDragEnd(e) {
    console.log('Lineup drag end');
    this.classList.remove('dragging');

    // Clean up all drag-over classes
    document.querySelectorAll('.lineup-item').forEach(item => {
        item.classList.remove('drag-over');
    });

    lineupDraggedElement = null;
    lineupDraggedIndex = null;
    lineupDragCounter = 0;
}

function handleLineupDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function handleLineupDragEnter(e) {
    e.preventDefault();
    e.stopPropagation();

    lineupDragCounter++;

    if (this !== lineupDraggedElement && lineupDraggedElement) {
        this.classList.add('drag-over');
    }
}

function handleLineupDragLeave(e) {
    e.preventDefault();
    e.stopPropagation();

    lineupDragCounter--;

    if (lineupDragCounter === 0) {
        this.classList.remove('drag-over');
    }
}

function handleLineupDrop(e) {
    e.preventDefault();
    e.stopPropagation();

    console.log('Lineup drop triggered');

    if (lineupDraggedElement && lineupDraggedElement !== this) {
        const dropIndex = parseInt(this.getAttribute('data-lineup-index'));
        const dragIndex = lineupDraggedIndex;

        console.log(`Moving from index ${dragIndex} to ${dropIndex}`);

        if (dragIndex !== dropIndex && dragIndex >= 0 && dropIndex >= 0) {
            // Reorder lineup array
            const draggedSong = lineup[dragIndex];
            lineup.splice(dragIndex, 1);
            lineup.splice(dropIndex, 0, draggedSong);

            console.log('Lineup reordered, saving...');
            autoSave();

            // Re-render lineup
            renderLineup();
        }
    }

    // Clean up
    this.classList.remove('drag-over');
    lineupDragCounter = 0;

    return false;
}

function editLineup() {
    lineupEditMode = !lineupEditMode;
    const editBtn = document.getElementById('editLineupBtn');

    if (editBtn) {
        if (lineupEditMode) {
            editBtn.textContent = 'Done';
            editBtn.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
        } else {
            editBtn.textContent = 'Edit';
            editBtn.style.background = 'linear-gradient(135deg, #8b5cf6, #6366f1)';
        }
    }

    console.log('Edit mode toggled:', lineupEditMode, 'Lineup length:', lineup.length);
    renderLineup();
}

// removeFromLineup function is now handled directly in renderLineup() to avoid closure issues

function startLineup() {
    console.log('Starting lineup. Lineup length:', lineup.length);

    if (!Array.isArray(lineup) || lineup.length === 0) {
        alert('Add some songs to the lineup first!');
        return;
    }

    // Validate that we have valid songs in the lineup
    const validSongs = lineup.filter(song => song && song.title && song.sections);
    if (validSongs.length === 0) {
        alert('No valid songs in lineup. Please add some songs first!');
        return;
    }

    // Update lineup with only valid songs
    if (validSongs.length !== lineup.length) {
        lineup = validSongs;
        autoSave();
        console.log('Cleaned up lineup. Valid songs:', validSongs.length);
    }

    // Set lineup mode
    lineupMode = true;
    currentLineupIndex = 0;
    lineupEditMode = false;

    // Reset edit button state
    const editBtn = document.getElementById('editLineupBtn');
    if (editBtn) {
        editBtn.textContent = 'Edit';
        editBtn.style.background = 'linear-gradient(135deg, #8b5cf6, #6366f1)';
    }

    // SEAMLESS TRANSITION FIX: Prepare song modal first, then close lineup modal
    const lineupSong = lineup[0];
    if (!lineupSong || !lineupSong.title) {
        console.error('Invalid first song in lineup');
        return;
    }

    // Set current song from lineup
    currentSong = lineupSong;
    currentSemitones = 0;

    // CRITICAL: Use lineup-specific display function with zero drag
    displayLineupSong();

    // Update modal footer for lineup mode
    const footer = document.querySelector('#songModal .modal-footer');
    footer.innerHTML = `
        <button class="btn-modal btn-primary" onclick="prevLineupSong()" id="prevLineupBtn" style="opacity: 0.5; cursor: not-allowed;">Prev Lineup</button>
        <button class="btn-modal btn-primary" onclick="nextLineupSong()" id="nextLineupBtn">${lineup.length === 1 ? 'Finish Lineup' : 'Next Lineup'}</button>
        <button class="btn-modal btn-secondary" onclick="exitLineupMode()">Exit Lineup</button>
    `;

    // Now seamlessly transition: close lineup modal and immediately show song modal
    document.getElementById('lineupModal').style.display = 'none';
    document.getElementById('songModal').style.display = 'block';

    // Body scroll is already prevented from lineup modal, so no flash occurs
    console.log('Seamless transition to lineup song:', 0, 'Title:', lineupSong.title);
}

function openLineupSong(index) {
    // Validate lineup and index
    if (!Array.isArray(lineup) || lineup.length === 0) {
        console.error('Lineup is empty or invalid');
        showLineupComplete();
        return;
    }

    if (index >= lineup.length || index < 0) {
        console.error('Invalid lineup index:', index, 'Lineup length:', lineup.length);
        showLineupComplete();
        return;
    }

    // Ensure we have a valid song at this index
    const lineupSong = lineup[index];
    if (!lineupSong || !lineupSong.title) {
        console.error('Invalid song at lineup index:', index);
        showLineupComplete();
        return;
    }

    // Set current song from lineup (not from main songs array)
    currentSong = lineupSong;
    currentSemitones = 0;
    currentLineupIndex = index;

    console.log('Opening lineup song:', index, 'Title:', lineupSong.title);

    // CRITICAL: Use lineup-specific display with zero drag
    displayLineupSong();

    // Update modal footer for lineup mode with proper navigation
    const footer = document.querySelector('#songModal .modal-footer');
    footer.innerHTML = `
        <button class="btn-modal btn-primary" onclick="prevLineupSong()" id="prevLineupBtn" ${index === 0 ? 'style="opacity: 0.5; cursor: not-allowed;"' : ''}>Prev Lineup</button>
        <button class="btn-modal btn-primary" onclick="nextLineupSong()" id="nextLineupBtn">${index === lineup.length - 1 ? 'Finish Lineup' : 'Next Lineup'}</button>
        <button class="btn-modal btn-secondary" onclick="exitLineupMode()">Exit Lineup</button>
    `;

    preventBodyScroll();
    document.getElementById('songModal').style.display = 'block';
}

function nextLineupSong() {
    if (currentLineupIndex < lineup.length - 1) {
        currentLineupIndex++;
        // CRITICAL: Use lineup-specific display
        currentSong = lineup[currentLineupIndex];
        currentSemitones = 0;
        displayLineupSong();

        // Update footer buttons
        const footer = document.querySelector('#songModal .modal-footer');
        footer.innerHTML = `
            <button class="btn-modal btn-primary" onclick="prevLineupSong()" id="prevLineupBtn">Prev Lineup</button>
            <button class="btn-modal btn-primary" onclick="nextLineupSong()" id="nextLineupBtn">${currentLineupIndex === lineup.length - 1 ? 'Finish Lineup' : 'Next Lineup'}</button>
            <button class="btn-modal btn-secondary" onclick="exitLineupMode()">Exit Lineup</button>
        `;
    } else {
        // Show completion
        showLineupComplete();
    }
}

function prevLineupSong() {
    if (currentLineupIndex > 0) {
        currentLineupIndex--;
        // CRITICAL: Use lineup-specific display
        currentSong = lineup[currentLineupIndex];
        currentSemitones = 0;
        displayLineupSong();

        // Update footer buttons
        const footer = document.querySelector('#songModal .modal-footer');
        footer.innerHTML = `
            <button class="btn-modal btn-primary" onclick="prevLineupSong()" id="prevLineupBtn" ${currentLineupIndex === 0 ? 'style="opacity: 0.5; cursor: not-allowed;"' : ''}>Prev Lineup</button>
            <button class="btn-modal btn-primary" onclick="nextLineupSong()" id="nextLineupBtn">${currentLineupIndex === lineup.length - 1 ? 'Finish Lineup' : 'Next Lineup'}</button>
            <button class="btn-modal btn-secondary" onclick="exitLineupMode()">Exit Lineup</button>
        `;
    }
}

function showLineupComplete() {
    document.getElementById('songModal').style.display = 'none';

    const container = document.getElementById('lineupContainer');
    container.innerHTML = `
        <div class="lineup-complete">
            <div class="lineup-complete-icon">🎉</div>
            <div class="lineup-complete-title">Lineup Complete!</div>
            <div class="lineup-complete-message">Well done! You've finished all songs in the lineup.</div>
        </div>
    `;

    // Update footer for completion
    const footer = document.getElementById('lineupFooter');
    footer.innerHTML = `
        <button class="btn-modal btn-primary" onclick="restartLineup()">Restart Lineup</button>
        <button class="btn-modal btn-secondary" onclick="closeLineupModal()">Close</button>
    `;

    // Ensure lineup modal is properly displayed
    const lineupModal = document.getElementById('lineupModal');
    lineupModal.style.display = 'block';

    // Force reflow to ensure proper positioning
    lineupModal.offsetHeight;

    // Reset lineup mode
    lineupMode = false;
    currentLineupIndex = -1;
}

function restartLineup() {
    // Reset lineup mode variables
    lineupMode = false;
    currentLineupIndex = -1;
    lineupEditMode = false;

    // Reset footer
    const footer = document.getElementById('lineupFooter');
    footer.innerHTML = `
        <button class="btn-modal btn-primary" onclick="editLineup()" id="editLineupBtn">Edit</button>
        <button class="btn-modal btn-primary" onclick="startLineup()" id="startLineupBtn">Start the Lineup</button>
        <button class="btn-modal btn-secondary" onclick="closeLineupModal()">Close</button>
    `;

    // Re-render the lineup properly
    renderLineup();

    // Ensure modal stays visible and properly positioned
    const lineupModal = document.getElementById('lineupModal');
    lineupModal.style.display = 'block';
    lineupModal.offsetHeight; // Force reflow
}

function exitLineupMode() {
    console.log('Exiting lineup mode');

    // Reset lineup mode variables
    lineupMode = false;
    currentLineupIndex = -1;
    currentSong = null;

    // Close the song modal completely
    closeSongModal();

    // Reopen the lineup modal to show the lineup list
    setTimeout(() => {
        document.getElementById('lineupModal').style.display = 'block';
        preventBodyScroll();
        renderLineup(); // Refresh the lineup display
    }, 100);
}

function closeLineupModal() {
    restoreBodyScroll();
    document.getElementById('lineupModal').style.display = 'none';
    lineupEditMode = false;

    // Reset edit button
    const editBtn = document.getElementById('editLineupBtn');
    if (editBtn) {
        editBtn.textContent = 'Edit';
        editBtn.style.background = 'linear-gradient(135deg, #8b5cf6, #6366f1)';
    }
}

// Close action menus when clicking outside
document.addEventListener('click', function(event) {
    if (!event.target.closest('.action-menu-trigger')) {
        document.querySelectorAll('.action-menu').forEach(menu => {
            menu.classList.remove('show');
        });
    }
});

// Auto-save functionality with validation
function autoSave() {
    try {
        saveSongs();
        // Validate lineup before saving
        const validLineup = lineup.filter(song => song && song.id && song.title);
        localStorage.setItem('chordsLineup', JSON.stringify(validLineup));
        console.log('Auto-save completed. Lineup length:', validLineup.length);
    } catch (error) {
        console.error('Auto-save failed:', error);
    }
}

// Load lineup from localStorage with validation
function loadLineup() {
    try {
        const savedLineup = localStorage.getItem('chordsLineup');
        if (savedLineup) {
            const parsedLineup = JSON.parse(savedLineup);
            // Validate loaded lineup
            lineup = Array.isArray(parsedLineup) ? parsedLineup.filter(song => song && song.id && song.title) : [];
            console.log('Lineup loaded. Length:', lineup.length);
        } else {
            lineup = [];
        }
    } catch (error) {
        console.error('Failed to load lineup:', error);
        lineup = [];
    }
}

// Enhanced save function with auto-save
function saveSongs() {
    localStorage.setItem('chordsSongs', JSON.stringify(songs));
    // Auto-save lineup as well
    localStorage.setItem('chordsLineup', JSON.stringify(lineup));
}

// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// Disable F12, Ctrl+Shift+I, Ctrl+U, Ctrl+Shift+C
document.addEventListener('keydown', function(e) {
    // F12
    if (e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    // Ctrl+Shift+I (Developer Tools)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        return false;
    }
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        return false;
    }
    // Ctrl+Shift+C (Inspect Element)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        e.preventDefault();
        return false;
    }
    // Ctrl+Shift+K (Console)
    if (e.ctrlKey && e.shiftKey && e.keyCode === 75) {
        e.preventDefault();
        return false;
    }
});

// Disable text selection on specific elements
document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
});

// Disable drag and drop of images/text (except our custom drag functionality)
document.addEventListener('dragstart', function(e) {
    if (!e.target.classList.contains('display-section') && 
        !e.target.classList.contains('lineup-item') &&
        !e.target.closest('.display-section') &&
        !e.target.closest('.lineup-item')) {
        e.preventDefault();
        return false;
    }
});

// Enhanced Service Worker Registration with Force Update
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js', {
            updateViaCache: 'none' // Always check for updates
        })
        .then(registration => {
            console.log('SW registered: ', registration);

            // Force immediate update check
            registration.update();

            // Check for updates more frequently for development
            const updateInterval = setInterval(() => {
                registration.update().then(() => {
                    console.log('Update check completed');
                });
            }, 5000); // Check every 5 seconds

            // Listen for updates
            registration.addEventListener('updatefound', () => {
                console.log('New service worker found, installing...');
                const newWorker = registration.installing;

                newWorker.addEventListener('statechange', () => {
                    console.log('New SW state:', newWorker.state);

                    if (newWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // New update available - force update immediately
                            console.log('New version available, updating now...');

                            // Skip waiting and take control immediately
                            newWorker.postMessage({ type: 'SKIP_WAITING' });

                            // Force reload after a very short delay
                            setTimeout(() => {
                                console.log('Reloading to apply update...');
                                window.location.reload(true); // Hard reload
                            }, 500);
                        } else {
                            // First install
                            console.log('App installed and ready to use offline');
                        }
                    }
                });
            });

            // Listen for controller change (when new SW takes over)
            navigator.serviceWorker.addEventListener('controllerchange', () => {
                console.log('New service worker activated, reloading page...');
                window.location.reload(true); // Hard reload
            });

            // Handle messages from service worker
            navigator.serviceWorker.addEventListener('message', event => {
                if (event.data && event.data.type === 'RELOAD_PAGE') {
                    console.log('Service worker requested page reload');
                    window.location.reload(true);
                }
            });

            // Force update on focus (when user returns to app)
            window.addEventListener('focus', () => {
                console.log('App focused, checking for updates...');
                registration.update();
            });

            // Force update on visibility change
            document.addEventListener('visibilitychange', () => {
                if (!document.hidden) {
                    console.log('App visible, checking for updates...');
                    registration.update();
                }
            });

        })
        .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
    });

    // Additional force update function for manual triggering
    window.forceAppUpdate = function() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(registrations => {
                registrations.forEach(registration => {
                    registration.unregister().then(() => {
                        console.log('Service worker unregistered, reloading...');
                        window.location.reload(true);
                    });
                });
            });
        }
    };
}

// Auto-update functions (no user notification needed)
function forceUpdate() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistration().then(registration => {
            if (registration && registration.waiting) {
                registration.waiting.postMessage({ type: 'SKIP_WAITING' });
                window.location.reload();
            }
        });
    }
}

// App version tracking for updates
const APP_VERSION = '2.1.0';

function checkAppVersion() {
    const savedVersion = localStorage.getItem('appVersion');
    if (savedVersion !== APP_VERSION) {
        console.log(`App updated from ${savedVersion || 'unknown'} to ${APP_VERSION}`);
        localStorage.setItem('appVersion', APP_VERSION);

        // Clear any cached data that might cause issues
        if ('caches' in window) {
            caches.keys().then(names => {
                names.forEach(name => {
                    caches.delete(name);
                });
            });
        }

        // Force a hard reload if this is an update
        if (savedVersion && savedVersion !== APP_VERSION) {
            setTimeout(() => {
                window.location.reload(true);
            }, 1000);
        }
    }
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    // Check app version first
    checkAppVersion();

    loadSongs();
    loadLineup();

    // Add event listener for section dropdown
    // Fix #7: iOS keeps the dropdown focused after the first selection, so subsequent
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
})();

    // Initialize chord suggestions
    initializeChordSuggestions();

    // Check screen size on load and resize
    function checkScreenSize() {
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
    }

    // Check on load
    checkScreenSize();

    // Check on resize
    window.addEventListener('resize', checkScreenSize);

    // Add debug info for iPad Pro
    const isIPad = /iPad/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    if (isIPad) {
        console.log('iPad Pro detected - Enhanced touch support enabled');
        console.log('Screen dimensions:', window.innerWidth, 'x', window.innerHeight);
        console.log('Device pixel ratio:', window.devicePixelRatio);
        console.log('App version:', APP_VERSION);
    }
});


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
