const puppeteer = require('puppeteer')

module.exports = {
    async print(request, response) {

      try {
      
        const browser = await puppeteer.launch({
          args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
          ],
        })
        const page = await browser.newPage()
      
        await page.emulate({
          userAgent:
            'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.182 Safari/537.36',
          viewport: {
            width: 1920,
            height: 1080,
            deviceScaleFactor: 1,
            isMobile: false,
            hasTouch: false,
            isLandscape: false,
          },
        })
  
        await page.goto('https://google.com', {
          waitUntil: 'networkidle0'
        })
      
        const ImageBase64 = await page.screenshot()
      
        await browser.close()

        return response.status(200).json({
          message: 'Screenshot successfully generated!',
          ImageBase64
        })

      } catch (error) {
        return response.status(400).json({
          message: 'Failed to generate screenshot!',
          error: error
        })
      }

    }
};
