import { DriverPage } from './app.po';

describe('driver App', () => {
  let page: DriverPage;

  beforeEach(() => {
    page = new DriverPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
