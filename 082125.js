  // CHALLENGE NAME-  Crash Override

    // DESCRIPTION:

//     Your task is to create a function that, given a proper first and last name, will return the correct alias.

//     Notes:
//     Two objects that return a one word name in response to the first letter of the first name and one for the first letter of the surname are already given. See the examples below for further details.
    
//     If the first character of either of the names given to the function is not a letter from A - Z, you should return "Your name must start with a letter from A - Z."
    
//     Sometimes people might forget to capitalize the first letter of their name so your function should accommodate for these grammatical errors.
    
//     Examples

// // These two objects are preloaded, you need to use them in your code
// var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache' ...}
// var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst' ...}

// aliasGen('Larry', 'Brentwood') === 'Logic Bomb'
// aliasGen('123abc', 'Petrovic') === 'Your name must start with a letter from A - Z.'

//     // ***STARTER CODE***

//     function aliasGen(first, last){
//         // Code Here
//     }    

//     //   ******TEST CASES*****
    
//     const { assert } = require('chai');

//     describe("Tests", () => {
//       it("test", () => {
//         assert.strictEqual(aliasGen("Mike", "Millington"), "Malware Mike");
//         assert.strictEqual(aliasGen("Fahima", "Tash"), "Function T-Rex");
//         assert.strictEqual(aliasGen("Daisy", "Petrovic"), "Data Payload");
//         assert.strictEqual(aliasGen("7393424", "Anumbha"), "Your name must start with a letter from A - Z.");
//         assert.strictEqual(aliasGen("Anuddanumbha", "23200"), "Your name must start with a letter from A - Z.");
//       });
//     });

    // ******MY ANSWER********

    function aliasGen(first, last){
        let a = first[0].toUpperCase();
        let b = last[0].toUpperCase();
        
        if (!isNaN(a) || !isNaN (b)) {
          return "Your name must start with a letter from A - Z.";
        }
        return `${firstName[a]} ${surname[b]}`;
        
      }

    //   ****answer came from the solutions***