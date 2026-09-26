import { test, expect } from '@playwright/test';
import { selectAndVerify } from './selectAndVerify.mjs';
test('ProgrammaticDeclarativeInSequence', async ({ page }) => {
    await page.goto('./tests/ProgrammaticDeclarativeInSequence.html');
    await selectAndVerify(page, expect, 'beButtonedUp');
});
