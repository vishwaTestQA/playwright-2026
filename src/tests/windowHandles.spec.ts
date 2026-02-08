import test, { chromium } from "@playwright/test";
import { Login } from "../pages/login.page";

test.describe('window handling test',() => {

  test.beforeEach( async() => {
      const browser = await chromium.launch({
           headless:false
      })
      const context = await browser.newContext();  
      const page = await context.newPage();  //from context we get new page
       await new Login(page, "https://www.saucedemo.com").login("standard_user","secret_sauce");
  })

  test('windowhandles with title',async ({page})=>{
      await page.locator(".social").scrollIntoViewIfNeeded()
  })
})