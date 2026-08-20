    // CHALLENGE NAME-  Return Two Highest Values in List

    // DESCRIPTION:

// In this kata, your job is to return the two distinct highest values 
// in a list. If there're less than 2 unique values, return as many of 
// them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

//     // ***STARTER CODE***

// function twoHighest(arr) {

// }    

//     //   ******TEST CASES*****
    
// const chai = require("chai");
// const assert = chai.assert;

// describe("Fixed Tests", () => {
//   it("Tests", () => {
//     assert.deepEqual(twoHighest([]), [])
//     assert.deepEqual(twoHighest([15]), [15])
//     assert.deepEqual(twoHighest([15, 20, 20, 17]), [20, 17])
//   })
// })

    // ******MY ANSWER********

function twoHighest(arr) {

  let res= [...new Set(arr)].sort((a,b)=>b-a)
  return res.length<=2?res:res.slice(0,2)
//   ***alt answer 2***
// return res.length<=2?res:[res[0],res[1]] 
}

// ***these are my answers, with very minor help from google***