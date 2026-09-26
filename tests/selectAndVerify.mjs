/**
 * Waits for the enhancement to hydrate, opens the menu, picks a command
 * button, and verifies the anchoring button took on its value, the menu
 * closed, and a change event fired.
 * @param {import('@playwright/test').Page} page
 * @param {typeof import('@playwright/test').expect} expect
 * @param {string} enhKey
 */
export async function selectAndVerify(page, expect, enhKey){
    await expect.poll(() => page.evaluate(
        (key) => document.querySelector('#subject').enh[key]?.resolved, enhKey
    )).toBe(true);
    await page.locator('#subject').click();
    await expect(page.locator('#menu')).toBeVisible();
    await page.locator('#doSomethingElse').click();
    await expect(page.locator('#menu')).toBeHidden();
    expect(await page.evaluate(() => document.querySelector('#subject').value)).toBe('doSomethingElse');
    await expect(page.locator('#selected')).toHaveText('doSomethingElse');
}
