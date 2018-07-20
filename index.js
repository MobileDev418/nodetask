// Task 1
/**
 * Devise a function that, given a string containing an expression in Reverse Polish notation, evaluates that expression, returning the result.
 */

// const notation = function(postfix) {
//   var result = [];
//   postfix = postfix.split(" ");
//   for(var i = 0; i < postfix.length; i++) {
//       if(postfix[i] != "+" && postfix[i] != "*" && postfix[i] != "-" && postfix[i] != "/" && postfix[i] != "=>") {
//           result.push(postfix[i]);
//       } else {
//           var a = result.pop();
//           var b = result.pop();
//           if(postfix[i] === "+") {
//               result.push(parseInt(a) + parseInt(b));
//           } else if(postfix[i] === "-") {
//               result.push(parseInt(b) - parseInt(a));
//           } else if(postfix[i] === "*") {
//               result.push(parseInt(a) * parseInt(b));
//           } else if(postfix[i] === "/") {
//               result.push(parseInt(b) / parseInt(a));
//           } else if(postfix[i] === "^") {
//               result.push(Math.pow(parseInt(b), parseInt(a)));
//           }
//       }
//   }
//   if(result.length > 1) {
//       return "error";
//   } else {
//       return result.pop();
//   }
// }

// console.log(notation("5 2 + 3 *"));
// console.log(notation("5 2 * 2 * 4 +"));
// console.log(notation("5"));
// console.log(notation("0 1 *"));

/// Task 2
/**
 * You are given an n x n 2D matix. Rotate the matix by 90 degrees (clockwise).
 * Write an arrow function that rotate the matrix by 90 degress (clockwise).
 */

// Input value
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
console.log(JSON.stringify(rotate(grid)));
