  // CHALLENGE NAME-  Remove First and Last Character

    // DESCRIPTION:

// Your goal is to write a function that removes the first and 
// last characters of a string. You're given one parameter, the 
// original string.

// Important: Your function should handle strings of any length 
// ≥ 2 characters. For strings with exactly 2 characters, return 
// an empty string.

// Examples
// 'eloquent' --> 'loquen'
// 'country'  --> 'ountr' 
// 'person'   --> 'erso'
// 'ab'       --> '' (empty string)
// 'xyz'      --> 'y'

//     // ***STARTER CODE***

//  function removeChar(str){
//  //You got this!

// };
   

//     //   ******TEST CASES*****
    
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Sample Tests", () => {
//   it("should remove the first and last character", () => {
//     assert.strictEqual(removeChar('eloquent'), 'loquen');
//     assert.strictEqual(removeChar('country'), 'ountr');
//     assert.strictEqual(removeChar('person'), 'erso');
//     assert.strictEqual(removeChar('place'), 'lac');
//     assert.strictEqual(removeChar('ooopsss'), 'oopss');
//   });
  
//   it("should handle minimum length strings", () => {
//     assert.strictEqual(removeChar('ab'), '');
//     assert.strictEqual(removeChar('xyz'), 'y');
//   });
// });

    // ******MY ANSWER********

function removeChar(s){
 return s.slice(1,-1)
  //You got this!

};