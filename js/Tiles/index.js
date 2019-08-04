class Tiles {
  constructor() {
    const _tiles = [];
  }

  init() {
    this._tiles = Array
      .from(Array(50), () => Array(50).fill().map(() => Math.round(Math.random()*1)));
  }

  get tileMap() {
    return this._tiles;
  }

  drawTiles(canvas) {
    const _SIZE = 15;
    const _COLORS = ["rgb(200,0,0)", "rgb(0, 0, 200)"];

    const _context = canvas.getContext('2d');
    this.tileMap.forEach((tileList, line) => {
      tileList.forEach((tile, key) => {
        console.log(_SIZE*key, _SIZE*line)
        _context.fillStyle = _COLORS[tile];
        _context.fillRect(_SIZE*key, _SIZE*line, _SIZE, _SIZE);
      })
    });
  }
}

export default Tiles;
