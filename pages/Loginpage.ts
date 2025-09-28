import { Page } from 'playwright';
import {expect} from '@playwright/test'

export class Loginpage {
  private page: Page;
  private username = "//input[@id='user-name']"
  private password ="//input[@id='password']"
  private login="//input[@id='login-button']"
  private addtocart="//button[@id='add-to-cart-sauce-labs-backpack']"
  private tshirt= "//button[@id='add-to-cart-sauce-labs-bolt-t-shirt']"
  private dropdown="//select[@data-test='product-sort-container']"
  private secondoption= "//select[@class='product_sort_container'][contains(.,'Name (Z to A)')]"
  private pageverification="//a[@id='item_3_title_link']/div[1]"
  private sortelementprice="//div[@class='inventory_item_price']"
  private shoppingcart= "//div[@id='shopping_cart_container']//a"
  private checkout = "//button[@id='checkout']"
  private checkoutpagedisplay="//div[@class='app_logo']"
  private firstname= "//input[@id='first-name']"
  private lastname= "//input[@id='last-name']"
  private zipcode="//input[@id='postal-code']"
  private continue="//input[@id='continue']"
  private finish="//button[@id='finish']"
  private allproducts= "//div[@class='inventory_item_name']"
  private error = "//h3[contains(text(),'Epic sadface: Username and password do not match a')]"
  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async usernamepasswordentry(UserName:string,PassWord:string ) {
    await this.page.fill(this.username,UserName);
    await this.page.fill(this.password,PassWord);
  }

  async submitbutton() {
    await this.page.click(this.login);
  }
  async selectingitem() {
    await this.page.click(this.addtocart);
  }
  async menswear() {
    await this.page.click(this.tshirt);
  }
  async sorting() {
    await this.page.locator(this.dropdown).selectOption("hilo");
    const selectedValue = await this.page.locator(this.dropdown).inputValue();
    console.log('Selected:', selectedValue);
  }
  async descending () {
    await this.page.click(this.secondoption);
  }
  async ztoa () {
    await this.page.isVisible(this.pageverification);
  }

  async sortorderverification(){
    const listelement= await this.page.locator(this.sortelementprice)
    const text=await listelement.allTextContents()
    console.log(" returned: ",text)
    const numbers = text.map(t => parseFloat(t.replace(/[^0-9.]/g, '')))
    const isDescending = numbers.every((val, idx, arr) => idx === 0 || arr[idx - 1] >= val);
    expect(isDescending).toBe(true)
   // for(const el of listelement){
      //console.log(await el.innerText())
       //console.log(await el.textContent())
   // }
  }
  async cart() {
    await this.page.click(this.shoppingcart);
  }
  async finalcheckinoption () {
    await this.page.isVisible(this.checkout);
  }
  async clickcart() {
    await this.page.click(this.checkout);
}
async display() {
     const value=await this.page.locator(this.checkoutpagedisplay).textContent();
    console.log('Selected:', value);
    expect("Swag Labs").toBe(value)

}

async firstlastnameentry(FirstName:string,Lastname:string,Zipcode:string ) {
    await this.page.fill(this.firstname,FirstName);
    await this.page.fill(this.lastname,Lastname);
    await this.page.fill(this.zipcode,Zipcode);
}
async finalcontinue() {
    await this.page.click(this.continue);
}
async end() {
    await this.page.click(this.finish);
}
async alldisplay(){
  await new Promise((resolve) => setTimeout(resolve, 10000));
   const products=await this.page.locator(this.allproducts).allTextContents();
console.log('selected:',products)
expect(products).toContain("Sauce Labs Bolt T-Shirt")
expect(products).toContain("Sauce Labs Backpack")
}
async errormessage() {
     const errorverification=await this.page.locator(this.error).textContent();
    console.log('Selected:', errorverification);
    expect("Epic sadface: Username and password do not match any user in this service").toBe(errorverification)
}
}
