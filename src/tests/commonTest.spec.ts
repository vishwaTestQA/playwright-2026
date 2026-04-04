import test, { expect } from "@playwright/test";

test('test shadowRoot', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com")
    const liEle = await page.locator("li").all()
    
    // page.locator("")
    for(const el of liEle){
        console.log("all ===========",await el.textContent())
       if(await el.textContent() === "Shadow DOM"){
         await el.scrollIntoViewIfNeeded()
         await el.locator("a").click()
         break;
       }
    }

       const shadowRootLocs =  await page.locator("my-paragraph > ul").all()
        for(const lc of shadowRootLocs){
            console.log(await lc.nth(2).textContent())
        }

})