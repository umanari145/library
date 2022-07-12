//これで取得できる
const {SITE_URL,DESKTOP_INFO} = require('./config.json');

const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--use-gl=egl'],
    })
    const page = await browser.newPage();
    await page.goto(SITE_URL);
    await page.setViewport({
        width: DESKTOP_INFO["WIDTH"],
        height: DESKTOP_INFO["HEIGHT"]
    });
    await page.screenshot({path: 'screen_shopt.png'});
    browser.close();
})();
//即時関数を使っているので、定義+実行　下記の処理と全く同じ
//test()
//async function test(){
//    const browser = await puppeteer.launch({
//        headless: true
//    })
//    const page = await browser.newPage();
//    await page.goto(SITE_URL);
//    await page.setViewport({
//        width: DESKTOP_INFO["WIDTH"],
//        height: DESKTOP_INFO["HEIGHT"]
//    });
//    await page.screenshot({path: '.screen_shopt.png'});
//    browser.close();
//}
//
