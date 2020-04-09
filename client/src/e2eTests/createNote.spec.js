import playwright from 'playwright';

for (const browserType of ['chromium']) {
  describe(`testing create with e2e in ${browserType}`, () => {
    let browser;
    let context;
    let page;

    jest.setTimeout(3000000);

    beforeEach(async () => {
      browser = await playwright[browserType].launch({ headless: false });

      context = await browser.newContext();
      page = await context.newPage();

      await page.goto('http://localhost:3000/');
      await page.waitForSelector('[aria-label="list"]');
      await page.click('[href="/create"]');
    });

    afterEach(async () => {
      await page.waitFor(1000);
      await browser.close();
    });

    test(`test create`, async () => {
      await page.type(`#form-title`, 'testE2E');
      await page.type(`#form-description`, 'testE2E');
      await page.click('[aria-label="create"]');
      expect(page).not.toBeNull();
      await page.reload();
    });
  });
}
