import{test,expect}from '@playwright/test' 
import { LoginPage } from '../pages/LoginPage'
import logindata from '../utils/testData.json' with {type:'json'}
import {InventoryPage} from '../pages/InventoryPage' with {type:'json'}


test('Adding inventory to cart',async({page})=>{
const loginPage = new LoginPage(page)
const inventoryPage= new InventoryPage (page)
const usernamevalue = logindata.validusername
const passwordvalue = logindata.validpassword
await loginPage.navigateToApplication()
await loginPage.userLogin(usernamevalue,passwordvalue)
await loginPage.validateloginpage()
await inventoryPage.addToCart()

})