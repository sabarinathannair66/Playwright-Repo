import{test}from '@playwright/test' 

test('Dropdown in Playwright',async({page})=>{
await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
const dropdownmenu = page.locator('#dropdowm-menu-1')
//await dropdownmenu.selectOption({index:2})   // Index value
//await dropdownmenu.selectOption({value:'sql'}) // value attribute
await dropdownmenu.selectOption({label:'C#'})    //Text value
})

test.only('Handling checkbox in Playwright', async({page})=>{
await page.goto("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
const checkbox =page.locator("//input[@value='option-1']")
//await checkbox.click()
await checkbox.check()
console.log(await checkbox.isChecked())
const radiobuttongreen = page.locator("//input[@value='green']")
await radiobuttongreen.click()
const radiobuttonyellow = page.locator("//input[@value='yellow']")
await radiobuttonyellow.click()
})

//assignment radio button

