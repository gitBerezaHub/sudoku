export function createBasicMatrix() {
  const matrix = [];
  for (let i = 0; i < 9; i++) {
    matrix[i] = Array(0);
    for (let j = 0; j < 9; j++) {
      matrix[i][j] = Math.floor(((i * 3 + i / 3 + j) % 9) + 1);
      // matrix[i][j] = ((i * 3 + i / 3 + j) % 9) + 1;
      // matrix[i][j] = `${i}, ${j}`;
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

export function swapRows(matrix: number[][], f: number, s: number) {
  const swapped = [];
  for (let i = 0; i < 9; i++) {
    swapped[i] = Array(0);
    for (let j = 0; j < 9; j++) {
      swapped[i][j] = matrix[i][j];
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      swapped[Math.floor(f - (f % 3)) + i][
        Math.floor((f % 3) / 3 + (f % 3) * 3 + j)
      ] =
        matrix[Math.floor(s - (s % 3)) + i][
          Math.floor((s % 3) / 3 + (s % 3) * 3 + j)
        ];

      swapped[Math.floor(s - (s % 3)) + i][
        Math.floor((s % 3) / 3 + (s % 3) * 3 + j)
      ] =
        matrix[Math.floor(f - (f % 3)) + i][
          Math.floor((f % 3) / 3 + (f % 3) * 3 + j)
        ];
    }
  }
  return swapped;
}
