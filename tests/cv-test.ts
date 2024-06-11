import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const cvPageURL = '/cv'

test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto(cvPageURL);

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
});

test('has expected title', async ({ page }) => {
    await page.goto(cvPageURL);
    await expect(page).toHaveTitle(/Curriculum Vitae \/ Résumé/);
});

test('has expected h2', async ({ page }) => {
    await page.goto(cvPageURL);
    await expect(page.getByRole('heading', { name: 'Curriculum Vitae / Résumé' })).toBeVisible();
});


test('has accordion for dev work', async ({ page }) => {
    await page.goto(cvPageURL);
    await expect(page.getByText('Development and Engineering Experience')).toBeVisible();
});

test('has accordion for training', async ({ page }) => {
    await page.goto(cvPageURL);
    await expect(page.getByText('Professional Development Courses and Workshops')).toBeVisible();
});

test('has accordion for education', async ({ page }) => {
    await page.goto(cvPageURL);
    await expect(page.getByText('Education')).toBeVisible();
});

test('has accordion for other experience', async ({ page }) => {
    await page.goto(cvPageURL);
    await expect(page.getByText('Other Experience')).toBeVisible();
});

test('has accordion for fmtv credits', async ({ page }) => {
    await page.goto(cvPageURL);
    await expect(page.getByText('Film and Television Credits')).toBeVisible();
});

