import Tiles from './Tiles';

const tiles = new Tiles();
tiles.init();

const tileMap = `<div>${tiles.tileMap}</div>`;
console.log(tiles.tileMap)

document.querySelector('#app').innerHTML = tileMap;
