import puppeteer from 'puppeteer';

export default class Sticker {
    
    static async generate(stickerName: String, height: number, width: number) {
        const browser = await puppeteer.launch({
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
            ],
        });
        const page = await browser.newPage();
    
        await page.goto(`http://localhost:3000/stickers/${stickerName}?height=${height}&width=${width}`);
    
        // Set screen size
        await page.setViewport({width: width, height: height});
    
        const selector = '.image';
        await page.waitForSelector(selector);
        const element = await page.$(selector);
    
        if (element) {
            await element.screenshot({path: `/stickers/${stickerName}.png`});
            console.log("Screenshot taken !");
        } else {
            console.error("Error taking screenshot");
        }
    
        await browser.close();
    }
    
}