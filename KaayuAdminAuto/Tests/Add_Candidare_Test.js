import { ClientFunction, t, Selector } from 'testcafe';
import add_candidate_Page from '../Pages/add_candidate_Page';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';


const url = 'http://15.156.242.8/login'
const getURL = ClientFunction(() => window.location.href);

fixture('Login Page').page(url).skipJsErrors(true);

test('Loading Add Candidate Page ', async t => {

    LoginPage.SetUserName('sushobhan123');
    LoginPage.SetPassword('Password@1234');
    LoginPage.ClickonLoginButton();

    await t.wait(5000);
    add_candidate_Page.Click_Candidates();
    await t.wait(5000);
    await t.expect(add_candidate_Page.candidate_pageheading.innerText).contains('All Candidates');
    
       
    
});


