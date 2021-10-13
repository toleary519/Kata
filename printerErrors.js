function printerError(s) {
  let errorLog = 0;
  let letterCount = 0;
  let goodletter = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
  ];

  for (let letter of s) {
    if (goodletter.includes(letter)) {
      letterCount += 1;
    } else {
      letterCount += 1;
      errorLog += 1;
    }
  }
  return `${errorLog}/${letterCount}`;
}

let s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

printerError(s);

// describe("printerError",function() {
//   it("Basic tests",function() {
//       var s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"
//       Test.assertEquals(printerError(s), "3/56")
//   })})
