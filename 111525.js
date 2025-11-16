  // CHALLENGE NAME-  For Twins: 1. Types


    // DESCRIPTION:

// Task:
// Write a function that will accept two parameters: variable 
// and type and check if type of variable is matching type. Return 
// true if types match or false if not.

// Examples:
// 42, "number"   --> true
// "42", "number" --> false

//     // ***STARTER CODE***

// function typeValidation(variable, type) {
//   // Your code should be here ; 
// }    

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe('Example tests', function() {
//   it("Basic Tests", function() {
//     assert.strictEqual(typeValidation(42, "number"), true);
//     assert.strictEqual(typeValidation("42", "number"), false);
//   });
// });

    // ******MY ANSWER********

function typeValidation(v, ty) {
  return typeof v=== ty
  
  // Your code should be here ;) 
}