import { expect, test } from '@playwright/test';



test('index page has expected title', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/Welcome/);
});

test('index page has expected h2', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByRole('heading', { name: 'Welcome' })).toBeVisible();
});


test('about page has expected title', async ({ page }) => {
	await page.goto('/about');
	await expect(page).toHaveTitle(/About Danielle Bastien/);
});

test('about page has expected h2', async ({ page }) => {
	await page.goto('/about');
	await expect(page.getByRole('heading', { name: 'About Danielle Bastien' })).toBeVisible();
});

test('cv page has expected title', async ({ page }) => {
	await page.goto('/cv');
	await expect(page).toHaveTitle(/CV \/ Resume/);
});

test('cv page has expected h2', async ({ page }) => {
	await page.goto('/cv');
	await expect(page.getByRole('heading', { name: 'CV / Resume' })).toBeVisible();
});

test('projects page has expected title', async ({ page }) => {
	await page.goto('/projects');
	await expect(page).toHaveTitle(/Projects/);
});

test('projects page has expected h2', async ({ page }) => {
	await page.goto('/projects');
	await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
});

test('endorsements page has expected title', async ({ page }) => {
	await page.goto('/endorsements');
	await expect(page).toHaveTitle(/Endorsements/);
});

test('endorsements page has expected h2', async ({ page }) => {
	await page.goto('/endorsements');
	await expect(page.getByRole('heading', { name: 'Endorsements' })).toBeVisible();
});