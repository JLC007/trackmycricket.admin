import { Tmc.AdminPage } from './app.po';

describe('tmc.admin App', () => {
  let page: Tmc.AdminPage;

  beforeEach(() => {
    page = new Tmc.AdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
