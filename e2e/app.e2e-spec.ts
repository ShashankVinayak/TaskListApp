import { TasklistPage } from './app.po';

describe('tasklist App', function() {
  let page: TasklistPage;

  beforeEach(() => {
    page = new TasklistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
