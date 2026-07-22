    // CHALLENGE NAME-  Find the position!

    // DESCRIPTION:

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

//     // ***STARTER CODE***

// function position(letter){
//   //Write your own Code!
// }    

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(position("a"),"Position of alphabet: 1");
//     assert.strictEqual(position("z"),"Position of alphabet: 26");
//     assert.strictEqual(position("e"),"Position of alphabet: 5");
//   });
// });

    // ******MY ANSWER********

function position(letter){
 let res='abcdefghijklmnopqrstuvwxyz'
 return `Position of alphabet: ${res.indexOf(letter)+1}` 
  //Write your own Code!
}