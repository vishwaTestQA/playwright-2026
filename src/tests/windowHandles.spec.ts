import { chromium, Locator, Page } from "@playwright/test";
import { Login } from "../pages/login.page";
import test  from "../fixtures/base.fixture";
test.describe('window handling test',() => {

  test.beforeEach( async() => {
      const browser = await chromium.launch({
           headless:true
      })
      const context = await browser.newContext();  
      const page = await context.newPage();  //from context we get new page
      await page.goto("https://www.saucedemo.com");
      await new Login(page).login("standard_user","secret_sauce");
  })

test('windowhandles with title', async ({page, windowHandles})=>{
      // const social = page.locator(".social").nth(1).scrollIntoViewIfNeeded()
   
      // const socialUL =  page.locator(".social");
      // await socialUL.scrollIntoViewIfNeeded();
      // await page.pause()
      // await page.waitForLoadState('networkidle')
      // await windowHandles.scrollIntoTheElement({locator: ".social"})
      await windowHandles.scrollToBottomOfPage();
      const socialMediaLocators = await page.locator(".social li").all()
      await windowHandles.clickElementUsingText(socialMediaLocators, "Facebook");
      // await windowHandles.
      await page.waitForTimeout(3000)
      // await page.waitForURL("https://www.facebook.com/saucelabs")
      await page.waitForLoadState('networkidle')
  })
})

