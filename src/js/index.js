import Header from './header';
import Tabs from './tabs';
import Portfolio from './portfolio/portfolio';

const siteTitle = document.querySelectorAll(".site-title");
// site-title
siteTitle.forEach((title) => {
  title.innerHTML += "share"
});
// site-title

// header
Header();
// end header
Tabs();

Portfolio();
