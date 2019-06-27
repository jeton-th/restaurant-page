const pageLoad = (banner, main) => {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  content.appendChild(banner);
  content.appendChild(main);
};

export { pageLoad as default };
