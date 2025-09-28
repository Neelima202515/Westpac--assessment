import { Given, When, Then,setDefaultTimeout } from '@cucumber/cucumber';
import { Loginpage } from '../pages/Loginpage';
setDefaultTimeout(15000)
Given('I navigate to the application', async function () {
this.loginpage=new Loginpage(this.page)
await this.loginpage.navigateTo()

});

When('I enter the user name {string} and password {string}', async function (username:string,password:string) {
   // instantiate page object
   //this.Login = new login(this.page!);
   await this.loginpage.usernamepasswordentry(username,password);
});

Then('I click on sudmit button', async function () {
   // instantiate page object
   //this.Login = new login(this.page!);
   await this.loginpage.submitbutton();
});
Then('I click on addtocart button', async function () {
   // instantiate page object
   //this.Login = new login(this.page!);
   await this.loginpage.selectingitem();
});
Then('I click the tshirt', async function () {
   // instantiate page object
   //this.Login = new login(this.page!);
   await this.loginpage.menswear();
})
Then('I select the filterdropdown option', async function () {
   await this.loginpage.sorting();
})
Then('I select on name Z to A option', async function () {
   await this.loginpage.descending();
})
Then('displays the inventory-item-name', async function () {
   await this.loginpage.ztoa();
})
Then('I verify the sorting order is correct', async function () {
   await this.loginpage.sortorderverification();
})
Then('I click the shoppingcart', async function () {
   await this.loginpage.cart();
})
Then('it displays the checkout button', async function () {
   await this.loginpage.finalcheckinoption();
})
Then('I click the checkout button',async function(){
 await this.loginpage.clickcart();
})
Then('swag labs page displayed',async function(){
 await this.loginpage.display();
})
Then('I enter firstname {string} lastname {string} and zippostal code {string}', async function (firstname:string,lastname:string,zippostalcode:string) {
   // instantiate page object
   //this.Login = new login(this.page!);
   await this.loginpage.firstlastnameentry(firstname,lastname,zippostalcode);
})
Then('I click the continue button', async function () {
   await this.loginpage.finalcontinue();
})
Then('I click the finish button', async function () {
   await this.loginpage.end();
})
Then('selected products are displayed', async function () {
   await this.loginpage.alldisplay();
})
Then('error been displayed', async function () {
   await this.loginpage.errormessage();
})
