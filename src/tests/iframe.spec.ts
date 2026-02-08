import test, { expect } from "@playwright/test";
import { Iframe } from "../pages/iframe.page";

 const args = {
    tagname: 'select',
    options: [{value:"",text:"select option"}, {value:"java", text:"java"}, {value:"javascript", text:"javascript"}, {value:"python", text:"python"}],
    classname: 'select-cls'
   }

test('create elemnt',async({page}) => {
    const iframe = new Iframe(page, "https://the-internet.herokuapp.com/iframe")
    await iframe.navigateToUrl();
    await iframe.createCustomDropDown(args);
    await page.pause()
})

test.only('Shadow dom',async ({page}) => {
   await page.goto("https://the-internet.herokuapp.com/shadowdom")
   const shadowEle = await page.locator("[name=my-text]").all();
   
   const textInsideShadow = await shadowEle.filter(el => el.innerHTML());
   console.log("tet inside shadow", textInsideShadow);
})

test.only("isvisible", async ({page})=>{
    const ele = await page.locator("[name=my-text]")
    if(await ele.isVisible()){
        const eleText = ele.textContent();
    }
})