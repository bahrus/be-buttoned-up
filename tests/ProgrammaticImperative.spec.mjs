import { test, expect } from '@playwright/test';
import { selectAndVerify } from './selectAndVerify.mjs';
test('ProgrammaticImperative', async ({ page }) => {
    await page.goto('./tests/ProgrammaticImperative.html');
    await selectAndVerify(page, expect, 'beButtonedUp');
});
