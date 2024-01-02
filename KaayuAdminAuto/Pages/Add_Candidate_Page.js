import { ClientFunction, t, Selector } from 'testcafe';


class Add_Candidate_Page{

    constructor(){
        
        //navigate to add candidate form 
        this.click_candidates = Selector('body > div.wrapper > aside.main-sidebar.sidebar-dark-primary.elevation-4 > div > div.os-padding > div > div > nav > ul > li:nth-child(2) > a');
        this.candidate_pageheading = Selector('body > div.wrapper > div.content-wrapper > div.content-header > div > div > div:nth-child(1) > h1');
        //this.add_candidate_button = Selector('topIconPanel > a');

        //add candidate Personal Information fields 
        this.first_name=Selector('.first-name');
        this.last_name=Selector('.last-name');
        this.ph_number=Selector('.contact_number');
        this.email_address=Selector('.email-address');
       // this.pageheading = Selector('body > div.wrapper > div.content-wrapper > div > div > div > div:nth-child(1) > h1');
    }
    
    async Click_Candidates(){
        await t.click(this.click_candidates);
    } 

   /* async Add_Candidate_Button(){
        await t.click(this.add_candidate_button);
    } */

    



    
}

export default new Add_Candidate_Page();