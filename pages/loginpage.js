import Basepage from "./basepage.js";
import config from "../config/config.js"; 

export default class Loginpage extends Basepage{
    constructor(page){
        super(page)

        this.loginEmailBtn = this.page.locator('[data-qa="login-email"]')
        this.loginPasswordBtn = this.page.locator('[data-qa="login-password"]')
        this.submitBtn = this.page.locator('[data-qa="login-button"]')
        // validate 
        this.userName = this.page.locator('a b')
        this.logoutBtn = this.page.locator('a[href="/logout"]')
        this.errorMsg = this.page.locator('p[style="color: red;"]')


    }

    async open(){
        await this.navigate(`${config.browserUrl}/login`)
    }

    async loginSubmit(){
        await this.fill(this.loginEmailBtn, process.env.LOGIN_EMAIL)
        await this.fill(this.loginPasswordBtn, process.env.LOGIN_PASSWORD)
        await this.click(this.submitBtn)
    }

    async logout(){
        await this.click(this.logoutBtn)
    }
   
    async invalidSubmit(user){
        await this.fill(this.loginEmailBtn, user.invalidEmail)
        await this.fill(this.loginPasswordBtn, user.invalidPassword)
        await this.click(this.submitBtn)
    }



}