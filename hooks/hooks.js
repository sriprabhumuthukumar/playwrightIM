import { Before,After,Status } from "@cucumber/cucumber";
import { chromium } from "playwright";
import config from "../config/config.js";
import Loginpage from "../pages/loginpage.js";

Before(async function () {
   
    this.browser = await chromium.launch({headless:config.headless})
    this.context = await this.browser.newContext()
    this.page = await this.context.newPage()
    this.page.setDefaultTimeout(config.timeout)
    await this.page.goto(config.browserUrl);

    this.login = new Loginpage(this.page)

})


After(async function (scenario) {
    if(scenario.result.status === Status.FAILED && this.page){
        await this.page.screenshot({path:`reports/ss/${scenario.pickle.name}.png`,
        fullPage:true
        })
    }


   if(this.page) await this.page.close()
   if (this.context) await this.context.close()
   if (this.browser) await this.browser.close()

})