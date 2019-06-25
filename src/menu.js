const menu = () => {
  const tab = document.createElement('div');
  const h4 = document.createElement('h4');

  tab.classList.add('tab');
  h4.innerHTML = 'Menu';
  tab.appendChild(h4);

  return tab;
};

export { menu as default };
