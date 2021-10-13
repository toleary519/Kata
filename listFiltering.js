// In this kata you will create a function that takes a list of
//  non-negative integers and strings and returns a new list with
//  the strings filtered out.

// function filter_list(l) {
//   let list = [];

//   for (const i of l) {
//     if (typeof i === "number") {
//       list.push(i);
//     }
//   }
//   return list;
// }

function filter_list(l) {
  return l.filter((l) => typeof l === "number");
}

console.log(filter_list([1, 2, "a", "b"])); //== [1,2]
console.log(filter_list([1, "a", "b", 0, 15])); //== [1,0,15]
console.log(filter_list([1, 2, "aasf", "1", "123", 123])); //== [1,2,123]
