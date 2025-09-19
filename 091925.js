  // CHALLENGE NAME-  Convert a Number to a String!

    // DESCRIPTION:

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

//     // ***STARTER CODE***

//  function numberToString(num) {
//   // Return a string of the number here!
// }   

//     //   ******TEST CASES*****
    
// const assert = require('chai').assert;
// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(numberToString(67), '67');
//   });
// });

    // ******MY ANSWER********

    function numberToString(num) {
// ***all answers below are correct***
  //  return `${num}`
//   return num.toString()
return [num].join('')
  
  // Return a string of the number here!
}