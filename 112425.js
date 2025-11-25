  // CHALLENGE NAME-  Find the first non-consecutive number

    // DESCRIPTION:

// Your task is to find the first element of an array that is not 
// consecutive.

// By not consecutive we mean not exactly 1 larger than the previous 
// element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 
// 4 are all consecutive but 6 is not, so that's the first non-consecutive 
// number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will 
// be numbers. The numbers will also all be unique and in ascending order. 
// The numbers could be positive or negative and the first non-consecutive 
// could be either too!


//     // ***STARTER CODE***

//  function firstNonConsecutive (arr) {

// }   

//     //   ******TEST CASES*****
    
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Fixed tests", () => {
//   it('a simple example', function() {
//     const first = firstNonConsecutive([1,2,3,4,6,7,8])
//     assert.strictEqual(first, 6)
//   })
  
//    it('all sequential', function() {
//     const first = firstNonConsecutive([1,2,3,4])
//     assert.strictEqual(first, null)
//   })
// })

    // ******MY ANSWER********

// function firstNonConsecutive (arr) {
// let res=[]
// for (let i=arr[0]; i<=arr[arr.length-1]; i++){
//   res.filter(arr[i+1]!=arr[i]-1)
// }
//   return res
// }

function firstNonConsecutive (arr) {
  for (let i = 0; i < arr.length; i++)
    if (i !== 0 && arr[i-1] !== arr[i]-1)
      return arr[i]
  return null
}