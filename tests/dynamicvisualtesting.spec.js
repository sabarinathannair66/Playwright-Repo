import{test,expect}from '@playwright/test'

test('Testing dynamic visuals in Playwright',async({page})=>{
page.goto('https://selenium.qabible.in/index.php')    
await page.waitForLoadState('networkidle')   //buffering needs to be completed before taking screenshot
await page.locator('.carousel').evaluate((element)=>{
    element.style.display = 'none'              // hiding sliders and banners in the application
})
await expect(page).toHaveScreenshot('obsqura.png',{threshold:0.2,maxDiffPixels:95})
})

