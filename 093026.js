    // CHALLENGE NAME-  Enumerable Magic #2 - True for Any?

    // DESCRIPTION:

// The task is to write a function that accepts two parameters: an array
//  and a callback function (in Ruby: a block).

// The function should return true if the callback function / block returns 
// true for any item in the array, otherwise return false.

// The function should return false if the array is empty.

//     // ***STARTER CODE***

// function any(arr, fun){
//   // ...
// }    

//     //   ******TEST CASES*****
    
// const Test = require('@codewars/test-compat');

// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(any([1,2,3,4], function(v,i){return v>3}), true)
// Test.assertEquals(any([1,2,3,4], function(v,i){return v>4}), false)

//   });
// });

    // ******MY ANSWER********

function any(arr, fun){
  return arr.some(fun)
}