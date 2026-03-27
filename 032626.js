  // CHALLENGE NAME-  Freudian translator  

    // DESCRIPTION:

// In this kata, the function will take a string as its argument, and return a 
// string with every word replaced by the explanation to everything, according 
// to Freud. Note that an empty string, or no arguments, should return an empty 
// string.

//     // ***STARTER CODE***

//  function toFreud(string) {
//   return string;
// }   

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe("Example tests", () => {
//   it("test", () => {
//     assert.strictEqual(toFreud(""), "");
//     assert.strictEqual(toFreud("test"), "sex");
//     assert.strictEqual(toFreud("This is a test"), "sex sex sex sex");
//     assert.strictEqual(toFreud("This is a longer test"), "sex sex sex sex sex");
//     assert.strictEqual(toFreud("You're becoming a true freudian expert"), "sex sex sex sex sex sex");
//   });
// });

    // ******MY ANSWER********

function toFreud(s) {
return s.length===0?s:s.split(' ').map(a=>'sex').join(' ')
}