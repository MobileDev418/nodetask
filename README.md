# nodetask

## RPN for test using mocha. 

### Devise a function that, given a string containing an expression in Reverse Polish notation, evaluates that expression, returning the result. Reverse Polish notation is a mathematical notation in which every operator follows all of its operands. There is no notion of operator precedence. Instead, the expression is evaluated left to right. Some examples follow:

2 1 + => 3

5 5 + 3 * => 10 3 * => 30

You are only expected to handle well-formed strings (integers and operators separated by one space), and support integer addition and multiplication.

===========
Test cases:

"5 2 + 3 *" => 21

"5 2 * 2 * 4 +" => 24

"5" => 5

"0 1 *" => 0

============= Test ============

```sh
npm install mocha
node test.js
```


## RotateMatrix for coding style using airbnb eslint.

### You are given an n x n 2D matrix. Rotate the matrix by 90 degrees (clockwise). Write an arrow function that rotate the matrix by 90 degrees (clockwise).
Example:
Input:
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]


Output:
[
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3],
] 

### Airbnb Coding Style in Node.js
```sh
npm install eslint
npx install-peerdeps --dev eslint-config-airbnb
```

Create .eslintrc on your project directory
then Add
```{ "extends": "airbnb" }```

In the Package.json file, change as following:
```sh
"script": { ...
    "lint":"eslint ."
}
```
then, run as following command:
```sh
npm run lint
```

.......................
