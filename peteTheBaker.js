// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(str) {
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let outputString = [];

  for (let i = 0; i < str.length; i++) {
    if (nums.includes(str[i])) {
      outputString.push(str.slice(i));
      console.log(outputString);
      return outputString.join("");
    } else {
      outputString.push(str[i]);
    }
  }
  outputString.push("1");
  return outputString.join("");
}

console.log(incrementString("foobar000"));
console.log(incrementString("foobar022"));
console.log(incrementString("foobar157"));
