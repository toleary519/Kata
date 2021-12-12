// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  let sArr = s.split("");

  if (sArr.length === []) {
    return "' '";
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

console.log(cleanString("abc#d##c")); // 'ac'
console.log("***********************************************");
console.log(cleanString("abc####d##c#")); // ''
