import { Page } from "@playwright/test";
import { Base } from "./base.page";

export class Dashboard extends Base{
    readonly prodText;
    readonly prodPrice;

    constructor(page: Page, url:string = ""){
        super(page, url)
        this.prodText = this.page.locator(".inventory_item_name")
        this.prodPrice = this.page.locator(".inventory_item_price")
    }

    async getProductText(index: number): Promise<string>{
        return await this.prodText.nth(index).textContent() as string
    }

    async getProductPrice(index: number){
        return await this.prodPrice.nth(index).textContent();
    }

}