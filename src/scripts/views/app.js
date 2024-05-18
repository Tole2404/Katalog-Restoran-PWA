import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
 
class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
 
    this._initialAppShell();
  }
 
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
 
    // kita bisa menginisiasikan komponen lain bila ada
  }
 
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url] || routes['/404']; // fallback to 404 page if route is not defined

    try { 
      this._content.innerHTML = await page.render(); 
      await page.afterRender(); 
    } catch (error) {
      // Handle error by displaying a message or redirecting to the homepage
      this._content.innerHTML = '<p>Halaman tidak dapat diakses. Silakan coba lagi nanti.</p>';
      console.error(error);
    }
  }
}
 
export default App;