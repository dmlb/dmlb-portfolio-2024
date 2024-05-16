import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const pageURL = '/'

test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto(pageURL);

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
});

test('has expected title', async ({ page }) => {
    await page.goto(pageURL);
    await expect(page).toHaveTitle(/Welcome/);
});

test('has expected h2', async ({ page }) => {
    await page.goto(pageURL);
    await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
});

test('has download resume pdf link', async ({ page }) => {
    await page.goto(pageURL);
    const targetLink = page.getByRole('link', { name: 'Download Resume' });

    await expect(targetLink).toBeVisible();
});

test('has about link', async ({ page }) => {
    await page.goto(pageURL);
    const targetLink = page.getByRole('link', { name: 'More about Danielle' });

    await expect(targetLink).toBeVisible();
    await targetLink.click()

    // navigated to about
    await expect(page.getByRole('heading', { name: 'About Danielle Bastien' })).toBeVisible();
});

test('has linkedin link', async ({ page }) => {
    await page.goto(pageURL);
    const targetLink = page.getByRole('link', { name: 'linkedin' });

    await expect(targetLink).toBeVisible();
    await targetLink.click()

    // navigated to linkedin
    await expect(page.url()).toContain('https://www.linkedin.com/in/daniellemlbastien');
});

test('has codepen link', async ({ page }) => {
    await page.goto(pageURL);
    const targetLink = page.getByRole('link', { name: 'codepen' });

    await expect(targetLink).toBeVisible();
    await targetLink.click()

    // navigated to codepen
    await expect(page.url()).toContain('https://codepen.io/dmlb');
});

test('has github link', async ({ page }) => {
    await page.goto(pageURL);
    const targetLink = page.getByRole('link', { name: 'github' });

    await expect(targetLink).toBeVisible();
    await targetLink.click()

    // navigated to github
    await expect(page.url()).toContain('https://github.com/dmlb');
});

test('has discord link', async ({ page }) => {
    await page.goto(pageURL);
    const targetLink = page.getByRole('link', { name: 'Join a11y Tech Network' });

    await expect(targetLink).toBeVisible();
    await targetLink.click()

    // navigated to discord invite
    await expect(page.url()).toContain('https://discord.com/invite/knEJUTHshs');
});

test('has bird book link', async ({ page }) => {
    await page.goto(pageURL);
    const targetLink = page.getByRole('link', { name: 'Bird Photos Book' });

    await expect(targetLink).toBeVisible();
    await targetLink.click()

    // navigated to bird site
    await expect(page.url()).toContain('https://bird-photos.daniellemlbastien.com/');
});

test('has instagram link', async ({ page }) => {
    await page.goto(pageURL);
    const targetLink = page.getByRole('link', { name: 'Photography' });

    await expect(targetLink).toBeVisible();
    await targetLink.click()

    // navigated to instagram
    await expect(page.url()).toContain('https://www.instagram.com/dmlb.s0/');
});

