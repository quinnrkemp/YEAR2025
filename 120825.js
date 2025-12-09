  // CHALLENGE NAME-  Calculate Price Excluding VAT

    // DESCRIPTION:

// Write a function that calculates the original product price, without VAT.

// Example
// If a product price is 200.00 and VAT is 15%, then the final product price 
// (with VAT) is: 200.00 + 15% = 230.00

// Thus, if your function receives 230.00 as input, it should return 200.00

// Notes:

// VAT is always 15% for the purposes of this Kata.
// Round the result to 2 decimal places.
// If null value given then return -1

//     // ***STARTER CODE***

// //return price without vat
// function excludingVatPrice(price){
//   // your code
//   return 0;
// }    

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe('Fixed Tests', () => {
//   it("Test", () => {
//     assert.approximately(excludingVatPrice(230), 200.00, 0.01);
//     assert.approximately(excludingVatPrice(123), 106.96, 0.01);
//   });
// });

    // ******MY ANSWER********

//return price without vat
function excludingVatPrice(p){

   return p===null?-1:+((p/1.15).toFixed(2)) 
}