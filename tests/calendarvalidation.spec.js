import{test,expect}from '@playwright/test'

test('Calendar Test using Playwright',async({page})=>{
page.goto("https://selenium.qabible.in/date-picker.php")
const dateinput = page.locator('#single-input-field')
await dateinput.click()
const targetyear = 1997
await expect(page.locator('.datepicker-dropdown')).toBeVisible()  //validation using 'expect' to see if calendar is visible or not
const switchbutton = page.locator('.datepicker-switch:visible')
await switchbutton.click()
await switchbutton.click()
let attempt = 10
while(attempt--){
const decadetext = await switchbutton.innerText()   //text is fetched from 'switchbutton' and stored in 'decadetext'
const startyear = parseInt(decadetext.split('-')[0].trim())
if(targetyear>=startyear && targetyear<= startyear +9)break  //when getting exact condition, it will break/stop the iteration
await page.locator('.prev:visible').click()
}
await page.locator('.year:visible').filter({hasText:'1997'}).click()
await page.locator('.month:visible').filter({hasText:'Mar'}).click()
await page.locator('.day:not(.old):not(.new)',{hasText:/^8$/}).click()
const showdate = page.locator('#button-one')
await showdate.click()
})