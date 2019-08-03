import Tiles from './Tiles';

const tiles = new Tiles();
tiles.init();

window.addEventListener('DOMContentLoaded', () => {
  const tileMap = `<div>${tiles.tileMap}</div>`;

  document.querySelector('#app').innerHTML = tileMap;
});
