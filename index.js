const notation = function(postfix) {
  var result = [];
  postfix = postfix.split(" ");
  for(var i = 0; i < postfix.length; i++) {
      if(postfix[i] != "+" && postfix[i] != "*" && postfix[i] != "-" && postfix[i] != "/" && postfix[i] != "=>") {
          result.push(postfix[i]);
      } else {
          var a = result.pop();
          var b = result.pop();
          if(postfix[i] === "+") {
              result.push(parseInt(a) + parseInt(b));
          } else if(postfix[i] === "-") {
              result.push(parseInt(b) - parseInt(a));
          } else if(postfix[i] === "*") {
              result.push(parseInt(a) * parseInt(b));
          } else if(postfix[i] === "/") {
              result.push(parseInt(b) / parseInt(a));
          } else if(postfix[i] === "^") {
              result.push(Math.pow(parseInt(b), parseInt(a)));
          }
      }
  }
}

console.log(notation("10 2 3 * +"));