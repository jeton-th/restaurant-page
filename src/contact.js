const contact = () => {
  const tab = document.createElement('div');
  const h4 = document.createElement('h4');

  tab.classList.add('tab');
  h4.innerHTML = 'Contact';
  tab.appendChild(h4);

  return tab;
};

export { contact as default };
