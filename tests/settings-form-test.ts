import { expect, test } from '@playwright/test';

const pageURL = '/'

test('opens settings dialog', async ({ page }) => {
    await page.goto(pageURL);
    const button = await page.getByRole('button', { name: 'Settings'})
    await expect(button).toBeVisible()
    await button.click()

    await expect(page.getByRole('dialog', { name: 'Site Settings' })).toBeVisible();
});

test('sets mode by system radio', async ({ page }) => {
    await page.goto(pageURL);
    await page.getByRole('button', { name: 'Settings'}).click()
    const radio = await page.getByRole('group', { name: 'Theme Mode' }).getByRole('radio', {name: 'System'})
   
    await radio.check()

    const root = await page.getByRole('document')
    await expect(root).toHaveAttribute('data-mode','light')
});

test('sets mode by dark radio', async ({ page }) => {
    await page.goto(pageURL);
    await page.getByRole('button', { name: 'Settings'}).click()
    const radio = await page.getByRole('radio', {name: 'Dark'})
   
    await radio.check()

    const root = await page.getByRole('document')
    await expect(root).toHaveAttribute('data-mode','dark')
});


test('sets mode by light radio', async ({ page }) => {
    await page.goto(pageURL);
    await page.getByRole('button', { name: 'Settings'}).click()
    const radio = await page.getByRole('radio', {name: 'Light'})
   
    await radio.check()

    const root = await page.getByRole('document')
    await expect(root).toHaveAttribute('data-mode','light')
});

test('sets font by system radio', async ({ page }) => {
    await page.goto(pageURL);
    await page.getByRole('button', { name: 'Settings'}).click()
    const radio = await page.getByRole('group', { name: 'Theme Font' }).getByRole('radio', {name: 'System'})
   
    await radio.check()

    const root = await page.getByRole('document')
    await expect(root).toHaveAttribute('data-font','system')
});

test('sets font by dyslexic radio', async ({ page }) => {
    await page.goto(pageURL);
    await page.getByRole('button', { name: 'Settings'}).click()
    const radio = await page.getByRole('radio', {name: 'Dyslexic'})
   
    await radio.check()

    const root = await page.getByRole('document')
    await expect(root).toHaveAttribute('data-font','dyslexic')
});
