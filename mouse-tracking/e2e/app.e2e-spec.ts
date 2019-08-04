import { MouseTrackingPage } from './app.po';

describe('mouse-tracking App', () => {
  let page: MouseTrackingPage;

  beforeEach(() => {
    page = new MouseTrackingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
