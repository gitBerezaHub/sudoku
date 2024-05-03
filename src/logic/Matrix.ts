export class Matrix {
  matrix: number[][];

  constructor() {
    this.matrix = this.createBasicMatrix();
  }

  private createBasicMatrix() {
    const matrix = [];
    for (let i = 0; i < 9; i++) {
      matrix[i] = Array(0);
      for (let j = 0; j < 9; j++) {
        matrix[i][j] = Math.floor(((i * 3 + i / 3 + j) % 9) + 1);
        // matrix[i][j] = `${i}, ${j}`;
      }
    }
    return matrix;
  }

  matrixTranpose() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < i; j++) {
        const temp = this.matrix[i][j];
        this.matrix[i][j] = this.matrix[j][i];
        this.matrix[j][i] = temp;
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
        const temp = this.matrix[i][firstColumn * 3 + j];
        this.matrix[i][firstColumn * 3 + j] =
          this.matrix[i][secondColumn * 3 + j];
        this.matrix[i][secondColumn * 3 + j] = temp;
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
        const temp = this.matrix[firstRow * 3 + i][j];
        this.matrix[firstRow * 3 + i][j] = this.matrix[secondRow * 3 + i][j];
        this.matrix[secondRow * 3 + i][j] = temp;
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
      const temp = this.matrix[i][firstColumn + area * 3];
      this.matrix[i][firstColumn + area * 3] =
        this.matrix[i][secondColumn + area * 3];
      this.matrix[i][secondColumn + area * 3] = temp;
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
      const temp = this.matrix[firstRow + area * 3][i];
      this.matrix[firstRow + area * 3][i] =
        this.matrix[secondRow + area * 3][i];
      this.matrix[secondRow + area * 3][i] = temp;
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
}
