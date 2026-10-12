import Page from './page.js';

/**
 * Page object for the login screen.
 */
class LoginPage extends Page {
    get inputUsername() {
        return this.page.locator('#username');
    }

    get inputPassword() {
        return this.page.locator('#password');
    }

    get btnSubmit() {
        return this.page.locator('button[type="submit"]');
    }

    /**
     * @param {string} username
     * @param {string} password
     */
    async login(username, password) {
        await this.inputUsername.fill(username);
        await this.inputPassword.fill(password);
        await this.btnSubmit.click();
        await this.page.waitForURL('**/secure');
    }

    open() {
        return super.open('login');
    }
}

export default LoginPage;
