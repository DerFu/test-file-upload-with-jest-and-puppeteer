describe('File upload with puppeteer and test with jest', () => {
  beforeAll(async () => {
    await page.goto('https://www.file-upload.net/');
  });

  it('should be uploaded a file', async () => {
    const fileInput = await page.$('input[type=file]');
    await fileInput.uploadFile('./example.png');
    await page.waitFor(4000);
    // await page.waitForNavigation({ waitUntil: 'networkidle2' }),

    const headlineText = await page.evaluate(() => document.querySelector('h1 span').textContent);
    await expect(headlineText).toBe('Ihre Dateien wurden erfolgreich hochgeladen!');
  });
});
