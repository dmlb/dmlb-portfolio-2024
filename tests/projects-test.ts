import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const projectCardTestId = 'scmp-project-card'
const projectPageURL = '/projects'

test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto(projectPageURL);

    // todo getting incorrect hex values
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
});


test('has expected title', async ({ page }) => {
    await page.goto(projectPageURL);
    await expect(page).toHaveTitle(/Projects/);
});

test('has expected h2', async ({ page }) => {
    await page.goto(projectPageURL);
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
});

test('has all project', async ({ page }) => {
    await page.goto(projectPageURL);
    const quotes = await page.getByTestId(projectCardTestId).all();
    expect(quotes.length).toBe(28)
});