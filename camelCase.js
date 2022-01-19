const camelCase = function (input) {
  let camelOutput = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      camelOutput = camelOutput + input[i + 1].toUpperCase();
      i++;
    } else {
      camelOutput = camelOutput + input[i];
    }
  }
  return camelOutput;
};

// tests

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
