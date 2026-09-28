import { Given, When,Then } from "@cucumber/cucumber";
import { chromium ,expect} from "@playwright/test";
import assert from 'assert';


let browser
let page
Given('user is on login page',async function(){
    browser=await chromium.launch({headless:false})
    const context=await browser.newContext()
    page=await context.newPage()
    await page.goto('https://www.saucedemo.com/',{timeout:60000})
})
When('user enters valid username and password',async function(){
    const usernamefield=page.locator('#user-name')
    const passwordfield=page.locator('#password')
    const loginbutton=page.locator('#login-button')
    await usernamefield.fill('standard_user')
    await passwordfield.fill('secret_sauce')
    await loginbutton.click()
})
Then('user should see inventory page',async function(){
    await page.waitForSelector('.inventory_list')
    const title=await page.title()
    assert.ok(title.includes('Swag Labs'))
    await browser.close()       //to close the browser after running the above, not mandatory
})
When('user enters invalid username and password',async function () {
    const usernamefield=page.locator('#user-name')
    const passwordfield=page.locator('#password')
    const loginbutton=page.locator('#login-button')
    await usernamefield.fill('standard_user_')
    await passwordfield.fill('secret_sauce_')
    await loginbutton.click()

})
Then('user should see error message',async function () {
    const errormessage = page.locator('.error-message-container')
    await page.waitForSelector('.error-message-container')
    assert.ok(await errormessage.isVisible())
    //const errortext = await errormessage.textContent()
    //assert.ok(errortext.includes('Epic sadface: Username and password do not match any user in this service'))
    await browser.close()
})

