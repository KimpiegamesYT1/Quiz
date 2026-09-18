# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

QuizIt — a static, dependency-free quiz platform in Dutch. No build step, no package manager, no framework: plain HTML/CSS/JS served directly. Live at https://kimpiegamesyt1.github.io/Quiz/.

## Running locally

There is no build/lint tooling for the site itself. Serve the folder with any static file server and open in a browser, e.g.:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/index.html`. Opening the HTML files via `file://` will break the `fetch()` calls to the JSON quiz files (CORS), so a local server is required.

## Testing

A Node.js/Playwright test toolchain exists under `tests/` for verifying the site — this is
dev-only tooling and doesn't affect how the site is served or deployed (GitHub Pages still
serves the plain files directly, no build output involved):

```bash
npm install
npx playwright install chromium
npm test
```

- `npm run test:data` — dependency-free `node:test` checks in [tests/data/quiz-content.test.js](tests/data/quiz-content.test.js) that walk every quiz in `quizzes/quizzes.json` and validate its `meta.json`, category files, and every question object (required fields, `correct` index in range, referenced `image` exists on disk). Runs once per question in every quiz, so new quizzes/questions are covered automatically without new test code.
- `npm run test:e2e` — [Playwright](playwright.config.js) tests under `tests/e2e/` that drive a real Chromium against `python3 -m http.server` (started automatically via Playwright's `webServer` option) and cover practice mode, exam mode, IQ mode, lazy per-category loading/caching, keyboard shortcuts, and the lightbox.
- CI: [.github/workflows/tests.yml](.github/workflows/tests.yml) runs both on every push/PR to `main`.

## Architecture

- [index.html](index.html) — quiz picker. On load, `loadQuizList()` in [js/app.js](js/app.js) fetches [quizzes/quizzes.json](quizzes/quizzes.json) and renders a card per quiz.
- [quiz.html](quiz.html) — the quiz runner, reused for every quiz. It reads `?id=<quizId>` from the URL, looks that id up in `quizzes/quizzes.json` to find the quiz's `meta.json`, then fetches and plays that quiz. All quiz logic (question flow, scoring, exam mode, IQ mode) lives in the single [js/app.js](js/app.js) — there is one shared JS file for the whole site, not one per quiz.
- [quizzes/quizzes.json](quizzes/quizzes.json) — the registry of quizzes. Each entry: `id`, `title`, `file` (path to the quiz's `meta.json`), `description`, `subtitle` (shown as a badge on the index card and as the subtitle on the quiz start screen), optional `year`/`quarter` (numbers — sort order within a group on the index page: highest `year` first, then `quarter` ascending), optional `group` (index-page section heading; entries with no `group` fall under "Examens oefenen"). **Adding a new quiz means adding an entry here plus creating the quiz's directory** — see README.md for the (Dutch) contributor-facing version of this.
- `quizzes/<quiz-id>/` — one directory per quiz (e.g. [quizzes/computernetwerken/](quizzes/computernetwerken/)):
  - `meta.json` — `{ title, mode?, totalPoints?, categories: [...] }`. Each category is `{ id, name, file }`, where `file` is a category JSON file's path relative to the directory.
  - One JSON file per category, each `{ questions: [...] }`. Categories are fetched lazily: `loadCategoryQuestions()` in `js/app.js` only fetches a category's file the first time it's opened, and caches the result on the in-memory category object for the rest of the session (so replaying a category doesn't re-fetch it).
  - Two older shapes are still handled in `loadQuiz()`/`loadCategoryQuestions()` for backward compatibility, but new quizzes should use the `meta.json` + per-category-file shape above:
    - `{ id, name, questions: [...] }` directly inside a single quiz JSON file (questions inlined, no separate category files).
    - Flat: quiz has a top-level `questions` array, and categories reference a slice via `{ id, name, start, end }` (indices into that array).
  - A category `id: "all"` is auto-populated by fetching and concatenating every other category's questions.
- Question object shape: `{ question, options: [...], correct: <index>, explanation, image?, section?, points? }`. `image` (optional) shows an image next to the question and opens in the lightbox on click.

### Quiz modes (all driven by `js/app.js`, no separate code paths per quiz file)

- **Practice mode** (default): immediate right/wrong feedback with explanation after each answer.
- **Exam mode**: triggered when a category's `id` contains the substring `"examen"` (case-insensitive). No per-question feedback; score, a calculated grade (`calculateGrade()`, Dutch 1–10 scale, pass at 5.5), and a full answer review are shown at the end.
- **IQ mode**: triggered when the quiz's `meta.json` has `"mode": "iq"`. Skips the category-selection screen and starts immediately (only single-category IQ quizzes are supported this way). Scoring is points-based (`points` per question, default 1) against `totalPoints` on the quiz object, mapped to an IQ band via `getIQInfo()`. See [quizzes/iq-test/](quizzes/iq-test/) for the shape (each question has `section` and `points`).

### Notable UI/UX details in `js/app.js`

- Keyboard support: A–E select an option, Enter advances (`Controleer`/`Volgende`), wired via a single `keydown` listener guarded on the quiz screen being visible.
- Lightbox for question images (`openLightbox`/`closeLightbox`), closable via Escape.
- `quiz.html` loads `js/app.js` with a cache-busting query string (`?v=...`); bump that version string when shipping changes to `app.js` so GitHub Pages doesn't serve a stale cached copy.

## Content notes

- All user-facing strings and quiz content are in Dutch.
- `data_training/` holds source study material (e.g. exam weighting/topic breakdowns) used as reference when authoring quiz questions for a subject — it is not loaded by the app at runtime.
- `quizzes/Assets/` holds images referenced by questions via their `image` field.
