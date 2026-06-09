import './env.js'

const config ={
    browserUrl:process.env.BASE_URL,
    browserName:process.env.BROWSERNAME,
    timeout:Number(process.env.TIMEOUT),
    headless:process.env.HEADLESS ==='true'
}

export default config