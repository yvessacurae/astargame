import Tiles from './Tiles';

const startGame = () => {
  const tiles = new Tiles();
  tiles.init();

  const tileMap = '<canvas id="game" width="1000" height="1000"></canvas>';

  document.querySelector('#app').innerHTML = tileMap;
  const _canvas = document.querySelector('#game');
  tiles.drawTiles(_canvas);
}

startGame();
