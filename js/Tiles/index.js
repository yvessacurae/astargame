class Tiles {
  constructor() {
    const _tiles = [];
  }

  init() {
    this._tiles = Array
      .from(Array(10), () => Array(10).fill().map(() => Math.round(Math.random()*1)));
  }

  get tileMap() {
    return this._tiles;
  }
}

export default Tiles;
