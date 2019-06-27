const banner = () => {
  const bannerDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const a = document.createElement('a');
  const p = document.createElement('p');

  bannerDiv.classList.add('banner');
  a.innerHTML = 'Restaurant Page';
  a.setAttribute('href', '');
  p.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore neque recusandae, aut voluptates, temporibus magni, quis natus pariatur sapiente qui odio expedita modi eius corporis quibusdam tenetur alias odit optio?';

  bannerDiv.appendChild(h1);
  h1.appendChild(a);
  bannerDiv.appendChild(p);

  return bannerDiv;
};

export { banner as default };
