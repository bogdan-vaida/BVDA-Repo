import {test, chromium, webkit} from "@playwright/test"

test("launch chromium browser", async ()=>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto("https://www.google.com")
})