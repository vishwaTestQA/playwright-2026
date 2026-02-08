import {expect, test} from '../fixtures/base.fixture'

test.describe(() => {
    test.beforeEach( async ({loginPage}) => {
     await loginPage.navigateToUrl()
     await loginPage.login("standard_user","secret_sauce")
    })

    test('get the text of product', async ({dashBoard}) =>{
     const prodText =  await dashBoard.getProductText(0);
     expect(prodText).toBe("Sauce Labs Backpack")
   })

   test('get the first product price', async ({dashBoard}) => {
       const prodPrice = await dashBoard.getProductPrice(1);
       expect(prodPrice).toBe("$9.99")
   })
})