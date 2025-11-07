  // CHALLENGE NAME-  Array plus array

    // DESCRIPTION:

// I'm new to coding and now I want to get the sum of two arrays... Actually 
// the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//     // ***STARTER CODE***

//  function arrayPlusArray(arr1, arr2) {
//   return arr1 + arr2; //something went wrong
// }   

//     //   ******TEST CASES*****
    
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => { 
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
//     assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
//     assert.strictEqual(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
//     assert.strictEqual(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
//   })
// })

    // ******MY ANSWER********

function arrayPlusArray(arr1, arr2) {
// ***answer 1***
  //  let arr3= arr1.reduce((a,b)=>a+b)
//  let arr4= arr2.reduce((a,b)=>a+b)
//   return eval(arr1)

  // *** answer 2***
  return eval(arr1.join('+')) + eval(arr2.join('+'))
  
  //something went wrong
}