import { Base } from "./base.page";
import { Page, Locator } from '@playwright/test';

// Important concept (this clears the confusion)
// ❗ Playwright Locator ≠ WebElement (Selenium)

// Creating a locator does NOT query the DOM
// No element is searched or resolved at constructor time
// Resolution happens only when you do:
// click()
// fill()
// textContent()
// etc.
// So this is 100% fine and production-grade:
 
export class Login extends Base{

 //readonlt properties Can be assigned only once (usually in constructor)
 readonly username:Locator;
 readonly password:Locator;
 readonly loginButton: Locator;

 constructor(page: Page){
        super(page)
        this.username = page.getByRole('textbox', {name:'Username'});
        this.password = page.getByRole('textbox', {name:'Password'});
        // this.loginButton = page.getByRole('textbox', {name: 'Login'});
        this.loginButton = page.locator('[name=login-button]')
    }

    async login(username:string, password:string){
     await this.username.fill(username)
     await this.password.fill(password)
     await this.loginButton.click()
    }
}



