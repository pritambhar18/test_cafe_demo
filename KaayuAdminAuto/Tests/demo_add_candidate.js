import { ClientFunction, t, Selector } from 'testcafe';
import add_candidate_Page from '../Pages/add_candidate_Page';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';

const dataset = require('../../data/addcandidate_personal_info.json');
const url = 'http://15.156.242.8/login';
const getURL = ClientFunction(() => window.location.href);

fixture('Add Candidate Page')
    .page(url)
    .skipJsErrors(true)
    .before(async t => {
        // Before hook: Login to Admin and Navigate to Candidate Page
        LoginPage.SetUserName('sushobhan123');
        LoginPage.SetPassword('Password@1234');
        LoginPage.ClickonLoginButton();
        await t.wait(2000);

        // Navigate to Candidate Page
        add_candidate_Page.Click_Candidates();
        await t.wait(2000);
        await t.expect(add_candidate_Page.candidate_pageheading.innerText).contains('All Candidates');
    });

// Test Case: Add Candidate with Data from JSON
dataset.forEach(data => {
    test(`Add candidate with data - ${data.expectedResult}`, async t => {
        // Assuming you're on the candidate page after logging in and navigating (Before hook)
        await t.expect(add_candidate_Page.add_candidate_pageheading.innerText).contains('Add Candidate');

        // Fill in Candidate Information
        await t.typeText(Selector('#first-name'), data.firstname);
        // Add more steps to fill in other candidate information

        // Submit the form or perform any necessary actions to save the candidate
        // Example: await t.click(Selector('#submit-button'));

        // Add assertions if needed
        // Example: await t.expect(Selector('#success-message').innerText).contains('Candidate added successfully');
    });
});
