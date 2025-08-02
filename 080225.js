  // CHALLENGE NAME-  Alan Partridge II - Apple Turnover

    // DESCRIPTION:

    // Task
    // Your job is simple, if x squared is more than 1000, return It's 
    // hotter than the sun!!, else, return Help yourself to a honeycomb 
    // Yorkie for the glovebox.
    
    // Note: Input will either be a positive integer (or a string for 
    //     untyped languages).

    // // ***STARTER CODE***

    // function apple(x){
      
    //     }    

    // //   ******TEST CASES*****
    
    // const chai = require("chai");
    // const assert = chai.assert;
    // chai.config.truncateThreshold=0;
    
    // describe("Alan Partridge II - Apple Turnover", () => {
    //   it("Testing for fixed tests", () => {
    //     assert.strictEqual(apple('50'), 'It\'s hotter than the sun!!'); 
    //     assert.strictEqual(apple(4), 'Help yourself to a honeycomb Yorkie for the glovebox.'); 
    //   })
    // });

    // ******MY ANSWER********

    function apple(x){
        return x**2>1000?`It's hotter than the sun!!`:`Help yourself to a honeycomb Yorkie for the glovebox.`
        }