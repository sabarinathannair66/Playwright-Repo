import{test,expect}from '@playwright/test' 
import { LoginPage } from '../pages/LoginPage'
import logindata from '../utils/testData.json' with {type:'json'}
import {getData} from '../utils/excelread.js'
test('Successful Login',async({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.locator('#user-name').fill('standard_user')
await page.locator('#password').fill('secret_sauce')
await page.locator('#login-button').click()
await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
})


test('Invalid username',async({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.locator('#user-name').fill('standard_users')
await page.locator('#password').fill('secret_sauce')
await page.locator('#login-button').click()
await expect(page.locator('.error-message-container')).toBeVisible()
})

test('Invalid password',async({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.locator('#user-name').fill('standard_user')
await page.locator('#password').fill('secret_sauces')
await page.locator('#login-button').click()
await expect(page.locator('.error-message-container')).toBeVisible()
})


test('Invalid Login',async({page})=>{
await page.goto("https://www.saucedemo.com/")
await page.locator('#user-name').fill('standard_users')
await page.locator('#password').fill('secret_sauces')
await page.locator('#login-button').click()
await expect(page.locator('.error-message-container')).toBeVisible()

})


// JSON examples

test.only('Successful Login using JSON',async({page})=>{
const loginPage = new LoginPage(page)
const usernamevalue = getData(1,1) //using excelsheet to extract data
const passwordvalue = getData(1,2)
await loginPage.navigateToApplication()
await loginPage.userLogin(usernamevalue,passwordvalue)
await loginPage.validateloginpage()

})
test('Invalid username login using JSON',async({page})=>{
const loginPage = new LoginPage(page)
const usernamevalue = logindata.invalidusername
const passwordvalue = logindata.validpassword
await loginPage.navigateToApplication()
await loginPage.userLogin(usernamevalue,passwordvalue)
await loginPage.validateloginerror()
})
test('Invalid password login using JSON',async({page})=>{
const loginPage = new LoginPage(page)
const usernamevalue = logindata.validusername
const passwordvalue = logindata.invalidpassword
await loginPage.navigateToApplication()
await loginPage.userLogin(usernamevalue,passwordvalue)
await loginPage.validateloginerror()
})
test('Invalid login using JSON',async({page})=>{
const loginPage = new LoginPage(page)
const usernamevalue = logindata.invalidusername
const passwordvalue = logindata.invalidpassword
await loginPage.navigateToApplication()
await loginPage.userLogin(usernamevalue,passwordvalue)
await loginPage.validateloginerror()
})