  // CHALLENGE NAME-  Reversed Strings

    // DESCRIPTION:

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

//     // ***STARTER CODE***

//  function solution(str){
  
// }   

//     //   ******TEST CASES*****
//  const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold=0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(solution('world'), 'dlrow');
//     assert.strictEqual(solution('hello'), 'olleh');
//     assert.strictEqual(solution(''), '');
//     assert.strictEqual(solution('h'), 'h');
//   });
// });     

    // ******MY ANSWER********

    function solution(s){
//  return s.split('').reverse().join('')
return [...s].reverse().join('')
}