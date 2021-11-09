import { By } from 'selenium-webdriver';
import { Builder } from '@tpio/javascript-opensdk';

export const simpleTest = async (): Promise<void> => {
    const driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://example.testproject.io/web/');
    await driver.findElement(By.css('#name')).sendKeys('John Smith');
    await driver.findElement(By.css('#password')).sendKeys('12345');
    await driver.findElement(By.css('#login')).click();
    const passed = await driver.findElement(By.css('#logout')).isDisplayed();
    console.log(passed ? 'Test Passed' : 'Test Failed');
    await driver.quit();
};