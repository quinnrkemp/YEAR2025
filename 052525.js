  // CHALLENGE NAME-  Sum of positive

    // DESCRIPTION:

//     Task
//     You get an array of numbers, return the sum of all of the positives ones.
    
//     Example
//     [1, -4, 7, 12] => 1 + 7 + 12 = 20

//     Note
//     If there is nothing to sum, the sum is default to 0.

//     // ***STARTER CODE***

//  function positiveSum(arr) {
  
// }   

//     //   ******TEST CASES*****
    
//     const { assert } = require("chai")

//     describe("Basic tests", () => {
//       it("Testing for fixed tests", () => {
//         assert.strictEqual(positiveSum([1,2,3,4,5]),15);
//         assert.strictEqual(positiveSum([1,-2,3,4,5]),13);
//         assert.strictEqual(positiveSum([]),0);
//         assert.strictEqual(positiveSum([-1,-2,-3,-4,-5]),0);
//         assert.strictEqual(positiveSum([-1,2,3,4,-5]),9);
//         });
//       });

    // ******MY ANSWER********

    function positiveSum(arr) {
        return arr.filter(e=>e>0).reduce((a,b)=>a+b,0)
       }