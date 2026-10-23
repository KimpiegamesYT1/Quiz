const { test, expect } = require('@playwright/test');

test('no update banner when the online version matches the loaded app.js', async ({ page }) => {
    await page.goto('/index.html');
    await expect(page.locator('.quiz-card').first()).toBeVisible();
    // Give the background version check time to finish.
    await page.waitForTimeout(500);
    await expect(page.locator('#update-banner')).toHaveCount(0);
});

test('shows an update banner when a newer app.js version is online', async ({ page }) => {
    // The page itself loads normally; the version check (a fetch of the same page)
    // sees an HTML document that references a newer app.js.
    await page.route('**/quiz.html*', async route => {
        if (route.request().resourceType() !== 'fetch') return route.continue();
        const response = await route.fetch();
        const body = (await response.text()).replace(/app\.js\?v=[^"]+/, 'app.js?v=nieuwere-versie');
        await route.fulfill({ response, body });
    });
    await page.goto('/quiz.html?id=computernetwerken');
    await expect(page.locator('#update-banner')).toBeVisible();
    await expect(page.locator('#update-banner')).toContainText('nieuwe versie');

    await page.locator('#update-banner .update-close').click();
    await expect(page.locator('#update-banner')).toHaveCount(0);
});

