// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

// The first parameter will contain the count of each race on the side of good in the following order:

// Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:

// Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.

function goodVsEvil(good, evil) {
  let goodArray = good.split(" ");
  let goodWorth = 0;

  let evilArray = evil.split(" ");
  let evilWorth = 0;

  for (let i = 0; i < goodArray.length; i++) {
    if (i === 0) {
      goodWorth += goodArray[i] * 1;
    }
    if (i === 1) {
      goodWorth += goodArray[i] * 2;
    }
    if (i === 2) {
      goodWorth += goodArray[i] * 3;
    }
    if (i === 3) {
      goodWorth += goodArray[i] * 3;
    }
    if (i === 4) {
      goodWorth += goodArray[i] * 4;
    }
    if (i === 5) {
      goodWorth += goodArray[i] * 10;
    }
  }

  for (let i = 0; i < evilArray.length; i++) {
    if (i === 0) {
      evilWorth += evilArray[i] * 1;
    }
    if (i === 1) {
      evilWorth += evilArray[i] * 2;
    }
    if (i === 2) {
      evilWorth += evilArray[i] * 2;
    }
    if (i === 3) {
      evilWorth += evilArray[i] * 2;
    }
    if (i === 4) {
      evilWorth += evilArray[i] * 3;
    }
    if (i === 5) {
      evilWorth += evilArray[i] * 5;
    }
    if (i === 6) {
      evilWorth += evilArray[i] * 10;
    }
  }

  return goodWorth === evilWorth
    ? "Battle Result: No victor on this battle field"
    : goodWorth > evilWorth
    ? "Battle Result: Good triumphs over Evil"
    : "Battle Result: Evil eradicates all trace of Good";
}

console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));
console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0"));
