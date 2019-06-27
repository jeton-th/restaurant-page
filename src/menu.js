const menu = () => {
  const tab = document.createElement('div');
  tab.classList.add('tab');

  const dish1 = document.createElement('div');
  const heading1 = document.createElement('h2');
  const img1 = document.createElement('img');

  dish1.classList.add('menu');
  heading1.innerHTML = 'Beef and Cheddar Casserole';
  img1.setAttribute('src', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/12/19/0/FNK_Beef-and-Cheddar-Casserole_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382542309999.jpeg');
  img1.setAttribute('alt', 'Beef and Cheddar Casserole');

  dish1.appendChild(img1);
  dish1.appendChild(heading1);

  const dish2 = document.createElement('div');
  const heading2 = document.createElement('h2');
  const img2 = document.createElement('img');

  dish2.classList.add('menu');
  heading2.innerHTML = 'Grilled Salmon and Polenta';
  img2.setAttribute('src', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/7/25/0/FNM_090117-Grilled-Salmon-and-Polenta_s4x3.jpg.rend.hgtvcom.826.620.suffix/1501041041535.jpeg');
  img2.setAttribute('alt', 'Grilled Salmon and Polenta');

  dish2.appendChild(img2);
  dish2.appendChild(heading2);

  const dish3 = document.createElement('div');
  const heading3 = document.createElement('h2');
  const img3 = document.createElement('img');

  dish3.classList.add('menu');
  heading3.innerHTML = 'Meatball Marsala';
  img3.setAttribute('src', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/1/18/0/FNM030117_Meatball-Marsala_s4x3.jpg.rend.hgtvcom.826.620.suffix/1484758909190.jpeg');
  img3.setAttribute('alt', 'Meatball Marsala');

  dish3.appendChild(img3);
  dish3.appendChild(heading3);

  const dish4 = document.createElement('div');
  const heading4 = document.createElement('h2');
  const img4 = document.createElement('img');

  dish4.classList.add('menu');
  heading4.innerHTML = 'Sweet and Sour Meatballs';
  img4.setAttribute('src', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/1/10/4/WU1511H_Sweet-And-Sour-Meatballs_s4x3.jpg.rend.hgtvcom.826.620.suffix/1484096531273.jpeg');
  img4.setAttribute('alt', 'Sweet and Sour Meatballs');

  dish4.appendChild(img4);
  dish4.appendChild(heading4);

  tab.appendChild(dish1);
  tab.appendChild(dish2);
  tab.appendChild(dish3);
  tab.appendChild(dish4);
  return tab;
};

export { menu as default };
