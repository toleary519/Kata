// Assume "#" is like a backspace in string.

function cleanString(s) {
  let sArr = s.split("");

  if (sArr.length === []) {
    return s;
  }

  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === "#") {
      if (!sArr[i - 1]) {
        sArr.splice(i, 1);
        return cleanString(sArr.join(""));
      } else {
        sArr.splice(i - 1, 2);
        return cleanString(sArr.join(""));
      }
    }
  }
  return sArr.join("");
}

function clean_string(s) {
  const result = [];
  for (const c of s) {
    if (c === "#") {
      result.pop();
    } else {
      result.push(c);
    }
  }
  return result.join("");
}

console.log(cleanString("abc#d##c"));
console.log("***********************************************");
console.log(cleanString("abc####d##c#"));
