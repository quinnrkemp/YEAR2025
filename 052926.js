    // CHALLENGE NAME-  Enumerable Magic #25 - Take the First N Elements

    // DESCRIPTION:

// Create a function that accepts a sequence and a non-negative integer n, and 
// returns a sequence of the first n elements from it.

// If the sequence has fewer than n elements, return all of them.

// Examples
// [0, 1, 2, 3, 5, 8, 13], n = 3  =>  [0, 1, 2]
// [0, 1, 2, 3, 5, 8, 13], n = 0  =>  []
//                     [], n = 3  =>  []

//     // ***STARTER CODE***

//  function take(arr, n) {

//   // Your code here
// }   

//     //   ******TEST CASES*****
    
// const Test = require('@codewars/test-compat');

// describe("Sample Tests", function(){
//   it("should work for sample tests", function(){
//     Test.assertDeepEquals(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2], "should return the first 3 items");
//   });
// });

    // ******MY ANSWER********

function take(arr, n) {
// let res= n-1
  return arr.slice(0,n)
  // Your code here

}