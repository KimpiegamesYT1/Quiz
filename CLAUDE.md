# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

QuizIt — a static, dependency-free quiz platform in Dutch. No build step, no package manager, no framework: plain HTML/CSS/JS served directly. Live at https://kimpiegamesyt1.github.io/Quiz/.

## Running locally

There is no build/lint/test tooling. Serve the folder with any static file server and open in a browser, e.g.:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/index.html`. Opening the HTML files via `file://` will break the `fetch()` calls to the JSON quiz files (CORS), so a local server is required.

## Architecture

- [index.html](index.html) — quiz picker. On load, `loadQuizList()` in [js/app.js](js/app.js) fetches [quizzes/quizzes.json](quizzes/quizzes.json) and renders a card per quiz.
- [quiz.html](quiz.html) — the quiz runner, reused for every quiz. It reads `?id=<quizId>` from the URL, looks that id up in `quizzes/quizzes.json` to find the quiz's JSON file, then fetches and plays that quiz. All quiz logic (question flow, scoring, exam mode, IQ mode) lives in the single [js/app.js](js/app.js) — there is one shared JS file for the whole site, not one per quiz.
- [quizzes/quizzes.json](quizzes/quizzes.json) — the registry of quizzes. Each entry: `id`, `title`, `file` (path to the quiz's JSON), `description`, `subtitle` (shown as a badge on the index card and as the subtitle on the quiz start screen), optional `year`/`quarter` (numbers — sort order within a group on the index page: highest `year` first, then `quarter` ascending), optional `group` (index-page section heading; entries with no `group` fall under "Examens oefenen"). **Adding a new quiz means adding an entry here plus creating the quiz JSON file** — see README.md for the (Dutch) contributor-facing version of this.
- `quizzes/*.json` — one file per quiz, each with `title` and `categories`. Two supported shapes for a category, handled in `loadQuiz()`:
  - New/preferred: `{ id, name, questions: [...] }` — questions live inside the category.
  - Old/flat: quiz has a top-level `questions` array, and categories reference a slice via `{ id, name, start, end }` (indices into that array). Kept for backward compatibility; prefer the nested shape for new quizzes.
  - A category `id: "all"` is auto-populated with every question across categories.
- Question object shape: `{ question, options: [...], correct: <index>, explanation, image?, section?, points? }`. `image` (optional) shows an image next to the question and opens in the lightbox on click.

### Quiz modes (all driven by `js/app.js`, no separate code paths per quiz file)

- **Practice mode** (default): immediate right/wrong feedback with explanation after each answer.
- **Exam mode**: triggered when a category's `id` contains the substring `"examen"` (case-insensitive). No per-question feedback; score, a calculated grade (`calculateGrade()`, Dutch 1–10 scale, pass at 5.5), and a full answer review are shown at the end.
- **IQ mode**: triggered when the quiz JSON has `"mode": "iq"`. Skips the category-selection screen and starts immediately (only single-category IQ quizzes are supported this way). Scoring is points-based (`points` per question, default 1) against `totalPoints` on the quiz object, mapped to an IQ band via `getIQInfo()`. See [quizzes/iq-test.json](quizzes/iq-test.json) for the shape (each question has `section` and `points`).

### Notable UI/UX details in `js/app.js`

- Keyboard support: A–E select an option, Enter advances (`Controleer`/`Volgende`), wired via a single `keydown` listener guarded on the quiz screen being visible.
- Lightbox for question images (`openLightbox`/`closeLightbox`), closable via Escape.
- Easter egg: typing "pacman" anywhere on the site opens a self-contained canvas-based Pac-Man clone (`openPacmanGame`/`initPacmanGame`), entirely implemented inline in `app.js`. Treat this as isolated/self-contained code — it does not interact with quiz state.
- `quiz.html` loads `js/app.js` with a cache-busting query string (`?v=...`); bump that version string when shipping changes to `app.js` so GitHub Pages doesn't serve a stale cached copy.

## Content notes

- All user-facing strings and quiz content are in Dutch.
- `data_training/` holds source study material (e.g. exam weighting/topic breakdowns) used as reference when authoring quiz questions for a subject — it is not loaded by the app at runtime.
- `quizzes/Assets/` holds images referenced by questions via their `image` field.
