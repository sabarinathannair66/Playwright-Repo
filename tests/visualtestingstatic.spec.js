import{test,expect}from '@playwright/test' 

test('Visual testing in playwright',async({page})=>{
page.goto('https://www.saucedemo.com/')
await page.waitForLoadState('networkidle')
await expect(page).toHaveScreenshot('saucedemo.png',{threshold:0.2})  //baseline screenshot// 0.2 allowing diff between the 2 screenshot -> do not allow more than 20%
//npx playwright test tests/visualtestingstatic.spec.js --update-snapshots //another command to compare with baseline screenshot
})