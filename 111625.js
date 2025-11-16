  // CHALLENGE NAME-  Find the Integral

    // DESCRIPTION:

// Create a function that finds the integral of the expression 
// passed.

// In order to find the integral all you need to do is add one 
// to the exponent (the second argument), and divide the coefficient 
// (the first argument) by that new number.

// For example for 3x^2, the integral would be 1x^3: we added 1 to 
// the exponent, and divided the coefficient by that new number).

// Notes:

// The output should be a string.
// The coefficient and exponent is always a positive integer.
// Examples
//  3, 2  -->  "1x^3"
// 12, 5  -->  "2x^6"
// 20, 1  -->  "10x^2"
// 40, 3  -->  "10x^4"
// 90, 2  -->  "30x^3"

//     // ***STARTER CODE***

// function integrate(coefficient, exponent) {
  
// }    

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(integrate(3,2), "1x^3");
//     assert.strictEqual(integrate(12,5), "2x^6");
//     assert.strictEqual(integrate(20,1), "10x^2");
//     assert.strictEqual(integrate(40,3), "10x^4");
//     assert.strictEqual(integrate(90,2), "30x^3");
//   });
// });

    // ******MY ANSWER********

function integrate(c, e) {
 return `${c/(e+1)}x^${e+1}` 
}