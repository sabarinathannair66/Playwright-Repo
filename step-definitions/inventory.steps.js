import {Given,When,Then,Before,After,BeforeAll,AfterAll,BeforeStep,AfterStep,Status,setDefaultTimeout} from '@cucumber/cucumber';
import { chromium} from "@playwright/test";
import assert from 'assert';

setDefaultTimeout(30000)
let browser
let context
let page

BeforeAll(async function(){
    browser=await chromium.launch({headless:false,slowMo:300})
})

AfterAll(async function(){
    if(browser){
        await browser.close()
    }
})

Before(async function(){
    context=await browser.newContext()
    page=await context.newPage()
})

After(async function(scenario){
    try{
        if(scenario.result.status===Status.FAILED){
            const screenshot=await page.screenshot()
            this.attach(screenshot,'image/png')
        }
    }
    catch(err){
        console.log('after hook error:',err.message)
    }
    finally{
        if(context){
            await context.close()
        }
    }
})

BeforeStep(async function(){
    console.log('before step execution')
})

AfterStep(async function(){
    console.log('after step execution')
})

Given('User is on application login page',async function(){
    await page.goto('https://www.saucedemo.com/',{timeout:60000})
})

When('User logs in with username {string} and password {string}',async function(username,password){
    const usernamefield=page.locator('#user-name')
    const passwordfield=page.locator('#password')
    const loginbutton=page.locator('#login-button')
    await usernamefield.fill(username)
    await passwordfield.fill(password)
    await loginbutton.click()
})
Then('User should see {string}',async function(result){
    if(result==='inventory page'){
        await page.waitForURL('**/inventory.html',{timeout:10000})
    }
    else if(result==='error message'){
        const error=await page.locator("//h3[@data-test='error']").textContent()
        assert.ok(error.includes('Epic sadface'))
    }
})
Then('Inventory item count should be {string}',async function(count){
    if(count==='0')
        return
    const items=await page.locator('.inventory_item').count()
    assert.strictEqual(items,Number(count))
})