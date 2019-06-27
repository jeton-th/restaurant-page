import pageLoad from './pageLoad';
import menu from './menu';
import banner from './banner';
import contact from './contact';

const getLinks = () => {
  const menuLink = document.createElement('a');
  const contactLink = document.createElement('a');

  menuLink.id = 'menu';
  contactLink.id = 'contact';

  menuLink.innerHTML = 'Menu';
  contactLink.innerHTML = 'Contact';

  return [menuLink, contactLink];
};

const getTabContent = (activeLink = 'menu') => {
  if (activeLink === 'contact') {
    return contact();
  }
  return menu();
};

const getMain = (activeLink = 'menu') => {
  const main = document.createElement('div');
  main.classList.add('main');

  const nav = document.createElement('nav');
  const links = getLinks(activeLink);

  links.forEach((link) => {
    nav.appendChild(link);
    link.classList.remove('active');
    if (link.id === activeLink) link.classList.add('active');
    link.addEventListener('click', () => {
      pageLoad(banner(), getMain(link.id));
    }, false);
  });

  main.appendChild(nav);
  main.appendChild(getTabContent(activeLink));
  return main;
};

pageLoad(banner(), getMain());
