// Task 2
/**
 * You are given an n x n 2D matix. Rotate the matix by 90 degrees (clockwise).
 * Write an arrow function that rotate the matrix by 90 degress (clockwise).
 */

const grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const flipMatrix = matrix => (
  matrix[0].map((column, index) => (
    matrix.map(row => row[index])
  ))
);

const rotateMatrix = matrix => (
  flipMatrix(matrix.reverse())
);

console.log(rotateMatrix(grid));
