import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const quoteTestId = 'scmp-blockquote'
const endorsementsPageURL = '/endorsements'

test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto(endorsementsPageURL);

    // todo getting incorrect hex values
    const accessibilityScanResults = await new AxeBuilder({ page }).disableRules(['color-contrast']).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
});

test('has expected title', async ({ page }) => {
    await page.goto(endorsementsPageURL);
    await expect(page).toHaveTitle(/Endorsements/);
});

test('has expected h2', async ({ page }) => {
    await page.goto(endorsementsPageURL);
    await expect(page.getByRole('heading', { name: 'Endorsements' })).toBeVisible();
});

test('has all quotes', async ({ page }) => {
    await page.goto(endorsementsPageURL);
    const quotes = await page.getByTestId(quoteTestId).all();
    expect(quotes.length).toBe(16)
});
