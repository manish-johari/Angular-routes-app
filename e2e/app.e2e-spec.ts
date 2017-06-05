import { RoutesAppPage } from './app.po';

describe('routes-app App', () => {
  let page: RoutesAppPage;

  beforeEach(() => {
    page = new RoutesAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
