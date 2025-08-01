  // CHALLENGE NAME-  Capitalization and Mutability

    // DESCRIPTION:

    // Your coworker was supposed to write a simple helper function 
    // to capitalize a string (that contains a single word) before 
    // they went on vacation.

    // Unfortunately, they have now left and the code they gave you 
    // doesn't work. Fix the helper function they wrote so that it 
    // works as intended (i.e. it must make the first character in 
    //     the string upper case).
    
    // The string will always start with a letter and will never be 
    // empty.
    
    // Examples:
    
    // "hello" --> "Hello"
    // "Hello" --> "Hello" (the first letter was already capitalized)
    // "a"     --> "A"

    // // ***STARTER CODE***

    // function capitalizeWord(word) {
    //     word[0].toUpperCase();
    //     return word;
    //   }   

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Tests", () => {
    //   it("test", () => {
    // Test.assertSimilar(capitalizeWord('word'), 'Word');
    // Test.assertSimilar(capitalizeWord('i'), 'I');
    // Test.assertSimilar(capitalizeWord('glasswear'), 'Glasswear');
    //   });
    // });

    // ******MY ANSWER********

    function capitalizeWord(word) {
        return word[0].toUpperCase()+ word.slice(1)
      
      //   ***alt answer 2****
      //   return `${word[0].toUpperCase()}${word.slice(1)}`
      }