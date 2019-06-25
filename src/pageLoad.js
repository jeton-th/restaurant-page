const pageLoad = () => {
  const content = document.querySelector('#content');
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Restauran page';
  content.appendChild(h1);
};

export { pageLoad as default };
