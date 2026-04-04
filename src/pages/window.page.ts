import { Page } from "@playwright/test";
import { Base } from "./base.page";


class WindowHandle extends Base{
    constructor(page: Page){   // this is the best pattern dont pass anyother in constructor
        super(page)
    }



     
    async setup(){
       
    }

    async switchToTheWindow() {
      
    }  
}

export default WindowHandle