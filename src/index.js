import pageLoad from './pageLoad';
import banner from './banner';
import menu from './menu';
import contact from './contact';

const content = document.querySelector('#content');
const main = document.createElement('div');
const tabContent = document.createElement('div');
const tabLinks = document.createElement('div');
const menuLink = document.createElement('input');
const contactLink = document.createElement('input');

main.classList.add('main');
tabLinks.classList.add('tab-links');
tabContent.classList.add('tab-content');
menuLink.setAttribute('type', 'radio');
contactLink.setAttribute('type', 'radio');

content.appendChild(banner());
content.appendChild(main);
main.appendChild(tabLinks);
main.appendChild(tabContent);
tabLinks.appendChild(menuLink);
tabLinks.appendChild(contactLink);

const menuContent = menu();
const contactContent = contact();
pageLoad([menuContent, contactContent]);

