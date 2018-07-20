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

// console.log("5 2 + 3 * =>", notation("5 2 + 3 *"));
// console.log("5 2 * 2 * 4 + =>", notation("5 2 * 2 * 4 +"));
// console.log("5 =>", notation("5"));
// console.log("0 1 * =>", notation("0 1 *"));