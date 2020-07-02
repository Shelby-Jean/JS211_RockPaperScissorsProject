// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
// Write code here
// Use the unit test to see what is expected
const rockPaperScissors = (hand1, hand2) => { 
  let player1 = hand1.trim().toLowerCase();
  let player2 = hand2.trim().toLowerCase();
  if(player1 === player2) {
    return "It's a tie!";
  } else if(player1 === 'rock' && player2 === 'scissors') {
    return "Hand one wins!";
  } else if(player1 === 'rock' && player2 === 'paper') {
    return "Hand two wins!";
  } else if(player1 === 'scissors' && player2 === 'rock') {
    return "Hand two wins!";
  } else if(player1 === 'scissors' && player2 === 'paper') {
    return "Hand one wins!";
  } else if(player1 === 'paper' && player2 === 'scissors') {
    return "Hand two wins!";
  } else if(player1 === 'paper' && player2 === 'rock') {
    return "Hand one wins!";
  } else {
    return "not valid input";
  }
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should check for incorrect inputs', () => {
      assert.equal(rockPaperScissors(' ', 'hi'), "not valid input");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
