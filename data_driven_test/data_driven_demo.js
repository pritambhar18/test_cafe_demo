// imports file 
import { Selector , t, ClientFunction } from 'testcafe';

//dataset path
const dataset = require('../../kaayu_admin_test_cafe/data/demodata.json');


fixture(`Data Driven Test Demo`)

dataset.forEach(data => {
    console.log(data)
    test.page(`http://the-internet.herokuapp.com/login`)
    (`Login with valid credentials- ${data.expectedResult}`, async t => {
        const actual_result = Selector('#flash').innerText
        
        await t
        .typeText(Selector('#username'),data.username)
        .typeText(Selector('#password'),data.Password)
        .click('#login > button')
        .takeScreenshot({
            path: `Test_Screensot ${data.expectedResult}.png`,
            fullPage:true
  
        });
        await t.expect(actual_result).contains(data.expectedResult)

    })
    

        
    
});
