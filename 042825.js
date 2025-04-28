  // CHALLENGE NAME-  Flick Switch

    // DESCRIPTION:

//     Task
//     Create a function that always returns True/true for 
//     every item in a given list.
//     However, if an element is the word 'flick', switch to 
//     always returning the opposite boolean value.
    
//     Examples
//     ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
    
//     ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
    
//     ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]
//     Notes
//     "flick" will always be given in lowercase.
//     A list may contain multiple flicks.
//     Switch the boolean value on the same element as the flick itself.

//     // ***STARTER CODE***

//  // function flickSwitch(arr){

// // //   return [];
// // })   

//     //   ******TEST CASES*****
    
//     const {assert} = require("chai");

//     describe("Sample tests", function() {
//       it("Basic tests", function() {
//         assert.deepEqual(flickSwitch(["codewars", "flick", "code", "wars"]), [true, false, false, false]);
//         assert.deepEqual(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]), [false, false, false, false]);
//         assert.deepEqual(flickSwitch(["bicycle", "jarmony", "flick", "sheep", "flick"]), [true, true, false, false, true]);
//         assert.deepEqual(flickSwitch(["flick", "flick", "flick", "flick", "flick"]), [false, true, false, true, false]);
//         assert.deepEqual(flickSwitch(["john, smith, susan", "flick"]), [true, false]);
//         assert.deepEqual(flickSwitch(["bicycle"]), [true]);
//         assert.deepEqual(flickSwitch(["flick"]), [false]);
//         assert.deepEqual(flickSwitch([]), []);
//       });
//     });

    // ******MY ANSWER********

function flickSwitch(arr){
    let status = true;
   return arr.map( (a)=>{ if (a==='flick') {status = !status} return status})
     
     
   //   return arr.map(----(text) => { if (text === 'flick') {   status = !status } return status}----) 
   }