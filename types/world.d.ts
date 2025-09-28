import { Loginpage } from '../pages/Loginpage';

declare module '@cucumber/cucumber' {
  interface World {
    browser?: import('playwright').Browser;
    page?: import('playwright').Page;
    loginpage?: Loginpage;
  }
}
