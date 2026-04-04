import { Page } from "@playwright/test";
import { Base } from "./base.page";

export class Iframe extends Base{
   readonly frame;
   readonly bodyEle;

   constructor(page: Page){
     super(page)
     this.frame = this.page.frameLocator("#mce_0_ifr");
     this.bodyEle = this.frame.locator(".example");
      
   }

   async getP(){
     return await this.frame?.locator('p').textContent() 
   }

   async createCustomDropDown(args:object){
      await this.page.evaluate(({tagname, options, classname}) => {
        const selectEle = document.createElement('select')
        selectEle.classList.add(classname)
        options.map(opt => {
          const option = document.createElement('option');
          option.value = opt.value;
          option.textContent = opt.text;
          selectEle.appendChild(option)
        })
        
       const bodyEle = document.querySelector(".example");
       bodyEle?.appendChild(selectEle);
      }, args)
   }
}