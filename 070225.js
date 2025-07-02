  // CHALLENGE NAME-  Sentence Smash

    // DESCRIPTION:

//     Write a function that takes an array of words and smashes 
//     them together into a sentence and returns the sentence. You 
//     can ignore any need to sanitize words or add punctuation, but 
//     you should add spaces between each word. Be careful, there 
//     shouldn't be a space at the beginning or the end of the sentence!

//     Example

//     ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this
//      is great'

//     Assumptions
// You can assume that you are only given words.
// You cannot assume the size of the array.
// You can assume that you do get an array.

//     // ***STARTER CODE***

//     function smash (words) {
//         return ""
//      };    

//     //   ******TEST CASES*****
    
//     const chai = require("chai");
//     const assert = chai.assert;
//     chai.config.truncateThreshold=0;
    
//     describe("smash", () =>  {
    
//       it ("Should return empty string for empty array.", () => {
//         assert.strictEqual(smash([]), "");
//       });
    
//       it ("One word example should return the word.", () => {
//         assert.strictEqual(smash(["hello"]), "hello");
//       });
        
//       it ("Multiple words should be separated by spaces.", () =>  {
//         assert.strictEqual(smash(["hello", "world"]), "hello world");
//         assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
//         assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
//       });
//     });

    // ******MY ANSWER********

    function smash (w) {
        return w.join(' ')
     };