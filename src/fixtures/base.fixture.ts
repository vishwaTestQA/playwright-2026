import { test as base } from "@playwright/test"
import { Login } from "../pages/login.page"
import { Dashboard } from "../pages/dashboard.page";

type Pages = {
    loginPage: Login;
    dashBoard: Dashboard;
}

export const test = base.extend<Pages>({
    loginPage: async ({page}, use) => {
        await use(new Login(page, "https://www.saucedemo.com/"))
    },

    dashBoard: async({page},use) => {
        await use(new Dashboard(page, "https://www.saucedemo.com/inventory.html"))
    }
})

export { expect } from '@playwright/test';