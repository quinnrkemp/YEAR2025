  // CHALLENGE NAME-  The Feast fo Many Beasts

    // DESCRIPTION:

    // All of the animals are having a feast! Each animal is 
    // bringing one dish. There is just one rule: the dish must 
    // start and end with the same letters as the animal's name. 
    // For example, the great blue heron is bringing garlic naan 
    // and the chickadee is bringing chocolate cake.

    // Write a function feast that takes the animal's name and 
    // dish as arguments and returns true or false to indicate 
    // whether the beast is allowed to bring the dish to the feast.
    
    // Assume that beast and dish are always lowercase strings, 
    // and that each has at least two letters. beast and dish 
    // may contain hyphens and spaces, but these will not appear 
    // at the beginning or end of the string. They will not contain 
    // numerals.

    // // ***STARTER CODE***

    // function feast(beast, dish) {
    //     //your function here
    //     }    

    // //   ******TEST CASES*****
    
    // const Test = require('@codewars/test-compat');

    // describe("Tests", () => {
    //   it("test", () => {
    // Test.assertEquals(feast("great blue heron", "garlic naan"), true)
    // Test.assertEquals(feast("chickadee", "chocolate cake"), true)
    // Test.assertEquals(feast("brown bear", "bear claw"), false)
    //   });
    // });

    // ******MY ANSWER********

    function feast(b, d) {
        return b[0]===d[0] && b.slice(-1)===d.slice(-1)
          //your function here
        }