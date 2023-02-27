import puppeteer from 'puppeteer';

export default class Sticker {
    
    static async generate(stickerName: String, height: number, width: number, data =[]) {
        try {
            let imagePreviewUrl = `http://localhost:3000/api/stickers/${stickerName}?height=${height}&width=${width}`;
            
            console.log("data", data);
            const query = Sticker.objectToUrlQuery(data);
            imagePreviewUrl += query;

            const browser = await puppeteer.launch({
                args: [
                    '--no-sandbox',
                    '--disable-setuid-sandbox',
                ],
            });
            const page = await browser.newPage();
        
            await page.goto(imagePreviewUrl);
        
            // Set screen size
            await page.setViewport({width: width, height: height});
        
            const selector = '.image';
            await page.waitForSelector(selector);
            const element = await page.$(selector);
        
            if (element) {
                await element.screenshot({path: `/stickers/${stickerName}.png`});
                console.log("Screenshot taken !");
            } else {
                throw (`Element ${element} not found.`);
            }
        
            await browser.close();
        } catch (error) {
            throw error;
        }
    }

    static objectToUrlQuery(object: any) {
        let query = "";
        Object.keys(object).forEach((key: any) => {
            if (typeof object[key] === 'object') {
                const subObject = object[key];
                Object.keys(subObject).forEach((subKey: any) => {
                    query += `&${key}[${subKey}]=${subObject[subKey]}`;
                });
            } else {
                query += `&${key}=${object[key]}`;
            }
        });
        return query;
    }
    
}