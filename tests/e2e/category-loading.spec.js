const { test, expect } = require('@playwright/test');

// Uses the computernetwerken quiz (multiple week categories) as a representative case
// for the lazy-loading behaviour implemented in loadCategoryQuestions() (js/app.js).

test('opening a quiz only fetches its meta.json, not category files', async ({ page }) => {
    const quizRequests = [];
    page.on('request', req => {
        const url = req.url();
        if (url.includes('/quizzes/computernetwerken/')) quizRequests.push(url);
    });

    await page.goto('/quiz.html?id=computernetwerken');
    await expect(page.locator('.category-btn').first()).toBeVisible();

    expect(quizRequests.some(u => u.endsWith('/meta.json'))).toBe(true);
    expect(quizRequests.some(u => u.endsWith('/week1.json'))).toBe(false);
});

test('clicking a category fetches only that category file, and only once', async ({ page }) => {
    const categoryRequests = [];
    page.on('request', req => {
        const url = req.url();
        if (url.includes('/quizzes/computernetwerken/week3.json')) categoryRequests.push(url);
    });

    await page.goto('/quiz.html?id=computernetwerken');
    await page.getByRole('button', { name: /Week 3/ }).click();
    await expect(page.locator('#question-text')).not.toBeEmpty();
    expect(categoryRequests.length).toBe(1);

    // Replaying the category (via restart) must reuse the cached questions.
    await page.locator('.option').first().click();
    await page.locator('#next-btn').click();
    // Fast-forward isn't needed: just go back to start screen and reopen the same category.
    await page.goto('/quiz.html?id=computernetwerken');
    await page.getByRole('button', { name: /Week 3/ }).click();
    await expect(page.locator('#question-text')).not.toBeEmpty();

    // A fresh page load is a new module instance, so this second visit is expected
    // to fetch week3.json again once (cache is in-memory per page, not persisted).
    expect(categoryRequests.length).toBe(2);
});

test('the same category is not re-fetched on a same-page replay', async ({ page }) => {
    const categoryRequests = [];
    page.on('request', req => {
        const url = req.url();
        if (url.includes('/quizzes/computernetwerken/week2.json')) categoryRequests.push(url);
    });

    await page.goto('/quiz.html?id=computernetwerken');
    await page.getByRole('button', { name: /Week 2/ }).click();
    await expect(page.locator('#question-text')).not.toBeEmpty();
    expect(categoryRequests.length).toBe(1);

    // Answer through the whole category (practice mode: "Controleer" then "Volgende"
    // per question) to reach the end screen, then restart it.
    const questionCount = 30;
    for (let i = 0; i < questionCount; i++) {
        await page.locator('.option').first().click();
        await page.locator('#next-btn').click(); // Controleer -> shows feedback
        await page.locator('#next-btn').click(); // Volgende / Bekijk Score -> advances
    }
    await expect(page.locator('#end-screen')).not.toHaveClass(/hidden/);
    await page.getByRole('button', { name: /Terug naar Menu/ }).click();
    await page.getByRole('button', { name: /Week 2/ }).click();
    await expect(page.locator('#question-text')).not.toBeEmpty();

    expect(categoryRequests.length).toBe(1);
});
