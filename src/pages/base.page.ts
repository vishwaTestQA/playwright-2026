import { Page, Locator } from '@playwright/test';

export abstract class Base{
    protected readonly page: Page   //only child uses this page

    constructor(page: Page){
      this.page = page;
    }

    async navigateTo(urlPath?: string){
        const targetUrlPath = urlPath ??  process.env.BASE_URL
        await this.page.goto(targetUrlPath);
    }

    // async navigateToUrl(){
    //     await this.page.goto(this.url);
    // }

  async  clickElementUsingText(locs: Locator[], text:string){
   for(const l of locs){
    if(await l.textContent() === text){
       await l.click();
    }
   }
}

async  scrollIntoTheElement(args: {locator: string}){
     await this.page.evaluate(({locator}) =>{
          const element = document.querySelector(locator)
          if(element){
            element .scrollIntoView({ behavior: 'auto', block: 'center' }); 
          }
      }, args)
}

async scrollToBottomOfPage(){
    await this.page.evaluate(() => {
       window.scrollTo(0, document.body.scrollHeight);
});
}
}


// In mature projects we wont use Basepage 
// Why they skip BasePage:
// Playwright already has rich APIs
// Less abstraction = easier debugging
// Fewer inheritance chains


