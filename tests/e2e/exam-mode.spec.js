const { test, expect } = require('@playwright/test');

// Exam mode is triggered by "examen" in the category id (js/app.js, startQuiz()).
// Uses computernetwerken's "examen" category (40 questions).

test('exam mode never shows per-question feedback', async ({ page }) => {
    await page.goto('/quiz.html?id=computernetwerken');
    await page.getByRole('button', { name: /Oefen Examen/ }).click();
    await expect(page.locator('#question-text')).not.toBeEmpty();

    await page.locator('.option').first().click();
    await page.locator('#next-btn').click();

    // Feedback element must stay hidden throughout exam mode.
    await expect(page.locator('#feedback')).toHaveClass(/hidden/);
    await expect(page.locator('#question-number')).toContainText('Vraag 2 van');
});

test('finishing the exam shows a grade, pass/fail message, and full answer review', async ({ page }) => {
    await page.goto('/quiz.html?id=computernetwerken');
    await page.getByRole('button', { name: /Oefen Examen/ }).click();

    const questionCount = 40;
    for (let i = 0; i < questionCount; i++) {
        await page.locator('.option').first().click();
        await page.locator('#next-btn').click();
    }

    await expect(page.locator('#end-screen')).not.toHaveClass(/hidden/);
    await expect(page.locator('.grade-display')).toBeVisible();
    await expect(page.locator('.score-details')).toContainText('/40');
    await expect(page.locator('.exam-results')).toBeVisible();
    await expect(page.locator('.exam-result-item')).toHaveCount(questionCount);
});
