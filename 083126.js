    // CHALLENGE NAME-  Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

    // DESCRIPTION:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

// Examples
// "Hi!" --> "H!!"
// "!Hi! Hi!" --> "!H!! H!!"
// "aeiou" --> "!!!!!"
// "ABCDE" --> "!BCD!"

//     // ***STARTER CODE***

//  function replace(s) {
//   //coding and coding....
//     return '';
// }   

//     //   ******TEST CASES*****
    
// describe("Basic Tests", function () {
//     it("It should work for sample tests", function () {
//         doTest("Hi!", "H!!");
//         doTest("!Hi! Hi!", "!H!! H!!");
//         doTest("aeiou", "!!!!!");
//         doTest("ABCDE", "!BCD!");
//     });

//     const { assert } = require('chai');

//     function doTest(input, expected) {
//         const message = `for s = ${JSON.stringify(input)}\n`;
//         const actual = replace(input);
//         assert.strictEqual(actual, expected, message);
//     }
// });

    // ******MY ANSWER********

const replace = w => (w.split('').map(e => 'aeiou'.includes(e.toLowerCase()) ? '!' : e)).join('');