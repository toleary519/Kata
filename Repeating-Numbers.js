const repeatNumbers = function(data) {
  // Put your solution here

let numString = [];

for (let i = 0; i < data.length; i++) {
  numString.push(data[i][i]);
} 

return numString;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));