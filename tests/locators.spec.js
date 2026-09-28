import{test}from '@playwright/test' //playwright test runner to help execute in every test file

test('Locators in Playwright',async({page})=>{
await page.goto("https://selenium.qabible.in/simple-form-demo.php")
const messagefield = page.locator('#button-one')  // creating web element in playwright / # symbol denotes the id locator // id locator - most commonly used
const showmessagebutton = page.locator('.btn btn-primary')  // class locator using . to denote locator
const messagefield2 = page.locator("//input[@id='single-input-field']")    //x-path -> //tagname[@attribute='attributevalue'] -> // -current node
/*await messagefield.type("Hello")
await messagefield.type("Nandu")*/
await messagefield.fill("Hello")
await messagefield.fill("Nandu")
await showmessagebutton.click()
})

test.only('Special lactors in Playwright',async({page})=>{
await page.goto("https://groceryapp.uniqassosiates.com/admin/login")
const username = page.locator("//input[@name='username']") 
const password = page.locator("//input[@name='password']")
const signinbutton = page.locator("//button[@type='submit']")
await username.fill('admin')
await password.fill('admin')
await signinbutton.click()
await page.goto("https://groceryapp.uniqassosiates.com/admin/list-admin")
//await page.getByRole('button',{name:'Active'}).nth(1).click()  //special locators -> GetbyRole - mention more elements('Active') in this locator coz many button elements nth1 index
await page.getByText('Active').last().click()                   //special locators -> GetbyText// first() & last() -> to find first & last index
})

