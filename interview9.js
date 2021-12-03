const outcomes = [
  { winner: "Alice", loser: "Bob", loser_points: 3 },
  { winner: "Carol", loser: "Dean", loser_points: 1 },
  { winner: "Elise", loser: "Bob", loser_points: 2 },
  { winner: "Elise", loser: "Carol", loser_points: 4 },
  { winner: "Alice", loser: "Carol", loser_points: 2 },
  { winner: "Carol", loser: "Dean", loser_points: 3 },
  { winner: "Dean", loser: "Elise", loser_points: 2 },
];

// ["Alice", "Bob", "Carol", "Dean", "Elise"];

const returnPlayers = (outcomes) => {
  let players = [];

  for (let game of outcomes) {
    if (!players.includes(game.winner)) {
      players.push(game.winner);
    }
    if (!players.includes(game.loser)) {
      players.push(game.loser);
    }
  }

  return players;
};

console.log(returnPlayers(outcomes));

// Using the same data as the previous question, write a function that produces
// a data structure like the following, which lists each participant, and a list
// of who they've beaten.

// {
//   'Alice': ['Bob', 'Carol'],
//   'Bob':   [],
//   'Carol': ['Dean'],
//   'Dean':  ['Elise'],
//   'Elise': ['Bob', 'Carol'],
// }
