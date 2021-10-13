import Header from './header';
import Tabs from './tabs';

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
