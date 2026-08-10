    // CHALLENGE NAME-  Age Range Compatibility Equation

    // DESCRIPTION:

// Task
// Given an integer (1 <= n <= 100) representing a person's age, return 
// their minimum and maximum age range.

// This equation doesn't work when the age <= 14, so if the age <= 14, 
// use this equation instead:

// min = age - 0.10 * age
// max = age + 0.10 * age
// You should floor all your answers so that an integer is given instead 
// of a float (which doesn't represent age). Return your answer in the 
//     form "[min]-[max]"

// Examples:
// age = 27   =>   "20-40"
// age = 5    =>   "4-5"
// age = 17   =>   "15-20"

//     // ***STARTER CODE***

//  function datingRange(age){
//   //return min-max
// }   

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe('Example Test Cases', () => {
//   it("should return correct dating range", () => {
//     assert.strictEqual(datingRange(17), "15-20");
//     assert.strictEqual(datingRange(40), "27-66");
//     assert.strictEqual(datingRange(15), "14-16");
//     assert.strictEqual(datingRange(35), "24-56");
//     assert.strictEqual(datingRange(10), "9-11");
//   });
// });

    // ******MY ANSWER********

function datingRange(age){
return age<=14? `${Math.floor(age - 0.10 * age)}-${Math.floor(age + 0.10 * age)}`:`${Math.floor((age/2) + 7)}-${Math.floor((age-7) * 2)}` 
  //return min-max
}