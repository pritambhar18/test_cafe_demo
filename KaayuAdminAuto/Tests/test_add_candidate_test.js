// Import the AddCandidatePage class
import { ClientFunction, t, Selector } from 'testcafe';
import add_candidate_Page from '../Pages/add_candidate_Page';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import { path } from 'pdfkit';

const dataset = require('../../data/addcandidate_personal_info.json')
const url = 'http://15.156.242.8/login'
const getURL = ClientFunction(() => window.location.href);
// ... other imports and code ...
fixture('Add Candidate Page').page(url).skipJsErrors(true);
dataset.forEach(data => {
    console.log(data)
    test(`Login to Admin and navigate to add candidate page - ${data.expectedResult}`, async t => {
        LoginPage.SetUserName('sushobhan123');
        LoginPage.SetPassword('Password@1234');
        LoginPage.ClickonLoginButton();
        await t.wait(2000);
        add_candidate_Page.Click_Candidates();
        await t.wait(2000);
        await t.expect(add_candidate_Page.candidate_pageheading.innerText).contains('All Candidates');// ... your existing code ...

        // Add a candidate
        // ...

        // Fetch the table data
        const tableData = await add_candidate_Page.getTableData();

        // Parse the JSON data
        const expectedCandidate = {
            firstName: data.firstname,
            lastName: data.lastname,
            phoneNumber: data.ph_no,
            email: data.email,
            country: data.country,
            state: data.state,
            city: data.city,
            locality: data.locality
        };

        // Check if the added candidate is present in the table data
        const isCandidateAdded = tableData.some(candidate => {
            return (
                candidate.firstName === expectedCandidate.firstName &&
                candidate.lastName === expectedCandidate.lastName &&
                candidate.phoneNumber === expectedCandidate.phoneNumber &&
                candidate.email === expectedCandidate.email &&
                candidate.country === expectedCandidate.country &&
                candidate.state === expectedCandidate.state &&
                candidate.city === expectedCandidate.city &&
                candidate.locality === expectedCandidate.locality
            );
        });

        // Assertion
        await t.expect(isCandidateAdded).eql(true);
    });
});
