import { test, expect } from '@playwright/test';
import LoginPage from '../pageobjects/login.page.js';
import SecurePage from '../pageobjects/secure.page.js';

test.describe('My Login application', () => {
    test('should login with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const securePage = new SecurePage(page);

        await loginPage.open();
        await loginPage.login('tomsmith', 'SuperSecretPassword!');

        await expect(securePage.flashAlert).toBeVisible();
        await expect(securePage.flashAlert).toContainText('You logged into a secure area!');
    });
});
