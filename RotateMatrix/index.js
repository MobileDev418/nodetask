/// Task 2
/**
 * You are given an n x n 2D matix. Rotate the matix by 90 degrees (clockwise).
 * Write an arrow function that rotate the matrix by 90 degress (clockwise).
 */

// // Input value
var grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]
  
  let rotate = matrix => {
    matrix = matrix.reverse();
    for (var i in matrix) {
        for (var j = 0; j < i; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    return matrix;
  }
  // output value
  console.log(JSON.stringify(grid), " => ", JSON.stringify(rotate(grid)));