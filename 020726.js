  // CHALLENGE NAME-  Crash Override

    // DESCRIPTION:

// Your task is to create a function that, given a proper first 
// and last name, will return the correct alias.

// Notes:
// Two objects that return a one word name in response to the 
// first letter of the first name and one for the first letter
//  of the surname are already given. See the examples below 
//  for further details.

// If the first character of either of the names given to the
//  function is not a letter from A - Z, you should return 
//  "Your name must start with a letter from A - Z."

// Sometimes people might forget to capitalize the first letter 
// of their name so your function should accommodate for these 
// grammatical errors.

//     // ***STARTER CODE***

//  function aliasGen(first, last){
//     // Code Here
// }   

//     //   ******TEST CASES*****
    
// const { assert } = require('chai');

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(aliasGen("Mike", "Millington"), "Malware Mike");
//     assert.strictEqual(aliasGen("Fahima", "Tash"), "Function T-Rex");
//     assert.strictEqual(aliasGen("Daisy", "Petrovic"), "Data Payload");
//     assert.strictEqual(aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z.");
//     assert.strictEqual(aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z.");
//   });
// });

    // ******MY ANSWER********

function aliasGen(f, l){
  return f[0]===`${+f[0]}` || l[0]===`${+l[0]}`?'Your name must start with a letter from A - Z.':`${firstName[f[0].toUpperCase()]} ${surname[l[0].toUpperCase()]}`
  // Code Here
}