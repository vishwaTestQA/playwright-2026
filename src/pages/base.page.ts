import { Page, Locator } from '@playwright/test';

export abstract class Base{
    protected readonly page: Page   //only child uses this page
    protected readonly url: string;

    constructor(page: Page, url: string){
      this.page = page;
      this.url = url;
    }

    async navigateTo(url: string){
        await this.page.goto(url);
    }

    async navigateToUrl(){
        await this.page.goto(this.url);
    }

    
}


// In mature projects we wont use Basepage 
// Why they skip BasePage:
// Playwright already has rich APIs
// Less abstraction = easier debugging
// Fewer inheritance chains


