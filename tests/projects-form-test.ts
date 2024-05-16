import { expect, test } from '@playwright/test';

const projectCardTestId = 'scmp-project-card'
const projectPageURL = '/projects'

test('filters by design system radio', async ({ page }) => {
    await page.goto(projectPageURL);
    const radio = await page.getByRole('radio', {name: 'Design System'})

    await radio.check()

    const quotes = await page.getByTestId(projectCardTestId).all();
    expect(quotes.length).toBe(2)
});

test('filters by web app radio', async ({ page }) => {
    await page.goto(projectPageURL);
    const radio = await page.getByRole('radio', {name: 'Web Application'})
   
    await radio.check()

    const quotes = await page.getByTestId(projectCardTestId).all();
    expect(quotes.length).toBe(2)
});


test('filters by website radio', async ({ page }) => {
    await page.goto(projectPageURL);
    const radio = await page.getByRole('radio', {name: 'Website'})
    
    await radio.check()
    const quotes = await page.getByTestId(projectCardTestId).all();
    expect(quotes.length).toBe(7)
});

test('filters by code snippet radio', async ({ page }) => {
    await page.goto(projectPageURL);
    const radio = await page.getByRole('radio', {name: 'Website'})
    
    await radio.check()
    const quotes = await page.getByTestId(projectCardTestId).all();
    expect(quotes.length).toBe(7)
});

test('filters by python query', async ({ page }) => {
    await page.goto(projectPageURL);
    const searchBar = await page.getByRole('searchbox')
    
    await searchBar.fill('python')
    const quotes = await page.getByTestId(projectCardTestId).all();
    expect(quotes.length).toBe(1)
});

test('filters by typescript query', async ({ page }) => {
    await page.goto(projectPageURL);
    const searchBar = await page.getByRole('searchbox')
    
    await searchBar.fill('typescript')
    const quotes = await page.getByTestId(projectCardTestId).all();
    expect(quotes.length).toBe(7)
});

test('filters by access query', async ({ page }) => {
    await page.goto(projectPageURL);
    const searchBar = await page.getByRole('searchbox')
    
    await searchBar.fill('access')
    const quotes = await page.getByTestId(projectCardTestId).all();
    expect(quotes.length).toBe(5)
});