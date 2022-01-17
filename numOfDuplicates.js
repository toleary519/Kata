// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
  const splitText = text.toLowerCase().split("");
  let checkText = [];
  let numOfDuplicates = 0;

  for (const char of splitText) {
    if (checkText.includes(char)) {
      numOfDuplicates += 1;
    }
    checkText.push(char);
  }
  return numOfDuplicates; // need to account for unique letter counts, not full counts
}
