#!/usr/bin/env python3
"""Extract CSS / JS / HTML sections from the monolithic index.html."""
from pathlib import Path

src = Path('/app/uploads/index.html').read_text(encoding='utf-8')
lines = src.splitlines(keepends=True)

# Indices are 0-based but the grep was 1-based
# CSS: between <style> (line 30) and </style> (line 2491) -> 0-based 30..2490 (exclusive end)
css_content = ''.join(lines[30:2490])

# Token verification script: lines 2538..2708 -> 2538..2708 (exclusive end at </script>)
token_script = ''.join(lines[2538:2707])

# Body main markup (after token verification overlay): lines 2724 to 2875 (exclusive end at <script>)
body_markup = ''.join(lines[2724:2875])

# Token verification overlay markup: lines 2508..2536 (the div block)
token_overlay = ''.join(lines[2508:2536])

# Main JS: lines 2877..6372 (exclusive of <script> open and </script> close)
main_js = ''.join(lines[2877:6372])

# Patches:
patches_js1 = ''.join(lines[6376:6457])   # auto-grow patch
patches_js2 = ''.join(lines[6461:6525])   # iOS modal scroll
patches_js3 = ''.join(lines[6531:6575])   # iOS update single-tap

out = Path('/app/uploads/extracted')
out.mkdir(exist_ok=True)
(out / 'styles.css').write_text(css_content, encoding='utf-8')
(out / 'token-verify.js').write_text(token_script, encoding='utf-8')
(out / 'token-overlay.html').write_text(token_overlay, encoding='utf-8')
(out / 'body.html').write_text(body_markup, encoding='utf-8')
(out / 'app.js').write_text(main_js, encoding='utf-8')
(out / 'patches.js').write_text(patches_js1 + '\n' + patches_js2 + '\n' + patches_js3, encoding='utf-8')

print('Sizes:')
for f in sorted(out.iterdir()):
    print(f' {f.name}: {f.stat().st_size} bytes / {sum(1 for _ in open(f))} lines')
