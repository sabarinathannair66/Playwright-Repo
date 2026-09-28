import{test}from '@playwright/test' //playwright test runner to help execute in every test file


test('Browser Launch in Playwright',async({browser})=>{ // naming test is imp to understand test
const context = await browser.newContext()              //creating tab
const page = await context.newPage()                    //creating tab within the page
await page.goto("https://selenium.qabible.in/")        // goto method to navigate to a url
})

test.only('Browser Launch in Playwright 2',async({page})=>{   //using the page fixture
await page.goto("https://selenium.qabible.in/")

})