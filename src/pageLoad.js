const pageLoad = (tabPages) => {
  const tabs = document.querySelector('.tab-content');

  tabPages.forEach((e) => {
    tabs.appendChild(e);
  });
};

export { pageLoad as default };
