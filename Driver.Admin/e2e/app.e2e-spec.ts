import { Driver.AdminPage } from './app.po';

describe('driver.admin App', () => {
  let page: Driver.AdminPage;

  beforeEach(() => {
    page = new Driver.AdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
