const { test, expect } = require('@playwright/test');

test('keyboard: letter key selects an option, Enter confirms and advances', async ({ page }) => {
    await page.goto('/quiz.html?id=computernetwerken');
    await page.getByRole('button', { name: /Week 1/ }).click();
    await expect(page.locator('#question-text')).not.toBeEmpty();

    // Fixture: week1 question 1, correct option is index 2 ("100 meter") -> key "c".
    await page.keyboard.press('c');
    await expect(page.locator('.option').nth(2)).toHaveClass(/selected/);

    await page.keyboard.press('Enter'); // Controleer
    await expect(page.locator('#feedback')).toHaveClass(/correct/);

    await page.keyboard.press('Enter'); // Volgende
    await expect(page.locator('#question-number')).toContainText('Vraag 2 van');
});

test('lightbox: clicking a question image opens it, Escape closes it', async ({ page }) => {
    await page.goto('/quiz.html?id=iq-test');
    await expect(page.locator('#question-text')).not.toBeEmpty();

    // Click through until a question with an image shows up (fixture: iq-test has
    // images on several questions, e.g. vraag12.png).
    for (let i = 0; i < 30; i++) {
        const hasImage = await page.locator('#question-image').isVisible();
        if (hasImage) break;
        await page.locator('.option').first().click();
        await page.locator('#next-btn').click();
    }

    await expect(page.locator('#question-image')).toBeVisible();
    await page.locator('#question-img').click();
    await expect(page.locator('#lightbox')).toHaveClass(/active/);

    await page.keyboard.press('Escape');
    await expect(page.locator('#lightbox')).not.toHaveClass(/active/);
});
