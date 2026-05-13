  // CHALLENGE NAME-  Rock Paper Scissors!

    // DESCRIPTION:

// Let's play! You will be given valid moves of two Rock, Paper, 
// Scissors players, and have to return which player won: "Player 
// 1 won!" for player 1, and "Player 2 won!" for player 2. In case 
// of a draw return Draw!.

// Examples:
// "scissors",     "paper"     --> "Player 1 won!"
// "scissors",     "rock"      --> "Player 2 won!"
// "paper",        "paper"     --> "Draw!"

//     // ***STARTER CODE***

// const rps = (p1, p2) => {
// };    

//     //   ******TEST CASES*****
    
// const Test = require('@codewars/test-compat');

// describe('rock paper scissors', function() {
//   const getMsg = (n) => `Player ${n} won!`;

//   it('player 1 win', function() {
//     Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
//     Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
//     Test.assertEquals(rps('paper', 'rock'), getMsg(1));
//   });

//   it('player 2 win', function() {
//     Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
//     Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
//     Test.assertEquals(rps('rock', 'paper'), getMsg(2));
//   });

//   it('draw', function() {
//     Test.assertEquals(rps('rock', 'rock'), 'Draw!');
//     Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
//     Test.assertEquals(rps('paper', 'paper'), 'Draw!');
//   });
// });

    // ******MY ANSWER********

const rps = (f,s) => {
let a1= 'rock'
let a2= 'paper'
let a3= 'scissors'
return f==s?'Draw!':(f==a1 && s==a2) || (f==a2 && s==a3) || (f==a3 && s==a1)?'Player 2 won!':'Player 1 won!'
};