import { test, expect } from '@playwright/test';
import { selectAndVerify } from './selectAndVerify.mjs';
test('ProgrammaticDeclarativeOutOfSequence', async ({ page }) => {
    await page.goto('./tests/ProgrammaticDeclarativeOutOfSequence.html');
    await selectAndVerify(page, expect, 'beButtonedUp');
});
