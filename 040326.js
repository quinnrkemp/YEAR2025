  // CHALLENGE NAME-  Multiply the Number

    // DESCRIPTION:

// Jack really likes his number five: the trick here is that you have
//  to multiply each number by 5 raised to the number of digits of each 
//  numbers, so, for example:

//   3 -->    15  (  3 * 5¹)
//  10 -->   250  ( 10 * 5²)
// 200 --> 25000  (200 * 5³)
//   0 -->     0  (  0 * 5¹)
//  -3 -->   -15  ( -3 * 5¹)

//     // ***STARTER CODE***

// function multiply(number){
//   //your code here
// }    

//     //   ******TEST CASES*****
    
// const chai = require('chai');
// const assert = chai.assert;

// describe("Basic Tests", () => {
  
//   it("multiply(10)", () => {
//     assert.strictEqual(multiply(10), 250);
//   });
  
//   it("multiply(0)", () => {
//     assert.strictEqual(multiply(0), 0);
//   });
  
//   it("multiply(-2)", () => {
//     assert.strictEqual(multiply(-2), -10);
//   });
// });

    // ******MY ANSWER********

function multiply(n){
  let num= +(n.toString().length)
// return num
    return n<0?n*(5**(num-1)):n*(5**num)
  //your code here
}