
const repeatNumbers = function (data) {

let numString = "";

for (let i = 0; i < data.length; i++){
    for (let j = data[i][1]; j > 0; j--){
      numString += data[i][0];
    }
    if(i < (data.length - 1)){
      numString += ", ";
    }
  }
  return numString;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));