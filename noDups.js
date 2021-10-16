// create a function that removes any duplicates from an array
//ie. [1, 2, 2, 3, 4, 5, 5, 5, 5, 5, 6, 7, 8, 8, 8, 9] => [1, 2, 3, 4, 5, 6, 7, 8, 9]
var removeDuplicates = function (nums) {
  let noDuplicates = [];

  for (const num of nums) {
    if (!noDuplicates.includes(num)) {
      noDuplicates.push(num);
    }
  }

  return noDuplicates;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5, 5, 5, 5, 6, 7, 8, 8, 8, 9]));
