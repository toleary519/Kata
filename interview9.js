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

// Using the same data as the previous question, write a function that produces
// a data structure like the following, which lists each participant, and a list
// of who they've beaten

// ["Alice", "Bob", "Carol", "Dean", "Elise"];

// {
//   'Alice': ['Bob', 'Carol'],
//   'Bob':   [],
//   'Carol': ['Dean'],
//   'Dean':  ['Elise'],
//   'Elise': ['Bob', 'Carol'],
// }

const players = returnPlayers(outcomes);

const breakdownObj = (players, outcomes) => {
  let breakdown = {};

  for (const player of players) {
    breakdown[player] = [];
  }

  for (const game of outcomes) {
    for (const key of Object.keys(breakdown)) {
      if (game.winner === key && !breakdown[key].includes(game.loser)) {
        breakdown[key].push(game.loser);
      }
    }
  }

  return breakdown;
};

console.log(breakdownObj(players, outcomes));
