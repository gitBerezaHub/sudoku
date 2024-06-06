export type Cell = {
  digit: number;
  incorrectDigit: number;
  isHide: boolean;
};

export class Matrix {
  matrix: Cell[][];

  constructor() {
    this.matrix = [];
    for (let i = 0; i < 9; i++) {
      this.matrix[i] = [];
      for (let j = 0; j < 9; j++) {
        this.matrix[i][j] = {
          digit: Math.floor(((i * 3 + i / 3 + j) % 9) + 1),
          incorrectDigit: 0,
          isHide: false,
        };
      }
    }
  }

  matrixTranpose() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < i; j++) {
        const temp = this.matrix[i][j].digit;
        this.matrix[i][j].digit = this.matrix[j][i].digit;
        this.matrix[j][i].digit = temp;
      }
    }
  }

  swapColumns() {
    const firstColumn = Math.round(Math.random() * 2);
    let secondColumn = Math.round(Math.random() * 2);
    while (secondColumn === firstColumn) {
      secondColumn = Math.round(Math.random() * 2);
    }

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 3; j++) {
        const temp = this.matrix[i][firstColumn * 3 + j].digit;
        this.matrix[i][firstColumn * 3 + j].digit =
          this.matrix[i][secondColumn * 3 + j].digit;
        this.matrix[i][secondColumn * 3 + j].digit = temp;
      }
    }
  }

  swapRows() {
    const firstRow = Math.round(Math.random() * 2);
    let secondRow = Math.round(Math.random() * 2);
    while (secondRow === firstRow) {
      secondRow = Math.round(Math.random() * 2);
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 9; j++) {
        const temp = this.matrix[firstRow * 3 + i][j].digit;
        this.matrix[firstRow * 3 + i][j].digit =
          this.matrix[secondRow * 3 + i][j].digit;
        this.matrix[secondRow * 3 + i][j].digit = temp;
      }
    }
  }

  swapSmallColumns() {
    const area = Math.round(Math.random() * 2);
    const firstColumn = Math.round(Math.random() * 2);
    let secondColumn = Math.round(Math.random() * 2);
    while (secondColumn === firstColumn) {
      secondColumn = Math.round(Math.random() * 2);
    }

    for (let i = 0; i < 9; i++) {
      const temp = this.matrix[i][firstColumn + area * 3].digit;
      this.matrix[i][firstColumn + area * 3].digit =
        this.matrix[i][secondColumn + area * 3].digit;
      this.matrix[i][secondColumn + area * 3].digit = temp;
    }
  }

  swapSmallRows() {
    const area = Math.round(Math.random() * 2);
    const firstRow = Math.round(Math.random() * 2);
    let secondRow = Math.round(Math.random() * 2);
    while (secondRow === firstRow) {
      secondRow = Math.round(Math.random() * 2);
    }

    for (let i = 0; i < 9; i++) {
      const temp = this.matrix[firstRow + area * 3][i].digit;
      this.matrix[firstRow + area * 3][i].digit =
        this.matrix[secondRow + area * 3][i].digit;
      this.matrix[secondRow + area * 3][i].digit = temp;
    }
  }

  shuffleMatrix() {
    for (let i = 0; i < 10000; i++) {
      const num = Math.round(Math.random() * 5);
      if (num === 1) {
        this.matrixTranpose();
      }
      if (num === 2) {
        this.swapColumns();
      }
      if (num === 3) {
        this.swapRows();
      }
      if (num === 4) {
        this.swapSmallColumns();
      }
      if (num === 5) {
        this.swapSmallRows();
      }
    }
  }

  deleteCell(quantity: number) {
    // MUST BE REWRITTEN. DOESN'T WORK!
    for (let i = 0; i < quantity; i++) {
      const row = Math.round(Math.random() * 8);
      const column = Math.round(Math.random() * 8);
      if (!this.matrix[row][column].isHide) {
        this.matrix[row][column].isHide = true;
      } else {
        i--;
      }
    }
  }

  getCoords(num: number) {
    const arr = [];
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (this.matrix[i][j].digit === num) {
          arr.push({ row: i, column: j });
        }
      }
    }
    return arr;
  }
}
