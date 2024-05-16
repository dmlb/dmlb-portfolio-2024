import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const aboutPageURL = '/about'
const quickInfoSection = 'Quick Info'

test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto(aboutPageURL);

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
});

test('has expected title', async ({ page }) => {
    await page.goto(aboutPageURL);
    await expect(page).toHaveTitle(/About Danielle Bastien/);
});

test('has expected h2', async ({ page }) => {
    await page.goto(aboutPageURL);
    await expect(page.getByRole('heading', { name: 'About Danielle Bastien' })).toBeVisible();

});

test('has cv link', async ({ page }) => {
    await page.goto(aboutPageURL);
    const targetLink = page.getByRole('link', { name: "Read Danielle's Curriculum Vitae" });

    await expect(targetLink).toBeVisible();
    await targetLink.click()

    // navigated to about
    await expect(page.getByRole('heading', { name: 'CV / Resume' })).toBeVisible();
});

test('has download resume pdf link', async ({ page }) => {
    await page.goto(aboutPageURL);
    const targetLink = page.getByLabel(quickInfoSection).getByRole('link', { name: 'Download Resume' });

    await expect(targetLink).toBeVisible();
});

test('has linkedin link', async ({ page }) => {
    await page.goto(aboutPageURL);
    const targetLink = page.getByLabel(quickInfoSection).getByRole('link', { name: 'linkedin' });

    await expect(targetLink).toBeVisible();
    await targetLink.click()

    // navigated to linkedin
    await expect(page.url()).toContain('https://www.linkedin.com/in/daniellemlbastien');
});

test('has codepen link', async ({ page }) => {
    await page.goto(aboutPageURL);
    const targetLink = page.getByLabel(quickInfoSection).getByRole('link', { name: 'codepen' });

    await expect(targetLink).toBeVisible();
    await targetLink.click()

    // navigated to codepen
    await expect(page.url()).toContain('https://codepen.io/dmlb');
});

test('has github link', async ({ page }) => {
    await page.goto(aboutPageURL);
    const targetLink = page.getByLabel(quickInfoSection).getByRole('link', { name: 'github' });
    await expect(targetLink).toBeVisible();
    await targetLink.click()

    // navigated to github
    await expect(page.url()).toContain('https://github.com/dmlb');
});
