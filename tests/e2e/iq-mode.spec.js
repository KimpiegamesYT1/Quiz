const { test, expect } = require('@playwright/test');

test('IQ quiz skips the category screen and starts immediately', async ({ page }) => {
    await page.goto('/quiz.html?id=iq-test');
    await expect(page.locator('#start-screen')).toHaveClass(/hidden/);
    await expect(page.locator('#question-text')).not.toBeEmpty();
});

test('IQ mode shows no per-question feedback, then an IQ band at the end', async ({ page }) => {
    await page.goto('/quiz.html?id=iq-test');

    await page.locator('.option').first().click();
    await page.locator('#next-btn').click();
    await expect(page.locator('#feedback')).toHaveClass(/hidden/);

    // Answer through the remaining questions to reach the IQ result screen.
    let onEndScreen = await page.locator('#end-screen').isHidden();
    while (onEndScreen) {
        await page.locator('.option').first().click();
        await page.locator('#next-btn').click();
        onEndScreen = await page.locator('#end-screen').isHidden();
    }

    await expect(page.locator('#score')).toContainText('IQ');
    await expect(page.locator('#score')).toContainText('punten');
});

test('restarting the IQ test jumps straight back in without the category screen', async ({ page }) => {
    await page.goto('/quiz.html?id=iq-test');

    let onEndScreen = await page.locator('#end-screen').isHidden();
    while (onEndScreen) {
        await page.locator('.option').first().click();
        await page.locator('#next-btn').click();
        onEndScreen = await page.locator('#end-screen').isHidden();
    }

    await page.getByRole('button', { name: /Terug naar Menu/ }).click();
    await expect(page.locator('#start-screen')).toHaveClass(/hidden/);
    await expect(page.locator('#question-number')).toContainText('Vraag 1 van');
});
