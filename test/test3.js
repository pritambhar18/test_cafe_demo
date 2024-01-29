import { ClientFunction, t, Selector } from 'testcafe';
import candidateData from '../data/addcandidate_personal_info.json';  // Adjust the path based on your project structure
const dataset = require('../data/addcandidate_personal_info.json')

const url = 'http://15.156.242.8/login'
const getURL = ClientFunction(() => window.location.href);
// ... other imports and code ...
fixture('Add Candidate Page').page(url).skipJsErrors(true);
dataset.forEach(data => {
    console.log(data)

    test('Login with valid credentials and Data Collection', async t => {

        const usernameInput = Selector('#username');
        const passwordInput = Selector('#password');
        const submitButton = Selector('body > div.container.h-100.d-flex.justify-content-center.align-items-center.flex-row > div > div:nth-child(2) > div > div > div > div.col-lg-6.d-flex.justify-content-center.align-items-center > div > form > button');
        const dashboardElement = Selector('.col-sm-6 h1.m-0').withText('Dashboard');
        const candidateElement = Selector("body > div.wrapper > aside.main-sidebar.sidebar-dark-primary.elevation-4 > div > div.os-padding > div > div > nav > ul > li:nth-child(2) > a");

        // Enter username and password
        await t.typeText(usernameInput, 'pritam123');
        await t.typeText(passwordInput, '12345678');
        await t.click(submitButton);
        await t.wait(5000);
        await t.click(candidateElement);

        const table = Selector('#candidates-table > tbody');
        const nextPageButton = Selector('.paginate_button.next'); // Change this selector to the appropriate selector for the next page button

        let currentPage = 1;

        while (await nextPageButton.exists) {
            await t.expect(table.exists).ok();
    
            const rowCount = await table.find('tr').count;
    
            for (let i = 0; i < rowCount; i++) {
                const tdText = await table.find('tr').nth(i).find('td').nth(4).textContent;
    
                // Check if the collected email is in the candidateData
                const matchedCandidate = data.email.find(candidate => candidate.email === tdText);
    
                if (matchedCandidate) {
                    console.log('Match found for email:', tdText);
                    console.log('Candidate Name:', matchedCandidate.name);
                    // Perform actions for matched candidate
                } else {
                    console.log('No match found for email:', tdText);
                    // Perform actions for unmatched email
                }
            }
        }
        // ... rest of your code ...

    })
});