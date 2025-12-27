  // CHALLENGE NAME-  Find the position!

    // DESCRIPTION:

// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Output :: "Position of alphabet: 1"

// Note: Only lowercased English letters are tested

//     // ***STARTER CODE***

//  function position(letter){

//     //Write your own Code!
//     }   

//     //   ******TEST CASES*****
    
// describe("Tests", () => {
//   it("test", () => {
// Test.assertEquals(position("a"),"Position of alphabet: 1");
// Test.assertEquals(position("z"),"Position of alphabet: 26");
// Test.assertEquals(position("e"),"Position of alphabet: 5");
//   });
// });

    // ******MY ANSWER********

function position(letter){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}