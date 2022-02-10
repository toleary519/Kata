// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// empty string => false.

function generateHashtag(str) {
  if (!str) {
    return false;
  }

  let outArr = [];
  let hashArr = str.trim().split(" ");
  console.log("hash: ", hashArr);

  for (let word of hashArr) {
    let cap = word[0].toUpperCase();
    let end = word.slice(1);
    outArr.push(`${cap}${end}`);
  }
  console.log("hash 2:", outArr);
  return `#${outArr.join("")}`;
}

console.log(generateHashtag(" Hello there thanks for trying my Kata"));
