const { test, expect } = require('@playwright/test');

// Practice mode (default, non-"examen" categories): computernetwerken/week1,
// question 1 is a fixed, known fixture ("Wat is de maximale typische afstand
// van een LAN?", correct = index 2 "100 meter").

test.beforeEach(async ({ page }) => {
    await page.goto('/quiz.html?id=computernetwerken');
    await page.getByRole('button', { name: /Week 1/ }).click();
    await expect(page.locator('#question-text')).not.toBeEmpty();
});

test('selecting the correct answer shows immediate positive feedback with explanation', async ({ page }) => {
    await page.locator('.option').nth(2).click();
    await page.locator('#next-btn').click();

    const feedback = page.locator('#feedback');
    await expect(feedback).toBeVisible();
    await expect(feedback).toHaveClass(/correct/);
    await expect(feedback).toContainText('Correct');
    await expect(feedback.locator('.explanation')).not.toBeEmpty();
});

test('selecting a wrong answer shows the correct answer and explanation', async ({ page }) => {
    await page.locator('.option').nth(0).click();
    await page.locator('#next-btn').click();

    const feedback = page.locator('#feedback');
    await expect(feedback).toBeVisible();
    await expect(feedback).toHaveClass(/incorrect/);
    await expect(feedback).toContainText('Fout');
    await expect(feedback.locator('.correct-answer')).toContainText('C');
});

test('"Volgende" after feedback advances to the next question', async ({ page }) => {
    await page.locator('.option').first().click();
    await page.locator('#next-btn').click(); // Controleer
    await page.locator('#next-btn').click(); // Volgende

    await expect(page.locator('#question-number')).toContainText('Vraag 2 van');
    await expect(page.locator('#feedback')).toHaveClass(/hidden/);
});

test('cannot pick a different option after answering (practice mode locks the question)', async ({ page }) => {
    await page.locator('.option').nth(0).click();
    await page.locator('#next-btn').click(); // Controleer -> answered = true, locks the options

    // showQuestion()/nextQuestion() disable further picks via pointer-events: none,
    // rather than a DOM attribute, so assert on the actual computed style.
    await expect(page.locator('.option').nth(1)).toHaveCSS('pointer-events', 'none');
    await expect(page.locator('.option').nth(0)).toHaveClass(/incorrect/);
});
