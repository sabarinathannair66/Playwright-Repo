import{test}from '@playwright/test' 

test('Event using Playwright',async({page})=>{
await page.goto("https://selenium.qabible.in/")
await page.locator('#others').hover()

})