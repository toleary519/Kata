// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
A = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];
function findOdd(A) {
  intObj = {};

  for (const i of A) {
    if (!Object.keys(intObj).includes(i)) {
      intObj[i] = 0;
    }
  }

  for (key of Object.keys(intObj)) {
    for (let i of A) {
      if (Number(key) === i) {
        intObj[key] += 1;
      }
    }
  }

  // console.log(intObj);
  for (key in intObj) {
    if (intObj[key] % 2 !== 0) {
      return +key;
    }
  }
}

console.log(findOdd(A));
