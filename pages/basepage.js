export default class Basepage {
    constructor(page){
        this.page = page;
    }

    async click(locator){
        await locator.waitFor({state:'visible'})
        await locator.click()
    }

    async fill(locator,value){
        await locator.waitFor({state:'visible'})
        await locator.fill(value)
    }

    async dropdown(locator,value){
        await locator.waitFor({state:'visible'})
        await locator.selectOption({index:value})
    }

    async getText(locator){
        return await locator.textContent()
        
    }

    async navigate(url){
        await this.page.goto(url)
    }
 
}