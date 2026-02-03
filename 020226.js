  // CHALLENGE NAME-  Calculate average

    // DESCRIPTION:

// Write a function which calculates the average of the numbers 
// in a given array.

// Note: Empty arrays should return 0.

//     // ***STARTER CODE***

//  function findAverage(array) {
//   // your code here
//   return 
// }   

//     //   ******TEST CASES*****
    
// const { assert, config } = require("chai");
// config.truncateThreshold = 0;

// describe("findAverage", () => {
//   it("Testing for sample tests", () => {
//     tester([1,1,1], 1);
//     tester([1,2,3], 2);
//     tester([1,2,3,4], 2.5);
//   });
  
//   const tester = (input, expected) => {
//     const tolerance = 1e-10;
//     const err_msg = `Failed for input: ${JSON.stringify(input)}\n`;
//     const actual = findAverage(input);
//     assert.approximately(actual, expected, tolerance, err_msg);
//   }
// });  

    // ******MY ANSWER********

function findAverage(arr) {
  // your code here
  return (arr.reduce((a,b)=> a+b,0))/arr.length || 0
}