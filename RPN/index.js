// Task 1
/**
 * Devise a function that, given a string containing
 * an expression in Reverse Polish notation,
 * evaluates that expression, returning the result.
 */

// const notation = function(postfix) {
//   var result = [];
//   postfix = postfix.split(" ");
//   for(var i = 0; i < postfix.length; i++) {
//       if(postfix[i] != "+" && postfix[i] != "*"
//          && postfix[i] != "-" && postfix[i] != "/"
//          && postfix[i] != "=>") {
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

// console.log("5 2 + 3 * =>", notation("5 2 + 3 *"));
// console.log("5 2 * 2 * 4 + =>", notation("5 2 * 2 * 4 +"));
// console.log("5 =>", notation("5"));
// console.log("0 1 * =>", notation("0 1 *"));

// -----------------------------------
// // Using reverse-polish-notation npm
// var rpn = require('reverse-polish-notation')

// console.log(rpn('5 1 2 + 4 * + 3 -')) // prints "14"

const notation = function (postfix) {
  const result = [];
  const postfix1 = postfix.split(' ');

  postfix1.forEach((element) => {
    if (element !== '+' && element !== '*' && element !== '-' && element !== '/' && element !== '=>') {
      result.push(element);
    } else {
      const a = result.pop();
      const b = result.pop();
      if (element === '+') {
        result.push(parseInt(a, 10) + parseInt(b, 10));
      } else if (element === '-') {
        result.push(parseInt(b, 10) - parseInt(a, 10));
      } else if (element === '*') {
        result.push(parseInt(a, 10) * parseInt(b, 10));
      } else if (element === '/') {
        result.push(parseInt(b, 10) / parseInt(a, 10));
      }
    }
  });

  if (result.length > 1) {
    return 'error';
  }
  return result.pop();
};

console.log(notation('5 2 + 3 *'));
console.log(notation('5 2 * 2 * 4 +'));
console.log(notation('5'));
console.log(notation('0 1 *'));

// let arr = ["Hello", "World", "Testing"];

// arr.map( one => one.toUpperCase())
//     .filter(one => one.length <= 5)
//     .reduce((acc, curr) => acc + curr + ' ', '');
// console.log();
