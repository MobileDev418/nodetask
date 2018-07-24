// Task 1
/**
 * Devise a function that, given a string containing
 * an expression in Reverse Polish notation,
 * evaluates that expression, returning the result.
 */

module.exports = function rpn(postfix) {

  if ( postfix === '' )
    return null;

  const result = [];
  const postfix1 = postfix.split(/\s+/);

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
    return null;
  }
  return result.pop();
};


// Array functions example .map, .filter, .reduce .forEach

// let arr = ["Hello", "World", "Testing"];
// 
// arr.map( one => one.toUpperCase())
//     .filter(one => one.length <= 5)
//     .reduce((acc, curr) => acc + curr + ' ', '');
