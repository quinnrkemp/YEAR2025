    // CHALLENGE NAME- Holiday VI - Shark Pontoon


    // DESCRIPTION:

// You are given 5 variables;

// sharkDistance = distance from the shark to the pontoon. The 
// shark will eat you if it reaches you before you escape to the 
// pontoon.

// sharkSpeed = how fast it can move in metres/second.

// pontoonDistance = how far you need to swim to safety in metres.

// youSpeed = how fast you can swim in metres/second.

// dolphin = a boolean, if true, you can half the swimming speed of the 
// shark as the dolphin will attack it.

// The pontoon, you, and the shark are all aligned in one dimension.

// If you make it, return "Alive!", if not, return "Shark Bait!".

//     // ***STARTER CODE***

//   function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){

// }  

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe('Example tests', () => {
//   it("should return correct results for example tests", () => {
//     assert.equal(shark(12, 50, 4, 8, true), "Alive!");
//     assert.equal(shark(7, 55, 4, 16, true), "Alive!");
//     assert.equal(shark(24, 0, 4, 8, true), "Shark Bait!");
//   });
// });

    // ******MY ANSWER********

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
  let shTime = sharkDistance/sharkSpeed;
  let youTime = pontoonDistance/youSpeed;
  if (dolphin == true){
    shTime = shTime * 2;
  }
  if (youTime < shTime){
    return "Alive!";
  }
  else{
    return "Shark Bait!";
  }
  
}