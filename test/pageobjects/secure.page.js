import Page from './page.js';

/**
 * Page object for the secure area shown after login.
 */
class SecurePage extends Page {
    get flashAlert() {
        return this.page.locator('#flash');
    }
}

export default SecurePage;
