// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *    - Counter 2 declares the variable on a global scale, and when applied, will not properly return desired outputs past the first. Counter 1 declares the variable on a local scale, but returns it in a way that it can be accessed gloablly.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *    - Counter 1 uses a closure; It utilizes a parent function in order to create the variable accessible by the nested function of 'counter'.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 *    - Counter 1 woud be preferable if you were planning to use the result of the function at some other point, and counter 2 would be preferable if you only need the information from the specific instance the function was called, and woud be reset when called again.
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(Math.floor(Math.random() * (max - min + 1)));
  return Math.floor(Math.random() * (max - min + 1));
  }

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inning, innings){
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const score_final = {};
  inning(0,2);
  const score_h = [];
  const score_a = [];
  for (i = 0; i < 9; i++){
      score_h.push(i);
  }
  if (score_h.reduce(reducer) > 0){
      score_final['Home'] = score_h.reduce(reducer);
  } 
  for (i = 0; i < innings; i++){
      score_a.push(i);
  }
  if (score_a.reduce(reducer) > 0){
      score_final['Away'] = score_a.reduce(reducer);
  } 
  return score_final;
}

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}


