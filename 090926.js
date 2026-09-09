    // CHALLENGE NAME-  Take an Arrow to the knee, Functionally

    // DESCRIPTION:

// Come here to practice the Arrow style functions Not much else to say good luck!
// Details
// You will be given an array of numbers which can be used using the String.fromCharCode() 
// (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is 
// recommended to map over the array of numbers and convert each number to the corresponding 
// ascii character.

// Examples
// These are example of how to convert a number to an ascii Character:
// Javascript => String.fromCharCode(97) // a

//     // ***STARTER CODE***

// const arrowFunc = function(arr) {
//   return arr.map( => ).join(''); 
//   //Complete this function
// }    

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe('Example tests', () => {
//   it('should convert numbers to letters', () => {
//     tester([84,101,115,116], 'Test');
//     tester([70,85,83,32,82,79,72,32,68,65,72], 'FUS ROH DAH');
//   });
// });

// function tester(arr, expected) {
//   const actual = arrowFunc(arr);
//   assert.strictEqual(actual, expected, `Testing for arr = ${JSON.stringify(arr)}\n\n`);
// }

    // ******MY ANSWER********

const arrowFunc = function(arr) {
  return arr.map(a =>String.fromCharCode(a)).join(''); 
  //Complete this function
}