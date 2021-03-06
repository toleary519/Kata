// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

function arithmetic(a, b, operator) {
  opter = { add: "+", subtract: "-", multiply: "*", divide: "/" };
  return eval(a + opter[operator] + b);
}

console.log(arithmetic(5, 2, "add"));
console.log(arithmetic(5, 2, "subtract"));
console.log(arithmetic(5, 2, "multiply")); // => 10
console.log(arithmetic(5, 2, "divide")); // => 2.5
