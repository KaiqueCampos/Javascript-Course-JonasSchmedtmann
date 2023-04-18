/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each
other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition,
and print it to the console. Don't forget that there can be a draw, so test for that
as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
team only wins if it has a higher score than the other team, and the same time a
score of at least 100 points. Hint: Use a logical operator to test for minimum
score, as well as multiple else-if blocks �

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
both teams have the same score and both have a score greater or equal 100
points. Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

let dolphinsAverageScore;
let koalasAverageScore;

function handleAverageScore(scr1, scr2, scr3, teamName) {
  const averageScore = ((scr1 + scr2 + scr3) / 3).toFixed(2);
  console.log(`The score of ${teamName} equals to ${averageScore}`);

  return averageScore
}

function handleWinner(dolphinsPoints, koalasPoints) {

  if (
    dolphinsPoints > koalasPoints &&
    dolphinsPoints >= 100
  ) {
    console.log(
      `Dolphins winner the trophy with ${dolphinsPoints} points average!`
    );
  } else if (
    koalasPoints > dolphinsPoints &&
    koalasPoints >= 100
  ) {
    console.log(
      `Koalas winner the trophy with ${koalasPoints} points average!`
    );
  } else if (
    koalasPoints === dolphinsPoints &&
    koalasPoints >= 100
  ) {
    console.log(
      `Drawww! Koalas and Dolphins has ${koalasPoints} points average`
    );
  } else {
    console.log("No team wins the trophy!");
  }

  console.log("\n");
}

// Data 1
dolphinsAverageScore = handleAverageScore(96, 108, 89, "Dolphins");
koalasAverageScore = handleAverageScore(88, 91, 110, "Koalas");

handleWinner(dolphinsAverageScore, koalasAverageScore);

// Data Bonus 1
dolphinsAverageScore = handleAverageScore(97, 112, 101, "Dolphins");
koalasAverageScore = handleAverageScore(109, 95, 123, "Koalas");

handleWinner(dolphinsAverageScore, koalasAverageScore);

// Data Bonus 2
dolphinsAverageScore = handleAverageScore(97, 112, 101, "Dolphins");
koalasAverageScore = handleAverageScore(109, 95, 106, "Koalas");

handleWinner(dolphinsAverageScore, koalasAverageScore);
