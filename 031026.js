  // CHALLENGE NAME-  Training JS #16: Methods of String object--slice(), substring() and substr()

    // DESCRIPTION:

// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.

// The first mission: Traversing arr, find the shortest string length.

// The second mission: Traversing arr again, intercept all strings to the shortest string 
// length(Start from index0). you can use one of slice() substring() or substr() do it. 
// return the result after finished the work.

// for example:

//     // ***STARTER CODE***

// function cutIt(arr){
//   //coding here...
  
// }    

//     //   ******TEST CASES*****
    
// const { assert, config } = require('chai');
// config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.deepEqual(cutIt(["ab","cde","fgh"]) , ["ab","cd","fg"]);
//     assert.deepEqual(cutIt(["abc","defgh","ijklmn"]) , ["abc","def","ijk"]);
//     assert.deepEqual(cutIt(["codewars","javascript","java"]) , ["code","java","java"]);
//   });
// });

    // ******MY ANSWER********

function cutIt(arr){
let array= arr.map((a,i)=>a.length)
let min= Math.min(...array)
return arr.map((a,i)=>a.slice(0,min))
  //coding here...
  
}