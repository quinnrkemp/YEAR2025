  // CHALLENGE NAME-  Is there a vowel in there?

    // DESCRIPTION:

// Given an array of numbers, check if any of the numbers are the 
// character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] 
// output Return the resulting array.

//     // ***STARTER CODE***

// function isVow(a){
//   return a // your code here
// }    

//     //   ******TEST CASES*****
    
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("isVow tests", () => {
  
//   function doTest(input, expected) {
//     const actual = isVow(input);
//     assert.deepEqual(actual, expected, `isVow(${JSON.stringify(input)}) returned an incorrect answer\n`);
//   }
  
//   it("Sample Tests", () => {
//     doTest([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106], [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]);
//     doTest([101,121,110,113,113,103,121,121,101,107,103], ["e",121,110,113,113,103,121,121,"e",107,103]);
//   });
  
// });

    // ******MY ANSWER********

function isVow(a){
return a.map(i => {
if (String.fromCharCode(i) === 'a')
return 'a';
else if (String.fromCharCode(i) === 'e')
return 'e';
else if (String.fromCharCode(i) === 'i')
return 'i';
else if (String.fromCharCode(i) === 'o')
return 'o';
else if (String.fromCharCode(i) === 'u')
return 'u';
else 
return i;
})
}