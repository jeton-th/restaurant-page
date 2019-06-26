import pageLoad from './pageLoad';
import banner from './banner';
import menu from './menu';
import contact from './contact';

// const fillBanner = () => {
//   const content = document.querySelector('#content');
//   const main = document.createElement('div');

//   content.appendChild(banner());
//   content.appendChild(main);
// };

const changeTab = ((activeTab = false) => {
  pageLoad();

  const content = document.querySelector('#content');
  const main = document.createElement('div');

  content.appendChild(banner());
  content.appendChild(main);

  const tabLinks = document.createElement('nav');
  const menuLink = document.createElement('a');
  const contactLink = document.createElement('a');
  const tabContent = document.createElement('div');

  main.classList.add('main');
  tabLinks.classList.add('tab-links');
  tabContent.classList.add('tab-content');
  menuLink.setAttribute('href', '#');
  contactLink.setAttribute('href', '#');
  menuLink.innerHTML = 'Menu';
  contactLink.innerHTML = 'Contact';

  main.appendChild(tabLinks);
  main.appendChild(tabContent);
  tabLinks.appendChild(menuLink);
  tabLinks.appendChild(contactLink);

  if (activeTab) {
    activeTab.classList.add('active');
  } else {
    menuLink.classList.add('active');
  }

  menu();
  contact();

  [menuLink, contactLink].forEach((tabLink) => {
    tabLink.addEventListener('click', changeTab(tabLink));
  });
})();
