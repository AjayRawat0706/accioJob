
let scores = {
  red: 0,
  blue: 0,
  green: 0,
  yellow: 0,
};

function OpeningCeremony(callback) {
  console.log("Welcome to the Sports Day!");
  console.log("Initial scores:", scores);
  setTimeout(() => {
    callback(Race100M);
  }, 1000);
}

function Race100M(callback) {
  console.log("\n100M Race started...");

  const times = {
    red: Math.floor(Math.random() * 6) + 10,
    blue: Math.floor(Math.random() * 6) + 10,
    green: Math.floor(Math.random() * 6) + 10,
    yellow: Math.floor(Math.random() * 6) + 10,
  };

  console.log("Race times (in seconds):", times);

  const sortedColors = Object.keys(times).sort((a, b) => times[a] - times[b]);
  scores[sortedColors[0]] += 50;
  scores[sortedColors[1]] += 25;

  console.log("Updated scores after 100M Race:", scores);
  setTimeout(() => {
    callback(LongJump);
  }, 1000);
}

function LongJump(callback) {
  console.log("\nLong Jump started...");

  const colors = ["red", "blue", "green", "yellow"];
  const selectedColor = colors[Math.floor(Math.random() * colors.length)];
  scores[selectedColor] += 150;

  console.log(`${selectedColor} won the Long Jump!`);
  console.log("Updated scores after Long Jump:", scores);

  setTimeout(() => {
    callback(HighJump);
  }, 1000);
}

function HighJump(callback) {
  console.log("\nHigh Jump started...");
  const userInput = prompt("Which color secured the highest jump? (red/blue/green/yellow)");

  if (userInput && scores.hasOwnProperty(userInput.toLowerCase())) {
    scores[userInput.toLowerCase()] += 100;
    console.log(`${userInput} won the High Jump!`);
  } else {
    console.log("Event was cancelled due to invalid input.");
  }

  console.log("Updated scores after High Jump:", scores);
  callback();
}

function AwardCeremony() {
  console.log("\nAward Ceremony:");

  const sortedScores = Object.entries(scores)
    .sort((a, b) => b[1] - a[1]);

  console.log("Final Scores:", scores);
  console.log(`1st Place: ${sortedScores[0][0]} with ${sortedScores[0][1]} points`);
  console.log(`2nd Place: ${sortedScores[1][0]} with ${sortedScores[1][1]} points`);
  console.log(`3rd Place: ${sortedScores[2][0]} with ${sortedScores[2][1]} points`);
}

OpeningCeremony(Race100M);
