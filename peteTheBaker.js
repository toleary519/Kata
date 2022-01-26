// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

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
