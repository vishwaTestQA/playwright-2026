// import {test} from "@playwright/test";
// import { Page } from "@playwright/test";
// import { Login } from "../pages/login.page";

// // test('login to the app', async ({page}) => { 
// //     await page.goto('https://www.saucedemo.com/')
// //      await page.getByRole('textbox', {name: 'Username'}).fill("standard_user")
// //      await page.getByRole('textbox', {name: 'Password'}).fill("secret_sauce")
// //      await page.getByRole('button', {name: 'Login'}).click()
// //  })

//  test('login to the app', async ({page}) => { 
//     const loginPage = new Login(page)
//     await page.goto('https://www.saucedemo.com/')
//     await loginPage.login("standard_user","secret_sauce")
//  })