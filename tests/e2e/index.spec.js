const { test, expect } = require('@playwright/test');
const fs = require('node:fs');
const path = require('node:path');

const registry = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', '..', 'quizzes', 'quizzes.json'), 'utf8')
);

test('shows a card for every quiz in the registry', async ({ page }) => {
    await page.goto('/index.html');
    for (const quiz of registry) {
        await expect(page.getByText(quiz.title, { exact: false }).first()).toBeVisible();
    }
});

test('clicking a quiz card navigates to quiz.html with its id', async ({ page }) => {
    const target = registry[0];
    await page.goto('/index.html');
    await page.getByText(target.title, { exact: false }).first().click();
    await expect(page).toHaveURL(new RegExp(`quiz\\.html\\?id=${target.id}$`));
});
