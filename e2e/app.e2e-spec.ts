import { MaterialBlogPage } from './app.po';

describe('material-blog App', function() {
  let page: MaterialBlogPage;

  beforeEach(() => {
    page = new MaterialBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
