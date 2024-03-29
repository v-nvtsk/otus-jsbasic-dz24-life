import initArray from "./utils/init-array";

export class Store {
  private store: number[][] = [[]];

  constructor(private size: number = 0) {
    this.size = size;
    this.setCells(initArray(size));
  }

  public getSize(): number {
    return this.size;
  }

  public resize(size: number): void {
    const newState: number[][] = initArray(size);
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        if (this.store[i] !== undefined && j < this.store[i].length) {
          newState[i][j] = this.store[i][j];
        }
      }
    }
    this.setCells(newState);
  }

  public getCells(): number[][] {
    return this.store;
  }

  public getCell(x: number, y: number): number {
    return this.store[x][y];
  }

  public setCells(cells: number[][]): void {
    this.store = cells;
    this.size = cells.length;
  }

  public setCellState(x: number, y: number, state: number): void {
    this.store[x][y] = state;
  }
}
