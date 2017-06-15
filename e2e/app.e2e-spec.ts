import { FormsDemoPage } from './app.po';

describe('forms-demo App', () => {
  let page: FormsDemoPage;

  beforeEach(() => {
    page = new FormsDemoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
