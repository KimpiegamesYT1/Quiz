// Dependency-free data-integrity checks for every quiz under quizzes/.
// Run with: node --test tests/data/
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = path.join(__dirname, '..', '..');
const QUIZZES_JSON = path.join(ROOT, 'quizzes', 'quizzes.json');

function readJson(absPath) {
    return JSON.parse(fs.readFileSync(absPath, 'utf8'));
}

const registry = readJson(QUIZZES_JSON);

test('quizzes.json is a non-empty array', () => {
    assert.ok(Array.isArray(registry));
    assert.ok(registry.length > 0);
});

test('quiz ids in quizzes.json are unique', () => {
    const ids = registry.map(q => q.id);
    assert.deepEqual(ids, [...new Set(ids)]);
});

for (const quizInfo of registry) {
    test(`quiz "${quizInfo.id}": registry entry has required fields`, () => {
        for (const field of ['id', 'title', 'file', 'description']) {
            assert.ok(quizInfo[field], `missing "${field}"`);
        }
    });

    const metaPath = path.join(ROOT, quizInfo.file);

    test(`quiz "${quizInfo.id}": meta file exists at ${quizInfo.file}`, () => {
        assert.ok(fs.existsSync(metaPath), `${quizInfo.file} does not exist`);
    });

    if (!fs.existsSync(metaPath)) continue;

    const meta = readJson(metaPath);
    const quizDir = path.dirname(metaPath);

    test(`quiz "${quizInfo.id}": meta has title and non-empty categories`, () => {
        assert.equal(typeof meta.title, 'string');
        assert.ok(Array.isArray(meta.categories) && meta.categories.length > 0);
    });

    test(`quiz "${quizInfo.id}": category ids are unique`, () => {
        const ids = meta.categories.map(c => c.id);
        assert.deepEqual(ids, [...new Set(ids)]);
    });

    for (const cat of meta.categories) {
        test(`quiz "${quizInfo.id}" category "${cat.id}": has id and name`, () => {
            assert.ok(cat.id, 'missing id');
            assert.ok(cat.name, 'missing name');
        });

        if (!cat.file) continue;

        const catPath = path.join(quizDir, cat.file);

        test(`quiz "${quizInfo.id}" category "${cat.id}": file exists at ${cat.file}`, () => {
            assert.ok(fs.existsSync(catPath), `${cat.file} does not exist`);
        });

        if (!fs.existsSync(catPath)) continue;

        const catData = readJson(catPath);

        test(`quiz "${quizInfo.id}" category "${cat.id}": has non-empty questions array`, () => {
            assert.ok(Array.isArray(catData.questions) && catData.questions.length > 0);
        });

        catData.questions.forEach((q, i) => {
            const label = `quiz "${quizInfo.id}" category "${cat.id}" question #${i + 1}`;

            test(`${label}: has question, options, correct, explanation`, () => {
                assert.equal(typeof q.question, 'string');
                assert.ok(q.question.length > 0);
                assert.ok(Array.isArray(q.options) && q.options.length >= 2, 'needs at least 2 options');
                assert.ok(Number.isInteger(q.correct), 'correct must be an integer index');
                assert.ok(q.correct >= 0 && q.correct < q.options.length, 'correct index out of range');
                assert.equal(typeof q.explanation, 'string');
                assert.ok(q.explanation.length > 0);
            });

            if (q.image) {
                test(`${label}: referenced image exists`, () => {
                    const imagePath = path.join(ROOT, decodeURIComponent(q.image));
                    assert.ok(fs.existsSync(imagePath), `${q.image} does not exist on disk`);
                });
            }

            if (meta.mode === 'iq') {
                test(`${label}: iq-mode question has numeric points (if set)`, () => {
                    if ('points' in q) {
                        assert.equal(typeof q.points, 'number');
                    }
                });
            }
        });
    }
}
