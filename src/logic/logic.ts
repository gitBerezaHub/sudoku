export function createBasicMatrix() {
  const matrix = [];
  for (let i = 0; i < 9; i++) {
    matrix[i] = Array(0);
    for (let j = 0; j < 9; j++) {
      // matrix[i][j] = Math.floor(((i * 3 + i / 3 + j) % 9) + 1);
      matrix[i][j] = `${i}, ${j}`;
      // matrix[i][j] = ((i * 3 + i / 3 + j) % 9) + 1;
    }
  }
  return matrix;
}

export function matrixTransposing(matrix: number[][]) {
  const transposed = [];
  for (let i = 0; i < 9; i++) {
    transposed[i] = Array(0);
    for (let j = 0; j < 9; j++) {
      transposed[i][j] = matrix[j][i];
    }
  }
  return transposed;
}

export function swapSmallRows(
  matrix: number[][],
  firstRow: number,
  secondRow: number
) {
  const swapped = [];
  for (let i = 0; i < 9; i++) {
    swapped[i] = Array(0);
    for (let j = 0; j < 9; j++) {
      swapped[i][j] = matrix[i][j];
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      swapped[Math.floor(firstRow - (firstRow % 3)) + i][
        Math.floor((firstRow % 3) / 3 + (firstRow % 3) * 3 + j)
      ] =
        matrix[Math.floor(secondRow - (secondRow % 3)) + i][
          Math.floor((secondRow % 3) / 3 + (secondRow % 3) * 3 + j)
        ];

      swapped[Math.floor(secondRow - (secondRow % 3)) + i][
        Math.floor((secondRow % 3) / 3 + (secondRow % 3) * 3 + j)
      ] =
        matrix[Math.floor(firstRow - (firstRow % 3)) + i][
          Math.floor((firstRow % 3) / 3 + (firstRow % 3) * 3 + j)
        ];
    }
  }
  return swapped;
}

export function swapSmallColumns(
  matrix: number[][],
  firstColumn: number,
  secondColumn: number
) {
  const swapped = [];
  for (let i = 0; i < 9; i++) {
    swapped[i] = Array(0);
    for (let j = 0; j < 9; j++) {
      swapped[i][j] = matrix[i][j];
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      swapped[Math.floor(firstColumn / 3 + i * 3)][
        Math.floor((firstColumn % 3) + j * 3)
      ] =
        matrix[Math.floor(secondColumn / 3 + i * 3)][
          Math.floor((secondColumn % 3) + j * 3)
        ];

      swapped[Math.floor(secondColumn / 3 + i * 3)][
        Math.floor((secondColumn % 3) + j * 3)
      ] =
        matrix[Math.floor(firstColumn / 3 + i * 3)][
          Math.floor((firstColumn % 3) + j * 3)
        ];
    }
  }
  return swapped;
}

export function swapColumns(
  matrix: number[][],
  firstColumn: number,
  secondColumn: number
) {
  const swapped = [];
  for (let i = 0; i < 9; i++) {
    swapped[i] = Array(0);
    for (let j = 0; j < 9; j++) {
      swapped[i][j] = matrix[i][j];
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 9; j++) {
      swapped[firstColumn + i * 3][j] = matrix[secondColumn + i * 3][j];
      swapped[secondColumn + i * 3][j] = matrix[firstColumn + i * 3][j];
    }
  }
  return swapped;
}

export function swapRows(
  matrix: number[][],
  firstRow: number,
  secondRow: number
) {
  let swapped = [];
  for (let i = 0; i < 9; i++) {
    swapped[i] = Array(0);
    for (let j = 0; j < 9; j++) {
      swapped[i][j] = matrix[i][j];
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 9; j++) {
      swapped[firstRow * 3 + i][j] = matrix[secondRow * 3 + i][j];
      swapped[secondRow * 3 + i][j] = matrix[firstRow * 3 + i][j];
    }
  }

  return swapped;
}
