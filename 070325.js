
  // CHALLENGE NAME-  Are you Playing the Banjo

    // DESCRIPTION:

    // Create a function which answers the question "Are you playing banjo?".
    // If your name starts with the letter "R" or lower case "r", you are playing banjo!
    
    // The function takes a name as its only argument, and returns one of the following strings:
    
    // name + " plays banjo" 
    // name + " does not play banjo"
    // Names given are always valid strings.

    // // ***STARTER CODE***

    // function areYouPlayingBanjo(name) {
    //     // Implement me
    //     return name;
    //   }   

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Basic tests", () => {
    //   it("Testing for fixed tests", () => {
    //     assert.strictEqual(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
    //     assert.strictEqual(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
    //     assert.strictEqual(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
    //     assert.strictEqual(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
    //     assert.strictEqual(areYouPlayingBanjo("rolf"), "rolf plays banjo");
    //     })
    //   })

    // ******MY ANSWER********

    function areYouPlayingBanjo(n) {
        // Implement me
        return n[0].toUpperCase()=='R'?`${n} plays banjo`:`${n} does not play banjo`
      }