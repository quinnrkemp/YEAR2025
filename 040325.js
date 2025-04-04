  // CHALLENGE NAME-  Rock paper scissors game

    // DESCRIPTION:

// Create a rock paper scissors game



    // ******MY ANSWER********

function rockPaperScissors(){
    let num= Math.random()
    return num<.33?'rock':num<.67?'paper':'scissors'
}
// console.log(rockPaperScissors())
// creating the play against the computer/robot 

function newGame(real){
  let bot= rockPaperScissors()
  console.log (real=== 'rock' && bot=== 'scissors' || 
  real=== 'scissors' && bot=== 'paper'  ||
  real=== 'paper' && bot=== 'rock' ? "`You Win"
  :real===bot?`You Tied`
  :`You Lose`)
}
newGame('scissors')

