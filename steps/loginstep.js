 import { Given,When,Then } from "@cucumber/cucumber";
import { expect } from "playwright/test";
import { setDefaultTimeout } from "@cucumber/cucumber";
import userData from "../data/userdata.js";
setDefaultTimeout(30000);

 Given('user is on the login page',async function () {
           this.user = userData
           await this.login.open()
         });
       
         When('user enters valid email and password',async function () {
          await this.login.loginSubmit()
         });
       
    
         Then('user should see the username as logged',async function () {
           await expect(this.login.userName).toHaveText('leon')
         });
       
       
         When('user should logout and navigate back to the home page',async function () {
           await this.login.logout()
           await expect(this.page).toHaveURL('https://automationexercise.com/login')
         });
       
         When('user enters invalid email and password', async function () {
            await this.login.invalidSubmit(this.user)
         })
        
         Then('user should see the error message', async function () {
            await expect(this.login.errorMsg).toHaveText('Your email or password is incorrect!')
         })