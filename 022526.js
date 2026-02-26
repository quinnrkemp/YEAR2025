  // CHALLENGE NAME-  Merging sorted integer arrays (without duplicates)


    // DESCRIPTION:

// Write a function that merges two sorted arrays into a single one. The arrays 
// only contain integers. Also, the final outcome must be sorted and not have any 
// duplicate.

//     // ***STARTER CODE***

//  function mergeArrays(a, b) {
//   // your code here
// }   

//     //   ******TEST CASES*****
    
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("mergeArrays", function(){
//   it("Example Tests", function(){
//     assert.deepEqual(mergeArrays([1, 3, 5], [2, 4, 6]), [1, 2, 3, 4, 5, 6]);
//     assert.deepEqual(mergeArrays([2, 4, 8], [2, 4, 6]), [2, 4, 6, 8]);
//   });
// });

    // ******MY ANSWER********

function mergeArrays(a, b) {
let res= [...a,...b].sort((a,b) => a-b)
return res.filter((v,i)=>res.indexOf(v)===i) 
  // your code here
}

// ***answered with help from the solutions