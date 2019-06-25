const banner = () => {
  const bannerDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const lorem = document.createElement('p');

  bannerDiv.classList.add('banner');
  lorem.classList.add('lorem');

  h1.innerHTML = 'Restauran page';
  lorem.innerHTML = 'Lorem ipsum dolor sit amet ...';

  bannerDiv.appendChild(h1);
  bannerDiv.appendChild(lorem);

  return bannerDiv;
};

export { banner as default };
