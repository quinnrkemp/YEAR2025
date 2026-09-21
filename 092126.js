    // CHALLENGE NAME-  Enumerable Magic #4 - True for None?


    // DESCRIPTION:

// Write a function that takes two arguments: an array and a callback function (in Ruby: a block).

// The function should return true if the callback / block returns false for all of the items in 
// the array, or if the array is empty; otherwise return false.

//     // ***STARTER CODE***

// function none(arr, fun){
//   // ...
// }    

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(none([1,2,3,4,5],function(item){ return item > 5 }), true)
//     assert.strictEqual(none([1,2,3,4,5],function(item){ return item > 4 }), false)
//   });
// });

    // ******MY ANSWER********

function none(arr, fun){
  return !arr.some(fun);
}