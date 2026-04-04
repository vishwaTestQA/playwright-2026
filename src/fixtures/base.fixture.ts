import { test as base } from "@playwright/test"
import { Login } from "../pages/login.page"
import { Dashboard } from "../pages/dashboard.page";
import WindowHandle from "../pages/window.page";

type Pages = {
    loginPage: Login;
    dashBoard: Dashboard;
    windowHandles: WindowHandle;
}

//url inside is a bad practise
const test = base.extend<Pages>({
    loginPage: async ({page}, use) => {
        await use(new Login(page))
    },

    dashBoard: async({page},use) => {
        await use(new Dashboard(page))
    },
    windowHandles: async({page}, use) =>{
        await use(new WindowHandle(page))
    }
})

export default test
// export { expect } from '@playwright/test';