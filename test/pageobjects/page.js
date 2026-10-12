/**
 * Base page object shared across pages.
 * Playwright equivalent of the WebdriverIO Page class in elitea_wdio_ta.
 */
export default class Page {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
    }

    /**
     * Opens a sub page of the application.
     * @param {string} path path of the sub page (e.g. login)
     */
    open(path) {
        return this.page.goto(`https://the-internet.herokuapp.com/${path}`, {
            waitUntil: 'domcontentloaded',
        });
    }
}
