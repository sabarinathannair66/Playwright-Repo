import{test,expect}from '@playwright/test'
test('Alerts testing in Playwright',async({page})=>{
await page.goto("https://selenium.qabible.in/javascript-alert.php")
page.on('dialog',async dialog =>{   //listens for browser pop-up
expect(dialog.message().toBe('I am a Javascript alert box!'))
await dialog.accept()
const clickmebutton = page.locator('.btn btn-success').click()

})
})